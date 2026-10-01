// Reconstructed Webpack factory 80739; arguments retain original semantics.
(e => {
  "use strict";

  var t,
    n = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    a = Object.getOwnPropertyNames,
    i = Object.prototype.hasOwnProperty,
    o = {};
  ((e, t) => {
    for (var r in t) n(e, r, {
      get: t[r],
      enumerable: !0
    });
  })(o, {
    canUseDOM: () => s,
    composeEventHandlers: () => l,
    getActiveElement: () => d,
    getOwnerDocument: () => u,
    getOwnerWindow: () => c,
    isFrame: () => p
  }), e.exports = (t = o, ((e, t, o, s) => {
    if (t && "object" == typeof t || "function" == typeof t) for (let o of a(t)) i.call(e, o) || undefined === o || n(e, o, {
      get: () => t[o],
      enumerable: !(s = r(t, o)) || s.enumerable
    });
    return e;
  })(n({}, "__esModule", {
    value: !0
  }), t));
  var s = !("undefined" == typeof window || !window.document || !window.document.createElement);
  function l(e, t, {
    checkForDefaultPrevented: n = !0
  } = {}) {
    return function (r) {
      if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r);
    };
  }
  function c(e) {
    if (!s) throw new Error("Cannot access window outside of the DOM");
    return e?.ownerDocument?.defaultView ?? window;
  }
  function u(e) {
    if (!s) throw new Error("Cannot access document outside of the DOM");
    return e?.ownerDocument ?? document;
  }
  function d(e, t = !1) {
    const {
      activeElement: n
    } = u(e);
    if (!n?.nodeName) return null;
    if (p(n) && n.contentDocument) return d(n.contentDocument.body, t);
    if (t) {
      const e = n.getAttribute("aria-activedescendant");
      if (e) {
        const t = u(n).getElementById(e);
        if (t) return t;
      }
    }
    return n;
  }
  function p(e) {
    return "IFRAME" === e.tagName;
  }
});
