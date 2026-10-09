<?php
namespace OhMyLMS\Schools;

defined( 'ABSPATH' ) || exit;

final class GradebookMath {
	/** Ungraded work is excluded; a real zero remains a grade. */
	public static function total( array $cells ) {
		$score  = 0;
		$max    = 0;
		$graded = 0;
		foreach ( $cells as $cell ) {
			if ( $cell['score'] === null || $cell['max'] <= 0 ) {
				continue; }
			$score += $cell['score'];
			$max   += $cell['max'];
			++$graded;
		}
		return array(
			'score'   => $score,
			'max'     => $max,
			'graded'  => $graded,
			'percent' => $max > 0 ? round( 100 * $score / $max, 2 ) : null,
		);
	}
	public static function average( array $values ) {
		$values = array_values(
			array_filter(
				$values,
				function ( $v ) {
					return $v !== null;
				}
			)
		);
		return $values ? round( array_sum( $values ) / count( $values ), 2 ) : null;
	}
	public static function validate_score( $score, $max ) {
		if ( ! is_numeric( $score ) || ! is_finite( (float) $score ) || $max <= 0 || $score < 0 || $score > $max ) {
			throw new \RuntimeException( 'Enter a score between zero and the maximum points.', 400 );
		}
		return round( (float) $score, 4 );
	}
}
