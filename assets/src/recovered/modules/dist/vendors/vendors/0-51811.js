// Reconstructed Webpack factory 51811; arguments retain original semantics.
(e => {
  var t = Date.now;
  e.exports = function (e) {
    var n = 0,
      r = 0;
    return function () {
      var a = t(),
        i = 16 - (a - r);
      if (r = a, i > 0) {
        if (++n >= 800) return arguments[0];
      } else n = 0;
      return e.apply(void 0, arguments);
    };
  };
});
