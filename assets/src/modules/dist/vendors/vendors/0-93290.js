// Reconstructed Webpack factory 93290; arguments retain original semantics.
((e, t, n) => {
  e = n.nmd(e);
  var r = n(9325),
    a = t && !t.nodeType && t,
    i = a && e && !e.nodeType && e,
    o = i && i.exports === a ? r.Buffer : void 0,
    s = o ? o.allocUnsafe : void 0;
  e.exports = function (e, t) {
    if (t) return e.slice();
    var n = e.length,
      r = s ? s(n) : new e.constructor(n);
    return e.copy(r), r;
  };
});
