<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Curriculum\Access;
use OhMyLMS\Curriculum\SkillMappings;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

defined('ABSPATH') || exit;

/**
 * Explicit curriculum-skill to shared-skill mappings. Administrators only: a mapping changes
 * what every learner's combined skill view shows. Like the skill catalogue, changes need the
 * Skills add-on, while reading stays available for history.
 */
class SkillMappingController extends RestController {
    public function register_routes() {
        register_rest_route($this->namespace, '/skill-mappings', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'index'], 'permission_callback' => [Access::class, 'admin']],
            ['methods' => 'PUT', 'callback' => [$this, 'save'], 'permission_callback' => [$this, 'writer']],
            ['methods' => WP_REST_Server::DELETABLE, 'callback' => [$this, 'remove'], 'permission_callback' => [$this, 'writer']],
        ]);
    }

    public function writer() {
        $allowed = Access::admin();
        if (is_wp_error($allowed)) { return $allowed; }
        return \OhMyLMS\Extensions\Addons::enabled('skills') ? true : new WP_Error('ohmylms_skills_disabled', __('Enable the Skills add-on to manage skill mappings.', 'ohmylms'), ['status' => 403]);
    }

    public function index(WP_REST_Request $request) {
        $skill = (int) $request->get_param('skill_id');
        if ($skill) { return rest_ensure_response(SkillMappings::for_skill($skill)); }
        return rest_ensure_response(['mappings' => array_map(static function ($row) { return ['specific_id' => (int) $row['specific_term_id'], 'shared_id' => (int) $row['shared_term_id'], 'relation' => $row['relation'], 'note' => (string) $row['note']]; }, SkillMappings::all())]);
    }

    public function save(WP_REST_Request $request) {
        $mapping = SkillMappings::save((int) $request->get_param('specific_id'), (int) $request->get_param('shared_id'), (string) ($request->get_param('relation') ?: 'equivalent'), (string) $request->get_param('note'));
        return is_wp_error($mapping) ? $mapping : rest_ensure_response(['mapping' => $mapping, 'skill_mappings' => SkillMappings::for_skill((int) $request->get_param('specific_id'))]);
    }

    public function remove(WP_REST_Request $request) {
        SkillMappings::remove((int) $request->get_param('specific_id'), (int) $request->get_param('shared_id'));
        return rest_ensure_response(['removed' => true, 'skill_mappings' => SkillMappings::for_skill((int) $request->get_param('specific_id'))]);
    }
}
