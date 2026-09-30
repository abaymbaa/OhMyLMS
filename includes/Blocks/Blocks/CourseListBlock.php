<?php

namespace OMLMS\Blocks\Blocks;

use OMLMS\Shortcodes\ShortcodeCourseList;

defined( 'ABSPATH' ) || exit;

/**
 * CourseListBlock
 *
 * Registers the OhMyLMS Course List Gutenberg block.
 *
 * @since 1.0.0
 */
class CourseListBlock {

	const BLOCK_NAME = 'creator-lms/course-list';

	public function __construct() {
		$this->register_block();
	}

	private function register_block() {
		register_block_type( self::BLOCK_NAME, array(
			'attributes' => $this->get_block_attributes(),
			'render_callback' => array( $this, 'render_block' ),
			'editor_script' => 'creator-lms-blocks-editor',
			'editor_style' => 'creator-lms-blocks-editor',
			'style' => 'creator-lms-blocks-frontend',
		) );
	}

	private function get_block_attributes() {
		return array(
			// Content settings
			'postsPerPage' => array( 'type' => 'number', 'default' => 10 ),
			'orderby' => array( 'type' => 'string', 'default' => 'date' ),
			'order' => array( 'type' => 'string', 'default' => 'DESC' ),
			'category' => array( 'type' => 'string', 'default' => '' ),

			// Layout settings
			'layout' => array( 'type' => 'string', 'default' => 'grid' ),
			'layoutStyle' => array( 'type' => 'string', 'default' => 'grid-style1' ),
			'showFilter' => array( 'type' => 'string', 'default' => 'no' ),
			'showSearch' => array( 'type' => 'string', 'default' => 'no' ),
			'showSort' => array( 'type' => 'string', 'default' => 'no' ),
			'columns' => array( 'type' => 'string', 'default' => 'no' ),
			'isEnableCategory' => array( 'type' => 'string', 'default' => 'no' ),
			'courseRows' => array( 'type' => 'array', 'default' => array() ),

			// 1. Wrapper Style
			'wrapperBackground' => array( 'type' => 'string', 'default' => '' ),
			'wrapperMargin' => array( 'type' => 'string', 'default' => '' ),
			'wrapperPadding' => array( 'type' => 'string', 'default' => '' ),

			// 2. Card Style
			'cardBackground' => array( 'type' => 'string', 'default' => '' ),
			'cardBorderRadius' => array( 'type' => 'string', 'default' => '' ),
			'cardBorderWidth' => array( 'type' => 'string', 'default' => '' ),
			'cardBorderType' => array( 'type' => 'string', 'default' => '' ),
			'cardBorderColor' => array( 'type' => 'string', 'default' => '' ),
			'cardPadding' => array( 'type' => 'string', 'default' => '' ),
			'cardBoxShadow' => array( 'type' => 'string', 'default' => '' ),
			'cardHoverBoxShadow' => array( 'type' => 'string', 'default' => '' ),
			'cardHoverBorderColor' => array( 'type' => 'string', 'default' => '' ),
			'cardHoverBackground' => array( 'type' => 'string', 'default' => '' ),

			// 3. Card Header Style
			'cardHeaderImageBorderRadius' => array( 'type' => 'string', 'default' => '' ),
			'cardHeaderMargin' => array( 'type' => 'string', 'default' => '' ),
			'cardHeaderPadding' => array( 'type' => 'string', 'default' => '' ),

			// 4. Card Content Style
			'cardContentBackground' => array( 'type' => 'string', 'default' => '' ),

			// 4.1 Title Typography
			'titleTypographyFontFamily' => array( 'type' => 'string', 'default' => '' ),
			'titleTypographyFontSize' => array( 'type' => 'string', 'default' => '' ),
			'titleTypographyFontWeight' => array( 'type' => 'string', 'default' => '' ),
			'titleTypographyTextTransform' => array( 'type' => 'string', 'default' => '' ),
			'titleTypographyFontStyle' => array( 'type' => 'string', 'default' => '' ),
			'titleTypographyTextDecoration' => array( 'type' => 'string', 'default' => '' ),
			'titleTypographyLineHeight' => array( 'type' => 'string', 'default' => '' ),
			'titleTypographyLetterSpacing' => array( 'type' => 'string', 'default' => '' ),
			'titleTypographyWordSpacing' => array( 'type' => 'string', 'default' => '' ),
			'titleColor' => array( 'type' => 'string', 'default' => '' ),
			'titleMargin' => array( 'type' => 'string', 'default' => '' ),

			// 4.2 Description Typography
			'descriptionTypographyFontFamily' => array( 'type' => 'string', 'default' => '' ),
			'descriptionTypographyFontSize' => array( 'type' => 'string', 'default' => '' ),
			'descriptionTypographyFontWeight' => array( 'type' => 'string', 'default' => '' ),
			'descriptionTypographyTextTransform' => array( 'type' => 'string', 'default' => '' ),
			'descriptionTypographyFontStyle' => array( 'type' => 'string', 'default' => '' ),
			'descriptionTypographyTextDecoration' => array( 'type' => 'string', 'default' => '' ),
			'descriptionTypographyLineHeight' => array( 'type' => 'string', 'default' => '' ),
			'descriptionTypographyLetterSpacing' => array( 'type' => 'string', 'default' => '' ),
			'descriptionTypographyWordSpacing' => array( 'type' => 'string', 'default' => '' ),
			'descriptionColor' => array( 'type' => 'string', 'default' => '' ),
			'descriptionMargin' => array( 'type' => 'string', 'default' => '' ),

			// 4.3 Course Meta Style
			'courseMetaBackground' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaPadding' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaMargin' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaBorderRadius' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaBorder' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaRowGap' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaColumnGap' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaTypographyFontFamily' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaTypographyFontSize' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaTypographyFontWeight' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaTypographyTextTransform' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaTypographyFontStyle' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaTypographyTextDecoration' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaTypographyLineHeight' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaTypographyLetterSpacing' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaTypographyWordSpacing' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaColor' => array( 'type' => 'string', 'default' => '' ),
			'courseMetaIconSize' => array( 'type' => 'string', 'default' => '' ),

			// 4.4 Cohort Meta Style
			'cohortMetaBackground' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaPadding' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaMargin' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaBorderRadius' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaBorder' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaRowGap' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaTypographyFontFamily' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaTypographyFontSize' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaTypographyFontWeight' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaTypographyTextTransform' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaTypographyFontStyle' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaTypographyTextDecoration' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaTypographyLineHeight' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaTypographyLetterSpacing' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaTypographyWordSpacing' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaColor' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaIconSize' => array( 'type' => 'string', 'default' => '' ),
			'cohortMetaIconSpacing' => array( 'type' => 'string', 'default' => '' ),

			// 4.5 Price Style
			'priceBackground' => array( 'type' => 'string', 'default' => '' ),
			'pricePadding' => array( 'type' => 'string', 'default' => '' ),
			'priceMargin' => array( 'type' => 'string', 'default' => '' ),
			'priceBorderRadius' => array( 'type' => 'string', 'default' => '' ),
			'priceBorder' => array( 'type' => 'string', 'default' => '' ),
			'priceTypographyFontFamily' => array( 'type' => 'string', 'default' => '' ),
			'priceTypographyFontSize' => array( 'type' => 'string', 'default' => '' ),
			'priceTypographyFontWeight' => array( 'type' => 'string', 'default' => '' ),
			'priceTypographyTextTransform' => array( 'type' => 'string', 'default' => '' ),
			'priceTypographyFontStyle' => array( 'type' => 'string', 'default' => '' ),
			'priceTypographyTextDecoration' => array( 'type' => 'string', 'default' => '' ),
			'priceTypographyLineHeight' => array( 'type' => 'string', 'default' => '' ),
			'priceTypographyLetterSpacing' => array( 'type' => 'string', 'default' => '' ),
			'priceTypographyWordSpacing' => array( 'type' => 'string', 'default' => '' ),
			'priceColor' => array( 'type' => 'string', 'default' => '' ),
			'priceRegularColor' => array( 'type' => 'string', 'default' => '' ),

			// 4.6 Button Style
			'buttonBackground' => array( 'type' => 'string', 'default' => '' ),
			'buttonPadding' => array( 'type' => 'string', 'default' => '' ),
			'buttonMargin' => array( 'type' => 'string', 'default' => '' ),
			'buttonBorderRadius' => array( 'type' => 'string', 'default' => '' ),
			'buttonBorder' => array( 'type' => 'string', 'default' => '' ),
			'buttonTypographyFontFamily' => array( 'type' => 'string', 'default' => '' ),
			'buttonTypographyFontSize' => array( 'type' => 'string', 'default' => '' ),
			'buttonTypographyFontWeight' => array( 'type' => 'string', 'default' => '' ),
			'buttonTypographyTextTransform' => array( 'type' => 'string', 'default' => '' ),
			'buttonTypographyFontStyle' => array( 'type' => 'string', 'default' => '' ),
			'buttonTypographyTextDecoration' => array( 'type' => 'string', 'default' => '' ),
			'buttonTypographyLineHeight' => array( 'type' => 'string', 'default' => '' ),
			'buttonTypographyLetterSpacing' => array( 'type' => 'string', 'default' => '' ),
			'buttonTypographyWordSpacing' => array( 'type' => 'string', 'default' => '' ),
			'buttonColor' => array( 'type' => 'string', 'default' => '' ),
			'buttonBoxShadow' => array( 'type' => 'string', 'default' => '' ),
			'buttonHoverBackground' => array( 'type' => 'string', 'default' => '' ),
			'buttonHoverColor' => array( 'type' => 'string', 'default' => '' ),
			'buttonHoverBoxShadow' => array( 'type' => 'string', 'default' => '' ),
			'buttonHoverBorderColor' => array( 'type' => 'string', 'default' => '' ),

			// Legacy attributes for backward compatibility
			'containerClass' => array( 'type' => 'string', 'default' => '' ),
			'courseCardClass' => array( 'type' => 'string', 'default' => '' ),
			'gridGap' => array( 'type' => 'string', 'default' => '' ),
			'cardBgColor' => array( 'type' => 'string', 'default' => '' ),
			'cardShadow' => array( 'type' => 'string', 'default' => '' ),
			'titleFontSize' => array( 'type' => 'string', 'default' => '' ),
			'priceFontSize' => array( 'type' => 'string', 'default' => '' ),
			'buttonBgColor' => array( 'type' => 'string', 'default' => '' ),
			'buttonTextColor' => array( 'type' => 'string', 'default' => '' ),
			'containerPadding' => array( 'type' => 'string', 'default' => '' ),
			'containerMargin' => array( 'type' => 'string', 'default' => '' ),
			'cardMargin' => array( 'type' => 'string', 'default' => '' ),

			'type' => array( 'type' => 'string', 'default' => 'default' ),
			'align' => array( 'type' => 'string', 'default' => 'full' ),
		);
	}

	private function convert_attributes_to_shortcode_attrs( $attributes ) {
		$map = array(
			'postsPerPage' => 'posts_per_page',
			'orderby' => 'orderby',
			'order' => 'order',
			'category' => 'category',
			'layout' => 'layout',
			'layoutStyle' => 'layout_style',
			'showFilter' => 'show_filter',
			'showSearch' => 'show_search',
			'showSort' => 'show_sort',
			'columns' => 'columns',
			'isEnableCategory' => 'is_enable_category',
			'courseRows' => 'course_rows',
			'wrapperBackground' => 'wrapper_background',
			'wrapperMargin' => 'wrapper_margin',
			'wrapperPadding' => 'wrapper_padding',
			'cardBackground' => 'card_background',
			'cardBorderRadius' => 'card_border_radius',
			'cardBorderWidth' => 'card_border_width',
			'cardBorderType' => 'card_border_type',
			'cardBorderColor' => 'card_border_color',
			'cardPadding' => 'card_padding',
			'cardBoxShadow' => 'card_box_shadow',
			'cardHoverBoxShadow' => 'card_hover_box_shadow',
			'cardHoverBorderColor' => 'card_hover_border_color',
			'cardHoverBackground' => 'card_hover_background',
			'cardHeaderImageBorderRadius' => 'card_header_image_border_radius',
			'cardHeaderMargin' => 'card_header_margin',
			'cardHeaderPadding' => 'card_header_padding',
			'cardContentBackground' => 'card_content_background',
			'titleTypographyFontFamily' => 'title_typography_font_family',
			'titleTypographyFontSize' => 'title_typography_font_size',
			'titleTypographyFontWeight' => 'title_typography_font_weight',
			'titleTypographyTextTransform' => 'title_typography_text_transform',
			'titleTypographyFontStyle' => 'title_typography_font_style',
			'titleTypographyTextDecoration' => 'title_typography_text_decoration',
			'titleTypographyLineHeight' => 'title_typography_line_height',
			'titleTypographyLetterSpacing' => 'title_typography_letter_spacing',
			'titleTypographyWordSpacing' => 'title_typography_word_spacing',
			'titleColor' => 'title_color',
			'titleMargin' => 'title_margin',
			'descriptionTypographyFontFamily' => 'description_typography_font_family',
			'descriptionTypographyFontSize' => 'description_typography_font_size',
			'descriptionTypographyFontWeight' => 'description_typography_font_weight',
			'descriptionTypographyTextTransform' => 'description_typography_text_transform',
			'descriptionTypographyFontStyle' => 'description_typography_font_style',
			'descriptionTypographyTextDecoration' => 'description_typography_text_decoration',
			'descriptionTypographyLineHeight' => 'description_typography_line_height',
			'descriptionTypographyLetterSpacing' => 'description_typography_letter_spacing',
			'descriptionTypographyWordSpacing' => 'description_typography_word_spacing',
			'descriptionColor' => 'description_color',
			'descriptionMargin' => 'description_margin',
			'courseMetaBackground' => 'course_meta_background',
			'courseMetaPadding' => 'course_meta_padding',
			'courseMetaMargin' => 'course_meta_margin',
			'courseMetaBorderRadius' => 'course_meta_border_radius',
			'courseMetaBorder' => 'course_meta_border',
			'courseMetaRowGap' => 'course_meta_row_gap',
			'courseMetaColumnGap' => 'course_meta_column_gap',
			'courseMetaTypographyFontFamily' => 'course_meta_typography_font_family',
			'courseMetaTypographyFontSize' => 'course_meta_typography_font_size',
			'courseMetaTypographyFontWeight' => 'course_meta_typography_font_weight',
			'courseMetaTypographyTextTransform' => 'course_meta_typography_text_transform',
			'courseMetaTypographyFontStyle' => 'course_meta_typography_font_style',
			'courseMetaTypographyTextDecoration' => 'course_meta_typography_text_decoration',
			'courseMetaTypographyLineHeight' => 'course_meta_typography_line_height',
			'courseMetaTypographyLetterSpacing' => 'course_meta_typography_letter_spacing',
			'courseMetaTypographyWordSpacing' => 'course_meta_typography_word_spacing',
			'courseMetaColor' => 'course_meta_color',
			'courseMetaIconSize' => 'course_meta_icon_size',
			'cohortMetaBackground' => 'cohort_meta_background',
			'cohortMetaPadding' => 'cohort_meta_padding',
			'cohortMetaMargin' => 'cohort_meta_margin',
			'cohortMetaBorderRadius' => 'cohort_meta_border_radius',
			'cohortMetaBorder' => 'cohort_meta_border',
			'cohortMetaRowGap' => 'cohort_meta_row_gap',
			'cohortMetaTypographyFontFamily' => 'cohort_meta_typography_font_family',
			'cohortMetaTypographyFontSize' => 'cohort_meta_typography_font_size',
			'cohortMetaTypographyFontWeight' => 'cohort_meta_typography_font_weight',
			'cohortMetaTypographyTextTransform' => 'cohort_meta_typography_text_transform',
			'cohortMetaTypographyFontStyle' => 'cohort_meta_typography_font_style',
			'cohortMetaTypographyTextDecoration' => 'cohort_meta_typography_text_decoration',
			'cohortMetaTypographyLineHeight' => 'cohort_meta_typography_line_height',
			'cohortMetaTypographyLetterSpacing' => 'cohort_meta_typography_letter_spacing',
			'cohortMetaTypographyWordSpacing' => 'cohort_meta_typography_word_spacing',
			'cohortMetaColor' => 'cohort_meta_color',
			'cohortMetaIconSize' => 'cohort_meta_icon_size',
			'cohortMetaIconSpacing' => 'cohort_meta_icon_spacing',
			'priceBackground' => 'price_background',
			'pricePadding' => 'price_padding',
			'priceMargin' => 'price_margin',
			'priceBorderRadius' => 'price_border_radius',
			'priceBorder' => 'price_border',
			'priceTypographyFontFamily' => 'price_typography_font_family',
			'priceTypographyFontSize' => 'price_typography_font_size',
			'priceTypographyFontWeight' => 'price_typography_font_weight',
			'priceTypographyTextTransform' => 'price_typography_text_transform',
			'priceTypographyFontStyle' => 'price_typography_font_style',
			'priceTypographyTextDecoration' => 'price_typography_text_decoration',
			'priceTypographyLineHeight' => 'price_typography_line_height',
			'priceTypographyLetterSpacing' => 'price_typography_letter_spacing',
			'priceTypographyWordSpacing' => 'price_typography_word_spacing',
			'priceColor' => 'price_color',
			'priceRegularColor' => 'price_regular_color',
			'buttonBackground' => 'button_background',
			'buttonPadding' => 'button_padding',
			'buttonMargin' => 'button_margin',
			'buttonBorderRadius' => 'button_border_radius',
			'buttonBorder' => 'button_border',
			'buttonTypographyFontFamily' => 'button_typography_font_family',
			'buttonTypographyFontSize' => 'button_typography_font_size',
			'buttonTypographyFontWeight' => 'button_typography_font_weight',
			'buttonTypographyTextTransform' => 'button_typography_text_transform',
			'buttonTypographyFontStyle' => 'button_typography_font_style',
			'buttonTypographyTextDecoration' => 'button_typography_text_decoration',
			'buttonTypographyLineHeight' => 'button_typography_line_height',
			'buttonTypographyLetterSpacing' => 'button_typography_letter_spacing',
			'buttonTypographyWordSpacing' => 'button_typography_word_spacing',
			'buttonColor' => 'button_color',
			'buttonBoxShadow' => 'button_box_shadow',
			'buttonHoverBackground' => 'button_hover_background',
			'buttonHoverColor' => 'button_hover_color',
			'buttonHoverBoxShadow' => 'button_hover_box_shadow',
			'buttonHoverBorderColor' => 'button_hover_border_color',
			'containerClass' => 'container_class',
			'courseCardClass' => 'course_card_class',
			'gridGap' => 'grid_gap',
			'cardBgColor' => 'card_bg_color',
			'cardShadow' => 'card_shadow',
			'titleFontSize' => 'title_font_size',
			'priceFontSize' => 'price_font_size',
			'buttonBgColor' => 'button_bg_color',
			'buttonTextColor' => 'button_text_color',
			'containerPadding' => 'container_padding',
			'containerMargin' => 'container_margin',
			'cardMargin' => 'card_margin',
			'align' => 'align',
			'type' => 'type',
		);

		$shortcode_atts = array();
		foreach ( $map as $js_key => $php_key ) {
			if ( isset( $attributes[ $js_key ] ) ) {
				$shortcode_atts[ $php_key ] = $attributes[ $js_key ];
			}
		}
		
		// Ensure essential defaults for carousel layouts
		if ( ! isset( $shortcode_atts['columns'] ) || empty( $shortcode_atts['columns'] ) ) {
			$shortcode_atts['columns'] = 4;
		}
		
		// Ensure layout and layout_style are set
		if ( ! isset( $shortcode_atts['layout'] ) ) {
			$shortcode_atts['layout'] = 'grid';
		}
		
		if ( ! isset( $shortcode_atts['layout_style'] ) ) {
			$shortcode_atts['layout_style'] = 'grid-style1';
		}
		
		return $shortcode_atts;
	}

	public function render_block( $attributes, $content = '' ) {
		// Always enqueue necessary CSS for course list blocks
		wp_enqueue_style( 'omlms-frontend' );
		wp_enqueue_style( 'omlms-general' );
		
		// Check if layout style is grid-style3 or grid-style4 and enqueue slick.js
		$layout_style = isset( $attributes['layoutStyle'] ) ? $attributes['layoutStyle'] : 'grid-style1';
		$layout = isset( $attributes['layout'] ) ? $attributes['layout'] : 'grid';
		
		if ( 'grid' === $layout && ( 'grid-style3' === $layout_style || 'grid-style4' === $layout_style ) ) {
			wp_enqueue_script( 'omlms-slick' );
			wp_enqueue_script( 'omlms-frontend' );
			
			// Check if we're in admin/editor context and add specific initialization
			if ( is_admin() || (defined('REST_REQUEST') && REST_REQUEST) || wp_is_json_request() ) {
				// Add inline script for Gutenberg editor slick initialization
				$columns = isset( $attributes['columns'] ) ? (int)$attributes['columns'] : 4;
				$inline_script = "
				jQuery(document).ready(function($) {
					function initSlickCarousel() {
						if (typeof $.fn.slick !== 'undefined') {
							$('.creator-lms-course-cards-carousel').each(function(){
								if (!$(this).hasClass('slick-initialized')) {
									let colPerRow = $(this).data('col') || {$columns};
									$(this).slick({
										infinite: false,
										slidesToShow: colPerRow,
										slidesToScroll: 1,
										prevArrow: '<button class=\"slick-prev\" aria-label=\"Previous\" type=\"button\"><svg width=\"9\" height=\"18\" fill=\"none\" viewBox=\"0 0 9 18\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#A1A1AA\" d=\"M1.655 6.526L7.01 1.171a1.167 1.167 0 111.645 1.657L3.288 8.171a1.167 1.167 0 000 1.657l5.367 5.343a1.167 1.167 0 11-1.645 1.657l-5.355-5.355a3.5 3.5 0 010-4.947z\"/></svg></button>',
										nextArrow: '<button class=\"slick-next\" aria-label=\"Next\" type=\"button\"><svg width=\"9\" height=\"18\" fill=\"none\" viewBox=\"0 0 9 18\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#A1A1AA\" d=\"M7.345 6.526L1.99 1.171A1.167 1.167 0 10.345 2.828l5.367 5.343a1.167 1.167 0 010 1.657L.345 15.171a1.167 1.167 0 101.645 1.657l5.355-5.355a3.5 3.5 0 000-4.947z\"/></svg></button>',
										responsive: [
											{
												breakpoint: 1200,
												settings: {
													slidesToShow: colPerRow < 3 ? colPerRow : 3,
												}
											},
											{
												breakpoint: 768,
												settings: {
													slidesToShow: colPerRow < 2 ? colPerRow : 2,
												}
											},
											{
												breakpoint: 576,
												settings: {
													slidesToShow: 1,
												}
											}
										]
									}).addClass('creator-lms-initialized').css('display', 'block');
								}
							});
						} else {
							setTimeout(initSlickCarousel, 100);
						}
					}
					
					initSlickCarousel();
					
					if (window.wp && window.wp.data) {
						let timeoutId;
						window.wp.data.subscribe(function() {
							clearTimeout(timeoutId);
							timeoutId = setTimeout(initSlickCarousel, 500);
						});
					}
					
					var observer = new MutationObserver(function(mutations) {
						mutations.forEach(function(mutation) {
							if (mutation.type === 'childList') {
								var addedNodes = $(mutation.addedNodes);
								if (addedNodes.find('.creator-lms-course-cards-carousel').length || addedNodes.hasClass('creator-lms-course-cards-carousel')) {
									setTimeout(initSlickCarousel, 300);
								}
							}
						});
					});
					
					observer.observe(document.body, {
						childList: true,
						subtree: true
					});
				});
				";
				wp_add_inline_script( 'omlms-slick', $inline_script );
			}
			
			// Add inline CSS for editor context to ensure carousel is visible
			$inline_css = "
			.creator-lms-course-cards-carousel {
				display: block !important;
				opacity: 1 !important;
			}
			.creator-lms-course-cards-carousel .slick-list {
				overflow: visible;
			}
			";
			wp_add_inline_style( 'omlms-frontend', $inline_css );
		}
		
		// Add body classes for proper styling
		add_filter( 'body_class', function( $classes ) {
			$classes[] = 'creator-lms-page';
			$classes[] = 'creator-lms-course-list-shortcode';
			return $classes;
		});
		
		$shortcode_atts = $this->convert_attributes_to_shortcode_attrs( $attributes );
		ob_start();
		ShortcodeCourseList::output( $shortcode_atts );
		return ob_get_clean();
	}
}
