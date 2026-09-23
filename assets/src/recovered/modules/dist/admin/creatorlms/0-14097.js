// Reconstructed Webpack factory 14097; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.HorizontalRule = void 0;
  var a = n(99248),
    o = r(n(33332));
  t.HorizontalRule = o.default.extend({
    renderHTML: function () {
      return ["div", (0, a.mergeAttributes)(this.options.HTMLAttributes, {
        "data-type": this.name
      }), ["hr"]];
    }
  }), t.default = t.HorizontalRule;
});
