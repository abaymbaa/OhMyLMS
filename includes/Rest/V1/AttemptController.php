<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Assessment\AttemptItems;
use OhMyLMS\Assessment\Deadlines;
use OhMyLMS\Assessment\Grader;
use OhMyLMS\Assessment\Responses;
use OhMyLMS\Quiz\Submission;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

defined('ABSPATH') || exit;

/**
 * Learner endpoints for an in-progress versioned attempt: resume state and per-item autosave.
 * Only the attempt's own learner can use them; nothing here reveals correctness.
 */
class AttemptController extends RestController {
    public function register_routes() {
        register_rest_route($this->namespace, '/attempts/(?P<id>[\d]+)', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'resume'], 'permission_callback' => [$this, 'owner_permission']],
        ]);
        register_rest_route($this->namespace, '/attempts/(?P<id>[\d]+)/responses', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'save'], 'permission_callback' => [$this, 'owner_permission'],
                'args' => ['question_id' => ['required' => true, 'type' => 'integer'], 'sequence' => ['type' => 'integer', 'default' => 0]]],
        ]);
    }

    /** The current user must own an in-progress versioned attempt they can still access. */
    public function owner_permission(WP_REST_Request $request) {
        global $wpdb;
        if (!is_user_logged_in()) { return new WP_Error('ohmylms_login_required', __('Please log in.', 'ohmylms'), ['status' => 401]); }
        $attempt = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->prefix}ohmylms_quiz_attempts WHERE id=%d", (int) $request['id']), ARRAY_A);
        if (!$attempt || (int) $attempt['student_id'] !== get_current_user_id()) {
            return new WP_Error('ohmylms_attempt_missing', __('Attempt not found.', 'ohmylms'), ['status' => 404]);
        }
        $access = Submission::access((int) $attempt['quiz_id'], get_current_user_id());
        if (is_wp_error($access)) { return $access; }
        if (!AttemptItems::is_versioned((int) $attempt['id'])) {
            return new WP_Error('ohmylms_attempt_legacy', __('This attempt does not support autosave.', 'ohmylms'), ['status' => 409]);
        }
        return true;
    }

    private function attempt($id) {
        global $wpdb;
        return $wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->prefix}ohmylms_quiz_attempts WHERE id=%d", (int) $id), ARRAY_A);
    }

    public function resume(WP_REST_Request $request) {
        $attempt_id = (int) $request['id'];
        $attempt = $this->attempt($attempt_id);
        $context = AttemptItems::context($attempt_id);
        $saved = Responses::for_resume($attempt_id);
        $responses = [];
        foreach (AttemptItems::items($attempt_id) as $item) {
            if (!isset($saved[(int) $item['id']])) { continue; }
            $responses[(int) $item['question_id']] = [
                'response' => AttemptItems::tokenize($attempt_id, $item, $saved[(int) $item['id']]['response']),
                'sequence' => $saved[(int) $item['id']]['sequence'],
            ];
        }
        return rest_ensure_response([
            'attempt_id' => $attempt_id,
            'status' => $attempt['status'],
            'deadline_at' => $context['deadline_at'] ? gmdate('c', strtotime($context['deadline_at'] . ' UTC')) : null,
            'remaining_seconds' => Deadlines::remaining($context),
            'server_time' => gmdate('c'),
            'responses' => (object) $responses,
        ]);
    }

    public function save(WP_REST_Request $request) {
        $attempt_id = (int) $request['id'];
        $attempt = $this->attempt($attempt_id);
        if ($attempt['status'] !== 'in-progress') {
            return new WP_Error('quiz_attempt', __('This attempt has already been submitted.', 'ohmylms'), ['status' => 409]);
        }
        $context = AttemptItems::context($attempt_id);
        if (Deadlines::closed($context)) {
            return new WP_Error('quiz_deadline_passed', __('Time is up. Answers received after the deadline are not saved.', 'ohmylms'), ['status' => 409]);
        }
        $item = null;
        foreach (AttemptItems::items($attempt_id) as $candidate) {
            if ((int) $candidate['question_id'] === (int) $request['question_id']) { $item = $candidate; break; }
        }
        if (!$item) { return new WP_Error('quiz_question', __('That question is not part of this attempt.', 'ohmylms'), ['status' => 400]); }
        $response = $request['response'];
        if ($response === null) { $response = []; }
        if (!is_array($response) && !is_scalar($response)) { return new WP_Error('quiz_answer', __('Invalid answer format.', 'ohmylms'), ['status' => 400]); }
        $answer = Grader::sanitize(AttemptItems::untokenize($attempt_id, $item, is_array($response) ? $response : [$response]));
        if (strlen(wp_json_encode($answer)) > 65535) { return new WP_Error('quiz_answer', __('This answer is too long.', 'ohmylms'), ['status' => 400]); }
        $saved = Responses::save($attempt_id, $item, $answer, (int) $request['sequence']);
        if (is_wp_error($saved)) { return $saved; }
        $saved['remaining_seconds'] = Deadlines::remaining($context);
        return rest_ensure_response($saved);
    }
}
