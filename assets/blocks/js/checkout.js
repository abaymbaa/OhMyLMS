/**
 * OhMyLMS Checkout Block
 * 
 * @package OhMyLMS
 */

(function() {
	'use strict';

	var __ = wp.i18n.__;
	var createElement = wp.element.createElement;
	var registerBlockType = wp.blocks.registerBlockType;
	var InspectorControls = wp.blockEditor.InspectorControls;
	var PanelBody = wp.components.PanelBody;
	var TextControl = wp.components.TextControl;
	var SelectControl = wp.components.SelectControl;
	var ToggleControl = wp.components.ToggleControl;
	var ServerSideRender = wp.serverSideRender;
	var NumberControl = wp.components.__experimentalNumberControl || wp.components.NumberControl;
	var PanelColorSettings = wp.blockEditor.PanelColorSettings;
	var ColorPicker = wp.components.ColorPicker;


	var attributesData = {
			// Title styling
		titleColor: { type: 'string', default: '#000D25' },
		titleFontSize: { type: 'string', default: '22px' },
		titleFontWeight: { type: 'string', default: '600' },
		titleFontFamily: { type: 'string', default: '' },
		titleTextTransform: { type: 'string', default: 'none' },
		titleTextDecoration: { type: 'string', default: 'none' },
		titleLineHeight: { type: 'string', default: '1.3' },
		titleLetterSpacing: { type: 'string', default: '0' },
		
		// Input styling
		inputLabelColor: { type: 'string', default: '#000D25' },
		inputLabelFontSize: { type: 'string', default: '14px' },
		inputLabelFontWeight: { type: 'string', default: '500' },
		inputLabelFontFamily: { type: 'string', default: '' },
		inputFontSize: { type: 'string', default: '14px' },
		inputFontWeight: { type: 'string', default: '400' },
		inputColor: { type: 'string', default: '#000D25' },
		inputFontFamily: { type: 'string', default: '' },
		inputBackgroundColor: { type: 'string', default: '#FFF' },
		inputBorderColor: { type: 'string', default: '#EBEBEF' },
		inputBorderWidth: { type: 'string', default: '1px' },
		inputBorderStyle: { type: 'string', default: 'solid' },
		inputBorderRadius: { type: 'string', default: '10px' },

		
		// Button styling
		buttonBackgroundColor: { type: 'string', default: '' },
		buttonColor: { type: 'string', default: '' },
		buttonFontSize: { type: 'string', default: '' },
		buttonFontWeight: { type: 'string', default: '' },
		buttonFontFamily: { type: 'string', default: '' },
		buttonTextTransform: { type: 'string', default: '' },
		buttonTextDecoration: { type: 'string', default: '' },
		buttonLineHeight: { type: 'string', default: '' },
		buttonLetterSpacing: { type: 'string', default: '' },
		buttonPaddingTop: { type: 'string', default: '' },
		buttonPaddingRight: { type: 'string', default: '' },
		buttonPaddingBottom: { type: 'string', default: '' },
		buttonPaddingLeft: { type: 'string', default: '' },
		buttonMarginTop: { type: 'string', default: '' },
		buttonMarginRight: { type: 'string', default: '' },
		buttonMarginBottom: { type: 'string', default: '' },
		buttonMarginLeft: { type: 'string', default: '' },
		buttonBorderRadius: { type: 'string', default: '' },
		buttonBorderColor: { type: 'string', default: '' },
		buttonBorderWidth: { type: 'string', default: '' },
		buttonBorderStyle: { type: 'string', default: '' },
		buttonBoxShadow: { type: 'string', default: '' },
		
		// Button attributes with defaults
		buttonBackgroundColor: { type: 'string', default: '#6E42D3' },
		buttonColor: { type: 'string', default: '#FFF' },
		buttonFontSize: { type: 'string', default: '18px' },
		buttonFontWeight: { type: 'string', default: '700' },
		buttonFontFamily: { type: 'string', default: '' },
		buttonTextTransform: { type: 'string', default: 'none' },
		buttonTextDecoration: { type: 'string', default: 'none' },
		buttonLineHeight: { type: 'string', default: '1.2' },
		buttonLetterSpacing: { type: 'string', default: '0' },
		buttonPaddingTop: { type: 'string', default: '16px' },
		buttonPaddingRight: { type: 'string', default: '24px' },
		buttonPaddingBottom: { type: 'string', default: '16px' },
		buttonPaddingLeft: { type: 'string', default: '24px' },
		buttonMarginTop: { type: 'string', default: '0' },
		buttonMarginRight: { type: 'string', default: '0' },
		buttonMarginBottom: { type: 'string', default: '0' },
		buttonMarginLeft: { type: 'string', default: '0' },
		buttonBorderRadius: { type: 'string', default: '8px' },
		buttonBorderColor: { type: 'string', default: '#6E42D3' },
		buttonBorderWidth: { type: 'string', default: '1px' },
		buttonBorderStyle: { type: 'string', default: 'solid' },
		buttonBoxShadow: { type: 'string', default: 'none' },

		buttonHoverBackgroundColor: { type: 'string', default: 'transparent' },
		buttonHoverColor: { type: 'string', default: '#6E42D3' },
		buttonHoverBorderColor: { type: 'string', default: '#6E42D3' },
		buttonHoverBoxShadow: { type: 'string', default: 'none' },
		
		// Privacy text styling
		privacyTextColor: { type: 'string', default: '#000D25' },
        privacyTextFontSize: { type: 'string', default: '14px' },
        privacyTextFontWeight: { type: 'string', default: '400' },
        privacyTextFontFamily: { type: 'string', default: '' },
        privacyTextTransform: { type: 'string', default: 'none' },
        privacyTextDecoration: { type: 'string', default: 'none' },
        privacyTextLineHeight: { type: 'string', default: '1.3' },
        privacyTextLetterSpacing: { type: 'string', default: '0' },
		
		// Checkout box styling
		checkoutBoxBackgroundColor: { type: 'string', default: '' },
		checkoutBoxPaddingTop: { type: 'string', default: '' },
		checkoutBoxPaddingRight: { type: 'string', default: '' },
		checkoutBoxPaddingBottom: { type: 'string', default: '' },
		checkoutBoxPaddingLeft: { type: 'string', default: '' },
		checkoutBoxMarginTop: { type: 'string', default: '' },
		checkoutBoxMarginRight: { type: 'string', default: '' },
		checkoutBoxMarginBottom: { type: 'string', default: '' },
		checkoutBoxMarginLeft: { type: 'string', default: '' },
		checkoutBoxBorderColor: { type: 'string', default: '' },
		checkoutBoxBorderWidth: { type: 'string', default: '' },
		checkoutBoxBorderStyle: { type: 'string', default: '' },
		checkoutBoxBorderRadius: { type: 'string', default: '' },
		
		// Order summary styling
		orderSummaryBackgroundColor: { type: 'string', default: '' },
		orderSummaryPaddingTop: { type: 'string', default: '30px' },
		orderSummaryPaddingRight: { type: 'string', default: '0' },
		orderSummaryPaddingBottom: { type: 'string', default: '30px' },
		orderSummaryPaddingLeft: { type: 'string', default: '30px' },
		orderSummaryMarginTop: { type: 'string', default: '0' },
		orderSummaryMarginRight: { type: 'string', default: '0' },
		orderSummaryMarginBottom: { type: 'string', default: '0' },
		orderSummaryMarginLeft: { type: 'string', default: '0' },
		orderSummaryBorderColor: { type: 'string', default: '' },
		orderSummaryBorderWidth: { type: 'string', default: '' },
		orderSummaryBorderStyle: { type: 'string', default: '' },
		orderSummaryBorderRadius: { type: 'string', default: '' },

		// Checkout Card Styling
		checkoutBoxBackgroundColor: { type: 'string', default: '#fff' },
		checkoutBoxPaddingTop: { type: 'string', default: '30px' },
		checkoutBoxPaddingRight: { type: 'string', default: '50px' },
		checkoutBoxPaddingBottom: { type: 'string', default: '30px' },
		checkoutBoxPaddingLeft: { type: 'string', default: '0' },
		checkoutBoxMarginTop: { type: 'string', default: '0' },
		checkoutBoxMarginRight: { type: 'string', default: '0' },
		checkoutBoxMarginBottom: { type: 'string', default: '0' },
		checkoutBoxMarginLeft: { type: 'string', default: '0' },
		checkoutBoxBorderColor: { type: 'string', default: 'transparent' },
		checkoutBoxBorderWidth: { type: 'string', default: '0' },
		checkoutBoxBorderStyle: { type: 'string', default: 'solid' },
		checkoutBoxBorderRadius: { type: 'string', default: '0' },



		// Empty cart settings
		showEmptyCartMessage: { type: 'boolean', default: true },
		emptyCartTitle: { type: 'string', default: '' },
		emptyCartMessage: { type: 'string', default: '' },
		browseCoursesText: { type: 'string', default: '' },
	align: { type: 'string', default: 'full' },
	
	// Layout Type
	layoutType: { type: 'string', default: '' }	};
		registerBlockType('creator-lms/checkout', {
		title: __('OhMyLMS Checkout', 'ohmylms'),
		description: __('Display the OhMyLMS checkout form with customizable styling options.', 'ohmylms'),
		icon: 'cart',
		category: 'creator-lms',
		keywords: [
			__('checkout', 'ohmylms'),
			__('cart', 'ohmylms'),
			__('purchase', 'ohmylms'),
			__('creator-lms', 'ohmylms'),
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
			
			// Apply checkout block styles immediately when editor loads
			wp.element.useEffect(function() {
				var styleId = document.getElementById('creator-lms-checkout-block-style');
				if (!styleId) {
					styleId = document.createElement('style');
					styleId.id = 'creator-lms-checkout-block-style';
					styleId.innerHTML = `
						.creator-lms-page.creator-lms-checkout .creator-lms-input-label {
							top: calc(50% - 10px) !important;
							color: #7A8B9A !important;
							font-size: 12px !important;
						}
						.creator-lms-page.creator-lms-checkout .creator-lms-folded .creator-lms-input-label {
							top: calc(50% - 10px) !important;
							color: #7A8B9A !important;
							font-size: 12px !important;
						}
					`;
					document.head.appendChild(styleId);
				}
			}, []); // Empty dependency array means this runs once when component mounts
			
			// Validate and sanitize attributes to prevent invalid parameter errors
			var validatedAttributes = {};
			Object.keys(attributes).forEach(function(key) {
				var value = attributes[key];
				// Ensure all string attributes are actually strings
				if (typeof value === 'string' || typeof value === 'boolean') {
					validatedAttributes[key] = value;
				} else {
					// Reset invalid values to default
					if (typeof value === 'boolean') {
						validatedAttributes[key] = key === 'showEmptyCartMessage' ? true : false;
					} else {
						validatedAttributes[key] = '';
					}
				}
			});

			// Safe attribute setter that validates input
			var safeSetAttributes = function(newAttributes) {
				var safeAttributes = {};
				Object.keys(newAttributes).forEach(function(key) {
					var value = newAttributes[key];
					// Validate the value type
					if (key === 'showEmptyCartMessage') {
						safeAttributes[key] = Boolean(value);
					} else {
						safeAttributes[key] = String(value || '');
					}
				});
				setAttributes(safeAttributes);
			};
			
			// Title Typography options for select controls
			var fontWeightOptions = [
				{ label: __('Default', 'ohmylms'), value: '' },
				{ label: '100', value: '100' },
				{ label: '200', value: '200' },
				{ label: '300', value: '300' },
				{ label: '400', value: '400' },
				{ label: '500', value: '500' },
				{ label: '600', value: '600' },
				{ label: '700', value: '700' },
				{ label: '800', value: '800' },
				{ label: '900', value: '900' }
			];

			var textTransformOptions = [
				{ label: __('None', 'ohmylms'), value: 'none' },
				{ label: __('Capitalize', 'ohmylms'), value: 'capitalize' },
				{ label: __('Uppercase', 'ohmylms'), value: 'uppercase' },
				{ label: __('Lowercase', 'ohmylms'), value: 'lowercase' }
			];

			var textDecorationOptions = [
				{ label: __('None', 'ohmylms'), value: 'none' },
				{ label: __('Underline', 'ohmylms'), value: 'underline' },
				{ label: __('Line Through', 'ohmylms'), value: 'line-through' },
				{ label: __('Overline', 'ohmylms'), value: 'overline' }
			];

			var borderTypeOptions = [
				{ label: __('None', 'ohmylms'), value: 'none' },
				{ label: __('Solid', 'ohmylms'), value: 'solid' },
				{ label: __('Dashed', 'ohmylms'), value: 'dashed' },
				{ label: __('Dotted', 'ohmylms'), value: 'dotted' },
				{ label: __('Double', 'ohmylms'), value: 'double' },
			]
			
			var layoutTypeOptions = [
				{ label: __('Use Global Setting', 'ohmylms'), value: '' },
				{ label: __('Default Layout (with header/footer)', 'ohmylms'), value: 'default' },
				{ label: __('Canvas Layout (no header/footer)', 'ohmylms'), value: 'canvas' }
			];

			// Create inspector controls for styling
			var inspectorControls = createElement(InspectorControls, {},
				createElement('Style', {
					dangerouslySetInnerHTML: {
						__html: `
							.omlms-color-palate-wrapper {
								padding: 0 !important;
								border: none !important;
								margin-bottom: 10px;
							}
							.omlms-color-palate-wrapper .components-tools-panel-item {
								margin-top: 0 !important;
							}

							.creator-lms-page.creator-lms-checkout .creator-lms-input-label {
								top: calc(50% - 10px) !important;
								color: #7A8B9A !important;
								font-size: 12px !important;
							}
						`
					}
				}),
				
				// Layout Settings panel
				createElement(PanelBody, {
					title: __('Layout Settings', 'ohmylms'),
					initialOpen: true
				},
					createElement(SelectControl, {
						label: __('Select Layout Type', 'ohmylms'),
						value: validatedAttributes.layoutType || attributesData?.layoutType?.default || '',
						onChange: function(value) { safeSetAttributes({ layoutType: value }); },
						options: layoutTypeOptions,
						help: __('Choose the layout type for this checkout page. Use "Use Global Setting" to inherit from Settings → Layout → Checkout Page.', 'ohmylms')
					})
				),
				
				// Label styling panel
				createElement(PanelBody, {
					title: __('Label Styling', 'ohmylms'),
					initialOpen: false
				},
					createElement(PanelColorSettings, {
						colorSettings: [
							{
								value: validatedAttributes?.titleColor || attributesData?.titleColor?.default || '',
								onChange: function(value) { safeSetAttributes({ titleColor: value }); },
								label: __('Label Color', 'ohmylms'),
							},
						],
						className:"omlms-color-palate-wrapper"
					}),
					createElement(TextControl, {
						label: __('Font Size', 'ohmylms'),
						value: validatedAttributes?.titleFontSize || attributesData?.titleFontSize?.default || '',
						onChange: function(value) { safeSetAttributes({ titleFontSize: value }); },
					}),

					createElement(SelectControl, {
						label: __('Font Weight', 'ohmylms'),
						value: validatedAttributes.titleFontWeight || attributesData?.titleFontWeight?.default || '',
						onChange: function(value) { safeSetAttributes({ titleFontWeight: value }); },
						options: fontWeightOptions
					}),

					createElement(SelectControl, {
						label: __('Text Transform', 'ohmylms'),
						value: validatedAttributes.titleTextTransform || attributesData?.titleTextTransform?.default || '',
						onChange: function(value) { safeSetAttributes({ titleTextTransform: value }); },
						options: textTransformOptions
					}),
					createElement(SelectControl, {
						label: __('Text Decoration', 'ohmylms'),
						value: validatedAttributes.titleTextDecoration || attributesData?.titleTextDecoration?.default || '',
						onChange: function(value) { safeSetAttributes({ titleTextDecoration: value }); },
						options: textDecorationOptions
					}),
					createElement(NumberControl, {
						label: __('Line Height', 'ohmylms'),
						value: validatedAttributes.titleLineHeight || attributesData?.titleLineHeight?.default || '',
						onChange: function(value) { safeSetAttributes({ titleLineHeight: value }); },
						placeholder: __('e.g: 1.3', 'ohmylms')
					}),
					createElement(TextControl, {
						label: __('Letter Spacing', 'ohmylms'),
						value: validatedAttributes.titleLetterSpacing || attributesData?.titleLetterSpacing?.default || '',
						onChange: function(value) { safeSetAttributes({ titleLetterSpacing: value }); },
						placeholder: __('e.g: 0.5px', 'ohmylms')
					}),
				),

				// Input styling panel
				createElement(PanelBody, {
					title: __('Input Styling', 'ohmylms'),
					initialOpen: false
				},
					createElement(PanelColorSettings, {
						colorSettings: [
							{
								value: validatedAttributes.inputLabelColor || attributesData?.inputLabelColor?.default || '',
								onChange: function(value) { safeSetAttributes({ inputLabelColor: value }); },
								label: __('Input Label Color', 'ohmylms'),
							},
							{
								value: validatedAttributes.inputColor || attributesData?.inputColor?.default || '',
								onChange: function(value) { safeSetAttributes({ inputColor: value }); },
								label: __('Input Text Color', 'ohmylms'),
							},
							{
								value: validatedAttributes.inputBorderColor || attributesData?.inputBorderColor?.default || '',
								onChange: function(value) { safeSetAttributes({ inputBorderColor: value }); },
								label: __('Input Border Color', 'ohmylms'),
							},
							{
								value: validatedAttributes.inputBackgroundColor || attributesData?.inputBackgroundColor?.default || '',
								onChange: function(value) { safeSetAttributes({ inputBackgroundColor: value }); },
								label: __('Input Background Color', 'ohmylms'),
							},
						],
						className: "omlms-color-palate-wrapper"
					}),

					createElement(TextControl, {
						label: __('Input Label Font Size', 'ohmylms'),
						value: validatedAttributes.inputLabelFontSize || attributesData?.inputLabelFontSize?.default || '',
						onChange: function(value) { safeSetAttributes({ inputLabelFontSize: value }); },
						placeholder: __('e.g: 14px', 'ohmylms')
					}),

					createElement(SelectControl, {
						label: __('Input Label Font Weight', 'ohmylms'),
						value: validatedAttributes.inputLabelFontWeight || attributesData?.inputLabelFontWeight?.default || '',
						onChange: function(value) { safeSetAttributes({ inputLabelFontWeight: value }); },
						options: fontWeightOptions, // reuse the options you have for font weight
					}),

					createElement(TextControl, {
						label: __('Input Font Size', 'ohmylms'),
						value: validatedAttributes.inputFontSize || attributesData?.inputFontSize?.default || '',
						onChange: function(value) { safeSetAttributes({ inputFontSize: value }); },
						placeholder: __('e.g: 16px', 'ohmylms')
					}),

					createElement(SelectControl, {
						label: __('Input Font Weight', 'ohmylms'),
						value: validatedAttributes.inputFontWeight || attributesData?.inputFontWeight?.default || '',
						onChange: function(value) { safeSetAttributes({ inputFontWeight: value }); },
						options: fontWeightOptions,
					}),


					createElement(TextControl, {
						label: __('Input Border Width', 'ohmylms'),
						value: validatedAttributes.inputBorderWidth || attributesData?.inputBorderWidth?.default || '',
						onChange: function(value) { safeSetAttributes({ inputBorderWidth: value }); },
						placeholder: __('e.g: 1px', 'ohmylms')
					}),

					createElement(SelectControl, {
						label: __('Input Border Style', 'ohmylms'),
						value: validatedAttributes.inputBorderStyle || attributesData?.inputBorderStyle?.default || '',
						onChange: function(value) { safeSetAttributes({ inputBorderStyle: value }); },
						options: borderTypeOptions
					}),

					createElement(TextControl, {
						label: __('Input Border Radius', 'ohmylms'),
						value: validatedAttributes.inputBorderRadius || attributesData?.inputBorderRadius?.default || '',
						onChange: function(value) { safeSetAttributes({ inputBorderRadius: value }); },
						placeholder: __('e.g: 4px', 'ohmylms')
					}),
				),


				createElement(PanelBody, {
					title: __('Button Styling', 'ohmylms'),
					initialOpen: false
				},
					// Color settings
					createElement(PanelColorSettings, {
						colorSettings: [
							{
								value: validatedAttributes.buttonBackgroundColor || attributesData?.buttonBackgroundColor?.default || '',
								onChange: (value) => safeSetAttributes({ buttonBackgroundColor: value }),
								label: __('Button Background Color', 'ohmylms'),
							},
							{
								value: validatedAttributes.buttonColor || attributesData?.buttonColor?.default || '',
								onChange: (value) => safeSetAttributes({ buttonColor: value }),
								label: __('Button Text Color', 'ohmylms'),
							},
							{
								value: validatedAttributes.buttonBorderColor || attributesData?.buttonBorderColor?.default || '',
								onChange: (value) => safeSetAttributes({ buttonBorderColor: value }),
								label: __('Button Border Color', 'ohmylms'),
							},
							{
								value: validatedAttributes.buttonHoverBackgroundColor || attributesData?.buttonHoverBackgroundColor?.default || '',
								onChange: (value) => safeSetAttributes({ buttonHoverBackgroundColor: value }),
								label: __('Button Hover Background Color', 'ohmylms'),
							},
							{
								value: validatedAttributes.buttonHoverColor || attributesData?.buttonHoverColor?.default || '',
								onChange: (value) => safeSetAttributes({ buttonHoverColor: value }),
								label: __('Button Hover Text Color', 'ohmylms'),
							},
							{
								value: validatedAttributes.buttonHoverBorderColor || attributesData?.buttonHoverBorderColor?.default || '',
								onChange: (value) => safeSetAttributes({ buttonHoverBorderColor: value }),
								label: __('Button Hover Border Color', 'ohmylms'),
							},
						],
						className: "omlms-color-palate-wrapper"
					}),

					// Font Size
					createElement(TextControl, {
						label: __('Button Font Size', 'ohmylms'),
						value: validatedAttributes.buttonFontSize || attributesData?.buttonFontSize?.default || '',
						onChange: (value) => safeSetAttributes({ buttonFontSize: value }),
						placeholder: __('e.g: 18px', 'ohmylms'),
					}),

					// Font Weight
					createElement(SelectControl, {
						label: __('Button Font Weight', 'ohmylms'),
						value: validatedAttributes.buttonFontWeight || attributesData?.buttonFontWeight?.default || '',
						onChange: (value) => safeSetAttributes({ buttonFontWeight: value }),
						options: fontWeightOptions,
					}),

					// Text Transform
					createElement(SelectControl, {
						label: __('Button Text Transform', 'ohmylms'),
						value: validatedAttributes.buttonTextTransform || attributesData?.buttonTextTransform?.default || '',
						onChange: (value) => safeSetAttributes({ buttonTextTransform: value }),
						options: textTransformOptions,
					}),

					// Text Decoration
					createElement(SelectControl, {
						label: __('Button Text Decoration', 'ohmylms'),
						value: validatedAttributes.buttonTextDecoration || attributesData?.buttonTextDecoration?.default || '',
						onChange: (value) => safeSetAttributes({ buttonTextDecoration: value }),
						options: textDecorationOptions,
					}),

					// Line Height
					createElement(NumberControl, {
						label: __('Button Line Height', 'ohmylms'),
						value: validatedAttributes.buttonLineHeight || attributesData?.buttonLineHeight?.default || '',
						onChange: (value) => safeSetAttributes({ buttonLineHeight: value }),
						placeholder: __('e.g: 1.2', 'ohmylms'),
					}),

					// Letter Spacing
					createElement(TextControl, {
						label: __('Button Letter Spacing', 'ohmylms'),
						value: validatedAttributes.buttonLetterSpacing || attributesData?.buttonLetterSpacing?.default || '',
						onChange: (value) => safeSetAttributes({ buttonLetterSpacing: value }),
						placeholder: __('e.g: 0', 'ohmylms'),
					}),

					// Padding Top
					createElement(TextControl, {
						label: __('Button Padding Top', 'ohmylms'),
						value: validatedAttributes.buttonPaddingTop || attributesData?.buttonPaddingTop?.default || '',
						onChange: (value) => safeSetAttributes({ buttonPaddingTop: value }),
						placeholder: __('e.g: 16px', 'ohmylms'),
					}),

					// Padding Right
					createElement(TextControl, {
						label: __('Button Padding Right', 'ohmylms'),
						value: validatedAttributes.buttonPaddingRight || attributesData?.buttonPaddingRight?.default || '',
						onChange: (value) => safeSetAttributes({ buttonPaddingRight: value }),
						placeholder: __('e.g: 24px', 'ohmylms'),
					}),

					// Padding Bottom
					createElement(TextControl, {
						label: __('Button Padding Bottom', 'ohmylms'),
						value: validatedAttributes.buttonPaddingBottom || attributesData?.buttonPaddingBottom?.default || '',
						onChange: (value) => safeSetAttributes({ buttonPaddingBottom: value }),
						placeholder: __('e.g: 16px', 'ohmylms'),
					}),

					// Padding Left
					createElement(TextControl, {
						label: __('Button Padding Left', 'ohmylms'),
						value: validatedAttributes.buttonPaddingLeft || attributesData?.buttonPaddingLeft?.default || '',
						onChange: (value) => safeSetAttributes({ buttonPaddingLeft: value }),
						placeholder: __('e.g: 24px', 'ohmylms'),
					}),

					// Border Width
					createElement(TextControl, {
						label: __('Button Border Width', 'ohmylms'),
						value: validatedAttributes.buttonBorderWidth || attributesData?.buttonBorderWidth?.default || '',
						onChange: (value) => safeSetAttributes({ buttonBorderWidth: value }),
						placeholder: __('e.g: 1px', 'ohmylms'),
					}),

					// Border Style
					createElement(SelectControl, {
						label: __('Button Border Style', 'ohmylms'),
						value: validatedAttributes.buttonBorderStyle || attributesData?.buttonBorderStyle?.default || '',
						onChange: (value) => safeSetAttributes({ buttonBorderStyle: value }),
						options: borderTypeOptions,
					}),
				),

				createElement(PanelBody, {
					title: __('Order Summary Card', 'ohmylms'),
					initialOpen: false,
				},
					createElement(PanelColorSettings, {
						colorSettings: [
							{
								value: validatedAttributes.orderSummaryBackgroundColor || attributesData?.orderSummaryBackgroundColor?.default || '',
								onChange: (value) => safeSetAttributes({ orderSummaryBackgroundColor: value }),
								label: __('Background Color', 'ohmylms'),
							},
						],
						className: 'omlms-color-palate-wrapper',
					}),

					// Padding controls
					createElement(TextControl, {
						label: __('Padding Top', 'ohmylms'),
						value: validatedAttributes.orderSummaryPaddingTop || attributesData?.orderSummaryPaddingTop?.default || '',
						onChange: (value) => safeSetAttributes({ orderSummaryPaddingTop: value }),
						placeholder: __('e.g: 30px', 'ohmylms'),
					}),
					createElement(TextControl, {
						label: __('Padding Right', 'ohmylms'),
						value: validatedAttributes.orderSummaryPaddingRight || attributesData?.orderSummaryPaddingRight?.default || '',
						onChange: (value) => safeSetAttributes({ orderSummaryPaddingRight: value }),
						placeholder: __('e.g: 0', 'ohmylms'),
					}),
					createElement(TextControl, {
						label: __('Padding Bottom', 'ohmylms'),
						value: validatedAttributes.orderSummaryPaddingBottom || attributesData?.orderSummaryPaddingBottom?.default || '',
						onChange: (value) => safeSetAttributes({ orderSummaryPaddingBottom: value }),
						placeholder: __('e.g: 30px', 'ohmylms'),
					}),
					createElement(TextControl, {
						label: __('Padding Left', 'ohmylms'),
						value: validatedAttributes.orderSummaryPaddingLeft || attributesData?.orderSummaryPaddingLeft?.default || '',
						onChange: (value) => safeSetAttributes({ orderSummaryPaddingLeft: value }),
						placeholder: __('e.g: 30px', 'ohmylms'),
					}),

					// Margin controls
					createElement(TextControl, {
						label: __('Margin Top', 'ohmylms'),
						value: validatedAttributes.orderSummaryMarginTop || attributesData?.orderSummaryMarginTop?.default || '',
						onChange: (value) => safeSetAttributes({ orderSummaryMarginTop: value }),
						placeholder: __('e.g: 0', 'ohmylms'),
					}),
					createElement(TextControl, {
						label: __('Margin Right', 'ohmylms'),
						value: validatedAttributes.orderSummaryMarginRight || attributesData?.orderSummaryMarginRight?.default || '',
						onChange: (value) => safeSetAttributes({ orderSummaryMarginRight: value }),
						placeholder: __('e.g: 0', 'ohmylms'),
					}),
					createElement(TextControl, {
						label: __('Margin Bottom', 'ohmylms'),
						value: validatedAttributes.orderSummaryMarginBottom || attributesData?.orderSummaryMarginBottom?.default || '',
						onChange: (value) => safeSetAttributes({ orderSummaryMarginBottom: value }),
						placeholder: __('e.g: 0', 'ohmylms'),
					}),
					createElement(TextControl, {
						label: __('Margin Left', 'ohmylms'),
						value: validatedAttributes.orderSummaryMarginLeft || attributesData?.orderSummaryMarginLeft?.default || '',
						onChange: (value) => safeSetAttributes({ orderSummaryMarginLeft: value }),
						placeholder: __('e.g: 0', 'ohmylms'),
					}),
				),

				createElement(PanelBody, {
					title: __('Checkout Box Styling', 'ohmylms'),
					initialOpen: false,
				},
					createElement(PanelColorSettings, {
						colorSettings: [
							{
								value: validatedAttributes.checkoutBoxBackgroundColor || attributesData?.checkoutBoxBackgroundColor?.default || '',
								onChange: (value) => safeSetAttributes({ checkoutBoxBackgroundColor: value }),
								label: __('Background Color', 'ohmylms'),
							},
						],
						className: 'omlms-color-palate-wrapper',
					}),

					// Padding
					createElement(TextControl, {
						label: __('Padding Top', 'ohmylms'),
						value: validatedAttributes.checkoutBoxPaddingTop || attributesData?.checkoutBoxPaddingTop?.default || '',
						onChange: (value) => safeSetAttributes({ checkoutBoxPaddingTop: value }),
						placeholder: __('e.g: 30px', 'ohmylms'),
					}),
					createElement(TextControl, {
						label: __('Padding Right', 'ohmylms'),
						value: validatedAttributes.checkoutBoxPaddingRight || attributesData?.checkoutBoxPaddingRight?.default || '',
						onChange: (value) => safeSetAttributes({ checkoutBoxPaddingRight: value }),
						placeholder: __('e.g: 50px', 'ohmylms'),
					}),
					createElement(TextControl, {
						label: __('Padding Bottom', 'ohmylms'),
						value: validatedAttributes.checkoutBoxPaddingBottom || attributesData?.checkoutBoxPaddingBottom?.default || '',
						onChange: (value) => safeSetAttributes({ checkoutBoxPaddingBottom: value }),
						placeholder: __('e.g: 30px', 'ohmylms'),
					}),
					createElement(TextControl, {
						label: __('Padding Left', 'ohmylms'),
						value: validatedAttributes.checkoutBoxPaddingLeft || attributesData?.checkoutBoxPaddingLeft?.default || '',
						onChange: (value) => safeSetAttributes({ checkoutBoxPaddingLeft: value }),
						placeholder: __('e.g: 0', 'ohmylms'),
					}),

					// Margin
					createElement(TextControl, {
						label: __('Margin Top', 'ohmylms'),
						value: validatedAttributes.checkoutBoxMarginTop || attributesData?.checkoutBoxMarginTop?.default || '',
						onChange: (value) => safeSetAttributes({ checkoutBoxMarginTop: value }),
						placeholder: __('e.g: 0', 'ohmylms'),
					}),
					createElement(TextControl, {
						label: __('Margin Right', 'ohmylms'),
						value: validatedAttributes.checkoutBoxMarginRight || attributesData?.checkoutBoxMarginRight?.default || '',
						onChange: (value) => safeSetAttributes({ checkoutBoxMarginRight: value }),
						placeholder: __('e.g: 0', 'ohmylms'),
					}),
					createElement(TextControl, {
						label: __('Margin Bottom', 'ohmylms'),
						value: validatedAttributes.checkoutBoxMarginBottom || attributesData?.checkoutBoxMarginBottom?.default || '',
						onChange: (value) => safeSetAttributes({ checkoutBoxMarginBottom: value }),
						placeholder: __('e.g: 0', 'ohmylms'),
					}),
					createElement(TextControl, {
						label: __('Margin Left', 'ohmylms'),
						value: validatedAttributes.checkoutBoxMarginLeft || attributesData?.checkoutBoxMarginLeft?.default || '',
						onChange: (value) => safeSetAttributes({ checkoutBoxMarginLeft: value }),
						placeholder: __('e.g: 0', 'ohmylms'),
					}),

					// Border
					createElement(TextControl, {
						label: __('Border Width', 'ohmylms'),
						value: validatedAttributes.checkoutBoxBorderWidth || attributesData?.checkoutBoxBorderWidth?.default || '',
						onChange: (value) => safeSetAttributes({ checkoutBoxBorderWidth: value }),
						placeholder: __('e.g: 1px', 'ohmylms'),
					}),
					createElement(SelectControl, {
						label: __('Border Style', 'ohmylms'),
						value: validatedAttributes.checkoutBoxBorderStyle || attributesData?.checkoutBoxBorderStyle?.default || '',
						onChange: (value) => safeSetAttributes({ checkoutBoxBorderStyle: value }),
						options: borderTypeOptions,
					}),
					createElement(TextControl, {
						label: __('Border Radius', 'ohmylms'),
						value: validatedAttributes.checkoutBoxBorderRadius || attributesData?.checkoutBoxBorderRadius?.default || '',
						onChange: (value) => safeSetAttributes({ checkoutBoxBorderRadius: value }),
						placeholder: __('e.g: 8px', 'ohmylms'),
					}),
				),




				// Empty cart settings panel
				createElement(PanelBody, {
					title: __('Empty Cart Settings', 'ohmylms'),
					initialOpen: false
				},
					createElement(ToggleControl, {
						label: __('Show Empty Cart Message', 'ohmylms'),
						checked: Boolean(validatedAttributes.showEmptyCartMessage),
						onChange: function(value) { safeSetAttributes({ showEmptyCartMessage: value }); }
					}),
					validatedAttributes.showEmptyCartMessage && createElement(TextControl, {
						label: __('Empty Cart Title', 'ohmylms'),
						value: validatedAttributes.emptyCartTitle || '',
						onChange: function(value) { safeSetAttributes({ emptyCartTitle: value }); },
						placeholder: __('Your cart is empty', 'ohmylms')
					}),
					validatedAttributes.showEmptyCartMessage && createElement(TextControl, {
						label: __('Empty Cart Message', 'ohmylms'),
						value: validatedAttributes.emptyCartMessage || '',
						onChange: function(value) { safeSetAttributes({ emptyCartMessage: value }); },
						placeholder: __('Add some courses to your cart to proceed with checkout.', 'ohmylms')
					}),
					validatedAttributes.showEmptyCartMessage && createElement(TextControl, {
						label: __('Browse Courses Button Text', 'ohmylms'),
						value: validatedAttributes.browseCoursesText || '',
						onChange: function(value) { safeSetAttributes({ browseCoursesText: value }); },
						placeholder: __('Browse Courses', 'ohmylms')
					})
				),

				// Privacy Text Styling panel
				createElement(PanelBody, {
					title: __('Privacy Text Styling', 'ohmylms'),
					initialOpen: false
				},
					createElement(PanelColorSettings, {
						colorSettings: [
							{
								value: validatedAttributes.privacyTextColor || attributesData?.privacyTextColor?.default || '',
								onChange: (value) => safeSetAttributes({ privacyTextColor: value }),
								label: __('Privacy Text Color', 'ohmylms'),
							},
						],
						className: "omlms-color-palate-wrapper"
					}),
					createElement(TextControl, {
						label: __('Font Size', 'ohmylms'),
						value: validatedAttributes.privacyTextFontSize || attributesData?.privacyTextFontSize?.default || '',
						onChange: (value) => safeSetAttributes({ privacyTextFontSize: value }),
						placeholder: __('e.g: 14px', 'ohmylms'),
					}),
					createElement(SelectControl, {
						label: __('Font Weight', 'ohmylms'),
						value: validatedAttributes.privacyTextFontWeight || attributesData?.privacyTextFontWeight?.default || '',
						onChange: (value) => safeSetAttributes({ privacyTextFontWeight: value }),
						options: fontWeightOptions,
					}),
					createElement(SelectControl, {
						label: __('Text Transform', 'ohmylms'),
						value: validatedAttributes.privacyTextTransform || attributesData?.privacyTextTransform?.default || '',
						onChange: (value) => safeSetAttributes({ privacyTextTransform: value }),
						options: textTransformOptions,
					}),
					createElement(SelectControl, {
						label: __('Text Decoration', 'ohmylms'),
						value: validatedAttributes.privacyTextDecoration || attributesData?.privacyTextDecoration?.default || '',
						onChange: (value) => safeSetAttributes({ privacyTextDecoration: value }),
						options: textDecorationOptions,
					}),
					createElement(NumberControl, {
						label: __('Line Height', 'ohmylms'),
						value: validatedAttributes.privacyTextLineHeight || attributesData?.privacyTextLineHeight?.default || '',
						onChange: (value) => safeSetAttributes({ privacyTextLineHeight: value }),
						placeholder: __('e.g: 1.3', 'ohmylms')
					}),
					createElement(TextControl, {
						label: __('Letter Spacing', 'ohmylms'),
						value: validatedAttributes.privacyTextLetterSpacing || attributesData?.privacyTextLetterSpacing?.default || '',
						onChange: (value) => safeSetAttributes({ privacyTextLetterSpacing: value }),
						placeholder: __('e.g: 0.5px', 'ohmylms')
					}),
				)
			);

			// Use ServerSideRender to show the real checkout form in editor
			var serverSideRender = createElement(ServerSideRender, {
				block: 'creator-lms/checkout',
				attributes: validatedAttributes,
				httpMethod: 'POST'
			});

			return [
				inspectorControls,
				// The block's own editor-only <style> override (rendered server-side
				// in CheckoutBlock::render_block()) is scoped to `.wp-block-creator-lms-checkout`,
				// which WordPress only ever attaches via useBlockProps() - this block doesn't
				// use it, so without this wrapper that CSS never matches anything.
				createElement('div', { className: 'wp-block-creator-lms-checkout' }, serverSideRender)
			];
		},

		save: function() {
			// Return null as this is a dynamic block rendered on the server
			return null;
		}
	});

})();
