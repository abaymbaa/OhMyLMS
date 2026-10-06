<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Curriculum\Access;
use OhMyLMS\Curriculum\Items;
use OhMyLMS\Curriculum\Links;
use OhMyLMS\Curriculum\SkillMappings;
use WP_REST_Request;
use WP_REST_Server;

defined('ABSPATH') || exit;

/**
 * Curriculum administration: the item tree, moves, deletion and links to courses, skills,
 * question banks and quizzes/exams. Every route needs an administrator; the server validates
 * every parent, type and target again regardless of what the editor sends.
 */
class CurriculumController extends RestController {
    public function register_routes() {
        $admin = [Access::class, 'admin'];
        register_rest_route($this->namespace, '/curriculum/tree', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'tree'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, '/curriculum/items', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'create'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, '/curriculum/items/(?P<id>\d+)', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'show'], 'permission_callback' => $admin],
            ['methods' => 'PUT,PATCH', 'callback' => [$this, 'update'], 'permission_callback' => $admin],
            ['methods' => WP_REST_Server::DELETABLE, 'callback' => [$this, 'delete'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, '/curriculum/items/(?P<id>\d+)/move', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'move'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, '/curriculum/items/(?P<id>\d+)/links', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'add_link'], 'permission_callback' => $admin],
            ['methods' => WP_REST_Server::DELETABLE, 'callback' => [$this, 'remove_link'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, '/curriculum/link-targets', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'link_targets'], 'permission_callback' => $admin],
        ]);
    }

    private function payload(array $extra = []) {
        return rest_ensure_response($extra + ['items' => Items::tree()]);
    }

    public function tree() {
        return rest_ensure_response([
            'items' => Items::tree(),
            'types' => Items::types(),
            'link_types' => Links::TYPES,
            'limits' => ['max_depth' => Items::MAX_DEPTH, 'max_items' => Items::MAX_ITEMS],
        ]);
    }

    public function create(WP_REST_Request $request) {
        $item = Items::create($request->get_params());
        if (is_wp_error($item)) { return $item; }
        $response = $this->payload(['item' => Items::describe($item)]);
        $response->set_status(201);
        return $response;
    }

    public function show(WP_REST_Request $request) {
        $item = Items::get((int) $request['id']);
        if (!$item) { return Items::missing(); }
        $links = Links::for_item((int) $item['id']);
        $mappings = [];
        foreach ($links['skill'] as $skill) { $mappings[$skill['id']] = SkillMappings::for_skill($skill['id']); }
        return rest_ensure_response([
            'item' => Items::describe($item),
            'path' => Items::path_names((int) $item['id'], false),
            'links' => $links,
            'skill_mappings' => (object) $mappings,
            'dependents' => Items::dependents((int) $item['id']),
        ]);
    }

    public function update(WP_REST_Request $request) {
        $params = $request->get_params();
        $item = Items::update((int) $request['id'], array_intersect_key($params, array_flip(['name', 'item_type', 'description', 'code', 'version'])), $params['expected_updated_at'] ?? null);
        return is_wp_error($item) ? $item : $this->payload(['item' => Items::describe($item)]);
    }

    public function move(WP_REST_Request $request) {
        $params = $request->get_params();
        $item = Items::move((int) $request['id'], (int) ($params['parent_id'] ?? 0), isset($params['position']) && $params['position'] !== '' ? (int) $params['position'] : null);
        return is_wp_error($item) ? $item : $this->payload(['item' => Items::describe($item)]);
    }

    public function delete(WP_REST_Request $request) {
        $result = Items::delete((int) $request['id'], (string) $request->get_param('children'), rest_sanitize_boolean($request->get_param('confirm')));
        return is_wp_error($result) ? $result : $this->payload($result);
    }

    public function add_link(WP_REST_Request $request) {
        $result = Links::add((int) $request['id'], (string) $request->get_param('object_type'), (int) $request->get_param('object_id'));
        return is_wp_error($result) ? $result : $this->links_payload((int) $request['id']);
    }

    public function remove_link(WP_REST_Request $request) {
        $result = Links::remove((int) $request['id'], (string) $request->get_param('object_type'), (int) $request->get_param('object_id'));
        return is_wp_error($result) ? $result : $this->links_payload((int) $request['id']);
    }

    private function links_payload($item_id) {
        $links = Links::for_item($item_id);
        $mappings = [];
        foreach ($links['skill'] as $skill) { $mappings[$skill['id']] = SkillMappings::for_skill($skill['id']); }
        return $this->payload(['links' => $links, 'skill_mappings' => (object) $mappings]);
    }

    public function link_targets(WP_REST_Request $request) {
        $type = (string) $request->get_param('type');
        if (!Links::valid_type($type)) { return Access::error('ohmylms_link_invalid', __('Choose course, skill, question bank or quiz/exam content.', 'ohmylms')); }
        return rest_ensure_response(Links::targets($type, (string) $request->get_param('search'), array_filter(array_map('intval', explode(',', (string) $request->get_param('include'))))));
    }
}
