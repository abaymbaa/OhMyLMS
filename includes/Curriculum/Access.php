<?php
namespace OhMyLMS\Curriculum;

use OhMyLMS\QuestionBank\AccessPolicy;

defined( 'ABSPATH' ) || exit;

/**
 * Authorization for curriculum, track and mapping administration. Structure that every
 * learner's dashboard depends on is an administrator task, matching the OhMyLMS admin menu.
 * Learners only ever reach tracks through the /me endpoints and their own records.
 */
final class Access {
	public static function can_manage() {
		return (bool) apply_filters( 'ohmylms_can_manage_curriculum', current_user_can( 'manage_options' ) );
	}

	/** REST permission callback for administration routes: true or a 401/403 WP_Error. */
	public static function admin() {
		if ( ! Schema::ready() ) {
			return new \WP_Error( 'ohmylms_curriculum_unavailable', __( 'Curriculum storage is not installed yet.', 'ohmylms' ), array( 'status' => 503 ) ); }
		return AccessPolicy::check( self::can_manage(), __( 'Only administrators can manage curricula and learning tracks.', 'ohmylms' ) );
	}

	/** REST permission callback for learner routes: any signed-in account, for its own data only. */
	public static function learner() {
		if ( ! Schema::ready() ) {
			return new \WP_Error( 'ohmylms_curriculum_unavailable', __( 'Learning tracks are not available yet.', 'ohmylms' ), array( 'status' => 503 ) ); }
		return AccessPolicy::check( is_user_logged_in(), __( 'Sign in to use learning tracks.', 'ohmylms' ) );
	}

	public static function error( $code, $message, $status = 400, array $data = array() ) {
		return new \WP_Error( $code, $message, array( 'status' => $status ) + $data );
	}
}
