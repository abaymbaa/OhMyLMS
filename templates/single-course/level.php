<?php
/**
 * The template for displaying single course level
 *
 * This template can be overridden by copying it to yourtheme/single-course/global/level.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$level = $course->get_level();
if ( empty( $level ) ) {
	return;
}
?>

<li class="course-level <?php echo $course->get_level(); ?>">
	<?php
		if ( 'beginner' === $level ) {
			include(CREATOR_LMS_DIR . '/assets/images/icon/level-beginner-icon.php');
			echo __( 'Beginner', 'ohmylms' );

		} elseif ( 'experience' === $level ) {
			include(CREATOR_LMS_DIR . '/assets/images/icon/level-experience-icon.php');
			echo __( 'Experience', 'ohmylms' );

		} elseif ( 'expert' === $level ) {
			include(CREATOR_LMS_DIR . '/assets/images/icon/level-expert-icon.php');
			echo __( 'Expert', 'ohmylms' );

		} else {
			include(CREATOR_LMS_DIR . '/assets/images/icon/level-expert-icon.php');
			echo __( 'All levels', 'ohmylms' );
		}
	?>
</li>
