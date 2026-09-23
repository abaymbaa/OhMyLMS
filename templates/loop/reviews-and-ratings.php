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
$average_rating = $course->get_average_rating();
$total_review = $course->get_review_count();
?>
