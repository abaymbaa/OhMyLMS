<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Assessment\Schema;
use OhMyLMS\QuestionBank\AccessPolicy;
use OhMyLMS\QuestionBank\DraftWriter;
use OhMyLMS\QuestionBank\SkillMap;
use OhMyLMS\Skills\Taxonomy;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

defined('ABSPATH') || exit;

/**
 * Learning-skill catalogue: skills, prerequisites (acyclic), lesson links and
 * question skill maps. Profile "skills" on student accounts are unrelated.
 */
class SkillController extends RestController {
    public function register_routes() {
        register_rest_route($this->namespace, '/skills', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'index'], 'permission_callback' => [$this, 'author_permission']],
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'create'], 'permission_callback' => [$this, 'author_permission']],
        ]);
        register_rest_route($this->namespace, '/skills/(?P<id>[\d]+)', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'show'], 'permission_callback' => [$this, 'author_permission']],
            ['methods' => WP_REST_Server::EDITABLE, 'callback' => [$this, 'update'], 'permission_callback' => [$this, 'author_permission']],
            ['methods' => WP_REST_Server::DELETABLE, 'callback' => [$this, 'delete'], 'permission_callback' => [$this, 'admin_permission']],
        ]);
        register_rest_route($this->namespace, '/skills/(?P<id>[\d]+)/lessons', [
            ['methods' => WP_REST_Server::EDITABLE, 'callback' => [$this, 'link_lessons'], 'permission_callback' => [$this, 'author_permission']],
        ]);
        register_rest_route($this->namespace, '/question/(?P<id>[\d]+)/skills', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'question_skills'], 'permission_callback' => [$this, 'question_permission']],
            ['methods' => WP_REST_Server::EDITABLE, 'callback' => [$this, 'save_question_skills'], 'permission_callback' => [$this, 'question_permission']],
        ]);
    }

    public function author_permission() {
        if (!Schema::ready()) { return new WP_Error('ohmylms_skills_unavailable', __('Skills are not installed yet.', 'ohmylms'), ['status' => 503]); }
        return AccessPolicy::check(AccessPolicy::can_author());
    }
    public function admin_permission() { return AccessPolicy::check(current_user_can('manage_options')); }
    public function question_permission(WP_REST_Request $request) {
        $id = (int) $request['id'];
        if (get_post_type($id) !== OHMYLMS_QUESTION_CPT) { return new WP_Error('ohmylms_rest_invalid_question_id', __('Invalid ID.', 'ohmylms'), ['status' => 404]); }
        return AccessPolicy::check($request->get_method() === 'GET' ? AccessPolicy::can_use_question($id) : AccessPolicy::can_edit_question($id));
    }

    public function index(WP_REST_Request $request) {
        $terms = get_terms(['taxonomy' => Taxonomy::NAME, 'hide_empty' => false, 'orderby' => 'name', 'search' => (string) $request['search']]);
        $skills = [];
        foreach (is_array($terms) ? $terms : [] as $term) {
            $skill = Taxonomy::describe($term);
            $skill['questions'] = (int) $term->count;
            $skills[] = $skill;
        }
        return rest_ensure_response(['skills' => $skills]);
    }

    public function show(WP_REST_Request $request) {
        $skill = Taxonomy::describe((int) $request['id']);
        return $skill ? rest_ensure_response($skill) : new WP_Error('ohmylms_skill_missing', __('Skill not found.', 'ohmylms'), ['status' => 404]);
    }

    public function create(WP_REST_Request $request) {
        $name = sanitize_text_field((string) $request['name']);
        if ($name === '') { return new WP_Error('ohmylms_skill_invalid', __('A skill name is required.', 'ohmylms'), ['status' => 400]); }
        $parent = (int) $request['parent'];
        if ($parent && !term_exists($parent, Taxonomy::NAME)) { return new WP_Error('ohmylms_skill_missing', __('Parent skill not found.', 'ohmylms'), ['status' => 400]); }
        $term = wp_insert_term($name, Taxonomy::NAME, ['description' => sanitize_textarea_field((string) $request['description']), 'parent' => $parent]);
        if (is_wp_error($term)) { $term->add_data(['status' => 400]); return $term; }
        $id = (int) $term['term_id'];
        Taxonomy::uuid($id);
        $result = $this->apply_meta($id, $request);
        if (is_wp_error($result)) { wp_delete_term($id, Taxonomy::NAME); return $result; }
        $response = rest_ensure_response(Taxonomy::describe($id));
        $response->set_status(201);
        return $response;
    }

    public function update(WP_REST_Request $request) {
        $id = (int) $request['id'];
        if (!term_exists($id, Taxonomy::NAME)) { return new WP_Error('ohmylms_skill_missing', __('Skill not found.', 'ohmylms'), ['status' => 404]); }
        $args = [];
        if (isset($request['name'])) { $args['name'] = sanitize_text_field((string) $request['name']); }
        if (isset($request['description'])) { $args['description'] = sanitize_textarea_field((string) $request['description']); }
        if (isset($request['parent'])) {
            $parent = (int) $request['parent'];
            if ($parent === $id || ($parent && term_is_ancestor_of($id, $parent, Taxonomy::NAME))) { return new WP_Error('ohmylms_skill_cycle', __('A skill cannot be nested under itself.', 'ohmylms'), ['status' => 400]); }
            $args['parent'] = $parent;
        }
        $result = $this->apply_meta($id, $request);
        if (is_wp_error($result)) { return $result; }
        if ($args) {
            $updated = wp_update_term($id, Taxonomy::NAME, $args);
            if (is_wp_error($updated)) { $updated->add_data(['status' => 400]); return $updated; }
        }
        return rest_ensure_response(Taxonomy::describe($id));
    }

    private function apply_meta($id, WP_REST_Request $request) {
        if (isset($request['code'])) { update_term_meta($id, '_ohmylms_skill_code', mb_substr(sanitize_text_field((string) $request['code']), 0, 40)); }
        if (isset($request['prerequisites'])) {
            $result = Taxonomy::set_prerequisites($id, (array) $request['prerequisites']);
            if (is_wp_error($result)) { return $result; }
        }
        return true;
    }

    /** Skills with recorded evidence are kept; a skill in use can only be removed by an administrator with force. */
    public function delete(WP_REST_Request $request) {
        global $wpdb;
        $id = (int) $request['id'];
        $evidence = (int) $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM " . Schema::table('skill_evidence') . " WHERE term_id=%d", $id));
        $mapped = (int) $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM " . Schema::table('qb_version_skills') . " WHERE term_id=%d", $id));
        if (($evidence || $mapped) && !rest_sanitize_boolean($request['force'])) {
            return new WP_Error('ohmylms_skill_in_use', __('This skill has learner evidence or frozen question mappings. Rename it instead, or pass force to delete.', 'ohmylms'), ['status' => 409, 'evidence' => $evidence, 'mappings' => $mapped]);
        }
        foreach (get_terms(['taxonomy' => Taxonomy::NAME, 'hide_empty' => false, 'fields' => 'ids']) as $other) {
            if (in_array($id, Taxonomy::prerequisites($other), true)) { update_term_meta($other, '_ohmylms_prerequisites', array_values(array_diff(Taxonomy::prerequisites($other), [$id]))); }
        }
        $deleted = wp_delete_term($id, Taxonomy::NAME);
        return is_wp_error($deleted) ? $deleted : rest_ensure_response(['id' => $id, 'deleted' => true]);
    }

    /** Replace the set of lessons linked to a skill (only lessons the user may edit change). */
    public function link_lessons(WP_REST_Request $request) {
        $id = (int) $request['id'];
        if (!term_exists($id, Taxonomy::NAME)) { return new WP_Error('ohmylms_skill_missing', __('Skill not found.', 'ohmylms'), ['status' => 404]); }
        $wanted = array_values(array_unique(array_map('intval', (array) $request['lesson_ids'])));
        foreach ($wanted as $lesson_id) {
            if (get_post_type($lesson_id) !== OHMYLMS_LESSON_CPT || !current_user_can('edit_post', $lesson_id)) { return AccessPolicy::denied(__('You cannot link one of these lessons.', 'ohmylms')); }
        }
        foreach (Taxonomy::linked_posts($id, OHMYLMS_LESSON_CPT) as $lesson_id) {
            if (!in_array($lesson_id, $wanted, true) && current_user_can('edit_post', $lesson_id)) { wp_remove_object_terms($lesson_id, $id, Taxonomy::NAME); }
        }
        foreach ($wanted as $lesson_id) { wp_add_object_terms($lesson_id, $id, Taxonomy::NAME); }
        return rest_ensure_response(Taxonomy::describe($id));
    }

    public function question_skills(WP_REST_Request $request) {
        return rest_ensure_response(['skill_map' => SkillMap::current((int) $request['id'])]);
    }

    /** Save the question's part-level skill map through the versioning writer. */
    public function save_question_skills(WP_REST_Request $request) {
        $saved = DraftWriter::save(['id' => (int) $request['id'], 'skills' => (array) $request['skill_map']]);
        return is_wp_error($saved) ? $saved : rest_ensure_response(['skill_map' => SkillMap::current((int) $request['id']), 'version_id' => $saved['version_id']]);
    }
}
