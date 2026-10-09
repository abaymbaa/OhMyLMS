<?php
namespace OhMyLMS\QuestionBank;

use OhMyLMS\Assessment\Schema;

defined( 'ABSPATH' ) || exit;

/**
 * Question banks: ownership and sharing.
 *
 * Permissions are ordered use < edit < approve. The owner and site administrators hold
 * all three. A 'site' bank grants 'use' to every author. Grants are explicit rows.
 */
final class Banks {
	const LEVELS = array(
		'use'     => 1,
		'edit'    => 2,
		'approve' => 3,
	);

	public static function get( $bank_id ) {
		global $wpdb;
		return $wpdb->get_row( $wpdb->prepare( 'SELECT * FROM ' . Schema::table( 'qb_banks' ) . ' WHERE id=%d', (int) $bank_id ), ARRAY_A ) ?: null;
	}

	public static function create( $name, $course_id = 0, $visibility = 'private' ) {
		global $wpdb;
		if ( ! AccessPolicy::can_author() ) {
			return AccessPolicy::denied(); }
		$name = sanitize_text_field( (string) $name );
		if ( $name === '' ) {
			return new \WP_Error( 'ohmylms_bank_invalid', __( 'A bank name is required.', 'ohmylms' ), array( 'status' => 400 ) ); }
		if ( ! in_array( $visibility, array( 'private', 'shared', 'site' ), true ) ) {
			$visibility = 'private'; }
		if ( $visibility === 'site' && ! current_user_can( 'manage_options' ) ) {
			$visibility = 'shared'; }
		if ( $course_id && ! current_user_can( 'edit_post', (int) $course_id ) ) {
			return AccessPolicy::denied( __( 'You cannot attach a bank to this course.', 'ohmylms' ) ); }
		$wpdb->insert(
			Schema::table( 'qb_banks' ),
			array(
				'name'       => $name,
				'owner_id'   => get_current_user_id(),
				'course_id'  => (int) $course_id,
				'visibility' => $visibility,
				'created_at' => current_time( 'mysql', true ),
			)
		);
		return self::get( (int) $wpdb->insert_id );
	}

	public static function update( $bank_id, array $data ) {
		global $wpdb;
		$bank = self::get( $bank_id );
		if ( ! $bank ) {
			return new \WP_Error( 'ohmylms_bank_missing', __( 'Question bank not found.', 'ohmylms' ), array( 'status' => 404 ) ); }
		if ( ! self::manages( $bank ) ) {
			return AccessPolicy::denied(); }
		$fields = array();
		if ( isset( $data['name'] ) ) {
			$fields['name'] = sanitize_text_field( (string) $data['name'] ); }
		if ( isset( $data['visibility'] ) && in_array( $data['visibility'], array( 'private', 'shared', 'site' ), true ) ) {
			$fields['visibility'] = $data['visibility'] === 'site' && ! current_user_can( 'manage_options' ) ? 'shared' : $data['visibility'];
		}
		if ( $fields ) {
			$wpdb->update( Schema::table( 'qb_banks' ), $fields, array( 'id' => (int) $bank_id ) ); }
		return self::get( $bank_id );
	}

	/** Owner or administrator. */
	public static function manages( array $bank, $user_id = 0 ) {
		$user_id = $user_id ?: get_current_user_id();
		return $user_id && ( (int) $bank['owner_id'] === (int) $user_id || user_can( $user_id, 'manage_options' ) );
	}

	public static function can( $bank_id, $permission, $user_id = 0 ) {
		global $wpdb;
		$user_id = $user_id ?: get_current_user_id();
		$bank    = self::get( $bank_id );
		if ( ! $bank || ! $user_id || ! isset( self::LEVELS[ $permission ] ) ) {
			return false; }
		if ( self::manages( $bank, $user_id ) ) {
			return true; }
		if ( $permission === 'use' && $bank['visibility'] === 'site' && user_can( $user_id, 'edit_posts' ) ) {
			return true; }
		$levels       = array_keys(
			array_filter(
				self::LEVELS,
				static function ( $level ) use ( $permission ) {
					return $level >= self::LEVELS[ $permission ];
				}
			)
		);
		$placeholders = implode( ',', array_fill( 0, count( $levels ), '%s' ) );
		return (bool) $wpdb->get_var( $wpdb->prepare( 'SELECT id FROM ' . Schema::table( 'qb_grants' ) . " WHERE bank_id=%d AND user_id=%d AND permission IN ($placeholders)", array_merge( array( (int) $bank_id, (int) $user_id ), $levels ) ) );
	}

	public static function grant( $bank_id, $user_id, $permission ) {
		global $wpdb;
		$bank = self::get( $bank_id );
		if ( ! $bank ) {
			return new \WP_Error( 'ohmylms_bank_missing', __( 'Question bank not found.', 'ohmylms' ), array( 'status' => 404 ) ); }
		if ( ! self::manages( $bank ) ) {
			return AccessPolicy::denied(); }
		if ( ! isset( self::LEVELS[ $permission ] ) || ! get_user_by( 'id', (int) $user_id ) || ! user_can( (int) $user_id, 'edit_posts' ) ) {
			return new \WP_Error( 'ohmylms_bank_grant_invalid', __( 'Grants need an author account and a use, edit or approve permission.', 'ohmylms' ), array( 'status' => 400 ) );
		}
		$wpdb->query( $wpdb->prepare( 'INSERT IGNORE INTO ' . Schema::table( 'qb_grants' ) . ' (bank_id, user_id, permission, granted_by, created_at) VALUES (%d, %d, %s, %d, %s)', (int) $bank_id, (int) $user_id, $permission, get_current_user_id(), current_time( 'mysql', true ) ) );
		return self::grants( $bank_id );
	}

	public static function revoke( $bank_id, $user_id, $permission ) {
		global $wpdb;
		$bank = self::get( $bank_id );
		if ( ! $bank || ! self::manages( $bank ) ) {
			return AccessPolicy::denied(); }
		$wpdb->delete(
			Schema::table( 'qb_grants' ),
			array(
				'bank_id'    => (int) $bank_id,
				'user_id'    => (int) $user_id,
				'permission' => (string) $permission,
			)
		);
		return self::grants( $bank_id );
	}

	public static function grants( $bank_id ) {
		global $wpdb;
		return $wpdb->get_results( $wpdb->prepare( 'SELECT user_id, permission, granted_by, created_at FROM ' . Schema::table( 'qb_grants' ) . ' WHERE bank_id=%d ORDER BY user_id', (int) $bank_id ), ARRAY_A );
	}

	/** Banks the user can at least use. */
	public static function for_user( $user_id = 0 ) {
		global $wpdb;
		$user_id = $user_id ?: get_current_user_id();
		$banks   = Schema::table( 'qb_banks' );
		$grants  = Schema::table( 'qb_grants' );
		if ( user_can( $user_id, 'manage_options' ) ) {
			return $wpdb->get_results( "SELECT * FROM $banks ORDER BY name", ARRAY_A ); }
		return $wpdb->get_results(
			$wpdb->prepare(
				"SELECT DISTINCT b.* FROM $banks b LEFT JOIN $grants g ON g.bank_id=b.id AND g.user_id=%d WHERE b.owner_id=%d OR b.visibility='site' OR g.id IS NOT NULL ORDER BY b.name",
				$user_id,
				$user_id
			),
			ARRAY_A
		);
	}

	/** Bank of a question (0 = personal, governed by post ownership). */
	public static function of_question( $question_id ) {
		$identity = VersionPublisher::identity( $question_id, false );
		return $identity ? (int) $identity['bank_id'] : 0;
	}
}
