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

if ( ! $course->get_duration() ) {
	return;
}
$duration = $course->get_duration();

$single_course_layout = get_option( 'ohmylms_single_course_page_layout', 'layout_1' );

?>

<li class="course-duration">
	<?php
	if ( 'layout_3' === $single_course_layout ) {
		echo '<svg width="15" height="19" fill="none" viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg"><path fill="#7A8B9A" fill-rule="evenodd" d="M.667 1.7c0-.479.387-.867.866-.867h12.131a.866.866 0 110 1.733v.5A6.932 6.932 0 0112.5 6.913l-1.724 2.586 1.724 2.586a6.932 6.932 0 011.164 3.846v.5a.866.866 0 110 1.733H1.533a.867.867 0 010-1.733v-.5c0-1.369.405-2.707 1.164-3.846l1.724-2.586-1.724-2.586a6.932 6.932 0 01-1.164-3.845v-.5A.866.866 0 01.667 1.7zm2.599 14.73h1.083l1.413-2.26c.848-1.357 2.825-1.357 3.673 0l1.413 2.26h1.083v-.5a5.2 5.2 0 00-.873-2.884L9.27 10.365H5.926l-1.787 2.68a5.199 5.199 0 00-.873 2.885v.5zm0-13.864h8.665v.5a5.21 5.21 0 01-.442 2.1h-7.78a5.199 5.199 0 01-.443-2.1v-.5z" clip-rule="evenodd"/></svg>';
	} else {
		include OHMYLMS_DIR . '/assets/images/icon/clock-icon.php';
	}

		echo ohmylms_format_duration( $course->get_duration() );
	?>
</li>

