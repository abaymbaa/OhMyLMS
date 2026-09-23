<?php
/**
 * Template for displaying membership of student profile
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/profile/membership.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();
use function CodeRex\Ecommerce\ecommerce;

?>

<div class="creator-lms-student-profile-tab-content student-membership">
	<h4 class="profile-tab-title">
		<?php echo __( 'My Membership', 'ohmylms' ); ?>
	</h4>

    <div class="creator-lms-dashboard-table my-membership-table">
		<div class="dashboard-table-head">
			<div class="dashboard-table-tr">
				<div class="dashboard-table-td membership-id">
					<?php echo __( 'ID', 'ohmylms' ); ?>
				</div>

				<div class="dashboard-table-td membership-plan">
					<?php echo __( 'Membership Plan', 'ohmylms' ); ?>
				</div>

				<div class="dashboard-table-td expiration">
					<?php echo __( 'Next Payment', 'ohmylms' ); ?>
				</div>

				<div class="dashboard-table-td billing">
					<?php echo __( 'Billing', 'ohmylms' ); ?>
				</div>

				<div class="dashboard-table-td action">
                    <?php echo __( 'Action', 'ohmylms' ); ?>
				</div>
			</div>
		</div>

		<div class="dashboard-table-body">
			<?php
				global $wpdb;
				if(count($student_orders->orders) > 0){
					$membership_count = 0;
					$enrolled_membership = 0;
					$showing_membership_ids = [];
					foreach ( $student_orders->orders as $student_order ) {
						$order = ecommerce_get_order( $student_order );
						
						$item_count = $order->get_item_count() - $order->get_item_count_refunded();
						$items = $order->get_items();
						
						// First, handle recurring subscriptions
						$post_ids = $wpdb->get_col( $wpdb->prepare(
							"SELECT post_id FROM $wpdb->postmeta WHERE meta_key = %s AND meta_value = %s",
							'_original_order_id',
							$order->get_id()
						) );
						$post_ids = !empty($post_ids) ? (array)$post_ids : [];
						if ( ! empty( $post_ids ) ) {
							foreach ( $post_ids as $subscription_id ) {
								$subscription = ecommerce_get_subscription( $subscription_id );
								if ( ! $subscription ) {
									continue;
								}
								$membership_id 	= $subscription->get_membership_id();
								$membership 	= function_exists( 'omlms_get_membership' ) ? omlms_get_membership( $membership_id ) : null;

								if ($membership){
									$subscription_length = $membership->get_billing_period();
									$is_one_time = $subscription_length === 'one_time';
									$products = $membership->get_products();
									$membership_count++;
								}
								if($membership && $membership_count){
								$enrolled_membership++;
								if( in_array($membership->get_id(), $showing_membership_ids) ){
									continue;
								}
								$showing_membership_ids[] = $membership->get_id();

								$price              = $membership->get_regular_price();
								$billing_period     = $membership->get_subscription_period();
								if( 'one_time' !== $billing_period ) {
									$billing_interval   = $membership->get_subscription_period_interval();
									
									$stored_totals = ecommerce()->session->get('cart_totals');
									if (!empty($stored_totals) && isset($stored_totals['tax_rate']) && $stored_totals['tax_rate'] > 0) {
										$tax_rate = $stored_totals['tax_rate'];
										// Now calculate tax based on the discounted total.
										$tax_data = \TaxCalculator::get_instance()->calculate_tax($tax_rate, array(
											'total' => $price,
										));
										$price = isset($tax_data['total_with_tax']) ? $tax_data['total_with_tax'] : $price;
									}
									$price_html = omlms_price($price) . ' / ' . $billing_period;
									$now        = current_time('timestamp');

									switch ($billing_period) {
										case 'month':
											$renewal = strtotime("+$billing_interval month", $now);
											break;
										case 'week':
											$renewal = strtotime("+$billing_interval week", $now);
											break;
										case 'day':
											$renewal = strtotime("+$billing_interval day", $now);
											break;
										case 'year':
										default:
											$renewal = strtotime("+$billing_interval year", $now);
											break;
									}
									$renewal_date = date_i18n(get_option('date_format'), $renewal);
								}else{
									$renewal_date = '';
								}
								
								?>
								<div class="dashboard-table-tr">
									<div class="table-accordion-handler"></div>

									<div class="dashboard-table-td membership-id">
										#<?php echo $subscription->get_id(); ?>
									</div>

									<div class="dashboard-table-td bold-td membership-plan">
										<?php echo $membership->get_name() ;?>
									</div>

									<?php if ( $is_one_time ) { ?>
										<div class="dashboard-table-td expiration">
											<?php echo __( 'N/A', 'ohmylms' ); ?>
										</div>
									<?php } elseif ( $renewal_date) { ?>
										<div class="dashboard-table-td expiration">
											<?php echo esc_html( $renewal_date ); ?>
										</div>
									<?php } ?>

									<div class="dashboard-table-td billing">
										<?php
										if ( $is_one_time ) {
											// For one-time payments, show the total amount with tax
											$items = $order->get_items();
											foreach ( $items as $item ) {
												if ( $item->get_course_id() == $membership_id ) {
													$item_total = $item->get_total();
													$tax_amount = \TaxCalculator::get_instance()->calculate_tax( $order->get_tax_rate(), array( 'total' => $item_total ) );
													$total_with_tax = is_array( $tax_amount ) && isset($tax_amount['total_with_tax']) ? $tax_amount['total_with_tax'] : $item_total;
													echo omlms_price( $total_with_tax ) . '/' . __( 'One Time', 'ohmylms' );
													break;
												}
											}
										} else {
											// For recurring payments, show recurring amount with period
											$tax_amount = \TaxCalculator::get_instance()->calculate_tax( $order->get_tax_rate(), array( 'total' => $subscription->get_recurring_amount() ) );
											$recurring_amount = is_array( $tax_amount ) && isset($tax_amount['total_with_tax']) ? $tax_amount['total_with_tax'] : $subscription->get_recurring_amount();
											echo omlms_price($recurring_amount).'/'.$subscription->get_billing_period();
										}
										?>
									</div>

									<div class="dashboard-table-td action">
										<?php
										$cancellable_statuses = array('active', 'trialing');
										// Disable cancel button for one-time payments
										if ( ! $is_one_time && in_array($subscription->get_status(), $cancellable_statuses)) :
										?>
											<a href="#" class="do-membership-cancel creator-lms-table-action-btn" title="<?php esc_attr_e( 'Cancel', 'ohmylms' ); ?>">
												<?php echo __('Cancel', 'ohmylms'); ?>
											</a>
										<?php elseif ( $is_one_time ) : ?>
											<button type="button" class="creator-lms-table-action-btn" disabled style="opacity: 0.5; cursor: not-allowed;">
												<?php echo __('Cancel', 'ohmylms'); ?>
											</button>
										<?php else: ?>
											<span class="creator-lms-status-label" style="text-transform: capitalize">
												<?php
												$status_name = esc_html( $subscription->get_status() );
												echo sprintf( __('%s', 'ohmylms'), $status_name );
												?>
											</span>
										<?php endif; ?>

										<div class="creator-lms-alert">
											<div class="creator-lms-alert-inner">
												<div class="creator-lms-alert-wrapper">
													<div class="creator-lms-alert-body">
														<div class="icon">
															<svg fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#F85656" fill-rule="evenodd" d="M12 0c6.626 0 12 5.374 12 12s-5.374 12-12 12S0 18.626 0 12 5.374 0 12 0zm-1.286 13.033V6.856c0-.708.578-1.285 1.286-1.285.708 0 1.286.583 1.286 1.285v6.177c0 .702-.578 1.285-1.286 1.285a1.288 1.288 0 01-1.286-1.285zm1.28 2.664a1.457 1.457 0 110 2.915 1.457 1.457 0 010-2.915z" clip-rule="evenodd"></path></svg>
														</div>

														<div class="title-area">
															<h4>
																<?php echo __('Are you sure you want to cancel this subscription?', 'ohmylms'); ?>
															</h4>
															<p>
																<?php echo __('Cancelling this subscription will remove your access to all associated courses at the end of the billing period.', 'ohmylms'); ?>
															</p>
														</div>
													</div>

													<div class="creator-lms-alert-footer">
														<button type="button" class="creator-lms-button creator-lms-alert-cancel" aria-label="<?php echo __('Cancel', 'ohmylms'); ?>">
															<?php echo __('Cancel', 'ohmylms'); ?>
														</button>

														<button type="button" class="creator-lms-button creator-lms-danger creator-lms-cancel-membership" aria-label="<?php echo __('Confirm Cancel', 'ohmylms'); ?>" data-order-id="<?php echo $order->get_id(); ?>" data-membership-id="<?php echo $membership->get_id();?>" data-subscription-id="<?php echo $subscription->get_id();?>" data-student-id="<?php echo get_current_user_id();?>">
															<?php echo __('Confirm Cancel', 'ohmylms'); ?>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="dashboard-table-mobile-td">
										<div class="dashboard-table-td membership-id" data-title="ID: ">
											#<?php echo $order->get_id(); ?>
										</div>

										<div class="dashboard-table-td expiration" data-title="Expiration: ">
											<?php
												if ( $membership ) {
													echo omlms_price($order->get_formatted_order_total());
												}
											?>
										</div>

										<div class="dashboard-table-td billing" data-title="Billing: ">
											<time datetime="<?php echo esc_attr( $order->get_date_created()->date( 'c' ) ); ?>"><?php echo esc_html( omlms_format_datetime( $order->get_date_created() ) ); ?></time>
										</div>
									</div>

								</div>
							<?php } 
							}
						}
						
						// Handle one-time payment memberships (no subscription created)
						if ( empty( $post_ids ) && ! empty( $items ) ) {
							foreach ( $items as $item ) {
								$membership_id = $item->get_course_id();
								$membership = function_exists( 'omlms_get_membership' ) ? omlms_get_membership( $membership_id ) : null;
								
								if ( ! $membership ) {
									continue;
								}
								
								$subscription_length = $membership->get_billing_period();
								$is_one_time = $subscription_length === 'one_time';
								
								// Only process if it's a one-time payment and order is completed
								if ( ! $is_one_time || ! in_array( $order->get_status(), array( 'completed', 'processing' ) ) ) {
									continue;
								}
								
								if ( in_array( $membership->get_id(), $showing_membership_ids ) ) {
									continue;
								}
								
								$showing_membership_ids[] = $membership->get_id();
								$products = $membership->get_products();
								$membership_count++;
								$enrolled_membership++;
								
								?>
								<div class="dashboard-table-tr">
									<div class="table-accordion-handler"></div>

									<div class="dashboard-table-td membership-id">
										#<?php echo $order->get_id(); ?>
									</div>

									<div class="dashboard-table-td bold-td membership-plan">
										<?php echo $membership->get_name(); ?>
									</div>

									<div class="dashboard-table-td expiration">
										<?php echo __( 'N/A', 'ohmylms' ); ?>
									</div>

									<div class="dashboard-table-td billing">
										<?php
										// For one-time payments, show the total amount with tax
										$item_total = $item->get_total();
										$tax_amount = \TaxCalculator::get_instance()->calculate_tax( $order->get_tax_rate(), array( 'total' => $item_total ) );
										$total_with_tax = is_array( $tax_amount ) && isset($tax_amount['total_with_tax']) ? $tax_amount['total_with_tax'] : $item_total;
										echo omlms_price( $total_with_tax ) . '/' . __( 'One Time', 'ohmylms' );
										?>
									</div>

									<div class="dashboard-table-td action">
										<button type="button" class="creator-lms-table-action-btn" disabled style="opacity: 0.5; cursor: not-allowed;">
											<?php echo __('Cancel', 'ohmylms'); ?>
										</button>
									</div>

									<div class="dashboard-table-mobile-td">
										<div class="dashboard-table-td membership-id" data-title="ID: ">
											#<?php echo $order->get_id(); ?>
										</div>

										<div class="dashboard-table-td expiration" data-title="Expiration: ">
											<?php
												if ( $membership ) {
													echo omlms_price($order->get_formatted_order_total());
												}
											?>
										</div>

										<div class="dashboard-table-td billing" data-title="Billing: ">
											<time datetime="<?php echo esc_attr( $order->get_date_created()->date( 'c' ) ); ?>"><?php echo esc_html( omlms_format_datetime( $order->get_date_created() ) ); ?></time>
										</div>
									</div>

								</div>
								<?php
							}
						}	
					}

					if(!$membership_count || !$enrolled_membership){
						?>
						<div class="no-course-data">
							<?php include(CREATOR_LMS_DIR . '/assets/images/icon/no-course-found-image.php'); ?>
							<p>
								<?php echo __( 'No Membership Found.', 'ohmylms' ); ?>
							</p>
						</div>
						<?php
					}

				}else{
					?>
					<div class="no-course-data">
						<?php include(CREATOR_LMS_DIR . '/assets/images/icon/no-course-found-image.php'); ?>
						<p>
							<?php echo __( 'No Membership Found.', 'ohmylms' ); ?>
						</p>
					</div>
					<?php
				}
			?>
		</div>

	</div>

    <h5 class="past-invoice-title">
		<?php echo __( 'Past Invoices', 'ohmylms' ); ?>
	</h5>

    <div class="creator-lms-dashboard-table past-invoice-table">
		<div class="dashboard-table-head">
			<div class="dashboard-table-tr">
				<div class="dashboard-table-td date">
					<?php echo __( 'Date', 'ohmylms' ); ?>
				</div>

				<div class="dashboard-table-td method">
					<?php echo __( 'Payment Method', 'ohmylms' ); ?>
				</div>

				<div class="dashboard-table-td price">
					<?php echo __( 'Price', 'ohmylms' ); ?>
				</div>

				<div class="dashboard-table-td status">
                    <?php echo __( 'Status', 'ohmylms' ); ?>
				</div>

				<div class="dashboard-table-td action">
                    <?php echo __( 'Action', 'ohmylms' ); ?>
				</div>
			</div>
		</div>

		<div class="dashboard-table-body">
			<?php
				if(count($student_orders->orders) > 0){
					$membership_count = 0;

					foreach ( $student_orders->orders as $student_order ) {
						$order = ecommerce_get_order( $student_order );
						$item_count = $order->get_item_count() - $order->get_item_count_refunded();
						$items = $order->get_items();
						foreach ( $items as $item ) {
							
							$products = array();

							if ( $item ) {
								$membership_id 	= $item->get_course_id();
								$membership 	= function_exists( 'omlms_get_membership' ) ? omlms_get_membership( $membership_id ) : null;

								if($membership){
									$subscription_length = $membership->get_subscription_length();
									$products = $membership->get_products();

									$membership_count++;
									
								}
							}
							?>
							<?php
								if( $membership_count && $membership ) :
									?>
									<div class="dashboard-table-tr">
										<div class="table-accordion-handler"></div>

										<div class="dashboard-table-td date">
											<?php
												$date = $order->get_date_completed() && null !== $order->get_date_completed() ? new \DateTime($order->get_date_completed()) : '';
												echo $date ? $date->format('F d, Y') : '';
											?>
										</div>

										<div class="dashboard-table-td bold-td method">
											<?php echo $order->get_payment_method_title(); ?>
										</div>

										<div class="dashboard-table-td price">
											<?php
												$negative = $order->get_total() < 0;
												$formatted_price = ( $negative ? '-' : '' ) . sprintf( omlms_get_price_format(), '<span class="omlms-price-currency-symbol">' . get_omlms_currency_symbol( get_omlms_currency() ) . '</span>', $order->get_total() );

												echo $formatted_price;
											?>
										</div>

										<div class="dashboard-table-td status">
											<span class="status-tag <?php echo $order->get_status(); ?>">
												<?php echo esc_html( ecommerce_get_order_status_name( $order->get_status() ) ); ?>
											</span>
										</div>

										<div class="dashboard-table-td action">
											<a href="<?php echo esc_url( omlms_get_account_endpoint_url( 'invoice-details',['id'=>$order->get_id()] ) ); ?>">
												<?php include CREATOR_LMS_DIR . '/assets/images/icon/eye-icon.php'; ?>
											</a>
										</div>

										<div class="dashboard-table-mobile-td">
											<div class="dashboard-table-td date" data-title="Date: ">
												<?php
													if ( $membership ) {
														echo omlms_price($order->get_formatted_order_total());
													}
												?>
											</div>

											<div class="dashboard-table-td price" data-title="Price: ">
												<time datetime="<?php echo esc_attr( $order->get_date_created()->date( 'c' ) ); ?>"><?php echo esc_html( omlms_format_datetime( $order->get_date_created() ) ); ?></time>
											</div>

											<div class="dashboard-table-td status" data-title="Status: ">
												<span class="status-tag <?php echo $order->get_status(); ?>">
													<?php echo esc_html( ecommerce_get_order_status_name( $order->get_status() ) ); ?>
												</span>
											</div>
										</div>

									</div>
							<?php
							break;
							endif;
							?>
						<?php } ?>
					<?php
					}

					if(!$membership_count){
						?>
						<div class="no-course-data">
							<?php include(CREATOR_LMS_DIR . '/assets/images/icon/no-course-found-image.php'); ?>
							<p>
								<?php echo __( 'No Invoice Found.', 'ohmylms' ); ?>
							</p>
						</div>
						<?php
					}

				}else{
					?>
					<div class="no-course-data">
						<?php include(CREATOR_LMS_DIR . '/assets/images/icon/no-course-found-image.php'); ?>
						<p>
							<?php echo __( 'No Invoice Found.', 'ohmylms' ); ?>
						</p>
					</div>
					<?php
				}
			?>
		</div>

	</div>

</div>
