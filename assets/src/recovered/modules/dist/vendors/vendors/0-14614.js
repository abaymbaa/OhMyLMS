// Reconstructed Webpack factory 14614; arguments retain original semantics.
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
    Branch: () => S,
    DismissableLayer: () => b,
    DismissableLayerBranch: () => w,
    Root: () => M
  }), e.exports = (r = d, u(i({}, "__esModule", {
    value: !0
  }), r));
  var p,
    f = ((e, t, n) => (n = null != e ? a(l(e)) : {}, u(e && e.__esModule ? n : i(n, "default", {
      value: e,
      enumerable: !0
    }), e)))(n(41594)),
    h = n(80739),
    _ = n(62053),
    m = n(10207),
    A = n(80283),
    g = n(32905),
    y = n(74848),
    v = "dismissableLayer.update",
    E = f.createContext({
      layers: new Set(),
      layersWithOutsidePointerEventsDisabled: new Set(),
      branches: new Set()
    }),
    b = f.forwardRef((e, t) => {
      const {
          disableOutsidePointerEvents: n = !1,
          onEscapeKeyDown: r,
          onPointerDownOutside: a,
          onFocusOutside: i,
          onInteractOutside: o,
          onDismiss: s,
          ...l
        } = e,
        c = f.useContext(E),
        [u, d] = f.useState(null),
        b = u?.ownerDocument ?? globalThis?.document,
        [, w] = f.useState({}),
        M = (0, m.useComposedRefs)(t, e => d(e)),
        S = Array.from(c.layers),
        [T] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
        k = S.indexOf(T),
        x = u ? S.indexOf(u) : -1,
        D = c.layersWithOutsidePointerEventsDisabled.size > 0,
        I = x >= k,
        P = function (e, t = globalThis?.document) {
          const n = (0, A.useCallbackRef)(e),
            r = f.useRef(!1),
            a = f.useRef(() => {});
          return f.useEffect(() => {
            const e = e => {
                if (e.target && !r.current) {
                  let r = function () {
                    O("dismissableLayer.pointerDownOutside", n, i, {
                      discrete: !0
                    });
                  };
                  const i = {
                    originalEvent: e
                  };
                  "touch" === e.pointerType ? (t.removeEventListener("click", a.current), a.current = r, t.addEventListener("click", a.current, {
                    once: !0
                  })) : r();
                } else t.removeEventListener("click", a.current);
                r.current = !1;
              },
              i = window.setTimeout(() => {
                t.addEventListener("pointerdown", e);
              }, 0);
            return () => {
              window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", a.current);
            };
          }, [t, n]), {
            onPointerDownCapture: () => r.current = !0
          };
        }(e => {
          const t = e.target,
            n = [...c.branches].some(e => e.contains(t));
          I && !n && (a?.(e), o?.(e), e.defaultPrevented || s?.());
        }, b),
        L = function (e, t = globalThis?.document) {
          const n = (0, A.useCallbackRef)(e),
            r = f.useRef(!1);
          return f.useEffect(() => {
            const e = e => {
              e.target && !r.current && O("dismissableLayer.focusOutside", n, {
                originalEvent: e
              }, {
                discrete: !1
              });
            };
            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
          }, [t, n]), {
            onFocusCapture: () => r.current = !0,
            onBlurCapture: () => r.current = !1
          };
        }(e => {
          const t = e.target;
          [...c.branches].some(e => e.contains(t)) || (i?.(e), o?.(e), e.defaultPrevented || s?.());
        }, b);
      return (0, g.useEscapeKeydown)(e => {
        x === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
      }, b), f.useEffect(() => {
        if (u) return n && (0 === c.layersWithOutsidePointerEventsDisabled.size && (p = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), C(), () => {
          n && 1 === c.layersWithOutsidePointerEventsDisabled.size && (b.body.style.pointerEvents = p);
        };
      }, [u, b, n, c]), f.useEffect(() => () => {
        u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), C());
      }, [u, c]), f.useEffect(() => {
        const e = () => w({});
        return document.addEventListener(v, e), () => document.removeEventListener(v, e);
      }, []), (0, y.jsx)(_.Primitive.div, {
        ...l,
        ref: M,
        style: {
          pointerEvents: D ? I ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: (0, h.composeEventHandlers)(e.onFocusCapture, L.onFocusCapture),
        onBlurCapture: (0, h.composeEventHandlers)(e.onBlurCapture, L.onBlurCapture),
        onPointerDownCapture: (0, h.composeEventHandlers)(e.onPointerDownCapture, P.onPointerDownCapture)
      });
    });
  b.displayName = "DismissableLayer";
  var w = f.forwardRef((e, t) => {
    const n = f.useContext(E),
      r = f.useRef(null),
      a = (0, m.useComposedRefs)(t, r);
    return f.useEffect(() => {
      const e = r.current;
      if (e) return n.branches.add(e), () => {
        n.branches.delete(e);
      };
    }, [n.branches]), (0, y.jsx)(_.Primitive.div, {
      ...e,
      ref: a
    });
  });
  function C() {
    const e = new CustomEvent(v);
    document.dispatchEvent(e);
  }
  function O(e, t, n, {
    discrete: r
  }) {
    const a = n.originalEvent.target,
      i = new CustomEvent(e, {
        bubbles: !1,
        cancelable: !0,
        detail: n
      });
    t && a.addEventListener(e, t, {
      once: !0
    }), r ? (0, _.dispatchDiscreteCustomEvent)(a, i) : a.dispatchEvent(i);
  }
  w.displayName = "DismissableLayerBranch";
  var M = b,
    S = w;
});
