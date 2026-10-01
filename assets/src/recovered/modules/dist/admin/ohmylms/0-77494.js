// Reconstructed Webpack factory 77494; arguments retain original semantics.
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
  }), t.ImageUploader = void 0;
  var c = n(98217),
    u = n(87477),
    s = n(20131),
    d = i(n(41594)),
    m = l(n(2543));
  t.ImageUploader = function (e) {
    var t = e.onUpload,
      n = e.onCancel;
    m.default.noConflict();
    var r = (0, u.useUploader)({
        onUpload: t
      }).loading,
      a = !1,
      o = (0, d.useCallback)(function () {
        if ("undefined" != typeof wp && void 0 !== wp.media) {
          var e = wp.media({
            title: "Select or Upload Media",
            button: {
              text: "Use this media"
            },
            multiple: !1,
            library: {
              type: "image"
            }
          });
          e.on("open", function () {
            e.content.mode("upload"), e.on("uploader:ready", function () {
              document.querySelectorAll('.moxie-shim-html5 input[type="file"]').forEach(function (e) {
                e.setAttribute("tabIndex", "-1"), e.setAttribute("multiple", "false"), e.setAttribute("accept", "image/jpeg, image/png, image/gif, image/svg+xml, image/webp"), e.setAttribute("aria-hidden", "true");
              });
            });
          }), e.on("select", function () {
            a = !0;
            var n = e.state().get("selection").first().toJSON().url;
            t && t(n);
          }), e.on("close", function () {
            setTimeout(function () {
              !a && n && n();
            }, 500);
          }), e.open();
        } else console.error("wp.media is not available.");
      }, [t, n]);
    return r ? d.default.createElement("div", {
      className: "flex items-center justify-center p-8 rounded-lg min-h-[10rem] bg-opacity-80"
    }, d.default.createElement(c.Spinner, {
      className: "text-neutral-500",
      size: 1.5
    })) : ((0, s.cn)("flex flex-col items-center justify-center px-8 py-10 rounded-lg bg-opacity-80"), (0, d.useEffect)(function () {
      o();
    }, [t]), d.default.createElement(d.default.Fragment, null));
  };
});
