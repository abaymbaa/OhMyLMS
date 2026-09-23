// Reconstructed application fragment. Assembled in manifest order within factory 1841.
const fQ = function (e) {
  var t = e.notes,
    n = e.order,
    r = mQ((0, g.useState)(""), 2),
    a = r[0],
    o = r[1],
    i = mQ((0, g.useState)(!1), 2),
    l = i[0],
    c = i[1],
    u = mQ((0, g.useState)(!0), 2),
    s = u[0],
    d = u[1],
    m = (0, y.useDispatch)(T.default),
    p = m.setOrderNote,
    f = m.saveOrderNote,
    v = m.fetchOrder,
    _ = function () {
      var e,
        t = (e = uQ().m(function e() {
          var t;
          return uQ().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (!a.trim()) {
                  e.n = 4;
                  break;
                }
                return c(!0), e.p = 1, e.n = 2, f(a, n);
              case 2:
                e.v && v(n.id), c(!1), o(""), e.n = 4;
                break;
              case 3:
                e.p = 3, t = e.v, console.error("Failed to add order note:", t);
              case 4:
                return e.a(2);
            }
          }, e, null, [[1, 3]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              dQ(o, r, a, i, l, "next", e);
            }
            function l(e) {
              dQ(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
  return h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
    gap: 2,
    justify: "space-between",
    align: "center"
  }, h().createElement(I.HeadingWP, {
    level: 4,
    size: 18,
    weight: 500,
    color: "#000D25"
  }, (0, b.__)("Order Notes", "ohmylms")), h().createElement(I.ButtonWP, {
    size: "small",
    onClick: function () {
      return d(!s);
    }
  }, h().createElement("svg", {
    style: {
      transform: s ? "rotate(0deg)" : "rotate(180deg)"
    },
    width: "12",
    height: "6",
    fill: "none",
    viewBox: "0 0 12 6",
    xmlns: "http://www.w3.org/2000/svg"
  }, h().createElement("path", {
    fill: "#000D25",
    d: "M11.5 4.4L6 0 .5 4.4l.9 1.2L6 2l4.5 3.6 1-1.2z"
  })))), s && h().createElement(h().Fragment, null, t.length > 0 && h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
    marginTop: 6,
    marginBottom: 0
  }), h().createElement(q.__experimentalScrollable, {
    style: {
      maxHeight: 500
    }
  }, t.map(function (e, t) {
    return h().createElement("div", {
      key: t
    }, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 0 === t ? 0 : 4,
      paddingX: 2
    }, h().createElement(I.CardWP, {
      isBorderless: !0,
      variant: "muted",
      style: {
        borderRadius: "7px"
      }
    }, h().createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 4
    }, h().createElement(I.TextWP, {
      variant: "muted",
      color: "#000D25",
      weight: 400,
      size: 13
    }, Ge(e.content)))), h().createElement(I.SpacerWP, {
      marginBottom: 1
    }), h().createElement(I.FlexWP, {
      align: "center",
      gap: 3,
      justify: "space-between"
    }, h().createElement(I.TextWP, {
      as: "time",
      variant: "muted",
      size: 13,
      color: "#8C929B;"
    }, JY(e.date_created.date)))));
  }))), h().createElement(I.SpacerWP, {
    marginTop: 6,
    marginBottom: 0
  }), h().createElement("div", null, h().createElement(W.A, {
    rows: 3,
    value: a,
    placeholder: "Add a note",
    onChange: function (e) {
      var t = e;
      o(t), p(t);
    },
    style: {
      marginBottom: "10px"
    }
  }), h().createElement(I.ButtonWP, {
    variant: "primary",
    style: {
      marginRight: "10px"
    },
    onClick: _,
    loading: l,
    iconPosition: "end"
  }, "Add Note"))));
};

function vQ(e) {
  return function (e) {
    if (Array.isArray(e)) return wQ(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || _Q(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function gQ() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return hQ(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (hQ(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, hQ(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, hQ(d, "constructor", u), hQ(u, "constructor", c), c.displayName = "GeneratorFunction", hQ(u, a, "GeneratorFunction"), hQ(d), hQ(d, a, "Generator"), hQ(d, r, function () {
    return this;
  }), hQ(d, "toString", function () {
    return "[object Generator]";
  }), (gQ = function () {
    return {
      w: o,
      m
    };
  })();
}

function hQ(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  hQ = function (e, t, n, r) {
    function o(t, n) {
      hQ(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, hQ(e, t, n, r);
}

function yQ(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function bQ(e, t) {
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
  }(e, t) || _Q(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function _Q(e, t) {
  if (e) {
    if ("string" == typeof e) return wQ(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wQ(e, t) : void 0;
  }
}

function wQ(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const EQ = function (e) {
  var t = e.order,
    n = e.status,
    r = (0, y.useDispatch)(T.default),
    a = r.updateOrder,
    o = r.fetchOrder,
    i = (0, y.useDispatch)(T.default),
    l = (0, y.useDispatch)(T.default).updateOrderState,
    c = bQ((0, g.useState)(!1), 2),
    u = c[0],
    s = c[1],
    d = bQ((0, g.useState)(!0), 2),
    m = d[0],
    p = d[1],
    f = function () {
      var e,
        n = (e = gQ().m(function e() {
          return gQ().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return e.n = 1, a(t);
              case 1:
                e.v && (i.showNotification((0, b.__)("Updated Successfully", "ohmylms"), "success"), o(t.id), s(!1));
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
              yQ(o, r, a, i, l, "next", e);
            }
            function l(e) {
              yQ(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return n.apply(this, arguments);
      };
    }(),
    v = [].concat(vQ("refunded" !== t.status ? [{
      value: "completed",
      label: (0, b.__)("Completed", "ohmylms")
    }] : []), vQ(0 !== Number(null == t ? void 0 : t.total) ? [{
      value: "pending",
      label: (0, b.__)("Pending", "ohmylms")
    }, {
      value: "on-hold",
      label: (0, b.__)("On Hold", "ohmylms")
    }, {
      value: "processing",
      label: (0, b.__)("Processing", "ohmylms")
    }] : []), [{
      value: "cancelled",
      label: (0, b.__)("Cancelled", "ohmylms")
    }], vQ(0 !== Number(null == t ? void 0 : t.total) ? [{
      value: "refunded",
      label: (0, b.__)("Refunded", "ohmylms")
    }] : []));
  return h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
    gap: 2,
    justify: "space-between",
    align: "center"
  }, h().createElement(I.HeadingWP, {
    level: 4,
    size: 18,
    weight: 500,
    color: "#000D25"
  }, (0, b.__)("Order action", "ohmylms")), h().createElement(I.ButtonWP, {
    size: "small",
    onClick: function () {
      return p(!m);
    }
  }, h().createElement("svg", {
    style: {
      transform: m ? "rotate(0deg)" : "rotate(180deg)"
    },
    width: "12",
    height: "6",
    fill: "none",
    viewBox: "0 0 12 6",
    xmlns: "http://www.w3.org/2000/svg"
  }, h().createElement("path", {
    fill: "#000D25",
    d: "M11.5 4.4L6 0 .5 4.4l.9 1.2L6 2l4.5 3.6 1-1.2z"
  })))), m && h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
    marginTop: 6,
    marginBottom: 0
  }), h().createElement(I.FlexWP, {
    gap: 2,
    justify: "start",
    align: "center"
  }, h().createElement(I.FlexItemWP, {
    style: {
      width: "calc(100% - 53px)"
    }
  }, h().createElement(vn.A, {
    value: n,
    onChange: function (e) {
      l({
        status: e
      });
    },
    options: v
  })), h().createElement(I.ButtonWP, {
    variant: "primary",
    onClick: f,
    loading: u,
    style: {
      height: "40px",
      width: "53px",
      backgroundColor: "#6e42d34d"
    }
  }, h().createElement("svg", {
    style: {
      margin: "0 auto"
    },
    width: "7",
    height: "12",
    fill: "none",
    viewBox: "0 0 7 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, h().createElement("path", {
    fill: "#000D25",
    d: "M2.018.5l4.4 5.5-4.4 5.5-1.2-.9 3.6-4.6-3.6-4.5 1.2-1z"
  }))))));
};

function SQ(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const RQ = function (e) {
  var t = e.order,
    n = function (e, t) {
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
          if ("string" == typeof e) return SQ(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? SQ(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!0), 2),
    r = n[0],
    a = n[1];
  return h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
    gap: 2,
    justify: "space-between",
    align: "center"
  }, h().createElement(I.HeadingWP, {
    level: 4,
    size: 18,
    weight: 500,
    color: "#000D25"
  }, (0, b.__)("Customer history", "ohmylms")), h().createElement(I.ButtonWP, {
    size: "small",
    onClick: function () {
      return a(!r);
    }
  }, h().createElement("svg", {
    style: {
      transform: r ? "rotate(0deg)" : "rotate(180deg)"
    },
    width: "12",
    height: "6",
    fill: "none",
    viewBox: "0 0 12 6",
    xmlns: "http://www.w3.org/2000/svg"
  }, h().createElement("path", {
    fill: "#000D25",
    d: "M11.5 4.4L6 0 .5 4.4l.9 1.2L6 2l4.5 3.6 1-1.2z"
  })))), r && h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
    marginTop: 6,
    marginBottom: 0
  }), t.total_orders ? h().createElement(h().Fragment, null, h().createElement(I.TextWP, {
    as: "p",
    color: "#7A8B9A",
    size: 16,
    weight: 500,
    lineHeight: 1.5
  }, (0, b.__)("Total orders", "ohmylms"), h().createElement("span", {
    style: {
      color: "#000D25",
      display: "block"
    },
    dangerouslySetInnerHTML: {
      __html: t.total_orders
    }
  })), h().createElement(I.SpacerWP, {
    marginBottom: 2
  }), h().createElement(I.TextWP, {
    as: "p",
    size: 16,
    weight: 500,
    color: "#7A8B9A"
  }, (0, b.__)("Total Revenue", "ohmylms"), h().createElement("span", {
    style: {
      color: "#000D25",
      display: "block"
    },
    dangerouslySetInnerHTML: {
      __html: t.total_revenue
    }
  })), h().createElement(I.SpacerWP, {
    marginBottom: 2
  }), h().createElement(I.TextWP, {
    as: "p",
    color: "#7A8B9A",
    size: 16,
    weight: 500,
    lineHeight: 1.5
  }, (0, b.__)("Average order value", "ohmylms"), h().createElement("span", {
    style: {
      color: "#000D25",
      display: "block"
    },
    dangerouslySetInnerHTML: {
      __html: t.aov
    }
  }))) : h().createElement(h().Fragment, null, h().createElement(I.TextWP, {
    as: "p",
    color: "#7A8B9A",
    size: 16,
    weight: 400,
    lineHeight: 1.5
  }, (0, b.__)("No history found", "ohmylms")))));
};

function xQ(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const CQ = function (e) {
    var t = e.student_name,
      n = e.student_email,
      r = e.student_id,
      a = e.student_image,
      o = function (e, t) {
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
            if ("string" == typeof e) return xQ(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xQ(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, g.useState)(!0), 2),
      i = o[0],
      l = o[1];
    return h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
      gap: 2,
      justify: "space-between",
      align: "center"
    }, h().createElement(I.HeadingWP, {
      level: 4,
      size: 18,
      weight: 500,
      color: "#000D25"
    }, (0, b.__)("Customer Profile", "ohmylms")), h().createElement(I.ButtonWP, {
      size: "small",
      onClick: function () {
        return l(!i);
      }
    }, h().createElement("svg", {
      style: {
        transform: i ? "rotate(0deg)" : "rotate(180deg)"
      },
      width: "12",
      height: "6",
      fill: "none",
      viewBox: "0 0 12 6",
      xmlns: "http://www.w3.org/2000/svg"
    }, h().createElement("path", {
      fill: "#000D25",
      d: "M11.5 4.4L6 0 .5 4.4l.9 1.2L6 2l4.5 3.6 1-1.2z"
    })))), i && h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
      marginTop: 6,
      marginBottom: 0
    }), h().createElement(I.FlexWP, {
      gap: 2,
      justify: "space-between",
      align: "center",
      className: "customer-profile-avater"
    }, h().createElement(I.FlexItemWP, {
      style: {
        width: "calc(100% - 128px)"
      }
    }, h().createElement(I.FlexWP, {
      gap: 5,
      align: "center",
      justify: "flex-start"
    }, h().createElement(I.AvatarWP, {
      src: a,
      size: 48,
      shape: "circle"
    }), h().createElement(I.FlexItemWP, {
      style: {
        width: "calc(100% - 68px)"
      }
    }, h().createElement(I.TextWP, {
      as: "p",
      size: 14,
      weight: 600,
      color: "#000D25",
      style: {
        wordWrap: "break-word"
      }
    }, t), h().createElement(I.ButtonWP, {
      href: "mailto:".concat(n),
      variant: "link",
      size: 12,
      weight: 500,
      color: "#7A8B9A",
      style: {
        textDecoration: "underline"
      }
    }, n)))), h().createElement(I.FlexItemWP, {
      style: {
        textAlign: "center"
      }
    }, h().createElement(I.ButtonWP, {
      variant: "secondary",
      style: {
        backgroundColor: "#fff"
      },
      href: "/wp-admin/admin.php?page=creator-lms#/students/".concat(r, "/report"),
      rel: "noopener noreferrer"
    }, (0, b.__)("View profile", "ohmylms")), h().createElement("br", null)))));
  },
  PQ = function (e) {
    var t = e.student_name,
      n = e.student_email,
      r = e.student_id;
    return (0, y.useDispatch)(T.default), (0, y.useDispatch)(T.default).updateOrderState, h().createElement(h().Fragment, null, h().createElement(I.HeadingWP, {
      level: 4,
      size: 18,
      weight: 500,
      color: "#000D25"
    }, (0, b.__)("General", "ohmylms")), h().createElement("div", {
      layout: "horizontal"
    }, h().createElement(I.SpacerWP, {
      marginBottom: 4
    }), h().createElement(I.FlexWP, {
      gap: 3,
      align: "center",
      justify: "flex-start"
    }, h().createElement(I.TextWP, {
      as: "p",
      size: 14,
      weight: 500,
      color: "#000D21",
      style: {
        width: "100px"
      }
    }, (0, b.__)("Student: ", "ohmylms")), h().createElement(I.FlexWP, {
      align: "center",
      justify: "flex-start",
      gap: 2,
      style: {
        width: "calc(100% - 112px)"
      }
    }, h().createElement(I.FlexItemWP, {
      style: {
        width: "calc(100% - 53px)"
      }
    }, h().createElement(I.TextWP, {
      as: "p",
      size: 14,
      weight: 500,
      color: "#000D21"
    }, t && r && n ? "".concat(t, " (#").concat(r, " – ").concat(n, ")") : (0, b.__)("No student assigned", "ohmylms")))))));
  };

function OQ(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = {
      decimal_sep: creator_lms_params.decimal_separator,
      currency_position: creator_lms_params.currency_position,
      currency_symbol: creator_lms_params.currency_symbol,
      trim_zeros: creator_lms_params.currency_format_trim_zeros,
      num_decimals: creator_lms_params.currency_format_num_decimals,
      html: !0
    },
    r = e < 0,
    a = Math.abs(e).toFixed(n.num_decimals);
  "." !== n.decimal_sep && (a = a.replace(".", n.decimal_sep));
  var o,
    i = n.html ? '<span class="creator-lms-Price-currencySymbol">'.concat(n.currency_symbol, "</span>") : n.currency_symbol;
  return "left" === n.currency_position ? o = "".concat(r ? "-" : "").concat(i).concat(a) : "right" === n.currency_position ? o = "".concat(r ? "-" : "").concat(a).concat(i) : "left_space" === n.currency_position ? o = "".concat(r ? "-" : "").concat(i, " ").concat(a) : "right_space" === n.currency_position && (o = "".concat(r ? "-" : "").concat(a, " ").concat(i)), t ? React.createElement("span", {
    className: "creator-lms-Price-amount amount"
  }, r && "-", n.currency_position.includes("left") && React.createElement("span", {
    className: "creator-lms-Price-currencySymbol"
  }, n.currency_symbol), a, n.currency_position.includes("right") && React.createElement("span", {
    className: "creator-lms-Price-currencySymbol"
  }, n.currency_symbol)) : n.html ? '<span class="creator-lms-Price-amount amount">'.concat(o, "</span>") : o;
}

const kQ = function (e) {
  var t = e.relatedOrders,
    n = void 0 === t ? [] : t;
  if (!Array.isArray(n) || 0 === n.length) return null;
  var r = [{
    title: (0, b.__)("Order #", "ohmylms"),
    key: "order_number",
    render: function (e, t) {
      var n = null;
      return t.relationship === (0, b.__)("Subscription", "ohmylms") ? n = "/wp-admin/admin.php?page=creator-lms#/subscription-edit/".concat(t.id) : t.relationship !== (0, b.__)("Renewal Order", "ohmylms") && t.relationship !== (0, b.__)("Parent", "ohmylms") || (n = "/wp-admin/admin.php?page=creator-lms#/order-edit/".concat(t.id)), n ? h().createElement("a", {
        href: n,
        target: "_blank",
        rel: "noopener noreferrer"
      }, h().createElement(I.TextWP, {
        as: "span",
        color: "#000D25",
        weight: 500,
        size: 14
      }, "#", t.id)) : h().createElement(I.TextWP, {
        as: "span",
        color: "#000D25",
        weight: 500,
        size: 14
      }, "#", t.id);
    }
  }, {
    title: (0, b.__)("Relationship", "ohmylms"),
    key: "relationship",
    render: function (e, t) {
      return h().createElement(I.TextWP, {
        as: "span",
        color: "#7A8B9A",
        weight: 400,
        size: 14
      }, Ge(t.relationship));
    }
  }, {
    title: (0, b.__)("Date", "ohmylms"),
    key: "date",
    render: function (e, t) {
      return h().createElement(I.TextWP, {
        as: "span",
        color: "#7A8B9A",
        weight: 400,
        size: 14
      }, VY(e) || (0, b.__)("N/A", "ohmylms"));
    }
  }, {
    title: (0, b.__)("Status", "ohmylms"),
    key: "status",
    render: function (e, t) {
      return h().createElement(I.TextWP, {
        as: "span",
        color: "#7A8B9A",
        weight: 400,
        size: 14
      }, t.status);
    }
  }, {
    title: (0, b.__)("Total", "ohmylms"),
    key: "total",
    render: function (e, t) {
      return h().createElement(I.TextWP, {
        as: "span",
        color: "#000D25",
        weight: 500,
        size: 14,
        dangerouslySetInnerHTML: {
          __html: OQ(t.total)
        }
      });
    }
  }];
  return h().createElement(h().Fragment, null, h().createElement(I.HeadingWP, {
    level: 4,
    size: 18,
    weight: 500,
    color: "#000D25"
  }, (0, b.__)("Related Orders", "ohmylms")), h().createElement(I.SpacerWP, {
    marginBottom: 4
  }), h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    paddingX: 4,
    paddingY: 5,
    marginBottom: 0
  }, h().createElement(I.TableWP, {
    rowKey: "order_number",
    columns: r,
    dataSource: n,
    className: "omlms-related-orders-table"
  }))));
};

function jQ() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return AQ(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (AQ(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, AQ(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, AQ(d, "constructor", u), AQ(u, "constructor", c), c.displayName = "GeneratorFunction", AQ(u, a, "GeneratorFunction"), AQ(d), AQ(d, a, "Generator"), AQ(d, r, function () {
    return this;
  }), AQ(d, "toString", function () {
    return "[object Generator]";
  }), (jQ = function () {
    return {
      w: o,
      m
    };
  })();
}

function AQ(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  AQ = function (e, t, n, r) {
    function o(t, n) {
      AQ(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, AQ(e, t, n, r);
}

function MQ(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function TQ(e, t) {
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
      if ("string" == typeof e) return IQ(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? IQ(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function IQ(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
