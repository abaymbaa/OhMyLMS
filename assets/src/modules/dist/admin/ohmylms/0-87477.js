// Reconstructed Webpack factory 87477; arguments retain original semantics.
(function (e, t, n) {
  "use strict";

  var r = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.useDropZone = t.useFileUpload = t.useUploader = void 0;
  var a = n(41594),
    o = r(n(59377));
  t.useUploader = function (e) {
    var t = e.onUpload,
      n = (0, a.useState)(!1),
      r = n[0],
      i = n[1],
      l = (0, a.useCallback)(function (e) {
        var n, r;
        i(!0);
        try {
          t(e);
        } catch (e) {
          var a = (null === (r = null === (n = null == e ? void 0 : e.response) || void 0 === n ? void 0 : n.data) || void 0 === r ? void 0 : r.error) || "Something went wrong";
          o.default.error(a);
        }
        i(!1);
      }, [t]);
    return {
      loading: r,
      uploadFile: l
    };
  }, t.useFileUpload = function () {
    var e = (0, a.useRef)(null),
      t = (0, a.useCallback)(function () {
        var t;
        null === (t = e.current) || void 0 === t || t.click();
      }, []);
    return {
      ref: e,
      handleUploadClick: t
    };
  }, t.useDropZone = function (e) {
    var t = e.uploader,
      n = (0, a.useState)(!1),
      r = n[0],
      o = n[1],
      i = (0, a.useState)(!1),
      l = i[0],
      c = i[1];
    return (0, a.useEffect)(function () {
      var e = function () {
          o(!0);
        },
        t = function () {
          o(!1);
        };
      return document.body.addEventListener("dragstart", e), document.body.addEventListener("dragend", t), function () {
        document.body.removeEventListener("dragstart", e), document.body.removeEventListener("dragend", t);
      };
    }, []), {
      isDragging: r,
      draggedInside: l,
      onDragEnter: function () {
        c(!0);
      },
      onDragLeave: function () {
        c(!1);
      },
      onDrop: (0, a.useCallback)(function (e) {
        if (c(!1), 0 !== e.dataTransfer.files.length) {
          for (var n = e.dataTransfer.files, r = [], a = 0; a < n.length; a += 1) {
            var o = n.item(a);
            o && r.push(o);
          }
          if (!r.some(function (e) {
            return -1 === e.type.indexOf("image");
          })) {
            e.preventDefault();
            var i = r.filter(function (e) {
                return -1 !== e.type.indexOf("image");
              }),
              l = i.length > 0 ? i[0] : void 0;
            l && t(l);
          }
        }
      }, [t])
    };
  };
});
