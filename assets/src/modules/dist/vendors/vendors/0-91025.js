// Reconstructed Webpack factory 91025; arguments retain original semantics.
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
    Anchor: () => Ve,
    Arrow: () => tt,
    CheckboxItem: () => qe,
    Content: () => Ye,
    Group: () => Qe,
    Item: () => $e,
    ItemIndicator: () => Je,
    Label: () => Ge,
    Menu: () => X,
    MenuAnchor: () => J,
    MenuArrow: () => xe,
    MenuCheckboxItem: () => ge,
    MenuContent: () => se,
    MenuGroup: () => pe,
    MenuItem: () => me,
    MenuItemIndicator: () => Te,
    MenuLabel: () => fe,
    MenuPortal: () => re,
    MenuRadioGroup: () => be,
    MenuRadioItem: () => Ce,
    MenuSeparator: () => ke,
    MenuSub: () => Le,
    MenuSubContent: () => Ue,
    MenuSubTrigger: () => Be,
    Portal: () => ze,
    RadioGroup: () => Ze,
    RadioItem: () => Xe,
    Root: () => Ke,
    Separator: () => et,
    Sub: () => nt,
    SubContent: () => at,
    SubTrigger: () => rt,
    createMenuScope: () => z
  }), e.exports = (r = p, u(i({}, "__esModule", {
    value: !0
  }), r));
  var f = d(n(41594)),
    h = n(80739),
    _ = n(89656),
    m = n(10207),
    A = n(95791),
    g = n(62585),
    y = n(14614),
    v = n(21983),
    E = n(6345),
    b = n(6411),
    w = d(n(21738)),
    C = n(21738),
    O = n(93086),
    M = n(55575),
    S = n(62053),
    T = d(n(56016)),
    k = n(56016),
    x = n(56612),
    D = n(80283),
    I = n(58241),
    P = n(77600),
    L = n(74848),
    R = ["Enter", " "],
    B = ["ArrowUp", "PageDown", "End"],
    N = ["ArrowDown", "PageUp", "Home", ...B],
    U = {
      ltr: [...R, "ArrowRight"],
      rtl: [...R, "ArrowLeft"]
    },
    F = {
      ltr: ["ArrowLeft"],
      rtl: ["ArrowRight"]
    },
    j = "Menu",
    [H, W, K] = (0, _.createCollection)(j),
    [V, z] = (0, A.createContextScope)(j, [K, C.createPopperScope, k.createRovingFocusGroupScope]),
    Y = (0, C.createPopperScope)(),
    Q = (0, k.createRovingFocusGroupScope)(),
    [G, $] = V(j),
    [q, Z] = V(j),
    X = e => {
      const {
          __scopeMenu: t,
          open: n = !1,
          children: r,
          dir: a,
          onOpenChange: i,
          modal: o = !0
        } = e,
        s = Y(t),
        [l, c] = f.useState(null),
        u = f.useRef(!1),
        d = (0, D.useCallbackRef)(i),
        p = (0, g.useDirection)(a);
      return f.useEffect(() => {
        const e = () => {
            u.current = !0, document.addEventListener("pointerdown", t, {
              capture: !0,
              once: !0
            }), document.addEventListener("pointermove", t, {
              capture: !0,
              once: !0
            });
          },
          t = () => u.current = !1;
        return document.addEventListener("keydown", e, {
          capture: !0
        }), () => {
          document.removeEventListener("keydown", e, {
            capture: !0
          }), document.removeEventListener("pointerdown", t, {
            capture: !0
          }), document.removeEventListener("pointermove", t, {
            capture: !0
          });
        };
      }, []), (0, L.jsx)(w.Root, {
        ...s,
        children: (0, L.jsx)(G, {
          scope: t,
          open: n,
          onOpenChange: d,
          content: l,
          onContentChange: c,
          children: (0, L.jsx)(q, {
            scope: t,
            onClose: f.useCallback(() => d(!1), [d]),
            isUsingKeyboardRef: u,
            dir: p,
            modal: o,
            children: r
          })
        })
      });
    };
  X.displayName = j;
  var J = f.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        ...r
      } = e,
      a = Y(n);
    return (0, L.jsx)(w.Anchor, {
      ...a,
      ...r,
      ref: t
    });
  });
  J.displayName = "MenuAnchor";
  var ee = "MenuPortal",
    [te, ne] = V(ee, {
      forceMount: void 0
    }),
    re = e => {
      const {
          __scopeMenu: t,
          forceMount: n,
          children: r,
          container: a
        } = e,
        i = $(ee, t);
      return (0, L.jsx)(te, {
        scope: t,
        forceMount: n,
        children: (0, L.jsx)(M.Presence, {
          present: n || i.open,
          children: (0, L.jsx)(O.Portal, {
            asChild: !0,
            container: a,
            children: r
          })
        })
      });
    };
  re.displayName = ee;
  var ae = "MenuContent",
    [ie, oe] = V(ae),
    se = f.forwardRef((e, t) => {
      const n = ne(ae, e.__scopeMenu),
        {
          forceMount: r = n.forceMount,
          ...a
        } = e,
        i = $(ae, e.__scopeMenu),
        o = Z(ae, e.__scopeMenu);
      return (0, L.jsx)(H.Provider, {
        scope: e.__scopeMenu,
        children: (0, L.jsx)(M.Presence, {
          present: r || i.open,
          children: (0, L.jsx)(H.Slot, {
            scope: e.__scopeMenu,
            children: o.modal ? (0, L.jsx)(le, {
              ...a,
              ref: t
            }) : (0, L.jsx)(ce, {
              ...a,
              ref: t
            })
          })
        })
      });
    }),
    le = f.forwardRef((e, t) => {
      const n = $(ae, e.__scopeMenu),
        r = f.useRef(null),
        a = (0, m.useComposedRefs)(t, r);
      return f.useEffect(() => {
        const e = r.current;
        if (e) return (0, I.hideOthers)(e);
      }, []), (0, L.jsx)(de, {
        ...e,
        ref: a,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: (0, h.composeEventHandlers)(e.onFocusOutside, e => e.preventDefault(), {
          checkForDefaultPrevented: !1
        }),
        onDismiss: () => n.onOpenChange(!1)
      });
    }),
    ce = f.forwardRef((e, t) => {
      const n = $(ae, e.__scopeMenu);
      return (0, L.jsx)(de, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1)
      });
    }),
    ue = (0, x.createSlot)("MenuContent.ScrollLock"),
    de = f.forwardRef((e, t) => {
      const {
          __scopeMenu: n,
          loop: r = !1,
          trapFocus: a,
          onOpenAutoFocus: i,
          onCloseAutoFocus: o,
          disableOutsidePointerEvents: s,
          onEntryFocus: l,
          onEscapeKeyDown: c,
          onPointerDownOutside: u,
          onFocusOutside: d,
          onInteractOutside: p,
          onDismiss: _,
          disableOutsideScroll: A,
          ...g
        } = e,
        b = $(ae, n),
        C = Z(ae, n),
        O = Y(n),
        M = Q(n),
        S = W(n),
        [k, x] = f.useState(null),
        D = f.useRef(null),
        I = (0, m.useComposedRefs)(t, D, b.onContentChange),
        R = f.useRef(0),
        U = f.useRef(""),
        F = f.useRef(0),
        j = f.useRef(null),
        H = f.useRef("right"),
        K = f.useRef(0),
        V = A ? P.RemoveScroll : f.Fragment,
        z = A ? {
          as: ue,
          allowPinchZoom: !0
        } : void 0;
      f.useEffect(() => () => window.clearTimeout(R.current), []), (0, v.useFocusGuards)();
      const G = f.useCallback(e => H.current === j.current?.side && function (e, t) {
        if (!t) return !1;
        return function (e, t) {
          const {
            x: n,
            y: r
          } = e;
          let a = !1;
          for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
            const o = t[e],
              s = t[i],
              l = o.x,
              c = o.y,
              u = s.x,
              d = s.y;
            c > r != d > r && n < (u - l) * (r - c) / (d - c) + l && (a = !a);
          }
          return a;
        }({
          x: e.clientX,
          y: e.clientY
        }, t);
      }(e, j.current?.area), []);
      return (0, L.jsx)(ie, {
        scope: n,
        searchRef: U,
        onItemEnter: f.useCallback(e => {
          G(e) && e.preventDefault();
        }, [G]),
        onItemLeave: f.useCallback(e => {
          G(e) || (D.current?.focus(), x(null));
        }, [G]),
        onTriggerLeave: f.useCallback(e => {
          G(e) && e.preventDefault();
        }, [G]),
        pointerGraceTimerRef: F,
        onPointerGraceIntentChange: f.useCallback(e => {
          j.current = e;
        }, []),
        children: (0, L.jsx)(V, {
          ...z,
          children: (0, L.jsx)(E.FocusScope, {
            asChild: !0,
            trapped: a,
            onMountAutoFocus: (0, h.composeEventHandlers)(i, e => {
              e.preventDefault(), D.current?.focus({
                preventScroll: !0
              });
            }),
            onUnmountAutoFocus: o,
            children: (0, L.jsx)(y.DismissableLayer, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onEscapeKeyDown: c,
              onPointerDownOutside: u,
              onFocusOutside: d,
              onInteractOutside: p,
              onDismiss: _,
              children: (0, L.jsx)(T.Root, {
                asChild: !0,
                ...M,
                dir: C.dir,
                orientation: "vertical",
                loop: r,
                currentTabStopId: k,
                onCurrentTabStopIdChange: x,
                onEntryFocus: (0, h.composeEventHandlers)(l, e => {
                  C.isUsingKeyboardRef.current || e.preventDefault();
                }),
                preventScrollOnEntryFocus: !0,
                children: (0, L.jsx)(w.Content, {
                  role: "menu",
                  "aria-orientation": "vertical",
                  "data-state": Fe(b.open),
                  "data-radix-menu-content": "",
                  dir: C.dir,
                  ...O,
                  ...g,
                  ref: I,
                  style: {
                    outline: "none",
                    ...g.style
                  },
                  onKeyDown: (0, h.composeEventHandlers)(g.onKeyDown, e => {
                    const t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                      n = e.ctrlKey || e.altKey || e.metaKey,
                      r = 1 === e.key.length;
                    t && ("Tab" === e.key && e.preventDefault(), !n && r && (e => {
                      const t = U.current + e,
                        n = S().filter(e => !e.disabled),
                        r = document.activeElement,
                        a = n.find(e => e.ref.current === r)?.textValue,
                        i = function (e, t, n) {
                          const r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                            a = n ? e.indexOf(n) : -1;
                          let i = (o = e, s = Math.max(a, 0), o.map((e, t) => o[(s + t) % o.length]));
                          var o, s;
                          1 === r.length && (i = i.filter(e => e !== n));
                          const l = i.find(e => e.toLowerCase().startsWith(r.toLowerCase()));
                          return l !== n ? l : void 0;
                        }(n.map(e => e.textValue), t, a),
                        o = n.find(e => e.textValue === i)?.ref.current;
                      !function e(t) {
                        U.current = t, window.clearTimeout(R.current), "" !== t && (R.current = window.setTimeout(() => e(""), 1e3));
                      }(t), o && setTimeout(() => o.focus());
                    })(e.key));
                    const a = D.current;
                    if (e.target !== a) return;
                    if (!N.includes(e.key)) return;
                    e.preventDefault();
                    const i = S().filter(e => !e.disabled).map(e => e.ref.current);
                    B.includes(e.key) && i.reverse(), function (e) {
                      const t = document.activeElement;
                      for (const n of e) {
                        if (n === t) return;
                        if (n.focus(), document.activeElement !== t) return;
                      }
                    }(i);
                  }),
                  onBlur: (0, h.composeEventHandlers)(e.onBlur, e => {
                    e.currentTarget.contains(e.target) || (window.clearTimeout(R.current), U.current = "");
                  }),
                  onPointerMove: (0, h.composeEventHandlers)(e.onPointerMove, We(e => {
                    const t = e.target,
                      n = K.current !== e.clientX;
                    if (e.currentTarget.contains(t) && n) {
                      const t = e.clientX > K.current ? "right" : "left";
                      H.current = t, K.current = e.clientX;
                    }
                  }))
                })
              })
            })
          })
        })
      });
    });
  se.displayName = ae;
  var pe = f.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      ...r
    } = e;
    return (0, L.jsx)(S.Primitive.div, {
      role: "group",
      ...r,
      ref: t
    });
  });
  pe.displayName = "MenuGroup";
  var fe = f.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      ...r
    } = e;
    return (0, L.jsx)(S.Primitive.div, {
      ...r,
      ref: t
    });
  });
  fe.displayName = "MenuLabel";
  var he = "MenuItem",
    _e = "menu.itemSelect",
    me = f.forwardRef((e, t) => {
      const {
          disabled: n = !1,
          onSelect: r,
          ...a
        } = e,
        i = f.useRef(null),
        o = Z(he, e.__scopeMenu),
        s = oe(he, e.__scopeMenu),
        l = (0, m.useComposedRefs)(t, i),
        c = f.useRef(!1);
      return (0, L.jsx)(Ae, {
        ...a,
        ref: l,
        disabled: n,
        onClick: (0, h.composeEventHandlers)(e.onClick, () => {
          const e = i.current;
          if (!n && e) {
            const t = new CustomEvent(_e, {
              bubbles: !0,
              cancelable: !0
            });
            e.addEventListener(_e, e => r?.(e), {
              once: !0
            }), (0, S.dispatchDiscreteCustomEvent)(e, t), t.defaultPrevented ? c.current = !1 : o.onClose();
          }
        }),
        onPointerDown: t => {
          e.onPointerDown?.(t), c.current = !0;
        },
        onPointerUp: (0, h.composeEventHandlers)(e.onPointerUp, e => {
          c.current || e.currentTarget?.click();
        }),
        onKeyDown: (0, h.composeEventHandlers)(e.onKeyDown, e => {
          const t = "" !== s.searchRef.current;
          n || t && " " === e.key || R.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
        })
      });
    });
  me.displayName = he;
  var Ae = f.forwardRef((e, t) => {
      const {
          __scopeMenu: n,
          disabled: r = !1,
          textValue: a,
          ...i
        } = e,
        o = oe(he, n),
        s = Q(n),
        l = f.useRef(null),
        c = (0, m.useComposedRefs)(t, l),
        [u, d] = f.useState(!1),
        [p, _] = f.useState("");
      return f.useEffect(() => {
        const e = l.current;
        e && _((e.textContent ?? "").trim());
      }, [i.children]), (0, L.jsx)(H.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: a ?? p,
        children: (0, L.jsx)(T.Item, {
          asChild: !0,
          ...s,
          focusable: !r,
          children: (0, L.jsx)(S.Primitive.div, {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: c,
            onPointerMove: (0, h.composeEventHandlers)(e.onPointerMove, We(e => {
              r ? o.onItemLeave(e) : (o.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({
                preventScroll: !0
              }));
            })),
            onPointerLeave: (0, h.composeEventHandlers)(e.onPointerLeave, We(e => o.onItemLeave(e))),
            onFocus: (0, h.composeEventHandlers)(e.onFocus, () => d(!0)),
            onBlur: (0, h.composeEventHandlers)(e.onBlur, () => d(!1))
          })
        })
      });
    }),
    ge = f.forwardRef((e, t) => {
      const {
        checked: n = !1,
        onCheckedChange: r,
        ...a
      } = e;
      return (0, L.jsx)(Me, {
        scope: e.__scopeMenu,
        checked: n,
        children: (0, L.jsx)(me, {
          role: "menuitemcheckbox",
          "aria-checked": je(n) ? "mixed" : n,
          ...a,
          ref: t,
          "data-state": He(n),
          onSelect: (0, h.composeEventHandlers)(a.onSelect, () => r?.(!!je(n) || !n), {
            checkForDefaultPrevented: !1
          })
        })
      });
    });
  ge.displayName = "MenuCheckboxItem";
  var ye = "MenuRadioGroup",
    [ve, Ee] = V(ye, {
      value: void 0,
      onValueChange: () => {}
    }),
    be = f.forwardRef((e, t) => {
      const {
          value: n,
          onValueChange: r,
          ...a
        } = e,
        i = (0, D.useCallbackRef)(r);
      return (0, L.jsx)(ve, {
        scope: e.__scopeMenu,
        value: n,
        onValueChange: i,
        children: (0, L.jsx)(pe, {
          ...a,
          ref: t
        })
      });
    });
  be.displayName = ye;
  var we = "MenuRadioItem",
    Ce = f.forwardRef((e, t) => {
      const {
          value: n,
          ...r
        } = e,
        a = Ee(we, e.__scopeMenu),
        i = n === a.value;
      return (0, L.jsx)(Me, {
        scope: e.__scopeMenu,
        checked: i,
        children: (0, L.jsx)(me, {
          role: "menuitemradio",
          "aria-checked": i,
          ...r,
          ref: t,
          "data-state": He(i),
          onSelect: (0, h.composeEventHandlers)(r.onSelect, () => a.onValueChange?.(n), {
            checkForDefaultPrevented: !1
          })
        })
      });
    });
  Ce.displayName = we;
  var Oe = "MenuItemIndicator",
    [Me, Se] = V(Oe, {
      checked: !1
    }),
    Te = f.forwardRef((e, t) => {
      const {
          __scopeMenu: n,
          forceMount: r,
          ...a
        } = e,
        i = Se(Oe, n);
      return (0, L.jsx)(M.Presence, {
        present: r || je(i.checked) || !0 === i.checked,
        children: (0, L.jsx)(S.Primitive.span, {
          ...a,
          ref: t,
          "data-state": He(i.checked)
        })
      });
    });
  Te.displayName = Oe;
  var ke = f.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      ...r
    } = e;
    return (0, L.jsx)(S.Primitive.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: t
    });
  });
  ke.displayName = "MenuSeparator";
  var xe = f.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        ...r
      } = e,
      a = Y(n);
    return (0, L.jsx)(w.Arrow, {
      ...a,
      ...r,
      ref: t
    });
  });
  xe.displayName = "MenuArrow";
  var De = "MenuSub",
    [Ie, Pe] = V(De),
    Le = e => {
      const {
          __scopeMenu: t,
          children: n,
          open: r = !1,
          onOpenChange: a
        } = e,
        i = $(De, t),
        o = Y(t),
        [s, l] = f.useState(null),
        [c, u] = f.useState(null),
        d = (0, D.useCallbackRef)(a);
      return f.useEffect(() => (!1 === i.open && d(!1), () => d(!1)), [i.open, d]), (0, L.jsx)(w.Root, {
        ...o,
        children: (0, L.jsx)(G, {
          scope: t,
          open: r,
          onOpenChange: d,
          content: c,
          onContentChange: u,
          children: (0, L.jsx)(Ie, {
            scope: t,
            contentId: (0, b.useId)(),
            triggerId: (0, b.useId)(),
            trigger: s,
            onTriggerChange: l,
            children: n
          })
        })
      });
    };
  Le.displayName = De;
  var Re = "MenuSubTrigger",
    Be = f.forwardRef((e, t) => {
      const n = $(Re, e.__scopeMenu),
        r = Z(Re, e.__scopeMenu),
        a = Pe(Re, e.__scopeMenu),
        i = oe(Re, e.__scopeMenu),
        o = f.useRef(null),
        {
          pointerGraceTimerRef: s,
          onPointerGraceIntentChange: l
        } = i,
        c = {
          __scopeMenu: e.__scopeMenu
        },
        u = f.useCallback(() => {
          o.current && window.clearTimeout(o.current), o.current = null;
        }, []);
      return f.useEffect(() => u, [u]), f.useEffect(() => {
        const e = s.current;
        return () => {
          window.clearTimeout(e), l(null);
        };
      }, [s, l]), (0, L.jsx)(J, {
        asChild: !0,
        ...c,
        children: (0, L.jsx)(Ae, {
          id: a.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": a.contentId,
          "data-state": Fe(n.open),
          ...e,
          ref: (0, m.composeRefs)(t, a.onTriggerChange),
          onClick: t => {
            e.onClick?.(t), e.disabled || t.defaultPrevented || (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
          },
          onPointerMove: (0, h.composeEventHandlers)(e.onPointerMove, We(t => {
            i.onItemEnter(t), t.defaultPrevented || e.disabled || n.open || o.current || (i.onPointerGraceIntentChange(null), o.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })),
          onPointerLeave: (0, h.composeEventHandlers)(e.onPointerLeave, We(e => {
            u();
            const t = n.content?.getBoundingClientRect();
            if (t) {
              const r = n.content?.dataset.side,
                a = "right" === r,
                o = a ? -5 : 5,
                l = t[a ? "left" : "right"],
                c = t[a ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [{
                  x: e.clientX + o,
                  y: e.clientY
                }, {
                  x: l,
                  y: t.top
                }, {
                  x: c,
                  y: t.top
                }, {
                  x: c,
                  y: t.bottom
                }, {
                  x: l,
                  y: t.bottom
                }],
                side: r
              }), window.clearTimeout(s.current), s.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300);
            } else {
              if (i.onTriggerLeave(e), e.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })),
          onKeyDown: (0, h.composeEventHandlers)(e.onKeyDown, t => {
            const a = "" !== i.searchRef.current;
            e.disabled || a && " " === t.key || U[r.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault());
          })
        })
      });
    });
  Be.displayName = Re;
  var Ne = "MenuSubContent",
    Ue = f.forwardRef((e, t) => {
      const n = ne(ae, e.__scopeMenu),
        {
          forceMount: r = n.forceMount,
          ...a
        } = e,
        i = $(ae, e.__scopeMenu),
        o = Z(ae, e.__scopeMenu),
        s = Pe(Ne, e.__scopeMenu),
        l = f.useRef(null),
        c = (0, m.useComposedRefs)(t, l);
      return (0, L.jsx)(H.Provider, {
        scope: e.__scopeMenu,
        children: (0, L.jsx)(M.Presence, {
          present: r || i.open,
          children: (0, L.jsx)(H.Slot, {
            scope: e.__scopeMenu,
            children: (0, L.jsx)(de, {
              id: s.contentId,
              "aria-labelledby": s.triggerId,
              ...a,
              ref: c,
              align: "start",
              side: "rtl" === o.dir ? "left" : "right",
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: e => {
                o.isUsingKeyboardRef.current && l.current?.focus(), e.preventDefault();
              },
              onCloseAutoFocus: e => e.preventDefault(),
              onFocusOutside: (0, h.composeEventHandlers)(e.onFocusOutside, e => {
                e.target !== s.trigger && i.onOpenChange(!1);
              }),
              onEscapeKeyDown: (0, h.composeEventHandlers)(e.onEscapeKeyDown, e => {
                o.onClose(), e.preventDefault();
              }),
              onKeyDown: (0, h.composeEventHandlers)(e.onKeyDown, e => {
                const t = e.currentTarget.contains(e.target),
                  n = F[o.dir].includes(e.key);
                t && n && (i.onOpenChange(!1), s.trigger?.focus(), e.preventDefault());
              })
            })
          })
        })
      });
    });
  function Fe(e) {
    return e ? "open" : "closed";
  }
  function je(e) {
    return "indeterminate" === e;
  }
  function He(e) {
    return je(e) ? "indeterminate" : e ? "checked" : "unchecked";
  }
  function We(e) {
    return t => "mouse" === t.pointerType ? e(t) : void 0;
  }
  Ue.displayName = Ne;
  var Ke = X,
    Ve = J,
    ze = re,
    Ye = se,
    Qe = pe,
    Ge = fe,
    $e = me,
    qe = ge,
    Ze = be,
    Xe = Ce,
    Je = Te,
    et = ke,
    tt = xe,
    nt = Le,
    rt = Be,
    at = Ue;
});
