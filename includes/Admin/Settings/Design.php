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
class Design extends Settings {

	/**
	 * The settings ID.
	 *
	 * @var string
	 * @since 1.0.0
	 */
	protected $id = 'design';

	/**
	 * Constructor.
	 *
	 * Initializes the general settings.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->id    = 'design';
		$this->label = __( 'Design', 'ohmylms' );
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
				'id'      => 'creator_lms_courses_per_page',
				'type'    => 'number',
				'default' => '10',
				'value'   => '10',
			),
			array(
				'id'      => 'creator_lms_archive_page_layout',
				'type'    => 'text',
				'default' => 'grid',
				'value'   => 'grid',
			),
			array(
				'id'      => 'creator_lms_archive_page_layout_style',
				'type'    => 'text',
				'default' => 'grid-style1',
				'value'   => 'grid-style1',
			),
			array(
				'id'      => 'creator_lms_archive_page_filter_is_enabled',
				'type'    => 'text',
				'default' => 'no',
				'value'   => 'no',
			),
			array(
				'id'      => 'creator_lms_archive_page_filters',
				'type'    => 'array',
				'default' => array( 'keyword', 'category', 'tag', 'difficulty_level', 'price_type' ),
				'value'   => array( 'keyword', 'category', 'tag', 'difficulty_level', 'price_type' ),
			),
			array(
				'id'      => 'creator_lms_archive_page_sorting_is_enabled',
				'type'    => 'text',
				'default' => 'no',
				'value'   => 'no',
			),
			array(
				'id'      => 'creator_lms_archive_page_search_is_enabled',
				'type'    => 'text',
				'default' => 'no',
				'value'   => 'no',
			),
			array(
				'id'      => 'creator_lms_archive_page_category_is_enabled',
				'type'    => 'text',
				'default' => 'no',
				'value'   => 'no',
			),
			array(
				'id'      => 'creator_lms_archive_page_row',
				'type'    => 'array',
				'default' => array(
					array(
						'row_display_criteria' => 'all',
						'row_heading'          => 'Untitled',
					),
				),
				'value'   => array(
					array(
						'row_display_criteria' => 'all',
						'row_heading'          => 'Untitled',
					),
				),
			),
			array(
				'id'      => 'creator_lms_single_course_page_features',
				'type'    => 'array',
				'default' => array( 'level', 'review', 'students', 'available_seat', 'duration', 'total_lesson', 'author', 'category', 'tag', 'level_with_enroll', 'review_with_enroll', 'students_with_enroll', 'available_seat_with_enroll', 'progress_bar_with_enroll', 'certificate_with_enroll', 'leaderboard_with_enroll', 'duration_with_enroll', 'total_lesson_with_enroll', 'author_with_enroll', 'category_with_enroll', 'tag_with_enroll' ),
				'value'   => array( 'level', 'review', 'students', 'available_seat', 'duration', 'total_lesson', 'author', 'category', 'tag', 'level_with_enroll', 'review_with_enroll', 'students_with_enroll', 'available_seat_with_enroll', 'progress_bar_with_enroll', 'certificate_with_enroll', 'leaderboard_with_enroll', 'duration_with_enroll', 'total_lesson_with_enroll', 'author_with_enroll', 'category_with_enroll', 'tag_with_enroll' ),
			),
			array(
				'id'      => 'creator_lms_single_course_page_layout',
				'type'    => 'text',
				'default' => 'layout_2',
				'value'   => 'layout_2',
			),
			array(
				'id'      => 'creator_lms_columns_per_row',
				'type'    => 'number',
				'default' => '4',
				'value'   => '4',
			),
			array(
				'id'      => 'creator_lms_container_width',
				'type'    => 'text',
				'default' => '1920px',
				'value'   => '1920px',
			),
			array(
				'id'      => 'creator_lms_debug_mode',
				'type'    => 'switch',
				'default' => 'off',
				'value'   => 'off',
			),
			array(
				'id'      => 'creator_lms_color_preset',
				'type'    => 'text',
				'default' => 'royal-purple',
				'value'   => 'royal-purple',
			),
			array(
				'id'      => 'creator_lms_primary_color_scheme',
				'type'    => 'switch',
				'default' => '#6E42D3',
				'value'   => '#6E42D3',
			),
			array(
				'id'      => 'creator_lms_primary_hover_color_scheme',
				'type'    => 'switch',
				'default' => '#1447BC',
				'value'   => '#1447BC',
			),
			array(
				'id'      => 'creator_lms_heading_color_scheme',
				'type'    => 'switch',
				'default' => '#000D25',
				'value'   => '#000D25',
			),
			array(
				'id'      => 'creator_lms_body_text_color_scheme',
				'type'    => 'switch',
				'default' => '#52525B',
				'value'   => '#52525B',
			),
			array(
				'id'      => 'creator_lms_body_progress_color_scheme',
				'type'    => 'switch',
				'default' => '#35BD4C',
				'value'   => '#35BD4C',
			),
			// Checkout page layout type
			array(
				'id'      => 'creator_lms_checkout_page_layout_type',
				'type'    => 'text',
				'default' => 'canvas',
				'value'   => 'canvas',
			),
			array(
				'id'      => 'creator_lms_leaderboard_settings',
				'type'    => 'array',
				'default' => [],
				'value'   => [],
			),
			array(
				'id'      => 'creator_lms_video_player_logo',
				'type'    => 'image',
				'default' => '',
			),
			array(
				'id'      => 'creator_lms_video_player_logo_bg_color',
				'type'    => 'color',
				'default' => '#6E42D3',
			),

		);

		return $settings;
	}
}
