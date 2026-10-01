// Reconstructed Webpack factory 51253; arguments retain original semantics.
(function (e, t, n) {
  var l = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Panel = t.FooterBlock = void 0;
  var a = n(49050),
    i = n(58088),
    o = n(2543),
    r = l(n(41594)),
    c = n(87381),
    u = a.components.Column,
    d = a.components.Section,
    s = a.components.Wrapper,
    m = a.components.Text;
  a.components.Button, a.components.Image, a.components.Group, t.FooterBlock = (0, a.createCustomBlock)({
    name: "Footer",
    type: c.CustomBlocksType.FOOTER_BLOCK,
    validParentType: [a.BasicType.PAGE, a.AdvancedType.WRAPPER, a.AdvancedType.COLUMN, a.BasicType.WRAPPER, a.BasicType.COLUMN],
    create: function (e) {
      var t,
        n,
        l,
        i,
        r,
        u,
        d,
        s,
        m = {
          type: c.CustomBlocksType.FOOTER_BLOCK,
          data: {
            value: {
              addressTitle: '<div style="text-align: center">Where to find us</div><div><br></div><div style="text-align: center;">{{business.logo_image}}</div><div><br></div><div style="text-align: center;"><span style="font-size: 12px;">{{business.name}}</span></div><div><br></div><div style="text-align: center;"><span style="font-size: 10px; font-weight: 400;">{{business.address}}</span></div><div><br></div><div style="text-align: center;"><span style="font-size: 10px; font-weight: 400;">{{business.phone}}</span></div><div style="text-align: center;"><span style="font-size: 10px; font-weight: 400;"><br></span></div><div style="text-align: center;">Email Preferences<span style="font-size: 10px; font-weight: 400;"><br></span></div><div style="text-align: center;"><br></div><div style="text-align: center;"><span style="font-size: 10px; font-weight: 400;">You are receiving this email because you signed up for our newsletter to receive helpful tips, product launches, and exclusive offers</span><br></div><div style="text-align: center;"><span style="font-size: 10px; font-weight: 400;"><br></span></div><div style="text-align: center;"><a href="{{link.unsubscribe}}" target="_blank" tabindex="-1" style="--hover-color: rgb(var(--primary-4, #1890ff)); --selected-color: rgb(var(--primary-6, #1890ff)); font-size: 10px; font-weight: 400; color: inherit; text-decoration: none;">Unsubscribe</a><span style="font-size: 10px; font-weight: 400;">&nbsp;|&nbsp;</span><a href="{{link.preference}}" target="_blank" tabindex="-1" style="--hover-color: rgb(var(--primary-4, #1890ff)); --selected-color: rgb(var(--primary-6, #1890ff)); font-size: 10px; font-weight: 400; color: inherit; text-decoration: none;">Preference</a><span style="font-size: 10px; font-weight: 400;"><br></span></div>',
              preferenceTitle: "Email preferences",
              businessBasicSettings: null === (t = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === t ? void 0 : t.business_basic_settings,
              businessImageUrl: null === (n = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === n ? void 0 : n.business_basic_settings.logo_url,
              businessName: null === (l = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === l ? void 0 : l.business_basic_settings.business_name,
              address: null === (u = null === (r = null === (i = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === i ? void 0 : i.business_basic_settings) || void 0 === r ? void 0 : r.business_address) || void 0 === u ? void 0 : u.address_line_1,
              phone: null === (d = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === d ? void 0 : d.business_basic_settings.phone,
              businessSocialSettings: null === (s = null === window || void 0 === window ? void 0 : window.MRM_Vars) || void 0 === s ? void 0 : s.business_social_settings,
              unsubscribe: '<a href="{{link.unsubscribe}}">Unsubscribe</a> | <a href="{{link.preference}}">Preference</a>',
              preference: '<a href="{{link.preference}}">Update my preference</a>',
              content: "You are receiving this email because you signed up for our newsletter to receive helpful tips, product launches, and exclusive offers"
            }
          },
          attributes: {
            "background-color": "#ffffff",
            "title-color": "#222222",
            "content-color": "#222222",
            "name-color": "#222222",
            "font-size": "15px",
            "name-size": "12px",
            "content-size": "10px",
            "font-family": "Arial",
            "name-family": "Arial",
            "content-family": "Arial",
            "text-decoration": "none",
            "name-decoration": "none",
            "content-decoration": "none",
            "font-weight": "bold",
            "name-weight": "bold",
            "content-weight": "normal",
            align: "center",
            "line-height": "1",
            "name-height": "1",
            "content-height": "1",
            "font-style": "normal",
            "name-style": "normal",
            "content-style": "normal",
            "letter-spacing": "0px",
            "name-spacing": "0px",
            "content-spacing": "0px",
            padding: "20px 0px 20px 0px"
          },
          children: [{
            type: a.AdvancedType.TEXT,
            children: [],
            data: {
              value: {
                content: "custom block title"
              }
            },
            attributes: {}
          }]
        };
      return (0, o.merge)(m, e);
    },
    render: function (e) {
      var t = e.data,
        n = e.idx,
        l = e.mode,
        o = (e.context, e.dataSource, t.data.value),
        c = o.addressTitle,
        f = (o.preferenceTitle, o.businessImageUrl, o.businessBasicSettings, o.businessSocialSettings),
        p = (o.unsubscribe, o.preference, o.content, o.businessName, o.address, o.phone, t.attributes);
      return r.default.createElement(s, {
        "css-className": "testing" === l ? (0, a.getPreviewClassName)(n, t.type) : "",
        padding: p.padding,
        border: "none",
        direction: "ltr",
        "background-color": p["background-color"]
      }, r.default.createElement(d, {
        padding: "0px"
      }, r.default.createElement(u, {
        padding: "0px",
        border: "none",
        "vertical-align": "top"
      }, r.default.createElement(m, {
        "font-size": p["font-size"],
        padding: "5px 15px",
        "line-height": p["line-height"],
        "letter-spacing": p["letter-spacing"],
        align: p.align,
        "font-weight": p["font-weight"],
        "font-family": p["font-family"],
        "font-style": p["font-style"],
        "text-decoration": p["text-decoration"],
        color: p["title-color"],
        "css-className": (0, i.getContentEditableClassName)(a.BasicType.TEXT, "".concat(n, ".data.value.addressTitle")).join(" ")
      }, c), f && (null == f ? void 0 : f.socialMedia) && (null == f ? void 0 : f.socialMedia.length) > 0 && r.default.createElement("mj-section", null, r.default.createElement("mj-column", null, r.default.createElement("mj-social", {
        "font-size": "15px",
        padding: "0",
        "icon-size": "30px",
        mode: "horizontal"
      }, f.socialMedia.map(function (e, t) {
        return r.default.createElement("mj-social-element", {
          href: e.url,
          src: e.icon,
          key: t
        });
      })))))));
    }
  });
  var f = n(69595);
  Object.defineProperty(t, "Panel", {
    enumerable: !0,
    get: function () {
      return f.Panel;
    }
  });
});
