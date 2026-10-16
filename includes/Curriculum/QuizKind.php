<?php
namespace OhMyLMS\Curriculum;

defined('ABSPATH') || exit;

/** Khan-style assessment kinds. A plain quiz stays the default so existing quizzes are unchanged. */
final class QuizKind {
    const META = 'ohmylms_quiz_kind';
    const KINDS = ['quiz', 'unit_test', 'course_challenge'];
    const SCOPES = ['quiz' => 'unit', 'unit_test' => 'unit', 'course_challenge' => 'course'];

    public static function normalize($kind) {
        return in_array($kind, self::KINDS, true) ? $kind : 'quiz';
    }

    public static function scope($kind) {
        return self::SCOPES[self::normalize($kind)];
    }

    public static function get($quiz_id) {
        return self::normalize((string) get_post_meta((int) $quiz_id, self::META, true));
    }

    public static function set($quiz_id, $kind) {
        if (!in_array($kind, self::KINDS, true)) { return false; }
        return (bool) update_post_meta((int) $quiz_id, self::META, $kind) || self::get($quiz_id) === $kind;
    }

    public static function describe($quiz_id) {
        $kind = self::get($quiz_id);
        return ['kind' => $kind, 'scope' => self::scope($kind)];
    }
}
