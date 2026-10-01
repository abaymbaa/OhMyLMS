// Reconstructed Webpack factory 74671; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function (e = {}, t, n = 0) {
    var o = (0, a.default)(l(l({}, e), {}, {
      _v6: !0
    }), new Uint8Array(16));
    if (o = (0, i.default)(o), t) {
      for (var s = 0; s < 16; s++) t[n + s] = o[s];
      return t;
    }
    return (0, r.unsafeStringify)(o);
  };
  var r = n(49910),
    a = o(n(13518)),
    i = o(n(30343));
  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function l(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(n), !0).forEach(function (t) {
        c(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function c(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != typeof e || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != typeof n) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == typeof t ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
});
