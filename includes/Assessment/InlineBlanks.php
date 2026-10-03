<?php
namespace OhMyLMS\Assessment;

/** Brace answers live in the authored title; public parts contain lengths only. */
final class InlineBlanks {
    public static function matches($actual, $expected, $question) {
        $settings = method_exists($question, 'get_settings') ? $question->get_settings() : [];
        if (!in_array($settings['case_sensitive'] ?? true, [false, 0, '0'], true)) {
            return (string) $actual === (string) $expected;
        }
        // Unicode case matching works without requiring the mbstring extension.
        return preg_match('/\A' . preg_quote((string) $expected, '/') . '\z/iu', (string) $actual) === 1;
    }
    public static function complete($question, array $answer) {
        $count = count(self::parse($question->get_name())['answers']);
        return !$count || (count($answer) === $count && !array_filter($answer, static function ($value) { return trim((string) $value) === ''; }));
    }
    public static function parse($title) {
        preg_match_all('/\{([^{}<>]+)\}/u', (string) $title, $matches, PREG_OFFSET_CAPTURE);
        $parts = []; $answers = []; $offset = 0;
        foreach ($matches[0] as $i => $match) {
            $answer = html_entity_decode($matches[1][$i][0], ENT_QUOTES | ENT_HTML5, 'UTF-8');
            if (trim($answer) === '') { continue; }
            $parts[] = ['text' => substr($title, $offset, $match[1] - $offset)];
            preg_match_all('/./us', $answer, $characters);
            $parts[] = ['length' => count($characters[0])];
            $answers[] = $answer;
            $offset = $match[1] + strlen($match[0]);
        }
        $parts[] = ['text' => substr($title, $offset)];
        return ['parts' => $parts, 'answers' => $answers];
    }

    public static function public_view(array $view) {
        if (($view['settings']['type'] ?? '') !== 'fill-in-the-blank' || isset($view['inline_blanks'])) { return $view; }
        $parsed = self::parse($view['name']);
        if (!$parsed['answers']) { return $view; }
        $view['inline_blanks'] = $parsed['parts'];
        $view['name'] = implode('', array_map(static function ($part) { return $part['text'] ?? '_____'; }, $parsed['parts']));
        return $view;
    }

    public static function render(array $view, array $attempt) {
        $view = self::public_view($view);
        if (empty($view['inline_blanks'])) { return wp_kses_post($view['name']); }
        $html = ''; $index = 0;
        foreach ($view['inline_blanks'] as $part) {
            if (isset($part['text'])) { $html .= wp_kses_post($part['text']); continue; }
            $length = max(1, (int) $part['length']);
            $name = 'attempt[' . ($attempt['id'] ?? 0) . '][quiz_question][' . $view['id'] . '][]';
            $html .= '<input type="text" class="ohmylms-text-input" autocomplete="off" aria-label="' . esc_attr(sprintf(__('Blank %d', 'ohmylms'), ++$index)) . '" data-question-id="' . esc_attr($view['id']) . '" name="' . esc_attr($name) . '" size="' . $length . '" style="display:inline-block;width:calc(' . $length . 'ch + 1.2em);min-width:0;max-width:100%;box-sizing:border-box;font:inherit;letter-spacing:inherit;padding:0.2em 0.5em;vertical-align:baseline">';
        }
        return $html;
    }
}
