// Reconstructed Webpack factory 91813; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r = this && this.__spreadArray || function (e, t, n) {
      if (n || 2 === arguments.length) for (var r, a = 0, o = t.length; a < o; a++) !r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
      return e.concat(r || Array.prototype.slice.call(t));
    },
    a = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Link = void 0;
  var o = n(99248),
    i = a(n(81531)),
    l = n(56614);
  t.Link = i.default.extend({
    inclusive: !1,
    parseHTML: function () {
      return [{
        tag: 'a[href]:not([data-type="button"]):not([href *= "javascript:" i])'
      }];
    },
    renderHTML: function (e) {
      var t = e.HTMLAttributes,
        n = "_blank" === t.target ? "noopener noreferrer" : null;
      return ["a", (0, o.mergeAttributes)(this.options.HTMLAttributes, t, {
        class: "link",
        rel: n
      }), 0];
    },
    addProseMirrorPlugins: function () {
      var e,
        t = this.editor;
      return r(r([], (null === (e = this.parent) || void 0 === e ? void 0 : e.call(this)) || [], !0), [new l.Plugin({
        props: {
          handleKeyDown: function (e, n) {
            var r = t.state.selection;
            return "Escape" === n.key && !0 !== r.empty && t.commands.focus(r.to, {
              scrollIntoView: !1
            }), !1;
          }
        }
      })], !1);
    }
  }), t.default = t.Link;
});
