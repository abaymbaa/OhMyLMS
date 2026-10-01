// Reconstructed Webpack factory 86635; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  function r() {
    return "undefined" != typeof window;
  }
  function a(e) {
    return s(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function i(e) {
    var t;
    return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
  }
  function o(e) {
    var t;
    return null == (t = (s(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
  }
  function s(e) {
    return !!r() && (e instanceof Node || e instanceof i(e).Node);
  }
  function l(e) {
    return !!r() && (e instanceof Element || e instanceof i(e).Element);
  }
  function c(e) {
    return !!r() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement);
  }
  function u(e) {
    return !(!r() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot);
  }
  n.d(t, {
    $4: () => S,
    CP: () => M,
    L9: () => O,
    Lv: () => h,
    Tc: () => b,
    Tf: () => m,
    ZU: () => p,
    _m: () => x,
    ep: () => o,
    eu: () => C,
    gJ: () => E,
    mq: () => a,
    sQ: () => v,
    sb: () => c,
    v9: () => k,
    vq: () => l,
    zk: () => i
  });
  const d = new Set(["inline", "contents"]);
  function p(e) {
    const {
      overflow: t,
      overflowX: n,
      overflowY: r,
      display: a
    } = O(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !d.has(a);
  }
  const f = new Set(["table", "td", "th"]);
  function h(e) {
    return f.has(a(e));
  }
  const _ = [":popover-open", ":modal"];
  function m(e) {
    return _.some(t => {
      try {
        return e.matches(t);
      } catch (e) {
        return !1;
      }
    });
  }
  const A = ["transform", "translate", "scale", "rotate", "perspective"],
    g = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    y = ["paint", "layout", "strict", "content"];
  function v(e) {
    const t = b(),
      n = l(e) ? O(e) : e;
    return A.some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || g.some(e => (n.willChange || "").includes(e)) || y.some(e => (n.contain || "").includes(e));
  }
  function E(e) {
    let t = S(e);
    for (; c(t) && !C(t);) {
      if (v(t)) return t;
      if (m(t)) return null;
      t = S(t);
    }
    return null;
  }
  function b() {
    return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
  }
  const w = new Set(["html", "body", "#document"]);
  function C(e) {
    return w.has(a(e));
  }
  function O(e) {
    return i(e).getComputedStyle(e);
  }
  function M(e) {
    return l(e) ? {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    } : {
      scrollLeft: e.scrollX,
      scrollTop: e.scrollY
    };
  }
  function S(e) {
    if ("html" === a(e)) return e;
    const t = e.assignedSlot || e.parentNode || u(e) && e.host || o(e);
    return u(t) ? t.host : t;
  }
  function T(e) {
    const t = S(e);
    return C(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : c(t) && p(t) ? t : T(t);
  }
  function k(e, t, n) {
    var r;
    void 0 === t && (t = []), void 0 === n && (n = !0);
    const a = T(e),
      o = a === (null == (r = e.ownerDocument) ? void 0 : r.body),
      s = i(a);
    if (o) {
      const e = x(s);
      return t.concat(s, s.visualViewport || [], p(a) ? a : [], e && n ? k(e) : []);
    }
    return t.concat(a, k(a, [], n));
  }
  function x(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
  }
});
