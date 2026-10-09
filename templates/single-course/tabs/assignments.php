<?php
/**
 * The template for displaying single course assignments
 *
 * This template can be overridden by copying it to yourtheme/single-course/tabs/assignments.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;
$current_student_id   = get_current_user_id();
$student              = new \OhMyLMS\Data\Student( $current_student_id );
$maybe_enrolled       = $student->maybe_enrolled( $course->get_id() );
$single_course_layout = get_option( 'ohmylms_single_course_page_layout', 'layout_1' );

if ( ! $student ) {
	return;
}

if ( 'layout_2' === $single_course_layout && ! $maybe_enrolled ) {
	// return .ohmylms-course-assignment if not enrolled and layout-2
	return;
}

$all_assignment_attempts = $student->get_all_assignment_attempts( $course->get_id() );

?>

<div class="ohmylms-course-assignment">
	<?php if ( 'layout_2' === $single_course_layout ) { ?>
		<h2 class="ohmylms-content-section-title assignment-title">
			<?php
				echo apply_filters( 'ohmylms_course_assignment_title', __( 'Assignments', 'ohmylms' ) );
			?>
		</h2>
	<?php } ?>

	<?php
	if ( ! empty( $all_assignment_attempts ) ) {
		?>
		<div class="ohmylms-assignment-accordion ohmylms-default-accordion">
			<?php
			foreach ( $all_assignment_attempts as $key => $assignment_attempt ) {
				if ( ! empty( $assignment_attempt['assignment'] ) ) {
					$assignment          = $assignment_attempt['assignment'];
					$submissions         = $assignment_attempt['submissions'];
					$score               = isset( $submissions[0]['score'] ) ? (int) $submissions[0]['score'] : 0;
					$title               = $assignment->get_name();
					$total_points        = $assignment->get_total_points();
					$achieved_score_text = 'Score: ' . $score . '/' . $total_points;
					$class_status        = isset( $submissions[0]['status'] ) && 'submitted' === $submissions[0]['status'] ? 'pending' : 'approved';
					$status              = isset( $submissions[0]['status'] ) && 'submitted' === $submissions[0]['status'] ? 'Pending' : 'Approved';
					?>
						<div class="ohmylms-accordion-item">
							<div class="ohmylms-accordion-head" role="button" tabindex="0" aria-expanded="false" aria-controls="lms-accordion-body-<?php echo $key; ?>" id="lms-accordion-head-<?php echo $key; ?>">
								<span class="ohmylms-accordion-title">
								<?php echo $title; ?>
								</span>

							<?php if ( 'approved' === $class_status ) { ?>
									<span class="score"><?php echo $achieved_score_text; ?></span>
								<?php } ?>

								<span class="status <?php echo $class_status; ?>"><?php echo $status; ?></span>

								<span class="arrow-icon">
									<svg width="14" height="8" fill="none" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg"><path fill="#A1A1AA" stroke="#A1A1AA" stroke-width=".2" d="M12.139 1.003a.872.872 0 00-.609.244L7.607 5.1A.858.858 0 017 5.348a.872.872 0 01-.608-.248L2.468 1.247a.869.869 0 00-1.216 0 .834.834 0 000 1.192l3.931 3.845A2.65 2.65 0 007 7a2.65 2.65 0 001.816-.716l3.932-3.845A.839.839 0 0013 1.843a.825.825 0 00-.253-.596.857.857 0 00-.608-.244z"/></svg>
								</span>
							</div>

							<div class="ohmylms-accordion-body" id="lms-accordion-body-<?php echo $key; ?>" role="region" aria-labelledby="lms-accordion-head-<?php echo $key; ?>">
							<?php
							if ( is_array( $assignment_attempt['submissions'] ) &&
									! empty( $assignment_attempt['submissions'] )
								) {
								?>
											<div class="ohmylms-table">
										<?php
											$loop = 1;
										foreach ( $assignment_attempt['submissions'] as $submission_key => $submission ) {
											$status = 'submitted' === $submission['status'] ? 'pending' : 'approved';
											$date   = date( 'F d, Y', strtotime( $submission['start_date'] ) );
											?>
															<div class="ohmylms-tr">
																<div class="ohmylms-td-handle" role="button">
																	<svg width="10" height="6" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg"><path stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1l4 4 4-4"></path></svg>
																</div>

																<div class="ohmylms-td title">
														<?php
															echo $loop . '' . ohmylms_get_number_suffix( $loop ) . '' . __( ' Submission', 'ohmylms' );
														?>
																</div>

																<div class="ohmylms-td submission-date">
														<?php echo $date; ?>
																</div>

																<div class="ohmylms-td action">
																	<a href="
																	<?php
																	echo esc_url(
																		add_query_arg(
																			array(
																				'course-id'             => $course->get_id(),
																				'single-assignement-id' => $assignment->get_id(),
																				'attempt-id'            => (int) ( $key ) + 1,
																				'submission-id'         => (int) $submission_key + 1,
																			),
																			$course->get_permalink()
																		)
																	);
																	?>
																			" title="View details">
																<?php include OHMYLMS_DIR . '/assets/images/icon/eye-icon.php'; ?>
																	</a>
																</div>

																<div class="ohmylms-mobile-td">
																	<div class="ohmylms-td submission-date" data-title="Date:">
															<?php echo $date; ?>
																	</div>
																</div>

															</div>
												<?php
												++$loop;
										}
										?>
											</div>
										<?php
							}
							?>
							</div>
						</div>

						<?php
				}
			}
			?>

			<!-- <div class="ohmylms-table-pagination">
				<strong>678</strong> items

				<a class="first-page" href="#" role="button" aria-label="First page" title="First Page">
					<?php include OHMYLMS_DIR . '/assets/images/icon/double-arrow-left-icon.php'; ?>
				</a>

				<a class="previous-page" href="#" role="button" aria-label="Previous page" title="Previous Page">
					<?php include OHMYLMS_DIR . '/assets/images/icon/arrow-left-icon.php'; ?>
				</a>

				<input type="number" name="current-page-number" id="current-page-number" min="1" max="678" value="1" class="current-page-number">

				<a class="next-page" href="#" role="button" aria-label="Next page" title="Next Page">
					<?php include OHMYLMS_DIR . '/assets/images/icon/arrow-right-icon.php'; ?>
				</a>

				<a class="last-page" href="#" role="button" aria-label="Last page" title="Last Page">
					<?php include OHMYLMS_DIR . '/assets/images/icon/double-arrow-right-icon.php'; ?>
				</a>

				of <strong>01</strong>
			</div> -->
		</div>
		<?php
	} else {
		?>
			<div class="no-course-data">
				<?php include OHMYLMS_DIR . '/assets/images/icon/no-course-found-image.php'; ?>
				<p>
					<?php echo __( 'No Assignment Submission Found.', 'ohmylms' ); ?>
				</p>
			</div>
		<?php
	}
	?>
</div>
