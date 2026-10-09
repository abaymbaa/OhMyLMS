<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Assessment\Schema;
use OhMyLMS\QuestionBank\AccessPolicy;
use OhMyLMS\QuestionBank\DraftWriter;
use OhMyLMS\QuestionBank\SkillMap;
use OhMyLMS\Skills\Taxonomy;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;

defined( 'ABSPATH' ) || exit;

/**
 * Learning-skill catalogue: skills, prerequisites (acyclic), lesson links and
 * question skill maps. Profile "skills" on student accounts are unrelated.
 */
class SkillController extends RestController {
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/skills',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'index' ),
					'permission_callback' => array( $this, 'author_permission' ),
				),
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'create' ),
					'permission_callback' => array( $this, 'author_permission' ),
				),
			)
		);
		register_rest_route(
			$this->namespace,
			'/skills/(?P<id>[\d]+)',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'show' ),
					'permission_callback' => array( $this, 'author_permission' ),
				),
				array(
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update' ),
					'permission_callback' => array( $this, 'author_permission' ),
				),
				array(
					'methods'             => WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete' ),
					'permission_callback' => array( $this, 'admin_permission' ),
				),
			)
		);
		register_rest_route(
			$this->namespace,
			'/skills/(?P<id>[\d]+)/(?P<kind>lessons|courses)',
			array(
				array(
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'link_posts' ),
					'permission_callback' => array( $this, 'author_permission' ),
				),
			)
		);
		register_rest_route(
			$this->namespace,
			'/skills/link-targets',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'link_targets' ),
					'permission_callback' => array( $this, 'author_permission' ),
				),
			)
		);
		register_rest_route(
			$this->namespace,
			'/question/(?P<id>[\d]+)/skills',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'question_skills' ),
					'permission_callback' => array( $this, 'question_permission' ),
				),
				array(
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'save_question_skills' ),
					'permission_callback' => array( $this, 'question_permission' ),
				),
			)
		);
	}

	public function author_permission( $request = null ) {
		if ( ! Schema::ready() ) {
			return new WP_Error( 'ohmylms_skills_unavailable', __( 'Skills are not installed yet.', 'ohmylms' ), array( 'status' => 503 ) ); }
		return AccessPolicy::check( AccessPolicy::can_author() );
	}
	public function admin_permission() {
		return AccessPolicy::check( current_user_can( 'manage_options' ) );
	}
	public function question_permission( WP_REST_Request $request ) {
		$id = (int) $request['id'];
		if ( get_post_type( $id ) !== OHMYLMS_QUESTION_CPT ) {
			return new WP_Error( 'ohmylms_rest_invalid_question_id', __( 'Invalid ID.', 'ohmylms' ), array( 'status' => 404 ) ); }
		return AccessPolicy::check( $request->get_method() === 'GET' ? AccessPolicy::can_use_question( $id ) : AccessPolicy::can_edit_question( $id ) );
	}

	public function index( WP_REST_Request $request ) {
		$terms  = get_terms(
			array(
				'taxonomy'   => Taxonomy::NAME,
				'hide_empty' => false,
				'orderby'    => 'name',
				'search'     => (string) $request['search'],
			)
		);
		$skills = array();
		foreach ( is_array( $terms ) ? $terms : array() as $term ) {
			$skill              = Taxonomy::describe( $term );
			$skill['questions'] = (int) $term->count;
			$skills[]           = $skill;
		}
		return rest_ensure_response( array( 'skills' => $skills ) );
	}

	public function show( WP_REST_Request $request ) {
		$skill = Taxonomy::describe( (int) $request['id'] );
		return $skill ? rest_ensure_response( $skill ) : new WP_Error( 'ohmylms_skill_missing', __( 'Skill not found.', 'ohmylms' ), array( 'status' => 404 ) );
	}

	public function create( WP_REST_Request $request ) {
		$name = sanitize_text_field( (string) $request['name'] );
		if ( $name === '' ) {
			return new WP_Error( 'ohmylms_skill_invalid', __( 'A skill name is required.', 'ohmylms' ), array( 'status' => 400 ) ); }
		$parent = (int) $request['parent'];
		if ( $parent && ! term_exists( $parent, Taxonomy::NAME ) ) {
			return new WP_Error( 'ohmylms_skill_missing', __( 'Parent skill not found.', 'ohmylms' ), array( 'status' => 400 ) ); }
		$term = wp_insert_term(
			$name,
			Taxonomy::NAME,
			array(
				'description' => sanitize_textarea_field( (string) $request['description'] ),
				'parent'      => $parent,
			)
		);
		if ( is_wp_error( $term ) ) {
			$term->add_data( array( 'status' => 400 ) );
			return $term; }
		$id = (int) $term['term_id'];
		Taxonomy::uuid( $id );
		$result = $this->apply_meta( $id, $request );
		if ( is_wp_error( $result ) ) {
			wp_delete_term( $id, Taxonomy::NAME );
			return $result; }
		$response = rest_ensure_response( Taxonomy::describe( $id ) );
		$response->set_status( 201 );
		return $response;
	}

	public function update( WP_REST_Request $request ) {
		$id = (int) $request['id'];
		if ( ! term_exists( $id, Taxonomy::NAME ) ) {
			return new WP_Error( 'ohmylms_skill_missing', __( 'Skill not found.', 'ohmylms' ), array( 'status' => 404 ) ); }
		$args = array();
		if ( isset( $request['name'] ) ) {
			$args['name'] = sanitize_text_field( (string) $request['name'] ); }
		if ( isset( $request['description'] ) ) {
			$args['description'] = sanitize_textarea_field( (string) $request['description'] ); }
		if ( isset( $request['parent'] ) ) {
			$parent = (int) $request['parent'];
			if ( $parent === $id || ( $parent && term_is_ancestor_of( $id, $parent, Taxonomy::NAME ) ) ) {
				return new WP_Error( 'ohmylms_skill_cycle', __( 'A skill cannot be nested under itself.', 'ohmylms' ), array( 'status' => 400 ) ); }
			$args['parent'] = $parent;
		}
		$result = $this->apply_meta( $id, $request );
		if ( is_wp_error( $result ) ) {
			return $result; }
		if ( $args ) {
			$updated = wp_update_term( $id, Taxonomy::NAME, $args );
			if ( is_wp_error( $updated ) ) {
				$updated->add_data( array( 'status' => 400 ) );
				return $updated; }
		}
		return rest_ensure_response( Taxonomy::describe( $id ) );
	}

	private function apply_meta( $id, WP_REST_Request $request ) {
		if ( isset( $request['public_practice'] ) && (bool) get_term_meta( $id, '_ohmylms_public_practice', true ) !== rest_sanitize_boolean( $request['public_practice'] ) ) {
			if ( ! current_user_can( 'manage_options' ) ) {
				return AccessPolicy::denied( __( 'Only an administrator can make a practice pool public.', 'ohmylms' ) ); }
			update_term_meta( $id, '_ohmylms_public_practice', rest_sanitize_boolean( $request['public_practice'] ) );
		}
		if ( isset( $request['code'] ) ) {
			update_term_meta( $id, '_ohmylms_skill_code', mb_substr( sanitize_text_field( (string) $request['code'] ), 0, 40 ) ); }
		if ( isset( $request['prerequisites'] ) ) {
			$result = Taxonomy::set_prerequisites( $id, (array) $request['prerequisites'] );
			if ( is_wp_error( $result ) ) {
				return $result; }
		}
		return true;
	}

	/** Skills with recorded evidence are kept; a skill in use can only be removed by an administrator with force. */
	public function delete( WP_REST_Request $request ) {
		global $wpdb;
		$id = (int) $request['id'];
		if ( \OhMyLMS\Learning\Schema::ready() && $wpdb->get_var( $wpdb->prepare( 'SELECT id FROM ' . \OhMyLMS\Learning\Schema::table( 'outcomes' ) . ' WHERE term_id=%d LIMIT 1', $id ) ) ) {
			return new WP_Error( 'ohmylms_skill_required', __( 'Published learning programs reference this skill. Keep it for learner history.', 'ohmylms' ), array( 'status' => 409 ) );
		}
		$evidence = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT COUNT(*) FROM ' . Schema::table( 'skill_evidence' ) . ' WHERE term_id=%d', $id ) );
		$mapped   = (int) $wpdb->get_var( $wpdb->prepare( 'SELECT COUNT(*) FROM ' . Schema::table( 'qb_version_skills' ) . ' WHERE term_id=%d', $id ) );
		if ( ( $evidence || $mapped ) && ! rest_sanitize_boolean( $request['force'] ) ) {
			return new WP_Error(
				'ohmylms_skill_in_use',
				__( 'This skill has learner evidence or frozen question mappings. Rename it instead, or pass force to delete.', 'ohmylms' ),
				array(
					'status'   => 409,
					'evidence' => $evidence,
					'mappings' => $mapped,
				)
			);
		}
		foreach ( get_terms(
			array(
				'taxonomy'   => Taxonomy::NAME,
				'hide_empty' => false,
				'fields'     => 'ids',
			)
		) as $other ) {
			if ( in_array( $id, Taxonomy::prerequisites( $other ), true ) ) {
				update_term_meta( $other, '_ohmylms_prerequisites', array_values( array_diff( Taxonomy::prerequisites( $other ), array( $id ) ) ) ); }
		}
		$deleted = wp_delete_term( $id, Taxonomy::NAME );
		return is_wp_error( $deleted ) ? $deleted : rest_ensure_response(
			array(
				'id'      => $id,
				'deleted' => true,
			)
		);
	}

	/** Replace the set of lessons or courses linked to a skill (only posts the user may edit change). */
	public function link_posts( WP_REST_Request $request ) {
		$id = (int) $request['id'];
		if ( ! term_exists( $id, Taxonomy::NAME ) ) {
			return new WP_Error( 'ohmylms_skill_missing', __( 'Skill not found.', 'ohmylms' ), array( 'status' => 404 ) ); }
		$courses   = $request['kind'] === 'courses';
		$post_type = $courses ? OHMYLMS_COURSE_CPT : OHMYLMS_LESSON_CPT;
		$wanted    = array_values( array_unique( array_map( 'intval', (array) $request[ $courses ? 'course_ids' : 'lesson_ids' ] ) ) );
		foreach ( $wanted as $post_id ) {
			if ( get_post_type( $post_id ) !== $post_type || ! current_user_can( 'edit_post', $post_id ) ) {
				return AccessPolicy::denied( $courses ? __( 'You cannot link one of these courses.', 'ohmylms' ) : __( 'You cannot link one of these lessons.', 'ohmylms' ) );
			}
		}
		foreach ( Taxonomy::linked_posts( $id, $post_type ) as $post_id ) {
			if ( ! in_array( $post_id, $wanted, true ) && current_user_can( 'edit_post', $post_id ) ) {
				wp_remove_object_terms( $post_id, $id, Taxonomy::NAME ); }
		}
		foreach ( $wanted as $post_id ) {
			wp_add_object_terms( $post_id, $id, Taxonomy::NAME ); }
		return rest_ensure_response( Taxonomy::describe( $id ) );
	}

	/** Lessons or courses the author may link: search results, or titles for known IDs. */
	public function link_targets( WP_REST_Request $request ) {
		$post_type = $request['type'] === 'course' ? OHMYLMS_COURSE_CPT : OHMYLMS_LESSON_CPT;
		$ids       = array_filter( array_map( 'intval', explode( ',', (string) $request['include'] ) ) );
		$args      = array(
			'post_type'   => $post_type,
			'post_status' => array( 'publish', 'draft', 'pending', 'private', 'future' ),
			'numberposts' => 20,
			'orderby'     => 'title',
			'order'       => 'ASC',
		);
		if ( $ids ) {
			$args['post__in']    = $ids;
			$args['numberposts'] = count( $ids ); } else {
			$args['s'] = sanitize_text_field( (string) $request['search'] ); }
			$rows = array();
			foreach ( get_posts( $args ) as $post ) {
				if ( current_user_can( 'edit_post', $post->ID ) ) {
					$rows[] = array(
						'id'    => (int) $post->ID,
						'title' => get_the_title( $post ) ?: '#' . $post->ID,
					); }
			}
			return rest_ensure_response( $rows );
	}

	public function question_skills( WP_REST_Request $request ) {
		return rest_ensure_response( array( 'skill_map' => SkillMap::current( (int) $request['id'] ) ) );
	}

	/** Save the question's part-level skill map through the versioning writer. */
	public function save_question_skills( WP_REST_Request $request ) {
		$saved = DraftWriter::save(
			array(
				'id'     => (int) $request['id'],
				'skills' => (array) $request['skill_map'],
			)
		);
		return is_wp_error( $saved ) ? $saved : rest_ensure_response(
			array(
				'skill_map'  => SkillMap::current( (int) $request['id'] ),
				'version_id' => $saved['version_id'],
			)
		);
	}
}
