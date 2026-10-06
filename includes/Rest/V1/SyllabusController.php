<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Curriculum\Access;
use OhMyLMS\Curriculum\Items;
use OhMyLMS\Curriculum\Syllabus;
use WP_REST_Request;
use WP_REST_Server;

defined('ABSPATH') || exit;

/**
 * A syllabus's skill groups and skills, and importing them from a CSV the browser has already read
 * and mapped. Administrators only, like the rest of curriculum administration. Every write answers
 * with the syllabus's fresh outline and the item tree (for the counts shown on the rows).
 */
class SyllabusController extends RestController {
    public function register_routes() {
        $admin = [Access::class, 'admin'];
        $base = '/curriculum/items/(?P<id>\d+)/syllabus';
        register_rest_route($this->namespace, $base, [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'show'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, $base . '/import', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'import'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, $base . '/groups', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'add_group'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, $base . '/groups/(?P<group>\d+)', [
            ['methods' => 'PUT,PATCH', 'callback' => [$this, 'update_group'], 'permission_callback' => $admin],
            ['methods' => WP_REST_Server::DELETABLE, 'callback' => [$this, 'delete_group'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, $base . '/groups/(?P<group>\d+)/move', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'move_group'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, $base . '/groups/(?P<group>\d+)/skills', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'add_skill'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, $base . '/groups/(?P<group>\d+)/skills/(?P<term>\d+)', [
            ['methods' => WP_REST_Server::DELETABLE, 'callback' => [$this, 'remove_skill'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, $base . '/groups/(?P<group>\d+)/skills/(?P<term>\d+)/move', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'move_skill'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, $base . '/skills/(?P<term>\d+)', [
            ['methods' => 'PUT,PATCH', 'callback' => [$this, 'update_skill'], 'permission_callback' => $admin],
        ]);
    }

    /** The fresh outline plus the tree, merged with anything the operation wants to report. */
    private function outline($syllabus_id, array $extra = []) {
        $outline = Syllabus::outline($syllabus_id);
        if (is_wp_error($outline)) { return $outline; }
        return rest_ensure_response($extra + $outline + ['items' => Items::tree()]);
    }

    public function show(WP_REST_Request $request) {
        $outline = Syllabus::outline((int) $request['id']);
        return is_wp_error($outline) ? $outline : rest_ensure_response($outline);
    }

    public function import(WP_REST_Request $request) {
        $rows = $request->get_param('rows');
        if (!is_array($rows)) { return Access::error('ohmylms_syllabus_invalid', __('Send the rows to import.', 'ohmylms')); }
        $report = Syllabus::import((int) $request['id'], $rows, rest_sanitize_boolean($request->get_param('dry_run')));
        if (is_wp_error($report)) { return $report; }
        // A dry run changes nothing, so only an applied import needs the new outline.
        return $report['applied'] ? $this->outline((int) $request['id'], ['report' => $report]) : rest_ensure_response(['report' => $report]);
    }

    public function add_group(WP_REST_Request $request) {
        $result = Syllabus::add_group((int) $request['id'], $request->get_params());
        return is_wp_error($result) ? $result : $this->created($this->outline((int) $request['id'], ['group_id' => (int) $result]));
    }

    public function update_group(WP_REST_Request $request) {
        $result = Syllabus::update_group((int) $request['id'], (int) $request['group'], $request->get_params());
        return is_wp_error($result) ? $result : $this->outline((int) $request['id']);
    }

    public function move_group(WP_REST_Request $request) {
        $result = Syllabus::move_group((int) $request['id'], (int) $request['group'], (int) $request->get_param('item_id'), $request->get_param('position'));
        return is_wp_error($result) ? $result : $this->outline((int) $request['id']);
    }

    public function delete_group(WP_REST_Request $request) {
        $result = Syllabus::delete_group((int) $request['id'], (int) $request['group'], rest_sanitize_boolean($request->get_param('confirm')));
        return is_wp_error($result) ? $result : $this->outline((int) $request['id'], $result);
    }

    public function add_skill(WP_REST_Request $request) {
        $syllabus = (int) $request['id'];
        $group = (int) $request['group'];
        if ((int) $request->get_param('term_id') > 0) {
            $result = Syllabus::add_skill($syllabus, $group, (int) $request->get_param('term_id'));
            return is_wp_error($result) ? $result : $this->created($this->outline($syllabus));
        }
        $result = Syllabus::create_skill($syllabus, $group, $request->get_params());
        return is_wp_error($result) ? $result : $this->created($this->outline($syllabus, ['skill' => $result]));
    }

    public function update_skill(WP_REST_Request $request) {
        $result = Syllabus::update_skill((int) $request['id'], (int) $request['term'], $request->get_params());
        return is_wp_error($result) ? $result : $this->outline((int) $request['id']);
    }

    public function remove_skill(WP_REST_Request $request) {
        $result = Syllabus::remove_skill((int) $request['id'], (int) $request['group'], (int) $request['term']);
        return is_wp_error($result) ? $result : $this->outline((int) $request['id']);
    }

    public function move_skill(WP_REST_Request $request) {
        $result = Syllabus::move_skill((int) $request['id'], (int) $request['group'], (int) $request['term'], (int) $request->get_param('group_id'), $request->get_param('position'));
        return is_wp_error($result) ? $result : $this->outline((int) $request['id']);
    }

    private function created($response) {
        if (!is_wp_error($response)) { $response->set_status(201); }
        return $response;
    }
}
