# WordPress API refactor

The October 2026 audit covers authored OhMyLMS PHP and the bundled ecommerce
package. The QPay, custom-question and SmartScore add-ons were also checked;
their runtime matches already use core APIs or require their own data tables.
Third-party plugins and vendor code are excluded.

Implemented replacements:

- Unique slugs use `sanitize_title()` and `wp_unique_post_slug()`, including
  reserved names, parent handling, and core filters. New collisions follow core
  suffix rules. Existing content is not migrated. Draft LMS URLs still reserve
  their slug, matching the previous helper's behavior.
- Course updates use `wp_update_post()` with slashed input and error handling.
  Core save hooks and cache invalidation now run. Local/GMT creation dates stay
  consistent. The object receives the final core slug. Content create/read/update
  no longer flushes rewrite rules; registration and activation own rewrite setup.
- Settings page titles use cached `get_post()` with page/published guards.
- Email verification token lookups use `get_users()` and user-meta constraints.
- Coupon code lookup uses `get_posts()` with an exact title and IDs projection.
- Authored runtime JSON output uses `wp_json_encode()`.
- Certificate directory creation uses `wp_mkdir_p()`.
- Admin cache clearing calls `delete_transient()` and `delete_site_transient()`.
  It counts deleted values, rather than timeout/value database rows, and retains
  unrelated keys. Known Mollie/core cache keys work with object caches too.

Some SQL and PHP primitives remain appropriate: custom-table relationships,
aggregates, transactional locks, ZIP and PDF processing, generic cookies, and
local stream IO do not have interchangeable high-level WordPress APIs.
Cache-prefix discovery still uses read-only prepared SQL because WordPress has
no API to enumerate arbitrary transient prefixes. Dynamic keys held exclusively
in an external object cache cannot be enumerated; the clear button covers known
keys and discoverable legacy keys, without flushing unrelated caches.

Validation: `tests/php/wordpress-api-integration.php` exercises native save hooks,
text/cache preservation, slug collisions and filters, verification token expiry
and replay, settings page visibility, and database/object-cache deletion paths.
It uses connection-local temporary tables in the disposable test site.

References: [post updates](https://developer.wordpress.org/reference/functions/wp_update_post/),
[unique slugs](https://developer.wordpress.org/reference/functions/wp_unique_post_slug/),
[transient deletion](https://developer.wordpress.org/reference/functions/delete_transient/).
