<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Learning\CourseProgram;
use OhMyLMS\Learning\CompletionPolicy;
use OhMyLMS\Learning\Schema;
use OhMyLMS\Learning\LearningPath;
use OhMyLMS\Skills\Evidence;
use OhMyLMS\Skills\Taxonomy;
use OhMyLMS\QuestionBank\AccessPolicy;
use WP_REST_Server;

defined('ABSPATH') || exit;

class LearningController extends RestController {
    public function register_routes() {
        $base = '/courses/(?P<id>\d+)/learning';
        register_rest_route($this->namespace, $base, [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'show'], 'permission_callback' => [$this, 'author']],
            ['methods' => WP_REST_Server::EDITABLE, 'callback' => [$this, 'save'], 'permission_callback' => [$this, 'author']],
        ]);
        foreach (['publish', 'preview'] as $action) {
            register_rest_route($this->namespace, $base . '/' . $action, ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, $action], 'permission_callback' => [$this, 'author']]);
        }
        foreach (['resources', 'report'] as $action) {
            register_rest_route($this->namespace, $base . '/' . $action, ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, $action], 'permission_callback' => [$this, 'author']]);
        }
        register_rest_route($this->namespace, $base . '/progress', ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'progress'], 'permission_callback' => [$this, 'learner']]);
        register_rest_route($this->namespace, $base . '/activities/(?P<placement>[0-9a-f-]{36})/complete', ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'complete'], 'permission_callback' => [$this, 'learner']]);
    }

    public function author($request) {
        if (!Schema::ready()) { return CourseProgram::error(__('Learning storage is unavailable.', 'ohmylms'), 503); }
        return AccessPolicy::check(get_post_type((int) $request['id']) === OHMYLMS_COURSE_CPT && current_user_can('edit_post', (int) $request['id']));
    }

    public function learner($request) {
        return AccessPolicy::check(is_user_logged_in() && get_post_status((int) $request['id']) === 'publish' && CourseProgram::enrollment(get_current_user_id(), (int) $request['id']), __('An available course and enrollment are required.', 'ohmylms'));
    }

    public function show($request) {
        $data = CourseProgram::editor((int) $request['id']);
        foreach ($data['draft']['items'] as &$item) {
            $term = $item['type'] === 'practice' ? get_term($item['content_id'], Taxonomy::NAME) : null;
            $item['name'] = $term && !is_wp_error($term) ? $term->name : get_the_title($item['content_id']);
        }
        unset($item);
        $data['chapters'] = array_map(static function ($chapter) { return ['id' => (int) $chapter['id'], 'name' => get_the_title($chapter['id'])]; }, (array) ohmylms_get_course($request['id'])->get_chapters());
        $data['readiness'] = CourseProgram::readiness($data['draft']);
        return rest_ensure_response($data);
    }

    public function save($request) {
        return CourseProgram::save((int) $request['id'], (array) $request->get_json_params());
    }

    public function publish($request) {
        $data = (array) $request->get_json_params();
        return CourseProgram::save((int) $request['id'], $data, true, !empty($data['apply_existing']));
    }

    public function preview($request) {
        $program = CourseProgram::normalize((int) $request['id'], (array) $request->get_json_params());
        if (is_wp_error($program)) { return $program; }
        $skills = []; $activities = []; $assessments = [];
        foreach ($program['outcomes'] as $outcome) { $skills[$outcome['term_id']] = ['level' => $outcome['target']]; }
        foreach ($program['items'] as $item) { $activities[$item['content_id']] = true; $assessments[$item['content_id']] = ['passed' => true]; }
        return rest_ensure_response([
            'new_learner' => CompletionPolicy::evaluate($program, [], [], []),
            'prior_skills' => CompletionPolicy::evaluate($program, [], $program['recognize_prior'] ? $skills : [], []),
            'all_requirements_met' => CompletionPolicy::evaluate($program, $activities, $skills, $assessments),
            'readiness' => CourseProgram::readiness($program),
        ]);
    }

    public function resources($request) {
        $type = $request['type'] === 'quiz' ? OHMYLMS_QUIZ_CPT : OHMYLMS_LESSON_CPT;
        $query = new \WP_Query(['post_type' => $type, 'post_status' => ['publish', 'draft'], 's' => sanitize_text_field((string) $request['search']), 'posts_per_page' => 20, 'paged' => max(1, (int) $request['page']), 'orderby' => 'title', 'order' => 'ASC', 'author' => current_user_can('edit_others_posts') ? '' : get_current_user_id()]);
        $items = [];
        foreach ($query->posts as $post) {
            if (!current_user_can('edit_post', $post->ID)) { continue; }
            $items[] = ['id' => $post->ID, 'name' => $post->post_title, 'status' => $post->post_status];
        }
        return rest_ensure_response(['items' => $items, 'pages' => (int) $query->max_num_pages]);
    }

    public function progress($request) {
        Evidence::process(50);
        $state = CompletionPolicy::award(get_current_user_id(), (int) $request['id']);
        if (!$state) { $state = CompletionPolicy::status(get_current_user_id(), (int) $request['id']); }
        return is_wp_error($state) ? $state : rest_ensure_response($state + ['next_action' => LearningPath::next($state)]);
    }

    public function complete($request) {
        global $wpdb;
        $course = (int) $request['id']; $student = get_current_user_id();
        $state = CompletionPolicy::status($student, $course);
        if (is_wp_error($state)) { return $state; }
        foreach ($state['program']['items'] as $item) {
            if ($item['id'] !== $request['placement']) { continue; }
            if ($item['type'] !== 'lesson' || !LearningPath::available($item, $student, $course)) { return AccessPolicy::denied(__('This activity cannot be marked complete here.', 'ohmylms')); }
            $table = $wpdb->prefix . 'ohmylms_user_progress';
            $key = 'ohmylms_activity_' . $state['enrollment_id'];
            if (!$wpdb->get_var($wpdb->prepare('SELECT GET_LOCK(%s, 3)', $key))) { return CourseProgram::error(__('Please retry completing the lesson.', 'ohmylms'), 409); }
            try {
                $existing = $wpdb->get_var($wpdb->prepare("SELECT id FROM $table WHERE enrollment_id=%d AND content_id=%d AND status='completed'", $state['enrollment_id'], $item['content_id']));
                if (!$existing) {
                    if (!$wpdb->insert($table, ['enrollment_id' => $state['enrollment_id'], 'content_id' => $item['content_id'], 'content_type' => ohmylms_get_lesson($item['content_id'])->get_type(), 'status' => 'completed', 'start_date' => current_time('mysql')])) { return CourseProgram::error(__('Could not save lesson completion.', 'ohmylms'), 500); }
                    \OhMyLMS\DataStores\StudentStore::clear_learning_cache($student, $course);
                    do_action('ohmylms_lesson_completed', $item['content_id'], $course, $student);
                }
                $result = CompletionPolicy::award($student, $course);
                return is_wp_error($result) ? $result : rest_ensure_response($result + ['next_action' => LearningPath::next($result)]);
            } finally { $wpdb->get_var($wpdb->prepare('SELECT RELEASE_LOCK(%s)', $key)); }
        }
        return CourseProgram::error(__('Learning activity not found.', 'ohmylms'), 404);
    }

    public function report($request) {
        global $wpdb;
        $course = (int) $request['id']; $page = max(1, (int) $request['page']);
        $rows = $wpdb->get_results($wpdb->prepare("SELECT user_id FROM {$wpdb->prefix}ohmylms_user_enrollment WHERE course_id=%d AND status='enrolled' ORDER BY id LIMIT 25 OFFSET %d", $course, ($page - 1) * 25), ARRAY_A);
        $result = [];
        foreach ($rows as $row) {
            $state = CompletionPolicy::status($row['user_id'], $course);
            $user = get_userdata($row['user_id']);
            $result[] = ['student_id' => (int) $row['user_id'], 'name' => $user ? $user->display_name : '', 'progress' => is_wp_error($state) ? null : $state];
        }
        return rest_ensure_response(['students' => $result, 'page' => $page, 'total' => (int) $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM {$wpdb->prefix}ohmylms_user_enrollment WHERE course_id=%d AND status='enrolled'", $course))]);
    }
}
