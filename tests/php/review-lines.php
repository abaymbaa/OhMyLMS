<?php
/** Standalone: readable answer-review lines for ID-based question types. Run: php tests/php/review-lines.php */
define( 'ABSPATH', __DIR__ );
function __( $value, $domain = '' ) {
	return $value;
}
require dirname( __DIR__, 2 ) . '/includes/Extensions/Registry.php';
require dirname( __DIR__, 2 ) . '/includes/Assessment/ReviewLines.php';

use OhMyLMS\Assessment\ReviewLines;
use OhMyLMS\Extensions\Registry;

$noop = static function () {
	return true;
};
Registry::register(
	'question',
	'demo-addon',
	array(
		'label'           => 'Demo',
		'render'          => $noop,
		'validate'        => $noop,
		'grade'           => $noop,
		'review_given'    => static function ( $given, $settings ) {
			return array( 'You chose ' . $given['q'] );
		},
		'review_expected' => static function ( $settings ) {
			return array( 'The answer is ' . $settings['right'] );
		},
	)
);

$checks = array();
$check  = static function ( $label, $actual, $expected ) use ( &$checks ) {
	$checks[ $label ] = $actual === $expected;
	if ( $actual !== $expected ) {
		fwrite( STDERR, $label . ': ' . json_encode( $actual, JSON_UNESCAPED_UNICODE ) . "\n" );
	}
};

$tokens = array( 'tokens' => array( array( 'id' => 't1', 'text' => 'two' ), array( 'id' => 't2', 'text' => 'three' ), array( 'id' => 't3', 'text' => 'four' ) ), 'correct' => array( 't1', 't3' ) );
$check( 'hot-text given', ReviewLines::given( 'hot-text', array( 't1' => '1', 't2' => '0', 't3' => '1' ), $tokens ), array( 'two', 'four' ) );
$check( 'hot-text expected', ReviewLines::expected( 'hot-text', $tokens ), array( 'two', 'four' ) );

$grid = array(
	'rows'    => array( array( 'id' => 'r1', 'label' => '2 + 2' ), array( 'id' => 'r2', 'label' => '3 + 3' ) ),
	'columns' => array( array( 'id' => 'c1', 'label' => '4' ), array( 'id' => 'c2', 'label' => '6' ) ),
	'key'     => array( 'r1' => 'c1', 'r2' => 'c2' ),
);
$check( 'grid given', ReviewLines::given( 'match-table-grid', array( 'r1' => 'c2', 'r2' => 'c2' ), $grid ), array( '2 + 2 → 6', '3 + 3 → 6' ) );
$check( 'grid expected', ReviewLines::expected( 'match-table-grid', $grid ), array( '2 + 2 → 4', '3 + 3 → 6' ) );
$multi = array_merge( $grid, array( 'multiple' => true, 'key' => array( 'r1' => array( 'c1', 'c2' ), 'r2' => array( 'c2' ) ) ) );
$check( 'grid multiple given', ReviewLines::given( 'match-table-grid', array( 'r1' => '["c1","c2"]' ), $multi ), array( '2 + 2 → 4, 6' ) );

$cat = array( 'items' => array( array( 'id' => 'i1', 'text' => 'Cat' ) ), 'buckets' => array( array( 'id' => 'b1', 'label' => 'Animals' ) ), 'key' => array( 'i1' => 'b1' ) );
$check( 'categorize given', ReviewLines::given( 'categorize', array( 'i1' => 'b1' ), $cat ), array( 'Cat → Animals' ) );

$label = array( 'targets' => array( array( 'id' => 'a', 'answer' => 'Heart' ), array( 'id' => 'b', 'answer' => 'Lung' ) ) );
$check( 'labeling given', ReviewLines::given( 'labeling', array( 'a' => 'Heart', 'b' => 'Liver' ), $label ), array( 'Label 1: Heart', 'Label 2: Liver' ) );
$check( 'labeling expected', ReviewLines::expected( 'labeling', $label ), array( 'Label 1: Heart', 'Label 2: Lung' ) );

$check( 'hotspot given', ReviewLines::given( 'hotspot', array( 'x' => '10.5', 'y' => '20' ), array() ), array( '(10.5%, 20%)' ) );
$check( 'hotspot expected', ReviewLines::expected( 'hotspot', array( 'zones' => array( array( 'x' => 50, 'y' => 50, 'radius' => 12 ) ) ) ), array( 'Area 1: around (50%, 50%)' ) );

$video = array( 'checkpoints' => array( array( 'id' => 'a', 'prompt' => 'What is 2 + 2?', 'answer' => '4' ) ) );
$check( 'video given', ReviewLines::given( 'interactive-video', array( 'a' => ' 5 ' ), $video ), array( 'What is 2 + 2? → 5' ) );
$check( 'video expected', ReviewLines::expected( 'interactive-video', $video ), array( 'What is 2 + 2? → 4' ) );

$check( 'graph given', ReviewLines::given( 'graphing', array( 'points' => '[{"x":1,"y":2},{"x":3,"y":4}]' ), array() ), array( '(1, 2), (3, 4)' ) );
$check( 'graph line expected', ReviewLines::expected( 'graphing', array( 'mode' => 'line', 'points' => array( array( 'x' => 0, 'y' => 0 ), array( 'x' => 1, 'y' => 2 ) ) ) ), array( 'A line through (0, 0) and (1, 2)' ) );

$check( 'add-on callbacks given', ReviewLines::given( 'demo-addon', array( 'q' => 'b' ), array() ), array( 'You chose b' ) );
$check( 'add-on callbacks expected', ReviewLines::expected( 'demo-addon', array( 'right' => 'a' ) ), array( 'The answer is a' ) );
$check( 'unknown type falls through', ReviewLines::given( 'single-choice', array( '1' ), array() ), null );
$check( 'unknown type expected falls through', ReviewLines::expected( 'single-choice', array() ), null );

$failed = array_keys( array_filter( $checks, static fn( $ok ) => ! $ok ) );
if ( $failed ) {
	fwrite( STDERR, 'FAILED: ' . implode( ', ', $failed ) . "\n" );
	exit( 1 );
}
echo count( $checks ) . " review-lines checks passed.\n";
