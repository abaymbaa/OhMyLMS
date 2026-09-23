<?php
/**
 * Template for displaying thankyou.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/checkout/thankyou.php
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \CodeRex\Ecommerce\Checkout $checkout
 *
 * @var \CodeRex\Ecommerce\Data\Order $order
 * @var \OMLMS\Data\Student $student
 */

defined( 'ABSPATH' ) || exit();
do_action( 'creator_lms_account_header' );
$dashboard_url = omlms_get_page_permalink('student_dashboard');
$status = $order ? $order->get_status() : '';
?>

<?php omlms_get_template( 'global/creator-lms-celebration.php' ); ?>

<div class="creator-lms-order">
	<?php
	if ( $order ) :
		$items = $order->get_items();
		$is_course = true;
		foreach ( $items as $item ) {
			$course = $item->get_course();
			$is_course = true;
			if( !$course ){
				$id = $item->get_course_id();
				$course = omlms_get_membership($id);
				if( !$course ){
					continue;
				}
				$is_course = false;
			}
		}
		$item_object_name = $is_course ? 'Course' : 'Membership';

		do_action( 'creator_lms_before_thankyou', $order->get_id() );
		?>
		<section class="creator-lms-thankyou">
			<div class="creator-lms-container">
				<div class="creator-lms-thankyou-content">
					<div class="creator-lms-thankyou-content-left">
						<div class="creator-lms-thankyou-head">
							<?php if ( $order->has_status( 'failed' ) ) : ?>
								<span class="thakyou-icon">
									<svg width="72" height="71" fill="none" viewBox="0 0 72 71" xmlns="http://www.w3.org/2000/svg"><rect width="71" height="71" x=".5" fill="#FF4955" rx="35.5"/><path fill="#fff" d="M36 18c-9.94 0-18 8.06-18 18s8.06 18 18 18 18-8.06 18-18-8.06-18-18-18zm0 32.4c-7.942 0-14.4-6.458-14.4-14.4 0-7.942 6.458-14.4 14.4-14.4 7.942 0 14.4 6.458 14.4 14.4 0 7.942-6.458 14.4-14.4 14.4zm-1.8-23.4h3.6v10.8h-3.6V27zm0 14.4h3.6V45h-3.6v-3.6z"/></svg>
								</span>

								<h1 class="creator-lms-thankyou-title">
									<?php echo __( 'Payment Failed', 'ohmylms' ); ?>
								</h1>

								<div class="creator-lms-thankyou-text">
									<?php
									$failed_text = __( '<strong>Unfortunately, your payment could not be processed.</strong> Please try again or contact support if the issue persists.', 'ohmylms' );
									echo apply_filters( 'creatorlms_thankyou_failed_text', $failed_text, $order );
									?>
								</div>

								<div class="creator-lms-btn-area">
									<a href="<?php echo esc_url( omlms_get_page_permalink('checkout') ); ?>" class="creator-lms-button">
										<?php echo __( 'Return To Checkout', 'ohmylms' ); ?>
									</a>
								</div>
							<?php else : ?>
								<span class="thakyou-icon">
									<svg width="72" height="71" fill="none" viewBox="0 0 72 71" xmlns="http://www.w3.org/2000/svg"><rect width="71" height="71" x=".5" fill="#039814" rx="35.5"/><path fill="#fff" fill-rule="evenodd" d="M54.381 23.682a2.07 2.07 0 010 2.928l-17.78 17.78a6.213 6.213 0 01-8.785 0l-7.426-7.426a2.07 2.07 0 012.929-2.928l7.425 7.425a2.07 2.07 0 002.929 0l17.78-17.78a2.07 2.07 0 012.928 0z" clip-rule="evenodd"/></svg>
								</span>

								<h1 class="creator-lms-thankyou-title">
									<?php
										echo sprintf( __( 'Thank You %s', 'ohmylms' ), $student->get_name() );
									?>
								</h1>

								<div class="creator-lms-thankyou-text">
									<?php
									if( 'completed' !== $status ){
										$thankyou_text = sprintf(
										/* translators: %s: customer email */
											__('<strong>Your Order is ' . ucfirst($status) . '!</strong>', 'ohmylms')
										);
									}else{
										$thankyou_text = sprintf(
										/* translators: %s: customer email */
											__('<strong>Your Order is ' . ucfirst($status) . '!</strong> A confirmation mail has been sent to <br/> <span>%s</span>.', 'ohmylms'),
											$order->get_email()
										);
									}
									

									/**
									 * Filter the thank you message on the order confirmation page.
									 *
									 * @param string $thankyou_text The thank you message.
									 * @param WC_Order $order The order object.
									 */
									echo apply_filters( 'creatorlms_thankyou_text', $thankyou_text, $order, $is_course );
									?>
								</div>
								<?php if( 'completed' === $status ) : ?>
								<div class="creator-lms-btn-area">
									<a href="<?php echo esc_url($dashboard_url); ?>" class="creator-lms-button">
										<?php echo sprintf( __( 'Access To Your %s', 'ohmylms' ), $item_object_name ); ?>
									</a>
								</div>
								<?php endif; ?>
							<?php endif; ?>
							</div>

							<div class="creator-lms-customer-details">
								<h2 class="creator-lms-address-title">
									<?php echo __('Student Details', 'ohmylms'); ?>
								</h2>

								<p class="single-address email">
									<strong><?php echo __('Email'); ?></strong>
									<?php echo $student->get_email(); ?>
								</p>

								<p class="single-address country">
									<strong><?php echo __('Country'); ?></strong>
									<?php echo creator_lms_get_country_name_by_code($student->get_country()); ?>
								</p>
							</div>

							<?php
							/**
							 * Hook: creator_lms_after_thankyou.
							 *
							 * @param $order
							 */
							do_action( 'creator_lms_after_thankyou', $order );
							?>

						</div>

						<div class="creator-lms-thankyou-content-right">
							<div class="creator-lms-thankyou-table-wrapper order-summary">
								<h2 class="creator-lms-order-summary-title">
									<?php echo __('Order Summary', 'ohmylms'); ?>
								</h2>
								<?php
									omlms_get_template(
										'order/order-details.php',
										array(
											'order' => $order
										)
									);
								?>
							</div>
							<?php
							do_action( 'creator_lms_after_thankyou_table', $order, $is_course );
							?>
						</div>

					</div>


				</div>
			</section>

		<?php do_action( 'creator_lms_thankyou_' . $order->get_payment_method(), $order->get_id() ); ?>
		<?php do_action( 'creator_lms_thankyou', $order->get_id() ); ?>

		<?php
	endif;
	?>
</div>
