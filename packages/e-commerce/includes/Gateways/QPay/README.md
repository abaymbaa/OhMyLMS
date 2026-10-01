# Native QPay

QPay is registered by the e-commerce gateway registry and uses the existing
`ohmylms_qpay_settings` option and `qpay` payment method. Configure it in
OhMyLMS payment settings. New installs are disabled. Checkout requires MNT,
credentials for the selected environment, an invoice code, and a one-time
purchase. Automatic renewals and provider refunds are not supported.

The installed legacy add-on returns early when `OHMYLMS_NATIVE_QPAY` is present.
Its files and settings are retained for rollback. Ship the updated legacy
bootstrap along with OhMyLMS when upgrading sites which still activate it;
otherwise deactivate the old add-on before enabling native QPay.

## Payment lifecycle

- Checkout returns `result: success`, `payment_status: pending`, `payment_method:
  qpay`, the order ID, an order-specific browser capability, and QR/bank links.
  Success means an invoice exists, not that the order is paid. API failures retain
  the pending order with `payment_error` so an uncertain invoice is not discarded.
- Pending enrollment is created by the existing checkout. Paid hooks, purchase
  rewards, funnels, and cart clearing are deferred while payment is pending.
- QPay notifies `GET /wp-json/ohmylms/v1/qpay/callback?order_id=...`.
  New invoices add a separate random `qpay_token`. Historical URLs still work.
  A callback is only a notification: the server verifies the stored invoice via
  QPay before completing the order.
- Browser AJAX `ohmylms_qpay_check_payment` verifies with QPay at most once every
  ten seconds per pending order, including across browser tabs. It requires the
  checkout nonce and either ownership or `payment_token`. `ohmylms_qpay_resume`
  verifies immediately and reopens the same invoice if unpaid. Closing the dialog pauses polling; five minutes of
  waiting does not cancel or expire the invoice. A session-storage resume button
  survives reloads in the same tab. Form contents are not stored.
- Verification sums unique PAID MNT payment rows for the stored invoice and
  compares integer minor units. An environment/credential fingerprint and amount
  snapshot prevent silently verifying an invoice against changed settings.
- MySQL/MariaDB connection locks serialize invoice creation and settlement for
  each order. Early callbacks save verification until checkout has created
  enrollment. Concurrent/repeated notifications do not duplicate completion.
  The database user must be able to call `GET_LOCK` and `RELEASE_LOCK`.

## Recovery and compatibility

Existing invoice/payment metadata and the callback path are preserved. Legacy
invoices have no environment snapshot and therefore use the currently configured
mode. Set that mode correctly before migrating outstanding legacy invoices.

An explicit invoice rejection can be retried. A network/5xx failure during
creation is ambiguous; the order is retained and the buyer is directed to the
store. Do not create another invoice until the merchant has reconciled it.
Likewise, expired/cancelled invoices and changed merchant credentials require
store reconciliation; they never silently generate replacement invoices. Match
the order number (`sender_invoice_no`) in the QPay merchant system before closing
an unpaid order and asking the buyer to start a new purchase. A received payment
must be reconciled before an administrator cancels or edits its order.

Callbacks trigger immediate verification; open checkout dialogs also verify
automatically so local sites and missed callbacks can recover. There is no
background polling job after the dialog closes. See
[Merchant V2 documentation](https://developer.qpay.mn/mn/docs/merchant?version=2.0.0).
Testing callback delivery requires a publicly reachable HTTPS URL. Local sites
can confirm payments through browser polling or explicit Check/Resume actions.

## Verification

- `tests/php/qpay-integration.php`: disposable WordPress DB, mocked HTTP/email;
  full checkout, pending access, verification, callbacks, concurrency lock,
  migration, settings, invoice reuse, errors, currency and memberships.
- `tests/php/extensions-integration.php`: existing extension checks updated to
  use the native gateway.
- `npx playwright test tests/browser/qpay.spec.cjs`: actual checkout scripts with
  mocked responses; desktop/mobile dialog, bank link escaping, resume, polling
  timeout, and other gateway redirects.
- `npm run check`: source contracts, JS tests and reproducible-source build.

Provider acceptance still requires sandbox merchant credentials, a public HTTPS
callback URL, a sandbox bank payment, and confirmation that enrollment and one
order notification follow the callback. Mock tests do not certify those external
steps or actual bank-app launching.
