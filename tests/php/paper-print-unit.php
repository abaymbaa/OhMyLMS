<?php
// Printable paper: settings validation, the printed page box and print links.
define('ABSPATH', __DIR__);
define('OHMYLMS_DIR', dirname(__DIR__, 2));
define('OHMYLMS_FILE', OHMYLMS_DIR . '/ohmylms.php');
require OHMYLMS_DIR . '/vendor/autoload.php';
$GLOBALS['translation'] = 'Page %1$s of %2$s';
function __($text, $domain) { return 'Page %1$s of %2$s' === $text ? $GLOBALS['translation'] : $text; }
function wp_create_nonce($action) { return 'nonce-' . $action; }
function home_url($path) { return 'https://example.test' . $path; }
function add_query_arg(array $args, $url) { return $url . '?' . http_build_query($args); }
function check($condition, $message) { if (!$condition) { throw new RuntimeException($message); } }
use OhMyLMS\Exams\PaperSettings;
use OhMyLMS\Exams\PrintPaper;

check(PaperSettings::sanitize(null) === PaperSettings::DEFAULTS, 'Missing settings fall back to the defaults');
$odd = PaperSettings::sanitize(['size' => 'a0', 'margin' => '99', 'font_size' => 3, 'font' => '<b>', 'numbering' => 'q', 'show_marks' => '0', 'lines_per_mark' => 'x', 'default_view' => true, 'evil' => 'x']);
check('a4' === $odd['size'] && 30 === $odd['margin'] && 9 === $odd['font_size'], 'Size and numbers are clamped');
check('sans' === $odd['font'] && 'q' === $odd['numbering'], 'Choices keep only allowed values');
check(false === $odd['show_marks'] && true === $odd['default_view'] && 2 === $odd['lines_per_mark'], 'Flags and invalid numbers are normalized');
check(!isset($odd['evil']) && array_keys($odd) === array_keys(PaperSettings::DEFAULTS), 'Only known fields are kept');

$css = PrintPaper::page_css(PaperSettings::sanitize(['size' => 'letter', 'margin' => 25, 'font_size' => 12]));
check(str_contains($css, '@page{size:letter;margin:25mm;'), 'The page box uses the paper size and margins');
check(str_contains($css, 'content:"Page " counter(page) " of " counter(pages)'), 'Page numbers use the print counters');
check(str_contains($css, '--ohmylms-paper-font-size:12pt') && str_contains($css, '--ohmylms-paper-width:215.9mm'), 'The sheet matches the settings');
check(!str_contains(PrintPaper::page_css(PaperSettings::sanitize(['page_numbers' => false])), '@bottom-center'), 'Page numbers can be left out');

// A translation may reorder the counters and must not break out of the CSS string.
$GLOBALS['translation'] = '%2$s pages; "now" %1$s </style>';
$css = PrintPaper::page_css(PaperSettings::DEFAULTS);
check(str_contains($css, 'content:counter(pages) " pages; \"now\" " counter(page) " \3c /style>"') && !str_contains($css, '</style'),'Translated footers keep their order and are escaped: ' . $css);

$url = PrintPaper::url(42, 'key');
check(str_contains($url, 'ohmylms_print=42') && str_contains($url, 'variant=key') && str_contains($url, '_wpnonce=nonce-ohmylms_print_42'), 'Print links carry the exam, variant and an exam-specific nonce');
check(str_contains(PrintPaper::url(42, 'anything'), 'variant=paper'), 'Unknown variants print the student paper');
echo "paper-print-unit: ok\n";
