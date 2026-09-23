<?php
namespace OMLMS\Extensions;

final class Slots {
    public static function init() {
        $hooks = [
            'creator_lms_before_single_course_content' => 'student.course.before',
            'creator_lms_after_single_course_content' => 'student.course.after',
            'creator_lms_checkout_after_billing' => 'checkout.fields.after',
            'creator_lms_checkout_after_order_review' => 'checkout.summary.after',
        ];
        foreach ($hooks as $hook => $slot) {
            add_action($hook, static function () use ($slot) { self::render($slot, ['contentId' => get_the_ID()]); });
        }
    }
    public static function render($name, array $context = []) {
        do_action('ohmylms_render_slot', $name, $context);
        if (!defined('OMLMS_SOURCE_ASSETS') || !OMLMS_SOURCE_ASSETS) { return; }
        printf('<div data-ohmylms-slot="%s" data-ohmylms-context="%s"></div>', esc_attr($name), esc_attr(wp_json_encode($context)));
        if (strpos($name, 'checkout.') === 0) {
            printf('<div data-ohmylms-slot="%s" data-ohmylms-kind="checkout-field" data-ohmylms-context="%s"></div>', esc_attr($name), esc_attr(wp_json_encode($context)));
        }
    }
}
