<?php
namespace OhMyLMS\Curriculum;

use OhMyLMS\Skills\Taxonomy;
use OhMyLMS\Tracks\Follows;
use OhMyLMS\Tracks\Tracks;

defined('ABSPATH') || exit;

/** Wires curriculum storage, cleanup of references to deleted content, and the learner dashboard. */
final class Bootstrap {
    public static function init() {
        add_action('init', [Schema::class, 'install'], 7);
        add_action('before_delete_post', [__CLASS__, 'post_deleted']);
        // Core fires `delete_term` after the term is gone from the database; there is no `deleted_term`.
        add_action('delete_term', [__CLASS__, 'term_deleted'], 10, 3);
        add_action('deleted_user', [Follows::class, 'remove_user']);
        \OhMyLMS\Tracks\Frontend::init();
        Directory::init();
    }

    /** A deleted course or quiz/exam leaves no curriculum links, and a deleted course leaves no track slot. */
    public static function post_deleted($post_id) {
        if (!Schema::ready()) { return; }
        $type = get_post_type($post_id);
        if ($type === OHMYLMS_COURSE_CPT) {
            Links::remove_object('course', $post_id);
            Tracks::remove_member('course', $post_id);
        } elseif ($type === OHMYLMS_QUIZ_CPT) {
            Links::remove_object('quiz', $post_id);
        }
    }

    /** A deleted skill leaves no curriculum links or mappings. Learner evidence is handled by the skills module. */
    public static function term_deleted($term_id, $tt_id, $taxonomy) {
        if ($taxonomy !== Taxonomy::NAME || !Schema::ready()) { return; }
        Links::remove_object('skill', $term_id);
        SkillMappings::remove_skill($term_id);
        Syllabus::remove_term($term_id);
    }
}
