<?php
namespace OhMyLMS\Tracks;

use OhMyLMS\Assessment\Schema as AssessmentSchema;
use OhMyLMS\Curriculum\Items;
use OhMyLMS\Curriculum\Links;
use OhMyLMS\Curriculum\SkillMappings;
use OhMyLMS\Learning\CompletionPolicy;
use OhMyLMS\Learning\CourseProgram;
use OhMyLMS\Learning\PracticeAccessPolicy;
use OhMyLMS\Practice\Selector;
use OhMyLMS\Skills\Mastery;
use OhMyLMS\Skills\Recommendations;
use OhMyLMS\Skills\Taxonomy;

defined('ABSPATH') || exit;

/**
 * What one learner sees for a followed track. Everything here only reads existing records and
 * keeps three things apart:
 *
 *  - course progress: counts from the course's own completion rules, never merged into one score;
 *  - skill levels: the mastery engine's per-skill state, with "Not assessed" when no evidence exists;
 *  - combined skill views: pooled only where an administrator mapped skills explicitly.
 *
 * No percentage is invented, scores from different assessments are not compared, and nothing
 * here writes progress, skill state or completion.
 */
final class Progress {
    const MAX_SKILLS = 120;
    const PRACTICE_LIMIT = 5;
    const CLASSES = ['strength', 'gap', 'developing', 'not-assessed'];

    /** Strength, gap, in progress or not assessed. Not-assessed skills are never counted as gaps. */
    public static function classify($level, $struggling) {
        if (in_array($level, ['proficient', 'mastered'], true)) { return 'strength'; }
        if ($level === 'developing') { return $struggling ? 'gap' : 'developing'; }
        return 'not-assessed';
    }

    public static function class_label($class) {
        return [
            'strength' => __('Strength', 'ohmylms'),
            'gap' => __('Needs practice', 'ohmylms'),
            'developing' => __('In progress', 'ohmylms'),
            'not-assessed' => __('Not assessed', 'ohmylms'),
        ][$class] ?? $class;
    }

    public static function mode_label($mode) {
        return ['traditional' => __('Traditional', 'ohmylms'), 'skill-based' => __('Skill-based', 'ohmylms'), 'blended' => __('Blended', 'ohmylms')][$mode] ?? ucfirst((string) $mode);
    }

    /** Students only ever see published courses; drafts and private courses stay hidden. */
    private static function visible_course($course_id) {
        $post = get_post((int) $course_id);
        return $post && $post->post_type === OHMYLMS_COURSE_CPT && $post->post_status === 'publish' ? $post : null;
    }

    private static function evidence_ready() {
        return AssessmentSchema::ready();
    }

    /** Skill term IDs a course is tied to: its linked skills and its published program's outcomes. */
    private static function course_skill_ids($course_id) {
        $ids = array_map('intval', (array) wp_get_object_terms((int) $course_id, Taxonomy::NAME, ['fields' => 'ids']));
        $program = \OhMyLMS\Learning\Schema::ready() ? CourseProgram::current($course_id) : null;
        if ($program) { $ids = array_merge($ids, array_map('intval', array_column($program['outcomes'], 'term_id'))); }
        return array_values(array_unique($ids));
    }

    /**
     * One course for one learner, or null when it is not visible to students.
     * Progress is a set of counts from the course's own rules, read without side effects.
     */
    public static function course($student, $course_id) {
        global $wpdb;
        $post = self::visible_course($course_id);
        if (!$post) { return null; }
        $course_id = (int) $post->ID;
        $enrollment = CourseProgram::enrollment((int) $student, $course_id);
        $summary = [
            'id' => $course_id,
            'title' => get_the_title($post) ?: '#' . $course_id,
            'url' => get_permalink($post),
            'enrolled' => (bool) $enrollment,
            'mode' => 'traditional',
            'completed' => false,
            'progress' => null,
            'note' => '',
            'skill_ids' => self::evidence_ready() ? self::course_skill_ids($course_id) : [],
        ];
        $program = \OhMyLMS\Learning\Schema::ready() ? CourseProgram::current($course_id) : null;
        if (!$enrollment) {
            if ($program) { $summary['mode'] = $program['mode']; }
            return $summary;
        }
        $summary['completed'] = $enrollment['progress'] === 'completed';
        if ($program && CourseProgram::managed((int) $student, $course_id)) {
            $state = CompletionPolicy::status((int) $student, $course_id);
            if (!is_wp_error($state)) {
                $summary['mode'] = $state['program']['mode'];
                $summary['completed'] = (bool) $state['completed'];
                $summary['progress'] = ['kind' => 'program', 'dimensions' => $state['dimensions']];
                $summary['url'] = \OhMyLMS\Learning\Frontend::url($course_id);
                if (!empty($state['blocked'])) { $summary['note'] = __('Skill practice is currently unavailable for this course.', 'ohmylms'); }
                elseif (!empty($state['pending'])) { $summary['note'] = __('Skill evidence is being evaluated. Progress will update when it finishes.', 'ohmylms'); }
            }
            return $summary;
        }
        $course = ohmylms_get_course($course_id);
        $total = $course ? (int) $course->get_lessons_count() + (int) $course->get_quiz_count() + (int) $course->get_assignment_count() : 0;
        $met = (int) $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM {$wpdb->prefix}ohmylms_user_progress WHERE enrollment_id=%d AND status='completed'", (int) $enrollment['id']));
        $summary['progress'] = ['kind' => 'activities', 'met' => min($met, $total), 'total' => $total];
        return $summary;
    }

    /** A curriculum item: where it sits, the published courses linked under it and its skills. */
    public static function curriculum($student, $item_id) {
        $item = Items::get($item_id);
        if (!$item) { return null; }
        $ids = Items::with_descendants($item_id);
        $courses = [];
        foreach (Links::object_ids($ids, 'course') as $course_id) {
            $summary = self::course($student, $course_id);
            if ($summary) { $courses[] = $summary; }
        }
        $skill_ids = [];
        if (self::evidence_ready()) {
            foreach (Links::object_ids($ids, 'skill') as $term_id) { if (term_exists($term_id, Taxonomy::NAME)) { $skill_ids[] = $term_id; } }
            foreach ($courses as $course) { $skill_ids = array_merge($skill_ids, $course['skill_ids']); }
        }
        return [
            'id' => (int) $item['id'],
            'name' => $item['name'],
            'item_type' => $item['item_type'],
            'code' => $item['code'],
            'version' => $item['version'],
            'path' => Items::path_names($item_id, false),
            'courses' => $courses,
            'skill_ids' => array_values(array_unique(array_map('intval', $skill_ids))),
        ];
    }

    /** @return array<int,array> term id => ['name' => ..., 'code' => ...] */
    private static function skill_labels(array $term_ids) {
        $labels = [];
        if (!$term_ids) { return $labels; }
        foreach (get_terms(['taxonomy' => Taxonomy::NAME, 'include' => $term_ids, 'hide_empty' => false, 'number' => 0]) as $term) {
            $labels[(int) $term->term_id] = ['name' => $term->name, 'code' => (string) get_term_meta($term->term_id, '_ohmylms_skill_code', true)];
        }
        return $labels;
    }

    /** @return array<int,array> term id => stored state row (absent when never assessed) */
    private static function skill_states($student, array $term_ids) {
        global $wpdb;
        $states = [];
        if (!$term_ids || !self::evidence_ready()) { return $states; }
        $placeholders = implode(',', array_fill(0, count($term_ids), '%d'));
        foreach ($wpdb->get_results($wpdb->prepare('SELECT term_id, level, review_due, evidence_count, independent_correct, families, last_evidence_at FROM ' . AssessmentSchema::table('student_skill_state') . " WHERE student_id=%d AND term_id IN ($placeholders)", array_merge([(int) $student], $term_ids)), ARRAY_A) as $row) {
            $states[(int) $row['term_id']] = $row;
        }
        return $states;
    }

    private static $practice = [];

    /** A practice link only when the learner may actually practise this skill and questions exist. */
    private static function practice_url($student, $term_id, array $enrolled_courses) {
        if (!\OhMyLMS\Practice\Frontend::enabled()) { return null; }
        $key = (int) $student . ':' . (int) $term_id . ':' . implode(',', $enrolled_courses);
        if (array_key_exists($key, self::$practice)) { return self::$practice[$key]; }
        $owner = ['student_id' => (int) $student];
        $pool = Selector::pool((int) $term_id);
        $url = null;
        if (PracticeAccessPolicy::pool($pool, $owner, (int) $term_id, 0)) {
            $url = add_query_arg('ohmylms_practice', (int) $term_id, home_url('/'));
        } else {
            foreach ($enrolled_courses as $course_id) {
                if (PracticeAccessPolicy::check($owner, (int) $term_id, (int) $course_id) === true && PracticeAccessPolicy::pool($pool, $owner, (int) $term_id, (int) $course_id)) {
                    $url = add_query_arg(['ohmylms_practice' => (int) $term_id, 'learning_course' => (int) $course_id], home_url('/'));
                    break;
                }
            }
        }
        return self::$practice[$key] = $url;
    }

    /** One entry per skill with its level, classification and where it appears. */
    private static function skill_entries($student, array $term_ids, array $sources, array $enrolled_courses) {
        $labels = self::skill_labels($term_ids);
        $states = self::skill_states($student, $term_ids);
        $entries = [];
        foreach ($term_ids as $term_id) {
            if (!isset($labels[$term_id])) { continue; }
            $state = $states[$term_id] ?? null;
            $level = $state ? $state['level'] : 'not-assessed';
            $struggling = $level === 'developing' && Recommendations::struggling((int) $student, $term_id);
            $class = self::classify($level, $struggling);
            $entries[$term_id] = [
                'term_id' => $term_id,
                'name' => $labels[$term_id]['name'],
                'code' => $labels[$term_id]['code'],
                'level' => $level,
                'level_label' => Mastery::label($level),
                'classification' => $class,
                'classification_label' => self::class_label($class),
                'review_due' => $state ? (bool) $state['review_due'] : false,
                'evidence_count' => $state ? (int) $state['evidence_count'] : 0,
                'independent_correct' => $state ? (int) $state['independent_correct'] : 0,
                'sources' => array_values(array_unique($sources[$term_id] ?? [])),
                'practice_url' => $class === 'strength' && !($state && $state['review_due']) ? null : self::practice_url($student, $term_id, $enrolled_courses),
            ];
        }
        return $entries;
    }

    /** Sort order for practice suggestions: gaps, then reviews, then in progress, then not yet assessed. */
    private static function practice_rank(array $entry) {
        if ($entry['classification'] === 'gap') { return 0; }
        if ($entry['review_due']) { return 1; }
        return $entry['classification'] === 'developing' ? 2 : 3;
    }

    /** @return array{total:int,strengths:int,gaps:int,developing:int,not_assessed:int} */
    public static function summarize(array $entries) {
        $summary = ['total' => count($entries), 'strengths' => 0, 'gaps' => 0, 'developing' => 0, 'not_assessed' => 0];
        foreach ($entries as $entry) {
            $key = ['strength' => 'strengths', 'gap' => 'gaps', 'developing' => 'developing', 'not-assessed' => 'not_assessed'][$entry['classification']];
            $summary[$key]++;
        }
        return $summary;
    }

    /**
     * Combined views for shared skills. A shared skill appears when at least one skill in the
     * track is mapped to it (or it is in the track itself and has mappings). Only `equivalent`
     * mappings pool evidence; `related` ones are listed for reference. Each source keeps its own
     * level and curriculum context, and nothing is averaged across them.
     */
    private static function combined($student, array $track_terms, array $own_entries) {
        global $wpdb;
        if (!$track_terms || !self::evidence_ready()) { return []; }
        $shared_ids = [];
        foreach (SkillMappings::all($track_terms) as $mapping) {
            $shared_ids[(int) $mapping['shared_term_id']] = true;
        }
        if (!$shared_ids) { return []; }
        $groups = [];
        foreach (SkillMappings::all(array_keys($shared_ids)) as $mapping) {
            $shared = (int) $mapping['shared_term_id'];
            if (isset($shared_ids[$shared])) { $groups[$shared][] = $mapping; }
        }
        $all_terms = array_keys($shared_ids);
        foreach ($groups as $mappings) { foreach ($mappings as $mapping) { $all_terms[] = (int) $mapping['specific_term_id']; } }
        $all_terms = array_values(array_unique($all_terms));
        $labels = self::skill_labels($all_terms);
        $states = self::skill_states($student, $all_terms);
        $pooled_terms = [];
        foreach ($groups as $shared => $mappings) {
            $pooled_terms[] = $shared;
            foreach ($mappings as $mapping) { if ($mapping['relation'] === 'equivalent') { $pooled_terms[] = (int) $mapping['specific_term_id']; } }
        }
        $pooled_terms = array_values(array_unique($pooled_terms));
        $placeholders = implode(',', array_fill(0, count($pooled_terms), '%d'));
        $evidence = $wpdb->get_results($wpdb->prepare('SELECT id, grade_event_id, term_id, part_id, question_id, awarded, available, independent, first_try, family_id, evidence_at FROM ' . AssessmentSchema::table('skill_evidence') . " WHERE student_id=%d AND term_id IN ($placeholders) AND role='primary' AND superseded=0 ORDER BY evidence_at, id", array_merge([(int) $student], $pooled_terms)), ARRAY_A) ?: [];
        $by_term = [];
        foreach ($evidence as $row) { $by_term[(int) $row['term_id']][] = $row; }
        $rules = Mastery::rules();
        $combined = [];
        foreach ($groups as $shared => $mappings) {
            if (!isset($labels[$shared])) { continue; }
            $rows = $by_term[$shared] ?? [];
            $sources = [];
            foreach ($mappings as $mapping) {
                $term = (int) $mapping['specific_term_id'];
                if (!isset($labels[$term])) { continue; }
                if ($mapping['relation'] === 'equivalent') { $rows = array_merge($rows, $by_term[$term] ?? []); }
                $level = isset($states[$term]) ? $states[$term]['level'] : 'not-assessed';
                $sources[] = [
                    'term_id' => $term,
                    'name' => $labels[$term]['name'],
                    'code' => $labels[$term]['code'],
                    'relation' => $mapping['relation'],
                    'note' => (string) $mapping['note'],
                    'level' => $level,
                    'level_label' => Mastery::label($level),
                    'evidence_count' => isset($states[$term]) ? (int) $states[$term]['evidence_count'] : 0,
                    'in_track' => in_array($term, $track_terms, true),
                    'context' => array_map(static function ($membership) { return ['path' => $membership['path'], 'name' => $membership['name'], 'code' => $membership['code'], 'version' => $membership['version']]; }, array_slice(Links::memberships('skill', $term), 0, 3)),
                ];
            }
            $state = Combined::evaluate($rows, $rules, time());
            $merged = Combined::merge($rows);
            $combined[] = [
                'shared' => ['term_id' => $shared, 'name' => $labels[$shared]['name'], 'code' => $labels[$shared]['code']],
                'level' => $state['level'],
                'level_label' => Mastery::label($state['level']),
                'evidence_count' => count($merged),
                'pooled_sources' => count(array_filter($sources, static function ($source) { return $source['relation'] === 'equivalent'; })),
                'sources' => $sources,
            ];
        }
        usort($combined, static function ($left, $right) { return strcmp($left['shared']['name'], $right['shared']['name']); });
        return $combined;
    }

    /** Full progress view of one track for one learner. */
    public static function for_track(array $track, $student) {
        $student = (int) $student;
        $members = []; $sources = [];
        $skill_ids = [];
        $remember = static function (array $ids, $label) use (&$skill_ids, &$sources) {
            foreach ($ids as $term_id) { $skill_ids[$term_id] = true; $sources[$term_id][] = $label; }
        };
        foreach (Tracks::members((int) $track['id']) as $member) {
            if ($member['type'] === 'course') {
                $course = self::course($student, $member['id']);
                if (!$course) { continue; }
                $members[] = ['type' => 'course'] + $course;
                $remember($course['skill_ids'], $course['title']);
            } else {
                $item = self::curriculum($student, $member['id']);
                if (!$item) { continue; }
                $members[] = ['type' => 'curriculum'] + $item;
                $remember($item['skill_ids'], $item['name']);
            }
        }
        $enrolled = [];
        foreach ($members as $member) {
            foreach ($member['type'] === 'course' ? [$member] : $member['courses'] as $course) { if ($course['enrolled']) { $enrolled[] = $course['id']; } }
        }
        $enrolled = array_values(array_unique($enrolled));
        $all_terms = array_keys($skill_ids);
        $truncated = count($all_terms) > self::MAX_SKILLS;
        $entries = self::skill_entries($student, array_slice($all_terms, 0, self::MAX_SKILLS), $sources, $enrolled);
        uasort($entries, static function ($left, $right) {
            return array_search($left['classification'], self::CLASSES, true) <=> array_search($right['classification'], self::CLASSES, true) ?: strcmp($left['name'], $right['name']);
        });
        foreach ($members as &$member) {
            $mine = array_values(array_intersect_key($entries, array_flip($member['skill_ids'])));
            $member['skill_summary'] = self::summarize($mine);
            $member['skills'] = array_map(static function ($entry) { return ['term_id' => $entry['term_id'], 'name' => $entry['name'], 'level_label' => $entry['level_label'], 'classification' => $entry['classification'], 'classification_label' => $entry['classification_label']]; }, $mine);
            unset($member['skill_ids']);
            if ($member['type'] === 'curriculum') { foreach ($member['courses'] as &$course) { unset($course['skill_ids']); } unset($course); }
        }
        unset($member);
        $practice = array_values(array_filter($entries, static function ($entry) { return $entry['practice_url'] !== null; }));
        usort($practice, static function ($left, $right) { return self::practice_rank($left) <=> self::practice_rank($right) ?: strcmp($left['name'], $right['name']); });
        return [
            'track' => ['id' => (int) $track['id'], 'title' => $track['title'], 'description' => (string) $track['description']],
            'members' => $members,
            'skills' => array_values($entries),
            'skills_truncated' => $truncated,
            'skill_summary' => self::summarize($entries),
            'next_practice' => array_slice($practice, 0, self::PRACTICE_LIMIT),
            'combined' => self::combined($student, array_keys($entries), $entries),
        ];
    }
}
