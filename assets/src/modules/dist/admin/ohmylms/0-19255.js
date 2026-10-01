// Reconstructed Webpack factory 19255; arguments retain original semantics.
((e, t) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.cssVar = void 0, t.cssVar = function (e, t) {
    var n = e;
    return "--" !== e.substring(0, 2) && (n = "--".concat(n)), t && document.documentElement.style.setProperty(n, t), getComputedStyle(document.body).getPropertyValue(n);
  }, t.default = t.cssVar;
});
