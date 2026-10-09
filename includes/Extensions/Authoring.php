<?php
namespace OhMyLMS\Extensions;

final class Authoring {
	public static function init() {
		add_action( 'ohmylms_before_creating_new_question', array( __CLASS__, 'validate_question' ) );
		add_action( 'ohmylms_before_updating_question', array( __CLASS__, 'validate_question' ) );
	}

	public static function validate_question( $question ) {
		$settings   = $question->get_settings();
		$definition = Registry::get( 'question', $settings['type'] ?? '' );
		if ( \OhMyLMS\Assessment\Template::has( $settings ) ) {
			// A template is valid when real examples of it are valid questions of its type.
			$result = \OhMyLMS\Assessment\Template::validate(
				$settings,
				$question->get_name(),
				$question->get_description(),
				$question->get_questions(),
				static function ( $example ) use ( $definition ) {
					return self::check( $definition, $example );
				}
			);
		} else {
			$result = self::check( $definition, $settings );
		}
		if ( $result !== true ) {
			throw new \OhMyLMS\DataException( 'ohmylms_invalid_question_settings', is_string( $result ) ? $result : __( 'Invalid question settings.', 'ohmylms' ), 400 );
		}
	}

	/**
	 * Run a type's own settings checks on a settings array.
	 *
	 * @return true|string
	 */
	public static function check( $definition, array $settings ) {
		if ( ! empty( $definition['validate_settings'] ) && is_callable( $definition['validate_settings'] ) ) {
			$result = call_user_func( $definition['validate_settings'], $settings );
			if ( $result !== true ) {
				return is_string( $result ) ? $result : __( 'Invalid question settings.', 'ohmylms' );
			}
		}
		$schema = $definition['editor']['schema'] ?? null;
		if ( $schema ) {
			$valid = rest_validate_value_from_schema( $settings, $schema, 'settings' );
			if ( is_wp_error( $valid ) ) {
				return $valid->get_error_message();
			}
		}
		return true;
	}
}
