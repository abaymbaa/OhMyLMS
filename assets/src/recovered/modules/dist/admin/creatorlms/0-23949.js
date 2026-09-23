// Reconstructed Webpack factory 23949; arguments retain original semantics.
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
    s = l(n(80224)),
    d = l(n(83193)),
    m = n(77558),
    p = n(37562),
    f = n(12470),
    v = l(n(86169));
  t.default = function (e) {
    var t,
      n = (0, p.useDispatch)(v.default),
      r = e.editor,
      a = e.deleteNode,
      o = e.node,
      i = (0, c.useRef)(null),
      l = (0, m.useIsPro)(),
      g = (0, p.useSelect)(function (e) {
        return e(v.default).getAISettings();
      }, []),
      h = (0, p.useSelect)(function (e) {
        return e(v.default).getAllIntegrations();
      }, []),
      y = function () {
        a(), r.commands.focus();
      };
    return l ? (null === (t = null == h ? void 0 : h.ai_model) || void 0 === t ? void 0 : t.is_enable) ? (null == g ? void 0 : g.self) || (null == g ? void 0 : g.api_key) ? c.default.createElement(u.NodeViewWrapper, {
      className: "ai-text-card"
    }, c.default.createElement(s.default, {
      node: o,
      editor: r,
      onInsert: function (e) {
        r.chain().focus().insertContent(e).run(), a();
      },
      handleClose: y,
      ref: i,
      handleFocusInput: function () {
        i.current && (i.current.focus(), setTimeout(function () {
          i.current.selectionStart = i.current.selectionEnd = i.current.value.length;
        }, 0));
      }
    })) : (n.updateProModalTitle((0, f.__)("Please configure AI Model API Key", "ohmylms")), n.updateProModalContent((0, f.__)("Go to addons page and configure the AI Model API Key to use this feature.", "ohmylms")), n.updateProModalButtonText(null), setShowProModal(!0), c.default.createElement(d.default, {
      isOpen: !0,
      onClose: y
    })) : (n.updateProModalTitle((0, f.__)("Please enable AI Suite", "ohmylms")), n.updateProModalContent((0, f.__)("Go to addons page and enable the AI Suite to use this feature. You can use self hosted AI model, Open AI, Anthropic or Gemini.", "ohmylms")), n.updateProModalButtonText(null), c.default.createElement(d.default, {
      isOpen: !0,
      onClose: y
    })) : c.default.createElement(d.default, {
      isOpen: !0,
      onClose: y
    });
  };
});
