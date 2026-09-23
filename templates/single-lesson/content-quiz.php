<?php
/**
 * The template for displaying lesson's quiz
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/single-lesson/content-quiz.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \OMLMS\Data\Quiz $quiz
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
$course_id = creator_lms_get_course_by_content_id(get_the_ID());
?>

<?php while ( have_posts() ) : ?>
	<?php the_post(); ?>
	<div class="creator-lms-lesson-content-body content-type-quiz">
		<h1><?php echo get_the_title() ?></h1>

		<ul class="creator-lms-assignment-quiz-meta">
			<li class="duratioin">
				<strong><?php echo __('Questions: ', 'ohmylms'); ?></strong>
				<?php echo $quiz->get_total_question()?>
			</li>

			<?php if( $quiz->get_timer() ) : ?>
			<li class="duratioin">
				<strong><?php echo __('Duration: ', 'ohmylms'); ?></strong>
				<?php echo $quiz->get_timer() .' minutes'?>
			</li>
			<?php endif; ?>

			<li class="total-marks">
				<strong><?php echo __('Total Marks: ', 'ohmylms'); ?></strong>
				<?php echo $quiz->get_total_marks() ?>
			</li>

			<li class="pass-mark">
				<strong><?php echo __('Passing Mark: ', 'ohmylms'); ?></strong>
				<?php echo $quiz->get_passing_grade() ?>
			</li>
		</ul>

		<div class="creator-lms-wysiwyg-content">
            <?php
                the_content();
            ?>
        </div>
		
		<div class="creator-lms-table creator-lms-quiz-table">
			<div class="creator-lms-tr creator-lms-head">
				<div class="creator-lms-th date">Date</div>
				<div class="creator-lms-th question">Question</div>
				<div class="creator-lms-th total-marks">Total Marks</div>
				<div class="creator-lms-th earned-marks">Earned Marks</div>
				<div class="creator-lms-th status">Status</div>
			</div>

			<?php
			$quiz_attempts = $quiz->get_all_quiz_attempts(get_current_user_id(),$course_id);

			if(!empty($quiz_attempts)){
				foreach ($quiz_attempts as $attempt){
					?>
					<div class="creator-lms-tr">
						<div class="creator-lms-td-handle" role="button">
							<svg width="10" height="6" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg"><path stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1l4 4 4-4"/></svg>
						</div>

						<div class="creator-lms-td date">
							<?php echo date('M j, Y g:i a', strtotime($attempt['start_date'])); ?>
						</div>

						<div class="creator-lms-td question">
							<?php echo $attempt['total_answers_count'] ?>
						</div>
						<div class="creator-lms-td total-marks">
							<?php echo $quiz->get_total_marks(); ?>
						</div>

						<div class="creator-lms-td earned-marks">
							<?php echo  !empty($attempt['total_achieved_marks']) ? $attempt['total_achieved_marks'] : 0; ?>
						</div>

						<div class="creator-lms-td status">
							<?php
							if($attempt['status'] === 'in-review'){
								echo '<span class="pending">Review</span>';
							}else{
								if($attempt['total_achieved_marks'] === $quiz->get_total_marks()){
									echo '<span class="passed">Pass</span>';
								}elseif ($attempt['total_achieved_marks'] >= $quiz->get_passing_grade()) {
									echo '<span class="passed">Pass</span>';
								}elseif ($attempt['total_achieved_marks'] < $quiz->get_passing_grade()) {
									echo '<span class="failed">Fail</span>';
								}elseif (empty($attempt['end_date']) && $attempt['end_date']  !== '0000-00-00 00:00:00') {
									echo '<span class="pending">Pending</span>';
								}
							}
							?>
						</div>

						<div class="creator-lms-mobile-td">
							<div class="creator-lms-td question" data-title="Question">
								<?php echo $attempt['total_answers_count'] ?>
							</div>

							<div class="creator-lms-td total-marks" data-title="Total Marks">
								<?php echo $quiz->get_total_marks(); ?>
							</div>

							<div class="creator-lms-td earned-marks" data-title="Earned Marks">
								<?php echo  $attempt['total_achieved_marks']; ?>
							</div>
						</div>
					</div>

					<?php
				}
			}else {
				?>
				<div class="creator-lms-tr no-data">
					<?php
						include(CREATOR_LMS_DIR . '/assets/images/icon/no-review-image.php');
						echo __( 'No Data Found.', 'ohmylms' );
					?>
				</div>
				<?php
			}
			?>


		</div>
	</div>
<?php endwhile; // end of the loop. ?>
