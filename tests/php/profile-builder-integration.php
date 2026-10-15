<?php
/**
 * Profile Builder: the student dashboard layout, its dynamic blocks and permissions.
 * Disposable WordPress database only: configured through OHMYLMS_TEST_CREDENTIALS.
 */
if (PHP_SAPI !== 'cli') { exit; }
define('WP_DISABLE_FATAL_ERROR_HANDLER', true);
$config = json_decode(file_get_contents(getenv('OHMYLMS_TEST_CREDENTIALS')), true);
$_SERVER['HTTP_HOST'] = $_SERVER['HTTP_HOST'] ?? '127.0.0.1:8099';
require $config['site'] . '/wp-load.php';
if (!defined('OHMYLMS_TEST_SITE') || DB_NAME !== 'ohmylms_source_test') { throw new RuntimeException('Requires disposable test site'); }
require_once ABSPATH . 'wp-admin/includes/user.php';

use OhMyLMS\ProfileBuilder\Blocks;
use OhMyLMS\ProfileBuilder\Defaults;
use OhMyLMS\ProfileBuilder\Layouts;
use OhMyLMS\ProfileBuilder\Sections;

$checks = 0; $users = array(); $created_layout = 0;
function ok($value, $message) { global $checks; if (!$value) { throw new RuntimeException($message); } ++$checks; }
function reset_render_state() {
    Sections::reset();
    $printed = new ReflectionProperty(OhMyLMS\Bundles\Frontend::class, 'printed'); $printed->setAccessible(true); $printed->setValue(null, false);
}
function make_user($role) {
    $id = wp_create_user('layout-' . wp_generate_password(9, false, false), wp_generate_password(24), 'layout-' . wp_generate_password(9, false, false) . '@example.invalid');
    if (is_wp_error($id)) { throw new RuntimeException('user: ' . $id->get_error_message()); }
    (new WP_User($id))->set_role($role);
    return (int) $id;
}
function squash($html) {
    // Group blocks add layout classes, and the celebration markup is printed once per request.
    $html = str_replace(array('wp-block-group ', ' is-layout-flow wp-block-group-is-layout-flow'), '', $html);
    $start = strpos($html, '<section class="oml-student-dashboard"');
    $html = false === $start ? $html : substr($html, $start);
    return trim(preg_replace('/>\s+</', '><', preg_replace('/\s+/', ' ', $html)));
}
function names($content) {
    $names = array();
    $walk = function ($blocks) use (&$walk, &$names) { foreach ($blocks as $block) { if ($block['blockName']) { $names[] = $block['blockName']; } $walk($block['innerBlocks']); } };
    $walk(parse_blocks($content));
    return $names;
}
try {
    $admin = get_user_by('login', $config['username'])->ID;
    OhMyLMS\Curriculum\Schema::install();
    $student_role = ohmylms_get_student_role();
    $student = make_user($student_role); $users[] = $student;
    $subscriber = make_user('subscriber'); $users[] = $subscriber;
    $existing = Layouts::post_id('student');

    // Blocks.
    $registry = WP_Block_Type_Registry::get_instance();
    foreach (array_keys(Sections::all()) as $key) {
        $type = $registry->get_registered('ohmylms/profile-' . $key);
        ok($type && !empty($type->supports['autoRegister']) && $type->render_callback, "block $key registered as a server-rendered block");
    }
    ok(count(Sections::all()) === 9, 'nine sections');

    // Default layout.
    $default = Defaults::content('student');
    $expected = array('greeting', 'group', 'work', 'goals', 'week', 'group', 'achievements', 'leaderboards', 'skills', 'bundles', 'memberships');
    ok(array_map(static function ($n) { return $n === 'group' ? 'core/group' : 'ohmylms/profile-' . $n; }, $expected) === names($default), 'default layout order');
    $locked = array_filter(parse_blocks($default), static function ($b) { return !empty($b['attrs']['lock']['remove']); });
    ok(count($locked) === 1 && current($locked)['blockName'] === 'ohmylms/profile-greeting', 'the greeting cannot be removed');
    ok(Defaults::content('teacher') === '', 'no layout is shipped for roles that are not built yet');

    // Storage: created once, idempotent, resettable, never deleted.
    wp_set_current_user($admin);
    $id = Layouts::ensure('student'); if (!$existing) { $created_layout = $id; }
    ok($id > 0 && Layouts::ensure('student') === $id && Layouts::post_id('student') === $id, 'one layout post per role');
    ok(get_post_type($id) === Layouts::POST_TYPE && get_post_meta($id, Layouts::META_ROLE, true) === 'student', 'layout post and role meta');
    $original = (string) get_post_field('post_content', $id);
    ok(Layouts::ensure('parent') === 0, 'unknown roles are refused');

    // Permissions. Registering the layout type must not change anything for ordinary capability checks.
    ok(user_can($admin, 'manage_options') && !user_can($student, 'manage_options'), 'manage_options still resolves normally');
    ok(current_user_can('edit_post', $id) && !current_user_can('delete_post', $id), 'administrators edit but cannot delete a layout');
    wp_set_current_user($student);
    ok(!current_user_can('edit_post', $id) && !current_user_can('read_post', $id), 'learners cannot edit or read the layout post');
    $denied = rest_do_request(new WP_REST_Request('GET', '/wp/v2/ohmylms_profile/' . $id));
    ok(in_array($denied->get_status(), array(401, 403), true), 'learners cannot read the layout over REST');
    wp_set_current_user(0);
    $nonce_less = rest_do_request(new WP_REST_Request('POST', '/wp/v2/ohmylms_profile/' . $id));
    ok(in_array($nonce_less->get_status(), array(401, 403), true), 'guests cannot change the layout');

    // Rendering: guests get nothing, learners get the sections.
    reset_render_state();
    ok(Sections::render('week') === '' && strpos(Layouts::render('student'), 'oml-dashboard-work') === false, 'guests see no sections');
    wp_set_current_user($student);
    reset_render_state();
    $html = Layouts::render('student');
    foreach (array('oml-dashboard-greeting', 'oml-dashboard-work', 'oml-dashboard-aside', 'oml-progress-heading', 'oml-dashboard-bottom-grid') as $marker) {
        ok(strpos($html, $marker) !== false, "default layout renders $marker");
    }
    ok(strpos($html, 'oml-dashboard-main-grid') !== false, 'the grid wrappers come from group blocks');

    // The refactor changed no markup: the previous monolithic template and the section layout agree.
    $old = sys_get_temp_dir() . '/old-student-dashboard-' . wp_generate_password(6, false, false) . '.php';
    $source = shell_exec('git -C ' . escapeshellarg(OHMYLMS_DIR) . ' show 45446a4:templates/profile/student-dashboard.php');
    if (is_string($source) && trim($source) !== '' && strpos($source, 'oml-dashboard-main-grid') !== false) {
        file_put_contents($old, $source);
        $student_object = ohmylms_get_student($student);
        reset_render_state(); ob_start(); (static function ($student, $file) { include $file; })($student_object, $old); $before = ob_get_clean(); @unlink($old);
        reset_render_state(); ob_start(); ohmylms_get_template('profile/student-dashboard.php', array('student' => $student_object)); $after = ob_get_clean();
        if (squash($before) !== squash($after)) { $dump = sys_get_temp_dir() . '/profile-builder-parity'; file_put_contents($dump . '-before.html', str_replace('><', ">
<", squash($before))); file_put_contents($dump . '-after.html', str_replace('><', ">
<", squash($after))); }
        ok(squash($before) === squash($after), 'the builder renders the same dashboard as the template it replaced (compare ' . sys_get_temp_dir() . '/profile-builder-parity-*.html)');
    }

    // A saved layout is what renders; an empty or unpublished one falls back to the default.
    wp_set_current_user($admin);
    wp_update_post(array('ID' => $id, 'post_content' => Defaults::content('student') ? '<!-- wp:ohmylms/profile-week /-->' : ''));
    wp_set_current_user($student); reset_render_state();
    $only = Layouts::render('student');
    ok(strpos($only, 'oml-progress-heading') !== false && strpos($only, 'oml-dashboard-work') === false, 'a saved layout controls which sections appear');
    wp_set_current_user($admin);
    wp_update_post(array('ID' => $id, 'post_content' => '   '));
    ok(Layouts::content('student') === $default, 'an empty layout falls back to the default');
    wp_update_post(array('ID' => $id, 'post_status' => 'draft', 'post_content' => '<!-- wp:ohmylms/profile-week /-->'));
    ok(Layouts::content('student') === $default, 'an unpublished layout is not used');
    ok(Layouts::reset('student') && Layouts::content('student') === $default && get_post_status($id) === 'private', 'reset restores the shipped layout and makes it active');

    // Block restrictions and the editor preview.
    $post_context = (object) array('post' => (object) array('post_type' => 'post'));
    $layout_context = (object) array('post' => (object) array('post_type' => Layouts::POST_TYPE));
    $others = Blocks::limit_to_layouts(true, $post_context);
    ok(is_array($others) && !in_array('ohmylms/profile-week', $others, true) && in_array('core/paragraph', $others, true), 'profile blocks are hidden outside layouts');
    ok(Blocks::limit_to_layouts(true, $layout_context) === true, 'all blocks stay available inside layouts');
    wp_set_current_user($admin);
    $preview = new WP_REST_Request('GET', '/wp/v2/block-renderer/ohmylms/profile-week');
    $preview->set_query_params(array('context' => 'edit', 'post_id' => $id));
    $result = rest_do_request($preview);
    ok($result->get_status() === 200 && strpos($result->get_data()['rendered'], 'How am I doing?') !== false, 'the editor can preview a section');
    wp_set_current_user($subscriber);
    $preview = new WP_REST_Request('GET', '/wp/v2/block-renderer/ohmylms/profile-week');
    $preview->set_query_params(array('context' => 'edit', 'post_id' => $id));
    ok(in_array(rest_do_request($preview)->get_status(), array(401, 403), true), 'only editors can use the preview endpoint');
} finally {
    wp_set_current_user($admin ?? 0);
    if ($created_layout) { remove_filter('map_meta_cap', array(Layouts::class, 'protect'), 10); wp_delete_post($created_layout, true); }
    elseif (isset($id, $original) && $id) { wp_update_post(array('ID' => $id, 'post_status' => 'private', 'post_content' => $original)); }
    foreach ($users as $user) { wp_delete_user($user); }
}
echo "$checks profile builder checks passed.\n";
