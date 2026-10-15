<?php // phpcs:ignore WordPress.Files.FileName -- Preserve the Composer PSR-4 class/file mapping.
/**
 * Retire redundant generated pages while preserving their bookmarked routes.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Student;

defined( 'ABSPATH' ) || exit;

/** Migration is explicit; redirect resolution does not depend on a published page. */
final class LegacyPages {

	const OPTION = 'ohmylms_hub_retired_pages';

	/** Register reversible redirects and prevent re-provisioning retired pages. */
	public static function init() {
		add_action( 'template_redirect', array( __CLASS__, 'redirect' ), 4 );
		add_action( 'template_redirect', array( __CLASS__, 'redirect_portal' ), 3 );
		add_filter( 'ohmylms_default_pages', array( __CLASS__, 'default_pages' ) );
	}

	/**
	 * Retire only configured, unmodified, standalone generated pages.
	 *
	 * @return array Page IDs mapped to retirement results.
	 */
	public static function retire() {
		if ( ! current_user_can( 'manage_options' ) || ! Hub::base_url() ) {
			return array();
		}
		$definitions = array(
			'student_dashboard' => array( 'ohmylms_dashboard', 'dashboard' ),
			'student_profile'   => array( 'ohmylms_profile', 'profile' ),
			'student_courses'   => array( 'ohmylms_my_courses', 'my-courses' ),
		);
		$ledger      = get_option( self::OPTION, array() );
		$results     = array();
		foreach ( $definitions as $key => $definition ) {
			$page_id = absint( get_option( 'ohmylms_' . $key . '_page_id' ) );
			$page    = get_post( $page_id );
			if ( ! $page || Hub::settings()['page_id'] === $page_id ) {
				continue;
			}
			$content  = trim( preg_replace( '/<!--.*?-->/s', '', $page->post_content ) );
			$children = get_pages(
				array(
					'parent'      => $page_id,
					'number'      => 1,
					'post_status' => array( 'publish', 'draft', 'pending', 'private', 'future' ),
				)
			);

			$custom_meta = array_diff( array_keys( get_post_meta( $page_id ) ), array( '_wp_page_template', '_edit_lock', '_edit_last' ) );
			if ( 'page' !== $page->post_type || 'publish' !== $page->post_status || '[' . $definition[0] . ']' !== $content || $page->post_password || wp_get_associated_nav_menu_items( $page_id ) || $children || $custom_meta ) {
				$results[ $page_id ] = 'retained: custom content/metadata, menu, child page or publication state';
				continue;
			}
			$ledger[ $page_id ] = array(
				'url'      => get_permalink( $page_id ),
				'endpoint' => $definition[1],
				'option'   => 'ohmylms_' . $key . '_page_id',
			);
			update_option( self::OPTION, $ledger, false );
			if ( ! wp_trash_post( $page_id ) ) {
				unset( $ledger[ $page_id ] );
				update_option( self::OPTION, $ledger, false );
				$results[ $page_id ] = 'retained: trash operation failed';
				continue;
			}
			update_option( 'ohmylms_' . $key . '_page_id', Hub::settings()['page_id'] );
			$results[ $page_id ] = 'trashed; redirect retained';
		}
		return $results;
	}

	/**
	 * Compatibility output for old tags embedded in mixed-content pages.
	 *
	 * @param string $endpoint Legacy destination.
	 * @return string Canonical workspace link, or empty when the hub is disabled.
	 */
	public static function link( $endpoint ) {
		$url = Hub::endpoint_url( $endpoint );
		return $url ? '<p><a href="' . esc_url( $url ) . '">' . esc_html__( 'Open your learning workspace', 'ohmylms' ) . '</a></p>' : '';
	}

	/** Restore recoverable pages and their original configured IDs when disabling the hub. */
	public static function restore() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}
		$ledger = get_option( self::OPTION, array() );
		foreach ( $ledger as $page_id => $entry ) {
			if ( 'trash' === get_post_status( $page_id ) ) {
				if ( ! wp_untrash_post( $page_id ) ) {
					continue;
				}
				wp_update_post(
					array(
						'ID'          => $page_id,
						'post_status' => 'publish',
					)
				);
			}
			if ( 'publish' === get_post_status( $page_id ) ) {
				update_option( $entry['option'], $page_id );
				unset( $ledger[ $page_id ] );
			}
		}
		update_option( self::OPTION, $ledger, false );
	}

	/**
	 * Resolve a retired route, forwarding only supported presentation parameters.
	 *
	 * @param string $request_uri Request URI, relative to the current site origin.
	 * @return string Canonical destination or empty when this is not a retired route.
	 */
	public static function target( $request_uri ) {
		if ( ! Hub::base_url() ) {
			return '';
		}
		$request = wp_parse_url( $request_uri );
		$query   = array();
		parse_str( $request['query'] ?? '', $query );
		foreach ( get_option( self::OPTION, array() ) as $page_id => $entry ) {
			$original = wp_parse_url( $entry['url'] );
			$path     = trailingslashit( $original['path'] ?? '/' );
			$current  = trailingslashit( $request['path'] ?? '/' );
			$by_id    = isset( $query['page_id'] ) && is_scalar( $query['page_id'] ) && absint( $query['page_id'] ) === (int) $page_id;
			$by_path  = empty( $original['query'] ) && ( $current === $path || str_starts_with( $current, $path ) );
			if ( ! $by_id && ! $by_path ) {
				continue;
			}
			$endpoint = $entry['endpoint'];
			$suffix   = $by_path ? trim( substr( $current, strlen( $path ) ), '/' ) : '';
			$segments = $suffix ? explode( '/', $suffix ) : array();
			if ( $segments ) {
				$endpoint = $segments[0];
				foreach ( \OhMyLMS\Commerce\ecommerce()->query->get_query_vars() as $name => $slug ) {
					if ( $endpoint === $slug ) {
						$endpoint = $name;
						break;
					}
				}
			} elseif ( isset( $query['view'] ) && is_string( $query['view'] ) ) {
				$endpoint = sanitize_key( $query['view'] );
			} elseif ( 'true' === ( $query['edit'] ?? '' ) ) {
				$endpoint = 'profile-edit';
			}
			if ( 'customer-logout' === $endpoint ) {
				return wp_logout_url( Hub::base_url() );
			}
			$args = array();
			foreach ( array( 'id', 'current_page' ) as $key ) {
				if ( isset( $query[ $key ] ) && is_scalar( $query[ $key ] ) ) {
					$args[ $key ] = absint( $query[ $key ] );
				}
			}
			if ( 'invoice-details' === $endpoint && isset( $segments[1] ) && ctype_digit( $segments[1] ) ) {
				$args['id'] = absint( $segments[1] );
			}
			return Hub::endpoint_url( $endpoint, $args );
		}
		return '';
	}

	/** Redirect GET bookmarks; form submissions stay with their existing handlers. */
	public static function redirect() {
		if ( 'GET' !== sanitize_text_field( wp_unslash( $_SERVER['REQUEST_METHOD'] ?? '' ) ) ) {
			return;
		}
		$target = self::target( sanitize_text_field( wp_unslash( $_SERVER['REQUEST_URI'] ?? '' ) ) );
		if ( $target ) {
			wp_safe_redirect( $target );
			exit;
		}
	}

	/**
	 * Canonical hub destination for an old school-portal view, or empty when it must stay.
	 *
	 * @param string $view Portal view name.
	 * @param array  $query Request query parameters.
	 * @return string
	 */
	public static function portal_target( $view, array $query ) {
		foreach ( array( 'ohmylms_invite', 'ohmylms_school_file', 'school' ) as $keep ) {
			if ( isset( $query[ $keep ] ) ) {
				return '';
			}
		}
		if ( ! is_user_logged_in() || ! Hub::base_url() || \OhMyLMS\Schools\ViewAs::session() ) {
			return '';
		}
		if ( 'parent-dashboard' === $view && ParentWorkspace::available() ) {
			return ParentWorkspace::url();
		}
		if ( 'student-assignments' === $view && Hub::learner_classes() ) {
			return Hub::url( 'classes' );
		}
		return '';
	}

	/** Redirect the retired parent and student portal views for eligible signed-in users; GET only. */
	public static function redirect_portal() {
		if ( 'GET' !== sanitize_text_field( wp_unslash( $_SERVER['REQUEST_METHOD'] ?? '' ) ) || ! isset( $_GET['ohmylms_portal'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Read-only legacy navigation.
			return;
		}
		$query  = array();
		$keys   = array( 'ohmylms_invite', 'ohmylms_school_file', 'school' );
		foreach ( $keys as $key ) {
			if ( isset( $_GET[ $key ] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Presence check only.
				$query[ $key ] = 1;
			}
		}
		$view   = isset( $_GET['view'] ) && is_string( $_GET['view'] ) ? sanitize_key( wp_unslash( $_GET['view'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Read-only legacy navigation.
		$target = self::portal_target( $view, $query );
		if ( $target ) {
			wp_safe_redirect( $target );
			exit;
		}
	}

	/**
	 * Keep explicit provisioning from recreating pages already migrated to the hub.
	 *
	 * @param array $pages Default page definitions.
	 * @return array
	 */
	public static function default_pages( $pages ) {
		if ( Hub::base_url() ) {
			foreach ( get_option( self::OPTION, array() ) as $entry ) {
				$key = str_replace( array( 'ohmylms_', '_page_id' ), '', $entry['option'] );
				unset( $pages[ $key ] );
			}
		}
		return $pages;
	}
}
