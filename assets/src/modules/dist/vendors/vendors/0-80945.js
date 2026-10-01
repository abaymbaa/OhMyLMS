// Reconstructed Webpack factory 80945; arguments retain original semantics.
((e, t, n) => {
  var r = n(80079),
    a = n(68223),
    i = n(53661);
  e.exports = function (e, t) {
    var n = this.__data__;
    if (n instanceof r) {
      var o = n.__data__;
      if (!a || o.length < 199) return o.push([e, t]), this.size = ++n.size, this;
      n = this.__data__ = new i(o);
    }
    return n.set(e, t), this.size = n.size, this;
  };
});
