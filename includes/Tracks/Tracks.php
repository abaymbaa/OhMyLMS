<?php
namespace OhMyLMS\Tracks;

use OhMyLMS\Curriculum\Access;
use OhMyLMS\Curriculum\Items;
use OhMyLMS\Curriculum\Links;
use OhMyLMS\Curriculum\Schema;
use OhMyLMS\Utility\Transaction;

defined( 'ABSPATH' ) || exit;

/**
 * Learning Tracks: administrator-curated groupings of selected courses and curriculum items
 * (typically syllabuses) that may span curricula. A course or curriculum item can sit in any
 * number of tracks without being copied. A track never grants access: following it only adds
 * it to a learner's dashboard.
 */
final class Tracks {
	const STATUSES     = array( 'draft', 'published' );
	const MEMBER_TYPES = array( 'course', 'curriculum' );
	const MAX_MEMBERS  = 100;
	const MAX_TRACKS   = 200;

	public static function table() {
		return Schema::table( 'tracks' ); }
	public static function members_table() {
		return Schema::table( 'track_items' ); }

	public static function get( $id ) {
		global $wpdb;
		$id = (int) $id;
		return $id > 0 ? ( $wpdb->get_row( $wpdb->prepare( 'SELECT * FROM ' . self::table() . ' WHERE id=%d', $id ), ARRAY_A ) ?: null ) : null;
	}

	public static function missing() {
		return Access::error( 'ohmylms_track_missing', __( 'Learning track not found.', 'ohmylms' ), 404 ); }

	/** @return array[] Tracks in display order, optionally only one status. */
	public static function all( $status = null ) {
		global $wpdb;
		if ( $status !== null && in_array( $status, self::STATUSES, true ) ) {
			return $wpdb->get_results( $wpdb->prepare( 'SELECT * FROM ' . self::table() . ' WHERE status=%s ORDER BY position, id', $status ), ARRAY_A ) ?: array();
		}
		return $wpdb->get_results( 'SELECT * FROM ' . self::table() . ' ORDER BY position, id', ARRAY_A ) ?: array();
	}

	public static function clean( array $data, $partial = false ) {
		$fields = array();
		if ( ! $partial || array_key_exists( 'title', $data ) ) {
			$title = trim( sanitize_text_field( (string) ( $data['title'] ?? '' ) ) );
			if ( $title === '' ) {
				return Access::error( 'ohmylms_track_invalid', __( 'A track needs a name.', 'ohmylms' ) ); }
			if ( mb_strlen( $title ) > 190 ) {
				return Access::error( 'ohmylms_track_invalid', __( 'Track names can have at most 190 characters.', 'ohmylms' ) ); }
			$fields['title'] = $title;
		}
		if ( ! $partial || array_key_exists( 'description', $data ) ) {
			$description = sanitize_textarea_field( (string) ( $data['description'] ?? '' ) );
			if ( mb_strlen( $description ) > 2000 ) {
				return Access::error( 'ohmylms_track_invalid', __( 'Descriptions can have at most 2000 characters.', 'ohmylms' ) ); }
			$fields['description'] = $description;
		}
		return $fields;
	}

	public static function create( array $data ) {
		global $wpdb;
		$fields = self::clean( $data );
		if ( is_wp_error( $fields ) ) {
			return $fields; }
		if ( (int) $wpdb->get_var( 'SELECT COUNT(*) FROM ' . self::table() ) >= self::MAX_TRACKS ) {
			return Access::error( 'ohmylms_track_limit', sprintf( __( 'You can have at most %d learning tracks.', 'ohmylms' ), self::MAX_TRACKS ), 409 ); }
		$now      = current_time( 'mysql', true );
		$position = 1 + (int) $wpdb->get_var( 'SELECT MAX(position) FROM ' . self::table() );
		$row      = $fields + array(
			'uuid'       => wp_generate_uuid4(),
			'status'     => 'draft',
			'position'   => $position,
			'created_by' => get_current_user_id(),
			'created_at' => $now,
			'updated_at' => $now,
		);
		if ( ! $wpdb->insert( self::table(), $row ) ) {
			return Access::error( 'ohmylms_track_failed', __( 'The track could not be saved.', 'ohmylms' ), 500 ); }
		return self::get( (int) $wpdb->insert_id );
	}

	public static function update( $id, array $data, $expected_updated_at = null ) {
		global $wpdb;
		$track = self::get( $id );
		if ( ! $track ) {
			return self::missing(); }
		$fields = self::clean( $data, true );
		if ( is_wp_error( $fields ) ) {
			return $fields; }
		if ( $expected_updated_at !== null && $expected_updated_at !== '' && (string) $expected_updated_at !== $track['updated_at'] ) {
			return self::stale(); }
		if ( $fields ) {
			$fields['updated_at'] = current_time( 'mysql', true );
			if ( $wpdb->update( self::table(), $fields, array( 'id' => (int) $id ) ) === false ) {
				return Access::error( 'ohmylms_track_failed', __( 'The track could not be saved.', 'ohmylms' ), 500 ); }
		}
		return self::get( $id );
	}

	private static function stale() {
		return Access::error( 'ohmylms_track_stale', __( 'Someone else changed this track. Reload and try again.', 'ohmylms' ), 409 );
	}

	/** @return array[] Ordered members: type, id, position. */
	public static function members( $track_id ) {
		global $wpdb;
		return array_map(
			static function ( $row ) {
				return array(
					'type'     => $row['item_type'],
					'id'       => (int) $row['item_id'],
					'position' => (int) $row['position'],
				); },
			$wpdb->get_results( $wpdb->prepare( 'SELECT item_type, item_id, position FROM ' . self::members_table() . ' WHERE track_id=%d ORDER BY position, id', (int) $track_id ), ARRAY_A ) ?: array()
		);
	}

	/** Is this a valid member to add? Courses may be unpublished while a track is being prepared. */
	private static function valid_member( $type, $id ) {
		if ( $type === 'course' ) {
			return Links::target_exists( 'course', $id ); }
		return $type === 'curriculum' && Items::get( $id ) !== null;
	}

	/**
	 * Replace the ordered member list. Each entry is `['type' => 'course'|'curriculum', 'id' => n]`.
	 * Duplicates are rejected rather than silently merged so the editor stays truthful.
	 */
	public static function set_members( $track_id, array $members, $expected_updated_at = null ) {
		global $wpdb;
		$track = self::get( $track_id );
		if ( ! $track ) {
			return self::missing(); }
		if ( $expected_updated_at !== null && $expected_updated_at !== '' && (string) $expected_updated_at !== $track['updated_at'] ) {
			return self::stale(); }
		if ( count( $members ) > self::MAX_MEMBERS ) {
			return Access::error( 'ohmylms_track_limit', sprintf( __( 'A track can have at most %d members.', 'ohmylms' ), self::MAX_MEMBERS ), 409 ); }
		$clean = array();
		$seen  = array();
		foreach ( $members as $member ) {
			$type = is_array( $member ) ? (string) ( $member['type'] ?? '' ) : '';
			$id   = is_array( $member ) ? (int) ( $member['id'] ?? 0 ) : 0;
			if ( ! in_array( $type, self::MEMBER_TYPES, true ) || ! self::valid_member( $type, $id ) ) {
				return Access::error( 'ohmylms_track_invalid', __( 'Every member must be an existing course or curriculum item.', 'ohmylms' ) ); }
			if ( isset( $seen[ $type . ':' . $id ] ) ) {
				return Access::error( 'ohmylms_track_invalid', __( 'A course or curriculum item can appear only once in a track.', 'ohmylms' ) ); }
			$seen[ $type . ':' . $id ] = true;
			$clean[]                   = array(
				'type' => $type,
				'id'   => $id,
			);
		}
		if ( $track['status'] === 'published' && ! $clean ) {
			return Access::error( 'ohmylms_track_empty', __( 'A published track needs at least one member. Unpublish it first to empty it.', 'ohmylms' ), 409 ); }
		try {
			Transaction::run(
				static function () use ( $wpdb, $track_id, $clean ) {
					if ( $wpdb->delete( self::members_table(), array( 'track_id' => (int) $track_id ) ) === false ) {
						throw new \RuntimeException( 'Member reset failed' ); }
					$now = current_time( 'mysql', true );
					foreach ( $clean as $position => $member ) {
						if ( ! $wpdb->insert(
							self::members_table(),
							array(
								'track_id'   => (int) $track_id,
								'item_type'  => $member['type'],
								'item_id'    => $member['id'],
								'position'   => $position,
								'created_at' => $now,
							)
						) ) {
							throw new \RuntimeException( 'Member write failed' ); }
					}
					if ( $wpdb->update( self::table(), array( 'updated_at' => $now ), array( 'id' => (int) $track_id ) ) === false ) {
						throw new \RuntimeException( 'Track touch failed' ); }
				}
			);
		} catch ( \Throwable $error ) {
			if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
				error_log( 'OhMyLMS track members failed: ' . $error->getMessage() ); }
			return Access::error( 'ohmylms_track_failed', __( 'The members could not be saved. Nothing was changed.', 'ohmylms' ), 500 );
		}
		\OhMyLMS\Curriculum\Placement::changed();
		return self::get( $track_id );
	}

	/** Publish or unpublish. Followers keep following an unpublished track; it simply stops showing. */
	public static function set_status( $track_id, $published ) {
		global $wpdb;
		$track = self::get( $track_id );
		if ( ! $track ) {
			return self::missing(); }
		$status = $published ? 'published' : 'draft';
		if ( $published ) {
			if ( ! self::members( $track_id ) ) {
				return Access::error( 'ohmylms_track_empty', __( 'Add at least one course or curriculum item before publishing.', 'ohmylms' ), 409 ); }
			if ( trim( $track['title'] ) === '' ) {
				return Access::error( 'ohmylms_track_invalid', __( 'A track needs a name.', 'ohmylms' ) ); }
		}
		$now    = current_time( 'mysql', true );
		$fields = array(
			'status'     => $status,
			'updated_at' => $now,
		) + ( $published && $track['status'] !== 'published' ? array( 'published_at' => $now ) : array() );
		if ( $wpdb->update( self::table(), $fields, array( 'id' => (int) $track_id ) ) === false ) {
			return Access::error( 'ohmylms_track_failed', __( 'The track could not be saved.', 'ohmylms' ), 500 ); }
		return self::get( $track_id );
	}

	public static function find_by_title( $title ) {
		global $wpdb;
		return $wpdb->get_row( $wpdb->prepare( 'SELECT * FROM ' . self::table() . ' WHERE title=%s ORDER BY id LIMIT 1', (string) $title ), ARRAY_A ) ?: null;
	}

	private static function touch( $track_id ) {
		global $wpdb;
		$wpdb->update( self::table(), array( 'updated_at' => current_time( 'mysql', true ) ), array( 'id' => (int) $track_id ) );
	}

	/** Append a course to a track. Repeating the call is harmless. @return true|\WP_Error */
	public static function add_course( $track_id, $course_id ) {
		global $wpdb;
		if ( ! self::get( $track_id ) ) {
			return self::missing(); }
		if ( ! self::valid_member( 'course', $course_id ) ) {
			return Access::error( 'ohmylms_track_invalid', __( 'Every member must be an existing course or curriculum item.', 'ohmylms' ) ); }
		$count  = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT COUNT(*) FROM ' . self::members_table() . ' WHERE track_id=%d', (int) $track_id ) );
		$exists = (bool) $wpdb->get_var( $wpdb->prepare( 'SELECT id FROM ' . self::members_table() . " WHERE track_id=%d AND item_type='course' AND item_id=%d", (int) $track_id, (int) $course_id ) );
		if ( $exists ) {
			return true; }
		if ( $count >= self::MAX_MEMBERS ) {
			return Access::error( 'ohmylms_track_limit', sprintf( __( 'A track can have at most %d members.', 'ohmylms' ), self::MAX_MEMBERS ), 409 ); }
		$position = 1 + (int) $wpdb->get_var( $wpdb->prepare( 'SELECT MAX(position) FROM ' . self::members_table() . ' WHERE track_id=%d', (int) $track_id ) );
		if ( $wpdb->query( $wpdb->prepare( 'INSERT IGNORE INTO ' . self::members_table() . " (track_id, item_type, item_id, position, created_at) VALUES (%d, 'course', %d, %d, %s)", (int) $track_id, (int) $course_id, $position, current_time( 'mysql', true ) ) ) === false ) {
			return Access::error( 'ohmylms_track_failed', __( 'The course could not be added to the track.', 'ohmylms' ), 500 );
		}
		self::touch( $track_id );
		\OhMyLMS\Curriculum\Placement::changed();
		return true;
	}

	/** Remove a course from a track. A published track keeps at least one member. @return true|\WP_Error */
	public static function remove_course( $track_id, $course_id ) {
		global $wpdb;
		$track = self::get( $track_id );
		if ( ! $track ) {
			return self::missing(); }
		$is_member = (bool) $wpdb->get_var( $wpdb->prepare( 'SELECT id FROM ' . self::members_table() . " WHERE track_id=%d AND item_type='course' AND item_id=%d", (int) $track_id, (int) $course_id ) );
		if ( ! $is_member ) {
			return true; }
		if ( $track['status'] === 'published' && count( self::members( $track_id ) ) <= 1 ) {
			return Access::error( 'ohmylms_track_empty', sprintf( __( '“%s” is published and this is its only member. Unpublish the track or add another member first.', 'ohmylms' ), $track['title'] ), 409 );
		}
		$wpdb->delete(
			self::members_table(),
			array(
				'track_id'  => (int) $track_id,
				'item_type' => 'course',
				'item_id'   => (int) $course_id,
			)
		);
		self::touch( $track_id );
		\OhMyLMS\Curriculum\Placement::changed();
		return true;
	}

	public static function follower_count( $track_id ) {
		global $wpdb;
		return (int) $wpdb->get_var( $wpdb->prepare( 'SELECT COUNT(*) FROM ' . Schema::table( 'track_follows' ) . ' WHERE track_id=%d', (int) $track_id ) );
	}

	/** Delete a track. Followers lose it from their dashboards, so that needs `$force`. */
	public static function delete( $id, $force = false ) {
		global $wpdb;
		$track = self::get( $id );
		if ( ! $track ) {
			return self::missing(); }
		$followers = self::follower_count( $id );
		if ( $followers && ! $force ) {
			return Access::error( 'ohmylms_track_has_followers', sprintf( _n( '%d learner follows this track. Deleting it removes it from their dashboard.', '%d learners follow this track. Deleting it removes it from their dashboards.', $followers, 'ohmylms' ), $followers ), 409, array( 'followers' => $followers ) );
		}
		try {
			Transaction::run(
				static function () use ( $wpdb, $id ) {
					if ( $wpdb->delete( Schema::table( 'track_follows' ), array( 'track_id' => (int) $id ) ) === false || $wpdb->delete( self::members_table(), array( 'track_id' => (int) $id ) ) === false || $wpdb->delete( self::table(), array( 'id' => (int) $id ) ) === false ) {
						throw new \RuntimeException( 'Track delete failed' ); }
				}
			);
		} catch ( \Throwable $error ) {
			return Access::error( 'ohmylms_track_failed', __( 'The track could not be deleted. Nothing was changed.', 'ohmylms' ), 500 );
		}
		\OhMyLMS\Curriculum\Placement::changed();
		return array(
			'id'                => (int) $id,
			'deleted'           => true,
			'followers_removed' => $followers,
		);
	}

	/** Remove a deleted course or curriculum item from every track. */
	public static function remove_member( $type, $item_id ) {
		global $wpdb;
		if ( ! Schema::ready() ) {
			return; }
		$wpdb->delete(
			self::members_table(),
			array(
				'item_type' => (string) $type,
				'item_id'   => (int) $item_id,
			)
		);
		\OhMyLMS\Curriculum\Placement::changed();
	}

	/** Public, JSON-safe description of a track. */
	public static function describe( array $row ) {
		$members = self::members( (int) $row['id'] );
		return array(
			'id'             => (int) $row['id'],
			'uuid'           => $row['uuid'],
			'title'          => $row['title'],
			'description'    => (string) $row['description'],
			'status'         => $row['status'],
			'member_count'   => count( $members ),
			'follower_count' => self::follower_count( (int) $row['id'] ),
			'created_at'     => $row['created_at'],
			'updated_at'     => $row['updated_at'],
			'published_at'   => $row['published_at'],
		);
	}

	/** Members with titles for the administrator editor. */
	public static function describe_members( $track_id ) {
		$members = self::members( $track_id );
		$courses = Links::labels(
			'course',
			array_column(
				array_filter(
					$members,
					static function ( $member ) {
						return $member['type'] === 'course';
					}
				),
				'id'
			)
		);
		return array_map(
			static function ( $member ) use ( $courses ) {
				if ( $member['type'] === 'course' ) {
					$label = $courses[ $member['id'] ] ?? array(
						'title'  => '',
						'status' => 'missing',
					);
					return $member + array(
						'title'     => $label['title'],
						'status'    => $label['status'],
						'available' => $label['status'] !== 'missing',
					);
				}
				$item = Items::get( $member['id'] );
				return $member + array(
					'title'     => $item ? $item['name'] : '',
					'status'    => $item ? 'active' : 'missing',
					'available' => (bool) $item,
					'item_type' => $item ? $item['item_type'] : '',
					'code'      => $item ? $item['code'] : '',
					'version'   => $item ? $item['version'] : '',
					'path'      => $item ? Items::path_names( $member['id'], false ) : array(),
				);
			},
			$members
		);
	}
}
