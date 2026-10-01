(function($) {
    'use strict';

    /**
     * Google Meet Content Handler
     */
    const GoogleMeetContent = {
        init: function() {
            this.initCountdown();
            this.initAutoRefresh();
        },

        /**
         * Initialize countdown timer
         */
        initCountdown: function() {
            const countdownEl = $('.googlemeet-countdown');
            
            if (!countdownEl.length) {
                return;
            }

            const startTime = parseInt(countdownEl.data('start-time')) * 1000;

            const updateCountdown = () => {
                const now = new Date().getTime();
                const distance = startTime - now;

                if (distance < 0) {
                    // Meeting has started, reload page to show live status
                    location.reload();
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                $('.time-value.days').text(String(days).padStart(2, '0'));
                $('.time-value.hours').text(String(hours).padStart(2, '0'));
                $('.time-value.minutes').text(String(minutes).padStart(2, '0'));
                $('.time-value.seconds').text(String(seconds).padStart(2, '0'));
            };

            // Update countdown every second
            updateCountdown();
            setInterval(updateCountdown, 1000);
        },

        /**
         * Auto-refresh page when meeting status changes
         */
        initAutoRefresh: function() {
            const contentEl = $('.ohmylms-googlemeet-content');
            
            if (!contentEl.length) {
                return;
            }

            // Check meeting status every minute
            setInterval(() => {
                this.checkMeetingStatus();
            }, 60000);
        },

        /**
         * Check if meeting status has changed
         */
        checkMeetingStatus: function() {
            const meetingId = $('.ohmylms-googlemeet-content').data('meeting-id');
            
            if (!meetingId) {
                return;
            }

            // Get current status from page
            const currentStatus = $('.googlemeet-status').attr('class').match(/\b(live|upcoming|ended)\b/);
            
            if (!currentStatus) {
                return;
            }

            // In a real implementation, you would check the actual meeting status
            // via AJAX and reload if it has changed
            // For now, we just reload at the start time for upcoming meetings
        },

        /**
         * Add meeting to calendar
         */
        addToCalendar: function(meetingData) {
            // This would generate a calendar file (.ics) for download
            console.log('Add to calendar:', meetingData);
        }
    };

    // Initialize when document is ready
    $(document).ready(function() {
        GoogleMeetContent.init();
    });

})(jQuery);
