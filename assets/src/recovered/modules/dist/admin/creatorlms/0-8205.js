// Reconstructed Webpack factory 8205; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.FontSize = void 0;
  var r = n(99248);
  n(43420), t.FontSize = r.Extension.create({
    name: "fontSize",
    addOptions: function () {
      return {
        types: ["textStyle"]
      };
    },
    addGlobalAttributes: function () {
      return [{
        types: ["paragraph"],
        attributes: {
          class: {}
        }
      }, {
        types: this.options.types,
        attributes: {
          fontSize: {
            parseHTML: function (e) {
              return e.style.fontSize.replace(/['"]+/g, "");
            },
            renderHTML: function (e) {
              return e.fontSize ? {
                style: "font-size: ".concat(e.fontSize)
              } : {};
            }
          }
        }
      }];
    },
    addCommands: function () {
      return {
        setFontSize: function (e) {
          return function (t) {
            return (0, t.chain)().setMark("textStyle", {
              fontSize: e
            }).run();
          };
        },
        unsetFontSize: function () {
          return function (e) {
            return (0, e.chain)().setMark("textStyle", {
              fontSize: null
            }).removeEmptyTextStyle().run();
          };
        }
      };
    }
  }), t.default = t.FontSize;
});
