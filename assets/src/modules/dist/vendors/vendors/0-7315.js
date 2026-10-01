// Reconstructed Webpack factory 7315; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    UE: () => ce,
    RK: () => ae,
    ll: () => te,
    rD: () => pe,
    __: () => ne,
    UU: () => oe,
    jD: () => le,
    mG: () => ue,
    ER: () => de,
    cY: () => re,
    iD: () => J,
    BN: () => ie,
    Ej: () => se
  });
  const r = ["top", "right", "bottom", "left"],
    a = ["start", "end"],
    i = r.reduce((e, t) => e.concat(t, t + "-" + a[0], t + "-" + a[1]), []),
    o = Math.min,
    s = Math.max,
    l = Math.round,
    c = Math.floor,
    u = e => ({
      x: e,
      y: e
    }),
    d = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    },
    p = {
      start: "end",
      end: "start"
    };
  function f(e, t, n) {
    return s(e, o(t, n));
  }
  function h(e, t) {
    return "function" == typeof e ? e(t) : e;
  }
  function _(e) {
    return e.split("-")[0];
  }
  function m(e) {
    return e.split("-")[1];
  }
  function A(e) {
    return "x" === e ? "y" : "x";
  }
  function g(e) {
    return "y" === e ? "height" : "width";
  }
  const y = new Set(["top", "bottom"]);
  function v(e) {
    return y.has(_(e)) ? "y" : "x";
  }
  function E(e) {
    return A(v(e));
  }
  function b(e, t, n) {
    void 0 === n && (n = !1);
    const r = m(e),
      a = E(e),
      i = g(a);
    let o = "x" === a ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (o = T(o)), [o, T(o)];
  }
  function w(e) {
    return e.replace(/start|end/g, e => p[e]);
  }
  const C = ["left", "right"],
    O = ["right", "left"],
    M = ["top", "bottom"],
    S = ["bottom", "top"];
  function T(e) {
    return e.replace(/left|right|bottom|top/g, e => d[e]);
  }
  function k(e) {
    return "number" != typeof e ? function (e) {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
      };
    }(e) : {
      top: e,
      right: e,
      bottom: e,
      left: e
    };
  }
  function x(e) {
    const {
      x: t,
      y: n,
      width: r,
      height: a
    } = e;
    return {
      width: r,
      height: a,
      top: n,
      left: t,
      right: t + r,
      bottom: n + a,
      x: t,
      y: n
    };
  }
  function D(e, t, n) {
    let {
      reference: r,
      floating: a
    } = e;
    const i = v(t),
      o = E(t),
      s = g(o),
      l = _(t),
      c = "y" === i,
      u = r.x + r.width / 2 - a.width / 2,
      d = r.y + r.height / 2 - a.height / 2,
      p = r[s] / 2 - a[s] / 2;
    let f;
    switch (l) {
      case "top":
        f = {
          x: u,
          y: r.y - a.height
        };
        break;
      case "bottom":
        f = {
          x: u,
          y: r.y + r.height
        };
        break;
      case "right":
        f = {
          x: r.x + r.width,
          y: d
        };
        break;
      case "left":
        f = {
          x: r.x - a.width,
          y: d
        };
        break;
      default:
        f = {
          x: r.x,
          y: r.y
        };
    }
    switch (m(t)) {
      case "start":
        f[o] -= p * (n && c ? -1 : 1);
        break;
      case "end":
        f[o] += p * (n && c ? -1 : 1);
    }
    return f;
  }
  async function I(e, t) {
    var n;
    void 0 === t && (t = {});
    const {
        x: r,
        y: a,
        platform: i,
        rects: o,
        elements: s,
        strategy: l
      } = e,
      {
        boundary: c = "clippingAncestors",
        rootBoundary: u = "viewport",
        elementContext: d = "floating",
        altBoundary: p = !1,
        padding: f = 0
      } = h(t, e),
      _ = k(f),
      m = s[p ? "floating" === d ? "reference" : "floating" : d],
      A = x(await i.getClippingRect({
        element: null == (n = await (null == i.isElement ? void 0 : i.isElement(m))) || n ? m : m.contextElement || (await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: l
      })),
      g = "floating" === d ? {
        x: r,
        y: a,
        width: o.floating.width,
        height: o.floating.height
      } : o.reference,
      y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)),
      v = (await (null == i.isElement ? void 0 : i.isElement(y))) && (await (null == i.getScale ? void 0 : i.getScale(y))) || {
        x: 1,
        y: 1
      },
      E = x(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: g,
        offsetParent: y,
        strategy: l
      }) : g);
    return {
      top: (A.top - E.top + _.top) / v.y,
      bottom: (E.bottom - A.bottom + _.bottom) / v.y,
      left: (A.left - E.left + _.left) / v.x,
      right: (E.right - A.right + _.right) / v.x
    };
  }
  function P(e, t) {
    return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width
    };
  }
  function L(e) {
    return r.some(t => e[t] >= 0);
  }
  function R(e) {
    const t = o(...e.map(e => e.left)),
      n = o(...e.map(e => e.top));
    return {
      x: t,
      y: n,
      width: s(...e.map(e => e.right)) - t,
      height: s(...e.map(e => e.bottom)) - n
    };
  }
  const B = new Set(["left", "top"]);
  var N = n(86635);
  function U(e) {
    const t = (0, N.L9)(e);
    let n = parseFloat(t.width) || 0,
      r = parseFloat(t.height) || 0;
    const a = (0, N.sb)(e),
      i = a ? e.offsetWidth : n,
      o = a ? e.offsetHeight : r,
      s = l(n) !== i || l(r) !== o;
    return s && (n = i, r = o), {
      width: n,
      height: r,
      $: s
    };
  }
  function F(e) {
    return (0, N.vq)(e) ? e : e.contextElement;
  }
  function j(e) {
    const t = F(e);
    if (!(0, N.sb)(t)) return u(1);
    const n = t.getBoundingClientRect(),
      {
        width: r,
        height: a,
        $: i
      } = U(t);
    let o = (i ? l(n.width) : n.width) / r,
      s = (i ? l(n.height) : n.height) / a;
    return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
      x: o,
      y: s
    };
  }
  const H = u(0);
  function W(e) {
    const t = (0, N.zk)(e);
    return (0, N.Tc)() && t.visualViewport ? {
      x: t.visualViewport.offsetLeft,
      y: t.visualViewport.offsetTop
    } : H;
  }
  function K(e, t, n, r) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    const a = e.getBoundingClientRect(),
      i = F(e);
    let o = u(1);
    t && (r ? (0, N.vq)(r) && (o = j(r)) : o = j(e));
    const s = function (e, t, n) {
      return void 0 === t && (t = !1), !(!n || t && n !== (0, N.zk)(e)) && t;
    }(i, n, r) ? W(i) : u(0);
    let l = (a.left + s.x) / o.x,
      c = (a.top + s.y) / o.y,
      d = a.width / o.x,
      p = a.height / o.y;
    if (i) {
      const e = (0, N.zk)(i),
        t = r && (0, N.vq)(r) ? (0, N.zk)(r) : r;
      let n = e,
        a = (0, N._m)(n);
      for (; a && r && t !== n;) {
        const e = j(a),
          t = a.getBoundingClientRect(),
          r = (0, N.L9)(a),
          i = t.left + (a.clientLeft + parseFloat(r.paddingLeft)) * e.x,
          o = t.top + (a.clientTop + parseFloat(r.paddingTop)) * e.y;
        l *= e.x, c *= e.y, d *= e.x, p *= e.y, l += i, c += o, n = (0, N.zk)(a), a = (0, N._m)(n);
      }
    }
    return x({
      width: d,
      height: p,
      x: l,
      y: c
    });
  }
  function V(e, t) {
    const n = (0, N.CP)(e).scrollLeft;
    return t ? t.left + n : K((0, N.ep)(e)).left + n;
  }
  function z(e, t) {
    const n = e.getBoundingClientRect();
    return {
      x: n.left + t.scrollLeft - V(e, n),
      y: n.top + t.scrollTop
    };
  }
  const Y = new Set(["absolute", "fixed"]);
  function Q(e, t, n) {
    let r;
    if ("viewport" === t) r = function (e, t) {
      const n = (0, N.zk)(e),
        r = (0, N.ep)(e),
        a = n.visualViewport;
      let i = r.clientWidth,
        o = r.clientHeight,
        s = 0,
        l = 0;
      if (a) {
        i = a.width, o = a.height;
        const e = (0, N.Tc)();
        (!e || e && "fixed" === t) && (s = a.offsetLeft, l = a.offsetTop);
      }
      const c = V(r);
      if (c <= 0) {
        const e = r.ownerDocument,
          t = e.body,
          n = getComputedStyle(t),
          a = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
          o = Math.abs(r.clientWidth - t.clientWidth - a);
        o <= 25 && (i -= o);
      } else c <= 25 && (i += c);
      return {
        width: i,
        height: o,
        x: s,
        y: l
      };
    }(e, n);else if ("document" === t) r = function (e) {
      const t = (0, N.ep)(e),
        n = (0, N.CP)(e),
        r = e.ownerDocument.body,
        a = s(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = s(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
      let o = -n.scrollLeft + V(e);
      const l = -n.scrollTop;
      return "rtl" === (0, N.L9)(r).direction && (o += s(t.clientWidth, r.clientWidth) - a), {
        width: a,
        height: i,
        x: o,
        y: l
      };
    }((0, N.ep)(e));else if ((0, N.vq)(t)) r = function (e, t) {
      const n = K(e, !0, "fixed" === t),
        r = n.top + e.clientTop,
        a = n.left + e.clientLeft,
        i = (0, N.sb)(e) ? j(e) : u(1);
      return {
        width: e.clientWidth * i.x,
        height: e.clientHeight * i.y,
        x: a * i.x,
        y: r * i.y
      };
    }(t, n);else {
      const n = W(e);
      r = {
        x: t.x - n.x,
        y: t.y - n.y,
        width: t.width,
        height: t.height
      };
    }
    return x(r);
  }
  function G(e, t) {
    const n = (0, N.$4)(e);
    return !(n === t || !(0, N.vq)(n) || (0, N.eu)(n)) && ("fixed" === (0, N.L9)(n).position || G(n, t));
  }
  function $(e, t, n) {
    const r = (0, N.sb)(t),
      a = (0, N.ep)(t),
      i = "fixed" === n,
      o = K(e, !0, i, t);
    let s = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const l = u(0);
    function c() {
      l.x = V(a);
    }
    if (r || !r && !i) if (("body" !== (0, N.mq)(t) || (0, N.ZU)(a)) && (s = (0, N.CP)(t)), r) {
      const e = K(t, !0, i, t);
      l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop;
    } else a && c();
    i && !r && a && c();
    const d = !a || r || i ? u(0) : z(a, s);
    return {
      x: o.left + s.scrollLeft - l.x - d.x,
      y: o.top + s.scrollTop - l.y - d.y,
      width: o.width,
      height: o.height
    };
  }
  function q(e) {
    return "static" === (0, N.L9)(e).position;
  }
  function Z(e, t) {
    if (!(0, N.sb)(e) || "fixed" === (0, N.L9)(e).position) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (0, N.ep)(e) === n && (n = n.ownerDocument.body), n;
  }
  function X(e, t) {
    const n = (0, N.zk)(e);
    if ((0, N.Tf)(e)) return n;
    if (!(0, N.sb)(e)) {
      let t = (0, N.$4)(e);
      for (; t && !(0, N.eu)(t);) {
        if ((0, N.vq)(t) && !q(t)) return t;
        t = (0, N.$4)(t);
      }
      return n;
    }
    let r = Z(e, t);
    for (; r && (0, N.Lv)(r) && q(r);) r = Z(r, t);
    return r && (0, N.eu)(r) && q(r) && !(0, N.sQ)(r) ? n : r || (0, N.gJ)(e) || n;
  }
  const J = {
    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
      let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: a
      } = e;
      const i = "fixed" === a,
        o = (0, N.ep)(r),
        s = !!t && (0, N.Tf)(t.floating);
      if (r === o || s && i) return n;
      let l = {
          scrollLeft: 0,
          scrollTop: 0
        },
        c = u(1);
      const d = u(0),
        p = (0, N.sb)(r);
      if ((p || !p && !i) && (("body" !== (0, N.mq)(r) || (0, N.ZU)(o)) && (l = (0, N.CP)(r)), (0, N.sb)(r))) {
        const e = K(r);
        c = j(r), d.x = e.x + r.clientLeft, d.y = e.y + r.clientTop;
      }
      const f = !o || p || i ? u(0) : z(o, l);
      return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
        y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
      };
    },
    getDocumentElement: N.ep,
    getClippingRect: function (e) {
      let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: a
      } = e;
      const i = [...("clippingAncestors" === n ? (0, N.Tf)(t) ? [] : function (e, t) {
          const n = t.get(e);
          if (n) return n;
          let r = (0, N.v9)(e, [], !1).filter(e => (0, N.vq)(e) && "body" !== (0, N.mq)(e)),
            a = null;
          const i = "fixed" === (0, N.L9)(e).position;
          let o = i ? (0, N.$4)(e) : e;
          for (; (0, N.vq)(o) && !(0, N.eu)(o);) {
            const t = (0, N.L9)(o),
              n = (0, N.sQ)(o);
            n || "fixed" !== t.position || (a = null), (i ? !n && !a : !n && "static" === t.position && a && Y.has(a.position) || (0, N.ZU)(o) && !n && G(e, o)) ? r = r.filter(e => e !== o) : a = t, o = (0, N.$4)(o);
          }
          return t.set(e, r), r;
        }(t, this._c) : [].concat(n)), r],
        l = i[0],
        c = i.reduce((e, n) => {
          const r = Q(t, n, a);
          return e.top = s(r.top, e.top), e.right = o(r.right, e.right), e.bottom = o(r.bottom, e.bottom), e.left = s(r.left, e.left), e;
        }, Q(t, l, a));
      return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
      };
    },
    getOffsetParent: X,
    getElementRects: async function (e) {
      const t = this.getOffsetParent || X,
        n = this.getDimensions,
        r = await n(e.floating);
      return {
        reference: $(e.reference, await t(e.floating), e.strategy),
        floating: {
          x: 0,
          y: 0,
          width: r.width,
          height: r.height
        }
      };
    },
    getClientRects: function (e) {
      return Array.from(e.getClientRects());
    },
    getDimensions: function (e) {
      const {
        width: t,
        height: n
      } = U(e);
      return {
        width: t,
        height: n
      };
    },
    getScale: j,
    isElement: N.vq,
    isRTL: function (e) {
      return "rtl" === (0, N.L9)(e).direction;
    }
  };
  function ee(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
  }
  function te(e, t, n, r) {
    void 0 === r && (r = {});
    const {
        ancestorScroll: a = !0,
        ancestorResize: i = !0,
        elementResize: l = "function" == typeof ResizeObserver,
        layoutShift: u = "function" == typeof IntersectionObserver,
        animationFrame: d = !1
      } = r,
      p = F(e),
      f = a || i ? [...(p ? (0, N.v9)(p) : []), ...(0, N.v9)(t)] : [];
    f.forEach(e => {
      a && e.addEventListener("scroll", n, {
        passive: !0
      }), i && e.addEventListener("resize", n);
    });
    const h = p && u ? function (e, t) {
      let n,
        r = null;
      const a = (0, N.ep)(e);
      function i() {
        var e;
        clearTimeout(n), null == (e = r) || e.disconnect(), r = null;
      }
      return function l(u, d) {
        void 0 === u && (u = !1), void 0 === d && (d = 1), i();
        const p = e.getBoundingClientRect(),
          {
            left: f,
            top: h,
            width: _,
            height: m
          } = p;
        if (u || t(), !_ || !m) return;
        const A = {
          rootMargin: -c(h) + "px " + -c(a.clientWidth - (f + _)) + "px " + -c(a.clientHeight - (h + m)) + "px " + -c(f) + "px",
          threshold: s(0, o(1, d)) || 1
        };
        let g = !0;
        function y(t) {
          const r = t[0].intersectionRatio;
          if (r !== d) {
            if (!g) return l();
            r ? l(!1, r) : n = setTimeout(() => {
              l(!1, 1e-7);
            }, 1e3);
          }
          1 !== r || ee(p, e.getBoundingClientRect()) || l(), g = !1;
        }
        try {
          r = new IntersectionObserver(y, {
            ...A,
            root: a.ownerDocument
          });
        } catch (e) {
          r = new IntersectionObserver(y, A);
        }
        r.observe(e);
      }(!0), i;
    }(p, n) : null;
    let _,
      m = -1,
      A = null;
    l && (A = new ResizeObserver(e => {
      let [r] = e;
      r && r.target === p && A && (A.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
        var e;
        null == (e = A) || e.observe(t);
      })), n();
    }), p && !d && A.observe(p), A.observe(t));
    let g = d ? K(e) : null;
    return d && function t() {
      const r = K(e);
      g && !ee(g, r) && n(), g = r, _ = requestAnimationFrame(t);
    }(), n(), () => {
      var e;
      f.forEach(e => {
        a && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n);
      }), null == h || h(), null == (e = A) || e.disconnect(), A = null, d && cancelAnimationFrame(_);
    };
  }
  const ne = I,
    re = function (e) {
      return void 0 === e && (e = 0), {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const {
              x: a,
              y: i,
              placement: o,
              middlewareData: s
            } = t,
            l = await async function (e, t) {
              const {
                  placement: n,
                  platform: r,
                  elements: a
                } = e,
                i = await (null == r.isRTL ? void 0 : r.isRTL(a.floating)),
                o = _(n),
                s = m(n),
                l = "y" === v(n),
                c = B.has(o) ? -1 : 1,
                u = i && l ? -1 : 1,
                d = h(t, e);
              let {
                mainAxis: p,
                crossAxis: f,
                alignmentAxis: A
              } = "number" == typeof d ? {
                mainAxis: d,
                crossAxis: 0,
                alignmentAxis: null
              } : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis
              };
              return s && "number" == typeof A && (f = "end" === s ? -1 * A : A), l ? {
                x: f * u,
                y: p * c
              } : {
                x: p * c,
                y: f * u
              };
            }(t, e);
          return o === (null == (n = s.offset) ? void 0 : n.placement) && null != (r = s.arrow) && r.alignmentOffset ? {} : {
            x: a + l.x,
            y: i + l.y,
            data: {
              ...l,
              placement: o
            }
          };
        }
      };
    },
    ae = function (e) {
      return void 0 === e && (e = {}), {
        name: "autoPlacement",
        options: e,
        async fn(t) {
          var n, r, a;
          const {
              rects: o,
              middlewareData: s,
              placement: l,
              platform: c,
              elements: u
            } = t,
            {
              crossAxis: d = !1,
              alignment: p,
              allowedPlacements: f = i,
              autoAlignment: A = !0,
              ...g
            } = h(e, t),
            y = void 0 !== p || f === i ? function (e, t, n) {
              return (e ? [...n.filter(t => m(t) === e), ...n.filter(t => m(t) !== e)] : n.filter(e => _(e) === e)).filter(n => !e || m(n) === e || !!t && w(n) !== n);
            }(p || null, A, f) : f,
            v = await I(t, g),
            E = (null == (n = s.autoPlacement) ? void 0 : n.index) || 0,
            C = y[E];
          if (null == C) return {};
          const O = b(C, o, await (null == c.isRTL ? void 0 : c.isRTL(u.floating)));
          if (l !== C) return {
            reset: {
              placement: y[0]
            }
          };
          const M = [v[_(C)], v[O[0]], v[O[1]]],
            S = [...((null == (r = s.autoPlacement) ? void 0 : r.overflows) || []), {
              placement: C,
              overflows: M
            }],
            T = y[E + 1];
          if (T) return {
            data: {
              index: E + 1,
              overflows: S
            },
            reset: {
              placement: T
            }
          };
          const k = S.map(e => {
              const t = m(e.placement);
              return [e.placement, t && d ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0], e.overflows];
            }).sort((e, t) => e[1] - t[1]),
            x = (null == (a = k.filter(e => e[2].slice(0, m(e[0]) ? 2 : 3).every(e => e <= 0))[0]) ? void 0 : a[0]) || k[0][0];
          return x !== l ? {
            data: {
              index: E + 1,
              overflows: S
            },
            reset: {
              placement: x
            }
          } : {};
        }
      };
    },
    ie = function (e) {
      return void 0 === e && (e = {}), {
        name: "shift",
        options: e,
        async fn(t) {
          const {
              x: n,
              y: r,
              placement: a
            } = t,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: s = {
                fn: e => {
                  let {
                    x: t,
                    y: n
                  } = e;
                  return {
                    x: t,
                    y: n
                  };
                }
              },
              ...l
            } = h(e, t),
            c = {
              x: n,
              y: r
            },
            u = await I(t, l),
            d = v(_(a)),
            p = A(d);
          let m = c[p],
            g = c[d];
          if (i) {
            const e = "y" === p ? "bottom" : "right";
            m = f(m + u["y" === p ? "top" : "left"], m, m - u[e]);
          }
          if (o) {
            const e = "y" === d ? "bottom" : "right";
            g = f(g + u["y" === d ? "top" : "left"], g, g - u[e]);
          }
          const y = s.fn({
            ...t,
            [p]: m,
            [d]: g
          });
          return {
            ...y,
            data: {
              x: y.x - n,
              y: y.y - r,
              enabled: {
                [p]: i,
                [d]: o
              }
            }
          };
        }
      };
    },
    oe = function (e) {
      return void 0 === e && (e = {}), {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: a,
              middlewareData: i,
              rects: o,
              initialPlacement: s,
              platform: l,
              elements: c
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: p,
              fallbackStrategy: f = "bestFit",
              fallbackAxisSideDirection: A = "none",
              flipAlignment: g = !0,
              ...y
            } = h(e, t);
          if (null != (n = i.arrow) && n.alignmentOffset) return {};
          const E = _(a),
            k = v(s),
            x = _(s) === s,
            D = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
            P = p || (x || !g ? [T(s)] : function (e) {
              const t = T(e);
              return [w(e), t, w(t)];
            }(s)),
            L = "none" !== A;
          !p && L && P.push(...function (e, t, n, r) {
            const a = m(e);
            let i = function (e, t, n) {
              switch (e) {
                case "top":
                case "bottom":
                  return n ? t ? O : C : t ? C : O;
                case "left":
                case "right":
                  return t ? M : S;
                default:
                  return [];
              }
            }(_(e), "start" === n, r);
            return a && (i = i.map(e => e + "-" + a), t && (i = i.concat(i.map(w)))), i;
          }(s, g, A, D));
          const R = [s, ...P],
            B = await I(t, y),
            N = [];
          let U = (null == (r = i.flip) ? void 0 : r.overflows) || [];
          if (u && N.push(B[E]), d) {
            const e = b(a, o, D);
            N.push(B[e[0]], B[e[1]]);
          }
          if (U = [...U, {
            placement: a,
            overflows: N
          }], !N.every(e => e <= 0)) {
            var F, j;
            const e = ((null == (F = i.flip) ? void 0 : F.index) || 0) + 1,
              t = R[e];
            if (t && ("alignment" !== d || k === v(t) || U.every(e => v(e.placement) !== k || e.overflows[0] > 0))) return {
              data: {
                index: e,
                overflows: U
              },
              reset: {
                placement: t
              }
            };
            let n = null == (j = U.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : j.placement;
            if (!n) switch (f) {
              case "bestFit":
                {
                  var H;
                  const e = null == (H = U.filter(e => {
                    if (L) {
                      const t = v(e.placement);
                      return t === k || "y" === t;
                    }
                    return !0;
                  }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : H[0];
                  e && (n = e);
                  break;
                }
              case "initialPlacement":
                n = s;
            }
            if (a !== n) return {
              reset: {
                placement: n
              }
            };
          }
          return {};
        }
      };
    },
    se = function (e) {
      return void 0 === e && (e = {}), {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: a,
              rects: i,
              platform: l,
              elements: c
            } = t,
            {
              apply: u = () => {},
              ...d
            } = h(e, t),
            p = await I(t, d),
            f = _(a),
            A = m(a),
            g = "y" === v(a),
            {
              width: y,
              height: E
            } = i.floating;
          let b, w;
          "top" === f || "bottom" === f ? (b = f, w = A === ((await (null == l.isRTL ? void 0 : l.isRTL(c.floating))) ? "start" : "end") ? "left" : "right") : (w = f, b = "end" === A ? "top" : "bottom");
          const C = E - p.top - p.bottom,
            O = y - p.left - p.right,
            M = o(E - p[b], C),
            S = o(y - p[w], O),
            T = !t.middlewareData.shift;
          let k = M,
            x = S;
          if (null != (n = t.middlewareData.shift) && n.enabled.x && (x = O), null != (r = t.middlewareData.shift) && r.enabled.y && (k = C), T && !A) {
            const e = s(p.left, 0),
              t = s(p.right, 0),
              n = s(p.top, 0),
              r = s(p.bottom, 0);
            g ? x = y - 2 * (0 !== e || 0 !== t ? e + t : s(p.left, p.right)) : k = E - 2 * (0 !== n || 0 !== r ? n + r : s(p.top, p.bottom));
          }
          await u({
            ...t,
            availableWidth: x,
            availableHeight: k
          });
          const D = await l.getDimensions(c.floating);
          return y !== D.width || E !== D.height ? {
            reset: {
              rects: !0
            }
          } : {};
        }
      };
    },
    le = function (e) {
      return void 0 === e && (e = {}), {
        name: "hide",
        options: e,
        async fn(t) {
          const {
              rects: n
            } = t,
            {
              strategy: r = "referenceHidden",
              ...a
            } = h(e, t);
          switch (r) {
            case "referenceHidden":
              {
                const e = P(await I(t, {
                  ...a,
                  elementContext: "reference"
                }), n.reference);
                return {
                  data: {
                    referenceHiddenOffsets: e,
                    referenceHidden: L(e)
                  }
                };
              }
            case "escaped":
              {
                const e = P(await I(t, {
                  ...a,
                  altBoundary: !0
                }), n.floating);
                return {
                  data: {
                    escapedOffsets: e,
                    escaped: L(e)
                  }
                };
              }
            default:
              return {};
          }
        }
      };
    },
    ce = e => ({
      name: "arrow",
      options: e,
      async fn(t) {
        const {
            x: n,
            y: r,
            placement: a,
            rects: i,
            platform: s,
            elements: l,
            middlewareData: c
          } = t,
          {
            element: u,
            padding: d = 0
          } = h(e, t) || {};
        if (null == u) return {};
        const p = k(d),
          _ = {
            x: n,
            y: r
          },
          A = E(a),
          y = g(A),
          v = await s.getDimensions(u),
          b = "y" === A,
          w = b ? "top" : "left",
          C = b ? "bottom" : "right",
          O = b ? "clientHeight" : "clientWidth",
          M = i.reference[y] + i.reference[A] - _[A] - i.floating[y],
          S = _[A] - i.reference[A],
          T = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(u));
        let x = T ? T[O] : 0;
        x && (await (null == s.isElement ? void 0 : s.isElement(T))) || (x = l.floating[O] || i.floating[y]);
        const D = M / 2 - S / 2,
          I = x / 2 - v[y] / 2 - 1,
          P = o(p[w], I),
          L = o(p[C], I),
          R = P,
          B = x - v[y] - L,
          N = x / 2 - v[y] / 2 + D,
          U = f(R, N, B),
          F = !c.arrow && null != m(a) && N !== U && i.reference[y] / 2 - (N < R ? P : L) - v[y] / 2 < 0,
          j = F ? N < R ? N - R : N - B : 0;
        return {
          [A]: _[A] + j,
          data: {
            [A]: U,
            centerOffset: N - U - j,
            ...(F && {
              alignmentOffset: j
            })
          },
          reset: F
        };
      }
    }),
    ue = function (e) {
      return void 0 === e && (e = {}), {
        name: "inline",
        options: e,
        async fn(t) {
          const {
              placement: n,
              elements: r,
              rects: a,
              platform: i,
              strategy: l
            } = t,
            {
              padding: c = 2,
              x: u,
              y: d
            } = h(e, t),
            p = Array.from((await (null == i.getClientRects ? void 0 : i.getClientRects(r.reference))) || []),
            f = function (e) {
              const t = e.slice().sort((e, t) => e.y - t.y),
                n = [];
              let r = null;
              for (let e = 0; e < t.length; e++) {
                const a = t[e];
                !r || a.y - r.y > r.height / 2 ? n.push([a]) : n[n.length - 1].push(a), r = a;
              }
              return n.map(e => x(R(e)));
            }(p),
            m = x(R(p)),
            A = k(c),
            g = await i.getElementRects({
              reference: {
                getBoundingClientRect: function () {
                  if (2 === f.length && f[0].left > f[1].right && null != u && null != d) return f.find(e => u > e.left - A.left && u < e.right + A.right && d > e.top - A.top && d < e.bottom + A.bottom) || m;
                  if (f.length >= 2) {
                    if ("y" === v(n)) {
                      const e = f[0],
                        t = f[f.length - 1],
                        r = "top" === _(n),
                        a = e.top,
                        i = t.bottom,
                        o = r ? e.left : t.left,
                        s = r ? e.right : t.right;
                      return {
                        top: a,
                        bottom: i,
                        left: o,
                        right: s,
                        width: s - o,
                        height: i - a,
                        x: o,
                        y: a
                      };
                    }
                    const e = "left" === _(n),
                      t = s(...f.map(e => e.right)),
                      r = o(...f.map(e => e.left)),
                      a = f.filter(n => e ? n.left === r : n.right === t),
                      i = a[0].top,
                      l = a[a.length - 1].bottom;
                    return {
                      top: i,
                      bottom: l,
                      left: r,
                      right: t,
                      width: t - r,
                      height: l - i,
                      x: r,
                      y: i
                    };
                  }
                  return m;
                }
              },
              floating: r.floating,
              strategy: l
            });
          return a.reference.x !== g.reference.x || a.reference.y !== g.reference.y || a.reference.width !== g.reference.width || a.reference.height !== g.reference.height ? {
            reset: {
              rects: g
            }
          } : {};
        }
      };
    },
    de = function (e) {
      return void 0 === e && (e = {}), {
        options: e,
        fn(t) {
          const {
              x: n,
              y: r,
              placement: a,
              rects: i,
              middlewareData: o
            } = t,
            {
              offset: s = 0,
              mainAxis: l = !0,
              crossAxis: c = !0
            } = h(e, t),
            u = {
              x: n,
              y: r
            },
            d = v(a),
            p = A(d);
          let f = u[p],
            m = u[d];
          const g = h(s, t),
            y = "number" == typeof g ? {
              mainAxis: g,
              crossAxis: 0
            } : {
              mainAxis: 0,
              crossAxis: 0,
              ...g
            };
          if (l) {
            const e = "y" === p ? "height" : "width",
              t = i.reference[p] - i.floating[e] + y.mainAxis,
              n = i.reference[p] + i.reference[e] - y.mainAxis;
            f < t ? f = t : f > n && (f = n);
          }
          if (c) {
            var E, b;
            const e = "y" === p ? "width" : "height",
              t = B.has(_(a)),
              n = i.reference[d] - i.floating[e] + (t && (null == (E = o.offset) ? void 0 : E[d]) || 0) + (t ? 0 : y.crossAxis),
              r = i.reference[d] + i.reference[e] + (t ? 0 : (null == (b = o.offset) ? void 0 : b[d]) || 0) - (t ? y.crossAxis : 0);
            m < n ? m = n : m > r && (m = r);
          }
          return {
            [p]: f,
            [d]: m
          };
        }
      };
    },
    pe = (e, t, n) => {
      const r = new Map(),
        a = {
          platform: J,
          ...n
        },
        i = {
          ...a.platform,
          _c: r
        };
      return (async (e, t, n) => {
        const {
            placement: r = "bottom",
            strategy: a = "absolute",
            middleware: i = [],
            platform: o
          } = n,
          s = i.filter(Boolean),
          l = await (null == o.isRTL ? void 0 : o.isRTL(t));
        let c = await o.getElementRects({
            reference: e,
            floating: t,
            strategy: a
          }),
          {
            x: u,
            y: d
          } = D(c, r, l),
          p = r,
          f = {},
          h = 0;
        for (let n = 0; n < s.length; n++) {
          const {
              name: i,
              fn: _
            } = s[n],
            {
              x: m,
              y: A,
              data: g,
              reset: y
            } = await _({
              x: u,
              y: d,
              initialPlacement: r,
              placement: p,
              strategy: a,
              middlewareData: f,
              rects: c,
              platform: o,
              elements: {
                reference: e,
                floating: t
              }
            });
          u = null != m ? m : u, d = null != A ? A : d, f = {
            ...f,
            [i]: {
              ...f[i],
              ...g
            }
          }, y && h <= 50 && (h++, "object" == typeof y && (y.placement && (p = y.placement), y.rects && (c = !0 === y.rects ? await o.getElementRects({
            reference: e,
            floating: t,
            strategy: a
          }) : y.rects), {
            x: u,
            y: d
          } = D(c, p, l)), n = -1);
        }
        return {
          x: u,
          y: d,
          placement: p,
          strategy: a,
          middlewareData: f
        };
      })(e, t, {
        ...a,
        platform: i
      });
    };
});
