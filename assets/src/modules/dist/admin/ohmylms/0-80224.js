// Reconstructed Webpack factory 80224; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    default: () => A
  });
  var r = n(41594),
    a = n(12470),
    o = n(38093),
    i = n(13567),
    l = n(6273),
    c = n(34671),
    u = n(81911),
    s = n(88935),
    d = n(2214),
    m = n(88053),
    p = n(99418),
    f = n(22601),
    v = n(30967),
    g = n(98243),
    h = function () {
      return React.createElement("svg", {
        fill: "none",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "currentColor",
        d: "M13.718 3.995l-8.005 7.448L2.877 8.26 1.736 9.31l3.87 4.333 9.145-8.499-1.033-1.148z"
      }));
    },
    y = function (e) {
      var t = e.onRegenerate,
        n = e.onAccept,
        r = e.onEdit,
        i = e.isGenerating,
        l = e.response,
        c = e.isLoading,
        u = e.children;
      return React.createElement(React.Fragment, null, i ? React.createElement(React.Fragment, null, React.createElement(o.FlexWP, {
        align: "center",
        justify: "center",
        gap: 2,
        style: {
          minHeight: "150px"
        }
      }, React.createElement(g.A, {
        width: "19",
        height: "19"
      }), React.createElement(o.TextWP, {
        className: "clrms-ai-course-generating-text",
        as: "p",
        size: "15",
        weight: "500"
      }, (0, a.__)("Hang tight! AI is generating text based on your input.", "ohmylms")))) : React.createElement(React.Fragment, null, React.createElement(o.FlexWP, {
        align: "center",
        justify: "flex-end",
        gap: 3
      }, u), React.createElement(o.SpacerWP, {
        gap: 3
      }), React.createElement("div", {
        className: "ohmylms-text-response-preview",
        dangerouslySetInnerHTML: {
          __html: p.A.sanitize(l)
        }
      }), React.createElement(o.DividerWP, {
        color: "#C8D2E980",
        marginStart: 2,
        marginEnd: 2
      }), React.createElement(o.FlexWP, {
        align: "center",
        justify: "center",
        gap: 1
      }, React.createElement(o.ButtonWP, {
        onClick: r,
        icon: React.createElement(f.A, {
          width: "12",
          height: "12"
        }),
        variant: "outline",
        disabled: c
      }, (0, a.__)("Edit Prompt", "ohmylms")), React.createElement(o.ButtonWP, {
        onClick: t,
        icon: React.createElement(v.A, null),
        variant: "outline",
        style: {
          marginLeft: "auto"
        },
        disabled: c
      }, (0, a.__)("Regenerate", "ohmylms")), React.createElement(o.ButtonWP, {
        onClick: n,
        icon: React.createElement(h, null),
        variant: "primary",
        isBusy: c
      }, (0, a.__)("Accept Response", "ohmylms")))));
    };
  const b = (0, r.memo)(y);
  var _ = n(37562),
    w = n(20378),
    E = n(86169),
    S = n(88660),
    R = n(71046);
  function x() {
    var e,
      t,
      n = "function" == typeof Symbol ? Symbol : {},
      r = n.iterator || "@@iterator",
      a = n.toStringTag || "@@toStringTag";
    function o(n, r, a, o) {
      var c = r && r.prototype instanceof l ? r : l,
        u = Object.create(c.prototype);
      return C(u, "_invoke", function (n, r, a) {
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
    var s = [][r] ? t(t([][r]())) : (C(t = {}, r, function () {
        return this;
      }), t),
      d = u.prototype = l.prototype = Object.create(s);
    function m(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, C(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
    }
    return c.prototype = u, C(d, "constructor", u), C(u, "constructor", c), c.displayName = "GeneratorFunction", C(u, a, "GeneratorFunction"), C(d), C(d, a, "Generator"), C(d, r, function () {
      return this;
    }), C(d, "toString", function () {
      return "[object Generator]";
    }), (x = function () {
      return {
        w: o,
        m
      };
    })();
  }
  function C(e, t, n, r) {
    var a = Object.defineProperty;
    try {
      a({}, "", {});
    } catch (e) {
      a = 0;
    }
    C = function (e, t, n, r) {
      function o(t, n) {
        C(e, t, function (e) {
          return this._invoke(t, n, e);
        });
      }
      t ? a ? a(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r
      }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, C(e, t, n, r);
  }
  function P(e, t, n, r, a, o, i) {
    try {
      var l = e[o](i),
        c = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(c) : Promise.resolve(c).then(r, a);
  }
  function O(e, t) {
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
        if ("string" == typeof e) return k(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function k(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var j = (0, r.forwardRef)(function (e, t) {
    var n = e.handleClose,
      p = e.onInsert,
      f = (0, _.useSelect)(function (e) {
        return e(E.default).getAllTextSuggestions();
      }, []),
      v = (0, _.useSelect)(function (e) {
        return e(E.default).getAISettings();
      }, []),
      g = O((0, r.useState)(""), 2),
      h = g[0],
      y = g[1],
      C = O((0, r.useState)(""), 2),
      k = C[0],
      j = C[1],
      A = O((0, r.useState)(!1), 2),
      M = A[0],
      T = A[1],
      I = O((0, r.useState)(!1), 2),
      F = I[0],
      N = I[1],
      D = O((0, r.useState)(!1), 2),
      W = D[0],
      z = (D[1], (0, r.useRef)(null)),
      B = (0, r.useRef)(null),
      L = (0, w.z)(),
      V = (0, S.V)(),
      H = (0, R.A)(),
      G = H.openNotificationWithIcon,
      U = H.contextHolder,
      q = (0, _.useSelect)(function (e) {
        return e(E.default).getNotificationMessage();
      }, []),
      Y = (0, _.useSelect)(function (e) {
        return e(E.default).getNotificationStatus();
      }, []),
      Q = function () {
        var e,
          t = (e = x().m(function e(t) {
            var n, r, o, i, l, c, u, s;
            return x().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if (!(null != v && v.self && Number(null == v ? void 0 : v.text_credit) <= 0)) {
                    e.n = 1;
                    break;
                  }
                  return G("error", "You have reached your text generation limit."), e.a(2);
                case 1:
                  return e.p = 1, y(t), T(!0), N(!0), e.n = 2, L({
                    prompt: t,
                    type: "text",
                    contentType: "lesson_content"
                  });
                case 2:
                  if (null != (n = e.v) && n.error) {
                    N(!1), T(!1), y(t), o = null;
                    try {
                      o = n.message ? JSON.parse(n.message) : null;
                    } catch (e) {
                      console.error("Error parsing AI response:", e);
                    }
                    "anthropic" === (null == v ? void 0 : v.platform) && (o = (null === (i = o) || void 0 === i ? void 0 : i.data) || {
                      error: {
                        message: (null === (l = o) || void 0 === l ? void 0 : l.message) || "Unknown error"
                      }
                    }), G("error", (null === (r = o) || void 0 === r || null === (r = r.error) || void 0 === r ? void 0 : r.message) || "Unknown error");
                  } else c = V(null == n ? void 0 : n.result), j(c);
                  e.n = 4;
                  break;
                case 3:
                  e.p = 3, s = e.v, u = (0, a.__)("Failed to generate text. Please try again.", "ohmylms"), null != s && s.message && (u = null == s ? void 0 : s.message), G("error", u);
                case 4:
                  return e.p = 4, N(!1), e.f(4);
                case 5:
                  return e.a(2);
              }
            }, e, null, [[1, 3, 4, 5]]);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                P(o, r, a, i, l, "next", e);
              }
              function l(e) {
                P(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function (e) {
          return t.apply(this, arguments);
        };
      }(),
      Z = function () {
        B.current && (B.current.focus(), setTimeout(function () {
          B.current.selectionStart = B.current.selectionEnd = B.current.value.length;
        }, 0));
      };
    return (0, r.useEffect)(function () {
      B.current && Z();
    }, [B.current]), (0, r.useEffect)(function () {
      q && G(Y, q);
    }, [q]), React.createElement(React.Fragment, null, U, React.createElement(l.A, null, M ? React.createElement(React.Fragment, null, React.createElement(b, {
      onRegenerate: function () {
        if (h) {
          var e = ["Rewrite this with a different approach: ", "Provide an alternative version of: ", "Generate a fresh take on: ", "Create a new variation of: ", "Rephrase and expand on: ", "Write this differently: "],
            t = e[Math.floor(Math.random() * e.length)],
            n = "".concat(t).concat(h).concat(". Make it unique and different from previous versions.");
          Q(n);
        }
      },
      onAccept: function () {
        p(k);
      },
      onEdit: function () {
        T(!1), setTimeout(function () {
          Z();
        }, 100);
      },
      isGenerating: F,
      response: k,
      isLoading: W
    }, React.createElement(o.ButtonWP, {
      icon: React.createElement(d.Icon, {
        icon: m.A
      }),
      size: "small",
      onClick: n,
      style: {
        border: "1px solid #C8D2E959",
        color: "#7A8B9A",
        borderRadius: "50%"
      }
    }))) : React.createElement(React.Fragment, null, React.createElement(s.A, {
      type: "text",
      count: Number(null == v ? void 0 : v.text_credit) || 0
    }), React.createElement(o.FlexWP, {
      align: "center",
      justify: "space-between",
      gap: 3,
      ref: z
    }, !F && React.createElement(React.Fragment, null, React.createElement(c.A, {
      data: f,
      onClick: function (e) {
        B.current.value = e, y(e), Z();
      }
    }), React.createElement(u.A, {
      data: (0, a.__)("Write a lesson content about global warming"),
      margin: "0 0 0 auto"
    }), React.createElement(o.ButtonWP, {
      icon: React.createElement(d.Icon, {
        icon: m.A
      }),
      size: "small",
      onClick: n,
      style: {
        border: "1px solid #C8D2E959",
        color: "#7A8B9A",
        borderRadius: "50%"
      }
    }))), React.createElement(o.SpacerWP, {
      gap: 3
    }), React.createElement(i.A, {
      ref: B,
      placeholder: (0, a.__)("Type a prompt (e.g. Write a summary about global warming)", "ohmylms"),
      onSubmit: Q,
      defaultValue: h,
      disabled: (null == v ? void 0 : v.self) && Number(null == v ? void 0 : v.text_credit) <= 0,
      type: "text"
    }))));
  });
  const A = (0, r.memo)(j);
});
