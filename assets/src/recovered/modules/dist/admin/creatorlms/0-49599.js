// Reconstructed Webpack factory 49599; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ImageUpload = void 0;
  var r = n(83574),
    a = n(59671);
  t.ImageUpload = r.Node.create({
    name: "imageUpload",
    isolating: !0,
    defining: !0,
    group: "block",
    draggable: !0,
    selectable: !0,
    inline: !1,
    parseHTML: function () {
      return [{
        tag: 'div[data-type="'.concat(this.name, '"]')
      }];
    },
    renderHTML: function () {
      return ["div", {
        "data-type": this.name
      }];
    },
    addCommands: function () {
      var e = this;
      return {
        setImageUpload: function () {
          return function (t) {
            return t.commands.insertContent('<div data-type="'.concat(e.name, '"></div>'));
          };
        }
      };
    },
    addNodeView: function () {
      return (0, r.ReactNodeViewRenderer)(a.ImageUpload);
    }
  }), t.default = t.ImageUpload;
});
