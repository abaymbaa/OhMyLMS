<?php
/**
 * The template for displaying single course capacity
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

$single_course_layout = get_option('ohmylms_single_course_page_layout','layout_1');

if ($course->get_has_capacity()) { ?>
	<li class="course-capacity">
		
		<?php
			if( !$course->get_has_capacity() || ($course->get_has_capacity() && $course->get_capacity() > $course->get_total_enrolled_users()) ){
				if( 'layout_3' === $single_course_layout ) {
					echo '<svg width="18" height="18" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill="#7A8B9A" d="M2 18a.965.965 0 01-.712-.288A.972.972 0 011 17v-3c0-.55.196-1.02.588-1.412A1.931 1.931 0 013 12h12c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v3a.968.968 0 01-.288.713A.964.964 0 0116 18a.973.973 0 01-.712-.288A.965.965 0 0115 17v-3H3v3a.968.968 0 01-.288.713A.964.964 0 012 18zm-.5-7c-.417 0-.77-.146-1.062-.437A1.45 1.45 0 010 9.5c0-.417.145-.771.438-1.062.293-.29.647-.437 1.062-.438.415-.001.77.145 1.063.438.293.293.439.647.437 1.062a1.471 1.471 0 01-.437 1.063A1.42 1.42 0 011.5 11zM4 11V2c0-.55.196-1.02.588-1.412A1.93 1.93 0 016 0h6c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v9H4zm12.5 0c-.417 0-.77-.146-1.062-.437A1.45 1.45 0 0115 9.5c0-.417.145-.771.438-1.062.293-.29.647-.437 1.062-.438.415-.001.77.145 1.063.438.293.293.439.647.437 1.062a1.471 1.471 0 01-.437 1.063A1.42 1.42 0 0116.5 11z"/></svg>';
				}else {
					include(OHMYLMS_DIR . '/assets/images/icon/chair-icon.php');
				}

				echo sprintf(
					_n( '%d Available Seat', '%d Available Seats', ((int)($course->get_capacity()) - (int)$course->get_total_enrolled_users()), 'ohmylms' ),
					((int)($course->get_capacity()) - (int)$course->get_total_enrolled_users())
				);
			}
		?>
	</li>
<?php }

