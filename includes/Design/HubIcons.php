<?php
/**
 * Administrator-chosen icons for the learner hub's activity kinds.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Design;

defined( 'ABSPATH' ) || exit;

/**
 * Stores one media library image per activity kind and renders it in place of the built-in icon.
 */
class HubIcons {

	const OPTION = 'ohmylms_hub_icons';

	/**
	 * The activity kinds that can have a custom icon.
	 *
	 * @return array<string,string> Kind key to label.
	 */
	public static function kinds() {
		return array(
			'lesson'     => __( 'Lesson', 'ohmylms' ),
			'practice'   => __( 'Practice', 'ohmylms' ),
			'quiz'       => __( 'Quiz', 'ohmylms' ),
			'assignment' => __( 'Assignment', 'ohmylms' ),
		);
	}

	/**
	 * Keep only known kinds mapped to existing image attachments.
	 *
	 * @param mixed $input Raw map of kind to attachment ID.
	 * @return array<string,int> Cleaned map; kinds without a custom icon are left out.
	 */
	public static function sanitize( $input ) {
		$clean = array();
		if ( ! is_array( $input ) ) {
			return $clean;
		}
		foreach ( array_keys( self::kinds() ) as $kind ) {
			$id = isset( $input[ $kind ] ) ? absint( $input[ $kind ] ) : 0;
			if ( $id && wp_attachment_is_image( $id ) ) {
				$clean[ $kind ] = $id;
			}
		}
		return $clean;
	}

	/**
	 * The saved icon attachment IDs.
	 *
	 * @return array<string,int> Kind to attachment ID.
	 */
	public static function get() {
		return self::sanitize( get_option( self::OPTION, array() ) );
	}

	/**
	 * Save the icon choices after cleaning them.
	 *
	 * @param mixed $input Raw map of kind to attachment ID.
	 * @return array<string,int> The stored map.
	 */
	public static function save( $input ) {
		$clean = self::sanitize( $input );
		update_option( self::OPTION, $clean, false );
		return $clean;
	}

	/**
	 * Image URL for a kind, or an empty string when the built-in icon is used.
	 *
	 * @param string $kind Activity kind.
	 * @return string URL.
	 */
	public static function url( $kind ) {
		$icons = self::get();
		if ( empty( $icons[ $kind ] ) ) {
			return '';
		}
		return (string) wp_get_attachment_image_url( $icons[ $kind ], 'thumbnail' );
	}

	/**
	 * Escaped markup for a kind's custom icon.
	 *
	 * @param string $kind Activity kind.
	 * @return string An img element, or an empty string to fall back to the built-in icon.
	 */
	public static function markup( $kind ) {
		$url = self::url( $kind );
		if ( '' === $url ) {
			return '';
		}
		return '<img class="oml-hub-kind oml-hub-kind--custom" src="' . esc_url( $url ) . '" alt="" width="16" height="16" loading="lazy" decoding="async">';
	}
}
