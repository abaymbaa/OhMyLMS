/**
 * CreatorLMS Elementor Widgets JavaScript
 */

(function($) {
    'use strict';

    /**
     * Initialize Elementor widgets
     */
    var CreatorLMSElementorWidgets = {
        
        init: function() {
            // Initialize checkout widget
            this.initCheckoutWidget();
        },

        /**
         * Initialize checkout widget functionality
         */
        initCheckoutWidget: function() {
            // Add any specific JavaScript functionality for the checkout widget
            $(document).on('elementor/popup/show', function() {
                // Re-initialize checkout form if it's in a popup
                CreatorLMSElementorWidgets.refreshCheckoutWidget();
            });

            // Handle empty cart button clicks
            $(document).on('click', '.creator-lms-browse-courses-btn', function(e) {
                // Add any custom tracking or behavior here if needed

            });
        },

        /**
         * Refresh checkout widget
         */
        refreshCheckoutWidget: function() {
            $('.creator-lms-elementor-checkout-widget').each(function() {
                // Re-initialize any checkout-specific functionality
                var $widget = $(this);
                
                // Check if widget has empty cart message
                var $emptyMessage = $widget.find('.creator-lms-empty-cart-message');
                if ($emptyMessage.length > 0) {
                    // Apply any animations or effects to empty cart message
                    CreatorLMSElementorWidgets.animateEmptyCartMessage($emptyMessage);
                }
                
                // Trigger custom event for checkout refresh
                $widget.trigger('creatorlms:checkout:refresh');
            });
        },

        /**
         * Animate empty cart message
         */
        animateEmptyCartMessage: function($element) {
            // Add a subtle fade-in animation
            $element.css({
                'opacity': '0',
                'transform': 'translateY(20px)'
            }).animate({
                'opacity': '1'
            }, 500).animate({
                'transform': 'translateY(0)'
            }, 300);
        },

        /**
         * Handle responsive behavior
         */
        handleResponsive: function() {
            $(window).on('resize', function() {
                // Adjust checkout form layout on mobile if needed
                var windowWidth = $(window).width();
                
                $('.creator-lms-checkout-form-wrapper').each(function() {
                    var $wrapper = $(this);
                    
                    if (windowWidth <= 768) {
                        $wrapper.addClass('creator-lms-mobile-layout');
                    } else {
                        $wrapper.removeClass('creator-lms-mobile-layout');
                    }
                });
            });
        }
    };

    // Initialize when document is ready
    $(document).ready(function() {
        CreatorLMSElementorWidgets.init();
        CreatorLMSElementorWidgets.handleResponsive();
    });

    // Initialize when Elementor frontend is ready
    $(window).on('elementor/frontend/init', function() {
        // Register widget handlers if needed
        if (typeof elementorFrontend !== 'undefined') {
            elementorFrontend.hooks.addAction('frontend/element_ready/creator-lms-checkout.default', function($scope) {
                CreatorLMSElementorWidgets.initCheckoutWidget();
            });
        }
        if (typeof elementorFrontend !== 'undefined') {
            elementorFrontend.hooks.addAction(
                'frontend/element_ready/creator-lms-dashboard.default',
                function($scope) {
                    var $dashboard = $scope.find('.creator-lms-dashboard');
                    if ($dashboard.length) {
                        $dashboard.trigger('creatorlms:dashboard:ready');
                    }
                }
            );
        }
        if (typeof elementorFrontend !== 'undefined') {
            elementorFrontend.hooks.addAction(
                'frontend/element_ready/creator-lms-profile.default',
                function($scope) {
                    var $profile = $scope.find('.creator-lms-dashboard');
                    if ($profile.length) {
                        $profile.trigger('creatorlms:profile:ready');
                    }
                }
            );
        }
    });

})(jQuery);
