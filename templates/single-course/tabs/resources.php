<?php
/**
 * The template for displaying single course resources
 *
 * This template can be overridden by copying it to yourtheme/single-course/tabs/resources.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;
$current_student_id = get_current_user_id();
$student            = new \OhMyLMS\Data\Student( $current_student_id );
$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

$resources            = method_exists( $course, 'get_resources' ) ? $course->get_resources() : array();
$single_course_layout = get_option( 'ohmylms_single_course_page_layout', 'layout_1' );

if ( 'layout_2' === $single_course_layout && ! $maybe_enrolled ) {
	// return .ohmylms-course-resource if not enrolled and layout-2
	return;
}

?>
<div class="ohmylms-course-resource">
	<?php if ( 'layout_2' === $single_course_layout ) { ?>
		<h2 class="ohmylms-content-section-title resource-title">
			<?php
				echo apply_filters( 'ohmylms_course_resource_title', __( 'Resources', 'ohmylms' ) );
			?>
		</h2>
	<?php } ?>

	<?php
	if ( ! empty( $resources ) ) {
		?>

		<div class="ohmylms-table">
			<div class="ohmylms-tr ohmylms-head">
				<div class="ohmylms-th title">Title</div>
				<!-- <div class="ohmylms-th time">Time</div> -->
				<div class="ohmylms-th action">Action</div>
			</div>

			<?php
			foreach ( $resources as $resource ) {
				foreach ( $resource['file'] as $file ) {
					?>
						<div class="ohmylms-tr">
							<div class="ohmylms-td-handle" role="button">
								<svg width="10" height="6" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg"><path stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1l4 4 4-4"></path></svg>
							</div>

							<div class="ohmylms-td title">
							<?php echo $file['name']; ?>
							</div>

							<!-- <div class="ohmylms-td time">
								October 26, 2023 , 11:00PM
							</div> -->

							<div class="ohmylms-td action">
								<a href="<?php echo esc_url( $file['url'] ); ?>" title="Download Now" download >
								<?php include OHMYLMS_DIR . '/assets/images/icon/download-icon.php'; ?>
								</a>
							</div>

							<div class="ohmylms-mobile-td">
								<div class="ohmylms-td time" data-title="Time:">
									October 26, 2023 , 11:00PM
								</div>
							</div>
						</div>
						<?php
				}
			}

			if ( count( $resources ) > 0 ) {
				?>
					<!-- <div class="ohmylms-table-pagination">
						<strong>678</strong> items
			
						<a href="#" class="first-page" aria-label="First page" title="First Page">
						<?php include OHMYLMS_DIR . '/assets/images/icon/double-arrow-left-icon.php'; ?>
						</a>
			
						<a href="#" class="previous-page" aria-label="Previous page" title="Previous Page">
						<?php include OHMYLMS_DIR . '/assets/images/icon/arrow-left-icon.php'; ?>
						</a>
			
						<input type="number" name="current-page-number" id="current-page-number" min="1" max="678" value="1" class="current-page-number">
			
						<a href="#" class="next-page" aria-label="Next page" title="Next Page">
						<?php include OHMYLMS_DIR . '/assets/images/icon/arrow-right-icon.php'; ?>
						</a>
			
						<a href="#" class="last-page" aria-label="Last page" title="Last Page">
						<?php include OHMYLMS_DIR . '/assets/images/icon/double-arrow-right-icon.php'; ?>
						</a>
			
						of <strong>01</strong>
					</div> -->
					<?php
			}
			?>
		</div>
		<?php
	} else {
		?>
		<div class="no-course-data">
			<?php include OHMYLMS_DIR . '/assets/images/icon/no-course-found-image.php'; ?>
			<p>
				<?php echo __( 'No Resource Found.', 'ohmylms' ); ?>
			</p>
		</div>
		<?php
	}
	?>
</div>
