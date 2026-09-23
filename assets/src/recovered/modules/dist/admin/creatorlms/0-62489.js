// Reconstructed Webpack factory 62489; arguments retain original semantics.
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
    }),
    l = this && this.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var c = i(n(41594)),
    u = n(83574),
    s = l(n(52770)),
    d = n(38093),
    m = n(2214),
    p = n(9014),
    f = l(n(83193)),
    v = n(77558),
    g = n(37562),
    h = n(12470),
    y = l(n(86169)),
    b = function (e) {
      var t = e.onClick;
      return c.default.createElement(d.ButtonWP, {
        icon: c.default.createElement(m.Icon, {
          icon: p.closeSmall
        }),
        size: "small",
        onClick: t,
        style: {
          border: "1px solid #C8D2E959",
          color: "#7A8B9A",
          borderRadius: "50%"
        }
      });
    };
  t.default = function (e) {
    var t,
      n = (0, g.useDispatch)(y.default),
      r = e.editor,
      a = e.deleteNode,
      o = e.node,
      i = ((0, c.useRef)(null), (0, c.useRef)(null)),
      l = (0, v.useIsPro)(),
      d = (0, g.useSelect)(function (e) {
        return e(y.default).getAISettings();
      }, []),
      m = (0, g.useSelect)(function (e) {
        return e(y.default).getAllIntegrations();
      }, []),
      p = function () {
        null !== i.current && (r.isDestroyed || r.commands.deleteRange({
          from: i.current,
          to: i.current + 1
        }), i.current = null), a(), r.commands.focus();
      };
    return l ? (null === (t = null == m ? void 0 : m.ai_model) || void 0 === t ? void 0 : t.is_enable) ? (null == d ? void 0 : d.self) || "anthropic" !== (null == d ? void 0 : d.platform) ? (null == d ? void 0 : d.self) || (null == d ? void 0 : d.api_key) ? c.default.createElement(u.NodeViewWrapper, {
      className: "ai-text-card"
    }, c.default.createElement(s.default, {
      cardStyle: {
        position: "relative",
        top: "0",
        left: "0",
        zIndex: "1",
        width: "100%"
      },
      onInsert: function (t) {
        var n = {
          type: "imageBlock",
          attrs: {
            src: null == t ? void 0 : t.source_url,
            alt: "AI Image"
          }
        };
        if (null !== i.current) {
          var l = i.current;
          r.chain().focus().insertContentAt({
            from: l,
            to: l + 1
          }, n).run(), i.current = null, a();
        } else {
          var c = e.getPos();
          r.chain().focus().insertContentAt({
            from: c,
            to: c + o.nodeSize
          }, n).run();
        }
      },
      onPreview: function (t) {
        if (t) {
          var n = i.current;
          if (null !== n) r.chain().focus().insertContentAt({
            from: n,
            to: n + 1
          }, {
            type: "imageBlock",
            attrs: {
              src: t,
              alt: "AI Preview Image"
            }
          }).run();else {
            var a = e.getPos();
            r.chain().focus().insertContentAt(a, {
              type: "imageBlock",
              attrs: {
                src: t,
                alt: "AI Preview Image"
              }
            }).run(), i.current = a;
          }
        } else null !== i.current && (r.commands.deleteRange({
          from: i.current,
          to: i.current + 1
        }), i.current = null);
      },
      closeButton: c.default.createElement(b, {
        onClick: p
      })
    })) : (n.updateProModalTitle((0, h.__)("Please configure AI Model API Key", "ohmylms")), n.updateProModalContent((0, h.__)("Go to addons page and configure the AI Model API Key to use this feature.", "ohmylms")), n.updateProModalButtonText(null), c.default.createElement(f.default, {
      isOpen: !0,
      onClose: p
    })) : (n.updateProModalTitle((0, h.__)("Anthropic does not support image generation", "ohmylms")), n.updateProModalContent((0, h.__)("Image generation is not available with Anthropic. Please use a different model (Self hosted or Open AI).", "ohmylms")), n.updateProModalButtonText(null), c.default.createElement(f.default, {
      isOpen: !0,
      onClose: p
    })) : (n.updateProModalTitle((0, h.__)("Please enable AI Suite", "ohmylms")), n.updateProModalContent((0, h.__)("Go to addons page and enable the AI Suite to use this feature. You can use self hosted AI model, Open AI, Anthropic or Gemini.", "ohmylms")), n.updateProModalButtonText(null), c.default.createElement(f.default, {
      isOpen: !0,
      onClose: p
    })) : c.default.createElement(f.default, {
      isOpen: !0,
      onClose: p
    });
  };
});
