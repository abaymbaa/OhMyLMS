<?php
/**
 * Courses listing page header
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/loop/header.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>
<header class="creator-lms-courses-header">
	<?php

	if ( apply_filters( 'creator_lms_show_page_title', true ) ) :
		?>
		<h1 class="courses-section-title page-title">
			<?php  echo __('Discover Courses','ohmylms'); ?>
		</h1>
	<?php endif; ?>

	<?php
	do_action( 'creator_lms_archive_description' );
	?>
</header>
