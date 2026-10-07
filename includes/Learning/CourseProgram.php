<?php
namespace OhMyLMS\Learning;

use OhMyLMS\Skills\Taxonomy;
use OhMyLMS\Skills\Mastery;
use OhMyLMS\Practice\Selector;
use OhMyLMS\QuestionBank\AccessPolicy;
use OhMyLMS\QuestionBank\Banks;
use OhMyLMS\Utility\Transaction;

defined('ABSPATH') || exit;

final class CourseProgram {
    const MODES = ['traditional', 'skill-based', 'blended'];
    const CURRENT = '_ohmylms_learning_program';
    const DRAFT = '_ohmylms_learning_draft';

    public static function error($message, $status = 400) {
        return new \WP_Error('ohmylms_learning_invalid', $message, ['status' => $status]);
    }

    public static function get($id) {
        global $wpdb;
        if (!$id || !Schema::ready()) { return null; }
        $row = $wpdb->get_row($wpdb->prepare('SELECT * FROM ' . Schema::table('programs') . ' WHERE id=%d', $id), ARRAY_A);
        return $row ? ['id' => (int) $row['id'], 'version' => (int) $row['version'], 'course_id' => (int) $row['course_id']] + (json_decode($row['program'], true) ?: []) : null;
    }

    public static function current($course_id) { return self::get((int) get_post_meta($course_id, self::CURRENT, true)); }

    public static function defaults($course_id) {
        global $wpdb;
        $rows = $wpdb->get_results($wpdb->prepare(
            "SELECT c.content_id, c.content_type, r.chapter_id FROM {$wpdb->prefix}ohmylms_chapter_relationship r JOIN {$wpdb->prefix}ohmylms_content_relationship c ON c.chapter_id=r.chapter_id WHERE r.course_id=%d ORDER BY r.order_number,c.order_number", $course_id
        ), ARRAY_A);
        $items = [];
        foreach ($rows as $row) {
            $type = $row['content_type'] === 'quiz' ? 'quiz' : ($row['content_type'] === 'assignment' ? 'assignment' : 'lesson');
            $items[] = ['id' => wp_generate_uuid4(), 'type' => $type, 'content_id' => (int) $row['content_id'], 'chapter_id' => (int) $row['chapter_id'], 'required' => true];
        }
        return ['mode' => 'traditional', 'recognize_prior' => true, 'evidence_days' => 0, 'bank_ids' => [], 'outcomes' => [], 'items' => $items];
    }

    public static function editor($course_id) {
        $current = self::current($course_id);
        $draft = get_post_meta($course_id, self::DRAFT, true);
        return ['draft' => is_array($draft) ? $draft : ($current ?: self::defaults($course_id)), 'published' => $current, 'url' => Frontend::url($course_id)];
    }

    public static function enrollment($student_id, $course_id) {
        global $wpdb;
        return $wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->prefix}ohmylms_user_enrollment WHERE user_id=%d AND course_id=%d AND status='enrolled' ORDER BY id DESC LIMIT 1", $student_id, $course_id), ARRAY_A);
    }

    public static function for_enrollment(array $enrollment) {
        global $wpdb;
        if (!Schema::ready()) { return null; }
        $bindings = Schema::table('enrollments');
        $bound = $wpdb->get_row($wpdb->prepare("SELECT program_id FROM $bindings WHERE enrollment_id=%d", $enrollment['id']), ARRAY_A);
        if (!$bound) {
            $id = (int) get_post_meta($enrollment['course_id'], self::CURRENT, true);
            $wpdb->query($wpdb->prepare("INSERT IGNORE INTO $bindings (enrollment_id,program_id,bound_at) VALUES (%d,%d,%s)", $enrollment['id'], $id, current_time('mysql', true)));
            $bound = $wpdb->get_row($wpdb->prepare("SELECT program_id FROM $bindings WHERE enrollment_id=%d", $enrollment['id']), ARRAY_A);
        }
        return $bound ? self::get((int) $bound['program_id']) : null;
    }

    public static function managed($student_id, $course_id) {
        if (!Schema::ready() || !get_post_meta($course_id, self::CURRENT, true)) { return false; }
        $enrollment = self::enrollment($student_id, $course_id);
        return $enrollment && self::for_enrollment($enrollment) !== null;
    }

    public static function needs_skills(array $program) {
        return $program['mode'] !== 'traditional' || !empty($program['outcomes']) || (bool) array_filter($program['items'], static function ($item) { return $item['type'] === 'practice'; });
    }

    const MAX_OUTCOMES = 200;

    /** A program lists at most 200 skills, except the course of a syllabus, which can hold every skill of its syllabus. */
    public static function too_many_outcomes($course_id, $count) {
        if ($count <= self::MAX_OUTCOMES) { return false; }
        return $count > (\OhMyLMS\Curriculum\SyllabusCourse::owner((int) $course_id) ? \OhMyLMS\Curriculum\Syllabus::MAX_SKILLS : self::MAX_OUTCOMES);
    }

    /** The IDs among these that are skills, as a set. A short list is checked one by one, a long one (a syllabus's course) in one query. */
    private static function known_skills(array $outcomes) {
        $ids = [];
        foreach ($outcomes as $outcome) { if (is_array($outcome)) { $ids[] = (int) ($outcome['term_id'] ?? 0); } }
        $ids = array_values(array_unique(array_filter($ids)));
        $known = [];
        if (count($ids) < 25) {
            foreach ($ids as $id) { if (term_exists($id, Taxonomy::NAME)) { $known[$id] = true; } }
            return $known;
        }
        $found = get_terms(['taxonomy' => Taxonomy::NAME, 'include' => $ids, 'fields' => 'ids', 'hide_empty' => false, 'number' => 0, 'update_term_meta_cache' => false]);
        return is_array($found) ? array_flip(array_map('intval', $found)) : [];
    }

    public static function normalize($course_id, array $data) {
        global $wpdb;
        if (!in_array($data['mode'] ?? '', self::MODES, true)) { return self::error(__('Choose a valid learning mode.', 'ohmylms')); }
        if (!is_array($data['items'] ?? null) || !is_array($data['outcomes'] ?? null) || count($data['items']) > 500 || self::too_many_outcomes($course_id, count($data['outcomes']))) { return self::error(__('Invalid or oversized learning program.', 'ohmylms')); }
        $program = ['mode' => $data['mode'], 'recognize_prior' => !empty($data['recognize_prior']), 'evidence_days' => max(0, min(3650, (int) ($data['evidence_days'] ?? 0))), 'bank_ids' => [], 'outcomes' => [], 'items' => []];
        foreach ((array) ($data['bank_ids'] ?? []) as $bank) {
            if (!Banks::can((int) $bank, 'use')) { return AccessPolicy::denied(__('You cannot use this question bank.', 'ohmylms')); }
            $program['bank_ids'][] = (int) $bank;
        }
        $program['bank_ids'] = array_values(array_unique($program['bank_ids']));
        $skills = [];
        $chapters = array_map('intval', $wpdb->get_col($wpdb->prepare("SELECT chapter_id FROM {$wpdb->prefix}ohmylms_chapter_relationship WHERE course_id=%d", $course_id)));
        $chapter_set = array_flip($chapters);
        $known = self::known_skills($data['outcomes']);
        foreach ($data['outcomes'] as $outcome) {
            if (!is_array($outcome)) { return self::error(__('Invalid outcome.', 'ohmylms')); }
            $id = (int) ($outcome['term_id'] ?? 0);
            if (!$id || !isset($known[$id]) || isset($skills[$id]) || !in_array($outcome['target'] ?? '', ['proficient', 'mastered'], true)) { return self::error(__('Outcomes need distinct existing skills and a valid target.', 'ohmylms')); }
            $skills[$id] = true;
            $entry = ['term_id' => $id, 'target' => $outcome['target'], 'required' => !empty($outcome['required'])];
            // The chapter (unit) a skill sits in, like a strand in a skill catalogue. Order is array order.
            $chapter = (int) ($outcome['chapter_id'] ?? 0);
            if ($chapter && !isset($chapter_set[$chapter])) { return self::error(__('The unit does not belong to this course.', 'ohmylms')); }
            if ($chapter) { $entry['chapter_id'] = $chapter; }
            $program['outcomes'][] = $entry;
        }
        $ids = []; $resources = [];
        foreach ($data['items'] as $item) {
            if (!is_array($item) || !in_array($item['type'] ?? '', ['lesson', 'practice', 'quiz', 'assignment'], true)) { return self::error(__('Choose a valid curriculum item.', 'ohmylms')); }
            $uuid = $item['id'] ?? wp_generate_uuid4();
            if (!is_string($uuid) || !preg_match('/^[a-f0-9-]{36}$/D', $uuid) || isset($ids[$uuid])) { return self::error(__('Curriculum placement identifiers must be unique.', 'ohmylms')); }
            $ids[$uuid] = true;
            $chapter = (int) ($item['chapter_id'] ?? 0);
            if ($chapter && !in_array($chapter, $chapters, true)) { return self::error(__('The unit does not belong to this course.', 'ohmylms')); }
            $content = (int) ($item['content_id'] ?? 0);
            $entry = ['id' => $uuid, 'type' => $item['type'], 'chapter_id' => $chapter, 'content_id' => $content, 'required' => !empty($item['required'])];
            // Content attaches to a whole chapter (no skills) or to chosen skills of this program.
            $scope = array_values(array_unique(array_map('intval', (array) ($item['skill_ids'] ?? []))));
            if ($scope && array_diff($scope, array_keys($skills))) { return self::error(__('Content can only be attached to skills selected for this course.', 'ohmylms')); }
            if ($scope && $item['type'] !== 'practice') { $entry['skill_ids'] = $scope; }
            if ($item['type'] === 'practice') {
                if (!isset($skills[$content])) { return self::error(__('A practice item must reference a selected course outcome.', 'ohmylms')); }
                // Practice completion is measured by its outcome, never by session length.
                $entry['required'] = false;
            } else {
                $post_type = ['lesson' => OHMYLMS_LESSON_CPT, 'quiz' => OHMYLMS_QUIZ_CPT, 'assignment' => 'ohmylms-assignment'][$item['type']];
                if (!$content || get_post_type($content) !== $post_type || !current_user_can('edit_post', $content)) { return AccessPolicy::denied(__('You cannot place this content in the course.', 'ohmylms')); }
                if (isset($resources[$content])) { return self::error(__('Place each learning resource only once in a course.', 'ohmylms')); }
                $resources[$content] = true;
                if ($item['type'] === 'quiz') {
                    $pass = $item['pass_percent'] ?? 80;
                    if (!is_numeric($pass) || $pass < 0 || $pass > 100) { return self::error(__('Checkpoint pass percentage must be between 0 and 100.', 'ohmylms')); }
                    $entry['pass_percent'] = (float) $pass;
                }
            }
            $program['items'][] = $entry;
        }
        return $program;
    }

    public static function pool(array $program, $skill) {
        $author = (int) ($program['author_id'] ?? get_current_user_id());
        return array_values(array_filter(Selector::pool($skill), static function ($row) use ($program, $author, $skill) {
            if ((int) $row['primary_term_id'] !== (int) $skill) { return false; }
            if ($program['bank_ids']) { return in_array((int) $row['bank_id'], $program['bank_ids'], true); }
            return (int) $row['bank_id'] === 0 ? (int) $row['author_id'] === $author : Banks::can((int) $row['bank_id'], 'use', $author);
        }));
    }

    public static function readiness(array $program) {
        $errors = []; $rules = Mastery::rules();
        $required = array_filter($program['items'], static function ($item) { return !empty($item['required']); });
        $required_outcomes = array_filter($program['outcomes'], static function ($outcome) { return !empty($outcome['required']); });
        if (!$required && !$required_outcomes) { $errors[] = __('Select at least one completion requirement.', 'ohmylms'); }
        if ($program['mode'] !== 'traditional' && !$required_outcomes) { $errors[] = __('Skill-based and blended courses need a required skill outcome.', 'ohmylms'); }
        foreach ($program['items'] as $item) {
            if ($item['type'] !== 'practice' && get_post_status($item['content_id']) !== 'publish') { $errors[] = sprintf(__('Publish the learning resource %s first.', 'ohmylms'), get_the_title($item['content_id'])); }
        }
        foreach ($required_outcomes as $outcome) {
            $pool = self::pool($program, $outcome['term_id']);
            $minimum = $rules[$outcome['target'] . '_min'];
            $families = array_unique(array_map(static function ($row) { return $row['family_id'] ?: 'q:' . $row['question_id']; }, $pool));
            if (count(array_unique(array_column($pool, 'question_id'))) < $minimum || count($families) < $rules[$outcome['target'] . '_families']) {
                $term = get_term($outcome['term_id'], Taxonomy::NAME);
                $errors[] = sprintf(__('Skill %1$s needs at least %2$d approved questions and %3$d question families in its allowed pool.', 'ohmylms'), $term->name, $minimum, $rules[$outcome['target'] . '_families']);
            }
        }
        return $errors;
    }

    public static function save($course_id, array $data, $publish = false, $apply_existing = false) {
        global $wpdb;
        if (!Schema::ready()) { return self::error(__('Learning storage is unavailable.', 'ohmylms'), 503); }
        if (get_post_type($course_id) !== OHMYLMS_COURSE_CPT || !current_user_can('edit_post', $course_id)) { return AccessPolicy::denied(); }
        $program = self::normalize($course_id, $data);
        if (is_wp_error($program)) { return $program; }
        $program['author_id'] = get_current_user_id();
        $errors = self::readiness($program);
        if ($publish && $errors) { return new \WP_Error('ohmylms_learning_not_ready', __('The learning program is not ready to publish.', 'ohmylms'), ['status' => 409, 'errors' => $errors]); }
        if (!$publish) { update_post_meta($course_id, self::DRAFT, $program); return self::editor($course_id) + ['readiness' => $errors]; }
        $key = 'ohmylms_program_' . (int) $course_id;
        if (!$wpdb->get_var($wpdb->prepare('SELECT GET_LOCK(%s, 3)', $key))) { return self::error(__('Another author is publishing this course. Try again.', 'ohmylms'), 409); }
        try {
            wp_cache_delete($course_id, 'post_meta');
            $old = (int) get_post_meta($course_id, self::CURRENT, true);
            if (isset($data['expected_program_id']) && (int) $data['expected_program_id'] !== $old) { return self::error(__('Another teacher published a newer program. Reload this page before publishing.', 'ohmylms'), 409); }
            $id = Transaction::run(static function () use ($wpdb, $course_id, $program, $old, $apply_existing) {
                $bindings = Schema::table('enrollments'); $programs = Schema::table('programs');
                // Pin every existing enrollment before moving the published pointer.
                if ($wpdb->query($wpdb->prepare("INSERT IGNORE INTO $bindings (enrollment_id,program_id,bound_at) SELECT id,%d,%s FROM {$wpdb->prefix}ohmylms_user_enrollment WHERE course_id=%d", $old, current_time('mysql', true), $course_id)) === false) { throw new \RuntimeException('Binding failed'); }
                $version = 1 + (int) $wpdb->get_var($wpdb->prepare("SELECT MAX(version) FROM $programs WHERE course_id=%d", $course_id));
                if (!$wpdb->insert($programs, ['course_id' => $course_id, 'version' => $version, 'mode' => $program['mode'], 'program' => wp_json_encode($program), 'created_by' => get_current_user_id(), 'created_at' => current_time('mysql', true)])) { throw new \RuntimeException('Program write failed'); }
                $id = (int) $wpdb->insert_id;
                foreach ($program['outcomes'] as $outcome) {
                    // The chapter placement lives in the program JSON; the table keeps only what completion reads.
                    if (!$wpdb->insert(Schema::table('outcomes'), ['program_id' => $id, 'term_id' => $outcome['term_id'], 'target' => $outcome['target'], 'required' => (int) !empty($outcome['required'])])) { throw new \RuntimeException('Outcome write failed'); }
                }
                if ($apply_existing && $wpdb->query($wpdb->prepare("UPDATE $bindings b JOIN {$wpdb->prefix}ohmylms_user_enrollment e ON e.id=b.enrollment_id SET b.program_id=%d,b.bound_at=%s WHERE e.course_id=%d AND e.status='enrolled' AND e.progress<>'completed'", $id, current_time('mysql', true), $course_id)) === false) { throw new \RuntimeException('Upgrade failed'); }
                if (!update_post_meta($course_id, self::CURRENT, $id)) { throw new \RuntimeException('Publish failed'); }
                return $id;
            });
            update_post_meta($course_id, self::DRAFT, $program);
            Placements::flush();
            return self::editor($course_id) + ['readiness' => [], 'published_id' => $id];
        } catch (\Throwable $error) {
            wp_cache_delete($course_id, 'post_meta');
            return self::error(__('Could not publish the learning program. Try again.', 'ohmylms'), 500);
        } finally { $wpdb->get_var($wpdb->prepare('SELECT RELEASE_LOCK(%s)', $key)); }
    }
}
