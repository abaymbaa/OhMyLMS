<?php
/**
 * My Courses Block
 *
 * Gutenberg block for OhMyLMS student my courses functionality
 *
 * @package OhMyLMS\Blocks
 * @since 1.2.5
 */

namespace OhMyLMS\Blocks;

use OhMyLMS\Shortcodes\ShortCodeMyCourses;

defined( 'ABSPATH' ) || exit;

/**
 * MyCoursesGutenbergBlock class
 */
class MyCoursesGutenbergBlock {

	/**
	 * Block name
	 *
	 * @var string
	 */
	const BLOCK_NAME = 'ohmylms/my-courses';

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->register_block();
	}

	/**
	 * Register the block
	 *
	 * @return void
	 */
	private function register_block() {
		register_block_type(
			self::BLOCK_NAME,
			array(
				'attributes'      => $this->get_block_attributes(),
				'render_callback' => array( $this, 'render_block' ),
				'editor_script'   => 'ohmylms-blocks-editor',
				'editor_style'    => 'ohmylms-blocks-editor',
				'style'           => 'ohmylms-blocks-frontend',
			)
		);
	}

	/**
	 * Get block attributes
	 *
	 * @return array
	 */
	private function get_block_attributes() {
		return array(
			'align'                  => array(
				'type'    => 'string',
				'default' => 'full',
			),
			// Header visibility and configuration
			'showHeader'             => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'myProfileUrl'           => array(
				'type'    => 'string',
				'default' => '',
			),
			'myCoursesUrl'           => array(
				'type'    => 'string',
				'default' => '',
			),
			// Header styling
			'headerBgColor'          => array(
				'type'    => 'string',
				'default' => '#000D2C',
			),
			// User menu styling
			'userMenuColor'          => array(
				'type'    => 'string',
				'default' => '#000000',
			),
			'userMenuBgColor'        => array(
				'type'    => 'string',
				'default' => '#FFFFFF',
			),
			'userMenuFontSize'       => array(
				'type'    => 'number',
				'default' => 14,
			),
			'userMenuFontWeight'     => array(
				'type'    => 'number',
				'default' => 400,
			),
			// User menu hover styling
			'userMenuHoverColor'     => array(
				'type'    => 'string',
				'default' => '#000000',
			),
			'userMenuHoverBgColor'   => array(
				'type'    => 'string',
				'default' => '#F5F5F5',
			),
			// User menu icon styling
			'userMenuIconColor'      => array(
				'type'    => 'string',
				'default' => '#000000',
			),
			'userMenuIconHoverColor' => array(
				'type'    => 'string',
				'default' => '#4361EE',
			),
			// Section background color
			'sectionBgColor'         => array(
				'type'    => 'string',
				'default' => '#F9FAFD',
			),
			// Wrapper styling
			'wrapperBgColor'         => array(
				'type'    => 'string',
				'default' => '#FFFFFF',
			),
			'wrapperPadding'         => array(
				'type'    => 'number',
				'default' => 30,
			),
			// Title typography
			'titleColor'             => array(
				'type'    => 'string',
				'default' => '#1E1E1E',
			),
			'titleFontSize'          => array(
				'type'    => 'number',
				'default' => 24,
			),
			'titleFontWeight'        => array(
				'type'    => 'number',
				'default' => 600,
			),
			// Text typography
			'textColor'              => array(
				'type'    => 'string',
				'default' => '#52525B',
			),
			'textFontSize'           => array(
				'type'    => 'number',
				'default' => 14,
			),
			'textFontWeight'         => array(
				'type'    => 'number',
				'default' => 400,
			),
			// Button styling
			'buttonTextColor'        => array(
				'type'    => 'string',
				'default' => '#FFFFFF',
			),
			'buttonBgColor'          => array(
				'type'    => 'string',
				'default' => '#6E42D3',
			),
			'buttonFontSize'         => array(
				'type'    => 'number',
				'default' => 14,
			),
			'buttonFontWeight'       => array(
				'type'    => 'number',
				'default' => 600,
			),
			'buttonBorderWidth'      => array(
				'type'    => 'number',
				'default' => 0,
			),
			'buttonBorderColor'      => array(
				'type'    => 'string',
				'default' => '#6E42D3',
			),
			'buttonBorderRadius'     => array(
				'type'    => 'number',
				'default' => 6,
			),
			'buttonPadding'          => array(
				'type'    => 'number',
				'default' => 12,
			),
			'buttonHoverBgColor'     => array(
				'type'    => 'string',
				'default' => '#5a32c2',
			),
			'buttonHoverTextColor'   => array(
				'type'    => 'string',
				'default' => '#FFFFFF',
			),
			// Course card styling
			'cardBgColor'            => array(
				'type'    => 'string',
				'default' => '#FFFFFF',
			),
			'cardPadding'            => array(
				'type'    => 'number',
				'default' => 20,
			),
			// Progress bar colors
			'progressBarBgColor'     => array(
				'type'    => 'string',
				'default' => '#E5E7EB',
			),
			'progressBarFillColor'   => array(
				'type'    => 'string',
				'default' => '#6E42D3',
			),
			// Tab styling
			'tabNormalColor'         => array(
				'type'    => 'string',
				'default' => '#666666',
			),
			'tabActiveColor'         => array(
				'type'    => 'string',
				'default' => '#6E42D3',
			),
			// No course data card styling
			'noCourseCardBgColor'    => array(
				'type'    => 'string',
				'default' => '#F9FAFB',
			),
			'noCourseCardPadding'    => array(
				'type'    => 'number',
				'default' => 40,
			),
		);
	}

	/**
	 * Convert block attributes to shortcode attributes
	 *
	 * @param array $attributes Block attributes.
	 * @return array Shortcode attributes.
	 */
	private function convert_attributes_to_shortcode_attrs( $attributes ) {
		$shortcode_attrs = array();

		// Map block attributes to shortcode attributes
		$attribute_map = array(
			'showHeader'             => 'show_header',
			'headerBgColor'          => 'header_bg_color',
			'userMenuColor'          => 'user_menu_color',
			'userMenuBgColor'        => 'user_menu_bg_color',
			'userMenuFontSize'       => 'user_menu_font_size',
			'userMenuFontWeight'     => 'user_menu_font_weight',
			'userMenuHoverColor'     => 'user_menu_hover_color',
			'userMenuHoverBgColor'   => 'user_menu_hover_bg_color',
			'userMenuIconColor'      => 'user_menu_icon_color',
			'userMenuIconHoverColor' => 'user_menu_icon_hover_color',
			'sectionBgColor'         => 'section_bg_color',
			'wrapperBgColor'         => 'wrapper_bg_color',
			'wrapperPadding'         => 'wrapper_padding',
			'titleColor'             => 'title_color',
			'titleFontSize'          => 'title_font_size',
			'titleFontWeight'        => 'title_font_weight',
			'textColor'              => 'text_color',
			'textFontSize'           => 'text_font_size',
			'textFontWeight'         => 'text_font_weight',
			'buttonTextColor'        => 'button_text_color',
			'buttonBgColor'          => 'button_bg_color',
			'buttonFontSize'         => 'button_font_size',
			'buttonFontWeight'       => 'button_font_weight',
			'buttonBorderWidth'      => 'button_border_width',
			'buttonBorderColor'      => 'button_border_color',
			'buttonBorderRadius'     => 'button_border_radius',
			'buttonPadding'          => 'button_padding',
			'buttonHoverBgColor'     => 'button_hover_bg_color',
			'buttonHoverTextColor'   => 'button_hover_text_color',
			'cardBgColor'            => 'card_bg_color',
			'cardPadding'            => 'card_padding',
			'progressBarBgColor'     => 'progress_bar_bg_color',
			'progressBarFillColor'   => 'progress_bar_fill_color',
			'tabNormalColor'         => 'tab_normal_color',
			'tabActiveColor'         => 'tab_active_color',
			'noCourseCardBgColor'    => 'no_course_card_bg_color',
			'noCourseCardPadding'    => 'no_course_card_padding',
		);

		foreach ( $attribute_map as $block_attr => $shortcode_attr ) {
			if ( isset( $attributes[ $block_attr ] ) ) {
				$value = $attributes[ $block_attr ];

				// Convert boolean to yes/no for shortcode
				if ( is_bool( $value ) ) {
					$value = $value ? 'yes' : 'no';
				}

				$shortcode_attrs[ $shortcode_attr ] = $value;
			}
		}

		return $shortcode_attrs;
	}

	/**
	 * Render the block
	 *
	 * @param array  $attributes Block attributes
	 * @param string $content Block content
	 * @return string
	 */
	public function render_block( $attributes, $content = '' ) {
		// Validate and sanitize attributes
		$attributes = $this->validate_attributes( $attributes );

		// Convert block attributes to shortcode attributes
		$shortcode_attrs = $this->convert_attributes_to_shortcode_attrs( $attributes );

		// Check if we're in the editor context (ServerSideRender)
		$is_editor = defined( 'REST_REQUEST' ) && REST_REQUEST;

		// Start output buffering
		ob_start();

		// Enable preview mode for Gutenberg editor to show my courses even when not logged in
		if ( $is_editor ) {
			add_filter( 'ohmylms_gutenberg_preview_mode', '__return_true' );
		}

		// Add editor-specific styling for proper my courses rendering
		if ( $is_editor ) {
			?>
			<style>
				.wp-block-ohmylms-my-courses .ohmylms {
					max-width: 100% !important;
					background-color: #F9FAFD !important;
					width: 100% !important;
				}
				.wp-block-ohmylms-my-courses .ohmylms-dashboard {
					padding: 30px !important;
					background-color: #fff !important;
					border-radius: 12px !important;
					box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
				}
				.wp-block-ohmylms-my-courses .ohmylms-my-courses-header {
					margin-bottom: 30px !important;
					padding-bottom: 20px !important;
					border-bottom: 1px solid #eee !important;
				}
				.wp-block-ohmylms-my-courses .ohmylms-my-courses-title {
					color: var(--ohmylms-heading-color, #1e1e1e) !important;
					font-size: 24px !important;
					font-weight: 600 !important;
					line-height: 1.3 !important;
					margin: 0 0 10px !important;
					letter-spacing: 0 !important;
				}
				.wp-block-ohmylms-my-courses .ohmylms-my-courses-tabs {
					display: flex !important;
					gap: 20px !important;
					margin-bottom: 30px !important;
					border-bottom: 2px solid #eee !important;
				}
				.wp-block-ohmylms-my-courses .ohmylms-my-courses-tab {
					padding: 12px 24px !important;
					background: transparent !important;
					border: none !important;
					cursor: pointer !important;
					font-size: 16px !important;
					font-weight: 500 !important;
					color: #666 !important;
					border-bottom: 2px solid transparent !important;
					margin-bottom: -2px !important;
					transition: all 0.3s ease !important;
				}
				.wp-block-ohmylms-my-courses .ohmylms-my-courses-tab.active {
					color: #6E42D3 !important;
					border-bottom-color: #6E42D3 !important;
				}
				.wp-block-ohmylms-my-courses .ohmylms-my-courses-content {
					display: grid !important;
					grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
					gap: 20px !important;
				}
				.wp-block-ohmylms-my-courses .ohmylms-course-card {
					background: #fff !important;
					border: 1px solid #eee !important;
					border-radius: 8px !important;
					overflow: hidden !important;
					transition: all 0.3s ease !important;
				}
				.wp-block-ohmylms-my-courses .ohmylms-course-card:hover {
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
					transform: translateY(-2px) !important;
				}
				@media (max-width: 768px) {
					.wp-block-ohmylms-my-courses .ohmylms-dashboard {
						padding: 20px !important;
					}
					.wp-block-ohmylms-my-courses .ohmylms-my-courses-content {
						grid-template-columns: 1fr !important;
					}
				}
			</style>
			<?php
		}

		// Build wrapper attributes for frontend only
		$wrapper_attributes = array();

		// Add alignment class for frontend (not in editor)
		if ( ! $is_editor && ! empty( $attributes['align'] ) ) {
			$wrapper_attributes['class'] = 'align' . $attributes['align'];
		}

		// Output block wrapper with alignment class only on frontend
		if ( ! $is_editor && ! empty( $wrapper_attributes ) ) {
			// Convert wrapper attributes to string
			$wrapper_attrs_string = '';
			foreach ( $wrapper_attributes as $key => $value ) {
				$wrapper_attrs_string .= ' ' . $key . '="' . esc_attr( $value ) . '"';
			}
			echo '<div' . $wrapper_attrs_string . '>';
		}

		// Add proper wrapper classes for consistency with frontend
		$wrapper_classes = array( 'ohmylms' );
		if ( $is_editor ) {
			$wrapper_classes[] = 'ohmylms-page';
		}

		echo '<div class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '">';

		// Add preview notice in editor mode
		if ( $is_editor ) {
			echo '<div class="ohmylms-gutenberg-edit-mode" style="background: #f0f0f1; padding: 8px 12px; margin-bottom: 16px; border-left: 4px solid #2271b1; font-size: 12px; color: #3c434a;">';
			echo '<small>' . esc_html__( 'Gutenberg Preview Mode: This is how the my courses page will appear to logged-in users.', 'ohmylms' ) . '</small>';
			echo '</div>';
		}

		// Output the my courses
		ShortCodeMyCourses::output( $shortcode_attrs );

		echo '</div>'; // Close ohmylms wrapper

		// Close alignment wrapper only if it was opened (frontend only)
		if ( ! $is_editor && ! empty( $wrapper_attributes ) ) {
			echo '</div>'; // Close alignment wrapper
		}

		// Remove preview mode filter if it was set
		if ( $is_editor ) {
			remove_filter( 'ohmylms_gutenberg_preview_mode', '__return_true' );
		}

		return ob_get_clean();
	}

	/**
	 * Validate and sanitize block attributes
	 *
	 * @param array $attributes Raw attributes
	 * @return array Validated attributes
	 */
	private function validate_attributes( $attributes ) {
		// Ensure attributes is an array
		if ( ! is_array( $attributes ) ) {
			$attributes = array();
		}

		$validated          = array();
		$default_attributes = $this->get_block_attributes();

		foreach ( $default_attributes as $key => $config ) {
			if ( isset( $attributes[ $key ] ) && $attributes[ $key ] !== null ) {
				$value = $attributes[ $key ];

				// Validate based on type
				switch ( $config['type'] ) {
					case 'string':
						$validated[ $key ] = is_string( $value ) ? sanitize_text_field( $value ) : $config['default'];
						break;
					case 'number':
						$validated[ $key ] = is_numeric( $value ) ? absint( $value ) : $config['default'];
						break;
					case 'boolean':
						$validated[ $key ] = is_bool( $value ) ? $value : $config['default'];
						break;
					default:
						$validated[ $key ] = $config['default'];
				}
			} else {
				$validated[ $key ] = $config['default'];
			}
		}

		return $validated;
	}
}
