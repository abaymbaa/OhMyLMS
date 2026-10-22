<?php
/**
 * Pure unit checks for skill tracking: the level scale, the three level policies, the AI note's
 * facts and prompt, and the guidance model. No WordPress needed.
 *
 * Run: php tests/php/performance-unit.php
 */
define( 'ABSPATH', __DIR__ . '/' );
define( 'DAY_IN_SECONDS', 86400 );
function __( $text ) {
	return $text;
}
function wp_json_encode( $data, $flags = 0 ) {
	return json_encode( $data, $flags );
}
require dirname( __DIR__, 2 ) . '/vendor/autoload.php';

use OhMyLMS\Performance\GuidanceModel;
use OhMyLMS\Performance\Insights;
use OhMyLMS\Performance\Levels;
use OhMyLMS\Performance\Policies\EvidencePolicy;
use OhMyLMS\Performance\Policies\ScorePolicy;
use OhMyLMS\Performance\Policies\StepsPolicy;

$checks = 0;
function check( $condition, $message ) {
	global $checks;
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
	++$checks;
}

// The scale: one set of words, comparable.
check( Levels::SCALE === array( 'not-started', 'attempted', 'familiar', 'proficient', 'mastered' ), 'five levels, lowest first' );
check( Levels::rank( 'mastered' ) === 4 && Levels::rank( 'unknown' ) === 0, 'rank, unknown reads as not started' );
check( Levels::is_proficient( 'proficient' ) && Levels::is_proficient( 'mastered' ) && ! Levels::is_proficient( 'familiar' ), 'proficient and above' );
check( Levels::is_developing( 'attempted' ) && Levels::is_developing( 'familiar' ) && ! Levels::is_developing( 'not-started' ) && ! Levels::is_developing( 'proficient' ), 'developing is attempted or familiar' );
check( Levels::label( 'familiar' ) === 'Familiar', 'label' );

// Step rules.
check( Levels::exercise( 'not-started', 3, 10 ) === 'attempted' && Levels::exercise( 'not-started', 7, 10 ) === 'familiar' && Levels::exercise( 'attempted', 10, 10 ) === 'proficient', 'exercise sets 70% and 100% levels' );
check( Levels::exercise( 'familiar', 1, 10 ) === 'familiar', 'an exercise never lowers a level' );
check( Levels::exercise( 'mastered', 9, 10 ) === 'proficient' && Levels::exercise( 'mastered', 10, 10 ) === 'mastered', 'an imperfect exercise takes mastered back to proficient' );
check( Levels::exercise( 'familiar', 0, 0 ) === 'familiar', 'an empty exercise changes nothing' );
check( Levels::assessment( 'not-started', true ) === 'familiar' && Levels::assessment( 'familiar', true ) === 'proficient' && Levels::assessment( 'proficient', true ) === 'mastered' && Levels::assessment( 'mastered', true ) === 'mastered', 'all right moves up one step' );
check( Levels::assessment( 'mastered', false ) === 'proficient' && Levels::assessment( 'familiar', false ) === 'attempted' && Levels::assessment( 'not-started', false ) === 'attempted' && Levels::assessment( 'attempted', false ) === 'attempted', 'a miss moves down one step' );
$bands = array( array( 'from' => 0 ), array( 'from' => 70 ), array( 'from' => 80 ), array( 'from' => 90 ) );
check( Levels::from_score( 0, 0, $bands ) === 'not-started' && Levels::from_score( 40, 3, $bands ) === 'attempted' && Levels::from_score( 72, 5, $bands ) === 'familiar' && Levels::from_score( 85, 8, $bands ) === 'proficient' && Levels::from_score( 100, 20, $bands ) === 'mastered', 'score bands map to levels' );

// Evidence rows.
$now      = 2000000000;
$row      = static function ( $ok, $family, $at, $source = 'practice', $source_id = 1, $independent = 1, $first = 1 ) {
	return array(
		'awarded'     => $ok ? 1 : 0,
		'available'   => 1,
		'independent' => $independent,
		'first_try'   => $first,
		'family_id'   => $family,
		'question_id' => crc32( $family . $at ),
		'difficulty'  => 'standard',
		'source_type' => $source,
		'source_id'   => $source_id,
		'evidence_at' => gmdate( 'Y-m-d H:i:s', $at ),
	);
};
$context  = array(
	'rules'  => EvidencePolicy::DEFAULTS,
	'bands'  => $bands,
	'score'  => 0,
	'scored' => 0,
	'now'    => $now,
);
$evidence = new EvidencePolicy();
$steps    = new StepsPolicy();
$score    = new ScorePolicy();
check( $evidence->id() === 'evidence' && $steps->id() === 'steps' && $score->id() === 'score', 'policy ids' );
check( $evidence->level( array(), $context ) === 'not-started' && $steps->level( array(), $context ) === 'not-started', 'no evidence is not started' );

// Evidence policy: attempted, familiar, proficient, mastered.
check( $evidence->level( array( $row( 0, 'a', $now - 100 ) ), $context ) === 'attempted', 'one answer is attempted' );
check( $evidence->level( array( $row( 1, 'a', $now - 200 ), $row( 1, 'a', $now - 100 ) ), $context ) === 'familiar', 'two good answers are familiar' );
check( $evidence->level( array( $row( 1, 'a', $now - 30 ), $row( 1, 'b', $now - 20 ), $row( 1, 'c', $now - 10 ) ), $context ) === 'proficient', 'three correct from three families are proficient' );
check( $evidence->level( array( $row( 1, 'a', $now - 30 ), $row( 1, 'a', $now - 20 ), $row( 1, 'a', $now - 10 ) ), $context ) === 'familiar', 'one family is not proficient' );
check( $evidence->level( array( $row( 1, 'a', $now - 30, 'practice', 1, 1, 0 ), $row( 1, 'b', $now - 20, 'practice', 1, 1, 0 ) ), $context ) === 'attempted', 'retries do not count toward levels' );
check( $evidence->level( array( $row( 1, 'a', $now - 30, 'practice', 1, 0 ), $row( 1, 'b', $now - 20, 'practice', 1, 0 ) ), $context ) === 'attempted', 'hinted answers do not count toward levels' );
$spaced = array();
foreach ( array( 'a', 'b', 'c' ) as $i => $family ) {
	$spaced[] = $row( 1, $family, $now - 5 * 86400 + $i * 60 );
}
$spaced[] = $row( 1, 'd', $now - 3 * 86400 );
$spaced[] = $row( 1, 'e', $now - 86400 );
check( $evidence->level( $spaced, $context ) === 'mastered', 'a correct answer a day after proficiency is mastered' );
check( EvidencePolicy::evaluate( array_slice( $spaced, 0, 3 ), EvidencePolicy::DEFAULTS, $now )['review_due'] === 0, 'fresh proficiency is not due for review' );
$stale = array();
foreach ( array( 'a', 'b', 'c' ) as $i => $family ) {
	$stale[] = $row( 1, $family, $now - 40 * 86400 + $i * 60 );
}
$stale_state = EvidencePolicy::evaluate( $stale, EvidencePolicy::DEFAULTS, $now );
check( 1 === $stale_state['review_due'] && 'proficient' === $stale_state['level'], 'old proficient evidence is due for review' );

// Step policy: replay by activity.
$ten = static function ( $right, $source_id ) use ( $row, $now ) {
	$rows = array();
	for ( $i = 0; $i < 10; $i++ ) {
		$rows[] = $row( $i < $right ? 1 : 0, 'f' . $i, $now - 100000 + $source_id * 1000 + $i, 'practice', $source_id );
	}
	return $rows;
};
check( $steps->level( $ten( 10, 1 ), $context ) === 'proficient', 'a perfect exercise is proficient' );
check( $steps->level( array_merge( $ten( 7, 1 ), $ten( 3, 2 ) ), $context ) === 'familiar', 'a later weaker exercise does not lower a level' );
check( $steps->level( array_merge( $ten( 10, 1 ), $ten( 9, 2 ) ), $context ) === 'proficient', 'an imperfect exercise after a perfect one stays proficient' );
$quiz_right = array( $row( 1, 'q1', $now - 5000, 'quiz', 9 ), $row( 1, 'q2', $now - 4990, 'quiz', 9 ) );
$quiz_miss  = array( $row( 1, 'q3', $now - 3000, 'quiz', 10 ), $row( 0, 'q4', $now - 2990, 'quiz', 10 ) );
check( $steps->level( $quiz_right, $context ) === 'familiar', 'a quiz with every question right moves up one step' );
check( $steps->level( array_merge( $quiz_right, $quiz_miss ), $context ) === 'attempted', 'a missed question moves it down one step' );
$hinted = array( $row( 1, 'a', $now - 100, 'practice', 3, 0 ), $row( 1, 'b', $now - 90, 'practice', 3, 1 ) );
check( $steps->level( $hinted, $context ) === 'attempted', 'a hinted answer is not right in an exercise' );
$activities = StepsPolicy::activities( array_merge( $ten( 10, 1 ), $quiz_right ) );
check( count( $activities ) === 2 && $activities[0]['exercise'] && ! $activities[1]['exercise'] && 10 === $activities[0]['right'] && 2 === $activities[1]['total'], 'rows group into activities' );
check( StepsPolicy::activities( array() ) === array(), 'no rows, no activities' );

// Score policy.
$score_context = array_merge(
	$context,
	array(
		'score'  => 85,
		'scored' => 6,
	)
);
check( $score->level( array(), $score_context ) === 'proficient' && $score->level( array(), $context ) === 'not-started', 'the score policy reads the band' );

// AI note: trend, facts and prompt.
$series = static function ( array $results ) use ( $row, $now ) {
	$rows = array();
	foreach ( $results as $i => $ok ) {
		$rows[] = $row( $ok, 'f' . $i, $now - ( 100 - $i ) * 100 );
	}
	return $rows;
};
check( null === Insights::trend( $series( array( 1, 0, 1 ) ) ), 'too few answers say nothing about a trend' );
check( 'up' === Insights::trend( $series( array( 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ) ) ), 'recent answers better than earlier ones is up' );
check( 'down' === Insights::trend( $series( array( 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ) ) ), 'recent answers worse than earlier ones is down' );
check( 'steady' === Insights::trend( $series( array( 1, 0, 1, 1, 0, 1, 0, 1, 1, 0 ) ) ), 'similar accuracy is steady' );
$facts   = array(
	'counts' => array( 'familiar' => 1 ),
	'skills' => array(
		array(
			'skill' => 'Fractions',
			'level' => 'familiar',
		),
	),
	'next'   => array(),
);
$student = Insights::prompt( 'student', $facts, 'mn' );
$teacher = Insights::prompt( 'teacher', $facts, 'en_US' );
check( false !== strpos( $student['system'], 'you cannot affect' ) && false !== strpos( $student['system'], 'never say that a level, score or grade will change' ), 'the model is told the levels are not its to change' );
check( false !== strpos( $student['system'], 'mn' ) && false !== strpos( $teacher['system'], 'teacher' ) && false !== strpos( $teacher['system'], 'the learner' ), 'audience and language are in the instructions' );
check( 0 === strpos( $student['user'], '<skills>' ) && false !== strpos( $student['user'], 'Fractions' ) && false === strpos( $student['user'], '@' ), 'only the fenced skill facts are sent' );
check( '' !== $steps->description() && '' !== $evidence->label() && '' !== $score->label(), 'policies describe themselves' );

// Guidance: pooling. Objectives 101 and 102 are equivalent to shared skill 1; 102 is further along.
$day    = DAY_IN_SECONDS;
$pooled = GuidanceModel::pooled(
	array(
		101 => array(
			'level'            => 'familiar',
			'last_evidence_at' => $now - 20 * $day,
			'struggling'       => true,
		),
		102 => array(
			'level'            => 'proficient',
			'last_evidence_at' => $now - 30 * $day,
		),
		2   => array(
			'level'            => 'proficient',
			'last_evidence_at' => $now - 10 * $day,
		),
		3   => array(
			'level'            => 'mastered',
			'last_evidence_at' => $now - 2 * $day,
		),
		4   => array(
			'level'            => 'attempted',
			'last_evidence_at' => $now - $day,
			'struggling'       => true,
		),
	),
	array(
		101 => 1,
		102 => 1,
	)
);
check( array( 1, 2, 3, 4 ) === array_keys( $pooled ), 'equivalent objectives pool onto their shared skill' );
check( 'proficient' === $pooled[1]['level'] && $now - 20 * $day === $pooled[1]['last'] && array( 102, 101 ) === $pooled[1]['terms'], 'a pooled skill takes the best level and the latest answer, best member first' );
check( ! $pooled[1]['struggling'] && $pooled[4]['struggling'], 'a struggle only counts while the pooled skill is still developing' );

// Areas.
$place = static function ( $domain, $from, $to, $prerequisites = array() ) {
	return array(
		'domain'        => $domain,
		'grade_from'    => $from,
		'grade_to'      => $to,
		'prerequisites' => $prerequisites,
	);
};
$info  = array(
	1 => $place( 'algebra', 7, 8 ),
	2 => $place( 'algebra', 6, 6 ),
	3 => $place( 'geometry', 9, 10 ),
	4 => $place( 'number', 5, 5 ),
	5 => $place( 'algebra', 9, 9, array( 1, 2 ) ),
	6 => $place( 'geometry', 8, 8, array( 3 ) ),
	7 => $place( 'number', 6, 6, array( 4 ) ),
	8 => $place( 'algebra', 0, 0, array( 2 ) ),
	9 => $place( '', 0, 0 ),
);
$areas = GuidanceModel::areas( $pooled, $info );
check( array( 'geometry', 'algebra', 'number' ) === array_column( $areas, 'domain' ), 'areas are sorted strongest first' );
check( 100 === $areas[0]['strength'] && 80 === $areas[1]['strength'] && 20 === $areas[2]['strength'], 'strength is the mean of the level points' );
check( 2 === $areas[1]['started'] && 2 === $areas[1]['counts']['proficient'] && 8 === $areas[1]['grade'] && 0 === $areas[2]['grade'], 'areas count levels and the highest grade reached at proficient' );
check( 'strong' === GuidanceModel::strength_band( 80 ) && 'steady' === GuidanceModel::strength_band( 50 ) && 'building' === GuidanceModel::strength_band( 20 ), 'strength bands' );
$lone = array(
	9 => array(
		'level'      => 'mastered',
		'last'       => null,
		'struggling' => false,
		'terms'      => array(),
	),
);
check( array() === GuidanceModel::areas( $lone, $info ), 'skills without a domain are left out of areas' );

// Reach through "encompasses" chains: 3 includes 1 (0.5) and 1 includes 2 (0.6), so 3 reaches 2 at 0.3.
$links = array(
	3 => array( 1 => 0.5 ),
	1 => array( 2 => 0.6 ),
);
$reach = GuidanceModel::reach( $links );
check( 0.5 === $reach[3][1] && abs( $reach[3][2] - 0.3 ) < 0.0001 && 0.6 === $reach[1][2], 'weights multiply along a chain' );
check(
	! isset(
		GuidanceModel::reach(
			array(
				1 => array( 2 => 0.2 ),
				2 => array( 3 => 0.2 ),
			)
		)[1][3]
	),
	'a chain below the minimum credit is not followed'
);
check(
	! isset(
		GuidanceModel::reach(
			array(
				1 => array( 2 => 1.0 ),
				2 => array( 1 => 1.0 ),
			)
		)[1][1]
	),
	'a chain never credits the skill it starts from'
);

// Reviews, with a 14-day interval: skill 1 was due 6 days ago, but work on 3 since then covers half.
$reviews = GuidanceModel::reviews( $pooled, $links, $now, 14 );
check( array( 1, 2, 3 ) === array_keys( $reviews ), 'only proficient skills have reviews' );
check( 'covered' === $reviews[1]['status'] && 0.5 === $reviews[1]['credit'] && array( 3 => 0.5 ) === $reviews[1]['covered_by'], 'later work on a broader skill covers part of a review' );
check( $reviews[1]['effective_due_at'] === $reviews[1]['due_at'] + 7 * $day, 'credit moves the review later by its share of the interval' );
check( 'fresh' === $reviews[2]['status'] && abs( $reviews[2]['credit'] - 0.3 ) < 0.0001 && 'fresh' === $reviews[3]['status'] && 0.0 === $reviews[3]['credit'], 'recent skills are fresh, chained credit still counts' );
$early = GuidanceModel::reviews( $pooled, array( 1 => array( 2 => 1.0 ) ), $now, 7 );
check( 0.0 === $early[2]['credit'] && 'due' === $early[2]['status'] && array() === $early[2]['covered_by'], 'work done before the last answer earns no credit' );
$weak = GuidanceModel::reviews( $pooled, array( 4 => array( 3 => 1.0 ) ), $now + 30 * $day, 7 );
check( 0.0 === $weak[3]['credit'] && 'due' === $weak[3]['status'], 'work below familiar earns no credit' );
$cap  = GuidanceModel::pooled(
	array(
		10 => array(
			'level'            => 'proficient',
			'last_evidence_at' => $now - 30 * $day,
		),
		11 => array(
			'level'            => 'familiar',
			'last_evidence_at' => $now - $day,
		),
		12 => array(
			'level'            => 'proficient',
			'last_evidence_at' => $now - $day,
		),
	),
	array()
);
$full = GuidanceModel::reviews(
	$cap,
	array(
		11 => array( 10 => 0.7 ),
		12 => array( 10 => 0.6 ),
	),
	$now,
	20
);
check( 1.0 === $full[10]['credit'] && 'covered' === $full[10]['status'] && array( 11, 12 ) === array_keys( $full[10]['covered_by'] ), 'credit adds up across broader skills and is capped at one review' );

// Ready to learn.
$ready = GuidanceModel::ready( $pooled, $info, $areas );
check( array( 6, 5, 8 ) === array_column( $ready, 'skill' ), 'ready skills need every prerequisite proficient, earliest grade first, ungraded last' );
check( array( 1, 2 ) === $ready[1]['prerequisites'], 'ready skills list the prerequisites they build on' );

// Next steps.
$steps = GuidanceModel::next_steps( $pooled, $reviews, $ready, 4 );
check( array( 'help', 'ready', 'ready', 'ready' ) === array_column( $steps, 'type' ) && 4 === $steps[0]['skill'], 'help comes first; with nothing due, ready skills follow' );
$steps = GuidanceModel::next_steps( $pooled, $early, $ready, 4 );
check( array( 'help', 'review', 'review', 'ready' ) === array_column( $steps, 'type' ) && 1 === $steps[1]['skill'] && 2 === $steps[2]['skill'], 'due reviews, longest overdue first, come between help and ready skills' );

// Readiness for a syllabus: objectives 101 and 102 count as shared skill 1; 201 and 202 are untouched.
$readiness = GuidanceModel::readiness(
	array( 101, 102, 4, 201, 202 ),
	$pooled,
	array(
		101 => 1,
		102 => 1,
	),
	2
);
check( 5 === $readiness['total'] && 2 === $readiness['ready'] && 1 === $readiness['learning'] && 2 === $readiness['not_started'], 'readiness counts objectives through the pool' );
check( 44 === $readiness['percent'], 'readiness percent: ' . $readiness['percent'] );
check( array( 4, 201 ) === $readiness['gaps'], 'gaps list started objectives first' );
check( 0 === GuidanceModel::readiness( array(), $pooled, array() )['percent'], 'an empty syllabus is 0% ready' );

echo $checks . " performance unit checks passed.\n";
