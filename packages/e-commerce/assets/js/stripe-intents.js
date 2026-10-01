
jQuery(function ($) {
    'use strict';

    if (typeof Stripe === 'undefined' || typeof ohmylms_stripe_intents_params === 'undefined') {
        console.error('Stripe.js or ohmylms_stripe_intents_params not loaded.');
        $('#stripe-error-message').text('Error: Payment gateway script not loaded correctly. Please contact support.');
        return;
    }

    let stripe;
    let elements;
    let paymentForm = $('form.ohmylms-checkout-form');
    const isThankYouPage = (window.location.pathname.includes('ohmylms-order-received') || window.location.pathname.includes('cr-order-received'));
    $('#payment_method_stripe').on('change', async function () {
        stripe = Stripe(ohmylms_stripe_intents_params.publishableKey);
        if (!paymentForm.length) {
            paymentForm = $('#payment-element').closest('form');
        }
        if (!isThankYouPage && !paymentForm.length) {
            console.error('Could not find the payment form.');
            $('#stripe-error-element').text('Error: Payment form not found. Please contact support.');
            return;
        }
        if (paymentForm.length || isThankYouPage) {
            initialize();
        }
    });

    async function initialize() {
        if (!isThankYouPage) {
            elements = stripe.elements({
                mode: 'payment',
                amount: parseInt(ohmylms_stripe_intents_params.amount_in_cents || 100),
                currency: ohmylms_stripe_intents_params.currency || 'usd',
                loader: 'always',
                paymentMethodCreation: 'manual',
            });
            try {
                const paymentElement = elements.create('payment', {
                    layout: 'accordion',
                });
                paymentElement.mount('#payment-element');
                $('#stripe-payment-element-wrapper p').hide();
                setTimeout(() => {
                    const hasPaymentOptions = $('#payment-element iframe').length > 0;
                    if (!hasPaymentOptions) {
                      fallbackToCardElement();
                    }
                  }, 800);
            } catch (error) {
                console.error('Error creating payment element:', error);
                fallbackToCardElement();
            }
        }
    }

    function fallbackToCardElement() {
        $('#payment-element').hide();
        $('#card-element').show();
        
        cardElement = elements.create('card');
        cardElement.mount('#card-element');
    }

    paymentForm.on('submit', async function (event) {
        event.preventDefault();
        setLoading(true);

        if(elements) {
            const {error: submitError} = await elements.submit();
            if (submitError) {
                showMessage(submitError.message);
                setLoading(false);
                return;
            }
        }

        if(stripe) {
            const { paymentMethod, error: createPmError } = await stripe.createPaymentMethod({
                elements,
            });

            if (createPmError) {
                showMessage(createPmError.message);
                setLoading(false);
                return;
            }
            let selectedPaymentMethod = $('input[name="payment_method"]:checked').val();
            
            if ( !selectedPaymentMethod && paymentForm.find('input[name="payment_method"]').length > 0 ) {
            } else if ('stripe_intents' !== selectedPaymentMethod && paymentForm.find('input[name="payment_method"]').length > 0) {
                setLoading(false);
                if (paymentForm.find('input[name="payment_method"][value="stripe"]').length > 0 && !paymentForm.find('input[name="payment_method"][value="stripe"]').is(':checked')) {
                    setLoading(false);
                    return;
                }
            }

            try {
                const response = await $.ajax({
                    url: ohmylms_stripe_intents_params.ajax_url,
                    type: 'POST',
                    dataType: 'json',
                    data: paymentForm.serialize() + '&action=ohmylms_checkout&payment_method=stripe&stripe_source=' + paymentMethod.id
                });

                if (response.result === 'requires_action') {
                    const { error, paymentIntent } = await stripe.confirmPayment({
                        elements,
                        clientSecret: response.client_secret,
                        confirmParams: {
                            return_url: response.return_url,
                        },
                        redirect: 'if_required'
                    });
                    if (error) {
                        let errorMsg = error.message;
                        if (error.type === "card_error" || error.type === "validation_error") {
                            $('.ohmylms-place-order-button .ohmylms-loader').hide();
                            $('.ohmylms-place-order-button').prop('disabled', false);
                            $('.ohmylms-notices-wrapper').empty();
                            submit_error(error.message);
                        } else {
                            $('.ohmylms-place-order-button .ohmylms-loader').hide();
                            $('.ohmylms-place-order-button').prop('disabled', false);
                            $('.ohmylms-notices-wrapper').empty();
                            submit_error(error.message);
                        }
                        setLoading(false);
                        return;
                    }
                    if (paymentIntent) {
                        handleServerResponse(paymentIntent);
                    } else {
                        showMessage(ohmylms_stripe_intents_params.error_prefix + "Payment requires action but no redirect occurred and no payment intent was returned.");
                        setLoading(false);
                    }
                    return; // Exit after handling requires_action

                } else if (response.result === 'succeeded' || response.result === 'processing' || response.result === 'requires_capture') {
                    showMessage("Payment processed! Redirecting...");
                    if (ohmylms_stripe_intents_params.return_url) {
                        window.location.href = ohmylms_stripe_intents_params.return_url +
                                '&payment_intent=' + (response.payment_intent_id || '') +
                                '&payment_intent_client_secret=' + (response.client_secret || '');
                    }
                    return; // Exit after redirect

                } else if (response.success) {
                    window.location.href = response.redirect;
                }else {
                    $('.ohmylms-place-order-button .ohmylms-loader').hide();
                    $('.ohmylms-place-order-button').prop('disabled', false);
                    $('.ohmylms-notices-wrapper').empty();
                    submit_error(response.message);
                    return;
                }

                if ( response.message ) {
                    $('.ohmylms-place-order-button .ohmylms-loader').hide();
                    $('.ohmylms-place-order-button').prop('disabled', false);
                    $('.ohmylms-notices-wrapper').empty();
                    submit_error(response.message);
                }
            } catch (error) {
                $('.ohmylms-place-order-button .ohmylms-loader').hide();
                $('.ohmylms-place-order-button').prop('disabled', false);
                $('.ohmylms-notices-wrapper').empty();
                submit_error(error.message);
                console.log('Error during AJAX request:', error);
                return;
            }
        }

    });

    // Fetches the payment intent status after payment confirmation
    // This function is relevant if redirect: 'if_required' did not redirect,
    // or if you are handling the return from an off-site payment method on the same page.
    async function checkStatus() {
        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );
        const paymentIntentId = new URLSearchParams(window.location.search).get(
            "payment_intent"
        );
        const redirectStatus = new URLSearchParams(window.location.search).get(
            "redirect_status"
        );

        // If we have a redirect status, handle it immediately
        if (redirectStatus) {
            if (redirectStatus === 'failed') {
                if ((window.location.pathname.includes('ohmylms-order-received') || window.location.pathname.includes('cr-order-received'))) {
                    $('.ohmylms-thankyou-title').text(ohmylms_stripe_intents_params.error_prefix + "Payment was not completed. Please try again.");
                    $('.ohmylms-thankyou-text, .ohmylms-thankyou-content, .ohmylms-btn-area').remove();
                }
                return;
            }
        }

        if (!clientSecret || !paymentIntentId) {
            return;
        }

        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
        if (paymentIntent) {
            handleServerResponse(paymentIntent);
        } else {
            showMessage(ohmylms_stripe_intents_params.error_prefix + "Could not retrieve Payment Intent status.");
            setLoading(false);
        }
    }
    // Call checkStatus on page load in case it's a return from redirect.
    // This makes the form page also the return_url handler.
    checkStatus();


    async function handleServerResponse(paymentIntent) {
        setLoading(false); // Always hide loading indicator after response handling
        switch (paymentIntent.status) {
            case "succeeded":
                showMessage("Payment succeeded! Redirecting...");
                // The server-side process_payment function will handle order updates upon return_url hit
                if (ohmylms_stripe_intents_params.return_url) {
                    window.location.href = ohmylms_stripe_intents_params.return_url + '&payment_intent=' + paymentIntent.id + '&payment_intent_client_secret=' + paymentIntent.client_secret;
                }
                break;
            case "processing":
                showMessage("Payment processing. We'll update you when payment is received.");
                break;
            case "requires_payment_method":
                showMessage("Payment failed. Please try another payment method.");
                break;
            case "requires_action":
                showMessage("Further action is required to complete the payment.");
                // Check if there's a redirect URL in next_action
                if (paymentIntent.next_action && paymentIntent.next_action.type === 'redirect_to_url' && paymentIntent.next_action.redirect_to_url.url) {
                    window.location.href = paymentIntent.next_action.redirect_to_url.url; // Redirect to Stripe for authentication
                } else {
                    // Fallback message if no specific redirect action
                    showMessage(ohmylms_stripe_intents_params.error_prefix + "Payment requires further action but no redirect URL was provided.");
                }
                break;
            case "requires_capture":
                 showMessage("Payment authorized and requires capture. Redirecting...");
                 // The server-side process_payment function will handle order updates upon return_url hit
                 if (ohmylms_stripe_intents_params.return_url) {
                    window.location.href = ohmylms_stripe_intents_params.return_url + '&payment_intent=' + paymentIntent.id + '&payment_intent_client_secret=' + paymentIntent.client_secret;
                }
                break;
            default:
                showMessage(ohmylms_stripe_intents_params.error_prefix + "Unexpected payment status: " + paymentIntent.status);
                break;
        }
    }

    // Show a message to the user
    function showMessage(messageText) {
        const messageContainer = $('#payment-message');
        messageContainer.text(messageText);
        if (messageText) {
            messageContainer.show();
        } else {
            messageContainer.hide();
        }
    }

    // Show a loading spinner
    function setLoading(isLoading) {
        if (isLoading) {
            // Disable the form submission to prevent double clicks
            $('button[type="submit"]', paymentForm).prop('disabled', true);
            // You might also want to show a spinner element
            $('#stripe-spinner').show();
        } else {
            $('button[type="submit"]', paymentForm).prop('disabled', false);
            $('#stripe-spinner').hide();
        }
    }

    function submit_error( error_message ) {
        console.log( error_message );
        $( '.ohmylms-notices-wrapper' ).empty();
        $( '.ohmylms-NoticeGroup-checkout, .ohmylms-error, .ohmylms-message, .is-error, .is-success' ).remove();
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
        scroll_to_notices();
    }

    function scroll_to_notices() {
        var scrollElement   = $( '.ohmylms-NoticeGroup-updateOrderReview, .ohmylms-notices-wrapper' );

        if ( ! scrollElement.length ) {
            scrollElement = $( 'form.checkout' );
        }
        $.scroll_to_notices( scrollElement );
    }
});