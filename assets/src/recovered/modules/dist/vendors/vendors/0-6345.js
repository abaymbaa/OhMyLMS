// Reconstructed Webpack factory 6345; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  var r,
    a = Object.create,
    i = Object.defineProperty,
    o = Object.getOwnPropertyDescriptor,
    s = Object.getOwnPropertyNames,
    l = Object.getPrototypeOf,
    c = Object.prototype.hasOwnProperty,
    u = (e, t, n, r) => {
      if (t && "object" == typeof t || "function" == typeof t) for (let a of s(t)) c.call(e, a) || a === n || i(e, a, {
        get: () => t[a],
        enumerable: !(r = o(t, a)) || r.enumerable
      });
      return e;
    },
    d = {};
  ((e, t) => {
    for (var n in t) i(e, n, {
      get: t[n],
      enumerable: !0
    });
  })(d, {
    FocusScope: () => v,
    Root: () => S
  }), e.exports = (r = d, u(i({}, "__esModule", {
    value: !0
  }), r));
  var p = ((e, t, n) => (n = null != e ? a(l(e)) : {}, u(e && e.__esModule ? n : i(n, "default", {
      value: e,
      enumerable: !0
    }), e)))(n(41594)),
    f = n(10207),
    h = n(62053),
    _ = n(80283),
    m = n(74848),
    A = "focusScope.autoFocusOnMount",
    g = "focusScope.autoFocusOnUnmount",
    y = {
      bubbles: !1,
      cancelable: !0
    },
    v = p.forwardRef((e, t) => {
      const {
          loop: n = !1,
          trapped: r = !1,
          onMountAutoFocus: a,
          onUnmountAutoFocus: i,
          ...o
        } = e,
        [s, l] = p.useState(null),
        c = (0, _.useCallbackRef)(a),
        u = (0, _.useCallbackRef)(i),
        d = p.useRef(null),
        v = (0, f.useComposedRefs)(t, e => l(e)),
        w = p.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          }
        }).current;
      p.useEffect(() => {
        if (r) {
          let e = function (e) {
              if (w.paused || !s) return;
              const t = e.target;
              s.contains(t) ? d.current = t : C(d.current, {
                select: !0
              });
            },
            t = function (e) {
              if (w.paused || !s) return;
              const t = e.relatedTarget;
              null !== t && (s.contains(t) || C(d.current, {
                select: !0
              }));
            },
            n = function (e) {
              if (document.activeElement === document.body) for (const t of e) t.removedNodes.length > 0 && C(s);
            };
          document.addEventListener("focusin", e), document.addEventListener("focusout", t);
          const r = new MutationObserver(n);
          return s && r.observe(s, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
          };
        }
      }, [r, s, w.paused]), p.useEffect(() => {
        if (s) {
          O.add(w);
          const e = document.activeElement;
          if (!s.contains(e)) {
            const t = new CustomEvent(A, y);
            s.addEventListener(A, c), s.dispatchEvent(t), t.defaultPrevented || (function (e, {
              select: t = !1
            } = {}) {
              const n = document.activeElement;
              for (const r of e) if (C(r, {
                select: t
              }), document.activeElement !== n) return;
            }(E(s).filter(e => "A" !== e.tagName), {
              select: !0
            }), document.activeElement === e && C(s));
          }
          return () => {
            s.removeEventListener(A, c), setTimeout(() => {
              const t = new CustomEvent(g, y);
              s.addEventListener(g, u), s.dispatchEvent(t), t.defaultPrevented || C(e ?? document.body, {
                select: !0
              }), s.removeEventListener(g, u), O.remove(w);
            }, 0);
          };
        }
      }, [s, c, u, w]);
      const M = p.useCallback(e => {
        if (!n && !r) return;
        if (w.paused) return;
        const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
          a = document.activeElement;
        if (t && a) {
          const t = e.currentTarget,
            [r, i] = function (e) {
              const t = E(e);
              return [b(t, e), b(t.reverse(), e)];
            }(t);
          r && i ? e.shiftKey || a !== i ? e.shiftKey && a === r && (e.preventDefault(), n && C(i, {
            select: !0
          })) : (e.preventDefault(), n && C(r, {
            select: !0
          })) : a === t && e.preventDefault();
        }
      }, [n, r, w.paused]);
      return (0, m.jsx)(h.Primitive.div, {
        tabIndex: -1,
        ...o,
        ref: v,
        onKeyDown: M
      });
    });
  function E(e) {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: e => {
          const t = "INPUT" === e.tagName && "hidden" === e.type;
          return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
    for (; n.nextNode();) t.push(n.currentNode);
    return t;
  }
  function b(e, t) {
    for (const n of e) if (!w(n, {
      upTo: t
    })) return n;
  }
  function w(e, {
    upTo: t
  }) {
    if ("hidden" === getComputedStyle(e).visibility) return !0;
    for (; e;) {
      if (void 0 !== t && e === t) return !1;
      if ("none" === getComputedStyle(e).display) return !0;
      e = e.parentElement;
    }
    return !1;
  }
  function C(e, {
    select: t = !1
  } = {}) {
    if (e && e.focus) {
      const n = document.activeElement;
      e.focus({
        preventScroll: !0
      }), e !== n && function (e) {
        return e instanceof HTMLInputElement && "select" in e;
      }(e) && t && e.select();
    }
  }
  v.displayName = "FocusScope";
  var O = function () {
    let e = [];
    return {
      add(t) {
        const n = e[0];
        t !== n && n?.pause(), e = M(e, t), e.unshift(t);
      },
      remove(t) {
        e = M(e, t), e[0]?.resume();
      }
    };
  }();
  function M(e, t) {
    const n = [...e],
      r = n.indexOf(t);
    return -1 !== r && n.splice(r, 1), n;
  }
  var S = v;
});
