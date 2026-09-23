<?php
namespace OMLMS\Admin\Settings;

use OMLMS\Abstracts\Settings;

/**
 * General settings class.
 *
 * Handles general settings for the OhMyLMS.
 *
 * @since 1.0.0
 */
class General extends Settings {

	/**
	 * The settings ID.
	 *
	 * @var string
	 * @since 1.0.0
	 */
	protected $id = 'general';

	/**
	 * Constructor.
	 *
	 * Initializes the general settings.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->id    = 'general';
		$this->label = __( 'General', 'ohmylms' );
	}

	/**
	 * Get the general settings.
	 *
	 * @return array The settings array.
	 *
	 * @since 1.0.0
	 */
	public function get_settings() {

		$settings = array(
			array(
				'id'        => 'creator_lms_navigation_links_section',
				'type'      => 'title',
				'title'     => __( 'Navigation Links', 'ohmylms' ),
				'desc'      => __( 'Configure navigation links for student dashboard, profile, and courses pages. These links will be used globally across all blocks.', 'ohmylms' ),
			),
			array(
				'id'        => 'creator_lms_nav_my_profile_url',
				'type'      => 'single_select_page_with_search',
				'default'   => '',
				'args'      => array(
					'exclude' => array(),
				),
				'meta_data' => array(
					'label'       => __( 'My Profile Page', 'ohmylms' ),
					'description' => __( 'Select the page for My Profile navigation link. Leave empty to use default.', 'ohmylms' ),
				),
			),
			array(
				'id'        => 'creator_lms_nav_my_courses_url',
				'type'      => 'single_select_page_with_search',
				'default'   => '',
				'args'      => array(
					'exclude' => array(),
				),
				'meta_data' => array(
					'label'       => __( 'My Courses Page', 'ohmylms' ),
					'description' => __( 'Select the page for My Courses navigation link. Leave empty to use default.', 'ohmylms' ),
				),
			),
			array(
				'id'   => 'creator_lms_navigation_links_section',
				'type' => 'sectionend',
			),
			array(
				'id'        => 'creator_lms_course_page_id',
				'type'      => 'single_select_page_with_search',
				'default'   => '',
				'args'      => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
							omlms_get_page_id( 'myaccount' ),
						),
				),
				'meta_data' => $this->get_page_title( 'course' ),
			),
			array(
				'id'        => 'creator_lms_profile_page_id',
				'type'      => 'single_select_page_with_search',
				'default'   => '',
				'args'      => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
						),
				),
				'meta_data' => $this->get_page_title( 'profile' ),
			),
			array(
				'id'        => 'creator_lms_student_dashboard_page_id',
				'type'      => 'single_select_page_with_search',
				'default'   => omlms_get_page_id( 'student_dashboard' ),
				'args'      => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
						),
				),
				'meta_data' => $this->get_page_title( 'student_dashboard' ),
			),
			array(
				'id'        => 'creator_lms_student_courses_page_id',
				'type'      => 'single_select_page_with_search',
				'default'   => omlms_get_page_id( 'student_courses' ),
				'args'      => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
						),
				),
				'meta_data' => $this->get_page_title( 'student_courses' ),
			),
			array(
				'id'        => 'creator_lms_student_profile_page_id',
				'type'      => 'single_select_page_with_search',
				'default'   => omlms_get_page_id( 'student_profile' ),
				'args'      => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
						),
				),
				'meta_data' => $this->get_page_title( 'student_profile' ),
			),
			array(
				'id'        => 'creator_lms_checkout_page_id',
				'type'      => 'single_select_page_with_search',
				'default'   => '',
				'args'      => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'course' ),
							omlms_get_page_id( 'myaccount' ),
						),
				),
				'meta_data' => $this->get_page_title( 'checkout' ),
			),
			array(
				'id'        => 'creator_lms_thank_you_page_id',
				'type'      => 'single_select_page_with_search',
				'default'   => '',
				'args'      => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'course' ),
							omlms_get_page_id( 'myaccount' ),
							omlms_get_page_id( 'checkout' ),
						),
				),
				'meta_data' => $this->get_page_title( 'thank_you' ),
			),
			array(
				'id'        => 'creator_lms_terms_page_id',
				'type'      => 'single_select_page_with_search',
				'default'   => '',
				'args'      => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
						),
				),
				'meta_data' => $this->get_page_title( 'terms' ),
			),
			array(
				'id'        => 'creator_lms_privacy_policy_page_id',
				'type'      => 'single_select_page_with_search',
				'default'   => '',
				'args'      => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
						),
				),
				'meta_data' => $this->get_page_title( 'privacy_policy' ),
			),
			array(
				'id'        => 'creator_lms_registration_page_id',
				'type'      => 'single_select_page_with_search',
				'default'   => '',
				'args'      => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
						),
				),
				'meta_data' => $this->get_page_title( 'registration' ),
			),
		);

		return $settings;
	}


	/**
	 * Get page title safely.
	 *
	 * @param string $page_type The page type.
	 * @return string The page title or empty string.
	 */
	private function get_page_title( $page_type ) {
		global $wpdb;
		$page_id = omlms_get_page_id( $page_type );

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
}
