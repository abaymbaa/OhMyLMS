<?php
namespace OhMyLMS\Learning;

use OhMyLMS\Skills\Taxonomy;

defined('ABSPATH') || exit;

/**
 * Content Hub catalog. A grade, exam or subject (MATH0580, Digital SAT) is an ordinary course whose
 * learning program says which chapters it has, which skills sit in each chapter, and which lessons,
 * quizzes and assessments are attached to a chapter or to chosen skills.
 *
 * Nothing here stores a new kind of record: skills stay shared library terms, lessons stay reusable
 * posts, and the structure is the program draft. Learners only see it after an explicit publish, which
 * creates an immutable program version exactly as the course's Learning tab does.
 */
final class Catalog {
    const MODES = CourseProgram::MODES;

    public static function error($message, $status = 400, $code = 'ohmylms_catalog_invalid') {
        return new \WP_Error($code, $message, ['status' => $status]);
    }

    public static function can_edit($course_id) {
        return get_post_type((int) $course_id) === OHMYLMS_COURSE_CPT && current_user_can('edit_post', (int) $course_id);
    }

    public static function post_type($type) {
        return ['lesson' => OHMYLMS_LESSON_CPT, 'quiz' => OHMYLMS_QUIZ_CPT, 'assignment' => 'ohmylms-assignment'][$type] ?? '';
    }

    private static function title($id) {
        return html_entity_decode((string) get_the_title((int) $id), ENT_QUOTES, 'UTF-8');
    }

    /** The structure the editor works on: the draft, or the published program, or the course's defaults. */
    private static function draft($course_id) {
        return CourseProgram::editor((int) $course_id)['draft'];
    }

    // ---- Chapters (units) -------------------------------------------------------------------------------

    /** @return array<int, array{id:int,name:string}> */
    public static function chapters($course_id) {
        global $wpdb;
        $ids = $wpdb->get_col($wpdb->prepare("SELECT chapter_id FROM {$wpdb->prefix}ohmylms_chapter_relationship WHERE course_id=%d ORDER BY order_number ASC, id ASC", (int) $course_id));
        $chapters = [];
        foreach ($ids as $id) {
            $post = get_post((int) $id);
            if ($post && $post->post_type === OHMYLMS_CHAPTER_CPT && $post->post_status !== 'trash') { $chapters[] = ['id' => (int) $id, 'name' => self::title($id)]; }
        }
        return $chapters;
    }

    private static function belongs($course_id, $chapter_id) {
        return in_array((int) $chapter_id, array_column(self::chapters($course_id), 'id'), true);
    }

    public static function add_chapter($course_id, $name) {
        global $wpdb;
        $name = trim(wp_strip_all_tags((string) $name));
        if ($name === '' || mb_strlen($name) > 200) { return self::error(__('Give the chapter a name of up to 200 characters.', 'ohmylms')); }
        $id = wp_insert_post(['post_type' => OHMYLMS_CHAPTER_CPT, 'post_title' => $name, 'post_status' => 'publish', 'post_author' => get_current_user_id()], true);
        if (is_wp_error($id)) { return $id; }
        $order = 1 + (int) $wpdb->get_var($wpdb->prepare("SELECT MAX(order_number) FROM {$wpdb->prefix}ohmylms_chapter_relationship WHERE course_id=%d", (int) $course_id));
        if (!$wpdb->insert($wpdb->prefix . 'ohmylms_chapter_relationship', ['course_id' => (int) $course_id, 'chapter_id' => (int) $id, 'order_number' => $order])) {
            wp_delete_post($id, true);
            return self::error(__('The chapter could not be added.', 'ohmylms'), 500);
        }
        return ['id' => (int) $id, 'name' => $name];
    }

    public static function rename_chapter($course_id, $chapter_id, $name) {
        if (!self::belongs($course_id, $chapter_id)) { return self::error(__('The chapter does not belong to this course.', 'ohmylms'), 404); }
        $name = trim(wp_strip_all_tags((string) $name));
        if ($name === '' || mb_strlen($name) > 200) { return self::error(__('Give the chapter a name of up to 200 characters.', 'ohmylms')); }
        $result = wp_update_post(['ID' => (int) $chapter_id, 'post_title' => $name], true);
        return is_wp_error($result) ? $result : ['id' => (int) $chapter_id, 'name' => $name];
    }

    /** Chapters must be given in full, so a partial list can never silently drop one. */
    public static function reorder_chapters($course_id, array $ids) {
        global $wpdb;
        $ids = array_values(array_map('intval', $ids));
        $current = array_column(self::chapters($course_id), 'id');
        if (count($ids) !== count($current) || array_diff($ids, $current) || array_diff($current, $ids)) { return self::error(__('List every chapter of this course exactly once.', 'ohmylms')); }
        foreach ($ids as $position => $id) {
            $wpdb->update($wpdb->prefix . 'ohmylms_chapter_relationship', ['order_number' => $position + 1], ['course_id' => (int) $course_id, 'chapter_id' => $id]);
        }
        return true;
    }

    /**
     * Delete a chapter. A chapter that still holds lessons or quizzes in the course editor, or that the
     * published program refers to, is kept: removing it would orphan content or break enrolled learners.
     */
    public static function delete_chapter($course_id, $chapter_id) {
        global $wpdb;
        $chapter_id = (int) $chapter_id;
        if (!self::belongs($course_id, $chapter_id)) { return self::error(__('The chapter does not belong to this course.', 'ohmylms'), 404); }
        if ((int) $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM {$wpdb->prefix}ohmylms_content_relationship WHERE chapter_id=%d", $chapter_id))) {
            return self::error(__('This chapter still holds lessons or quizzes in the course editor. Move or remove them there first.', 'ohmylms'), 409, 'ohmylms_chapter_in_use');
        }
        $published = CourseProgram::current((int) $course_id);
        if ($published && (in_array($chapter_id, array_map('intval', array_column($published['outcomes'], 'chapter_id')), true) || in_array($chapter_id, array_map('intval', array_column($published['items'], 'chapter_id')), true))) {
            return self::error(__('This chapter is part of the published program. Move its skills and content elsewhere, publish, then delete it.', 'ohmylms'), 409, 'ohmylms_chapter_published');
        }
        // Skills and attachments that sat in it stay in the course, unplaced.
        $draft = self::draft($course_id);
        foreach ($draft['outcomes'] as &$outcome) { if ((int) ($outcome['chapter_id'] ?? 0) === $chapter_id) { unset($outcome['chapter_id']); } }
        unset($outcome);
        foreach ($draft['items'] as &$item) { if ((int) ($item['chapter_id'] ?? 0) === $chapter_id) { $item['chapter_id'] = 0; } }
        unset($item);
        update_post_meta((int) $course_id, CourseProgram::DRAFT, $draft);
        $wpdb->delete($wpdb->prefix . 'ohmylms_chapter_relationship', ['course_id' => (int) $course_id, 'chapter_id' => $chapter_id]);
        wp_delete_post($chapter_id, true);
        return true;
    }

    // ---- Structure ---------------------------------------------------------------------------------------

    private static function fingerprint($program) {
        if (!is_array($program)) { return ''; }
        $keep = ['mode', 'recognize_prior', 'evidence_days', 'bank_ids', 'outcomes', 'items'];
        return md5(wp_json_encode(array_intersect_key($program, array_flip($keep))));
    }

    /** Courses that place this content other than `$course_id`, as `[{id,title}]`. */
    private static function also_in($content_id, $course_id) {
        $others = array_diff(Placements::courses_for($content_id), [(int) $course_id]);
        $home = (int) ohmylms_get_course_id_by_chapter_id((int) ohmylms_get_chapter_id_by_content_id($content_id));
        if ($home && $home !== (int) $course_id) { $others[] = $home; }
        return array_map(static function ($id) { return ['id' => (int) $id, 'title' => self::title($id)]; }, array_slice(array_values(array_unique($others)), 0, 5));
    }

    public static function summary($course_id) {
        $draft = self::draft($course_id);
        $attachments = array_filter($draft['items'], static function ($item) { return $item['type'] !== 'practice'; });
        return [
            'id' => (int) $course_id,
            'title' => self::title($course_id),
            'status' => get_post_status($course_id),
            'mode' => $draft['mode'],
            'published' => (bool) get_post_meta($course_id, CourseProgram::CURRENT, true),
            'chapters' => count(self::chapters($course_id)),
            'skills' => count($draft['outcomes']),
            'attachments' => count($attachments),
        ];
    }

    /** The catalog tree for one grade, exam or subject. */
    public static function payload($course_id) {
        $editor = CourseProgram::editor((int) $course_id);
        $draft = $editor['draft'];
        $skills = [];
        foreach ($draft['outcomes'] as $outcome) {
            $term = get_term((int) $outcome['term_id'], Taxonomy::NAME);
            $valid = $term && !is_wp_error($term);
            $skills[] = [
                'term_id' => (int) $outcome['term_id'],
                'name' => $valid ? $term->name : __('Unavailable skill', 'ohmylms'),
                'code' => $valid ? (string) get_term_meta($term->term_id, '_ohmylms_skill_code', true) : '',
                'questions' => $valid ? (int) $term->count : 0,
                'target' => $outcome['target'],
                'required' => !empty($outcome['required']),
                'chapter_id' => (int) ($outcome['chapter_id'] ?? 0),
                'missing' => !$valid,
            ];
        }
        $attachments = [];
        foreach ($draft['items'] as $item) {
            if ($item['type'] === 'practice') { continue; }
            $post = get_post((int) $item['content_id']);
            $valid = $post && $post->post_type === self::post_type($item['type']) && $post->post_status !== 'trash';
            $attachments[] = [
                'id' => $item['id'],
                'type' => $item['type'],
                'content_id' => (int) $item['content_id'],
                'title' => $valid ? self::title($post->ID) : __('Unavailable content', 'ohmylms'),
                'status' => $valid ? $post->post_status : 'missing',
                'required' => !empty($item['required']),
                'pass_percent' => isset($item['pass_percent']) ? (float) $item['pass_percent'] : null,
                'chapter_id' => (int) ($item['chapter_id'] ?? 0),
                'skill_ids' => array_map('intval', (array) ($item['skill_ids'] ?? [])),
                'also_in' => $valid ? self::also_in($post->ID, $course_id) : [],
            ];
        }
        $published = $editor['published'];
        return [
            'course' => self::summary($course_id) + ['url' => $editor['url']],
            'mode' => $draft['mode'],
            'published_version' => $published ? (int) $published['version'] : 0,
            'unpublished_changes' => self::fingerprint($draft) !== self::fingerprint($published),
            'chapters' => self::chapters($course_id),
            'skills' => $skills,
            'attachments' => $attachments,
        ];
    }

    /**
     * Store the structure in the draft. Only outcomes, attachments and the mode are replaced; learning
     * settings, practice steps and everything else in the draft are kept. Validation is the program's own.
     *
     * @param array{mode?:string,outcomes?:array,attachments?:array} $data
     */
    public static function save_draft($course_id, array $data) {
        if (!Schema::ready()) { return self::error(__('Learning storage is unavailable.', 'ohmylms'), 503); }
        $draft = self::draft($course_id);
        unset($draft['id'], $draft['version'], $draft['course_id']);
        if (isset($data['mode'])) {
            if (!in_array($data['mode'], self::MODES, true)) { return self::error(__('Choose a valid learning mode.', 'ohmylms')); }
            $draft['mode'] = $data['mode'];
        }
        if (array_key_exists('outcomes', $data)) {
            if (!is_array($data['outcomes'])) { return self::error(__('Skills must be a list.', 'ohmylms')); }
            $draft['outcomes'] = array_values(array_filter($data['outcomes'], 'is_array'));
        }
        $kept = array_column($draft['outcomes'], 'term_id');
        $kept = array_map('intval', $kept);
        $practice = array_values(array_filter($draft['items'], static function ($item) use ($kept) { return $item['type'] === 'practice' && in_array((int) $item['content_id'], $kept, true); }));
        if (array_key_exists('attachments', $data)) {
            if (!is_array($data['attachments'])) { return self::error(__('Attachments must be a list.', 'ohmylms')); }
            $attachments = array_values(array_filter($data['attachments'], 'is_array'));
        } else {
            $attachments = array_values(array_filter($draft['items'], static function ($item) { return $item['type'] !== 'practice'; }));
        }
        foreach ($attachments as &$attachment) {
            $attachment['skill_ids'] = array_values(array_intersect(array_map('intval', (array) ($attachment['skill_ids'] ?? [])), $kept));
            if (empty($attachment['id']) || !is_string($attachment['id'])) { $attachment['id'] = wp_generate_uuid4(); }
        }
        unset($attachment);
        $draft['items'] = array_merge($attachments, $practice);
        $program = CourseProgram::normalize((int) $course_id, $draft);
        if (is_wp_error($program)) { return $program; }
        $program['author_id'] = get_current_user_id();
        update_post_meta((int) $course_id, CourseProgram::DRAFT, $program);
        return true;
    }

    /** Publish the stored draft. This is the program's own publish: readiness checks, versioning, enrolled learners. */
    public static function publish($course_id, $apply_existing = false) {
        $editor = CourseProgram::editor((int) $course_id);
        $draft = $editor['draft'];
        $draft['expected_program_id'] = $editor['published'] ? (int) $editor['published']['id'] : 0;
        return CourseProgram::save((int) $course_id, $draft, true, (bool) $apply_existing);
    }

    // ---- Pickers and lists -------------------------------------------------------------------------------

    private static function author_scope() {
        return current_user_can('edit_others_posts') ? '' : get_current_user_id();
    }

    /** Grades, exams and subjects (courses) the current user can edit, with their catalog counts. */
    public static function courses($search = '', $page = 1, $per_page = 24) {
        $query = new \WP_Query([
            'post_type' => OHMYLMS_COURSE_CPT, 'post_status' => ['publish', 'draft', 'pending', 'private', 'future'], 's' => $search,
            'posts_per_page' => max(1, min(100, (int) $per_page)), 'paged' => max(1, (int) $page), 'orderby' => 'title', 'order' => 'ASC',
            'author' => self::author_scope(), 'no_found_rows' => false,
        ]);
        $items = [];
        foreach ($query->posts as $post) {
            if (current_user_can('edit_post', $post->ID)) { $items[] = self::summary($post->ID); }
        }
        return ['items' => $items, 'total' => (int) $query->found_posts, 'pages' => (int) $query->max_num_pages];
    }

    /** Search content (or skills) to attach, leaving out what the course already has. */
    public static function targets($type, $search, $course_id = 0, $page = 1) {
        $placed = [];
        if ($course_id) {
            $draft = self::draft($course_id);
            $placed = $type === 'skill' ? array_map('intval', array_column($draft['outcomes'], 'term_id')) : array_map('intval', array_column($draft['items'], 'content_id'));
        }
        if ($type === 'skill') {
            $terms = get_terms(['taxonomy' => Taxonomy::NAME, 'hide_empty' => false, 'search' => (string) $search, 'orderby' => 'name', 'number' => 40, 'exclude' => $placed]);
            return ['items' => array_map(static function ($term) {
                return ['id' => (int) $term->term_id, 'title' => $term->name, 'code' => (string) get_term_meta($term->term_id, '_ohmylms_skill_code', true), 'questions' => (int) $term->count];
            }, is_array($terms) ? $terms : []), 'pages' => 1];
        }
        $post_type = self::post_type($type);
        if (!$post_type) { return self::error(__('Choose lesson, quiz, assignment or skill.', 'ohmylms')); }
        $query = new \WP_Query([
            'post_type' => $post_type, 'post_status' => ['publish', 'draft', 'private'], 's' => (string) $search, 'post__not_in' => $placed,
            'posts_per_page' => 20, 'paged' => max(1, (int) $page), 'orderby' => 'title', 'order' => 'ASC', 'author' => self::author_scope(),
        ]);
        $items = [];
        foreach ($query->posts as $post) {
            if (current_user_can('edit_post', $post->ID)) { $items[] = ['id' => $post->ID, 'title' => self::title($post->ID), 'status' => $post->post_status]; }
        }
        return ['items' => $items, 'pages' => (int) $query->max_num_pages];
    }

    /**
     * Courses that use each lesson, quiz or assignment: its original chapter course plus every course whose
     * published program or draft places it.
     *
     * @param int[] $content_ids
     * @return array<int, int[]>
     */
    public static function used_in(array $content_ids) {
        global $wpdb;
        $content_ids = array_values(array_unique(array_filter(array_map('intval', $content_ids))));
        if (!$content_ids) { return []; }
        $used = [];
        $list = implode(',', $content_ids);
        foreach ((array) $wpdb->get_results("SELECT c.content_id, r.course_id FROM {$wpdb->prefix}ohmylms_content_relationship c JOIN {$wpdb->prefix}ohmylms_chapter_relationship r ON r.chapter_id=c.chapter_id WHERE c.content_id IN ($list)", ARRAY_A) as $row) {
            $used[(int) $row['content_id']][(int) $row['course_id']] = (int) $row['course_id'];
        }
        $published = Placements::index();
        foreach ($content_ids as $id) { foreach ($published[$id] ?? [] as $course) { $used[$id][$course] = $course; } }
        $drafts = $wpdb->get_results($wpdb->prepare("SELECT post_id, meta_value FROM {$wpdb->postmeta} WHERE meta_key=%s", CourseProgram::DRAFT), ARRAY_N);
        $rows = [];
        foreach ((array) $drafts as $draft) { $rows[] = [(int) $draft[0], maybe_unserialize($draft[1])]; }
        foreach (Placements::index_from($rows) as $content => $courses) {
            if (!in_array($content, $content_ids, true)) { continue; }
            foreach ($courses as $course) { $used[$content][$course] = $course; }
        }
        return array_map('array_values', $used);
    }

    /**
     * The lesson library: every lesson the user can edit, whether or not it sits in a course.
     *
     * @return array{items:array,total:int,pages:int}
     */
    public static function lessons(array $args) {
        $status = (string) ($args['status'] ?? '');
        $statuses = ['publish', 'draft', 'pending', 'private', 'future'];
        $query = new \WP_Query([
            'post_type' => OHMYLMS_LESSON_CPT, 'post_status' => in_array($status, $statuses, true) ? $status : $statuses,
            's' => (string) ($args['search'] ?? ''), 'posts_per_page' => max(1, min(50, (int) ($args['per_page'] ?? 20))), 'paged' => max(1, (int) ($args['page'] ?? 1)),
            'orderby' => in_array($args['orderby'] ?? '', ['title', 'modified', 'date'], true) ? $args['orderby'] : 'modified', 'order' => strtoupper((string) ($args['order'] ?? 'DESC')) === 'ASC' ? 'ASC' : 'DESC',
            'author' => self::author_scope(),
        ]);
        $ids = [];
        foreach ($query->posts as $post) { if (current_user_can('edit_post', $post->ID)) { $ids[] = $post->ID; } }
        $used = self::used_in($ids);
        $skills = [];
        if ($ids) {
            foreach ((array) wp_get_object_terms($ids, Taxonomy::NAME, ['fields' => 'all_with_object_id']) as $term) {
                if (is_wp_error($term)) { continue; }
                $skills[(int) $term->object_id][] = ['id' => (int) $term->term_id, 'name' => $term->name, 'code' => (string) get_term_meta($term->term_id, '_ohmylms_skill_code', true)];
            }
        }
        $items = [];
        foreach ($ids as $id) {
            $post = get_post($id);
            $lesson = ohmylms_get_lesson($id);
            $items[] = [
                'id' => $id, 'title' => self::title($id), 'status' => $post->post_status, 'type' => $lesson ? $lesson->get_type() : 'text',
                'modified' => get_post_modified_time('c', true, $post), 'skills' => $skills[$id] ?? [],
                'courses' => array_map(static function ($course) { return ['id' => (int) $course, 'title' => self::title($course)]; }, $used[$id] ?? []),
            ];
        }
        return ['items' => $items, 'total' => (int) $query->found_posts, 'pages' => (int) $query->max_num_pages];
    }

    /** Replace the skills a lesson is linked to. Skills are shared; this links, it never copies. */
    public static function set_lesson_skills($lesson_id, array $skill_ids) {
        if (get_post_type((int) $lesson_id) !== OHMYLMS_LESSON_CPT || !current_user_can('edit_post', (int) $lesson_id)) { return self::error(__('You cannot change this lesson.', 'ohmylms'), 403, 'ohmylms_rest_forbidden'); }
        $skill_ids = array_values(array_unique(array_filter(array_map('intval', $skill_ids))));
        foreach ($skill_ids as $id) { if (!term_exists($id, Taxonomy::NAME)) { return self::error(__('A skill does not exist.', 'ohmylms')); } }
        $result = wp_set_object_terms((int) $lesson_id, $skill_ids, Taxonomy::NAME);
        return is_wp_error($result) ? $result : $skill_ids;
    }

    /** Move lessons to the trash one by one, so a lesson the user may not delete never blocks the rest. */
    public static function trash_lessons(array $ids) {
        $trashed = []; $skipped = [];
        foreach (array_values(array_unique(array_filter(array_map('intval', $ids)))) as $id) {
            if (get_post_type($id) !== OHMYLMS_LESSON_CPT) { $skipped[] = ['id' => $id, 'reason' => 'invalid']; continue; }
            if (!current_user_can('delete_post', $id)) { $skipped[] = ['id' => $id, 'reason' => 'forbidden']; continue; }
            if (!wp_trash_post($id)) { $skipped[] = ['id' => $id, 'reason' => 'failed']; continue; }
            do_action('ohmylms_rest_delete_lesson', $id);
            $trashed[] = $id;
        }
        return ['trashed' => $trashed, 'skipped' => $skipped];
    }

    /** A draft copy of a lesson: same content, settings and skills, but in no course. */
    public static function duplicate_lesson($lesson_id) {
        $post = get_post((int) $lesson_id);
        if (!$post || $post->post_type !== OHMYLMS_LESSON_CPT || !current_user_can('edit_post', $post->ID)) { return self::error(__('You cannot copy this lesson.', 'ohmylms'), 403, 'ohmylms_rest_forbidden'); }
        $copy = wp_insert_post(wp_slash([
            'post_type' => $post->post_type, 'post_status' => 'draft', 'post_author' => get_current_user_id(),
            'post_title' => sprintf(__('%s (copy)', 'ohmylms'), $post->post_title), 'post_content' => $post->post_content, 'post_excerpt' => $post->post_excerpt,
        ]), true);
        if (is_wp_error($copy)) { return $copy; }
        foreach ((array) get_post_meta($post->ID) as $key => $values) {
            if (in_array($key, ['_edit_lock', '_edit_last', '_wp_old_slug'], true) || strpos($key, '_wp_trash_meta') === 0) { continue; }
            foreach ($values as $value) { add_post_meta($copy, $key, wp_slash(maybe_unserialize($value))); }
        }
        wp_set_object_terms($copy, wp_get_object_terms($post->ID, Taxonomy::NAME, ['fields' => 'ids']), Taxonomy::NAME);
        return ['id' => (int) $copy, 'title' => self::title($copy)];
    }
}
