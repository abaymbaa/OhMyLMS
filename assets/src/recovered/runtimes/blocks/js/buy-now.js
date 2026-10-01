/**
 * OhMyLMS Buy Now Block (IIFE style)
 *
 * @package OhMyLMS
 */

(function () {
  'use strict';

  var __ = wp.i18n.__;
  var createElement = wp.element.createElement;
  var registerBlockType = wp.blocks.registerBlockType;
  var InspectorControls = wp.blockEditor.InspectorControls;
  var PanelBody = wp.components.PanelBody;
  var TextControl = wp.components.TextControl;
  var SelectControl = wp.components.SelectControl;
  var RangeControl = wp.components.RangeControl;
  var ColorPalette = wp.blockEditor.ColorPalette || wp.components.ColorPalette;
  var ServerSideRender = wp.serverSideRender;

  // Attributes for Buy Now block
  var attributesData = {
    courseId: {
      type: 'integer',
      default: 0
    },
    btnText: {
      type: 'string',
      default: __('Buy Now', 'ohmylms')
    },
    background: {
      type: 'string',
      default: '#0073aa'
    },
    color: {
      type: 'string',
      default: '#fff'
    },
    padding: {
      type: 'string',
      default: '12px 24px'
    },
    borderRadius: {
      type: 'string',
      default: '4px'
    },
    fontSize: {
      type: 'string',
      default: '16px'
    },
    textDecoration: {
      type: 'string',
      default: 'none'
    },
    lineHeight: {
      type: 'string',
      default: '1.5'
    },
    width: {
      type: 'string',
      default: 'auto'
    },
    maxWidth: {
      type: 'string',
      default: '100%'
    },
    minWidth: {
      type: 'string',
      default: '100px'
    },
    height: {
      type: 'string',
      default: 'auto'
    },
    className: {
      type: 'string',
      default: ''
    }
  };

  // Helper to fetch courses (AJAX)
  function fetchCourses(callback) {
    // Use WP REST API to fetch published courses
    var url = window.wpApiSettings && window.wpApiSettings.root ? window.wpApiSettings.root + 'wp/v2/ohmylms-course?status=publish&per_page=100&orderby=title&order=asc' : '/wp-json/wp/v2/ohmylms-course?status=publish&per_page=100&orderby=title&order=asc';
    fetch(url, {
      credentials: 'same-origin'
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      callback(data || []);
    }).catch(function () {
      callback([]);
    });
  }
  registerBlockType('ohmylms/buy-now', {
    title: __('OhMyLMS Buy Now Button', 'ohmylms'),
    icon: 'cart',
    category: 'ohmylms',
    attributes: attributesData,
    edit: function (props) {
      var attributes = {};
      Object.keys(attributesData).forEach(function (key) {
        var val = props.attributes[key];
        if (attributesData[key].type === 'integer' || attributesData[key].type === 'number') {
          attributes[key] = typeof val === 'number' ? val : Number(val) || attributesData[key].default;
        } else {
          attributes[key] = typeof val === 'undefined' ? attributesData[key].default : val;
        }
      });
      var setAttributes = props.setAttributes;

      // State for courses
      var [courses, setCourses] = wp.element.useState([]);
      wp.element.useEffect(function () {
        fetchCourses(setCourses);
      }, []);

      // Inspector Controls
      var inspectorControls = createElement(InspectorControls, {}, createElement(PanelBody, {
        title: __('Buy Now Settings', 'ohmylms'),
        initialOpen: true
      }, createElement(SelectControl, {
        label: __('Course', 'ohmylms'),
        value: attributes.courseId,
        options: [{
          label: __('Select a course', 'ohmylms'),
          value: 0
        }].concat((courses || []).map(function (course) {
          return {
            label: course.title && course.title.rendered ? course.title.rendered : course.title,
            value: course.id
          };
        })),
        onChange: function (val) {
          setAttributes({
            courseId: parseInt(val)
          });
        }
      }), createElement(TextControl, {
        label: __('Button Text', 'ohmylms'),
        value: attributes.btnText,
        onChange: function (val) {
          setAttributes({
            btnText: val
          });
        }
      }), createElement(TextControl, {
        label: __('Padding', 'ohmylms'),
        value: attributes.padding,
        onChange: function (val) {
          setAttributes({
            padding: val
          });
        }
      }), createElement(TextControl, {
        label: __('Border Radius', 'ohmylms'),
        value: attributes.borderRadius,
        onChange: function (val) {
          setAttributes({
            borderRadius: val
          });
        }
      }), createElement(TextControl, {
        label: __('Font Size', 'ohmylms'),
        value: attributes.fontSize,
        onChange: function (val) {
          setAttributes({
            fontSize: val
          });
        }
      }), createElement(TextControl, {
        label: __('Text Decoration', 'ohmylms'),
        value: attributes.textDecoration,
        onChange: function (val) {
          setAttributes({
            textDecoration: val
          });
        }
      }), createElement(TextControl, {
        label: __('Line Height', 'ohmylms'),
        value: attributes.lineHeight,
        onChange: function (val) {
          setAttributes({
            lineHeight: val
          });
        }
      }), createElement(TextControl, {
        label: __('Width', 'ohmylms'),
        value: attributes.width,
        onChange: function (val) {
          setAttributes({
            width: val
          });
        }
      }), createElement(TextControl, {
        label: __('Max Width', 'ohmylms'),
        value: attributes.maxWidth,
        onChange: function (val) {
          setAttributes({
            maxWidth: val
          });
        }
      }), createElement(TextControl, {
        label: __('Min Width', 'ohmylms'),
        value: attributes.minWidth,
        onChange: function (val) {
          setAttributes({
            minWidth: val
          });
        }
      }), createElement(TextControl, {
        label: __('Height', 'ohmylms'),
        value: attributes.height,
        onChange: function (val) {
          setAttributes({
            height: val
          });
        }
      }), createElement(TextControl, {
        label: __('Extra CSS Class', 'ohmylms'),
        value: attributes.className,
        onChange: function (val) {
          setAttributes({
            className: val
          });
        }
      }), createElement('p', {}, __('Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.background,
        onChange: function (val) {
          setAttributes({
            background: val
          });
        }
      }), createElement('p', {}, __('Text Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.color,
        onChange: function (val) {
          setAttributes({
            color: val
          });
        }
      })));

      // ServerSideRender preview
      var serverSideRender = createElement(ServerSideRender, {
        block: 'ohmylms/buy-now',
        attributes: attributes
      });
      return [inspectorControls, serverSideRender];
    },
    save: function () {
      return null;
    }
  });
})();
