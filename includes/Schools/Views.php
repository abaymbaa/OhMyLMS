<?php
namespace OhMyLMS\Schools;

defined('ABSPATH') || exit;

final class Views {
    public static function portal_url() { return add_query_arg('ohmylms_portal', '1', home_url('/')); }
    public static function dashboard_link() {
        if (!is_user_logged_in()) { return; }
        echo '<p class="ohmylms-school-shortcut"><a href="' . esc_url(self::portal_url()) . '">' . esc_html__('Open school assignments and family learning', 'ohmylms') . '</a></p>';
    }
    public static function standalone_assets() {
        // This standalone document has no theme widgets, checkout, or page-builder content.
        // WordPress resolves the school entry's dependency tree even when dependencies
        // are not explicitly queued, so core React/i18n remain available.
        // Some installed plugins print inline jQuery in wp_head/wp_footer without
        // declaring a script handle. Preserve this core dependency for those hooks.
        wp_enqueue_script('jquery');
        foreach (wp_scripts()->queue as $handle) {
            if (!in_array($handle, ['ohmylms-schools', 'jquery'], true)) { wp_dequeue_script($handle); }
        }
        foreach (wp_styles()->queue as $handle) {
            if ($handle !== 'ohmylms-schools') { wp_dequeue_style($handle); }
        }
    }
    public static function assets() {
        $asset = OHMYLMS_DIR . '/build/sdk/schools.asset.php';
        if (!is_file($asset)) { return; }
        $meta = require $asset;
        wp_register_script('ohmylms-schools', plugins_url('build/sdk/schools.js', OHMYLMS_FILE), $meta['dependencies'], $meta['version'], true);
        wp_register_style('ohmylms-schools', plugins_url('assets/schools/schools.css', OHMYLMS_FILE), [], filemtime(OHMYLMS_DIR . '/assets/schools/schools.css'));
        if (is_admin() && in_array($_GET['page'] ?? '', ['ohmylms-schools', OHMYLMS_SLUG], true)) { wp_enqueue_style('ohmylms-schools'); }
    }
    public static function blocks() {
        wp_register_script('ohmylms-school-blocks', plugins_url('assets/schools/blocks.js', OHMYLMS_FILE), ['wp-blocks', 'wp-element', 'wp-i18n'], filemtime(OHMYLMS_DIR . '/assets/schools/blocks.js'), true);
        foreach (['student-registration', 'parent-registration', 'school-dashboard', 'teacher-dashboard', 'parent-dashboard', 'student-assignments'] as $kind) {
            register_block_type('ohmylms/' . $kind, ['api_version' => 2, 'editor_script' => 'ohmylms-school-blocks', 'render_callback' => function () use ($kind) { return self::render($kind); }]);
            add_shortcode('ohmylms_' . str_replace('-', '_', $kind), function () use ($kind) { return self::render($kind); });
        }
        add_action('template_redirect', [self::class, 'portal']);
    }
    public static function redirect_management() {
        if (($_GET['page'] ?? '') !== 'ohmylms-schools' || !current_user_can('manage_options')) { return; }
        $tab = sanitize_key($_GET['tab'] ?? 'schools');
        if (!in_array($tab, ['students', 'teachers', 'parents', 'users', 'classes', 'schools'], true)) { $tab = 'schools'; }
        wp_safe_redirect(admin_url('admin.php?page=' . OHMYLMS_SLUG) . '#/students' . ($tab === 'students' ? '' : '?tab=' . $tab));
        exit;
    }
    public static function menu() {
        if (($_GET['page'] ?? '') === 'ohmylms-schools') {
            add_filter('parent_file', function () { return OHMYLMS_SLUG; });
            add_filter('submenu_file', function () { return 'admin.php?page=' . OHMYLMS_SLUG . '#/students'; });
        }
        add_submenu_page(null, __('Students', 'ohmylms'), __('Students', 'ohmylms'), 'read', 'ohmylms-schools', function () { echo '<div class="wrap"><hr class="wp-header-end">' . self::render('admin-management') . '</div>'; });
    }
    public static function render($kind) {
        if (!defined('DONOTCACHEPAGE')) { define('DONOTCACHEPAGE', true); }
        self::assets();
        wp_enqueue_script('ohmylms-schools'); wp_enqueue_style('ohmylms-schools');
        static $configured = false;
        if (!$configured) {
            $config = ['api' => rest_url('ohmylms/v1/school/'), 'nonce' => wp_create_nonce('wp_rest'), 'loggedIn' => is_user_logged_in(), 'loginUrl' => wp_login_url(self::portal_url()), 'logoutUrl' => wp_logout_url(self::portal_url()), 'portalUrl' => self::portal_url(), 'googleUrl' => \OhMyLMS\Services\GoogleAuthService::is_configured() ? add_query_arg('redirect_to', self::portal_url(), rest_url('ohmylms/v1/auth/google')) : ''];
            if (is_admin()) {
                $config['usersUrl'] = current_user_can('create_users') ? admin_url('user-new.php') : '';
                $config['studentsUrl'] = current_user_can('manage_options') ? admin_url('admin.php?page=' . OHMYLMS_SLUG . '#/students') : '';
            }
            if ($config['googleUrl'] && is_user_logged_in()) { $config['googleUrl'] = add_query_arg('_wpnonce', wp_create_nonce('wp_rest'), $config['googleUrl']); }
            wp_add_inline_script('ohmylms-schools', 'window.ohmylmsSchools=' . wp_json_encode($config, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) . ';', 'before');
            $configured = true;
        }
        return '<div class="ohmylms-schools" data-ohmylms-school-view="' . esc_attr($kind) . '"><p>' . esc_html__('Loading OhMyLMS…', 'ohmylms') . '</p></div>';
    }
    public static function portal() {
        if (isset($_GET['ohmylms_school_file'])) {
            try {
                Access::require_access(is_user_logged_in() && wp_verify_nonce($_GET['_wpnonce'] ?? '', 'ohmylms_school_file'));
                [, $attempt] = Service::submission_scope(absint($_GET['learning_id'] ?? 0), absint($_GET['ohmylms_school_file']));
                $files = maybe_unserialize($attempt['files']);
                $file = is_array($files) && !empty($files['file']) ? realpath($files['file']) : false;
                $uploads = wp_upload_dir(); $root = realpath($uploads['basedir']);
                Access::require_access($file && $root && strpos(wp_normalize_path($file), trailingslashit(wp_normalize_path($root))) === 0 && is_file($file));
                nocache_headers(); header('Content-Type: application/octet-stream'); header('X-Content-Type-Options: nosniff');
                header('Content-Disposition: attachment; filename="' . sanitize_file_name(basename($file)) . '"');
                readfile($file); exit;
            } catch (\Throwable $error) { wp_die(esc_html__('You cannot download this submission.', 'ohmylms'), '', ['response' => 403]); }
        }
        if (!isset($_GET['ohmylms_portal'])) { return; }
        show_admin_bar(false);
        // JetFormBuilder's journey recorder emits inline hooks even when there is
        // no Jet form (and therefore no JetPlugins runtime) on the page.
        // This standalone portal has only OhMyLMS forms; leave normal pages alone.
        if (class_exists('JFB_Modules\\User_Journey\\Module')) {
            remove_action('wp_footer', [\JFB_Modules\User_Journey\Module::instance(), 'enqueue_journey_script']);
        }
        add_action('wp_enqueue_scripts', [self::class, 'standalone_assets'], PHP_INT_MAX);
        nocache_headers(); header('Referrer-Policy: no-referrer'); header('X-Robots-Tag: noindex');
        // Enqueue before wp_head so styles render in the document head.
        $body = self::render('school-dashboard');
        ?><!doctype html><html <?php language_attributes(); ?>><head><meta charset="<?php bloginfo('charset'); ?>"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="referrer" content="no-referrer"><title><?php esc_html_e('OhMyLMS Learning Portal', 'ohmylms'); ?></title><?php wp_head(); ?></head><body <?php body_class('ohmylms-school-portal'); ?>><?php wp_body_open(); ?><main><?php echo $body; ?></main><?php wp_footer(); ?></body></html><?php
        exit;
    }
}
