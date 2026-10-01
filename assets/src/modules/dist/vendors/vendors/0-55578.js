// Reconstructed Webpack factory 55578; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    Ee: () => S,
    M_: () => y,
    wk: () => C
  });
  var r = {};
  n.r(r), n.d(r, {
    registerShortcut: () => o,
    unregisterShortcut: () => s
  });
  var a = {};
  n.r(a), n.d(a, {
    getAllShortcutKeyCombinations: () => m,
    getAllShortcutRawKeyCombinations: () => A,
    getCategoryShortcuts: () => g,
    getShortcutAliases: () => _,
    getShortcutDescription: () => h,
    getShortcutKeyCombination: () => p,
    getShortcutRepresentation: () => f
  });
  var i = n(37562);
  function o({
    name: e,
    category: t,
    description: n,
    keyCombination: r,
    aliases: a
  }) {
    return {
      type: "REGISTER_SHORTCUT",
      name: e,
      category: t,
      keyCombination: r,
      aliases: a,
      description: n
    };
  }
  function s(e) {
    return {
      type: "UNREGISTER_SHORTCUT",
      name: e
    };
  }
  var l = n(40542);
  const c = [],
    u = {
      display: l.dz,
      raw: l.JF,
      ariaLabel: l._A
    };
  function d(e, t) {
    return e ? e.modifier ? u[t][e.modifier](e.character) : e.character : null;
  }
  function p(e, t) {
    return e[t] ? e[t].keyCombination : null;
  }
  function f(e, t, n = "display") {
    return d(p(e, t), n);
  }
  function h(e, t) {
    return e[t] ? e[t].description : null;
  }
  function _(e, t) {
    return e[t] && e[t].aliases ? e[t].aliases : c;
  }
  const m = (0, i.createSelector)((e, t) => [p(e, t), ..._(e, t)].filter(Boolean), (e, t) => [e[t]]),
    A = (0, i.createSelector)((e, t) => m(e, t).map(e => d(e, "raw")), (e, t) => [e[t]]),
    g = (0, i.createSelector)((e, t) => Object.entries(e).filter(([, e]) => e.category === t).map(([e]) => e), e => [e]),
    y = (0, i.createReduxStore)("core/keyboard-shortcuts", {
      reducer: function (e = {}, t) {
        switch (t.type) {
          case "REGISTER_SHORTCUT":
            return {
              ...e,
              [t.name]: {
                category: t.category,
                keyCombination: t.keyCombination,
                aliases: t.aliases,
                description: t.description
              }
            };
          case "UNREGISTER_SHORTCUT":
            const {
              [t.name]: n,
              ...r
            } = e;
            return r;
        }
        return e;
      },
      actions: r,
      selectors: a
    });
  (0, i.register)(y);
  var v = n(91386);
  const E = new Set(),
    b = e => {
      for (const t of E) t(e);
    },
    w = (0, v.createContext)({
      add: e => {
        0 === E.size && document.addEventListener("keydown", b), E.add(e);
      },
      delete: e => {
        E.delete(e), 0 === E.size && document.removeEventListener("keydown", b);
      }
    });
  function C(e, t, {
    isDisabled: n = !1
  } = {}) {
    const r = (0, v.useContext)(w),
      a = function () {
        const {
          getAllShortcutKeyCombinations: e
        } = (0, i.useSelect)(y);
        return function (t, n) {
          return e(t).some(({
            modifier: e,
            character: t
          }) => l.kx[e](n, t));
        };
      }(),
      o = (0, v.useRef)();
    (0, v.useEffect)(() => {
      o.current = t;
    }, [t]), (0, v.useEffect)(() => {
      if (!n) return r.add(t), () => {
        r.delete(t);
      };
      function t(t) {
        a(e, t) && o.current(t);
      }
    }, [e, n, r]);
  }
  w.displayName = "KeyboardShortcutsContext";
  var O = n(74848);
  const {
    Provider: M
  } = w;
  function S(e) {
    const [t] = (0, v.useState)(() => new Set());
    return (0, O.jsx)(M, {
      value: t,
      children: (0, O.jsx)("div", {
        ...e,
        onKeyDown: function (n) {
          e.onKeyDown && e.onKeyDown(n);
          for (const e of t) e(n);
        }
      })
    });
  }
});
