// Reconstructed Webpack factory 38221; arguments retain original semantics.
((e, t, n) => {
  var r = n(23805),
    a = n(10124),
    i = n(99374),
    o = Math.max,
    s = Math.min;
  e.exports = function (e, t, n) {
    var l,
      c,
      u,
      d,
      p,
      f,
      h = 0,
      _ = !1,
      m = !1,
      A = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    function g(t) {
      var n = l,
        r = c;
      return l = c = void 0, h = t, d = e.apply(r, n);
    }
    function y(e) {
      var n = e - f;
      return void 0 === f || n >= t || n < 0 || m && e - h >= u;
    }
    function v() {
      var e = a();
      if (y(e)) return E(e);
      p = setTimeout(v, function (e) {
        var n = t - (e - f);
        return m ? s(n, u - (e - h)) : n;
      }(e));
    }
    function E(e) {
      return p = void 0, A && l ? g(e) : (l = c = void 0, d);
    }
    function b() {
      var e = a(),
        n = y(e);
      if (l = arguments, c = this, f = e, n) {
        if (void 0 === p) return function (e) {
          return h = e, p = setTimeout(v, t), _ ? g(e) : d;
        }(f);
        if (m) return clearTimeout(p), p = setTimeout(v, t), g(f);
      }
      return void 0 === p && (p = setTimeout(v, t)), d;
    }
    return t = i(t) || 0, r(n) && (_ = !!n.leading, u = (m = "maxWait" in n) ? o(i(n.maxWait) || 0, t) : u, A = "trailing" in n ? !!n.trailing : A), b.cancel = function () {
      void 0 !== p && clearTimeout(p), h = 0, l = f = c = p = void 0;
    }, b.flush = function () {
      return void 0 === p ? d : E(a());
    }, b;
  };
});
