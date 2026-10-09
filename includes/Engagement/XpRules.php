<?php
namespace OhMyLMS\Engagement;

defined( 'ABSPATH' ) || exit;

/** The arithmetic of XP, apart from storage, so it can be tested and tuned on its own. */
final class XpRules {
	/**
	 * XP for one finished practice lesson.
	 *
	 * @param array $facts answered (meaningful answers), planned_total, planned_right, challenge_right
	 * @return array{total:int,parts:array,counted:bool}
	 */
	public static function practice( array $facts, array $settings ) {
		$answered = (int) ( $facts['answered'] ?? 0 );
		if ( $answered < (int) $settings['min_answered'] ) {
			return array(
				'total'   => 0,
				'parts'   => array(),
				'counted' => false,
			); }
		$total   = (int) ( $facts['planned_total'] ?? 0 );
		$right   = (int) ( $facts['planned_right'] ?? 0 );
		$parts   = array( 'lesson' => (int) $settings['lesson'] );
		// No mistakes: every planned question right the first time.
		if ( $total > 0 && $right === $total ) {
			$parts['perfect'] = (int) $settings['perfect']; }
		if ( (int) ( $facts['challenge_right'] ?? 0 ) > 0 ) {
			$parts['challenge'] = (int) $facts['challenge_right'] * (int) $settings['challenge']; }
		$parts = array_filter( $parts );
		return array(
			'total'   => array_sum( $parts ),
			'parts'   => $parts,
			'counted' => true,
		);
	}

	/**
	 * How much of $xp fits under the daily ceiling.
	 *
	 * @return array{xp:int,capped:bool}
	 */
	public static function cap( $xp, $earned_today, $cap ) {
		$room = max( 0, (int) $cap - (int) $earned_today );
		return array(
			'xp'     => min( (int) $xp, $room ),
			'capped' => (int) $xp > $room,
		);
	}

	/** Monday and Sunday (Y-m-d) of the week that holds $date. */
	public static function week( $date ) {
		$day = new \DateTimeImmutable( $date . ' 00:00:00', new \DateTimeZone( 'UTC' ) );
		$mon = $day->modify( '-' . ( (int) $day->format( 'N' ) - 1 ) . ' days' );
		return array( $mon->format( 'Y-m-d' ), $mon->modify( '+6 days' )->format( 'Y-m-d' ) );
	}
}
