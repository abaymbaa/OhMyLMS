// Reconstructed Webpack factory 45399; arguments retain original semantics.
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
    Arrow: () => ie,
    CheckboxItem: () => ee,
    Content: () => q,
    DropdownMenu: () => k,
    DropdownMenuArrow: () => K,
    DropdownMenuCheckboxItem: () => U,
    DropdownMenuContent: () => L,
    DropdownMenuGroup: () => R,
    DropdownMenuItem: () => N,
    DropdownMenuItemIndicator: () => H,
    DropdownMenuLabel: () => B,
    DropdownMenuPortal: () => I,
    DropdownMenuRadioGroup: () => F,
    DropdownMenuRadioItem: () => j,
    DropdownMenuSeparator: () => W,
    DropdownMenuSub: () => V,
    DropdownMenuSubContent: () => Y,
    DropdownMenuSubTrigger: () => z,
    DropdownMenuTrigger: () => D,
    Group: () => Z,
    Item: () => J,
    ItemIndicator: () => re,
    Label: () => X,
    Portal: () => $,
    RadioGroup: () => te,
    RadioItem: () => ne,
    Root: () => Q,
    Separator: () => ae,
    Sub: () => oe,
    SubContent: () => le,
    SubTrigger: () => se,
    Trigger: () => G,
    createDropdownMenuScope: () => O
  }), e.exports = (r = p, u(i({}, "__esModule", {
    value: !0
  }), r));
  var f = d(n(41594)),
    h = n(80739),
    _ = n(10207),
    m = n(95791),
    A = n(22971),
    g = n(62053),
    y = d(n(91025)),
    v = n(91025),
    E = n(6411),
    b = n(74848),
    w = "DropdownMenu",
    [C, O] = (0, m.createContextScope)(w, [v.createMenuScope]),
    M = (0, v.createMenuScope)(),
    [S, T] = C(w),
    k = e => {
      const {
          __scopeDropdownMenu: t,
          children: n,
          dir: r,
          open: a,
          defaultOpen: i,
          onOpenChange: o,
          modal: s = !0
        } = e,
        l = M(t),
        c = f.useRef(null),
        [u, d] = (0, A.useControllableState)({
          prop: a,
          defaultProp: i ?? !1,
          onChange: o,
          caller: w
        });
      return (0, b.jsx)(S, {
        scope: t,
        triggerId: (0, E.useId)(),
        triggerRef: c,
        contentId: (0, E.useId)(),
        open: u,
        onOpenChange: d,
        onOpenToggle: f.useCallback(() => d(e => !e), [d]),
        modal: s,
        children: (0, b.jsx)(y.Root, {
          ...l,
          open: u,
          onOpenChange: d,
          dir: r,
          modal: s,
          children: n
        })
      });
    };
  k.displayName = w;
  var x = "DropdownMenuTrigger",
    D = f.forwardRef((e, t) => {
      const {
          __scopeDropdownMenu: n,
          disabled: r = !1,
          ...a
        } = e,
        i = T(x, n),
        o = M(n);
      return (0, b.jsx)(y.Anchor, {
        asChild: !0,
        ...o,
        children: (0, b.jsx)(g.Primitive.button, {
          type: "button",
          id: i.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": i.open,
          "aria-controls": i.open ? i.contentId : void 0,
          "data-state": i.open ? "open" : "closed",
          "data-disabled": r ? "" : void 0,
          disabled: r,
          ...a,
          ref: (0, _.composeRefs)(t, i.triggerRef),
          onPointerDown: (0, h.composeEventHandlers)(e.onPointerDown, e => {
            r || 0 !== e.button || !1 !== e.ctrlKey || (i.onOpenToggle(), i.open || e.preventDefault());
          }),
          onKeyDown: (0, h.composeEventHandlers)(e.onKeyDown, e => {
            r || (["Enter", " "].includes(e.key) && i.onOpenToggle(), "ArrowDown" === e.key && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault());
          })
        })
      });
    });
  D.displayName = x;
  var I = e => {
    const {
        __scopeDropdownMenu: t,
        ...n
      } = e,
      r = M(t);
    return (0, b.jsx)(y.Portal, {
      ...r,
      ...n
    });
  };
  I.displayName = "DropdownMenuPortal";
  var P = "DropdownMenuContent",
    L = f.forwardRef((e, t) => {
      const {
          __scopeDropdownMenu: n,
          ...r
        } = e,
        a = T(P, n),
        i = M(n),
        o = f.useRef(!1);
      return (0, b.jsx)(y.Content, {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: (0, h.composeEventHandlers)(e.onCloseAutoFocus, e => {
          o.current || a.triggerRef.current?.focus(), o.current = !1, e.preventDefault();
        }),
        onInteractOutside: (0, h.composeEventHandlers)(e.onInteractOutside, e => {
          const t = e.detail.originalEvent,
            n = 0 === t.button && !0 === t.ctrlKey,
            r = 2 === t.button || n;
          a.modal && !r || (o.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      });
    });
  L.displayName = P;
  var R = f.forwardRef((e, t) => {
    const {
        __scopeDropdownMenu: n,
        ...r
      } = e,
      a = M(n);
    return (0, b.jsx)(y.Group, {
      ...a,
      ...r,
      ref: t
    });
  });
  R.displayName = "DropdownMenuGroup";
  var B = f.forwardRef((e, t) => {
    const {
        __scopeDropdownMenu: n,
        ...r
      } = e,
      a = M(n);
    return (0, b.jsx)(y.Label, {
      ...a,
      ...r,
      ref: t
    });
  });
  B.displayName = "DropdownMenuLabel";
  var N = f.forwardRef((e, t) => {
    const {
        __scopeDropdownMenu: n,
        ...r
      } = e,
      a = M(n);
    return (0, b.jsx)(y.Item, {
      ...a,
      ...r,
      ref: t
    });
  });
  N.displayName = "DropdownMenuItem";
  var U = f.forwardRef((e, t) => {
    const {
        __scopeDropdownMenu: n,
        ...r
      } = e,
      a = M(n);
    return (0, b.jsx)(y.CheckboxItem, {
      ...a,
      ...r,
      ref: t
    });
  });
  U.displayName = "DropdownMenuCheckboxItem";
  var F = f.forwardRef((e, t) => {
    const {
        __scopeDropdownMenu: n,
        ...r
      } = e,
      a = M(n);
    return (0, b.jsx)(y.RadioGroup, {
      ...a,
      ...r,
      ref: t
    });
  });
  F.displayName = "DropdownMenuRadioGroup";
  var j = f.forwardRef((e, t) => {
    const {
        __scopeDropdownMenu: n,
        ...r
      } = e,
      a = M(n);
    return (0, b.jsx)(y.RadioItem, {
      ...a,
      ...r,
      ref: t
    });
  });
  j.displayName = "DropdownMenuRadioItem";
  var H = f.forwardRef((e, t) => {
    const {
        __scopeDropdownMenu: n,
        ...r
      } = e,
      a = M(n);
    return (0, b.jsx)(y.ItemIndicator, {
      ...a,
      ...r,
      ref: t
    });
  });
  H.displayName = "DropdownMenuItemIndicator";
  var W = f.forwardRef((e, t) => {
    const {
        __scopeDropdownMenu: n,
        ...r
      } = e,
      a = M(n);
    return (0, b.jsx)(y.Separator, {
      ...a,
      ...r,
      ref: t
    });
  });
  W.displayName = "DropdownMenuSeparator";
  var K = f.forwardRef((e, t) => {
    const {
        __scopeDropdownMenu: n,
        ...r
      } = e,
      a = M(n);
    return (0, b.jsx)(y.Arrow, {
      ...a,
      ...r,
      ref: t
    });
  });
  K.displayName = "DropdownMenuArrow";
  var V = e => {
      const {
          __scopeDropdownMenu: t,
          children: n,
          open: r,
          onOpenChange: a,
          defaultOpen: i
        } = e,
        o = M(t),
        [s, l] = (0, A.useControllableState)({
          prop: r,
          defaultProp: i ?? !1,
          onChange: a,
          caller: "DropdownMenuSub"
        });
      return (0, b.jsx)(y.Sub, {
        ...o,
        open: s,
        onOpenChange: l,
        children: n
      });
    },
    z = f.forwardRef((e, t) => {
      const {
          __scopeDropdownMenu: n,
          ...r
        } = e,
        a = M(n);
      return (0, b.jsx)(y.SubTrigger, {
        ...a,
        ...r,
        ref: t
      });
    });
  z.displayName = "DropdownMenuSubTrigger";
  var Y = f.forwardRef((e, t) => {
    const {
        __scopeDropdownMenu: n,
        ...r
      } = e,
      a = M(n);
    return (0, b.jsx)(y.SubContent, {
      ...a,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
  Y.displayName = "DropdownMenuSubContent";
  var Q = k,
    G = D,
    $ = I,
    q = L,
    Z = R,
    X = B,
    J = N,
    ee = U,
    te = F,
    ne = j,
    re = H,
    ae = W,
    ie = K,
    oe = V,
    se = z,
    le = Y;
});
