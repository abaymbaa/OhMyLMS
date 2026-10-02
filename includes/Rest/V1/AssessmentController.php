<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Assessment\Migration;
use OhMyLMS\Assessment\RevisionPublisher;
use OhMyLMS\Assessment\Schema;
use OhMyLMS\QuestionBank\AccessPolicy;
use OhMyLMS\Utility\Transaction;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

defined('ABSPATH') || exit;

/**
 * Versioned assessment endpoints: revisions/publishing and the migration status.
 * Learner attempt endpoints (autosave, resume) are registered by AttemptController.
 */
class AssessmentController extends RestController {
    public function register_routes() {
        register_rest_route($this->namespace, '/assessment/migration', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'migration_status'], 'permission_callback' => [$this, 'admin_permission']],
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'migration_run'], 'permission_callback' => [$this, 'admin_permission']],
        ]);
        register_rest_route($this->namespace, '/quiz/(?P<id>[\d]+)/assessment-settings', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'settings'], 'permission_callback' => [$this, 'quiz_permission']],
            ['methods' => WP_REST_Server::EDITABLE, 'callback' => [$this, 'save_settings'], 'permission_callback' => [$this, 'quiz_permission']],
        ]);
        register_rest_route($this->namespace, '/quiz/(?P<id>[\d]+)/pools', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'pools'], 'permission_callback' => [$this, 'quiz_permission']],
            ['methods' => WP_REST_Server::EDITABLE, 'callback' => [$this, 'save_pools'], 'permission_callback' => [$this, 'quiz_permission']],
        ]);
        register_rest_route($this->namespace, '/quiz/(?P<id>[\d]+)/revisions', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'revisions'], 'permission_callback' => [$this, 'quiz_permission']],
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'publish'], 'permission_callback' => [$this, 'quiz_permission']],
        ]);
    }

    public function admin_permission() {
        return AccessPolicy::check(current_user_can('manage_options'));
    }

    public function quiz_permission(WP_REST_Request $request) {
        $id = (int) $request['id'];
        if (get_post_type($id) !== OHMYLMS_QUIZ_CPT) { return new WP_Error('ohmylms_rest_invalid_quiz_id', __('Invalid ID.', 'ohmylms'), ['status' => 404]); }
        return AccessPolicy::check(AccessPolicy::can_edit_quiz($id));
    }

    public function settings(WP_REST_Request $request) {
        return rest_ensure_response(['settings' => \OhMyLMS\Assessment\AssessmentSettings::get((int) $request['id'])]);
    }

    public function save_settings(WP_REST_Request $request) {
        $saved = \OhMyLMS\Assessment\AssessmentSettings::save((int) $request['id'], (array) $request->get_json_params());
        return is_wp_error($saved) ? $saved : rest_ensure_response(['settings' => $saved]);
    }

    public function pools(WP_REST_Request $request) {
        return rest_ensure_response(['pools' => \OhMyLMS\Assessment\Pools::rules((int) $request['id'])]);
    }

    public function save_pools(WP_REST_Request $request) {
        $saved = \OhMyLMS\Assessment\Pools::save((int) $request['id'], (array) ($request['pools'] ?? []));
        return is_wp_error($saved) ? $saved : rest_ensure_response(['pools' => $saved]);
    }

    public function migration_status() {
        return rest_ensure_response(['schema' => get_option(Schema::OPTION), 'state' => Migration::state(), 'inventory' => Migration::inventory()]);
    }

    public function migration_run(WP_REST_Request $request) {
        $state = $request['retry'] ? Migration::retry_failed() : Migration::run_all((int) ($request['batches'] ?: 20));
        return rest_ensure_response(['state' => $state, 'inventory' => Migration::inventory()]);
    }

    public function revisions(WP_REST_Request $request) {
        global $wpdb;
        $rows = $wpdb->get_results($wpdb->prepare("SELECT id, revision_no, kind, total_marks, status, created_by, created_at FROM " . Schema::table('quiz_revisions') . " WHERE quiz_id=%d ORDER BY revision_no DESC", (int) $request['id']), ARRAY_A);
        foreach ($rows as &$row) {
            $row['attempts'] = (int) $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM " . Schema::table('attempt_context') . " WHERE revision_id=%d", (int) $row['id']));
        }
        return rest_ensure_response(['revisions' => $rows]);
    }

    /** Validate the quiz and publish its current content as a revision. */
    public function publish(WP_REST_Request $request) {
        try {
            $revision = Transaction::run(static function () use ($request) {
                $revision = RevisionPublisher::publish((int) $request['id']);
                if (is_wp_error($revision)) { throw new \OhMyLMS\Assessment\ErrorException($revision); }
                return $revision;
            });
        } catch (\OhMyLMS\Assessment\ErrorException $error) {
            return $error->error;
        } catch (\Throwable $error) {
            return new WP_Error('ohmylms_quiz_storage', __('The quiz could not be published.', 'ohmylms'), ['status' => 500]);
        }
        return rest_ensure_response(['revision' => $revision]);
    }
}
