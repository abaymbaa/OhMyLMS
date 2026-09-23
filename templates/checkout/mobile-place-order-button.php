<?php
/**
 * Template for displaying place order button in mobile devices.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/checkout/mobile-place-order-button.php
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \CodeRex\Ecommerce\Checkout $checkout
 */

defined( 'ABSPATH' ) || exit;

?>

<div class="creator-lms-mobile-order-button">
    <div class="creator-lms-mobile-order-button-container">
        <div class="mobile-order-button-price">
            <p class="review-toggle-title">
                <?php echo __('Total (01 course)') ?>
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
                
                echo wp_kses( omlms_price( $total ), array(
                    'span' => array('class' => array()),
                    'b' => array(),
                    'strong' => array()
                ) );
                ?>
            </span>
        </div>
        
        <button
            type="submit"
            class="creator-lms-button creator-lms-place-order-button"
            name="creator_lms_checkout_place_order"
            aria-label="Complete Checkout"
        >
            <?php echo __( 'Complete Checkout', 'ohmylms' ); ?>
            <span class="creator-lms-loader"></span>
        </button>
    </div>
</div>
