<?php
namespace OhMyLMS\Schools;

defined('ABSPATH') || exit;

final class Controller {
    public static function register() {
        $routes = [
            '/classes' => 'GET,POST', '/me' => 'GET', '/users' => 'GET,POST', '/users/(?P<id>\d+)' => 'GET,POST', '/register' => 'POST', '/accept' => 'POST',
            '/schools' => 'GET,POST', '/children' => 'GET', '/work' => 'GET', '/courses' => 'GET',
            '/schools/(?P<school>\d+)/(?P<section>years|classes|roster|students|invitations|guardians|report|import|rollover)' => 'GET,POST',
            '/schools/(?P<school>\d+)/(?P<section>members|invitations|guardians)/(?P<id>\d+)' => 'DELETE',
            '/classes/(?P<class>\d+)/(?P<section>members|assignments|submissions|archive)' => 'GET,POST',
            '/assignments/(?P<learning>\d+)/submissions/(?P<attempt>\d+)' => 'POST',
            '/courses/(?P<course>\d+)/activities' => 'GET',
        ];
        foreach ($routes as $route => $methods) {
            register_rest_route('ohmylms/v1', '/school' . $route, [
                'methods' => $methods, 'permission_callback' => function ($request) {
                    if (in_array($request->get_route(), ['/ohmylms/v1/school/register', '/ohmylms/v1/school/accept'], true)) {
                        return wp_verify_nonce($request->get_header('X-WP-Nonce'), 'wp_rest') ? true : new \WP_Error('ohmylms_nonce', 'Refresh the page and try again.', ['status' => 403]);
                    }
                    return is_user_logged_in() ? true : new \WP_Error('ohmylms_login', 'Please sign in.', ['status' => 401]);
                }, 'callback' => [self::class, 'dispatch'],
            ]);
        }
    }
    public static function dispatch($request) {
        try {
            $result = self::handle($request);
            $response = rest_ensure_response($result);
            $response->header('Cache-Control', 'private, no-store');
            return $response;
        } catch (\Throwable $error) {
            $status = in_array($error->getCode(), [400, 403, 404, 409, 429], true) ? $error->getCode() : 500;
            if ($status === 500) { error_log('[OhMyLMS schools] ' . $error->getMessage()); }
            return new \WP_Error('ohmylms_school_error', $status === 500 ? 'Unable to complete the request. Please try again.' : $error->getMessage(), ['status' => $status]);
        }
    }
    private static function rate_limit($purpose) {
        $key = 'ohmylms_' . $purpose . '_' . hash_hmac('sha256', $_SERVER['REMOTE_ADDR'] ?? 'local', wp_salt('nonce'));
        $attempts = (int) get_transient($key);
        if ($attempts >= 15) { throw new \RuntimeException('Too many attempts. Please try again in 15 minutes.', 429); }
        set_transient($key, $attempts + 1, 15 * MINUTE_IN_SECONDS);
    }
    private static function signup($data) {
        self::rate_limit('school_signup');
        Service::need(!is_user_logged_in(), 'You are already signed in.');
        Service::need(empty($data['website']), 'Unable to create this account.');
        $role = $data['role'] ?? 'student';
        Service::need(in_array($role, ['student', 'parent'], true), 'Public registration is for students and parents only. Staff must accept an invitation.');
        $email = sanitize_email($data['email'] ?? ''); $password = (string) ($data['password'] ?? '');
        Service::need(is_email($email) && !email_exists($email), 'Use a valid unused email, or sign in to your existing account.');
        Service::need(strlen($password) >= 12 && strlen($password) <= 128, 'Use a password between 12 and 128 characters.');
        $student_role = function_exists('ohmylms_get_assignable_student_role') ? ohmylms_get_assignable_student_role() : 'subscriber';
        $id = wp_insert_user(['user_login' => 'learner-' . strtolower(wp_generate_password(16, false)), 'user_email' => $email, 'user_pass' => $password, 'first_name' => Service::text($data['first_name'] ?? ''), 'last_name' => Service::text($data['last_name'] ?? ''), 'display_name' => trim(Service::text($data['first_name'] ?? '') . ' ' . Service::text($data['last_name'] ?? '')) ?: __('Learner', 'ohmylms'), 'role' => $role === 'parent' ? 'ohmylms_parent' : $student_role]);
        if (is_wp_error($id)) { throw new \RuntimeException($id->get_error_message(), 400); }
        if (\OhMyLMS\Services\EmailVerificationService::is_required() || $role === 'parent') { \OhMyLMS\Services\EmailVerificationService::generate_and_send($id); }
        Service::audit(0, 'account_created', $id);
        return ['success' => true, 'message' => 'Account created. Check your inbox for verification if requested, then sign in. No course enrollment or order was created.', 'login_url' => wp_login_url(Views::portal_url())];
    }
    private static function create_account($data) {
        Access::require_access(current_user_can('create_users'));
        $role = sanitize_key($data['role'] ?? '');
        Service::need(in_array($role, ['student', 'teacher', 'parent'], true), 'Choose student, teacher or parent.');
        $email = sanitize_email($data['email'] ?? '');
        Service::need(is_email($email) && !email_exists($email), 'Use a valid email that is not already registered.');
        $first = Service::text($data['first_name'] ?? ''); $last = Service::text($data['last_name'] ?? '');
        Service::need($first !== '', 'A first name is required.');
        $login = sanitize_user($data['username'] ?? '', true) ?: sanitize_user(strstr($email, '@', true), true);
        $base = $login ?: 'user'; $login = $base;
        for ($i = 2; username_exists($login); $i++) { $login = $base . $i; }
        $roles = ['student' => function_exists('ohmylms_get_assignable_student_role') ? ohmylms_get_assignable_student_role() : 'subscriber', 'teacher' => 'ohmylms_teacher', 'parent' => 'ohmylms_parent'];
        $id = wp_insert_user(['user_login' => $login, 'user_email' => $email, 'user_pass' => wp_generate_password(24), 'first_name' => $first, 'last_name' => $last, 'display_name' => trim($first . ' ' . $last), 'role' => $roles[$role]]);
        if (is_wp_error($id)) { throw new \RuntimeException($id->get_error_message(), 400); }
        // The new user sets their own password through the standard WordPress link.
        if (!empty($data['send_email'])) { wp_new_user_notification($id, null, 'user'); }
        Service::audit(0, 'account_created_by_admin', $id);
        return ['id' => $id, 'username' => $login, 'message' => __('Account created.', 'ohmylms')];
    }
    private static function account($id, $data = null) {
        $user = get_userdata($id);
        Access::require_access($user && current_user_can('edit_user', $id));
        if ($data !== null) {
            $email = sanitize_email($data['email'] ?? '');
            $other = email_exists($email);
            Service::need(is_email($email) && (!$other || (int) $other === $id), 'Use a valid email that is not used by another account.');
            $first = Service::text($data['first_name'] ?? '');
            Service::need($first !== '', 'A first name is required.');
            $last = Service::text($data['last_name'] ?? '');
            $updated = wp_update_user(['ID' => $id, 'user_email' => $email, 'first_name' => $first, 'last_name' => $last, 'display_name' => trim($first . ' ' . $last)]);
            if (is_wp_error($updated)) { throw new \RuntimeException($updated->get_error_message(), 400); }
            if (!empty($data['send_reset']) && current_user_can('edit_user', $id)) { retrieve_password($user->user_login); }
            Service::audit(0, 'account_updated_by_admin', $id);
            return ['id' => $id, 'message' => __('Account updated.', 'ohmylms')];
        }
        return ['id' => $id, 'first_name' => $user->first_name, 'last_name' => $user->last_name, 'email' => $user->user_email, 'username' => $user->user_login];
    }
    private static function handle($r) {
        global $wpdb;
        $route = $r->get_route(); $write = $r->get_method() === 'POST'; $data = $r->get_json_params() ?: $r->get_body_params();
        $school = absint($r['school']); $class = absint($r['class']); $id = absint($r['id']); $section = $r['section']; $page = max(1, absint($r['page']));
        if ($route === '/ohmylms/v1/school/register') { return self::signup($data); }
        if (preg_match('#^/ohmylms/v1/school/users/\d+$#', $route)) { return self::account($id, $write ? $data : null); }
        if ($route === '/ohmylms/v1/school/users' && $write) { return self::create_account($data); }
        if ($route === '/ohmylms/v1/school/users') {
            Access::require_access(current_user_can('list_users'));
            $search = Service::text($r['search'] ?? '');
            $filter = sanitize_key($r['role'] ?? ''); $extra = [];
            Service::need(in_array($filter, ['', 'teacher', 'parent'], true), 'Invalid account filter.');
            if ($filter) {
                $ids = get_users(['role' => 'ohmylms_' . $filter, 'fields' => 'ID', 'number' => -1]);
                if ($filter === 'teacher') {
                    $m = Schema::table('school_memberships');
                    $ids = array_merge($ids, $wpdb->get_col("SELECT user_id FROM $m WHERE role='teacher' AND status='active'"));
                } else {
                    $g = Schema::table('guardian_links');
                    $ids = array_merge($ids, $wpdb->get_col("SELECT guardian_user_id FROM $g WHERE status='active'"));
                }
                $extra['include'] = array_unique(array_map('intval', $ids)) ?: [0];
            }
            $query = new \WP_User_Query(array_merge($extra, ['number' => 50, 'paged' => $page, 'orderby' => 'display_name', 'order' => 'ASC', 'search' => $search !== '' ? '*' . $search . '*' : '', 'search_columns' => ['user_login', 'user_email', 'display_name']]));
            return array_map(function ($user) {
                return ['id' => $user->ID, 'display_name' => $user->display_name, 'user_login' => $user->user_login, 'email' => $user->user_email, 'created_at' => $user->user_registered, 'avatar' => get_avatar_url($user->ID), 'last_login' => get_user_meta($user->ID, '_ohmylms_last_login', true), 'is_banned' => (bool) get_user_meta($user->ID, '_ohmylms_banned_student', true), 'roles' => implode(', ', array_map(function ($role) { return translate_user_role(wp_roles()->roles[$role]['name'] ?? $role); }, $user->roles)), 'edit_url' => current_user_can('edit_user', $user->ID) ? get_edit_user_link($user->ID) : ''];
            }, $query->get_results());
        }
        if ($route === '/ohmylms/v1/school/accept') { self::rate_limit('school_invite'); return Service::accept($data['token'] ?? '', (string) ($data['password'] ?? '')); }
        if ($route === '/ohmylms/v1/school/me') {
            $m = Schema::table('school_memberships');
            return ['user_id' => get_current_user_id(), 'name' => wp_get_current_user()->display_name, 'platform_admin' => Access::platform(), 'can_create_class' => Access::teacher(), 'can_list_users' => current_user_can('list_users'), 'memberships' => $wpdb->get_results($wpdb->prepare("SELECT school_id,role FROM $m WHERE user_id=%d AND status='active'", get_current_user_id()), ARRAY_A)];
        }
        if ($route === '/ohmylms/v1/school/classes') { return $write ? Service::create_class(0, $data) : Service::classes(0, $page); }
        if ($route === '/ohmylms/v1/school/schools') { return $write ? Service::create_school($data) : Service::schools($page); }
        if ($route === '/ohmylms/v1/school/children') { return Service::children(); }
        if ($route === '/ohmylms/v1/school/work') { return Service::assignments(0, absint($r['student']), absint($r['school_id']), $page, absint($r['class_id'])); }
        if ($route === '/ohmylms/v1/school/courses') {
            Access::require_access($r['class_id'] && Access::classroom(absint($r['class_id']), true));
            $posts = get_posts(['post_type' => OHMYLMS_COURSE_CPT, 'post_status' => 'publish', 'posts_per_page' => 50, 'paged' => $page, 's' => Service::text($r['search'] ?? '')]);
            return array_map(function ($post) { return ['id' => $post->ID, 'title' => $post->post_title]; }, $posts);
        }
        if ($r['course']) {
            Access::require_access($r['class_id'] && Access::classroom(absint($r['class_id']), true));
            $course = get_post(absint($r['course']));
            Service::need($course && $course->post_type === OHMYLMS_COURSE_CPT && $course->post_status === 'publish', 'Course not available.');
            $rel = Schema::table('content_relationship'); $chapters = Schema::table('chapter_relationship');
            return $wpdb->get_results($wpdb->prepare("SELECT DISTINCT p.ID AS id,p.post_title AS title FROM $rel r JOIN $chapters c ON c.chapter_id=r.chapter_id JOIN {$wpdb->posts} p ON p.ID=r.content_id WHERE c.course_id=%d ORDER BY p.post_title LIMIT 200", $course->ID), ARRAY_A);
        }
        if ($write && $r['learning'] && $r['attempt']) { return Service::grade(absint($r['learning']), absint($r['attempt']), $data); }
        if ($r->get_method() === 'DELETE') {
            if ($section === 'members') { return Service::remove_member($school, $id); }
            if ($section === 'invitations') { return Service::revoke_invite($school, $id); }
            if ($section === 'guardians') { return Service::revoke_guardian($school, $id); }
        }
        if ($class) {
            if ($section === 'members') {
                if ($write) { return Service::class_member($class, $data); }
                $record = Access::classroom($class); Access::require_access($record);
                return Service::roster((int) $record['school_id'], $class, $page, Service::text($r['search'] ?? ''));
            }
            if ($section === 'assignments') { return $write ? Service::create_assignment($class, $data) : Service::assignments($class, 0, 0, $page); }
            if ($section === 'submissions' && !$write) { return Service::submissions($class); }
            if ($section === 'archive' && $write) { return Service::archive_class($class); }
        }
        if ($school) {
            switch ($section) {
                case 'years': return $write ? Service::create_year($school, $data) : Service::years($school);
                case 'classes': return $write ? Service::create_class($school, $data) : Service::classes($school, $page);
                case 'roster': if (!$write) { return Service::roster($school, 0, $page, Service::text($r['search'] ?? '')); } break;
                case 'students': if ($write) { return Service::create_student($school, $data); } break;
                case 'invitations': return $write ? Service::invite($school, $data) : Service::invitations($school);
                case 'guardians': if (!$write) { return Service::guardians($school); } break;
                case 'report': if (!$write) { return Service::report($school); } break;
                case 'import': if ($write) { return Service::import_roster($school, $data); } break;
                case 'rollover': if ($write) { return Service::rollover($school, $data); } break;
            }
        }
        throw new \RuntimeException('Route not found.', 404);
    }
}
