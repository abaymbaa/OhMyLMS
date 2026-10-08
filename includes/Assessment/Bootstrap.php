<?php
namespace OhMyLMS\Assessment;

use OhMyLMS\QuestionBank\Usage;
use OhMyLMS\Skills\Taxonomy;

defined('ABSPATH') || exit;

/** Wires the question bank, versioned assessment, skills and practice services. */
final class Bootstrap {
    public static function init() {
        PreviewPlayer::init();
        add_action('init', [Taxonomy::class, 'register'], 4);
        add_action('init', [Usage::class, 'register_status'], 4);
        add_action('before_delete_post', [Usage::class, 'on_deleted_post']);
        add_action('init', [Schema::class, 'install'], 6);
        add_action('init', [Migration::class, 'maybe_schedule'], 30);
        add_action(Migration::HOOK, [Migration::class, 'run_scheduled']);
        add_filter('cron_schedules', [Deadlines::class, 'schedules']);
        add_action('init', [Deadlines::class, 'schedule'], 31);
        add_action('ohmylms_finalize_attempts', [Deadlines::class, 'finalize_due']);
        add_filter('ohmylms_attempt_extra_seconds', [AssessmentSettings::class, 'extra_seconds'], 10, 3);
        add_action('wp_enqueue_scripts', [Delivery::class, 'enqueue']);
        // Skill evidence: processed at the end of grading requests, with WP-Cron as the durable fallback.
        add_filter('cron_schedules', [\OhMyLMS\Skills\Evidence::class, 'schedules']);
        add_action('init', [\OhMyLMS\Skills\Evidence::class, 'schedule'], 31);
        add_action('ohmylms_process_evidence', static function () {
            \OhMyLMS\Skills\Evidence::process(500);
            \OhMyLMS\Skills\Mastery::refresh_reviews();
        });
        foreach (['ohmylms_attempt_submitted', 'ohmylms_attempt_graded', 'ohmylms_answer_regraded'] as $hook) {
            add_action($hook, [\OhMyLMS\Skills\Evidence::class, 'soon']);
        }
        // Guest practice and inline checks.
        add_action('init', static function () { if (!wp_next_scheduled('ohmylms_guest_cleanup')) { wp_schedule_event(time() + HOUR_IN_SECONDS, 'daily', 'ohmylms_guest_cleanup'); } }, 31);
        add_action('ohmylms_guest_cleanup', [\OhMyLMS\Practice\Guests::class, 'cleanup']);
        add_action('ohmylms_register_extensions', [\OhMyLMS\Practice\Inline::class, 'register']);
        \OhMyLMS\Practice\Frontend::init();
        do_action('ohmylms_assessment_loaded');
    }
}
