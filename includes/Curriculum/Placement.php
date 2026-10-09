<?php
namespace OhMyLMS\Curriculum;

use OhMyLMS\Tracks\Tracks;

defined( 'ABSPATH' ) || exit;

/**
 * Where a course sits: the curriculum items it is linked to and the Learning Tracks it belongs to.
 *
 * This is the replacement for course categories and tags. Everything that used to read or write
 * `course_category` or `course_tag` (the editor, course lists and filters, shortcodes, membership
 * plans, importers) goes through here, so curriculum and tracks are the only way to organize courses.
 * The old taxonomies stay registered and keep their stored terms, but nothing consults them.
 *
 *  - Curriculum items play the part of hierarchical categories: filtering by an item includes
 *    everything linked under its descendants.
 *  - A Learning Track plays the part of a tag, but is curated: its members are courses, and the
 *    courses linked under any curriculum item that is a member.
 */
final class Placement {
	/** Filter slugs are synthetic so the public filter markup and script work unchanged. */
	const ITEM_PREFIX  = 'c';
	const TRACK_PREFIX = 't';

	public static function item_slug( $id ) {
		return self::ITEM_PREFIX . (int) $id; }
	public static function track_slug( $id ) {
		return self::TRACK_PREFIX . (int) $id; }

	/** Tell dependents (membership plans) that course placement changed. */
	public static function changed() {
		do_action( 'ohmylms_curriculum_changed' );
	}

	private static function ready() {
		return Schema::ready();
	}

	/** IDs from filter slugs of one kind ('item' or 'track'); anything else is ignored. */
	public static function ids_from_slugs( $slugs, $kind ) {
		$prefix = $kind === 'track' ? self::TRACK_PREFIX : self::ITEM_PREFIX;
		$ids    = array();
		foreach ( (array) $slugs as $slug ) {
			if ( is_string( $slug ) && preg_match( '/^' . $prefix . '(\d+)$/D', $slug, $match ) ) {
				$ids[] = (int) $match[1]; }
		}
		return array_values( array_unique( $ids ) );
	}

	/**
	 * IDs from a shortcode, block or widget value such as "12, c14" (numbers, or the c<id> / t<id>
	 * slug of that kind). A value that is set but names nothing valid yields [0] so a mistyped list
	 * shows no courses instead of silently showing all of them.
	 */
	public static function ids_from_list( $value, $kind ) {
		$prefix = $kind === 'track' ? self::TRACK_PREFIX : self::ITEM_PREFIX;
		$parts  = is_array( $value ) ? $value : preg_split( '/\s*,\s*/', trim( (string) $value ), -1, PREG_SPLIT_NO_EMPTY );
		$ids    = array();
		foreach ( $parts as $part ) {
			if ( is_scalar( $part ) && preg_match( '/^(?:' . $prefix . ')?(\d+)$/D', trim( (string) $part ), $match ) && (int) $match[1] > 0 ) {
				$ids[] = (int) $match[1]; }
		}
		$ids = array_values( array_unique( $ids ) );
		return $ids ?: ( $parts ? array( 0 ) : array() );
	}

	// ---- Reading a course's placement ------------------------------------------------------

	/** @return int[] Curriculum items the course is directly linked to. */
	public static function item_ids( $course_id ) {
		global $wpdb;
		if ( ! self::ready() ) {
			return array(); }
		return array_map( 'intval', $wpdb->get_col( $wpdb->prepare( 'SELECT item_id FROM ' . Links::table() . " WHERE object_type='course' AND object_id=%d ORDER BY item_id", (int) $course_id ) ) );
	}

	/** Linked curriculum items with their ancestry, for display. */
	public static function items( $course_id ) {
		$rows = array();
		foreach ( self::item_ids( $course_id ) as $id ) {
			$item = Items::get( $id );
			if ( ! $item ) {
				continue; }
			$rows[] = array(
				'id'        => (int) $item['id'],
				'name'      => $item['name'],
				'slug'      => self::item_slug( $id ),
				'item_type' => $item['item_type'],
				'code'      => $item['code'],
				'version'   => $item['version'],
				'path'      => Items::path_names( $id, false ),
			);
		}
		return $rows;
	}

	/** @return int[] Tracks the course is a direct member of. */
	public static function track_ids( $course_id ) {
		global $wpdb;
		if ( ! self::ready() ) {
			return array(); }
		return array_map( 'intval', $wpdb->get_col( $wpdb->prepare( 'SELECT track_id FROM ' . Tracks::members_table() . " WHERE item_type='course' AND item_id=%d ORDER BY track_id", (int) $course_id ) ) );
	}

	public static function tracks( $course_id ) {
		$rows = array();
		foreach ( self::track_ids( $course_id ) as $id ) {
			$track = Tracks::get( $id );
			if ( $track ) {
				$rows[] = array(
					'id'     => (int) $track['id'],
					'title'  => $track['title'],
					'slug'   => self::track_slug( $id ),
					'status' => $track['status'],
				); }
		}
		return $rows;
	}

	// ---- Which courses are under items or tracks -------------------------------------------

	/** Courses linked to the given items, and by default to everything beneath them. */
	public static function course_ids_for_items( array $item_ids, $descendants = true ) {
		$item_ids = array_values( array_unique( array_filter( array_map( 'intval', $item_ids ) ) ) );
		if ( ! $item_ids || ! self::ready() ) {
			return array(); }
		$all = $item_ids;
		if ( $descendants ) {
			$parents = Items::parents();
			foreach ( $item_ids as $id ) {
				$all = array_merge( $all, Tree::descendants( $parents, $id ) ); }
		}
		return Links::object_ids( $all, 'course' );
	}

	/** Courses a track refers to: direct course members plus courses linked under its curriculum members. */
	public static function course_ids_for_tracks( array $track_ids ) {
		global $wpdb;
		$track_ids = array_values( array_unique( array_filter( array_map( 'intval', $track_ids ) ) ) );
		if ( ! $track_ids || ! self::ready() ) {
			return array(); }
		$placeholders = implode( ',', array_fill( 0, count( $track_ids ), '%d' ) );
		$courses      = array();
		$items        = array();
		foreach ( $wpdb->get_results( $wpdb->prepare( 'SELECT item_type, item_id FROM ' . Tracks::members_table() . " WHERE track_id IN ($placeholders)", $track_ids ), ARRAY_A ) as $row ) {
			if ( $row['item_type'] === 'course' ) {
				$courses[] = (int) $row['item_id'];
			} else {
				$items[] = (int) $row['item_id']; }
		}
		return array_values( array_unique( array_merge( $courses, self::course_ids_for_items( $items ) ) ) );
	}

	/** Course IDs matching filter slugs of one kind: the union of everything selected. */
	public static function course_ids_for_slugs( $slugs, $kind ) {
		$ids = self::ids_from_slugs( $slugs, $kind );
		return $kind === 'track' ? self::course_ids_for_tracks( $ids ) : self::course_ids_for_items( $ids );
	}

	/**
	 * Narrow WP_Query arguments to courses matching curriculum and track filters. Selections in one
	 * group are alternatives; the two groups must both match. A selection that matches nothing
	 * yields no courses rather than silently showing everything.
	 */
	public static function narrow_query( array $args, array $item_ids = array(), array $track_ids = array() ) {
		$sets = array();
		if ( $item_ids ) {
			$sets[] = self::course_ids_for_items( $item_ids ); }
		if ( $track_ids ) {
			$sets[] = self::course_ids_for_tracks( $track_ids ); }
		if ( ! $sets ) {
			return $args; }
		$matches = array_shift( $sets );
		foreach ( $sets as $set ) {
			$matches = array_intersect( $matches, $set ); }
		if ( ! empty( $args['post__in'] ) ) {
			$matches = array_intersect( $matches, array_map( 'intval', (array) $args['post__in'] ) ); }
		$args['post__in'] = $matches ? array_values( $matches ) : array( 0 );
		return $args;
	}

	// ---- Public lists (only what has published courses) ------------------------------------

	/** @return array<int,int[]> item id => ids of published courses linked to it directly. */
	private static function published_links() {
		global $wpdb;
		$map = array();
		foreach ( $wpdb->get_results( 'SELECT l.item_id, l.object_id FROM ' . Links::table() . " l JOIN {$wpdb->posts} p ON p.ID=l.object_id WHERE l.object_type='course' AND p.post_type='" . esc_sql( OHMYLMS_COURSE_CPT ) . "' AND p.post_status='publish'", ARRAY_A ) as $row ) {
			$map[ (int) $row['item_id'] ][ (int) $row['object_id'] ] = true;
		}
		return $map;
	}

	/**
	 * Curriculum items that have at least one published course in their subtree, in tree order with
	 * their depth, for public filters and tabs. Courses count once per item however deep they sit.
	 */
	public static function public_items() {
		if ( ! self::ready() ) {
			return array(); }
		$links = self::published_links();
		if ( ! $links ) {
			return array(); }
		$rows    = Items::all();
		$parents = array();
		foreach ( $rows as $row ) {
			$parents[ (int) $row['id'] ] = (int) $row['parent_id']; }
		$subtree = array();
		foreach ( $links as $item_id => $courses ) {
			$chain = array_merge( array( $item_id ), Tree::ancestors( $parents, $item_id ) );
			foreach ( $chain as $id ) {
				foreach ( $courses as $course => $_ ) {
					$subtree[ $id ][ $course ] = true; }
			}
		}
		$children = array();
		foreach ( $rows as $row ) {
			$children[ (int) $row['parent_id'] ][] = $row; }
		$result = array();
		$walk   = static function ( $parent, $depth ) use ( &$walk, &$result, $children, $subtree ) {
			foreach ( $children[ $parent ] ?? array() as $row ) {
				$id = (int) $row['id'];
				if ( empty( $subtree[ $id ] ) ) {
					continue; }
				$result[] = array(
					'id'        => $id,
					'name'      => $row['name'],
					'slug'      => self::item_slug( $id ),
					'parent_id' => (int) $row['parent_id'],
					'depth'     => $depth,
					'count'     => count( $subtree[ $id ] ),
				);
				$walk( $id, $depth + 1 );
			}
		};
		$walk( 0, 0 );
		return $result;
	}

	/**
	 * A course's curriculum items, or with $tracks its published Learning Tracks, as {id,name,slug} for
	 * course cards and learner-facing dashboards.
	 */
	public static function card_terms( $course_id, $tracks = false ) {
		$terms = array();
		if ( $tracks ) {
			foreach ( self::tracks( $course_id ) as $track ) {
				if ( $track['status'] === 'published' ) {
					$terms[] = array(
						'id'   => $track['id'],
						'name' => $track['title'],
						'slug' => $track['slug'],
					); }
			}
			return $terms;
		}
		foreach ( self::items( $course_id ) as $item ) {
			$terms[] = array(
				'id'   => $item['id'],
				'name' => $item['name'],
				'slug' => $item['slug'],
			); }
		return $terms;
	}

	/** @return array<int,array<int,array{id:int,title:string}>> item id => published courses linked to it directly, by title. */
	public static function published_courses_by_item() {
		global $wpdb;
		$map = array();
		if ( ! self::ready() ) {
			return $map; }
		foreach ( $wpdb->get_results( 'SELECT l.item_id, p.ID AS course_id, p.post_title FROM ' . Links::table() . " l JOIN {$wpdb->posts} p ON p.ID=l.object_id WHERE l.object_type='course' AND p.post_type='" . esc_sql( OHMYLMS_COURSE_CPT ) . "' AND p.post_status='publish' ORDER BY p.post_title, p.ID", ARRAY_A ) as $row ) {
			$map[ (int) $row['item_id'] ][] = array(
				'id'    => (int) $row['course_id'],
				'title' => $row['post_title'],
			);
		}
		return $map;
	}

	/** Published tracks that have at least one published course, for public filters. */
	public static function public_tracks() {
		global $wpdb;
		if ( ! self::ready() ) {
			return array(); }
		$result = array();
		foreach ( Tracks::all( 'published' ) as $track ) {
			$courses = self::course_ids_for_tracks( array( (int) $track['id'] ) );
			if ( ! $courses ) {
				continue; }
			$placeholders = implode( ',', array_fill( 0, count( $courses ), '%d' ) );
			$count        = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM {$wpdb->posts} WHERE post_type=%s AND post_status='publish' AND ID IN ($placeholders)", array_merge( array( OHMYLMS_COURSE_CPT ), $courses ) ) );
			if ( $count ) {
				$result[] = array(
					'id'    => (int) $track['id'],
					'title' => $track['title'],
					'slug'  => self::track_slug( (int) $track['id'] ),
					'count' => $count,
				); }
		}
		return $result;
	}

	/**
	 * Every curriculum item for page-builder pickers, keyed by slug (c<id>) so the tree order survives
	 * object-key sorting in the browser; names are indented by depth.
	 *
	 * @return array<string,string>
	 */
	public static function item_options() {
		if ( ! self::ready() ) {
			return array(); }
		$children = array();
		foreach ( Items::all() as $row ) {
			$children[ (int) $row['parent_id'] ][] = $row; }
		$options = array();
		$walk    = static function ( $parent, $depth ) use ( &$walk, &$options, $children ) {
			foreach ( $children[ $parent ] ?? array() as $row ) {
				$options[ self::item_slug( $row['id'] ) ] = str_repeat( '— ', $depth ) . $row['name'];
				$walk( (int) $row['id'], $depth + 1 );
			}
		};
		$walk( 0, 0 );
		return $options;
	}

	/** Published Learning Tracks for page-builder pickers, keyed by slug (t<id>). @return array<string,string> */
	public static function track_options() {
		if ( ! self::ready() ) {
			return array(); }
		$options = array();
		foreach ( Tracks::all( 'published' ) as $track ) {
			$options[ self::track_slug( $track['id'] ) ] = $track['title']; }
		return $options;
	}

	// ---- Term-shaped views for the recovered admin app and older API clients ----------------

	/** Curriculum items shaped like the course category terms the admin app was built around. */
	public static function term_items() {
		if ( ! self::ready() ) {
			return array(); }
		$result = array();
		foreach ( Items::all() as $row ) {
			$id      = (int) $row['id'];
			$courses = array();
			foreach ( Links::object_ids( array( $id ), 'course' ) as $course_id ) {
				$courses[] = array(
					'id'    => $course_id,
					'title' => get_the_title( $course_id ),
				); }
			$result[] = array(
				'term_id'     => $id,
				'id'          => $id,
				'name'        => $row['name'],
				'slug'        => self::item_slug( $id ),
				'description' => (string) $row['description'],
				'parent'      => (int) $row['parent_id'],
				'count'       => count( $courses ),
				'courses'     => $courses,
			);
		}
		return $result;
	}

	/** Tracks shaped like course tag terms. */
	public static function term_tracks( $search = '' ) {
		if ( ! self::ready() ) {
			return array(); }
		$result = array();
		foreach ( Tracks::all() as $row ) {
			if ( $search !== '' && stripos( $row['title'], $search ) === false ) {
				continue; }
			$id      = (int) $row['id'];
			$courses = array();
			foreach ( self::course_ids_for_tracks( array( $id ) ) as $course_id ) {
				$courses[] = array(
					'id'    => $course_id,
					'title' => get_the_title( $course_id ),
				); }
			$result[] = array(
				'term_id'     => $id,
				'id'          => $id,
				'name'        => $row['title'],
				'slug'        => self::track_slug( $id ),
				'description' => (string) $row['description'],
				'count'       => count( $courses ),
				'courses'     => $courses,
			);
		}
		return $result;
	}

	// ---- Changing a course's placement -----------------------------------------------------

	private static function valid_course( $course_id ) {
		$status = get_post_status( (int) $course_id );
		return get_post_type( (int) $course_id ) === OHMYLMS_COURSE_CPT && $status && ! in_array( $status, array( 'trash', 'auto-draft' ), true );
	}

	/** Replace the curriculum items a course is linked to. @return true|\WP_Error */
	public static function set_items( $course_id, array $item_ids ) {
		if ( ! self::ready() ) {
			return Access::error( 'ohmylms_curriculum_unavailable', __( 'Curriculum storage is not installed yet.', 'ohmylms' ), 503 ); }
		if ( ! self::valid_course( $course_id ) ) {
			return Access::error( 'ohmylms_course_missing', __( 'Course not found.', 'ohmylms' ), 404 ); }
		$wanted = array_values( array_unique( array_filter( array_map( 'intval', $item_ids ) ) ) );
		foreach ( $wanted as $id ) {
			if ( ! Items::get( $id ) ) {
				return Access::error( 'ohmylms_curriculum_invalid', __( 'A selected curriculum item no longer exists.', 'ohmylms' ) ); }
		}
		$current = self::item_ids( $course_id );
		foreach ( array_diff( $wanted, $current ) as $id ) {
			$result = Links::add( $id, 'course', $course_id );
			if ( is_wp_error( $result ) ) {
				return $result; }
		}
		foreach ( array_diff( $current, $wanted ) as $id ) {
			Links::remove( $id, 'course', $course_id ); }
		return true;
	}

	/**
	 * Replace the tracks a course belongs to. Tracks are curated, so callers should allow this only for
	 * administrators. A published track cannot be left with no members.
	 *
	 * @return true|\WP_Error
	 */
	public static function set_tracks( $course_id, array $track_ids ) {
		if ( ! self::ready() ) {
			return Access::error( 'ohmylms_curriculum_unavailable', __( 'Curriculum storage is not installed yet.', 'ohmylms' ), 503 ); }
		if ( ! self::valid_course( $course_id ) ) {
			return Access::error( 'ohmylms_course_missing', __( 'Course not found.', 'ohmylms' ), 404 ); }
		$wanted = array_values( array_unique( array_filter( array_map( 'intval', $track_ids ) ) ) );
		foreach ( $wanted as $id ) {
			if ( ! Tracks::get( $id ) ) {
				return Access::error( 'ohmylms_track_invalid', __( 'A selected learning track no longer exists.', 'ohmylms' ) ); }
		}
		$current = self::track_ids( $course_id );
		foreach ( array_diff( $current, $wanted ) as $id ) {
			$result = Tracks::remove_course( $id, $course_id );
			if ( is_wp_error( $result ) ) {
				return $result; }
		}
		foreach ( array_diff( $wanted, $current ) as $id ) {
			$result = Tracks::add_course( $id, $course_id );
			if ( is_wp_error( $result ) ) {
				return $result; }
		}
		return true;
	}

	/** Give a duplicate the same curriculum placement as its original. Track membership is not copied. */
	public static function copy_items( $from_course, $to_course ) {
		if ( ! self::ready() ) {
			return; }
		foreach ( self::item_ids( $from_course ) as $id ) {
			Links::add( $id, 'course', $to_course ); }
	}

	// ---- Importing (other LMS plugins, export files) ---------------------------------------

	private static function ensure_ready() {
		return self::ready() || Schema::install();
	}

	/**
	 * Link an imported course to curriculum items, creating any that are missing. Each path lists names
	 * from the top level down, for example `['Science', 'Physics']`. Existing items with the same name
	 * and parent are reused, so repeated imports do not duplicate structure.
	 */
	public static function import_categories( $course_id, array $paths ) {
		if ( ! self::ensure_ready() ) {
			return; }
		foreach ( $paths as $path ) {
			$leaf = self::ensure_path( (array) $path );
			if ( $leaf ) {
				Links::add( $leaf, 'course', $course_id ); }
		}
	}

	/** Create top-level curriculum items for these names where they do not exist yet (setup wizard). */
	public static function ensure_items( array $names ) {
		if ( ! self::ensure_ready() ) {
			return; }
		foreach ( $names as $name ) {
			self::ensure_path( array( $name ) ); }
	}

	/** The item at the end of a path of names, creating missing items on the way. 0 when nothing valid was given. */
	private static function ensure_path( array $path ) {
		global $wpdb;
		$parent = 0;
		foreach ( array_values( array_filter( array_map( 'trim', array_map( 'strval', $path ) ), 'strlen' ) ) as $name ) {
			$found = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT id FROM ' . Items::table() . ' WHERE parent_id=%d AND name=%s ORDER BY id LIMIT 1', $parent, $name ) );
			if ( ! $found ) {
				$created = Items::create(
					array(
						'name'      => $name,
						'item_type' => 'custom',
						'parent_id' => $parent,
					)
				);
				if ( is_wp_error( $created ) ) {
					return 0; }
				$found = (int) $created['id'];
			}
			$parent = $found;
		}
		return $parent;
	}

	/** Names from the top level down for a term of another plugin's hierarchical taxonomy, e.g. ['Science', 'Physics']. */
	public static function term_path( $term ) {
		$path   = array( $term->name );
		$parent = (int) $term->parent;
		for ( $guard = 0; $parent && $guard < 20; $guard++ ) {
			$parent_term = get_term( $parent, $term->taxonomy );
			if ( ! $parent_term || is_wp_error( $parent_term ) ) {
				break; }
			array_unshift( $path, $parent_term->name );
			$parent = (int) $parent_term->parent;
		}
		return $path;
	}
	/** Add an imported course to the tracks with these titles, creating draft tracks that do not exist yet. */
	public static function import_tags( $course_id, array $titles ) {
		if ( ! self::ensure_ready() ) {
			return; }
		foreach ( array_unique( array_filter( array_map( 'trim', array_map( 'strval', $titles ) ), 'strlen' ) ) as $title ) {
			$track = Tracks::find_by_title( $title );
			if ( ! $track ) {
				$track = Tracks::create( array( 'title' => $title ) );
				if ( is_wp_error( $track ) ) {
					continue; }
			}
			Tracks::add_course( (int) $track['id'], $course_id );
		}
	}
}
