<?php // phpcs:ignore WordPress.Files.FileName -- Preserve the established Composer class/file mapping; see docs/CODING-STANDARDS.md.
/**
 * Lesson groups inside a unit: named, ordered sets of a unit's program items. Groups live in the
 * program JSON only (no table), and a program without groups behaves exactly as before.
 *
 * Pure rules (no WordPress calls) so they can be checked without a database.
 *
 * @package OhMyLMS
 */
namespace OhMyLMS\Learning;

defined( 'ABSPATH' ) || exit;

/** Validation and arrangement of the optional "groups" list of a course program. */
final class ProgramGroups {
	const MAX_GROUPS = 200;
	const MAX_TITLE  = 120;

	/**
	 * Validate the raw group list.
	 *
	 * @param mixed $raw      Submitted groups: [{id, chapter_id, title}], array order is the order within a unit.
	 * @param int[] $chapters Chapter (unit) IDs of this course.
	 * @return array|string   Clean groups, or an error code: oversized|invalid|id|chapter|title.
	 */
	public static function normalize( $raw, array $chapters ) {
		if ( null === $raw || array() === $raw ) {
			return array(); }
		if ( ! is_array( $raw ) ) {
			return 'invalid'; }
		if ( count( $raw ) > self::MAX_GROUPS ) {
			return 'oversized'; }
		$groups = array();
		$seen   = array();
		foreach ( $raw as $group ) {
			if ( ! is_array( $group ) ) {
				return 'invalid'; }
			$id = $group['id'] ?? '';
			if ( ! is_string( $id ) || ! preg_match( '/^[a-f0-9-]{36}$/D', $id ) || isset( $seen[ $id ] ) ) {
				return 'id'; }
			$seen[ $id ] = true;
			$chapter     = (int) ( $group['chapter_id'] ?? 0 );
			if ( $chapter <= 0 || ! in_array( $chapter, $chapters, true ) ) {
				return 'chapter'; }
			$title = self::title( $group['title'] ?? '' );
			if ( '' === $title ) {
				return 'title'; }
			$groups[] = array(
				'id'         => $id,
				'chapter_id' => $chapter,
				'title'      => $title,
			);
		}
		return $groups;
	}

	/**
	 * Plain, single-line, length-limited title.
	 *
	 * @param mixed $value Submitted title.
	 * @return string
	 */
	public static function title( $value ) {
		// strip_tags(), not wp_strip_all_tags(): these rules stay free of WordPress calls so they run without a database.
		$text = trim( preg_replace( '/\s+/u', ' ', strip_tags( is_scalar( $value ) ? (string) $value : '' ) ) ); // phpcs:ignore WordPress.WP.AlternativeFunctions.strip_tags_strip_tags
		return function_exists( 'mb_substr' ) ? mb_substr( $text, 0, self::MAX_TITLE ) : substr( $text, 0, self::MAX_TITLE );
	}

	/**
	 * Check an item's or outcome's optional group_id against the clean groups.
	 *
	 * @param array $groups  Clean groups from normalize().
	 * @param mixed $group_id Submitted group_id (empty = ungrouped).
	 * @param int   $chapter The item's chapter (unit).
	 * @return string|null   Error code (group|group_chapter), or null when fine.
	 */
	public static function check_member( array $groups, $group_id, $chapter ) {
		if ( null === $group_id || '' === $group_id ) {
			return null; }
		foreach ( $groups as $group ) {
			if ( $group['id'] === $group_id ) {
				return (int) $group['chapter_id'] === (int) $chapter ? null : 'group_chapter'; }
		}
		return 'group';
	}

	/**
	 * Split one unit's rows into its groups and the rest.
	 *
	 * @param array   $groups  Program groups (all units).
	 * @param array[] $rows    The unit's rows, each optionally with 'group_id'.
	 * @param int     $chapter The unit's chapter ID.
	 * @return array{groups: array[], ungrouped: array[]} Groups keep program order; empty groups are left out.
	 */
	public static function arrange( array $groups, array $rows, $chapter ) {
		$by_group = array();
		$loose    = array();
		foreach ( $rows as $row ) {
			$id = (string) ( $row['group_id'] ?? '' );
			if ( '' === $id ) {
				$loose[] = $row;
			} else {
				$by_group[ $id ][] = $row; }
		}
		$out = array();
		foreach ( $groups as $group ) {
			if ( (int) $group['chapter_id'] !== (int) $chapter ) {
				continue; }
			if ( ! empty( $by_group[ $group['id'] ] ) ) {
				$out[] = array(
					'id'    => $group['id'],
					'title' => $group['title'],
					'items' => $by_group[ $group['id'] ],
				);
				unset( $by_group[ $group['id'] ] ); }
		}
		// A row pointing at a group that no longer exists is shown as ungrouped, never dropped.
		foreach ( $by_group as $orphans ) {
			$loose = array_merge( $loose, $orphans ); }
		return array(
			'groups'    => $out,
			'ungrouped' => $loose,
		);
	}

	/**
	 * Carry lesson-group membership over from the stored draft for rows whose payload omits `group_id`
	 * (editors that do not know about groups). A row that moved to another unit is left ungrouped, and a
	 * row that sends `group_id` itself (even empty) is never overridden.
	 *
	 * @param array  $rows     Submitted rows.
	 * @param array  $stored   Rows of the stored draft.
	 * @param string $key      Field that identifies a row: `id` for items, `term_id` for outcomes.
	 * @return array
	 */
	public static function carry( array $rows, array $stored, $key ) {
		$by_key = array();
		foreach ( $stored as $row ) {
			if ( ! empty( $row['group_id'] ) && isset( $row[ $key ] ) ) {
				$by_key[ (string) $row[ $key ] ] = $row;
			}
		}
		foreach ( $rows as &$row ) {
			if ( array_key_exists( 'group_id', $row ) || ! isset( $row[ $key ] ) || ! isset( $by_key[ (string) $row[ $key ] ] ) ) {
				continue;
			}
			$old = $by_key[ (string) $row[ $key ] ];
			if ( (int) ( $old['chapter_id'] ?? 0 ) === (int) ( $row['chapter_id'] ?? 0 ) ) {
				$row['group_id'] = $old['group_id'];
			}
		}
		unset( $row );
		return $rows;
	}
}
