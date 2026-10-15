<?php
/**
 * Answer review for the learner's result screen.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Quiz;

use OhMyLMS\Assessment\AssessmentSettings;
use OhMyLMS\Assessment\AttemptItems;
use OhMyLMS\Assessment\AttemptReport;
use OhMyLMS\Assessment\Engine;
use OhMyLMS\Assessment\Grader;
use OhMyLMS\Assessment\InlineBlanks;
use OhMyLMS\Assessment\Interactive;
use OhMyLMS\Assessment\Schema;
use OhMyLMS\Assessment\Structured;
use OhMyLMS\Extensions\Registry;
use OhMyLMS\QuestionBank\Usage;
use OhMyLMS\QuestionBank\VersionPublisher;

defined( 'ABSPATH' ) || exit;

/**
 * Lets a learner see, after submitting, what they answered next to the correct answer.
 *
 * It is on unless a quiz turns it off (the "Show correct answers" switch on the quiz
 * introduction tab) and never reveals more than the quiz allows: the older "Hide Answers On
 * Results Page" switch still wins, a submitted attempt is required, and exam attempts stay
 * hidden until their results are released. Versioned attempts are reviewed against the questions frozen
 * into the attempt; older attempts use the question as it is now.
 */
final class AnswerReview {
	/** Quiz setting that turns the review on. */
	const SETTING = 'show_correct_answers';

	/** Address parameter that picks the attempt to review. */
	const QUERY_VAR = 'review';

	/** Verdicts the "retry the questions I missed" action offers again. */
	const MISSED = array( 'incorrect', 'partial', 'unanswered' );

	/** Smallest difference between two mark values that counts as different. */
	const EPSILON = 0.00005;

	/**
	 * Are answers shown on the result screen of this quiz?
	 *
	 * A quiz that never set the switch shows them, so learners see what they got wrong. A
	 * quiz that switched it off, and the older "Hide Answers On Results Page" switch, keep
	 * them hidden.
	 *
	 * @param array $settings Quiz settings.
	 * @return bool
	 */
	public static function enabled( array $settings ) {
		$chosen = isset( $settings[ self::SETTING ] ) ? rest_sanitize_boolean( $settings[ self::SETTING ] ) : true;
		return $chosen && ! rest_sanitize_boolean( $settings['hide_answers'] ?? false );
	}

	/**
	 * May this learner see the answers of this attempt right now?
	 *
	 * @param array $settings Quiz settings.
	 * @param array $attempt  Attempt row (needs quiz_attempt_id and status).
	 * @return bool
	 */
	public static function can_review( array $settings, array $attempt ) {
		if ( ! self::enabled( $settings ) || 'in-progress' === ( $attempt['status'] ?? 'in-progress' ) ) {
			return false;
		}
		return ! Schema::ready() || AssessmentSettings::feedback_visible( (int) $attempt['quiz_attempt_id'] );
	}

	/**
	 * The most recent submitted attempt of a learner, or null.
	 *
	 * @param array[] $attempts Rows from Quiz::get_all_quiz_attempts().
	 * @return array|null
	 */
	public static function latest_submitted( array $attempts ) {
		$latest = null;
		foreach ( $attempts as $attempt ) {
			if ( 'in-progress' === $attempt['status'] ) {
				continue;
			}
			if ( null === $latest || (int) $attempt['quiz_attempt_id'] > (int) $latest['quiz_attempt_id'] ) {
				$latest = $attempt;
			}
		}
		return $latest;
	}

	/**
	 * Attempt the address asks to review (?review=ID), or 0.
	 *
	 * @return int
	 */
	public static function requested() {
		return isset( $_GET[ self::QUERY_VAR ] ) ? absint( wp_unslash( $_GET[ self::QUERY_VAR ] ) ) : 0; // phpcs:ignore WordPress.Security.NonceVerification -- display only.
	}

	/**
	 * Submitted attempts the learner may review, newest first.
	 *
	 * @param array   $settings Quiz settings.
	 * @param array[] $attempts Rows from Quiz::get_all_quiz_attempts().
	 * @param object  $quiz     Quiz; when given, each row also gets its "review_result" (see result()).
	 * @return array[]
	 */
	public static function reviewable( array $settings, array $attempts, $quiz = null ) {
		$list = array();
		foreach ( $attempts as $attempt ) {
			if ( self::can_review( $settings, $attempt ) ) {
				if ( $quiz ) {
					$basis                   = AttemptReport::basis( (int) $attempt['quiz_attempt_id'], $quiz );
					$attempt['review_result'] = self::result( (float) ( $attempt['total_achieved_marks'] ?? 0 ), $basis['max'], $basis['passing'], (string) ( $attempt['status'] ?? '' ) );
				}
				$list[] = $attempt;
			}
		}
		usort(
			$list,
			static function ( $left, $right ) {
				return (int) $right['quiz_attempt_id'] <=> (int) $left['quiz_attempt_id'];
			}
		);
		return $list;
	}

	/**
	 * The attempt to review: the one asked for when the learner may review it, else the newest.
	 *
	 * @param array[] $reviewable Output of reviewable().
	 * @param int     $requested  Output of requested().
	 * @return array|null
	 */
	public static function select( array $reviewable, $requested ) {
		foreach ( $reviewable as $attempt ) {
			if ( (int) $attempt['quiz_attempt_id'] === (int) $requested ) {
				return $attempt;
			}
		}
		return $reviewable ? $reviewable[0] : null;
	}

	/**
	 * Address of the quiz page showing the review of an attempt. It starts from the page being
	 * viewed, so it also works where the quiz has no pretty permalink.
	 *
	 * @param int   $attempt_id Attempt ID.
	 * @param array $args       Extra query arguments.
	 * @return string
	 */
	public static function url( $attempt_id, array $args = array() ) {
		return remove_query_arg( 'quiz', add_query_arg( array_merge( array( self::QUERY_VAR => (int) $attempt_id ), $args ) ) );
	}

	/**
	 * Overall outcome of a submitted attempt: review (awaiting a teacher), pass or fail.
	 *
	 * @param float  $earned  Marks earned.
	 * @param float  $max     Marks available.
	 * @param float  $passing Passing mark.
	 * @param string $status  Attempt status.
	 * @return string
	 */
	public static function result( $earned, $max, $passing, $status ) {
		if ( 'in-review' === $status ) {
			return 'review';
		}
		return ( ( $max > 0 && $earned >= $max ) || $earned >= $passing ) ? 'pass' : 'fail';
	}

	/**
	 * Score and verdict counts for the top of a review.
	 *
	 * @param array[] $entries Output of for_attempt().
	 * @param array   $attempt Attempt row.
	 * @param object  $quiz    Quiz.
	 * @return array result, earned, max, passing, percent, counts and total.
	 */
	public static function summary( array $entries, array $attempt, $quiz ) {
		$basis  = AttemptReport::basis( (int) $attempt['quiz_attempt_id'], $quiz );
		$earned = round( (float) ( $attempt['total_achieved_marks'] ?? 0 ), 4 );
		$counts = array(
			'correct'    => 0,
			'partial'    => 0,
			'incorrect'  => 0,
			'pending'    => 0,
			'unanswered' => 0,
		);
		foreach ( $entries as $entry ) {
			if ( isset( $counts[ $entry['verdict'] ] ) ) {
				++$counts[ $entry['verdict'] ];
			}
		}
		return array(
			'result'  => self::result( $earned, $basis['max'], $basis['passing'], (string) ( $attempt['status'] ?? '' ) ),
			'earned'  => $earned,
			'max'     => $basis['max'],
			'passing' => $basis['passing'],
			'percent' => $basis['max'] > 0 ? round( min( 100, $earned / $basis['max'] * 100 ), 1 ) : null,
			'counts'  => $counts,
			'total'   => count( $entries ),
		);
	}

	/**
	 * UUID of a question the practice engine can serve again (approved, not exam-only, not
	 * archived and marked automatically), or an empty string.
	 *
	 * @param int $question_id Question ID.
	 * @return string
	 */
	public static function practice_uuid( $question_id ) {
		$identity = VersionPublisher::identity( (int) $question_id, false );
		if ( ! $identity || (int) $identity['secure'] || ! (int) $identity['approved_version_id'] || Usage::ARCHIVED === get_post_status( (int) $question_id ) ) {
			return '';
		}
		$version    = VersionPublisher::version( (int) $identity['approved_version_id'] );
		$definition = $version ? Registry::get( 'question', (string) $version['type'] ) : null;
		return $definition && empty( $definition['manual'] ) ? (string) $identity['uuid'] : '';
	}

	/**
	 * The missed questions of a review that can be practised again, as number and UUID.
	 *
	 * @param array[] $entries Output of for_attempt().
	 * @return array[]
	 */
	public static function retry_items( array $entries ) {
		if ( ! Schema::ready() || ! Engine::practice() ) {
			return array();
		}
		$items = array();
		foreach ( $entries as $entry ) {
			if ( ! in_array( $entry['verdict'], self::MISSED, true ) || empty( $entry['question_id'] ) ) {
				continue;
			}
			$uuid = self::practice_uuid( (int) $entry['question_id'] );
			if ( '' !== $uuid ) {
				$items[] = array(
					'number' => (int) $entry['number'],
					'uuid'   => $uuid,
				);
			}
		}
		return $items;
	}

	/**
	 * One entry per question of an attempt the signed-in learner owns.
	 *
	 * Each entry: name (HTML), type, verdict (correct|partial|incorrect|pending|unanswered),
	 * awarded, max, given (string[]), expected (string[]|null when the type has no readable
	 * key, such as a teacher-marked answer) and explanation (HTML).
	 *
	 * @param int $attempt_id Attempt ID.
	 * @return array[]
	 */
	public static function for_attempt( $attempt_id ) {
		global $wpdb;
		$attempt_id = (int) $attempt_id;
		$owned      = $wpdb->get_var( $wpdb->prepare( "SELECT id FROM {$wpdb->prefix}ohmylms_quiz_attempts WHERE id=%d AND student_id=%d AND status<>'in-progress'", $attempt_id, get_current_user_id() ) );
		if ( ! $owned ) {
			return array();
		}
		$rows = array();
		foreach ( $wpdb->get_results( $wpdb->prepare( "SELECT * FROM {$wpdb->prefix}ohmylms_quiz_attempts_answers WHERE quiz_attempt_id=%d ORDER BY id", $attempt_id ), ARRAY_A ) as $row ) {
			$rows[ (int) $row['question_id'] ] = $row;
		}
		$entries = array();
		if ( Schema::ready() && AttemptItems::context( $attempt_id ) ) {
			foreach ( AttemptItems::items( $attempt_id ) as $item ) {
				$question = AttemptItems::snapshot( $item );
				if ( $question ) {
					$row   = $rows[ (int) $item['question_id'] ] ?? null;
					$entry = self::entry( $question, $row, (float) $item['marks'] );
					if ( 'structured' === $entry['type'] ) {
						$entry['parts'] = self::parts( $attempt_id, $item, $question, $row );
					}
					$entry['number'] = count( $entries ) + 1;
					$entries[]       = $entry;
				}
			}
			return $entries;
		}
		foreach ( $rows as $question_id => $row ) {
			$question = ohmylms_get_question( $question_id );
			if ( $question ) {
				$entry           = self::entry( $question, $row, (float) $row['question_marks'] );
				$entry['number'] = count( $entries ) + 1;
				$entries[]       = $entry;
			}
		}
		return $entries;
	}

	/**
	 * How each part of a structured question went.
	 *
	 * @param int    $attempt_id Attempt ID.
	 * @param array  $item       Attempt item.
	 * @param object $question   Frozen snapshot.
	 * @param array  $row        Stored answer row or null.
	 * @return array[] id, label, prompt, kind, verdict, given, expected, awarded and max for each part.
	 */
	private static function parts( $attempt_id, array $item, $question, $row ) {
		$settings = $question->get_settings();
		$marks    = AttemptReport::parts( $attempt_id, $item, $question );
		$given    = $row ? maybe_unserialize( $row['given_answer'] ) : array();
		$given    = is_array( $given ) ? $given : array();
		$parts    = array();
		foreach ( Structured::parts( $settings ) as $part ) {
			$id      = $part['id'];
			$text    = isset( $given[ $id ] ) && is_scalar( $given[ $id ] ) ? trim( (string) $given[ $id ] ) : '';
			$mark    = $marks[ $id ] ?? null;
			$max     = $mark ? (float) $mark['max'] : (float) $part['marks'];
			$awarded = $mark && null !== $mark['awarded'] ? (float) $mark['awarded'] : null;
			if ( '' === $text ) {
				$verdict = 'unanswered';
			} elseif ( null === $awarded ) {
				$verdict = 'pending';
			} elseif ( $max <= 0 ) {
				$verdict = 'ungraded';
			} else {
				$verdict = $awarded + self::EPSILON >= $max ? 'correct' : ( $awarded > self::EPSILON ? 'partial' : 'incorrect' );
			}
			$unit     = trim( (string) ( $part['unit'] ?? '' ) );
			$expected = null;
			if ( 'numerical' === $part['kind'] ) {
				$numbers  = isset( $part['answers'] ) && is_array( $part['answers'] ) ? $part['answers'] : ( isset( $part['answer'] ) ? array( $part['answer'] ) : array() );
				$expected = trim( implode( ' / ', array_map( 'strval', array_filter( $numbers, 'is_scalar' ) ) ) . ' ' . $unit );
			} elseif ( 'text' === $part['kind'] ) {
				$accepted = array_values( array_filter( array_map( 'strval', array_filter( (array) ( $part['accepted'] ?? array() ), 'is_scalar' ) ), 'strlen' ) );
				$expected = $accepted ? $accepted[0] : null;
			}
			$parts[] = array(
				'id'       => $id,
				'label'    => (string) $part['label'],
				'prompt'   => wp_kses_post( (string) ( $part['prompt'] ?? '' ) ),
				'kind'     => $part['kind'],
				'verdict'  => $verdict,
				'given'    => $text,
				'expected' => $expected ? $expected : null,
				'awarded'  => 'pending' === $verdict ? null : round( (float) $awarded, 4 ),
				'max'      => round( $max, 4 ),
			);
		}
		return $parts;
	}

	/**
	 * Build one review entry.
	 *
	 * @param object     $question Frozen snapshot or live question; both expose name, settings and options.
	 * @param array|null $row      Stored answer row, null when the learner left it out.
	 * @param float      $max      Marks the question was worth in this attempt.
	 * @return array
	 */
	private static function entry( $question, $row, $max ) {
		$settings = $question->get_settings();
		$type     = (string) ( $settings['type'] ?? '' );
		$given    = $row ? maybe_unserialize( $row['given_answer'] ) : array();
		$awarded  = $row ? (float) $row['achive_mark'] : 0.0;
		$options  = self::options( $question );
		$present  = Grader::present( $given );
		if ( ! $present ) {
			$verdict = 'unanswered';
		} elseif ( Grader::manual_type( $type ) && empty( $row['is_manually_reviewed'] ) ) {
			$verdict = 'pending';
		} elseif ( ! empty( $row['is_correct'] ) ) {
			$verdict = 'correct';
		} else {
			$verdict = $awarded > 0 ? 'partial' : 'incorrect';
		}
		return array(
			'question_id' => (int) $question->get_id(),
			'name'        => self::prompt( $question, $type ),
			'type'        => $type,
			'verdict'     => $verdict,
			'awarded'     => $awarded,
			'max'         => $max,
			'given'       => $present ? self::given_lines( $type, $options, (array) $given ) : array(),
			'expected'    => self::expected_lines( $type, $question, $options, $settings ),
			'explanation' => wp_kses_post( (string) ( $settings['explanation'] ?? '' ) ),
		);
	}

	/**
	 * Option rows indexed by ID.
	 *
	 * @param object $question Snapshot or live question.
	 * @return array[]
	 */
	private static function options( $question ) {
		$options = array();
		foreach ( $question->get_questions() as $option ) {
			$options[ (string) $option['id'] ] = $option;
		}
		return $options;
	}

	/**
	 * Question text; inline blanks are shown as gaps, not as their answers.
	 *
	 * @param object $question Snapshot or live question.
	 * @param string $type     Question type.
	 * @return string
	 */
	private static function prompt( $question, $type ) {
		$name = (string) $question->get_name();
		if ( 'fill-in-the-blank' === $type ) {
			$parsed = InlineBlanks::parse( $name );
			if ( $parsed['answers'] ) {
				$name = implode(
					'',
					array_map(
						static function ( $part ) {
							return $part['text'] ?? '_____';
						},
						$parsed['parts']
					)
				);
			}
		}
		return wp_kses_post( $name );
	}

	/**
	 * The learner's answer as readable lines.
	 *
	 * @param string  $type    Question type.
	 * @param array[] $options Option rows by ID.
	 * @param array   $given   Stored answer.
	 * @return string[]
	 */
	private static function given_lines( $type, array $options, array $given ) {
		$text = static function ( $value ) use ( $options ) {
			return isset( $options[ (string) $value ] ) ? (string) $options[ (string) $value ]['answer'] : (string) $value;
		};
		if ( in_array( $type, array( 'single-choice', 'multiple-choice', 'true-false', 'reorder' ), true ) ) {
			return array_values( array_filter( array_map( $text, array_values( $given ) ), 'strlen' ) );
		}
		if ( 'matching' === $type ) {
			$lines = array();
			foreach ( $given as $term_id => $match_id ) {
				$lines[] = $text( $term_id ) . ' → ' . self::definition( $options, $match_id );
			}
			return $lines;
		}
		$lines = array();
		foreach ( $given as $key => $value ) {
			$value = is_array( $value ) ? implode( ', ', array_filter( array_map( 'strval', $value ), 'strlen' ) ) : trim( (string) $value );
			if ( '' === $value ) {
				continue;
			}
			// Slot, item and blank answers are keyed by an ID; show it so the lines can be told apart.
			$lines[] = is_string( $key ) && ! is_numeric( $key ) ? $key . ' = ' . $value : $value;
		}
		return $lines;
	}

	/**
	 * The correct answer as readable lines, or null when the type has no readable key.
	 *
	 * @param string  $type     Question type.
	 * @param object  $question Snapshot or live question.
	 * @param array[] $options  Option rows by ID.
	 * @param array   $settings Question settings.
	 * @return string[]|null
	 */
	private static function expected_lines( $type, $question, array $options, array $settings ) {
		$lines = null;
		if ( Interactive::is_interactive( $type ) ) {
			$lines = array_map( 'strval', Interactive::expected( $type, $settings ) );
		} elseif ( 'numerical' === $type ) {
			$accepted = isset( $settings['answers'] ) && is_array( $settings['answers'] ) ? $settings['answers'] : array( $settings['answer'] ?? null );
			$unit     = (string) ( $settings['unit'] ?? '' );
			$lines    = array_map(
				static function ( $value ) use ( $unit ) {
					return trim( $value . ' ' . $unit );
				},
				array_filter( $accepted, 'is_numeric' )
			);
		} elseif ( 'reorder' === $type ) {
			$lines = array_map(
				static function ( $option ) {
					return (string) $option['answer'];
				},
				array_values( $options )
			);
		} elseif ( 'matching' === $type ) {
			$lines = array();
			foreach ( $options as $id => $option ) {
				$lines[] = (string) $option['answer'] . ' → ' . self::definition( $options, $id );
			}
		} elseif ( in_array( $type, array( 'single-choice', 'multiple-choice', 'true-false', 'statement', 'short-text', 'fill-in-the-blank' ), true ) ) {
			$inline = 'fill-in-the-blank' === $type ? InlineBlanks::parse( (string) $question->get_name() )['answers'] : array();
			$lines  = $inline ? $inline : array_values(
				array_map(
					static function ( $option ) {
						return (string) $option['answer'];
					},
					array_filter(
						$options,
						static function ( $option ) {
							return ! empty( $option['is_correct'] );
						}
					)
				)
			);
		}
		// An empty key means the type has nothing to show (for example, teacher-marked work).
		return $lines ? array_values( array_filter( $lines, 'strlen' ) ) : null;
	}

	/**
	 * Matching definition (the label) of an option.
	 *
	 * @param array[]    $options Option rows by ID.
	 * @param string|int $id      Option ID.
	 * @return string
	 */
	private static function definition( array $options, $id ) {
		$option = $options[ (string) $id ] ?? null;
		if ( ! $option ) {
			return (string) $id;
		}
		$matching = is_array( $option['matching_data'] ?? null ) ? $option['matching_data'] : array();
		return (string) ( $matching['label'] ?? $option['answer'] );
	}
}
