<?php
namespace OMLMS\Rest\V1;

use OMLMS\Abstracts\RestController;
use OMLMS\Admin\Settings\AdminSettings;

/**
 * SettingsController class.
 *
 * Handles REST API endpoints for settings.
 *
 * @since 1.0.0
 */
class SettingsController extends RestController {

	/**
	 * The base route for settings endpoints.
	 *
	 * @var string
	 * @since 1.0.0
	 */
	protected $base = 'settings/(?P<group_id>[\w-]+)';

	protected $search = 'page/search';


	/**
	 * Register the routes for the settings endpoints.
	 *
	 * @since 1.0.0
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->base,
			array(
				'args'   => array(
					'group_id' => array(
						'description' => __( 'Settings group ID.', 'ohmylms' ),
						'type'        => 'string',
					),
				),
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update_items' ),
					'permission_callback' => array( $this, 'update_items_permissions_check' ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->base . '/(?P<id>[\w-]+)',
			array(
				'args'   => array(
					'group_id' => array(
						'description' => __( 'Settings group ID.', 'ohmylms' ),
						'type'        => 'string',
					),
					'id'       => array(
						'description' => __( 'Unique identifier for the resource.', 'ohmylms' ),
						'type'        => 'string',
					),
				),
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update_item' ),
					'permission_callback' => array( $this, 'update_items_permissions_check' ),
					'args'                => $this->get_endpoint_args_for_item_schema( \WP_REST_Server::EDITABLE ),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);
		register_rest_route(
			$this->namespace,
			'/' . $this->search,
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_page' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/restore-default-pages',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'restore_pages' ),
					'permission_callback' => array( $this, 'update_items_permissions_check' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/integration-status/(?P<name>[\w,-]+)',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_integration_status' ),
					'permission_callback' => array( $this, 'get_integration_status_permission_check' ),
					'args'                => array(
						'name' => array(
							'description' => __( 'Integration name(s), comma-separated.', 'ohmylms' ),
							'type'        => 'string',
							'required'    => true,
						),
					),
				),
			)
		);
	}

	/**
	 * Get integration status
	 *
	 * @param \WP_REST_Request $request
	 * @return \WP_REST_Response
	 */
	public function get_integration_status( $request ) {
		$integration_names_str = $request->get_param( 'name' );
		$integration_names     = array_map( 'trim', explode( ',', $integration_names_str ) );
		$integrations_option   = get_option( 'creatorlms_integrations', array() );
		$statuses              = array();
		$is_pro_active         = apply_filters( 'creator_lms_is_pro', false );

		foreach ( $integration_names as $name ) {
			if ( empty( $name ) ) {
				continue;
			}
			$is_enabled = ! empty( $integrations_option[ $name ]['is_enable'] ) ? 1 == $integrations_option[ $name ]['is_enable'] : false;
			$statuses[ $name ] = $is_enabled && $is_pro_active;
		}

		if ( 1 === count( $integration_names ) ) {
			return rest_ensure_response( array( 'is_enabled' => $statuses[ $integration_names[0] ] ) );
		}

		return rest_ensure_response( $statuses );
	}

	/**
	 * Permission check for getting integration status
	 *
	 * @param \WP_REST_Request $request
	 * @return bool
	 */
	public function get_integration_status_permission_check( $request ) {
		// Restrict endpoint to only users who have the capability to manage options.
		return current_user_can( 'manage_options' );
	}


	/**
	 * Get items (settings) for a specific group.
	 *
	 * @param \WP_REST_Request $request The request object.
	 * @return \WP_REST_Response|\WP_Error The response or error object.
	 *
	 * @since 1.0.0
	 */
	public function get_items( $request ) {
		$settings = $this->get_group_settings( $request['group_id'] );
		if ( is_wp_error( $settings ) ) {
			return $settings;
		}

		$data = array();

		foreach ( $settings as $setting_obj ) {
			$setting = $this->prepare_item_for_response( $setting_obj, $request );
			$setting = $this->prepare_response_for_collection( $setting );
			$data[]  = $setting;
		}

		return rest_ensure_response( $data );
	}


	/**
	 * Get items (settings) for a specific group.
	 *
	 * @param \WP_REST_Request $request The request object.
	 * @return \WP_REST_Response|\WP_Error The response or error object.
	 *
	 * @since 1.0.0
	 */
	public function update_items( $request ) {
		$get_data = $request->get_json_params();
		$group_id = $request['group_id'];

		if ( ! is_array( $get_data ) ) {
			return new \WP_Error( 'rest_setting_setting_invalid', __( 'Invalid setting.', 'ohmylms' ), array( 'status' => 404 ) );
		}

		$settings = $this->get_group_settings( $group_id );

		if ( is_wp_error( $settings ) ) {
			return $settings;
		}

		foreach ( $get_data as $key => $value ) {
			if ( ! is_array( $value ) ) {
				$value = $group_id === 'permalink' ? $value : wp_kses_post( trim( stripslashes( is_null( $value ) ? '' : $value ) ) );
			}

			if ( 'payment-gateway' === $group_id && is_array( $value ) && isset( $value['value'] ) ) {
				$value = $value['value'];
			}
			
			if ( ! $this->is_valid_option_key( $key ) ) {
				continue;
			}

			update_option( $key, $value );
			flush_rewrite_rules(true);
			do_action("creatorlms_{$group_id}_settings_updated", $key, $value, $group_id );
			
			// Trigger payment gateway settings event for tracking
			if ( 'payment-gateway' === $group_id ) {
				do_action( 'creatorlms_payment_gateway_settings_saved', $key, $value );
			}
		}
		return rest_ensure_response(
			array(
				'success' => true,
				'message' => __( 'Updated successfully.', 'ohmylms' ),
			)
		);
	}

	/**
	 * Validate if the option key is valid.
	 *
	 * @param string $key The option key.
	 * @return bool True if valid, false otherwise.
	 *
	 * @since 1.0.0
	 */
	private function is_valid_option_key( $key ) {
		$keys = array(
			'creator_lms_course_page_id',
			'creator_lms_profile_page_id',
			'creator_lms_student_dashboard_page_id',
			'creator_lms_student_profile_page_id',
			'creator_lms_student_courses_page_id',
			'creator_lms_checkout_page_id',
			'creator_lms_thank_you_page_id',
			'creator_lms_privacy_policy_page_id',
			'creator_lms_terms_page_id',
			'creator_lms_registration_page_id',
			'creator_lms_courses_per_page',
			'creator_lms_archive_page_layout',
			'creator_lms_archive_page_layout_style',
			'creator_lms_archive_page_filter_is_enabled',
			'creator_lms_archive_page_filters',
			'creator_lms_archive_page_sorting_is_enabled',
			'creator_lms_archive_page_search_is_enabled',
			'creator_lms_archive_page_category_is_enabled',
			'creator_lms_archive_page_row',
			'creator_lms_single_course_page_features',
			'creator_lms_single_course_page_layout',
			'creator_lms_columns_per_row',
			'creator_lms_container_width',
			'creator_lms_debug_mode',
			'creator_lms_color_preset',
			'creator_lms_primary_color_scheme',
			'creator_lms_primary_hover_color_scheme',
			'creator_lms_heading_color_scheme',
			'creator_lms_body_text_color_scheme',
			'creator_lms_body_progress_color_scheme',
			'creator_lms_checkout_page_layout_type',
			'creator_lms_leaderboard_settings',
			'creator_lms_privacy_policy_message',
			'creator_lms_guest_checkout',
			'creator_lms_checkout_phone_field',
			'creator_lms_allow_purchase_without_login',
			'creator_lms_permalink',
			'creatorlms_offline_settings',
			'creatorlms_stripe_settings',
			'creatorlms_paypal_settings',
			'creatorlms_mollie_settings',
			'creatorlms_razorpay_settings',
			'creatorlms_qpay_settings',
			'creatorlms_authorize_net_settings',
			'creator_lms_currency',
			'creator_lms_currency_pos',
			'creator_lms_price_thousand_sep',
			'creator_lms_price_decimal_sep',
			'creator_lms_price_num_decimals',
			'creator_lms_tax_enabled',
			'creator_lms_tax_label',
			'creator_lms_prices_include_tax',
			'creator_lms_eu_vat_enabled',
			'creator_lms_disable_vat_validation',
			'creator_lms_vat_number_label',
			'creator_lms_fallback_tax_rate',
			'creator_lms_existing_tax_rates',
			'creator_lms_new_tax_rates',
			'creator_lms_tax_rates',
			'creator_lms_countries',
			'creator_lms_states',
			'creator_lms_use_custom_video_player',
			'creator_lms_video_player_logo',
			'creator_lms_video_player_logo_bg_color',
			'creator_lms_email_branding_image',
			'creator_lms_email_base_color',
			'creator_lms_email_background_color',
			'creator_lms_email_body_background_color',
			'creator_lms_email_body_text_color',
			'creator_lms_email_button_possition',
			'creator_lms_email_sender_email_address',
			'creator_lms_email_sender_name',
			'creator_lms_email_footer_text',
			'omlms_require_email_verification',
			'omlms_notification_color',
		);
		$keys = apply_filters( 'creator_lms_valid_option_keys', $keys );
		return in_array( $key, $keys, true );
	}


	/**
	 * Get a single item (setting) for a specific group.
	 *
	 * @param \WP_REST_Request $request The request object.
	 * @return \WP_REST_Response|\WP_Error The response or error object.
	 *
	 * @since 1.0.0
	 */
	public function get_item( $request ) {
		$setting = $this->get_setting( $request['group_id'], $request['id'] );

		if ( is_wp_error( $setting ) ) {
			return $setting;
		}

		$response = $this->prepare_item_for_response( $setting, $request );

		return rest_ensure_response( $response );
	}

	/**
	 * Update a single item (setting) for a specific group.
	 *
	 * @param \WP_REST_Request $request The request object.
	 * @return \WP_REST_Response|\WP_Error The response or error object.
	 *
	 * @since 1.0.0
	 */
	public function update_item( $request ) {
		$setting = $this->get_setting( $request['group_id'], $request['id'] );

		if ( is_wp_error( $setting ) ) {
			return $setting;
		}
		$value = is_null( $request['value'] ) ? '' : $request['value'];
		$value = wp_kses_post( trim( stripslashes( $value ) ) );

		update_option( $request['id'], $value );

		$response = $this->prepare_item_for_response( $setting, $request );
		return rest_ensure_response( $response );
	}


	/**
	 * Get a single setting for a specific group.
	 *
	 * @param string $group_id The group ID.
	 * @param string $setting_id The setting ID.
	 * @return array|\WP_Error The setting array or error object.
	 *
	 * @since 1.0.0
	 */
	public function get_setting( $group_id, $setting_id ) {

		if ( empty( $setting_id ) ) {
			return new \WP_Error( 'rest_setting_setting_invalid', __( 'Invalid setting.', 'ohmylms' ), array( 'status' => 404 ) );
		}

		$settings = $this->get_group_settings( $group_id );

		if ( is_wp_error( $settings ) ) {
			return $settings;
		}

		$setting = null;
		foreach ( $settings as $s ) {
			if ( $s['id'] === $setting_id ) {
				$setting = $s;
				break;
			}
		}

		if ( is_null( $setting ) ) {
			return new \WP_Error( 'rest_setting_setting_invalid', __( 'Invalid setting.', 'ohmylms' ), array( 'status' => 404 ) );
		}

		return $setting;
	}


	/**
	 * Get settings for a specific group.
	 *
	 * @param string $group_id The group ID.
	 * @return array|\WP_Error The settings array or error object.
	 *
	 * @since 1.0.0
	 */
	public function get_group_settings( $group_id ) {
		if ( empty( $group_id ) ) {
			return new \WP_Error( 'rest_setting_setting_group_invalid', __( 'Invalid setting group.', 'ohmylms' ), array( 'status' => 404 ) );
		}
		$settings          = apply_filters( 'creator_lms_settings-' . $group_id, array() );
		$filtered_settings = array();
		
		foreach ( $settings as $setting ) {
			$option_key = $setting['id'];
			if ( 0 === strpos( $option_key, 'creatorlms_' ) && false !== strpos( $option_key, '_settings' ) ) {
				$current_settings = AdminSettings::get_option( $option_key, array() );	
				$merged_settings = array_merge( $setting['default'], $current_settings );
				$setting['value'] = $merged_settings;
			} else {
				$setting['value'] = AdminSettings::get_option( $option_key, $setting['default'] );
				
				// Special handling for student page settings to ensure they have valid default values
				if ( in_array( $option_key, [ 'creator_lms_student_dashboard_page_id', 'creator_lms_student_profile_page_id', 'creator_lms_student_courses_page_id' ] ) ) {
					// If the setting value is empty or -1, try to get the correct page ID
					if ( empty( $setting['value'] ) || $setting['value'] == -1 ) {
						$page_key = str_replace( 'creator_lms_', '', str_replace( '_page_id', '', $option_key ) );
						$page_id = omlms_get_page_id( $page_key );
						if ( $page_id && $page_id != -1 ) {
							$setting['value'] = $page_id;
							// Update the option in the database for future use
							update_option( $option_key, $page_id );
						}
					}
				}
			}
			
			$filtered_settings[] = $setting;
		}

		return $filtered_settings;
	}

	/**
	 * Restore missing default pages.
	 *
	 * @param \WP_REST_Request $request
	 * @return \WP_REST_Response
	 */
	public function restore_pages( $request ) {
		$default_pages = apply_filters(
			'creator_lms_default_pages',
			array(
				'course'            => array(
					'name'    => _x( 'cr-all-courses', 'Page slug', 'ohmylms' ),
					'title'   => _x( 'All Course', 'Page title', 'ohmylms' ),
					'content' => '',
				),
				'checkout'          => array(
					'name'     => _x( 'cr-checkout', 'Page slug', 'ohmylms' ),
					'title'    => _x( 'CR Checkout', 'Page title', 'ohmylms' ),
					'content'  => '<!-- wp:shortcode -->[creator_lms_checkout]<!-- /wp:shortcode -->',
					'template' => 'omlms-checkout',
				),
				'student_dashboard' => array(
					'name'     => _x( 'my-dashboard', 'Page slug', 'ohmylms' ),
					'title'    => _x( 'My Dashboard', 'Page title', 'ohmylms' ),
					'content'  => '<!-- wp:shortcode -->[creator_lms_dashboard]<!-- /wp:shortcode -->',
					'template' => 'omlms-dashboard',
				),
				'student_profile'   => array(
					'name'     => _x( 'my-profile', 'Page slug', 'ohmylms' ),
					'title'    => _x( 'My Profile', 'Page title', 'ohmylms' ),
					'content'  => '<!-- wp:shortcode -->[creator_lms_profile]<!-- /wp:shortcode -->',
					'template' => 'omlms-profile',
				),
				'student_courses'   => array(
					'name'     => _x( 'my-courses', 'Page slug', 'ohmylms' ),
					'title'    => _x( 'My Courses', 'Page title', 'ohmylms' ),
					'content'  => '<!-- wp:shortcode -->[creator_lms_my_courses]<!-- /wp:shortcode -->',
					'template' => 'omlms-my-courses',
				),
			)
		);

		$restored = array();

		foreach ( $default_pages as $key => $page ) {
			$option_key = 'creator_lms_' . $key . '_page_id';
			$page_id    = absint( get_option( $option_key, 0 ) );
			$post       = $page_id ? get_post( $page_id ) : null;

			if ( $post && 'page' === $post->post_type && 'publish' === $post->post_status ) {
				continue;
			}

			$new_page_id = wp_insert_post(
				array(
					'post_title'     => $page['title'],
					'post_status'    => 'publish',
					'post_type'      => 'page',
					'post_content'   => $page['content'],
					'post_author'    => get_current_user_id(),
					'comment_status' => 'closed',
					'post_name'      => $page['name'],
				)
			);

			if ( $new_page_id && ! is_wp_error( $new_page_id ) ) {
				if ( ! empty( $page['template'] ) ) {
					update_post_meta( $new_page_id, '_wp_page_template', $page['template'] );
				}
				update_option( $option_key, $new_page_id );
				$restored[] = $page['title'];
			}
		}

		flush_rewrite_rules( true );

		return rest_ensure_response(
			array(
				'success'  => true,
				'restored' => $restored,
				'message'  => empty( $restored )
					? __( 'All default pages already exist. No changes made.', 'ohmylms' )
					: sprintf(
						/* translators: %s: comma-separated page names */
						__( 'Restored: %s', 'ohmylms' ),
						implode( ', ', $restored )
					),
			)
		);
	}

	public function get_page( $request ) {
		$search_text = $request->get_param( 'value' );
		$limit       = $request->get_param( 'limit' ) ? absint( $request->get_param( 'limit' ) ) : -1;
		$exclude_ids = $request->get_param( 'exclude' ) ? array_map( 'absint', (array) $request->get_param( 'exclude' ) ) : array();

		$args                 = array(
			'no_found_rows'          => true,
			'update_post_meta_cache' => false,
			'update_post_term_cache' => false,
			'posts_per_page'         => $limit,
			'post_type'              => 'page',
			'post_status'            => array( 'publish', 'private', 'draft' ),
			's'                      => $search_text,
			'post__not_in'           => $exclude_ids,
		);
		$search_results_query = new \WP_Query( $args );

		$pages_results = array();
		foreach ( $search_results_query->get_posts() as $post ) {
			$pages_results[ $post->ID ] = sprintf(
			/* translators: 1: page name 2: page ID */
				__( '%1$s (ID: %2$s)', 'ohmylms' ),
				$this->get_page_title( $post->ID ),
				$post->ID
			);
		}
		$response = $this->prepare_item_for_response( $pages_results, $request );
		return rest_ensure_response( $response );
	}


	/**
	 * Get page title safely.
	 *
	 * @param int $page_id The page type.
	 * @return string The page title or empty string.
	 */
	private function get_page_title( $page_id ) {
		global $wpdb;

		if ( ! $page_id ) {
			return '';
		}

		// Direct database query to get the post title
		$title = $wpdb->get_var(
			$wpdb->prepare(
				"SELECT post_title FROM {$wpdb->posts} WHERE ID = %d AND post_type = 'page' AND post_status = 'publish'",
				$page_id
			)
		);

		return $title ? $title : '';
	}


	/**
	 * Prepare a single item for response.
	 *
	 * @param array            $item The item array.
	 * @param \WP_REST_Request $request The request object.
	 * @return \WP_REST_Response The response object.
	 *
	 * @since 1.0.0
	 */
	public function prepare_item_for_response( $item, $request ) {
		$data     = $this->add_additional_fields_to_object( $item, $request );
		$response = rest_ensure_response( $data );
		return $response;
	}


	/**
	 * Check permissions for getting items.
	 *
	 * @param \WP_REST_Request $request The request object.
	 * @return bool True if the current user has permission, false otherwise.
	 *
	 * @since 1.0.0
	 */
	public function get_items_permissions_check( $request ) {
		return current_user_can( 'manage_options' );
	}

	/**
	 * Check permissions for updating items.
	 *
	 * @param \WP_REST_Request $request The request object.
	 * @return bool True if the current user has permission, false otherwise.
	 *
	 * @since 1.0.0
	 */
	public function update_items_permissions_check( $request ) {
		return current_user_can( 'manage_options' );
	}
}
