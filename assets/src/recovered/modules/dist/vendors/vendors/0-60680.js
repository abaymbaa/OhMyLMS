// Reconstructed Webpack factory 60680; arguments retain original semantics.
((e, t, n) => {
  var r = n(13222),
    a = /[\\^$.*+?()[\]{}|]/g,
    i = RegExp(a.source);
  e.exports = function (e) {
    return (e = r(e)) && i.test(e) ? e.replace(a, "\\$&") : e;
  };
});
