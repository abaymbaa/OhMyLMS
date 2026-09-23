// Reconstructed Webpack factory 97856; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    G: () => s,
    jl: () => o,
    t4: () => c,
    wA: () => l
  });
  var r = n(34164),
    a = n(91386),
    i = n(74848);
  const o = e => (0, a.createElement)("circle", e),
    s = e => (0, a.createElement)("g", e),
    l = e => (0, a.createElement)("path", e),
    c = (0, a.forwardRef)(({
      className: e,
      isPressed: t,
      ...n
    }, a) => {
      const o = {
        ...n,
        className: (0, r.A)(e, {
          "is-pressed": t
        }) || void 0,
        "aria-hidden": !0,
        focusable: !1
      };
      return (0, i.jsx)("svg", {
        ...o,
        ref: a
      });
    });
  c.displayName = "SVG";
});
