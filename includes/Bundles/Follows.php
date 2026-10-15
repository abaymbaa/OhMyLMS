<?php
namespace OhMyLMS\Bundles;

use OhMyLMS\Curriculum\Access;
use OhMyLMS\Curriculum\Items;
use OhMyLMS\Curriculum\Links;
use OhMyLMS\Curriculum\Schema;

defined( 'ABSPATH' ) || exit;

/**
 * A learner's choice to show a bundle on their own dashboard.
 *
 * Following is deliberately thin: one row per learner and bundle. It never creates or changes
 * an enrollment, never grants access to a course or its content, and never affects course
 * completion or skill state. Removing a bundle from the dashboard deletes only that row.
 */
final class Follows {
	const MAX_PER_USER = 50;

	public static function table() {
		return Schema::table( 'bundle_follows' ); }

	public static function is_following( $user_id, $bundle_id ) {
		global $wpdb;
		return (bool) $wpdb->get_var( $wpdb->prepare( 'SELECT id FROM ' . self::table() . ' WHERE user_id=%d AND bundle_id=%d', (int) $user_id, (int) $bundle_id ) );
	}

	/** Following needs a published bundle; repeating the request is harmless. */
	public static function follow( $user_id, $bundle_id ) {
		global $wpdb;
		$bundle = Bundles::get( $bundle_id );
		if ( ! $bundle || $bundle['status'] !== 'published' ) {
			return Bundles::missing(); }
		if ( ! self::is_following( $user_id, $bundle_id ) ) {
			if ( (int) $wpdb->get_var( $wpdb->prepare( 'SELECT COUNT(*) FROM ' . self::table() . ' WHERE user_id=%d', (int) $user_id ) ) >= self::MAX_PER_USER ) {
				return Access::error( 'ohmylms_bundle_follow_limit', sprintf( __( 'You can follow at most %d bundles. Remove one first.', 'ohmylms' ), self::MAX_PER_USER ), 409 );
			}
			$inserted = $wpdb->query( $wpdb->prepare( 'INSERT IGNORE INTO ' . self::table() . ' (bundle_id, user_id, followed_at) VALUES (%d, %d, %s)', (int) $bundle_id, (int) $user_id, current_time( 'mysql', true ) ) );
			if ( $inserted === false ) {
				return Access::error( 'ohmylms_bundle_failed', __( 'The bundle could not be added to your dashboard.', 'ohmylms' ), 500 ); }
		}
		return true;
	}

	public static function unfollow( $user_id, $bundle_id ) {
		global $wpdb;
		$wpdb->delete(
			self::table(),
			array(
				'user_id'  => (int) $user_id,
				'bundle_id' => (int) $bundle_id,
			)
		);
		return true;
	}

	/** Published bundles the learner follows, in the order they were added. */
	public static function followed( $user_id ) {
		global $wpdb;
		return $wpdb->get_results( $wpdb->prepare( 'SELECT t.* FROM ' . self::table() . ' f JOIN ' . Bundles::table() . " t ON t.id=f.bundle_id WHERE f.user_id=%d AND t.status='published' ORDER BY f.followed_at, f.id", (int) $user_id ), ARRAY_A ) ?: array();
	}

	/** IDs of courses the learner is currently enrolled in. */
	public static function enrolled_courses( $user_id ) {
		global $wpdb;
		return array_map( 'intval', $wpdb->get_col( $wpdb->prepare( "SELECT DISTINCT course_id FROM {$wpdb->prefix}ohmylms_user_enrollment WHERE user_id=%d AND status='enrolled'", (int) $user_id ) ) );
	}

	/** Every course a bundle refers to: direct members plus courses linked under its curriculum members. */
	public static function bundle_courses( $bundle_id ) {
		$courses = array();
		$items   = array();
		foreach ( Bundles::members( $bundle_id ) as $member ) {
			if ( $member['type'] === 'course' ) {
				$courses[] = $member['id'];
			} else {
				$items = array_merge( $items, Items::with_descendants( $member['id'] ) ); }
		}
		return array_values( array_unique( array_merge( $courses, $items ? Links::object_ids( $items, 'course' ) : array() ) ) );
	}

	/**
	 * Published bundles the learner has not added, most relevant first. Relevance is only the
	 * number of the learner's enrolled courses a bundle includes; ties keep the administrator's order.
	 */
	public static function suggested( $user_id, $limit = 12 ) {
		$following   = array_map( 'intval', array_column( self::followed( $user_id ), 'id' ) );
		$enrolled    = self::enrolled_courses( $user_id );
		$suggestions = array();
		foreach ( Bundles::all( 'published' ) as $row ) {
			if ( in_array( (int) $row['id'], $following, true ) || ! Bundles::members( (int) $row['id'] ) ) {
				continue; }
			$overlap       = count( array_intersect( $enrolled, self::bundle_courses( (int) $row['id'] ) ) );
			$suggestions[] = array(
				'row'     => $row,
				'overlap' => $overlap,
			);
		}
		usort(
			$suggestions,
			static function ( $left, $right ) {
				return $right['overlap'] <=> $left['overlap'] ?: (int) $left['row']['position'] <=> (int) $right['row']['position'] ?: (int) $left['row']['id'] <=> (int) $right['row']['id'];
			}
		);
		return array_map(
			static function ( $suggestion ) {
				return $suggestion['row'] + array( 'enrolled_overlap' => $suggestion['overlap'] );
			},
			array_slice( $suggestions, 0, $limit )
		);
	}

	public static function remove_user( $user_id ) {
		global $wpdb;
		if ( ! Schema::ready() ) {
			return; }
		$wpdb->delete( self::table(), array( 'user_id' => (int) $user_id ) );
	}
}
