// Reconstructed Webpack factory 70695; arguments retain original semantics.
((e, t, n) => {
  var r = n(78096),
    a = n(72428),
    i = n(56449),
    o = n(3656),
    s = n(30361),
    l = n(37167),
    c = Object.prototype.hasOwnProperty;
  e.exports = function (e, t) {
    var n = i(e),
      u = !n && a(e),
      d = !n && !u && o(e),
      p = !n && !u && !d && l(e),
      f = n || u || d || p,
      h = f ? r(e.length, String) : [],
      _ = h.length;
    for (var m in e) !t && !c.call(e, m) || f && ("length" == m || d && ("offset" == m || "parent" == m) || p && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || s(m, _)) || h.push(m);
    return h;
  };
});
