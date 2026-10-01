jQuery(document).ready(function($) {
    /**
     * Mollie Checkout JavaScript
     *
     * Handles Mollie Components integration, payment method selection logic,
     * and dynamic required field management on the checkout page.
     *
     * @since 1.0.0
     */

    // Ensure Mollie parameters are available from wp_localize_script
    if (!window.ohmylms_mollie_params || !window.ohmylms_mollie_params.profile_id) {
        console.error('Mollie Profile ID or parameters not found. Mollie Components cannot be initialized.');
        // Optionally, display a user-facing error message on the checkout page
        // For example: $('#mollie-payment-methods-container').prepend('<p style="color:red;">Mollie payment processing is currently unavailable. Please contact support.</p>');
        return;
    }

    // Initialize Mollie with Profile ID and other settings
    const mollie = Mollie(ohmylms_mollie_params.profile_id, {
        locale: ohmylms_mollie_params.locale,
        testmode: true
    });

    // Component instances
    let cardComponent;
    let activeComponentName = null; // Tracks the currently active/mounted component ('card', etc.)

    const $checkoutForm = $('form.ohmylms-checkout-form');
    const $paymentMethodsContainer = $('#mollie-payment-methods-container'); // Container for all Mollie payment method options

    // Fields that should be required when Mollie is selected
    const mollieRequiredFields = ['city', 'state', 'postcode', 'country'];
    
    /**
     * Make specific fields required for Mollie payment
     */
    function makeMollieFieldsRequired() {
        mollieRequiredFields.forEach(function(fieldName) {
            const $field = $('#' + fieldName + '_field');
            const $input = $field.find('input, select');
            const $label = $field.find('label');
            const $requiredMark = $label.find('.required');
            
            if ($input.length) {
                // Add required attribute
                $input.attr('required', 'required').prop('required', true);
                
                // Add required class to wrapper
                $field.addClass('validate-required');
                
                // Add required asterisk if not present
                if ($requiredMark.length === 0 && $label.length) {
                    $label.append(' <abbr class="required" title="required">*</abbr>');
                }
            }
        });
    }
    
    /**
     * Make specific fields optional (remove required)
     */
    function makeMollieFieldsOptional() {
        mollieRequiredFields.forEach(function(fieldName) {
            const $field = $('#' + fieldName + '_field');
            const $input = $field.find('input, select');
            const $label = $field.find('label');
            
            if ($input.length) {
                // Remove required attribute
                $input.removeAttr('required').prop('required', false);
                
                // Remove required class from wrapper
                $field.removeClass('validate-required');
                
                // Remove required asterisk
                $label.find('.required').remove();
            }
        });
    }

    /**
     * Check if Mollie is the selected payment gateway
     */
    function isMollieSelected() {
        const $selectedGateway = $('input[name="payment_method"]:checked');
        return $selectedGateway.length && $selectedGateway.val() === 'mollie';
    }

    // Watch for payment gateway changes
    $(document.body).on('change', 'input[name="payment_method"]', function() {
        if (isMollieSelected()) {
            makeMollieFieldsRequired();
        } else {
            makeMollieFieldsOptional();
        }
    });

    // Initialize on page load if Mollie is already selected
    if (isMollieSelected()) {
        makeMollieFieldsRequired();
    }

    /**
     * Mounts the Mollie Card Component.
     * NOTE: Card payment is now handled via redirect to Mollie's portal.
     * No need to mount card components on checkout page.
     * This function is kept for backwards compatibility but does nothing.
     */
    function mountCardComponent() {
        // Card payment handled on Mollie's portal after redirect
        // No component mounting needed
        activeComponentName = 'card';
    }

    /**
     * Unmounts the Mollie Card Component if it's active.
     * NOTE: Card payment is now handled via redirect to Mollie's portal.
     * This function is kept for backwards compatibility but does nothing.
     */
    function unmountCardComponent() {
        // Card payment handled on Mollie's portal after redirect
        // No component unmounting needed
        activeComponentName = null;
    }

    /**
     * Mounts the Mollie iDEAL Component.
     * Creates the component if it hasn't been created yet.
     * Handles display of validation errors from the component.
     */
    function mountIdealComponent() {
		const $issuerDropdown = $('div.mollie-issuers[data-method-id="ideal"]', $paymentMethodsContainer);
		console.log($issuerDropdown)
        if ($issuerDropdown.length) {
            $issuerDropdown.show();
        }
        activeComponentName = 'idealIssuer';
    }

    /**
     * Unmounts the Mollie iDEAL Component if it's active.
     * Clears any validation errors.
     */
    function unmountIdealComponent() {
        const $issuerDropdown = $('div.mollie-issuers[data-method-id="ideal"]', $paymentMethodsContainer);
        if ($issuerDropdown.length) {
            $issuerDropdown.hide();
        }
        activeComponentName = null;
    }

    // --- Payment Method Selection Logic ---
    $('input[name="mollie_payment_method"]', $paymentMethodsContainer).on('change', function() {
        const selectedMethod = $(this).val();

        // Hide all issuer dropdowns and component containers first
        $('.mollie-issuers', $paymentMethodsContainer).hide();
        $('.mollie-component-container', $paymentMethodsContainer).hide(); // Hide all component containers

        // Unmount card component if it was active and a different method is now selected
        if (selectedMethod !== 'creditcard' && activeComponentName === 'card') {
            unmountCardComponent();
        }
        // Unmount iDEAL component if it was active and a different method is now selected
        if (selectedMethod !== 'ideal' && activeComponentName === 'idealIssuer') {
            unmountIdealComponent();
        }

        // Handle visibility based on selected method
        if (selectedMethod === 'creditcard') {
            // Card payment is handled on Mollie's portal after redirect
            // No component mounting needed
            mountCardComponent();
        } else if (selectedMethod === 'ideal') {
            if (!ohmylms_mollie_params.profile_id) {
                console.error('Mollie Profile ID not available. Cannot process iDEAL payment.');
                $('#mollie-ideal-component-errors').html('<p style="color:red;">' + ohmylms_mollie_params.error_messages.generic_error + '</p>');
                return;
            }
            mountIdealComponent();
        } else {
            const $issuerDropdown = $('div.mollie-issuers[data-method-id="' + selectedMethod + '"]', $paymentMethodsContainer);
            if ($issuerDropdown.length) {
                $issuerDropdown.show();
            }
        }
    });

    // Trigger change on page load to set the initial state of issuer dropdowns/components
    // Ensures the correct fields are shown if a method is pre-selected.
    if ($('input[name="mollie_payment_method"]:checked', $paymentMethodsContainer).length) {
         $('input[name="mollie_payment_method"]:checked', $paymentMethodsContainer).trigger('change');
    } else {
        // If nothing is checked, potentially check the first available one and trigger change.
        // $('input[name="mollie_payment_method"]:first', $paymentMethodsContainer).prop('checked', true).trigger('change');
    }


    // --- Form Submission Logic ---
    if ($checkoutForm.length) {
        $checkoutForm.on('submit', async function(event) {
            // Check if Mollie is the selected payment gateway
            if (!isMollieSelected()) {
                // Not Mollie, let the form submit normally
                return true;
            }

            const selectedMethod = $('input[name="mollie_payment_method"]:checked', $paymentMethodsContainer).val();

            if (selectedMethod === 'creditcard' && cardComponent && activeComponentName === 'card') {
                event.preventDefault(); // Stop normal form submission to create token first
                // Visual feedback for processing
                $checkoutForm.find('button[type="submit"]').prop('disabled', true).addClass('processing');
                $('#mollie-card-component-errors').empty(); // Clear previous errors

                try {
                    const { token, error } = await mollie.createToken({
                        cardHolder: cardComponent.cardHolder,
                        cardNumber: cardComponent.cardNumber,
                        expiryDate: cardComponent.expiryDate,
                        verificationCode: cardComponent.verificationCode
                    });
                    
                    if (error) {
                        console.error('Mollie token creation error:', error);
                        $('#mollie-card-component-errors').text(ohmylms_mollie_params.error_messages.mollie_error + ' ' + error.message);
                        $checkoutForm.find('button[type="submit"]').prop('disabled', false).removeClass('processing');
                        return;
                    }

                    if (token) {
                        $checkoutForm.find('input[name="mollie_payment_token"]').remove();
                        $checkoutForm.append('<input type="hidden" name="mollie_payment_token" value="' + token + '" />');
                    }
                } catch (e) {
                    console.error('Mollie general error during tokenization:', e);
                    $('#mollie-card-component-errors').text(e.message || ohmylms_mollie_params.error_messages.generic_error);
                    $checkoutForm.find('button[type="submit"]').prop('disabled', false).removeClass('processing');
                    return;
                }
            }
        });
    } else {
        if (ohmylms_mollie_params && ohmylms_mollie_params.checkout_form_selector) {
            console.warn('Mollie Checkout: Checkout form with selector "' + ohmylms_mollie_params.checkout_form_selector + '" not found on this page.');
        } else {
            console.warn('Mollie Checkout: Checkout form selector not provided or found.');
        }
    }
});
