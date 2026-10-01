// Reconstructed Webpack factory 57963; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Columns = t.ColumnLayout = void 0;
  var r,
    a = n(99248);
  !function (e) {
    e.SidebarLeft = "sidebar-left", e.SidebarRight = "sidebar-right", e.TwoColumn = "two-column";
  }(r || (t.ColumnLayout = r = {})), t.Columns = a.Node.create({
    name: "columns",
    group: "columns",
    content: "column column",
    defining: !0,
    isolating: !0,
    addAttributes: function () {
      return {
        layout: {
          default: r.TwoColumn
        }
      };
    },
    addCommands: function () {
      return {
        setColumns: function () {
          return function (e) {
            return e.commands.insertContent('<div data-type="columns"><div data-type="column" data-position="left"><p></p></div><div data-type="column" data-position="right"><p></p></div></div>');
          };
        },
        setLayout: function (e) {
          return function (t) {
            return t.commands.updateAttributes("columns", {
              layout: e
            });
          };
        }
      };
    },
    renderHTML: function (e) {
      var t = e.HTMLAttributes;
      return ["div", {
        "data-type": "columns",
        class: "layout-".concat(t.layout)
      }, 0];
    },
    parseHTML: function () {
      return [{
        tag: 'div[data-type="columns"]'
      }];
    }
  }), t.default = t.Columns;
});
