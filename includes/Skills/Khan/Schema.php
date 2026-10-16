<?php // phpcs:ignore WordPress.Files.FileName -- Preserve the established Composer class/file mapping; see docs/CODING-STANDARDS.md.
/**
 * Storage for Khan-style skill level changes.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Skills\Khan;

defined( 'ABSPATH' ) || exit;

/**
 * One additive table: a log of level changes. A learner's current level for a skill is the newest
 * row, so nothing is overwritten and the history explains every change. Nothing existing is rewritten.
 */
final class Schema {

	const VERSION = '1';
	const OPTION  = 'ohmylms_khan_schema';

	/**
	 * Prefixed table name.
	 *
	 * @param string $name Table name without prefix.
	 * @return string
	 */
	public static function table( $name = 'khan_level_events' ) {
		global $wpdb;
		return $wpdb->prefix . 'ohmylms_' . $name;
	}

	/**
	 * Whether the table is installed.
	 *
	 * @return bool
	 */
	public static function ready() {
		return get_option( self::OPTION ) === self::VERSION;
	}

	/**
	 * Create the table. Repeatable.
	 *
	 * @return bool Whether the table exists afterwards.
	 */
	public static function install() {
		if ( self::ready() ) {
			return true;
		}
		global $wpdb;
		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		$table = self::table();
		dbDelta(
			"CREATE TABLE $table (
 id bigint unsigned NOT NULL AUTO_INCREMENT,
 student_id bigint unsigned NOT NULL,
 term_id bigint unsigned NOT NULL,
 source_type varchar(20) NOT NULL,
 source_id bigint unsigned NOT NULL,
 level_before varchar(12) NOT NULL,
 level_after varchar(12) NOT NULL,
 detail text NULL,
 created_at datetime NOT NULL,
 PRIMARY KEY  (id),
 UNIQUE KEY source (student_id,term_id,source_type,source_id),
 KEY current_level (student_id,term_id,id)
) ENGINE=InnoDB " . $wpdb->get_charset_collate() . ';'
		);
		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery,WordPress.DB.DirectDatabaseQuery.NoCaching -- Install-time table check.
		if ( $wpdb->get_var( $wpdb->prepare( 'SHOW TABLES LIKE %s', $wpdb->esc_like( $table ) ) ) !== $table ) {
			return false;
		}
		update_option( self::OPTION, self::VERSION, false );
		return true;
	}
}
