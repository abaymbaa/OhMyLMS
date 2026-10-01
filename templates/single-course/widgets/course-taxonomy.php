<?php
/**
 * The template for displaying single course sidebar's course texonomy
 *
 * This template can be overridden by copying it to yourtheme/single-course/widgets/course-taxonomy.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$page_features = get_option('ohmylms_single_course_page_features');
$is_enabeled_category = in_array('category', $page_features);
$is_enabeled_enrolled_category = in_array('category_with_enroll', $page_features);

$is_enabeled_tag = in_array('tag', $page_features);
$is_enabeled_enrolled_tag = in_array('tag_with_enroll', $page_features);

$current_student_id = get_current_user_id();
$student = new \OhMyLMS\Data\Student( $current_student_id );
$maybe_enrolled = $student->maybe_enrolled( $course->get_id() );


// $categories = get_the_term_list( $course->get_id(), 'course_category', '<ul class="category-lists"><li>', ',</li><li>', '</li></ul>' );

// $tags = get_the_term_list( $course->get_id(), 'course_tag', '<ul class="tag-lists"><li>', '</li><li>', '</li></ul>');

$categories = get_the_terms($course->get_id(), 'course_category');
$tags = get_the_terms($course->get_id(), 'course_tag');

if( $maybe_enrolled ){
	if( ($is_enabeled_enrolled_category && $categories) || ($is_enabeled_enrolled_tag && $tags) ){
		?>
		<!-- course meta widget -->
		<div class="ohmylms-sidebar-widget ohmylms-widget-course-taxonomy">
			<?php
			if ( $is_enabeled_enrolled_category && $categories ) {
				echo '<div class="single-taxonomy ohmylms-category">';
					echo '<h3 class="sidebar-widget-title">' . __( 'Categories', 'ohmylms' ) . '</h3>';
					echo '<ul class="category-lists">';
						$total = count($categories);
						foreach ($categories as $index => $category) {
							echo '<li><a href="javascript:void(0)">' . esc_html($category->name);
							if ($index < $total - 1) {
								echo ',';
							}
							echo '</a></li>';
						}
					echo '</ul>';
				echo '</div>';
			}
			
			if ( $is_enabeled_enrolled_tag && $tags ) {
				echo '<div class="single-taxonomy ohmylms-tag">';
					echo '<h3 class="sidebar-widget-title">' . __( 'Tags', 'ohmylms' ) . '</h3>';
					echo '<ul class="tag-lists">';
						foreach ($tags as $tag) {
							echo '<li><a href="javascript:void(0)">' . esc_html($tag->name) . '</a></li>';
						}
					echo '</ul>';
				echo '</div>';
			}
			?>
		</div>
		<!-- /.sidebar single widget -->
		<?php 
	} 
}else {
	if( ($is_enabeled_category && $categories) || ($is_enabeled_tag && $tags) ){
		?>
		<!-- course meta widget -->
		<div class="ohmylms-sidebar-widget ohmylms-widget-course-taxonomy">
			<?php
			if ( $is_enabeled_category && $categories ) {
				echo '<div class="single-taxonomy ohmylms-category">';
					echo '<h3 class="sidebar-widget-title">' . __( 'Categories', 'ohmylms' ) . '</h3>';
					echo '<ul class="category-lists">';
						$total = count($categories);
						foreach ($categories as $index => $category) {
							echo '<li><a href="javascript:void(0)">' . esc_html($category->name);
							if ($index < $total - 1) {
								echo ',';
							}
							echo '</a></li>';
						}
					echo '</ul>';
				echo '</div>';
			}
			
			if ( $is_enabeled_tag && $tags ) {
				echo '<div class="single-taxonomy ohmylms-tag">';
					echo '<h3 class="sidebar-widget-title">' . __( 'Tags', 'ohmylms' ) . '</h3>';
					echo '<ul class="tag-lists">';
						foreach ($tags as $tag) {
							echo '<li><a href="javascript:void(0)">' . esc_html($tag->name) . '</a></li>';
						}
					echo '</ul>';
				echo '</div>';
			}
			?>
		</div>
		<!-- /.sidebar single widget -->
		<?php 
	} 
} 
?>
