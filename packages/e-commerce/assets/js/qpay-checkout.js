/* Native QPay presentation. Checkout owns form submission; this handler owns pending payments. */
(function ($) {
    'use strict';
    if (typeof ohmylms_qpay_params === 'undefined') return;
    var config = ohmylms_qpay_params, i18n = config.i18n;
    var attempt = null, form = null, modal = null, timer = null, generation = 0, started = 0, opener = null;
    var storageKey = 'ohmylms.qpay.' + location.pathname;
    function save() { try { sessionStorage.setItem(storageKey, JSON.stringify(attempt)); } catch (_) {} }
    function clear() { attempt = null; try { sessionStorage.removeItem(storageKey); } catch (_) {} $('.ohmylms-qpay-resume').remove(); }
    function fingerprint($form) {
        var fields = JSON.stringify($form.serializeArray().filter(function (field) {
            return !/nonce|password|card|secret|_wp_http_referer/i.test(field.name);
        }));
        // Only a comparison hash is persisted, never the student's form data.
        var hash = 2166136261;
        for (var i = 0; i < fields.length; i++) hash = Math.imul(hash ^ fields.charCodeAt(i), 16777619);
        return String(hash >>> 0);
    }
    function unlock() {
        if (form) {
            form.removeClass('processing');
            form.find('.ohmylms-place-order-button').prop('disabled', false);
            form.find('.ohmylms-loader').hide();
        }
    }
    function stop() { clearTimeout(timer); generation++; }
    function close() { stop(); modal[0].close(); unlock(); if (opener) opener.focus(); }
    function status(message) { modal.find('.ohmylms-qpay-status').text(message); }
    function build() {
        if (modal) return;
        modal = $('<dialog class="ohmylms-qpay-modal" aria-labelledby="ohmylms-qpay-title"></dialog>');
        $('<h2 id="ohmylms-qpay-title"></h2>').text(i18n.title).appendTo(modal);
        $('<button type="button" class="ohmylms-qpay-close"></button>').text(i18n.close).on('click', close).appendTo(modal);
        $('<img class="ohmylms-qpay-qr" alt="QPay QR">').appendTo(modal);
        $('<p class="ohmylms-qpay-bank-label"></p>').text(i18n.banks).appendTo(modal);
        $('<div class="ohmylms-qpay-banks"></div>').appendTo(modal);
        $('<p class="ohmylms-qpay-status" role="status" aria-live="polite"></p>').appendTo(modal);
        $('<button type="button" class="ohmylms-qpay-check"></button>').text(i18n.check).on('click', resumeAttempt).appendTo(modal);
        modal.on('cancel', function (event) { event.preventDefault(); close(); });
        modal.appendTo(document.body);
    }
    function validBankLink(value) {
        // Bank-specific URI schemes are allowed; executable/document schemes are not.
        return typeof value === 'string' && /^[a-z][a-z0-9+.-]*:\/\//i.test(value)
            && !/^(javascript|data|vbscript|file|blob):/i.test(value);
    }
    function render(data) {
        build();
        var image = typeof data.qr_image === 'string' ? data.qr_image.replace(/^data:image\/png;base64,/, '') : '';
        modal.find('.ohmylms-qpay-qr').toggle(!!image).attr('src', image && /^[A-Za-z0-9+/=\r\n]+$/.test(image) ? 'data:image/png;base64,' + image : '');
        var banks = modal.find('.ohmylms-qpay-banks').empty();
        (Array.isArray(data.urls) ? data.urls : []).forEach(function (bank) {
            if (!bank || !validBankLink(bank.link)) return;
            $('<a class="ohmylms-qpay-bank"></a>').attr({href: bank.link, rel: 'noopener noreferrer'}).text(bank.description || bank.name || 'Bank').appendTo(banks);
        });
        modal.find('.ohmylms-qpay-bank-label').toggle(banks.children().length > 0);
        opener = document.activeElement;
        if (!modal[0].open) modal[0].showModal();
        status(data.payment_error || i18n.waiting);
    }
    function request(action) {
        return $.ajax({url: config.ajax_url, type: 'POST', dataType: 'json', data: {
            action: action, nonce: config.nonce, order_id: attempt.order_id, payment_token: attempt.payment_token
        }});
    }
    function paid(data) {
        stop(); status(i18n.paid); clear();
        if (data.redirect_url) window.location.assign(data.redirect_url);
    }
    function poll() {
        stop(); started = Date.now();
        var current = generation;
        status(i18n.waiting);
        function tick() {
            if (!attempt || generation !== current || !modal[0].open) return;
            if (Date.now() - started > 300000) { status(i18n.paused); return; }
            request('ohmylms_qpay_check_payment').done(function (response) {
                if (generation !== current) return;
                if (response.success && response.data.status === 'paid') { paid(response.data); return; }
                status(response.success ? i18n.waiting : (response.data.message || i18n.error));
                timer = setTimeout(tick, 3000);
            }).fail(function (xhr) {
                if (generation !== current) return;
                status(xhr.responseJSON && xhr.responseJSON.data && xhr.responseJSON.data.message || i18n.error);
                // No overlapping requests; temporary failures can be resumed explicitly.
            });
        }
        tick();
    }
    function banner() {
        if ($('.ohmylms-qpay-resume').length) return;
        $('<button type="button" class="ohmylms-qpay-resume"></button>').text(i18n.resume).on('click', resumeAttempt)
            .insertBefore('#ohmylms-checkout-form');
    }
    function resumeAttempt() {
        if (!attempt) return;
        render(attempt); stop();
        var current = generation;
        request('ohmylms_qpay_resume').done(function (response) {
            if (generation !== current) return;
            if (!response.success) { status(response.data.message || i18n.error); return; }
            if (response.data.status === 'paid') { paid(response.data); return; }
            attempt = Object.assign({}, attempt, response.data); save(); render(attempt); poll();
        }).fail(function (xhr) {
            if (generation !== current) return;
            status(xhr.responseJSON && xhr.responseJSON.data && xhr.responseJSON.data.message || i18n.error);
        }).always(unlock);
    }
    window.registerPaymentGatewayHandler('qpay', {
        open: function (data, $form) {
            form = $form; attempt = Object.assign({}, data, {fingerprint: fingerprint($form)});
            save(); banner(); render(attempt); unlock();
            if (!data.payment_error) poll();
        },
        resume: function ($form) {
            form = $form;
            if (!attempt || attempt.fingerprint !== fingerprint($form)) return false;
            resumeAttempt(); return true;
        }
    });
    $(function () {
        form = $('#ohmylms-checkout-form');
        try { attempt = JSON.parse(sessionStorage.getItem(storageKey)); } catch (_) {}
        if (attempt && attempt.order_id && attempt.payment_token) banner(); else attempt = null;
    });
})(jQuery);
