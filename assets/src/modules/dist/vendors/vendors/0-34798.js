// Reconstructed Webpack factory 34798; arguments retain original semantics.
((e, t, n) => {
  var r = n(41594),
    a = function (e) {
      return e && "object" == typeof e && "default" in e ? e : {
        default: e
      };
    }(r);
  function i() {
    return (i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
  }
  function o(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) t.indexOf(n = i[r]) >= 0 || (a[n] = e[n]);
    return a;
  }
  function s(e) {
    var t = r.useRef(e),
      n = r.useRef(function (e) {
        t.current && t.current(e);
      });
    return t.current = e, n.current;
  }
  var l = function (e, t, n) {
      return void 0 === t && (t = 0), void 0 === n && (n = 1), e > n ? n : e < t ? t : e;
    },
    c = function (e) {
      return "touches" in e;
    },
    u = function (e) {
      return e && e.ownerDocument.defaultView || self;
    },
    d = function (e, t, n) {
      var r = e.getBoundingClientRect(),
        a = c(t) ? function (e, t) {
          for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
          return e[0];
        }(t.touches, n) : t;
      return {
        left: l((a.pageX - (r.left + u(e).pageXOffset)) / r.width),
        top: l((a.pageY - (r.top + u(e).pageYOffset)) / r.height)
      };
    },
    p = function (e) {
      !c(e) && e.preventDefault();
    },
    f = a.default.memo(function (e) {
      var t = e.onMove,
        n = e.onKey,
        l = o(e, ["onMove", "onKey"]),
        f = r.useRef(null),
        h = s(t),
        _ = s(n),
        m = r.useRef(null),
        A = r.useRef(!1),
        g = r.useMemo(function () {
          var e = function (e) {
              p(e), (c(e) ? e.touches.length > 0 : e.buttons > 0) && f.current ? h(d(f.current, e, m.current)) : n(!1);
            },
            t = function () {
              return n(!1);
            };
          function n(n) {
            var r = A.current,
              a = u(f.current),
              i = n ? a.addEventListener : a.removeEventListener;
            i(r ? "touchmove" : "mousemove", e), i(r ? "touchend" : "mouseup", t);
          }
          return [function (e) {
            var t = e.nativeEvent,
              r = f.current;
            if (r && (p(t), !function (e, t) {
              return t && !c(e);
            }(t, A.current) && r)) {
              if (c(t)) {
                A.current = !0;
                var a = t.changedTouches || [];
                a.length && (m.current = a[0].identifier);
              }
              r.focus(), h(d(r, t, m.current)), n(!0);
            }
          }, function (e) {
            var t = e.which || e.keyCode;
            t < 37 || t > 40 || (e.preventDefault(), _({
              left: 39 === t ? .05 : 37 === t ? -.05 : 0,
              top: 40 === t ? .05 : 38 === t ? -.05 : 0
            }));
          }, n];
        }, [_, h]),
        y = g[0],
        v = g[1],
        E = g[2];
      return r.useEffect(function () {
        return E;
      }, [E]), a.default.createElement("div", i({}, l, {
        onTouchStart: y,
        onMouseDown: y,
        className: "react-colorful__interactive",
        ref: f,
        onKeyDown: v,
        tabIndex: 0,
        role: "slider"
      }));
    }),
    h = function (e) {
      return e.filter(Boolean).join(" ");
    },
    _ = function (e) {
      var t = e.color,
        n = e.left,
        r = e.top,
        i = void 0 === r ? .5 : r,
        o = h(["react-colorful__pointer", e.className]);
      return a.default.createElement("div", {
        className: o,
        style: {
          top: 100 * i + "%",
          left: 100 * n + "%"
        }
      }, a.default.createElement("div", {
        className: "react-colorful__pointer-fill",
        style: {
          backgroundColor: t
        }
      }));
    },
    m = function (e, t, n) {
      return void 0 === t && (t = 0), void 0 === n && (n = Math.pow(10, t)), Math.round(n * e) / n;
    },
    A = {
      grad: .9,
      turn: 360,
      rad: 360 / (2 * Math.PI)
    },
    g = function (e) {
      return R(y(e));
    },
    y = function (e) {
      return "#" === e[0] && (e = e.substring(1)), e.length < 6 ? {
        r: parseInt(e[0] + e[0], 16),
        g: parseInt(e[1] + e[1], 16),
        b: parseInt(e[2] + e[2], 16),
        a: 4 === e.length ? m(parseInt(e[3] + e[3], 16) / 255, 2) : 1
      } : {
        r: parseInt(e.substring(0, 2), 16),
        g: parseInt(e.substring(2, 4), 16),
        b: parseInt(e.substring(4, 6), 16),
        a: 8 === e.length ? m(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
      };
    },
    v = function (e, t) {
      return void 0 === t && (t = "deg"), Number(e) * (A[t] || 1);
    },
    E = function (e) {
      var t = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
      return t ? w({
        h: v(t[1], t[2]),
        s: Number(t[3]),
        l: Number(t[4]),
        a: void 0 === t[5] ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
      }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
      };
    },
    b = E,
    w = function (e) {
      var t = e.s,
        n = e.l;
      return {
        h: e.h,
        s: (t *= (n < 50 ? n : 100 - n) / 100) > 0 ? 2 * t / (n + t) * 100 : 0,
        v: n + t,
        a: e.a
      };
    },
    C = function (e) {
      return L(T(e));
    },
    O = function (e) {
      var t = e.s,
        n = e.v,
        r = e.a,
        a = (200 - t) * n / 100;
      return {
        h: m(e.h),
        s: m(a > 0 && a < 200 ? t * n / 100 / (a <= 100 ? a : 200 - a) * 100 : 0),
        l: m(a / 2),
        a: m(r, 2)
      };
    },
    M = function (e) {
      var t = O(e);
      return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
    },
    S = function (e) {
      var t = O(e);
      return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
    },
    T = function (e) {
      var t = e.h,
        n = e.s,
        r = e.v,
        a = e.a;
      t = t / 360 * 6, n /= 100, r /= 100;
      var i = Math.floor(t),
        o = r * (1 - n),
        s = r * (1 - (t - i) * n),
        l = r * (1 - (1 - t + i) * n),
        c = i % 6;
      return {
        r: m(255 * [r, s, o, o, l, r][c]),
        g: m(255 * [l, r, r, s, o, o][c]),
        b: m(255 * [o, o, l, r, r, s][c]),
        a: m(a, 2)
      };
    },
    k = function (e) {
      var t = /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
      return t ? B({
        h: v(t[1], t[2]),
        s: Number(t[3]),
        v: Number(t[4]),
        a: void 0 === t[5] ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
      }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
      };
    },
    x = k,
    D = function (e) {
      var t = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
      return t ? R({
        r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
        g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
        b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
        a: void 0 === t[7] ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
      }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
      };
    },
    I = D,
    P = function (e) {
      var t = e.toString(16);
      return t.length < 2 ? "0" + t : t;
    },
    L = function (e) {
      var t = e.r,
        n = e.g,
        r = e.b,
        a = e.a,
        i = a < 1 ? P(m(255 * a)) : "";
      return "#" + P(t) + P(n) + P(r) + i;
    },
    R = function (e) {
      var t = e.r,
        n = e.g,
        r = e.b,
        a = e.a,
        i = Math.max(t, n, r),
        o = i - Math.min(t, n, r),
        s = o ? i === t ? (n - r) / o : i === n ? 2 + (r - t) / o : 4 + (t - n) / o : 0;
      return {
        h: m(60 * (s < 0 ? s + 6 : s)),
        s: m(i ? o / i * 100 : 0),
        v: m(i / 255 * 100),
        a
      };
    },
    B = function (e) {
      return {
        h: m(e.h),
        s: m(e.s),
        v: m(e.v),
        a: m(e.a, 2)
      };
    },
    N = a.default.memo(function (e) {
      var t = e.hue,
        n = e.onChange,
        r = h(["react-colorful__hue", e.className]);
      return a.default.createElement("div", {
        className: r
      }, a.default.createElement(f, {
        onMove: function (e) {
          n({
            h: 360 * e.left
          });
        },
        onKey: function (e) {
          n({
            h: l(t + 360 * e.left, 0, 360)
          });
        },
        "aria-label": "Hue",
        "aria-valuenow": m(t),
        "aria-valuemax": "360",
        "aria-valuemin": "0"
      }, a.default.createElement(_, {
        className: "react-colorful__hue-pointer",
        left: t / 360,
        color: M({
          h: t,
          s: 100,
          v: 100,
          a: 1
        })
      })));
    }),
    U = a.default.memo(function (e) {
      var t = e.hsva,
        n = e.onChange,
        r = {
          backgroundColor: M({
            h: t.h,
            s: 100,
            v: 100,
            a: 1
          })
        };
      return a.default.createElement("div", {
        className: "react-colorful__saturation",
        style: r
      }, a.default.createElement(f, {
        onMove: function (e) {
          n({
            s: 100 * e.left,
            v: 100 - 100 * e.top
          });
        },
        onKey: function (e) {
          n({
            s: l(t.s + 100 * e.left, 0, 100),
            v: l(t.v - 100 * e.top, 0, 100)
          });
        },
        "aria-label": "Color",
        "aria-valuetext": "Saturation " + m(t.s) + "%, Brightness " + m(t.v) + "%"
      }, a.default.createElement(_, {
        className: "react-colorful__saturation-pointer",
        top: 1 - t.v / 100,
        left: t.s / 100,
        color: M(t)
      })));
    }),
    F = function (e, t) {
      if (e === t) return !0;
      for (var n in e) if (e[n] !== t[n]) return !1;
      return !0;
    },
    j = function (e, t) {
      return e.replace(/\s/g, "") === t.replace(/\s/g, "");
    },
    H = function (e, t) {
      return e.toLowerCase() === t.toLowerCase() || F(y(e), y(t));
    };
  function W(e, t, n) {
    var a = s(n),
      i = r.useState(function () {
        return e.toHsva(t);
      }),
      o = i[0],
      l = i[1],
      c = r.useRef({
        color: t,
        hsva: o
      });
    r.useEffect(function () {
      if (!e.equal(t, c.current.color)) {
        var n = e.toHsva(t);
        c.current = {
          hsva: n,
          color: t
        }, l(n);
      }
    }, [t, e]), r.useEffect(function () {
      var t;
      F(o, c.current.hsva) || e.equal(t = e.fromHsva(o), c.current.color) || (c.current = {
        hsva: o,
        color: t
      }, a(t));
    }, [o, e, a]);
    var u = r.useCallback(function (e) {
      l(function (t) {
        return Object.assign({}, t, e);
      });
    }, []);
    return [o, u];
  }
  var K,
    V = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
    z = new Map(),
    Y = function (e) {
      V(function () {
        var t = e.current ? e.current.ownerDocument : document;
        if (void 0 !== t && !z.has(t)) {
          var r = t.createElement("style");
          r.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', z.set(t, r);
          var a = K || n.nc;
          a && r.setAttribute("nonce", a), t.head.appendChild(r);
        }
      }, []);
    },
    Q = function (e) {
      var t = e.className,
        n = e.colorModel,
        s = e.color,
        l = void 0 === s ? n.defaultColor : s,
        c = e.onChange,
        u = o(e, ["className", "colorModel", "color", "onChange"]),
        d = r.useRef(null);
      Y(d);
      var p = W(n, l, c),
        f = p[0],
        _ = p[1],
        m = h(["react-colorful", t]);
      return a.default.createElement("div", i({}, u, {
        ref: d,
        className: m
      }), a.default.createElement(U, {
        hsva: f,
        onChange: _
      }), a.default.createElement(N, {
        hue: f.h,
        onChange: _,
        className: "react-colorful__last-control"
      }));
    },
    G = {
      defaultColor: "000",
      toHsva: g,
      fromHsva: function (e) {
        return C({
          h: e.h,
          s: e.s,
          v: e.v,
          a: 1
        });
      },
      equal: H
    },
    $ = function (e) {
      var t = e.className,
        n = e.hsva,
        r = e.onChange,
        i = {
          backgroundImage: "linear-gradient(90deg, " + S(Object.assign({}, n, {
            a: 0
          })) + ", " + S(Object.assign({}, n, {
            a: 1
          })) + ")"
        },
        o = h(["react-colorful__alpha", t]),
        s = m(100 * n.a);
      return a.default.createElement("div", {
        className: o
      }, a.default.createElement("div", {
        className: "react-colorful__alpha-gradient",
        style: i
      }), a.default.createElement(f, {
        onMove: function (e) {
          r({
            a: e.left
          });
        },
        onKey: function (e) {
          r({
            a: l(n.a + e.left)
          });
        },
        "aria-label": "Alpha",
        "aria-valuetext": s + "%",
        "aria-valuenow": s,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, a.default.createElement(_, {
        className: "react-colorful__alpha-pointer",
        left: n.a,
        color: S(n)
      })));
    },
    q = function (e) {
      var t = e.className,
        n = e.colorModel,
        s = e.color,
        l = void 0 === s ? n.defaultColor : s,
        c = e.onChange,
        u = o(e, ["className", "colorModel", "color", "onChange"]),
        d = r.useRef(null);
      Y(d);
      var p = W(n, l, c),
        f = p[0],
        _ = p[1],
        m = h(["react-colorful", t]);
      return a.default.createElement("div", i({}, u, {
        ref: d,
        className: m
      }), a.default.createElement(U, {
        hsva: f,
        onChange: _
      }), a.default.createElement(N, {
        hue: f.h,
        onChange: _
      }), a.default.createElement($, {
        hsva: f,
        onChange: _,
        className: "react-colorful__last-control"
      }));
    },
    Z = {
      defaultColor: "0001",
      toHsva: g,
      fromHsva: C,
      equal: H
    },
    X = {
      defaultColor: {
        h: 0,
        s: 0,
        l: 0,
        a: 1
      },
      toHsva: w,
      fromHsva: O,
      equal: F
    },
    J = {
      defaultColor: "hsla(0, 0%, 0%, 1)",
      toHsva: E,
      fromHsva: S,
      equal: j
    },
    ee = {
      defaultColor: {
        h: 0,
        s: 0,
        l: 0
      },
      toHsva: function (e) {
        return w({
          h: e.h,
          s: e.s,
          l: e.l,
          a: 1
        });
      },
      fromHsva: function (e) {
        return {
          h: (t = O(e)).h,
          s: t.s,
          l: t.l
        };
        var t;
      },
      equal: F
    },
    te = {
      defaultColor: "hsl(0, 0%, 0%)",
      toHsva: b,
      fromHsva: M,
      equal: j
    },
    ne = {
      defaultColor: {
        h: 0,
        s: 0,
        v: 0,
        a: 1
      },
      toHsva: function (e) {
        return e;
      },
      fromHsva: B,
      equal: F
    },
    re = {
      defaultColor: "hsva(0, 0%, 0%, 1)",
      toHsva: k,
      fromHsva: function (e) {
        var t = B(e);
        return "hsva(" + t.h + ", " + t.s + "%, " + t.v + "%, " + t.a + ")";
      },
      equal: j
    },
    ae = {
      defaultColor: {
        h: 0,
        s: 0,
        v: 0
      },
      toHsva: function (e) {
        return {
          h: e.h,
          s: e.s,
          v: e.v,
          a: 1
        };
      },
      fromHsva: function (e) {
        var t = B(e);
        return {
          h: t.h,
          s: t.s,
          v: t.v
        };
      },
      equal: F
    },
    ie = {
      defaultColor: "hsv(0, 0%, 0%)",
      toHsva: x,
      fromHsva: function (e) {
        var t = B(e);
        return "hsv(" + t.h + ", " + t.s + "%, " + t.v + "%)";
      },
      equal: j
    },
    oe = {
      defaultColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      },
      toHsva: R,
      fromHsva: T,
      equal: F
    },
    se = {
      defaultColor: "rgba(0, 0, 0, 1)",
      toHsva: D,
      fromHsva: function (e) {
        var t = T(e);
        return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")";
      },
      equal: j
    },
    le = {
      defaultColor: {
        r: 0,
        g: 0,
        b: 0
      },
      toHsva: function (e) {
        return R({
          r: e.r,
          g: e.g,
          b: e.b,
          a: 1
        });
      },
      fromHsva: function (e) {
        return {
          r: (t = T(e)).r,
          g: t.g,
          b: t.b
        };
        var t;
      },
      equal: F
    },
    ce = {
      defaultColor: "rgb(0, 0, 0)",
      toHsva: I,
      fromHsva: function (e) {
        var t = T(e);
        return "rgb(" + t.r + ", " + t.g + ", " + t.b + ")";
      },
      equal: j
    },
    ue = /^#?([0-9A-F]{3,8})$/i,
    de = function (e) {
      var t = e.color,
        n = void 0 === t ? "" : t,
        l = e.onChange,
        c = e.onBlur,
        u = e.escape,
        d = e.validate,
        p = e.format,
        f = e.process,
        h = o(e, ["color", "onChange", "onBlur", "escape", "validate", "format", "process"]),
        _ = r.useState(function () {
          return u(n);
        }),
        m = _[0],
        A = _[1],
        g = s(l),
        y = s(c),
        v = r.useCallback(function (e) {
          var t = u(e.target.value);
          A(t), d(t) && g(f ? f(t) : t);
        }, [u, f, d, g]),
        E = r.useCallback(function (e) {
          d(e.target.value) || A(u(n)), y(e);
        }, [n, u, d, y]);
      return r.useEffect(function () {
        A(u(n));
      }, [n, u]), a.default.createElement("input", i({}, h, {
        value: p ? p(m) : m,
        spellCheck: "false",
        onChange: v,
        onBlur: E
      }));
    },
    pe = function (e) {
      return "#" + e;
    };
  t.HexAlphaColorPicker = function (e) {
    return a.default.createElement(q, i({}, e, {
      colorModel: Z
    }));
  }, t.HexColorInput = function (e) {
    var t = e.prefixed,
      n = e.alpha,
      s = o(e, ["prefixed", "alpha"]),
      l = r.useCallback(function (e) {
        return e.replace(/([^0-9A-F]+)/gi, "").substring(0, n ? 8 : 6);
      }, [n]),
      c = r.useCallback(function (e) {
        return function (e, t) {
          var n = ue.exec(e),
            r = n ? n[1].length : 0;
          return 3 === r || 6 === r || !!t && 4 === r || !!t && 8 === r;
        }(e, n);
      }, [n]);
    return a.default.createElement(de, i({}, s, {
      escape: l,
      format: t ? pe : void 0,
      process: pe,
      validate: c
    }));
  }, t.HexColorPicker = function (e) {
    return a.default.createElement(Q, i({}, e, {
      colorModel: G
    }));
  }, t.HslColorPicker = function (e) {
    return a.default.createElement(Q, i({}, e, {
      colorModel: ee
    }));
  }, t.HslStringColorPicker = function (e) {
    return a.default.createElement(Q, i({}, e, {
      colorModel: te
    }));
  }, t.HslaColorPicker = function (e) {
    return a.default.createElement(q, i({}, e, {
      colorModel: X
    }));
  }, t.HslaStringColorPicker = function (e) {
    return a.default.createElement(q, i({}, e, {
      colorModel: J
    }));
  }, t.HsvColorPicker = function (e) {
    return a.default.createElement(Q, i({}, e, {
      colorModel: ae
    }));
  }, t.HsvStringColorPicker = function (e) {
    return a.default.createElement(Q, i({}, e, {
      colorModel: ie
    }));
  }, t.HsvaColorPicker = function (e) {
    return a.default.createElement(q, i({}, e, {
      colorModel: ne
    }));
  }, t.HsvaStringColorPicker = function (e) {
    return a.default.createElement(q, i({}, e, {
      colorModel: re
    }));
  }, t.RgbColorPicker = function (e) {
    return a.default.createElement(Q, i({}, e, {
      colorModel: le
    }));
  }, t.RgbStringColorPicker = function (e) {
    return a.default.createElement(Q, i({}, e, {
      colorModel: ce
    }));
  }, t.RgbaColorPicker = function (e) {
    return a.default.createElement(q, i({}, e, {
      colorModel: oe
    }));
  }, t.RgbaStringColorPicker = function (e) {
    return a.default.createElement(q, i({}, e, {
      colorModel: se
    }));
  }, t.setNonce = function (e) {
    K = e;
  };
});
