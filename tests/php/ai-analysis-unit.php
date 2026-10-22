<?php
/**
 * Pure unit checks for AI syllabus analysis: candidate search, prompts and reply checking.
 *
 * Run: php tests/php/ai-analysis-unit.php
 */
define( 'ABSPATH', __DIR__ . '/' );
require dirname( __DIR__, 2 ) . '/vendor/autoload.php';

use OhMyLMS\Curriculum\AiAnalysisModel as M;

$checks = 0;
function check( $condition, $message ) {
	global $checks;
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
	++$checks;
}

// Words: any script, no stop words, light stemming.
check( M::tokens( 'Solving the linear equations' ) === array( 'solv', 'linear', 'equation' ), 'tokens: ' . implode( ',', M::tokens( 'Solving the linear equations' ) ) );
check( M::tokens( 'Шугаман тэгшитгэл бодох' ) === array( 'шугаман', 'тэгшитгэл', 'бодох' ), 'Cyrillic words are kept' );
check( M::name_key( 'Solve linear equations' ) === M::name_key( 'solving Linear Equation' ), 'similar names share a key' );

// Ranking.
$docs  = array(
	1 => 'Solve linear equations in one variable',
	2 => 'Area of a circle',
	3 => 'Simultaneous linear equations in two variables',
	4 => 'Probability of independent events',
);
$ranks = M::rank( 'solve a linear equation', $docs, 3 );
check( array_keys( $ranks )[0] === 1 && isset( $ranks[3] ) && ! isset( $ranks[2] ), 'BM25 ranks the closest skill first: ' . json_encode( $ranks ) );
check( M::rank( '', $docs ) === array() && M::rank( 'equation', array() ) === array(), 'empty query or library ranks nothing' );

// Candidates: keyword matches, topped up with the same domain at nearby grades.
$skills = array(
	1 => array( 'name' => 'Solve linear equations', 'domain' => 'algebra', 'grade_from' => 7, 'grade_to' => 8 ),
	2 => array( 'name' => 'Expand brackets', 'domain' => 'algebra', 'grade_from' => 7, 'grade_to' => 7 ),
	3 => array( 'name' => 'Differentiate polynomials', 'domain' => 'calculus', 'grade_from' => 12, 'grade_to' => 12 ),
	4 => array( 'name' => 'Factorise quadratics', 'domain' => 'algebra', 'grade_from' => 10, 'grade_to' => 10 ),
	5 => array( 'name' => 'Area of triangles', 'domain' => 'geometry', 'grade_from' => 6, 'grade_to' => 6 ),
);
$objective = array(
	'name'       => 'Шугаман тэгшитгэл бодох',
	'gloss'      => 'Solve linear equations in one variable',
	'domain'     => 'algebra',
	'grade_from' => 7,
	'grade_to'   => 7,
);
$found     = M::candidates( $objective, $skills, 4 );
check( 1 === $found[0], 'the English gloss finds the skill for a Mongolian objective: ' . json_encode( $found ) );
check( in_array( 2, $found, true ) && ! in_array( 4, $found, true ), 'same-domain skills at nearby grades top up, far grades do not: ' . json_encode( $found ) );
check( ! in_array( 3, $found, true ) && ! in_array( 5, $found, true ), 'other domains without keyword matches are left out' );
check( M::candidates( $objective, array() ) === array(), 'no library, no candidates' );

// Prompts fence the data and name the allowed values.
$domains  = array(
	'algebra'  => 'Algebra',
	'geometry' => 'Geometry',
);
$classify = M::classify_prompt(
	array( 'syllabus' => 'Grade 7 <script>' ),
	array(
		array(
			'id'   => 9,
			'code' => '7.A.1',
			'name' => 'Solve <b>equations</b>',
		),
	),
	$domains
);
check( false !== strpos( $classify['system'], 'algebra, geometry' ) && false !== strpos( $classify['user'], '<objectives>' ) && false === strpos( $classify['user'], '<script>' ) && false === strpos( $classify['user'], '<b>' ), 'classify prompt lists domains and strips markup' );
$match = M::match_prompt(
	array( 'syllabus' => 'IGCSE' ),
	array(
		array(
			'id'         => 9,
			'name'       => 'Solve equations',
			'gloss'      => 'Solve linear equations',
			'candidates' => array(
				array(
					'id'     => '1',
					'name'   => 'Solve linear equations',
					'domain' => 'algebra',
					'grades' => 'G7-8',
				),
				array(
					'id'   => 'n5',
					'name' => 'Proposed skill',
				),
			),
		),
	)
);
check( false !== strpos( $match['user'], 'Objective 9' ) && false !== strpos( $match['user'], '- 1: Solve linear equations' ) && false !== strpos( $match['user'], '- n5: Proposed skill' ), 'match prompt lists each objective with its own candidates' );
check( false !== strpos( $match['system'], '"equivalent"' ) && false !== strpos( $match['system'], 'prefer no match to a weak one' ), 'match prompt defines the relations and asks for strictness' );

// Replies: JSON inside fences or words; unknown objectives, values and candidates are dropped.
$reply = "Here you go:\n```json\n" . json_encode(
	array(
		'results' => array(
			array(
				'id'         => 9,
				'domain'     => 'algebra',
				'grade_from' => 8,
				'grade_to'   => 7,
				'gloss'      => 'Solve linear equations',
				'confidence' => 1.4,
			),
			array(
				'id'     => 10,
				'domain' => 'astrology',
			),
			array(
				'id'     => 99,
				'domain' => 'algebra',
			),
		),
	)
) . "\n```";
$placed = M::parse_classify( $reply, array( 9, 10 ), $domains );
check( 8 === $placed[9]['grade_from'] && 8 === $placed[9]['grade_to'] && 1.0 === $placed[9]['confidence'], 'grades are ordered and confidence capped' );
check( '' === $placed[10]['domain'] && ! isset( $placed[99] ), 'unknown domains and objectives are dropped' );
check( M::parse_classify( 'no json here', array( 9 ), $domains ) === array() && M::json( '{broken' ) === null, 'unreadable replies give nothing' );
check( M::grades( 14, 20 ) === array( 13, 13 ) && M::grades( 0, 5 ) === array( 0, 0 ) && M::grades( 3, 0 ) === array( 3, 3 ), 'grade bands are bounded' );

$reply   = json_encode(
	array(
		'results' => array(
			array(
				'id'        => 9,
				'matches'   => array(
					array(
						'skill'      => '1',
						'relation'   => 'equivalent',
						'confidence' => 0.92,
						'reason'     => 'Same ability.',
					),
					array(
						'skill'      => '3',
						'relation'   => 'related',
						'confidence' => 0.5,
					),
					array(
						'skill'      => 'n5',
						'relation'   => 'combined',
						'confidence' => 0.9,
					),
				),
				'new_skill' => null,
			),
			array(
				'id'        => 10,
				'matches'   => array(),
				'new_skill' => array(
					'name'       => 'Solve <i>quadratic</i> equations',
					'domain'     => 'algebra',
					'grade_from' => 10,
					'confidence' => 0.8,
				),
			),
			array(
				'id'        => 11,
				'new_skill' => array( 'name' => '' ),
			),
		),
	)
);
$matched = M::parse_match(
	$reply,
	array(
		9  => array( '1', '2', 'n5' ),
		10 => array( '1' ),
		11 => array(),
	),
	$domains
);
check( count( $matched[9]['matches'] ) === 1 && '1' === $matched[9]['matches'][0]['skill'] && 0.92 === $matched[9]['matches'][0]['confidence'], 'only own candidates with allowed relations survive: ' . json_encode( $matched[9] ) );
check( null === $matched[9]['new_skill'] && 'Solve quadratic equations' === $matched[10]['new_skill']['name'] && 10 === $matched[10]['new_skill']['grade_to'], 'a new skill is cleaned and gets a full grade band' );
check( null === $matched[11]['new_skill'] && array() === $matched[11]['matches'], 'a nameless new skill is dropped' );

echo $checks . " AI analysis unit checks passed.\n";
