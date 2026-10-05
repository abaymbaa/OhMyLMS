<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Curriculum\Access;
use OhMyLMS\Curriculum\Items;
use OhMyLMS\Curriculum\Links;
use OhMyLMS\Curriculum\Schema;
use OhMyLMS\Tracks\Tracks;
use WP_REST_Request;
use WP_REST_Server;

defined('ABSPATH') || exit;

/** Learning Track administration: create, describe, edit members, publish and delete. */
class TrackController extends RestController {
    public function register_routes() {
        $admin = [Access::class, 'admin'];
        register_rest_route($this->namespace, '/tracks', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'index'], 'permission_callback' => $admin],
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'create'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, '/tracks/targets', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'targets'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, '/tracks/(?P<id>\d+)', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'show'], 'permission_callback' => $admin],
            ['methods' => 'PUT,PATCH', 'callback' => [$this, 'update'], 'permission_callback' => $admin],
            ['methods' => WP_REST_Server::DELETABLE, 'callback' => [$this, 'delete'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, '/tracks/(?P<id>\d+)/items', [
            ['methods' => 'PUT', 'callback' => [$this, 'set_members'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, '/tracks/(?P<id>\d+)/publish', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'publish'], 'permission_callback' => $admin],
        ]);
    }

    private function detail($track_id) {
        $track = Tracks::get($track_id);
        return $track ? ['track' => Tracks::describe($track), 'members' => Tracks::describe_members($track_id)] : null;
    }

    public function index() {
        return rest_ensure_response(['tracks' => array_map([Tracks::class, 'describe'], Tracks::all()), 'limits' => ['max_members' => Tracks::MAX_MEMBERS, 'max_tracks' => Tracks::MAX_TRACKS]]);
    }

    public function create(WP_REST_Request $request) {
        $track = Tracks::create($request->get_params());
        if (is_wp_error($track)) { return $track; }
        $response = rest_ensure_response($this->detail((int) $track['id']));
        $response->set_status(201);
        return $response;
    }

    public function show(WP_REST_Request $request) {
        $detail = $this->detail((int) $request['id']);
        return $detail ? rest_ensure_response($detail) : Tracks::missing();
    }

    public function update(WP_REST_Request $request) {
        $params = $request->get_params();
        $track = Tracks::update((int) $request['id'], array_intersect_key($params, array_flip(['title', 'description'])), $params['expected_updated_at'] ?? null);
        return is_wp_error($track) ? $track : rest_ensure_response($this->detail((int) $track['id']));
    }

    public function set_members(WP_REST_Request $request) {
        $items = $request->get_param('items');
        if (!is_array($items)) { return Access::error('ohmylms_track_invalid', __('Send the ordered list of members.', 'ohmylms')); }
        $track = Tracks::set_members((int) $request['id'], $items, $request->get_param('expected_updated_at'));
        return is_wp_error($track) ? $track : rest_ensure_response($this->detail((int) $track['id']));
    }

    public function publish(WP_REST_Request $request) {
        $published = $request->has_param('published') ? rest_sanitize_boolean($request->get_param('published')) : true;
        $track = Tracks::set_status((int) $request['id'], $published);
        return is_wp_error($track) ? $track : rest_ensure_response($this->detail((int) $track['id']));
    }

    public function delete(WP_REST_Request $request) {
        $result = Tracks::delete((int) $request['id'], rest_sanitize_boolean($request->get_param('force')));
        return is_wp_error($result) ? $result : rest_ensure_response($result);
    }

    /** Courses or curriculum items an administrator can add to a track. */
    public function targets(WP_REST_Request $request) {
        global $wpdb;
        $type = (string) $request->get_param('type');
        $search = sanitize_text_field((string) $request->get_param('search'));
        if ($type === 'course') { return rest_ensure_response(Links::targets('course', $search)); }
        if ($type !== 'curriculum') { return Access::error('ohmylms_track_invalid', __('Choose courses or curriculum items.', 'ohmylms')); }
        $like = '%' . $wpdb->esc_like($search) . '%';
        $rows = $wpdb->get_results($wpdb->prepare('SELECT * FROM ' . Items::table() . ' WHERE name LIKE %s OR code LIKE %s ORDER BY name LIMIT 20', $like, $like), ARRAY_A) ?: [];
        return rest_ensure_response(array_map(static function ($row) { return ['id' => (int) $row['id'], 'title' => $row['name'], 'item_type' => $row['item_type'], 'code' => $row['code'], 'version' => $row['version'], 'path' => Items::path_names((int) $row['id'], false)]; }, $rows));
    }
}
