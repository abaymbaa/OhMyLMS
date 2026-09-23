<?php
/**
 * Content wrappers
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/global/wrapper-end.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

$template = get_template();

switch ( $template ) {
	case 'twentytwentyone':
		echo '</section>';
		break;
	default:
		echo '</section></main>';
		break;
}
