<?php
/**
 * OhMyLMS Loop Duration
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/loop/duration.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;
$course_settings = get_post_meta( $course->get_id(),'omlms_course_settings',true );
?>
<?php if ( is_array($course_settings) && isset($course_settings['duration'] ) ) : ?>
    <div class="duration"><?php echo __('Duration: ','ohmylms'). $course_settings['duration'].__(' Weeks','ohmylms'); ?></div>
<?php endif; ?>