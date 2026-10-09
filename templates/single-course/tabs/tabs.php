<?php
/**
 * The template for displaying single course tabs
 *
 * This template can be overridden by copying it to yourtheme/single-course/tabs/tabs.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

do_action( 'ohmylms_course_before_tabs' );

$course_tabs = apply_filters( 'ohmylms_course_tabs', array() );
ohmylms_enqueue_interactivity_module( 'ohmylms/tabs' );
$initial_tab = isset( $course_tabs['description'] ) ? 'description' : array_key_first( $course_tabs );
if ( ! empty( $course_tabs ) ) : ?>

	<div class="ohmylms-course-details-tab" data-wp-interactive="ohmylms/tabs" <?php echo wp_interactivity_data_wp_context( array( 'activeTab' => 'course-' . $initial_tab ) ); ?>>
		<div class="ohmylms-carousel-container">
			<div class="ohmylms-carousel-inner">
				<ul class="ohmylms-course-tab-nav" role="tablist">
					<?php foreach ( $course_tabs as $key => $course_tab ) : ?>
						<li class="<?php echo $key === $initial_tab ? 'active' : ''; ?>" role="presentation" <?php echo wp_interactivity_data_wp_context( array( 'tabKey' => 'course-' . $key ) ); ?> data-wp-class--active="state.selected">
							<button type="button" role="tab" id="tab-course-<?php echo esc_attr( $key ); ?>" aria-controls="course-<?php echo esc_attr( $key ); ?>" aria-selected="<?php echo $key === $initial_tab ? 'true' : 'false'; ?>" tabindex="<?php echo $key === $initial_tab ? '0' : '-1'; ?>" data-target="#course-<?php echo esc_attr( $key ); ?>" data-wp-on--click="actions.select" data-wp-on--keydown="actions.key" data-wp-bind--aria-selected="state.selected" data-wp-bind--tabindex="state.tabIndex" data-wp-class--active="state.selected">
								<?php echo wp_kses_post( $course_tab['title'] ); ?>
								
								<?php
								if ( $key === 'reviews' ) {
									echo '(' . $course->get_review_count() . ')';
								}
								?>
							</button>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		</div>

		<div class="ohmylms-course-tab-content">
			<?php
			foreach ( $course_tabs as $key => $course_tab ) :
				$courseClass = 'ohmylms-single-tab-content course-' . esc_attr( $key );

				if ( $key === $initial_tab ) {
					$courseClass .= ' active';
				}
				$courseId = 'course-' . esc_attr( $key );
				?>
				<div class="<?php echo $courseClass; ?>" id="<?php echo $courseId; ?>" aria-labelledby="tab-<?php echo $courseId; ?>" role="tabpanel" tabindex="0" <?php echo wp_interactivity_data_wp_context( array( 'tabKey' => $courseId ) ); ?> data-wp-class--active="state.selected" data-wp-bind--hidden="!state.selected" 
				<?php
				if ( $key !== $initial_tab ) {
					echo 'hidden';}
				?>
				>
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

	do_action( 'ohmylms_course_after_tabs' );
?>
