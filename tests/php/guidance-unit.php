<?php
/**
 * Pure unit checks for the guidance rules: domain strength, ready-to-learn frontier, gaps,
 * reviews with implicit credit, the personal path and readiness. No WordPress needed.
 *
 * Run: php tests/php/guidance-unit.php
 */
define( 'ABSPATH', __DIR__ . '/' );
function __( $text ) {
	return $text;
}
require dirname( __DIR__, 2 ) . '/vendor/autoload.php';

use OhMyLMS\Guidance\Model as G;

$checks = 0;
function check( $condition, $message ) {
	global $checks;
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
	++$checks;
}

// A small library: 1 → 2 → 3 (algebra chain), 4 geometry, 5 a grade-10 skill, 6 needs 4.
$skills = array(
	1 => array( 'name' => 'Simplify expressions', 'domain' => 'algebra', 'grade_from' => 6, 'grade_to' => 6 ),
	2 => array( 'name' => 'Solve linear equations', 'domain' => 'algebra', 'grade_from' => 7, 'grade_to' => 8 ),
	3 => array( 'name' => 'Solve quadratic equations', 'domain' => 'algebra', 'grade_from' => 9, 'grade_to' => 9 ),
	4 => array( 'name' => 'Area of triangles', 'domain' => 'geometry', 'grade_from' => 6, 'grade_to' => 6 ),
	5 => array( 'name' => 'Differentiate', 'domain' => 'calculus', 'grade_from' => 12, 'grade_to' => 12 ),
	6 => array( 'name' => 'Area of composite shapes', 'domain' => 'geometry', 'grade_from' => 7, 'grade_to' => 7 ),
);
$prereqs = array(
	2 => array( 1 ),
	3 => array( 2 ),
	6 => array( 4 ),
);
$now = 2000000000;

// Scope.
check( array_keys( G::scope( $skills, 7 ) ) === array( 1, 2, 4, 6 ), 'scope keeps skills learned up to the grade' );
check( count( G::scope( $skills, 0 ) ) === 6, 'no grade keeps every skill' );

// Domain strength.
$states  = array(
	1 => array( 'level' => 'mastered' ),
	2 => array( 'level' => 'familiar' ),
	4 => array( 'level' => 'attempted' ),
);
$domains = G::domains( G::scope( $skills, 9 ), $states, array( 'algebra' => 'Algebra' ) );
check( 'algebra' === $domains[0]['domain'] && 'Algebra' === $domains[0]['label'] && 50 === $domains[0]['strength'] && 3 === $domains[0]['skills'] && 2 === $domains[0]['started'] && 1 === $domains[0]['mastered'], 'algebra strength is the mean level weight: ' . json_encode( $domains[0] ) );
check( 'geometry' === $domains[1]['domain'] && 13 === $domains[1]['strength'] && 'geometry' === $domains[1]['label'], 'strongest domain first; an unlabelled domain uses its id: ' . json_encode( $domains[1] ) );
check( G::domains( array( 9 => array( 'name' => 'x', 'domain' => '' ) ), array() ) === array(), 'skills without a domain are left out' );

// Frontier: not proficient, every prerequisite proficient.
$frontier = G::frontier( G::scope( $skills, 9 ), $states, $prereqs );
check( array( 4, 2 ) === $frontier, 'ready, lowest grade first: triangles, then the started linear skill (its prerequisite is mastered); quadratics wait: ' . json_encode( $frontier ) );
$fresh = G::frontier( $skills, array(), $prereqs );
check( array( 1, 4, 5 ) === $fresh, 'a new learner starts with skills that need nothing, lowest grade first and skills that unlock more first: ' . json_encode( $fresh ) );
check( 1 === $fresh[0], 'a skill that unlocks another comes before one that does not at the same grade' );

// Gaps: a struggling skill with a weak prerequisite.
$stuck = array(
	1 => array( 'level' => 'familiar', 'last_evidence_at' => $now - 500 ),
	2 => array( 'level' => 'attempted', 'struggling' => 1, 'last_evidence_at' => $now - 100 ),
	6 => array( 'level' => 'attempted', 'struggling' => 1, 'last_evidence_at' => $now - 50 ),
);
$gaps  = G::gaps( $stuck, $prereqs );
check( array( array( 'skill' => 6, 'fix' => 4 ), array( 'skill' => 2, 'fix' => 1 ) ) === $gaps, 'most recent stuck skill first, with the prerequisite to fix: ' . json_encode( $gaps ) );
check( G::gaps( array( 2 => array( 'level' => 'attempted', 'struggling' => 1 ) ), array() ) === array(), 'no prerequisite, no gap' );

// Implicit review credit and reviews.
$encompasses = array(
	3 => array( 2 => 0.6, 1 => 0.5 ),
	6 => array( 4 => 1.0 ),
	2 => array( 1 => 0.6 ),
);
$review_states = array(
	1 => array( 'level' => 'proficient', 'review_due' => 1, 'last_evidence_at' => $now - 9000 ),
	2 => array( 'level' => 'proficient', 'review_due' => 1, 'last_evidence_at' => $now - 8000, 'last_correct_at' => $now - 8000 ),
	3 => array( 'level' => 'familiar', 'last_evidence_at' => $now - 100, 'last_correct_at' => $now - 100 ),
	4 => array( 'level' => 'proficient', 'review_due' => 1, 'last_evidence_at' => $now - 7000 ),
	6 => array( 'level' => 'familiar', 'last_evidence_at' => $now - 200, 'last_correct_at' => $now - 7500 ),
);
$credit = G::implicit_credit( 1, $review_states, $encompasses );
check( 1.1 === $credit['credit'] && array( 3, 2 ) === $credit['from'], 'credit sums the weights of including skills answered right since: ' . json_encode( $credit ) );
check( 0.6 === G::implicit_credit( 2, $review_states, $encompasses )['credit'], 'partial credit stays below a full review' );
check( 0.0 === G::implicit_credit( 5, $review_states, $encompasses )['credit'], 'no including skill, no credit' );
$reviews = G::reviews( $review_states, $encompasses );
check( array( 2, 4 ) === $reviews['due'], 'due reviews, longest idle first; a fully covered one is left out: ' . json_encode( $reviews ) );
check( array( array( 'skill' => 1, 'by' => array( 3, 2 ) ) ) === $reviews['covered'], 'the covered review names the skills that covered it' );

// The path.
$path = G::path( G::scope( $skills, 9 ), $review_states, $prereqs, $encompasses );
check( count( $path ) <= G::PATH_LENGTH && $path, 'the path is short' );
check( ! in_array( 'review', array_column( $path, 'type' ), true ), 'no separate review step: both due reviews happen inside ready skills that include them: ' . json_encode( $path ) );
$types = array_column( $path, 'type', 'skill' );
check( isset( $types[3] ) && 'continue' === $types[3], 'the started quadratics skill (prerequisite now proficient) is continued' );
$quad = array_values( array_filter( $path, static fn( $step ) => 3 === $step['skill'] ) )[0];
check( array( 2 ) === $quad['reviews'], 'working quadratics also reviews linear equations: ' . json_encode( $quad ) );
check( 6 === $path[0]['skill'] && array( 4 ) === $path[0]['reviews'], 'composite areas come first (lower grade) and also review triangles: ' . json_encode( $path[0] ) );
$lone = $review_states;
unset( $lone[6] );
$lone_path = G::path( G::scope( $skills, 9 ), $lone, $prereqs, array( 3 => array( 2 => 0.6 ) ) );
check( 'review' === $lone_path[0]['type'] && 1 === $lone_path[0]['skill'], 'a due review no ready skill includes comes first: ' . json_encode( $lone_path ) );
check( count( array_unique( array_column( $path, 'skill' ) ) ) === count( $path ), 'no skill appears twice' );
$new_path = G::path( $skills, array(), $prereqs, array(), 3 );
check( array( 'learn', 'learn', 'learn' ) === array_column( $new_path, 'type' ) && array( 1, 4, 5 ) === array_column( $new_path, 'skill' ), 'a new learner gets skills to learn: ' . json_encode( $new_path ) );
$fix_path = G::path( $skills, $stuck, $prereqs, array() );
check( 'fix' === $fix_path[0]['type'] && 4 === $fix_path[0]['skill'], 'a stuck learner is sent to fix the weak prerequisite first: ' . json_encode( $fix_path ) );
check( G::path( array(), array(), array(), array() ) === array(), 'an empty library gives an empty path' );

// Readiness.
$ready = G::readiness( array( 1, 2, 3, 3 ), array( 1 => array( 'level' => 'mastered' ), 2 => array( 'level' => 'proficient' ), 3 => array( 'level' => 'familiar' ) ) );
check( 67 === $ready['percent'] && 3 === $ready['total'] && 2 === $ready['proficient'] && array( 3 ) === $ready['missing'], 'readiness is the share of target skills held at Proficient: ' . json_encode( $ready ) );
check( 0 === G::readiness( array(), array() )['percent'], 'an empty target is 0%' );

echo $checks . " guidance unit checks passed.\n";
