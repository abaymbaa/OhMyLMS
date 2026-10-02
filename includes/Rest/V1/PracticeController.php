<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Assessment\Engine;
use OhMyLMS\Assessment\Schema;
use OhMyLMS\Practice\Guests;
use OhMyLMS\Practice\Inline;
use OhMyLMS\Practice\Sessions;
use OhMyLMS\Skills\Evidence;
use OhMyLMS\Skills\Recommendations;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

defined('ABSPATH') || exit;

/**
 * Learner practice: skill sessions, inline checks, guest credentials and claims, and the
 * learner's own skill progress. Logged-in learners use cookie auth; guests send the
 * X-OhMyLMS-Guest credential header. Nothing here exposes answers before grading.
 */
class PracticeController extends RestController {
    public function register_routes() {
        register_rest_route($this->namespace, '/practice/sessions', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'start'], 'permission_callback' => [$this, 'owner_permission'],
                'args' => ['term_id' => ['required' => true, 'type' => 'integer'], 'item_limit' => ['type' => 'integer', 'default' => 10]]],
        ]);
        register_rest_route($this->namespace, '/practice/sessions/(?P<uuid>[0-9a-f-]{36})', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'show'], 'permission_callback' => [$this, 'owner_permission']],
        ]);
        register_rest_route($this->namespace, '/practice/sessions/(?P<uuid>[0-9a-f-]{36})/answer', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'answer'], 'permission_callback' => [$this, 'owner_permission']],
        ]);
        register_rest_route($this->namespace, '/practice/sessions/(?P<uuid>[0-9a-f-]{36})/hint', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'hint'], 'permission_callback' => [$this, 'owner_permission']],
        ]);
        register_rest_route($this->namespace, '/practice/inline', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'inline'], 'permission_callback' => [$this, 'owner_permission']],
        ]);
        register_rest_route($this->namespace, '/practice/guest', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'guest'], 'permission_callback' => [$this, 'guest_permission']],
        ]);
        register_rest_route($this->namespace, '/practice/claim', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'claim'], 'permission_callback' => 'is_user_logged_in'],
        ]);
        register_rest_route($this->namespace, '/me/skills', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'my_skills'], 'permission_callback' => 'is_user_logged_in'],
        ]);
    }

    /** Practice must be enabled; the owner is the logged-in learner or a valid guest credential. */
    public function owner_permission(WP_REST_Request $request) {
        if (!Schema::ready() || !Engine::practice()) { return new WP_Error('ohmylms_practice_disabled', __('Practice is not available.', 'ohmylms'), ['status' => 404]); }
        if (is_user_logged_in()) { return true; }
        return Guests::from_request($request) ? true : new WP_Error('ohmylms_guest_required', __('Start a guest session or log in.', 'ohmylms'), ['status' => 401]);
    }

    public function guest_permission() {
        if (!Schema::ready() || !Engine::practice()) { return new WP_Error('ohmylms_practice_disabled', __('Practice is not available.', 'ohmylms'), ['status' => 404]); }
        if (is_user_logged_in()) { return new WP_Error('ohmylms_guest_unneeded', __('You are logged in; no guest session is needed.', 'ohmylms'), ['status' => 409]); }
        // Light abuse protection: a handful of guest sessions per address per hour.
        $key = 'ohmylms_guest_' . md5((string) ($_SERVER['REMOTE_ADDR'] ?? ''));
        $count = (int) get_transient($key);
        if ($count >= 20) { return new WP_Error('ohmylms_guest_limit', __('Too many guest sessions. Please try again later.', 'ohmylms'), ['status' => 429]); }
        set_transient($key, $count + 1, HOUR_IN_SECONDS);
        return true;
    }

    private function owner(WP_REST_Request $request) {
        if (is_user_logged_in()) { return ['student_id' => get_current_user_id()]; }
        $guest = Guests::from_request($request);
        return $guest ? ['guest_id' => (int) $guest['id']] : [];
    }

    private function session(WP_REST_Request $request) {
        $session = Sessions::get((string) $request['uuid']);
        if (!$session || $session['mode'] !== 'skill' || !Sessions::owns($session, $this->owner($request))) {
            return new WP_Error('ohmylms_practice_missing', __('Practice session not found.', 'ohmylms'), ['status' => 404]);
        }
        return $session;
    }

    public function start(WP_REST_Request $request) {
        $session = Sessions::start($this->owner($request), (int) $request['term_id'], ['item_limit' => (int) $request['item_limit'], 'course_id' => (int) $request['course_id']]);
        if (is_wp_error($session)) { return $session; }
        $response = rest_ensure_response(Sessions::state($session));
        $response->set_status(201);
        return $response;
    }

    public function show(WP_REST_Request $request) {
        $session = $this->session($request);
        return is_wp_error($session) ? $session : rest_ensure_response(Sessions::state($session));
    }

    public function answer(WP_REST_Request $request) {
        $session = $this->session($request);
        if (is_wp_error($session)) { return $session; }
        $result = Sessions::answer($session, (int) $request['item_id'], $request['response'] ?? []);
        return is_wp_error($result) ? $result : rest_ensure_response($result);
    }

    public function hint(WP_REST_Request $request) {
        $session = $this->session($request);
        if (is_wp_error($session)) { return $session; }
        $result = Sessions::hint($session, (int) $request['item_id']);
        return is_wp_error($result) ? $result : rest_ensure_response($result);
    }

    public function inline(WP_REST_Request $request) {
        $result = Inline::answer((string) $request['token'], $request['response'] ?? [], $this->owner($request));
        return is_wp_error($result) ? $result : rest_ensure_response($result);
    }

    public function guest() {
        $guest = Guests::create();
        $response = rest_ensure_response($guest);
        $response->set_status(201);
        return $response;
    }

    public function claim(WP_REST_Request $request) {
        $result = Guests::claim((string) $request['guest_token'], get_current_user_id());
        if (is_wp_error($result)) { return $result; }
        Evidence::process(200);
        return rest_ensure_response($result);
    }

    public function my_skills() {
        Evidence::process(50);
        $student = get_current_user_id();
        return rest_ensure_response(['skills' => Evidence::summary($student), 'recommendations' => Recommendations::for_student($student)]);
    }
}
