// Reconstructed Webpack factory 16607; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => i
  });
  var r = n(67604),
    a = n(5581);
  const i = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var n = t.styles[e] || {},
          i = t.attributes[e] || {},
          o = t.elements[e];
        (0, a.sb)(o) && (0, r.A)(o) && (Object.assign(o.style, n), Object.keys(i).forEach(function (e) {
          var t = i[e];
          !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t);
        }));
      });
    },
    effect: function (e) {
      var t = e.state,
        n = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
      return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () {
        Object.keys(t.elements).forEach(function (e) {
          var i = t.elements[e],
            o = t.attributes[e] || {},
            s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
              return e[t] = "", e;
            }, {});
          (0, a.sb)(i) && (0, r.A)(i) && (Object.assign(i.style, s), Object.keys(o).forEach(function (e) {
            i.removeAttribute(e);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };
});
