/**
 * OhMyLMS Profile Block
 * 
 * @package OhMyLMS
 */

(function () {
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
    align: {
      type: 'string',
      default: 'full'
    },
    // Header visibility and configuration
    showHeader: {
      type: 'boolean',
      default: true
    },
    // Header styling
    headerBgColor: {
      type: 'string',
      default: '#000D2C'
    },
    // User menu styling
    userMenuColor: {
      type: 'string',
      default: '#000000'
    },
    userMenuBgColor: {
      type: 'string',
      default: '#FFFFFF'
    },
    userMenuFontSize: {
      type: 'number',
      default: 14
    },
    userMenuFontWeight: {
      type: 'number',
      default: 400
    },
    // User menu hover styling
    userMenuHoverColor: {
      type: 'string',
      default: '#000000'
    },
    userMenuHoverBgColor: {
      type: 'string',
      default: '#F5F5F5'
    },
    // User menu icon styling
    userMenuIconColor: {
      type: 'string',
      default: '#000000'
    },
    userMenuIconHoverColor: {
      type: 'string',
      default: '#4361EE'
    },
    // Section background
    sectionBgColor: {
      type: 'string',
      default: '#F9FAFD'
    },
    // Profile wrapper styling
    wrapperBorder: {
      type: 'string',
      default: '#EBECEF'
    },
    wrapperBgColor: {
      type: 'string',
      default: '#F8F8F8'
    },
    wrapperShadow: {
      type: 'string',
      default: '0px 2px 8px 0px #ECECEC'
    },
    // Sidebar items styling
    sidebarItemColor: {
      type: 'string',
      default: '#1E1E1E'
    },
    sidebarItemFontSize: {
      type: 'number',
      default: 14
    },
    sidebarItemFontWeight: {
      type: 'number',
      default: 400
    },
    sidebarItemBgColor: {
      type: 'string',
      default: 'transparent'
    },
    sidebarItemActiveColor: {
      type: 'string',
      default: '#4361EE'
    },
    sidebarItemActiveFontSize: {
      type: 'number',
      default: 14
    },
    sidebarItemActiveFontWeight: {
      type: 'number',
      default: 400
    },
    sidebarItemActiveBgColor: {
      type: 'string',
      default: '#FFFFFF'
    },
    // Sidebar content styling
    sidebarContentBgColor: {
      type: 'string',
      default: '#FFFFFF'
    },
    sidebarContentShadow: {
      type: 'string',
      default: '0px 1px 2px 0px #DBDDE1'
    },
    sidebarContentPadding: {
      type: 'number',
      default: 40
    },
    sidebarContentTitleColor: {
      type: 'string',
      default: '#1E1E1E'
    },
    sidebarContentTitleFontSize: {
      type: 'number',
      default: 24
    },
    sidebarContentTitleFontWeight: {
      type: 'number',
      default: 600
    },
    // Profile info styling
    profileNameColor: {
      type: 'string',
      default: '#1E1E1E'
    },
    profileNameFontSize: {
      type: 'number',
      default: 20
    },
    profileNameFontWeight: {
      type: 'number',
      default: 700
    },
    profileBioColor: {
      type: 'string',
      default: '#52525B'
    },
    profileBioFontSize: {
      type: 'number',
      default: 15
    },
    profileBioFontWeight: {
      type: 'number',
      default: 400
    },
    // Profile edit button styling
    profileEditColor: {
      type: 'string',
      default: '#1E1E1E'
    },
    profileEditBgColor: {
      type: 'string',
      default: '#FFFFFF'
    },
    profileEditBorder: {
      type: 'string',
      default: '#EBEBEF'
    },
    profileEditFontSize: {
      type: 'number',
      default: 14
    },
    profileEditFontWeight: {
      type: 'number',
      default: 500
    },
    profileEditHoverColor: {
      type: 'string',
      default: '#1E1E1E'
    },
    profileEditHoverBgColor: {
      type: 'string',
      default: '#f6f6f6'
    },
    // Basic info section styling
    basicInfoBgColor: {
      type: 'string',
      default: '#FFFFFF'
    },
    basicInfoShadow: {
      type: 'string',
      default: '0px 1px 4px 0px #D3D6DD'
    },
    basicInfoPadding: {
      type: 'number',
      default: 21
    },
    basicInfoTitleColor: {
      type: 'string',
      default: '#1E1E1E'
    },
    basicInfoTitleFontSize: {
      type: 'number',
      default: 18
    },
    basicInfoTitleFontWeight: {
      type: 'number',
      default: 600
    },
    // Input styling
    inputBgColor: {
      type: 'string',
      default: '#FFFFFF'
    },
    inputBorder: {
      type: 'string',
      default: '#c8d2e980'
    },
    inputTextColor: {
      type: 'string',
      default: '#52525B'
    },
    inputPlaceholderColor: {
      type: 'string',
      default: '#7A8B9A'
    },
    inputFontSize: {
      type: 'number',
      default: 14
    },
    inputPadding: {
      type: 'number',
      default: 13
    },
    inputBorderRadius: {
      type: 'number',
      default: 8
    },
    // Label styling
    labelColor: {
      type: 'string',
      default: '#1E1E1E'
    },
    labelFontSize: {
      type: 'number',
      default: 14
    },
    labelFontWeight: {
      type: 'number',
      default: 500
    },
    // Button styling
    buttonBgColor: {
      type: 'string',
      default: '#4361EE'
    },
    buttonTextColor: {
      type: 'string',
      default: '#FFFFFF'
    },
    buttonFontSize: {
      type: 'number',
      default: 15
    },
    buttonFontWeight: {
      type: 'number',
      default: 500
    },
    buttonBorderRadius: {
      type: 'number',
      default: 8
    },
    buttonHoverBgColor: {
      type: 'string',
      default: 'transparent'
    },
    buttonHoverTextColor: {
      type: 'string',
      default: '#4361EE'
    },
    buttonHoverBorder: {
      type: 'string',
      default: '#4361EE'
    }
  };

  // Font weight options
  var fontWeightOptions = [{
    label: '100 - Thin',
    value: 100
  }, {
    label: '200 - Extra Light',
    value: 200
  }, {
    label: '300 - Light',
    value: 300
  }, {
    label: '400 - Normal',
    value: 400
  }, {
    label: '500 - Medium',
    value: 500
  }, {
    label: '600 - Semi Bold',
    value: 600
  }, {
    label: '700 - Bold',
    value: 700
  }, {
    label: '800 - Extra Bold',
    value: 800
  }, {
    label: '900 - Black',
    value: 900
  }];
  registerBlockType('ohmylms/profile', {
    title: __('OhMyLMS Profile', 'ohmylms'),
    description: __('Display the OhMyLMS student profile page with customizable styling options.', 'ohmylms'),
    icon: 'admin-users',
    category: 'ohmylms',
    keywords: [__('profile', 'ohmylms'), __('student', 'ohmylms'), __('account', 'ohmylms'), __('my profile', 'ohmylms'), __('ohmylms', 'ohmylms'), __('ohmylms', 'ohmylms')],
    supports: {
      align: true,
      html: false
    },
    attributes: attributesData,
    edit: function (props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;

      // Apply profile block styles immediately when editor loads
      wp.element.useEffect(function () {
        var styleId = document.getElementById('ohmylms-profile-block-style');
        if (!styleId) {
          styleId = document.createElement('style');
          styleId.id = 'ohmylms-profile-block-style';
          styleId.innerHTML = '.wp-block-ohmylms-profile .ohmylms-student-profile { min-height: 400px; }';
          document.head.appendChild(styleId);
        }
      }, []); // Empty dependency array means this runs once when component mounts

      // Validate and sanitize attributes to prevent invalid parameter errors
      var validatedAttributes = {};
      Object.keys(attributes).forEach(function (key) {
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
      var inspectorControls = createElement(InspectorControls, {},
      // Header Visibility Panel
      createElement(PanelBody, {
        title: __('Header Configuration', 'ohmylms'),
        initialOpen: true
      }, createElement(ToggleControl, {
        label: __('Show Header', 'ohmylms'),
        help: __('Toggle to show or hide the profile header with navigation menu.', 'ohmylms'),
        checked: attributes.showHeader,
        onChange: function (value) {
          setAttributes({
            showHeader: value
          });
        }
      })),
      // Header Settings Panel
      attributes.showHeader && createElement(PanelBody, {
        title: __('Header Settings', 'ohmylms'),
        initialOpen: false
      }, createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.headerBgColor,
        onChange: function (value) {
          setAttributes({
            headerBgColor: value || '#000D2C'
          });
        }
      })),
      // User Menu Settings Panel
      attributes.showHeader && createElement(PanelBody, {
        title: __('User Menu Settings', 'ohmylms'),
        initialOpen: false
      }, createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Normal State', 'ohmylms')), createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Text Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.userMenuColor,
        onChange: function (value) {
          setAttributes({
            userMenuColor: value || '#000000'
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.userMenuBgColor,
        onChange: function (value) {
          setAttributes({
            userMenuBgColor: value || '#FFFFFF'
          });
        }
      }), createElement(RangeControl, {
        label: __('Font Size (px)', 'ohmylms'),
        value: attributes.userMenuFontSize,
        onChange: function (value) {
          setAttributes({
            userMenuFontSize: value
          });
        },
        min: 10,
        max: 24,
        step: 1
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.userMenuFontWeight,
        options: fontWeightOptions,
        onChange: function (value) {
          setAttributes({
            userMenuFontWeight: parseInt(value)
          });
        }
      }), createElement('hr', {
        style: {
          margin: '20px 0'
        }
      }), createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Hover State', 'ohmylms')), createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Hover Text Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.userMenuHoverColor,
        onChange: function (value) {
          setAttributes({
            userMenuHoverColor: value || '#000000'
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Hover Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.userMenuHoverBgColor,
        onChange: function (value) {
          setAttributes({
            userMenuHoverBgColor: value || '#F5F5F5'
          });
        }
      }), createElement('hr', {
        style: {
          margin: '20px 0'
        }
      }), createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Icon Colors', 'ohmylms')), createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Icon Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.userMenuIconColor,
        onChange: function (value) {
          setAttributes({
            userMenuIconColor: value || '#000000'
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Icon Hover Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.userMenuIconHoverColor,
        onChange: function (value) {
          setAttributes({
            userMenuIconHoverColor: value || '#4361EE'
          });
        }
      })),
      // Section Background Panel
      createElement(PanelBody, {
        title: __('Section Background', 'ohmylms'),
        initialOpen: false
      }, createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.sectionBgColor,
        onChange: function (value) {
          setAttributes({
            sectionBgColor: value || '#F9FAFD'
          });
        }
      })),
      // Profile Wrapper Settings Panel
      createElement(PanelBody, {
        title: __('Profile Wrapper Settings', 'ohmylms'),
        initialOpen: false
      }, createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Border Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.wrapperBorder,
        onChange: function (value) {
          setAttributes({
            wrapperBorder: value || '#EBECEF'
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.wrapperBgColor,
        onChange: function (value) {
          setAttributes({
            wrapperBgColor: value || '#F8F8F8'
          });
        }
      }), createElement(TextControl, {
        label: __('Box Shadow', 'ohmylms'),
        help: __('CSS box-shadow value (e.g., 0px 2px 8px 0px #ECECEC)', 'ohmylms'),
        value: attributes.wrapperShadow,
        onChange: function (value) {
          setAttributes({
            wrapperShadow: value
          });
        }
      })),
      // Sidebar Items Settings Panel
      createElement(PanelBody, {
        title: __('Sidebar Items Settings', 'ohmylms'),
        initialOpen: false
      }, createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Normal State', 'ohmylms')), createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Text Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.sidebarItemColor,
        onChange: function (value) {
          setAttributes({
            sidebarItemColor: value || '#1E1E1E'
          });
        }
      }), createElement(RangeControl, {
        label: __('Font Size (px)', 'ohmylms'),
        value: attributes.sidebarItemFontSize,
        onChange: function (value) {
          setAttributes({
            sidebarItemFontSize: value
          });
        },
        min: 10,
        max: 24,
        step: 1
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.sidebarItemFontWeight,
        options: fontWeightOptions,
        onChange: function (value) {
          setAttributes({
            sidebarItemFontWeight: parseInt(value)
          });
        }
      }), createElement(TextControl, {
        label: __('Background Color', 'ohmylms'),
        help: __('Use "transparent" or a hex color', 'ohmylms'),
        value: attributes.sidebarItemBgColor,
        onChange: function (value) {
          setAttributes({
            sidebarItemBgColor: value
          });
        }
      }), createElement('hr', {
        style: {
          margin: '20px 0'
        }
      }), createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Active/Hover State', 'ohmylms')), createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Text Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.sidebarItemActiveColor,
        onChange: function (value) {
          setAttributes({
            sidebarItemActiveColor: value || '#4361EE'
          });
        }
      }), createElement(RangeControl, {
        label: __('Font Size (px)', 'ohmylms'),
        value: attributes.sidebarItemActiveFontSize,
        onChange: function (value) {
          setAttributes({
            sidebarItemActiveFontSize: value
          });
        },
        min: 10,
        max: 24,
        step: 1
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.sidebarItemActiveFontWeight,
        options: fontWeightOptions,
        onChange: function (value) {
          setAttributes({
            sidebarItemActiveFontWeight: parseInt(value)
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.sidebarItemActiveBgColor,
        onChange: function (value) {
          setAttributes({
            sidebarItemActiveBgColor: value || '#FFFFFF'
          });
        }
      })),
      // Sidebar Content Settings Panel
      createElement(PanelBody, {
        title: __('Sidebar Content Settings', 'ohmylms'),
        initialOpen: false
      }, createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.sidebarContentBgColor,
        onChange: function (value) {
          setAttributes({
            sidebarContentBgColor: value || '#FFFFFF'
          });
        }
      }), createElement(TextControl, {
        label: __('Box Shadow', 'ohmylms'),
        help: __('CSS box-shadow value', 'ohmylms'),
        value: attributes.sidebarContentShadow,
        onChange: function (value) {
          setAttributes({
            sidebarContentShadow: value
          });
        }
      }), createElement(RangeControl, {
        label: __('Inner Padding (px)', 'ohmylms'),
        value: attributes.sidebarContentPadding,
        onChange: function (value) {
          setAttributes({
            sidebarContentPadding: value
          });
        },
        min: 10,
        max: 100,
        step: 1
      }), createElement('hr', {
        style: {
          margin: '20px 0'
        }
      }), createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Title Styling', 'ohmylms')), createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Title Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.sidebarContentTitleColor,
        onChange: function (value) {
          setAttributes({
            sidebarContentTitleColor: value || '#1E1E1E'
          });
        }
      }), createElement(RangeControl, {
        label: __('Font Size (px)', 'ohmylms'),
        value: attributes.sidebarContentTitleFontSize,
        onChange: function (value) {
          setAttributes({
            sidebarContentTitleFontSize: value
          });
        },
        min: 14,
        max: 36,
        step: 1
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.sidebarContentTitleFontWeight,
        options: fontWeightOptions,
        onChange: function (value) {
          setAttributes({
            sidebarContentTitleFontWeight: parseInt(value)
          });
        }
      })),
      // Profile Info Settings Panel
      createElement(PanelBody, {
        title: __('Profile Info Settings', 'ohmylms'),
        initialOpen: false
      }, createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Name Styling', 'ohmylms')), createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Name Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.profileNameColor,
        onChange: function (value) {
          setAttributes({
            profileNameColor: value || '#1E1E1E'
          });
        }
      }), createElement(RangeControl, {
        label: __('Font Size (px)', 'ohmylms'),
        value: attributes.profileNameFontSize,
        onChange: function (value) {
          setAttributes({
            profileNameFontSize: value
          });
        },
        min: 14,
        max: 36,
        step: 1
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.profileNameFontWeight,
        options: fontWeightOptions,
        onChange: function (value) {
          setAttributes({
            profileNameFontWeight: parseInt(value)
          });
        }
      }), createElement('hr', {
        style: {
          margin: '20px 0'
        }
      }), createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Bio Styling', 'ohmylms')), createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Bio Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.profileBioColor,
        onChange: function (value) {
          setAttributes({
            profileBioColor: value || '#52525B'
          });
        }
      }), createElement(RangeControl, {
        label: __('Font Size (px)', 'ohmylms'),
        value: attributes.profileBioFontSize,
        onChange: function (value) {
          setAttributes({
            profileBioFontSize: value
          });
        },
        min: 12,
        max: 24,
        step: 1
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.profileBioFontWeight,
        options: fontWeightOptions,
        onChange: function (value) {
          setAttributes({
            profileBioFontWeight: parseInt(value)
          });
        }
      })),
      // Profile Edit Button Settings Panel
      createElement(PanelBody, {
        title: __('Profile Edit Button Settings', 'ohmylms'),
        initialOpen: false
      }, createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Normal State', 'ohmylms')), createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Text Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.profileEditColor,
        onChange: function (value) {
          setAttributes({
            profileEditColor: value || '#1E1E1E'
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.profileEditBgColor,
        onChange: function (value) {
          setAttributes({
            profileEditBgColor: value || '#FFFFFF'
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Border Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.profileEditBorder,
        onChange: function (value) {
          setAttributes({
            profileEditBorder: value || '#EBEBEF'
          });
        }
      }), createElement(RangeControl, {
        label: __('Font Size (px)', 'ohmylms'),
        value: attributes.profileEditFontSize,
        onChange: function (value) {
          setAttributes({
            profileEditFontSize: value
          });
        },
        min: 10,
        max: 24,
        step: 1
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.profileEditFontWeight,
        options: fontWeightOptions,
        onChange: function (value) {
          setAttributes({
            profileEditFontWeight: parseInt(value)
          });
        }
      }), createElement('hr', {
        style: {
          margin: '20px 0'
        }
      }), createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Hover State', 'ohmylms')), createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Text Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.profileEditHoverColor,
        onChange: function (value) {
          setAttributes({
            profileEditHoverColor: value || '#1E1E1E'
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.profileEditHoverBgColor,
        onChange: function (value) {
          setAttributes({
            profileEditHoverBgColor: value || '#f6f6f6'
          });
        }
      })),
      // Basic Info Section Settings Panel
      createElement(PanelBody, {
        title: __('Basic Info Section Settings', 'ohmylms'),
        initialOpen: false
      }, createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.basicInfoBgColor,
        onChange: function (value) {
          setAttributes({
            basicInfoBgColor: value || '#FFFFFF'
          });
        }
      }), createElement(TextControl, {
        label: __('Box Shadow', 'ohmylms'),
        help: __('CSS box-shadow value', 'ohmylms'),
        value: attributes.basicInfoShadow,
        onChange: function (value) {
          setAttributes({
            basicInfoShadow: value
          });
        }
      }), createElement(RangeControl, {
        label: __('Padding (px)', 'ohmylms'),
        value: attributes.basicInfoPadding,
        onChange: function (value) {
          setAttributes({
            basicInfoPadding: value
          });
        },
        min: 10,
        max: 60,
        step: 1
      }), createElement('hr', {
        style: {
          margin: '20px 0'
        }
      }), createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Title Styling', 'ohmylms')), createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Title Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.basicInfoTitleColor,
        onChange: function (value) {
          setAttributes({
            basicInfoTitleColor: value || '#1E1E1E'
          });
        }
      }), createElement(RangeControl, {
        label: __('Font Size (px)', 'ohmylms'),
        value: attributes.basicInfoTitleFontSize,
        onChange: function (value) {
          setAttributes({
            basicInfoTitleFontSize: value
          });
        },
        min: 14,
        max: 32,
        step: 1
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.basicInfoTitleFontWeight,
        options: fontWeightOptions,
        onChange: function (value) {
          setAttributes({
            basicInfoTitleFontWeight: parseInt(value)
          });
        }
      })),
      // Input Settings Panel
      createElement(PanelBody, {
        title: __('Input Field Settings', 'ohmylms'),
        initialOpen: false
      }, createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.inputBgColor,
        onChange: function (value) {
          setAttributes({
            inputBgColor: value || '#FFFFFF'
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Border Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.inputBorder,
        onChange: function (value) {
          setAttributes({
            inputBorder: value || '#c8d2e980'
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Text Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.inputTextColor,
        onChange: function (value) {
          setAttributes({
            inputTextColor: value || '#52525B'
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Placeholder Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.inputPlaceholderColor,
        onChange: function (value) {
          setAttributes({
            inputPlaceholderColor: value || '#7A8B9A'
          });
        }
      }), createElement(RangeControl, {
        label: __('Font Size (px)', 'ohmylms'),
        value: attributes.inputFontSize,
        onChange: function (value) {
          setAttributes({
            inputFontSize: value
          });
        },
        min: 10,
        max: 24,
        step: 1
      }), createElement(RangeControl, {
        label: __('Padding (px)', 'ohmylms'),
        value: attributes.inputPadding,
        onChange: function (value) {
          setAttributes({
            inputPadding: value
          });
        },
        min: 5,
        max: 30,
        step: 1
      }), createElement(RangeControl, {
        label: __('Border Radius (px)', 'ohmylms'),
        value: attributes.inputBorderRadius,
        onChange: function (value) {
          setAttributes({
            inputBorderRadius: value
          });
        },
        min: 0,
        max: 20,
        step: 1
      })),
      // Label Settings Panel
      createElement(PanelBody, {
        title: __('Label Settings', 'ohmylms'),
        initialOpen: false
      }, createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Label Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.labelColor,
        onChange: function (value) {
          setAttributes({
            labelColor: value || '#1E1E1E'
          });
        }
      }), createElement(RangeControl, {
        label: __('Font Size (px)', 'ohmylms'),
        value: attributes.labelFontSize,
        onChange: function (value) {
          setAttributes({
            labelFontSize: value
          });
        },
        min: 10,
        max: 24,
        step: 1
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.labelFontWeight,
        options: fontWeightOptions,
        onChange: function (value) {
          setAttributes({
            labelFontWeight: parseInt(value)
          });
        }
      })),
      // Button Settings Panel
      createElement(PanelBody, {
        title: __('Button Settings', 'ohmylms'),
        initialOpen: false
      }, createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Normal State', 'ohmylms')), createElement('p', {
        style: {
          marginBottom: '8px',
          fontWeight: '600'
        }
      }, __('Background Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.buttonBgColor,
        onChange: function (value) {
          setAttributes({
            buttonBgColor: value || '#4361EE'
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Text Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.buttonTextColor,
        onChange: function (value) {
          setAttributes({
            buttonTextColor: value || '#FFFFFF'
          });
        }
      }), createElement(RangeControl, {
        label: __('Font Size (px)', 'ohmylms'),
        value: attributes.buttonFontSize,
        onChange: function (value) {
          setAttributes({
            buttonFontSize: value
          });
        },
        min: 10,
        max: 24,
        step: 1
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.buttonFontWeight,
        options: fontWeightOptions,
        onChange: function (value) {
          setAttributes({
            buttonFontWeight: parseInt(value)
          });
        }
      }), createElement(RangeControl, {
        label: __('Border Radius (px)', 'ohmylms'),
        value: attributes.buttonBorderRadius,
        onChange: function (value) {
          setAttributes({
            buttonBorderRadius: value
          });
        },
        min: 0,
        max: 20,
        step: 1
      }), createElement('hr', {
        style: {
          margin: '20px 0'
        }
      }), createElement('h3', {
        style: {
          marginBottom: '12px',
          fontSize: '13px',
          fontWeight: '600'
        }
      }, __('Hover State', 'ohmylms')), createElement(TextControl, {
        label: __('Background Color', 'ohmylms'),
        help: __('Use "transparent" or a hex color', 'ohmylms'),
        value: attributes.buttonHoverBgColor,
        onChange: function (value) {
          setAttributes({
            buttonHoverBgColor: value
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Text Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.buttonHoverTextColor,
        onChange: function (value) {
          setAttributes({
            buttonHoverTextColor: value || '#4361EE'
          });
        }
      }), createElement('p', {
        style: {
          marginBottom: '8px',
          marginTop: '16px',
          fontWeight: '600'
        }
      }, __('Border Color', 'ohmylms')), createElement(ColorPalette, {
        value: attributes.buttonHoverBorder,
        onChange: function (value) {
          setAttributes({
            buttonHoverBorder: value || '#4361EE'
          });
        }
      })));

      // Use ServerSideRender to show the real profile in editor
      var serverSideRender = createElement(ServerSideRender, {
        block: 'ohmylms/profile',
        attributes: validatedAttributes,
        httpMethod: 'POST'
      });
      return createElement(Fragment, {}, inspectorControls,
      // The block's own editor-only <style> override (rendered server-side
      // in ProfileBlock::render_block()) is scoped to `.wp-block-ohmylms-profile`,
      // which WordPress only ever attaches via useBlockProps() - this block doesn't
      // use it, so without this wrapper that CSS never matches anything.
      createElement('div', {
        className: 'wp-block-ohmylms-profile'
      }, serverSideRender));
    },
    save: function () {
      // Return null as this is a dynamic block rendered on the server
      return null;
    }
  });
})();
