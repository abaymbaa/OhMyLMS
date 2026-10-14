<?php
/**
 * Answer review for the learner's result screen.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Quiz;

use OhMyLMS\Assessment\AssessmentSettings;
use OhMyLMS\Assessment\AttemptItems;
use OhMyLMS\Assessment\Grader;
use OhMyLMS\Assessment\InlineBlanks;
use OhMyLMS\Assessment\Interactive;
use OhMyLMS\Assessment\Schema;

defined( 'ABSPATH' ) || exit;

/**
 * Lets a learner see, after submitting, what they answered next to the correct answer.
 *
 * It is opt-in per quiz (the "Show correct answers" switch on the quiz introduction tab)
 * and never reveals more than the quiz allows: the older "Hide Answers On Results Page"
 * switch still wins, a submitted attempt is required, and exam attempts stay hidden until
 * their results are released. Versioned attempts are reviewed against the questions frozen
 * into the attempt; older attempts use the question as it is now.
 */
final class AnswerReview {
	/** Quiz setting that turns the review on. */
	const SETTING = 'show_correct_answers';

	/**
	 * Has the quiz asked for answers to be shown on the result screen?
	 *
	 * @param array $settings Quiz settings.
	 * @return bool
	 */
	public static function enabled( array $settings ) {
		return rest_sanitize_boolean( $settings[ self::SETTING ] ?? false ) && ! rest_sanitize_boolean( $settings['hide_answers'] ?? false );
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
					$entries[] = self::entry( $question, $rows[ (int) $item['question_id'] ] ?? null, (float) $item['marks'] );
				}
			}
			return $entries;
		}
		foreach ( $rows as $question_id => $row ) {
			$question = ohmylms_get_question( $question_id );
			if ( $question ) {
				$entries[] = self::entry( $question, $row, (float) $row['question_marks'] );
			}
		}
		return $entries;
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
