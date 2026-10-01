// Reconstructed Webpack factory 87381; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r,
    a,
    o,
    i,
    l,
    c,
    u,
    s,
    d,
    m,
    p,
    f,
    v,
    g,
    h,
    y,
    b,
    _,
    w,
    E,
    S = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.dividerStyleOptions = t.productImagePositionOptions = t.postImagePositionOptions = t.postTitlePositionOption = t.postLayoutOptions = t.productLayoutOptions = t.cartLayoutOptions = t.wcDefaultTemplates = t.defaultDoubleOptinTemplate = t.defaultEmailTemplate = t.defaultTemplate = t.fontList = t.regularBlocks = t.CustomBlocksType = void 0;
  var R,
    x = n(49050),
    C = S(n(65722)),
    P = S(n(96494)),
    O = S(n(38909)),
    k = S(n(5329)),
    j = S(n(63716)),
    A = S(n(58829));
  !function (e) {
    e.POST_BLOCK = "post_block", e.PRODUCT_BLOCK = "product_block", e.PRO_PRODUCT_BLOCK = "product_block_pro", e.PRO_POST_BLOCK = "post_block_pro", e.FOOTER_BLOCK = "footer_block", e.CART_BLOCK = "cart_block", e.PRO_CART_BLOCK = "cart_block_pro", e.ORDER_DETAILS = "order_details", e.PRO_ORDER_DETAILS = "order_details_pro", e.BILLING_ADDRESS = "billing_address", e.PRO_BILLING_ADDRESS = "billing_address_pro", e.SHIPPING_ADDRESS = "shipping_address", e.PRO_SHIPPING_ADDRESS = "shipping_address_pro", e.DOWNLOAD_ORDER_ITEM = "download_order_item", e.PRO_DOWNLOAD_ORDER_ITEM = "download_order_item_pro";
  }(R || (t.CustomBlocksType = R = {})), t.regularBlocks = [{
    type: x.AdvancedType.TEXT
  }, {
    type: x.AdvancedType.IMAGE,
    payload: {
      attributes: {
        padding: "0px 0px 0px 10px"
      }
    }
  }, {
    type: x.AdvancedType.BUTTON
  }, {
    type: x.AdvancedType.SOCIAL
  }, {
    type: x.AdvancedType.DIVIDER
  }, {
    type: x.AdvancedType.SPACER
  }, {
    type: x.AdvancedType.HERO
  }, {
    type: x.AdvancedType.FOOTER
  }, {
    type: x.AdvancedType.WRAPPER
  }], t.fontList = ["Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"].map(function (e) {
    return {
      value: e,
      label: e
    };
  }), t.defaultTemplate = {
    type: "page",
    subject: "Welcome to Mail Mint email marketing and automation",
    subTitle: "Nice to meet you!",
    content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
      children: [{
        type: "advanced_image",
        data: {
          value: {}
        },
        attributes: {
          align: "center",
          height: "auto",
          padding: "17px 0px 17px 0px",
          src: "data:image/png;base64,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",
          width: "100%",
          "container-background-color": "#FFFFFF"
        },
        children: []
      }, {
        type: "advanced_hero",
        data: {
          value: {}
        },
        attributes: {
          "background-color": "#ffffff",
          "background-position": "center center",
          mode: "fluid-height",
          padding: "0px 24px 40px 24px",
          "vertical-align": "top",
          "background-url": ""
        },
        children: [{
          type: "advanced_image",
          data: {
            value: {}
          },
          attributes: {
            align: "center",
            height: "auto",
            padding: "0px 0px 35px 0px",
            src: "data:image/png;base64,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",
            alt: "Default Image"
          },
          children: []
        }, {
          type: "text",
          data: {
            value: {
              content: "Design your email here!"
            }
          },
          attributes: {
            padding: "0px 0px 0px 0px",
            align: "center",
            color: "#000000",
            "font-size": "38px",
            "line-height": "48px",
            "font-weight": "800",
            "font-family": "Arial"
          },
          children: []
        }, {
          type: "text",
          data: {
            value: {
              content: "This builder gives you the ability to fully customize the layout and style of your emails. You can add, rearrange, and remove structures and sections."
            }
          },
          attributes: {
            align: "center",
            color: "#2B2D38",
            "font-weight": "normal",
            "border-radius": "3px",
            padding: "14px 0px 30px 14px",
            "inner-padding": "10px 25px 10px 25px",
            "line-height": "30px",
            target: "_blank",
            "vertical-align": "middle",
            border: "none",
            "text-align": "center",
            href: "#",
            "font-size": "18px",
            "font-family": "Arial"
          },
          children: []
        }, {
          type: "button",
          data: {
            value: {
              content: "Add Button Text"
            }
          },
          attributes: {
            align: "center",
            "background-color": "#2B2D38",
            color: "#ffffff",
            "font-size": "13px",
            "font-weight": "normal",
            "border-radius": "30px",
            padding: "0px 0px 0px 0px",
            "inner-padding": "16px 30px 16px 30px",
            "line-height": "120%",
            target: "_blank",
            "vertical-align": "middle",
            border: "none",
            "text-align": "center",
            href: "#"
          },
          children: []
        }]
      }, {
        type: "advanced_footer",
        data: {
          value: {}
        },
        attributes: {
          "background-color": "#F1F1F1",
          "background-position": "center center",
          mode: "fluid-height",
          padding: "0px 0px 0px 0px",
          "vertical-align": "top",
          "background-url": ""
        },
        children: [{
          type: "advanced_social",
          data: {
            value: {
              elements: [{
                href: "#",
                target: "_blank",
                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEUAAAA7WZg7Wpg6WZg8WJdAU586Wpg6Wpc7WZg8WZk6WZg7WZg6WZg7WZY5WJc6Wpc7WJg7WZk7W5Y6WpU7WZj////m6vKdrMvO1eW2wdhUbaWEl7+El75sgrKpt9KRosV4jbhTbqXy9fiQocVsgrFHY58FMJF5AAAAFHRSTlMAv++AIBCfQJBQ39+wcHBg0M9wMJn76TsAAAEYSURBVDjLjdTZbsMgEEDRYcziPU2LCa3rNOny/79YnESaDAaZ+2gdgQEB8JR51SLUV42CfEagpcQhw5rWRnUpKoWliMrNcGjTVdxVNlu94yhNrrFRH6G/7ewSmVr8tPZOX8wD8vWeAopgp27uwNx1IhhN3jJ4TkFU25X4Fbl5npd4N3sO3QrPNgoDtAl4snEGTBkc+aH8ej+tOe/9F4Oa/+LnRHHYgcjBC4OYh4tlcXhx7oa+nXPXGJatGkGXwSPUZVBAUwYrUKVHCKIEdgAwlkAdoMICKOmu5iHd2HYPorxDswcHeDTmIX9Uno/Hu9DPs3tREEmKu7LnTKvMe8vDATbJKjGchFRyYKNizRjvbeiPGEzb1wZY/0BgYWSlhMOpAAAAAElFTkSuQmCC",
                content: ""
              }, {
                href: "#",
                target: "_blank",
                src: "data:image/png;base64,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",
                content: ""
              }, {
                href: "#",
                target: "_blank",
                src: "http://localhost:10053/wp-content/plugins/mail-mint/assets/admin/dist/main/../images/twitter.6d2ec4b3.png",
                content: ""
              }]
            }
          },
          attributes: {
            align: "center",
            color: "#333333",
            mode: "horizontal",
            "font-size": "13px",
            "font-weight": "normal",
            "font-style": "normal",
            "font-family": "Arial",
            "border-radius": "3px",
            padding: "15px 0px 15px 0px",
            "inner-padding": "0px 20px 0px 0px",
            "line-height": "1.6",
            "text-padding": "4px 4px 4px 0px",
            "icon-padding": "0px",
            "icon-size": "25px"
          },
          children: []
        }, {
          type: "advanced_divider",
          data: {
            value: {}
          },
          attributes: {
            align: "center",
            "border-width": "1px",
            "border-style": "solid",
            "border-color": "#D3CFD8",
            padding: "0px 24px 15px 24px"
          },
          children: []
        }, {
          type: "advanced_text",
          data: {
            value: {
              content: (null === (a = null === (r = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === r ? void 0 : r.business_basic_settings) || void 0 === a ? void 0 : a.business_name) ? null === (i = null === (o = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === o ? void 0 : o.business_basic_settings) || void 0 === i ? void 0 : i.business_name : "{{business.name}}"
            }
          },
          attributes: {
            padding: "10px 25px 10px 25px",
            align: "center",
            "font-size": "16px",
            "line-height": "15px",
            "font-weight": "500",
            "font-family": "Arial"
          },
          children: []
        }, {
          type: "advanced_text",
          data: {
            value: {
              content: "© 2024 " + ((null === (c = null === (l = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === l ? void 0 : l.business_basic_settings) || void 0 === c ? void 0 : c.business_name) ? null === (s = null === (u = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === u ? void 0 : u.business_basic_settings) || void 0 === s ? void 0 : s.business_name : "{{business.name}}") + " " + ((null === (d = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === d ? void 0 : d.address) ? null === (m = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === m ? void 0 : m.address : "{{business.address}}")
            }
          },
          attributes: {
            padding: "12px 0px 12px 0px",
            align: "center",
            "font-size": "14px",
            "line-height": "20px",
            color: "#908A99",
            "font-family": "Arial"
          },
          children: []
        }, {
          type: "advanced_text",
          data: {
            value: {
              content: '<a href="{{link.preference}}" target="_blank" style="text-decoration: underline;"><font color="#0064ff">Update Preference</font></a> . <a href="{{link.unsubscribe}}" target="_blank" style="text-decoration: underline;"><font color="#0064ff">Unsubscribe</font></a>'
            }
          },
          attributes: {
            padding: "10px 25px 10px 25px",
            align: "center",
            "font-size": "10px",
            "font-family": "Arial"
          },
          children: []
        }]
      }]
    })
  }, t.defaultEmailTemplate = {
    id: 0,
    emailCategories: [],
    html_content: "",
    industry: [],
    is_pro: !1,
    json_content: {
      subject: "Welcome to Mail Mint email marketing and automation",
      subTitle: "Nice to meet you!",
      content: {
        type: "page",
        data: {
          value: {
            breakpoint: "480px",
            headAttributes: "",
            "font-size": "14px",
            "font-weight": "400",
            "line-height": "1.7",
            headStyles: [],
            fonts: [],
            responsive: !0,
            "font-family": "Arial",
            "text-color": "#000000"
          }
        },
        attributes: {
          "background-color": "#efeeea",
          width: "600px"
        },
        children: [{
          type: "advanced_image",
          data: {
            value: {}
          },
          attributes: {
            align: "center",
            height: "auto",
            padding: "17px 0px 17px 0px",
            src: P.default,
            width: "100%",
            "container-background-color": "#FFFFFF"
          },
          children: []
        }, {
          type: "advanced_hero",
          data: {
            value: {}
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 24px 40px 24px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_image",
            data: {
              value: {}
            },
            attributes: {
              align: "center",
              height: "auto",
              padding: "0px 0px 35px 0px",
              src: C.default,
              alt: "Default Image"
            },
            children: []
          }, {
            type: "text",
            data: {
              value: {
                content: "Design your email here!"
              }
            },
            attributes: {
              padding: "0px 0px 0px 0px",
              align: "center",
              color: "#000000",
              "font-size": "38px",
              "line-height": "48px",
              "font-weight": "800",
              "font-family": "Arial"
            },
            children: []
          }, {
            type: "text",
            data: {
              value: {
                content: "This builder gives you the ability to fully customize the layout and style of your emails. You can add, rearrange, and remove structures and sections."
              }
            },
            attributes: {
              align: "center",
              "background-color": "#414141",
              color: "#2B2D38",
              "font-weight": "normal",
              "border-radius": "3px",
              padding: "14px 0px 30px 14px",
              "inner-padding": "10px 25px 10px 25px",
              "line-height": "30px",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#",
              "font-size": "18px",
              "font-family": "Arial"
            },
            children: []
          }, {
            type: "button",
            data: {
              value: {
                content: "Add Button Text"
              }
            },
            attributes: {
              align: "center",
              "background-color": "#2B2D38",
              color: "#ffffff",
              "font-size": "13px",
              "font-weight": "normal",
              "border-radius": "30px",
              padding: "0px 0px 0px 0px",
              "inner-padding": "16px 30px 16px 30px",
              "line-height": "120%",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#"
            },
            children: []
          }]
        }, {
          type: "advanced_footer",
          data: {
            value: {}
          },
          attributes: {
            "background-color": "#F1F1F1",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_social",
            data: {
              value: {
                elements: [{
                  href: "#",
                  target: "_blank",
                  src: k.default,
                  content: ""
                }, {
                  href: "#",
                  target: "_blank",
                  src: A.default,
                  content: ""
                }, {
                  href: "#",
                  target: "_blank",
                  src: j.default,
                  content: ""
                }]
              }
            },
            attributes: {
              align: "center",
              color: "#333333",
              mode: "horizontal",
              "font-size": "13px",
              "font-weight": "normal",
              "font-style": "normal",
              "font-family": "Arial",
              "border-radius": "3px",
              padding: "15px 0px 15px 0px",
              "inner-padding": "0px 20px 0px 0px",
              "line-height": "1.6",
              "text-padding": "4px 4px 4px 0px",
              "icon-padding": "0px",
              "icon-size": "25px"
            },
            children: []
          }, {
            type: "advanced_divider",
            data: {
              value: {}
            },
            attributes: {
              align: "center",
              "border-width": "1px",
              "border-style": "solid",
              "border-color": "#D3CFD8",
              padding: "0px 24px 15px 24px"
            },
            children: []
          }, {
            type: "advanced_text",
            data: {
              value: {
                content: (null === (f = null === (p = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === p ? void 0 : p.business_basic_settings) || void 0 === f ? void 0 : f.business_name) ? null === (g = null === (v = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === v ? void 0 : v.business_basic_settings) || void 0 === g ? void 0 : g.business_name : "{{business.name}}"
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "center",
              "font-size": "16px",
              "line-height": "15px",
              "font-weight": "500",
              "font-family": "Arial"
            },
            children: []
          }, {
            type: "advanced_text",
            data: {
              value: {
                content: "© 2024 " + ((null === (y = null === (h = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === h ? void 0 : h.business_basic_settings) || void 0 === y ? void 0 : y.business_name) ? null === (_ = null === (b = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === b ? void 0 : b.business_basic_settings) || void 0 === _ ? void 0 : _.business_name : "{{business.name}}") + " " + ((null === (w = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === w ? void 0 : w.address) ? null === (E = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === E ? void 0 : E.address : "{{business.address}}")
              }
            },
            attributes: {
              padding: "12px 0px 12px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99",
              "font-family": "Arial"
            },
            children: []
          }, {
            type: "advanced_text",
            data: {
              value: {
                content: '<a href="{{link.preference}}" target="_blank" style="text-decoration: underline;"><font color="#0064ff">Update Preference</font></a> . <a href="{{link.unsubscribe}}" target="_blank" style="text-decoration: underline;"><font color="#0064ff">Unsubscribe</font></a>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "center",
              "font-size": "10px",
              "font-family": "Arial"
            },
            children: []
          }]
        }]
      }
    },
    thumbnail_image: "",
    title: ""
  }, t.defaultDoubleOptinTemplate = {
    type: "page",
    subject: "Welcome to Mail Mint email marketing and automation",
    subTitle: "Nice to meet you!",
    content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
      children: [{
        type: "advanced_hero",
        data: {
          value: []
        },
        attributes: {
          "background-color": "#ffffff",
          "background-position": "center center",
          mode: "fluid-height",
          padding: "0px 24px 40px 24px",
          "vertical-align": "top",
          "background-url": ""
        },
        children: [{
          type: "advanced_text",
          data: {
            value: {
              content: '<div style="text-align: center;"><span style="word-spacing: normal;">{{business.name}}</span></div>'
            }
          },
          attributes: {
            padding: "10px 25px 10px 25px",
            align: "left",
            "font-size": "25px"
          },
          children: []
        }, {
          type: "text",
          data: {
            value: {
              content: '<div style="text-align: left;"><span style="word-spacing: normal;">Hello&nbsp;</span><span style="text-align: center; word-spacing: normal;">{{contact.firstName}},</span></div><div style="text-align: left;"><span style="color: rgb(0, 0, 0); font-size: 14px;">To complete your subscription and start receiving our updates, please click the link below to confirm your email address. Thank you for joining our community!</span><span style="text-align: center; word-spacing: normal;"><br></span></div>'
            }
          },
          attributes: {
            align: "center",
            "background-color": "#414141",
            color: "#2B2D38",
            "font-weight": "normal",
            "border-radius": "3px",
            padding: "14px 0px 30px 14px",
            "inner-padding": "10px 25px 10px 25px",
            "line-height": "30px",
            target: "_blank",
            "vertical-align": "middle",
            border: "none",
            "text-align": "center",
            href: "#",
            "font-size": "18px",
            "font-family": "Arial"
          },
          children: []
        }, {
          type: "button",
          data: {
            value: {
              content: "Click Here to Subscribe"
            }
          },
          attributes: {
            align: "center",
            "background-color": "#2B2D38",
            color: "#ffffff",
            "font-size": "13px",
            "font-weight": "normal",
            "border-radius": "30px",
            padding: "0px 0px 0px 0px",
            "inner-padding": "16px 30px 16px 30px",
            "line-height": "120%",
            target: "_blank",
            "vertical-align": "middle",
            border: "none",
            "text-align": "center",
            href: "{{link.subscribe}}"
          },
          children: []
        }, {
          type: "advanced_text",
          data: {
            value: {
              content: "Thank you for be with us.<div>{{business.name}}<br></div>"
            }
          },
          attributes: {
            padding: "10px 25px 10px 25px",
            align: "left"
          },
          children: []
        }]
      }, {
        type: "advanced_footer",
        data: {
          value: []
        },
        attributes: {
          "background-color": "#F1F1F1",
          "background-position": "center center",
          mode: "fluid-height",
          padding: "0px 0px 0px 0px",
          "vertical-align": "top",
          "background-url": ""
        },
        children: [{
          type: "advanced_text",
          data: {
            value: {
              content: "{{business.name}}"
            }
          },
          attributes: {
            padding: "15px 0px 10px 0px",
            align: "center",
            "font-size": "16px",
            "line-height": "0.8",
            "font-weight": "500",
            "font-family": "Arial"
          },
          children: []
        }, {
          type: "advanced_text",
          data: {
            value: {
              content: "<div>{{business.address}}</div>"
            }
          },
          attributes: {
            padding: "0px 0px 5px 0px",
            align: "center",
            "font-size": "10px",
            "line-height": "1.3",
            color: "#908A99",
            "font-family": "Arial"
          },
          children: []
        }, {
          type: "advanced_text",
          data: {
            value: {
              content: '<a href="{{link.preference}}" target="_blank" style="text-decoration: underline;"><font color="#0064ff">Update Preference</font></a> . <a href="{{link.unsubscribe}}" target="_blank" style="text-decoration: underline;"><font color="#0064ff">Unsubscribe</font></a>'
            }
          },
          attributes: {
            padding: "10px 25px 15px 25px",
            align: "center",
            "font-size": "8px",
            "font-family": "Arial",
            "line-height": "0.1"
          },
          children: []
        }]
      }]
    })
  }, t.wcDefaultTemplates = {
    new_order: {
      type: "page",
      subject: "Welcome to Mail Mint email marketing and automation",
      subTitle: "Nice to meet you!",
      content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
        children: [{
          type: "advanced_image",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "17px 0px 17px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            align: "center",
            height: "auto",
            src: O.default,
            width: "100%",
            "container-background-color": "#FFFFFF"
          },
          children: []
        }, {
          type: "advanced_wrapper",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#7f54b3",
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#ffffff">New Order: #{{order_details.order_id}}</font>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "left",
              "font-size": "18px",
              "font-weight": "800"
            },
            children: []
          }]
        }, {
          type: "advanced_hero",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "text",
            data: {
              value: {
                content: '<div style="text-align: left;">You\'ve received the following order from&nbsp;{{billing.first_name}} {{billing.last_name}}:<br></div>'
              }
            },
            attributes: {
              align: "center",
              color: "#2B2D38",
              "font-weight": "normal",
              "border-radius": "3px",
              padding: "14px 0px 10px 14px",
              "inner-padding": "10px 25px 10px 25px",
              "line-height": "30px",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#",
              "font-size": "13px",
              "font-family": "Arial"
            },
            children: []
          }]
        }, {
          type: "order_details",
          data: {
            value: {
              title: "It looks like you forgot something",
              buttonText: "Check out",
              quantity: 3
            }
          },
          attributes: {
            "background-color": "#ffffff",
            "border-color": "#e5e5e5",
            "border-width": "1px",
            "table-head-color": "#000000",
            "table-text-color": "#000000",
            "font-family": "Arial",
            "font-size": "100%",
            "font-weight": "normal",
            "line-height": "1.5",
            padding: "10px 10px 10px 10px",
            "inner-padding": "5px 5px 5px 5px"
          },
          children: [{
            type: "text",
            children: [],
            data: {
              value: {
                content: "custom block title"
              }
            },
            attributes: []
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "20px 0px 20px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Billing Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "billing_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }, {
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Shipping Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "shipping_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "0px 0px 0px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: ["25%", "25%", "25%", "25%"]
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Congratulations on the sale."
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left"
              },
              children: []
            }]
          }]
        }, {
          type: "advanced_footer",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#FFFFFF",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#000000">{{site.title}} - Built with </font><a href="https://woocommerce.com/" target="_blank" style="text-decoration: underline;"><font color="#2271b1">WooCommerce</font></a><br>'
              }
            },
            attributes: {
              padding: "12px 0px 20px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99",
              "font-family": "Arial"
            },
            children: []
          }]
        }]
      })
    },
    cancelled_order: {
      type: "page",
      subject: "Welcome to Mail Mint email marketing and automation",
      subTitle: "Nice to meet you!",
      content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
        children: [{
          type: "advanced_image",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "17px 0px 17px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            align: "center",
            height: "auto",
            src: O.default,
            width: "100%",
            "container-background-color": "#FFFFFF"
          },
          children: []
        }, {
          type: "advanced_wrapper",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#7f54b3",
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#ffffff">Order Cancelled: #{{order_details.order_id}}</font>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "left",
              "font-size": "18px",
              "font-weight": "800"
            },
            children: []
          }]
        }, {
          type: "advanced_hero",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "text",
            data: {
              value: {
                content: '<div style="text-align: left;">Notification to let you know order #{{order_details.order_id}}<br></div><div style="text-align: left;">belonging to&nbsp;{{billing.first_name}}&nbsp;{{billing.last_name}} has been cancelled:<br></div>'
              }
            },
            attributes: {
              align: "center",
              color: "#2B2D38",
              "font-weight": "normal",
              "border-radius": "3px",
              padding: "14px 0px 10px 14px",
              "inner-padding": "10px 25px 10px 25px",
              "line-height": "30px",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#",
              "font-size": "13px",
              "font-family": "Arial"
            },
            children: []
          }]
        }, {
          type: "order_details",
          data: {
            value: {
              title: "It looks like you forgot something",
              buttonText: "Check out",
              quantity: 3
            }
          },
          attributes: {
            "background-color": "#ffffff",
            "border-color": "#e5e5e5",
            "border-width": "1px",
            "table-head-color": "#000000",
            "table-text-color": "#000000",
            "font-family": "Arial",
            "font-size": "100%",
            "font-weight": "normal",
            "line-height": "1.5",
            padding: "10px 10px 10px 10px",
            "inner-padding": "5px 5px 5px 5px"
          },
          children: [{
            type: "text",
            children: [],
            data: {
              value: {
                content: "custom block title"
              }
            },
            attributes: []
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "20px 0px 20px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Billing Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "billing_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }, {
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Shipping Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "shipping_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "0px 0px 0px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: ["25%", "25%", "25%", "25%"]
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Thanks for reading."
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left"
              },
              children: []
            }]
          }]
        }, {
          type: "advanced_footer",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#FFFFFF",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#000000">{{site.title}} - Built with </font><a href="https://woocommerce.com/" target="_blank" style="text-decoration: underline;"><font color="#2271b1">WooCommerce</font></a><br>'
              }
            },
            attributes: {
              padding: "12px 0px 20px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99",
              "font-family": "Arial"
            },
            children: []
          }]
        }]
      })
    },
    failed_order: {
      type: "page",
      subject: "Welcome to Mail Mint email marketing and automation",
      subTitle: "Nice to meet you!",
      content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
        children: [{
          type: "advanced_image",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "17px 0px 17px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            align: "center",
            height: "auto",
            src: O.default,
            width: "100%",
            "container-background-color": "#FFFFFF"
          },
          children: []
        }, {
          type: "advanced_wrapper",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#7f54b3",
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#ffffff">Order Failed: #{{order_details.order_id}}</font>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "left",
              "font-size": "18px",
              "font-weight": "800"
            },
            children: []
          }]
        }, {
          type: "advanced_hero",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "text",
            data: {
              value: {
                content: '<div style="text-align: left;">Payment for order #{{order_details.order_id}} from&nbsp;{{billing.first_name}}&nbsp;{{billing.last_name}} has failed. The order was as follows:<br></div>'
              }
            },
            attributes: {
              align: "center",
              color: "#2B2D38",
              "font-weight": "normal",
              "border-radius": "3px",
              padding: "14px 0px 10px 14px",
              "inner-padding": "10px 25px 10px 25px",
              "line-height": "30px",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#",
              "font-size": "13px",
              "font-family": "Arial"
            },
            children: []
          }]
        }, {
          type: "order_details",
          data: {
            value: {
              title: "It looks like you forgot something",
              buttonText: "Check out",
              quantity: 3
            }
          },
          attributes: {
            "background-color": "#ffffff",
            "border-color": "#e5e5e5",
            "border-width": "1px",
            "table-head-color": "#000000",
            "table-text-color": "#000000",
            "font-family": "Arial",
            "font-size": "100%",
            "font-weight": "normal",
            "line-height": "1.5",
            padding: "10px 10px 10px 10px",
            "inner-padding": "5px 5px 5px 5px"
          },
          children: [{
            type: "text",
            children: [],
            data: {
              value: {
                content: "custom block title"
              }
            },
            attributes: []
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "20px 0px 20px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Billing Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "billing_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }, {
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Shipping Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "shipping_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "0px 0px 0px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: ["25%", "25%", "25%", "25%"]
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: '<div style="text-align: center;"><span style="word-spacing: normal;">Hopefully they\'ll be back. Read more about&nbsp;</span><a href="https://woocommerce.com/document/managing-orders/" target="_blank" style="word-spacing: normal;"><font color="#2271b1">troubleshooting failed payments</font></a></div>'
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left"
              },
              children: []
            }]
          }]
        }, {
          type: "advanced_footer",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#FFFFFF",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#000000">{{site.title}} - Built with </font><a href="https://woocommerce.com/" target="_blank" style="text-decoration: underline;"><font color="#2271b1">WooCommerce</font></a><br>'
              }
            },
            attributes: {
              padding: "12px 0px 20px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99",
              "font-family": "Arial"
            },
            children: []
          }]
        }]
      })
    },
    customer_on_hold_order: {
      type: "page",
      subject: "Welcome to Mail Mint email marketing and automation",
      subTitle: "Nice to meet you!",
      content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
        children: [{
          type: "advanced_image",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "17px 0px 17px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            align: "center",
            height: "auto",
            src: O.default,
            width: "100%",
            "container-background-color": "#FFFFFF"
          },
          children: []
        }, {
          type: "advanced_wrapper",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#7f54b3",
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#ffffff">Thank you for your order</font><br>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "left",
              "font-size": "18px",
              "font-weight": "800"
            },
            children: []
          }]
        }, {
          type: "advanced_hero",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "text",
            data: {
              value: {
                content: '<div style="text-align: left;">Hi {{billing.first_name}},<br></div><div style="text-align: left;">Thanks for your order. It\'s on-hold until we confirm that payment has been received. In the meantime, here\'s a reminder of what you ordered:<br></div>'
              }
            },
            attributes: {
              align: "center",
              color: "#2B2D38",
              "font-weight": "normal",
              "border-radius": "3px",
              padding: "14px 0px 10px 14px",
              "inner-padding": "10px 25px 10px 25px",
              "line-height": "30px",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#",
              "font-size": "13px",
              "font-family": "Arial"
            },
            children: []
          }]
        }, {
          type: "order_details",
          data: {
            value: {
              title: "It looks like you forgot something",
              buttonText: "Check out",
              quantity: 3
            }
          },
          attributes: {
            "background-color": "#ffffff",
            "border-color": "#e5e5e5",
            "border-width": "1px",
            "table-head-color": "#000000",
            "table-text-color": "#000000",
            "font-family": "Arial",
            "font-size": "100%",
            "font-weight": "normal",
            "line-height": "1.5",
            padding: "10px 10px 10px 10px",
            "inner-padding": "5px 5px 5px 5px"
          },
          children: [{
            type: "text",
            children: [],
            data: {
              value: {
                content: "custom block title"
              }
            },
            attributes: []
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "20px 0px 20px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Billing Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "billing_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }, {
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Shipping Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "shipping_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "0px 0px 0px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: ["25%", "25%", "25%", "25%"]
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: '<div style="text-align: left;">We look forward to fulfilling your order soon.<br></div>'
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left"
              },
              children: []
            }]
          }]
        }, {
          type: "advanced_footer",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#FFFFFF",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#000000">{{site.title}} - Built with </font><a href="https://woocommerce.com/" target="_blank" style="text-decoration: underline;"><font color="#2271b1">WooCommerce</font></a><br>'
              }
            },
            attributes: {
              padding: "12px 0px 20px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99",
              "font-family": "Arial"
            },
            children: []
          }]
        }]
      })
    },
    customer_processing_order: {
      type: "page",
      subject: "Welcome to Mail Mint email marketing and automation",
      subTitle: "Nice to meet you!",
      content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
        children: [{
          type: "advanced_image",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "17px 0px 17px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            align: "center",
            height: "auto",
            src: O.default,
            width: "100%",
            "container-background-color": "#FFFFFF"
          },
          children: []
        }, {
          type: "advanced_wrapper",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#7f54b3",
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#ffffff">Thank you for your order</font><br>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "left",
              "font-size": "18px",
              "font-weight": "800"
            },
            children: []
          }]
        }, {
          type: "advanced_hero",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "text",
            data: {
              value: {
                content: '<div style="text-align: left;">Hi {{billing.first_name}},<br></div><div style="text-align: left;">Just to let you know — we\'ve received your order #{{order_details.order_id}}, and it is now being processed:<br></div>'
              }
            },
            attributes: {
              align: "center",
              color: "#2B2D38",
              "font-weight": "normal",
              "border-radius": "3px",
              padding: "14px 0px 10px 14px",
              "inner-padding": "10px 25px 10px 25px",
              "line-height": "30px",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#",
              "font-size": "13px",
              "font-family": "Arial"
            },
            children: []
          }]
        }, {
          type: "order_details",
          data: {
            value: {
              title: "It looks like you forgot something",
              buttonText: "Check out",
              quantity: 3
            }
          },
          attributes: {
            "background-color": "#ffffff",
            "border-color": "#e5e5e5",
            "border-width": "1px",
            "table-head-color": "#000000",
            "table-text-color": "#000000",
            "font-family": "Arial",
            "font-size": "100%",
            "font-weight": "normal",
            "line-height": "1.5",
            padding: "10px 10px 10px 10px",
            "inner-padding": "5px 5px 5px 5px"
          },
          children: [{
            type: "text",
            children: [],
            data: {
              value: {
                content: "custom block title"
              }
            },
            attributes: []
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "20px 0px 20px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Billing Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "billing_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }, {
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Shipping Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "shipping_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "0px 0px 0px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: ["25%", "25%", "25%", "25%"]
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: '<div style="text-align: left;">Thanks for using&nbsp;{{site.title}}<br></div>'
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left"
              },
              children: []
            }]
          }]
        }, {
          type: "advanced_footer",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#FFFFFF",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#000000">{{site.title}} - Built with </font><a href="https://woocommerce.com/" target="_blank" style="text-decoration: underline;"><font color="#2271b1">WooCommerce</font></a><br>'
              }
            },
            attributes: {
              padding: "12px 0px 20px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99",
              "font-family": "Arial"
            },
            children: []
          }]
        }]
      })
    },
    customer_refunded_order: {
      type: "page",
      subject: "Welcome to Mail Mint email marketing and automation",
      subTitle: "Nice to meet you!",
      content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
        children: [{
          type: "advanced_image",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "17px 0px 17px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            align: "center",
            height: "auto",
            src: O.default,
            width: "100%",
            "container-background-color": "#FFFFFF"
          },
          children: []
        }, {
          type: "advanced_wrapper",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#7f54b3",
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#ffffff">Order Refunded: #{{order_details.order_id}}</font><br>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "left",
              "font-size": "18px",
              "font-weight": "800"
            },
            children: []
          }]
        }, {
          type: "advanced_hero",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "text",
            data: {
              value: {
                content: '<div style="text-align: left;">Hi {{billing.first_name}},<br></div><div style="text-align: left;">Your order on&nbsp;{{site.title}} has been refunded. There are more details below for your reference:<br></div>'
              }
            },
            attributes: {
              align: "center",
              color: "#2B2D38",
              "font-weight": "normal",
              "border-radius": "3px",
              padding: "14px 0px 10px 14px",
              "inner-padding": "10px 25px 10px 25px",
              "line-height": "30px",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#",
              "font-size": "13px",
              "font-family": "Arial"
            },
            children: []
          }]
        }, {
          type: "order_details",
          data: {
            value: {
              title: "It looks like you forgot something",
              buttonText: "Check out",
              quantity: 3
            }
          },
          attributes: {
            "background-color": "#ffffff",
            "border-color": "#e5e5e5",
            "border-width": "1px",
            "table-head-color": "#000000",
            "table-text-color": "#000000",
            "font-family": "Arial",
            "font-size": "100%",
            "font-weight": "normal",
            "line-height": "1.5",
            padding: "10px 10px 10px 10px",
            "inner-padding": "5px 5px 5px 5px"
          },
          children: [{
            type: "text",
            children: [],
            data: {
              value: {
                content: "custom block title"
              }
            },
            attributes: []
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "20px 0px 20px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Billing Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "billing_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }, {
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Shipping Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "shipping_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "0px 0px 0px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: ["25%", "25%", "25%", "25%"]
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: '<div style="text-align: left;">We hope to see you again soon.<br></div>'
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left"
              },
              children: []
            }]
          }]
        }, {
          type: "advanced_footer",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#FFFFFF",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#000000">{{site.title}} - Built with </font><a href="https://woocommerce.com/" target="_blank" style="text-decoration: underline;"><font color="#2271b1">WooCommerce</font></a><br>'
              }
            },
            attributes: {
              padding: "12px 0px 20px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99",
              "font-family": "Arial"
            },
            children: []
          }]
        }]
      })
    },
    customer_invoice: {
      type: "page",
      subject: "Welcome to Mail Mint email marketing and automation",
      subTitle: "Nice to meet you!",
      content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
        children: [{
          type: "advanced_image",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "17px 0px 17px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            align: "center",
            height: "auto",
            src: O.default,
            width: "100%",
            "container-background-color": "#FFFFFF"
          },
          children: []
        }, {
          type: "advanced_wrapper",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#7f54b3",
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#ffffff">Your invoice for order: #{{order_details.order_id}}</font><br>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "left",
              "font-size": "18px",
              "font-weight": "800"
            },
            children: []
          }]
        }, {
          type: "advanced_hero",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "text",
            data: {
              value: {
                content: '<div style="text-align: left;">Hi {{billing.first_name}},<br></div><div style="text-align: left;">Here are the details of your order placed on&nbsp;{{order_details.order_date}}<br></div>'
              }
            },
            attributes: {
              align: "center",
              color: "#2B2D38",
              "font-weight": "normal",
              "border-radius": "3px",
              padding: "14px 0px 10px 14px",
              "inner-padding": "10px 25px 10px 25px",
              "line-height": "30px",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#",
              "font-size": "13px",
              "font-family": "Arial"
            },
            children: []
          }]
        }, {
          type: "order_details",
          data: {
            value: {
              title: "It looks like you forgot something",
              buttonText: "Check out",
              quantity: 3
            }
          },
          attributes: {
            "background-color": "#ffffff",
            "border-color": "#e5e5e5",
            "border-width": "1px",
            "table-head-color": "#000000",
            "table-text-color": "#000000",
            "font-family": "Arial",
            "font-size": "100%",
            "font-weight": "normal",
            "line-height": "1.5",
            padding: "10px 10px 10px 10px",
            "inner-padding": "5px 5px 5px 5px"
          },
          children: [{
            type: "text",
            children: [],
            data: {
              value: {
                content: "custom block title"
              }
            },
            attributes: []
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "20px 0px 20px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Billing Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "billing_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }, {
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Shipping Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "shipping_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "0px 0px 0px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: ["25%", "25%", "25%", "25%"]
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: '<div style="text-align: left;">Thanks for using&nbsp;{{site.title}}!<br></div>'
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left"
              },
              children: []
            }]
          }]
        }, {
          type: "advanced_footer",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#FFFFFF",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#000000">{{site.title}} - Built with </font><a href="https://woocommerce.com/" target="_blank" style="text-decoration: underline;"><font color="#2271b1">WooCommerce</font></a><br>'
              }
            },
            attributes: {
              padding: "12px 0px 20px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99",
              "font-family": "Arial"
            },
            children: []
          }]
        }]
      })
    },
    customer_completed_order: {
      type: "page",
      subject: "Welcome to Mail Mint email marketing and automation",
      subTitle: "Nice to meet you!",
      content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
        children: [{
          type: "advanced_image",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "17px 0px 17px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            align: "center",
            height: "auto",
            src: O.default,
            width: "100%",
            "container-background-color": "#FFFFFF"
          },
          children: []
        }, {
          type: "advanced_wrapper",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#7f54b3",
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#ffffff">Thank you for your order</font><br>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "left",
              "font-size": "18px",
              "font-weight": "800"
            },
            children: []
          }]
        }, {
          type: "advanced_hero",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "text",
            data: {
              value: {
                content: '<div style="text-align: left;">Hi {{billing.first_name}},<br></div><div style="text-align: left;">We have finished processing your order.<br></div>'
              }
            },
            attributes: {
              align: "center",
              color: "#2B2D38",
              "font-weight": "normal",
              "border-radius": "3px",
              padding: "14px 0px 10px 14px",
              "inner-padding": "10px 25px 10px 25px",
              "line-height": "30px",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#",
              "font-size": "13px",
              "font-family": "Arial"
            },
            children: []
          }]
        }, {
          type: "order_details",
          data: {
            value: {
              title: "It looks like you forgot something",
              buttonText: "Check out",
              quantity: 3
            }
          },
          attributes: {
            "background-color": "#ffffff",
            "border-color": "#e5e5e5",
            "border-width": "1px",
            "table-head-color": "#000000",
            "table-text-color": "#000000",
            "font-family": "Arial",
            "font-size": "100%",
            "font-weight": "normal",
            "line-height": "1.5",
            padding: "10px 10px 10px 10px",
            "inner-padding": "5px 5px 5px 5px"
          },
          children: [{
            type: "text",
            children: [],
            data: {
              value: {
                content: "custom block title"
              }
            },
            attributes: []
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "20px 0px 20px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Billing Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "billing_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }, {
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Shipping Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "shipping_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "0px 0px 0px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: ["25%", "25%", "25%", "25%"]
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: '<div style="text-align: left;">Thanks for shopping with us.<br></div>'
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left"
              },
              children: []
            }]
          }]
        }, {
          type: "advanced_footer",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#FFFFFF",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#000000">{{site.title}} - Built with </font><a href="https://woocommerce.com/" target="_blank" style="text-decoration: underline;"><font color="#2271b1">WooCommerce</font></a><br>'
              }
            },
            attributes: {
              padding: "12px 0px 20px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99",
              "font-family": "Arial"
            },
            children: []
          }]
        }]
      })
    },
    customer_note: {
      type: "page",
      subject: "Welcome to Mail Mint email marketing and automation",
      subTitle: "Nice to meet you!",
      content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
        children: [{
          type: "advanced_image",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "17px 0px 17px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            align: "center",
            height: "auto",
            src: O.default,
            width: "100%",
            "container-background-color": "#FFFFFF"
          },
          children: []
        }, {
          type: "advanced_wrapper",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#7f54b3",
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#ffffff">A note has been added to your order</font><br>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "left",
              "font-size": "18px",
              "font-weight": "800"
            },
            children: []
          }]
        }, {
          type: "advanced_hero",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "text",
            data: {
              value: {
                content: '<div style="text-align: left;">Hi {{billing.first_name}},<br></div><div style="text-align: left;">The following note has been added to your order:<br></div><div style="text-align: left;">{{customer.note}}<br></div><div style="text-align: left;">As a reminder, here are your order details:<br></div>'
              }
            },
            attributes: {
              align: "center",
              color: "#2B2D38",
              "font-weight": "normal",
              "border-radius": "3px",
              padding: "14px 0px 10px 14px",
              "inner-padding": "10px 25px 10px 25px",
              "line-height": "30px",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#",
              "font-size": "13px",
              "font-family": "Arial"
            },
            children: []
          }]
        }, {
          type: "order_details",
          data: {
            value: {
              title: "It looks like you forgot something",
              buttonText: "Check out",
              quantity: 3
            }
          },
          attributes: {
            "background-color": "#ffffff",
            "border-color": "#e5e5e5",
            "border-width": "1px",
            "table-head-color": "#000000",
            "table-text-color": "#000000",
            "font-family": "Arial",
            "font-size": "100%",
            "font-weight": "normal",
            "line-height": "1.5",
            padding: "10px 10px 10px 10px",
            "inner-padding": "5px 5px 5px 5px"
          },
          children: [{
            type: "text",
            children: [],
            data: {
              value: {
                content: "custom block title"
              }
            },
            attributes: []
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "20px 0px 20px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Billing Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "billing_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }, {
            type: "advanced_column",
            attributes: {
              width: "50%"
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: "Shipping Address"
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left",
                "font-size": "15px",
                "font-weight": "800"
              },
              children: []
            }, {
              type: "shipping_address",
              data: {
                value: []
              },
              attributes: {
                "background-color": "#ffffff",
                color: "#000000",
                "font-family": "Arial",
                "font-size": "14px",
                "font-weight": "normal",
                "line-height": "1.5",
                padding: "10px 10px 10px 10px",
                align: "left"
              },
              children: [{
                type: "text",
                children: [],
                data: {
                  value: {
                    content: "custom block title"
                  }
                },
                attributes: []
              }]
            }]
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "0px 0px 0px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: ["25%", "25%", "25%", "25%"]
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: '<div style="text-align: left;">Thanks for reading.&nbsp;<br></div>'
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left"
              },
              children: []
            }]
          }]
        }, {
          type: "advanced_footer",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#FFFFFF",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#000000">{{site.title}} - Built with </font><a href="https://woocommerce.com/" target="_blank" style="text-decoration: underline;"><font color="#2271b1">WooCommerce</font></a><br>'
              }
            },
            attributes: {
              padding: "12px 0px 20px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99",
              "font-family": "Arial"
            },
            children: []
          }]
        }]
      })
    },
    customer_reset_password: {
      type: "page",
      subject: "Welcome to Mail Mint email marketing and automation",
      subTitle: "Nice to meet you!",
      content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
        children: [{
          type: "advanced_image",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "17px 0px 17px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            align: "center",
            height: "auto",
            src: O.default,
            width: "100%",
            "container-background-color": "#FFFFFF"
          },
          children: []
        }, {
          type: "advanced_wrapper",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#7f54b3",
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#ffffff">Password Reset Request</font><br>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "left",
              "font-size": "18px",
              "font-weight": "800"
            },
            children: []
          }]
        }, {
          type: "advanced_hero",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "text",
            data: {
              value: {
                content: '<div style="text-align: left;">Hi {{user.username}},<br></div><div style="text-align: left;">Someone has requested a new password for the following account on {{site.title}}:<br></div><div style="text-align: left;">Username:&nbsp;{{user.username}}</div><div style="text-align: left;">If you didn\'t make this request, just ignore this email. If you\'d like to proceed:<br></div><div style="text-align: left;">{{url.reset_password}}<br></div>'
              }
            },
            attributes: {
              align: "center",
              color: "#2B2D38",
              "font-weight": "normal",
              "border-radius": "3px",
              padding: "14px 0px 10px 14px",
              "inner-padding": "10px 25px 10px 25px",
              "line-height": "30px",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#",
              "font-size": "13px",
              "font-family": "Arial"
            },
            children: []
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "0px 0px 0px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: ["25%", "25%", "25%", "25%"]
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: '<div style="text-align: left;">Thanks for reading.&nbsp;<br></div>'
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left"
              },
              children: []
            }]
          }]
        }, {
          type: "advanced_footer",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#FFFFFF",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#000000">{{site.title}} - Built with </font><a href="https://woocommerce.com/" target="_blank" style="text-decoration: underline;"><font color="#2271b1">WooCommerce</font></a><br>'
              }
            },
            attributes: {
              padding: "12px 0px 20px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99",
              "font-family": "Arial"
            },
            children: []
          }]
        }]
      })
    },
    customer_new_account: {
      type: "page",
      subject: "Welcome to Mail Mint email marketing and automation",
      subTitle: "Nice to meet you!",
      content: x.BlockManager.getBlockByType(x.BasicType.PAGE).create({
        children: [{
          type: "advanced_image",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "17px 0px 17px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            align: "center",
            height: "auto",
            src: O.default,
            width: "100%",
            "container-background-color": "#FFFFFF"
          },
          children: []
        }, {
          type: "advanced_wrapper",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#7f54b3",
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#ffffff">Welcome to&nbsp;{{site.title}}</font><br>'
              }
            },
            attributes: {
              padding: "10px 25px 10px 25px",
              align: "left",
              "font-size": "18px",
              "font-weight": "800"
            },
            children: []
          }]
        }, {
          type: "advanced_hero",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#ffffff",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "text",
            data: {
              value: {
                content: '<div style="text-align: left;">Hi {{user.username}},<br></div><div style="text-align: left;">Thanks for creating an account on <b>{{site.title}}.</b><br></div><div style="text-align: left;">Your username is&nbsp;<b>{{user.username}}.</b></div><div style="text-align: left;">You can access your account area to view orders, change your password, and more at:<br></div><div style="text-align: left;">{{url.my_account}}<br></div>'
              }
            },
            attributes: {
              align: "center",
              color: "#2B2D38",
              "font-weight": "normal",
              "border-radius": "3px",
              padding: "14px 0px 10px 14px",
              "inner-padding": "10px 25px 10px 25px",
              "line-height": "30px",
              target: "_blank",
              "vertical-align": "middle",
              border: "none",
              "text-align": "center",
              href: "#",
              "font-size": "13px",
              "font-family": "Arial"
            },
            children: []
          }]
        }, {
          type: "advanced_section",
          data: {
            value: {
              noWrap: !1
            }
          },
          attributes: {
            "background-color": "#ffffff",
            padding: "0px 0px 0px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center"
          },
          children: [{
            type: "advanced_column",
            attributes: {
              width: ["25%", "25%", "25%", "25%"]
            },
            data: {
              value: []
            },
            children: [{
              type: "advanced_text",
              data: {
                value: {
                  content: '<div style="text-align: left;">We look forward to seeing you soon.<br></div>'
                }
              },
              attributes: {
                padding: "10px 0px 10px 10px",
                align: "left"
              },
              children: []
            }]
          }]
        }, {
          type: "advanced_footer",
          data: {
            value: []
          },
          attributes: {
            "background-color": "#FFFFFF",
            "background-position": "center center",
            mode: "fluid-height",
            padding: "0px 0px 0px 0px",
            "vertical-align": "top",
            "background-url": ""
          },
          children: [{
            type: "advanced_text",
            data: {
              value: {
                content: '<font color="#000000">{{site.title}} - Built with </font><a href="https://woocommerce.com/" target="_blank" style="text-decoration: underline;"><font color="#2271b1">WooCommerce</font></a><br>'
              }
            },
            attributes: {
              padding: "12px 0px 20px 0px",
              align: "center",
              "font-size": "14px",
              "line-height": "20px",
              color: "#908A99",
              "font-family": "Arial"
            },
            children: []
          }]
        }]
      })
    }
  }, t.cartLayoutOptions = [{
    value: "cart_table",
    label: "Cart table"
  }, {
    value: "three_column_grid",
    label: "Product grid"
  }], t.productLayoutOptions = [{
    value: "single_grid",
    label: "Single Grid"
  }, {
    value: "three_column_grid",
    label: "Three Column"
  }], t.postLayoutOptions = [{
    value: "single_grid",
    label: "Layout 1"
  }, {
    value: "three_column_grid",
    label: "Layout 2"
  }, {
    value: "layout_three",
    label: "Layout 3"
  }], t.postTitlePositionOption = [{
    value: "yes",
    label: "Above Post"
  }, {
    value: "no",
    label: "Above Post Description"
  }], t.postImagePositionOptions = [{
    value: "right",
    label: "Right"
  }, {
    value: "left",
    label: "Left"
  }], t.productImagePositionOptions = [{
    value: "right",
    label: "Right"
  }, {
    value: "left",
    label: "Left"
  }, {
    value: "alternate",
    label: "Alternate"
  }, {
    value: "none",
    label: "None"
  }], t.dividerStyleOptions = [{
    label: "Dashed",
    value: "dashed"
  }, {
    label: "Dotted",
    value: "dotted"
  }, {
    label: "Solid",
    value: "solid"
  }, {
    label: "Double",
    value: "double"
  }, {
    label: "Ridge",
    value: "ridge"
  }, {
    label: "Grove",
    value: "grove"
  }, {
    label: "Inset",
    value: "inset"
  }, {
    label: "Outset",
    value: "outset"
  }];
});
