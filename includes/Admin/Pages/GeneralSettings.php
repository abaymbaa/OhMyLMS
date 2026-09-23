<?php

namespace OMLMS\Admin\Pages;

use OMLMS\Abstracts\SettingsPage;

defined( 'ABSPATH' ) || exit;


class GeneralSettings extends SettingsPage {


	public function __construct() {
		$this->id    = 'general';
		$this->label = __( 'General', 'ohmylms' );

		parent::__construct();
	}


	public function get_settings_for_default_section() {

		$currency_code_options = get_omlms_currencies();

		foreach ( $currency_code_options as $code => $name ) {
			$currency_code_options[ $code ] = $name . ' (' . get_omlms_currency_symbol( $code ) . ')';
		}

		$settings = array(
			// page settings
			array(
				'title' => __( 'Page setup', 'ohmylms' ),
				'type'  => 'title',
				'id'    => 'general_page_settings',
			),
			array(
				'title'    => __( 'All course page', 'ohmylms' ),
				'id'       => 'creator_lms_course_page_id',
				'type'     => 'single_select_page_with_search',
				'default'  => '',
				'class'    => 'omlms-page-search',
				'css'      => 'min-width:300px;',
				'args'     => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
							omlms_get_page_id( 'myaccount' ),
						),
				),
				'desc_tip' => true,
				'autoload' => false,
			),
			array(
				'title'    => __( 'Student Dashboard Page', 'ohmylms' ),
				'id'       => 'creator_lms_student_dashboard_page_id',
				'type'     => 'single_select_page_with_search',
				'default'  => omlms_get_page_id( 'student_dashboard' ),
				'class'    => 'omlms-page-search',
				'css'      => 'min-width:300px;',
				'args'     => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
						),
				),
				'desc_tip' => true,
				'autoload' => false,
			),
			array(
				'title'    => __( 'Student My Profile Page', 'ohmylms' ),
				'id'       => 'creator_lms_student_profile_page_id',
				'type'     => 'single_select_page_with_search',
				'default'  => omlms_get_page_id( 'student_profile' ),
				'class'    => 'omlms-page-search',
				'css'      => 'min-width:300px;',
				'args'     => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
						),
				),
				'desc_tip' => true,
				'autoload' => false,
			),
			array(
				'title'    => __( 'Student My Courses Page', 'ohmylms' ),
				'id'       => 'creator_lms_student_courses_page_id',
				'type'     => 'single_select_page_with_search',
				'default'  => omlms_get_page_id( 'student_courses' ),
				'class'    => 'omlms-page-search',
				'css'      => 'min-width:300px;',
				'args'     => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
						),
				),
				'desc_tip' => true,
				'autoload' => false,
			),
			array(
				'title'    => __( 'Checkout page', 'ohmylms' ),
				'id'       => 'creator_lms_checkout_page_id',
				'type'     => 'single_select_page_with_search',
				'default'  => '',
				'class'    => 'omlms-page-search',
				'css'      => 'min-width:300px;',
				'args'     => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'course' ),
							omlms_get_page_id( 'myaccount' ),
						),
				),
				'desc_tip' => true,
				'autoload' => false,
			),
			array(
				'title'    => __( 'Thank you/Order confirm page', 'ohmylms' ),
				'id'       => 'creator_lms_thank_you_page_id',
				'type'     => 'single_select_page_with_search',
				'default'  => '',
				'class'    => 'omlms-page-search',
				'css'      => 'min-width:300px;',
				'args'     => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'course' ),
							omlms_get_page_id( 'myaccount' ),
							omlms_get_page_id( 'checkout' ),
						),
				),
				'desc_tip' => true,
				'autoload' => false,
			),
			array(
				'title'    => __( 'Terms and condition page', 'ohmylms' ),
				'id'       => 'creator_lms_terms_page_id',
				'type'     => 'single_select_page_with_search',
				'default'  => '',
				'class'    => 'omlms-page-search',
				'css'      => 'min-width:300px;',
				'args'     => array(
					'exclude' =>
						array(
							omlms_get_page_id( 'checkout' ),
						),
				),
				'desc_tip' => true,
				'autoload' => false,
			),
			array(
				'type' => 'sectionend',
				'id'   => 'general_page_settings',
			),

			// currency settings
			array(
				'title' => __( 'Currency options', 'ohmylms' ),
				'type'  => 'title',
				'desc'  => __( 'The following options affect how prices are displayed on the frontend.', 'ohmylms' ),
				'id'    => 'pricing_options',
			),

			array(
				'title'    => __( 'Currency', 'ohmylms' ),
				'desc'     => __( 'This controls what currency prices are listed at in the catalog and which currency gateways will take payments in.', 'ohmylms' ),
				'id'       => 'creator_lms_currency',
				'default'  => 'USD',
				'type'     => 'select',
				'class'    => 'omlms-select2',
				'desc_tip' => true,
				'options'  => $currency_code_options,
			),

			array(
				'title'    => __( 'Currency position', 'ohmylms' ),
				'desc'     => __( 'This controls the position of the currency symbol.', 'ohmylms' ),
				'id'       => 'creator_lms_currency_pos',
				'class'    => 'omlms-select2',
				'default'  => 'left',
				'type'     => 'select',
				'options'  => array(
					'left'        => __( 'Left', 'ohmylms' ),
					'right'       => __( 'Right', 'ohmylms' ),
					'left_space'  => __( 'Left with space', 'ohmylms' ),
					'right_space' => __( 'Right with space', 'ohmylms' ),
				),
				'desc_tip' => true,
			),

			array(
				'title'    => __( 'Thousand separator', 'ohmylms' ),
				'desc'     => __( 'This sets the thousand separator of displayed prices.', 'ohmylms' ),
				'id'       => 'creator_lms_price_thousand_sep',
				'css'      => 'width:50px;',
				'default'  => ',',
				'type'     => 'text',
				'desc_tip' => true,
			),

			array(
				'title'    => __( 'Decimal separator', 'ohmylms' ),
				'desc'     => __( 'This sets the decimal separator of displayed prices.', 'ohmylms' ),
				'id'       => 'creator_lms_price_decimal_sep',
				'css'      => 'width:50px;',
				'default'  => '.',
				'type'     => 'text',
				'desc_tip' => true,
			),

			array(
				'title'             => __( 'Number of decimals', 'ohmylms' ),
				'desc'              => __( 'This sets the number of decimal points shown in displayed prices.', 'ohmylms' ),
				'id'                => 'creator_lms_price_num_decimals',
				'css'               => 'width:50px;',
				'default'           => '2',
				'desc_tip'          => true,
				'type'              => 'number',
				'custom_attributes' => array(
					'min'  => 0,
					'step' => 1,
				),
			),

			array(
				'type' => 'sectionend',
				'id'   => 'pricing_options',
			),
		);
		return apply_filters( 'creator_lms_settings_pages', $settings );
	}
}
