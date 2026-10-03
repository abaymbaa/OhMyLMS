<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Assessment\AttemptItems;
use OhMyLMS\Assessment\Grader;
use OhMyLMS\Assessment\Pools;
use OhMyLMS\Assessment\RevisionPublisher;
use OhMyLMS\Practice\Inline;
use OhMyLMS\QuestionBank\AccessPolicy;
use OhMyLMS\QuestionBank\VersionPublisher;
use OhMyLMS\Utility\Transaction;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

defined('ABSPATH') || exit;

/**
 * Explicit, non-recording preview for authors: shows the quiz as learners would get it
 * (current revision, learner-safe views) and grades answers without creating attempts,
 * grade events or evidence. Unlike "view as", it never acts as another account.
 */
class PreviewController extends RestController {
    public function register_routes() {
        register_rest_route($this->namespace, '/quiz/(?P<id>[\d]+)/preview', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'preview'], 'permission_callback' => [$this, 'permission']],
        ]);
        register_rest_route($this->namespace, '/quiz/(?P<id>[\d]+)/preview/grade', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'grade'], 'permission_callback' => [$this, 'permission']],
        ]);
    }

    public function permission(WP_REST_Request $request) {
        $id = (int) $request['id'];
        if (get_post_type($id) !== OHMYLMS_QUIZ_CPT) { return new WP_Error('ohmylms_rest_invalid_quiz_id', __('Invalid ID.', 'ohmylms'), ['status' => 404]); }
        return AccessPolicy::check(AccessPolicy::can_edit_quiz($id));
    }

    public function preview(WP_REST_Request $request) {
        $quiz_id = (int) $request['id'];
        try {
            $revision = Transaction::run(static function () use ($quiz_id) {
                $revision = RevisionPublisher::publish($quiz_id);
                if (is_wp_error($revision)) { throw new \OhMyLMS\Assessment\ErrorException($revision); }
                return $revision;
            });
        } catch (\OhMyLMS\Assessment\ErrorException $error) {
            return $error->error;
        }
        $seed = random_int(1, PHP_INT_MAX);
        $used = array_filter(array_map('intval', array_column($revision['slots'], 'question_id')));
        $questions = [];
        foreach ($revision['slots'] as $slot) {
            $version_id = (int) $slot['version_id'] ?: Pools::draw($slot['pool'], $seed, $used, 0);
            $snapshot = $version_id ? VersionPublisher::snapshot($version_id) : null;
            if (!$snapshot) { continue; }
            $used[] = $snapshot->get_id();
            $token = Inline::sign($version_id, $quiz_id);
            $scope = Inline::scope($token);
            $ids = array_map(static function ($option) { return (int) $option['id']; }, $snapshot->get_questions());
            $view = $snapshot->student_view($ids, AttemptItems::tokens($scope, $ids), ['definitions' => $ids], AttemptItems::tokens($scope, $ids, 'd'));
            $view['token'] = $token;
            $view['marks'] = (float) $slot['marks'];
            $view['section'] = (string) $slot['section'];
            $view['page'] = (int) $slot['page'];
            $view['drawn_from_pool'] = !(int) $slot['version_id'];
            $questions[] = $view;
        }
        return rest_ensure_response(['revision' => ['id' => (int) $revision['id'], 'number' => (int) $revision['revision_no'], 'total_marks' => (float) $revision['total_marks']], 'preview' => true, 'questions' => $questions]);
    }

    /** Grade one previewed answer; nothing is stored. */
    public function grade(WP_REST_Request $request) {
        $claims = Inline::verify((string) $request['token']);
        if (!$claims || $claims['lesson_id'] !== (int) $request['id']) { return new WP_Error('ohmylms_preview_token', __('This preview has expired. Reload it.', 'ohmylms'), ['status' => 400]); }
        $snapshot = VersionPublisher::snapshot($claims['version_id']);
        if (!$snapshot) { return new WP_Error('ohmylms_preview_missing', __('Question unavailable.', 'ohmylms'), ['status' => 410]); }
        $item = ['id' => 0, 'version_id' => $claims['version_id']];
        $response = $request['response'] ?? [];
        $grade = Grader::grade($snapshot, AttemptItems::untokenize(Inline::scope((string) $request['token']), $item, is_array($response) ? $response : [$response]));
        if (is_wp_error($grade)) { return $grade; }
        return rest_ensure_response(['correct' => $grade['correct'], 'fraction' => $grade['fraction'], 'pending_review' => $grade['pending'], 'parts' => $grade['parts'], 'recorded' => false]);
    }
}
