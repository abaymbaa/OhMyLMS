<?php
/**
 * The template for displaying single course description
 *
 * This template can be overridden by copying it to yourtheme/single-course/tabs/layout3-description.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

if ( ! $course ) {
	return;
}

$post_object = get_post( $course->get_id() );
$content     = ! empty( $post_object->post_content ) && '<p></p>' !== $post_object->post_content ? $post_object->post_content : '';

$description_class = empty( get_the_content( $course->get_id() ) ) ? 'no-description' : '';

?>

<div class="ohmylms-description-content ohmylms-wysiwyg-content layout3-description">
	<div class="ohmylms-description-content-inner" initial-height="330" style="--initial-height: 330px;">
		<div class="ohmylms-description-content-height <?php echo esc_attr( $description_class ); ?>">
			<?php
			if ( ! empty( get_the_content( $course->get_id() ) ) ) {
				echo get_the_content( $course->get_id() );

			} else {
				?>
					<div class="no-course-data">
					<?php include OHMYLMS_DIR . '/assets/images/icon/no-course-found-image.php'; ?>
						<p>
						<?php echo __( 'No course description found.', 'ohmylms' ); ?>
						</p>
					</div>
					<?php
			}
			?>
			
		</div>

		<?php if ( ! empty( get_the_content( $course->get_id() ) ) ) { ?>
			<div class="layout3-content-readmore">
				<button type="button" class="layout3-content-readmore-button">
					<span class="button-text">
						<?php echo __( 'Show More', 'ohmylms' ); ?>
					</span>

					<span class="icon">
						<svg width="12" height="6" fill="none" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg"><path fill="#6F767E" fill-rule="evenodd" d="M.234.217a.845.845 0 011.132 0L6 4.516 10.634.217a.845.845 0 011.132 0c.312.29.312.76 0 1.05L7.13 5.565a1.69 1.69 0 01-2.262 0L.234 1.267a.705.705 0 010-1.05z" clip-rule="evenodd"/></svg>
					</span>
				</button>
			</div>
		<?php } ?>
	</div>
</div>
