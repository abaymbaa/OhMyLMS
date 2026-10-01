<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use function EDD\Blocks\Forms\register;

class CategoryController extends RestController {

	protected $base = 'categories';

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
						'name'   => array(
							'description' => __( 'Name of the term.', 'ohmylms' ),
							'type'        => 'string',
							'required'    => true,
						),
						'parent' => array(
							'description' => __( 'Parent term ID.', 'ohmylms' ),
							'type'        => 'integer',
							'required'    => false,
						),
					),
				),
			)
		);

		// Single item routes (get, update, delete)
		register_rest_route(
			$this->namespace,
			'/' . $this->base . '/(?P<id>\d+)',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update_item' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => array(
						'id'     => array(
							'description' => __( 'ID of the term to update.', 'ohmylms' ),
							'type'        => 'integer',
							'required'    => true,
						),
						'name'   => array(
							'description' => __( 'Name of the term.', 'ohmylms' ),
							'type'        => 'string',
							'required'    => true,
						),
						'parent' => array(
							'description' => __( 'Parent term ID.', 'ohmylms' ),
							'type'        => 'integer',
							'required'    => false,
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
			'taxonomy'   => 'course_category',
			'hide_empty' => false,
			'orderby'    => 'parent',
			'order'      => 'ASC',
		);

		$terms = get_terms( $args );

		if ( is_wp_error( $terms ) ) {
			return $terms;
		}

		// Enhance terms with course count and course list
		$enhanced_terms = array_map(
			function ( $term ) {
				// Get courses for this category (only directly assigned, not from child categories)
				$courses = get_posts(
					array(
						'post_type'      => 'ohmylms-course',
						'posts_per_page' => -1,
						'post_status'    => 'any',
						'tax_query'      => array(
							array(
								'taxonomy'         => 'course_category',
								'field'            => 'term_id',
								'terms'            => $term->term_id,
								'include_children' => false, // Only count courses directly in this category
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
					'parent'      => $term->parent,
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
		// Sanitize and validate inputs
		$name   = sanitize_text_field( $request->get_param( 'name' ) );
		$parent = $request->get_param( 'parent' );

		if ( empty( $name ) ) {
			return new \WP_Error( 'missing_params', __( 'Missing parameter: name.', 'ohmylms' ), array( 'status' => 400 ) );
		}

		if ( ! empty( $parent ) && ! is_numeric( $parent ) ) {
			return new \WP_Error( 'invalid_parent', __( 'Parent must be a valid ID.', 'ohmylms' ), array( 'status' => 400 ) );
		}

		$args = array(
			'parent' => absint( $parent ),
		);

		$term = wp_insert_term( $name, 'course_category', $args );

		if ( is_wp_error( $term ) ) {
			return $term;
		}

		$term_data = get_term( $term['term_id'], 'course_category' );

		return rest_ensure_response( $term_data );
	}



	/**
	 * Delete a term in the specified taxonomy.
	 *
	 * @param \WP_REST_Request $request The REST request object.
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function delete_item( $request ) {
		// Sanitize and validate
		$id = absint( $request->get_param( 'id' ) );

		if ( empty( $id ) || $id <= 0 ) {
			return new \WP_Error( 'missing_params', __( 'Missing or invalid term ID.', 'ohmylms' ), array( 'status' => 400 ) );
		}

		// Verify the term exists before trying to delete
		$term = get_term( $id, 'course_category' );
		if ( ! $term || is_wp_error( $term ) ) {
			return new \WP_Error( 'term_not_found', __( 'Term not found.', 'ohmylms' ), array( 'status' => 404 ) );
		}

		$result = wp_delete_term( $id, 'course_category' );

		if ( is_wp_error( $result ) ) {
			return $result;
		}

		if ( ! $result ) {
			return new \WP_Error( 'delete_failed', __( 'Failed to delete term.', 'ohmylms' ), array( 'status' => 500 ) );
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
		$id     = absint( $request->get_param( 'id' ) );
		$name   = sanitize_text_field( $request->get_param( 'name' ) );
		$parent = $request->get_param( 'parent' );

		if ( empty( $id ) || $id <= 0 ) {
			return new \WP_Error( 'missing_params', __( 'Missing or invalid term ID.', 'ohmylms' ), array( 'status' => 400 ) );
		}

		if ( empty( $name ) ) {
			return new \WP_Error( 'missing_params', __( 'Missing parameter: name.', 'ohmylms' ), array( 'status' => 400 ) );
		}

		// Verify the term exists
		$term = get_term( $id, 'course_category' );
		if ( ! $term || is_wp_error( $term ) ) {
			return new \WP_Error( 'term_not_found', __( 'Term not found.', 'ohmylms' ), array( 'status' => 404 ) );
		}

		$args = array(
			'name' => $name,
		);

		if ( ! is_null( $parent ) ) {
			$args['parent'] = absint( $parent );
		}

		$updated = wp_update_term( $id, 'course_category', $args );

		if ( is_wp_error( $updated ) ) {
			return $updated;
		}

		$term_data = get_term( $updated['term_id'], 'course_category' );

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

			$result = wp_delete_term( $id, 'course_category' );

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
