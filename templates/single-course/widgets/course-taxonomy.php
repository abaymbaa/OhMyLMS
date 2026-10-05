<?php
/**
 * The template for displaying single course sidebar's course taxonomy.
 *
 * Course categories and tags were replaced by the curriculum and Learning Tracks. The page-feature
 * keys ('category', 'tag', and their '_with_enroll' variants) are unchanged, so existing settings keep
 * working: the "category" options show where the course sits in the curriculum and the "tag" options
 * show the published Learning Tracks it belongs to.
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

$page_features = (array) get_option('ohmylms_single_course_page_features', array());

$current_student_id = get_current_user_id();
$student = new \OhMyLMS\Data\Student( $current_student_id );
$maybe_enrolled = $student->maybe_enrolled( $course->get_id() );

$show_curriculum = in_array( $maybe_enrolled ? 'category_with_enroll' : 'category', $page_features, true );
$show_tracks     = in_array( $maybe_enrolled ? 'tag_with_enroll' : 'tag', $page_features, true );

// Where the course sits in the curriculum, e.g. "Programming > Python".
$curriculum = array();
if ( $show_curriculum ) {
	foreach ( \OhMyLMS\Curriculum\Placement::items( $course->get_id() ) as $entry ) {
		$curriculum[] = implode( ' › ', array_merge( (array) $entry['path'], array( $entry['name'] ) ) );
	}
}

// Learners only see published tracks.
$tracks = array();
if ( $show_tracks ) {
	foreach ( \OhMyLMS\Curriculum\Placement::tracks( $course->get_id() ) as $entry ) {
		if ( 'published' === $entry['status'] ) {
			$tracks[] = $entry['title'];
		}
	}
}

if ( $curriculum || $tracks ) {
	?>
	<!-- course meta widget -->
	<div class="ohmylms-sidebar-widget ohmylms-widget-course-taxonomy">
		<?php
		if ( $curriculum ) {
			echo '<div class="single-taxonomy ohmylms-category">';
				echo '<h3 class="sidebar-widget-title">' . esc_html__( 'Curriculum', 'ohmylms' ) . '</h3>';
				echo '<ul class="category-lists">';
					foreach ( $curriculum as $path ) {
						echo '<li><a href="javascript:void(0)">' . esc_html( $path ) . '</a></li>';
					}
				echo '</ul>';
			echo '</div>';
		}

		if ( $tracks ) {
			echo '<div class="single-taxonomy ohmylms-tag">';
				echo '<h3 class="sidebar-widget-title">' . esc_html__( 'Learning tracks', 'ohmylms' ) . '</h3>';
				echo '<ul class="tag-lists">';
					foreach ( $tracks as $title ) {
						echo '<li><a href="javascript:void(0)">' . esc_html( $title ) . '</a></li>';
					}
				echo '</ul>';
			echo '</div>';
		}
		?>
	</div>
	<!-- /.sidebar single widget -->
	<?php
}
