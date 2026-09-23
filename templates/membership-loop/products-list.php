<?php
/**
 * Membership Loop Products List
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/membership-loop/products-list.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $membership;
if( $membership == null ) {
	return;
}
$courses = $membership->get_products();
if(empty($courses) && !is_array($courses)){
	return;
}
?>

<ul class="membership-courses" >
	<?php
	foreach ($courses as $single_course) {
		$course = omlms_get_course($single_course['id']);
		if(empty($course)){
			continue;
		}
		?>
		<li>
			<a href="<?php echo $course->get_permalink()?>">
				<?php echo $course->get_name() ?>
			</a>
		</li>
		<?php
	} ?>
</ul>



