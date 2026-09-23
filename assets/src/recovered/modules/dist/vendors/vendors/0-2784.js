// Reconstructed Webpack factory 2784; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    n4: () => Ae
  });
  var r = n(5581),
    a = Math.max,
    i = Math.min,
    o = Math.round,
    s = n(58979);
  function l() {
    var e = navigator.userAgentData;
    return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function (e) {
      return e.brand + "/" + e.version;
    }).join(" ") : navigator.userAgent;
  }
  function c() {
    return !/^((?!chrome|android).)*safari/i.test(l());
  }
  function u(e, t, n) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    var a = e.getBoundingClientRect(),
      i = 1,
      l = 1;
    t && (0, r.sb)(e) && (i = e.offsetWidth > 0 && o(a.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && o(a.height) / e.offsetHeight || 1);
    var u = ((0, r.vq)(e) ? (0, s.A)(e) : window).visualViewport,
      d = !c() && n,
      p = (a.left + (d && u ? u.offsetLeft : 0)) / i,
      f = (a.top + (d && u ? u.offsetTop : 0)) / l,
      h = a.width / i,
      _ = a.height / l;
    return {
      width: h,
      height: _,
      top: f,
      right: p + h,
      bottom: f + _,
      left: p,
      x: p,
      y: f
    };
  }
  function d(e) {
    var t = (0, s.A)(e);
    return {
      scrollLeft: t.pageXOffset,
      scrollTop: t.pageYOffset
    };
  }
  var p = n(67604);
  function f(e) {
    return (((0, r.vq)(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function h(e) {
    return u(f(e)).left + d(e).scrollLeft;
  }
  function _(e) {
    return (0, s.A)(e).getComputedStyle(e);
  }
  function m(e) {
    var t = _(e),
      n = t.overflow,
      r = t.overflowX,
      a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + a + r);
  }
  function A(e, t, n) {
    void 0 === n && (n = !1);
    var a,
      i,
      l = (0, r.sb)(t),
      c = (0, r.sb)(t) && function (e) {
        var t = e.getBoundingClientRect(),
          n = o(t.width) / e.offsetWidth || 1,
          r = o(t.height) / e.offsetHeight || 1;
        return 1 !== n || 1 !== r;
      }(t),
      _ = f(t),
      A = u(e, c, n),
      g = {
        scrollLeft: 0,
        scrollTop: 0
      },
      y = {
        x: 0,
        y: 0
      };
    return (l || !l && !n) && (("body" !== (0, p.A)(t) || m(_)) && (g = (a = t) !== (0, s.A)(a) && (0, r.sb)(a) ? {
      scrollLeft: (i = a).scrollLeft,
      scrollTop: i.scrollTop
    } : d(a)), (0, r.sb)(t) ? ((y = u(t, !0)).x += t.clientLeft, y.y += t.clientTop) : _ && (y.x = h(_))), {
      x: A.left + g.scrollLeft - y.x,
      y: A.top + g.scrollTop - y.y,
      width: A.width,
      height: A.height
    };
  }
  function g(e) {
    var t = u(e),
      n = e.offsetWidth,
      r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: r
    };
  }
  function y(e) {
    return "html" === (0, p.A)(e) ? e : e.assignedSlot || e.parentNode || ((0, r.Ng)(e) ? e.host : null) || f(e);
  }
  function v(e) {
    return ["html", "body", "#document"].indexOf((0, p.A)(e)) >= 0 ? e.ownerDocument.body : (0, r.sb)(e) && m(e) ? e : v(y(e));
  }
  function E(e, t) {
    var n;
    void 0 === t && (t = []);
    var r = v(e),
      a = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
      i = (0, s.A)(r),
      o = a ? [i].concat(i.visualViewport || [], m(r) ? r : []) : r,
      l = t.concat(o);
    return a ? l : l.concat(E(y(o)));
  }
  function b(e) {
    return ["table", "td", "th"].indexOf((0, p.A)(e)) >= 0;
  }
  function w(e) {
    return (0, r.sb)(e) && "fixed" !== _(e).position ? e.offsetParent : null;
  }
  function C(e) {
    for (var t = (0, s.A)(e), n = w(e); n && b(n) && "static" === _(n).position;) n = w(n);
    return n && ("html" === (0, p.A)(n) || "body" === (0, p.A)(n) && "static" === _(n).position) ? t : n || function (e) {
      var t = /firefox/i.test(l());
      if (/Trident/i.test(l()) && (0, r.sb)(e) && "fixed" === _(e).position) return null;
      var n = y(e);
      for ((0, r.Ng)(n) && (n = n.host); (0, r.sb)(n) && ["html", "body"].indexOf((0, p.A)(n)) < 0;) {
        var a = _(n);
        if ("none" !== a.transform || "none" !== a.perspective || "paint" === a.contain || -1 !== ["transform", "perspective"].indexOf(a.willChange) || t && "filter" === a.willChange || t && a.filter && "none" !== a.filter) return n;
        n = n.parentNode;
      }
      return null;
    }(e) || t;
  }
  var O = "top",
    M = "bottom",
    S = "right",
    T = "left",
    k = "auto",
    x = [O, M, S, T],
    D = "start",
    I = "end",
    P = "viewport",
    L = "popper",
    R = x.reduce(function (e, t) {
      return e.concat([t + "-" + D, t + "-" + I]);
    }, []),
    B = [].concat(x, [k]).reduce(function (e, t) {
      return e.concat([t, t + "-" + D, t + "-" + I]);
    }, []),
    N = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
  function U(e) {
    var t = new Map(),
      n = new Set(),
      r = [];
    function a(e) {
      n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
        if (!n.has(e)) {
          var r = t.get(e);
          r && a(r);
        }
      }), r.push(e);
    }
    return e.forEach(function (e) {
      t.set(e.name, e);
    }), e.forEach(function (e) {
      n.has(e.name) || a(e);
    }), r;
  }
  var F = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function j() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function H(e) {
    void 0 === e && (e = {});
    var t = e,
      n = t.defaultModifiers,
      a = void 0 === n ? [] : n,
      i = t.defaultOptions,
      o = void 0 === i ? F : i;
    return function (e, t, n) {
      void 0 === n && (n = o);
      var i,
        s,
        l = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, F, o),
          modifiersData: {},
          elements: {
            reference: e,
            popper: t
          },
          attributes: {},
          styles: {}
        },
        c = [],
        u = !1,
        d = {
          state: l,
          setOptions: function (n) {
            var i = "function" == typeof n ? n(l.options) : n;
            p(), l.options = Object.assign({}, o, l.options, i), l.scrollParents = {
              reference: (0, r.vq)(e) ? E(e) : e.contextElement ? E(e.contextElement) : [],
              popper: E(t)
            };
            var s,
              u,
              f = function (e) {
                var t = U(e);
                return N.reduce(function (e, n) {
                  return e.concat(t.filter(function (e) {
                    return e.phase === n;
                  }));
                }, []);
              }((s = [].concat(a, l.options.modifiers), u = s.reduce(function (e, t) {
                var n = e[t.name];
                return e[t.name] = n ? Object.assign({}, n, t, {
                  options: Object.assign({}, n.options, t.options),
                  data: Object.assign({}, n.data, t.data)
                }) : t, e;
              }, {}), Object.keys(u).map(function (e) {
                return u[e];
              })));
            return l.orderedModifiers = f.filter(function (e) {
              return e.enabled;
            }), l.orderedModifiers.forEach(function (e) {
              var t = e.name,
                n = e.options,
                r = void 0 === n ? {} : n,
                a = e.effect;
              if ("function" == typeof a) {
                var i = a({
                  state: l,
                  name: t,
                  instance: d,
                  options: r
                });
                c.push(i || function () {});
              }
            }), d.update();
          },
          forceUpdate: function () {
            if (!u) {
              var e = l.elements,
                t = e.reference,
                n = e.popper;
              if (j(t, n)) {
                l.rects = {
                  reference: A(t, C(n), "fixed" === l.options.strategy),
                  popper: g(n)
                }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function (e) {
                  return l.modifiersData[e.name] = Object.assign({}, e.data);
                });
                for (var r = 0; r < l.orderedModifiers.length; r++) if (!0 !== l.reset) {
                  var a = l.orderedModifiers[r],
                    i = a.fn,
                    o = a.options,
                    s = void 0 === o ? {} : o,
                    c = a.name;
                  "function" == typeof i && (l = i({
                    state: l,
                    options: s,
                    name: c,
                    instance: d
                  }) || l);
                } else l.reset = !1, r = -1;
              }
            }
          },
          update: (i = function () {
            return new Promise(function (e) {
              d.forceUpdate(), e(l);
            });
          }, function () {
            return s || (s = new Promise(function (e) {
              Promise.resolve().then(function () {
                s = void 0, e(i());
              });
            })), s;
          }),
          destroy: function () {
            p(), u = !0;
          }
        };
      if (!j(e, t)) return d;
      function p() {
        c.forEach(function (e) {
          return e();
        }), c = [];
      }
      return d.setOptions(n).then(function (e) {
        !u && n.onFirstUpdate && n.onFirstUpdate(e);
      }), d;
    };
  }
  var W = {
    passive: !0
  };
  const K = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (e) {
      var t = e.state,
        n = e.instance,
        r = e.options,
        a = r.scroll,
        i = void 0 === a || a,
        o = r.resize,
        l = void 0 === o || o,
        c = (0, s.A)(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      return i && u.forEach(function (e) {
        e.addEventListener("scroll", n.update, W);
      }), l && c.addEventListener("resize", n.update, W), function () {
        i && u.forEach(function (e) {
          e.removeEventListener("scroll", n.update, W);
        }), l && c.removeEventListener("resize", n.update, W);
      };
    },
    data: {}
  };
  function V(e) {
    return e.split("-")[0];
  }
  function z(e) {
    return e.split("-")[1];
  }
  function Y(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function Q(e) {
    var t,
      n = e.reference,
      r = e.element,
      a = e.placement,
      i = a ? V(a) : null,
      o = a ? z(a) : null,
      s = n.x + n.width / 2 - r.width / 2,
      l = n.y + n.height / 2 - r.height / 2;
    switch (i) {
      case O:
        t = {
          x: s,
          y: n.y - r.height
        };
        break;
      case M:
        t = {
          x: s,
          y: n.y + n.height
        };
        break;
      case S:
        t = {
          x: n.x + n.width,
          y: l
        };
        break;
      case T:
        t = {
          x: n.x - r.width,
          y: l
        };
        break;
      default:
        t = {
          x: n.x,
          y: n.y
        };
    }
    var c = i ? Y(i) : null;
    if (null != c) {
      var u = "y" === c ? "height" : "width";
      switch (o) {
        case D:
          t[c] = t[c] - (n[u] / 2 - r[u] / 2);
          break;
        case I:
          t[c] = t[c] + (n[u] / 2 - r[u] / 2);
      }
    }
    return t;
  }
  const G = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (e) {
      var t = e.state,
        n = e.name;
      t.modifiersData[n] = Q({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
      });
    },
    data: {}
  };
  var $ = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function q(e) {
    var t,
      n = e.popper,
      r = e.popperRect,
      a = e.placement,
      i = e.variation,
      l = e.offsets,
      c = e.position,
      u = e.gpuAcceleration,
      d = e.adaptive,
      p = e.roundOffsets,
      h = e.isFixed,
      m = l.x,
      A = void 0 === m ? 0 : m,
      g = l.y,
      y = void 0 === g ? 0 : g,
      v = "function" == typeof p ? p({
        x: A,
        y
      }) : {
        x: A,
        y
      };
    A = v.x, y = v.y;
    var E = l.hasOwnProperty("x"),
      b = l.hasOwnProperty("y"),
      w = T,
      k = O,
      x = window;
    if (d) {
      var D = C(n),
        P = "clientHeight",
        L = "clientWidth";
      D === (0, s.A)(n) && "static" !== _(D = f(n)).position && "absolute" === c && (P = "scrollHeight", L = "scrollWidth"), (a === O || (a === T || a === S) && i === I) && (k = M, y -= (h && D === x && x.visualViewport ? x.visualViewport.height : D[P]) - r.height, y *= u ? 1 : -1), a !== T && (a !== O && a !== M || i !== I) || (w = S, A -= (h && D === x && x.visualViewport ? x.visualViewport.width : D[L]) - r.width, A *= u ? 1 : -1);
    }
    var R,
      B = Object.assign({
        position: c
      }, d && $),
      N = !0 === p ? function (e, t) {
        var n = e.x,
          r = e.y,
          a = t.devicePixelRatio || 1;
        return {
          x: o(n * a) / a || 0,
          y: o(r * a) / a || 0
        };
      }({
        x: A,
        y
      }, (0, s.A)(n)) : {
        x: A,
        y
      };
    return A = N.x, y = N.y, u ? Object.assign({}, B, ((R = {})[k] = b ? "0" : "", R[w] = E ? "0" : "", R.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + A + "px, " + y + "px)" : "translate3d(" + A + "px, " + y + "px, 0)", R)) : Object.assign({}, B, ((t = {})[k] = b ? y + "px" : "", t[w] = E ? A + "px" : "", t.transform = "", t));
  }
  const Z = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = n.gpuAcceleration,
        a = void 0 === r || r,
        i = n.adaptive,
        o = void 0 === i || i,
        s = n.roundOffsets,
        l = void 0 === s || s,
        c = {
          placement: V(t.placement),
          variation: z(t.placement),
          popper: t.elements.popper,
          popperRect: t.rects.popper,
          gpuAcceleration: a,
          isFixed: "fixed" === t.options.strategy
        };
      null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, q(Object.assign({}, c, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: o,
        roundOffsets: l
      })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, q(Object.assign({}, c, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
      });
    },
    data: {}
  };
  var X = n(16607);
  const J = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name,
        a = n.offset,
        i = void 0 === a ? [0, 0] : a,
        o = B.reduce(function (e, n) {
          return e[n] = function (e, t, n) {
            var r = V(e),
              a = [T, O].indexOf(r) >= 0 ? -1 : 1,
              i = "function" == typeof n ? n(Object.assign({}, t, {
                placement: e
              })) : n,
              o = i[0],
              s = i[1];
            return o = o || 0, s = (s || 0) * a, [T, S].indexOf(r) >= 0 ? {
              x: s,
              y: o
            } : {
              x: o,
              y: s
            };
          }(n, t.rects, i), e;
        }, {}),
        s = o[t.placement],
        l = s.x,
        c = s.y;
      null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = o;
    }
  };
  var ee = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function te(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return ee[e];
    });
  }
  var ne = {
    start: "end",
    end: "start"
  };
  function re(e) {
    return e.replace(/start|end/g, function (e) {
      return ne[e];
    });
  }
  function ae(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && (0, r.Ng)(n)) {
      var a = t;
      do {
        if (a && e.isSameNode(a)) return !0;
        a = a.parentNode || a.host;
      } while (a);
    }
    return !1;
  }
  function ie(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function oe(e, t, n) {
    return t === P ? ie(function (e, t) {
      var n = (0, s.A)(e),
        r = f(e),
        a = n.visualViewport,
        i = r.clientWidth,
        o = r.clientHeight,
        l = 0,
        u = 0;
      if (a) {
        i = a.width, o = a.height;
        var d = c();
        (d || !d && "fixed" === t) && (l = a.offsetLeft, u = a.offsetTop);
      }
      return {
        width: i,
        height: o,
        x: l + h(e),
        y: u
      };
    }(e, n)) : (0, r.vq)(t) ? function (e, t) {
      var n = u(e, !1, "fixed" === t);
      return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
    }(t, n) : ie(function (e) {
      var t,
        n = f(e),
        r = d(e),
        i = null == (t = e.ownerDocument) ? void 0 : t.body,
        o = a(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
        s = a(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
        l = -r.scrollLeft + h(e),
        c = -r.scrollTop;
      return "rtl" === _(i || n).direction && (l += a(n.clientWidth, i ? i.clientWidth : 0) - o), {
        width: o,
        height: s,
        x: l,
        y: c
      };
    }(f(e)));
  }
  function se(e) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, e);
  }
  function le(e, t) {
    return t.reduce(function (t, n) {
      return t[n] = e, t;
    }, {});
  }
  function ce(e, t) {
    void 0 === t && (t = {});
    var n = t,
      o = n.placement,
      s = void 0 === o ? e.placement : o,
      l = n.strategy,
      c = void 0 === l ? e.strategy : l,
      d = n.boundary,
      h = void 0 === d ? "clippingParents" : d,
      m = n.rootBoundary,
      A = void 0 === m ? P : m,
      g = n.elementContext,
      v = void 0 === g ? L : g,
      b = n.altBoundary,
      w = void 0 !== b && b,
      T = n.padding,
      k = void 0 === T ? 0 : T,
      D = se("number" != typeof k ? k : le(k, x)),
      I = v === L ? "reference" : L,
      R = e.rects.popper,
      B = e.elements[w ? I : v],
      N = function (e, t, n, o) {
        var s = "clippingParents" === t ? function (e) {
            var t = E(y(e)),
              n = ["absolute", "fixed"].indexOf(_(e).position) >= 0 && (0, r.sb)(e) ? C(e) : e;
            return (0, r.vq)(n) ? t.filter(function (e) {
              return (0, r.vq)(e) && ae(e, n) && "body" !== (0, p.A)(e);
            }) : [];
          }(e) : [].concat(t),
          l = [].concat(s, [n]),
          c = l[0],
          u = l.reduce(function (t, n) {
            var r = oe(e, n, o);
            return t.top = a(r.top, t.top), t.right = i(r.right, t.right), t.bottom = i(r.bottom, t.bottom), t.left = a(r.left, t.left), t;
          }, oe(e, c, o));
        return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
      }((0, r.vq)(B) ? B : B.contextElement || f(e.elements.popper), h, A, c),
      U = u(e.elements.reference),
      F = Q({
        reference: U,
        element: R,
        strategy: "absolute",
        placement: s
      }),
      j = ie(Object.assign({}, R, F)),
      H = v === L ? j : U,
      W = {
        top: N.top - H.top + D.top,
        bottom: H.bottom - N.bottom + D.bottom,
        left: N.left - H.left + D.left,
        right: H.right - N.right + D.right
      },
      K = e.modifiersData.offset;
    if (v === L && K) {
      var V = K[s];
      Object.keys(W).forEach(function (e) {
        var t = [S, M].indexOf(e) >= 0 ? 1 : -1,
          n = [O, M].indexOf(e) >= 0 ? "y" : "x";
        W[e] += V[n] * t;
      });
    }
    return W;
  }
  const ue = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name;
      if (!t.modifiersData[r]._skip) {
        for (var a = n.mainAxis, i = void 0 === a || a, o = n.altAxis, s = void 0 === o || o, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, p = n.altBoundary, f = n.flipVariations, h = void 0 === f || f, _ = n.allowedAutoPlacements, m = t.options.placement, A = V(m), g = l || (A !== m && h ? function (e) {
            if (V(e) === k) return [];
            var t = te(e);
            return [re(e), t, re(t)];
          }(m) : [te(m)]), y = [m].concat(g).reduce(function (e, n) {
            return e.concat(V(n) === k ? function (e, t) {
              void 0 === t && (t = {});
              var n = t,
                r = n.placement,
                a = n.boundary,
                i = n.rootBoundary,
                o = n.padding,
                s = n.flipVariations,
                l = n.allowedAutoPlacements,
                c = void 0 === l ? B : l,
                u = z(r),
                d = u ? s ? R : R.filter(function (e) {
                  return z(e) === u;
                }) : x,
                p = d.filter(function (e) {
                  return c.indexOf(e) >= 0;
                });
              0 === p.length && (p = d);
              var f = p.reduce(function (t, n) {
                return t[n] = ce(e, {
                  placement: n,
                  boundary: a,
                  rootBoundary: i,
                  padding: o
                })[V(n)], t;
              }, {});
              return Object.keys(f).sort(function (e, t) {
                return f[e] - f[t];
              });
            }(t, {
              placement: n,
              boundary: u,
              rootBoundary: d,
              padding: c,
              flipVariations: h,
              allowedAutoPlacements: _
            }) : n);
          }, []), v = t.rects.reference, E = t.rects.popper, b = new Map(), w = !0, C = y[0], I = 0; I < y.length; I++) {
          var P = y[I],
            L = V(P),
            N = z(P) === D,
            U = [O, M].indexOf(L) >= 0,
            F = U ? "width" : "height",
            j = ce(t, {
              placement: P,
              boundary: u,
              rootBoundary: d,
              altBoundary: p,
              padding: c
            }),
            H = U ? N ? S : T : N ? M : O;
          v[F] > E[F] && (H = te(H));
          var W = te(H),
            K = [];
          if (i && K.push(j[L] <= 0), s && K.push(j[H] <= 0, j[W] <= 0), K.every(function (e) {
            return e;
          })) {
            C = P, w = !1;
            break;
          }
          b.set(P, K);
        }
        if (w) for (var Y = function (e) {
            var t = y.find(function (t) {
              var n = b.get(t);
              if (n) return n.slice(0, e).every(function (e) {
                return e;
              });
            });
            if (t) return C = t, "break";
          }, Q = h ? 3 : 1; Q > 0 && "break" !== Y(Q); Q--);
        t.placement !== C && (t.modifiersData[r]._skip = !0, t.placement = C, t.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };
  function de(e, t, n) {
    return a(e, i(t, n));
  }
  const pe = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options,
          r = e.name,
          o = n.mainAxis,
          s = void 0 === o || o,
          l = n.altAxis,
          c = void 0 !== l && l,
          u = n.boundary,
          d = n.rootBoundary,
          p = n.altBoundary,
          f = n.padding,
          h = n.tether,
          _ = void 0 === h || h,
          m = n.tetherOffset,
          A = void 0 === m ? 0 : m,
          y = ce(t, {
            boundary: u,
            rootBoundary: d,
            padding: f,
            altBoundary: p
          }),
          v = V(t.placement),
          E = z(t.placement),
          b = !E,
          w = Y(v),
          k = "x" === w ? "y" : "x",
          x = t.modifiersData.popperOffsets,
          I = t.rects.reference,
          P = t.rects.popper,
          L = "function" == typeof A ? A(Object.assign({}, t.rects, {
            placement: t.placement
          })) : A,
          R = "number" == typeof L ? {
            mainAxis: L,
            altAxis: L
          } : Object.assign({
            mainAxis: 0,
            altAxis: 0
          }, L),
          B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
          N = {
            x: 0,
            y: 0
          };
        if (x) {
          if (s) {
            var U,
              F = "y" === w ? O : T,
              j = "y" === w ? M : S,
              H = "y" === w ? "height" : "width",
              W = x[w],
              K = W + y[F],
              Q = W - y[j],
              G = _ ? -P[H] / 2 : 0,
              $ = E === D ? I[H] : P[H],
              q = E === D ? -P[H] : -I[H],
              Z = t.elements.arrow,
              X = _ && Z ? g(Z) : {
                width: 0,
                height: 0
              },
              J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              },
              ee = J[F],
              te = J[j],
              ne = de(0, I[H], X[H]),
              re = b ? I[H] / 2 - G - ne - ee - R.mainAxis : $ - ne - ee - R.mainAxis,
              ae = b ? -I[H] / 2 + G + ne + te + R.mainAxis : q + ne + te + R.mainAxis,
              ie = t.elements.arrow && C(t.elements.arrow),
              oe = ie ? "y" === w ? ie.clientTop || 0 : ie.clientLeft || 0 : 0,
              se = null != (U = null == B ? void 0 : B[w]) ? U : 0,
              le = W + ae - se,
              ue = de(_ ? i(K, W + re - se - oe) : K, W, _ ? a(Q, le) : Q);
            x[w] = ue, N[w] = ue - W;
          }
          if (c) {
            var pe,
              fe = "x" === w ? O : T,
              he = "x" === w ? M : S,
              _e = x[k],
              me = "y" === k ? "height" : "width",
              Ae = _e + y[fe],
              ge = _e - y[he],
              ye = -1 !== [O, T].indexOf(v),
              ve = null != (pe = null == B ? void 0 : B[k]) ? pe : 0,
              Ee = ye ? Ae : _e - I[me] - P[me] - ve + R.altAxis,
              be = ye ? _e + I[me] + P[me] - ve - R.altAxis : ge,
              we = _ && ye ? function (e, t, n) {
                var r = de(e, t, n);
                return r > n ? n : r;
              }(Ee, _e, be) : de(_ ? Ee : Ae, _e, _ ? be : ge);
            x[k] = we, N[k] = we - _e;
          }
          t.modifiersData[r] = N;
        }
      },
      requiresIfExists: ["offset"]
    },
    fe = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          n = e.state,
          r = e.name,
          a = e.options,
          i = n.elements.arrow,
          o = n.modifiersData.popperOffsets,
          s = V(n.placement),
          l = Y(s),
          c = [T, S].indexOf(s) >= 0 ? "height" : "width";
        if (i && o) {
          var u = function (e, t) {
              return se("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                placement: t.placement
              })) : e) ? e : le(e, x));
            }(a.padding, n),
            d = g(i),
            p = "y" === l ? O : T,
            f = "y" === l ? M : S,
            h = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c],
            _ = o[l] - n.rects.reference[l],
            m = C(i),
            A = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
            y = h / 2 - _ / 2,
            v = u[p],
            E = A - d[c] - u[f],
            b = A / 2 - d[c] / 2 + y,
            w = de(v, b, E),
            k = l;
          n.modifiersData[r] = ((t = {})[k] = w, t.centerOffset = w - b, t);
        }
      },
      effect: function (e) {
        var t = e.state,
          n = e.options.element,
          r = void 0 === n ? "[data-popper-arrow]" : n;
        null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && ae(t.elements.popper, r) && (t.elements.arrow = r);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    };
  function he(e, t, n) {
    return void 0 === n && (n = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    };
  }
  function _e(e) {
    return [O, S, M, T].some(function (t) {
      return e[t] >= 0;
    });
  }
  const me = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (e) {
      var t = e.state,
        n = e.name,
        r = t.rects.reference,
        a = t.rects.popper,
        i = t.modifiersData.preventOverflow,
        o = ce(t, {
          elementContext: "reference"
        }),
        s = ce(t, {
          altBoundary: !0
        }),
        l = he(o, r),
        c = he(s, a, i),
        u = _e(l),
        d = _e(c);
      t.modifiersData[n] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: u,
        hasPopperEscaped: d
      }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": u,
        "data-popper-escaped": d
      });
    }
  };
  var Ae = H({
    defaultModifiers: [K, G, Z, X.A, J, ue, pe, fe, me]
  });
});
