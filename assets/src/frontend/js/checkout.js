(function ($) {

	$(function () {
		const { __ } = wp.i18n;

		$.scroll_to_notices = function (scrollElement) {
			if (scrollElement.length) {
				$('html, body').animate(
					{
						scrollTop: scrollElement.offset().top - 100,
					},
					1000
				);
			}
		};
	
		var Checkout = {
			$checkout_form: $('form.checkout'),
			selectedPaymentMethod: false,
			isCheckoutLogin: false,
			init: function () {
				$(document.body).on('omlms_update_checkout', this.update_checkout);
				$(document.body)
					.on('click', 'a.showlogin', this.show_login_form)
					.on('submit', 'form.checkout_coupon', this.apply_coupon)
					.on('click', '.creator-lms-remove-coupon', this.remove_coupon)
					.on('submit', '#creator-lms-checkout-form', this.submit)
					.on('submit', '.creator-lms-form-login', this.login)
					.on('submit', '.creator-lms-form-signup', this.signup)

				// Payment methods
				this.$checkout_form.on('click', 'input[name="payment_method"]', this.payment_method_selected);

				// Remember which billing/contact fields the server rendered as required so
				// per-gateway toggling never relaxes a field that is always mandatory.
				$('.creator-lms-billing-fields .creator-lms-form-row, .creator-lms-billing-contact .creator-lms-form-row').each(function () {
					var $input = $(this).find('input, select');
					if ($input.length && ($input.prop('required') || $(this).hasClass('validate-required'))) {
						$input.data('omlmsServerRequired', true);
					}
				});
				// Apply requirements for the gateway selected on load.
				this.applyGatewayRequiredFields();

				$('input#createaccount').on('change', this.toggle_create_account).trigger('change');
				// Call PayPal capture if available
				if (window.PayPalHandler && typeof window.PayPalHandler.capture_paypal_payment === 'function') {
					window.PayPalHandler.capture_paypal_payment();
				}
			},
			update_checkout: function () {
				// TODO	: Implement this function
			},
			apply_coupon: function (e) {
				e.preventDefault();
				var $form = $(this);

				if ($form.is('.processing')) {
					return false;
				}

				if (!$form.find('input[name="coupon_code"]').val()) {
					return;
				}

				var data = {
					security: omlms_checkout_params.apply_coupon_nonce,
					coupon_code: $form.find('input[name="coupon_code"]').val(),
					action: 'creator_lms_apply_coupon'
				};
				$.ajax({
					type: 'POST',
					url: omlms_checkout_params.ajax_url,
					data: data,
					dataType: 'json',
					success: function (response) {
						$('.omlms-notices-wrapper').empty();
						if (response && response.success && response.data.fragments) {
							$.each(response.data.fragments, function (key, value) {
								if (!Checkout.fragments || Checkout.fragments[key] !== value) {
									$(key).html(value);
								}
							});
							Checkout.fragments = data.fragments;
						} else {
							let notice = response.data.notice || response.data.message;
							$('.omlms-notices-wrapper').html(notice);
						}
					},
					error: function (xhr, status, error) {
						console.error('AJAX Error:', status, error);
						alert('Something went wrong. Please try again.');
					},
				});

				return false;
			},
			remove_coupon: function (e) {
				e.preventDefault();
				var coupon = $(this).data('coupon');
				var data = {
					security: omlms_checkout_params.remove_coupon_nonce,
					coupon_code: coupon,
					action: 'creator_lms_remove_coupon'
				};

				$.ajax({
					type: 'POST',
					url: omlms_checkout_params.ajax_url,
					data: data,
					dataType: 'json',
					success: function (response) {
						if (response && response.data.fragments) {
							$.each(response.data.fragments, function (key, value) {
								if (!Checkout.fragments || Checkout.fragments[key] !== value) {
									$(key).html(value);
								}
							});
							Checkout.fragments = data.fragments;
						}
					},
					error: function (jqXHR) {

					},
				});

			},
			payment_method_selected: function (e) {
				e.stopPropagation();

				$(this).parents('.creator-lms-single-payment').addClass('selected').siblings().removeClass('selected');

				if ($('.payment_methods input.input-radio').length > 1) {
					var target_payment_box = $(this).parents('.creator-lms-single-payment').find('div.payment_box.' + $(this).attr('ID')),
						is_checked = $(this).is(':checked');

					if (is_checked && !target_payment_box.is(':visible')) {
						$(this).parents('.creator-lms-single-payment').find('div.payment_box').filter(':visible').slideUp();

						if (is_checked) {
							$(this).parents('.creator-lms-single-payment').siblings().find('div.payment_box').slideUp();
							target_payment_box.slideDown();
						}
					}
				} else {
					$(this).parents('.creator-lms-single-payment').siblings().find('div.payment_box').slideUp();
					$(this).parents('.creator-lms-single-payment').find('div.payment_box').slideDown();
				}

				if ($(this).data('order_button_text')) {
					$('#place_order').text($(this).data('order_button_text'));
				} else {
					$('#place_order').text($('#place_order').data('value'));
				}

				var selectedPaymentMethod = $('.creator-lms-checkout-form input[name="payment_method"]:checked').attr('id');
				
				if (selectedPaymentMethod !== Checkout.selectedPaymentMethod) {
					$(document.body).trigger('payment_method_selected');
				}
				Checkout.selectedPaymentMethod = selectedPaymentMethod;
				Checkout.applyGatewayRequiredFields();
			},

			/**
			 * Toggle the "required" state of checkout fields to match what the
			 * currently selected payment gateway declares it needs. The map is
			 * localised as omlms_checkout_params.gateway_required_fields
			 * ({ gatewayId: [fieldKey, ...] }). Server-side validation is
			 * authoritative; this is UX only.
			 */
			applyGatewayRequiredFields: function () {
				var params = window.omlms_checkout_params || {};
				var map = params.gateway_required_fields || {};

				var selectedId = $('.creator-lms-checkout-form input[name="payment_method"]:checked').attr('id') || '';
				var gatewayId = selectedId.replace(/^payment_method_/, '');
				var requiredForGateway = map[gatewayId] || [];

				// Union of every field any gateway could require, so deselecting a
				// gateway cleanly relaxes fields it had escalated.
				var managed = [];
				Object.keys(map).forEach(function (gid) {
					(map[gid] || []).forEach(function (field) {
						if (managed.indexOf(field) === -1) {
							managed.push(field);
						}
					});
				});

				managed.forEach(function (fieldName) {
					Checkout.setFieldRequired(fieldName, requiredForGateway.indexOf(fieldName) !== -1);
				});
			},

			setFieldRequired: function (fieldName, required) {
				var $field = $('#' + fieldName + '_field');
				if (!$field.length) {
					return;
				}
				var $input = $field.find('input, select');
				var $label = $field.find('label');
				if (!$input.length) {
					return;
				}

				if (required) {
					$input.attr('required', 'required').prop('required', true);
					$field.addClass('validate-required');
					$label.find('.optional').hide();
					if ($label.find('.required').length === 0 && $label.length) {
						$label.append(' <abbr class="required" title="required">*</abbr>');
					}
					return;
				}

				// Never relax a field the server rendered as always-required.
				if ($input.data('omlmsServerRequired')) {
					return;
				}
				$input.removeAttr('required').prop('required', false);
				$field.removeClass('validate-required');
				$label.find('.optional').show();
				$label.find('.required').remove();
			},
			show_login_form: function () {
				$(this).closest(".creator-lms").find(".omlms-notices-wrapper").empty();
				$('.creator-lms-form-login').slideToggle();
				Checkout.isCheckoutLogin = !Checkout.isCheckoutLogin;
				return false;
			},

			submit: function submit(e) {
				e.preventDefault();
				$('.omlms-notices-wrapper').empty();
				$(this).find('.creator-lms-place-order-button .creator-lms-loader').show();
				$(this).find('.creator-lms-place-order-button').prop('disabled', true);
				var form = $(this),
					submitButton = form.find('button[type="submit"]');
				if (form.is('.processing')) {
					form.find('.creator-lms-place-order-button .creator-lms-loader').hide();
					form.find('.creator-lms-place-order-button').prop('disabled', true);
					return false;
				}
				let that = this;
				var selectedGateway = Checkout.selectedPaymentMethod;
				if (selectedGateway && 'payment_method_stripe' === selectedGateway) {
					return;
				}
				if (selectedGateway && 'payment_method_razorpay' === selectedGateway) {
					return;
				}
				$.ajax({
					type: 'POST',
					url: omlms_checkout_params.ajax_url,
					data: form.serialize(),
					dataType: 'json',
					success: function success(response) {
						$('.omlms-notices-wrapper').empty();
						form.removeClass('processing');
						form.find('.creator-lms-place-order-button .creator-lms-loader').hide();
						form.find('.creator-lms-place-order-button').prop('disabled', true);
						if (response.success || 'success' === response.result) {
							window.location.href = response.redirect;
							$(that).find('.creator-lms-place-order-button .creator-lms-loader').hide();
							$(that).find('.creator-lms-place-order-button').prop('disabled', false);
						} else {
							$(that).find('.creator-lms-place-order-button .creator-lms-loader').hide();
							$(that).find('.creator-lms-place-order-button').prop('disabled', false);
						}
						if (response.message) {
							Checkout.submit_error(form, response.message);
							$(that).find('.creator-lms-place-order-button .creator-lms-loader').hide();
							$(that).find('.creator-lms-place-order-button').removeAttr('disabled');
						}
					}
				});
			},
			toggle_create_account: function () {
				$('div.create-account').hide();
				if ($(this).is(':checked')) {
					// Ensure password is not pre-populated.
					$('#account_password').val('').trigger('change');
					$('div.create-account').slideDown();
				}
			},
			login: function (e) {
				e.preventDefault();
				var form = $(this);
				var formData = form.serialize() + '&isCheckoutLogin=' + encodeURIComponent(Checkout.isCheckoutLogin);
				$.ajax({
					type: 'POST',
					url: omlms_checkout_params.ajax_url,
					data: formData,
					dataType: 'json',
					success: function (response) {
						if (response.status === 'success') {
							form.hide();
							window.location.reload();
						} else if (response.status === 'error') {
							Checkout.submit_error(form, response.message);
						}
					},
					error: function (xhr, status, error) {
						console.error(xhr.responseText);
					}
				})
			},
			signup : function (e) {
				e.preventDefault();
				var form = $(this);
				var password = form.find('#signup-password').val(); // Get the password value

				// Check password length
				if (password?.length < 8) {
					let error_message = '<div class="omlms-error-notices"><div class="omlms-NoticeGroup"><ul class="omlms-error" role="alert"><li>' + __('Password must be at least 8 characters long.','ohmylms') + '</li></ul></div></div>';
					Checkout.submit_error(form, error_message);
					return; // Stop form submission
				}

				$.ajax({
					type: 'POST',
					url: omlms_checkout_params.ajax_url,
					data: form.serialize(),
					dataType: 'json',
					success: function (response) {
						if (response.status === 'success') {
							form.hide();
							window.location.reload();
						} else if (response.status === 'error') {
							Checkout.submit_error(form, response.message);
						}
					},
					error: function (xhr, status, error) {
						console.error(xhr.responseText);
					}
				})
			},
			submit_error: function (form, error_message) {
				// Remove all elements within the class 'omlms-notices-wrapper'
				$('.omlms-notices-wrapper').empty();
				// Remove other specific notice elements
				$('.omlms-NoticeGroup-checkout, .omlms-error, .omlms-message, .is-error, .is-success').remove();

				// Add the error message within 'omlms-notices-wrapper' class
				$('.omlms-notices-wrapper').prepend('<div class="creator-lms-checkout-notice">' + error_message + '</div>');

				if( $(".omlms-NoticeGroup .omlms-error li").length > 0 ){
					let getErrorLength = $(".omlms-NoticeGroup .omlms-error li").length;
					if(1 == getErrorLength){
						$(".creator-lms-checkout-notice").addClass('single-error');
					}else {
						$(".creator-lms-checkout-notice").removeClass('single-error');
					}

					if(2 < getErrorLength){
						$(".creator-lms-checkout-notice").addClass('more-then-two-error');

					}else {
						$(".creator-lms-checkout-notice").removeClass('more-then-two-error');
					}
				}

				// Scroll to the notices areaomlms-error
				Checkout.scroll_to_notices();
			},
			scroll_to_notices: function () {
				var scrollElement = $('.omlms-NoticeGroup-updateOrderReview, .omlms-notices-wrapper');

				if (!scrollElement.length) {
					scrollElement = $('form.checkout');
				}
				$.scroll_to_notices(scrollElement);
			}
		}

		Checkout.init();
	})

	//=== capture mode for any payment redirection ===//
	jQuery(document).ready(function ($) {
		let urlParams = new URLSearchParams(window.location.search);
		let PayerID = urlParams.get('PayerID');
		let token = urlParams.get('token');
		let subscription_id = urlParams.get('subscription_id');
		let ba_token = urlParams.get('ba_token');

		let paypal_order_id = localStorage.getItem('omlms_paypal_order_id');
		if (paypal_order_id && PayerID && token) {
			request_paypal_capture(paypal_order_id);
		}

		if (subscription_id && ba_token && token) {
			request_paypal_subscription_capture(subscription_id);
		}

		$('.crlm_purchase').on('click', function (e) {
			e.preventDefault();
			let plan = $(this).data('plan');
			let membership_id = $(this).data('membership');
			$.ajax({
				type: 'POST',
				url: omlms_checkout_params.ajax_url,
				data: {
					action: 'creator_lms_purchase_membership',
					nonce: omlms_checkout_params.nonce,
					membership_id: membership_id,
					plan: plan,
				},
				success: function (response) {
					if (response.status === 'success') {
						window.location = response.redirect_url;
					}
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			});
		});

		// ----checkout page form label folding------
		$(document).on("click focus", ".creator-lms-input-text", function () {
			$(this).parents('.creator-lms-form-row').addClass('creator-lms-folded');
		});

		$(document).ready(function () {
			$(".creator-lms-input-text").each(function () {
				var $row = $(this).parents('.creator-lms-form-row');
				// Check if the input has a value
				if ($(this).val().trim() !== "") {
					$row.addClass('creator-lms-folded');
				} else {
					$row.removeClass('creator-lms-folded');
				}
			});

			$(".creator-lms-input-text").each(function () {
				var $row = $(this).parents('.creator-lms-form-row');
				// Check if the input has a value
				if ($(this).val().trim() !== "") {
					$row.addClass('creator-lms-folded');
				} else {
					$row.removeClass('creator-lms-folded');
				}
			});
		});




		$(document).on("blur", ".creator-lms-input-text", function () {
			if ($(this).val() === '') {
				$(this).parents('.creator-lms-form-row').removeClass('creator-lms-folded');
			}
		});

		// ----mobile device order summary toggle on checkout page------
		$(document).on("click", ".order-review-toggle-head", function () {
			$(this).toggleClass('active');
			$(this).siblings('.creator-lms-order-review-table-wrapper').slideToggle();
		});


		// ----coupon form active when input has text------
		$(document).on("keyup", ".creator-lms-checkout-coupon .apply-coupon", function () {
			var inputValue = $(this).val().trim();

			if (inputValue.length > 0) {
				$(this).parents('.creator-lms-checkout-coupon').addClass('active');
			} else {
				$(this).parents('.creator-lms-checkout-coupon').removeClass('active');
			}
		});

		// ----thank you page order id copy------
		$('.thankyou-copy-order-id').on('click', function() {
			var $td = $(this).closest('td');
			var orderIdText = $td.find('.thankyou-order-id-text').text().trim();
			var $alert = $td.find('.thankyou-copy-alert');

			// Use modern Clipboard API if available
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(orderIdText).then(function() {
					showCopyAlert($alert);
				}).catch(function(err) {
					console.error('Clipboard API failed:', err);
				});
			} else {
				// Fallback for older browsers
				var $tempInput = $('<textarea>');
				$('body').append($tempInput);
				$tempInput.val(orderIdText).css({ position: 'absolute', left: '-9999px' }).select();

				try {
					var successful = document.execCommand('copy');
					if (successful) {
						showCopyAlert($alert);
					} else {
						console.error('Fallback copy failed');
					}
				} catch (err) {
					console.error('Fallback copy error:', err);
				}

				$tempInput.remove();
			}
		});

		function showCopyAlert($alert) {
			$alert.fadeIn(200);
			setTimeout(function() {
				$alert.fadeOut(200);
			}, 1500);
		}
	});

	// Registry for payment gateway handlers
	window.PaymentGatewayHandlers = window.PaymentGatewayHandlers || {};
	window.registerPaymentGatewayHandler = function(gatewayId, handler) {
		window.PaymentGatewayHandlers[gatewayId] = handler;
	};

})(jQuery);



