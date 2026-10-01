// Reconstructed Webpack factory 77600; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.r(t), n.d(t, {
    RemoveScroll: () => N
  });
  var r = n(31635),
    a = n(41594),
    i = "right-scroll-bar-position",
    o = "width-before-scroll-bar",
    s = n(5702),
    l = (0, n(57309).f)(),
    c = function () {},
    u = a.forwardRef(function (e, t) {
      var n = a.useRef(null),
        i = a.useState({
          onScrollCapture: c,
          onWheelCapture: c,
          onTouchMoveCapture: c
        }),
        o = i[0],
        u = i[1],
        d = e.forwardProps,
        p = e.children,
        f = e.className,
        h = e.removeScrollBar,
        _ = e.enabled,
        m = e.shards,
        A = e.sideCar,
        g = e.noRelative,
        y = e.noIsolation,
        v = e.inert,
        E = e.allowPinchZoom,
        b = e.as,
        w = void 0 === b ? "div" : b,
        C = e.gapMode,
        O = (0, r.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
        M = A,
        S = (0, s.S)([n, t]),
        T = (0, r.Cl)((0, r.Cl)({}, O), o);
      return a.createElement(a.Fragment, null, _ && a.createElement(M, {
        sideCar: l,
        removeScrollBar: h,
        shards: m,
        noRelative: g,
        noIsolation: y,
        inert: v,
        setCallbacks: u,
        allowPinchZoom: !!E,
        lockRef: n,
        gapMode: C
      }), d ? a.cloneElement(a.Children.only(p), (0, r.Cl)((0, r.Cl)({}, T), {
        ref: S
      })) : a.createElement(w, (0, r.Cl)({}, T, {
        className: f,
        ref: S
      }), p));
    });
  u.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
  }, u.classNames = {
    fullWidth: o,
    zeroRight: i
  };
  var d = function (e) {
    var t = e.sideCar,
      n = (0, r.Tt)(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var i = t.read();
    if (!i) throw new Error("Sidecar medium not found");
    return a.createElement(i, (0, r.Cl)({}, n));
  };
  d.isSideCarExport = !0;
  var p = function () {
      var e = 0,
        t = null;
      return {
        add: function (r) {
          var a, i;
          0 == e && (t = function () {
            if (!document) return null;
            var e = document.createElement("style");
            e.type = "text/css";
            var t = n.nc;
            return t && e.setAttribute("nonce", t), e;
          }()) && (i = r, (a = t).styleSheet ? a.styleSheet.cssText = i : a.appendChild(document.createTextNode(i)), function (e) {
            (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
          }(t)), e++;
        },
        remove: function () {
          ! --e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
        }
      };
    },
    f = function () {
      var e,
        t = (e = p(), function (t, n) {
          a.useEffect(function () {
            return e.add(t), function () {
              e.remove();
            };
          }, [t && n]);
        });
      return function (e) {
        var n = e.styles,
          r = e.dynamic;
        return t(n, r), null;
      };
    },
    h = {
      left: 0,
      top: 0,
      right: 0,
      gap: 0
    },
    _ = function (e) {
      return parseInt(e || "", 10) || 0;
    },
    m = f(),
    A = "data-scroll-locked",
    g = function (e, t, n, r) {
      var a = e.left,
        s = e.top,
        l = e.right,
        c = e.gap;
      return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(c, "px ").concat(r, ";\n  }\n  body[").concat(A, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(a, "px;\n    padding-top: ").concat(s, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(i, " {\n    right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(o, " {\n    margin-right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(i, " .").concat(i, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(o, " .").concat(o, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(A, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(c, "px;\n  }\n");
    },
    y = function () {
      var e = parseInt(document.body.getAttribute(A) || "0", 10);
      return isFinite(e) ? e : 0;
    },
    v = function (e) {
      var t = e.noRelative,
        n = e.noImportant,
        r = e.gapMode,
        i = void 0 === r ? "margin" : r;
      a.useEffect(function () {
        return document.body.setAttribute(A, (y() + 1).toString()), function () {
          var e = y() - 1;
          e <= 0 ? document.body.removeAttribute(A) : document.body.setAttribute(A, e.toString());
        };
      }, []);
      var o = a.useMemo(function () {
        return function (e) {
          if (void 0 === e && (e = "margin"), "undefined" == typeof window) return h;
          var t = function (e) {
              var t = window.getComputedStyle(document.body),
                n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                r = t["padding" === e ? "paddingTop" : "marginTop"],
                a = t["padding" === e ? "paddingRight" : "marginRight"];
              return [_(n), _(r), _(a)];
            }(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
          };
        }(i);
      }, [i]);
      return a.createElement(m, {
        styles: g(o, !t, i, n ? "" : "!important")
      });
    },
    E = !1;
  if ("undefined" != typeof window) try {
    var b = Object.defineProperty({}, "passive", {
      get: function () {
        return E = !0, !0;
      }
    });
    window.addEventListener("test", b, b), window.removeEventListener("test", b, b);
  } catch (e) {
    E = !1;
  }
  var w = !!E && {
      passive: !1
    },
    C = function (e, t) {
      if (!(e instanceof Element)) return !1;
      var n = window.getComputedStyle(e);
      return "hidden" !== n[t] && !(n.overflowY === n.overflowX && !function (e) {
        return "TEXTAREA" === e.tagName;
      }(e) && "visible" === n[t]);
    },
    O = function (e, t) {
      var n = t.ownerDocument,
        r = t;
      do {
        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), M(e, r)) {
          var a = S(e, r);
          if (a[1] > a[2]) return !0;
        }
        r = r.parentNode;
      } while (r && r !== n.body);
      return !1;
    },
    M = function (e, t) {
      return "v" === e ? function (e) {
        return C(e, "overflowY");
      }(t) : function (e) {
        return C(e, "overflowX");
      }(t);
    },
    S = function (e, t) {
      return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function (e) {
        return [e.scrollLeft, e.scrollWidth, e.clientWidth];
      }(t);
      var n;
    },
    T = function (e) {
      return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
    },
    k = function (e) {
      return [e.deltaX, e.deltaY];
    },
    x = function (e) {
      return e && "current" in e ? e.current : e;
    },
    D = function (e) {
      return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
    },
    I = 0,
    P = [];
  function L(e) {
    for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t;
  }
  const R = (l.useMedium(function (e) {
    var t = a.useRef([]),
      n = a.useRef([0, 0]),
      i = a.useRef(),
      o = a.useState(I++)[0],
      s = a.useState(f)[0],
      l = a.useRef(e);
    a.useEffect(function () {
      l.current = e;
    }, [e]), a.useEffect(function () {
      if (e.inert) {
        document.body.classList.add("block-interactivity-".concat(o));
        var t = (0, r.fX)([e.lockRef.current], (e.shards || []).map(x), !0).filter(Boolean);
        return t.forEach(function (e) {
          return e.classList.add("allow-interactivity-".concat(o));
        }), function () {
          document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function (e) {
            return e.classList.remove("allow-interactivity-".concat(o));
          });
        };
      }
    }, [e.inert, e.lockRef.current, e.shards]);
    var c = a.useCallback(function (e, t) {
        if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !l.current.allowPinchZoom;
        var r,
          a = T(e),
          o = n.current,
          s = "deltaX" in e ? e.deltaX : o[0] - a[0],
          c = "deltaY" in e ? e.deltaY : o[1] - a[1],
          u = e.target,
          d = Math.abs(s) > Math.abs(c) ? "h" : "v";
        if ("touches" in e && "h" === d && "range" === u.type) return !1;
        var p = O(d, u);
        if (!p) return !0;
        if (p ? r = d : (r = "v" === d ? "h" : "v", p = O(d, u)), !p) return !1;
        if (!i.current && "changedTouches" in e && (s || c) && (i.current = r), !r) return !0;
        var f = i.current || r;
        return function (e, t, n, r, a) {
          var i = function (e, t) {
              return "h" === e && "rtl" === t ? -1 : 1;
            }(e, window.getComputedStyle(t).direction),
            o = i * r,
            s = n.target,
            l = t.contains(s),
            c = !1,
            u = o > 0,
            d = 0,
            p = 0;
          do {
            if (!s) break;
            var f = S(e, s),
              h = f[0],
              _ = f[1] - f[2] - i * h;
            (h || _) && M(e, s) && (d += _, p += h);
            var m = s.parentNode;
            s = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m;
          } while (!l && s !== document.body || l && (t.contains(s) || t === s));
          return (u && (a && Math.abs(d) < 1 || !a && o > d) || !u && (a && Math.abs(p) < 1 || !a && -o > p)) && (c = !0), c;
        }(f, t, e, "h" === f ? s : c, !0);
      }, []),
      u = a.useCallback(function (e) {
        var n = e;
        if (P.length && P[P.length - 1] === s) {
          var r = "deltaY" in n ? k(n) : T(n),
            a = t.current.filter(function (e) {
              return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, a = r, t[0] === a[0] && t[1] === a[1]);
              var t, a;
            })[0];
          if (a && a.should) n.cancelable && n.preventDefault();else if (!a) {
            var i = (l.current.shards || []).map(x).filter(Boolean).filter(function (e) {
              return e.contains(n.target);
            });
            (i.length > 0 ? c(n, i[0]) : !l.current.noIsolation) && n.cancelable && n.preventDefault();
          }
        }
      }, []),
      d = a.useCallback(function (e, n, r, a) {
        var i = {
          name: e,
          delta: n,
          target: r,
          should: a,
          shadowParent: L(r)
        };
        t.current.push(i), setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== i;
          });
        }, 1);
      }, []),
      p = a.useCallback(function (e) {
        n.current = T(e), i.current = void 0;
      }, []),
      h = a.useCallback(function (t) {
        d(t.type, k(t), t.target, c(t, e.lockRef.current));
      }, []),
      _ = a.useCallback(function (t) {
        d(t.type, T(t), t.target, c(t, e.lockRef.current));
      }, []);
    a.useEffect(function () {
      return P.push(s), e.setCallbacks({
        onScrollCapture: h,
        onWheelCapture: h,
        onTouchMoveCapture: _
      }), document.addEventListener("wheel", u, w), document.addEventListener("touchmove", u, w), document.addEventListener("touchstart", p, w), function () {
        P = P.filter(function (e) {
          return e !== s;
        }), document.removeEventListener("wheel", u, w), document.removeEventListener("touchmove", u, w), document.removeEventListener("touchstart", p, w);
      };
    }, []);
    var m = e.removeScrollBar,
      A = e.inert;
    return a.createElement(a.Fragment, null, A ? a.createElement(s, {
      styles: D(o)
    }) : null, m ? a.createElement(v, {
      noRelative: e.noRelative,
      gapMode: e.gapMode
    }) : null);
  }), d);
  var B = a.forwardRef(function (e, t) {
    return a.createElement(u, (0, r.Cl)({}, e, {
      ref: t,
      sideCar: R
    }));
  });
  B.classNames = u.classNames;
  const N = B;
});
