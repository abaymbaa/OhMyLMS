<?php
/**
 * Batch display levels: for_students() must give every learner exactly what for_student() gives, from a
 * fixed number of queries. A small in-memory $wpdb stands in for the three tables (no WordPress needed).
 *
 * Run: php tests/php/mastery-display-batch-unit.php
 */
error_reporting( E_ALL & ~E_DEPRECATED );
define( 'ABSPATH', __DIR__ );
require dirname( __DIR__, 2 ) . '/vendor/autoload.php';

$options = array();
function get_option( $name, $default = false ) {
	global $options;
	return $options[ $name ] ?? $default;
}
function is_wp_error( $thing ) {
	return false;
}
function __( $text, $domain = '' ) {
	return $text;
}
function check( $value, $message ) {
	if ( ! $value ) {
		throw new RuntimeException( $message );
	}
}

/** Just enough $wpdb: prepare() fills %i/%d/%s, get_results() answers from three arrays. */
class Fake_Wpdb {
	public $prefix  = 'p_';
	public $queries = 0;
	public $state   = array();
	public $scores  = array();
	public $events  = array();

	public function prepare( $sql, ...$args ) {
		$args = ( 1 === count( $args ) && is_array( $args[0] ) ) ? $args[0] : $args;
		return preg_replace_callback(
			'/%[ids]/',
			static function ( $match ) use ( &$args ) {
				$value = array_shift( $args );
				return 'i' === $match[0][1] ? '`' . $value . '`' : ( 'd' === $match[0][1] ? (string) (int) $value : "'" . $value . "'" );
			},
			$sql
		);
	}

	private function ids( $sql, $column ) {
		if ( preg_match( '/' . $column . ' IN \(([\d,]+)\)/', $sql, $match ) ) {
			return array_map( 'intval', explode( ',', $match[1] ) );
		}
		return null;
	}

	public function get_results( $sql, $output = ARRAY_A ) {
		++$this->queries;
		$students = $this->ids( $sql, 'student_id' );
		$terms    = $this->ids( $sql, 'term_id' );
		$pick     = static function ( $rows ) use ( $students, $terms ) {
			return array_values(
				array_filter(
					$rows,
					static function ( $row ) use ( $students, $terms ) {
						return ( null === $students || in_array( $row['student_id'], $students, true ) ) && ( null === $terms || in_array( $row['term_id'], $terms, true ) );
					}
				)
			);
		};
		if ( false !== strpos( $sql, 'khan_level_events' ) ) {
			$latest = array();
			foreach ( $pick( $this->events ) as $event ) {
				$latest[ $event['student_id'] . ':' . $event['term_id'] ] = $event;
			}
			return array_values( $latest );
		}
		return $pick( false !== strpos( $sql, 'skill_scores' ) ? $this->scores : $this->state );
	}
}
define( 'ARRAY_A', 'ARRAY_A' );

$wpdb = new Fake_Wpdb();
$GLOBALS['wpdb'] = $wpdb;
$options['ohmylms_score_settings'] = array( 'enable' => true );
$ready = array(
	'OhMyLMS\Assessment\Schema' => 'OPTION',
	'OhMyLMS\Engagement\XpSchema' => 'OPTION',
	'OhMyLMS\Skills\Khan\Schema' => 'OPTION',
);
foreach ( $ready as $class => $constant ) {
	$options[ constant( $class . '::' . $constant ) ] = constant( $class . '::VERSION' );
}
$options[ OhMyLMS\Skills\Khan\Settings::OPTION ] = array( 'model' => 'khan' );

use OhMyLMS\Skills\MasteryDisplay as D;

$score_row = static function ( $student, $term, $score, $scored ) {
	return array(
		'student_id'     => $student,
		'term_id'        => $term,
		'score'          => $score,
		'peak'           => $score,
		'scored'         => $scored,
		'struggling'     => 0,
		'last_scored_at' => gmdate( 'Y-m-d H:i:s' ),
	);
};
// Learner 1: Khan history on skill 10, a SmartScore on 11, only a stored level on 12.
// Learner 2: a zero score with no answers on 11 (falls back to the level), nothing on 10.
// Learner 3: nothing at all.
$wpdb->state  = array(
	array( 'student_id' => 1, 'term_id' => 10, 'level' => 'developing' ),
	array( 'student_id' => 1, 'term_id' => 11, 'level' => 'developing' ),
	array( 'student_id' => 1, 'term_id' => 12, 'level' => 'mastered' ),
	array( 'student_id' => 2, 'term_id' => 11, 'level' => 'proficient' ),
);
$wpdb->scores = array(
	$score_row( 1, 10, 50, 3 ),
	$score_row( 1, 11, 85, 9 ),
	$score_row( 1, 12, 0, 0 ),
	$score_row( 2, 11, 0, 0 ),
);
$wpdb->events = array(
	array( 'student_id' => 1, 'term_id' => 10, 'level_after' => 'familiar' ),
	array( 'student_id' => 1, 'term_id' => 10, 'level_after' => 'mastered' ),
);

$terms = array( 10, 11, 12, 13 );
$batch = D::for_students( array( 1, 2, 3, 0 ), $terms );
$keys  = static function ( $entries ) {
	return array_map(
		static function ( $entry ) {
			return $entry['key'] . '/' . $entry['source'];
		},
		$entries
	);
};
check( array( 10 => 'mastered/khan', 11 => 'proficient/score', 12 => 'mastered/level', 13 => 'not-started/none' ) === $keys( $batch[1] ), 'Khan beats score beats stored level' );
check( array( 10 => 'not-started/none', 11 => 'proficient/level', 12 => 'not-started/none', 13 => 'not-started/none' ) === $keys( $batch[2] ), 'An unscored zero falls back to the stored level' );
check( array_unique( array_column( $batch[3], 'key' ) ) === array( 'not-started' ), 'A learner with no records is Not started everywhere' );
check( array_unique( array_column( $batch[0], 'key' ) ) === array( 'not-started' ), 'Learner 0 is Not started everywhere' );
check( 85.0 === $batch[1][11]['score'] && null === $batch[1][10]['score'], 'The score is kept only when it decided the level' );

// The wrapper returns exactly the same entries for one learner as the batch does.
foreach ( array( 0, 1, 2, 3 ) as $student ) {
	check( D::for_student( $student, $terms ) === $batch[ $student ], "for_student($student) equals its batch entry" );
}
check( array() === D::for_student( 1, array() ) && array() === D::for_students( array( 1, 2 ), array() )[2], 'No skills gives no entries' );

// Queries do not grow with the number of learners.
$wpdb->queries = 0;
D::for_students( array( 1, 2, 3 ), $terms );
$few = $wpdb->queries;
$wpdb->queries = 0;
D::for_students( range( 1, 60 ), $terms );
check( $wpdb->queries === $few && $few <= 5, "One query per table however many learners ($few queries)" );

echo "mastery-display-batch-unit: all checks passed\n";
