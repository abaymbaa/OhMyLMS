// Reconstructed Webpack factory 81076; arguments retain original semantics.
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
  }), t.CustomHTMLComponent = void 0;
  var l = i(n(41594)),
    c = n(83574),
    u = n(12470),
    s = n(38093),
    d = n(2214),
    m = n(9014),
    p = function (e) {
      var t = e.onClick;
      return l.default.createElement(s.ButtonWP, {
        icon: l.default.createElement(d.Icon, {
          icon: m.closeSmall
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
  t.CustomHTMLComponent = function (e) {
    var t = e.node,
      n = e.updateAttributes,
      r = e.deleteNode,
      a = e.editor,
      o = (0, l.useState)("editor"),
      i = o[0],
      s = o[1],
      d = (0, l.useState)(t.attrs.rawHTML || ""),
      m = d[0],
      f = d[1],
      v = (0, l.useState)(t.attrs.height || ""),
      g = (v[0], v[1]),
      h = (0, l.useRef)(null),
      y = (0, l.useRef)(null);
    (0, l.useEffect)(function () {
      f(t.attrs.rawHTML || ""), g(t.attrs.height || "");
    }, [t.attrs.rawHTML, t.attrs.height]), (0, l.useEffect)(function () {
      h.current && h.current.focus();
    }, []), (0, l.useEffect)(function () {
      if (y.current && "preview" === i) {
        y.current.srcdoc = m;
        var e = function () {
          if (y.current && y.current.contentWindow) try {
            var e = y.current.contentWindow.document.body,
              r = e.querySelectorAll("img"),
              a = Array.from(r).map(function (e) {
                return e.complete ? Promise.resolve() : new Promise(function (t) {
                  e.onload = t, e.onerror = t;
                });
              });
            Promise.all(a).then(function () {
              var r;
              if (null === (r = y.current) || void 0 === r ? void 0 : r.contentWindow) {
                var a = Math.max(e.scrollHeight, e.offsetHeight),
                  o = Math.max(a, 200);
                y.current.style.height = o + "px", t.attrs.customHeight || (n({
                  height: o
                }), g(o));
              }
            });
          } catch (e) {
            y.current.style.height = "300px", t.attrs.customHeight || (n({
              height: 300
            }), g(300));
          }
        };
        y.current.onload = function () {
          setTimeout(e, 50);
        };
      }
    }, [m, i, n]);
    var b = function (e) {
      s(e);
    };
    return l.default.createElement(c.NodeViewWrapper, {
      className: "custom-html-node-wrapper"
    }, l.default.createElement("div", {
      className: "custom-html-card"
    }, l.default.createElement("div", {
      className: "custom-html-header"
    }, l.default.createElement("div", {
      className: "custom-html-tabs"
    }, l.default.createElement("button", {
      type: "button",
      className: "custom-html-tab ".concat("editor" === i ? "active" : ""),
      onClick: function () {
        return b("editor");
      }
    }, (0, u.__)("Editor", "ohmylms")), l.default.createElement("button", {
      type: "button",
      className: "custom-html-tab ".concat("preview" === i ? "active" : ""),
      onClick: function () {
        return b("preview");
      }
    }, (0, u.__)("Preview", "ohmylms"))), l.default.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    }, l.default.createElement(p, {
      onClick: function () {
        r(), a.commands.focus();
      }
    }))), l.default.createElement("div", {
      className: "custom-html-content"
    }, "editor" === i ? l.default.createElement("textarea", {
      ref: h,
      className: "custom-html-editor",
      value: m,
      onChange: function (e) {
        var t = e.target.value;
        f(t), n({
          rawHTML: t,
          renderedHTML: t
        });
      },
      onKeyDown: function (e) {
        "editor" === i && e.stopPropagation();
      },
      placeholder: (0, u.__)("Write HTML...", "ohmylms"),
      spellCheck: !1
    }) : l.default.createElement("div", {
      className: "custom-html-preview"
    }, m ? l.default.createElement("iframe", {
      ref: y,
      className: "custom-html-preview-iframe",
      "data-custom-html-iframe": "true",
      sandbox: "allow-scripts allow-same-origin",
      srcdoc: m,
      style: {
        width: "100%",
        border: "none",
        height: t.attrs.height ? "".concat(t.attrs.height, "px") : "200px"
      }
    }) : l.default.createElement("div", {
      className: "custom-html-preview-empty"
    }, (0, u.__)("No HTML to preview", "ohmylms"))))));
  }, t.default = t.CustomHTMLComponent;
});
