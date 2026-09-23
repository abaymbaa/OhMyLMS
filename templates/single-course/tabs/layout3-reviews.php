<?php
/**
 * The template for displaying single course description
 *
 * This template can be overridden by copying it to yourtheme/single-course/tabs/layout3-reviews.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

if(!$course){
    return;
}

$single_course_layout = get_option('creator_lms_single_course_page_layout','layout_1');


if ( !$course->get_enable_reviews() ) {
	return;
}

// Ensure that comments are properly retrieved
$args = array(
	'post_id' => $course->get_id(),
	'post_type' => 'omlms-course', // Make sure this is the correct post type for your course.
	'status' => 'approve',
);

$comments_query = new WP_Comment_Query;
$comments = $comments_query->query( $args );
$single_course_layout = get_option('creator_lms_single_course_page_layout','layout_1');

?>

<div class="layout3-content-box layout3-reviews">
	<h2 class="content-box-title">
		<?php
			echo apply_filters( 'creator_lms_course_review_title', __( 'Reviews', 'ohmylms' ) ); 
		?>

		<?php if( 0 < count($comments) ){ ?>
			<span class="small-title">
				<?php
					printf(
						_n('%d Review', '%d Reviews', count($comments), 'ohmylms'),
						count($comments)
					);
				?>

			</span>
		<?php } ?>
	</h2>

	<?php
		$expand_class = 2 < count($comments) ? 'creator-lms-expandable' : '';
	?>

	<div class="creator-lms-course-reviews <?php echo esc_attr( $expand_class ); ?>">
		<?php
		if ( ! empty( $comments ) ) : ?>
			<?php
			// Loop through comments and display them using the specified callback function
			foreach ($comments as $comment ){
				echo '<div class="creator-lms-course-single-review">';
					creator_lms_comments($comment);
				echo '</div>';
			}
			?>

			<?php if (count($comments) > 2) { ?>
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
		<?php else : ?>
			<div class="no-course-data">
				<?php include(CREATOR_LMS_DIR . '/assets/images/icon/no-course-found-image.php'); ?>

				<p>
					<?php esc_html_e( 'No Review Yet.', 'ohmylms' ); ?>
				</p>
			</div>

		<?php endif; ?>
	</div>

	<?php if ($course->has_access() ){
		?>
		<div class="creator-lms-course-reviews-form">
			<h3 class="creator-lms-reviews-title">
				<?php esc_html_e( 'Write a Review', 'ohmylms' ); ?>
			</h3>
			<?php
			$commenter    = wp_get_current_commenter();
			$comment_form = array(
				/* translators: %s is course title */
				'title_reply'         => have_comments() ? esc_html__( 'Add a review', 'ohmylms' ) : sprintf( esc_html__( 'Be the first to review &ldquo;%s&rdquo;', 'ohmylms' ), get_the_title() ),
				/* translators: %s is course title */
				'title_reply_to'      => esc_html__( 'Leave a Reply to %s', 'ohmylms' ),
				'title_reply_before'  => '<span id="reply-title" class="comment-reply-title">',
				'title_reply_after'   => '</span>',
				'comment_notes_before' => '',
				'comment_notes_after' => '',
				'label_submit'        => esc_html__( 'Submit', 'ohmylms' ),
				'logged_in_as'        => '',
				'comment_field'       => '',
				'comment_post_ID'	  => $course->get_id(),
			);

			$name_email_required = (bool) get_option( 'require_name_email', 1 );
			$fields              = array(
				'author' => array(
					'label'    => __( 'Name', 'ohmylms' ),
					'type'     => 'text',
					'value'    => $commenter['comment_author'],
					'required' => $name_email_required,
				),
				'email'  => array(
					'label'    => __( 'Email', 'ohmylms' ),
					'type'     => 'email',
					'value'    => $commenter['comment_author_email'],
					'required' => $name_email_required,
				),
			);

			$comment_form['fields'] = array();

			foreach ( $fields as $key => $field ) {
				$field_html  = '<p class="comment-form-' . esc_attr( $key ) . '">';
				$field_html .= '<label for="' . esc_attr( $key ) . '">' . esc_html( $field['label'] );

				if ( $field['required'] ) {
					$field_html .= '&nbsp;<span class="required">*</span>';
				}

				$field_html .= '</label><input id="' . esc_attr( $key ) . '" name="' . esc_attr( $key ) . '" type="' . esc_attr( $field['type'] ) . '" value="' . esc_attr( $field['value'] ) . '" size="30" ' . ( $field['required'] ? 'required' : '' ) . ' /></p>';

				$comment_form['fields'][ $key ] = $field_html;
			}

			$start_svg = '<svg width="18" height="17" fill="none" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg"><path stroke="#FE9738" d="M11.92 5.713l.116.236.26.037 4.429.644a.66.66 0 01.368 1.123h-.001l-3.205 3.125-.189.183.045.26.755 4.406a.662.662 0 01-.262.646.652.652 0 01-.692.051l-.002-.001-3.96-2.082-.233-.122-.233.123-3.945 2.08s0 0 0 0a.673.673 0 01-.699-.048.663.663 0 01-.262-.646l.756-4.408.045-.259-.189-.183-3.205-3.124h0a.656.656 0 01-.167-.674h0a.662.662 0 01.533-.45s0 0 0 0 0 0 0 0l4.419-.644.26-.038.116-.235 1.979-3.999s0 0 0 0 0 0 0 0c.092-.185.311-.315.592-.315.28 0 .5.13.591.315l1.98 4z"/></svg>';

			// Rating field for the review form
			$comment_form['comment_field'] = '<div class="comment-form-rating"><label for="rating">' . esc_html__( 'Your rating', 'ohmylms' ) . '</label><p class="creator-lms-stars"><a class="star-1" href="#" data-rating="1">'.$start_svg.'</a><a class="star-2" href="#" data-rating="2">'.$start_svg.'</a><a class="star-3" href="#" data-rating="3">'.$start_svg.'</a><a class="star-4" href="#" data-rating="4">'.$start_svg.'</a><a class="star-5" href="#" data-rating="5">'.$start_svg.'</a></p><select name="rating" id="rating" required>
				<option value="">' . esc_html__( 'Rate&hellip;', 'ohmylms' ) . '</option>
				<option value="5">' . esc_html__( 'Perfect', 'ohmylms' ) . '</option>
				<option value="4">' . esc_html__( 'Good', 'ohmylms' ) . '</option>
				<option value="3">' . esc_html__( 'Average', 'ohmylms' ) . '</option>
				<option value="2">' . esc_html__( 'Not that bad', 'ohmylms' ) . '</option>
				<option value="1">' . esc_html__( 'Very poor', 'ohmylms' ) . '</option>
			</select></div>';

			$comment_form['comment_field'] .= '<p class="comment-form-comment"><label for="comment">' . esc_html__( 'Your review', 'ohmylms' ) . '&nbsp;<span class="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="8" required></textarea><span class="required-notice">'.__('Rating and review both are required *', 'ohmylms').'</span></p>';

			comment_form( apply_filters( 'creator_lms_review_comment_form_args', $comment_form ) );
			?>
		</div>
		<?php
	}
	?>
</div>

