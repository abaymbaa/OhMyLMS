<?php
namespace OMLMS\Schools;

defined('ABSPATH') || exit;

final class Bootstrap {
    public static function init() {
        // Internal rollback switch; all features ship in the same OhMyLMS product.
        if (defined('OMLMS_SCHOOLS_ENABLED') && !OMLMS_SCHOOLS_ENABLED) { return; }
        add_action('init', [Schema::class, 'install'], 6);
        add_action('rest_api_init', [Controller::class, 'register']);
        add_action('init', [Views::class, 'blocks'], 20);
        add_action('admin_menu', [Views::class, 'menu']);
        add_action('creator_lms_course_completed', [Service::class, 'course_completed'], 20, 2);
        add_action('creator_lms_lesson_completed', [Service::class, 'content_completed'], 20, 3);
        add_action('wp_enqueue_scripts', [Views::class, 'assets']);
        add_action('admin_enqueue_scripts', [Views::class, 'assets']);
        add_action('omlms_lms_student_profile_after_dashboard_content', [Views::class, 'dashboard_link']);
    }
}
