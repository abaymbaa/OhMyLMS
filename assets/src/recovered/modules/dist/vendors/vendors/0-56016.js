// Reconstructed Webpack factory 56016; arguments retain original semantics.
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
    Item: () => j,
    Root: () => F,
    RovingFocusGroup: () => P,
    RovingFocusGroupItem: () => B,
    createRovingFocusGroupScope: () => x
  }), e.exports = (r = d, u(i({}, "__esModule", {
    value: !0
  }), r));
  var p = ((e, t, n) => (n = null != e ? a(l(e)) : {}, u(e && e.__esModule ? n : i(n, "default", {
      value: e,
      enumerable: !0
    }), e)))(n(41594)),
    f = n(80739),
    h = n(89656),
    _ = n(10207),
    m = n(95791),
    A = n(6411),
    g = n(62053),
    y = n(80283),
    v = n(22971),
    E = n(62585),
    b = n(74848),
    w = "rovingFocusGroup.onEntryFocus",
    C = {
      bubbles: !1,
      cancelable: !0
    },
    O = "RovingFocusGroup",
    [M, S, T] = (0, h.createCollection)(O),
    [k, x] = (0, m.createContextScope)(O, [T]),
    [D, I] = k(O),
    P = p.forwardRef((e, t) => (0, b.jsx)(M.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: (0, b.jsx)(M.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: (0, b.jsx)(L, {
          ...e,
          ref: t
        })
      })
    }));
  P.displayName = O;
  var L = p.forwardRef((e, t) => {
      const {
          __scopeRovingFocusGroup: n,
          orientation: r,
          loop: a = !1,
          dir: i,
          currentTabStopId: o,
          defaultCurrentTabStopId: s,
          onCurrentTabStopIdChange: l,
          onEntryFocus: c,
          preventScrollOnEntryFocus: u = !1,
          ...d
        } = e,
        h = p.useRef(null),
        m = (0, _.useComposedRefs)(t, h),
        A = (0, E.useDirection)(i),
        [M, T] = (0, v.useControllableState)({
          prop: o,
          defaultProp: s ?? null,
          onChange: l,
          caller: O
        }),
        [k, x] = p.useState(!1),
        I = (0, y.useCallbackRef)(c),
        P = S(n),
        L = p.useRef(!1),
        [R, B] = p.useState(0);
      return p.useEffect(() => {
        const e = h.current;
        if (e) return e.addEventListener(w, I), () => e.removeEventListener(w, I);
      }, [I]), (0, b.jsx)(D, {
        scope: n,
        orientation: r,
        dir: A,
        loop: a,
        currentTabStopId: M,
        onItemFocus: p.useCallback(e => T(e), [T]),
        onItemShiftTab: p.useCallback(() => x(!0), []),
        onFocusableItemAdd: p.useCallback(() => B(e => e + 1), []),
        onFocusableItemRemove: p.useCallback(() => B(e => e - 1), []),
        children: (0, b.jsx)(g.Primitive.div, {
          tabIndex: k || 0 === R ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: m,
          style: {
            outline: "none",
            ...e.style
          },
          onMouseDown: (0, f.composeEventHandlers)(e.onMouseDown, () => {
            L.current = !0;
          }),
          onFocus: (0, f.composeEventHandlers)(e.onFocus, e => {
            const t = !L.current;
            if (e.target === e.currentTarget && t && !k) {
              const t = new CustomEvent(w, C);
              if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                const e = P().filter(e => e.focusable);
                U([e.find(e => e.active), e.find(e => e.id === M), ...e].filter(Boolean).map(e => e.ref.current), u);
              }
            }
            L.current = !1;
          }),
          onBlur: (0, f.composeEventHandlers)(e.onBlur, () => x(!1))
        })
      });
    }),
    R = "RovingFocusGroupItem",
    B = p.forwardRef((e, t) => {
      const {
          __scopeRovingFocusGroup: n,
          focusable: r = !0,
          active: a = !1,
          tabStopId: i,
          children: o,
          ...s
        } = e,
        l = (0, A.useId)(),
        c = i || l,
        u = I(R, n),
        d = u.currentTabStopId === c,
        h = S(n),
        {
          onFocusableItemAdd: _,
          onFocusableItemRemove: m,
          currentTabStopId: y
        } = u;
      return p.useEffect(() => {
        if (r) return _(), () => m();
      }, [r, _, m]), (0, b.jsx)(M.ItemSlot, {
        scope: n,
        id: c,
        focusable: r,
        active: a,
        children: (0, b.jsx)(g.Primitive.span, {
          tabIndex: d ? 0 : -1,
          "data-orientation": u.orientation,
          ...s,
          ref: t,
          onMouseDown: (0, f.composeEventHandlers)(e.onMouseDown, e => {
            r ? u.onItemFocus(c) : e.preventDefault();
          }),
          onFocus: (0, f.composeEventHandlers)(e.onFocus, () => u.onItemFocus(c)),
          onKeyDown: (0, f.composeEventHandlers)(e.onKeyDown, e => {
            if ("Tab" === e.key && e.shiftKey) return void u.onItemShiftTab();
            if (e.target !== e.currentTarget) return;
            const t = function (e, t, n) {
              const r = function (e, t) {
                return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e;
              }(e.key, n);
              return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r) ? void 0 : N[r];
            }(e, u.orientation, u.dir);
            if (void 0 !== t) {
              if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
              e.preventDefault();
              let a = h().filter(e => e.focusable).map(e => e.ref.current);
              if ("last" === t) a.reverse();else if ("prev" === t || "next" === t) {
                "prev" === t && a.reverse();
                const i = a.indexOf(e.currentTarget);
                a = u.loop ? (r = i + 1, (n = a).map((e, t) => n[(r + t) % n.length])) : a.slice(i + 1);
              }
              setTimeout(() => U(a));
            }
            var n, r;
          }),
          children: "function" == typeof o ? o({
            isCurrentTabStop: d,
            hasTabStop: null != y
          }) : o
        })
      });
    });
  B.displayName = R;
  var N = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function U(e, t = !1) {
    const n = document.activeElement;
    for (const r of e) {
      if (r === n) return;
      if (r.focus({
        preventScroll: t
      }), document.activeElement !== n) return;
    }
  }
  var F = P,
    j = B;
});
