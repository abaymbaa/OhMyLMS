// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function t1() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return n1(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (n1(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, n1(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, n1(d, "constructor", u), n1(u, "constructor", c), c.displayName = "GeneratorFunction", n1(u, a, "GeneratorFunction"), n1(d), n1(d, a, "Generator"), n1(d, r, function () {
    return this;
  }), n1(d, "toString", function () {
    return "[object Generator]";
  }), (t1 = function () {
    return {
      w: o,
      m
    };
  })();
}
function n1(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  n1 = function (e, t, n, r) {
    function o(t, n) {
      n1(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, n1(e, t, n, r);
}
function r1(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function a1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function o1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? a1(Object(n), !0).forEach(function (t) {
      i1(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a1(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function i1(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != e1(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != e1(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == e1(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function l1(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var c1 = function (e) {
  true;
  var t = e.gateway,
    n = (e.onSave, e.onCancel, e.settings),
    r = e.showTooltip,
    a = void 0 !== r && r,
    o = e.description,
    i = void 0 === o || o,
    l = (0, y.useDispatch)(T.default),
    c = (0, y.useSelect)(function (e) {
      return e(T.default).getPaymentSettings();
    }, []),
    u = function (e, t) {
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
          if ("string" == typeof e) return l1(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l1(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2),
    s = (u[0], u[1], (0, z.A)().openNotificationWithIcon, t.id),
    d = (t.title, t.settings_fields),
    m = void 0 === d ? [] : d,
    p = function (e, t) {
      var n = (null == c ? void 0 : c["ohmylms_".concat(s, "_settings")]) || {},
        r = (null == n ? void 0 : n.value) || {},
        a = o1(o1({}, n), {}, {
          value: o1(o1({}, r), {}, i1({}, t, e))
        });
      l.updatePaymentSettings(i1({}, "ohmylms_".concat(s, "_settings"), a));
    },
    f = function () {
      var e,
        t = (e = t1().m(function e(t, n) {
          var r, a, o;
          return t1().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return r = (null == c ? void 0 : c["ohmylms_".concat(s, "_settings")]) || {}, a = (null == r ? void 0 : r.value) || {}, o = o1(o1({}, r), {}, {
                  value: o1(o1({}, a), {}, i1({}, n, t ? "yes" : "no"))
                }), e.n = 1, l.updatePaymentSettings(i1({}, "ohmylms_".concat(s, "_settings"), o));
              case 1:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              r1(o, r, a, i, l, "next", e);
            }
            function l(e) {
              r1(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function (e, n) {
        return t.apply(this, arguments);
      };
    }(),
    v = function (e) {
      var t = (null == c ? void 0 : c["ohmylms_".concat(s, "_settings")]) || {};
      return ((null == t ? void 0 : t.value) || {})[e] || "";
    };
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    className: "ohmylms-dynamic-gateway-config ohmylms-gateway-".concat(s)
  }, React.createElement(I.SpacerWP, {
    padding: 2,
    margin: 0,
    marginBottom: 0
  }, m.map(function (e, t) {
    var r = e.option_name,
      o = e.input_type,
      l = e.title,
      c = e.short_description,
      u = (e.default_value, function (e, t) {
        var n = e.conditional_logic;
        if (!n) return !0;
        if ("control" === n.type) return !0;
        if ("dependent" === n.type) {
          var r = n.depends_on,
            a = n.show_when,
            o = t(r);
          return "enabled" === a || "yes" === a ? "yes" === o : "disabled" === a || "no" === a ? "no" === o : "test_mode" === a ? "yes" === o : "live_mode" === a ? "no" === o : "yes" === o;
        }
        if ("multiple" === n.type) {
          var i = n.conditions || [],
            l = n.operator || "AND",
            c = i.map(function (e) {
              var n = e.depends_on,
                r = e.show_when,
                a = t(n);
              return "enabled" === r || "yes" === r ? "yes" === a : "disabled" === r || "no" === r ? "no" === a : "yes" === a;
            });
          return "OR" === l ? c.some(function (e) {
            return !0 === e;
          }) : c.every(function (e) {
            return !0 === e;
          });
        }
        return !0;
      }(e, v));
    if ("switch" === o) return React.createElement(qt, {
      key: t,
      isVisible: u
    }, React.createElement(Kt, {
      title: l,
      isDescriptionHTML: !0,
      tooltip: a ? c : "",
      description: i ? c : "",
      onChange: function (e) {
        return f(e, r);
      },
      isChecked: "yes" === (null == n ? void 0 : n.value[r]),
      customClass: "ohmylms-switcher-".concat(r),
      isDefaultStyle: !0,
      variant: "secondary"
    }));
    if ("text" === o) return React.createElement(qt, {
      key: t,
      isVisible: u
    }, React.createElement(Pf, {
      title: l,
      tooltip: a ? c : "",
      description: i ? c : "",
      inputType: "text",
      isDescriptionHTML: !0,
      value: (null == n ? void 0 : n.value[r]) || "",
      onChange: function (e) {
        return p(e, r);
      },
      placeholder: "e.g ".concat(l),
      className: "ohmylms-input-".concat(r)
    }));
    if ("textarea" === o) return React.createElement(qt, {
      key: t,
      isVisible: u
    }, React.createElement(Pf, {
      title: l,
      tooltip: a ? c : "",
      description: i ? c : "",
      inputType: "textarea",
      isDescriptionHTML: !0,
      value: (null == n ? void 0 : n.value[r]) || "",
      onChange: function (e) {
        return p(e, r);
      },
      className: "ohmylms-payment-instructions ohmylms-input-".concat(r)
    }));
    if ("select" === o || "dropdown" === o) return React.createElement(qt, {
      key: t,
      isVisible: u
    }, React.createElement(Pf, {
      title: l,
      tooltip: a ? c : "",
      description: i ? c : "",
      inputType: "select",
      isDescriptionHTML: !0,
      value: (null == n ? void 0 : n.value[r]) || "",
      onChange: function (e) {
        return p(e, r);
      },
      options: e.options || [],
      className: "ohmylms-input-".concat(r)
    }));
    if ("number" === o) return React.createElement(qt, {
      key: t,
      isVisible: u
    }, React.createElement(Pf, {
      title: l,
      tooltip: a ? c : "",
      description: i ? c : "",
      inputType: "number",
      isDescriptionHTML: !0,
      value: (null == n ? void 0 : n.value[r]) || "",
      onChange: function (e) {
        return p(e, r);
      },
      placeholder: "e.g ".concat(l),
      className: "ohmylms-input-".concat(r)
    }));
    if ("checkbox" === o) return React.createElement(qt, {
      key: t,
      isVisible: u
    }, React.createElement(Kt, {
      title: l,
      isDescriptionHTML: !0,
      tooltip: a ? c : "",
      description: i ? c : "",
      onChange: function (e) {
        return f(e, r);
      },
      isChecked: "yes" === (null == n ? void 0 : n.value[r]),
      customClass: "ohmylms-checkbox-".concat(r),
      isDefaultStyle: !0,
      variant: "secondary"
    }));
    if ("section_header" === o) return React.createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 0,
      marginLeft: 4,
      marginRight: 4,
      paddingTop: 4
    }, React.createElement(X0.A, {
      level: "4"
    }, l), i && c && React.createElement(I.TextWP, null, c), React.createElement(I.DividerWP, {
      color: "#e1e5e9",
      marginStart: 4
    }));
    if ("checkbox" === o && e.payment_method_data) {
      var s,
        d = e.payment_method_data,
        g = null === (s = m.find(function (e) {
          return "section_header" === e.input_type;
        })) || void 0 === s || null === (s = s.short_description) || void 0 === s ? void 0 : s.match(/currency:\s*([A-Z]{3})/i),
        h = g ? g[1].toLowerCase() : "usd",
        y = d.supportedCurrencies.includes(h) || "card" === d.key,
        _ = y ? null : d.supportedCurrencies,
        w = "yes" === (null == n ? void 0 : n.value[r]);
      return React.createElement(qt, {
        key: t,
        isVisible: u
      }, React.createElement(I.CardWP, {
        style: {
          flex: "1 1 calc(50% - 10px)",
          minWidth: "260px",
          maxWidth: "calc(50% - 10px)",
          borderRadius: "4px",
          pointerEvents: y ? "auto" : "none",
          marginBottom: "10px"
        }
      }, React.createElement(I.SpacerWP, {
        padding: 4,
        marginBottom: 0
      }, React.createElement(I.FlexWP, {
        gap: 2,
        justify: "flex-start"
      }, React.createElement(I.CheckboxWP, {
        label: l,
        checked: w,
        onChange: function (e) {
          return f(e, r);
        },
        disabled: !y,
        className: "ohmylms-checkbox-".concat(r)
      }), !y && React.createElement("span", {
        style: {
          background: "#FFF9E5",
          color: "#B26B00",
          fontSize: 11,
          borderRadius: 4,
          padding: "2px 8px",
          marginLeft: 4,
          fontWeight: 500,
          display: "inline-block"
        }
      }, (0, b.__)("Requires", "ohmylms"), " ", _.map(function (e) {
        return e.toUpperCase();
      }).join(", "))), React.createElement(I.TextWP, {
        size: 12,
        style: {
          color: y ? "#6c6f76" : "#b0b3b9",
          paddingLeft: 23,
          marginTop: "6px",
          display: "block"
        }
      }, c))));
    }
    return null;
  }))));
};
const u1 = (0, g.memo)(c1);
function s1(e) {
  return s1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, s1(e);
}
function d1() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return m1(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (m1(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, m1(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, m1(d, "constructor", u), m1(u, "constructor", c), c.displayName = "GeneratorFunction", m1(u, a, "GeneratorFunction"), m1(d), m1(d, a, "Generator"), m1(d, r, function () {
    return this;
  }), m1(d, "toString", function () {
    return "[object Generator]";
  }), (d1 = function () {
    return {
      w: o,
      m
    };
  })();
}
function m1(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  m1 = function (e, t, n, r) {
    function o(t, n) {
      m1(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, m1(e, t, n, r);
}
function p1(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function f1(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        p1(o, r, a, i, l, "next", e);
      }
      function l(e) {
        p1(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function v1(e, t) {
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
      if ("string" == typeof e) return g1(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g1(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function g1(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var h1 = function (e) {
  var t = e.handleSave,
    n = e.isLoading,
    r = e.setIsLoading,
    a = (0, y.useSelect)(function (e) {
      return e(T.default).getPaymentSettings();
    }, []),
    o = (0, y.useDispatch)(T.default),
    i = v1((0, g.useState)(!1), 2),
    c = i[0],
    u = i[1],
    s = v1((0, g.useState)(null), 2),
    d = s[0],
    m = s[1],
    p = v1((0, g.useState)(!0), 2),
    f = p[0],
    v = p[1],
    h = (0, g.useMemo)(function () {
      return {
        handleSave: t,
        isLoading: n,
        setIsLoading: r,
        handleManage: function (e) {
          m(e), u(!0);
        }
      };
    }, [t, n, r]),
    _ = (0, g.useCallback)(f1(d1().m(function e() {
      var t;
      return d1().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return o.setLoadingSetting(!0), e.n = 1, l()({
              path: "ohmylms/v1/settings/payment-gateway"
            });
          case 1:
            t = e.v, o.setPaymentSettings(t), o.setLoadingSetting(!1), v(!1);
          case 2:
            return e.a(2);
        }
      }, e);
    })), [o]);
  (0, g.useEffect)(function () {
    _();
  }, [_]);
  var w,
    E = function () {
      u(!1), setTimeout(function () {
        return m(null);
      }, 300);
    };
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, {
    padding: 6,
    marginTop: 2.5,
    marginBottom: 0
  }, c ? React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    gap: 2,
    align: "center",
    justify: "flex-start"
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: E,
    className: "ohmylms-back-button ".concat(null == d ? void 0 : d.id),
    "aria-label": (0, b.__)("Back to payment gateways", "ohmylms")
  }, React.createElement("svg", {
    width: "17",
    height: "12",
    fill: "none",
    viewBox: "0 0 17 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#7A8B9A",
    d: "M16.1 5.2H2.9l3.7-3.7-1-1L0 6l5.6 5.5 1-1-3.7-3.7h13.2V5.2z"
  }))), React.createElement(I.HeadingWP, {
    level: 3,
    size: 18,
    weight: 600,
    color: "#000D25"
  }, "offline" === (null == d ? void 0 : d.id) ? React.createElement(React.Fragment, null, null == d ? void 0 : d.name, (0, b.__)(" Payment", "ohmylms")) : React.createElement(React.Fragment, null, null == d ? void 0 : d.name, (0, b.__)(" Payment Method", "ohmylms")))), React.createElement(I.SpacerWP, {
    marginBottom: 3
  }), function () {
    if (!d) return null;
    if ((r = d).settings_fields && Array.isArray(r.settings_fields) && r.settings_fields.length > 0) {
      var e = "ohmylms_".concat(d.id, "_settings"),
        n = a[e] || {};
      return React.createElement(u1, {
        gateway: d,
        onSave: t,
        onCancel: E,
        settings: n
      });
    }
    var r;
    return React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary"
    }, React.createElement(I.SpacerWP, {
      padding: 4,
      margin: 0,
      marginBottom: 0
    }, React.createElement(I.TextWP, {
      align: "center",
      color: "#666"
    }, (0, b.__)("No configuration available for this gateway.", "ohmylms"))));
  }()) : React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "flex-start",
    gap: 5,
    wrap: !0,
    className: "ohmylms-payment-wrapper"
  }, (w = function () {
    var e,
      t = (null === (e = window) || void 0 === e || null === (e = e.ohmylms_params) || void 0 === e ? void 0 : e.payment_gateways) || {},
      n = [];
    return Array.isArray(t) ? n = t : "object" === s1(t) && null !== t && (n = Object.values(t)), n.filter(function (e) {
      return !!(e && e.id && e.title);
    });
  }(), f ? React.createElement(I.FlexBlockWP, {
    className: "ohmylms-payment-flex-item"
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 4,
    margin: 0,
    marginBottom: 0
  }, React.createElement(I.TextWP, {
    align: "center"
  }, (0, b.__)("Loading payment gateways...", "ohmylms"))))) : 0 === w.length ? React.createElement(I.FlexBlockWP, {
    className: "ohmylms-payment-flex-item"
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 4,
    margin: 0,
    marginBottom: 0
  }, React.createElement(I.TextWP, {
    align: "center",
    color: "#666"
  }, (0, b.__)("No payment gateways available. Please check your configuration.", "ohmylms"))))) : w.map(function (e) {
    var t = "ohmylms_".concat(e.id, "_settings"),
      n = a[t] || {};
    return React.createElement(I.FlexBlockWP, {
      key: e.id,
      className: "ohmylms-payment-flex-item"
    }, React.createElement(J0, {
      gateway: e,
      config: h,
      settings: n
    }));
  })))))));
};
const y1 = (0, g.memo)(h1);
function b1(e) {
  return b1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, b1(e);
}
function _1() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return w1(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (w1(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, w1(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, w1(d, "constructor", u), w1(u, "constructor", c), c.displayName = "GeneratorFunction", w1(u, a, "GeneratorFunction"), w1(d), w1(d, a, "Generator"), w1(d, r, function () {
    return this;
  }), w1(d, "toString", function () {
    return "[object Generator]";
  }), (_1 = function () {
    return {
      w: o,
      m
    };
  })();
}
function w1(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  w1 = function (e, t, n, r) {
    function o(t, n) {
      w1(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, w1(e, t, n, r);
}
function E1(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function S1(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        E1(o, r, a, i, l, "next", e);
      }
      function l(e) {
        E1(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function R1(e, t) {
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
      if ("string" == typeof e) return x1(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? x1(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function x1(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
