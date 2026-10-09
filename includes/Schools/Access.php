<?php
namespace OhMyLMS\Schools;

defined( 'ABSPATH' ) || exit;

/** Every resource permission is resolved from current database relationships. */
final class Access {
	public static function platform() {
		return current_user_can( 'manage_options' ); }
	public static function school( $school, $roles = array( 'school_admin' ), $user = 0 ) {
		global $wpdb;
		$explicit_user = (bool) $user;
		$user          = $user ?: get_current_user_id();
		if ( ! $user || ! $school ) {
			return false; }
		$schools = Schema::table( 'schools' );
		if ( ! $wpdb->get_var( $wpdb->prepare( "SELECT id FROM $schools WHERE id=%d AND status='active'", $school ) ) ) {
			return false; }
		if ( ! $explicit_user && self::platform() ) {
			return true; }
		$table        = Schema::table( 'school_memberships' );
		$placeholders = implode( ',', array_fill( 0, count( $roles ), '%s' ) );
		return (bool) $wpdb->get_var( $wpdb->prepare( "SELECT id FROM $table WHERE school_id=%d AND user_id=%d AND status='active' AND role IN ($placeholders)", array_merge( array( $school, $user ), $roles ) ) );
	}
	public static function teacher() {
		global $wpdb;
		if ( self::platform() || in_array( 'ohmylms_teacher', wp_get_current_user()->roles, true ) ) {
			return true; }
		$m = Schema::table( 'school_memberships' );
		$s = Schema::table( 'schools' );
		return (bool) $wpdb->get_var( $wpdb->prepare( "SELECT m.id FROM $m m JOIN $s s ON s.id=m.school_id WHERE m.user_id=%d AND m.role='teacher' AND m.status='active' AND s.status='active' LIMIT 1", get_current_user_id() ) );
	}
	public static function classroom( $id, $write = false ) {
		global $wpdb;
		$classes = Schema::table( 'classes' );
		$class   = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $classes WHERE id=%d", $id ), ARRAY_A );
		if ( ! $class || ( $write && $class['status'] !== 'active' ) ) {
			return false; }
		if ( ! (int) $class['school_id'] ) {
			if ( self::platform() ) {
				return $class; }
			$members = Schema::table( 'class_memberships' );
			return self::teacher() && $wpdb->get_var( $wpdb->prepare( "SELECT id FROM $members WHERE class_id=%d AND user_id=%d AND role='teacher' AND status='active'", $id, get_current_user_id() ) ) ? $class : false;
		}
		if ( self::school( $class['school_id'] ) ) {
			return $class; }
		if ( ! self::school( $class['school_id'], array( 'teacher' ) ) ) {
			return false; }
		$members = Schema::table( 'class_memberships' );
		return $wpdb->get_var( $wpdb->prepare( "SELECT id FROM $members WHERE class_id=%d AND user_id=%d AND role='teacher' AND status='active'", $id, get_current_user_id() ) ) ? $class : false;
	}
	public static function student( $school, $student ) {
		global $wpdb;
		$table = Schema::table( 'school_memberships' );
		return (bool) $wpdb->get_var( $wpdb->prepare( "SELECT id FROM $table WHERE school_id=%d AND user_id=%d AND role='student' AND status='active'", $school, $student ) );
	}
	public static function guardian( $school, $student ) {
		global $wpdb;
		$links = Schema::table( 'guardian_links' );
		return self::student( $school, $student ) && (bool) $wpdb->get_var( $wpdb->prepare( "SELECT id FROM $links WHERE school_id=%d AND student_user_id=%d AND guardian_user_id=%d AND status='active'", $school, $student, get_current_user_id() ) );
	}
	public static function require_access( $allowed ) {
		if ( ! $allowed ) {
			throw new \RuntimeException( 'You do not have access to this resource.', 403 ); }
	}
}
