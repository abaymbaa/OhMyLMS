// Reconstructed Webpack factory 52770; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    default: () => F
  });
  var r = n(41594),
    a = n(12470),
    o = n(38093),
    i = n(34671),
    l = n(81911),
    c = n(13567),
    u = n(6273),
    s = n(88935),
    d = n(22601),
    m = n(30967),
    p = function (e) {
      var t = e.isImageGenerating,
        n = e.imgUrl,
        r = e.altText,
        a = void 0 === r ? "AI Generated Image" : r,
        i = e.isSelected,
        l = void 0 !== i && i,
        c = e.onSelect;
      return React.createElement(React.Fragment, null, React.createElement("figure", {
        onClick: c,
        className: "generated-image-".concat(l ? "selected" : "")
      }, t ? React.createElement(o.SpinWP, {
        delay: 0
      }) : React.createElement("img", {
        src: n,
        alt: a
      })));
    };
  const f = (0, r.memo)(p);
  var v = n(63386),
    g = n(37562),
    h = n(86169);
  function y() {
    var e,
      t,
      n = "function" == typeof Symbol ? Symbol : {},
      r = n.iterator || "@@iterator",
      a = n.toStringTag || "@@toStringTag";
    function o(n, r, a, o) {
      var c = r && r.prototype instanceof l ? r : l,
        u = Object.create(c.prototype);
      return b(u, "_invoke", function (n, r, a) {
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
    var s = [][r] ? t(t([][r]())) : (b(t = {}, r, function () {
        return this;
      }), t),
      d = u.prototype = l.prototype = Object.create(s);
    function m(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, b(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
    }
    return c.prototype = u, b(d, "constructor", u), b(u, "constructor", c), c.displayName = "GeneratorFunction", b(u, a, "GeneratorFunction"), b(d), b(d, a, "Generator"), b(d, r, function () {
      return this;
    }), b(d, "toString", function () {
      return "[object Generator]";
    }), (y = function () {
      return {
        w: o,
        m
      };
    })();
  }
  function b(e, t, n, r) {
    var a = Object.defineProperty;
    try {
      a({}, "", {});
    } catch (e) {
      a = 0;
    }
    b = function (e, t, n, r) {
      function o(t, n) {
        b(e, t, function (e) {
          return this._invoke(t, n, e);
        });
      }
      t ? a ? a(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r
      }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, b(e, t, n, r);
  }
  function _(e, t, n, r, a, o, i) {
    try {
      var l = e[o](i),
        c = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(c) : Promise.resolve(c).then(r, a);
  }
  function w(e, t) {
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
        if ("string" == typeof e) return E(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function E(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var S = function () {
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
    R = function (e) {
      var t = e.isImageGenerating,
        n = e.response,
        i = e.handleEdit,
        l = e.handleAccept,
        c = e.onPreview,
        u = e.handleRegenerate,
        s = w((0, r.useState)(0), 2),
        p = s[0],
        b = s[1],
        E = w((0, r.useState)(!1), 2),
        R = E[0],
        x = E[1],
        C = (0, g.useSelect)(function (e) {
          return e(h.default).getAISettings();
        }, []),
        P = function () {
          var e,
            t = (e = y().m(function e() {
              var t, r;
              return y().w(function (e) {
                for (;;) switch (e.p = e.n) {
                  case 0:
                    if (e.p = 0, x(!0), t = null, null == C || !C.self) {
                      e.n = 2;
                      break;
                    }
                    return e.n = 1, (0, v.w)(n[p]);
                  case 1:
                    t = e.v, e.n = 4;
                    break;
                  case 2:
                    return e.n = 3, (0, v.r)(n[p]);
                  case 3:
                    t = e.v;
                  case 4:
                    l(t), e.n = 6;
                    break;
                  case 5:
                    e.p = 5, r = e.v, console.error("Error uploading image:", r);
                  case 6:
                    return e.p = 6, x(!1), e.f(6);
                  case 7:
                    return e.a(2);
                }
              }, e, null, [[0, 5, 6, 7]]);
            }), function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                  _(o, r, a, i, l, "next", e);
                }
                function l(e) {
                  _(o, r, a, i, l, "throw", e);
                }
                i(void 0);
              });
            });
          return function () {
            return t.apply(this, arguments);
          };
        }();
      return (0, r.useEffect)(function () {
        !p && n.length && c(n[p]);
      }, [n]), React.createElement(React.Fragment, null, React.createElement(o.FlexWP, {
        align: "center",
        justify: "center",
        gap: 2,
        className: "generated-image-wrapper"
      }, (n.length > 0 ? n : Array.from({
        length: 1
      }, function (e, t) {
        return null;
      })).map(function (e, n) {
        return React.createElement(o.FlexBlockWP, {
          key: n
        }, React.createElement(f, {
          imgUrl: e,
          isImageGenerating: t,
          isSelected: p === n,
          onSelect: function () {
            return function (e, t) {
              b(e), c(t);
            }(n, e);
          }
        }));
      })), !t && React.createElement(React.Fragment, null, React.createElement(o.SpacerWP, {
        gap: 3
      }), React.createElement(o.FlexWP, {
        align: "center",
        justify: "center",
        gap: 1
      }, React.createElement(o.ButtonWP, {
        onClick: i,
        icon: React.createElement(d.A, {
          width: "12",
          height: "12"
        }),
        variant: "outline",
        disabled: R
      }, (0, a.__)("Edit Prompt", "ohmylms")), React.createElement(o.ButtonWP, {
        onClick: u,
        icon: React.createElement(m.A, null),
        variant: "outline",
        style: {
          marginLeft: "auto"
        },
        disabled: R
      }, (0, a.__)("Regenerate Image", "ohmylms")), React.createElement(o.ButtonWP, {
        onClick: P,
        icon: React.createElement(S, null),
        variant: "primary",
        isBusy: R
      }, (0, a.__)("Use Selected Image", "ohmylms")))));
    };
  const x = (0, r.memo)(R);
  var C = n(20378),
    P = n(71046),
    O = n(82140);
  function k() {
    var e,
      t,
      n = "function" == typeof Symbol ? Symbol : {},
      r = n.iterator || "@@iterator",
      a = n.toStringTag || "@@toStringTag";
    function o(n, r, a, o) {
      var c = r && r.prototype instanceof l ? r : l,
        u = Object.create(c.prototype);
      return j(u, "_invoke", function (n, r, a) {
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
    var s = [][r] ? t(t([][r]())) : (j(t = {}, r, function () {
        return this;
      }), t),
      d = u.prototype = l.prototype = Object.create(s);
    function m(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, j(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
    }
    return c.prototype = u, j(d, "constructor", u), j(u, "constructor", c), c.displayName = "GeneratorFunction", j(u, a, "GeneratorFunction"), j(d), j(d, a, "Generator"), j(d, r, function () {
      return this;
    }), j(d, "toString", function () {
      return "[object Generator]";
    }), (k = function () {
      return {
        w: o,
        m
      };
    })();
  }
  function j(e, t, n, r) {
    var a = Object.defineProperty;
    try {
      a({}, "", {});
    } catch (e) {
      a = 0;
    }
    j = function (e, t, n, r) {
      function o(t, n) {
        j(e, t, function (e) {
          return this._invoke(t, n, e);
        });
      }
      t ? a ? a(e, t, {
        value: n,
        enumerable: !r,
        configurable: !r,
        writable: !r
      }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, j(e, t, n, r);
  }
  function A(e, t, n, r, a, o, i) {
    try {
      var l = e[o](i),
        c = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(c) : Promise.resolve(c).then(r, a);
  }
  function M(e, t) {
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
        if ("string" == typeof e) return T(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function T(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var I = function (e) {
    var t = e.promptBoxRef,
      n = e.onPreview,
      d = e.onInsert,
      m = e.cardStyle,
      p = void 0 === m ? {} : m,
      f = e.closeButton,
      v = void 0 === f ? null : f,
      y = (0, g.useSelect)(function (e) {
        return e(h.default).getAllImageSuggestions();
      }, []),
      b = (0, g.useSelect)(function (e) {
        return e(h.default).getNotificationMessage();
      }, []),
      _ = (0, g.useSelect)(function (e) {
        return e(h.default).getNotificationStatus();
      }, []),
      w = (0, g.useSelect)(function (e) {
        return e(h.default).getAISettings();
      }, []),
      E = ((0, r.useRef)(null), (0, r.useRef)(null)),
      S = M((0, r.useState)(""), 2),
      R = S[0],
      j = S[1],
      T = M((0, r.useState)(!1), 2),
      I = T[0],
      F = T[1],
      N = M((0, r.useState)(!1), 2),
      D = N[0],
      W = N[1],
      z = M((0, r.useState)([]), 2),
      B = z[0],
      L = z[1],
      V = (0, P.A)(),
      H = V.openNotificationWithIcon,
      G = V.contextHolder,
      U = (0, C.z)(),
      q = function () {
        var e,
          t = (e = k().m(function e(t, r) {
            var o, i, l, c, u;
            return k().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if (!(null != w && w.self && Number(null == w ? void 0 : w.image_count) <= 0)) {
                    e.n = 1;
                    break;
                  }
                  return H("error", "You have reached your image generation limit."), e.a(2);
                case 1:
                  return e.p = 1, j(null != r ? r : t), F(!0), n(null), e.n = 2, U({
                    prompt: t,
                    type: "image"
                  });
                case 2:
                  if (null != (o = e.v) && o.error) {
                    F(!1), j(null != r ? r : t), l = null;
                    try {
                      l = o.message ? JSON.parse(o.message) : null;
                    } catch (e) {
                      console.error("Error parsing AI response:", e);
                    }
                    H("error", (null === (i = l) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.message) || "Unknown error");
                  } else L(null == o ? void 0 : o.result), setTimeout(function () {
                    W(!0);
                  }, 1e3);
                  e.n = 4;
                  break;
                case 3:
                  e.p = 3, u = e.v, c = (0, a.__)("Failed to generate image. Please try again.", "ohmylms"), null != u && u.message && (c = null == u ? void 0 : u.message), H("error", c);
                case 4:
                  return e.p = 4, F(!1), e.f(4);
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
                A(o, r, a, i, l, "next", e);
              }
              function l(e) {
                A(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function (e, n) {
          return t.apply(this, arguments);
        };
      }(),
      Y = function () {
        E.current && (E.current.focus(), setTimeout(function () {
          E.current.selectionStart = E.current.selectionEnd = E.current.value.length;
        }, 0));
      };
    return (0, r.useEffect)(function () {
      E.current && Y();
    }, [E.current]), (0, r.useEffect)(function () {
      b && H(_, b);
    }, [b]), React.createElement(React.Fragment, null, G, React.createElement(u.A, {
      ref: t,
      className: "ohmylms-ai-img-propmt-box",
      style: p
    }, React.createElement(s.A, {
      type: "image",
      count: Number(null == w ? void 0 : w.image_count) || 0
    }), React.createElement(o.FlexWP, {
      align: "center",
      justify: "flex-start",
      gap: 3
    }, !(I || D) && React.createElement(React.Fragment, null, React.createElement(i.A, {
      disable: I,
      data: y,
      onClick: function (e) {
        j(e), Y(), E.current && (E.current.value = e);
      }
    }), React.createElement(l.A, {
      margin: (0, O.V)() ? "0 auto 0 0" : "0 0 0 auto",
      data: (0, a.__)("A modern digital course cover — a student with a laptop, surrounded by icons like code, books, and light bulbs. Clean background, soft gradient, tech-inspired, flat 3D style.", "ohmylms")
    })), v && React.isValidElement(v) ? React.cloneElement(v, {
      key: "close-button"
    }) : v), React.createElement(o.SpacerWP, {
      gap: 3
    }), I || D ? React.createElement(React.Fragment, null, React.createElement(x, {
      isImageGenerating: I,
      response: B,
      handleEdit: function () {
        F(!1), W(!1), setTimeout(function () {
          Y();
        }, 100);
      },
      handleAccept: function (e) {
        d(e);
      },
      onPreview: n,
      handleRegenerate: function () {
        if (R) {
          var e = ["Reimagine in a surreal art style: ", "Generate in a completely different setting: ", "Transform into a cinematic movie still: ", "Reinterpret as a retro-futuristic artwork: ", "Create in the style of a fantasy concept art: ", "Recreate as a watercolor painting: ", "Visualize as a cyberpunk city scene: ", "Turn into an abstract minimalistic design: "],
            t = [", with dramatic lighting and shadows", ", during a vibrant sunset with golden tones", ", using a pastel and soft color palette", ", in a highly detailed hyperrealistic style", ", with bold and contrasting colors", ", as a low-poly 3D render", ", in a night-time neon-lit environment", ", with exaggerated proportions and features"],
            n = [", viewed from an aerial perspective", ", extreme close-up with rich details", ", in a chaotic crowded marketplace", ", surrounded by mist and fog", ", underwater with floating particles", ", in outer space with planets in the background", ", in a post-apocalyptic wasteland", ", in a magical forest with glowing plants"],
            r = e[Math.floor(Math.random() * e.length)],
            a = t[Math.floor(Math.random() * t.length)],
            o = n[Math.floor(Math.random() * n.length)],
            i = "".concat(r).concat(R).concat(a).concat(o);
          q(i, R);
        }
      }
    })) : React.createElement(React.Fragment, null, React.createElement(c.A, {
      ref: E,
      placeholder: (0, a.__)("Ask AI to generate...", "ohmylms"),
      defaultValue: R,
      onSubmit: q,
      type: "image",
      disabled: (null == w ? void 0 : w.self) && Number(null == w ? void 0 : w.image_count) <= 0
    }))));
  };
  const F = (0, r.memo)(I);
});
