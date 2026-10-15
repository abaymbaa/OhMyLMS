<?php
namespace OhMyLMS\ProfileBuilder;

defined( 'ABSPATH' ) || exit;

/**
 * Profile layouts: one `ohmylms_profile` post per role, edited in the block editor by administrators.
 * A layout is a private post (only administrators can read it, including over REST); a draft is ignored.
 * The layout is only which sections appear and in what order; each section still decides on the server
 * what the signed-in user may see. Without a saved layout (or with an empty one) the layout shipped in
 * Defaults is used, so the dashboard never renders blank.
 */
final class Layouts {
	const POST_TYPE = 'ohmylms_profile';
	const META_ROLE = '_ohmylms_profile_role';

	/** @return array<string,string> role => layout title. */
	public static function roles() {
		return array( 'student' => __( 'Student dashboard', 'ohmylms' ) );
	}

	public static function init() {
		add_action( 'init', array( __CLASS__, 'register' ), 9 );
		add_filter( 'map_meta_cap', array( __CLASS__, 'protect' ), 10, 4 );
		add_filter( 'post_row_actions', array( __CLASS__, 'row_actions' ), 10, 2 );
		add_filter( 'bulk_actions-edit-' . self::POST_TYPE, '__return_empty_array' );
		add_action( 'admin_post_ohmylms_profile_reset', array( __CLASS__, 'handle_reset' ) );
		add_action( 'load-edit.php', array( __CLASS__, 'ensure_all' ) );
		Blocks::init();
	}

	public static function register() {
		register_post_type(
			self::POST_TYPE,
			array(
				'labels'              => array(
					'name'          => __( 'Profile Builder', 'ohmylms' ),
					'singular_name' => __( 'Profile layout', 'ohmylms' ),
					'edit_item'     => __( 'Edit profile layout', 'ohmylms' ),
					'search_items'  => __( 'Search profile layouts', 'ohmylms' ),
					'not_found'     => __( 'No profile layouts yet.', 'ohmylms' ),
					'all_items'     => __( 'Profile Builder', 'ohmylms' ),
				),
				'public'              => false,
				'show_ui'             => true,
				'show_in_menu'        => defined( 'OHMYLMS_SLUG' ) ? OHMYLMS_SLUG : true,
				'show_in_rest'        => true,
				'exclude_from_search' => true,
				'rewrite'             => false,
				'query_var'           => false,
				'can_export'          => true,
				'supports'            => array( 'title', 'editor', 'revisions' ),
				// Only the plural capabilities: overriding edit_post/read_post/delete_post would make every
				// manage_options check resolve through them.
				'capabilities'        => array(
					'edit_posts'             => 'manage_options',
					'edit_others_posts'      => 'manage_options',
					'publish_posts'          => 'manage_options',
					'read_private_posts'     => 'manage_options',
					'delete_posts'           => 'manage_options',
					'delete_others_posts'    => 'manage_options',
					'delete_published_posts' => 'manage_options',
					'edit_published_posts'   => 'manage_options',
					'create_posts'           => 'do_not_allow',
				),
				'map_meta_cap'        => true,
			)
		);
	}

	/** A layout is reset, never deleted, and only administrators can read its post. */
	public static function protect( $caps, $cap, $user_id, $args ) {
		if ( ! in_array( $cap, array( 'delete_post', 'read_post' ), true ) || empty( $args[0] ) || get_post_type( $args[0] ) !== self::POST_TYPE ) {
			return $caps; }
		return 'delete_post' === $cap ? array( 'do_not_allow' ) : array( 'manage_options' );
	}

	public static function post_id( $role ) {
		$ids = get_posts(
			array(
				'post_type'        => self::POST_TYPE,
				'post_status'      => 'any',
				'numberposts'      => 1,
				'fields'           => 'ids',
				'meta_key'         => self::META_ROLE, // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
				'meta_value'       => $role, // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_value
				'orderby'          => 'ID',
				'order'            => 'ASC',
				'suppress_filters' => true,
			)
		);
		return $ids ? (int) $ids[0] : 0;
	}

	/** Create the layout post from the shipped default if it does not exist. Returns its ID, or 0. */
	public static function ensure( $role ) {
		$roles = self::roles();
		if ( ! isset( $roles[ $role ] ) ) {
			return 0; }
		$id = self::post_id( $role );
		if ( $id ) {
			return $id; }
		$id = wp_insert_post(
			array(
				'post_type'    => self::POST_TYPE,
				'post_status'  => 'private',
				'post_title'   => $roles[ $role ],
				'post_content' => Defaults::content( $role ),
			),
			true
		);
		if ( is_wp_error( $id ) ) {
			return 0; }
		update_post_meta( $id, self::META_ROLE, $role );
		return (int) $id;
	}

	public static function ensure_all() {
		if ( ( $_GET['post_type'] ?? '' ) !== self::POST_TYPE || ! current_user_can( 'manage_options' ) ) { // phpcs:ignore WordPress.Security.NonceVerification
			return; }
		foreach ( array_keys( self::roles() ) as $role ) {
			self::ensure( $role ); }
	}

	/** Block markup to render: the saved layout when it is published and not empty, otherwise the default. */
	public static function content( $role ) {
		$id = self::post_id( $role );
		if ( $id && in_array( get_post_status( $id ), array( 'private', 'publish' ), true ) ) {
			$content = (string) get_post_field( 'post_content', $id );
			if ( '' !== trim( $content ) ) {
				return $content; }
		}
		return Defaults::content( $role );
	}

	/** Restore the shipped layout, keeping the post and its revisions. */
	public static function reset( $role ) {
		$id = self::ensure( $role );
		if ( ! $id ) {
			return false; }
		$result = wp_update_post(
			array(
				'ID'           => $id,
				'post_status'  => 'private',
				'post_content' => Defaults::content( $role ),
			),
			true
		);
		return ! is_wp_error( $result );
	}

	public static function render( $role ) {
		return do_blocks( self::content( $role ) );
	}

	public static function row_actions( $actions, $post ) {
		if ( self::POST_TYPE !== $post->post_type ) {
			return $actions; }
		$role = get_post_meta( $post->ID, self::META_ROLE, true );
		unset( $actions['inline hide-if-no-js'], $actions['view'], $actions['trash'] );
		if ( $role ) {
			$url                      = wp_nonce_url( admin_url( 'admin-post.php?action=ohmylms_profile_reset&role=' . rawurlencode( $role ) ), 'ohmylms_profile_reset_' . $role );
			$actions['ohmylms_reset'] = '<a href="' . esc_url( $url ) . '" onclick="return confirm(' . esc_attr( wp_json_encode( __( 'Replace this layout with the default? Earlier versions stay in the revisions.', 'ohmylms' ) ) ) . ');">' . esc_html__( 'Reset to default', 'ohmylms' ) . '</a>';
		}
		return $actions;
	}

	public static function handle_reset() {
		$role = sanitize_key( $_GET['role'] ?? '' );
		if ( ! current_user_can( 'manage_options' ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_GET['_wpnonce'] ?? '' ) ), 'ohmylms_profile_reset_' . $role ) ) {
			wp_die( esc_html__( 'You are not allowed to do that.', 'ohmylms' ), '', array( 'response' => 403 ) ); }
		self::reset( $role );
		wp_safe_redirect( admin_url( 'edit.php?post_type=' . self::POST_TYPE ) );
		exit;
	}
}
