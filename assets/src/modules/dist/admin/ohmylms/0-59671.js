// Reconstructed Webpack factory 59671; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r,
    a = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
      void 0 === r && (r = n);
      var a = Object.getOwnPropertyDescriptor(t, n);
      a && !("get" in a ? !t.__esModule : a.writable || a.configurable) || (a = {
        enumerable: !0,
        get: function () {
          return t[n];
        }
      }), Object.defineProperty(e, r, a);
    } : function (e, t, n, r) {
      void 0 === r && (r = n), e[r] = t[n];
    }),
    o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
      Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      });
    } : function (e, t) {
      e.default = t;
    }),
    i = this && this.__importStar || (r = function (e) {
      return r = Object.getOwnPropertyNames || function (e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
        return t;
      }, r(e);
    }, function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n = r(e), i = 0; i < n.length; i++) "default" !== n[i] && a(t, e, n[i]);
      return o(t, e), t;
    });
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ImageUpload = void 0;
  var l = n(83574),
    c = i(n(41594)),
    u = n(77494);
  t.ImageUpload = function (e) {
    var t = e.getPos,
      n = e.editor,
      r = (0, c.useCallback)(function (e) {
        e && n.chain().setImageBlock({
          src: e
        }).deleteRange({
          from: t(),
          to: t()
        }).focus().run();
      }, [t, n]);
    return c.default.createElement(l.NodeViewWrapper, null, c.default.createElement("div", {
      className: "p-0 m-0",
      "data-drag-handle": !0
    }, c.default.createElement(u.ImageUploader, {
      onUpload: r,
      onCancel: function () {
        var e,
          r = t(),
          a = null === (e = n.state.doc.nodeAt(r)) || void 0 === e ? void 0 : e.nodeSize;
        a ? n.chain().deleteRange({
          from: r,
          to: r + a
        }).focus().run() : console.warn("Could not determine node size");
      }
    })));
  }, t.default = t.ImageUpload;
});
