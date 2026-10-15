<?php
namespace OhMyLMS\ProfileBuilder;

defined( 'ABSPATH' ) || exit;

/**
 * The sections of a profile layout. Each one is a template under templates/profile/sections/ that a
 * dynamic block renders on the server; nothing here stores data, and every query is for the signed-in user.
 */
final class Sections {
	private static $context = null;

	/** @return array<string,array{title:string,description:string,icon:string}> block suffix => details. */
	public static function all() {
		return array(
			'greeting'     => array(
				'title'       => __( 'Profile greeting', 'ohmylms' ),
				'description' => __( 'The learner\'s avatar and name, with the background theme picker.', 'ohmylms' ),
				'icon'        => 'admin-users',
			),
			'work'         => array(
				'title'       => __( 'What should I work on?', 'ohmylms' ),
				'description' => __( 'Tabs for continuing courses, recent skills and recommendations.', 'ohmylms' ),
				'icon'        => 'welcome-learn-more',
			),
			'goals'        => array(
				'title'       => __( 'Learning goals', 'ohmylms' ),
				'description' => __( 'Points and level, the learning streak, the next milestone and course counts.', 'ohmylms' ),
				'icon'        => 'flag',
			),
			'week'         => array(
				'title'       => __( 'How am I doing?', 'ohmylms' ),
				'description' => __( 'This week\'s practice answers, skills practiced and active days.', 'ohmylms' ),
				'icon'        => 'chart-bar',
			),
			'achievements' => array(
				'title'       => __( 'My achievements', 'ohmylms' ),
				'description' => __( 'Bonus points, level and earned badges. Shown only when those features are on.', 'ohmylms' ),
				'icon'        => 'awards',
			),
			'leaderboards' => array(
				'title'       => __( 'My leaderboards', 'ohmylms' ),
				'description' => __( 'The top learners of an enrolled course that has a leaderboard.', 'ohmylms' ),
				'icon'        => 'list-view',
			),
			'skills'       => array(
				'title'       => __( 'All my skills', 'ohmylms' ),
				'description' => __( 'A collapsible list of every skill with its level and a practice link.', 'ohmylms' ),
				'icon'        => 'editor-ul',
			),
			'bundles'      => array(
				'title'       => __( 'My course bundles', 'ohmylms' ),
				'description' => __( 'Followed course bundles with progress, plus suggested bundles to add.', 'ohmylms' ),
				'icon'        => 'portfolio',
			),
			'memberships'  => array(
				'title'       => __( 'My memberships', 'ohmylms' ),
				'description' => __( 'The learner\'s memberships. Shown only with the Pro features.', 'ohmylms' ),
				'icon'        => 'id-alt',
			),
		);
	}

	/** Values every section template receives, built once per request for the signed-in user. */
	public static function context() {
		if ( null !== self::$context ) {
			return self::$context; }
		$user_id = get_current_user_id();
		$student = ohmylms_get_student( $user_id );
		\OhMyLMS\Practice\Dashboard::$rendered = true;
		\OhMyLMS\Practice\Dashboard::assets();
		$dashboard           = \OhMyLMS\Practice\Dashboard::data( $user_id );
		$courses             = $student->get_enrolled_courses();
		$in_progress_courses = array_values(
			array_filter(
				$courses,
				static function ( $item ) use ( $student ) {
					return ! $student->is_course_completed( $item->get_id() );
				}
			)
		);
		$name                = $student->get_first_name() ?: wp_get_current_user()->display_name;
		$streak_enabled      = \OhMyLMS\Engagement\StreakSettings::enabled();
		$badges              = ( \OhMyLMS\Engagement\Badge::maybe_enable() || $streak_enabled ) ? \OhMyLMS\Engagement\Badge::get_all_badges_of_a_user( $user_id ) : array();
		if ( ! \OhMyLMS\Engagement\Badge::maybe_enable() ) {
			$streak_badges = array_column( \OhMyLMS\Engagement\StreakSettings::get()['milestones'], 'badge' );
			$badges        = array_values(
				array_filter(
					$badges,
					static function ( $badge ) use ( $streak_badges ) {
						return in_array( $badge['slug'], $streak_badges, true );
					}
				)
			);
		}
		self::$context = array(
			'student'             => $student,
			'user_id'             => $user_id,
			'dashboard'           => $dashboard,
			'courses'             => $courses,
			'in_progress_courses' => $in_progress_courses,
			'name'                => $name,
			'streak_enabled'      => $streak_enabled,
			'badges'              => $badges,
			'level'               => \OhMyLMS\Engagement\Level::get_current_level_of_a_user( $user_id ),
			'next_level'          => \OhMyLMS\Engagement\Level::get_next_level_of_a_user( $user_id ),
			'browse'              => get_permalink( ohmylms_get_page_id( 'course' ) ) ?: home_url( '/' ),
		);
		return self::$context;
	}

	/** Forget the cached context (tests and long-running processes). */
	public static function reset() {
		self::$context = null;
	}

	/** One section's HTML, or an empty string for guests and unknown sections. */
	public static function render( $key ) {
		if ( ! is_user_logged_in() || ! isset( self::all()[ $key ] ) ) {
			return ''; }
		ob_start();
		ohmylms_get_template( 'profile/sections/' . $key . '.php', self::context() );
		return ob_get_clean();
	}
}
