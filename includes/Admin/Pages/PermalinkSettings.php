<?php

namespace OMLMS\Admin\Pages;

use OMLMS\Abstracts\SettingsPage;

defined( 'ABSPATH' ) || exit;


class PermalinkSettings extends SettingsPage {
	public function __construct() {
		$this->id    = 'permalink';
		$this->label = __( 'Permalink', 'ohmylms' );

		parent::__construct();
	}


	public function get_settings_for_default_section() {
		$settings = array(
			array(
				'title' => __( 'Permalink setup', 'ohmylms' ),
				'type'  => 'title',
				'id'    => 'permalink_settings',
			),
			array(
				'title'   => esc_html__( 'Course', 'ohmylms' ),
				'type'    => 'permalink',
				'default' => '',
				'id'      => 'course_base',
			),
			array(
				'type' => 'sectionend',
				'id'   => 'permalink_settings',
			),
		);
		return apply_filters( 'creator_lms_permalink_settings', $settings );
	}
}
