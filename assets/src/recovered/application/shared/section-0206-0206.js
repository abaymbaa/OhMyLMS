// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Zee = function (e) {
  var t = e.record,
    n = (e.isHover, (0, f.Zp)()),
    r = (0, g.useCallback)(function () {
      n("/certificate-edit/".concat(null == t ? void 0 : t.id));
    }, [null == t ? void 0 : t.id, n]);
  return (0, g.useCallback)(function () {
    n("/certificate/".concat(null == t ? void 0 : t.id, "/report"));
  }, [null == t ? void 0 : t.id, n]), React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    align: "start",
    justify: "start",
    gap: "4"
  }, React.createElement(v.Link, {
    to: "/certificate-edit/".concat(null == t ? void 0 : t.id)
  }, null != t && t.image_src ? React.createElement(gG.A, {
    shape: "square",
    src: t.image_src,
    size: 100
  }) : React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      display: "inline-block",
      background: "#eee"
    }
  })), React.createElement(I.FlexWP, {
    direction: "column",
    className: "omlms-td-thumbnail-title"
  }, React.createElement(v.Link, {
    to: "/certificate-edit/".concat(null == t ? void 0 : t.id),
    title: null == t ? void 0 : t.name,
    style: {
      textDecoration: "none"
    }
  }, React.createElement(I.TextWP, {
    as: "span",
    color: "#000d25",
    size: 16,
    numberOfLines: 2,
    truncate: !0
  }, Ge(null == t ? void 0 : t.name))), React.createElement(I.FlexWP, {
    align: "center",
    justify: "flex-start",
    gap: 2,
    className: "omlms-td-thumbnail-title-actions"
  }, React.createElement(I.ButtonWP, {
    onClick: r,
    label: (0, b.__)("Edit Certificate", "ohmylms"),
    variant: "text",
    style: {
      height: "26px"
    }
  }, React.createElement(pG.A, null))))));
};

const $ee = (0, g.memo)(Zee);

function Kee() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Jee(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Jee(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Jee(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Jee(d, "constructor", u), Jee(u, "constructor", c), c.displayName = "GeneratorFunction", Jee(u, a, "GeneratorFunction"), Jee(d), Jee(d, a, "Generator"), Jee(d, r, function () {
    return this;
  }), Jee(d, "toString", function () {
    return "[object Generator]";
  }), (Kee = function () {
    return {
      w: o,
      m
    };
  })();
}

function Jee(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Jee = function (e, t, n, r) {
    function o(t, n) {
      Jee(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Jee(e, t, n, r);
}

function Xee(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function ete(e, t) {
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
      if ("string" == typeof e) return tte(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tte(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function tte(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var nte = function (e) {
  (0, L.useIsPro)();
  var t = e.template,
    n = e.setOpenModal,
    r = ((0, y.useDispatch)(T.default), (0, y.useSelect)(function (e) {
      return e(T.default).selectCertificates();
    }, []), (0, y.useSelect)(function (e) {
      return e(T.default).selectTotalCertificatesNumber();
    }, []), ete((0, g.useState)(!1), 2)),
    a = (r[0], r[1], ete((0, g.useState)(!1), 2)),
    o = a[0],
    i = a[1],
    c = (0, f.Zp)(),
    u = function () {
      var e,
        r = (e = Kee().m(function e() {
          var r, a, o, u;
          return Kee().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                return e.p = 0, i(!0), a = {
                  name: "Untitled",
                  status: "publish",
                  contents: (null == t ? void 0 : t.contents) || {},
                  html_contents: CB(null == t || null === (r = t.contents) || void 0 === r ? void 0 : r.elements)
                }, e.n = 1, l()({
                  path: "/creator-lms/v1/certificates",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(a)
                });
              case 1:
                o = e.v, n(!1), c("/certificate-edit/".concat(o.id)), e.n = 3;
                break;
              case 2:
                e.p = 2, u = e.v, console.error(u);
              case 3:
                return e.p = 3, i(!1), e.f(3);
              case 4:
                return e.a(2);
            }
          }, e, null, [[0, 2, 3, 4]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Xee(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Xee(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return r.apply(this, arguments);
      };
    }();
  return React.createElement(React.Fragment, null, React.createElement(I.CardWP, null, React.createElement(I.SpacerWP, {
    padding: 2
  }, React.createElement(I.FlexWP, {
    align: "center",
    justify: "center",
    direction: "column",
    gap: 2
  }, React.createElement("img", {
    src: null == t ? void 0 : t.image_src,
    alt: (0, b.__)("Certificate Template", "ohmylms"),
    style: {
      maxWidth: "100%",
      objectFit: "contain"
    }
  }), React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: function () {
      return u(null == t ? void 0 : t.id);
    },
    loading: o,
    tabIndex: 0,
    "data-template-btn": !0,
    onKeyDown: function (e) {
      "Enter" !== e.key && " " !== e.key || u(null == t ? void 0 : t.id);
    }
  }, (0, b.__)("Use this template", "ohmylms"))))));
};

const rte = (0, g.memo)(nte);

function ate(e, t) {
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
      if ("string" == typeof e) return ote(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ote(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function ote(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

(0, b.__)("Industry", "ohmylms"), (0, b.__)("Company", "ohmylms");

var ite = function (e) {
  var t = e.openModal,
    n = e.setOpenModal,
    r = ate((0, g.useState)(""), 2),
    a = (r[0], r[1], ate((0, g.useState)("industry"), 2)),
    o = (a[0], a[1], ate((0, g.useState)(!1), 2)),
    i = (o[0], o[1], ate((0, g.useState)(!1), 2)),
    l = i[0],
    c = i[1];
  return (0, f.Zp)(), (0, g.useEffect)(function () {
    c(!0), setTimeout(function () {
      c(!1);
    }, 300);
  }, []), React.createElement(React.Fragment, null, t && React.createElement(I.ModalWP, {
    title: (0, b.__)("Choose a template", "ohmylms"),
    style: {
      maxWidth: "1200px",
      minWidth: "900px"
    },
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    onRequestClose: function () {
      return n(!1);
    }
  }, React.createElement(I.FlexWP, {
    wrap: "wrap",
    gap: 3
  }, l ? React.createElement(_.A, {
    active: !0
  }) : hB.slice().reverse().map(function (e, t) {
    return React.createElement(I.FlexItemWP, {
      key: t,
      isBlock: !0,
      style: {
        width: "100%"
      }
    }, React.createElement(rte, {
      template: e,
      setOpenModal: n
    }));
  }))));
};

const lte = (0, g.memo)(ite);

function cte() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return ute(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (ute(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, ute(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, ute(d, "constructor", u), ute(u, "constructor", c), c.displayName = "GeneratorFunction", ute(u, a, "GeneratorFunction"), ute(d), ute(d, a, "Generator"), ute(d, r, function () {
    return this;
  }), ute(d, "toString", function () {
    return "[object Generator]";
  }), (cte = function () {
    return {
      w: o,
      m
    };
  })();
}

function ute(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  ute = function (e, t, n, r) {
    function o(t, n) {
      ute(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, ute(e, t, n, r);
}

function ste(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function dte(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        ste(o, r, a, i, l, "next", e);
      }
      function l(e) {
        ste(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function mte(e, t) {
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
  }(e, t) || pte(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function pte(e, t) {
  if (e) {
    if ("string" == typeof e) return fte(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fte(e, t) : void 0;
  }
}

function fte(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var vte = function () {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectCertificatePagination();
    }, []),
    a = r.totalItems,
    o = (r.totalPages, (0, y.useSelect)(function (e) {
      return e(T.default).selectCertificates();
    }, [])),
    i = mte((0, g.useState)(!0), 2),
    c = i[0],
    u = i[1],
    s = mte((0, g.useState)([]), 2),
    d = s[0],
    m = s[1],
    p = mte((0, g.useState)(!1), 2),
    v = p[0],
    h = p[1],
    _ = mte((0, g.useState)(1), 2),
    w = _[0],
    E = _[1],
    S = mte((0, g.useState)(5), 2),
    R = S[0],
    x = (S[1], mte((0, g.useState)(""), 2)),
    C = x[0],
    P = x[1],
    O = mte((0, g.useState)(""), 2),
    k = O[0],
    j = O[1],
    A = mte((0, g.useState)("all"), 2),
    M = A[0],
    F = A[1],
    N = mte((0, g.useState)(null), 2),
    D = N[0],
    W = N[1],
    B = mte((0, g.useState)(null), 2),
    L = B[0],
    V = B[1],
    H = mte((0, g.useState)([]), 2),
    G = H[0],
    U = H[1],
    Y = mte((0, g.useState)(!1), 2),
    Q = Y[0],
    Z = Y[1],
    $ = (0, z.A)(),
    K = $.openNotificationWithIcon,
    J = $.contextHolder,
    X = (0, f.Zp)(),
    ee = (0, g.useCallback)(function (e) {
      P(e), E(1);
    }, []),
    te = (0, g.useCallback)(function (e) {
      j(e), E(1);
    }, []),
    ne = (0, g.useCallback)(function (e) {
      F(e), E(1);
    }, []),
    re = (0, g.useCallback)(function (e) {
      E(e), m([]);
    }, []),
    ae = (0, g.useCallback)(dte(cte().m(function t() {
      var n,
        r,
        a,
        o = arguments;
      return cte().w(function (t) {
        for (;;) switch (t.n) {
          case 0:
            n = o.length > 0 && void 0 !== o[0] ? o[0] : "date", r = o.length > 1 && void 0 !== o[1] ? o[1] : "DESC", u(!0), a = {
              offset: (w - 1) * R,
              order: r,
              page: w,
              per_page: R,
              search: C,
              post_status: M,
              orderby: n,
              course_id: k
            }, e.fetchCertificates(a).finally(function () {
              u(!1);
            });
          case 1:
            return t.a(2);
        }
      }, t);
    })), [w, R, C, M, k]),
    oe = (0, g.useCallback)(function (e) {
      h(!0), W(e);
    }, []),
    ie = (0, g.useCallback)(function () {
      h(!1);
    }, []),
    le = (0, g.useCallback)(dte(cte().m(function t() {
      return cte().w(function (t) {
        for (;;) switch (t.n) {
          case 0:
            return t.n = 1, e.handleBulkDelete("certificates", {
              certificate_ids: D ? [D] : d
            });
          case 1:
            ae(), m([]), E(1), W(null), h(!1);
          case 2:
            return t.a(2);
        }
      }, t);
    })), [d, D, ae]),
    ce = (0, g.useCallback)(function (e, t, n) {
      var r = {
          date_created: "date",
          name: "title"
        }[n.field] || n.field,
        a = {
          ascend: "ASC",
          descend: "DESC"
        }[n.order] || n.order;
      E(1), ae(r, a);
    }, [ae, E]),
    ue = (0, g.useCallback)(dte(cte().m(function e() {
      var t;
      return cte().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return e.n = 1, l()({
              path: "/creator-lms/v1/courses"
            });
          case 1:
            t = e.v, U(t);
          case 2:
            return e.a(2);
        }
      }, e);
    })), []),
    se = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("All Courses", "ohmylms"),
        value: ""
      }].concat(function (e) {
        return function (e) {
          if (Array.isArray(e)) return fte(e);
        }(e) || function (e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || pte(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }(G.map(function (e) {
        return {
          label: Ge(null == e ? void 0 : e.name),
          value: null == e ? void 0 : e.id
        };
      })));
    }, [G]),
    de = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("Delete", "ohmylms"),
        value: "delete",
        action: function () {
          h(!0);
        }
      }];
    }, [d]),
    me = (0, g.useMemo)(function () {
      return [{
        value: "all",
        label: (0, b.__)("All Status", "ohmylms")
      }, {
        value: "publish",
        label: (0, b.__)("Publish", "ohmylms")
      }, {
        value: "draft",
        label: (0, b.__)("Draft", "ohmylms")
      }];
    }, []),
    pe = (0, g.useMemo)(function () {
      return {
        selectedRowKeys: d,
        onChange: m
      };
    }, [d]),
    fe = (0, g.useMemo)(function () {
      return {
        label: (0, b.__)("Add Certificate", "ohmylms"),
        onClick: function () {
          return Z(!0);
        }
      };
    }, []),
    ve = [{
      title: "Certificate",
      dataIndex: "name",
      key: "name",
      sorter: !0,
      width: "340px",
      render: function (e, t) {
        var n = L === t.id;
        return React.createElement($ee, {
          record: t,
          isHover: n
        });
      }
    }, {
      title: "Date",
      dataIndex: "date_created",
      key: "date_created",
      sorter: !0,
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "secondary"
        }, sn()(null == e ? void 0 : e.date).format("MMMM DD, YYYY") || "-");
      }
    }, {
      title: "Course name",
      dataIndex: "courses",
      key: "courses",
      render: function (e, t) {
        var n = (null == e ? void 0 : e.map(function (e) {
          return null == e ? void 0 : e.name;
        })) || [];
        return React.createElement(pZ, {
          items: n,
          showAllOnHover: !0,
          maxVisible: 3
        });
      }
    }, {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: function (e, t) {
        return React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "publish" === e ? "success" : "secondary",
          style: {
            textTransform: "capitalize"
          }
        }, "publish" === e ? (0, b.__)("Published", "ohmylms") : "future" === e ? (0, b.__)("Scheduled", "ohmylms") : (0, b.__)("Draft", "ohmylms"));
      }
    }, {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: function (e, t) {
        return React.createElement(I.DropdownMenuWP, {
          controls: [{
            title: (0, b.__)("Edit", "ohmylms"),
            key: "edit",
            onClick: function () {
              return X("/certificate-edit/".concat(null == t ? void 0 : t.id));
            },
            icon: React.createElement("span", null, React.createElement(pG.A, null))
          }, {
            title: (0, b.__)("Delete", "ohmylms"),
            key: "delete",
            onClick: function () {
              return oe(null == t ? void 0 : t.id);
            },
            icon: React.createElement(We, null)
          }],
          icon: React.createElement(q.Icon, {
            icon: Ne.A
          })
        });
      }
    }];
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && ae(), function () {
      e = !1;
    };
  }, [w, R, C, e, M, k]), (0, g.useEffect)(function () {
    var e = !0;
    return e && ue(), function () {
      e = !1;
    };
  }, []), (0, g.useEffect)(function () {
    !c && t && K(n, t);
  }, [t]), React.createElement(React.Fragment, null, J, React.createElement(I.ContainerWP, null, React.createElement(YG, {
    title: (0, b.__)("All Certificates", "ohmylms"),
    showAddButton: !0,
    addButtonConfig: fe
  }), React.createElement(Ea, {
    isBorderless: !0,
    minHeight: "calc(100vh - 200px)"
  }, React.createElement(I.SpacerWP, {
    padding: 5
  }, d.length > 0 ? React.createElement(hN, {
    items: d,
    setItems: m,
    bulksActions: de
  }) : React.createElement(aY, {
    handleSearch: ee,
    searchPlaceholder: (0, b.__)("Search certificate", "ohmylms"),
    showFilterByDays: !1,
    showFilterByPriceType: !1,
    handleFilterByCategory: te,
    filterByCategory: k,
    categories: se,
    categoryPrefix: (0, b.__)("Course", "ohmylms"),
    currentPage: w,
    totalItems: a,
    handleFilterByStatus: ne,
    filterByStatus: M,
    filterByStatusOptions: me,
    formateCategory: !1,
    showFilterByStatus: !1,
    className: "omlms-certificate-listing-filter-card"
  }), React.createElement(sN.A, {
    rowKey: "id",
    columns: ve,
    dataSource: o || [],
    rowSelection: pe,
    pagination: !1,
    loading: c,
    onChange: ce,
    onRowMouseEnter: function (e) {
      return V(null == e ? void 0 : e.id);
    },
    onRowMouseLeave: function () {
      return V(null);
    },
    className: "certificate-listing-table",
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No Certificates yet!", "ohmylms"),
        description: (0, b.__)("Start building your first certificate and it’ll show up here as soon as you hit publish.", "ohmylms")
      })
    }
  }), !c && Number(a) > 5 && React.createElement(fN, {
    total: a,
    currentPage: w,
    onPageChange: re,
    perPage: R
  })))), v && React.createElement(Ie, {
    title: d.length > 1 ? (0, b.__)("Delete Certificates", "ohmylms") : (0, b.__)("Delete Certificate", "ohmylms"),
    description: d.length > 1 ? (0, b.__)("Are you sure you want to delete these certificates?", "ohmylms") : (0, b.__)("Are you sure you want to delete certificate?", "ohmylms"),
    onClose: ie,
    onDelete: le,
    isOpen: v,
    isDelete: !0
  }), Q && React.createElement(lte, {
    openModal: Q,
    setOpenModal: Z
  }));
};

const gte = (0, g.memo)(vte);
