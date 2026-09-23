<?php
/**
 * The template for displaying single course tabs
 *
 * This template can be overridden by copying it to yourtheme/single-course/tabs/tabs.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

do_action( 'creator_lms_course_before_tabs' );

$course_tabs = apply_filters( 'creator_lms_course_tabs', array() );
if ( ! empty( $course_tabs ) ) : ?>

	<div class="creator-lms-course-details-tab">
		<div class="creator-lms-carousel-container">
			<div class="creator-lms-carousel-inner">
				<ul class="creator-lms-course-tab-nav" role="tablist">
					<?php foreach ( $course_tabs as $key => $course_tab ) : ?>
						<li class="<?php echo $key === 'description' ? 'active': ''; ?>" role="presentation">
							<button type="button" role="tab" aria-controls="course-<?php echo esc_attr( $key ); ?>" aria-selected="<?php echo $key === 'description' ? 'true': 'false'; ?>" tabindex="<?php echo $key === 'description' ? '0': '-1'; ?>" data-target="#course-<?php echo esc_attr( $key ); ?>">
								<?php echo wp_kses_post( $course_tab['title'] ); ?>
								
								<?php if($key === 'reviews'){
									echo '('.$course->get_review_count().')';
								}  ?>
							</button>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		</div>

		<div class="creator-lms-course-tab-content">
			<?php 
			foreach ( $course_tabs as $key => $course_tab ) :
				$courseClass = 'creator-lms-single-tab-content course-' . esc_attr($key);

				if ($key === 'description') {
					$courseClass .= ' active';
				}
				$courseId = 'course-' . esc_attr($key);
				?>
				<div class="<?php echo $courseClass; ?>" id="<?php echo $courseId; ?>" aria-labelledby="<?php echo $courseId; ?>" role="tabpanel" tabindex="0">
					<?php
						if ( isset( $course_tab['callback'] ) ) {
							call_user_func( $course_tab['callback'], $key, $course_tab );
						}
					?>
				</div>
			<?php endforeach; ?>
		</div>

	</div>

<?php
	endif;

	do_action( 'creator_lms_course_after_tabs' );
?>
