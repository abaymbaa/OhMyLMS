/**
 * OhMyLMS Dashboard Block
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
		// Dashboard background
		dashboardBgColor: { type: 'string', default: '#F9FAFD' },
		// Course card button styling
		courseButtonTextColor: { type: 'string', default: '#FFFFFF' },
		courseButtonBgColor: { type: 'string', default: '#4361EE' },
		courseButtonFontSize: { type: 'number', default: 15 },
		courseButtonFontWeight: { type: 'number', default: 500 },
		courseButtonBorderRadius: { type: 'number', default: 10 },
		courseButtonHoverTextColor: { type: 'string', default: '#4361EE' },
		courseButtonHoverBgColor: { type: 'string', default: 'transparent' },
		// Card styling
		cardBgColor: { type: 'string', default: '#FFFFFF' },
		cardTextColor: { type: 'string', default: '#52525B' },
		cardTextFontSize: { type: 'number', default: 14 },
		cardTextFontWeight: { type: 'number', default: 400 },
		cardNumberColor: { type: 'string', default: '#1E1E1E' },
		cardNumberFontSize: { type: 'number', default: 30 },
		cardNumberFontWeight: { type: 'number', default: 700 },
		// Title styling
		titleColor: { type: 'string', default: '#1E1E1E' },
		titleFontSize: { type: 'number', default: 22 },
		titleFontWeight: { type: 'number', default: 700 }
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

	registerBlockType('ohmylms/dashboard', {
		title: __('OhMyLMS Dashboard', 'ohmylms'),
		description: __('Display the OhMyLMS student dashboard with customizable styling options.', 'ohmylms'),
		icon: 'dashboard',
		category: 'ohmylms',
		keywords: [
			__('dashboard', 'ohmylms'),
			__('student', 'ohmylms'),
			__('profile', 'ohmylms'),
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
			
			// Apply dashboard block styles immediately when editor loads
			wp.element.useEffect(function() {
				var styleId = document.getElementById('ohmylms-dashboard-block-style');
				if (!styleId) {
					styleId = document.createElement('style');
					styleId.id = 'ohmylms-dashboard-block-style';
					styleId.innerHTML = `
						.wp-block-ohmylms-dashboard .ohmylms-dashboard {
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
						help: __('Toggle to show or hide the dashboard header with navigation menu.', 'ohmylms'),
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
				// Dashboard Background Panel
				createElement(
					PanelBody,
					{
						title: __('Dashboard Background', 'ohmylms'),
						initialOpen: false
					},
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.dashboardBgColor,
						onChange: function(value) {
							setAttributes({ dashboardBgColor: value || '#F9FAFD' });
						}
					})
				),
				// Card Settings Panel
				createElement(
					PanelBody,
					{
						title: __('Card Settings', 'ohmylms'),
						initialOpen: false
					},
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.cardBgColor,
						onChange: function(value) {
							setAttributes({ cardBgColor: value || '#FFFFFF' });
						}
					}),
					createElement('h3', { style: { marginTop: '20px', marginBottom: '12px', fontSize: '13px', fontWeight: '600' } }, __('Card Number Styling', 'ohmylms')),
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Number Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.cardNumberColor,
						onChange: function(value) {
							setAttributes({ cardNumberColor: value || '#1E1E1E' });
						}
					}),
					createElement(RangeControl, {
						label: __('Number Font Size (px)', 'ohmylms'),
						value: attributes.cardNumberFontSize,
						onChange: function(value) {
							setAttributes({ cardNumberFontSize: value });
						},
						min: 16,
						max: 48,
						step: 1
					}),
					createElement(SelectControl, {
						label: __('Number Font Weight', 'ohmylms'),
						value: attributes.cardNumberFontWeight,
						options: fontWeightOptions,
						onChange: function(value) {
							setAttributes({ cardNumberFontWeight: parseInt(value) });
						}
					}),
					createElement('h3', { style: { marginTop: '20px', marginBottom: '12px', fontSize: '13px', fontWeight: '600' } }, __('Card Text Styling', 'ohmylms')),
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Text Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.cardTextColor,
						onChange: function(value) {
							setAttributes({ cardTextColor: value || '#52525B' });
						}
					}),
					createElement(RangeControl, {
						label: __('Text Font Size (px)', 'ohmylms'),
						value: attributes.cardTextFontSize,
						onChange: function(value) {
							setAttributes({ cardTextFontSize: value });
						},
						min: 10,
						max: 24,
						step: 1
					}),
					createElement(SelectControl, {
						label: __('Text Font Weight', 'ohmylms'),
						value: attributes.cardTextFontWeight,
						options: fontWeightOptions,
						onChange: function(value) {
							setAttributes({ cardTextFontWeight: parseInt(value) });
						}
					})
				),
				// Section Title Settings Panel
				createElement(
					PanelBody,
					{
						title: __('Section Title Settings', 'ohmylms'),
						initialOpen: false
					},
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Title Color', 'ohmylms')),
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
						max: 36,
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
				// Course Button Settings Panel
				createElement(
					PanelBody,
					{
						title: __('Course Card Button Settings', 'ohmylms'),
						initialOpen: false
					},
					createElement('h3', { style: { marginBottom: '12px', fontSize: '13px', fontWeight: '600' } }, __('Normal State', 'ohmylms')),
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Text Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.courseButtonTextColor,
						onChange: function(value) {
							setAttributes({ courseButtonTextColor: value || '#FFFFFF' });
						}
					}),
					createElement('p', { style: { marginBottom: '8px', marginTop: '16px', fontWeight: '600' } }, __('Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.courseButtonBgColor,
						onChange: function(value) {
							setAttributes({ courseButtonBgColor: value || '#4361EE' });
						}
					}),
					createElement(RangeControl, {
						label: __('Font Size (px)', 'ohmylms'),
						value: attributes.courseButtonFontSize,
						onChange: function(value) {
							setAttributes({ courseButtonFontSize: value });
						},
						min: 10,
						max: 24,
						step: 1
					}),
					createElement(SelectControl, {
						label: __('Font Weight', 'ohmylms'),
						value: attributes.courseButtonFontWeight,
						options: fontWeightOptions,
						onChange: function(value) {
							setAttributes({ courseButtonFontWeight: parseInt(value) });
						}
					}),
					createElement(RangeControl, {
						label: __('Border Radius (px)', 'ohmylms'),
						value: attributes.courseButtonBorderRadius,
						onChange: function(value) {
							setAttributes({ courseButtonBorderRadius: value });
						},
						min: 0,
						max: 50,
						step: 1
					}),
					createElement('hr', { style: { margin: '20px 0' } }),
					createElement('h3', { style: { marginBottom: '12px', fontSize: '13px', fontWeight: '600' } }, __('Hover State', 'ohmylms')),
					createElement('p', { style: { marginBottom: '8px', fontWeight: '600' } }, __('Hover Text Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.courseButtonHoverTextColor,
						onChange: function(value) {
							setAttributes({ courseButtonHoverTextColor: value || '#FFFFFF' });
						}
					}),
					createElement('p', { style: { marginBottom: '8px', marginTop: '16px', fontWeight: '600' } }, __('Hover Background Color', 'ohmylms')),
					createElement(ColorPalette, {
						value: attributes.courseButtonHoverBgColor,
						onChange: function(value) {
							setAttributes({ courseButtonHoverBgColor: value || '#3651D4' });
						}
					})
				)
			);

			// Use ServerSideRender to show the real dashboard in editor
			var serverSideRender = createElement(ServerSideRender, {
				block: 'ohmylms/dashboard',
				attributes: validatedAttributes,
				httpMethod: 'POST'
			});

			return createElement(
				Fragment,
				{},
				inspectorControls,
				// The block's own editor-only <style> override (rendered server-side
				// in DashboardBlock::render_block()) is scoped to `.wp-block-ohmylms-dashboard`,
				// which WordPress only ever attaches via useBlockProps() - this block doesn't
				// use it, so without this wrapper that CSS never matches anything.
				createElement('div', { className: 'wp-block-ohmylms-dashboard' }, serverSideRender)
			);
		},

		save: function() {
			// Return null as this is a dynamic block rendered on the server
			return null;
		}
	});

})();