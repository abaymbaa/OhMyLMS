/**
 * CreatorLMS Membership List Block
 *
 * @package CreatorLMS
 */

(function () {
  'use strict';

  var __ = wp.i18n.__;
  var createElement = wp.element.createElement;
  var registerBlockType = wp.blocks.registerBlockType;
  var InspectorControls = wp.blockEditor.InspectorControls;
  var PanelBody = wp.components.PanelBody;
  var TextControl = wp.components.TextControl;
  var ServerSideRender = wp.serverSideRender;
  var attributesData = {
    title: {
      type: 'string',
      default: ''
    },
    align: {
      type: 'string',
      default: 'full'
    }
  };
  registerBlockType('creator-lms/membership-list', {
    title: __('CreatorLMS Membership List', 'ohmylms'),
    description: __('Display membership plans on any page or post.', 'ohmylms'),
    icon: 'id',
    category: 'creator-lms',
    keywords: [__('membership', 'ohmylms'), __('plan', 'ohmylms'), __('creator-lms', 'ohmylms'), __('ohmylms', 'ohmylms')],
    supports: {
      align: true,
      html: false
    },
    attributes: attributesData,
    edit: function (props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      var inspectorControls = createElement(InspectorControls, {}, createElement(PanelBody, {
        title: __('Membership List Settings', 'ohmylms'),
        initialOpen: true
      }, createElement(TextControl, {
        label: __('Title', 'ohmylms'),
        help: __('Overrides the default "Select plan that works best for you." heading.', 'ohmylms'),
        value: attributes.title,
        onChange: function (value) {
          setAttributes({
            title: value
          });
        }
      })));
      var serverSideRender = createElement(ServerSideRender, {
        block: 'creator-lms/membership-list',
        attributes: attributes,
        httpMethod: 'POST'
      });
      return [inspectorControls, createElement('div', {
        className: 'wp-block-creator-lms-membership-list'
      }, serverSideRender)];
    },
    save: function () {
      return null;
    }
  });
})();
