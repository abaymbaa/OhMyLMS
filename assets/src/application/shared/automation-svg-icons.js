// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function qh(e, t) {
  return Yh.apply(this, arguments);
}

function Yh() {
  var e;
  return e = Bh().m(function e(t, n) {
    var r, a;
    return Bh().w(function (e) {
      for (;;) switch (e.n) {
        case 0:
          return r = "mrm/v1/".concat(t), a = {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(n)
          }, e.n = 1, l()(Hh({
            path: r
          }, a));
        case 1:
          return e.a(2, e.v);
      }
    }, e);
  }), Yh = function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Uh(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Uh(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  }, Yh.apply(this, arguments);
}

function Qh(e, t) {
  var n = setTimeout(function () {
    t(e);
  }, 5e3);
  return function () {
    return clearTimeout(n);
  };
}

function Zh() {
  return React.createElement("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    clipPath: "url(#clip0_772_1420)"
  }, React.createElement("path", {
    d: "M8 3.333v9.333M3.333 8h9.333"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_772_1420"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h16v16H0z"
  }))));
}

const $h = (0, g.memo)(Zh);

function Kh() {
  return React.createElement("svg", {
    width: "15",
    height: "16",
    fill: "none",
    viewBox: "0 0 15 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#C5C7D3",
    fillRule: "evenodd",
    d: "M6.75 2.423c-2.9 0-5.25 2.28-5.25 5.091 0 2.812 2.35 5.091 5.25 5.091S12 10.325 12 7.515c0-2.812-2.35-5.092-5.25-5.092zM0 7.514C0 3.9 3.022.97 6.75.97S13.5 3.9 13.5 7.515c0 3.615-3.022 6.546-6.75 6.546S0 11.13 0 7.514z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#C5C7D3",
    fillRule: "evenodd",
    d: "M10.72 11.363a.767.767 0 011.06 0l3 2.91a.712.712 0 010 1.028.767.767 0 01-1.06 0l-3-2.91a.712.712 0 010-1.028z",
    clipRule: "evenodd"
  }));
}

const Jh = (0, g.memo)(Kh);

var Xh = n(44254);

function ey() {
  return React.createElement("svg", {
    width: "26",
    height: "26",
    fill: "none",
    viewBox: "0 0 26 26",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#4BAE4F",
    fillRule: "evenodd",
    d: "M13 0C5.83 0 0 5.83 0 13s5.83 13 13 13 13-5.83 13-13S20.17 0 13 0z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M19.287 8.618a.815.815 0 010 1.148l-7.617 7.617a.812.812 0 01-1.148 0l-3.808-3.809a.815.815 0 010-1.147.815.815 0 011.147 0l3.235 3.234 7.044-7.043a.806.806 0 011.147 0z",
    clipRule: "evenodd"
  }));
}

const ty = (0, g.memo)(ey);

function ny() {
  return React.createElement("svg", {
    width: "26",
    height: "26",
    fill: "none",
    viewBox: "0 0 26 26",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#EC5956",
    fillRule: "evenodd",
    d: "M26 13c0 7.18-5.82 13-13 13S0 20.18 0 13 5.82 0 13 0s13 5.82 13 13zm-11.375 6.5a1.625 1.625 0 11-3.25 0 1.625 1.625 0 013.25 0zM13 4.875c-.898 0-1.625.728-1.625 1.625V13a1.625 1.625 0 103.25 0V6.5c0-.897-.727-1.625-1.625-1.625z",
    clipRule: "evenodd"
  }));
}

const ry = (0, g.memo)(ny);

function ay(e) {
  var t = e.notificationType;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "success" == t ? "successful-notification" : "warn-notification"
  }, React.createElement("div", {
    className: "alert-toast"
  }, React.createElement("div", {
    className: "alert-container"
  }, React.createElement("div", {
    className: "successfull-icon"
  }, "success" == t ? React.createElement(ty, null) : React.createElement(ry, null)), React.createElement("p", null, e.message), React.createElement("div", {
    className: "cross-icon",
    onClick: function () {
      e.setShowNotification(!1);
    }
  }, React.createElement(Xh.A, null))))));
}

const oy = (0, g.memo)(ay);

function iy() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return ly(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (ly(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, ly(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, ly(d, "constructor", u), ly(u, "constructor", c), c.displayName = "GeneratorFunction", ly(u, a, "GeneratorFunction"), ly(d), ly(d, a, "Generator"), ly(d, r, function () {
    return this;
  }), ly(d, "toString", function () {
    return "[object Generator]";
  }), (iy = function () {
    return {
      w: o,
      m
    };
  })();
}

function ly(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  ly = function (e, t, n, r) {
    function o(t, n) {
      ly(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, ly(e, t, n, r);
}

function cy(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function uy(e) {
  return function (e) {
    if (Array.isArray(e)) return my(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || dy(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function sy(e, t) {
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
  }(e, t) || dy(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function dy(e, t) {
  if (e) {
    if ("string" == typeof e) return my(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? my(e, t) : void 0;
  }
}

function my(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function py(e) {
  var t,
    n,
    r,
    a,
    o = e.selected,
    i = e.setSelected,
    l = e.endpoint,
    c = e.items,
    u = e.allowMultiple,
    s = void 0 === u || u,
    d = e.allowNewCreate,
    m = e.name,
    p = e.title,
    f = e.refresh,
    v = e.setRefresh,
    h = e.prefix,
    y = e.comesFrom,
    b = e.successNotification,
    _ = e.setsuccessNotification,
    w = e.isActive,
    E = sy((0, g.useState)(""), 2),
    S = E[0],
    R = E[1],
    x = sy((0, g.useState)(""), 2),
    C = x[0],
    P = x[1],
    O = sy((0, g.useState)(!1), 2),
    k = O[0],
    j = O[1],
    A = sy((0, g.useState)("success"), 2),
    M = A[0],
    T = A[1],
    I = sy((0, g.useState)(!1), 2),
    F = I[0],
    N = I[1],
    D = (0, g.useRef)(null),
    W = sy((0, g.useState)(!1), 2),
    z = W[0],
    B = W[1];
  (0, g.useEffect)(function () {
    o.length === c.length ? B(!0) : B(!1);
  }, [w, c, o]), (0, g.useEffect)(function () {
    R("");
  }, [e.isActive]), (0, g.useEffect)(function () {
    D.current && D.current.focus();
  }, [e.isActive]);
  var L = (0, g.useMemo)(function () {
      return S ? c.filter(function (e) {
        return e.title.toLowerCase().includes(S.toLocaleLowerCase());
      }) : c;
    }, [S, c]),
    V = function (e) {
      e.stopPropagation();
      var t = e.target.value ? e.target.value : e.target.dataset.customValue,
        n = e.target.dataset.customId,
        r = null == o ? void 0 : o.findIndex(function (e) {
          return e.id == n;
        });
      s ? r >= 0 ? (i(o.filter(function (e) {
        return e.id != n;
      })), B(!1)) : (i([].concat(uy(o), [{
        id: n,
        title: t
      }])), B(!1)) : i(r >= 0 ? [] : [{
        id: n,
        title: t
      }]);
    },
    H = function () {
      var e,
        t = (e = iy().m(function e() {
          var t;
          return iy().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                qh(l, t = {
                  title: S
                }).then(function (e) {
                  "success" === e.status ? (R(""), i([].concat(uy(o), [{
                    id: null == e ? void 0 : e.data,
                    title: t.title
                  }])), T("success"), j(!0), P(null == e ? void 0 : e.message), v(!f), b && _("block")) : (T("warning"), j(!0), P(null == e ? void 0 : e.message), b && _("block")), Qh(!1, j), b && Qh("none", _);
                }), N(!1);
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
              cy(o, r, a, i, l, "next", e);
            }
            function l(e) {
              cy(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
  return React.createElement(React.Fragment, null, React.createElement("ul", {
    className: e.isActive ? "add-contact mintmrm-dropdown show" : "add-contact mintmrm-dropdown"
  }, React.createElement("li", {
    className: "searchbar"
  }, React.createElement("span", {
    className: "pos-relative"
  }, React.createElement(Jh, null), React.createElement("input", {
    ref: D,
    type: "search",
    name: "column-search",
    placeholder: (null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.SearchOrCreate) || "Search or Create",
    value: S,
    onChange: function (e) {
      return function (e) {
        R(e), S.length && N(!1);
      }(e.target.value);
    }
  }))), 0 == c.length || 0 == (null == L ? void 0 : L.length) ? React.createElement("li", {
    className: "list-title not-found"
  }, "No ", m, " Found") : React.createElement("li", {
    className: "list-title"
  }, p), React.createElement("div", {
    className: "option-section"
  }, "automation" == y && (null == L ? void 0 : L.length) > 1 && s && React.createElement(React.Fragment, null, React.createElement("li", {
    className: "single-column"
  }, React.createElement("div", {
    className: "mintmrm-checkbox"
  }, React.createElement("input", {
    type: "checkbox",
    name: "all-items",
    id: "all-items-".concat(h),
    onChange: function () {
      z ? i([]) : L.length > 0 ? i(L.map(function (e) {
        return e;
      })) : i(c.map(function (e) {
        return e;
      })), B(!z);
    },
    checked: z
  }), React.createElement("label", {
    htmlFor: "all-items-".concat(h),
    className: "mrm-custom-select-label"
  }, (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.SelectAllItems) || "Select All Items")))), (null == L ? void 0 : L.length) > 0 && L.map(function (e, t) {
    var n,
      r = (n = e.id, (null == o ? void 0 : o.findIndex(function (e) {
        return e.id == n;
      })) >= 0);
    return React.createElement("li", {
      key: t,
      className: r ? "single-column mrm-custom-select-single-column-selected" : "single-column"
    }, React.createElement("div", {
      className: "mintmrm-checkbox"
    }, React.createElement("input", {
      type: "checkbox",
      name: e.id,
      id: h + e.id,
      value: e.title,
      "data-custom-id": e.id,
      onChange: V,
      checked: r
    }), React.createElement("label", {
      htmlFor: h + e.id,
      className: "mrm-custom-select-label"
    }, e.title)));
  })), 0 == c.length && d || S && d ? React.createElement(React.Fragment, null, React.createElement("button", {
    className: F ? "mrm-custom-select-add-btn" : "mrm-custom-select-add-btn show",
    onClick: function () {
      N(!0);
    }
  }, React.createElement($h, null), " Add ", m), React.createElement("div", {
    className: F ? "add-item-input-wrapper show" : "add-item-input-wrapper"
  }, React.createElement("input", {
    type: "text",
    placeholder: "Enter " + m + " Name",
    value: S,
    onChange: function (e) {
      return R(e.target.value);
    }
  }), React.createElement("div", {
    className: "add-item-button-wrapper"
  }, React.createElement("button", {
    className: "contact-cancel mintmrm-btn outline",
    onClick: function () {
      R("");
    }
  }, (null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.Cancel) || "Cancel"), React.createElement("button", {
    className: "mintmrm-btn",
    onClick: H
  }, (null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.Save) || "Save")))) : null), k && React.createElement(oy, {
    setShowNotification: j,
    message: C,
    notificationType: M,
    setNotificationType: T
  }));
}

const fy = (0, g.memo)(py);

var vy = n(84329);

function gy() {
  return React.createElement("svg", {
    width: "13",
    height: "13",
    fill: "none",
    viewBox: "0 0 13 13"
  }, React.createElement("rect", {
    width: "13",
    height: "12.986",
    fill: "#686F7F",
    rx: "6.493"
  }), React.createElement("path", {
    fill: "#fff",
    stroke: "#fff",
    strokeWidth: ".2",
    d: "M6.38 8.088h-.005a.492.492 0 01-.487-.496l.002-.245c0-.014 0-.029.002-.043.068-.714.543-1.152.925-1.504.13-.12.252-.233.356-.35.127-.144.312-.437.118-.79-.224-.41-.77-.526-1.194-.428-.443.1-.607.479-.665.695a.492.492 0 01-.95-.254c.196-.732.704-1.241 1.395-1.4.93-.211 1.866.164 2.277.914.342.625.248 1.359-.245 1.915-.137.154-.283.289-.425.42-.353.325-.574.543-.611.857l-.002.222a.491.491 0 01-.491.487zM6.379 9.562a.488.488 0 01-.347-.838.51.51 0 01.693 0c.094.091.146.219.146.347a.5.5 0 01-.143.349.502.502 0 01-.35.142z"
  }));
}

const hy = (0, g.memo)(gy);

var yy,
  by,
  _y = n(65490),
  wy = n(61696),
  Ey = n(94286);

function Sy() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Ry(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Ry(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Ry(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Ry(d, "constructor", u), Ry(u, "constructor", c), c.displayName = "GeneratorFunction", Ry(u, a, "GeneratorFunction"), Ry(d), Ry(d, a, "Generator"), Ry(d, r, function () {
    return this;
  }), Ry(d, "toString", function () {
    return "[object Generator]";
  }), (Sy = function () {
    return {
      w: o,
      m
    };
  })();
}

function Ry(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Ry = function (e, t, n, r) {
    function o(t, n) {
      Ry(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Ry(e, t, n, r);
}

function xy(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Cy() {
  return Py.apply(this, arguments);
}

function Py() {
  return (e = Sy().m(function e() {
    return Sy().w(function (e) {
      for (;;) if (0 === e.n) return e.a(2, l()({
        path: "mrm/v1/lists"
      }).then(function (e) {
        return e;
      }).then(function (e) {
        if ("success" === (null == e ? void 0 : e.status)) return null == e ? void 0 : e.data;
      }));
    }, e);
  }), Py = function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        xy(o, r, a, i, l, "next", e);
      }
      function l(e) {
        xy(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  }).apply(this, arguments);
  var e;
}

function Oy() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return ky(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (ky(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, ky(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, ky(d, "constructor", u), ky(u, "constructor", c), c.displayName = "GeneratorFunction", ky(u, a, "GeneratorFunction"), ky(d), ky(d, a, "Generator"), ky(d, r, function () {
    return this;
  }), ky(d, "toString", function () {
    return "[object Generator]";
  }), (Oy = function () {
    return {
      w: o,
      m
    };
  })();
}

function ky(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  ky = function (e, t, n, r) {
    function o(t, n) {
      ky(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, ky(e, t, n, r);
}

function jy(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Ay() {
  return My.apply(this, arguments);
}

function My() {
  return e = Oy().m(function e() {
    var t,
      n = arguments;
    return Oy().w(function (e) {
      for (;;) if (0 === e.n) return t = "mrm/v1/segments".concat(n.length > 0 && void 0 !== n[0] ? n[0] : ""), e.a(2, l()({
        path: t
      }).then(function (e) {
        return e;
      }));
    }, e);
  }), My = function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        jy(o, r, a, i, l, "next", e);
      }
      function l(e) {
        jy(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  }, My.apply(this, arguments);
  var e;
}

function Ty() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Iy(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Iy(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Iy(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Iy(d, "constructor", u), Iy(u, "constructor", c), c.displayName = "GeneratorFunction", Iy(u, a, "GeneratorFunction"), Iy(d), Iy(d, a, "Generator"), Iy(d, r, function () {
    return this;
  }), Iy(d, "toString", function () {
    return "[object Generator]";
  }), (Ty = function () {
    return {
      w: o,
      m
    };
  })();
}

function Iy(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Iy = function (e, t, n, r) {
    function o(t, n) {
      Iy(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Iy(e, t, n, r);
}

function Fy(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Ny() {
  return Dy.apply(this, arguments);
}

function Dy() {
  return (e = Ty().m(function e() {
    return Ty().w(function (e) {
      for (;;) if (0 === e.n) return e.a(2, l()({
        path: "mrm/v1/tags"
      }).then(function (e) {
        return e;
      }).then(function (e) {
        if ("success" === (null == e ? void 0 : e.status)) return null == e ? void 0 : e.data;
      }));
    }, e);
  }), Dy = function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Fy(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Fy(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  }).apply(this, arguments);
  var e;
}

function Wy() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 13 13",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M3.903 4.012h-.718l1.957 5.533 1.096-3.132-.85-2.401h-.757v-.527h3.354v.527H7.2l1.957 5.533.703-2.011c.923-2.576-.756-3.378-.756-3.953a1.04 1.04 0 011.132-1.036A5.42 5.42 0 006.503 1.06a5.433 5.433 0 00-4.526 2.424h1.926v.527zM1.063 6.5a5.44 5.44 0 002.888 4.805L1.497 4.367A5.42 5.42 0 001.062 6.5zm10.169-2.68a3.85 3.85 0 01-.066 1.49h.022l-.082.235c-.049.17-.11.343-.18.513l-1.871 5.243a5.438 5.438 0 002.177-7.481z"
  }), React.createElement("path", {
    fill: "#2D3149",
    d: "M4.82 11.675a5.435 5.435 0 001.678.264 5.48 5.48 0 001.604-.24L6.51 7.2l-1.69 4.474z"
  }), React.createElement("path", {
    fill: "#2D3149",
    d: "M11.096 1.904A6.458 6.458 0 006.5 0a6.457 6.457 0 00-4.596 1.904A6.457 6.457 0 000 6.5c0 1.736.676 3.368 1.904 4.596A6.457 6.457 0 006.5 13a6.457 6.457 0 004.596-1.904A6.458 6.458 0 0013 6.5a6.457 6.457 0 00-1.904-4.596zM6.5 12.54A6.048 6.048 0 01.459 6.5 6.048 6.048 0 016.5.459 6.048 6.048 0 0112.541 6.5 6.048 6.048 0 016.5 12.541z"
  }));
}
