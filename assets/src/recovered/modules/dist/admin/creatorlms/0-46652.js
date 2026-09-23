// Reconstructed Webpack factory 46652; arguments retain original semantics.
((e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getRenderContainer = void 0, t.getRenderContainer = function (e, t) {
    var n = e.view,
      r = e.state.selection.from,
      a = document.querySelectorAll(".has-focus"),
      o = a[a.length - 1];
    if (o && o.getAttribute("data-type") && o.getAttribute("data-type") === t || o && o.classList && o.classList.contains(t)) return o;
    var i = n.domAtPos(r).node,
      l = i;
    for (l.tagName || (l = i.parentElement); l && (!l.getAttribute("data-type") || l.getAttribute("data-type") !== t) && !l.classList.contains(t);) l = l.parentElement;
    return l;
  }, t.default = t.getRenderContainer;
});
