<?php // phpcs:ignore WordPress.Files.FileName -- Preserve the established Composer class/file mapping; see docs/CODING-STANDARDS.md.
/**
 * Which mastery model decides a learner's skill level.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Skills\Khan;

defined( 'ABSPATH' ) || exit;

/**
 * Site setting for the mastery model.
 *
 * "evidence" is the original model (stored evidence rules and the optional SmartScore) and stays the
 * default. "khan" sets a skill's level from exercise results and from mixed-skill assessments, one step
 * at a time, and lets a learner try a practice question again after a wrong answer.
 */
final class Settings {

	const OPTION = 'ohmylms_mastery_settings';
	const MODELS = array( 'evidence', 'khan' );

	/**
	 * Defaults.
	 *
	 * @return array{model:string}
	 */
	public static function defaults() {
		return array( 'model' => 'evidence' );
	}

	/**
	 * Stored settings with defaults applied.
	 *
	 * @return array{model:string}
	 */
	public static function get() {
		$stored = get_option( self::OPTION, array() );
		$model  = is_array( $stored ) && isset( $stored['model'] ) ? (string) $stored['model'] : 'evidence';
		return array( 'model' => in_array( $model, self::MODELS, true ) ? $model : 'evidence' );
	}

	/**
	 * Whether the Khan level rules are on and their storage exists.
	 *
	 * @return bool
	 */
	public static function enabled() {
		return 'khan' === self::get()['model'] && Schema::ready();
	}

	/**
	 * Validate a settings payload.
	 *
	 * @param mixed $settings Request body.
	 * @return array{model:string}|\WP_Error
	 */
	public static function validate( $settings ) {
		if ( ! is_array( $settings ) || ! isset( $settings['model'] ) || ! in_array( $settings['model'], self::MODELS, true ) ) {
			return new \WP_Error( 'mastery_settings', __( 'Choose a valid mastery model.', 'ohmylms' ), array( 'status' => 400 ) );
		}
		return array( 'model' => (string) $settings['model'] );
	}
}
