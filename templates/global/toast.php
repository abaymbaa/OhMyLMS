<?php
/**
 * The template for displaying toast notice
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/global/toast.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

?>

<!-- OhMyLMS Toast. You can use toast-warning, toast-danger type toast -->
<div class="creator-lms-toast" id="creator-lms-toast">
    <div class="creator-lms-toast-content">
        <span class="creator-lms-message">
            <?php echo __( 'Success! Your action was successful.', 'ohmylms' ); ?>
        </span>
        <span class="creator-lms-close" id="creator-lms-close-toast">
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="#19AA32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1L1 13M1 1l12 12"/></svg>
        </span>
    </div>
</div>