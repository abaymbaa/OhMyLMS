// Reconstructed Webpack factory 42563; arguments retain original semantics.
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
  }), t.ImageBlockView = void 0;
  var l = n(20131),
    c = n(83574),
    u = i(n(41594));
  t.ImageBlockView = function (e) {
    var t = e,
      n = t.editor,
      r = t.getPos,
      a = t.node,
      o = (0, u.useRef)(null),
      i = a.attrs.src,
      s = (0, l.cn)("left" === a.attrs.align ? "ml-0" : "ml-auto", "right" === a.attrs.align ? "mr-0" : "mr-auto", "center" === a.attrs.align && "mx-auto"),
      d = {
        display: "flex",
        alignItems: "center",
        justifyContent: "right" === a.attrs.align ? "end" : "left" === a.attrs.align ? "start" : "center"
      },
      m = (0, u.useCallback)(function () {
        n.commands.setNodeSelection(r());
      }, [r, n.commands]);
    return u.default.createElement(c.NodeViewWrapper, null, u.default.createElement("div", {
      className: s,
      style: {
        width: a.attrs.width
      }
    }, u.default.createElement("div", {
      contentEditable: !1,
      ref: o,
      style: d
    }, u.default.createElement("img", {
      className: "block",
      src: i,
      alt: "",
      onClick: m
    }))));
  }, t.default = t.ImageBlockView;
});
