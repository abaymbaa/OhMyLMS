// Reconstructed Webpack factory 21738; arguments retain original semantics.
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
    d = (e, t, n) => (n = null != e ? a(l(e)) : {}, u(!t && e && e.__esModule ? n : i(n, "default", {
      value: e,
      enumerable: !0
    }), e)),
    p = {};
  ((e, t) => {
    for (var n in t) i(e, n, {
      get: t[n],
      enumerable: !0
    });
  })(p, {
    ALIGN_OPTIONS: () => C,
    Anchor: () => V,
    Arrow: () => Y,
    Content: () => z,
    Popper: () => x,
    PopperAnchor: () => I,
    PopperArrow: () => F,
    PopperContent: () => B,
    Root: () => K,
    SIDE_OPTIONS: () => w,
    createPopperScope: () => S
  }), e.exports = (r = p, u(i({}, "__esModule", {
    value: !0
  }), r));
  var f = d(n(41594)),
    h = n(86306),
    _ = d(n(74205)),
    m = n(10207),
    A = n(95791),
    g = n(62053),
    y = n(80283),
    v = n(95696),
    E = n(55745),
    b = n(74848),
    w = ["top", "right", "bottom", "left"],
    C = ["start", "center", "end"],
    O = "Popper",
    [M, S] = (0, A.createContextScope)(O),
    [T, k] = M(O),
    x = e => {
      const {
          __scopePopper: t,
          children: n
        } = e,
        [r, a] = f.useState(null);
      return (0, b.jsx)(T, {
        scope: t,
        anchor: r,
        onAnchorChange: a,
        children: n
      });
    };
  x.displayName = O;
  var D = "PopperAnchor",
    I = f.forwardRef((e, t) => {
      const {
          __scopePopper: n,
          virtualRef: r,
          ...a
        } = e,
        i = k(D, n),
        o = f.useRef(null),
        s = (0, m.useComposedRefs)(t, o),
        l = f.useRef(null);
      return f.useEffect(() => {
        const e = l.current;
        l.current = r?.current || o.current, e !== l.current && i.onAnchorChange(l.current);
      }), r ? null : (0, b.jsx)(g.Primitive.div, {
        ...a,
        ref: s
      });
    });
  I.displayName = D;
  var P = "PopperContent",
    [L, R] = M(P),
    B = f.forwardRef((e, t) => {
      const {
          __scopePopper: n,
          side: r = "bottom",
          sideOffset: a = 0,
          align: i = "center",
          alignOffset: o = 0,
          arrowPadding: s = 0,
          avoidCollisions: l = !0,
          collisionBoundary: c = [],
          collisionPadding: u = 0,
          sticky: d = "partial",
          hideWhenDetached: p = !1,
          updatePositionStrategy: _ = "optimized",
          onPlaced: A,
          ...w
        } = e,
        C = k(P, n),
        [O, M] = f.useState(null),
        S = (0, m.useComposedRefs)(t, e => M(e)),
        [T, x] = f.useState(null),
        D = (0, E.useSize)(T),
        I = D?.width ?? 0,
        R = D?.height ?? 0,
        B = r + ("center" !== i ? "-" + i : ""),
        N = "number" == typeof u ? u : {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...u
        },
        U = Array.isArray(c) ? c : [c],
        F = U.length > 0,
        K = {
          padding: N,
          boundary: U.filter(j),
          altBoundary: F
        },
        {
          refs: V,
          floatingStyles: z,
          placement: Y,
          isPositioned: Q,
          middlewareData: G
        } = (0, h.useFloating)({
          strategy: "fixed",
          placement: B,
          whileElementsMounted: (...e) => (0, h.autoUpdate)(...e, {
            animationFrame: "always" === _
          }),
          elements: {
            reference: C.anchor
          },
          middleware: [(0, h.offset)({
            mainAxis: a + R,
            alignmentAxis: o
          }), l && (0, h.shift)({
            mainAxis: !0,
            crossAxis: !1,
            limiter: "partial" === d ? (0, h.limitShift)() : void 0,
            ...K
          }), l && (0, h.flip)({
            ...K
          }), (0, h.size)({
            ...K,
            apply: ({
              elements: e,
              rects: t,
              availableWidth: n,
              availableHeight: r
            }) => {
              const {
                  width: a,
                  height: i
                } = t.reference,
                o = e.floating.style;
              o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${a}px`), o.setProperty("--radix-popper-anchor-height", `${i}px`);
            }
          }), T && (0, h.arrow)({
            element: T,
            padding: s
          }), H({
            arrowWidth: I,
            arrowHeight: R
          }), p && (0, h.hide)({
            strategy: "referenceHidden",
            ...K
          })]
        }),
        [$, q] = W(Y),
        Z = (0, y.useCallbackRef)(A);
      (0, v.useLayoutEffect)(() => {
        Q && Z?.();
      }, [Q, Z]);
      const X = G.arrow?.x,
        J = G.arrow?.y,
        ee = 0 !== G.arrow?.centerOffset,
        [te, ne] = f.useState();
      return (0, v.useLayoutEffect)(() => {
        O && ne(window.getComputedStyle(O).zIndex);
      }, [O]), (0, b.jsx)("div", {
        ref: V.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: Q ? z.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: te,
          "--radix-popper-transform-origin": [G.transformOrigin?.x, G.transformOrigin?.y].join(" "),
          ...(G.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          })
        },
        dir: e.dir,
        children: (0, b.jsx)(L, {
          scope: n,
          placedSide: $,
          onArrowChange: x,
          arrowX: X,
          arrowY: J,
          shouldHideArrow: ee,
          children: (0, b.jsx)(g.Primitive.div, {
            "data-side": $,
            "data-align": q,
            ...w,
            ref: S,
            style: {
              ...w.style,
              animation: Q ? void 0 : "none"
            }
          })
        })
      });
    });
  B.displayName = P;
  var N = "PopperArrow",
    U = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    },
    F = f.forwardRef(function (e, t) {
      const {
          __scopePopper: n,
          ...r
        } = e,
        a = R(N, n),
        i = U[a.placedSide];
      return (0, b.jsx)("span", {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: (0, b.jsx)(_.Root, {
          ...r,
          ref: t,
          style: {
            ...r.style,
            display: "block"
          }
        })
      });
    });
  function j(e) {
    return null !== e;
  }
  F.displayName = N;
  var H = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
      const {
          placement: n,
          rects: r,
          middlewareData: a
        } = t,
        i = 0 !== a.arrow?.centerOffset,
        o = i ? 0 : e.arrowWidth,
        s = i ? 0 : e.arrowHeight,
        [l, c] = W(n),
        u = {
          start: "0%",
          center: "50%",
          end: "100%"
        }[c],
        d = (a.arrow?.x ?? 0) + o / 2,
        p = (a.arrow?.y ?? 0) + s / 2;
      let f = "",
        h = "";
      return "bottom" === l ? (f = i ? u : `${d}px`, h = -s + "px") : "top" === l ? (f = i ? u : `${d}px`, h = `${r.floating.height + s}px`) : "right" === l ? (f = -s + "px", h = i ? u : `${p}px`) : "left" === l && (f = `${r.floating.width + s}px`, h = i ? u : `${p}px`), {
        data: {
          x: f,
          y: h
        }
      };
    }
  });
  function W(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
  }
  var K = x,
    V = I,
    z = B,
    Y = F;
});
