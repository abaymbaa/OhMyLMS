<?php
namespace OhMyLMS\QuestionBank;

defined('ABSPATH') || exit;

/**
 * Object-level authorization for question and quiz authoring.
 *
 * Services call these checks themselves, so nested writes (a quiz save that
 * creates or updates questions) cannot bypass the REST permission callbacks.
 */
final class AccessPolicy {
    /** May the current user author new quiz/question content at all? */
    public static function can_author() {
        return current_user_can('edit_posts');
    }

    public static function can_edit_question($question_id) {
        $question_id = (int) $question_id;
        if (!$question_id) { return self::can_author(); }
        if (get_post_type($question_id) !== OHMYLMS_QUESTION_CPT) { return false; }
        return current_user_can('edit_post', $question_id) || self::bank_allows($question_id, 'edit');
    }

    /** May the current user approve a version of this question for shared use and practice? */
    public static function can_approve_question($question_id) {
        $question_id = (int) $question_id;
        if (!$question_id || get_post_type($question_id) !== OHMYLMS_QUESTION_CPT) { return false; }
        $bank = \OhMyLMS\Assessment\Schema::ready() ? Banks::of_question($question_id) : 0;
        return $bank ? Banks::can($bank, 'approve') : current_user_can('edit_post', $question_id);
    }

    private static function bank_allows($question_id, $permission) {
        if (!\OhMyLMS\Assessment\Schema::ready()) { return false; }
        $bank = Banks::of_question($question_id);
        return $bank > 0 && Banks::can($bank, $permission);
    }

    public static function can_delete_question($question_id) {
        $question_id = (int) $question_id;
        return $question_id && get_post_type($question_id) === OHMYLMS_QUESTION_CPT && current_user_can('delete_post', $question_id);
    }

    /**
     * May the current user place this question in their assessments without editing it?
     * Editors of the question may always use it; shared-bank grants extend this.
     */
    public static function can_use_question($question_id) {
        $question_id = (int) $question_id;
        if (!$question_id || get_post_type($question_id) !== OHMYLMS_QUESTION_CPT) { return false; }
        if (current_user_can('edit_post', $question_id) || self::bank_allows($question_id, 'use')) { return true; }
        return (bool) apply_filters('ohmylms_can_use_question', false, $question_id, get_current_user_id());
    }

    public static function can_edit_quiz($quiz_id) {
        $quiz_id = (int) $quiz_id;
        if (!$quiz_id) { return self::can_author(); }
        return get_post_type($quiz_id) === OHMYLMS_QUIZ_CPT && current_user_can('edit_post', $quiz_id);
    }

    public static function can_delete_quiz($quiz_id) {
        $quiz_id = (int) $quiz_id;
        return $quiz_id && get_post_type($quiz_id) === OHMYLMS_QUIZ_CPT && current_user_can('delete_post', $quiz_id);
    }

    /** Grading and attempt reports belong to whoever may edit the quiz. */
    public static function can_grade_quiz($quiz_id) {
        return (int) $quiz_id > 0 && self::can_edit_quiz($quiz_id);
    }

    /** WP_Error for a failed check, using the REST convention of 401 for guests and 403 otherwise. */
    public static function denied($message = '') {
        return new \WP_Error(
            'ohmylms_forbidden',
            $message ?: __('You are not allowed to change this content.', 'ohmylms'),
            ['status' => rest_authorization_required_code()]
        );
    }

    /** Returns true or a WP_Error; for REST permission callbacks and service guards. */
    public static function check($allowed, $message = '') {
        return $allowed ? true : self::denied($message);
    }
}
