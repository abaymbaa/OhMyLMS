<?php
/**
 * Review Comments Template
 *
 * Closing li is left out on purpose!. Please include it in your theme.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>

<div class="review-author-wrapper">
	<?php
		creator_lms_review_author();
		creator_lms_review_meta();
	?>
</div>

<p class="review-description">
	<?php echo get_comment_text($comment); ?>
</p>

<?php
/**
 * The creator_lms_review_before_comment_meta hook.
 *
 * @hooked creator_lms_review_display_rating - 10
 */
// do_action( 'creator_lms_review_before_comment_meta', $comment );

?>