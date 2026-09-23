<?php
/**
 * Google Auth Service
 *
 * Handles the "Sign in with Google" OAuth 2.0 authorization-code flow for the
 * core CreatorLMS plugin: building the consent URL, exchanging the code for
 * tokens, fetching the user's profile, and resolving/creating the matching
 * WordPress user.
 *
 * The Community plugin has its own copy of this flow (its own callback route
 * and its own settings option) but automatically borrows these credentials
 * once they're configured here — see
 * CreatorLMS_Community\Services\GoogleAuthService::get_settings(). Both
 * plugins deliberately share the same Google-identity meta key
 * (META_GOOGLE_ID) so a user linked via either entry point is recognized by
 * the other and never re-triggers account creation or the reclaim flow below.
 *
 * @package OMLMS\Services
 * @since 1.0.0
 */

namespace OMLMS\Services;

use OMLMS\Integrations\GoogleSignIn\Hooks as GoogleSignInHooks;
use WP_Error;
use WP_User;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class GoogleAuthService
 */
class GoogleAuthService {

	const OPTION_KEY        = 'creatorlms_google_oauth';
	const STATE_TRANSIENT   = 'omlms_lms_google_state_';
	const STATE_TTL         = 600; // 10 minutes.
	const META_GOOGLE_ID    = '_creatorlms_google_id'; // Shared with the Community plugin — do not change without updating both.
	const AUTHORIZATION_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
	const TOKEN_URL         = 'https://oauth2.googleapis.com/token';
	const USERINFO_URL      = 'https://www.googleapis.com/oauth2/v3/userinfo';

	/**
	 * Get the stored Google OAuth settings.
	 *
	 * "enabled" is not stored here — it's the addon's on/off toggle on the
	 * Addons page (see GoogleSignInHooks::is_enabled()). It's still returned
	 * in this shape so existing consumers (including the Community plugin's
	 * cross-plugin check) don't need to know that detail.
	 *
	 * @return array{enabled: bool, client_id: string, client_secret: string}
	 */
	public static function get_settings() {
		$settings = get_option( self::OPTION_KEY, array() );

		$settings = wp_parse_args(
			is_array( $settings ) ? $settings : array(),
			array(
				'client_id'     => '',
				'client_secret' => '',
			)
		);

		$settings['enabled'] = GoogleSignInHooks::is_enabled();

		return $settings;
	}

	/**
	 * Whether the Google Sign-In addon is turned on (Addons page) and has the
	 * credentials required to run.
	 *
	 * @return bool
	 */
	public static function is_configured() {
		$settings = self::get_settings();
		return ! empty( $settings['enabled'] ) && ! empty( $settings['client_id'] ) && ! empty( $settings['client_secret'] );
	}

	/**
	 * The redirect URI registered with Google for this site.
	 *
	 * @return string
	 */
	public static function get_redirect_uri() {
		return rest_url( 'creator-lms/v1/auth/google/callback' );
	}

	/**
	 * Build the Google consent screen URL and remember a one-time state value
	 * to protect the callback against CSRF. The page the visitor started
	 * from (e.g. checkout) rides along in the same state transient so the
	 * callback can send them back there instead of the dashboard.
	 *
	 * @param string $redirect_to Same-site URL to return to after login, or ''.
	 * @return string|WP_Error
	 */
	public static function build_authorization_url( $redirect_to = '' ) {
		$settings = self::get_settings();

		if ( ! self::is_configured() ) {
			return new WP_Error( 'google_not_configured', __( 'Google Sign-In is not configured.', 'ohmylms' ) );
		}

		$state = wp_generate_password( 32, false );
		set_transient( self::STATE_TRANSIENT . $state, $redirect_to !== '' ? $redirect_to : '1', self::STATE_TTL );

		$args = array(
			'client_id'     => $settings['client_id'],
			'redirect_uri'  => self::get_redirect_uri(),
			'response_type' => 'code',
			'scope'         => 'openid email profile',
			'state'         => $state,
			'prompt'        => 'select_account',
		);

		return add_query_arg( $args, self::AUTHORIZATION_URL );
	}

	/**
	 * Validate and consume a state value returned by Google.
	 *
	 * @param string $state State parameter from the callback request.
	 * @return string|false The redirect_to URL stashed alongside the state
	 *                       ('' if none was given), or false if the state is
	 *                       missing/expired/already used.
	 */
	public static function consume_state( $state ) {
		if ( empty( $state ) ) {
			return false;
		}

		$key   = self::STATE_TRANSIENT . $state;
		$value = get_transient( $key );
		delete_transient( $key );

		if ( false === $value ) {
			return false;
		}

		return '1' === $value ? '' : $value;
	}

	/**
	 * Exchange an authorization code for an access token.
	 *
	 * @param string $code Authorization code from Google.
	 * @return array|WP_Error Token response array, or WP_Error on failure.
	 */
	public static function exchange_code_for_token( $code ) {
		$settings = self::get_settings();

		$response = wp_remote_post(
			self::TOKEN_URL,
			array(
				'timeout' => 15,
				'body'    => array(
					'code'          => $code,
					'client_id'     => $settings['client_id'],
					'client_secret' => $settings['client_secret'],
					'redirect_uri'  => self::get_redirect_uri(),
					'grant_type'    => 'authorization_code',
				),
			)
		);

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$body = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( 200 !== wp_remote_retrieve_response_code( $response ) || empty( $body['access_token'] ) ) {
			return new WP_Error( 'google_token_exchange_failed', __( 'Could not verify your Google account. Please try again.', 'ohmylms' ) );
		}

		return $body;
	}

	/**
	 * Fetch the authenticated user's profile from Google.
	 *
	 * @param string $access_token Access token from the token exchange.
	 * @return array|WP_Error
	 */
	public static function get_userinfo( $access_token ) {
		$response = wp_remote_get(
			self::USERINFO_URL,
			array(
				'timeout' => 15,
				'headers' => array(
					'Authorization' => 'Bearer ' . $access_token,
				),
			)
		);

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$body = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( 200 !== wp_remote_retrieve_response_code( $response ) || empty( $body['email'] ) ) {
			return new WP_Error( 'google_userinfo_failed', __( 'Could not retrieve your Google profile. Please try again.', 'ohmylms' ) );
		}

		if ( empty( $body['email_verified'] ) ) {
			return new WP_Error( 'google_email_unverified', __( 'Your Google email address is not verified.', 'ohmylms' ) );
		}

		return $body;
	}

	/**
	 * Find the WordPress user matching a Google profile, creating one if needed.
	 *
	 * @param array $profile Google userinfo payload (email, sub, given_name, family_name, name, picture).
	 * @return WP_User|WP_Error
	 */
	public static function find_or_create_user( array $profile ) {
		$email = sanitize_email( $profile['email'] );

		if ( ! is_email( $email ) ) {
			return new WP_Error( 'google_invalid_email', __( 'Google did not return a valid email address.', 'ohmylms' ) );
		}

		$user = get_user_by( 'email', $email );

		if ( ! $user ) {
			$user = self::create_user( $email, $profile );
			if ( is_wp_error( $user ) ) {
				return $user;
			}
		} else {
			self::reclaim_unverified_account( $user, $profile );
		}

		if ( ! empty( $profile['sub'] ) ) {
			update_user_meta( $user->ID, self::META_GOOGLE_ID, sanitize_text_field( $profile['sub'] ) );
		}

		return $user;
	}

	/**
	 * Guard against account-hijacking-by-email: matching an existing user by
	 * email alone is not proof the current visitor owns that account. The
	 * first time a not-yet-linked, never-verified account is reached via
	 * Google, reclaim it: rotate the password (invalidating whoever set it)
	 * and mark the email verified. Never touches name/email/avatar — an
	 * existing account's own data is never altered by a Google login.
	 *
	 * @param WP_User $user    The matched existing user.
	 * @param array   $profile Google userinfo payload.
	 * @return void
	 */
	private static function reclaim_unverified_account( WP_User $user, array $profile ) {
		$existing_google_id = get_user_meta( $user->ID, self::META_GOOGLE_ID, true );
		if ( ! empty( $profile['sub'] ) && $existing_google_id === $profile['sub'] ) {
			return; // Already linked to this exact Google identity — trusted returning user.
		}

		if ( EmailVerificationService::is_verified( $user->ID ) ) {
			return; // Ownership of this email was already proven (or verification isn't required on this site).
		}

		wp_set_password( wp_generate_password( 24, true, true ), $user->ID );
		update_user_meta( $user->ID, EmailVerificationService::META_VERIFIED, 'yes' );

		wp_mail(
			$user->user_email,
			__( 'Your account password was reset', 'ohmylms' ),
			__( 'Someone signed in to your account using this email address via Google. As a security precaution, your password was reset. If this was you, you can keep using Google to sign in. If not, please contact support immediately.', 'ohmylms' )
		);
	}

	/**
	 * Create a new WordPress user (and CreatorLMS student profile picture)
	 * from a Google profile. Only runs for brand-new accounts — never for a
	 * returning user, so this is the only place a Google login writes name,
	 * email, or avatar data.
	 *
	 * @param string $email   Verified email address.
	 * @param array  $profile Google userinfo payload.
	 * @return WP_User|WP_Error
	 */
	private static function create_user( $email, array $profile ) {
		$username = self::generate_unique_username( $email );

		$first_name   = sanitize_text_field( $profile['given_name'] ?? '' );
		$last_name    = sanitize_text_field( $profile['family_name'] ?? '' );
		$display_name = sanitize_text_field( $profile['name'] ?? trim( $first_name . ' ' . $last_name ) ) ?: $username;
		$student_role = function_exists( 'creator_lms_get_assignable_student_role' ) ? creator_lms_get_assignable_student_role() : 'subscriber';

		$user_id = wp_insert_user(
			array(
				'user_login'   => $username,
				'user_email'   => $email,
				'user_pass'    => wp_generate_password( 24, true, true ),
				'first_name'   => $first_name,
				'last_name'    => $last_name,
				'display_name' => $display_name,
				'role'         => $student_role,
			)
		);

		if ( is_wp_error( $user_id ) ) {
			return $user_id;
		}

		// Google already verified this email address, skip our own verification flow.
		update_user_meta( $user_id, EmailVerificationService::META_VERIFIED, 'yes' );

		if ( ! empty( $profile['picture'] ) && class_exists( '\OMLMS\Data\Student' ) ) {
			$student = new \OMLMS\Data\Student( $user_id );
			$student->set_profile_image( esc_url_raw( $profile['picture'] ) );
			$student->save();
		}

		return get_user_by( 'id', $user_id );
	}

	/**
	 * Derive a unique WordPress username from an email address.
	 *
	 * @param string $email Email address.
	 * @return string
	 */
	private static function generate_unique_username( $email ) {
		$base = sanitize_user( current( explode( '@', $email ) ), true );
		if ( '' === $base ) {
			$base = 'user';
		}

		$username = $base;
		$suffix   = 1;

		while ( username_exists( $username ) ) {
			$username = $base . $suffix;
			$suffix++;
		}

		return $username;
	}
}
