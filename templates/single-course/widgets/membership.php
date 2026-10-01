<?php
/**
 * The template for displaying single course sidebar's membership
 *
 * This template can be overridden by copying it to yourtheme/single-course/widgets/membership.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
$membership_url = ohmylms_get_membership_url();
?>

<!-- membership widget -->
<div class="ohmylms-sidebar-widget ohmylms-widget-membership">
    <span class="membership-tag">
        <svg width="18" height="13" fill="none" viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg"><path fill="var(--ohmylms-primary-color)" d="M17.98 5.025l-1.7 7.434a.695.695 0 01-.691.54H2.352a.695.695 0 01-.69-.54L.015 5.026a.677.677 0 01.249-.684.695.695 0 01.732-.075L5.032 6.2 8.376.347A.687.687 0 018.977 0a.696.696 0 01.602.347l3.344 5.861 4.062-1.95a.697.697 0 01.748.065.685.685 0 01.247.702z"/></svg>

        <?php echo __( 'Membership', 'ohmylms' ); ?>
    </span>

    <h3 class="sidebar-widget-title">
        <?php echo __( 'Become a Member', 'ohmylms' ); ?>
    </h3>

    <p class="sidebar-widget-description">
        <?php echo __( 'Join the community with a membership plan to get access to multiple experiance.', 'ohmylms' ); ?>
    </p>

    <div class="ohmylms-button-area">
        <a href="<?php echo $membership_url; ?>" class="ohmylms-button">
            <?php echo __( 'Select Membership', 'ohmylms' ); ?>
        </a>
    </div>

</div>
<!-- /.sidebar single widget -->
