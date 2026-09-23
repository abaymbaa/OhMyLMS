<?php
/**
 * Template for displaying no cart template.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/checkout/no-cart-data.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();
?>

<div class="creator-lms-no-cart-data">
    <div class="creator-lms-container">
        <div class="creator-lms-no-cart-data-wrapper">
            <h4 class="no-cart-title"><?php echo __('Your cart is empty','ohmylms') ?></h4>
            <a href="<?php echo $archive_page_url; ?>" class="creator-lms-button">
                <?php echo __('Continue Learning','ohmylms') ?>
            </a>
        </div>
    </div>
</div>
