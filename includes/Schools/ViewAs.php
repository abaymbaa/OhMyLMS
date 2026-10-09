<?php
namespace OhMyLMS\Schools;

defined( 'ABSPATH' ) || exit;

/** Account switching keeps the administrator's session server-side. */
final class ViewAs {
	private static function cookie_name() {
		return 'ohmylms_view_as_' . COOKIEHASH; }
	private static function key( $token ) {
		return 'ohmylms_view_as_' . hash( 'sha256', $token ); }
	private static function cookie( $token, $expires ) {
		setcookie(
			self::cookie_name(),
			$token,
			array(
				'expires'  => $expires,
				'path'     => '/',
				'secure'   => is_ssl(),
				'httponly' => true,
				'samesite' => 'Lax',
			)
		);
	}
	public static function register() {
		foreach ( array(
			'options' => 'GET',
			'start'   => 'POST',
			'return'  => 'POST',
		) as $action => $method ) {
			register_rest_route(
				'ohmylms/v1',
				'/school/view-as/' . $action,
				array(
					'methods'             => $method,
					'permission_callback' => function ( $r ) use ( $action ) {
						if ( ! is_user_logged_in() || ! wp_verify_nonce( $r->get_header( 'X-WP-Nonce' ), 'wp_rest' ) ) {
							return new \WP_Error( 'view_as_auth', 'Refresh the page and sign in again.', array( 'status' => 403 ) ); }
						return ( $action === 'return' ? (bool) self::session() : current_user_can( 'manage_options' ) ) ? true : new \WP_Error( 'view_as_forbidden', 'Only an administrator can switch accounts.', array( 'status' => 403 ) );
					},
					'callback'            => function ( $r ) use ( $action ) {
						try {
							$response = rest_ensure_response( self::$action( $r ) );
							$response->header( 'Cache-Control', 'private, no-store' );
							return $response;
						} catch ( \Throwable $e ) {
							return new \WP_Error( 'view_as_error', $e->getMessage(), array( 'status' => in_array( $e->getCode(), array( 400, 403 ), true ) ? $e->getCode() : 400 ) );
						}
					},
				)
			);
		}
	}
	public static function candidates( $role, $class = 0, $course = 0, $search = '', $page = 1, $only = 0 ) {
		global $wpdb;
		Service::need( in_array( $role, array( 'student', 'teacher', 'parent', 'instructor' ), true ), 'Choose a valid view.' );
		Service::need( ! $class || ! $course, 'Choose one class or course.' );
		$args = array(
			'number'         => 50,
			'paged'          => max( 1, $page ),
			'orderby'        => 'display_name',
			'order'          => 'ASC',
			'search'         => $search ? '*' . $search . '*' : '',
			'search_columns' => array( 'display_name', 'user_login', 'user_email' ),
		);
		if ( $class ) {
			Service::need( in_array( $role, array( 'student', 'instructor' ), true ) && Service::row( 'classes', $class ), 'Class not available.' );
			$m               = Schema::table( 'class_memberships' );
			$args['include'] = $wpdb->get_col( $wpdb->prepare( "SELECT user_id FROM $m WHERE class_id=%d AND role=%s AND status='active'", $class, $role === 'instructor' ? 'teacher' : 'student' ) ) ?: array( 0 );
		} elseif ( $course ) {
			$post = get_post( $course );
			Service::need( in_array( $role, array( 'student', 'instructor' ), true ) && $post && $post->post_type === OHMYLMS_COURSE_CPT, 'Course not available.' );
			$m               = Schema::table( 'user_enrollment' );
			$args['include'] = $role === 'instructor' ? array( (int) $post->post_author ) : ( $wpdb->get_col( $wpdb->prepare( "SELECT user_id FROM $m WHERE course_id=%d AND status='enrolled'", $course ) ) ?: array( 0 ) );
		} else {
			$roles = array(
				'student'    => array( 'subscriber', 'ohmylms_student' ),
				'teacher'    => array( 'ohmylms_teacher', 'ohmylms_instructor' ),
				'instructor' => array( 'ohmylms_instructor' ),
				'parent'     => array( 'ohmylms_parent' ),
			);
			if ( $role === 'student' && function_exists( 'ohmylms_get_student_role' ) ) {
				$roles['student'][] = ohmylms_get_student_role(); }
			$ids = get_users(
				array(
					'role__in' => array_unique( $roles[ $role ] ),
					'fields'   => 'ID',
				)
			);
			if ( in_array( $role, array( 'student', 'teacher' ), true ) ) {
				$m   = Schema::table( 'school_memberships' );
				$ids = array_merge( $ids, $wpdb->get_col( $wpdb->prepare( "SELECT user_id FROM $m WHERE role=%s AND status='active'", $role ) ) );
			} elseif ( $role === 'parent' ) {
				$m   = Schema::table( 'guardian_links' );
				$ids = array_merge( $ids, $wpdb->get_col( "SELECT guardian_user_id FROM $m WHERE status='active'" ) );
			}
			$args['include'] = array_unique( array_map( 'intval', $ids ) ) ?: array( 0 );
		}
		if ( $only ) {
			$args['include'] = in_array( $only, array_map( 'intval', $args['include'] ), true ) ? array( $only ) : array( 0 ); }
		// Never offer a privileged account as a learner or staff member.
		$users = ( new \WP_User_Query( $args ) )->get_results();
		return array_values(
			array_map(
				function ( $u ) {
					return array(
						'id'    => $u->ID,
						'name'  => $u->display_name,
						'email' => $u->user_email,
					);
				},
				array_filter(
					$users,
					function ( $u ) {
						return ! user_can( $u, 'manage_options' );
					}
				)
			)
		);
	}
	public static function options( $r ) {
		return self::candidates( sanitize_key( $r['role'] ), absint( $r['class_id'] ), absint( $r['course_id'] ), Service::text( $r['search'] ?? '' ), absint( $r['page'] ) );
	}
	public static function start( $r ) {
		Access::require_access( current_user_can( 'manage_options' ) && ! self::session() );
		$user = absint( $r['user_id'] );
		$role = sanitize_key( $r['role'] );
		// Revalidate membership independently of the person picker's response.
		$valid = $user && self::candidates( $role, absint( $r['class_id'] ), absint( $r['course_id'] ), '', 1, $user );
		Access::require_access( $valid && $user !== get_current_user_id() && current_user_can( 'edit_user', $user ) );
		$actor    = get_current_user_id();
		$original = wp_get_session_token();
		Access::require_access( $original && \WP_Session_Tokens::get_instance( $actor )->verify( $original ) );
		$expires        = time() + HOUR_IN_SECONDS;
		$target_session = \WP_Session_Tokens::get_instance( $user )->create( $expires );
		$token          = wp_generate_password( 64, false, false );
		set_transient(
			self::key( $token ),
			array(
				'actor'          => $actor,
				'original'       => $original,
				'target'         => $user,
				'target_session' => $target_session,
				'expires'        => $expires,
			),
			HOUR_IN_SECONDS
		);
		Service::audit( 0, 'view_as_started', $user );
		self::cookie( $token, $expires );
		wp_clear_auth_cookie();
		wp_set_auth_cookie( $user, false, is_ssl(), $target_session );
		$url = Views::portal_url();
		if ( $r['course_id'] ) {
			$url = get_permalink( absint( $r['course_id'] ) ); } elseif ( $r['class_id'] ) {
			$class = Service::row( 'classes', absint( $r['class_id'] ) );
			$url   = add_query_arg(
				array(
					'school' => $class['school_id'],
					'class'  => $class['id'],
				),
				$url
			); } elseif ( $role === 'student' && function_exists( 'ohmylms_get_page_id' ) ) {
				$profile = ohmylms_get_page_id( 'student_dashboard' );
				if ( $profile > 0 ) {
					$url = get_permalink( $profile ); }
			}
			if ( ! $r['course_id'] && ! ( $role === 'student' && ! $r['class_id'] && $url !== Views::portal_url() ) ) {
				$url = add_query_arg( 'view', $role === 'parent' ? 'parent-dashboard' : ( $role === 'student' ? 'student-assignments' : 'teacher-dashboard' ), $url ); }
				return array( 'url' => $url );
	}
	public static function session() {
		$token = $_COOKIE[ self::cookie_name() ] ?? '';
		if ( ! is_string( $token ) || ! preg_match( '/^[a-zA-Z0-9]{64}$/', $token ) ) {
			return false; }
		$record = get_transient( self::key( $token ) );
		if ( ! $record || (int) $record['target'] !== get_current_user_id() || ! hash_equals( $record['target_session'], wp_get_session_token() ) ) {
			return false; }
		return $record;
	}
	public static function protect_session() {
		if ( ! self::session() ) {
			return; }
		if ( ! defined( 'DONOTCACHEPAGE' ) ) {
			define( 'DONOTCACHEPAGE', true ); }
		nocache_headers();
	}
	public static function return( $r ) {
		$record = self::session();
		Access::require_access( $record && user_can( $record['actor'], 'manage_options' ) && \WP_Session_Tokens::get_instance( $record['actor'] )->verify( $record['original'] ) );
		wp_clear_auth_cookie();
		wp_set_auth_cookie( $record['actor'], false, is_ssl(), $record['original'] );
		\WP_Session_Tokens::get_instance( $record['target'] )->destroy( $record['target_session'] );
		delete_transient( self::key( $_COOKIE[ self::cookie_name() ] ) );
		self::cookie( '', time() - HOUR_IN_SECONDS );
		wp_set_current_user( $record['actor'] );
		Service::audit( 0, 'view_as_returned', $record['target'] );
		return array( 'url' => admin_url( 'admin.php?page=' . OHMYLMS_SLUG ) . '#/accounthub' );
	}
	public static function banner() {
		if ( ! self::session() ) {
			return; }
		$config = array(
			'url'   => rest_url( 'ohmylms/v1/school/view-as/return' ),
			'nonce' => wp_create_nonce( 'wp_rest' ),
		);
		echo '<div id="ohmylms-view-as-banner" style="position:fixed;bottom:0;left:0;right:0;z-index:999999;background:#14213d;color:white;padding:12px 24px;display:flex;align-items:center;gap:16px">' . esc_html( sprintf( __( 'Viewing and acting as %s', 'ohmylms' ), wp_get_current_user()->display_name ) ) . ' <button type="button">' . esc_html__( 'Return to admin', 'ohmylms' ) . '</button><span role="alert"></span></div>';
		echo '<script>(function(c){const b=document.getElementById("ohmylms-view-as-banner"),x=b.querySelector("button");x.onclick=async function(){x.disabled=true;try{const r=await fetch(c.url,{method:"POST",credentials:"same-origin",headers:{"X-WP-Nonce":c.nonce}}),d=await r.json();if(!r.ok)throw Error(d.message);location.href=d.url;}catch(e){b.querySelector("span").textContent=e.message;x.disabled=false;}};})(' . wp_json_encode( $config, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT ) . ');</script>';
	}
}
