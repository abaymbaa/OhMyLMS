// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Bq = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M11.918 4.583a.917.917 0 00-1.833 0v7.413l-2.56-2.56a.917.917 0 00-1.297 1.296l3.477 3.477a1.833 1.833 0 002.593 0l3.475-3.476a.917.917 0 10-1.296-1.296l-2.559 2.559V4.582z"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.667 12.834c.506 0 .916.41.916.916v1.834c0 .506.41.916.917.916h11c.506 0 .917-.41.917-.916V13.75a.917.917 0 111.833 0v1.834a2.75 2.75 0 01-2.75 2.75h-11a2.75 2.75 0 01-2.75-2.75V13.75c0-.506.41-.916.917-.916z",
    clipRule: "evenodd"
  })));
};

const Lq = (0, g.memo)(Bq);

function Vq() {
  return Vq = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vq.apply(null, arguments);
}

var Hq = function (e) {
  var t = Vq({}, (function (e) {
    if (null == e) throw new TypeError("Cannot destructure " + e);
  }(e), e));
  return React.createElement(React.Fragment, null, React.createElement(D.A, Vq({
    variant: "secondary",
    className: "is-secondary",
    icon: React.createElement(Lq, null),
    "aria-disabled": "false",
    style: {
      cursor: "pointer"
    }
  }, t), (0, b.__)("Import", "ohmylms")));
};

const Gq = (0, g.memo)(Hq);

function Uq(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function qq(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? Uq(Object(n), !0).forEach(function (t) {
      Yq(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Uq(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function Yq(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != Qq(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != Qq(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == Qq(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function Qq(e) {
  return Qq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Qq(e);
}

function Zq(e, t) {
  if (e) {
    if ("string" == typeof e) return $q(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $q(e, t) : void 0;
  }
}

function $q(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

const Kq = function () {
  var e = (0, g.useCallback)(function (e) {
    try {
      if (!Array.isArray(e)) return [];
      var t,
        n = {},
        r = [],
        a = function (e) {
          var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (!t) {
            if (Array.isArray(e) || (t = Zq(e))) {
              t && (e = t);
              var n = 0,
                r = function () {};
              return {
                s: r,
                n: function () {
                  return n >= e.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: e[n++]
                  };
                },
                e: function (e) {
                  throw e;
                },
                f: r
              };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var a,
            o = !0,
            i = !1;
          return {
            s: function () {
              t = t.call(e);
            },
            n: function () {
              var e = t.next();
              return o = e.done, e;
            },
            e: function (e) {
              i = !0, a = e;
            },
            f: function () {
              try {
                o || null == t.return || t.return();
              } finally {
                if (i) throw a;
              }
            }
          };
        }(e);
      try {
        for (a.s(); !(t = a.n()).done;) {
          var o = t.value;
          if (o && "object" === Qq(o)) {
            var i = o.term_id,
              l = o.id,
              c = o.name;
            (i || l) && c && (i ? n[i] = qq(qq({}, o), {}, {
              children: []
            }) : l && (n[l] = qq(qq({}, o), {}, {
              children: []
            })));
          }
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
      for (var u = 0, s = Object.values(n); u < s.length; u++) {
        var d = s[u];
        null != d && d.parent && n[null == d ? void 0 : d.parent] ? n[null == d ? void 0 : d.parent].children.push(d) : r.push(d);
      }
      var m = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return e.flatMap(function (e) {
          var n;
          return [{
            label: Ge(null == e ? void 0 : e.name),
            value: null !== (n = null == e ? void 0 : e.term_id) && void 0 !== n ? n : null == e ? void 0 : e.id
          }].concat(function (e) {
            return function (e) {
              if (Array.isArray(e)) return $q(e);
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || Zq(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }(m(null == e ? void 0 : e.children, t + 1)));
        });
      };
      return m(r);
    } catch (e) {
      return console.error("Error formatting categories for Select:", e), [];
    }
  }, []);
  return e;
};

function Jq() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Xq(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Xq(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Xq(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Xq(d, "constructor", u), Xq(u, "constructor", c), c.displayName = "GeneratorFunction", Xq(u, a, "GeneratorFunction"), Xq(d), Xq(d, a, "Generator"), Xq(d, r, function () {
    return this;
  }), Xq(d, "toString", function () {
    return "[object Generator]";
  }), (Jq = function () {
    return {
      w: o,
      m
    };
  })();
}

function Xq(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Xq = function (e, t, n, r) {
    function o(t, n) {
      Xq(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Xq(e, t, n, r);
}

function eY(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function tY(e, t) {
  if (e) {
    if ("string" == typeof e) return nY(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? nY(e, t) : void 0;
  }
}

function nY(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var rY = function (e) {
  var t = e.showSearch,
    n = void 0 === t || t,
    r = e.handleSearch,
    a = e.searchPlaceholder,
    o = void 0 === a ? (0, b.__)("Search...", "ohmylms") : a,
    i = e.showFilterByDays,
    l = void 0 === i || i,
    c = e.handleFilterByDays,
    u = (e.filterByDays, e.filterByDaysOptions, e.showFilterByPriceType),
    s = void 0 === u || u,
    d = e.handleFilterByPriceType,
    m = e.filterByPriceType,
    p = e.filterByPriceTypeOptions,
    f = void 0 === p ? [] : p,
    v = e.showFilterByCategory,
    y = void 0 === v || v,
    _ = e.handleFilterByCategory,
    w = e.filterByCategory,
    E = e.categories,
    S = e.categoryPrefix,
    R = void 0 === S ? (0, b.__)("Categories", "ohmylms") : S,
    x = e.formateCategory,
    C = void 0 === x || x,
    P = e.showFilterByStatus,
    O = void 0 === P || P,
    k = e.handleFilterByStatus,
    j = e.filterByStatus,
    A = e.filterByStatusOptions,
    M = void 0 === A ? [] : A,
    T = e.showTotalItemsCount,
    F = void 0 === T || T,
    N = e.currentPage,
    D = e.totalItems,
    W = e.perPage,
    z = void 0 === W ? 5 : W,
    B = e.spacerMarginBottom,
    L = void 0 === B ? 4 : B,
    V = e.className,
    H = void 0 === V ? "" : V,
    G = Kq(),
    U = function (e, t) {
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
      }(e, t) || tY(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)([]), 2),
    q = U[0],
    Y = U[1];
  (0, g.useEffect)(function () {
    if (C) {
      if (Array.isArray(E)) {
        var e = G(E);
        Y([{
          label: (0, b.__)("All ".concat(R), "ohmylms"),
          value: ""
        }].concat(function (e) {
          return function (e) {
            if (Array.isArray(e)) return nY(e);
          }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
          }(e) || tY(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }(e)));
      } else Y([]);
    } else Y(E);
  }, [E, G, C]);
  var Q = function () {
    var e,
      t = (e = Jq().m(function e(t) {
        var n;
        return Jq().w(function (e) {
          for (;;) if (0 === e.n) return n = q.filter(function (e) {
            return e.label.toLowerCase().includes(t.toLowerCase());
          }), e.a(2, n);
        }, e);
      }), function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, a) {
          var o = e.apply(t, n);
          function i(e) {
            eY(o, r, a, i, l, "next", e);
          }
          function l(e) {
            eY(o, r, a, i, l, "throw", e);
          }
          i(void 0);
        });
      });
    return function (e) {
      return t.apply(this, arguments);
    };
  }();
  return h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
    marginBottom: L,
    className: H
  }, h().createElement(I.FlexWP, {
    align: "center",
    justify: "start",
    gap: "2",
    wrap: "wrap"
  }, n && h().createElement(I.FlexItemWP, null, h().createElement(Cm, {
    placeholder: o,
    onChange: r
  })), s && h().createElement(I.FlexItemWP, {
    className: "ohmylms-filter-by-price-item"
  }, h().createElement(vn.A, {
    placeholder: (0, b.__)("Filter By Price Type", "ohmylms"),
    onChange: d,
    value: null != m ? m : "",
    options: f,
    style: {
      width: "150px"
    }
  })), y && h().createElement(I.FlexItemWP, {
    className: "ohmylms-category-select-item"
  }, h().createElement(I.SearchSelectWP, {
    placeholder: R,
    onChange: function (e) {
      return _(e.value);
    },
    value: [q.find(function (e) {
      return e.value === w;
    })],
    defaultOptions: q,
    loadOptions: Q,
    isClearable: !1,
    isSearchable: !0,
    isMulti: !1,
    customClass: "ohmylms-category-select"
  })), O && h().createElement(I.FlexItemWP, {
    className: "ohmylms-filter-by-status-item"
  }, h().createElement(vn.A, {
    placeholder: (0, b.__)("Filter By Status", "ohmylms"),
    onChange: k,
    value: null != j ? j : "",
    options: M,
    style: {
      width: "150px"
    }
  })), l && h().createElement(I.FlexItemWP, {
    className: "ohmylms-filter-by-days-item"
  }, h().createElement(ZU, {
    placeholder: (0, b.__)("Filter By Days", "ohmylms"),
    onChange: function (e) {
      "custom_range" !== e && c(e);
    },
    style: {
      width: "150px"
    },
    onRangeChange: c
  })), F && D > 0 && h().createElement(I.FlexItemWP, {
    style: {
      marginLeft: "auto"
    },
    className: "ohmylms-count-item"
  }, h().createElement(I.TextWP, null, (0, b.__)("Showing ".concat(Math.min((N - 1) * z + 1, D), "-").concat(Math.min(N * z, D), " of ").concat(D), "ohmylms"))))));
};

const aY = (0, g.memo)(rY);

function oY(e) {
  return oY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, oY(e);
}

function iY(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function lY(e) {
  return function (e) {
    if (Array.isArray(e)) return fY(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || pY(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function cY() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return uY(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (uY(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, uY(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, uY(d, "constructor", u), uY(u, "constructor", c), c.displayName = "GeneratorFunction", uY(u, a, "GeneratorFunction"), uY(d), uY(d, a, "Generator"), uY(d, r, function () {
    return this;
  }), uY(d, "toString", function () {
    return "[object Generator]";
  }), (cY = function () {
    return {
      w: o,
      m
    };
  })();
}

function uY(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  uY = function (e, t, n, r) {
    function o(t, n) {
      uY(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, uY(e, t, n, r);
}

function sY(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function dY(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        sY(o, r, a, i, l, "next", e);
      }
      function l(e) {
        sY(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function mY(e, t) {
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
  }(e, t) || pY(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function pY(e, t) {
  if (e) {
    if ("string" == typeof e) return fY(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fY(e, t) : void 0;
  }
}

function fY(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
