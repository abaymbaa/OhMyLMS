// Reconstructed Webpack factory 45083; arguments retain original semantics.
((e, t, n) => {
  var r = n(1882),
    a = n(87296),
    i = n(23805),
    o = n(47473),
    s = /^\[object .+?Constructor\]$/,
    l = Function.prototype,
    c = Object.prototype,
    u = l.toString,
    d = c.hasOwnProperty,
    p = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  e.exports = function (e) {
    return !(!i(e) || a(e)) && (r(e) ? p : s).test(o(e));
  };
});
