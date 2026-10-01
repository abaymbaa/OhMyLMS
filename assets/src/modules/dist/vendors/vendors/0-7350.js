// Reconstructed Webpack factory 7350; arguments retain original semantics.
((e, t, n) => {
  var r = n(38221),
    a = n(23805);
  e.exports = function (e, t, n) {
    var i = !0,
      o = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    return a(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), r(e, t, {
      leading: i,
      maxWait: t,
      trailing: o
    });
  };
});
