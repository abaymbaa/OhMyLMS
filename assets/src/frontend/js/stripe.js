jQuery( function( $ ) {
	'use strict';

	try {
		var stripe = Stripe( ohmylms_stripe_params.key);
	} catch( error ) {
		console.error( error );
		return;
	}

	$.scroll_to_notices = function ( scrollElement ) {
		if ( scrollElement.length ) {
			$( 'html, body' ).animate(
				{
					scrollTop: scrollElement.offset().top - 100,
				},
				1000
			);
		}
	};

	var elements	= stripe.elements(),
		stripe_card,
		stripe_exp,
		stripe_cvc;

	var ohmylms_stripe_form = {
		$checkout_form: $( 'form.checkout' ),
		selectedPaymentMethod:false,
		/**
		 * Mounts the Stripe elements (card, expiry, CVC) to their respective DOM elements.
		 * If the inline credit card form is enabled, only the card element is mounted.
		 */
		mountElements: function() {
			if ( ! $( '#stripe-card-element' ).length ) {
				return;
			}

			stripe_card.mount( '#stripe-card-element' );
			stripe_exp.mount( '#stripe-exp-element' );
			stripe_cvc.mount( '#stripe-cvc-element' );
		},

		/**
		 * Creates and configures Stripe elements (card, expiry, CVC) with styles and event listeners.
		 */
		createElements: function() {
			var elementStyles = {
				base: {
					color: '#32325d', // Text color
					fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
					fontSmoothing: 'antialiased',
					fontSize: '16px',
					'::placeholder': {
						color: '#7A8B9A' // Placeholder color
					}
				},
				invalid: {
					color: '#fa755a',
					iconColor: '#fa755a'
				}
			};

			var elementClasses = {
				focus: 'focused',
				empty: 'empty',
				invalid: 'invalid',
			};

			stripe_card = elements.create( 'cardNumber', { placeholder: 'Card Number*', style: elementStyles, classes: elementClasses } );
			stripe_exp  = elements.create( 'cardExpiry', { placeholder: 'Expiry date (MM/YY)*', style: elementStyles, classes: elementClasses } );
			stripe_cvc  = elements.create( 'cardCvc', { placeholder: 'CVC*', style: elementStyles, classes: elementClasses } );

			stripe_card.addEventListener( 'change', function( event ) {
				ohmylms_stripe_form.onCCFormChange();
				ohmylms_stripe_form.updateCardBrand( event.brand );
				if ( event.error ) {
					// $( document.body ).trigger( 'stripeError', event );
				}
			} );

			stripe_exp.addEventListener( 'change', function( event ) {
				ohmylms_stripe_form.onCCFormChange();
				if ( event.error ) {
					// $( document.body ).trigger( 'stripeError', event );
				}
			} );

			stripe_cvc.addEventListener( 'change', function( event ) {
				ohmylms_stripe_form.onCCFormChange();
				if ( event.error ) {
					// $( document.body ).trigger( 'stripeError', event );
				}
			} );

			ohmylms_stripe_form.mountElements();
		},

		onCCFormChange: function() {
			ohmylms_stripe_form.reset();
		},

		reset: function() {
			$( '.ohmylms-stripe-error, .stripe-source' ).remove();
		},

		updateCardBrand: function( brand ) {
			var brandClass = {
				'visa': 'stripe-visa-brand',
				'mastercard': 'stripe-mastercard-brand',
				'amex': 'stripe-amex-brand',
				'discover': 'stripe-discover-brand',
				'diners': 'stripe-diners-brand',
				'jcb': 'stripe-jcb-brand',
				'unknown': 'stripe-credit-card-brand'
			};

			var imageElement = $( '.stripe-card-brand' ),
				imageClass = 'stripe-credit-card-brand';

			if ( brand in brandClass ) {
				imageClass = brandClass[ brand ];
			}

			// Remove existing card brand class.
			$.each( brandClass, function( index, el ) {
				imageElement.removeClass( el );
			} );

			imageElement.addClass( imageClass );
		},
		payment_method_selected: function ( e ) {

			if ( $( '.payment_methods input.input-radio' ).length > 1 ) {
				var target_payment_box = $(this).parents('.ohmylms-single-payment').find( 'div.payment_box.' + $( this ).attr( 'ID' ) ),
					is_checked         = $( this ).is( ':checked' );

				if ( is_checked && ! target_payment_box.is( ':visible' ) ) {
					$(this).parents('.ohmylms-single-payment').find( 'div.payment_box' ).filter( ':visible' ).slideUp();

					if ( is_checked ) {
						$(this).parents('.ohmylms-single-payment').siblings().find('div.payment_box').slideUp();
						target_payment_box.slideDown();
					}
				}
			} else {
				$(this).parents('.ohmylms-single-payment').siblings().find('div.payment_box').slideUp();
				$(this).parents('.ohmylms-single-payment').find( 'div.payment_box' ).slideDown();
			}

			if ( $( this ).data( 'order_button_text' ) ) {
				$( '#place_order' ).text( $( this ).data( 'order_button_text' ) );
			} else {
				$( '#place_order' ).text( $( '#place_order' ).data( 'value' ) );
			}

			var selectedPaymentMethod = $( '.ohmylms-checkout-form input[name="payment_method"]:checked' ).attr( 'id' );

			if ( selectedPaymentMethod !== ohmylms_stripe_form.selectedPaymentMethod ) {
				$( document.body ).trigger( 'payment_method_selected' );
			}
			ohmylms_stripe_form.selectedPaymentMethod = selectedPaymentMethod;
		},

		submit: async function(event) {
			event.preventDefault();

			// Step 1: Create a Payment Method
			const {paymentMethod, error} = await stripe.createPaymentMethod({
				type: 'card',
				card: stripe_card,
				billing_details: {
					name: document.querySelector( '#first_name' )
						? (
							document.querySelector( '#first_name' )
								?.value +
							' ' +
							document.querySelector( '#last_name' )
								?.value
						).trim()
						: undefined,
					email: document.querySelector( '#email' )?.value,
				},
			});
			if (error) {
				var selectedPaymentMethod = $( '.ohmylms-checkout-form input[name="payment_method"]:checked' ).attr( 'id' );
				if ( selectedPaymentMethod !== 'payment_method_stripe' ) {
					return;
				}

				$('.ohmylms-place-order-button .ohmylms-loader').hide();
				$('.ohmylms-place-order-button').prop('disabled', false);
				$('.ohmylms-notices-wrapper').empty();
				var errorHtml = `
					<div class="ohmylms-notices-wrapper ohmylms-error-notices">
						<div class="ohmylms-NoticeGroup">
							<ul class="ohmylms-error" role="alert">
								<li data-id="email">
									${error.message}
								</li>
							</ul>
						</div>
					</div>
				`;

				ohmylms_stripe_form.submit_error(errorHtml);
				return;
			}
			ohmylms_stripe_form.formSubmit(paymentMethod);
		},
		scroll_to_notices: function() {
			var scrollElement           = $( '.ohmylms-NoticeGroup-updateOrderReview, .ohmylms-notices-wrapper' );

			if ( ! scrollElement.length ) {
				scrollElement = $( 'form.checkout' );
			}
			$.scroll_to_notices( scrollElement );
		},

		submit_error: function( error_message ) {
			// Remove all elements within the class 'ohmylms-notices-wrapper'
			$( '.ohmylms-notices-wrapper' ).empty();

			// Remove other specific notice elements
			$( '.ohmylms-NoticeGroup-checkout, .ohmylms-error, .ohmylms-message, .is-error, .is-success' ).remove();

			// Add the error message within 'ohmylms-notices-wrapper' class
			$( '.ohmylms-notices-wrapper' ).prepend( '<div class="ohmylms-checkout-notice">' + error_message + '</div>' );

			if( $(".ohmylms-NoticeGroup .ohmylms-error li").length > 0 ){
				let getErrorLength = $(".ohmylms-NoticeGroup .ohmylms-error li").length;
				if(getErrorLength == 1){
					$(".ohmylms-checkout-notice").addClass('single-error');

				}else {
					$(".ohmylms-checkout-notice").removeClass('single-error');
				}

				if(2 < getErrorLength){
					$(".ohmylms-checkout-notice").addClass('more-then-two-error');

				}else {
					$(".ohmylms-checkout-notice").removeClass('more-then-two-error');
				}
			}

			// Scroll to the notices area
			ohmylms_stripe_form.scroll_to_notices();
		},

		formSubmit: function(paymentMethod) {
			var that = this;
			// if ( this.$checkout_form.is( '.processing' ) ) {
			// 	return false;
			// }

			if (
				this.$checkout_form.isBancontactChosen()
			) {
				return true;
			}


			this.$checkout_form.append(
				$( '<input type="hidden" />' )
					.addClass( 'stripe-source' )
					.attr( 'name', 'stripe_source' )
					.val( paymentMethod.id )
			);

			this.$checkout_form.append(
				$( '<input type="hidden" />' )
					.addClass( 'payment-method' )
					.attr( 'name', 'payment_method' )
					.val( 'stripe' )
			);

			this.$checkout_form.find('.ohmylms-place-order-button .ohmylms-loader').show();
			this.$checkout_form.addClass( 'processing' );
			this.$checkout_form.find('.ohmylms-place-order-button').prop('disabled', true);

			$.ajax({
				type: 'POST',
				url: ohmylms_checkout_params.ajax_url,
				data: this.$checkout_form.serialize() + '&action=ohmylms_checkout&stripe_source='+paymentMethod.id+'&payment_method=stripe',
				dataType: 'json',
				success: function (response) {
					that.$checkout_form.find('.ohmylms-place-order-button .ohmylms-loader').hide();
					that.$checkout_form.removeClass('processing');
					that.$checkout_form.find('.ohmylms-place-order-button').prop('disabled', false);
					if(response.success) {
						window.location.href = response.redirect;
					}

					if ( response.messages ) {
						$('.ohmylms-place-order-button .ohmylms-loader').hide();
						$('.ohmylms-place-order-button').prop('disabled', false);
						$('.ohmylms-notices-wrapper').empty();
						ohmylms_stripe_form.submit_error(response.messages);
					}
				}
			});
		},

		init: function() {

			$.ajax({
				type: 'POST',
				url: ohmylms_checkout_params.ajax_url,
				data: {
					security: ohmylms_checkout_params.stripe_nonce,
					action: 'create_stripe_payment_intent',
				},
				dataType: 'json',
				success: function (response) {
					const clientSecret = response.clientSecret;
					elements = stripe.elements({ clientSecret: clientSecret });
					const paymentElement = elements.create("payment");
					paymentElement.mount("#payment-element");
				}
			});


			// if ( $( 'form.ohmylms-checkout-form' ).length ) {
			// 	this.form = $( 'form#ohmylms-checkout-form' );
			// 	this.$checkout_form.on( 'click', 'input[name="payment_method"]', this.payment_method_selected );
			// 	ohmylms_stripe_form.createElements();
			// 	if ( 'payment_method_stripe' !== ohmylms_stripe_form.selectedPaymentMethod ) {
			// 		$( document.body ).on( 'submit', '#ohmylms-checkout-form', this.submit );
			// 	}
			// }
		},

		/**
		 * Check if Stripe Bancontact is being used.
		 *
		 * @return {boolean}
		 */
		isBancontactChosen: function() {
			return $( '#payment_method_bancontact' ).is( ':checked' );
		},
	}

	ohmylms_stripe_form.init();
});
