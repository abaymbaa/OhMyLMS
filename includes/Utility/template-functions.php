<?php

use CodeRex\Ecommerce\Checkout;
use function CodeRex\Ecommerce\ecommerce;
/**
 * Add custom body classes for OhMyLMS pages.
 *
 * @param array $classes An array of body class names.
 * @return array The modified array of body class names.
 */
function creator_lms_body_class( $classes ) {
	if ( omlms_is_courses_page() || omlms_is_course_list_shortcode() ) {
		$classes[] = 'creator-lms-course-archive';
	}

	if ( is_creator_lms() ) {
		$classes[] = 'creator-lms-page';

	} elseif ( is_creator_lms_checkout() ) {
		$classes[] = 'creator-lms-checkout';
		$classes[] = 'creator-lms-page';
	}

	if(omlms_is_course_list_shortcode()) {
		$classes[] = 'creator-lms-course-list-shortcode';
	}

	return array_unique( $classes );
}

/**
 * Add theme-specific body class.
 *
 * @param array|string $classes An array or string of body class names.
 * @return array|string The modified array or string of body class names.
 *
 * @since 1.0.0
 */
function creator_lms_add_theme_body_class( $classes ) {
	$class = 'theme-' . get_template();
	if ( is_array( $classes ) ) {
		$classes[] = $class;
	} else {
		$classes .= ' ' . $class . ' ';
	}
	return $classes;
}



/**
 * Handle redirects before content is output - hooked into template_redirect so is_page works.
 */
function omlms_template_redirect() {
	global $wp;

	// phpcs:disable WordPress.Security.NonceVerification.Recommended
	// When default permalinks are enabled, redirect shop page to post type archive url.
	if ( ! empty( $_GET['page_id'] ) && '' === get_option( 'permalink_structure' ) && omlms_get_page_id( 'course' ) === absint( $_GET['page_id'] ) && get_post_type_archive_link( 'omlms-course' ) ) {
		wp_safe_redirect( get_post_type_archive_link( 'omlms-course' ) );
		exit;
	}

	if ( ! empty( $_GET['page_id'] ) && '' === get_option( 'permalink_structure' ) && omlms_get_page_id( 'membership' ) === absint( $_GET['page_id'] ) && get_post_type_archive_link( 'omlms-membership' ) ) {
		wp_safe_redirect( get_post_type_archive_link( 'omlms-membership' ) );
		exit;
	}



	// Check if user already has access to items in cart and redirect to profile
	if ( is_page( omlms_get_page_id( 'checkout' ) ) && is_user_logged_in() && !is_creator_lms_order_received_page() ) {
		$cart_data                  = ecommerce()->cart->get_cart_contents();
		$is_course_already_enrolled = false;
		$url                        = '';

		if ( is_array( $cart_data ) ) {
			foreach ( $cart_data as $key => $data ) {
				if ( isset( $data['course_id'], $data['type'] ) ) {
					$id   = $data['course_id'];
					$type = $data['type'];
					if ( 'omlms-course' === $type ) {
						$course                     = omlms_get_course( $id );
						$is_course_already_enrolled = $course->has_access();
						$url                        = $course->get_permalink();
					} else {
						$membership                 = omlms_get_membership( $id );
						$is_course_already_enrolled = $membership->is_already_purchased();
						if ( $membership ) {
							$url = home_url( '/my-profile/' );
						}
					}

					// Redirect if already enrolled/has access
					if ( $is_course_already_enrolled ) {
						wp_safe_redirect( $url ? $url : home_url( '/my-profile/' ) );
						exit;
					}
				}
			}
		}
	}

	// Logout endpoint under My Account page. Logging out requires a valid nonce.
	if ( isset( $wp->query_vars['customer-logout'] ) ) {
		if ( ! empty( $_REQUEST['_wpnonce'] ) && wp_verify_nonce( sanitize_key( $_REQUEST['_wpnonce'] ), 'customer-logout' ) ) {
			wp_logout();
			wp_safe_redirect( creator_lms_get_logout_redirect_url() );
			exit;
		}
		/* translators: %s: logout url */
		wp_safe_redirect( omlms_get_page_permalink( 'student_dashboard' ) );
		exit;
	}
}
add_action( 'template_redirect', 'omlms_template_redirect' );


function creator_lms_get_logout_redirect_url() {
	/**
	 * Filters the logout redirect URL.
	 *
	 * @since 2.6.9
	 * @param string $logout_url Logout URL.
	 * @return string
	 */
	return apply_filters( 'creator_lms_logout_default_redirect_url', omlms_get_page_permalink( 'student_dashboard' ) );
}

/**
 * Get logout link.
 *
 * @since  2.6.9
 * @param string $redirect Redirect URL.
 * @return string
 */
function creator_lms_logout_url( $redirect = '' ) {
	return wp_logout_url( $redirect ? $redirect : wc_get_logout_redirect_url() );
}
/**
 * Render registration fields
 *
 * @since 1.0.0
 */
function creator_lms_student_details() {
	$checkout = OMLMS()->checkout();
	omlms_get_template( 'checkout/register.php', array( 'checkout' => $checkout ) );
}


/**
 * Payment method of the course
 *
 * @see 1.0.0
 */
function creator_lms_checkout_payment() {
	if ( \CodeRex\Ecommerce\ecommerce()->cart->needs_payment() ) {
		$available_gateways = \CodeRex\Ecommerce\ecommerce()->gateways()->get_available_payment_gateways();
		\CodeRex\Ecommerce\ecommerce()->gateways()->set_current_gateway( $available_gateways );
	} else {
		$available_gateways = array();
	}
	omlms_get_template(
		'checkout/payment.php',
		array(
			'checkout'           => \CodeRex\Ecommerce\ecommerce()->checkout(),
			'available_gateways' => $available_gateways,
			'order_button_text'  => apply_filters( 'creator_lms_order_button_text', __( 'Complete Checkout', 'ohmylms' ) ),
		)
	);
}


/**
 * place order button for mobile
 *
 * @since 1.0.0
 */
function creator_lms_mobile_place_order() {
	omlms_get_template(
		'checkout/mobile-place-order-button.php',
		array(
			'checkout'           => \CodeRex\Ecommerce\ecommerce()->checkout(),
			'order_button_text'  => apply_filters( 'creator_lms_order_button_text', __( 'Complete Checkout', 'ohmylms' ) ),
		)
	);
}

/**
 * Put $course as global variable when the the_post data is set
 *
 * @param $post
 * @return \OMLMS\Course|void
 *
 * @since 1.0.0
 */
function omlms_setup_course_data( $post ) {

	unset( $GLOBALS['course'] );

	if ( is_int( $post ) ) {
		$post = get_post( $post );
	}

	if ( empty( $post->post_type ) ) {
		return;
	}

	$GLOBALS['course'] = omlms_get_course( $post );
	return $GLOBALS['course'];
}
add_action( 'the_post', 'omlms_setup_course_data' );


/**
 * Put $category as global variable
 *
 * @return void
 *
 * @since 1.0.0
 */
function omlms_setup_category_data() {
	unset( $GLOBALS['category'] );
	$GLOBALS['category'] = null;
	return $GLOBALS['category'];
}
add_action( 'wp', 'omlms_setup_category_data' );

/**
 * Put $category as global variable
 *
 * @return void
 *
 * @since 1.0.0
 */
function omlms_setup_num_of_courses_data() {
	unset( $GLOBALS['courses_count'] );
	$GLOBALS['courses_count'] = 10;
	return $GLOBALS['courses_count'];
}
add_action( 'wp', 'omlms_setup_num_of_courses_data' );

/**
 * Put $course as global variable when the the_post data is set
 *
 * @param $post
 * @return \OMLMS\Course|void
 *
 * @since 1.0.0
 */
function omlms_setup_membership_data( $post ) {
	unset( $GLOBALS['membership'] );

	if ( is_int( $post ) ) {
		$post = get_post( $post );
	}

	if ( empty( $post->post_type ) || 'omlms-membership' !== $post->post_type ) {
		return;
	}

	$GLOBALS['membership'] = creator_lms_is_pro() ? omlms_get_membership( $post ) : null;

	return $GLOBALS['membership'];
}
add_action( 'the_post', 'omlms_setup_membership_data' );

/**
 * Open course link
 *
 * @since 1.0.0
 */
function creator_lms_template_loop_product_link_open( $layout, $layout_style ): void {
	if (
		'grid' === $layout &&
		in_array( $layout_style, [ 'grid-style2', 'grid-style3', 'grid-style4' ], true )
	) {
		$link = apply_filters( 'creator_lms_loop_product_link', get_the_permalink() );
		echo '<a href="' . esc_url( $link ) . '" class="creator-lms-course-card-link">';
	}
}


/**
 * Close course link
 *
 * @since 1.0.0
 */
function creator_lms_template_loop_product_link_close( $layout, $layout_style ): void {
	if (
		'grid' === $layout &&
		in_array( $layout_style, [ 'grid-style2', 'grid-style3', 'grid-style4' ], true )
	) {
		echo '</a>';
	}
}

/**
 * Course title
 *
 * @since 1.0.0
 */
function creator_lms_loop_course_title( $layout, $layout_style ) {
	$link         = apply_filters( 'creator_lms_loop_product_link', get_the_permalink() );
	if ( 'grid' === $layout ) {
		if ( 'grid-style1' == $layout_style ) {
			?>
			<a href="<?php echo esc_url( $link ); ?>" class="creator-lms-loop-course-link">
				<h2 class="creator-lms-loop-course-title">
					<?php echo get_the_title(); ?>
				</h2>
			</a>
			<?php
		} else {
			?>
			<h2 class="creator-lms-loop-course-title">
				<?php echo get_the_title(); ?>
			</h2>
			<?php
		}
	}
	if ( 'list' === $layout ) {
		?>
		<div class="title-content">
			<a href="<?php echo esc_url( $link ); ?>" class="creator-lms-loop-course-link">
				<h2 class="creator-lms-loop-course-title">
					<?php echo get_the_title(); ?>
				</h2>
			</a>
		<?php
	}
}


/**
 * Course title
 *
 * @since 1.0.0
 */
function creator_lms_loop_course_popup_title() {
	$link         = apply_filters( 'creator_lms_loop_product_link', get_the_permalink() );
	$layout	  = get_option( 'creator_lms_archive_page_layout', 'grid' );
	$layout_style = get_option( 'creator_lms_archive_page_layout_style', 'grid-style1' );
	if ( 'grid' === $layout ) {
		if ( 'grid-style1' == $layout_style ) {
			?>
			<a href="<?php echo esc_url( $link ); ?>" class="creator-lms-loop-course-link">
				<h2 class="creator-lms-loop-course-title">
					<?php echo get_the_title(); ?>
				</h2>
			</a>
			<?php
		} else {
			?>
			<h2 class="creator-lms-loop-course-title">
				<?php echo get_the_title(); ?>
			</h2>
			<?php
		}
	}

	if ( 'list' === $layout ) {
		?>
		<div class="title-content">
		<!-- This is start div element. Its closed in creator_lms_template_loop_price() -->
			<a href="<?php echo esc_url( $link ); ?>" class="creator-lms-loop-course-link">
				<h2 class="creator-lms-loop-course-title">
					<?php echo get_the_title(); ?>
				</h2>
			</a>
		<?php
	}
}


if ( ! function_exists( 'creator_lms_loop_course_description' ) ) {
	/**
	 * Load course loop description
	 *
	 * @since 1.0.0
	 */
	function creator_lms_loop_course_description() {

		if ( ! empty( get_the_content() ) ) {
			?>
			<div class="creator-lms-loop-course-description">
				<?php echo get_the_content(); ?>
			</div>
			<?php
		}
	}
}


if ( ! function_exists( 'creator_lms_loop_course_update' ) ) {
	/**
	 * Load course updated date.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_loop_course_update( $course_id ) {
		$course = omlms_get_course( $course_id );
		$date   = '';
		if ( $course ) {
			$date = date( 'M d, Y', $course->get_date_modified( 'edit' )->getTimestamp() );
		}

		?>
		<div class="course-update-wrapper">
			<span class="calendar-icon" style="display: none;">
				<svg width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="#7A8B9A" fill-rule="evenodd" d="M5.834 1.666c.46 0 .833.373.833.833v.834h6.667v-.834A.833.833 0 1115 2.5v.834h.834a2.5 2.5 0 012.5 2.5v10a2.5 2.5 0 01-2.5 2.5H4.167a2.5 2.5 0 01-2.5-2.5v-10a2.5 2.5 0 012.5-2.5H5V2.5c0-.46.373-.833.834-.833zm7.5 3.333v.834a.833.833 0 101.666 0v-.834h.834c.46 0 .833.373.833.834v2.5H3.334v-2.5c0-.46.373-.834.833-.834H5v.834a.833.833 0 001.667 0v-.834h6.667zm-10 5v5.834c0 .46.373.833.833.833h11.667c.46 0 .833-.373.833-.833V9.999H3.334z" clip-rule="evenodd"/></svg>
			</span>

			<time datetime="<?php echo esc_attr( $date ); ?>" class="updated-date">
				<?php echo __( 'Last Updated', 'ohmylms' ); ?>
				<strong><?php echo $date; ?></strong>
			</time>
		</div>
		<?php
	}
}


/**
 * No course found
 *
 * @since 1.0.0
 */
function creator_lms_no_products_found(): void {
	omlms_get_template( 'loop/no-course-found.php' );
}


/**
 * Add to cart button
 *
 * @since 1.0.0
 */
function creator_lms_loop_course_add_to_cart( $args = array() ): void {
	global $course;
	if ( ! $course ) {
		return;
	}
	$current_student_id = get_current_user_id();
	$student            = new \OMLMS\Data\Student( $current_student_id );
	$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );
	if ( $course ) {
		$defaults = array(
			'quantity'   => 1,
			'class'      => implode(
				' ',
				array_filter(
					array(
						$course->is_purchasable() && $course->is_in_stock() ? 'add_to_cart_button enroll-button creator-lms-button' : 'creator-lms-button enroll-button',
					)
				)
			),
			'attributes' => array(
				'data-course_id' => $course->get_id(),
				'rel'            => 'nofollow',
			),
		);
		$args     = apply_filters( 'creator_lms_loop_add_to_cart_args', wp_parse_args( $args, $defaults ), $course );
		if ( $maybe_enrolled ) {
			omlms_get_template( 'loop/continue-course.php' );
		}else {
			if( $course->get_type() === 'cohort-based' ) {
				$cohorts = $course->get_cohort();
				$has_capacity = false;
				$has_active_enrollment = false;
				$all_expired = true;
				$current_time = current_time( 'timestamp' );
				foreach ( $cohorts as $cohort ) {
					if (  empty( $cohort['has_capacity'] ) ||  ( ! empty( $cohort['has_capacity'] ) && $cohort['has_capacity'] && ! empty( $cohort['capacity'] ) && (int)($cohort['capacity']) > $course->get_total_enrolled_users() ) ){
						if ( 'password_protected' === $course->get_access_type() ) {
							$has_capacity = true;
							omlms_get_template( 'loop/password-protected-course.php', $args );
						} else {
							$has_capacity = true;
							omlms_get_template( 'loop/add-to-cart.php', $args );
						}
					}

					if ( ! empty( $cohort['enrollment_deadline'] ) ) {
						$enrollment_end = strtotime( $cohort['enrollment_deadline'] );

						if ( $enrollment_end > $current_time ) {
							$has_active_enrollment = true;
						}
					} else {
						// If enrollment deadline is not set, consider it as active enrollment
						$has_active_enrollment = true;
					}

					// Check if any cohort is not expired
					if ( ! empty( $cohort['end_date'] ) ) {
						if ( strtotime( $cohort['end_date'] ) >= $current_time ) {
							$all_expired = false;
						}
					} else {
						// If no end date, consider not expired
						$all_expired = false;
					}
				}

				if ( ! $has_active_enrollment || $all_expired ) {
					omlms_get_template( 'loop/exceed-deadline.php', $args );
				}else if ( ! $has_capacity ) {
					omlms_get_template( 'loop/exceed-capacity.php', $args );
				}

			}elseif( ! $course->get_has_capacity() || ( $course->get_has_capacity() && $course->get_capacity() > $course->get_total_enrolled_users() ) ) {
				if ( 'password_protected' === $course->get_access_type() ) {
					omlms_get_template( 'loop/password-protected-course.php', $args );
				} else {
					omlms_get_template( 'loop/add-to-cart.php', $args );
				}
			}else{
				omlms_get_template( 'loop/exceed-capacity.php', $args );
			}
		}
	}
}


/**
 * Add to cart button
 *
 * @since 1.0.0
 */
function creator_lms_loop_course_after_add_to_cart( $args = array() ): void {
	if( ! is_user_logged_in() ) {
		return;
	}

	global $course;
	if ( ! $course ) {
		return;
	}
	$current_student_id = get_current_user_id();
	$student            = new \OMLMS\Data\Student( $current_student_id );
	$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

	if( $maybe_enrolled ) {
		return;
	}

	if( creator_lms_is_pro() ) {
		$integrations = get_option( 'creatorlms_integrations', array() );
		if( isset($integrations['gamification']['is_enable']) && $integrations['gamification']['is_enable'] && \OMLMS\Engagement\Reward::maybe_met_rules( 'purchase_course' ) && $course->get_reward_disabled() !== 'yes' ) {
			if ( $course ) {
				if( ! $course->get_purchase_point() ) {
					return;
				}
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
				$args     = apply_filters( 'creator_lms_loop_add_to_cart_args', wp_parse_args( $args, $defaults ), $course );
				if ( $maybe_enrolled ) {
					omlms_get_template( 'loop/continue-course.php' );
				} elseif ( ! $course->get_has_capacity() || ( $course->get_has_capacity() && $course->get_capacity() > $course->get_total_enrolled_users() ) ) {
					omlms_get_template( 'loop/add-to-cart-using-point.php', $args );
				} else {
					omlms_get_template( 'loop/exceed-capacity.php', $args );
				}
			}
		}
	}
}

/**
 * Load difficulty level for loop item
 *
 * @return void
 * @since 1.0.0
 */
function creator_lms_loop_difficulty_level(): void {
	omlms_get_template( 'loop/difficulty-level.php' );
}

/**
 * Load duration for loop item
 *
 * @return void
 * @since 1.0.0
 */
function creator_lms_loop_duration(): void {
	omlms_get_template( 'loop/duration.php' );
}


/**
 * Load course meta(e.g author name and enrolled user) for loop
 *
 * @return void
 * @since 1.0.0
 */
function creator_lms_loop_course_meta(): void {
	omlms_get_template( 'loop/course-meta.php' );
}

/**
 * Load course cohort for loop
 *
 * @return void
 * @since 1.0.0
 */
function creator_lms_loop_course_cohort( $layout, $layout_style ): void {
	if ( 'grid' === $layout ) {
		omlms_get_template( 'loop/course-cohort.php' );
	}
}


/**
 * Load price template for loop
 *
 * @return void
 * @since 1.0.0
 */
function creator_lms_loop_course_price( $layout ): void {
	omlms_get_template( 'loop/price.php' );

	if ( 'list' === $layout ) {
		echo '</div>';
		// --- This div element end of .title-content form creator_lms_loop_course_title()---
	}
}


if ( ! function_exists( 'creator_lms_loop_course_author' ) ) {
	/**
	 * Load author name for loop
	 *
	 * @return void
	 * @since 1.0.0
	 */
	function creator_lms_loop_course_author(): void {
		echo '<p class="course-author">by ' . get_the_author() . '</p>';
	}
}


if ( ! function_exists( 'creator_lms_loop_course_certified_tag' ) ) {
	/**
	 * Load certified tag for loop
	 *
	 * @return void
	 * @since 1.0.0
	 */
	function creator_lms_loop_course_certified_tag(): void {
		global $course;
		if ( $course ) {
			if ( ! $course->get_certificate() ) {
				return;
			}
		}
		?>
		<div class="certified-tag">
			<?php
				include CREATOR_LMS_DIR . '/assets/images/icon/certificate-icon.php';
				echo wp_kses_post( __( 'With <strong>Certified</strong>', 'ohmylms' ) );
			?>
		</div>
		<?php
	}
}


/**
 * Load login and registration field
 *
 * @param $checkout
 * @since 1.0.0
 */
function creator_lms_checkout_authentication( $checkout ) {
	omlms_get_template(
		'checkout/student-login-signup-options.php',
		array(
			'checkout' => $checkout,
		)
	);
}



/**
 * Billing form
 *
 * @return void
 * @since 1.0.0
 */
function creator_lms_checkout_billing_form() {
	omlms_get_template( 'checkout/billing-form' );
}

/**
 * Order summary
 *
 * @return void
 * @since 1.0.0
 */
function creator_lms_checkout_order_summary() {
	omlms_get_template( 'checkout/order-summary' );
}


if ( ! function_exists( 'creator_lms_order_review' ) ) {
	/**
	 * Display the order review table on the checkout page.
	 *
	 * @param  $checkout Checkout object.
	 * @since 1.0.0
	 */
	function creator_lms_order_review( $checkout ) {
		omlms_get_template(
			'checkout/review-order.php',
			array(
				'checkout' => $checkout,
			)
		);
	}
}


/**
 * Load pagination.
 *
 * @return void
 * @since 1.0.0
 */
function creator_lms_pagination_after_course() {
	omlms_get_template( 'pagination.php' );
}


if ( ! function_exists( 'creator_lms_course_skeleton' ) ) {

	function creator_lms_course_skeleton( $echo = true ) {
		ob_start();

		omlms_get_template( 'loop/skeleton.php' );

		$loop_start = ob_get_clean();

		if ( $echo ) {
			echo $loop_start;
		} else {
			return $loop_start;
		}
	}
}


if ( ! function_exists( 'creator_lms_course_loop_start' ) ) {

	/**
	 * Start the course loop.
	 *
	 * This function outputs the opening HTML for the course loop.
	 *
	 * @param bool $echo Whether to echo the output or return it. Default true.
	 * @return string|null The opening HTML for the course loop if $echo is false, null otherwise.
	 * @since 1.0.0
	 */
	function creator_lms_course_loop_start( $echo = true, $attrs = null ) {
		ob_start();

		omlms_get_template( 'loop/loop-start.php', array( 'atts' => $attrs ) );

		$loop_start = ob_get_clean();

		if ( $echo ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo $loop_start;
		} else {
			return $loop_start;
		}
	}
}

if ( ! function_exists( 'creator_lms_course_loop_end' ) ) {

	/**
	 * End the course loop.
	 *
	 * This function outputs the closing HTML for the course loop.
	 *
	 * @param bool $echo Whether to echo the output or return it. Default true.
	 * @return string|null The closing HTML for the course loop if $echo is false, null otherwise.
	 * @since 1.0.0
	 */
	function creator_lms_course_loop_end( $echo = true, $attrs = null ) {
		ob_start();

		omlms_get_template( 'loop/loop-end.php', array( 'atts' => $attrs ) );

		$loop_end = ob_get_clean();

		if ( $echo ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo $loop_end;
		} else {
			return $loop_end;
		}
	}
}

if ( ! function_exists( 'creator_lms_template_loop_course_thumbnail' ) ) {
	/**
	 * Display the course thumbnail in the loop.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_template_loop_course_thumbnail() {
		echo creator_lms_get_product_thumbnail( 'creator_lms_thumbnail' );
	}
}

if ( ! function_exists( 'creator_lms_get_product_thumbnail' ) ) {
	/**
	 * Get the product thumbnail for the course.
	 *
	 * @param string $size        The size of the thumbnail. Default is 'creator_lms_thumbnail'.
	 * @param array  $attr        Attributes for the image tag. Default is an empty array.
	 * @param bool   $placeholder Whether to show a placeholder if no thumbnail is found. Default is true.
	 * @return string|void        The image tag for the thumbnail or void if no course is found.
	 */
	function creator_lms_get_product_thumbnail( $size = 'creator_lms_thumbnail', $attr = array(), $placeholder = true ) {
		global $course;

		$course = omlms_get_course( $course );

		if ( ! $course ) {
			return;
		}

		$thumbnail_id = $course->get_thumbnail_id();

		$link         = apply_filters( 'creator_lms_loop_product_link', get_the_permalink() );
		$layout_style = get_option( 'creator_lms_archive_page_layout_style', 'grid-style1' );

		if ( ! $thumbnail_id && $placeholder ) {
			$image_src = creator_lms_placeholder_img();
			ob_start();

			if ( is_single() ) {
				echo '<figure class="creator-lms-loop-course-thumbnail-link">';
					echo '<img src="' . esc_url( $image_src ) . '" alt="' . esc_attr( $course->get_name() ) . '" class="creator-lms-img-fluid" />';
				echo '</figure>';
			} else {
				if ( 'grid-style1' === $layout_style ) {
					echo '<a href="' . esc_url( $link ) . '" class="creator-lms-loop-course-thumbnail-link">';
						echo '<figure>';
							echo '<img src="' . esc_url( $image_src ) . '" alt="' . esc_attr( $course->get_name() ) . '" class="creator-lms-img-fluid" />';
							if ( $course->get_duration() ) {
								echo '<span class="creator-lms-course-time-label">';
								include(CREATOR_LMS_DIR . '/assets/images/icon/clock-icon-white.php');
								echo esc_html( creator_lms_format_duration( $course->get_duration() ) );
								echo '</span>';
							}
						echo '</figure>';
					echo '</a>';
				} else {
					echo '<div class="creator-lms-loop-course-thumbnail-link">';
						echo '<figure>';
							echo '<img src="' . esc_url( $image_src ) . '" alt="' . esc_attr( $course->get_name() ) . '" class="creator-lms-img-fluid" />';
							if ( $course->get_duration() ) {
								echo '<span class="creator-lms-course-time-label">';
								include(CREATOR_LMS_DIR . '/assets/images/icon/clock-icon-white.php');
								echo esc_html( creator_lms_format_duration( $course->get_duration() ) );
								echo '</span>';
							}
						echo '</figure>';
					echo '</div>';
				}
			}
			return ob_get_clean();
		}

		if ( $thumbnail_id ) {
			ob_start();

			if ( is_single() ) {
				echo '<figure>';
					echo wp_get_attachment_image( $thumbnail_id, $size, false, $attr );
				echo '</figure>';

			} elseif ( 'grid-style1' === $layout_style ) {
					echo '<a href="' . esc_url( $link ) . '" class="creator-lms-loop-course-thumbnail-link">';
						echo '<figure>';
							echo wp_get_attachment_image( $thumbnail_id, $size, false, $attr );
						echo '</figure>';
					echo '</a>';

			} else {
				echo '<div class="creator-lms-loop-course-thumbnail-link">';
					echo '<figure>';
						echo wp_get_attachment_image( $thumbnail_id, $size, false, $attr );
					echo '</figure>';
				echo '</div>';
			}

			return ob_get_clean();
		}
	}
}


if ( ! function_exists( 'creator_lms_show_toast_notices' ) ) {
	/**
	 * Output the toast notice.
	 *
	 * This function includes the template for the toast notice.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_show_toast_notices() {
		omlms_get_template( 'global/toast.php' );
	}
}


if ( ! function_exists( 'creator_lms_output_content_wrapper_start' ) ) {
	/**
	 * Output the start of the content wrapper.
	 *
	 * This function includes the template for the start of the content wrapper.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_output_content_wrapper_start() {
		omlms_get_template( 'global/wrapper-start.php' );
	}
}


if ( ! function_exists( 'creator_lms_output_content_wrapper_end' ) ) {
	/**
	 * Output the end of the content wrapper.
	 *
	 * This function includes the template for the end of the content wrapper.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_output_content_wrapper_end() {
		omlms_get_template( 'global/wrapper-end.php' );
	}
}

if ( ! function_exists( 'creator_lms_scroll_to_top' ) ) {
	/**
	 * scroll to top.
	 * @since 1.0.0
	 */
	function creator_lms_scroll_to_top() {
		omlms_get_template( 'global/scrollto-top.php' );
	}
}

if ( ! function_exists( 'creator_lms_single_course_header' ) ) {
	function creator_lms_single_course_header() {
		omlms_get_template( 'single-course/header.php' );
	}
}

if ( ! function_exists( 'creator_lms_has_header_course_meta' ) ) {

	function creator_lms_has_header_course_meta() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		global $course;
		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

		$course_meta = array(
			'level',
			'review',
			'students',
			'duration',
			'available_seat',
		);

		$enrolled_course_meta = array(
			'level_with_enroll',
			'review_with_enroll',
			'students_with_enroll',
			'duration_with_enroll',
			'available_seat_with_enroll',
		);

		if ( ( ! $maybe_enrolled && array_intersect( $course_meta, $page_features ) ) ||
			( $maybe_enrolled && array_intersect( $enrolled_course_meta, $page_features ) )
		) {
			return true;
		} else {
			return false;
		}
	}
}

if ( ! function_exists( 'creator_lms_has_sidebar_widget_course_meta' ) ) {

	/**
	 * Check if any of the course meta will be displayed in the sidebar widget.
	 *
	 * Checks the page features options and see if any of the course meta is enabled.
	 *
	 * @return bool
	 * @since 1.0.0
	 */
	function creator_lms_has_sidebar_widget_course_meta() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		global $course;
		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

		$course_meta = array(
			'level',
			'students',
			'available_seat',
			'duration',
			'total_lesson',
			'resources',
			'review',
		);

		$enrolled_course_meta = array(
			'level_with_enroll',
			'students_with_enroll',
			'available_seat_with_enroll',
			'duration_with_enroll',
			'total_lesson_with_enroll',
			'resources_with_enroll',
			'review_with_enroll',
		);

		if ( ( ! $maybe_enrolled && array_intersect( $course_meta, $page_features ) ) ||
			( $maybe_enrolled && array_intersect( $enrolled_course_meta, $page_features ) )
		) {
			return true;
		} else {
			return false;
		}
	}
}


if ( ! function_exists( 'creator_lms_single_course_level' ) ) {
	function creator_lms_single_course_level() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		global $course;
		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

		if ( ( ! $maybe_enrolled && in_array( 'level', $page_features ) ) ||
			( $maybe_enrolled && in_array( 'level_with_enroll', $page_features ) )
		) {
			omlms_get_template( 'single-course/level.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_single_course_review' ) ) {
	function creator_lms_single_course_review() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		global $course;
		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

		if ( ( ! $maybe_enrolled && in_array( 'review', $page_features ) ) ||
			( $maybe_enrolled && in_array( 'review_with_enroll', $page_features ) )
		) {
			omlms_get_template( 'single-course/rating.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_single_course_student_count' ) ) {
	function creator_lms_single_course_student_count() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		global $course;
		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

		if ( ( ! $maybe_enrolled && in_array( 'students', $page_features ) ) ||
			( $maybe_enrolled && in_array( 'students_with_enroll', $page_features ) )
		) {
			omlms_get_template( 'single-course/student-count.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_single_course_capacity' ) ) {
	function creator_lms_single_course_capacity() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		global $course;
		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

		if ( ( ! $maybe_enrolled && in_array( 'available_seat', $page_features ) ) ||
			( $maybe_enrolled && in_array( 'available_seat_with_enroll', $page_features ) )
		) {
			omlms_get_template( 'single-course/capacity.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_single_course_duration' ) ) {
	function creator_lms_single_course_duration() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		global $course;
		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

		if ( ( ! $maybe_enrolled && in_array( 'duration', $page_features ) ) ||
			( $maybe_enrolled && in_array( 'duration_with_enroll', $page_features ) )
		) {
			omlms_get_template( 'single-course/duration.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_single_course_lesson_count' ) ) {
	function creator_lms_single_course_lesson_count() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		global $course;
		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

		if ( ( ! $maybe_enrolled && in_array( 'total_lesson', $page_features ) ) ||
			( $maybe_enrolled && in_array( 'total_lesson_with_enroll', $page_features ) )
		) {
			omlms_get_template( 'single-course/lesson-count.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_single_course_additional_resource' ) ) {
	function creator_lms_single_course_additional_resource() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		global $course;
		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

		if ( ( ! $maybe_enrolled && in_array( 'resources', $page_features ) ) ||
			( $maybe_enrolled && in_array( 'resources_with_enroll', $page_features ) )
		) {
			omlms_get_template( 'single-course/additional-resource.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_single_course_language' ) ) {
	function creator_lms_single_course_language() {
		omlms_get_template( 'single-course/language.php' );
	}
}

if ( ! function_exists( 'creator_lms_widget_course_meta' ) ) {
	/**
	 * Outputs the course meta widget for single course sidebar.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_widget_course_meta() {
		omlms_get_template( 'single-course/widgets/course-meta.php' );
	}
}


if ( ! function_exists( 'creator_lms_single_course_tabs' ) ) {
	function creator_lms_single_course_tabs() {
		omlms_get_template( 'single-course/tabs/tabs.php' );
	}
}


if ( ! function_exists( 'creator_lms_widget_pricebox' ) ) {
	/**
	 * Outputs the pricebox widget for single course sidebar.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_widget_pricebox() {
		omlms_get_template( 'single-course/widgets/pricebox.php' );
	}
}

if ( ! function_exists( 'creator_lms_widget_course_membership' ) ) {
	/**
	 * Outputs the membership widget for single course sidebar.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_widget_course_membership() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		global $course;
		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

		if ( ( ! $maybe_enrolled && in_array( 'membership', $page_features ) ) ||
			( $maybe_enrolled && in_array( 'membership_with_enroll', $page_features ) )
		) {
			omlms_get_template( 'single-course/widgets/membership.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_widget_certificate' ) ) {
	/**
	 * Outputs the certificate widget for single course sidebar.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_widget_certificate() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		if ( is_array($page_features) && in_array( 'certificate_with_enroll', $page_features ) ) {
			omlms_get_template( 'single-course/widgets/certificate.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_widget_course_progress' ) ) {
	/**
	 * Outputs the progress widget for single course sidebar.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_widget_course_progress() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		if ( is_array($page_features) && in_array( 'progress_bar_with_enroll', $page_features ) ) {
			omlms_get_template( 'single-course/widgets/progressbar.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_widget_course_leaderboard' ) ) {
	/**
	 * Outputs the leaderboard widget for single course sidebar.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_widget_course_leaderboard() {
		if ( ! creator_lms_is_pro() ) {
			return;
		}

		$page_features = get_option( 'creator_lms_single_course_page_features' );

		if ( is_array($page_features) && in_array( 'leaderboard_with_enroll', $page_features ) ) {
			omlms_get_template( 'single-course/widgets/leaderboard.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_course_author' ) ) {
	/**
	 * Outputs the course author.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_course_author() {
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		global $course;
		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

		if ( ( ! $maybe_enrolled && in_array( 'author', $page_features ) ) ||
			( $maybe_enrolled && in_array( 'author_with_enroll', $page_features ) )
		) {
			omlms_get_template( 'single-course/course-author.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_widget_course_author' ) ) {
	/**
	 * Outputs the course author widget for single course sidebar.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_widget_course_author() {
		$single_course_layout = get_option( 'creator_lms_single_course_page_layout', 'layout_1' );
		$page_features        = get_option( 'creator_lms_single_course_page_features' );

		global $course;
		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = $student->maybe_enrolled( $course->get_id() );

		if ( ( ! $maybe_enrolled && in_array( 'author', $page_features ) ) ||
			( $maybe_enrolled && in_array( 'author_with_enroll', $page_features ) )
		) {
			omlms_get_template( 'single-course/widgets/course-author.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_widget_course_taxonomy' ) ) {
	/**
	 * Outputs the course category widget for single course sidebar.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_widget_course_taxonomy() {
		omlms_get_template( 'single-course/widgets/course-taxonomy.php' );
	}
}

if ( ! function_exists( 'creator_lms_widget_course_drop' ) ) {
	/**
	 * Outputs the course drop widget for single course sidebar.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_widget_course_drop() {
		omlms_get_template( 'single-course/widgets/drop-course.php' );
	}
}

if ( ! function_exists( 'creator_lms_course_feature_image_and_video' ) ) {
	/**
	 * Outputs the course feature image and video.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_course_feature_image_and_video() {
		global $course;
		$video             = wp_get_attachment_url( $course->get_video_id() );
		$get_thumbnail     = creator_lms_get_product_thumbnail( 'creator_lms_single', $course->get_id() );
		$get_thumbnail_url = $course->get_thumbnail_url_without_placeholder( 'full' );

		echo '<div class="creator-lms-feature-image-wrapper">';
		if ( $video ) {
			?>
				<div class="creator-lms-video-player" tabindex="1">
					<video class="the-video" controls controlsList="nodownload nopictureinpicture" tabindex="2">
						<source src="<?php echo $video; ?>" type="video/mp4">
						Your browser does not support the video tag.
					</video>

				<?php if ( $get_thumbnail_url ) { ?>
						<div class="creator-lms-video-player-cover">
							<img src="<?php echo $get_thumbnail_url; ?>" alt="Cover iamge">

							<button type="button" title="Play" aria-label="Play video" class="creator-lms-video-player-play" tabindex="0">
								<svg width="14" height="14" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path fill="var(--creator-lms-primary-color)" d="M2.977.309C1.715-.415.69.178.69 1.632v10.735c0 1.456 1.024 2.048 2.286 1.325l9.382-5.381c1.263-.724 1.263-1.898 0-2.622L2.977.31z"/></svg>
							</button>
						</div>
					<?php } ?>
				</div>
				<?php

		} elseif ( ! $video && $get_thumbnail_url ) {
			echo creator_lms_get_product_thumbnail( 'creator_lms_single', $course->get_id() );

		} else {
			// ---Returned placeholder image due to missing URL---
			echo creator_lms_get_product_thumbnail( 'creator_lms_single', $course->get_id() );
		}
		echo '</div>';
	}
}

if ( ! function_exists( 'creator_lms_widget_wrapper_start' ) ) {
	/**
	 * Outputs the course sidebar widget wrapper start div.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_widget_wrapper_start() {
		omlms_get_template( 'single-course/widgets/widget-wrapper-start.php' );
	}
}

if ( ! function_exists( 'creator_lms_widget_wrapper_end' ) ) {
	/**
	 * Outputs the course sidebar widget wrapper end div.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_widget_wrapper_end() {
		omlms_get_template( 'single-course/widgets/widget-wrapper-end.php' );
	}
}


if ( ! function_exists( 'creator_lms_default_course_tabs' ) ) {

	/**
	 * Get the default course tabs.
	 *
	 * This function returns an array of default tabs for a course, including
	 * information, assignments, resources, and reviews.
	 *
	 * @global \OMLMS\Course $course The current course object.
	 * @global \WP_Post $post The current post object.
	 *
	 * @return array The array of default course tabs.
	 * @since 1.0.0
	 */
	function creator_lms_default_course_tabs( $tabs ) {
		global $course, $post;

		$current_student_id = get_current_user_id();
		$student            = new \OMLMS\Data\Student( $current_student_id );
		$maybe_enrolled     = false;

		if ( $student ) {
			$maybe_enrolled = $student->maybe_enrolled( $course->get_id() );
		}

		$tabs['description'] = array(
			'title'    => __( 'Description', 'ohmylms' ),
			'priority' => 10,
			'callback' => 'creator_lms_course_description_tab',
		);

		$tabs['content'] = array(
			'title'    => __( 'Contents', 'ohmylms' ),
			'priority' => 10,
			'callback' => 'creator_lms_course_information_tab',
		);

		if ( creator_lms_is_pro() && $maybe_enrolled ) {
			$tabs['assignments'] = array(
				'title'    => __( 'Assignments', 'ohmylms' ),
				'priority' => 20,
				'callback' => 'creator_lms_course_assignments_tab',
			);

			$tabs['resources'] = array(
				'title'    => __( 'Resources', 'ohmylms' ),
				'priority' => 30,
				'callback' => 'creator_lms_course_resources_tab',
			);
		}

		if ( $course->get_enable_reviews() ) {
			$tabs['reviews'] = array(
				'title'    => __( 'Reviews', 'ohmylms' ),
				'priority' => 40,
				'callback' => 'creator_lms_course_reviews_tab',
			);
		}

		return $tabs;
	}
}


if ( ! function_exists( 'creator_lms_course_description_tab' ) ) {

	/**
	 * Output the description tab content.
	 */
	function creator_lms_course_description_tab() {
		$single_course_layout = get_option( 'creator_lms_single_course_page_layout', 'layout_1' );

		if ( 'layout_3' === $single_course_layout ) {
			omlms_get_template( 'single-course/tabs/layout3-description.php' );

		} else {
			omlms_get_template( 'single-course/tabs/description.php' );
		}
	}
}


if ( ! function_exists( 'creator_lms_course_information_tab' ) ) {

	/**
	 * Output the description tab content.
	 */
	function creator_lms_course_information_tab() {
		$single_course_layout = get_option( 'creator_lms_single_course_page_layout', 'layout_1' );

		if ( 'layout_3' === $single_course_layout ) {
			omlms_get_template( 'single-course/tabs/layout3-information.php' );

		} else {
			omlms_get_template( 'single-course/tabs/information.php' );
		}
	}
}


if ( ! function_exists( 'creator_lms_course_assignments_tab' ) ) {

	/**
	 * Output the assignments tab content.
	 */
	function creator_lms_course_assignments_tab() {
		$single_course_layout = get_option( 'creator_lms_single_course_page_layout', 'layout_1' );

		if ( 'layout_3' === $single_course_layout ) {
			omlms_get_template( 'single-course/tabs/layout3-assignments.php' );

		} else {
			omlms_get_template( 'single-course/tabs/assignments.php' );
		}

	}
}

if ( ! function_exists( 'creator_lms_course_resources_tab' ) ) {

	/**
	 * Output the assignments tab content.
	 */
	function creator_lms_course_resources_tab() {
		$single_course_layout = get_option( 'creator_lms_single_course_page_layout', 'layout_1' );

		if ( 'layout_3' === $single_course_layout ) {
			omlms_get_template( 'single-course/tabs/layout3-resources.php' );

		} else {
			omlms_get_template( 'single-course/tabs/resources.php' );
		}
	}
}

if ( ! function_exists( 'creator_lms_course_reviews_tab' ) ) {

	/**
	 * Output the assignments tab content.
	 */
	function creator_lms_course_reviews_tab() {
		$single_course_layout = get_option( 'creator_lms_single_course_page_layout', 'layout_1' );

		if ( 'layout_3' === $single_course_layout ) {
			omlms_get_template( 'single-course/tabs/layout3-reviews.php' );

		} else {
			omlms_get_template( 'single-course/tabs/reviews.php' );
		}
	}
}


if ( ! function_exists( 'creator_lms_breadcrumb' ) ) {

	/**
	 * Display the breadcrumb for a single course.
	 *
	 * @param array $args Optional. Arguments to customize the breadcrumb. Default empty array.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_breadcrumb( $args = array() ) {

		if ( ! is_single() ) {
			return;
		}

		global $post;

		$permalinks     = omlms_get_permalink_structure();
		$course_page_id = omlms_get_page_id( 'course' );
		$course_page    = get_post( $course_page_id );
		$crumbs         = array();
		$permalink      = get_permalink( $post );

		$args = wp_parse_args(
			$args,
			array(
				'delimiter'   => '&nbsp;&#47;&nbsp;',
				'wrap_before' => '<nav class="creator-lms-breadcrumb" aria-label="Breadcrumb">',
				'wrap_after'  => '</nav>',
				'before'      => '',
				'after'       => '',
				'home'        => _x( 'All Courses', 'breadcrumb', 'ohmylms' ),
			)
		);

		if ( ! empty( $args['home'] ) ) {
			$crumbs[] = array(
				$args['home'],
				get_post_type_archive_link( 'omlms-course' ),
			);
		}

		if ( $course_page_id && $course_page && isset( $permalinks['course_base'] ) && strstr( $permalinks['course_base'], '/' . $course_page->post_name ) && intval( get_option( 'page_on_front' ) ) !== $course_page_id ) {
			$crumbs[] = array(
				wp_strip_all_tags( get_the_title( $course_page ) ),
				$permalink,
			);
		}

		if ( 'omlms-course' === get_post_type( $post ) ) {
			$terms = creator_lms_get_course_terms(
				$post->ID,
				'course_cat',
				array(
					'orderby' => 'parent',
					'order'   => 'DESC',
				)
			);
			if ( $terms ) {
				$main_term = $terms[0];

				$ancestors = get_ancestors( $main_term->term_id, 'course_cat' );
				$ancestors = array_reverse( $ancestors );

				foreach ( $ancestors as $ancestor ) {
					$ancestor = get_term( $ancestor, 'course_cat' );

					if ( ! is_wp_error( $ancestor ) && $ancestor ) {
						$crumbs[] = array(
							wp_strip_all_tags( $ancestor->name ),
							get_term_link( $ancestor ),
						);
					}
				}

				$crumbs[] = array(
					wp_strip_all_tags( $main_term->name ),
					get_term_link( $main_term ),
				);
			}
		}

		$crumbs[] = array(
			wp_strip_all_tags( get_the_title( $post ) ),
			$permalink,
		);

		$args = array(
			'delimiter'   => '&nbsp;&#47;&nbsp;',
			'wrap_before' => '<nav class="creator-lms-breadcrumb"><div class="creator-lms-container"><ul>',
			'wrap_after'  => '</ul></div></nav>',
			'before'      => '<li>',
			'after'       => '</li>',
			'home'        => _x( 'All Courses', 'breadcrumb', 'ohmylms' ),
			'breadcrumb'  => $crumbs,
		);

		omlms_get_template( 'global/breadcrumb.php', $args );
	}
}


if ( ! function_exists( 'creator_lms_course_header' ) ) {
	/**
	 * Display the course header in the loop.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_course_header() {
		omlms_get_template( 'loop/header.php' );
	}
}


if ( ! function_exists( 'creator_lms_login_form' ) ) {
	/**
	 * Display the login form.
	 *
	 * This function outputs the login form template with the provided arguments.
	 *
	 * @param array $args {
	 *     Optional. Arguments to customize the login form.
	 *
	 *     @type string $message  Optional. Message to display above the form. Default empty.
	 *     @type string $redirect Optional. URL to redirect to after login. Default empty.
	 *     @type bool   $hidden   Optional. Whether to hide the form initially. Default false.
	 * }
	 * @since 1.0.0
	 */
	function creator_lms_login_form( $args ) {
		$defaults = array(
			'message'  => '',
			'redirect_to' => '',
			'hidden'   => false,
		);

		$args = wp_parse_args( $args, $defaults );

		omlms_get_template( 'global/form-login.php', $args );
	}
}


if ( ! function_exists( 'creator_lms_signup_form' ) ) {
	function creator_lms_signup_form( $args ) {
		$defaults = array(
			'message'  => '',
			'redirect_to' => '',
			'hidden'   => false,
		);

		$args = wp_parse_args( $args, $defaults );

		omlms_get_template( 'global/form-signup.php', $args );
	}
}


if ( ! function_exists( 'creator_lms_checkout_login_form' ) ) {
	/**
	 * Display the checkout login form.
	 *
	 * This function outputs the login form template for the checkout page.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_checkout_login_form() {
		omlms_get_template(
			'checkout/form-login.php',
			array(
				'checkout' => \CodeRex\Ecommerce\ecommerce()->checkout(),
			)
		);
	}
}


if ( ! function_exists( 'creator_lms_checkout_signup_form' ) ) {
	/**
	 * Display the checkout signup form.
	 *
	 * This function outputs the signup form template for the checkout page.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_checkout_signup_form() {
		omlms_get_template(
			'checkout/form-signup.php',
			array(
				'checkout' => \CodeRex\Ecommerce\ecommerce()->checkout(),
			)
		);
	}
}


if ( ! function_exists( 'creator_lms_checkout_form_title' ) ) {
	/**
	 * Display the checkout form title.
	 *
	 * This function outputs the title for the checkout form.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_checkout_form_title() {
		echo '<div class="customer-info-title-wrapper">';
			echo '<h2 class="creator-lms-checkout-title customer-info-title">' . esc_html__( 'Customer Information', 'ohmylms' ) . '</h2>';
		echo '</div>';
	}
}

if ( ! function_exists( 'creator_lms_checkout_form_contact_title' ) ) {
	/**
	 * Display the checkout form contact title.
	 *
	 * This function outputs the title for the checkout form contact section.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_checkout_form_contact_title() {
		echo '<div class="creator-lms-customer-contact-wrapper">';
			echo '<h2 class="creator-lms-checkout-title customer-info-title">';
				echo esc_html__( 'Contact', 'ohmylms' );
			echo '</h2>';

			if ( is_user_logged_in()  ) {

			} else {
				?>
					<div class="creator-lms-form-login-toggle">
						<?php echo esc_html__( 'Already have an account?', 'ohmylms' ); ?>

						<a href="#" class="showlogin">
							<?php echo esc_html__( 'Log In', 'ohmylms' ); ?>
						</a>
					</div>
				<?php
			}
		echo '</div>';
	}
}

if ( ! function_exists( 'creator_lms_review_order_mobile' ) ) {
	/**
	 * Display the order review in mobile device.
	 *
	 * This function outputs the order review for the checkout form in mobile.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_review_order_mobile( $checkout ) {
		omlms_get_template(
			'checkout/review-order-mobile.php',
			array(
				'checkout' => $checkout,
			)
		);
	}
}


if ( ! function_exists( 'creator_lms_circular_progressbar' ) ) {

	/**
	 * Outputs a circular progress bar.
	 *
	 * @param int    $size         Size (height and width) of the progress bar in pixels. Default 110.
	 * @param int    $progress     Progress to display as a percentage. Default 0.
	 * @param int    $thikness     Thickness of the progress bar. Default 5.
	 * @param string $backgroundColor Background color of the progress bar. Default #EAEDF4.
	 * @param string $forgroundColor Foreground color of the progress bar. Default #5B65F5.
	 *
	 * @return string The HTML for the circular progress bar.
	 */
	function creator_lms_circular_progressbar( $sqSize = 110, $progress = 0, $thikness = 5, $backgroundColor = '#EAEDF4', $forgroundColor = '#5B65F5' ) {
		ob_start();

		$progressPercent = $progress;
		$radius          = ( $sqSize - 6 ) / 2;
		$dashArray       = $radius * M_PI * 2;
		$dashOffset      = $dashArray - $dashArray * $progressPercent / 100;
		?>
		<svg class="circle-progress-svg" width="<?php echo $sqSize; ?>" height="<?php echo $sqSize; ?>" viewBox="0 0 <?php echo $sqSize; ?> <?php echo $sqSize; ?>">
			<circle
				class="circle-background"
				cx=<?php echo $sqSize / 2; ?>
				cy=<?php echo $sqSize / 2; ?>
				r=<?php echo $radius; ?>
				stroke-width="<?php echo $thikness; ?>px"
				stroke="<?php echo $backgroundColor; ?>"
			>
			</circle>

			<circle
			class="circle-progress"
			cy=<?php echo $sqSize / 2; ?>
			cx=<?php echo $sqSize / 2; ?>
			r=<?php echo $radius; ?>
			stroke-width="<?php echo $thikness; ?>px"
			stroke="<?php echo $forgroundColor; ?>"
			transform="rotate(-90 <?php echo $sqSize / 2; ?> <?php echo $sqSize / 2; ?> )"
			style="stroke-dasharray: <?php echo $dashArray; ?>; stroke-dashoffset: <?php echo $dashOffset; ?>"
			>
			</circle>

		</svg>
		<?php
		return ob_get_clean();
	}
}


if ( ! function_exists( 'creator_lms_show_all_notices' ) ) {
	/**
	 * Display all notices.
	 *
	 * This function is used to display all notices on the checkout page.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_show_all_notices() {
		echo '<div class="omlms-notices-wrapper">';
		\CodeRex\Ecommerce\omlmse_print_notices();
		echo '</div>';
	}
}


if ( ! function_exists( 'creator_lms_get_header' ) ) {
	/**
	 * Get the header template for OhMyLMS.
	 *
	 * This function checks the WordPress version and theme type to determine
	 * whether to use the block template part or the classic header template.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_get_header() {
		global $wp_version, $omlms_block_template_parts;

		if ( version_compare( $wp_version, '5.9', '>=' ) && function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) {
			// Discover block styles/module dependencies before wp_head prints the import map.
			$theme_slug = wp_get_theme()->get( 'TextDomain' );
			$omlms_block_template_parts = array();
			foreach ( array( 'header', 'footer' ) as $part ) {
				$attributes = wp_json_encode( array( 'slug' => $part, 'theme' => $theme_slug, 'tagName' => $part, 'className' => 'site-' . $part, 'layout' => array( 'inherit' => true ) ) );
				$omlms_block_template_parts[ $part ] = do_blocks( '<!-- wp:template-part ' . $attributes . ' /-->' );
			}
			?>
			<!doctype html>
		<html <?php language_attributes(); ?>>
			<head>
				<meta charset="<?php bloginfo( 'charset' ); ?>">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<?php wp_head(); ?>
			</head>

			<body <?php body_class(); ?>>
				<?php wp_body_open(); ?>
				<div class="wp-site-blocks">
					<?php
					// Get the current theme's slug to reference the template part correctly.
					$theme      = wp_get_theme();
					$theme_slug = $theme->get( 'TextDomain' );

					// Output the header block template part.
					echo $omlms_block_template_parts['header'];
					?>
				<?php
		} else {
			// Fallback for classic themes.
			get_header( 'course' );
		}
	}
}


if ( ! function_exists( 'creator_lms_get_footer' ) ) {
	/**
	 * Get the footer template for OhMyLMS.
	 *
	 * This function checks the WordPress version and theme type to determine
	 * whether to use the block template part or the classic footer template.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_get_footer() {
		global $wp_version, $omlms_block_template_parts;

		if ( version_compare( $wp_version, '5.9', '>=' ) && function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) {
			?>
			</div> <!-- Close wp-site-blocks -->
			<?php
			$theme      = wp_get_theme();
			$theme_slug = $theme->get( 'TextDomain' );

			// Output the footer block template part.
			echo isset( $omlms_block_template_parts['footer'] ) ? $omlms_block_template_parts['footer'] : do_blocks( '<!-- wp:template-part {"slug":"footer","theme":"' . $theme_slug . '","tagName":"footer","className":"site-footer","layout":{"inherit":true}} /-->' );
			?>
			<?php wp_footer(); ?>
			</body>
			</html>
			<?php
		} else {
			// Fallback for classic themes.
			get_footer( 'course' );
		}
	}
}


/**
 * Get the HTML for the rating.
 *
 * @param float $rating The rating value.
 * @param int   $count  The number of ratings.
 *
 * @return string The HTML for the rating.
 */
function omlms_get_rating_html( $rating, $count = 0 ) {
	$html = '';
	if ( 0 < $rating ) {
		ob_start();
		echo '(' . $count . ( 1 == $count ? esc_html__( ' Rating', 'ohmylms' ) : esc_html__( ' Ratings', 'ohmylms' ) ) . ')';
		$html = ob_get_clean();
	}
	return apply_filters( 'creator_lms_get_rating_html', $html, $rating, $count );
}


if ( ! function_exists( 'creator_lms_comments' ) ) {

	/**
	 * Output the Review comments template.
	 *
	 * @param WP_Comment $comment Comment object.
	 * @param array      $args Arguments.
	 * @param int        $depth Depth.
	 */
	function creator_lms_comments( $comment ) {
		// phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		$GLOBALS['comment'] = $comment;
		omlms_get_template(
			'single-course/review.php',
			array(
				'comment' => $comment,
			)
		);
	}
}

if ( ! function_exists( 'creator_lms_review_display_gravatar' ) ) {
	/**
	 * Display the review authors gravatar
	 *
	 * @param array $comment WP_Comment.
	 * @return void
	 */
	function creator_lms_review_display_gravatar( $comment ) {
		echo get_avatar( $comment, apply_filters( 'creator_lms_review_gravatar_size', '60' ), '' );
	}
}

if ( ! function_exists( 'creator_lms_review_author' ) ) {
	/**
	 * Display the reviewers star rating
	 *
	 * @return void
	 */
	function creator_lms_review_author() {
		if ( post_type_supports( 'omlms-course', 'comments' ) ) {
			$student = new \OMLMS\Data\Student( get_current_user_id() );
			omlms_get_template( 'single-course/review-author.php', array( 'student' => $student ) );
		}
	}
}

if ( ! function_exists( 'creator_lms_review_meta' ) ) {
	/**
	 * Display the review authors meta (name, verified owner, review date)
	 *
	 * @return void
	 */
	function creator_lms_review_meta() {
		omlms_get_template( 'single-course/review-meta.php' );
	}
}

if ( ! function_exists( 'creator_lms_review_rating_area' ) ) {
	/**
	 * Display the review authors meta (name, verified owner, review date)
	 *
	 * @return void
	 */
	function creator_lms_review_rating_area() {
		omlms_get_template( 'single-course/review-rating.php' );
	}
}

if ( ! function_exists( 'creator_lms_review_display_comment_text' ) ) {

	/**
	 * Display the review content.
	 */
	function creator_lms_review_display_comment_text() {
		echo '<div class="description">';
		comment_text();
		echo '</div>';
	}
}

/**
 * Get HTML for ratings.
 *
 * @since  3.0.0
 * @param  float $rating Rating being shown.
 * @param  int   $count  Total number of ratings.
 * @return string
 */
function creator_lms_get_rating_html( $rating, $count = 0 ) {
	$html = '';

	if ( 0 < $rating ) {
		/* translators: %s: rating */
		$label             = sprintf( __( 'Rated %s out of 5', 'ohmylms' ), $rating );
		$rating_percentage = ( $rating / 5 ) * 100; // Calculate percentage based on rating
		$html              = '<span class="course-review-rating" role="img" aria-label="' . esc_attr( $label ) . '">';
		$html             .= creator_lms_get_star_rating_html( $rating, $rating_percentage, $count );
		$html             .= '</span>';
	}

	return apply_filters( 'creator_lms_course_get_rating_html', $html, $rating, $count );
}

/**
 *
 * Get HTML for star rating.
 *
 * @param $rating
 * @param $rating_percentage
 * @param $count
 * @return mixed|null
 */
function creator_lms_get_star_rating_html( $rating, $rating_percentage, $count = 0 ) {
	$html = '<span class="given-rate" style="width: ' . esc_attr( $rating_percentage ) . '%;">';

	$html .= '</span>';

	return apply_filters( 'creator_lms_get_star_rating_html', $html, $rating, $count );
}

function creator_lms_get_review_date_html( $comment_time ) {
	// Calculate the human-readable time difference
	$time_diff = human_time_diff( strtotime( $comment_time ), current_time( 'timestamp' ) ) . ' ago';

	// Generate the HTML markup for the time element
	$html = '<time class="review-date">' . esc_html( $time_diff ) . '</time>';

	// Apply a filter for further customization if needed
	return apply_filters( 'creator_lms_get_review_date_html', $html, $comment_time );
}

if ( ! function_exists( 'creator_lms_default_my_course_tabs' ) ) {

	/**
	 * Get the default dashboard's my-courses tabs.
	 *
	 * This function returns an array of default tabs for dashboard page's my-courses, including
	 * Enrolled courses, In-Progress Courses, Completed Courses.
	 *
	 * @return array The array of default course tabs.
	 * @since 1.0.0
	 */
	function creator_lms_default_my_course_tabs( $tabs ) {

		$tabs['enrolled-courses'] = array(
			'title'    => __( 'Enrolled Courses', 'ohmylms' ),
			'priority' => 5,
			'callback' => 'creator_lms_enrolled_courses_tab_content',
		);

		$tabs['inprogress-courses'] = array(
			'title'    => __( 'In-Progress Courses', 'ohmylms' ),
			'priority' => 10,
			'callback' => 'creator_lms_inprogress_courses_tab_content',
		);

		$tabs['completed-courses'] = array(
			'title'    => __( 'Completed Courses', 'ohmylms' ),
			'priority' => 15,
			'callback' => 'creator_lms_completed_courses_tab_content',
		);

		return $tabs;
	}
}

if ( ! function_exists( 'creator_lms_enrolled_courses_tab_content' ) ) {

	/**
	 * Output the Enrolled courses tab content.
	 */
	function creator_lms_enrolled_courses_tab_content() {
		omlms_get_template(
			'profile/tabs/enrolled-course.php',
			array(
				'student' => new \OMLMS\Data\Student( get_current_user_id() ),
			)
		);
	}
}

if ( ! function_exists( 'creator_lms_inprogress_courses_tab_content' ) ) {

	/**
	 * Output the In progress tab content.
	 */
	function creator_lms_inprogress_courses_tab_content() {
		omlms_get_template(
			'profile/tabs/progress-course.php',
			array(
				'student' => new \OMLMS\Data\Student( get_current_user_id() ),
			)
		);
	}
}

if ( ! function_exists( 'creator_lms_completed_courses_tab_content' ) ) {

	/**
	 * Output the In progress tab content.
	 */
	function creator_lms_completed_courses_tab_content() {
		omlms_get_template(
			'profile/tabs/completed-course.php',
			array(
				'student' => new \OMLMS\Data\Student( get_current_user_id() ),
			)
		);
	}
}


if ( ! function_exists( 'creator_lms_account_student_dashboard_header' ) ) {
	/**
	 * this function should be removed after studendt dashboard is ready.
	 */
	function creator_lms_account_student_dashboard_header() {
		$current_user_id = get_current_user_id();
		$student         = new \OMLMS\Data\Student( $current_user_id );

		omlms_get_template(
			'global/main-header.php',
			array(
				'student' => $student,
			)
		);
	}
}


if ( ! function_exists( 'creator_lms_account_content' ) ) {

	/**
	 * My Account content output.
	 */
	function creator_lms_account_content() {
		global $wp;
		if ( ! empty( $wp->query_vars ) ) {
			foreach ( $wp->query_vars as $key => $value ) {
				// Ignore pagename param.
				if ( 'pagename' === $key ) {
					continue;
				}
				if ( has_action( 'creator_lms_account_' . $key . '_endpoint' ) ) {
					do_action( 'creator_lms_account_' . $key . '_endpoint', $value );
					return;
				}
			}
		}

		// No endpoint found? Default to dashboard.
		omlms_get_template(
			'profile/dashboard.php',
			array(
				'current_user' => get_user_by( 'id', get_current_user_id() ),
			)
		);
	}
}

if ( ! function_exists( 'creator_lms_profile_layout_content' ) ) {

	/**
	 * My Account content output.
	 */
	function creator_lms_profile_layout_content() {
		global $wp;
		if ( ! empty( $wp->query_vars ) ) {
			foreach ( $wp->query_vars as $key => $value ) {
				// Ignore pagename param.
				if ( 'pagename' === $key ) {
					continue;
				}
				if ( has_action( 'creator_lms_layout_' . $key . '_content' ) ) {
					do_action( 'creator_lms_layout_' . $key . '_content', $value );
					return;
				}
			}
		}

		// No endpoint found? Default to dashboard.
		// omlms_get_template(
		// 'profile/dashboard.php',
		// array(
		// 'current_user' => get_user_by( 'id', get_current_user_id() ),
		// )
		// );
	}
}

if ( ! function_exists( 'creator_lms_account_navigation' ) ) {

	/**
	 * My Account navigation template.
	 */
	function creator_lms_account_navigation() {
		omlms_get_template( 'profile/navigation.php' );
	}
}


if ( ! function_exists( 'creator_lms_account_settings_content' ) ) {

	/**
	 * My Account navigation template.
	 */
	function creator_lms_account_settings_content( $current_page ) {
		\OMLMS\Shortcodes\ShortCodeMyProfile::settings();
	}
}



if ( ! function_exists( 'omlms_lms_student_profile_name' ) ) {

	/**
	 * My Account navigation template.
	 */
	function omlms_lms_student_profile_name() {
		\OMLMS\Shortcodes\ShortCodeMyProfile::name();
	}
}



if ( ! function_exists( 'omlms_lms_student_profile_dashboard_content' ) ) {

	/**
	 * My Account navigation template.
	 */
	function omlms_lms_student_profile_dashboard_content() {
		\OMLMS\Shortcodes\ShortCodeMyProfile::main_content();
	}
}



if ( ! function_exists( 'creator_lms_account_profile_content' ) ) {

	/**
	 * My Account navigation template.
	 */
	function creator_lms_account_profile_content() {
		\OMLMS\Shortcodes\ShortCodeMyProfile::profile();
	}
}


if ( ! function_exists( 'creator_lms_account_notification_content' ) ) {

	/**
	 * My Account navigation template.
	 */
	function creator_lms_account_notification_content() {
		\OMLMS\Shortcodes\ShortCodeMyProfile::notifications();
	}
}



if ( ! function_exists( 'omlms_lms_student_profile_my_course_content' ) ) {

	/**
	 * My Account navigation template.
	 */
	function omlms_lms_student_profile_my_course_content() {
		\OMLMS\Shortcodes\ShortCodeMyProfile::my_courses();
	}
}

if ( ! function_exists( 'creator_lms_profile_layout' ) ) {

	/**
	 * My Account navigation template.
	 */
	function creator_lms_profile_layout() {
		\OMLMS\Shortcodes\ShortCodeMyProfile::profile_layout();
	}
}

if ( ! function_exists( 'creator_lms_account_transactions_history_content' ) ) {

	/**
	 * My Account navigation template.
	 */
	function creator_lms_account_transactions_history_content( $current_page ) {
		\OMLMS\Shortcodes\ShortCodeMyProfile::transactions_history( $current_page );
	}
}

if ( ! function_exists( 'creator_lms_account_membership_content' ) ) {

	/**
	 * My Account navigation template.
	 */
	function creator_lms_account_membership_content( $current_page ) {
		\OMLMS\Shortcodes\ShortCodeMyProfile::membership( $current_page );
	}
}

if ( ! function_exists( 'creator_lms_account_invoice_details_content' ) ) {

	/**
	 * My Account navigation template.
	 */
	function creator_lms_account_invoice_details_content( $current_page ) {
		\OMLMS\Shortcodes\ShortCodeMyProfile::invoice_details( $current_page );
	}
}


if ( ! function_exists( 'creator_lms_account_billing_information_content' ) ) {

	/**
	 * My Account navigation template.
	 */
	function creator_lms_account_billing_information_content() {
		\OMLMS\Shortcodes\ShortCodeMyProfile::billing_information();
	}
}


if ( ! function_exists( 'creator_lms_account_profile_edit_content' ) ) {

	/**
	 * My Account navigation template.
	 */
	function creator_lms_account_profile_edit_content() {
		\OMLMS\Shortcodes\ShortCodeMyProfile::profile_edit();
	}
}


if ( ! function_exists( 'creator_lms_membership_loop_start' ) ) {

	/**
	 * Start the membership loop.
	 *
	 * This function outputs the opening HTML for the membership loop.
	 *
	 * @param bool $echo Whether to echo the output or return it. Default true.
	 * @return string|null The opening HTML for the membership loop if $echo is false, null otherwise.
	 * @since 1.0.0
	 */
	function creator_lms_membership_loop_start( $echo = true ) {
		ob_start();

		omlms_get_template( 'membership-loop/loop-start.php' );

		$loop_start = ob_get_clean();

		if ( $echo ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo $loop_start;
		} else {
			return $loop_start;
		}
	}
}


if ( ! function_exists( 'creator_lms_membership_loop_end' ) ) {

	/**
	 * End the membership loop.
	 *
	 * This function outputs the closing HTML for the membership loop.
	 *
	 * @param bool $echo Whether to echo the output or return it. Default true.
	 * @return string|null The closing HTML for the membership loop if $echo is false, null otherwise.
	 * @since 1.0.0
	 */
	function creator_lms_membership_loop_end( $echo = true ) {
		ob_start();

		omlms_get_template( 'membership-loop/loop-end.php' );

		$loop_end = ob_get_clean();

		if ( $echo ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo $loop_end;
		} else {
			return $loop_end;
		}
	}
}

if ( ! function_exists( 'creator_lms_membership_header' ) ) {
	/**
	 * Display the course header in the loop.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_membership_header() {
		omlms_get_template( 'membership-loop/header.php' );
	}
}


/**
 * No Membership found
 *
 * @since 1.0.0
 */
function creator_lms_no_membership_found(): void {
	omlms_get_template( 'membership-loop/no-membership-found.php' );
}

/**
 * Outputs the membership product list template.
 *
 * @since 1.0.0
 */
function creator_lms_membership_product_list() {
	omlms_get_template( 'membership-loop/products-list.php' );
}

/**
 * Load the membership title template.
 *
 * This function loads the membership title template for displaying
 * the membership title in the loop.
 *
 * @since 1.0.0
 */
function creator_lms_membership_title() {
	omlms_get_template( 'membership-loop/title.php' );
}
function creator_lms_membership_price() {
	omlms_get_template( 'membership-loop/price.php' );
}
function creator_lms_membership_description() {
	omlms_get_template( 'membership-loop/descriptions.php' );
}
function creator_lms_membership_add_to_cart() {
	omlms_get_template( 'membership-loop/add-to-cart.php' );
}


/**
 * Email template functions
 */
if ( ! function_exists( 'creator_lms_email_header' ) ) {
	function creator_lms_email_header( $header_title, $email_settings ) {
		omlms_get_template(
			'emails/email-header.php',
			array(
				'header_title'   => $header_title,
				'email_settings' => $email_settings,
			)
		);
	}
}

if ( ! function_exists( 'creator_lms_email_footer' ) ) {
	function creator_lms_email_footer( $settings, $email_settings ) {
		omlms_get_template(
			'emails/email-footer.php',
			array(
				'settings'       => $settings,
				'email_settings' => $email_settings,
			)
		);
	}
}

if ( ! function_exists( 'creator_lms_email_order_details' ) ) {
	function creator_lms_email_order_details( $order, $email_settings ) {
		omlms_get_template(
			'emails/email-order-details.php',
			array(
				'order'          => $order,
				'email_settings' => $email_settings,
			)
		);
	}
}

if ( ! function_exists( 'creator_lms_email_order_items' ) ) {
	function creator_lms_email_order_items( $order, $email_settings ) {
		omlms_get_template(
			'emails/email-order-items.php',
			array(
				'order'          => $order,
				'email_settings' => $email_settings,
			)
		);
	}
}


if ( ! function_exists( 'creator_lms_course_filter_header' ) ) {
	/**
	 * Display the course filter header.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_course_filter_header() {
		omlms_get_template( 'filters/filter-header.php' );
	}
}

if ( ! function_exists( 'creator_lms_course_filters' ) ) {
	/**
	 * Display the course filters.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_course_filters( $atts = array() ) {

		omlms_get_template( 'filters/filters.php', array(
			'atts' => $atts,
		) );
	}
}


if ( ! function_exists( 'creator_lms_course_loop_before_category_filter' ) ) {
	/**
	 * Display the course category filter for layout style3 and style4.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_course_loop_before_category_filter( $atts ) {
		$is_enable_category = isset( $atts ) && is_array( $atts ) && isset( $atts['is_enable_category'] ) ? $atts['is_enable_category'] : get_option( 'creator_lms_archive_page_category_is_enabled', 'no' );
		$layout_style = isset( $atts ) && is_array( $atts ) && isset( $atts['layout_style'] ) ? $atts['layout_style'] : get_option( 'creator_lms_archive_page_layout_style', 'grid-style1' );
		$layout = isset( $atts ) && is_array( $atts ) && isset( $atts['layout'] ) ? $atts['layout'] : get_option( 'creator_lms_archive_page_layout', 'grid' );
		if ( ( 'grid-style3' === $layout_style || 'grid-style4' === $layout_style ) &&
			'grid' === $layout &&
			'yes' === $is_enable_category
		) {
			omlms_get_template( 'filters/category-type-button.php', array(
				'is_enable_category' => $is_enable_category,
				'layout_style'      => $layout_style,
			) );
		}
	}
}


if ( ! function_exists( 'creator_lms_course_loop_before_filter' ) ) {
	/**
	 * Display the course search bar and sort.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_course_loop_before_filter( $atts ) {
		$layout_style = isset( $atts ) && is_array( $atts ) && isset( $atts['layout_style'] ) ? $atts['layout_style'] : get_option( 'creator_lms_archive_page_layout_style', 'grid-style1' );
		$layout      = isset( $atts ) && is_array( $atts ) && isset( $atts['layout'] ) ? $atts['layout'] : get_option( 'creator_lms_archive_page_layout', 'grid' );
		if ( 'grid' === $layout &&
			( 'grid-style1' === $layout_style || 'grid-style2' === $layout_style )
		) {
			omlms_get_template( 'filters/search-sort.php', array(
				'atts'        => $atts, // Pass shortcode attributes to template
			) );
		}
	}
}

if ( ! function_exists( 'creator_lms_course_carousel_item_hover' ) ) {
	/**
	 * Display the courses carousel item's hover popup.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_course_carousel_item_hover( $atts ) {
		$layout_style = isset( $atts ) && is_array( $atts ) && isset( $atts['layout_style'] ) ? $atts['layout_style'] : get_option( 'creator_lms_archive_page_layout_style', 'grid-style1' );
		$layout      = isset( $atts ) && is_array( $atts ) && isset( $atts['layout'] ) ? $atts['layout'] : get_option( 'creator_lms_archive_page_layout', 'grid' );

		if ( 'grid' === $layout && 'grid-style3' === $layout_style ) {
			omlms_get_template_part( 'content', 'course-popup', $atts );
		}

	}
}

if ( ! function_exists( 'creator_lms_get_number_suffix' ) ) {
	/**
	 * Returns the ordinal suffix for a given number.
	 *
	 * This function computes the appropriate ordinal suffix ('st', 'nd', 'rd', 'th')
	 * for a given integer. Special cases are considered for numbers ending in 11, 12,
	 * and 13, for which the suffix 'th' is returned.
	 *
	 * @param int $number The number for which to find the ordinal suffix.
	 * @return string The ordinal suffix of the number.
	 */
	function creator_lms_get_number_suffix( $number ) {
		if ( in_array( $number % 100, array( 11, 12, 13 ) ) ) {
			return 'th'; // Special case for 11th, 12th, 13th
		}

		switch ( $number % 10 ) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
			default:
				return 'th';
		}
	}
}

//-----start course single layout-3 all functions-----//
if ( ! function_exists( 'creator_lms_pricebox_and_course_meta' ) ) {
	function creator_lms_pricebox_and_course_meta() {
		echo '<div class="creator-lms-course-pricebox-and-meta">';
			omlms_get_template( 'single-course/widgets/course-meta.php' );
			omlms_get_template( 'single-course/widgets/pricebox.php' );
			omlms_get_template( 'single-course/widgets/continue-learning-progression.php' );
		echo '</div>';
	}
}

if ( ! function_exists( 'creator_lms_continue_learn_button' ) ) {
	function creator_lms_continue_learn_button() {
		omlms_get_template( 'single-course/continue-learn-button.php' );
	}
}

if ( ! function_exists( 'creator_lms_widget_course_leaderboard_layout3' ) ) {
	/**
	 * Outputs the leaderboard widget for single course (layout 3) sidebar.
	 *
	 * @since 1.0.0
	 */
	function creator_lms_widget_course_leaderboard_layout3() {
		if( ! creator_lms_is_pro() ) {
			return; // Exit if OhMyLMS is not active.
		}
		$page_features = get_option( 'creator_lms_single_course_page_features' );

		if ( is_array($page_features) && in_array( 'leaderboard_with_enroll', $page_features ) ) {
			omlms_get_template( 'single-course/widgets/leaderboard-layout3.php' );
		}
	}
}


if ( ! function_exists( 'creator_lms_single_course_layout3_header' ) ) {
	function creator_lms_single_course_layout3_header() {
		omlms_get_template( 'single-course/layout3-header.php' );
	}
}


if ( ! function_exists( 'creator_lms_single_course_layout3_content' ) ) {
	function creator_lms_single_course_layout3_content() {
		omlms_get_template( 'single-course/layout3-content.php' );
	}
}

//-----end course single layout-3 all functions-----//
if ( ! function_exists( 'creator_lms_login_header' ) ) {

/**
 * Outputs the header for the login pages.
 *
 * This function displays a title and description at the top of the login pages.
 *
 * @since 1.0.0
 */
	function creator_lms_login_header() {

		if( is_creator_lms_checkout() ) {
			return;
		}
		?>
			<div class="creator-lms-login-signup-header">
				<h1>
					<?php echo __( 'Log in to your account.', 'ohmylms' ); ?>
				</h1>
				<p>
					<?php echo __( 'Build skills for today, tomorrow, and beyond. Education to future-proof your career.', 'ohmylms' ); ?>
				</p>
			</div>
		<?php

	}
}

if ( ! function_exists( 'creator_lms_signup_header' ) ) {

/**
 * Outputs the header for the signup pages.
 *
 * This function displays a title and description at the top of the signup pages.
 *
 * @since 1.0.0
 */
	function creator_lms_signup_header() {
		?>
			<div class="creator-lms-login-signup-header">
				<h1>
					<?php echo __( 'Create your account.', 'ohmylms' ); ?>
				</h1>
				<p>
					<?php echo __( 'Build skills for today, tomorrow, and beyond. Education to future-proof your career.', 'ohmylms' ); ?>
				</p>
			</div>
		<?php

	}
}

if ( ! function_exists( 'creator_lms_login_signup_form_title' ) ) {

/**
 * Outputs the title for the login and signup forms.
 *
 * This function displays a title at the top of the login and signup forms.
 *
 * @since 1.0.0
 */
	function creator_lms_login_signup_form_title() {
		?>
			<span class="account-details-title">
				<?php echo is_creator_lms_checkout() ? __( 'Log in', 'ohmylms' ) : __( 'Account details', 'ohmylms' ); ?>
			</span>
		<?php

	}
}
