// Reconstructed Webpack factory 97391; arguments retain original semantics.
((e, t, n) => {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.templateExport = void 0;
  var l = n(12470);
  t.templateExport = function (e, t, n) {
    var a = "html" === t ? "text/html" : "mjml" === t ? "text/mjml" : "json" === t ? "application/json" : function () {
        throw new Error((0, l.__)("Unsupported file type.", "mrm"));
      }(),
      i = document.createElement("textarea");
    i.value = e, document.body.appendChild(i), i.select(), document.execCommand("copy"), document.body.removeChild(i);
    var o = new Blob([e], {
        type: a
      }),
      r = URL.createObjectURL(o),
      c = document.createElement("a");
    c.href = r, c.download = n, c.click(), URL.revokeObjectURL(r);
  };
});
