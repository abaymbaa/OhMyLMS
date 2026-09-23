<?php
/**
 * Template for displaying course content in popup.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/course-popup-content.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();

?>
<div data-item-id="course-<?php echo the_ID(); ?>" class="creator-lms-course-card-popup">
    <?php
        /**
         * Hook: creator_lms_course_card_popup.
         * 
         * @hooked: creator_lms_loop_course_title (5).
         * @hooked: creator_lms_loop_course_update (10).
         * @hooked: creator_lms_loop_course_meta (15).
         * @hooked: creator_lms_loop_course_description (20).
         * @hooked: creator_lms_loop_course_add_to_cart (25).
         *
         */
        do_action( 'creator_lms_course_card_popup', get_the_ID() );
    ?>
</div>