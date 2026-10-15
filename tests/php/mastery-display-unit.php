<?php
/**
 * Unit checks for the Khan-style mastery names. Pure functions only; no WordPress needed.
 *
 * Run: php tests/php/mastery-display-unit.php
 */
define( 'ABSPATH', __DIR__ );
require dirname( __DIR__, 2 ) . '/includes/Skills/MasteryDisplay.php';
function check( $value, $message ) {
	if ( ! $value ) {
		throw new RuntimeException( $message );
	}
}
function __( $text, $domain = '' ) {
	return $text;
}
use OhMyLMS\Skills\MasteryDisplay as D;

$bands = array(
	array( 'from' => 0 ),
	array( 'from' => 70 ),
	array( 'from' => 80 ),
	array( 'from' => 90 ),
);

// Boundaries of the default bands.
check( 'not-started' === D::from_score( 0, 0, $bands ), 'No answers is Not started' );
check( 'attempted' === D::from_score( 9, 1, $bands ), 'First progress is Attempted' );
check( 'attempted' === D::from_score( 69.99, 8, $bands ), 'Just under 70 is Attempted' );
check( 'familiar' === D::from_score( 70, 9, $bands ), '70 is Familiar' );
check( 'familiar' === D::from_score( 79.99, 12, $bands ), 'Just under 80 is Familiar' );
check( 'proficient' === D::from_score( 80, 14, $bands ), '80 is Proficient' );
check( 'proficient' === D::from_score( 95, 20, $bands ), 'Challenge Zone is still Proficient' );
check( 'proficient' === D::from_score( 99.99, 30, $bands ), 'Just under 100 is Proficient' );
check( 'mastered' === D::from_score( 100, 40, $bands ), '100 is Mastered' );

// Odd inputs.
check( 'attempted' === D::from_score( 5, 0, $bands ), 'A stored score without a count still shows progress' );
check( 'not-started' === D::from_score( 0, 0, array() ), 'Missing bands do not break the empty case' );
check( 'familiar' === D::from_score( 70, 3, array() ), 'Missing bands fall back to 70 and 80' );
check( 'mastered' === D::from_score( 100.0000000001, 3, $bands ), 'Rounding noise above 100 is Mastered' );

// Administrator-tuned thresholds are honoured.
$tuned = array(
	array( 'from' => 0 ),
	array( 'from' => 60 ),
	array( 'from' => 75 ),
	array( 'from' => 90 ),
);
check( 'attempted' === D::from_score( 59, 5, $tuned ), 'Tuned: under 60 Attempted' );
check( 'familiar' === D::from_score( 60, 5, $tuned ), 'Tuned: 60 Familiar' );
check( 'proficient' === D::from_score( 75, 5, $tuned ), 'Tuned: 75 Proficient' );

// Fallback from the stored evidence level (no SmartScore).
check( 'not-started' === D::from_level( 'not-assessed' ), 'Not assessed' );
check( 'attempted' === D::from_level( 'developing' ), 'Developing maps to Attempted' );
check( 'proficient' === D::from_level( 'proficient' ), 'Proficient maps across' );
check( 'mastered' === D::from_level( 'mastered' ), 'Mastered maps across' );
check( 'not-started' === D::from_level( 'something-else' ), 'Unknown stored level is Not started' );
check( 'familiar' !== D::from_level( 'developing' ), 'The stored model never invents Familiar' );

// Ordering and the "to Proficient" test used by the progress summary.
check( D::rank( 'attempted' ) < D::rank( 'familiar' ) && D::rank( 'familiar' ) < D::rank( 'proficient' ) && D::rank( 'proficient' ) < D::rank( 'mastered' ), 'Levels are ordered' );
check( ! D::is_proficient( 'familiar' ) && D::is_proficient( 'proficient' ) && D::is_proficient( 'mastered' ), 'Only Proficient and above count' );
check( ! D::is_proficient( 'not-started' ) && ! D::is_proficient( 'unknown' ), 'Unknown and not started never count' );
check( 'Familiar' === D::label( 'familiar' ) && 'Not started' === D::label( 'not-started' ), 'Labels' );
check( 'custom' === D::label( 'custom' ), 'Unknown labels pass through' );

echo "mastery-display-unit: all checks passed\n";
