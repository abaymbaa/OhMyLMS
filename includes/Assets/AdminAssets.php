<?php

namespace OMLMS\Assets;

use OMLMS\Abstracts\Assets;
use OMLMS\Membership\MembershipHelper;

use function CodeRex\Ecommerce\ecommerce;

class AdminAssets extends Assets {

	public function init() {
		add_action( 'admin_enqueue_scripts', array( $this, 'load_scripts' ) );
		add_action( 'admin_print_scripts', array( $this, 'localize_printed_scripts' ) );
	}

	public function get_scripts() {
		$suffix = '';

		$scripts = array(
			'creator-lms-vendor'      => array(
				'src'       => self::get_asset_url( 'assets/dist/vendors/vendors' . $suffix . '.js' ),
				'version'   => CREATOR_LMS_VERSION,
				'deps'		=> array( 'react', 'react-dom' ),
				'in_footer' => true,
				'screens'   => array( 'toplevel_page_creator-lms' ),
			),
			'creator-lms-chartjs'      => array(
				'src'       => self::get_asset_url( 'assets/dist/vendors/chartjs' . $suffix . '.js' ),
				'version'   => CREATOR_LMS_VERSION,
				'deps'		=> array( 'creator-lms-vendor' ),
				'in_footer' => true,
				'screens'   => array( 'toplevel_page_creator-lms' ),
			),
			'creator-lms-editor'      => array(
				'src'       => self::get_asset_url( 'assets/dist/vendors/editor' . $suffix . '.js' ),
				'version'   => CREATOR_LMS_VERSION,
				'deps'		=> array( 'creator-lms-vendor' ),
				'in_footer' => true,
				'screens'   => array( 'toplevel_page_creator-lms' ),
			),
			'creator-lms-emotion'      => array(
				'src'       => self::get_asset_url( 'assets/dist/vendors/emotion' . $suffix . '.js' ),
				'version'   => CREATOR_LMS_VERSION,
				'deps'		=> array( 'creator-lms-vendor' ),
				'in_footer' => true,
				'screens'   => array( 'toplevel_page_creator-lms' ),
			),
			'creator-lms'      => array(
				'src'       => self::get_asset_url( 'assets/dist/admin/creatorlms' . $suffix . '.js' ),
				'deps'      => array( 'wp-element', 'wp-i18n', 'wp-components', 'wp-api-fetch', 'creator-lms-vendor', 'creator-lms-chartjs', 'creator-lms-editor', 'creator-lms-emotion' ),
				'version'   => CREATOR_LMS_VERSION,
				'in_footer' => true,
				'screens'   => array( 'toplevel_page_creator-lms' ),
			)
		);

		return is_array( $scripts ) ? array_filter( $scripts ) : array();
	}

	public function get_styles() {
		$suffix = '';
		$styles = array(
			'creator-lms-main' => array(
				'src'     => self::get_asset_url( 'assets/dist/css/admin/creatorlms.css' ),
				'deps'    => '',
				'version' => CREATOR_LMS_VERSION,
				'media'   => 'all',
				'has_rtl' => false,
				'screens' => array( 'toplevel_page_creator-lms' ),
			),
			'creator-lms-rtl' => array(
				'src'     => self::get_asset_url( 'assets/dist/css/admin/creatorlms-rtl.css' ),
				'deps'    => '',
				'version' => CREATOR_LMS_VERSION,
				'media'   => 'all',
				'has_rtl' => false,
				'screens' => array( 'toplevel_page_creator-lms' ),
			),
			'omlms-tailwind' => array(
				'src'     => self::get_asset_url( 'assets/css/tailwind.css' ),
				'deps'    => '',
				'version' => CREATOR_LMS_VERSION,
				'media'   => 'all',
				'has_rtl' => false,
				'screens' => array( 'toplevel_page_creator-lms' ),
			),
			'omlms-global' => array(
				'src'     => self::get_asset_url( 'assets/css/global.css' ),
				'deps'    => '',
				'version' => CREATOR_LMS_VERSION,
				'media'   => 'all',
				'has_rtl' => false,
				'screens' => array( 'all' ),
			)
		);
		return is_array( $styles ) ? array_filter( $styles ) : array();
	}

	public function get_script_data( $handle ) {
		$admin_email = get_option( 'admin_email' );
		$admin_user  = get_user_by( 'email', $admin_email );
		$admin_name  = $admin_user ? $admin_user->display_name : '';

		switch ( $handle ) {
			case 'creator-lms':
				$localized_data = array(
					'ajax_url'                     	=> admin_url( 'admin-ajax.php' ),
					'api_url'                      	=> get_rest_url(),
					'nonce'                        	=> wp_create_nonce( 'wp_rest' ),
					'setup_wizard_nonce'           	=> wp_create_nonce( 'omlms_setup_wizard' ),
					'delete_cache_nonce'           	=> wp_create_nonce( 'omlms_delete_cache_nonce' ),
					'should_track'                 	=> false,
					'track_page_view_nonce'        	=> wp_create_nonce( 'omlms_track_page_view' ),
					'currency'                     	=> get_omlms_currency_symbol( get_omlms_currency() ),
					'gtm_offset'                   	=> get_option( 'gmt_offset' ),
					'timezone_string'              	=> get_option( 'timezone_string' ),
					'currency_symbol'              	=> get_omlms_currency_symbol(),
					'currency_position'            	=> get_option( 'creator_lms_currency_pos', 'left' ),
					'decimal_separator'            	=> omlms_get_price_decimal_separator(),
					'currency_format_trim_zeros'   	=> omlms_get_price_thousand_separator(),
					'currency_format_num_decimals' 	=> omlms_get_price_decimals(),
					'price_format'                 	=> omlms_get_price_format(),
					'omlms_home_page'              	=> admin_url( 'admin.php?page=creator-lms' ),
					'plugin_assets'                	=> plugin_dir_url( __FILE__ ),
					'admin_name'                   	=> $admin_name,
					'admin_email'                  	=> $admin_email,
					'is_tutor_lms_active'          	=> defined( 'TUTOR_VERSION' ),
					'is_learndash_lms_active'      	=> defined( 'LEARNDASH_VERSION' ),
					'is_learnpress_active'         	=> defined( 'LEARNPRESS_VERSION' ),
					'is_masterstudy_active'        	=> defined( 'STM_LMS_VERSION' ) || defined( 'STM_LMS_FILE' ) || defined( 'MASTERSTUDY_LMS_VERSION' ) || class_exists( 'STM_LMS' ) || post_type_exists( 'stm-courses' ),
					'is_pro_active'                	=> creator_lms_is_pro_license(),
					'is_wpfusion_active'           	=> defined('WP_FUSION_VERSION'),
					'is_mailmint_active'           	=> defined( 'MRM_VERSION' ),
					'is_uiexpress_active'          	=> defined( 'uixpress_plugin_version' ),
					'timezone'                     	=> $this->default_timezone(),
					'date_format' 					=> get_option( 'date_format' ),
					'time_format' 					=> get_option( 'time_format' ),
					'payment_gateways'            	=> apply_filters(
						'creatorlms_payment_gateways',
						ecommerce()->gateways()->get_payment_gateway_settings()
					),
					'integrations'					=> apply_filters('creatorlms_integrations', array()),
					'is_cohort_enabled'				=> apply_filters('creatorlms_should_show_cohort', false),
					'is_gamification_enabled'	    => apply_filters( 'creator_lms_show_gamification_menu', false ),
					'is_webhook_enabled'	    	=> apply_filters( 'creatorlms_should_enable_webhooks', false ),
					'is_funnel_enabled'				=> apply_filters('creatorlms_should_show_funnel', false),
					'is_communities_enabled'		=> apply_filters('creatorlms_is_communities_enabled', false),
					'is_community_addon_active'     => defined( 'CREATORLMS_COMMUNITY_VERSION' ),
					'community_addon_data'          => $this->get_community_addon_data(),
					'has_pro_plugin'	            => creator_lms_is_pro(),
					'setup_wizard_certificate_id'	=> get_option('creatorlms_setup_wizard_certificate_id', 0)
				);
				break;
			case 'omlms-settings':
				$localized_data = array(
					'ajax_url'           => admin_url( 'admin-ajax.php' ),
					'search_pages_nonce' => wp_create_nonce( 'search-pages' ),
				);
				break;
			case 'omlms-membership':
				$localized_data = array(
					'ajax_url'             => admin_url( 'admin-ajax.php' ),
					'nonce'                => wp_create_nonce( 'omlms-membership' ),
					'courses'              => MembershipHelper::get_courses_for_membership_plans(),
					'subscription_options' => MembershipHelper::subscription_options(),
				);
				break;
			case 'omlms-course':
				$localized_data = array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
					'nonce'    => wp_create_nonce( 'omlms-course' ),
				);
				break;
			default:
				$localized_data = false;
		}

		return apply_filters( 'creator_lms_get_admin_script_data', $localized_data, $handle );
	}


	/**
	 * Get the default timezone.
	 *
	 * @return array The default timezone.
	 * @since 1.0.0
	 */
	public function default_timezone() {
		$date = new \DateTime( 'now', wp_timezone() );
		$offsetSeconds = $date->getOffset();

		$timezone = sprintf(
			'%+03d:%02d',
			floor( $offsetSeconds / 3600 ),
			abs( ( $offsetSeconds % 3600 ) / 60 )
		);

		$timezone_string = get_option( 'timezone_string' );
		$timezone_type = $timezone_string ? 1 : 2; // 1 = named, 2 = offset (you can customize the meaning)

		$result = array(
			'timezone_string'      => $timezone,
			'timezone_type'        => $timezone_type,
		);
		return $result;
	}

	public function load_scripts() {
		$this->register_scripts();
		$this->register_styles();

		$screen    = get_current_screen();
		$screen_id = $screen ? $screen->id : '';
		wp_tinymce_inline_scripts();
		wp_enqueue_editor();
		wp_enqueue_media();
		wp_enqueue_script( 'wp-element' );
		wp_enqueue_script( 'wp-components' );
		wp_enqueue_script( 'wp-data' );
		wp_enqueue_style('wp-interface');
		wp_enqueue_style('wp-block-editor');
		foreach ( $this->get_scripts() as $handle => $script ) {
			if ( ! $this->should_enqueue( $script, $screen_id ) ) {
				continue;
			}
			wp_enqueue_script( $handle );
		}
		wp_set_script_translations(
			'creator-lms',
			'ohmylms',
			plugin_dir_path(OMLMS_FILE) . 'languages'
		);
		
		foreach ( $this->get_styles() as $handle => $style ) {
			if ( ! $this->should_enqueue( $style, $screen_id ) ) {
				continue;
			}
			
			// Skip RTL styles if not in RTL mode
			if ( $handle === 'creator-lms-rtl' && ! is_rtl() ) {
				continue;
			}
			
			wp_enqueue_style( $handle );
		}
	}

	public function get_community_addon_data() {
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}
		$plugins = get_plugins();
		$slug    = '';
		$installed = false;

		foreach ( $plugins as $path => $plugin ) {
			if ( 'OhMyLMS - Community Addon' === $plugin['Name'] || 'creatorlms-community' === $plugin['TextDomain'] ) {
				$slug      = $path;
				$installed = true;
				break;
			}
		}

		return array(
			'is_installed' => $installed,
			'slug'         => $slug,
		);
	}
}


( new AdminAssets() )->init();
