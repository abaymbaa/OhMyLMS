// Reconstructed Webpack factory 41481; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.isCustomNodeSelected = t.isTableGripSelected = void 0;
  var r = n(604);
  t.isTableGripSelected = function (e) {
    for (var t = e; t && !["TD", "TH"].includes(t.tagName);) t = t.parentElement;
    var n = t && t.querySelector && t.querySelector("a.grip-column.selected"),
      r = t && t.querySelector && t.querySelector("a.grip-row.selected");
    return !(!n && !r);
  }, t.isCustomNodeSelected = function (e, n) {
    return [r.HorizontalRule.name, r.ImageBlock.name, r.ImageUpload.name, r.CodeBlock.name, r.ImageBlock.name, r.Link.name, r.Figcaption.name].some(function (t) {
      return e.isActive(t);
    }) || (0, t.isTableGripSelected)(n);
  }, t.default = t.isCustomNodeSelected;
});
