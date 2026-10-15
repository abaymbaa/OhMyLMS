# OhMyLMS MCP connections

OhMyLMS uses WordPress's native **Abilities API** and the official **MCP Adapter**.
The adapter is bundled as the pinned Composer dependency `wordpress/mcp-adapter:0.6.1`;
Mail Mint and a separately activated adapter plugin are not required. WordPress 6.9 or
newer is required for MCP; on older WordPress versions the LMS stays available and the
connection settings report the missing Abilities API.

The dedicated server remains at `https://YOUR-SITE/wp-json/ohmylms/v1/mcp`.
The adapter owns JSON-RPC handling, version negotiation, tool conversion, and HTTP sessions.
Use a standard Streamable HTTP MCP client: retain the `Mcp-Session-Id` returned by initialize
and send it, the negotiated `MCP-Protocol-Version`, and the bearer token on subsequent requests.
GET/SSE is not implemented by this adapter version; DELETE terminates a session.
OhMyLMS only adds authentication, connection settings, and WordPress empty-response/cache handling.

## Setup

1. Open **OhMyLMS → Add-ons**, enable **MCP**, then click **Manage** on its card.
   MCP is disabled by default. Disabling the add-on stops its server and denies existing tokens;
   tokens remain available for revocation from Manage.
2. Generate a separate token for OpenAI, Anthropic, or Gemini. Copy it immediately;
   only its SHA-256 hash is stored. Generating a replacement invalidates the previous token.
3. Send `Authorization: Bearer YOUR_TOKEN` on every MCP request. Never put the token in a URL.
4. For hosted APIs, deploy to a publicly reachable HTTPS site with a valid certificate.
   A `.local` hostname is not reachable from provider servers. HTTP is permitted only when
   WordPress's `WP_ENVIRONMENT_TYPE` is `local`. Behind a trusted reverse proxy, configure
   WordPress HTTPS detection correctly; this server does not trust arbitrary forwarded headers.
5. Revoke tokens from the same settings page when no longer needed.

Tokens run as their issuing administrator, who must retain `manage_options` and `edit_posts`.
They grant access to course drafts and quiz answer keys, bounded lesson/question authoring,
objective mappings and alignment-review writes, shared-skill, roadmap and resource-connection
writes, and administrator study-plan audits.
They are for trusted
administrator assistants, not students. Provider names label independently revocable credentials;
they do not restrict which HTTP client can use a credential. LMS REST permission callbacks still
run on every tool call. No API keys for model providers are stored by WordPress.

## Available tools

| Tool | Arguments |
| --- | --- |
| `list_courses`, `list_lessons`, `list_quizzes`, `list_questions` | Optional `page` (>=1), `per_page` (1–20), `search` (<=200 characters) |
| `get_course`, `get_lesson`, `get_quiz`, `get_question` | Required positive integer `id` |
| `get_course_chapters` | Required positive integer course `id` |
| `get_course_objectives` | Course `id`; optional `page`, `per_page` (1–50, default 10). Returns selected targets, content connections, available syllabuses, total pages and the current mapping `revision`. |
| `list_course_objective_options` | Course `id`, `syllabus_id`; optional `page`, `per_page` (1–50), `search` (up to 200 characters). Searches official codes, titles, full wording and topics. |
| `set_course_objectives` | Course `id`, current `revision`, complete `mappings` list of `{syllabus_id, term_id}` (up to 200). Replaces all targets; omitted references are removed, `[]` clears targets. |

Course objective tools reuse the course editor's API and storage. Read **every mapping page** before editing, keep all references you intend to retain, then submit the full list with the revision. HTTP 409 means another session changed the mappings: read again and reconcile. A successful write returns the first 10 mappings, totals and the new revision. Mappings describe course scope; these tools do not alter official objective text, completion requirements or student achievement. Existing recorded lesson/assessment connections are not content-suitability reviews.

The three course-objective tools use the same dedicated MCP endpoint and administrator credentials as the existing tools. Reconnect or refresh tool discovery after installing the update. Clients with an explicit tool allowlist must add the three names above. No new token is needed. Read tools are marked read-only; replacing targets is marked as a write that can remove references and requires a fresh revision.

List results include pagination totals when supplied by the LMS. Results over 256 KiB return
an actionable tool error. Payments, credentials, arbitrary REST routes and arbitrary database queries
are not exposed. Course and quiz content tools remain read-only; lesson and question edits use
the explicit authoring tools below. Shared-skill tools
add only their specific administrator writes and progress audits. Site plugins can observe completed tool calls with
`ohmylms_mcp_tool_called($user_id, $tool_name, $is_error)`; arguments, results, and tokens are not logged.

Shared-skill tools are subject/curriculum independent:

| Tool | Arguments |
| --- | --- |
| `list_syllabuses` | None; returns source IDs, versions and profile selections |
| `list_syllabus_objectives` | `id`; optional `page`, `search`, `topic`, `category`, `status`, `shared_id` |
| `list_shared_skills` | Optional `subject`, `page`, `search` |
| `get_shared_skill` | `id`; returns affected objectives and revision |
| `save_shared_skill` | `name`; optional `id` (0 creates), `subject`, `description`, `topic`, `roadmap_id` (creation library association); existing edits require `expected_revision` |
| `save_skill_mapping` | `specific_id`, `shared_id`, `relation`, `expected_revision`; optional `note` |
| `save_combined_skill_mapping` | `shared_id`, `groups` of `{source_id, pairs: [{specific_id, expected_revision}]}`; optional `note`. At least two objectives per source group; descriptive coverage only. |
| `remove_skill_mapping` | `specific_id`, `shared_id`, `expected_revision` |
| `list_shared_skill_content` | `id`; optional `kind`, `page`, `search`, `search_targets` (0 or 1) |
| `connect_shared_skill_content` | `id`, `content_id`, `linked` (boolean) |
| `create_shared_skill_roadmap` | `name`, ordered unique `skill_ids`; optional `subject`, `grade` |
| `configure_subject_syllabuses` | `subject` (profile/study-plan label), `syllabus_ids` (up to ten) |
| `audit_my_study_plans` | None; authenticated account only |
| `audit_student_study_plans` | `student_id`; administrator only |

Mapping creation sends an empty `expected_revision`; editing/removing sends the current revision
from `list_syllabus_objectives`. Read a shared skill's impact before changing its scope. Related
links do not pool evidence or automatically inherit content. Roadmaps reuse shared IDs and start as
drafts. Profile configuration neither publishes nor enrolls a course. See [shared skills](SHARED-SKILLS.md).

Single-pair relationships are `equivalent`, `broader` (source covers more), `narrower` (source covers less), and `related`. Only `equivalent` pools evidence. Combined groups store required membership and use the separate grouped tool; they neither infer mastery nor pool evidence. Individual editing tools reject members of combined groups so group integrity is preserved.

## Lesson and question authoring

The server exposes 34 tools, including these eight authoring and review operations. Refresh
tool discovery or reconnect after updating; clients with tool allowlists must add their names.
The endpoint and existing administrator token remain the same.

| Tool | Arguments |
| --- | --- |
| `get_lesson_for_edit` | `id`; returns raw block HTML, native lesson settings, status and `revision`. |
| `save_lesson` | Creation: `name`, optional `content`, `settings`. Editing: `id`, latest `revision`, submitted fields only; published lessons additionally require `allow_published: true`. |
| `get_question_for_edit` | `id`; returns description, native settings, answer-option `questions`, part-level `skills`, bank `status`, WordPress `post_status`, current `version_id`, `approved_version_id` and `revision`. |
| `save_question` | Creation: `name`; optional `description`, `settings`, answer-option `questions`, `skills`. Editing additionally requires `id` and latest `revision`. |
| `get_lesson_objectives` | `id`; returns up to 200 explicit targets, official wording, saved reviews, mapping `revision`, `content_revision`, `review_revision` and per-target `objective_revision`. |
| `set_lesson_objectives` | `id`, mapping `revision`, complete `mappings` list of `{syllabus_id, term_id, relation}`; relation is `teaches`, `practices` or `assesses`. |
| `get_lesson_alignment_reviews` | `id`; returns the same mappings and review/freshness information. |
| `save_lesson_alignment_review` | `id`, `syllabus_id`, `term_id`, current `content_revision`, `objective_revision`, `review_revision`, `status` (`aligned`, `partial`, `not_aligned`), nonempty `evidence`, and `recommendation` (may be empty). |

New lessons are WordPress drafts. Question saves use the native question-bank draft writer and
capture immutable versions without approval or quiz placement. Question-bank approval is separate
from WordPress post status; use `status` and the version IDs to inspect it. Omitted authoring fields
retain their existing values. Question settings and option objects preserve native/custom extension
contracts. Supply returned option IDs when editing existing options. Native `questions: []` preserves
existing options; it is not a deletion command. Skills use a part-ID map such as
`{"p1":{"primary":123,"supporting":[456]}}`. These tools do not publish lessons, approve questions,
or place content into courses/quizzes. Explicitly allowed edits of a published lesson affect live content.

For an alignment workflow, discover official objectives with `list_syllabus_objectives`, read the
lesson with `get_lesson_for_edit`, then map the chosen references with `set_lesson_objectives`.
Read the returned official wording alongside the lesson content, assess suitability in the MCP
client, and store the evidence using `save_lesson_alignment_review`. The server stores the caller's
evaluation; it does not run an AI model. Reviews retain reviewer/time and content/objective hashes.
Changed lesson content/settings or objective records mark reviews stale; achievement is unaffected.

Mapping writes replace the complete explicit list; `[]` clears it and its reviews. Removed references
lose their reviews. All submitted objectives must currently belong to the stated syllabus; unavailable
targets must be removed before resaving. Mapping tags feed existing coverage while preserving
pre-existing skill tags; only tags introduced by this mapping service are removed on unlinking.
HTTP 409 means a snapshot changed: reread, reconcile, then retry with fresh tokens. Review writes
require all three snapshot revisions and reject stale evaluations. Evidence and recommendations
are plain text, each at most 4,000 characters. Requests are limited to 128 KiB; content/description
fields to 100,000 characters; options to 100; mappings to 200.

The matching administrator REST routes are under `/ohmylms/v1/mcp-authoring`: GET
`/lessons/{id}`, POST `/lessons`, GET `/questions/{id}`, POST `/questions`, GET/PUT
`/lesson-objectives/{id}` and GET/PUT `/alignment-reviews/{id}`. They use normal WordPress REST
authentication and the same validated schemas and services. JSON bodies are required for writes.
This extends the MCP authoring workflow; it does not add a lesson-editor review panel.

The four new service/schema/controller files retain namespace-to-filename mappings required by
the plugin's PSR-4 loader. Their two WordPress filename findings per file remain visible; changing
those filenames requires a compatible autoloader migration. No filename rule is suppressed.

Verified on 2026-10-15 against the isolated test installation: 80 combined course/MCP authoring
checks, 119 MCP transport/authentication checks, 22 course REST checks, 23 native lesson checks,
and MCP lifecycle/schema checks pass. The JavaScript suite reports 407 passed, one skipped and
zero failures; PHP syntax checks pass. New authoring files have only the eight documented filename
findings, and the new acceptance fixture passes PHPCS. Existing `Server.php`, `Api.php`, and older
MCP test harnesses retain legacy standards findings; this update is not a repository-wide lint cleanup.
The course fixture retains two CLI file-I/O warnings.

## WordPress abilities

Each tool is backed by an ability in the `ohmylms` category, for example
`ohmylms/list-courses`, `ohmylms/get-course`, and `ohmylms/get-course-chapters`.
Ability IDs replace underscores with hyphens. MCP tool names remain unchanged, preserving
existing client allowlists. Each ability declares input/output schemas, administrator permissions,
and accurate read/write, destructive and idempotent annotations. Native abilities can also be executed through PHP or the
authenticated WordPress Abilities REST API. They are excluded from the adapter's default discovery
server and explicitly registered on the dedicated LMS server.

```php
// In WordPress, under an authenticated administrator's identity:
$result = wp_get_ability( 'ohmylms/list-courses' )->execute( array( 'per_page' => 5 ) );
if ( is_wp_error( $result ) ) {
    // Handle schema, permission, or LMS errors.
}
```

See the [WordPress Abilities API](https://developer.wordpress.org/apis/abilities-api/)
and [official MCP Adapter](https://github.com/WordPress/mcp-adapter).

## OpenAI Responses API

Install `openai`. Set `OPENAI_API_KEY`, `OPENAI_MODEL`, `OHMYLMS_MCP_URL`, and
`OHMYLMS_MCP_TOKEN` in your application's environment. Use a model supporting remote MCP.

```python
import os
from openai import OpenAI

response = OpenAI().responses.create(
    model=os.environ["OPENAI_MODEL"],
    input="List the courses in my LMS.",
    tools=[{
        "type": "mcp",
        "server_label": "ohmylms",
        "server_url": os.environ["OHMYLMS_MCP_URL"],
        "authorization": os.environ["OHMYLMS_MCP_TOKEN"],
        "allowed_tools": ["list_courses", "get_course", "get_course_chapters"],
        "require_approval": "never",
    }],
)
print(response.output_text)
```

The example automatically permits its read-only tool allowlist. Send the authorization value
again on subsequent requests. See [OpenAI's remote MCP guide](https://developers.openai.com/api/docs/guides/tools-connectors-mcp).

## Anthropic Messages API

Install `anthropic`. Set `ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL`, `OHMYLMS_MCP_URL`,
and an Anthropic-specific `OHMYLMS_MCP_TOKEN`.

```python
import os
from anthropic import Anthropic

response = Anthropic().beta.messages.create(
    model=os.environ["ANTHROPIC_MODEL"],
    max_tokens=1024,
    messages=[{"role": "user", "content": "List the courses in my LMS."}],
    mcp_servers=[{
        "type": "url", "name": "ohmylms",
        "url": os.environ["OHMYLMS_MCP_URL"],
        "authorization_token": os.environ["OHMYLMS_MCP_TOKEN"],
    }],
    tools=[{"type": "mcp_toolset", "mcp_server_name": "ohmylms"}],
    betas=["mcp-client-2025-11-20"],
)
print(response.content)
```

See [Anthropic's MCP connector](https://platform.claude.com/docs/en/agents-and-tools/mcp-connector).

## Gemini Interactions API

Install `google-genai`. Set `GEMINI_API_KEY`, `GEMINI_MODEL`, `OHMYLMS_MCP_URL`,
and a Gemini-specific `OHMYLMS_MCP_TOKEN`. Use an SDK/model with remote MCP support.

```python
import os
from google import genai

interaction = genai.Client(api_key=os.environ["GEMINI_API_KEY"]).interactions.create(
    model=os.environ["GEMINI_MODEL"],
    input="List the courses in my LMS.",
    tools=[{
        "type": "mcp_server", "name": "ohmylms",
        "url": os.environ["OHMYLMS_MCP_URL"],
        "headers": {"Authorization": "Bearer " + os.environ["OHMYLMS_MCP_TOKEN"]},
        "allowed_tools": ["list_courses", "get_course", "get_course_chapters"],
    }],
)
print(interaction)
```

See [Gemini remote MCP documentation](https://ai.google.dev/gemini-api/docs/function-calling#remote-mcp-model-context-protocol).
An alternative is an MCP SDK Streamable HTTP client with the same Authorization header, passed
to Gemini's SDK as a tool session.

## Desktop clients and OAuth

Clients that accept Streamable HTTP URLs and custom bearer headers can connect directly.
OAuth-only ChatGPT connector screens require a separate OAuth gateway: this plugin implements
revocable bearer credentials, not OAuth discovery, dynamic registration, or an authorization flow.
Do not configure an authenticated server as an unauthenticated connector. API compatibility does
not mean all consumer chat interfaces support custom headers.

## Smoke test

Use a standard MCP inspector/client with the URL and bearer header. Initialize with:

```json
{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{},"clientInfo":{"name":"smoke-test","version":"1.0"}}}
```

POST the initialized notification, then list and call tools:

```json
{"jsonrpc":"2.0","method":"notifications/initialized"}
{"jsonrpc":"2.0","id":2,"method":"tools/list"}
{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"list_courses","arguments":{"per_page":5}}}
```

Send each object as a separate POST with `Content-Type: application/json`,
`Accept: application/json, text/event-stream`, the negotiated `MCP-Protocol-Version`,
and the `Mcp-Session-Id` returned by initialization. Use that session header also when
sending DELETE to terminate the session. Tokens must accompany every request, including DELETE.
Verify 401 without a valid token, successful listing with one, and 401 after revocation.
An optional Origin header must exactly match the WordPress home origin.

Run the isolated integration suite with `OHMYLMS_TEST_CREDENTIALS` pointing to the existing
disposable site JSON and `php tests/php/mcp-integration.php`. It refuses the live database,
restores token settings, cleans up its adapter sessions, and deletes only its own content fixtures. Provider account calls need
real API credentials and public hosting and are a separate deployment check.

For real HTTP transport verification, start a separate PHP development server on loopback:
`php -S 127.0.0.1:8107 tests/fixtures/mcp-router.php` (with the same test-credentials environment).
Run the suite with `OHMYLMS_MCP_TEST_URL=http://127.0.0.1:8107/?rest_route=/ohmylms/v1/mcp`.
Stop the development server when finished. The loopback router permits HTTP only for this
disposable environment and must never be deployed publicly.
