<?php
/**
 * The template for displaying single course description
 *
 * This template can be overridden by copying it to yourtheme/single-course/tabs/description.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$post_object = get_post( $course->get_id() );
$content     = ! empty( $post_object->post_content ) && '<p></p>' !== $post_object->post_content ? $post_object->post_content : '';

$single_course_layout = get_option( 'ohmylms_single_course_page_layout', 'layout_1' );

if ( 'layout_1' === $single_course_layout ) {
	ohmylms_course_feature_image_and_video();
}

?>

<div class="ohmylms-description-content ohmylms-wysiwyg-content">
	<div class="ohmylms-description-content-inner" initial-height="330" style="--initial-height: 330px;">
		<div class="ohmylms-description-content-height">
			<?php
				echo get_the_content( $course->get_id() );
			?>
		</div>
	</div>
</div>
