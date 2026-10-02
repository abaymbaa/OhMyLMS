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

1. Activate OhMyLMS and open **OhMyLMS → Settings → MCP connections**.
   The separate **WordPress Settings → OhMyLMS MCP** page is also available.
2. Generate a separate token for OpenAI, Anthropic, or Gemini. Copy it immediately;
   only its SHA-256 hash is stored. Generating a replacement invalidates the previous token.
3. Send `Authorization: Bearer YOUR_TOKEN` on every MCP request. Never put the token in a URL.
4. For hosted APIs, deploy to a publicly reachable HTTPS site with a valid certificate.
   A `.local` hostname is not reachable from provider servers. HTTP is permitted only when
   WordPress's `WP_ENVIRONMENT_TYPE` is `local`. Behind a trusted reverse proxy, configure
   WordPress HTTPS detection correctly; this server does not trust arbitrary forwarded headers.
5. Revoke tokens from the same settings page when no longer needed.

Tokens run as their issuing administrator, who must retain `manage_options` and `edit_posts`.
They grant **read-only access to course drafts and quiz answer keys**. They are for trusted
administrator assistants, not students. Provider names label independently revocable credentials;
they do not restrict which HTTP client can use a credential. LMS REST permission callbacks still
run on every tool call. No API keys for model providers are stored by WordPress.

## Available tools

| Tool | Arguments |
| --- | --- |
| `list_courses`, `list_lessons`, `list_quizzes`, `list_questions` | Optional `page` (>=1), `per_page` (1–20), `search` (<=200 characters) |
| `get_course`, `get_lesson`, `get_quiz`, `get_question` | Required positive integer `id` |
| `get_course_chapters` | Required positive integer course `id` |

List results include pagination totals when supplied by the LMS. Results over 256 KiB return
an actionable tool error. Writes, payments, student records, credentials, arbitrary REST routes,
and arbitrary database queries are not exposed. Site plugins can observe completed tool calls with
`ohmylms_mcp_tool_called($user_id, $tool_name, $is_error)`; arguments, results, and tokens are not logged.

## WordPress abilities

Each tool is backed by an ability in the `ohmylms` category, for example
`ohmylms/list-courses`, `ohmylms/get-course`, and `ohmylms/get-course-chapters`.
Ability IDs replace underscores with hyphens. MCP tool names remain unchanged, preserving
existing client allowlists. Each ability declares input/output schemas, administrator permissions,
and read-only/idempotent annotations. Native abilities can also be executed through PHP or the
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
