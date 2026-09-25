# Dashboard and analytics React source

Edit this directory and run `npm run build` from the plugin root.

## Components

- Dashboard, DashboardOverview: overview route, course creation/import entry points,
  earnings summary, statistics and recent courses.
- EarningsSummaryCards, DashboardStats, TopCoursePerformance, RecentCourses:
  dashboard cards and tables. RecentCourses reuses the previously converted
  `courses/CourseListItem.jsx` through its existing runtime binding.
- CourseImportDialog: existing JSON/SCORM import dialog.
- CourseReport, ReportMetricCard, CourseStudentsReport, ReportStudentCell:
  course metrics, earnings and student activity reports.
- EarningsReportPage, EarningsReport, TransactionHistory: earnings report,
  geographic totals, order summary and transaction filters.
- EarningsChart, AnalyticsDateFilter, StudentReminderDialog, AnalyticsLinkIcon:
  supporting chart transformation, date controls, reminder editor and icon.
- model.mjs: authored dashboard request lifecycle, date query and immutable sorting.

## Integration and boundaries

`components.json` maps 18 components to the recovered application. The checked
`tools/analytics-adapters.mjs` replaces each implementation during the adapted build.
`assets/src/extensions/index.jsx` exports their factories. Missing bindings fail the build.
The course-row component remains owned by the course adapter to avoid duplicate replacement.

The components are editable reconstructed JSX. Shared controls, stores, navigation,
icons, currency/date utilities, the lazy chart renderer and some transpiler helpers
still come from the recovered runtime. This is not a standalone React application.
Original recovered sources remain the parity baseline. Do not rerun the extractor
on edited files. PHP reporting queries, permissions, Pro checks, demo datasets and
notification endpoints retain their existing contracts. No reminders were sent during testing.

Dashboard loading now releases its spinner on failure and ignores obsolete responses
when the filter changes or the component unmounts. Recent-course sorting copies the
array instead of mutating WordPress store data. Existing dashboard totals are retained
when a subsequent request fails; failure is logged rather than presented as new data.

`OMLMS_SOURCE_ASSETS` still controls activation. Building does not change site configuration.

## Verification

- `npm run lint` parses the source.
- `npm test` includes eight analytics tests: 18 component render-tree comparisons,
  populated report comparisons, dashboard failure/cancellation and sorting, navigation,
  course and earnings request contracts, free-version demo behavior, all three chart
  aggregation modes and preset/custom date callbacks.
- `npm run build` integrates all 18 replacements and compiles the SDK. Webpack reports
  bundle-size warnings; the SDK is approximately 499 KiB in this build.
- `npm run test:browser -- tests/browser/analytics.spec.cjs` uses isolated WordPress
  login and workspace bundles with mocked dashboard/report responses. Tests cover
  dashboard data and failure recovery, course creation dialog, course report search,
  chart rendering, earnings filtering and order navigation. Screenshots are saved in
  ignored `test-results/analytics-*.png`.

The browser fixtures do not verify real backend aggregation accuracy, imports, actual
email delivery, or complete responsive/RTL coverage.
