<?php
/**
 * The template for displaying lesson's Assignment content
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/single-lesson/content-assignment.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \OMLMS\Data\Lesson $lesson
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if(get_post_type() === 'omlms-lesson'){
	$lesson = omlms_get_lesson(get_the_ID());
}elseif (get_post_type() === 'omlms-quiz'){
	$lesson = omlms_get_quiz(get_the_ID());
}elseif('omlms-session' === get_post_type()){
	$lesson = omlms_get_session(get_the_ID());
}else{
	$lesson = omlms_get_assignment(get_the_ID());
}
$course_id = creator_lms_get_course_by_content_id($lesson->get_id());
$course = omlms_get_course($course_id);
if( !$course ){
	return; // Course not found, exit the function.
}
$course_id = $course->get_id();
$chapters = $course->get_chapters('objects');
?>


<aside class="creator-lms-lesson-sidebar">
	<ul class="creator-lms-lesson-tab-nav">
		<li class="active" data-target="#lesson-content"><?php esc_html_e( 'Course Content', 'ohmylms' ); ?></li>
	</ul>

	<div class="creator-lms-lesson-tab-content">
		<div class="creator-lms-lesson-single-tab-content lesson-content active" id="lesson-content">
			<div class="creator-lms-lesson-sidebar-accordion">
				<!-- First item should be active. First items accordion .creator-lms-accordion-body should be active -->
				<?php
					foreach ( $chapters as $chapter ) {
						omlms_get_template('single-lesson/loop/chapter.php', array('chapter' => $chapter));
					}
				?>
			</div>
		</div>

		<div class="creator-lms-lesson-single-tab-content lesson-comment" id="lesson-comment">

		</div>
	</div>

</aside>
