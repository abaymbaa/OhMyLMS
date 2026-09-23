<?php
/**
 * Template for displaying my courses of student profile
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/profile/my-courses.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();
$my_course_tab = apply_filters( 'creator_lms_my_course_tabs', array() );
?>
<div class="creator-lms-dashboard-wrapper">
	<h1 class="student-name"><?php echo __('My Courses','ohmylms') ?></h1>
	<div class="creator-lms-my-courses-tab-nav">
		<div class="creator-lms-my-courses-tab">
			<ul role="tablist" id="my-courses-tab">
				<?php foreach ( $my_course_tab as $key => $course_tab ) : ?>
					<li class="<?php echo $key === 'enrolled-courses' ? 'active': ''; ?>" role="presentation">
						<button type="button" role="tab" aria-controls="course-<?php echo esc_attr( $key ); ?>" aria-selected="<?php echo $key === 'enrolled-courses' ? 'true': 'false'; ?>" tabindex="<?php echo $key === 'enrolled-courses' ? '0': '-1'; ?>" data-target="#course-<?php echo esc_attr( $key ); ?>">
							<?php echo wp_kses_post( $course_tab['title'] ); ?>
						</button>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>

		<div class="creator-lms-my-courses-tab-content" id="my-courses-tab-content">
			<?php
			foreach ( $my_course_tab as $key => $course_tab ) :
				$courseClass = 'creator-lms-single-tab-content course-' . esc_attr($key);

				if ($key === 'enrolled-courses') {
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

</div>