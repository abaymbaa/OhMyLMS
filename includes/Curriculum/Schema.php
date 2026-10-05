<?php
namespace OhMyLMS\Curriculum;

defined('ABSPATH') || exit;

/**
 * Additive, independently versioned storage for curriculum structures, their links to
 * content, shared-skill mappings and Learning Tracks. Nothing here alters an existing
 * table: courses, enrollments, learning modes and progress keep their own records, and
 * these tables only reference them by ID. Installing is safe to repeat.
 */
final class Schema {
    const VERSION = '1';
    const OPTION = 'ohmylms_curriculum_schema';

    public static function table($name) {
        global $wpdb;
        return $wpdb->prefix . 'ohmylms_' . $name;
    }

    /** @return array<string,string> table => column definitions (id/primary key are added). */
    public static function definitions() {
        return [
            // Any depth: a row points at its parent (0 = root) and carries its order among siblings.
            'curriculum_items' => "uuid char(36) NOT NULL, parent_id bigint unsigned NOT NULL DEFAULT 0, position int unsigned NOT NULL DEFAULT 0, item_type varchar(40) NOT NULL DEFAULT 'custom', name varchar(190) NOT NULL, description text NULL, code varchar(60) NOT NULL DEFAULT '', version varchar(60) NOT NULL DEFAULT '', created_by bigint unsigned NOT NULL DEFAULT 0, created_at datetime NOT NULL, updated_at datetime NOT NULL, UNIQUE KEY uuid (uuid), KEY parent_position (parent_id,position), KEY item_type (item_type)",
            // Curriculum membership of courses, skills, question banks and quizzes/exams (many to many).
            'curriculum_links' => "item_id bigint unsigned NOT NULL, object_type varchar(20) NOT NULL, object_id bigint unsigned NOT NULL, created_by bigint unsigned NOT NULL DEFAULT 0, created_at datetime NOT NULL, UNIQUE KEY link (item_id,object_type,object_id), KEY object (object_type,object_id)",
            // Explicit, directional links from a curriculum-specific skill to a shared skill.
            'skill_mappings' => "specific_term_id bigint unsigned NOT NULL, shared_term_id bigint unsigned NOT NULL, relation varchar(20) NOT NULL DEFAULT 'equivalent', note text NULL, created_by bigint unsigned NOT NULL DEFAULT 0, created_at datetime NOT NULL, updated_at datetime NOT NULL, UNIQUE KEY mapping (specific_term_id,shared_term_id), KEY shared (shared_term_id)",
            // Learning Tracks: named groupings of courses and curriculum items.
            'tracks' => "uuid char(36) NOT NULL, title varchar(190) NOT NULL, description text NULL, status varchar(20) NOT NULL DEFAULT 'draft', position int unsigned NOT NULL DEFAULT 0, created_by bigint unsigned NOT NULL DEFAULT 0, created_at datetime NOT NULL, updated_at datetime NOT NULL, published_at datetime NULL, UNIQUE KEY uuid (uuid), KEY status_position (status,position)",
            'track_items' => "track_id bigint unsigned NOT NULL, item_type varchar(20) NOT NULL, item_id bigint unsigned NOT NULL, position int unsigned NOT NULL DEFAULT 0, created_at datetime NOT NULL, UNIQUE KEY member (track_id,item_type,item_id), KEY track_position (track_id,position), KEY object (item_type,item_id)",
            // Following a track only adds it to a dashboard; it is not an enrollment and grants no access.
            'track_follows' => "track_id bigint unsigned NOT NULL, user_id bigint unsigned NOT NULL, followed_at datetime NOT NULL, UNIQUE KEY follow (track_id,user_id), KEY user_follow (user_id)",
        ];
    }

    public static function ready() {
        return get_option(self::OPTION) === self::VERSION;
    }

    public static function install() {
        if (self::ready()) { return true; }
        global $wpdb;
        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        foreach (self::definitions() as $name => $definition) {
            $table = self::table($name);
            $columns = str_replace(', ', ",\n", $definition);
            dbDelta("CREATE TABLE $table (\n id bigint unsigned NOT NULL AUTO_INCREMENT,\n $columns,\n PRIMARY KEY  (id)\n) ENGINE=InnoDB " . $wpdb->get_charset_collate() . ';');
            if ($wpdb->get_var($wpdb->prepare('SHOW TABLES LIKE %s', $wpdb->esc_like($table))) !== $table) { return false; }
        }
        update_option(self::OPTION, self::VERSION, false);
        do_action('ohmylms_curriculum_schema_installed', self::VERSION);
        return true;
    }
}
