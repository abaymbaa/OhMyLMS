// Reconstructed Webpack factory 7775; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var r,
    a = (r = n(37037)) && r.__esModule ? r : {
      default: r
    };
  t.default = function (e) {
    if (!(0, a.default)(e)) throw TypeError("Invalid UUID");
    return parseInt(e.slice(14, 15), 16);
  };
});
