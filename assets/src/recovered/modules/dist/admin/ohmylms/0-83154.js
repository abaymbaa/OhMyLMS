// Reconstructed Webpack factory 83154; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => s
  });
  var r = n(2214);
  function a(e) {
    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, a(e);
  }
  var o = ["children", "fullWidth", "fullHeight", "flex", "width", "minWidth", "maxWidth", "style"];
  function i() {
    return i = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, i.apply(null, arguments);
  }
  function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(Object(n), !0).forEach(function (t) {
        u(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function u(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != a(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != a(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == a(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  const s = function (e) {
    var t = e.children,
      n = e.fullWidth,
      a = e.fullHeight,
      l = e.flex,
      u = e.width,
      s = e.minWidth,
      d = e.maxWidth,
      m = e.style,
      p = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
              if (-1 !== t.indexOf(r)) continue;
              n[r] = e[r];
            }
            return n;
          }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++) n = o[r], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        }
        return a;
      }(e, o);
    return React.createElement(r.FlexItem, i({
      style: c(c(c(c(c(c(c({}, n ? {
        width: "100%"
      } : {}), a ? {
        height: "100%"
      } : {}), l ? {
        flex: l
      } : {}), u ? {
        width: u
      } : {}), s ? {
        minWidth: s
      } : {}), d ? {
        maxWidth: d
      } : {}), m)
    }, p), t);
  };
});
