/**
 * CreatorLMS Offer Button Block JS (IIFE style, global wp)
 *
 * @package CreatorLMS
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
    var ColorPalette = wp.blockEditor.ColorPalette || wp.components.ColorPalette;
    var ServerSideRender = wp.serverSideRender;

    var attributesData = {
        action:        { type: 'string', default: 'accept' },
        text:          { type: 'string', default: 'Accept Offer' },
        background:    { type: 'string', default: '#0073aa' },
        color:         { type: 'string', default: '#fff' },
        border:        { type: 'string', default: '' },
        padding:       { type: 'string', default: '12px 24px' },
        margin:        { type: 'string', default: '' },
        font_size:     { type: 'string', default: '16px' },
        font_weight:   { type: 'string', default: '' },
        border_radius: { type: 'string', default: '4px' },
        width:         { type: 'string', default: '' },
        height:        { type: 'string', default: '' },
        class:         { type: 'string', default: '' },
        id:            { type: 'string', default: '' },
        style:         { type: 'string', default: '' },
    };

    registerBlockType('creator-lms/offer-button', {
        title: __('Offer Button', 'ohmylms'),
        icon: 'button',
        category: 'creator-lms',
        attributes: attributesData,
        edit: function(props) {
            var attributes = props.attributes;
            var setAttributes = props.setAttributes;
            var inspectorControls = createElement(InspectorControls, {},
                createElement(PanelBody, { title: __('Offer Button Settings', 'ohmylms'), initialOpen: true },
                    createElement(SelectControl, {
                        label: __('Action', 'ohmylms'),
                        value: attributes.action,
                        options: [
                            { label: __('Accept Offer', 'ohmylms'), value: 'accept' },
                            { label: __('Decline Offer', 'ohmylms'), value: 'decline' }
                        ],
                        onChange: function(val) { setAttributes({ action: val }); }
                    }),
                    createElement(TextControl, {
                        label: __('Button Text', 'ohmylms'),
                        value: attributes.text,
                        onChange: function(val) { setAttributes({ text: val }); }
                    }),
                    createElement(TextControl, {
                        label: __('Background Color', 'ohmylms'),
                        value: attributes.background,
                        onChange: function(val) { setAttributes({ background: val }); },
                        placeholder: '#0073aa'
                    }),
                    createElement(TextControl, {
                        label: __('Text Color', 'ohmylms'),
                        value: attributes.color,
                        onChange: function(val) { setAttributes({ color: val }); },
                        placeholder: '#fff'
                    }),
                    createElement(TextControl, {
                        label: __('Border', 'ohmylms'),
                        value: attributes.border,
                        onChange: function(val) { setAttributes({ border: val }); }
                    }),
                    createElement(TextControl, {
                        label: __('Padding', 'ohmylms'),
                        value: attributes.padding,
                        onChange: function(val) { setAttributes({ padding: val }); },
                        placeholder: '12px 24px'
                    }),
                    createElement(TextControl, {
                        label: __('Margin', 'ohmylms'),
                        value: attributes.margin,
                        onChange: function(val) { setAttributes({ margin: val }); }
                    }),
                    createElement(TextControl, {
                        label: __('Font Size', 'ohmylms'),
                        value: attributes.font_size,
                        onChange: function(val) { setAttributes({ font_size: val }); },
                        placeholder: '16px'
                    }),
                    createElement(TextControl, {
                        label: __('Font Weight', 'ohmylms'),
                        value: attributes.font_weight,
                        onChange: function(val) { setAttributes({ font_weight: val }); }
                    }),
                    createElement(TextControl, {
                        label: __('Border Radius', 'ohmylms'),
                        value: attributes.border_radius,
                        onChange: function(val) { setAttributes({ border_radius: val }); },
                        placeholder: '4px'
                    }),
                    createElement(TextControl, {
                        label: __('Width', 'ohmylms'),
                        value: attributes.width,
                        onChange: function(val) { setAttributes({ width: val }); }
                    }),
                    createElement(TextControl, {
                        label: __('Height', 'ohmylms'),
                        value: attributes.height,
                        onChange: function(val) { setAttributes({ height: val }); }
                    }),
                    createElement(TextControl, {
                        label: __('Extra CSS Class', 'ohmylms'),
                        value: attributes.class,
                        onChange: function(val) { setAttributes({ class: val }); }
                    }),
                    createElement(TextControl, {
                        label: __('CSS ID', 'ohmylms'),
                        value: attributes.id,
                        onChange: function(val) { setAttributes({ id: val }); }
                    }),
                    createElement(TextControl, {
                        label: __('Inline CSS Styles', 'ohmylms'),
                        value: attributes.style,
                        onChange: function(val) { setAttributes({ style: val }); }
                    })
                )
            );
            var serverSideRender = createElement(ServerSideRender, {
                block: 'creator-lms/offer-button',
                attributes: attributes
            });
            return [inspectorControls, serverSideRender];
        },
        save: function() {
            return null;
        }
    });
})();
