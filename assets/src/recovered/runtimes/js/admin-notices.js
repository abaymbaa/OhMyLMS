/**
 * CreatorLMS Admin Notices JavaScript
 * 
 * Handles dismissible admin notices
 */
(function ($) {
  'use strict';

  $(document).ready(function () {
    // Handle dismissible notice clicks
    $(document).on('click', '.creatorlms-notice .notice-dismiss', function () {
      var $notice = $(this).closest('.creatorlms-notice');
      var noticeType = $notice.data('notice');
      if (noticeType === 'pro-version') {
        // Send AJAX request to dismiss pro version notice
        $.ajax({
          url: creatorlms_notices.ajax_url,
          type: 'POST',
          data: {
            action: 'creatorlms_dismiss_pro_version_notice',
            nonce: creatorlms_notices.nonce
          },
          success: function (response) {
            if (response.success) {
              $notice.fadeOut();
            }
          },
          error: function () {
            console.error('Failed to dismiss CreatorLMS Pro version notice');
          }
        });
      }
    });
  });
})(jQuery);
