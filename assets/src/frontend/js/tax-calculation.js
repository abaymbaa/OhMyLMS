/**
 * Tax Calculation JavaScript for OhMyLMS
 * Handles tax calculation and VAT number field display on checkout page
 */

(function($) {
    'use strict';

    $(document).ready(function() {
        // EU country codes
        var euCountries = [
            'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 
            'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 
            'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
        ];
        
        // Function to show/hide VAT number field based on country selection
        function toggleVatNumberField() {
            var selectedCountry = $('select[name="country"], input[name="country"]').val();
            var vatNumberField = $('.vat-number-field');
            
            if (euCountries.includes(selectedCountry)) {
                vatNumberField.show();
                $('#vat_number_field').addClass('validate-required');
            } else {
                vatNumberField.hide();
                $('#vat_number_field').val(''); // Clear the field when hidden
                $('#vat_number_field').removeClass('validate-required');
            }
        }
        
        // Initialize VAT field visibility on page load
        $('.vat-number-field').hide(); // Hide initially
        toggleVatNumberField(); // Then show if needed
        
        // Simple function to trigger tax calculation AJAX request
        function triggerTaxCalculation() {
            const country = $('select[name="country"], input[name="country"]').val();
            const state = $('select[name="state"], input[name="state"]').val();
            const vat_number = $('input[name="vat_number"]').val();
    
            $.ajax({
                url: omlms_tax_calculation_params.ajax_url,
                type: 'POST',
                data: {
                    action: 'creator_lms_calculate_tax',
                    nonce: omlms_tax_calculation_params.nonce,
                    country: country,
                    state: state || '',
                    vat_number: vat_number || ''
                },
                success: function(response) {
                    if (response && response.success && response.data.fragments) {
                        $.each(response.data.fragments, function (key, value) {
                            var element = $(key);
                            if ( element.length > 0) {
                                element.html(value);
                            }
                        });
                    }
                },
                error: function(xhr, status, error) {
                }
            });
        }

        function handleCountryChange(val) {
            const stateField = document.querySelector('#state');
            const stateFieldParent = document.querySelector('#state_field');
            let value = val;

            if(!value) {
                value = $('#country').val();
            }

            if(value) {
                $.ajax({
                    url: omlms_tax_calculation_params.ajax_url,
                    type: 'POST',
                    data: {
                        action: 'creator_lms_get_states_by_country',
                        nonce: omlms_tax_calculation_params.nonce,
                        country_code: value
                    },
                    success: function(response) {
                        var $stateField = $(stateField); // Wrap in jQuery
                        var $stateFieldParent = $(stateFieldParent); // Wrap in jQuery
                        var $requiredField = $stateFieldParent.find('.required');

                        if (response.success && Array.isArray(response.data) && response.data.length > 0) {
                            // Create state <option>s
                            const options = [];

                            response.data.forEach(item => {
                                options.push('<option value="' + item.code + '">' + item.title + '</option>');
                            });

                            // If current field is NOT a <select>, replace it
                            if (!$stateField.is('select')) {
                                const select = $('<select>', {
                                    id: 'state',
                                    name: 'state',
                                    class: 'creator-lms-input-select creator-lms-input-text',
                                    html: options.join('')
                                });

                                $stateField.replaceWith(select);
                                $stateFieldParent.addClass('creator-lms-folded');
                                $requiredField.css('display', 'inline');
                            } else {
                                // Just update existing <select>
                                $stateField.html(options.join(''));
                            }


                        } else {
                            // If no states, replace with <input> if needed
                            if (!$stateField.is('input')) {
                                const input = $('<input>', {
                                    type: 'text',
                                    id: 'state',
                                    name: 'state',
                                    class: 'creator-lms-input-text',
                                });

                                $stateField.replaceWith(input);
                                $stateFieldParent.removeClass('creator-lms-folded validate-required');
                                $requiredField.css('display', 'none');
                            }
                        }

                    },
                    error: function(xhr, status, error) {
                        
                    }
                });
            }
        }

        // Event listeners for country and state changes
        $(document).on('change', 'select[name="country"], input[name="country"]', function() {
            toggleVatNumberField(); // Toggle VAT field visibility
            triggerTaxCalculation();
        });

        $(document).on('change', '#country', function() {
            let value = $(this).val();
            handleCountryChange(value);
        });

        $(document).on('change', 'select[name="state"], input[name="state"]', function() {
            triggerTaxCalculation();
        });

        $(document).on('change blur', 'input[name="vat_number"]', function() {
            triggerTaxCalculation();
        });
        
        // Trigger initial tax calculation on page load
        triggerTaxCalculation();
        handleCountryChange();
    });
    
})(jQuery);
