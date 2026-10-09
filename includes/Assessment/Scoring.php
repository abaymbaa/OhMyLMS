<?php
namespace OhMyLMS\Assessment;

defined( 'ABSPATH' ) || exit;

/**
 * Explicit scoring policy per attempt.
 *
 * - legacy-int: the original behavior; each item awards whole points (rounded).
 * - decimal:    items award marks x fraction to four decimal places.
 *
 * Attempts keep the policy they started with, so totals never change retroactively.
 * New attempts use decimal scoring once the attempt total column has been migrated.
 */
final class Scoring {
	const DECIMAL         = 'decimal';
	const LEGACY          = 'legacy-int';
	const MIGRATED_OPTION = 'ohmylms_attempt_total_decimal';

	public static function policy_for_new_attempts() {
		return get_option( self::MIGRATED_OPTION ) === '1' ? self::DECIMAL : self::LEGACY;
	}

	public static function award( $marks, $fraction, $policy ) {
		$fraction = max( 0.0, min( 1.0, (float) $fraction ) );
		$value    = max( 0.0, (float) $marks ) * $fraction;
		return $policy === self::DECIMAL ? round( $value, 4 ) : (float) (int) round( $value );
	}

	/** Manual marks under the attempt's policy, clamped to the item's maximum. */
	public static function manual( $mark, $max, $policy ) {
		$mark = max( 0.0, min( (float) $max, (float) $mark ) );
		return $policy === self::DECIMAL ? round( $mark, 4 ) : (float) (int) round( $mark );
	}

	public static function total( array $awards ) {
		return round( array_sum( array_map( 'floatval', $awards ) ), 4 );
	}

	/** Format a stored total for display without trailing zeros. */
	public static function display( $value ) {
		$value = round( (float) $value, 4 );
		return rtrim( rtrim( number_format( $value, 4, '.', '' ), '0' ), '.' );
	}
}
