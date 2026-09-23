// Reconstructed Webpack factory 40542; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    Fm: () => i,
    dz: () => h,
    kx: () => m,
    JF: () => f,
    _A: () => _
  });
  var r = n(12470);
  function a(e) {
    if (!e) {
      if ("undefined" == typeof window) return !1;
      e = window;
    }
    const {
      platform: t
    } = e.navigator;
    return -1 !== t.indexOf("Mac") || ["iPad", "iPhone"].includes(t);
  }
  const i = 13,
    o = "alt",
    s = "ctrl",
    l = "meta",
    c = "shift";
  function u(e) {
    return e.length < 2 ? e.toUpperCase() : e.charAt(0).toUpperCase() + e.slice(1);
  }
  function d(e, t) {
    return Object.fromEntries(Object.entries(e).map(([e, n]) => [e, t(n)]));
  }
  const p = {
      primary: e => e() ? [l] : [s],
      primaryShift: e => e() ? [c, l] : [s, c],
      primaryAlt: e => e() ? [o, l] : [s, o],
      secondary: e => e() ? [c, o, l] : [s, c, o],
      access: e => e() ? [s, o] : [c, o],
      ctrl: () => [s],
      alt: () => [o],
      ctrlShift: () => [s, c],
      shift: () => [c],
      shiftAlt: () => [c, o],
      undefined: () => []
    },
    f = d(p, e => (t, n = a) => [...e(n), t.toLowerCase()].join("+")),
    h = d(d(p, e => (t, n = a) => {
      const r = n(),
        i = {
          [o]: r ? "⌥" : "Alt",
          [s]: r ? "⌃" : "Ctrl",
          [l]: "⌘",
          [c]: r ? "⇧" : "Shift"
        };
      return [...e(n).reduce((e, t) => {
        var n;
        const a = null !== (n = i[t]) && void 0 !== n ? n : t;
        return r ? [...e, a] : [...e, a, "+"];
      }, []), u(t)];
    }), e => (t, n = a) => e(t, n).join("")),
    _ = d(p, e => (t, n = a) => {
      const i = n(),
        d = {
          [c]: "Shift",
          [l]: i ? "Command" : "Control",
          [s]: "Control",
          [o]: i ? "Option" : "Alt",
          ",": (0, r.__)("Comma"),
          ".": (0, r.__)("Period"),
          "`": (0, r.__)("Backtick"),
          "~": (0, r.__)("Tilde")
        };
      return [...e(n), t].map(e => {
        var t;
        return u(null !== (t = d[e]) && void 0 !== t ? t : e);
      }).join(i ? " " : " + ");
    }),
    m = d(p, e => (t, n, r = a) => {
      const i = e(r),
        u = function (e) {
          return [o, s, l, c].filter(t => e[`${t}Key`]);
        }(t),
        d = {
          Comma: ",",
          Backslash: "\\",
          IntlRo: "\\",
          IntlYen: "\\"
        },
        p = i.filter(e => !u.includes(e)),
        f = u.filter(e => !i.includes(e));
      if (p.length > 0 || f.length > 0) return !1;
      let h = t.key.toLowerCase();
      return n ? (t.altKey && 1 === n.length && (h = String.fromCharCode(t.keyCode).toLowerCase()), t.shiftKey && 1 === n.length && d[t.code] && (h = d[t.code]), "del" === n && (n = "delete"), h === n.toLowerCase()) : i.includes(h);
    });
});
