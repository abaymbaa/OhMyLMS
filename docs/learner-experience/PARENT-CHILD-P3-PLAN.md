# P3 plan: independent family links

Planning only; nothing here is implemented. Refines the contract in
[PARENT-CHILD-P0.md](PARENT-CHILD-P0.md). P1 (role chooser, parent sign-up) and P2
(read-only school-linked child overview) are built and must keep working unchanged.

## Goal

A parent with no school can link to a child for **home learning**, either by creating a
managed child account or by linking an existing learner with that learner's approval.
Home links never grant school data, and school links never grant home data.

## Decisions needed before coding

1. **Child age/consent policy.** Collect only what the site's configured policy needs.
   Is there a site policy (minimum age, parental consent text)? Default if none: collect
   no birth date, only a display name and grade.
2. **Managed children without email.** Plan: a `wp_users` row with a generated login and
   no personal email, signing in through a parent-issued, expiring setup link (never a
   password the parent can read). Confirm this is acceptable, since WordPress core
   expects an email on some flows.
3. **Existing-learner linking.** Plan: the learner (signed in) accepts a private,
   single-use invitation tied to their verified email. Confirm email match is enough
   proof of approval (same rule as the standalone class invitations).
4. **Home-learning reports.** Deferred to P6 per P0 (no reliable activity provenance).
   P3 shows only the relationship, not aggregates.

## Schema (additive, own version)

Option `ohmylms_family_schema`, independent of `ohmylms_school_schema`; class
`OhMyLMS\Family\Schema` using the same `dbDelta` pattern and `ohmylms_` table prefix.

| Table | Key columns |
| --- | --- |
| `ohmylms_family_links` | guardian_user_id, learner_user_id, scope=`home_learning`, status `pending/active/revoked`, approved_by, approval_method, revision, timestamps. Unique (guardian, learner, scope); no self-links |
| `ohmylms_family_invitations` | token_hash (unique), issuer_id, target learner or link, recipient email, scope, expires_at, consumed_at, revoked_at |
| `ohmylms_family_audit` | actor_id, action, link_id, created_at (no tokens or passwords) |

Rollback: a constant/filter disables routes and views; tables, links and audit stay.
`Family` feature gate mirrors `OHMYLMS_SCHOOLS_ENABLED`.

## Services and routes

- `Family\Service`: `children()` (active links, bounded 100), `child( id )` (fresh
  check), `create_child()`, `invite_existing()`, `accept()` (transaction; recheck issuer;
  atomic consume + activate so replays and concurrent accepts cannot double-link),
  `revoke()`. Reads use the signed-in actor only.
- REST `/ohmylms/v1/family/*`, `Cache-Control: private, no-store`, nonce on writes,
  rate-limited invitation creation; PHP-native hub forms (as with teacher classes) for
  the UI. School endpoints untouched.
- Selector rows carry a scope (`school:<id>` or `home`); `ParentWorkspace::children()`
  merges both, and `child()` validates the exact scope again on every request.

## UI slices (each shippable)

- **P3a** Schema + `Family\Service` + unit/integration checks, no UI.
- **P3b** "Add a child" (managed account) and the child setup link; family list shows
  home and school scopes separately with status chips.
- **P3c** Invite an existing learner; learner-side accept/decline in their Connections;
  parent and child can revoke.
- **P3d** Grade/personalization step for a managed child (real course choices only;
  follows never grant access).

## Verification gates

- Replay, expiry, revocation and concurrent-accept tests; issuer losing the parent role
  between issue and accept.
- Self-link, duplicate link, wrong-email and cross-scope denials; a home link never
  returns school work and a school link never returns home data.
- Multiple guardians per child; no-school parent; revoked link denied on the next request.
- Migration: run install twice (idempotent), disable the feature (routes gone, data kept).
- Tokens never printed or logged; no outbound mail in tests; synthetic fixtures removed
  and verified by count queries. Credential-protected suites stay unrun unless the user runs them.
- PHPCS zero errors on new files; record warnings honestly.

## Not in P3

Parent-created assignments, messaging, purchases for a child, home aggregates (P6),
importing school guardian links into family links, and the unobserved reference screens
(parent dashboard, recovery, personalization step two), which remain labeled proposed.
