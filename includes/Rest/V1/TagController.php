<?php
namespace OMLMS\Rest\V1;

use OMLMS\Abstracts\RestController;
use function EDD\Blocks\Forms\register;

class TagController extends RestController {

	protected $base = 'tags';

	public function get_items_permissions_check( $request ) {
		return current_user_can( 'edit_posts' );
	}


	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->base,
			array(
				array(
					'methods'             => 'GET',
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'create_item' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => array(
						'name' => array(
							'description' => __( 'Name of the term.', 'ohmylms' ),
							'type'        => 'string',
							'required'    => true,
						),
					),
				),
			)
		);

		// Single item routes (update, delete)
		register_rest_route(
			$this->namespace,
			'/' . $this->base . '/(?P<id>\d+)',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update_item' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => array(
						'id'   => array(
							'description' => __( 'ID of the term to update.', 'ohmylms' ),
							'type'        => 'integer',
							'required'    => true,
						),
						'name' => array(
							'description' => __( 'Name of the term.', 'ohmylms' ),
							'type'        => 'string',
							'required'    => true,
						),
					),
				),
				array(
					'methods'             => \WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_item' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => array(
						'id' => array(
							'description' => __( 'ID of the term to delete.', 'ohmylms' ),
							'type'        => 'integer',
							'required'    => true,
						),
					),
				),
			)
		);

		// Bulk delete route
		register_rest_route(
			$this->namespace,
			'/' . $this->base . '/bulk',
			array(
				array(
					'methods'             => \WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'bulk_delete_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => array(
						'ids' => array(
							'description' => __( 'IDs of the terms to delete.', 'ohmylms' ),
							'type'        => 'array',
							'required'    => true,
						),
					),
				),
			)
		);
	}


	public function get_items( $request ) {
		$args = array(
			'taxonomy'   => 'course_tag',
			'hide_empty' => false,
			'search'     => $request['search'],
		);

		$terms = get_terms( $args );

		if ( is_wp_error( $terms ) ) {
			return $terms;
		}

		// Enhance terms with course count and course list
		$enhanced_terms = array_map(
			function ( $term ) {
				// Get courses for this tag
				$courses = get_posts(
					array(
						'post_type'      => 'omlms-course',
						'posts_per_page' => -1,
						'post_status'    => 'any',
						'tax_query'      => array(
							array(
								'taxonomy' => 'course_tag',
								'field'    => 'term_id',
								'terms'    => $term->term_id,
							),
						),
						'fields'         => 'ids',
					)
				);

				$course_details = array();
				foreach ( $courses as $course_id ) {
					$course_details[] = array(
						'id'    => $course_id,
						'title' => get_the_title( $course_id ),
					);
				}

				return array(
					'term_id'     => $term->term_id,
					'name'        => $term->name,
					'slug'        => $term->slug,
					'description' => $term->description,
					'count'       => count( $courses ),
					'courses'     => $course_details,
				);
			},
			$terms
		);

		return rest_ensure_response( $enhanced_terms );
	}


	/**
	 * Create a new term in the specified taxonomy.
	 *
	 * @param \WP_REST_Request $request The REST request object.
	 * @return \WP_Error|\WP_REST_Response
	 *
	 * @since 1.0.0
	 */
	public function create_item( $request ) {
		$name = $request->get_param( 'name' );

		if ( empty( $name ) ) {
			return new \WP_Error( 'missing_params', 'Missing parameters', array( 'status' => 400 ) );
		}
		$term = wp_insert_term( $name, 'course_tag' );

		if ( is_wp_error( $term ) ) {
			return $term;
		}

		$term_data = get_term( $term['term_id'], 'course_tag' );

		return rest_ensure_response( $term_data );
	}


	/**
	 * Delete a term in the specified taxonomy.
	 *
	 * @param \WP_REST_Request $request The REST request object.
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function delete_item( $request ) {
		$id = $request->get_param( 'id' );

		if ( empty( $id ) ) {
			return new \WP_Error( 'missing_params', 'Missing term ID', array( 'status' => 400 ) );
		}

		$result = wp_delete_term( $id, 'course_tag' );

		if ( is_wp_error( $result ) ) {
			return $result;
		}

		if ( ! $result ) {
			return new \WP_Error( 'delete_failed', 'Failed to delete term', array( 'status' => 500 ) );
		}

		return rest_ensure_response(
			array(
				'deleted' => true,
				'id'      => $id,
			)
		);
	}


	/**
	 * Update a term in the specified taxonomy.
	 *
	 * @param \WP_REST_Request $request The REST request object.
	 * @return \WP_Error|\WP_REST_Response
	 *
	 * @since 1.0.0
	 */
	public function update_item( $request ) {
		$id   = absint( $request->get_param( 'id' ) );
		$name = sanitize_text_field( $request->get_param( 'name' ) );

		if ( empty( $id ) || $id <= 0 ) {
			return new \WP_Error( 'missing_params', __( 'Missing or invalid term ID.', 'ohmylms' ), array( 'status' => 400 ) );
		}

		if ( empty( $name ) ) {
			return new \WP_Error( 'missing_params', __( 'Missing parameter: name.', 'ohmylms' ), array( 'status' => 400 ) );
		}

		// Verify the term exists
		$term = get_term( $id, 'course_tag' );
		if ( ! $term || is_wp_error( $term ) ) {
			return new \WP_Error( 'term_not_found', __( 'Term not found.', 'ohmylms' ), array( 'status' => 404 ) );
		}

		$updated = wp_update_term(
			$id,
			'course_tag',
			array(
				'name' => $name,
			)
		);

		if ( is_wp_error( $updated ) ) {
			return $updated;
		}

		$term_data = get_term( $updated['term_id'], 'course_tag' );

		return rest_ensure_response( $term_data );
	}


	/**
	 * Bulk delete terms.
	 *
	 * @param \WP_REST_Request $request The REST request object.
	 * @return \WP_Error|\WP_REST_Response
	 *
	 * @since 1.0.0
	 */
	public function bulk_delete_items( $request ) {
		// Try to get IDs from both params and JSON body
		$ids = $request->get_param( 'ids' );
		
		if ( empty( $ids ) ) {
			$json_params = $request->get_json_params();
			$ids = isset( $json_params['ids'] ) ? $json_params['ids'] : array();
		}

		if ( empty( $ids ) || ! is_array( $ids ) ) {
			return new \WP_Error( 'missing_params', __( 'Missing or invalid term IDs.', 'ohmylms' ), array( 'status' => 400 ) );
		}

		$deleted = array();
		$failed  = array();

		foreach ( $ids as $id ) {
			$id = absint( $id );
			if ( $id <= 0 ) {
				$failed[] = $id;
				continue;
			}

			$result = wp_delete_term( $id, 'course_tag' );

			if ( is_wp_error( $result ) || ! $result ) {
				$failed[] = $id;
			} else {
				$deleted[] = $id;
			}
		}

		return rest_ensure_response(
			array(
				'deleted' => $deleted,
				'failed'  => $failed,
			)
		);
	}
}
