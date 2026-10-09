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
if ( ! method_exists( $course, 'get_download_resource' ) || ! method_exists( $course, 'get_additional_resource_count' ) ) {
	return;
}

if ( ! $course->get_download_resource() ) {
	return;
}

?>

<li class="course-additional-resource">
	<?php require OHMYLMS_DIR . '/assets/images/icon/file-icon.php'; ?>
	<?php
	printf(
		_n( '%d Additional resource', '%d Additional resources', $course->get_additional_resource_count(), 'ohmylms' ),
		$course->get_additional_resource_count()
	);
	?>
</li>
