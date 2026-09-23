<?php
/**
 * The template for displaying single course level
 *
 * This template can be overridden by copying it to yourtheme/single-course/duration.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$rating_count = $course->get_rating_count();
$review_count = $course->get_review_count();
$average      = $course->get_average_rating();
$icon_percent = round( ( $average / 5 ) * 100 );

if ( $rating_count <= 0 ) {
	return;
}

$single_course_layout = get_option('creator_lms_single_course_page_layout','layout_1');

?>

<?php if( 'layout_2' === $single_course_layout ) { ?>
	<li class="course-rating">
		<span class="rating">
			<?php echo $average; ?>
		</span>

		<span class="course-review-rating" role="img">
			<span class="given-rate" style="width: <?php echo $icon_percent; ?>%;"></span>
		</span>

		<span class="total-ratings">
			<?php 
			echo '(' . $rating_count . (1 == $rating_count ? esc_html__( ' Rating', 'ohmylms' ) : esc_html__( ' Ratings', 'ohmylms' )) .')';
			?>
		</span>
	</li>
	
<?php } else if( 'layout_3' === $single_course_layout ){ ?>
	<li class="course-rating">
		<svg width="20" height="18" fill="none" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg"><path fill="#FFB700" d="M19.436 6.735a1.304 1.304 0 00-1.055-.881l-4.988-.72-2.229-4.47c-.441-.885-1.9-.885-2.341 0l-2.229 4.47-4.976.72c-.491.071-.9.413-1.054.883-.154.468-.026.983.33 1.327l3.61 3.493-.852 4.927c-.083.486.118.98.52 1.27.403.289.937.326 1.376.097l4.445-2.327 4.458 2.327c.19.1.4.149.607.149a1.296 1.296 0 001.289-1.515l-.85-4.928 3.609-3.493c.356-.343.484-.86.33-1.329z"/></svg>
		<?php echo $average; ?>
		<?php echo omlms_get_rating_html( $average, $rating_count ); // WPCS: XSS ok. ?>
	</li>
<?php }else{ ?>
	<li class="course-rating">
		<?php echo $average; // WPCS: XSS ok. ?>
		<?php include(CREATOR_LMS_DIR . '/assets/images/icon/star-icon.php'); ?>
		<?php echo omlms_get_rating_html( $average, $rating_count ); // WPCS: XSS ok. ?>
	</li>
<?php } ?>

