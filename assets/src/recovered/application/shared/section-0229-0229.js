// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function Mae() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Tae(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Tae(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Tae(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Tae(d, "constructor", u), Tae(u, "constructor", c), c.displayName = "GeneratorFunction", Tae(u, a, "GeneratorFunction"), Tae(d), Tae(d, a, "Generator"), Tae(d, r, function () {
    return this;
  }), Tae(d, "toString", function () {
    return "[object Generator]";
  }), (Mae = function () {
    return {
      w: o,
      m
    };
  })();
}

function Tae(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Tae = function (e, t, n, r) {
    function o(t, n) {
      Tae(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Tae(e, t, n, r);
}

function Iae(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Fae(e, t) {
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
      if ("string" == typeof e) return Nae(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Nae(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Nae(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Dae = function (e) {
  var t,
    n = e.isOpen,
    r = e.onClose,
    a = e.isCreating,
    o = e.onEdit,
    i = e.onAccept,
    l = e.onRegenerate;
  if (!n) return null;
  var c = (0, y.useSelect)(function (e) {
      return e(T.default).getAISuggestedCourses();
    }, []),
    u = Fae((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1],
    m = Fae((0, g.useState)(0), 2),
    p = (m[0], m[1]),
    f = Fae((0, g.useState)(null !== (t = c[0]) && void 0 !== t ? t : {}), 2),
    v = f[0],
    h = f[1],
    _ = (0, g.useRef)(null),
    w = function () {
      var e,
        t = (e = Mae().m(function e() {
          var t;
          return Mae().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (e.p = 0, d(!0), !i || "function" != typeof i) {
                  e.n = 1;
                  break;
                }
                return e.n = 1, i(v);
              case 1:
                e.n = 3;
                break;
              case 2:
                e.p = 2, t = e.v, console.error(t);
              case 3:
                return e.p = 3, d(!1), e.f(3);
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
              Iae(o, r, a, i, l, "next", e);
            }
            function l(e) {
              Iae(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    setTimeout(function () {
      var e;
      p(null == _ || null === (e = _.current) || void 0 === e ? void 0 : e.offsetHeight);
    }, 100);
  }, [v]), (0, g.useEffect)(function () {
    c.length && h(c[c.length - 1]);
  }, [c]), React.createElement(React.Fragment, null, React.createElement(I.ModalWP, {
    __experimentalHideHeader: !0,
    className: "omlms-ai-course-preview-modal ".concat(a ? "omlms-ai-course-preview-modal--creating" : ""),
    size: "fill",
    style: {
      maxWidth: "902px",
      height: "637px"
    }
  }, a ? React.createElement(React.Fragment, null, React.createElement(wr.A, {
    width: "19",
    height: "19"
  }), React.createElement(I.TextWP, {
    className: "clrms-ai-course-generating-text",
    as: "p",
    size: "15",
    weight: "500"
  }, (0, b.__)("Hang tight! We're building your course structure based on your input.", "ohmylms"))) : React.createElement(I.FlexWP, {
    align: "between",
    justify: "between",
    direction: "column",
    gap: 6,
    ref: _,
    className: "omlms-ai-course-preview-content"
  }, React.createElement(pae, {
    onClose: function () {
      s || r && "function" == typeof r && r();
    },
    showPagination: c.length > 1,
    totalItems: c.length,
    onPaginationChange: function (e) {
      h(c[e]);
    },
    isLoading: s
  }), ((null == v ? void 0 : v.title) || (null == v ? void 0 : v.description)) && React.createElement(React.Fragment, null, React.createElement(vae, {
    title: null == v ? void 0 : v.title,
    description: null == v ? void 0 : v.description
  })), React.createElement("div", {
    style: {
      height: "100%"
    }
  }, React.createElement(Pae, {
    data: null == v ? void 0 : v.chapters
  }), React.createElement(I.DividerWP, {
    color: "#C8D2E980",
    marginStart: 0,
    marginEnd: 0
  })), React.createElement(Aae, {
    onEdit: o,
    onAccept: w,
    onRegenerate: l,
    isLoading: s
  }))));
};

const Wae = (0, g.memo)(Dae);

function zae() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Bae(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Bae(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Bae(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Bae(d, "constructor", u), Bae(u, "constructor", c), c.displayName = "GeneratorFunction", Bae(u, a, "GeneratorFunction"), Bae(d), Bae(d, a, "Generator"), Bae(d, r, function () {
    return this;
  }), Bae(d, "toString", function () {
    return "[object Generator]";
  }), (zae = function () {
    return {
      w: o,
      m
    };
  })();
}

function Bae(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Bae = function (e, t, n, r) {
    function o(t, n) {
      Bae(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Bae(e, t, n, r);
}

function Lae(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Vae(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Lae(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Lae(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function Hae(e, t) {
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
      if ("string" == typeof e) return Gae(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gae(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Gae(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Uae = function () {
  var e,
    t = (0, y.useDispatch)(T.default),
    n = Hae((0, g.useState)(""), 2),
    r = n[0],
    a = n[1],
    o = Hae((0, g.useState)(!1), 2),
    i = o[0],
    c = o[1],
    u = Hae((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1],
    m = (0, g.useRef)(null),
    p = (0, g.useRef)(null),
    v = (0, F.z)(),
    h = (0, f.Zp)(),
    _ = (0, y.useSelect)(function (e) {
      return e(T.default).getAllCourseSuggestions();
    }, []),
    w = (0, f.zy)(),
    E = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    S = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    R = (0, z.A)(),
    x = R.openNotificationWithIcon,
    C = R.contextHolder,
    P = (0, y.useSelect)(function (e) {
      return e(T.default).getAISettings();
    }, []),
    O = (0, y.useSelect)(function (e) {
      return e(T.default).getAllIntegrations();
    }, []),
    k = (0, L.useIsPro)();
  function j(e, t) {
    var n,
      r,
      a = {
        title: null !== (n = null == e ? void 0 : e.title) && void 0 !== n ? n : "Untitled",
        description: (null == e ? void 0 : e.description) || "",
        status: "draft",
        chapters: null == e || null === (r = e.chapters) || void 0 === r ? void 0 : r.map(function (e) {
          var t, n;
          return {
            title: null !== (t = null == e ? void 0 : e.title) && void 0 !== t ? t : "Untitled",
            description: (null == e ? void 0 : e.description) || "",
            status: "publish",
            contents: null == e || null === (n = e.content) || void 0 === n ? void 0 : n.map(function (e) {
              var t;
              return {
                title: null !== (t = null == e ? void 0 : e.title) && void 0 !== t ? t : "Untitled",
                type: null == e ? void 0 : e.type,
                status: "publish"
              };
            })
          };
        })
      };
    return t && (a.id = t), a;
  }
  (0, g.useEffect)(function () {
    E && x(S, E);
  }, [E]);
  var A = function () {
      var e = Vae(zae().m(function e(n) {
        var r, o, i, l, u, s;
        return zae().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (!(null != P && P.self && Number(null == P ? void 0 : P.text_credit) <= 0)) {
                e.n = 1;
                break;
              }
              return x("error", "You have reached your text generation limit."), e.a(2);
            case 1:
              return e.p = 1, d(!0), c(!0), a(n), e.n = 2, v({
                prompt: n,
                type: "text",
                contentType: "course_outline"
              });
            case 2:
              if (null == (r = e.v) || !r.error) {
                e.n = 3;
                break;
              }
              d(!1), c(!1), a(n), i = null;
              try {
                i = r.message ? JSON.parse(r.message) : null;
              } catch (e) {
                console.error("Error parsing AI response:", e);
              }
              "anthropic" === (null == P ? void 0 : P.platform) && (i = (null === (l = i) || void 0 === l ? void 0 : l.data) || {
                error: {
                  message: (null === (u = i) || void 0 === u ? void 0 : u.message) || "Unknown error"
                }
              }), x("error", (null === (o = i) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.message) || "Unknown error"), e.n = 4;
              break;
            case 3:
              return e.n = 4, t.setAiCourseOutline(null == r ? void 0 : r.formattedResult);
            case 4:
              e.n = 6;
              break;
            case 5:
              e.p = 5, s = e.v, console.error(s);
            case 6:
              return e.p = 6, d(!1), e.f(6);
            case 7:
              return e.a(2);
          }
        }, e, null, [[1, 5, 6, 7]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    M = function () {
      m.current && (m.current.focus(), setTimeout(function () {
        m.current.selectionStart = m.current.selectionEnd = m.current.value.length;
      }, 0));
    },
    N = function () {
      c(!1), M();
    },
    D = function () {
      var e = Vae(zae().m(function e() {
        var t;
        return zae().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, A(r);
            case 1:
              e.n = 3;
              break;
            case 2:
              e.p = 2, t = e.v, console.error(t);
            case 3:
              return e.a(2);
          }
        }, e, null, [[0, 2]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    W = function () {
      var e = Vae(zae().m(function e(t) {
        var n, r, a, o, i;
        return zae().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, (a = j(t)).course_type = null !== (n = null == w || null === (r = w.state) || void 0 === r ? void 0 : r.courseType) && void 0 !== n ? n : "self-paced", e.n = 1, l()({
                path: "/creator-lms/v1/ai/course",
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(a)
              });
            case 1:
              o = e.v, setTimeout(function () {
                null != o && o.course_id && h("/course-edit/".concat(null == o ? void 0 : o.course_id));
              }, 100), e.n = 3;
              break;
            case 2:
              e.p = 2, i = e.v, console.error(i);
            case 3:
              return e.p = 3, N(), e.f(3);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 2, 3, 4]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  return k && null != O && null !== (e = O.ai_model) && void 0 !== e && e.is_enable && (null != P && P.self || null != P && P.api_key) ? React.createElement(React.Fragment, null, C, React.createElement(I.SurfaceWP, {
    minHeight: "calc(100vh - 32px)"
  }, React.createElement(I.ContainerWP, null, React.createElement(I.SpacerWP, {
    paddingY: 5
  }, React.createElement(I.FlexWP, {
    justify: "start",
    align: "center",
    gap: 3
  }, React.createElement(Nr, null), React.createElement(I.HeadingWP, {
    level: 2,
    size: 20
  }, (0, b.__)("OhMyLMS AI", "ohmylms"))), React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    padding: "32px",
    margin: "30px 0",
    minHeight: "calc(100vh - 170px)"
  }, React.createElement(I.FlexWP, {
    direction: "column",
    gap: 0,
    align: "center",
    justify: "center",
    style: {
      minHeight: "100%",
      width: "804px",
      margin: "0 auto",
      maxWidth: "100%"
    }
  }, React.createElement(I.SpacerWP, {
    marginBottom: 4
  }, React.createElement(wr.A, {
    width: "60",
    height: "50"
  })), React.createElement(I.SpacerWP, {
    marginBottom: 12
  }, React.createElement(I.HeadingWP, {
    align: "center",
    level: 3,
    size: 30
  }, (0, b.__)("Describe your course idea, and we'll generate a course outline with chapters and lessons.", "ohmylms")), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(I.TextWP, {
    as: "p",
    size: "20px",
    color: "#7A8B9A",
    align: "center",
    weight: "300"
  }, (0, b.__)("Just give us a topic or a short description — we'll take care of the rest.", "ohmylms"))), React.createElement(Yre.A, null, React.createElement(B.A, {
    type: "text",
    count: Number(null == P ? void 0 : P.text_credit) || 0
  }), React.createElement(I.FlexWP, {
    align: "center",
    justify: "flex-start",
    gap: 3,
    ref: p
  }, React.createElement(Qre.A, {
    data: _,
    onClick: function (e) {
      a(e), M();
    }
  }), React.createElement(cae, {
    templates: sae,
    onEdit: function (e) {
      a(e.description), M();
    },
    siblingRef: p
  })), React.createElement(I.SpacerWP, {
    gap: 3
  }), React.createElement(uae.A, {
    ref: m,
    placeholder: (0, b.__)("Ask AI to generate.......(E.g. A wellness course focused on reducing stress through mindfulness)", "ohmylms"),
    defaultValue: r,
    onSubmit: A,
    disabled: (null == P ? void 0 : P.self) && Number(null == P ? void 0 : P.text_credit) <= 0
  })), React.createElement(I.SpacerWP, {
    marginBottom: 3
  }), React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "center",
    gap: 2
  }, React.createElement("svg", {
    fill: "none",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#000D25",
    fillRule: "evenodd",
    d: "M4.17 8.533C2.21 5.5 4.388 1.5 8 1.5s5.79 4 3.83 7.033L9.592 12H6.408L4.17 8.533zM5 12.584L2.91 9.347C.305 5.315 3.2 0 8 0s7.694 5.315 5.09 9.347L11 12.584V14a2 2 0 01-2 2H7a2 2 0 01-2-2v-1.416zm1.5.916v.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-.5h-3z",
    clipRule: "evenodd"
  })), React.createElement(I.TextWP, {
    color: "#000D25",
    size: 12
  }, (0, b.__)("Tip: A good prompt = Topic + Audience + Goal or Outcome", "ohmylms")))))))), i && React.createElement(React.Fragment, null, React.createElement(Wae, {
    isOpen: i,
    onClose: N,
    isCreating: s,
    onEdit: N,
    onAccept: W,
    onRegenerate: D
  }))) : React.createElement(f.C5, {
    to: "/courses"
  });
};

const qae = (0, g.memo)(Uae);
