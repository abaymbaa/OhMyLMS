<?php
/**
 * Template for displaying name of student profile
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/profile/name.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();

?>


<h1 class="student-name">
	<?php echo sprintf( __( 'Welcome, %s', 'ohmylms' ), $user->display_name ); ?>
</h1>
