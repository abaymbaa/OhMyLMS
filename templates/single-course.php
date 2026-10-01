<?php
/**
 * Single Course
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/single-course.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

$single_course_layout = get_option('ohmylms_single_course_page_layout','layout_1');

if( 'layout_2' === $single_course_layout ) {
	$layout_class = 'ohmylms-single-course-layout-2';

}else if( 'layout_3' === $single_course_layout ) {
	$layout_class = 'ohmylms-single-course-layout3';

}else{
	$layout_class = 'ohmylms-single-course-layout-1';
}

if( !empty($_GET['single-assignement-id']) ){
	ohmylms_get_template( 'single-course/assignment-single.php' );
	return;
}

ohmylms_get_header();

/**
 * Hook: ohmylms_before_main_content.
 *
 * @hooked: ohmylms_show_toast_notices (5)
 * @hooked: ohmylms_output_content_wrapper_start (10)
 * @hooked: ohmylms_breadcrumb (15)
 */
do_action( 'ohmylms_before_main_content' );

?>

<div class="<?php echo esc_attr( $layout_class ); ?>" >
	<?php
		if( 'layout_2' === $single_course_layout && !post_password_required() ) {
			echo '<div class="layout-2-overlay"></div>';
		}
	?>

	<div class="ohmylms-container">
		<?php while ( have_posts() ) : ?>
			<?php the_post(); ?>

			<?php 
				if( 'layout_3' === $single_course_layout ) {
					ohmylms_get_template( 'single-course/sticky-price.php' );
				}
			?>

			<?php ohmylms_get_template_part( 'content', 'single-course' ); ?>

		<?php endwhile; // end of the loop. ?>
	</div>
</div>

<?php
/**
 * Hook: ohmylms_after_main_content.
 * 	
 */
do_action( 'ohmylms_after_main_content' );


ohmylms_get_footer();

?>
