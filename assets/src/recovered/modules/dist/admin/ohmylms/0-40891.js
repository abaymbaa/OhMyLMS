// Reconstructed Webpack factory 40891; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Heading = void 0;
  var a = n(99248),
    o = r(n(74951));
  t.Heading = o.default.extend({
    renderHTML: function (e) {
      var t = e.node,
        n = e.HTMLAttributes,
        r = parseInt(t.attrs.level, 10),
        o = this.options.levels.includes(r) ? r : this.options.levels[0];
      return ["h".concat(o), (0, a.mergeAttributes)(this.options.HTMLAttributes, n), 0];
    }
  }), t.default = t.Heading;
});
