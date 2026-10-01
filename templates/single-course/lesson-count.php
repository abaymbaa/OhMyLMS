<?php
/**
 * The template for displaying single course level
 *
 * This template can be overridden by copying it to yourtheme/single-course/duration.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;
?>

<?php if ($course->get_lessons_count() > 0){ ?>
	<li class="course-lesson-count">
		<?php include(OHMYLMS_DIR . '/assets/images/icon/text-file-icon.php'); ?>
		<?php
		echo sprintf(
			_n( '%d Lesson', '%d Lessons', $course->get_lessons_count(), 'ohmylms' ),
			$course->get_lessons_count()
		);
		?>
	</li>
<?php } ?>
