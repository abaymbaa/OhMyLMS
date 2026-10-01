// Reconstructed Webpack factory 99055; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r = this && this.__assign || function () {
    return r = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      return e;
    }, r.apply(this, arguments);
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.BlockquoteFigure = void 0;
  var a = n(99248),
    o = n(82349),
    i = n(42985),
    l = n(30137);
  t.BlockquoteFigure = o.Figure.extend({
    name: "blockquoteFigure",
    group: "block",
    content: "quote quoteCaption",
    isolating: !0,
    addExtensions: function () {
      return [i.Quote, l.QuoteCaption];
    },
    renderHTML: function (e) {
      var t = e.HTMLAttributes;
      return ["figure", (0, a.mergeAttributes)(t, {
        "data-type": this.name
      }), ["div", {}, 0]];
    },
    addKeyboardShortcuts: function () {
      return {
        Enter: function () {
          return !1;
        }
      };
    },
    addAttributes: function () {
      var e;
      return r({}, null === (e = this.parent) || void 0 === e ? void 0 : e.call(this));
    },
    addCommands: function () {
      var e = this;
      return {
        setBlockquote: function () {
          return function (t) {
            var n = t.state,
              r = t.chain,
              a = n.selection.$from.start(),
              o = n.selection.content();
            return r().focus().insertContent({
              type: e.name,
              content: [{
                type: "quote",
                content: o.content.toJSON() || [{
                  type: "paragraph",
                  attrs: {
                    textAlign: "left"
                  }
                }]
              }, {
                type: "quoteCaption"
              }]
            }).focus(a + 1).run();
          };
        }
      };
    }
  }), t.default = t.BlockquoteFigure;
});
