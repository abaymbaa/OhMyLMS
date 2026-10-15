<?php
namespace OhMyLMS\Curriculum;

defined( 'ABSPATH' ) || exit;

/**
 * Additive, independently versioned storage for curriculum structures, their links to
 * content, shared-skill mappings and Course Bundles. Nothing here alters an existing
 * table: courses, enrollments, learning modes and progress keep their own records, and
 * these tables only reference them by ID. Installing is safe to repeat.
 */
final class Schema {
	// 2: items can be syllabuses (is_syllabus, skill_root_id) and syllabuses hold skill groups of skills.
	// 3: a syllabus is also a course (course_id).
	// 4: curriculum topics and syllabus chapters have editable icons.
	// 5: combined coverage groups retain explicit required membership.
	// 6: Course Bundles were stored as "tracks": their tables and columns are renamed, keeping every row.
	const VERSION = '6';
	const OPTION  = 'ohmylms_curriculum_schema';

	public static function table( $name ) {
		global $wpdb;
		return $wpdb->prefix . 'ohmylms_' . $name;
	}

	/** @return array<string,string> table => column definitions (id/primary key are added). */
	public static function definitions() {
		return array(
			// Any depth: a row points at its parent (0 = root) and carries its order among siblings.
			// is_syllabus marks any item as a syllabus; skill_root_id is the library skill that parents the skills created for it;
			// course_id is the course a syllabus is (a syllabus is also a course; 0 until it is made).
			'curriculum_items'      => "uuid char(36) NOT NULL, parent_id bigint unsigned NOT NULL DEFAULT 0, position int unsigned NOT NULL DEFAULT 0, item_type varchar(40) NOT NULL DEFAULT 'custom', name varchar(190) NOT NULL, icon varchar(40) NOT NULL DEFAULT '', description text NULL, code varchar(60) NOT NULL DEFAULT '', version varchar(60) NOT NULL DEFAULT '', is_syllabus tinyint(1) NOT NULL DEFAULT 0, skill_root_id bigint unsigned NOT NULL DEFAULT 0, course_id bigint unsigned NOT NULL DEFAULT 0, created_by bigint unsigned NOT NULL DEFAULT 0, created_at datetime NOT NULL, updated_at datetime NOT NULL, UNIQUE KEY uuid (uuid), KEY parent_position (parent_id,position), KEY item_type (item_type), KEY is_syllabus (is_syllabus), KEY course_id (course_id)",
			// Skill groups of a syllabus. A group sits under the syllabus item or one of the content items beneath it.
			'syllabus_groups'       => "uuid char(36) NOT NULL, item_id bigint unsigned NOT NULL, position int unsigned NOT NULL DEFAULT 0, code varchar(60) NOT NULL DEFAULT '', name varchar(190) NOT NULL, icon varchar(40) NOT NULL DEFAULT '', description text NULL, created_by bigint unsigned NOT NULL DEFAULT 0, created_at datetime NOT NULL, updated_at datetime NOT NULL, UNIQUE KEY uuid (uuid), KEY item_position (item_id,position)",
			// The library skills placed in a group, in order. A placement is a reference: removing it never deletes the skill.
			'syllabus_group_skills' => 'group_id bigint unsigned NOT NULL, term_id bigint unsigned NOT NULL, position int unsigned NOT NULL DEFAULT 0, UNIQUE KEY member (group_id,term_id), KEY group_position (group_id,position), KEY term (term_id)',
			// Curriculum membership of courses, skills, question banks and quizzes/exams (many to many).
			'curriculum_links'      => 'item_id bigint unsigned NOT NULL, object_type varchar(20) NOT NULL, object_id bigint unsigned NOT NULL, created_by bigint unsigned NOT NULL DEFAULT 0, created_at datetime NOT NULL, UNIQUE KEY link (item_id,object_type,object_id), KEY object (object_type,object_id)',
			// Explicit, directional links from a curriculum-specific skill to a shared skill.
			'skill_mappings'        => "specific_term_id bigint unsigned NOT NULL, shared_term_id bigint unsigned NOT NULL, relation varchar(20) NOT NULL DEFAULT 'equivalent', group_uuid char(36) NOT NULL DEFAULT '', note text NULL, created_by bigint unsigned NOT NULL DEFAULT 0, created_at datetime NOT NULL, updated_at datetime NOT NULL, UNIQUE KEY mapping (specific_term_id,shared_term_id), KEY shared (shared_term_id)",
			'skill_mapping_groups'  => 'uuid char(36) NOT NULL, source_id bigint unsigned NOT NULL, shared_term_id bigint unsigned NOT NULL, member_ids text NOT NULL, created_by bigint unsigned NOT NULL DEFAULT 0, created_at datetime NOT NULL, UNIQUE KEY uuid (uuid), KEY shared (shared_term_id)',
			// Course Bundles: named groupings of courses and curriculum items.
			'bundles'               => "uuid char(36) NOT NULL, title varchar(190) NOT NULL, description text NULL, status varchar(20) NOT NULL DEFAULT 'draft', position int unsigned NOT NULL DEFAULT 0, created_by bigint unsigned NOT NULL DEFAULT 0, created_at datetime NOT NULL, updated_at datetime NOT NULL, published_at datetime NULL, UNIQUE KEY uuid (uuid), KEY status_position (status,position)",
			'bundle_items'          => 'bundle_id bigint unsigned NOT NULL, item_type varchar(20) NOT NULL, item_id bigint unsigned NOT NULL, position int unsigned NOT NULL DEFAULT 0, created_at datetime NOT NULL, UNIQUE KEY member (bundle_id,item_type,item_id), KEY bundle_position (bundle_id,position), KEY object (item_type,item_id)',
			// Following a bundle only adds it to a dashboard; it is not an enrollment and grants no access.
			'bundle_follows'        => 'bundle_id bigint unsigned NOT NULL, user_id bigint unsigned NOT NULL, followed_at datetime NOT NULL, UNIQUE KEY follow (bundle_id,user_id), KEY user_follow (user_id)',
		);
	}

	public static function ready() {
		return get_option( self::OPTION ) === self::VERSION;
	}

	public static function install() {
		if ( self::ready() ) {
			return true; }
		global $wpdb;
		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		if ( ! self::migrate_tracks_to_bundles() ) {
			return false; }
		foreach ( self::definitions() as $name => $definition ) {
			$table   = self::table( $name );
			$columns = str_replace( ', ', ",\n", $definition );
			dbDelta( "CREATE TABLE $table (\n id bigint unsigned NOT NULL AUTO_INCREMENT,\n $columns,\n PRIMARY KEY  (id)\n) ENGINE=InnoDB " . $wpdb->get_charset_collate() . ';' );
			if ( $wpdb->get_var( $wpdb->prepare( 'SHOW TABLES LIKE %s', $wpdb->esc_like( $table ) ) ) !== $table ) {
				return false; }
		}
		// Items typed "syllabus" before the flag existed are syllabuses. Safe to repeat: it only sets the flag.
		$wpdb->query( 'UPDATE ' . self::table( 'curriculum_items' ) . " SET is_syllabus=1 WHERE item_type='syllabus' AND is_syllabus=0" );
		update_option( self::OPTION, self::VERSION, false );
		do_action( 'ohmylms_curriculum_schema_installed', self::VERSION );
		return true;
	}

	/**
	 * Move data stored under the former "track" names to the "bundle" names. Safe to repeat: every step
	 * checks what exists first, rows are carried over by renaming the tables, and nothing is dropped
	 * unless the replacement is empty. Returns false, leaving the old data in place, if both an old
	 * table and a populated new table exist.
	 */
	private static function migrate_tracks_to_bundles() {
		global $wpdb;
		$exists = static function ( $table ) use ( $wpdb ) {
			return $wpdb->get_var( $wpdb->prepare( 'SHOW TABLES LIKE %s', $wpdb->esc_like( $table ) ) ) === $table;
		};
		foreach ( array(
			'tracks'        => 'bundles',
			'track_items'   => 'bundle_items',
			'track_follows' => 'bundle_follows',
		) as $old_name => $new_name ) {
			$old = self::table( $old_name );
			$new = self::table( $new_name );
			if ( ! $exists( $old ) ) {
				continue; }
			if ( $exists( $new ) ) {
				// An empty new table can only have been created by an earlier partial install.
				if ( (int) $wpdb->get_var( "SELECT COUNT(*) FROM $new" ) > 0 ) { // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
					return false; }
				$wpdb->query( "DROP TABLE $new" ); // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
			}
			$wpdb->query( "RENAME TABLE $old TO $new" ); // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
			if ( ! $exists( $new ) ) {
				return false; }
		}
		// Columns and keys that carried the old name.
		foreach ( array( 'bundle_items', 'bundle_follows' ) as $name ) {
			$table = self::table( $name );
			if ( ! $exists( $table ) ) {
				continue; }
			if ( $wpdb->get_var( "SHOW COLUMNS FROM $table LIKE 'track_id'" ) ) { // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
				$wpdb->query( "ALTER TABLE $table CHANGE track_id bundle_id bigint unsigned NOT NULL" ); // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
			}
		}
		$items = self::table( 'bundle_items' );
		if ( $exists( $items ) && $wpdb->get_var( "SHOW INDEX FROM $items WHERE Key_name = 'track_position'" ) ) { // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
			$wpdb->query( "ALTER TABLE $items DROP INDEX track_position" ); // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
			if ( ! $wpdb->get_var( "SHOW INDEX FROM $items WHERE Key_name = 'bundle_position'" ) ) { // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
				$wpdb->query( "ALTER TABLE $items ADD INDEX bundle_position (bundle_id,position)" ); } // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
		}
		// Membership plans stored their Course Bundle rule under the old meta key.
		$wpdb->update( $wpdb->postmeta, array( 'meta_key' => '_course_bundles' ), array( 'meta_key' => '_course_tracks' ) ); // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
		return true;
	}
}
