<?php
namespace OhMyLMS\Admin;

class Ajax {

	public function __construct() {
		add_action( 'wp_ajax_install_sample_data', array( $this, 'install_sample_data' ) );
		add_action( 'wp_ajax_delete_sample_data', array( $this, 'delete_sample_data' ) );
		add_action( 'wp_ajax_ohmylms_delete_promotional_banner', array( $this, 'delete_promotional_banner' ) );
		add_action( 'wp_ajax_ohmylms_delete_transient_cache', array( $this, 'delete_transient_cache' ) );
		add_action( 'wp_ajax_ohmylms_track_page_view', array( $this, 'track_page_view' ) );
	}


	public function install_sample_data() {
		check_ajax_referer( 'admin_tools', 'nonce' );

		// create sample course here
	}

	public function delete_sample_data() {
		check_ajax_referer( 'admin_tools', 'nonce' );

		// create sample course here
	}

	/**
	 * Delete promotional banner
	 *
	 * @return void
	 */
	public function delete_promotional_banner() {
		check_ajax_referer( 'ohmylms_promotional_banner_nonce', 'nonce' );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => __( 'Unauthorized access', 'ohmylms' ) ) );
		}

		$occasion = isset( $_POST['occasion'] ) ? sanitize_text_field( $_POST['occasion'] ) : '';

		if ( empty( $occasion ) ) {
			wp_send_json_error( array( 'message' => __( 'Invalid occasion', 'ohmylms' ) ) );
		}

		update_option( '_is_show_' . $occasion . '_banner_ohmylms', 'no' );

		wp_send_json_success( array( 'message' => __( 'Banner dismissed successfully', 'ohmylms' ) ) );
	}

	/**
	 * Delete OhMyLMS transient cache
	 *
	 * @return void
	 */
	public function delete_transient_cache() {
		// Verify nonce
		if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( $_POST['nonce'], 'ohmylms_delete_cache_nonce' ) ) {
			wp_send_json_error( array( 'message' => __( 'Security check failed', 'ohmylms' ) ) );
		}
		
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => __( 'Unauthorized access', 'ohmylms' ) ) );
		}

		global $wpdb;

		// Delete all OhMyLMS related transients
		$count = $wpdb->query(
			$wpdb->prepare(
				"DELETE FROM {$wpdb->options} WHERE option_name LIKE %s OR option_name LIKE %s OR option_name LIKE %s OR option_name LIKE %s",
				$wpdb->esc_like( '_transient_ohmylms_' ) . '%',
				$wpdb->esc_like( '_site_transient_update_plugins' ) . '%',
				$wpdb->esc_like( '_transient_timeout_ohmylms_' ) . '%',
				$wpdb->esc_like( '_site_transient_ohmylms_' ) . '%'
			)
		);
		
		// Also delete transients with 'ohmylms' and 'ohmylms' prefix
		$count += $wpdb->query(
			$wpdb->prepare(
				"DELETE FROM {$wpdb->options} WHERE option_name LIKE %s OR option_name LIKE %s OR option_name LIKE %s OR option_name LIKE %s OR option_name LIKE %s OR option_name LIKE %s OR option_name LIKE %s OR option_name LIKE %s OR option_name LIKE %s",
				$wpdb->esc_like( '_transient_ohmylms_' ) . '%',
				$wpdb->esc_like( '_transient_ohmylms_' ) . '%',
				$wpdb->esc_like( '_transient_timeout_ohmylms_' ) . '%',
				$wpdb->esc_like( '_transient_timeout_ohmylms_' ) . '%',
				$wpdb->esc_like( '_transient_timeout_ohmylms_' ) . '%',
				$wpdb->esc_like( '_site_transient_ohmylms_' ) . '%',
				$wpdb->esc_like( '_site_transient_update_plugins' ) . '%',
				$wpdb->esc_like( '_site_transient_ohmylms_' ) . '%',
				$wpdb->esc_like( '_site_transient_timeout_ohmylms_' ) . '%'
			)
		);

		// For multisite, also delete from sitemeta
		if ( is_multisite() ) {
			$count += $wpdb->query(
				$wpdb->prepare(
					"DELETE FROM {$wpdb->sitemeta} WHERE meta_key LIKE %s OR meta_key LIKE %s OR meta_key LIKE %s OR meta_key LIKE %s OR meta_key LIKE %s OR meta_key LIKE %s OR meta_key LIKE %s OR meta_key LIKE %s OR meta_key LIKE %s",
					$wpdb->esc_like( '_site_transient_ohmylms_' ) . '%',
					$wpdb->esc_like( '_site_transient_ohmylms_' ) . '%',
					$wpdb->esc_like( '_site_transient_ohmylms_' ) . '%',
					$wpdb->esc_like( '_site_transient_timeout_ohmylms_' ) . '%',
					$wpdb->esc_like( '_site_transient_timeout_ohmylms_' ) . '%',
					$wpdb->esc_like( '_site_transient_timeout_ohmylms_' ) . '%',
					$wpdb->esc_like( '_site_transient_update_plugins' ) . '%',
					$wpdb->esc_like( '_site_transient_update_ohmylms_' ) . '%',
					$wpdb->esc_like( '_site_transient_update_ohmylms_' ) . '%'
				)
			);
		}

		wp_send_json_success( 
			array( 
				'message' => sprintf(
					/* translators: %d: number of cache items deleted */
					_n( '%d cache item deleted successfully.', '%d cache items deleted successfully.', $count, 'ohmylms' ),
					$count
				)
			) 
		);
	}

	/**
	 * Track page view via AJAX for React Router navigation.
	 *
	 * @since 1.1.10
	 * @return void
	 */
	public function track_page_view() {
		wp_send_json_success( array( 'message' => 'Tracking disabled' ) );
	}
}
