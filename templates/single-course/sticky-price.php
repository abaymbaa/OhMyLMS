<?php
/**
 * The template for displaying single course layout-3 nav
 *
 * This template can be overridden by copying it to yourtheme/single-course/sticky-price.php
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$current_student_id = get_current_user_id();
$student            = new \OMLMS\Data\Student( $current_student_id );
$maybe_enrolled     = false;

if ( $student ) {
    $maybe_enrolled = $student->maybe_enrolled( $course->get_id() );
}

?>

<div class="creator-lms-sticky-price <?php echo esc_attr( $maybe_enrolled ? 'course-enrolled' : '' ); ?>">
    <div class="creator-lms-container">
        <div class="sticky-price-wrapper">
            <div class="sticky-price-left">
                <p class="course-name">
                    <?php echo esc_html( $course->get_name() ); ?>
                </p>
            </div>

            <?php omlms_get_template( 'single-course/widgets/pricebox.php' ); ?>
            <?php creator_lms_continue_learn_button(); ?>
        </div>
    </div>
</div>