<?php
/**
 * Template for displaying order review in mobile devices.
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/checkout/review-order-mobile.php
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 * @global \CodeRex\Ecommerce\Checkout $checkout
 */

defined( 'ABSPATH' ) || exit;
?>

<div class="ohmylms-order-review-toggle">
    <div class="order-review-toggle-head">
        <p class="review-toggle-title">
            Show Order Summary

            <svg width="11" height="7" fill="none" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" style="font-family: Inter, Bangla682, sans-serif;"><path stroke="#141618" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 1l4.5 4.5L10 1"></path></svg>
        </p>

        <span class="total-price">
            <?php
            if(isset($_GET['membership_id'])) {
                $membership_id = sanitize_text_field($_GET['membership_id']);
                $total = MembershipHelper::get_plan_price($membership_id);
            }
            else {
                $cart_items = \CodeRex\Ecommerce\ecommerce()->cart->get_cart_contents();
                $total = \CodeRex\Ecommerce\ecommerce()->cart->get_total($cart_items);
            }
            echo ohmylms_price($total);
            ?>
        </span>
    </div>

    <?php ohmylms_order_review($checkout); ?>
</div>
