<?php
namespace OhMyLMS\Extensions;

final class Layouts {
	private static $rendering = array();
	public static function resolve( $context, $id, $course_id = 0 ) {
		$selected = get_post_meta( $id, '_ohmylms_layout', true );
		if ( $selected === 'default' ) {
			return null;
		}
		$defaults = (array) get_post_meta( $course_id ?: $id, '_ohmylms_layout_defaults', true );
		foreach ( array( $selected, $defaults[ $context ] ?? '' ) as $candidate ) {
			if ( ! is_string( $candidate ) ) {
				continue;
			}
			$definition = Registry::get( 'layout', $candidate );
			if ( $definition && in_array( $context, $definition['contexts'], true ) ) {
				return array( 'id' => $candidate ) + $definition;
			}
		}
		return null;
	}
	public static function render( $context, $id, $course_id = 0, array $args = array() ) {
		$key = $context . ':' . $id;
		if ( isset( self::$rendering[ $key ] ) ) {
			return false;
		}
		$layout = self::resolve( $context, $id, $course_id );
		if ( ! $layout ) {
			return false;
		}
		self::$rendering[ $key ] = true;
		try {
			$args     = array(
				'content_id' => (int) $id,
				'course_id'  => (int) $course_id,
				'context'    => $context,
			) + $args;
			$template = locate_template( 'ohmylms/layouts/' . $layout['id'] . '/' . $context . '.php' );
			if ( $template ) {
				include $template; } else {
				call_user_func( $layout['render'], $args ); }
		} finally {
			unset( self::$rendering[ $key ] ); }
		return true;
	}
}
