// Reconstructed Webpack factory 63717; arguments retain original semantics.
(e => {
  "use strict";

  function t(e) {
    this.content = e;
  }
  t.prototype = {
    constructor: t,
    find: function (e) {
      for (var t = 0; t < this.content.length; t += 2) if (this.content[t] === e) return t;
      return -1;
    },
    get: function (e) {
      var t = this.find(e);
      return -1 == t ? void 0 : this.content[t + 1];
    },
    update: function (e, n, r) {
      var a = r && r != e ? this.remove(r) : this,
        i = a.find(e),
        o = a.content.slice();
      return -1 == i ? o.push(r || e, n) : (o[i + 1] = n, r && (o[i] = r)), new t(o);
    },
    remove: function (e) {
      var n = this.find(e);
      if (-1 == n) return this;
      var r = this.content.slice();
      return r.splice(n, 2), new t(r);
    },
    addToStart: function (e, n) {
      return new t([e, n].concat(this.remove(e).content));
    },
    addToEnd: function (e, n) {
      var r = this.remove(e).content.slice();
      return r.push(e, n), new t(r);
    },
    addBefore: function (e, n, r) {
      var a = this.remove(n),
        i = a.content.slice(),
        o = a.find(e);
      return i.splice(-1 == o ? i.length : o, 0, n, r), new t(i);
    },
    forEach: function (e) {
      for (var t = 0; t < this.content.length; t += 2) e(this.content[t], this.content[t + 1]);
    },
    prepend: function (e) {
      return (e = t.from(e)).size ? new t(e.content.concat(this.subtract(e).content)) : this;
    },
    append: function (e) {
      return (e = t.from(e)).size ? new t(this.subtract(e).content.concat(e.content)) : this;
    },
    subtract: function (e) {
      var n = this;
      e = t.from(e);
      for (var r = 0; r < e.content.length; r += 2) n = n.remove(e.content[r]);
      return n;
    },
    toObject: function () {
      var e = {};
      return this.forEach(function (t, n) {
        e[t] = n;
      }), e;
    },
    get size() {
      return this.content.length >> 1;
    }
  }, t.from = function (e) {
    if (e instanceof t) return e;
    var n = [];
    if (e) for (var r in e) n.push(r, e[r]);
    return new t(n);
  }, e.exports = t;
});
