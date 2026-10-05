/**
 * OhMyLMS Course List Block
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
  var ToggleControl = wp.components.ToggleControl;
  var Button = wp.components.Button;
  var ServerSideRender = wp.serverSideRender;
  var NumberControl = wp.components.__experimentalNumberControl || wp.components.NumberControl;
  var PanelColorSettings = wp.blockEditor.PanelColorSettings;

  // Layout options
  const layoutOptions = [{
    label: __('Grid', 'ohmylms'),
    value: 'grid'
  }, {
    label: __('List', 'ohmylms'),
    value: 'list'
  }];
  const layoutStyleOptions = [{
    label: __('Layout 1', 'ohmylms'),
    value: 'grid-style1'
  }, {
    label: __('Layout 2', 'ohmylms'),
    value: 'grid-style2'
  }, {
    label: __('Layout 3', 'ohmylms'),
    value: 'grid-style3'
  }, {
    label: __('Layout 4', 'ohmylms'),
    value: 'grid-style4'
  }];
  const columnOptions = [{
    label: __('1 Column', 'ohmylms'),
    value: '1'
  }, {
    label: __('2 Columns', 'ohmylms'),
    value: '2'
  }, {
    label: __('3 Columns', 'ohmylms'),
    value: '3'
  }, {
    label: __('4 Columns', 'ohmylms'),
    value: '4'
  }];
  var attributesData = {
    // Content settings
    postsPerPage: {
      type: 'number',
      default: 10
    },
    orderby: {
      type: 'string',
      default: 'date'
    },
    order: {
      type: 'string',
      default: 'DESC'
    },
    curriculum: {
      type: 'string',
      default: ''
    },
    track: {
      type: 'string',
      default: ''
    },
    // Layout settings
    layout: {
      type: 'string',
      default: 'grid'
    },
    layoutStyle: {
      type: 'string',
      default: 'grid-style1'
    },
    showFilter: {
      type: 'string',
      default: 'no'
    },
    showSearch: {
      type: 'string',
      default: 'no'
    },
    showSort: {
      type: 'string',
      default: 'no'
    },
    columns: {
      type: 'string',
      default: '4'
    },
    isEnableCategory: {
      type: 'string',
      default: 'no'
    },
    courseRows: {
      type: 'array',
      default: [{
        row_display_criteria: 'all',
        row_heading: __('All Courses', 'ohmylms')
      }]
    },
    // 1. Wrapper Style
    wrapperBackground: {
      type: 'string',
      default: '#F9FAFD'
    },
    wrapperMargin: {
      type: 'string',
      default: ''
    },
    wrapperPadding: {
      type: 'string',
      default: ''
    },
    // 2. Card Style
    cardBackground: {
      type: 'string',
      default: ''
    },
    cardBorderRadius: {
      type: 'string',
      default: '12px'
    },
    cardBorderWidth: {
      type: 'string',
      default: ''
    },
    cardBorderType: {
      type: 'string',
      default: ''
    },
    cardBorderColor: {
      type: 'string',
      default: ''
    },
    cardPadding: {
      type: 'string',
      default: ''
    },
    cardBoxShadow: {
      type: 'string',
      default: ''
    },
    cardHoverBoxShadow: {
      type: 'string',
      default: ''
    },
    cardHoverBorderColor: {
      type: 'string',
      default: ''
    },
    cardHoverBackground: {
      type: 'string',
      default: ''
    },
    // 3. Card Header Style
    cardHeaderImageBorderRadius: {
      type: 'string',
      default: '12px 12px 0 0'
    },
    cardHeaderMargin: {
      type: 'string',
      default: ''
    },
    cardHeaderPadding: {
      type: 'string',
      default: ''
    },
    // 4. Card Content Style
    cardContentBackground: {
      type: 'string',
      default: ''
    },
    // 4.1 Title Typography
    titleTypographyFontFamily: {
      type: 'string',
      default: ''
    },
    titleTypographyFontSize: {
      type: 'string',
      default: '16px'
    },
    titleTypographyFontWeight: {
      type: 'string',
      default: '600'
    },
    titleTypographyTextTransform: {
      type: 'string',
      default: ''
    },
    titleTypographyFontStyle: {
      type: 'string',
      default: ''
    },
    titleTypographyTextDecoration: {
      type: 'string',
      default: ''
    },
    titleTypographyLineHeight: {
      type: 'string',
      default: '1.4'
    },
    titleTypographyLetterSpacing: {
      type: 'string',
      default: ''
    },
    titleTypographyWordSpacing: {
      type: 'string',
      default: ''
    },
    titleColor: {
      type: 'string',
      default: '#000D25'
    },
    titleMargin: {
      type: 'string',
      default: ''
    },
    // 4.2 Description Typography
    descriptionTypographyFontFamily: {
      type: 'string',
      default: ''
    },
    descriptionTypographyFontSize: {
      type: 'string',
      default: ''
    },
    descriptionTypographyFontWeight: {
      type: 'string',
      default: ''
    },
    descriptionTypographyTextTransform: {
      type: 'string',
      default: ''
    },
    descriptionTypographyFontStyle: {
      type: 'string',
      default: ''
    },
    descriptionTypographyTextDecoration: {
      type: 'string',
      default: ''
    },
    descriptionTypographyLineHeight: {
      type: 'string',
      default: ''
    },
    descriptionTypographyLetterSpacing: {
      type: 'string',
      default: ''
    },
    descriptionTypographyWordSpacing: {
      type: 'string',
      default: ''
    },
    descriptionColor: {
      type: 'string',
      default: ''
    },
    descriptionMargin: {
      type: 'string',
      default: ''
    },
    // 4.3 Course Meta Style
    courseMetaBackground: {
      type: 'string',
      default: ''
    },
    courseMetaPadding: {
      type: 'string',
      default: ''
    },
    courseMetaMargin: {
      type: 'string',
      default: ''
    },
    courseMetaBorderRadius: {
      type: 'string',
      default: ''
    },
    courseMetaBorder: {
      type: 'string',
      default: ''
    },
    courseMetaRowGap: {
      type: 'string',
      default: '4px'
    },
    courseMetaColumnGap: {
      type: 'string',
      default: '4px'
    },
    courseMetaTypographyFontFamily: {
      type: 'string',
      default: ''
    },
    courseMetaTypographyFontSize: {
      type: 'string',
      default: '12px'
    },
    courseMetaTypographyFontWeight: {
      type: 'string',
      default: '400'
    },
    courseMetaTypographyTextTransform: {
      type: 'string',
      default: ''
    },
    courseMetaTypographyFontStyle: {
      type: 'string',
      default: ''
    },
    courseMetaTypographyTextDecoration: {
      type: 'string',
      default: ''
    },
    courseMetaTypographyLineHeight: {
      type: 'string',
      default: '1.2'
    },
    courseMetaTypographyLetterSpacing: {
      type: 'string',
      default: ''
    },
    courseMetaTypographyWordSpacing: {
      type: 'string',
      default: ''
    },
    courseMetaColor: {
      type: 'string',
      default: '#52525B'
    },
    courseMetaIconSize: {
      type: 'string',
      default: '1em'
    },
    // 4.4 Cohort Meta Style
    cohortMetaBackground: {
      type: 'string',
      default: ''
    },
    cohortMetaPadding: {
      type: 'string',
      default: ''
    },
    cohortMetaMargin: {
      type: 'string',
      default: ''
    },
    cohortMetaBorderRadius: {
      type: 'string',
      default: ''
    },
    cohortMetaBorder: {
      type: 'string',
      default: ''
    },
    cohortMetaRowGap: {
      type: 'string',
      default: ''
    },
    cohortMetaTypographyFontFamily: {
      type: 'string',
      default: ''
    },
    cohortMetaTypographyFontSize: {
      type: 'string',
      default: '12px'
    },
    cohortMetaTypographyFontWeight: {
      type: 'string',
      default: '400'
    },
    cohortMetaTypographyTextTransform: {
      type: 'string',
      default: ''
    },
    cohortMetaTypographyFontStyle: {
      type: 'string',
      default: ''
    },
    cohortMetaTypographyTextDecoration: {
      type: 'string',
      default: ''
    },
    cohortMetaTypographyLineHeight: {
      type: 'string',
      default: '1.2'
    },
    cohortMetaTypographyLetterSpacing: {
      type: 'string',
      default: ''
    },
    cohortMetaTypographyWordSpacing: {
      type: 'string',
      default: ''
    },
    cohortMetaColor: {
      type: 'string',
      default: '#52525B'
    },
    cohortMetaIconSize: {
      type: 'string',
      default: '1em'
    },
    cohortMetaIconSpacing: {
      type: 'string',
      default: ''
    },
    // 4.5 Price Style
    priceBackground: {
      type: 'string',
      default: ''
    },
    pricePadding: {
      type: 'string',
      default: ''
    },
    priceMargin: {
      type: 'string',
      default: ''
    },
    priceBorderRadius: {
      type: 'string',
      default: ''
    },
    priceBorder: {
      type: 'string',
      default: ''
    },
    priceTypographyFontFamily: {
      type: 'string',
      default: ''
    },
    priceTypographyFontSize: {
      type: 'string',
      default: '16px'
    },
    priceTypographyFontWeight: {
      type: 'string',
      default: '500'
    },
    priceTypographyTextTransform: {
      type: 'string',
      default: ''
    },
    priceTypographyFontStyle: {
      type: 'string',
      default: ''
    },
    priceTypographyTextDecoration: {
      type: 'string',
      default: ''
    },
    priceTypographyLineHeight: {
      type: 'string',
      default: '1.2'
    },
    priceTypographyLetterSpacing: {
      type: 'string',
      default: ''
    },
    priceTypographyWordSpacing: {
      type: 'string',
      default: ''
    },
    priceColor: {
      type: 'string',
      default: '#000D25'
    },
    priceRegularColor: {
      type: 'string',
      default: '#FF6F6F'
    },
    // 4.6 Button Style
    buttonBackground: {
      type: 'string',
      default: '#6E42D3'
    },
    buttonPadding: {
      type: 'string',
      default: '10px 12px'
    },
    buttonMargin: {
      type: 'string',
      default: ''
    },
    buttonBorderRadius: {
      type: 'string',
      default: '10px'
    },
    buttonBorder: {
      type: 'string',
      default: '1px solid transparent'
    },
    buttonTypographyFontFamily: {
      type: 'string',
      default: ''
    },
    buttonTypographyFontSize: {
      type: 'string',
      default: '15px'
    },
    buttonTypographyFontWeight: {
      type: 'string',
      default: '500'
    },
    buttonTypographyTextTransform: {
      type: 'string',
      default: ''
    },
    buttonTypographyFontStyle: {
      type: 'string',
      default: ''
    },
    buttonTypographyTextDecoration: {
      type: 'string',
      default: ''
    },
    buttonTypographyLineHeight: {
      type: 'string',
      default: '1.2'
    },
    buttonTypographyLetterSpacing: {
      type: 'string',
      default: ''
    },
    buttonTypographyWordSpacing: {
      type: 'string',
      default: ''
    },
    buttonColor: {
      type: 'string',
      default: '#FFF'
    },
    buttonBoxShadow: {
      type: 'string',
      default: ''
    },
    buttonHoverBackground: {
      type: 'string',
      default: 'transparent'
    },
    buttonHoverColor: {
      type: 'string',
      default: '#6E42D3'
    },
    buttonHoverBoxShadow: {
      type: 'string',
      default: ''
    },
    buttonHoverBorderColor: {
      type: 'string',
      default: '#6E42D3'
    },
    // Legacy attributes for backward compatibility
    containerClass: {
      type: 'string',
      default: ''
    },
    courseCardClass: {
      type: 'string',
      default: ''
    },
    gridGap: {
      type: 'string',
      default: ''
    },
    cardBgColor: {
      type: 'string',
      default: ''
    },
    cardShadow: {
      type: 'string',
      default: ''
    },
    titleFontSize: {
      type: 'string',
      default: ''
    },
    priceFontSize: {
      type: 'string',
      default: ''
    },
    buttonBgColor: {
      type: 'string',
      default: ''
    },
    buttonTextColor: {
      type: 'string',
      default: ''
    },
    containerPadding: {
      type: 'string',
      default: ''
    },
    containerMargin: {
      type: 'string',
      default: ''
    },
    cardMargin: {
      type: 'string',
      default: ''
    },
    align: {
      type: 'string',
      default: 'full'
    }
  };
  registerBlockType('ohmylms/course-list', {
    title: __('OhMyLMS Course List', 'ohmylms'),
    description: __('Display a list of courses with customizable styling options.', 'ohmylms'),
    icon: 'index-card',
    category: 'ohmylms',
    keywords: [__('course', 'ohmylms'), __('list', 'ohmylms'), __('ohmylms', 'ohmylms'), __('ohmylms', 'ohmylms')],
    supports: {
      align: true,
      html: false
    },
    attributes: attributesData,
    edit: function (props) {
      // Fix: Ensure all attributes are valid for ServerSideRender
      var attributes = {};
      Object.keys(attributesData).forEach(function (key) {
        var val = props.attributes[key];
        if (attributesData[key].type === 'boolean') {
          attributes[key] = typeof val === 'boolean' ? val : !!val;
        } else if (attributesData[key].type === 'number') {
          attributes[key] = typeof val === 'number' ? val : Number(val) || attributesData[key].default;
        } else if (attributesData[key].type === 'array') {
          attributes[key] = Array.isArray(val) ? val : attributesData[key].default;
        } else {
          attributes[key] = typeof val === 'undefined' ? attributesData[key].default : val;
        }
      });
      var setAttributes = props.setAttributes;
      var safeSetAttributes = function (newAttributes) {
        setAttributes(newAttributes);
      };

      // Initialize courseRows if layout 3 or 4 is selected and courseRows is empty
      if ((attributes.layoutStyle === 'grid-style3' || attributes.layoutStyle === 'grid-style4') && (!attributes.courseRows || attributes.courseRows.length === 0)) {
        attributes.courseRows = [{
          row_display_criteria: 'all',
          row_heading: __('All Courses', 'ohmylms')
        }];
        safeSetAttributes({
          courseRows: attributes.courseRows
        });
      }

      // Common options
      var fontWeightOptions = [{
        label: __('Default', 'ohmylms'),
        value: ''
      }, {
        label: '100',
        value: '100'
      }, {
        label: '200',
        value: '200'
      }, {
        label: '300',
        value: '300'
      }, {
        label: '400',
        value: '400'
      }, {
        label: '500',
        value: '500'
      }, {
        label: '600',
        value: '600'
      }, {
        label: '700',
        value: '700'
      }, {
        label: '800',
        value: '800'
      }, {
        label: '900',
        value: '900'
      }];
      var borderTypeOptions = [{
        label: __('None', 'ohmylms'),
        value: 'none'
      }, {
        label: __('Solid', 'ohmylms'),
        value: 'solid'
      }, {
        label: __('Dashed', 'ohmylms'),
        value: 'dashed'
      }, {
        label: __('Dotted', 'ohmylms'),
        value: 'dotted'
      }, {
        label: __('Double', 'ohmylms'),
        value: 'double'
      }];
      var textTransformOptions = [{
        label: __('None', 'ohmylms'),
        value: ''
      }, {
        label: __('Capitalize', 'ohmylms'),
        value: 'capitalize'
      }, {
        label: __('Uppercase', 'ohmylms'),
        value: 'uppercase'
      }, {
        label: __('Lowercase', 'ohmylms'),
        value: 'lowercase'
      }];
      var textDecorationOptions = [{
        label: __('None', 'ohmylms'),
        value: ''
      }, {
        label: __('Underline', 'ohmylms'),
        value: 'underline'
      }, {
        label: __('Line Through', 'ohmylms'),
        value: 'line-through'
      }, {
        label: __('Overline', 'ohmylms'),
        value: 'overline'
      }];
      var displayCriteriaOptions = [{
        label: 'Free Courses',
        value: 'free'
      }, {
        label: 'Paid Courses',
        value: 'paid'
      }, {
        label: 'Best Selling Courses',
        value: 'best_selling'
      }, {
        label: 'Top Rated Courses',
        value: 'top_rated'
      }, {
        label: 'Recent Courses',
        value: 'recent'
      }, {
        label: 'All Courses',
        value: 'all'
      }];
      var inspectorControls = createElement(InspectorControls, {}, createElement('Style', {
        dangerouslySetInnerHTML: {
          __html: `
							.ohmylms-color-palate-wrapper {
								padding: 0 !important;
								border: none !important;
								margin-bottom: 10px;
							}
							.ohmylms-color-palate-wrapper .components-tools-panel-item {
								margin-top: 0 !important;
							}

							.ohmylms-course-cards {
								pointer-events: none;
							}
						`
        }
      }),
      // Content settings
      createElement(PanelBody, {
        title: __('Content Settings', 'ohmylms'),
        initialOpen: true
      }, createElement(NumberControl, {
        label: __('Courses Per Page', 'ohmylms'),
        value: attributes.postsPerPage,
        onChange: function (value) {
          safeSetAttributes({
            postsPerPage: value
          });
        }
      })),
      // Layout settings 
      createElement(PanelBody, {
        title: __('Layout & Filter', 'ohmylms'),
        initialOpen: false
      }, createElement(SelectControl, {
        label: __('Layout', 'ohmylms'),
        value: attributes?.layout || attributesData?.layout?.default,
        options: layoutOptions,
        onChange: function (value) {
          safeSetAttributes({
            layout: value
          });
        }
      }), 'grid' === attributes?.layout && [createElement(SelectControl, {
        label: __('Choose Course Column', 'ohmylms'),
        value: attributes.columns || '4',
        options: columnOptions.map(option => ({
          ...option,
          disabled: option.value === '4' && attributes.showFilter === 'yes'
        })),
        onChange: function (value) {
          // If enabling filter and columns is 4, set columns to 3
          if (attributes.showFilter === 'yes' && value === '4') {
            safeSetAttributes({
              columns: '3'
            });
          } else {
            safeSetAttributes({
              columns: value
            });
          }
        }
      }), createElement(SelectControl, {
        label: __('Layout Style', 'ohmylms'),
        value: attributes.layoutStyle || attributesData?.layoutStyle?.default,
        options: layoutStyleOptions,
        onChange: function (value) {
          var newAttributes = {
            layoutStyle: value
          };

          // Initialize courseRows when switching to layout 3 or 4
          if ((value === 'grid-style3' || value === 'grid-style4') && (!attributes.courseRows || attributes.courseRows.length === 0)) {
            newAttributes.courseRows = [{
              row_display_criteria: 'all',
              row_heading: __('All Courses', 'ohmylms')
            }];
          }

          // If layout 3 or 4 is selected, disable show filter, search, and sort
          if (value === 'grid-style3' || value === 'grid-style4') {
            newAttributes.showFilter = 'no';
            newAttributes.showSearch = 'no';
            newAttributes.showSort = 'no';
          }

          // If layout 1 or 2 is selected, disable enable category
          if (value === 'grid-style1' || value === 'grid-style2') {
            newAttributes.isEnableCategory = 'no';
          }
          safeSetAttributes(newAttributes);
        }
      }),
      // Show filter, search and sort options only for layout 1 or 2
      (attributes.layoutStyle === 'grid-style1' || attributes.layoutStyle === 'grid-style2') && createElement(ToggleControl, {
        label: __('Show Filter', 'ohmylms'),
        checked: attributes.showFilter === 'yes',
        onChange: function (value) {
          // If enabling filter and columns is 4, set columns to 3
          if (value && attributes.columns === '4') {
            safeSetAttributes({
              showFilter: value ? 'yes' : 'no',
              columns: '3'
            });
          } else {
            safeSetAttributes({
              showFilter: value ? 'yes' : 'no'
            });
          }
        }
      }), (attributes.layoutStyle === 'grid-style1' || attributes.layoutStyle === 'grid-style2') && createElement(ToggleControl, {
        label: __('Show Search', 'ohmylms'),
        checked: attributes.showSearch === 'yes',
        onChange: function (value) {
          safeSetAttributes({
            showSearch: value ? 'yes' : 'no'
          });
        }
      }), (attributes.layoutStyle === 'grid-style1' || attributes.layoutStyle === 'grid-style2') && createElement(ToggleControl, {
        label: __('Show Sort', 'ohmylms'),
        checked: attributes.showSort === 'yes',
        onChange: function (value) {
          safeSetAttributes({
            showSort: value ? 'yes' : 'no'
          });
        }
      }),
      // Show Enable Category only for layout 3 or 4
      (attributes.layoutStyle === 'grid-style3' || attributes.layoutStyle === 'grid-style4') && createElement(ToggleControl, {
        label: __('Show curriculum tabs', 'ohmylms'),
        checked: attributes.isEnableCategory === 'yes',
        onChange: function (value) {
          safeSetAttributes({
            isEnableCategory: value ? 'yes' : 'no'
          });
        }
      })]),
      // Row Settings for Layout 3 and 4
      (attributes.layoutStyle === 'grid-style3' || attributes.layoutStyle === 'grid-style4') && createElement(PanelBody, {
        title: __('Row Settings', 'ohmylms'),
        initialOpen: false
      }, createElement('style', {
        dangerouslySetInnerHTML: {
          __html: `
								.ohmylms-row-item {
									border: 1px solid #ddd;
									border-radius: 4px;
									padding: 16px;
									margin-bottom: 16px;
									background-color: #f9f9f9;
								}
								.ohmylms-row-header {
									display: flex;
									justify-content: space-between;
									align-items: center;
									margin-bottom: 12px;
								}
								.ohmylms-row-title {
									margin: 0;
									font-size: 14px;
									font-weight: 600;
									color: #1e1e1e;
								}
								.ohmylms-add-row-container {
									text-align: right;
									margin-top: 16px;
									padding-top: 16px;
									border-top: 1px solid #ddd;
								}
							`
        }
      }),
      // Render each row
      (attributes.courseRows || []).map(function (row, index) {
        return createElement('div', {
          key: index,
          className: 'ohmylms-row-item'
        }, createElement('div', {
          className: 'ohmylms-row-header'
        }, createElement('h4', {
          className: 'ohmylms-row-title'
        }, __('Select Course Display Criteria', 'ohmylms')),
        // Delete button (only show if more than one row)
        (attributes.courseRows || []).length > 1 && createElement(Button, {
          icon: 'trash',
          isDestructive: true,
          variant: 'tertiary',
          onClick: function () {
            var newRows = (attributes.courseRows || []).filter(function (_, i) {
              return i !== index;
            });
            safeSetAttributes({
              courseRows: newRows
            });
          },
          style: {
            minWidth: 'auto',
            padding: '4px 8px'
          },
          'aria-label': __('Remove row', 'ohmylms')
        })),
        // Display Criteria Select
        createElement(SelectControl, {
          label: '',
          value: row.row_display_criteria || 'all',
          options: displayCriteriaOptions,
          onChange: function (value) {
            var newRows = (attributes.courseRows || []).map(function (r, i) {
              if (i === index) {
                return {
                  ...r,
                  row_display_criteria: value
                };
              }
              return r;
            });
            safeSetAttributes({
              courseRows: newRows
            });
          }
        }),
        // Row Heading Input
        createElement(TextControl, {
          label: __('Row Heading', 'ohmylms'),
          value: row.row_heading || __('Untitled', 'ohmylms'),
          placeholder: __('Enter Row Heading', 'ohmylms'),
          onChange: function (value) {
            var newRows = (attributes.courseRows || []).map(function (r, i) {
              if (i === index) {
                return {
                  ...r,
                  row_heading: value
                };
              }
              return r;
            });
            safeSetAttributes({
              courseRows: newRows
            });
          }
        }));
      }),
      // Add Row Button
      createElement('div', {
        className: 'ohmylms-add-row-container'
      }, createElement(Button, {
        variant: 'primary',
        icon: 'plus',
        onClick: function () {
          var currentRows = attributes.courseRows || [];
          var newRows = [...currentRows, {
            row_display_criteria: 'all',
            row_heading: __('All Courses', 'ohmylms')
          }];
          safeSetAttributes({
            courseRows: newRows
          });
        }
      }, __('Add Row', 'ohmylms')))),
      // Wrapper Style
      createElement(PanelBody, {
        title: __('Wrapper Style', 'ohmylms'),
        initialOpen: false
      }, createElement(PanelColorSettings, {
        colorSettings: [{
          value: attributes.wrapperBackground,
          onChange: function (value) {
            safeSetAttributes({
              wrapperBackground: value
            });
          },
          label: __('Background', 'ohmylms')
        }],
        className: "ohmylms-color-palate-wrapper"
      }), createElement(TextControl, {
        label: __('Margin', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.wrapperMargin,
        onChange: function (value) {
          safeSetAttributes({
            wrapperMargin: value
          });
        }
      }), createElement(TextControl, {
        label: __('Padding', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.wrapperPadding,
        onChange: function (value) {
          safeSetAttributes({
            wrapperPadding: value
          });
        }
      })),
      // Card Style
      createElement(PanelBody, {
        title: __('Card Style', 'ohmylms'),
        initialOpen: false
      }, createElement(PanelColorSettings, {
        colorSettings: [{
          value: attributes.cardBackground,
          onChange: function (value) {
            safeSetAttributes({
              cardBackground: value
            });
          },
          label: __('Card Background', 'ohmylms')
        }, {
          value: attributes.cardBorderColor,
          onChange: function (value) {
            safeSetAttributes({
              cardBorderColor: value
            });
          },
          label: __('Border Color', 'ohmylms')
        }, {
          value: attributes.cardHoverBackground,
          onChange: function (value) {
            safeSetAttributes({
              cardHoverBackground: value
            });
          },
          label: __('Hover Background', 'ohmylms')
        }, {
          value: attributes.cardHoverBorderColor,
          onChange: function (value) {
            safeSetAttributes({
              cardHoverBorderColor: value
            });
          },
          label: __('Hover Border Color', 'ohmylms')
        }],
        className: "ohmylms-color-palate-wrapper"
      }), createElement(TextControl, {
        label: __('Border Radius', 'ohmylms'),
        value: attributes?.cardBorderRadius || attributesData?.cardBorderRadius?.default,
        onChange: function (value) {
          safeSetAttributes({
            cardBorderRadius: value
          });
        },
        placeholder: __('e.g: 5px', 'ohmylms')
      }), createElement(TextControl, {
        label: __('Border Width', 'ohmylms'),
        value: attributes.cardBorderWidth,
        onChange: function (value) {
          safeSetAttributes({
            cardBorderWidth: value
          });
        },
        placeholder: __('e.g: 1px', 'ohmylms')
      }), createElement(SelectControl, {
        label: __('Border Type', 'ohmylms'),
        value: attributes.cardBorderType,
        onChange: function (value) {
          safeSetAttributes({
            cardBorderType: value
          });
        },
        options: borderTypeOptions
      }), createElement(TextControl, {
        label: __('Card Padding', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.cardPadding,
        onChange: function (value) {
          safeSetAttributes({
            cardPadding: value
          });
        }
      })),
      // Card Header Style
      createElement(PanelBody, {
        title: __('Card Header Style', 'ohmylms'),
        initialOpen: false
      }, createElement(TextControl, {
        label: __('Image Border Radius', 'ohmylms'),
        value: attributes.cardHeaderImageBorderRadius,
        onChange: function (value) {
          safeSetAttributes({
            cardHeaderImageBorderRadius: value
          });
        },
        placeholder: __('e.g: 5px', 'ohmylms')
      }), createElement(TextControl, {
        label: __('Header Margin', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.cardHeaderMargin,
        onChange: function (value) {
          safeSetAttributes({
            cardHeaderMargin: value
          });
        }
      }), createElement(TextControl, {
        label: __('Header Padding', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.cardHeaderPadding,
        onChange: function (value) {
          safeSetAttributes({
            cardHeaderPadding: value
          });
        }
      })),
      // Card Content Style  
      createElement(PanelBody, {
        title: __('Card Content Style', 'ohmylms'),
        initialOpen: false
      }, createElement(PanelColorSettings, {
        colorSettings: [{
          value: attributes.cardContentBackground,
          onChange: function (value) {
            safeSetAttributes({
              cardContentBackground: value
            });
          },
          label: __('Content Background', 'ohmylms')
        }],
        className: "ohmylms-color-palate-wrapper"
      })),
      // Title Typography
      createElement(PanelBody, {
        title: __('Title Typography', 'ohmylms'),
        initialOpen: false
      }, createElement(TextControl, {
        label: __('Font Size', 'ohmylms'),
        value: attributes?.titleTypographyFontSize || attributesData?.titleTypographyFontSize?.default,
        onChange: function (value) {
          safeSetAttributes({
            titleTypographyFontSize: value
          });
        }
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes?.titleTypographyFontWeight || attributesData?.titleTypographyFontWeight?.default,
        onChange: function (value) {
          safeSetAttributes({
            titleTypographyFontWeight: value
          });
        },
        options: fontWeightOptions
      }), createElement(SelectControl, {
        label: __('Text Transform', 'ohmylms'),
        value: attributes?.titleTypographyTextTransform || attributesData?.titleTypographyTextTransform?.default,
        onChange: function (value) {
          safeSetAttributes({
            titleTypographyTextTransform: value
          });
        },
        options: textTransformOptions
      }), createElement(SelectControl, {
        label: __('Font Style', 'ohmylms'),
        value: attributes?.titleTypographyFontStyle || attributesData?.titleTypographyFontStyle?.default,
        onChange: function (value) {
          safeSetAttributes({
            titleTypographyFontStyle: value
          });
        },
        options: [{
          label: __('Default', 'ohmylms'),
          value: ''
        }, {
          label: __('Normal', 'ohmylms'),
          value: 'normal'
        }, {
          label: __('Italic', 'ohmylms'),
          value: 'italic'
        }, {
          label: __('Oblique', 'ohmylms'),
          value: 'oblique'
        }]
      }), createElement(SelectControl, {
        label: __('Text Decoration', 'ohmylms'),
        value: attributes?.titleTypographyTextDecoration || attributesData?.titleTypographyTextDecoration?.default,
        onChange: function (value) {
          safeSetAttributes({
            titleTypographyTextDecoration: value
          });
        },
        options: textDecorationOptions
      }), createElement(TextControl, {
        label: __('Line Height', 'ohmylms'),
        value: attributes?.titleTypographyLineHeight || attributesData?.titleTypographyLineHeight?.default,
        onChange: function (value) {
          safeSetAttributes({
            titleTypographyLineHeight: value
          });
        }
      }), createElement(TextControl, {
        label: __('Letter Spacing', 'ohmylms'),
        placeholder: __('e.g: 1px', 'ohmylms'),
        value: attributes?.titleTypographyLetterSpacing || attributesData?.titleTypographyLetterSpacing?.default,
        onChange: function (value) {
          safeSetAttributes({
            titleTypographyLetterSpacing: value
          });
        }
      }), createElement(TextControl, {
        label: __('Word Spacing', 'ohmylms'),
        placeholder: __('e.g: 2px', 'ohmylms'),
        value: attributes.titleTypographyWordSpacing || attributesData?.titleTypographyWordSpacing?.default,
        onChange: function (value) {
          safeSetAttributes({
            titleTypographyWordSpacing: value
          });
        }
      }), createElement(PanelColorSettings, {
        colorSettings: [{
          value: attributes?.titleColor || attributesData?.titleColor?.default,
          onChange: function (value) {
            safeSetAttributes({
              titleColor: value
            });
          },
          label: __('Title Color', 'ohmylms')
        }],
        className: "ohmylms-color-palate-wrapper"
      }), createElement(TextControl, {
        label: __('Title Margin', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.titleMargin,
        onChange: function (value) {
          safeSetAttributes({
            titleMargin: value
          });
        }
      })),
      // Description Typography
      createElement(PanelBody, {
        title: __('Description Typography', 'ohmylms'),
        initialOpen: false
      }, createElement(TextControl, {
        label: __('Font Size', 'ohmylms'),
        value: attributes.descriptionTypographyFontSize,
        onChange: function (value) {
          safeSetAttributes({
            descriptionTypographyFontSize: value
          });
        }
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.descriptionTypographyFontWeight,
        onChange: function (value) {
          safeSetAttributes({
            descriptionTypographyFontWeight: value
          });
        },
        options: fontWeightOptions
      }), createElement(SelectControl, {
        label: __('Text Transform', 'ohmylms'),
        value: attributes.descriptionTypographyTextTransform,
        onChange: function (value) {
          safeSetAttributes({
            descriptionTypographyTextTransform: value
          });
        },
        options: textTransformOptions
      }), createElement(SelectControl, {
        label: __('Font Style', 'ohmylms'),
        value: attributes.descriptionTypographyFontStyle,
        onChange: function (value) {
          safeSetAttributes({
            descriptionTypographyFontStyle: value
          });
        },
        options: [{
          label: __('Default', 'ohmylms'),
          value: ''
        }, {
          label: __('Normal', 'ohmylms'),
          value: 'normal'
        }, {
          label: __('Italic', 'ohmylms'),
          value: 'italic'
        }, {
          label: __('Oblique', 'ohmylms'),
          value: 'oblique'
        }]
      }), createElement(SelectControl, {
        label: __('Text Decoration', 'ohmylms'),
        value: attributes.descriptionTypographyTextDecoration,
        onChange: function (value) {
          safeSetAttributes({
            descriptionTypographyTextDecoration: value
          });
        },
        options: textDecorationOptions
      }), createElement(TextControl, {
        label: __('Line Height', 'ohmylms'),
        value: attributes.descriptionTypographyLineHeight,
        onChange: function (value) {
          safeSetAttributes({
            descriptionTypographyLineHeight: value
          });
        }
      }), createElement(TextControl, {
        label: __('Letter Spacing', 'ohmylms'),
        placeholder: __('e.g: 1px', 'ohmylms'),
        value: attributes.descriptionTypographyLetterSpacing,
        onChange: function (value) {
          safeSetAttributes({
            descriptionTypographyLetterSpacing: value
          });
        }
      }), createElement(TextControl, {
        label: __('Word Spacing', 'ohmylms'),
        placeholder: __('e.g: 2px', 'ohmylms'),
        value: attributes.descriptionTypographyWordSpacing,
        onChange: function (value) {
          safeSetAttributes({
            descriptionTypographyWordSpacing: value
          });
        }
      }), createElement(PanelColorSettings, {
        colorSettings: [{
          value: attributes.descriptionColor,
          onChange: function (value) {
            safeSetAttributes({
              descriptionColor: value
            });
          },
          label: __('Description Color', 'ohmylms')
        }],
        className: "ohmylms-color-palate-wrapper"
      }), createElement(TextControl, {
        label: __('Description Margin', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.descriptionMargin,
        onChange: function (value) {
          safeSetAttributes({
            descriptionMargin: value
          });
        }
      })),
      // Course Meta Style
      createElement(PanelBody, {
        title: __('Course Meta Style', 'ohmylms'),
        initialOpen: false
      },
      // Color Settings
      createElement(PanelColorSettings, {
        colorSettings: [{
          value: attributes.courseMetaBackground,
          onChange: function (value) {
            safeSetAttributes({
              courseMetaBackground: value
            });
          },
          label: __('Background', 'ohmylms')
        }, {
          value: attributes.courseMetaColor,
          onChange: function (value) {
            safeSetAttributes({
              courseMetaColor: value
            });
          },
          label: __('Color', 'ohmylms')
        }],
        className: "ohmylms-color-palate-wrapper"
      }),
      // Spacing & Layout
      createElement(TextControl, {
        label: __('Margin', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.courseMetaMargin,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaMargin: value
          });
        }
      }), createElement(TextControl, {
        label: __('Padding', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.courseMetaPadding,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaPadding: value
          });
        }
      }), createElement(TextControl, {
        label: __('Border Radius', 'ohmylms'),
        value: attributes.courseMetaBorderRadius,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaBorderRadius: value
          });
        }
      }), createElement(TextControl, {
        label: __('Border', 'ohmylms'),
        value: attributes.courseMetaBorder,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaBorder: value
          });
        }
      }), createElement(TextControl, {
        label: __('Row Gap', 'ohmylms'),
        value: attributes.courseMetaRowGap,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaRowGap: value
          });
        }
      }), createElement(TextControl, {
        label: __('Column Gap', 'ohmylms'),
        value: attributes.courseMetaColumnGap,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaColumnGap: value
          });
        }
      }), createElement(TextControl, {
        label: __('Icon Size', 'ohmylms'),
        value: attributes.courseMetaIconSize,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaIconSize: value
          });
        }
      }),
      // Typography Settings

      createElement(TextControl, {
        label: __('Font Size', 'ohmylms'),
        value: attributes.courseMetaTypographyFontSize,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaTypographyFontSize: value
          });
        }
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.courseMetaTypographyFontWeight,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaTypographyFontWeight: value
          });
        },
        options: fontWeightOptions
      }), createElement(SelectControl, {
        label: __('Text Transform', 'ohmylms'),
        value: attributes.courseMetaTypographyTextTransform,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaTypographyTextTransform: value
          });
        },
        options: textTransformOptions
      }), createElement(SelectControl, {
        label: __('Font Style', 'ohmylms'),
        value: attributes.courseMetaTypographyFontStyle,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaTypographyFontStyle: value
          });
        },
        options: [{
          label: __('Default', 'ohmylms'),
          value: ''
        }, {
          label: __('Normal', 'ohmylms'),
          value: 'normal'
        }, {
          label: __('Italic', 'ohmylms'),
          value: 'italic'
        }, {
          label: __('Oblique', 'ohmylms'),
          value: 'oblique'
        }]
      }), createElement(SelectControl, {
        label: __('Text Decoration', 'ohmylms'),
        value: attributes.courseMetaTypographyTextDecoration,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaTypographyTextDecoration: value
          });
        },
        options: textDecorationOptions
      }), createElement(TextControl, {
        label: __('Line Height', 'ohmylms'),
        value: attributes.courseMetaTypographyLineHeight,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaTypographyLineHeight: value
          });
        }
      }), createElement(TextControl, {
        label: __('Letter Spacing', 'ohmylms'),
        placeholder: __('e.g: 1px', 'ohmylms'),
        value: attributes.courseMetaTypographyLetterSpacing,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaTypographyLetterSpacing: value
          });
        }
      }), createElement(TextControl, {
        label: __('Word Spacing', 'ohmylms'),
        placeholder: __('e.g: 2px', 'ohmylms'),
        value: attributes.courseMetaTypographyWordSpacing,
        onChange: function (value) {
          safeSetAttributes({
            courseMetaTypographyWordSpacing: value
          });
        }
      })),
      // Price Style
      createElement(PanelBody, {
        title: __('Price Style', 'ohmylms'),
        initialOpen: false
      },
      // Color Settings
      createElement(PanelColorSettings, {
        colorSettings: [{
          value: attributes.priceBackground || attributesData?.priceBackground?.default,
          onChange: function (value) {
            safeSetAttributes({
              priceBackground: value
            });
          },
          label: __('Background', 'ohmylms')
        }, {
          value: attributes.priceColor || attributesData?.priceColor?.default,
          onChange: function (value) {
            safeSetAttributes({
              priceColor: value
            });
          },
          label: __('Color', 'ohmylms')
        }, {
          value: attributes.priceRegularColor || attributesData?.priceRegularColor?.default,
          onChange: function (value) {
            safeSetAttributes({
              priceRegularColor: value
            });
          },
          label: __('Regular Price Color', 'ohmylms')
        }],
        className: "ohmylms-color-palate-wrapper"
      }),
      // Spacing & Layout
      createElement(TextControl, {
        label: __('Margin', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.priceMargin,
        onChange: function (value) {
          safeSetAttributes({
            priceMargin: value
          });
        }
      }), createElement(TextControl, {
        label: __('Padding', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.pricePadding,
        onChange: function (value) {
          safeSetAttributes({
            pricePadding: value
          });
        }
      }), createElement(TextControl, {
        label: __('Border Radius', 'ohmylms'),
        value: attributes.priceBorderRadius,
        onChange: function (value) {
          safeSetAttributes({
            priceBorderRadius: value
          });
        }
      }), createElement(TextControl, {
        label: __('Border', 'ohmylms'),
        value: attributes.priceBorder,
        onChange: function (value) {
          safeSetAttributes({
            priceBorder: value
          });
        }
      }),
      // Typography Settings

      createElement(TextControl, {
        label: __('Font Size', 'ohmylms'),
        value: attributes.priceTypographyFontSize || attributesData?.priceTypographyFontSize?.default,
        onChange: function (value) {
          safeSetAttributes({
            priceTypographyFontSize: value
          });
        }
      }), createElement(SelectControl, {
        label: __('Font Weight', 'ohmylms'),
        value: attributes.priceTypographyFontWeight || attributesData?.priceTypographyFontWeight?.default,
        onChange: function (value) {
          safeSetAttributes({
            priceTypographyFontWeight: value
          });
        },
        options: fontWeightOptions
      }), createElement(SelectControl, {
        label: __('Text Transform', 'ohmylms'),
        value: attributes.priceTypographyTextTransform,
        onChange: function (value) {
          safeSetAttributes({
            priceTypographyTextTransform: value
          });
        },
        options: textTransformOptions
      }), createElement(SelectControl, {
        label: __('Text Decoration', 'ohmylms'),
        value: attributes.priceTypographyTextDecoration,
        onChange: function (value) {
          safeSetAttributes({
            priceTypographyTextDecoration: value
          });
        },
        options: textDecorationOptions
      }), createElement(TextControl, {
        label: __('Line Height', 'ohmylms'),
        value: attributes.priceTypographyLineHeight || attributesData?.priceTypographyLineHeight?.default,
        onChange: function (value) {
          safeSetAttributes({
            priceTypographyLineHeight: value
          });
        }
      }), createElement(TextControl, {
        label: __('Letter Spacing', 'ohmylms'),
        placeholder: __('e.g: 1px', 'ohmylms'),
        value: attributes.priceTypographyLetterSpacing,
        onChange: function (value) {
          safeSetAttributes({
            priceTypographyLetterSpacing: value
          });
        }
      }), createElement(TextControl, {
        label: __('Word Spacing', 'ohmylms'),
        placeholder: __('e.g: 2px', 'ohmylms'),
        value: attributes.priceTypographyWordSpacing,
        onChange: function (value) {
          safeSetAttributes({
            priceTypographyWordSpacing: value
          });
        }
      })),
      // Button Style
      createElement(PanelBody, {
        title: __('Button Style', 'ohmylms'),
        initialOpen: false
      }, createElement(PanelColorSettings, {
        colorSettings: [{
          value: attributes.buttonBackground || attributesData?.buttonBackground?.default,
          onChange: function (value) {
            safeSetAttributes({
              buttonBackground: value
            });
          },
          label: __('Button Background', 'ohmylms')
        }, {
          value: attributes.buttonColor || attributesData?.buttonColor?.default,
          onChange: function (value) {
            safeSetAttributes({
              buttonColor: value
            });
          },
          label: __('Button Text Color', 'ohmylms')
        }, {
          value: attributes.buttonHoverBackground || attributesData?.buttonHoverBackground?.default,
          onChange: function (value) {
            safeSetAttributes({
              buttonHoverBackground: value
            });
          },
          label: __('Button Hover Background', 'ohmylms')
        }, {
          value: attributes.buttonHoverColor || attributesData?.buttonHoverColor?.default,
          onChange: function (value) {
            safeSetAttributes({
              buttonHoverColor: value
            });
          },
          label: __('Button Hover Color', 'ohmylms')
        }, {
          value: attributes.buttonHoverBorderColor || attributesData?.buttonHoverBorderColor?.default,
          onChange: function (value) {
            safeSetAttributes({
              buttonHoverBorderColor: value
            });
          },
          label: __('Button Hover Border Color', 'ohmylms')
        }],
        className: "ohmylms-color-palate-wrapper"
      }), createElement(TextControl, {
        label: __('Button Border Radius', 'ohmylms'),
        value: attributes.buttonBorderRadius,
        onChange: function (value) {
          safeSetAttributes({
            buttonBorderRadius: value
          });
        }
      }), createElement(TextControl, {
        label: __('Button Padding', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.buttonPadding,
        onChange: function (value) {
          safeSetAttributes({
            buttonPadding: value
          });
        }
      }), createElement(TextControl, {
        label: __('Button Margin', 'ohmylms'),
        placeholder: __('e.g: 5px', 'ohmylms'),
        value: attributes.buttonMargin,
        onChange: function (value) {
          safeSetAttributes({
            buttonMargin: value
          });
        }
      })));
      var serverSideRender = createElement(ServerSideRender, {
        block: 'ohmylms/course-list',
        attributes: attributes,
        httpMethod: 'POST'
      });
      return [inspectorControls,
      // Wrapped so any CSS scoped to `.wp-block-ohmylms-course-list` (WordPress
      // only ever attaches that class via useBlockProps(), which this block doesn't use)
      // has something to match, consistent with the other OhMyLMS blocks.
      createElement('div', {
        className: 'wp-block-ohmylms-course-list'
      }, serverSideRender)];
    },
    save: function () {
      return null;
    }
  });

  // The block editor canvas (WP 5.9+) renders inside an <iframe>, so a
  // carousel initialized against the top-level `document` never finds the
  // ServerSideRender markup, which lives in the iframe's own document.
  function getEditorDocument() {
    var iframe = document.querySelector('iframe[name="editor-canvas"]');
    return iframe && iframe.contentDocument ? iframe.contentDocument : document;
  }

  // Initialize slick carousel for layout 3 and 4 in editor
  function initSlickCarouselInEditor() {
    if (typeof jQuery === 'undefined' || typeof jQuery.fn.slick === 'undefined') {
      // Retry if slick is not loaded yet
      setTimeout(initSlickCarouselInEditor, 500);
      return;
    }
    function initSlick() {
      jQuery('.ohmylms-course-cards-carousel', getEditorDocument()).each(function () {
        var $carousel = jQuery(this);
        if ($carousel.hasClass('slick-initialized')) {
          return;
        }
        var colPerRow = $carousel.data('col') || 3;
        $carousel.slick({
          infinite: false,
          slidesToShow: colPerRow,
          slidesToScroll: 1,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><svg width="9" height="18" fill="none" viewBox="0 0 9 18" xmlns="http://www.w3.org/2000/svg"><path fill="#A1A1AA" d="M1.655 6.526L7.01 1.171a1.167 1.167 0 111.645 1.657L3.288 8.171a1.167 1.167 0 000 1.657l5.367 5.343a1.167 1.167 0 11-1.645 1.657l-5.355-5.355a3.5 3.5 0 010-4.947z"/></svg></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><svg width="9" height="18" fill="none" viewBox="0 0 9 18" xmlns="http://www.w3.org/2000/svg"><path fill="#A1A1AA" d="M7.345 6.526L1.99 1.171A1.167 1.167 0 10.345 2.828l5.367 5.343a1.167 1.167 0 010 1.657L.345 15.171a1.167 1.167 0 101.645 1.657l5.355-5.355a3.5 3.5 0 000-4.947z"/></svg></button>',
          responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: colPerRow < 3 ? colPerRow : 3
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: colPerRow < 2 ? colPerRow : 2
            }
          }, {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }]
        }).addClass('ohmylms-initialized').css('display', 'block').siblings('.ohmylms-carousel-skeleton').remove();
      });
    }

    // Initialize on load
    initSlick();

    // Re-run on every editor state change (attribute edits, ServerSideRender
    // re-fetches, etc.) - the iframe's own DOM can't be observed until it exists.
    if (window.wp && window.wp.data) {
      var timeoutId;
      window.wp.data.subscribe(function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(initSlick, 500);
      });
    }

    // Fallback poll: the canvas iframe mounts asynchronously and may not
    // exist yet when this first runs or when the store first updates.
    var pollId = setInterval(initSlick, 1000);
    setTimeout(function () {
      clearInterval(pollId);
    }, 20000);
  }

  // Start initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlickCarouselInEditor);
  } else {
    initSlickCarouselInEditor();
  }
})();
