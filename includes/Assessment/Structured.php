<?php
namespace OhMyLMS\Assessment;

defined( 'ABSPATH' ) || exit;

/**
 * Structured (multi-part) questions: one shared stem/diagram with separately scored parts.
 *
 * settings.parts = [[
 *   'id' => 'a', 'label' => '(a)', 'prompt' => '...', 'marks' => 2,
 *   'kind' => 'numerical' | 'text' | 'written',
 *   'answer' / 'answers' / 'tolerance' / 'tolerance_type' / 'unit'   (numerical)
 *   'accepted' => ['x=3', ...]                       (text; case and spaces ignored)
 *   'rubric' => 'teacher-only marking notes'
 * ], ...]
 * Written parts are marked by a teacher. Part IDs are stable, so skills and evidence
 * can be attributed per part. The parent always stays together in a delivery.
 */
final class Structured {
	const KINDS = array( 'numerical', 'text', 'written' );

	public static function parts( array $settings ) {
		$parts = array();
		foreach ( (array) ( $settings['parts'] ?? array() ) as $index => $part ) {
			if ( ! is_array( $part ) ) {
				continue; }
			$id      = preg_replace( '/[^a-z0-9_-]/i', '', (string) ( $part['id'] ?? '' ) ) ?: 'p' . ( $index + 1 );
			$parts[] = array_merge(
				$part,
				array(
					'id'    => $id,
					'label' => (string) ( $part['label'] ?? '(' . chr( 97 + $index ) . ')' ),
					'kind'  => in_array( $part['kind'] ?? '', self::KINDS, true ) ? $part['kind'] : 'written',
					'marks' => max( 0, (float) ( $part['marks'] ?? 1 ) ),
				)
			);
		}
		return $parts;
	}

	/** Part weights for evidence: id => share of the question's marks. */
	public static function weights( array $settings ) {
		$parts   = self::parts( $settings );
		$total   = array_sum( array_column( $parts, 'marks' ) );
		$weights = array();
		foreach ( $parts as $part ) {
			$weights[ $part['id'] ] = $total > 0 ? $part['marks'] / $total : 1 / max( 1, count( $parts ) ); }
		return $weights;
	}

	/** Learner-safe parts (no answers, tolerances or rubrics). */
	public static function public_parts( array $settings ) {
		return array_map(
			static function ( $part ) {
				return array_intersect_key( $part, array_flip( array( 'id', 'label', 'prompt', 'kind', 'marks', 'unit' ) ) );
			},
			self::parts( $settings )
		);
	}

	/** @return array{correct:bool,fraction:float,manual:bool,parts:array} */
	public static function grade( $answer, $question ) {
		$settings = $question->get_settings();
		$parts    = self::parts( $settings );
		$answer   = is_array( $answer ) ? $answer : array();
		$total    = array_sum( array_column( $parts, 'marks' ) );
		$earned   = 0.0;
		$manual   = false;
		$results  = array();
		$all      = true;
		foreach ( $parts as $part ) {
			$input   = $answer[ $part['id'] ] ?? '';
			$present = is_scalar( $input ) && trim( (string) $input ) !== '';
			if ( $part['kind'] === 'written' ) {
				$results[ $part['id'] ] = $present ? null : 0.0;
				$manual                 = $manual || $present;
				$all                    = false;
				continue;
			}
			if ( $part['kind'] === 'numerical' ) {
				$fraction = NumericAnswer::grade( $input, $part )['fraction'];
			} else {
				$accepted = array_map(
					static function ( $value ) {
						return self::normalize_text( $value );
					},
					(array) ( $part['accepted'] ?? array() )
				);
				$fraction = $present && in_array( self::normalize_text( $input ), $accepted, true ) ? 1.0 : 0.0;
			}
			$results[ $part['id'] ] = $fraction;
			$earned                += $part['marks'] * $fraction;
			$all                    = $all && $fraction >= 1.0;
		}
		return array(
			'correct'  => ! $manual && $all,
			'fraction' => $total > 0 ? $earned / $total : 0.0,
			'manual'   => $manual,
			'parts'    => $results,
		);
	}

	/** Case- and whitespace-insensitive: "X = 2" matches "x=2". */
	public static function normalize_text( $value ) {
		return preg_replace( '/\s+/u', '', mb_strtolower( trim( (string) $value ) ) );
	}

	/** Authoring validation: returns true or a message. */
	public static function validate_settings( array $settings ) {
		$parts = (array) ( $settings['parts'] ?? array() );
		if ( ! $parts ) {
			return __( 'A structured question needs at least one part.', 'ohmylms' ); }
		$ids = array();
		foreach ( $parts as $part ) {
			if ( ! is_array( $part ) ) {
				return __( 'Each part must be an object.', 'ohmylms' ); }
			$id = (string) ( $part['id'] ?? '' );
			if ( ! preg_match( '/^[a-z0-9_-]{1,40}$/i', $id ) || isset( $ids[ $id ] ) ) {
				return __( 'Each part needs a unique ID (letters, numbers, - or _).', 'ohmylms' ); }
			$ids[ $id ] = true;
			if ( ! in_array( $part['kind'] ?? '', self::KINDS, true ) ) {
				return __( 'Part kind must be numerical, text or written.', 'ohmylms' ); }
			if ( isset( $part['marks'] ) && ( ! is_numeric( $part['marks'] ) || (float) $part['marks'] < 0 ) ) {
				return __( 'Part marks must be zero or more.', 'ohmylms' ); }
			if ( $part['kind'] === 'numerical' ) {
				$expected = $part['answers'] ?? array( $part['answer'] ?? null );
				foreach ( (array) $expected as $value ) {
					if ( ! is_numeric( $value ) || ! is_finite( (float) $value ) ) {
						return __( 'Numerical parts need a finite expected answer.', 'ohmylms' ); }
				}
				if ( isset( $part['tolerance'] ) && ( ! is_numeric( $part['tolerance'] ) || (float) $part['tolerance'] < 0 ) ) {
					return __( 'Tolerance must be zero or more.', 'ohmylms' ); }
			}
			if ( $part['kind'] === 'text' && ! array_filter( (array) ( $part['accepted'] ?? array() ), 'strlen' ) ) {
				return __( 'Text parts need at least one accepted answer.', 'ohmylms' ); }
		}
		return true;
	}
}
