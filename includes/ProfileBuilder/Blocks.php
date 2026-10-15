<?php
namespace OhMyLMS\ProfileBuilder;

defined( 'ABSPATH' ) || exit;

/**
 * One dynamic block per section. They are registered on the server only (supports.autoRegister), so the
 * editor shows a live server-side preview and there is no JavaScript of our own to build.
 */
final class Blocks {
	const PREFIX = 'ohmylms/profile-';

	public static function init() {
		add_action( 'init', array( __CLASS__, 'register' ), 20 );
		add_filter( 'allowed_block_types_all', array( __CLASS__, 'limit_to_layouts' ), 20, 2 );
		add_action( 'enqueue_block_assets', array( __CLASS__, 'editor_assets' ) );
	}

	public static function register() {
		foreach ( Sections::all() as $key => $section ) {
			register_block_type(
				self::PREFIX . $key,
				array(
					'api_version'     => 3,
					'title'           => $section['title'],
					'description'     => $section['description'],
					'category'        => 'ohmylms',
					'icon'            => $section['icon'],
					'supports'        => array(
						'autoRegister'    => true,
						'html'            => false,
						'multiple'        => false,
						'customClassName' => false,
					),
					'render_callback' => static function () use ( $key ) {
						return Sections::render( $key );
					},
				)
			);
		}
	}

	/** The profile blocks only make sense inside a profile layout. */
	public static function limit_to_layouts( $allowed, $context ) {
		$post_type = isset( $context->post->post_type ) ? $context->post->post_type : '';
		if ( Layouts::POST_TYPE === $post_type ) {
			return $allowed; }
		if ( true === $allowed ) {
			$allowed = array_keys( \WP_Block_Type_Registry::get_instance()->get_all_registered() ); }
		if ( ! is_array( $allowed ) ) {
			return $allowed; }
		return array_values(
			array_filter(
				$allowed,
				static function ( $name ) {
					return 0 !== strpos( $name, self::PREFIX );
				}
			)
		);
	}

	/** The previews are the real dashboard sections, so load their styles in the editor. */
	public static function editor_assets() {
		if ( ! is_admin() || ! function_exists( 'get_current_screen' ) ) {
			return; }
		$screen = get_current_screen();
		if ( $screen && Layouts::POST_TYPE === $screen->post_type ) {
			wp_enqueue_style( 'ohmylms-student-dashboard', plugins_url( 'assets/css/student-dashboard.css', OHMYLMS_FILE ), array(), (string) filemtime( OHMYLMS_DIR . '/assets/css/student-dashboard.css' ) );
		}
	}
}
