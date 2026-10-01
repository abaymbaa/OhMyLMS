// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var GK = [{
    label: (0, b.__)("Royal Purple", "ohmylms"),
    value: "royal-purple",
    colors: {
      primary: "#6E42D3",
      heading: "#000D25",
      text: "#52525B",
      progress: "#35BD4C"
    }
  }, {
    label: (0, b.__)("Ocean Blue", "ohmylms"),
    value: "ocean-blue",
    colors: {
      primary: "#2563EB",
      heading: "#0F172A",
      text: "#475569",
      progress: "#06B6D4"
    }
  }, {
    label: (0, b.__)("Sunset Orange", "ohmylms"),
    value: "sunset-orange",
    colors: {
      primary: "#EA580C",
      heading: "#1C1917",
      text: "#57534E",
      progress: "#F59E0B"
    }
  }, {
    label: (0, b.__)("Forest Green", "ohmylms"),
    value: "forest-green",
    colors: {
      primary: "#16A34A",
      heading: "#052E16",
      text: "#4B5563",
      progress: "#22D3EE"
    }
  }, {
    label: (0, b.__)("Rose Pink", "ohmylms"),
    value: "rose-pink",
    colors: {
      primary: "#E11D48",
      heading: "#1A1A2E",
      text: "#64748B",
      progress: "#A855F7"
    }
  }],
  UK = function (e) {
    var t,
      n,
      r,
      a,
      o,
      i,
      c = e.activeTab,
      u = e.handleSave,
      s = e.handleMigration,
      d = e.selectedCourses,
      m = e.isSaving;
    M().noConflict();
    var p = (0, y.useDispatch)(T.default),
      f = (0, y.useSelect)(function (e) {
        return e(T.default).getDesignSettings();
      }, []),
      v = (null == f || null === (t = f.ohmylms_video_player_logo) || void 0 === t ? void 0 : t.value) || "",
      h = (null == f || null === (n = f.ohmylms_video_player_logo_bg_color) || void 0 === n ? void 0 : n.value) || "#6E42D3",
      _ = function (e, t) {
        return function (e) {
          if (Array.isArray(e)) return e;
        }(e) || function (e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
            var r,
              a,
              o,
              i,
              l = [],
              c = !0,
              u = !1;
            try {
              if (o = (n = n.call(e)).next, 0 === t) {
                if (Object(n) !== n) return;
                c = !1;
              } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
            } catch (e) {
              u = !0, a = e;
            } finally {
              try {
                if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return;
              } finally {
                if (u) throw a;
              }
            }
            return l;
          }
        }(e, t) || function (e, t) {
          if (e) {
            if ("string" == typeof e) return HK(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? HK(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, g.useState)(""), 2),
      w = _[0],
      E = _[1],
      S = (0, g.useRef)(!1),
      R = (0, g.useCallback)(function () {
        var e, t, n, r;
        return {
          primary: null == f || null === (e = f.ohmylms_primary_color_scheme) || void 0 === e || null === (e = e.value) || void 0 === e ? void 0 : e.toLowerCase(),
          heading: null == f || null === (t = f.ohmylms_heading_color_scheme) || void 0 === t || null === (t = t.value) || void 0 === t ? void 0 : t.toLowerCase(),
          text: null == f || null === (n = f.ohmylms_body_text_color_scheme) || void 0 === n || null === (n = n.value) || void 0 === n ? void 0 : n.toLowerCase(),
          progress: null == f || null === (r = f.ohmylms_body_progress_color_scheme) || void 0 === r || null === (r = r.value) || void 0 === r ? void 0 : r.toLowerCase()
        };
      }, [f]);
    (0, g.useEffect)(function () {
      var e, t;
      if (!S.current && null != f && null !== (e = f.ohmylms_primary_color_scheme) && void 0 !== e && e.value) {
        S.current = !0;
        var n = null == f || null === (t = f.ohmylms_color_preset) || void 0 === t ? void 0 : t.value;
        if (n && GK.find(function (e) {
          return e.value === n;
        })) E(n);else {
          var r = R(),
            a = GK.find(function (e) {
              return e.colors.primary.toLowerCase() === r.primary && e.colors.heading.toLowerCase() === r.heading && e.colors.text.toLowerCase() === r.text && e.colors.progress.toLowerCase() === r.progress;
            });
          E((null == a ? void 0 : a.value) || GK[0].value);
        }
      }
    }, [f, R]);
    var x = (0, g.useMemo)(function () {
        var e = GK.find(function (e) {
          return e.value === w;
        });
        if (!e) return !1;
        var t = R();
        return e.colors.primary.toLowerCase() !== t.primary || e.colors.heading.toLowerCase() !== t.heading || e.colors.text.toLowerCase() !== t.text || e.colors.progress.toLowerCase() !== t.progress;
      }, [w, R]),
      C = x ? "".concat(w, "-customized") : w,
      P = (0, g.useMemo)(function () {
        var e = GK.map(function (e) {
          return {
            label: e.label,
            value: e.value
          };
        });
        if (x) {
          var t = GK.find(function (e) {
            return e.value === w;
          });
          t && e.push({
            label: "".concat(t.label, " (").concat((0, b.__)("Customized", "ohmylms"), ")"),
            value: "".concat(w, "-customized")
          });
        }
        return e;
      }, [x, w]),
      O = (0, g.useCallback)(function (e) {
        if (!e.endsWith("-customized")) {
          var t = GK.find(function (t) {
            return t.value === e;
          });
          t && (E(e), p.updateDesignSettings({
            ohmylms_color_preset: {
              value: e
            },
            ohmylms_primary_color_scheme: {
              value: t.colors.primary
            },
            ohmylms_heading_color_scheme: {
              value: t.colors.heading
            },
            ohmylms_body_text_color_scheme: {
              value: t.colors.text
            },
            ohmylms_body_progress_color_scheme: {
              value: t.colors.progress
            }
          }));
        }
      }, [p]),
      k = (0, g.useMemo)(function () {
        var e = GK.find(function (e) {
          return e.value === w;
        });
        return (null == e ? void 0 : e.colors) || GK[0].colors;
      }, [w]),
      j = [{
        title: (0, b.__)("Primary Color", "ohmylms"),
        description: (0, b.__)("Choose the main brand color used for buttons and highlights.", "ohmylms"),
        isShowResetBtn: !0,
        defaultColor: k.primary,
        initialColor: null == f || null === (r = f.ohmylms_primary_color_scheme) || void 0 === r ? void 0 : r.value,
        onChange: function (e) {
          p.updateDesignSettings({
            ohmylms_primary_color_scheme: {
              value: e
            }
          });
        }
      }, {
        title: (0, b.__)("Heading Color", "ohmylms"),
        description: (0, b.__)("Set the color for all main headings and titles.", "ohmylms"),
        isShowResetBtn: !0,
        defaultColor: k.heading,
        initialColor: null == f || null === (a = f.ohmylms_heading_color_scheme) || void 0 === a ? void 0 : a.value,
        onChange: function (e) {
          p.updateDesignSettings({
            ohmylms_heading_color_scheme: {
              value: e
            }
          });
        }
      }, {
        title: (0, b.__)("Text Color", "ohmylms"),
        description: (0, b.__)("Define the default color for body text.", "ohmylms"),
        isShowResetBtn: !0,
        defaultColor: k.text,
        initialColor: null == f || null === (o = f.ohmylms_body_text_color_scheme) || void 0 === o ? void 0 : o.value,
        onChange: function (e) {
          p.updateDesignSettings({
            ohmylms_body_text_color_scheme: {
              value: e
            }
          });
        }
      }, {
        title: (0, b.__)("Progress bar Color", "ohmylms"),
        description: (0, b.__)("Choose the color used for course progress bars.", "ohmylms"),
        isShowResetBtn: !0,
        defaultColor: k.progress,
        initialColor: null == f || null === (i = f.ohmylms_body_progress_color_scheme) || void 0 === i ? void 0 : i.value,
        onChange: function (e) {
          p.updateDesignSettings({
            ohmylms_body_progress_color_scheme: {
              value: e
            }
          });
        }
      }],
      A = function () {
        var e = wp.media({
          title: (0, b.__)("Select Logo Image", "ohmylms"),
          button: {
            text: (0, b.__)("Use this image", "ohmylms")
          },
          multiple: !1
        });
        e.on("select", function () {
          var t = e.state().get("selection").first().toJSON();
          "image" === t.type && p.updateDesignSettings({
            ohmylms_video_player_logo: {
              value: t.url
            }
          });
        }), e.open();
      };
    return (0, g.useEffect)(function () {
      var e = function () {
        var e,
          t = (e = BK().m(function e() {
            var t;
            return BK().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  return p.setLoadingSetting(!0), e.n = 1, l()({
                    path: "ohmylms/v1/settings/design"
                  });
                case 1:
                  t = e.v, p.setDesignSettings(t), p.setLoadingSetting(!1);
                case 2:
                  return e.a(2);
              }
            }, e);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                VK(o, r, a, i, l, "next", e);
              }
              function l(e) {
                VK(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function () {
          return t.apply(this, arguments);
        };
      }();
      e();
    }, []), React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      className: "ohmylms-full-screen-height"
    }, React.createElement(I.SpacerWP, {
      padding: 4,
      marginTop: 0,
      marginBottom: 0
    }, React.createElement(I.CardWP, {
      isBorderless: !0
    }, React.createElement(I.SpacerWP, {
      paddingTop: 2,
      paddingBottom: 6,
      paddingX: 2,
      marginTop: 0,
      marginBottom: 4
    }, React.createElement(Nm, {
      title: (0, b.__)("Color Preset", "ohmylms"),
      description: (0, b.__)("Pick a preset to get started. You can change colors later whenever you like.", "ohmylms"),
      placeholder: (0, b.__)("Select Color Preset", "ohmylms"),
      staticSearch: !0,
      isSearchable: !1,
      isMulti: !1,
      data: P,
      value: C,
      onChange: O,
      selectorWeight: "400px"
    }), React.createElement(I.SpacerWP, {
      marginBottom: 0,
      marginX: 4
    }, React.createElement(zK, {
      colorsConfig: j,
      showDivider: !1
    })))), React.createElement(I.CardWP, {
      isBorderless: !0
    }, React.createElement(I.SpacerWP, {
      padding: 6,
      marginBottom: 4
    }, React.createElement("h3", {
      style: {
        margin: "0px 0px 8px",
        fontSize: "16px",
        fontWeight: 600
      }
    }, (0, b.__)("Video Player Branding", "ohmylms")), React.createElement("p", {
      style: {
        marginTop: "0px",
        marginBottom: "16px",
        color: "#687784",
        fontSize: "14px"
      }
    }, (0, b.__)("Upload your logo to display on the video player during lesson playback.", "ohmylms")), v ? React.createElement(I.FlexWP, {
      align: "flex-start",
      justify: "flex-start",
      direction: "column",
      gap: "3"
    }, React.createElement(I.AvatarWP, {
      shape: "square",
      src: v,
      alt: "logo",
      style: {
        height: "auto",
        maxHeight: "50px",
        width: "auto"
      }
    }), React.createElement(hu, {
      handleEdit: A,
      handleDelete: function () {
        p.updateDesignSettings({
          ohmylms_video_player_logo: {
            value: ""
          }
        });
      },
      justify: "flex-start",
      alertTitle: (0, b.__)("Remove video player logo", "ohmylms"),
      alertDescription: (0, b.__)("Are you sure you want to remove the video player logo?", "ohmylms")
    })) : React.createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: A
    }, (0, b.__)("Upload Logo", "ohmylms")), React.createElement(I.SpacerWP, {
      marginTop: 4,
      marginBottom: 0
    }, React.createElement(zK, {
      colorsConfig: [{
        title: (0, b.__)("Logo Background Color", "ohmylms"),
        description: (0, b.__)("Background color shown behind the logo on the video player.", "ohmylms"),
        isShowResetBtn: !0,
        defaultColor: "#6E42D3",
        initialColor: h,
        onChange: function (e) {
          return p.updateDesignSettings({
            ohmylms_video_player_logo_bg_color: {
              value: e
            }
          });
        }
      }],
      showDivider: !1
    })))), React.createElement(SK, {
      activeTab: c,
      handleSave: u,
      handleMigration: s,
      selectedCourses: d,
      isSaving: m
    }))));
  };
const qK = (0, g.memo)(UK);
function YK() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return QK(u, "_invoke", function (n, r, a) {
      var o,
        l,
        c,
        u = 0,
        s = a || [],
        d = !1,
        m = {
          p: 0,
          n: 0,
          v: e,
          a: p,
          f: p.bind(e, 4),
          d: function (t, n) {
            return o = t, l = 0, c = e, m.n = n, i;
          }
        };
      function p(n, r) {
        for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
          var a,
            o = s[t],
            p = m.p,
            f = o[2];
          n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
        }
        if (a || n > 1) return i;
        throw d = !0, r;
      }
      return function (a, s, f) {
        if (u > 1) throw TypeError("Generator is already running");
        for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
          o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
          try {
            if (u = 2, o) {
              if (l || (a = "next"), t = o[a]) {
                if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                c = t.value, l < 2 && (l = 0);
              } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
              o = e;
            } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
          } catch (t) {
            o = e, l = 1, c = t;
          } finally {
            u = 1;
          }
        }
        return {
          value: t,
          done: d
        };
      };
    }(n, a, o), !0), u;
  }
  var i = {};
  function l() {}
  function c() {}
  function u() {}
  t = Object.getPrototypeOf;
  var s = [][r] ? t(t([][r]())) : (QK(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, QK(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, QK(d, "constructor", u), QK(u, "constructor", c), c.displayName = "GeneratorFunction", QK(u, a, "GeneratorFunction"), QK(d), QK(d, a, "Generator"), QK(d, r, function () {
    return this;
  }), QK(d, "toString", function () {
    return "[object Generator]";
  }), (YK = function () {
    return {
      w: o,
      m
    };
  })();
}
function QK(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  QK = function (e, t, n, r) {
    function o(t, n) {
      QK(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, QK(e, t, n, r);
}
function ZK(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function $K(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var KK = function (e) {
  true;
  var t,
    n,
    r,
    a,
    o = e.activeTab,
    i = e.handleSave,
    c = e.handleMigration,
    u = e.selectedCourses,
    s = e.isSaving,
    d = (0, y.useDispatch)(T.default),
    m = function (e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var r,
            a,
            o,
            i,
            l = [],
            c = !0,
            u = !1;
          try {
            if (o = (n = n.call(e)).next, 0 === t) {
              if (Object(n) !== n) return;
              c = !1;
            } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
          } catch (e) {
            u = !0, a = e;
          } finally {
            try {
              if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return;
            } finally {
              if (u) throw a;
            }
          }
          return l;
        }
      }(e, t) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return $K(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $K(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    p = m[0],
    f = m[1],
    v = (0, y.useSelect)(function (e) {
      return e(T.default).getAccountPrivacySettings();
    }, []);
  return (0, g.useEffect)(function () {
    var e = function () {
      var e,
        t = (e = YK().m(function e() {
          var t;
          return YK().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return d.setLoadingSetting(!0), e.n = 1, l()({
                  path: "ohmylms/v1/settings/account-and-privacy"
                });
              case 1:
                t = e.v, d.setAccountPrivacySettings(t), d.setLoadingSetting(!1);
              case 2:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              ZK(o, r, a, i, l, "next", e);
            }
            function l(e) {
              ZK(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    e();
  }, []), React.createElement(React.Fragment, null, React.createElement(Ea, {
    isBorderless: !0,
    variant: "secondary",
    className: "ohmylms-full-screen-height"
  }, React.createElement(I.SpacerWP, {
    padding: 4,
    marginTop: 0,
    marginBottom: 0
  }, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    paddingY: 4,
    paddingX: 2,
    marginTop: 0,
    marginBottom: 4
  }, React.createElement(I.SpacerWP, {
    paddingX: 4,
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 0
  }, React.createElement(zm, {
    title: (0, b.__)("Allow Guest Checkout", "ohmylms"),
    description: (0, b.__)("Allow visitors to purchase courses without creating an account first.", "ohmylms"),
    variant: "v2",
    align: "flex-start"
  }, React.createElement(I.SwitchWP, {
    checked: "yes" === (null == v || null === (t = v.ohmylms_allow_purchase_without_login) || void 0 === t ? void 0 : t.value),
    onChange: function (e) {
      return function (e) {
        d.updateAccountPrivacySettings({
          ohmylms_allow_purchase_without_login: {
            value: e ? "yes" : "no"
          }
        });
      }(e);
    },
    isDefaultStyle: !0
  }))), React.createElement(I.SpacerWP, {
    paddingX: 4,
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 0
  }, React.createElement(zm, {
    title: (0, b.__)("Require Email Verification", "ohmylms"),
    description: (0, b.__)("Students must verify their email address before accessing course content.", "ohmylms"),
    variant: "v2",
    align: "flex-start"
  }, React.createElement(I.SwitchWP, {
    checked: "yes" === (null == v || null === (n = v.ohmylms_require_email_verification) || void 0 === n ? void 0 : n.value),
    onChange: function (e) {
      return function (e) {
        d.updateAccountPrivacySettings({
          ohmylms_require_email_verification: {
            value: e ? "yes" : "no"
          }
        });
      }(e);
    },
    isDefaultStyle: !0
  }))), React.createElement(I.SpacerWP, {
    paddingX: 4,
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 0
  }, React.createElement(zm, {
    title: (0, b.__)("Checkout Phone Field", "ohmylms"),
    description: (0, b.__)("Show the billing phone number as optional, force it to be required, or hide it. Some payment gateways (e.g. Authorize.Net) can still make it required on their own.", "ohmylms"),
    variant: "v2",
    align: "flex-start"
  }, React.createElement(I.SelectWP, {
    value: (null == v || null === (r = v.ohmylms_checkout_phone_field) || void 0 === r ? void 0 : r.value) || "optional",
    options: [{
      label: (0, b.__)("Optional", "ohmylms"),
      value: "optional"
    }, {
      label: (0, b.__)("Required", "ohmylms"),
      value: "required"
    }, {
      label: (0, b.__)("Hidden", "ohmylms"),
      value: "hidden"
    }],
    onChange: function (e) {
      return function (e) {
        d.updateAccountPrivacySettings({
          ohmylms_checkout_phone_field: {
            value: e
          }
        });
      }(e);
    }
  }))), React.createElement(Pf, {
    title: (0, b.__)("Privacy Policy Message", "ohmylms"),
    description: (0, b.__)("Display a short note to assure students about your data privacy practices.", "ohmylms"),
    inputType: "textarea",
    onChange: function (e) {
      d.updateAccountPrivacySettings({
        ohmylms_privacy_policy_message: {
          value: e
        }
      });
    },
    value: Ge(null == v || null === (a = v.ohmylms_privacy_policy_message) || void 0 === a ? void 0 : a.value)
  }))), React.createElement(SK, {
    activeTab: o,
    handleSave: i,
    handleMigration: c,
    selectedCourses: u,
    isSaving: s
  }))), p && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: p,
    onClose: f
  })));
};
const JK = (0, g.memo)(KK);
function XK(e) {
  return XK = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, XK(e);
}
function eJ() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return tJ(u, "_invoke", function (n, r, a) {
      var o,
        l,
        c,
        u = 0,
        s = a || [],
        d = !1,
        m = {
          p: 0,
          n: 0,
          v: e,
          a: p,
          f: p.bind(e, 4),
          d: function (t, n) {
            return o = t, l = 0, c = e, m.n = n, i;
          }
        };
      function p(n, r) {
        for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
          var a,
            o = s[t],
            p = m.p,
            f = o[2];
          n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
        }
        if (a || n > 1) return i;
        throw d = !0, r;
      }
      return function (a, s, f) {
        if (u > 1) throw TypeError("Generator is already running");
        for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
          o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
          try {
            if (u = 2, o) {
              if (l || (a = "next"), t = o[a]) {
                if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                c = t.value, l < 2 && (l = 0);
              } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
              o = e;
            } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
          } catch (t) {
            o = e, l = 1, c = t;
          } finally {
            u = 1;
          }
        }
        return {
          value: t,
          done: d
        };
      };
    }(n, a, o), !0), u;
  }
  var i = {};
  function l() {}
  function c() {}
  function u() {}
  t = Object.getPrototypeOf;
  var s = [][r] ? t(t([][r]())) : (tJ(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, tJ(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, tJ(d, "constructor", u), tJ(u, "constructor", c), c.displayName = "GeneratorFunction", tJ(u, a, "GeneratorFunction"), tJ(d), tJ(d, a, "Generator"), tJ(d, r, function () {
    return this;
  }), tJ(d, "toString", function () {
    return "[object Generator]";
  }), (eJ = function () {
    return {
      w: o,
      m
    };
  })();
}
function tJ(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  tJ = function (e, t, n, r) {
    function o(t, n) {
      tJ(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, tJ(e, t, n, r);
}
function nJ(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function rJ(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function aJ(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? rJ(Object(n), !0).forEach(function (t) {
      oJ(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rJ(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function oJ(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != XK(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != XK(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == XK(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
