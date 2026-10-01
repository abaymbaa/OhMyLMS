/**
 * OhMyLMS My Courses Block
 * 
 * @package OhMyLMS
 */

(function() {
	'use strict';

	var __ = wp.i18n.__;
	var createElement = wp.element.createElement;
	var Fragment = wp.element.Fragment;
	var registerBlockType = wp.blocks.registerBlockType;
	var ServerSideRender = wp.serverSideRender;
	var InspectorControls = wp.blockEditor.InspectorControls;
	var PanelBody = wp.components.PanelBody;
	var ColorPalette = wp.components.ColorPalette;
	var RangeControl = wp.components.RangeControl;
	var SelectControl = wp.components.SelectControl;
	var ToggleControl = wp.components.ToggleControl;
	var TextControl = wp.components.TextControl;

	var attributesData = {
		align: { type: 'string', default: 'full' },
		// Header visibility and configuration
		showHeader: { type: 'boolean', default: true },
		// Header styling
		headerBgColor: { type: 'string', default: '#000D2C' },
		// User menu styling
		userMenuColor: { type: 'string', default: '#000000' },
		userMenuBgColor: { type: 'string', default: '#FFFFFF' },
		userMenuFontSize: { type: 'number', default: 14 },
		userMenuFontWeight: { type: 'number', default: 400 },
		// User menu hover styling
		userMenuHoverColor: { type: 'string', default: '#000000' },
		userMenuHoverBgColor: { type: 'string', default: '#F5F5F5' },
		// User menu icon styling
		userMenuIconColor: { type: 'string', default: '#000000' },
		userMenuIconHoverColor: { type: 'string', default: '#4361EE' },
		// Section background color
		sectionBgColor: { type: 'string', default: '#F9FAFD' },
		// Wrapper styling
		wrapperBgColor: { type: 'string', default: '#FFFFFF' },
		wrapperPadding: { type: 'number', default: 30 },
		// Title typography
		titleColor: { type: 'string', default: '#1E1E1E' },
		titleFontSize: { type: 'number', default: 24 },
		titleFontWeight: { type: 'number', default: 600 },
		// Text typography
		textColor: { type: 'string', default: '#52525B' },
		textFontSize: { type: 'number', default: 14 },
		textFontWeight: { type: 'number', default: 400 },
		// Button styling
		buttonTextColor: { type: 'string', default: '#FFFFFF' },
		buttonBgColor: { type: 'string', default: '#6E42D3' },
		buttonFontSize: { type: 'number', default: 14 },
		buttonFontWeight: { type: 'number', default: 600 },
		buttonBorderWidth: { type: 'number', default: 0 },
		buttonBorderColor: { type: 'string', default: '#6E42D3' },
		buttonBorderRadius: { type: 'number', default: 6 },
		buttonPadding: { type: 'number', default: 12 },
		buttonHoverBgColor: { type: 'string', default: '#5a32c2' },
		buttonHoverTextColor: { type: 'string', default: '#FFFFFF' },
		// Course card styling
		cardBgColor: { type: 'string', default: '#FFFFFF' },
		cardPadding: { type: 'number', default: 20 },
		// Progress bar colors
		progressBarBgColor: { type: 'string', default: '#E5E7EB' },
		progressBarFillColor: { type: 'string', default: '#6E42D3' },
		// Tab styling
		tabNormalColor: { type: 'string', default: '#666666' },
		tabActiveColor: { type: 'string', default: '#6E42D3' },
		// No course data card styling
		noCourseCardBgColor: { type: 'string', default: '#F9FAFB' },
		noCourseCardPadding: { type: 'number', default: 40 }
	};

	// Font weight options
	var fontWeightOptions = [
		{ label: '100 - Thin', value: 100 },
		{ label: '200 - Extra Light', value: 200 },
		{ label: '300 - Light', value: 300 },
		{ label: '400 - Normal', value: 400 },
		{ label: '500 - Medium', value: 500 },
		{ label: '600 - Semi Bold', value: 600 },
		{ label: '700 - Bold', value: 700 },
		{ label: '800 - Extra Bold', value: 800 },
		{ label: '900 - Black', value: 900 }
	];

	registerBlockType('ohmylms/my-courses', {
		title: __('OhMyLMS My Courses', 'ohmylms'),
		description: __('Display the OhMyLMS student my courses page with course management functionality.', 'ohmylms'),
		icon: 'book',
		category: 'ohmylms',
		keywords: [
			__('my courses', 'ohmylms'),
			__('courses', 'ohmylms'),
			__('student', 'ohmylms'),
			__('enrolled', 'ohmylms'),
			__('ohmylms', 'ohmylms'),
			__('ohmylms', 'ohmylms')
		],
		supports: {
			align: true,
			html: false
		},
		attributes: attributesData,

		edit: function(props) {
			var attributes = props.attributes;
			var setAttributes = props.setAttributes;
			
			// Apply my courses block styles immediately when editor loads
			wp.element.useEffect(function() {
				var styleId = document.getElementById('ohmylms-my-courses-block-style');
				if (!styleId) {
					styleId = document.createElement('style');
					styleId.id = 'ohmylms-my-courses-block-style';
					styleId.innerHTML = `
						.wp-block-ohmylms-my-courses .ohmylms-dashboard {
							min-height: 400px;
						}
					`;
					document.head.appendChild(styleId);
				}
			}, []); // Empty dependency array means this runs once when component mounts
			
			// Validate and sanitize attributes to prevent invalid parameter errors
			var validatedAttributes = {};
			Object.keys(attributes).forEach(function(key) {
				var value = attributes[key];
				// Ensure all attributes are valid types
				if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
					validatedAttributes[key] = value;
				} else {
					// Reset invalid values to default
					validatedAttributes[key] = attributesData[key] ? attributesData[key].default : '';
				}
			});

			// Inspector Controls (Sidebar)
			var inspectorControls = createElement(
				InspectorControls,
				{},
				// Header Visibility Panel
				createElement(
					PanelBody,
					{
						title: __('Header Configuration', 'ohmylms'),
						initialOpen: true
					},
					createElement(ToggleControl, {
						label: __('Show Header', 'ohmylms'),
						help: __('Toggle to show or hide the my courses header with navigation menu.', 'ohmylms'),
						checked: attributes.showHeader,
						onChange: function(value) {
							setAttributes({ showHeader: value });
						}
					})
				),
				// Header Settings Panel
				attributes.showHeader && createElement(
					PanelBody,
					{
						title: __('Header Settings', 'ohmylms'),
						initialOpen: false
					},
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.headerBgColor,
						onChange: function(value) {
							setAttributes({ headerBgColor: value || '#000D2C' });
						}
					})
				),
				// User Menu Settings Panel
				attributes.showHeader && createElement(
					PanelBody,
					{
						title: __('User Menu Settings', 'ohmylms'),
						initialOpen: false
					},
					createElement('h3', { style: { marginBottom: '12px', fontSize: '13px', fontWeight: '600' } }, __('Normal State', 'ohmylms')),
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Text Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.userMenuColor,
						onChange: function(value) {
							setAttributes({ userMenuColor: value || '#000000' });
						}
					}),
					createElement('p', { style: { marginBottom: '8px', marginTop: '16px', fontWeight: '600' } }, __('Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.userMenuBgColor,
						onChange: function(value) {
							setAttributes({ userMenuBgColor: value || '#FFFFFF' });
						}
					}),
					createElement(RangeControl, {
						label: __('Font Size (px)', 'ohmylms'),
						value: attributes.userMenuFontSize,
						onChange: function(value) {
							setAttributes({ userMenuFontSize: value });
						},
						min: 10,
						max: 24,
						step: 1
					}),
					createElement(SelectControl, {
						label: __('Font Weight', 'ohmylms'),
						value: attributes.userMenuFontWeight,
						options: fontWeightOptions,
						onChange: function(value) {
							setAttributes({ userMenuFontWeight: parseInt(value) });
						}
					}),
					createElement('hr', { style: { margin: '20px 0' } }),
					createElement('h3', { style: { marginBottom: '12px', fontSize: '13px', fontWeight: '600' } }, __('Hover State', 'ohmylms')),
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Hover Text Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.userMenuHoverColor,
						onChange: function(value) {
							setAttributes({ userMenuHoverColor: value || '#000000' });
						}
					}),
					createElement('p', { style: { marginBottom: '8px', marginTop: '16px', fontWeight: '600' } }, __('Hover Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.userMenuHoverBgColor,
						onChange: function(value) {
							setAttributes({ userMenuHoverBgColor: value || '#F5F5F5' });
						}
					}),
					createElement('hr', { style: { margin: '20px 0' } }),
					createElement('h3', { style: { marginBottom: '12px', fontSize: '13px', fontWeight: '600' } }, __('Icon Colors', 'ohmylms')),
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Icon Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.userMenuIconColor,
						onChange: function(value) {
							setAttributes({ userMenuIconColor: value || '#000000' });
						}
					}),
					createElement('p', { style: { marginBottom: '8px', marginTop: '16px', fontWeight: '600' } }, __('Icon Hover Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.userMenuIconHoverColor,
						onChange: function(value) {
							setAttributes({ userMenuIconHoverColor: value || '#4361EE' });
						}
					})
				),
				// Section Background Panel
				createElement(
					PanelBody,
					{
						title: __('Section Background', 'ohmylms'),
						initialOpen: false
					},
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.sectionBgColor,
						onChange: function(value) {
							setAttributes({ sectionBgColor: value || '#F9FAFD' });
						}
					})
				),
				// Wrapper Settings Panel
				createElement(
					PanelBody,
					{
						title: __('Wrapper Settings', 'ohmylms'),
						initialOpen: false
					},
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.wrapperBgColor,
						onChange: function(value) {
							setAttributes({ wrapperBgColor: value || '#FFFFFF' });
						}
					}),
					createElement(RangeControl, {
						label: __('Inner Padding (px)', 'ohmylms'),
						value: attributes.wrapperPadding,
						onChange: function(value) {
							setAttributes({ wrapperPadding: value });
						},
						min: 0,
						max: 100,
						step: 5
					})
				),
				// Title Typography Panel
				createElement(
					PanelBody,
					{
						title: __('Title Typography', 'ohmylms'),
						initialOpen: false
					},
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Text Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.titleColor,
						onChange: function(value) {
							setAttributes({ titleColor: value || '#1E1E1E' });
						}
					}),
					createElement(RangeControl, {
						label: __('Font Size (px)', 'ohmylms'),
						value: attributes.titleFontSize,
						onChange: function(value) {
							setAttributes({ titleFontSize: value });
						},
						min: 14,
						max: 48,
						step: 1
					}),
					createElement(SelectControl, {
						label: __('Font Weight', 'ohmylms'),
						value: attributes.titleFontWeight,
						options: fontWeightOptions,
						onChange: function(value) {
							setAttributes({ titleFontWeight: parseInt(value) });
						}
					})
				),
				// Text Typography Panel
				createElement(
					PanelBody,
					{
						title: __('Text Typography', 'ohmylms'),
						initialOpen: false
					},
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Text Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.textColor,
						onChange: function(value) {
							setAttributes({ textColor: value || '#52525B' });
						}
					}),
					createElement(RangeControl, {
						label: __('Font Size (px)', 'ohmylms'),
						value: attributes.textFontSize,
						onChange: function(value) {
							setAttributes({ textFontSize: value });
						},
						min: 10,
						max: 24,
						step: 1
					}),
					createElement(SelectControl, {
						label: __('Font Weight', 'ohmylms'),
						value: attributes.textFontWeight,
						options: fontWeightOptions,
						onChange: function(value) {
							setAttributes({ textFontWeight: parseInt(value) });
						}
					})
				),
				// Button Configuration Panel
				createElement(
					PanelBody,
					{
						title: __('Button Configuration', 'ohmylms'),
						initialOpen: false
					},
					createElement('h3', { style: { marginBottom: '12px', fontSize: '13px', fontWeight: '600' } }, __('Normal State', 'ohmylms')),
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Text Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.buttonTextColor,
						onChange: function(value) {
							setAttributes({ buttonTextColor: value || '#FFFFFF' });
						}
					}),
					createElement('p', { style: { marginBottom: '8px', marginTop: '16px', fontWeight: '600' } }, __('Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.buttonBgColor,
						onChange: function(value) {
							setAttributes({ buttonBgColor: value || '#6E42D3' });
						}
					}),
					createElement(RangeControl, {
						label: __('Font Size (px)', 'ohmylms'),
						value: attributes.buttonFontSize,
						onChange: function(value) {
							setAttributes({ buttonFontSize: value });
						},
						min: 10,
						max: 24,
						step: 1
					}),
					createElement(SelectControl, {
						label: __('Font Weight', 'ohmylms'),
						value: attributes.buttonFontWeight,
						options: fontWeightOptions,
						onChange: function(value) {
							setAttributes({ buttonFontWeight: parseInt(value) });
						}
					}),
					createElement(RangeControl, {
						label: __('Padding (px)', 'ohmylms'),
						value: attributes.buttonPadding,
						onChange: function(value) {
							setAttributes({ buttonPadding: value });
						},
						min: 0,
						max: 30,
						step: 1
					}),
					createElement('h3', { style: { marginTop: '20px', marginBottom: '12px', fontSize: '13px', fontWeight: '600' } }, __('Border', 'ohmylms')),
					createElement(RangeControl, {
						label: __('Border Width (px)', 'ohmylms'),
						value: attributes.buttonBorderWidth,
						onChange: function(value) {
							setAttributes({ buttonBorderWidth: value });
						},
						min: 0,
						max: 10,
						step: 1
					}),
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Border Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.buttonBorderColor,
						onChange: function(value) {
							setAttributes({ buttonBorderColor: value || '#6E42D3' });
						}
					}),
					createElement(RangeControl, {
						label: __('Border Radius (px)', 'ohmylms'),
						value: attributes.buttonBorderRadius,
						onChange: function(value) {
							setAttributes({ buttonBorderRadius: value });
						},
						min: 0,
						max: 50,
						step: 1
					}),
					createElement('h3', { style: { marginTop: '20px', marginBottom: '12px', fontSize: '13px', fontWeight: '600' } }, __('Hover & Active State', 'ohmylms')),
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Hover Text Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.buttonHoverTextColor,
						onChange: function(value) {
							setAttributes({ buttonHoverTextColor: value || '#FFFFFF' });
						}
					}),
					createElement('p', { style: { marginBottom: '8px', marginTop: '16px', fontWeight: '600' } }, __('Hover Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.buttonHoverBgColor,
						onChange: function(value) {
							setAttributes({ buttonHoverBgColor: value || '#5a32c2' });
						}
					})
				),
				// Course Card Settings Panel
				createElement(
					PanelBody,
					{
						title: __('Course Card Settings', 'ohmylms'),
						initialOpen: false
					},
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.cardBgColor,
						onChange: function(value) {
							setAttributes({ cardBgColor: value || '#FFFFFF' });
						}
					}),
					createElement(RangeControl, {
						label: __('Padding (px)', 'ohmylms'),
						value: attributes.cardPadding,
						onChange: function(value) {
							setAttributes({ cardPadding: value });
						},
						min: 0,
						max: 50,
						step: 5
					})
				),
				// Progress Bar Settings Panel
				createElement(
					PanelBody,
					{
						title: __('Progress Bar Colors', 'ohmylms'),
						initialOpen: false
					},
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.progressBarBgColor,
						onChange: function(value) {
							setAttributes({ progressBarBgColor: value || '#E5E7EB' });
						}
					}),
					createElement('p', { style: { marginBottom: '8px', marginTop: '16px', fontWeight: '600' } }, __('Fill Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.progressBarFillColor,
						onChange: function(value) {
							setAttributes({ progressBarFillColor: value || '#6E42D3' });
						}
					})
				),
				// Tab Settings Panel
				createElement(
					PanelBody,
					{
						title: __('Tab Colors', 'ohmylms'),
						initialOpen: false
					},
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Normal State Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.tabNormalColor,
						onChange: function(value) {
							setAttributes({ tabNormalColor: value || '#666666' });
						}
					}),
					createElement('p', { style: { marginBottom: '8px', marginTop: '16px', fontWeight: '600' } }, __('Active State Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.tabActiveColor,
						onChange: function(value) {
							setAttributes({ tabActiveColor: value || '#6E42D3' });
						}
					})
				),
				// No Course Data Card Settings Panel
				createElement(
					PanelBody,
					{
						title: __('No Course Data Card', 'ohmylms'),
						initialOpen: false
					},
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.noCourseCardBgColor,
						onChange: function(value) {
							setAttributes({ noCourseCardBgColor: value || '#F9FAFB' });
						}
					}),
					createElement(RangeControl, {
						label: __('Inner Padding (px)', 'ohmylms'),
						value: attributes.noCourseCardPadding,
						onChange: function(value) {
							setAttributes({ noCourseCardPadding: value });
						},
						min: 0,
						max: 100,
						step: 5
					})
				)
			);

			// Use ServerSideRender to show the real my courses in editor
			var serverSideRender = createElement(ServerSideRender, {
				block: 'ohmylms/my-courses',
				attributes: validatedAttributes,
				httpMethod: 'POST'
			});

			return createElement(
				Fragment,
				{},
				inspectorControls,
				// The block's own editor-only <style> override (rendered server-side
				// in MyCoursesBlock::render_block()) is scoped to `.wp-block-ohmylms-my-courses`,
				// which WordPress only ever attaches via useBlockProps() - this block doesn't
				// use it, so without this wrapper that CSS never matches anything.
				createElement('div', { className: 'wp-block-ohmylms-my-courses' }, serverSideRender)
			);
		},

		save: function() {
			// Return null as this is a dynamic block rendered on the server
			return null;
		}
	});

})();
