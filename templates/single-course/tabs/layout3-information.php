<?php
/**
 * The template for displaying single course information
 *
 * This template can be overridden by copying it to yourtheme/single-course/tabs/layout3-information.php
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

if(!$course){
    return;
}

$course_id = $course->get_id();
$chapters = $course->get_chapters('objects');
$lessons = $course->get_lessons('objects');

$single_course_layout = get_option('ohmylms_single_course_page_layout','layout_1');

$student = new \OhMyLMS\Data\Student(get_current_user_id());
$certificate = $course->get_certificate();

$maybe_enrolled     = false;

if ( $student ) {
    $maybe_enrolled = $student->maybe_enrolled( $course->get_id() );
}

?>

<div class="ohmylms-course-chapters layout3-content-box layout3-chapters">
	<div class="chapters-header">
		<div class="chapters-header-left">
			<h2 class="content-box-title">
				<?php echo apply_filters( 'ohmylms_course_content_title', __( 'Course Overview', 'ohmylms' ) ); ?>

				<span class="small-title">
					<?php  
						//----total chapters----
						$total_chapters = !empty( $chapters ) ? count($chapters) : 0;
						echo sprintf(_nx(
							'1 chapter',
							'%s chapters',
							$total_chapters,
							'chapter count',
							'ohmylms'
						), $total_chapters );
						
						//----total lesson----
						$total_lesson = !empty( $course ) ? $course->get_lessons_count() : 0;
						if( $total_lesson > 0 ) {
							echo ' • ';
							echo sprintf(_nx(
								'1 lesson',
								'%s lessons',
								$total_lesson,
								'lesson count',
								'ohmylms'
							), $total_lesson );
						}
						
						if($maybe_enrolled){
							//----total time----
							if( ohmylms_format_duration($course->get_duration()) ) {
								echo ' • ';
								echo ohmylms_format_duration($course->get_duration());
							} 
						}else {
							if($certificate){
								echo ' • ';
								echo __('Certificate of completion', 'ohmylms');
							}
						}
					?> 
				</span>
			</h2>
			
		</div>

		<div class="chapters-header-right">
			<div class="ohmylms-chapter-toggle">
				<button class="chapter-expand" type="button" aria-expanded="false" aria-controls="ohmylms-chapters">
					<?php echo __( 'Expand All', 'ohmylms' ); ?>
				</button>

				<button class="chapter-collapse" type="button" aria-expanded="true" aria-controls="ohmylms-chapters" style="display: none;">
					<?php echo __( 'Collapse All', 'ohmylms' ); ?>
				</button>
			</div>
		</div>
	</div>

	<?php
	if(!empty($chapters)){
		foreach ( $chapters as $chapter ) {
			
			$chapter_id 			= $chapter->get_id();
			$chapter_title 			= $chapter->get_name();
			$chapter_lessons 		= $chapter->get_lessons('objects');
			$chapter_lesson_count 	= count($chapter_lessons);
			$is_chapter_completed 	= $chapter->maybe_all_content_is_completed(get_current_user_id());
			$lessonProgress 		= $chapter->total_completion_rate(get_current_user_id());
			
			$chapter_lesson_titles 	= array();
			$description_class 		= empty( $chapter->get_description() ) ? 'no-description' : '';

			?>
			
			<div class="ohmylms-single-chapter <?php echo esc_attr( $description_class ); ?>">
				<div class="chapter-title-wrapper">
					<div class="chapter-title-description">
						<h3 class="chapter-title-text">
							<?php  echo $chapter_title; ?>
						</h3>

						<?php
							if( !empty($chapter->get_description()) ) {
								echo '<div class="ohmylms-wysiwyg-content">'.$chapter->get_description().'</div>';
							}
						?>
					</div>

					<?php if($maybe_enrolled){ ?>
						<div class="chapter-progress">
							<?php if($is_chapter_completed){ ?>
								<svg class="course-completed" width="34" height="34" fill="none" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><rect width="33" height="33" x=".5" y=".5" stroke="#19AA32" rx="16.5"/><rect width="20" height="20" x="7" y="7" fill="#19AA32" rx="10"/><path fill="#fff" d="M20.373 13.818l-4.628 4.628-2.122-2.121a.818.818 0 00-1.157 1.157l2.7 2.7a.818.818 0 001.157 0l5.207-5.207a.818.818 0 10-1.157-1.157z"/></svg>
							<?php }else {
								?>
								<span class="ohmylms-circle-progressbar">
									<?php echo ohmylms_circular_progressbar(45, $lessonProgress, 4, '#EAEDF4', 'var(--ohmylms-progressbar-color)'); ?>
									<small><?php echo $lessonProgress.'%';?></small>
								</span>
								<?php
							}
							?>
						</div>
					<?php } ?>
				</div>

				<ul class="ohmylms-chapter-content-list <?php echo count($chapter_lessons) > 2 ? 'ohmylms-expandable' : '' ?>">
					<?php
						foreach ( $chapter_lessons as $index => $lesson ) {
							if( !$lesson ){
								continue;
							}
							$lesson_id 					= $lesson->get_id();
							$lesson_title 				= $lesson->get_name();
							$type 						= $lesson->get_type();
							$content_type 				= get_post_meta( $lesson_id, '_content_type', true );
							$is_lesson_completed 		= $student->maybe_completed($lesson_id) ? 'checked' : '';

							switch ($type) {
								case 'video':
									$icon = 'play-circle-icon.php';
									break;
								case 'audio':
									$icon = 'audio-icon.php';
									break;
								case 'text':
									$icon = 'text-file-icon.php';
									break;
								case 'quiz':
									$icon = 'quiz-icon.php';
									break;
								case 'assignment':
									$icon = 'assignment-icon.php';
									break;
								case 'event':
									$icon = 'calendar-icon.php';
									break;
								default:
									$icon = 'text-file-icon.php';
									break;
							}
							
							if( 'assignment' === $type && !ohmylms_is_pro() ){
								continue;
							}

							if('session' == $content_type) {
								$icon = 'live-file-icon.php';
								$type = $content_type;
							}
							
							?>

							<li class="ohmylms-chapter-content-list-item type-<?php echo $type ; ?>">
								<span class="icon">
									<?php include(OHMYLMS_DIR . '/assets/images/icon/'.$icon); ?>
								</span>

								<a href="<?php echo esc_url( ohmylms_get_pretty_content_permalink( $lesson_id ) ); ?>">
									<?php echo $lesson_title; ?>
								</a>

								<?php if( 'checked' === $is_lesson_completed ){ ?>
									<span class="completed-mark">
										<svg width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#0CAE32"/><path fill="#fff" d="M13.39 6.28l-5.335 5.41L5.61 9.21a.934.934 0 00-1.334 0 .966.966 0 000 1.353l3.112 3.157a.937.937 0 001.334 0l6.002-6.087a.966.966 0 000-1.353.934.934 0 00-1.334 0z"/></svg>
									</span>
								<?php } ?>
							</li>
							<?php
						}
					?>
				</ul>

				<?php if( count($chapter_lessons) > 2 ){ ?>
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
			</div>

			<?php
		}
	}

	?>
</div>


