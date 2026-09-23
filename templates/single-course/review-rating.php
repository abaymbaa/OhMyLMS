<?php
/**
 * Template for displaying the review rating in a single course.
 *
 * This template can be overridden by copying it to yourtheme/single-course/review-rating.php.
 *
 * @package OMLMS\Templates
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

global $comment;
$rating = intval( get_comment_meta( $comment->comment_ID, 'rating', true ) );
?>
<div class="course-review-rating-area">
	<?php
		echo creator_lms_get_rating_html($rating);
		echo creator_lms_get_review_date_html($comment->comment_date );
	?>
</div>
