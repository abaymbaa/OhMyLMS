<?php
namespace OhMyLMS\Assessment;

use OhMyLMS\Extensions\Registry;

defined( 'ABSPATH' ) || exit;

/**
 * The single grading contract for every response-producing surface
 * (quizzes, exams, skill practice, inline lesson checks).
 *
 * It always grades against a frozen QuestionSnapshot. Question types must
 * declare 'snapshot' => true (their grader reads only the object passed in);
 * otherwise grading is refused instead of silently reading current data.
 */
final class Grader {
	/**
	 * @return array|\WP_Error ['answer','present','pending','fraction','correct']
	 */
	public static function grade( QuestionSnapshot $snapshot, $answer, array $options = array() ) {
		$definition = Registry::get( 'question', $snapshot->get_type() );
		if ( ! $definition ) {
			return new \WP_Error( 'quiz_type_missing', __( 'A required question extension is unavailable.', 'ohmylms' ), array( 'status' => 409 ) );
		}
		if ( empty( $definition['snapshot'] ) ) {
			return new \WP_Error( 'quiz_type_unversioned', __( 'This question type cannot grade frozen question versions.', 'ohmylms' ), array( 'status' => 409 ) );
		}
		$answer = self::sanitize( $answer );
		if ( ! call_user_func( $definition['validate'], $answer, $snapshot ) ) {
			return new \WP_Error( 'quiz_answer', __( 'Invalid answer format.', 'ohmylms' ), array( 'status' => 400 ) );
		}
		$present = self::present( $answer );
		if ( ! $present ) {
			return array(
				'answer'        => $answer,
				'present'       => false,
				'pending'       => false,
				'fraction'      => 0.0,
				'auto_fraction' => 0.0,
				'correct'       => false,
				'parts'         => null,
			);
		}
		$grade = call_user_func( $definition['grade'], $answer, $snapshot );
		if ( is_wp_error( $grade ) ) {
			return $grade; }
		if ( ! is_array( $grade ) || ! isset( $grade['fraction'] ) || ! is_numeric( $grade['fraction'] ) || ! is_finite( (float) $grade['fraction'] ) ) {
			return new \WP_Error( 'quiz_grader', __( 'Invalid grading result.', 'ohmylms' ), array( 'status' => 500 ) );
		}
		$pending  = ! empty( $grade['manual'] ) && empty( $options['ignore_manual'] );
		$raw      = max( 0.0, min( 1.0, (float) $grade['fraction'] ) );
		$fraction = $pending ? 0.0 : $raw;
		// auto_fraction: credit already earned by automatically marked parts of a pending question.
		return array(
			'answer'        => $answer,
			'present'       => true,
			'pending'       => $pending,
			'fraction'      => $fraction,
			'auto_fraction' => $raw,
			'correct'       => ! $pending && ! empty( $grade['correct'] ),
			'parts'         => isset( $grade['parts'] ) && is_array( $grade['parts'] ) ? $grade['parts'] : null,
		);
	}

	public static function sanitize( $answer ) {
		return map_deep(
			$answer,
			static function ( $value ) {
				return is_string( $value ) ? sanitize_textarea_field( $value ) : $value;
			}
		);
	}

	public static function present( $answer ) {
		if ( is_array( $answer ) ) {
			return count(
				array_filter(
					$answer,
					static function ( $value ) {
						return is_scalar( $value ) && trim( (string) $value ) !== '';
					}
				)
			) > 0;
		}
		return trim( (string) $answer ) !== '';
	}

	/** Is manual review required for this type? */
	public static function manual_type( $type ) {
		$definition = Registry::get( 'question', (string) $type );
		return ! $definition || ! empty( $definition['manual'] );
	}
}
