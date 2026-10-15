<?php
namespace OhMyLMS\ProfileBuilder;

defined( 'ABSPATH' ) || exit;

/** The layouts shipped in code. Resetting a layout writes this markup back. */
final class Defaults {
	/** Blocks every layout keeps: they cannot be removed in the editor. */
	private static function locked( $name ) {
		return '<!-- wp:ohmylms/profile-' . $name . ' {"lock":{"remove":true}} /-->';
	}

	private static function block( $name ) {
		return '<!-- wp:ohmylms/profile-' . $name . ' /-->';
	}

	private static function group( $class, array $children ) {
		return '<!-- wp:group {"className":"' . $class . '"} -->' . "\n"
			. '<div class="wp-block-group ' . $class . '">' . "\n" . implode( "\n", $children ) . "\n" . '</div>' . "\n"
			. '<!-- /wp:group -->';
	}

	public static function content( $role ) {
		if ( 'student' !== $role ) {
			return ''; }
		return implode(
			"\n\n",
			array(
				self::locked( 'greeting' ),
				self::group( 'oml-dashboard-main-grid', array( self::locked( 'work' ), self::block( 'goals' ) ) ),
				self::block( 'week' ),
				self::group( 'oml-dashboard-bottom-grid', array( self::block( 'achievements' ), self::block( 'leaderboards' ) ) ),
				self::block( 'skills' ),
				self::block( 'bundles' ),
				self::block( 'memberships' ),
			)
		);
	}
}
