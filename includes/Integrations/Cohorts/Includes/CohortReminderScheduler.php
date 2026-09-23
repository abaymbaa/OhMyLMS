<?php

namespace OMLMS\Integrations\Cohorts\Includes;
/**
 * Cohort Reminder Scheduler
 * This class handles the reminder for cohort courses
 * 
 * @package OMLMS\Integrations\Cohorts\Includes
 * @since 1.0.0
 * @author WPFunnels Team
 */

 if (!defined('ABSPATH')) exit;


class CohortReminderScheduler {
    const ACTION_HOOK = 'creator_lms_send_cohort_start_reminders';

    public static function init() {
        add_action('init', [__CLASS__, 'schedule_reminder']);
        add_action(self::ACTION_HOOK, [__CLASS__, 'handle_reminder']);
    }

    public static function schedule_reminder() {
        if (!function_exists('as_has_scheduled_action') || !function_exists('as_schedule_recurring_action')) {
            return;
        }
        if (!as_has_scheduled_action(self::ACTION_HOOK)) {
            as_schedule_recurring_action(time(), HOUR_IN_SECONDS, self::ACTION_HOOK);
        }
    }


    /**
     * Handle reminder
     *
     * @return void
     */
    public static function handle_reminder() {
        global $wpdb;

        $now    = current_time('timestamp');
        $target = $now + DAY_IN_SECONDS;

        $args = [
            'post_type'      => 'omlms-course',
            'post_status'    => 'publish',
            'posts_per_page' => -1,
            'meta_query'     => [
                [
                    'key'   => '_type',
                    'value' => 'cohort-based',
                ],
            ],
            'fields' => 'ids',
        ];

        $cohort_course_ids = get_posts($args);
        if (empty($cohort_course_ids)) {
            return;
        }
        $cohort_placeholders = implode(',', array_fill(0, count($cohort_course_ids), '%d'));
        $sql = $wpdb->prepare(
            "
            SELECT * FROM {$wpdb->prefix}omlms_cohorts
                WHERE course_id IN ($cohort_placeholders)
                AND start_date > %s
                AND start_date <= %s
            ",
            ...array_merge($cohort_course_ids, [
                date('Y-m-d H:i:s', $now),
                date('Y-m-d H:i:s', $target),
            ])
        );
        $cohorts = $wpdb->get_results($sql);

        if (empty($cohorts)) {
            return;
        }

        foreach ($cohorts as $cohort) {
            $course_id = intval($cohort->course_id);
            $students = $wpdb->get_results(
                $wpdb->prepare(
                    "SELECT user_id FROM {$wpdb->prefix}omlms_user_enrollment
                     WHERE course_id = %d",
                    $course_id
                )
            );
            foreach ($students as $student) {
                $user_id = intval($student->user_id);
                if (!self::has_sent_email($user_id, $cohort->id)) {
                    self::send_email($user_id, $course_id, $cohort);
                    self::mark_email_sent($user_id, $cohort->id);
                }
            }
        }
    }


    /**
     * Check if email was already sent for this user + cohort
     */
    protected static function has_sent_email($user_id, $cohort_id) {
        return get_user_meta($user_id, '_omlms_cohort_reminder_' . $cohort_id, true);
    }

    /**
     * Mark that email has been sent
     */
    protected static function mark_email_sent($user_id, $cohort_id) {
        update_user_meta($user_id, '_omlms_cohort_reminder_' . $cohort_id, true);
    }

    /**
     * Send the actual email
     */
    protected static function send_email($user_id, $course_id, $cohort) {
        $user = get_user_by('ID', $user_id);
        if (!$user) {
            return;
        }

        $course_title = get_the_title($course_id);
        $course_link  = get_permalink($course_id);
        $start_date   = date_i18n('M j, g:i A', strtotime($cohort->start_date));

        $subject = sprintf(
            'Reminder: Your Course "%s" Starts in 24 Hours!',
            $course_title
        );

        $message = sprintf(
            "Hi %s,\n\n".
            "Just a quick reminder that your course \"%s\" starts in 24 hours!\n\n".
            "🗓 Start Date: %s\n".
            "📍 Course Link: %s\n\n".
            "We're excited to have you on board. Make sure to log in on time and make the most of your learning journey.\n\n".
            "See you in class!\n\n".
            "— %s Team",
            $user->display_name,
            $course_title,
            $start_date,
            $course_link,
            get_bloginfo('name')
        );

        wp_mail($user->user_email, $subject, $message);
    }
}