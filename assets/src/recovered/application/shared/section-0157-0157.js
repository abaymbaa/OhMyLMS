// Reconstructed application fragment. Assembled in manifest order within factory 1841.
const N2 = (0, g.memo)(F2);

var D2 = ["title", "description", "brandingImg", "colorsConfig", "handleChange", "handleRemove", "showDivider", "alertTitle", "alertDescription", "maxWidth"];

function W2() {
  return W2 = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, W2.apply(null, arguments);
}

function z2(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var B2 = function (e) {
  M().noConflict();
  var t = e.title,
    n = e.description,
    r = e.brandingImg,
    a = e.colorsConfig,
    o = e.handleChange,
    i = e.handleRemove,
    l = e.showDivider,
    c = void 0 === l || l,
    u = e.alertTitle,
    s = void 0 === u ? (0, b.__)("Remove the branding logo", "ohmylms") : u,
    d = e.alertDescription,
    m = void 0 === d ? (0, b.__)("Are you sure you want to remove the branding logo?", "ohmylms") : d,
    p = e.maxWidth,
    f = void 0 === p ? "unset" : p,
    v = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = function (e, t) {
          if (null == e) return {};
          var n = {};
          for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
          return n;
        }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      }
    }(e, D2), function (e, t) {
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
          if ("string" == typeof e) return z2(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? z2(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(null), 2)),
    h = (v[0], v[1]),
    y = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"],
    _ = function (e) {
      var t = wp.media({
        title: "Select or Upload Media",
        button: {
          text: "Use this media"
        },
        multiple: !1
      });
      t.on("select", function () {
        var n = t.state().get("selection").first().toJSON(),
          r = y.some(function (e) {
            return n.url.toLowerCase().endsWith(e);
          }),
          a = "image" === e && "image" === n.type || "video" === e && "video" === n.type;
        r && a ? "image" === e && (o(n.url, null == n ? void 0 : n.id), h(n.url)) : alert("Invalid file type or media type.");
      }), t.open();
    };
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "start",
    gap: "4"
  }, (t || n) && React.createElement(I.FlexItemWP, {
    style: {
      maxWidth: "300px"
    }
  }, React.createElement(I.SpacerWP, {
    marginY: 5
  }, t && React.createElement(I.HeadingWP, {
    level: "4"
  }, t), n && React.createElement(I.TextWP, null, n))), React.createElement(I.FlexItemWP, {
    style: {
      maxWidth: f
    },
    isBlock: !0
  }, React.createElement(I.FlexWP, {
    direction: "column",
    gap: "4"
  }, React.createElement(I.CardWP, null, React.createElement(I.SpacerWP, {
    padding: "4"
  }, Boolean(r) ? React.createElement(I.FlexWP, {
    direction: "column",
    gap: "2",
    align: "center"
  }, React.createElement(I.AvatarWP, {
    shape: "square",
    src: r,
    alt: "logo",
    style: {
      height: "auto"
    }
  }), React.createElement(hu, {
    handleEdit: function () {
      return _("image");
    },
    handleDelete: i,
    alertTitle: s,
    alertDescription: m
  })) : React.createElement(I.FlexWP, {
    direction: "column",
    gap: "2",
    align: "center",
    justify: "center"
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: function () {
      return _("image");
    }
  }, (0, b.__)("Select a file", "ohmylms")), React.createElement(I.TextWP, {
    variant: "muted",
    size: "small"
  }, (0, b.__)("Size: 100x36 pixels, Max height: 50px", "ohmylms"))))), a && a.map(function (e, t) {
    return React.createElement(FK, W2({
      key: t,
      format: "hex"
    }, e));
  })))), c && React.createElement(Tt.A, null));
};

const L2 = (0, g.memo)(B2);

function V2(e) {
  return function (e) {
    if (Array.isArray(e)) return H2(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return H2(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? H2(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function H2(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var G2 = function (e) {
  var t = e.rules,
    n = e.setRules,
    r = [{
      label: "Points",
      value: "points"
    }],
    a = [{
      label: "Greater than",
      value: ">"
    }, {
      label: "Greater than or equal",
      value: ">="
    }, {
      label: "Equal",
      value: "=="
    }, {
      label: "Less than",
      value: "<"
    }, {
      label: "Less than or equal",
      value: "<="
    }],
    o = function (e, r, a) {
      var o = V2(t);
      o[e][r] = a, n(o);
    };
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0,
    padding: "20px",
    fullWidth: !0
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Define Badge Earning Rules", "ohmylms")), React.createElement(I.TextWP, null, (0, b.__)("Define the conditions learners must meet to earn this badge.", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 2
  }), null == t ? void 0 : t.map(function (e, i) {
    return React.createElement(I.FlexWP, {
      key: i,
      align: "flex-start",
      style: {
        marginBottom: "8px"
      }
    }, React.createElement(I.FlexItemWP, null, React.createElement(I.SelectWP, {
      options: r,
      value: null == e ? void 0 : e.dataValue,
      onChange: function (e) {
        return o(i, "dataValue", e);
      },
      style: {
        minWidth: "180px"
      }
    })), React.createElement(I.FlexItemWP, null, React.createElement(I.SelectWP, {
      options: a,
      value: null == e ? void 0 : e.compareSign,
      onChange: function (e) {
        return o(i, "compareSign", e);
      },
      style: {
        minWidth: "80px"
      }
    })), React.createElement(I.FlexItemWP, null, React.createElement(I.InputNumberWP, {
      value: null == e ? void 0 : e.compareData,
      onChange: function (e) {
        return o(i, "compareData", e);
      },
      style: {
        width: "100px"
      },
      min: 0
    })), React.createElement(I.FlexItemWP, null, React.createElement(I.ButtonWP, {
      onClick: function () {
        return function (e) {
          var r = t;
          r.splice(e, 1), n(r);
        }(i);
      },
      icon: React.createElement(We, null),
      disabled: 1 === (null == t ? void 0 : t.length)
    })));
  }), React.createElement(I.FlexWP, {
    justify: "end",
    align: "center",
    style: {
      marginTop: "12px"
    }
  }, React.createElement(lf, {
    label: (0, b.__)("Add Condition", "ohmylms"),
    onClick: function () {
      n([].concat(V2(t), [{
        dataLabel: "Points",
        dataValue: "points",
        dataFieldType: "select",
        compareSign: ">=",
        compareData: 0,
        compareDataFieldType: "input"
      }]));
    }
  }))));
};

const U2 = (0, g.memo)(G2);

function q2(e) {
  return q2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, q2(e);
}

function Y2(e, t) {
  var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = r3(e)) || t && e && "number" == typeof e.length) {
      n && (e = n);
      var r = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: a
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    i = !0,
    l = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return i = e.done, e;
    },
    e: function (e) {
      l = !0, o = e;
    },
    f: function () {
      try {
        i || null == n.return || n.return();
      } finally {
        if (l) throw o;
      }
    }
  };
}

function Q2(e) {
  return function (e) {
    if (Array.isArray(e)) return a3(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || r3(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Z2() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return $2(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : ($2(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, $2(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, $2(d, "constructor", u), $2(u, "constructor", c), c.displayName = "GeneratorFunction", $2(u, a, "GeneratorFunction"), $2(d), $2(d, a, "Generator"), $2(d, r, function () {
    return this;
  }), $2(d, "toString", function () {
    return "[object Generator]";
  }), (Z2 = function () {
    return {
      w: o,
      m
    };
  })();
}

function $2(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  $2 = function (e, t, n, r) {
    function o(t, n) {
      $2(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, $2(e, t, n, r);
}

function K2(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function J2(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        K2(o, r, a, i, l, "next", e);
      }
      function l(e) {
        K2(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function X2(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function e3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? X2(Object(n), !0).forEach(function (t) {
      t3(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X2(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function t3(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != q2(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != q2(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == q2(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function n3(e, t) {
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
  }(e, t) || r3(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function r3(e, t) {
  if (e) {
    if ("string" == typeof e) return a3(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a3(e, t) : void 0;
  }
}

function a3(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var o3 = function (e) {
  var t = e.data,
    n = e.isOpen,
    r = e.onClose,
    a = e.fetchData,
    o = e.setItems,
    i = (e.badgeList, e.setBadge, {
      name: "",
      description: "",
      image: null,
      color: "#6e42d3",
      rules: [{
        dataLabel: "Points",
        dataValue: "points",
        dataFieldType: "select",
        compareSign: ">=",
        compareData: 0,
        compareDataFieldType: "input"
      }]
    }),
    c = n3((0, g.useState)(e3({}, i)), 2),
    u = c[0],
    s = c[1],
    d = n3((0, g.useState)(!1), 2),
    m = d[0],
    p = d[1],
    f = (0, z.A)(),
    v = f.openNotificationWithIcon,
    h = f.contextHolder,
    _ = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    w = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    E = function () {
      m || r(!1);
    },
    S = function (e, t) {
      s(function (n) {
        return e3(e3({}, n), {}, t3({}, e, t));
      });
    },
    R = function () {
      var e = J2(Z2().m(function e() {
        var t;
        return Z2().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, p(!0), e.n = 1, l()({
                path: "/creator-lms/v1/engagement/badges",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(u)
              });
            case 1:
              e.v.success && (v("success", (0, b.__)("Badge updated successfully!", "ohmylms")), o(function (e) {
                return e.map(function (e) {
                  return e.slug === u.slug ? e3(e3({}, e), u) : e;
                });
              })), e.n = 3;
              break;
            case 2:
              e.p = 2, t = e.v, console.error(t);
            case 3:
              return e.p = 3, p(!1), e.f(3);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 2, 3, 4]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    x = function () {
      var e = J2(Z2().m(function e() {
        return Z2().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, p(!0), e.n = 1, l()({
                path: "/creator-lms/v1/engagement/badges",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(u)
              });
            case 1:
              e.v.success && (v("success", (0, b.__)("Badge created successfully!", "ohmylms")), o(function (e) {
                return [u].concat(Q2(e));
              })), e.n = 3;
              break;
            case 2:
              e.p = 2, e.v, v("error", (0, b.__)("Something went wrong!", "ohmylms"));
            case 3:
              return e.p = 3, p(!1), r(!1), e.f(3);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 2, 3, 4]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    C = function () {
      var e = J2(Z2().m(function e() {
        var n, r, o, i;
        return Z2().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (u.name && "" !== u.name.trim()) {
                e.n = 1;
                break;
              }
              return v("error", (0, b.__)("The fields cannot be empty.", "ohmylms")), e.a(2);
            case 1:
              n = Y2(u.rules), e.p = 2, n.s();
            case 3:
              if ((r = n.n()).done) {
                e.n = 5;
                break;
              }
              if (!(null === (o = r.value).compareData || "" === o.compareData || o.compareData < 0)) {
                e.n = 4;
                break;
              }
              return v("error", (0, b.__)("The fields cannot be empty or negative.", "ohmylms")), e.a(2);
            case 4:
              e.n = 3;
              break;
            case 5:
              e.n = 7;
              break;
            case 6:
              e.p = 6, i = e.v, n.e(i);
            case 7:
              return e.p = 7, n.f(), e.f(7);
            case 8:
              if (null == t || !t.slug) {
                e.n = 10;
                break;
              }
              return e.n = 9, R();
            case 9:
              e.n = 11;
              break;
            case 10:
              return e.n = 11, x();
            case 11:
              a();
            case 12:
              return e.a(2);
          }
        }, e, null, [[2, 6, 7, 8]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  if ((0, g.useEffect)(function () {
    t && s(t);
  }, [t]), (0, g.useEffect)(function () {
    !m && _ && v(w, _);
  }, [_]), (0, g.useEffect)(function () {
    n && s(t || e3({}, i));
  }, [t, n]), !n) return null;
  var P = !u.name || "" === u.name.trim() || u.rules.some(function (e) {
    return null === e.compareData || "" === e.compareData || e.compareData < 0;
  });
  return React.createElement(React.Fragment, null, h, React.createElement(I.ModalWP, {
    title: null != t && t.slug ? (0, b.__)("Edit Achievement Badge", "ohmylms") : (0, b.__)("Create New Achievement Badge", "ohmylms"),
    onRequestClose: E,
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    size: "large"
  }, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    padding: 3
  }, React.createElement(Pf, {
    title: (0, b.__)("Badge Name", "ohmylms"),
    description: (0, b.__)("Give this badge a clear and meaningful name that reflects the learner’s achievement.", "ohmylms"),
    inputType: "text",
    value: null == u ? void 0 : u.name,
    onChange: function (e) {
      return S("name", e);
    },
    placeholder: (0, b.__)("Enter badge name", "ohmylms"),
    required: !0
  }), React.createElement(Pf, {
    title: (0, b.__)("Badge Description", "ohmylms"),
    description: (0, b.__)("Provide a short description explaining when or why this badge is awarded.", "ohmylms"),
    inputType: "textarea",
    value: null == u ? void 0 : u.description,
    onChange: function (e) {
      return S("description", e);
    },
    placeholder: (0, b.__)("Enter badge description", "ohmylms")
  }), React.createElement(I.SpacerWP, {
    padding: 2
  }, React.createElement(L2, {
    title: (0, b.__)("Badge Icon", "ohmylms"),
    description: (0, b.__)("Upload a custom icon to visually represent this badge.", "ohmylms"),
    handleChange: function (e) {
      return S("image", e);
    },
    handleRemove: function () {
      return S("image", null);
    },
    brandingImg: null == u ? void 0 : u.image,
    alertTitle: (0, b.__)("Remove Badge Icon", "ohmylms"),
    alertDescription: (0, b.__)("Are you sure you want to remove this badge icon?", "ohmylms"),
    showDivider: !1,
    maxWidth: "345px"
  })), React.createElement(I.SpacerWP, {
    marginBottom: 2,
    paddingY: 4
  }, React.createElement(FK, {
    title: (0, b.__)("Color", "ohmylms"),
    description: (0, b.__)("Choose a color to visually represent this badge.", "ohmylms"),
    initialColor: null == u ? void 0 : u.color,
    onChange: function (e) {
      return S("color", e);
    },
    variant: "secondary",
    isBorderless: !0,
    padding: 2,
    isShowResetBtn: !0,
    defaultColor: "#6e42d3"
  })), React.createElement(U2, {
    rules: null == u ? void 0 : u.rules,
    setRules: function (e) {
      return S("rules", e);
    }
  }))), React.createElement(I.SpacerWP, {
    paddingTop: 4
  }, React.createElement(I.FlexWP, {
    justify: "flex-end",
    gap: 2
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: E,
    disabled: m
  }, (0, b.__)("Cancel", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    disabled: P,
    onClick: C,
    isBusy: m
  }, null != t && t.slug ? (0, b.__)("Update Badge", "ohmylms") : (0, b.__)("Create Badge", "ohmylms"))))));
};

const i3 = (0, g.memo)(o3);

function l3() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return c3(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (c3(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, c3(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, c3(d, "constructor", u), c3(u, "constructor", c), c.displayName = "GeneratorFunction", c3(u, a, "GeneratorFunction"), c3(d), c3(d, a, "Generator"), c3(d, r, function () {
    return this;
  }), c3(d, "toString", function () {
    return "[object Generator]";
  }), (l3 = function () {
    return {
      w: o,
      m
    };
  })();
}

function c3(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  c3 = function (e, t, n, r) {
    function o(t, n) {
      c3(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, c3(e, t, n, r);
}

function u3(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function s3(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        u3(o, r, a, i, l, "next", e);
      }
      function l(e) {
        u3(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function d3(e, t) {
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
      if ("string" == typeof e) return m3(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m3(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function m3(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
