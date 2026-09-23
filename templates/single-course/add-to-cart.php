<?php
/**
 * The template for displaying single course add to cart
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/single-course/add-to-cart.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

// Check if course should show add to cart button
$should_show_add_to_cart = true;

// If course is cohort-based, check enrollment deadline
if ( $course && $course->get_type() === 'cohort-based' ) {
	$cohorts = $course->get_cohort();
	$has_active_enrollment = false;
	$current_time = current_time( 'timestamp' );
	foreach ( $cohorts as $cohort ) {
		if ( ! empty( $cohort['enrollment_deadline'] ) ) {
			$enrollment_end = strtotime( $cohort['enrollment_deadline'] );
			if ( $enrollment_end > $current_time ) {
				$has_active_enrollment = true;
				break;
			}
		}
	}
	
	$should_show_add_to_cart = $has_active_enrollment;
}

$args = array(
	'quantity'   => 1,
	'class'      => implode(
		' ',
		array_filter(
			array(
				$course->is_purchasable() && $course->is_in_stock() ? 'add_to_cart_button enroll-button creator-lms-button' : 'creator-lms-button enroll-button'
			)
		)
	),
	'attributes' => array(
		'data-course_id'	=> $course->get_id(),
		'rel'              	=> 'nofollow',
	),
);


// Only show add to cart button if enrollment is active
if ( $should_show_add_to_cart ) {
	if ($course->is_free()) {
		$cart_icon ='';
		$btn_text = __('Enroll now', 'ohmylms');
		
	}else {
		ob_start();
		include(CREATOR_LMS_DIR . '/assets/images/icon/shopping-cart-icon.php');
		$cart_icon = ob_get_clean();
		$btn_text = __('Buy Now', 'ohmylms');
	}

	echo sprintf(
		'<a href="%s" tabindex="0" data-quantity="%s" class="add_to_cart_button enroll-button creator-lms-button" %s>%s%s</a>',
		esc_url( $course->add_to_cart_url() ),
		esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
		isset( $args['attributes'] ) ? omlms_implode_html_attributes( $args['attributes'] ) : '',
		$cart_icon,
		$btn_text
	);
}
// Only show points-based purchase if enrollment is active
if ( $should_show_add_to_cart ) {
	$integrations = get_option( 'creatorlms_integrations', array() );
	if( creator_lms_is_pro() && isset($integrations['gamification']['is_enable']) && $integrations['gamification']['is_enable'] && \OMLMS\Engagement\Reward::maybe_met_rules( 'purchase_course' ) ) {
		if ( $course ) {
			if( $course->get_purchase_point() && $course->get_reward_disabled() !== 'yes' && $course->get_purchase_point() ) {
				$defaults = array(
					'quantity'   => 1,
					'class'      => implode(
						' ',
						array_filter(
							array(
								$course->is_purchasable() && $course->is_in_stock() ? 'add-to-cart-using-point-button enroll-button creator-lms-button' : 'creator-lms-button enroll-button',
							)
						)
					),
					'attributes' => array(
						'data-course_id' => $course->get_id(),
						'rel'            => 'nofollow',
					),
				);
				$args     = apply_filters( 'creator_lms_loop_add_to_cart_args', $defaults, $course );
				omlms_get_template( 'loop/add-to-cart-using-point.php', $args );
			}
		}
	}
}

?>
