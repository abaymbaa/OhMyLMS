// Reconstructed Webpack factory 87240; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    fA: () => l,
    Du: () => A,
    M_: () => $
  });
  var r = {};
  n.r(r), n.d(r, {
    set: () => O,
    setDefaults: () => M,
    setPersistenceLayer: () => S,
    toggle: () => C
  });
  var a = {};
  n.r(a), n.d(a, {
    get: () => T
  });
  var i = {};
  n.r(i), n.d(i, {
    closeModal: () => W,
    disableComplementaryArea: () => R,
    enableComplementaryArea: () => L,
    openModal: () => H,
    pinItem: () => B,
    setDefaultComplementaryArea: () => P,
    setFeatureDefaults: () => j,
    setFeatureValue: () => F,
    toggleFeature: () => U,
    unpinItem: () => N
  });
  var o = {};
  n.r(o), n.d(o, {
    getActiveComplementaryArea: () => K,
    isComplementaryAreaLoading: () => V,
    isFeatureActive: () => Y,
    isItemPinned: () => z,
    isModalActive: () => Q
  });
  var s = n(91386);
  const l = ({
    isActive: e
  }) => ((0, s.useEffect)(() => {
    let e = !1;
    return document.body.classList.contains("sticky-menu") && (e = !0, document.body.classList.remove("sticky-menu")), () => {
      e && document.body.classList.add("sticky-menu");
    };
  }, []), (0, s.useEffect)(() => (e ? document.body.classList.add("is-fullscreen-mode") : document.body.classList.remove("is-fullscreen-mode"), () => {
    e && document.body.classList.remove("is-fullscreen-mode");
  }), [e]), null);
  var c = n(34164),
    u = n(2214),
    d = n(12470),
    p = n(48894),
    f = n(74848);
  function h({
    children: e,
    className: t,
    ariaLabel: n,
    as: r = "div",
    ...a
  }) {
    return (0, f.jsx)(r, {
      className: (0, c.A)("interface-navigable-region", t),
      "aria-label": n,
      role: "region",
      tabIndex: "-1",
      ...a,
      children: e
    });
  }
  const _ = {
      type: "tween",
      duration: .25,
      ease: [.6, 0, .4, 1]
    },
    m = {
      hidden: {
        opacity: 1,
        marginTop: -60
      },
      visible: {
        opacity: 1,
        marginTop: 0
      },
      distractionFreeHover: {
        opacity: 1,
        marginTop: 0,
        transition: {
          ..._,
          delay: .2,
          delayChildren: .2
        }
      },
      distractionFreeHidden: {
        opacity: 0,
        marginTop: -60
      },
      distractionFreeDisabled: {
        opacity: 0,
        marginTop: 0,
        transition: {
          ..._,
          delay: .8,
          delayChildren: .8
        }
      }
    },
    A = (0, s.forwardRef)(function ({
      isDistractionFree: e,
      footer: t,
      header: n,
      editorNotices: r,
      sidebar: a,
      secondarySidebar: i,
      content: o,
      actions: l,
      labels: _,
      className: A,
      enableRegionNavigation: g = !0,
      shortcuts: y
    }, v) {
      const [E, b] = (0, p.useResizeObserver)(),
        w = (0, p.useViewportMatch)("medium", "<"),
        C = {
          type: "tween",
          duration: (0, p.useReducedMotion)() ? 0 : .25,
          ease: [.6, 0, .4, 1]
        },
        O = (0, u.__unstableUseNavigateRegions)(y);
      !function (e) {
        (0, s.useEffect)(() => {
          const t = document && document.querySelector(`html:not(.${e})`);
          if (t) return t.classList.toggle(e), () => {
            t.classList.toggle(e);
          };
        }, [e]);
      }("interface-interface-skeleton__html-container");
      const M = {
        header: (0, d._x)("Header", "header landmark area"),
        body: (0, d.__)("Content"),
        secondarySidebar: (0, d.__)("Block Library"),
        sidebar: (0, d.__)("Settings"),
        actions: (0, d.__)("Publish"),
        footer: (0, d.__)("Footer"),
        ..._
      };
      return (0, f.jsxs)("div", {
        ...(g ? O : {}),
        ref: (0, p.useMergeRefs)([v, g ? O.ref : void 0]),
        className: (0, c.A)(A, "interface-interface-skeleton", O.className, !!t && "has-footer"),
        children: [(0, f.jsxs)("div", {
          className: "interface-interface-skeleton__editor",
          children: [(0, f.jsx)(u.__unstableAnimatePresence, {
            initial: !1,
            children: !!n && (0, f.jsx)(h, {
              as: u.__unstableMotion.div,
              className: "interface-interface-skeleton__header",
              "aria-label": M.header,
              initial: e && !w ? "distractionFreeHidden" : "hidden",
              whileHover: e && !w ? "distractionFreeHover" : "visible",
              animate: e && !w ? "distractionFreeDisabled" : "visible",
              exit: e && !w ? "distractionFreeHidden" : "hidden",
              variants: m,
              transition: C,
              children: n
            })
          }), e && (0, f.jsx)("div", {
            className: "interface-interface-skeleton__header",
            children: r
          }), (0, f.jsxs)("div", {
            className: "interface-interface-skeleton__body",
            children: [(0, f.jsx)(u.__unstableAnimatePresence, {
              initial: !1,
              children: !!i && (0, f.jsx)(h, {
                className: "interface-interface-skeleton__secondary-sidebar",
                ariaLabel: M.secondarySidebar,
                as: u.__unstableMotion.div,
                initial: "closed",
                animate: "open",
                exit: "closed",
                variants: {
                  open: {
                    width: b.width
                  },
                  closed: {
                    width: 0
                  }
                },
                transition: C,
                children: (0, f.jsxs)(u.__unstableMotion.div, {
                  style: {
                    position: "absolute",
                    width: w ? "100vw" : "fit-content",
                    height: "100%",
                    left: 0
                  },
                  variants: {
                    open: {
                      x: 0
                    },
                    closed: {
                      x: "-100%"
                    }
                  },
                  transition: C,
                  children: [E, i]
                })
              })
            }), (0, f.jsx)(h, {
              className: "interface-interface-skeleton__content",
              ariaLabel: M.body,
              children: o
            }), !!a && (0, f.jsx)(h, {
              className: "interface-interface-skeleton__sidebar",
              ariaLabel: M.sidebar,
              children: a
            }), !!l && (0, f.jsx)(h, {
              className: "interface-interface-skeleton__actions",
              ariaLabel: M.actions,
              children: l
            })]
          })]
        }), !!t && (0, f.jsx)(h, {
          className: "interface-interface-skeleton__footer",
          ariaLabel: M.footer,
          children: t
        })]
      });
    });
  var g = n(37562),
    y = n(48566);
  const v = Object.create(null);
  function E(e, t = {}) {
    const {
        since: n,
        version: r,
        alternative: a,
        plugin: i,
        link: o,
        hint: s
      } = t,
      l = `${e} is deprecated${n ? ` since version ${n}` : ""}${r ? ` and will be removed${i ? ` from ${i}` : ""} in version ${r}` : ""}.${a ? ` Please use ${a} instead.` : ""}${o ? ` See: ${o}` : ""}${s ? ` Note: ${s}` : ""}`;
    l in v || ((0, y.doAction)("deprecated", e, t, l), console.warn(l), v[l] = !0);
  }
  const b = function () {
      let e;
      return (t, n) => {
        if ("SET_PERSISTENCE_LAYER" === n.type) {
          const {
            persistenceLayer: t,
            persistedData: r
          } = n;
          return e = t, r;
        }
        const r = ((e = {}, t) => {
          if ("SET_PREFERENCE_VALUE" === t.type) {
            const {
              scope: n,
              name: r,
              value: a
            } = t;
            return {
              ...e,
              [n]: {
                ...e[n],
                [r]: a
              }
            };
          }
          return e;
        })(t, n);
        return "SET_PREFERENCE_VALUE" === n.type && e?.set(r), r;
      };
    }(),
    w = (0, g.combineReducers)({
      defaults: function (e = {}, t) {
        if ("SET_PREFERENCE_DEFAULTS" === t.type) {
          const {
            scope: n,
            defaults: r
          } = t;
          return {
            ...e,
            [n]: {
              ...e[n],
              ...r
            }
          };
        }
        return e;
      },
      preferences: b
    });
  function C(e, t) {
    return function ({
      select: n,
      dispatch: r
    }) {
      const a = n.get(e, t);
      r.set(e, t, !a);
    };
  }
  function O(e, t, n) {
    return {
      type: "SET_PREFERENCE_VALUE",
      scope: e,
      name: t,
      value: n
    };
  }
  function M(e, t) {
    return {
      type: "SET_PREFERENCE_DEFAULTS",
      scope: e,
      defaults: t
    };
  }
  async function S(e) {
    const t = await e.get();
    return {
      type: "SET_PERSISTENCE_LAYER",
      persistenceLayer: e,
      persistedData: t
    };
  }
  const T = (k = (e, t, n) => {
    const r = e.preferences[t]?.[n];
    return void 0 !== r ? r : e.defaults[t]?.[n];
  }, (e, t, n) => ["allowRightClickOverrides", "distractionFree", "editorMode", "fixedToolbar", "focusMode", "hiddenBlockTypes", "inactivePanels", "keepCaretInsideBlock", "mostUsedBlocks", "openPanels", "showBlockBreadcrumbs", "showIconLabels", "showListViewByDefault", "isPublishSidebarEnabled", "isComplementaryAreaVisible", "pinnedItems"].includes(n) && ["core/edit-post", "core/edit-site"].includes(t) ? (E(`wp.data.select( 'core/preferences' ).get( '${t}', '${n}' )`, {
    since: "6.5",
    alternative: `wp.data.select( 'core/preferences' ).get( 'core', '${n}' )`
  }), k(e, "core", n)) : k(e, t, n));
  var k;
  const x = (0, g.createReduxStore)("core/preferences", {
    reducer: w,
    actions: r,
    selectors: a
  });
  function D(e) {
    return ["core/edit-post", "core/edit-site"].includes(e) ? (E(`${e} interface scope`, {
      alternative: "core interface scope",
      hint: "core/edit-post and core/edit-site are merging.",
      version: "6.6"
    }), "core") : e;
  }
  function I(e, t) {
    return "core" === e && "edit-site/template" === t ? (E("edit-site/template sidebar", {
      alternative: "edit-post/document",
      version: "6.6"
    }), "edit-post/document") : "core" === e && "edit-site/block-inspector" === t ? (E("edit-site/block-inspector sidebar", {
      alternative: "edit-post/block",
      version: "6.6"
    }), "edit-post/block") : t;
  }
  (0, g.register)(x);
  const P = (e, t) => ({
      type: "SET_DEFAULT_COMPLEMENTARY_AREA",
      scope: e = D(e),
      area: t = I(e, t)
    }),
    L = (e, t) => ({
      registry: n,
      dispatch: r
    }) => {
      t && (e = D(e), t = I(e, t), n.select(x).get(e, "isComplementaryAreaVisible") || n.dispatch(x).set(e, "isComplementaryAreaVisible", !0), r({
        type: "ENABLE_COMPLEMENTARY_AREA",
        scope: e,
        area: t
      }));
    },
    R = e => ({
      registry: t
    }) => {
      e = D(e), t.select(x).get(e, "isComplementaryAreaVisible") && t.dispatch(x).set(e, "isComplementaryAreaVisible", !1);
    },
    B = (e, t) => ({
      registry: n
    }) => {
      if (!t) return;
      e = D(e), t = I(e, t);
      const r = n.select(x).get(e, "pinnedItems");
      !0 !== r?.[t] && n.dispatch(x).set(e, "pinnedItems", {
        ...r,
        [t]: !0
      });
    },
    N = (e, t) => ({
      registry: n
    }) => {
      if (!t) return;
      e = D(e), t = I(e, t);
      const r = n.select(x).get(e, "pinnedItems");
      n.dispatch(x).set(e, "pinnedItems", {
        ...r,
        [t]: !1
      });
    };
  function U(e, t) {
    return function ({
      registry: n
    }) {
      E("dispatch( 'core/interface' ).toggleFeature", {
        since: "6.0",
        alternative: "dispatch( 'core/preferences' ).toggle"
      }), n.dispatch(x).toggle(e, t);
    };
  }
  function F(e, t, n) {
    return function ({
      registry: r
    }) {
      E("dispatch( 'core/interface' ).setFeatureValue", {
        since: "6.0",
        alternative: "dispatch( 'core/preferences' ).set"
      }), r.dispatch(x).set(e, t, !!n);
    };
  }
  function j(e, t) {
    return function ({
      registry: n
    }) {
      E("dispatch( 'core/interface' ).setFeatureDefaults", {
        since: "6.0",
        alternative: "dispatch( 'core/preferences' ).setDefaults"
      }), n.dispatch(x).setDefaults(e, t);
    };
  }
  function H(e) {
    return {
      type: "OPEN_MODAL",
      name: e
    };
  }
  function W() {
    return {
      type: "CLOSE_MODAL"
    };
  }
  const K = (0, g.createRegistrySelector)(e => (t, n) => {
      n = D(n);
      const r = e(x).get(n, "isComplementaryAreaVisible");
      if (void 0 !== r) return !1 === r ? null : t?.complementaryAreas?.[n];
    }),
    V = (0, g.createRegistrySelector)(e => (t, n) => {
      n = D(n);
      const r = e(x).get(n, "isComplementaryAreaVisible"),
        a = t?.complementaryAreas?.[n];
      return r && void 0 === a;
    }),
    z = (0, g.createRegistrySelector)(e => (t, n, r) => {
      var a;
      r = I(n = D(n), r);
      const i = e(x).get(n, "pinnedItems");
      return null === (a = i?.[r]) || void 0 === a || a;
    }),
    Y = (0, g.createRegistrySelector)(e => (t, n, r) => (E("select( 'core/interface' ).isFeatureActive( scope, featureName )", {
      since: "6.0",
      alternative: "select( 'core/preferences' ).get( scope, featureName )"
    }), !!e(x).get(n, r)));
  function Q(e, t) {
    return e.activeModal === t;
  }
  const G = (0, g.combineReducers)({
      complementaryAreas: function (e = {}, t) {
        switch (t.type) {
          case "SET_DEFAULT_COMPLEMENTARY_AREA":
            {
              const {
                scope: n,
                area: r
              } = t;
              return e[n] ? e : {
                ...e,
                [n]: r
              };
            }
          case "ENABLE_COMPLEMENTARY_AREA":
            {
              const {
                scope: n,
                area: r
              } = t;
              return {
                ...e,
                [n]: r
              };
            }
        }
        return e;
      },
      activeModal: function (e = null, t) {
        switch (t.type) {
          case "OPEN_MODAL":
            return t.name;
          case "CLOSE_MODAL":
            return null;
        }
        return e;
      }
    }),
    $ = (0, g.createReduxStore)("core/interface", {
      reducer: G,
      actions: i,
      selectors: o
    });
  (0, g.register)($);
});
