<?php
/**
 * Recurring Totals Template
 *
 * This template can be overridden by copying it to yourtheme/creatorlms/checkout/recurring-subscription-totals.php.
 *
 * @package   CreatorLmsPro
 * @version  1.0.0
 */
defined( 'ABSPATH' ) || exit;
?>

<strong><?php echo $price_html; ?></strong><br>
<span><?php echo esc_html__('First renewal:', 'creator-lms') . ' ' . esc_html($renewal_date); ?></span><br>
