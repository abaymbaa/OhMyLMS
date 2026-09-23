// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function i4(e, t) {
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
      if ("string" == typeof e) return l4(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l4(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function l4(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var c4 = function () {
  var e = i4((0, g.useState)("creator"), 2),
    t = e[0],
    n = e[1],
    r = i4((0, g.useState)(""), 2),
    a = r[0],
    o = (r[1], (0, f.Zp)()),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getEmails();
    }, []),
    l = (0, y.useSelect)(function (e) {
      return e(T.default).getEmailLoading();
    }, []),
    c = (0, y.useDispatch)(T.default),
    u = c.setEmail,
    s = c.updateSingleEmail,
    d = c.updateEmails,
    m = c.searchEmails,
    p = function (e) {
      var n = i[t].find(function (t) {
        return t.basic.id === e;
      });
      u(n), o("/emails/".concat(e));
    },
    v = function () {
      var e;
      return React.createElement(I.CardWP, {
        isBorderless: !0
      }, React.createElement(I.SpacerWP, {
        marginBottom: 0,
        marginTop: 2.5,
        padding: 6
      }, (null === (e = i[t]) || void 0 === e ? void 0 : e.length) > 0 && i[t].map(function (e, n) {
        var r, a, o, l, c;
        return React.createElement(React.Fragment, {
          key: null !== (r = null == e || null === (a = e.basic) || void 0 === a ? void 0 : a.id) && void 0 !== r ? r : n
        }, 0 !== n && React.createElement(I.SpacerWP, {
          marginTop: 8,
          marginBottom: 8
        }, React.createElement(I.DividerWP, {
          color: "#EDF2FB"
        })), React.createElement(I.FlexWP, {
          gap: 2,
          align: "center",
          justify: "space-between",
          key: null == e || null === (o = e.basic) || void 0 === o ? void 0 : o.id,
          className: "omlms-email-listing-card"
        }, React.createElement(I.FlexWP, {
          direction: "column",
          gap: 2,
          style: {
            width: "70%"
          }
        }, React.createElement(I.HeadingWP, {
          level: 4,
          color: "#000D25",
          size: "16px",
          onClick: function () {
            var t;
            return p(null == e || null === (t = e.basic) || void 0 === t ? void 0 : t.id);
          },
          style: {
            cursor: "pointer"
          }
        }, null == e || null === (l = e.basic) || void 0 === l ? void 0 : l.title), React.createElement(I.TextWP, {
          color: "#687784",
          size: "14px"
        }, null == e || null === (c = e.basic) || void 0 === c ? void 0 : c.tooltip)), React.createElement(I.FlexWP, {
          gap: 4,
          align: "center",
          justify: "end",
          className: "omlms-email-listing-card-actions"
        }, React.createElement(Bt.A, {
          onChange: function () {
            var n;
            return function (e) {
              var n,
                r,
                a = i[t].find(function (t) {
                  return t.basic.id === e;
                });
              a.enable = !a.enable, s(null == a || null === (n = a.basic) || void 0 === n ? void 0 : n.id, a), d(null == a || null === (r = a.basic) || void 0 === r ? void 0 : r.id, {
                enable: a.enable
              }, t);
            }(null == e || null === (n = e.basic) || void 0 === n ? void 0 : n.id);
          },
          checked: null == e ? void 0 : e.enable,
          isDefaultStyle: !0
        }), React.createElement(D.A, {
          variant: "text",
          onClick: function () {
            var t;
            return p(null == e || null === (t = e.basic) || void 0 === t ? void 0 : t.id);
          }
        }, React.createElement(I.FlexWP, {
          align: "center",
          gap: 2.25
        }, React.createElement(I.TextWP, {
          color: "#444D5E",
          size: "14px",
          fontWeight: 400
        }, (0, b.__)("Edit Template", "ohmylms")), React.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "14",
          height: "16",
          viewBox: "0 0 14 16",
          fill: "none"
        }, React.createElement("path", {
          d: "M14 3L11 0L2.5 8.5L1.5 12.5L5.5 11.5L14 3ZM7 14.5H0V16H7V14.5Z",
          fill: "#444D5E"
        })))))));
      })));
    },
    h = [{
      label: React.createElement(React.Fragment, null, (0, b.__)("Admin Email", "ohmylms")),
      key: "creator",
      children: v()
    }, {
      label: React.createElement(React.Fragment, null, (0, b.__)("Student Email", "ohmylms")),
      key: "student",
      children: v()
    }];
  return (0, g.useEffect)(function () {
    (a.length > 2 || 0 === a.length) && m(a, i[t]);
  }, [a]), l ? React.createElement(I.SkeletonWP, {
    active: !0,
    rows: 10,
    style: {
      position: "absolute",
      top: "17px",
      left: "15px",
      zIndex: 3,
      background: "#FFFFFF",
      height: "calc(100% - 32px)",
      padding: "24px",
      width: "calc(100% - 26px)",
      borderRadius: "8px"
    }
  }) : React.createElement(React.Fragment, null, React.createElement(I.TabsWP, {
    items: h,
    className: "omlms-emails-tabs",
    onChange: function (e) {
      n(e);
    },
    activekey: t
  }));
};

const u4 = (0, g.memo)(c4);

var s4 = n(52034),
  d4 = n(34186),
  m4 = n(357);

function p4(e) {
  return p4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, p4(e);
}

var f4 = function () {
  var e = (0, y.useSelect)(function (e) {
      return e(T.default).selectSettingsMap();
    }, []),
    t = (0, y.useDispatch)(T.default).updateSettings;
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "start",
    gap: "4",
    className: "omlms-email-button-position-wrapper"
  }, React.createElement(I.FlexItemWP, {
    style: {
      maxWidth: "300px"
    }
  }, React.createElement(I.SpacerWP, {
    marginY: 5
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Button Position", "ohmylms")), React.createElement(I.TextWP, null, (0, b.__)("Select the alignment of your Call To Action buttons in the email.", "ohmylms")))), React.createElement(I.FlexItemWP, {
    style: {
      marginLeft: "auto"
    },
    className: "omlms-email-button-position-options"
  }, React.createElement(I.RadioGroupWP, {
    onChange: function (e) {
      return function (e, n, r) {
        t("creator_lms_email_button_possition", function (e, t, n) {
          return (t = function (e) {
            var t = function (e) {
              if ("object" != p4(e) || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var n = t.call(e, "string");
                if ("object" != p4(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e);
            return "symbol" == p4(t) ? t : t + "";
          }(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }({}, "value", r));
      }(0, 0, e);
    },
    value: null == e ? void 0 : e.creator_lms_email_button_possition,
    options: [{
      value: "left",
      label: React.createElement(q.Icon, {
        icon: s4.A,
        width: "24px",
        height: "24px"
      })
    }, {
      value: "center",
      label: React.createElement(q.Icon, {
        icon: d4.A,
        width: "24px",
        height: "24px"
      })
    }, {
      value: "right",
      label: React.createElement(q.Icon, {
        icon: m4.A,
        width: "24px",
        height: "24px"
      })
    }],
    isBlock: !1
  }))), React.createElement(Tt.A, null));
};

const v4 = (0, g.memo)(f4);

function g4(e) {
  return g4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, g4(e);
}

var h4 = function () {
  var e = (0, y.useSelect)(function (e) {
      return e(T.default).selectSettingsMap();
    }, []),
    t = (0, y.useDispatch)(T.default).updateSettings,
    n = function (e, n, r) {
      t(e, function (e, t, n) {
        return (t = function (e) {
          var t = function (e) {
            if ("object" != g4(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != g4(n)) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          }(e);
          return "symbol" == g4(t) ? t : t + "";
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }({}, n, r));
    };
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "start",
    gap: "4"
  }, React.createElement(I.FlexItemWP, {
    style: {
      maxWidth: "300px"
    }
  }, React.createElement(I.SpacerWP, {
    marginY: 5
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Email sender options", "ohmylms")), React.createElement(I.TextWP, null, (0, b.__)("Set up sender details and email footer options.", "ohmylms")))), React.createElement(I.FlexItemWP, {
    style: {
      width: "calc(100% - 300px - 4*4px)"
    }
  }, React.createElement(I.SpacerWP, {
    marginY: 5
  }, React.createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: "2"
  }, React.createElement(I.TextWP, null, (0, b.__)("Sender Email Address", "ohmylms")), React.createElement(I.TooltipWP, {
    title: (0, b.__)("Enter the email address that will be used to send emails.", "ohmylms")
  }, React.createElement(Mt.A, null))), React.createElement(I.SpacerWP, null), React.createElement(I.InputWP, {
    value: null == e ? void 0 : e.creator_lms_email_sender_email_address,
    onChange: function (e) {
      return n("creator_lms_email_sender_email_address", "value", e);
    }
  })), React.createElement(I.SpacerWP, {
    marginY: 5
  }, React.createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: "2"
  }, React.createElement(I.TextWP, null, (0, b.__)("Sender Name", "ohmylms")), React.createElement(I.TooltipWP, {
    title: (0, b.__)("Enter the name that will be used to send emails.", "ohmylms")
  }, React.createElement(Mt.A, null))), React.createElement(I.SpacerWP, null), React.createElement(I.InputWP, {
    value: null == e ? void 0 : e.creator_lms_email_sender_name,
    onChange: function (e) {
      return n("creator_lms_email_sender_name", "value", e);
    }
  })), React.createElement(I.SpacerWP, {
    marginY: 5
  }, React.createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: "2"
  }, React.createElement(I.TextWP, null, (0, b.__)("Email Footer Text", "ohmylms")), React.createElement(I.TooltipWP, {
    title: (0, b.__)("Enter the footer text that will be used to send emails.", "ohmylms")
  }, React.createElement(Mt.A, null))), React.createElement(I.SpacerWP, null), React.createElement(W.A, {
    value: null == e ? void 0 : e.creator_lms_email_footer_text,
    onChange: function (e) {
      return n("creator_lms_email_footer_text", "value", e);
    }
  })))));
};

const y4 = (0, g.memo)(h4);

function b4(e) {
  return b4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, b4(e);
}

function _4() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return w4(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (w4(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, w4(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, w4(d, "constructor", u), w4(u, "constructor", c), c.displayName = "GeneratorFunction", w4(u, a, "GeneratorFunction"), w4(d), w4(d, a, "Generator"), w4(d, r, function () {
    return this;
  }), w4(d, "toString", function () {
    return "[object Generator]";
  }), (_4 = function () {
    return {
      w: o,
      m
    };
  })();
}

function w4(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  w4 = function (e, t, n, r) {
    function o(t, n) {
      w4(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, w4(e, t, n, r);
}

function E4(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

var S4 = function (e) {
  var t = e.isOpen,
    n = e.setIsOpen,
    r = (0, z.A)(),
    a = r.openNotificationWithIcon,
    o = r.contextHolder,
    i = (0, y.useSelect)(function (e) {
      return e(T.default).selectSettingsMap();
    }, []),
    l = (0, y.useDispatch)(T.default),
    c = l.updateEmailSettings,
    u = l.updateSettings,
    s = function () {
      n(!1);
    },
    d = function () {
      var e,
        t = (e = _4().m(function e() {
          var t;
          return _4().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, e.n = 1, c(i);
              case 1:
                a("success", "Saved successfully."), e.n = 3;
                break;
              case 2:
                e.p = 2, t = e.v, console.error(t), a("error", "Failed to update. Please try again.");
              case 3:
                return e.a(2);
            }
          }, e, null, [[0, 2]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              E4(o, r, a, i, l, "next", e);
            }
            function l(e) {
              E4(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    m = function (e, t, n) {
      u(e, function (e, t, n) {
        return (t = function (e) {
          var t = function (e) {
            if ("object" != b4(e) || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != b4(n)) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e);
          }(e);
          return "symbol" == b4(t) ? t : t + "";
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }({}, t, n));
    },
    p = [{
      title: (0, b.__)("Base color", "ohmylms"),
      description: (0, b.__)("The base color for email template.", "ohmylms"),
      isShowResetBtn: !0,
      defaultColor: "#6E42D3",
      initialColor: i.creator_lms_email_base_color,
      onChange: function (e) {
        m("creator_lms_email_base_color", "value", e);
      }
    }, {
      title: (0, b.__)("Background color", "ohmylms"),
      description: (0, b.__)("The background color for email template.", "ohmylms"),
      isShowResetBtn: !0,
      defaultColor: "#F4F5F7",
      initialColor: i.creator_lms_email_background_color,
      onChange: function (e) {
        m("creator_lms_email_background_color", "value", e);
      }
    }, {
      title: (0, b.__)("Body background color", "ohmylms"),
      description: (0, b.__)("The main body background color.", "ohmylms"),
      isShowResetBtn: !0,
      defaultColor: "#FFFFFF",
      initialColor: i.creator_lms_email_body_background_color,
      onChange: function (e) {
        m("creator_lms_email_body_background_color", "value", e);
      }
    }, {
      title: (0, b.__)("Body text color", "ohmylms"),
      description: (0, b.__)("The main body text color default.", "ohmylms"),
      isShowResetBtn: !0,
      defaultColor: "#1F2328",
      initialColor: i.creator_lms_email_body_text_color,
      onChange: function (e) {
        m("creator_lms_email_body_text_color", "value", e);
      }
    }, {
      title: (0, b.__)("Notification color", "ohmylms"),
      description: (0, b.__)("Color used for verification and notification banners on the site.", "ohmylms"),
      isShowResetBtn: !0,
      defaultColor: "#6E42D3",
      initialColor: i.omlms_notification_color,
      onChange: function (e) {
        m("omlms_notification_color", "value", e);
      }
    }];
  return React.createElement(React.Fragment, null, o, t && React.createElement(I.ModalWP, {
    title: (0, b.__)("Settings", "ohmylms"),
    onRequestClose: s,
    size: "large"
  }, React.createElement(I.FlexWP, {
    direction: "column",
    gap: "4"
  }, React.createElement(L2, {
    title: (0, b.__)("Branding", "ohmylms"),
    description: (0, b.__)("Add a logo and color theme to customize the look and feel of email notification your customers receive.", "ohmylms"),
    brandingImg: i.creator_lms_email_branding_image,
    handleRemove: function () {
      m("creator_lms_email_branding_image", "value", "");
    },
    handleChange: function (e) {
      return m("creator_lms_email_branding_image", "value", e);
    },
    colorsConfig: p,
    showDivider: !0
  }), React.createElement(v4, null), React.createElement(y4, null)), React.createElement(I.DividerWP, {
    marginStart: 3,
    marginEnd: 4
  }), React.createElement(I.SpacerWP, {
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    justify: "end",
    gap: "2"
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: s
  }, (0, b.__)("Cancel", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: d
  }, (0, b.__)("Save", "ohmylms"))))));
};

const R4 = (0, g.memo)(S4);

function x4(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
