<?php
/**
 * Single Lesson
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/single-lesson.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<?php wp_head(); ?>
	</head>

<body <?php body_class(); ?> >
	<?php
		global $post;
		if( !$post) {
			return;
		}
		$preview_mode = get_post_meta( $post->ID, '_preview_enable', true );

		/*
		 * Access control: lesson/quiz/assignment/session content is for enrolled students
		 * only. This mirrors OMLMS\Hooks\CommonHook::restrict_access() and acts as a
		 * template-level safety net for the cases where that template_redirect gate does
		 * not run (theme template overrides, non-single query contexts, builder renders).
		 */
		$omlms_has_lesson_access = (bool) $preview_mode;

		if ( ! $omlms_has_lesson_access && is_user_logged_in() ) {
			if ( current_user_can( 'manage_options' ) || get_current_user_id() === (int) $post->post_author ) {
				$omlms_has_lesson_access = true;
			} else {
				$omlms_lesson_course_id = omlms_get_course_id_by_content_id( $post->ID );
				if ( empty( $omlms_lesson_course_id ) && 'omlms-session' === $post->post_type && $post->post_parent ) {
					$omlms_lesson_course_id = (int) $post->post_parent;
				}
				$omlms_lesson_student = new \OMLMS\Data\Student( get_current_user_id() );
				if ( $omlms_lesson_student->maybe_enrolled( $omlms_lesson_course_id ) ) {
					$omlms_has_lesson_access = true;
				}
			}
		}

		if ( ! $omlms_has_lesson_access ) {
			if ( ! is_user_logged_in() ) {
				omlms_get_template( 'profile/form-login.php' );
			} else {
				echo '<div class="creator-lms-access-denied-modal"><div class="creator-lms-access-denied-inner"><div class="creator-lms-access-denied-modal-content"><h4 class="creator-lms-access-denied-title">' . esc_html__( 'Access Denied', 'ohmylms' ) . '</h4><p class="creator-lms-access-denied-description">' . esc_html__( 'You do not have permission to view this content.', 'ohmylms' ) . '</p></div></div></div>';
			}
			return;
		}

		$attempt = null;
		$current_post_type = get_post_type();
		if('omlms-quiz' === $current_post_type){
			$quiz = omlms_get_quiz(get_the_ID());
			$attempt = $quiz->get_quiz_attempt(get_current_user_id());
		}

		if(empty($attempt)){
			creator_lms_account_student_dashboard_header();
			creator_lms_breadcrumb();
			omlms_get_template( 'single-lesson/lesson-progress.php' );
		}


		?>

		<?php if(!empty($attempt) && 'omlms-quiz' === $current_post_type) : ?>
			<?php omlms_get_template( 'single-lesson/quiz-form.php' ); ?>
		<?php else : ?>
			<?php omlms_get_template( 'single-lesson/lesson-content.php' ); ?>
		<?php endif; ?>

		<?php
		wp_footer();

	?>

