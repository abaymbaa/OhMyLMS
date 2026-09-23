/**
 * Razorpay Checkout Handler for OhMyLMS
 *
 * Handles Razorpay payment processing on the checkout page.
 */

(function($) {
    'use strict';

    // Check if Razorpay params are available
    if (typeof omlms_razorpay_params === 'undefined') {
        console.error('Razorpay frontend params not found.');
        return;
    }

    var omlms_razorpay = {
        
        /**
         * Initialize the Razorpay checkout handler
         */
        init: function() {
            this.bindEvents();
        },

        /**
         * Bind checkout form events
         */
        bindEvents: function() {
            var self = this;

            // Handle checkout form submission when Razorpay is selected
            $('form.creator-lms-checkout-form').on('submit', function(e) {
                if ($('input[name="payment_method"]:checked').val() === 'razorpay') {
                    e.preventDefault();
                    self.processCheckout($(this));
                    return false;
                }
            });

            // Handle payment method change
            $('input[name="payment_method"]').on('change', function() {
                if ($(this).val() === 'razorpay') {
                    self.updateButtonText();
                }
            });
        },

        /**
         * Update the checkout button text
         */
        updateButtonText: function() {
            var $button = $('#place_order');
            if ($button.length) {
                $button.text($button.data('razorpay-text') || $button.data('value') || 'Place payment');
            }
        },

        /**
         * Process checkout and create Razorpay order
         */
        processCheckout: function($form) {
            var self = this;

            // Block the form
            this.blockForm($form);

            // Get form data and add action
            var formData = $form.serialize();
            
            // Add the action parameter if not already present
            if (formData.indexOf('action=') === -1) {
                formData += '&action=creator_lms_checkout';
            }

            // Submit the form to create order
            $.ajax({
                type: 'POST',
                url: omlms_razorpay_params.ajax_url,
                data: formData,
                dataType: 'json',
                success: function(response) {
                    if (response.result === 'success' && response.payment_method === 'razorpay') {
                        // Check if this is a subscription or one-time payment
                        if (response.razorpay_subscription_id) {
                            // Subscription payment - open modal
                            self.initRazorpayCheckout(response);
                        } else if (response.razorpay_order_id) {
                            // One-time payment - open modal
                            self.initRazorpayCheckout(response);
                        } else {
                            self.showCheckoutError(response.message || omlms_razorpay_params.data_error_msg);
                            self.unblockForm($form);
                        }
                    } else if (response.redirect) {
                        // Handle redirect for other scenarios
                        window.location.href = response.redirect;
                    } else {
                        // Use standard CreatorLMS error display for checkout errors
                        self.showCheckoutError(response.message || omlms_razorpay_params.data_error_msg);
                        self.unblockForm($form);
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Checkout error:', error);
                    self.showCheckoutError(omlms_razorpay_params.data_error_msg);
                    self.unblockForm($form);
                }
            });
        },

        /**
         * Initialize Razorpay checkout modal
         */
        initRazorpayCheckout: function(orderData) {
            var self = this;

            if (typeof Razorpay === 'undefined') {
                console.error('Razorpay SDK not loaded');
                self.showError(omlms_razorpay_params.checkout_initiated_error);
                self.unblockForm($('form.creator-lms-checkout-form'));
                return;
            }

            var options = {
                key: orderData.key_id,
                currency: orderData.currency,
                name: orderData.name,
                description: orderData.description,
                prefill: {
                    name: orderData.prefill_name,
                    email: orderData.prefill_email,
                    contact: orderData.prefill_contact
                },
                theme: {
                    color: getComputedStyle(document.documentElement).getPropertyValue('--creator-lms-primary-color') || '#3395FF'
                },
                modal: {
                    ondismiss: function() {
                        // User closed the checkout modal
                        self.showError('Payment cancelled. Please try again.');
                        self.unblockForm($('form.creator-lms-checkout-form'));
                    }
                },
                handler: function(response) {
                    // Payment successful, verify signature
                    self.verifyPayment(response, orderData.order_id);
                }
            };

            // Add subscription_id for subscriptions or order_id for one-time payments
            if (orderData.razorpay_subscription_id) {
                options.subscription_id = orderData.razorpay_subscription_id;
            } else if (orderData.razorpay_order_id) {
                options.order_id = orderData.razorpay_order_id;
                options.amount = orderData.amount;
            } else {
                self.showError('Invalid payment data. Please try again.');
                self.unblockForm($('form.creator-lms-checkout-form'));
                return;
            }

            try {
                var rzp = new Razorpay(options);
                rzp.on('payment.failed', function(failureResponse) {
                    var errorMessage = failureResponse.error.description;
                    if (failureResponse.error.field) {
                        errorMessage += ' (Field: ' + failureResponse.error.field + ')';
                    }
                    self.showError(errorMessage);
                    self.unblockForm($('form.creator-lms-checkout-form'));
                    console.error('Razorpay Payment Failed:', failureResponse);
                });
                rzp.open();
            } catch (error) {
                console.error('Razorpay initialization error:', error);
                self.showError(omlms_razorpay_params.checkout_initiated_error);
                self.unblockForm($('form.creator-lms-checkout-form'));
            }
        },

        /**
         * Verify payment with server
         */
        verifyPayment: function(razorpayResponse, wpOrderId) {
            var self = this;

            var paymentData = {
                action: omlms_razorpay_params.verify_payment_action,
                nonce: omlms_razorpay_params.verify_payment_nonce,
                wp_order_id: wpOrderId,
                razorpay_payment_id: razorpayResponse.razorpay_payment_id,
                razorpay_signature: razorpayResponse.razorpay_signature
            };

            // Add either order_id or subscription_id depending on payment type
            if (razorpayResponse.razorpay_order_id) {
                paymentData.razorpay_order_id = razorpayResponse.razorpay_order_id;
                console.log('Verifying one-time payment');
            } else if (razorpayResponse.razorpay_subscription_id) {
                paymentData.razorpay_subscription_id = razorpayResponse.razorpay_subscription_id;
                console.log('Verifying subscription payment');
            }

            $.ajax({
                type: 'POST',
                url: omlms_razorpay_params.ajax_url,
                data: paymentData,
                dataType: 'json',
                success: function(response) {
                    if (response.success && response.data.redirect_url) {
                        // Payment verified, redirect to thank you page
                        window.location.href = response.data.redirect_url;
                    } else {
                        self.showError(response.data.message || 'Payment verification failed');
                        self.unblockForm($('form.creator-lms-checkout-form'));
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Verification error:', error);
                    self.showError('Payment verification failed. Please contact support.');
                    self.unblockForm($('form.creator-lms-checkout-form'));
                }
            });
        },

        /**
         * Show checkout validation error (like email already exists)
         * Uses standard CreatorLMS error display
         */
        showCheckoutError: function(message) {
            // Clear previous notices
            $('.omlms-notices-wrapper').empty();
            $('.omlms-NoticeGroup-checkout, .omlms-error, .omlms-message, .is-error, .is-success').remove();

            // Add error message to standard checkout notices area
            $('.omlms-notices-wrapper').prepend('<div class="creator-lms-checkout-notice">' + message + '</div>');

            // Scroll to the notices area
            var scrollElement = $('.omlms-NoticeGroup-updateOrderReview, .omlms-notices-wrapper');
            if (scrollElement.length) {
                $('html, body').animate({
                    scrollTop: (scrollElement.offset().top - 100)
                }, 1000);
            }
        },

        /**
         * Show Razorpay payment error (for payment-specific errors)
         */
        showError: function(message) {
            // Show in general notices area
            var $notices = $('.creator-lms-notices-wrapper');
            if ($notices.length) {
                var errorHtml = '<div class="creator-lms-error" role="alert">' + 
                    '<svg width="16" height="16" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">' +
                    '<path fill="currentColor" d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 11a1 1 0 110-2 1 1 0 010 2zm1-4a1 1 0 11-2 0V5a1 1 0 112 0v3z"/>' +
                    '</svg>' +
                    message +
                    '</div>';
                $notices.html(errorHtml);
                $('html, body').animate({ scrollTop: $notices.offset().top - 100 }, 500);
            }
        },

        /**
         * Block form during processing
         */
        blockForm: function($form) {
            if (typeof $.fn.block !== 'undefined') {
                $form.block({
                    message: null,
                    overlayCSS: {
                        background: '#fff',
                        opacity: 0.6
                    }
                });
            } else {
                $form.addClass('processing');
            }
        },

        /**
         * Unblock form after processing
         */
        unblockForm: function($form) {
            if (typeof $.fn.unblock !== 'undefined') {
                $form.unblock();
            } else {
                $form.removeClass('processing');
            }
        }
    };

    // Initialize on document ready
    $(document).ready(function() {
        omlms_razorpay.init();
    });

})(jQuery);
