<?php
/**
 * Single Course
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/single-course.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

$single_course_layout = get_option('creator_lms_single_course_page_layout','layout_1');

if( 'layout_2' === $single_course_layout ) {
	$layout_class = 'creator-lms-single-course-layout-2';

}else if( 'layout_3' === $single_course_layout ) {
	$layout_class = 'creator-lms-single-course-layout3';

}else{
	$layout_class = 'creator-lms-single-course-layout-1';
}

if( !empty($_GET['single-assignement-id']) ){
	omlms_get_template( 'single-course/assignment-single.php' );
	return;
}

creator_lms_get_header();

/**
 * Hook: creator_lms_before_main_content.
 *
 * @hooked: creator_lms_show_toast_notices (5)
 * @hooked: creator_lms_output_content_wrapper_start (10)
 * @hooked: creator_lms_breadcrumb (15)
 */
do_action( 'creator_lms_before_main_content' );

?>

<div class="<?php echo esc_attr( $layout_class ); ?>" >
	<?php
		if( 'layout_2' === $single_course_layout && !post_password_required() ) {
			echo '<div class="layout-2-overlay"></div>';
		}
	?>

	<div class="creator-lms-container">
		<?php while ( have_posts() ) : ?>
			<?php the_post(); ?>

			<?php 
				if( 'layout_3' === $single_course_layout ) {
					omlms_get_template( 'single-course/sticky-price.php' );
				}
			?>

			<?php omlms_get_template_part( 'content', 'single-course' ); ?>

		<?php endwhile; // end of the loop. ?>
	</div>
</div>

<?php
/**
 * Hook: creator_lms_after_main_content.
 * 	
 */
do_action( 'creator_lms_after_main_content' );


creator_lms_get_footer();

?>
