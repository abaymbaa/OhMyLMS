// Reconstructed Webpack factory 61802; arguments retain original semantics.
((e, t, n) => {
  var r = n(62224),
    a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    i = /\\(\\)?/g,
    o = r(function (e) {
      var t = [];
      return 46 === e.charCodeAt(0) && t.push(""), e.replace(a, function (e, n, r, a) {
        t.push(r ? a.replace(i, "$1") : n || e);
      }), t;
    });
  e.exports = o;
});
