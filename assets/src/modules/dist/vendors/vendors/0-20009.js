// Reconstructed Webpack factory 20009; arguments retain original semantics.
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
    Anchor: () => re,
    Arrow: () => le,
    Close: () => se,
    Content: () => oe,
    Popover: () => N,
    PopoverAnchor: () => F,
    PopoverArrow: () => ee,
    PopoverClose: () => J,
    PopoverContent: () => Q,
    PopoverPortal: () => z,
    PopoverTrigger: () => H,
    Portal: () => ie,
    Root: () => ne,
    Trigger: () => ae,
    createPopoverScope: () => P
  }), e.exports = (r = p, u(i({}, "__esModule", {
    value: !0
  }), r));
  var f = d(n(41594)),
    h = n(80739),
    _ = n(10207),
    m = n(95791),
    A = n(14614),
    g = n(21983),
    y = n(6345),
    v = n(6411),
    E = d(n(21738)),
    b = n(21738),
    w = n(93086),
    C = n(55575),
    O = n(62053),
    M = n(56612),
    S = n(22971),
    T = n(58241),
    k = n(77600),
    x = n(74848),
    D = "Popover",
    [I, P] = (0, m.createContextScope)(D, [b.createPopperScope]),
    L = (0, b.createPopperScope)(),
    [R, B] = I(D),
    N = e => {
      const {
          __scopePopover: t,
          children: n,
          open: r,
          defaultOpen: a,
          onOpenChange: i,
          modal: o = !1
        } = e,
        s = L(t),
        l = f.useRef(null),
        [c, u] = f.useState(!1),
        [d, p] = (0, S.useControllableState)({
          prop: r,
          defaultProp: a ?? !1,
          onChange: i,
          caller: D
        });
      return (0, x.jsx)(E.Root, {
        ...s,
        children: (0, x.jsx)(R, {
          scope: t,
          contentId: (0, v.useId)(),
          triggerRef: l,
          open: d,
          onOpenChange: p,
          onOpenToggle: f.useCallback(() => p(e => !e), [p]),
          hasCustomAnchor: c,
          onCustomAnchorAdd: f.useCallback(() => u(!0), []),
          onCustomAnchorRemove: f.useCallback(() => u(!1), []),
          modal: o,
          children: n
        })
      });
    };
  N.displayName = D;
  var U = "PopoverAnchor",
    F = f.forwardRef((e, t) => {
      const {
          __scopePopover: n,
          ...r
        } = e,
        a = B(U, n),
        i = L(n),
        {
          onCustomAnchorAdd: o,
          onCustomAnchorRemove: s
        } = a;
      return f.useEffect(() => (o(), () => s()), [o, s]), (0, x.jsx)(E.Anchor, {
        ...i,
        ...r,
        ref: t
      });
    });
  F.displayName = U;
  var j = "PopoverTrigger",
    H = f.forwardRef((e, t) => {
      const {
          __scopePopover: n,
          ...r
        } = e,
        a = B(j, n),
        i = L(n),
        o = (0, _.useComposedRefs)(t, a.triggerRef),
        s = (0, x.jsx)(O.Primitive.button, {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": a.open,
          "aria-controls": a.contentId,
          "data-state": te(a.open),
          ...r,
          ref: o,
          onClick: (0, h.composeEventHandlers)(e.onClick, a.onOpenToggle)
        });
      return a.hasCustomAnchor ? s : (0, x.jsx)(E.Anchor, {
        asChild: !0,
        ...i,
        children: s
      });
    });
  H.displayName = j;
  var W = "PopoverPortal",
    [K, V] = I(W, {
      forceMount: void 0
    }),
    z = e => {
      const {
          __scopePopover: t,
          forceMount: n,
          children: r,
          container: a
        } = e,
        i = B(W, t);
      return (0, x.jsx)(K, {
        scope: t,
        forceMount: n,
        children: (0, x.jsx)(C.Presence, {
          present: n || i.open,
          children: (0, x.jsx)(w.Portal, {
            asChild: !0,
            container: a,
            children: r
          })
        })
      });
    };
  z.displayName = W;
  var Y = "PopoverContent",
    Q = f.forwardRef((e, t) => {
      const n = V(Y, e.__scopePopover),
        {
          forceMount: r = n.forceMount,
          ...a
        } = e,
        i = B(Y, e.__scopePopover);
      return (0, x.jsx)(C.Presence, {
        present: r || i.open,
        children: i.modal ? (0, x.jsx)($, {
          ...a,
          ref: t
        }) : (0, x.jsx)(q, {
          ...a,
          ref: t
        })
      });
    });
  Q.displayName = Y;
  var G = (0, M.createSlot)("PopoverContent.RemoveScroll"),
    $ = f.forwardRef((e, t) => {
      const n = B(Y, e.__scopePopover),
        r = f.useRef(null),
        a = (0, _.useComposedRefs)(t, r),
        i = f.useRef(!1);
      return f.useEffect(() => {
        const e = r.current;
        if (e) return (0, T.hideOthers)(e);
      }, []), (0, x.jsx)(k.RemoveScroll, {
        as: G,
        allowPinchZoom: !0,
        children: (0, x.jsx)(Z, {
          ...e,
          ref: a,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: (0, h.composeEventHandlers)(e.onCloseAutoFocus, e => {
            e.preventDefault(), i.current || n.triggerRef.current?.focus();
          }),
          onPointerDownOutside: (0, h.composeEventHandlers)(e.onPointerDownOutside, e => {
            const t = e.detail.originalEvent,
              n = 0 === t.button && !0 === t.ctrlKey,
              r = 2 === t.button || n;
            i.current = r;
          }, {
            checkForDefaultPrevented: !1
          }),
          onFocusOutside: (0, h.composeEventHandlers)(e.onFocusOutside, e => e.preventDefault(), {
            checkForDefaultPrevented: !1
          })
        })
      });
    }),
    q = f.forwardRef((e, t) => {
      const n = B(Y, e.__scopePopover),
        r = f.useRef(!1),
        a = f.useRef(!1);
      return (0, x.jsx)(Z, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: t => {
          e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, a.current = !1;
        },
        onInteractOutside: t => {
          e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (a.current = !0));
          const i = t.target,
            o = n.triggerRef.current?.contains(i);
          o && t.preventDefault(), "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault();
        }
      });
    }),
    Z = f.forwardRef((e, t) => {
      const {
          __scopePopover: n,
          trapFocus: r,
          onOpenAutoFocus: a,
          onCloseAutoFocus: i,
          disableOutsidePointerEvents: o,
          onEscapeKeyDown: s,
          onPointerDownOutside: l,
          onFocusOutside: c,
          onInteractOutside: u,
          ...d
        } = e,
        p = B(Y, n),
        f = L(n);
      return (0, g.useFocusGuards)(), (0, x.jsx)(y.FocusScope, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: a,
        onUnmountAutoFocus: i,
        children: (0, x.jsx)(A.DismissableLayer, {
          asChild: !0,
          disableOutsidePointerEvents: o,
          onInteractOutside: u,
          onEscapeKeyDown: s,
          onPointerDownOutside: l,
          onFocusOutside: c,
          onDismiss: () => p.onOpenChange(!1),
          children: (0, x.jsx)(E.Content, {
            "data-state": te(p.open),
            role: "dialog",
            id: p.contentId,
            ...f,
            ...d,
            ref: t,
            style: {
              ...d.style,
              "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
            }
          })
        })
      });
    }),
    X = "PopoverClose",
    J = f.forwardRef((e, t) => {
      const {
          __scopePopover: n,
          ...r
        } = e,
        a = B(X, n);
      return (0, x.jsx)(O.Primitive.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: (0, h.composeEventHandlers)(e.onClick, () => a.onOpenChange(!1))
      });
    });
  J.displayName = X;
  var ee = f.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        ...r
      } = e,
      a = L(n);
    return (0, x.jsx)(E.Arrow, {
      ...a,
      ...r,
      ref: t
    });
  });
  function te(e) {
    return e ? "open" : "closed";
  }
  ee.displayName = "PopoverArrow";
  var ne = N,
    re = F,
    ae = H,
    ie = z,
    oe = Q,
    se = J,
    le = ee;
});
