

<?php
/**
 * The template for displaying lesson's quiz
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/single-lesson/content-quiz.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
$current_post_type = get_post_type();
?>

<?php
/**
 * hook: creator_lms_before_lesson_main_content.
 * 
 * hooked: creator_lms_show_toast_notices (5).
 */
do_action( 'creator_lms_before_lesson_main_content' );
?>

<section class="creator-lms-lesson-details">
	<?php omlms_get_template( 'global/creator-lms-celebration.php' ); ?>
	
	<span class="creator-lms-lesson-details-hamburger">
		<?php include(CREATOR_LMS_DIR . '/assets/images/icon/hamburger-icon.php'); ?>
	</span>
	
	<div class="creator-lms-container">
		<div class="creator-lms-lesson-content-wrapper">
			<div class="creator-lms-lesson-content">
				<?php
				$content_drip_protection_message = apply_filters( 'creator_lms_drip_protection_message', '', get_the_ID(), $current_post_type, get_current_user_id() );
				if ( empty( $content_drip_protection_message ) ) {
					if('omlms-lesson' === $current_post_type){
						omlms_get_template( 'single-lesson/content-lesson.php' );
					}
	
					if ('omlms-assignment' === $current_post_type) {
						omlms_get_template( 'single-lesson/content-assignment.php');
					}
	
					if ('omlms-quiz' === $current_post_type) {
						omlms_get_template( 'single-lesson/content-quiz.php',array('quiz' => omlms_get_quiz(get_the_ID())) );
					}
					if('omlms-session' === $current_post_type) {
						omlms_get_template('single-lesson/content-session');
					}
					
					omlms_get_template( 'single-lesson/content-navigation.php' );
				} else {
					echo esc_html( $content_drip_protection_message );
				}
				?>
			</div>

			<?php omlms_get_template('single-lesson/sidebar/sidebar.php'); ?>
		</div>
	</div>
</section>

<?php
/**
 * creator_lms_after_lesson_main_content hook.
 */
do_action( 'creator_lms_after_lesson_main_content' );
?>
