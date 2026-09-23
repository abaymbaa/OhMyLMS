<?php
/**
 * Load more template
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/loop/load-more.php
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $wp_query;

$total = $total ?? $wp_query->max_num_pages;
$paged = $paged ?? get_query_var( 'paged' );
$base  = $base ?? esc_url_raw( str_replace( 999999999, '%#%', get_pagenum_link( 999999999, false ) ) );

if ( $total <= 1 ) {
	return;
}

$loadmor_text = apply_filters( 'creator_lms_course_loadmore_text', 'See More Courses' );
?>

<div class="creator-lms-course-loadmore-area">
	<button
		class="creator-lms-course-loadmore-btn creator-lms-button"
		type="button"
		aria-label="<?php echo esc_attr( $loadmor_text ); ?>"
		data-paged="<?php echo absint( $paged ); ?>"
		data-posts-per-page="<?php echo absint( $posts_per_page ); ?>"
		data-total="<?php echo $total; ?>"
	>
		<?php echo $loadmor_text; ?>
		<span class="creator-lms-loader"></span>
	</button>
</div>
