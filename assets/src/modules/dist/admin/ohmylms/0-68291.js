// Reconstructed Webpack factory 68291; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.AiTextNode = void 0;
  var a = n(83574),
    o = r(n(23949));
  t.AiTextNode = a.Node.create({
    name: "aiText",
    isolating: !0,
    defining: !0,
    group: "block",
    draggable: !0,
    selectable: !0,
    inline: !1,
    atom: !0,
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
        setAIText: function () {
          return function (t) {
            return t.commands.insertContent({
              type: e.name
            });
          };
        }
      };
    },
    addNodeView: function () {
      return (0, a.ReactNodeViewRenderer)(o.default);
    }
  }), t.default = t.AiTextNode;
});
