# Membership React source

Edit these files and run `npm run build` from the plugin directory, or use `npm run dev`.

- MembershipsPage: route entry point.
- MembershipList: table, search, filtering, pagination and plan actions.
- MembershipEditor: Details/Courses steps, validation, save lifecycle and extension panels.
- MembershipDetails: name, description and membership options.
- MembershipPricing: price and billing interval.
- MembershipSaleSchedule: discounted pricing and sale dates.
- MembershipCourses: course search and selection.
- validateMembership.mjs: shared validation rules.

The build adapter replaces seven recovered component implementations using components.json.
Existing WordPress stores, API endpoints, controls, styles and Pro checks remain in use.
The editor retains registered membership settings panels and keeps the dialog open when
its store reports a failed save. Some extracted components retain transpiled runtime helpers;
this is editable React source integrated into OhMyLMS, not a standalone application.

Keep the recovered files as the parity baseline. Do not rerun the extraction script over
manual edits, particularly MembershipEditor. Deploy the complete modified plugin and build;
source assets require OMLMS_SOURCE_ASSETS enabled.

Validation: `npm run lint`, `npm test`, `npm run build`, and
`npm run test:browser -- tests/browser/memberships.spec.cjs` with the isolated test credentials.
