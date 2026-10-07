<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Curriculum\Access;
use OhMyLMS\Curriculum\Items;
use OhMyLMS\Curriculum\Syllabus;
use OhMyLMS\Curriculum\SyllabusCourse;
use OhMyLMS\Curriculum\SyllabusSettings;
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
        register_rest_route($this->namespace, $base . '/settings', [
            ['methods' => 'PUT,PATCH', 'callback' => [$this, 'settings'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, $base . '/publish', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'publish'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, $base . '/course', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'course'], 'permission_callback' => $admin],
        ]);
        register_rest_route($this->namespace, $base . '/course/skills', [
            ['methods' => 'PUT,PATCH', 'callback' => [$this, 'course_skills'], 'permission_callback' => $admin],
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

    /**
     * The fresh outline plus the tree, merged with anything the operation wants to report. A syllabus is also a
     * course, so a change first brings the course up to date; if the course cannot follow, the change still stands
     * and the response says so in `course_error`.
     */
    private function outline($syllabus_id, array $extra = []) {
        $synced = SyllabusCourse::sync_quietly($syllabus_id);
        $outline = Syllabus::outline($syllabus_id);
        if (is_wp_error($outline)) { return $outline; }
        $extra += ['course' => SyllabusCourse::summary($syllabus_id), 'settings' => SyllabusSettings::get($syllabus_id)];
        if (is_wp_error($synced)) { $extra['course_error'] = $synced->get_error_message(); }
        return rest_ensure_response($extra + SyllabusCourse::decorate($outline, $syllabus_id) + ['items' => Items::tree()]);
    }

    public function show(WP_REST_Request $request) {
        $outline = Syllabus::outline((int) $request['id']);
        return is_wp_error($outline) ? $outline : rest_ensure_response(SyllabusCourse::decorate($outline, (int) $request['id']) + ['course' => SyllabusCourse::summary((int) $request['id']), 'settings' => SyllabusSettings::get((int) $request['id'])]);
    }

    public function settings(WP_REST_Request $request) {
        $result = SyllabusSettings::save((int) $request['id'], (array) $request->get_json_params());
        return is_wp_error($result) ? $result : $this->outline((int) $request['id']);
    }

    public function publish(WP_REST_Request $request) {
        $result = SyllabusSettings::publish((int) $request['id']);
        return is_wp_error($result) ? $result : $this->outline((int) $request['id']);
    }

    /** Give the syllabus its course if it has none, and make the course match the syllabus. */
    public function course(WP_REST_Request $request) {
        $syllabus = (int) $request['id'];
        $course = SyllabusCourse::ensure($syllabus);
        return is_wp_error($course) ? $course : $this->outline($syllabus);
    }

    /** Which skills the course requires, and at what target: `skills` is `[{term_id, required, target}]`. */
    public function course_skills(WP_REST_Request $request) {
        $skills = $request->get_param('skills');
        if (!is_array($skills)) { return Access::error('ohmylms_syllabus_invalid', __('Send the skills to change.', 'ohmylms'), 400); }
        $changes = array_map(static function ($skill) {
            if (!is_array($skill)) { return $skill; }
            $change = ['term_id' => (int) ($skill['term_id'] ?? 0)];
            if (array_key_exists('required', $skill)) { $change['required'] = rest_sanitize_boolean($skill['required']); }
            if (isset($skill['target'])) { $change['target'] = (string) $skill['target']; }
            return $change;
        }, $skills);
        $result = SyllabusCourse::set_requirements((int) $request['id'], $changes);
        return is_wp_error($result) ? $result : $this->outline((int) $request['id']);
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
