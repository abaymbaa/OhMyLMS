<?php
/**
 * The template for displaying single course level
 *
 * This template can be overridden by copying it to yourtheme/single-course/duration.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

if (!$course->get_total_enrolled_users()) {
	return;
}

$single_course_layout = get_option('ohmylms_single_course_page_layout','layout_1');
?>

<li class="course-count">
	<?php 
		if( 'layout_3' === $single_course_layout ) {
			echo '<svg width="20" height="17" fill="none" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg"><path fill="#7A8B9A" d="M.917 12.806v2.583c0 .476.386.861.861.861h12.056a.861.861 0 00.86-.86v-2.584A3.445 3.445 0 0011.25 9.36H4.361a3.444 3.444 0 00-3.444 3.445zm15.495 2.754c-.023.344.22.69.565.69H19a.861.861 0 00.862-.86v-2.584a3.444 3.444 0 00-3.445-3.445h-.756c-.216 0-.336.26-.21.436.608.848.966 1.886.966 3.009v2.583c0 .057-.002.114-.005.17zM11.25 4.194a3.444 3.444 0 11-6.889 0 3.444 3.444 0 016.89 0zm1.261 3.414c-.342-.046-.46-.449-.28-.744.47-.78.742-1.693.742-2.67a5.15 5.15 0 00-.742-2.67c-.18-.295-.062-.697.28-.743a3.444 3.444 0 110 6.827z"/></svg>';
		}else {
			include(OHMYLMS_DIR . '/assets/images/icon/user-icon.php'); 
		}
		
		echo sprintf(
			_n( '%d Student', '%d Students', $course->get_total_enrolled_users(), 'ohmylms' ),
			$course->get_total_enrolled_users()
		);
	?>
</li>
