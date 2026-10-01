// Reconstructed Webpack factory 94490; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => m
  });
  var r = n(41594),
    a = n.n(r),
    o = n(2214);
  function i(e) {
    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, i(e);
  }
  var l = ["loading", "isBusy", "children", "padding", "style"];
  function c() {
    return c = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, c.apply(null, arguments);
  }
  function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(n), !0).forEach(function (t) {
        d(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function d(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != i(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != i(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == i(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  const m = a().forwardRef(function (e, t) {
    var n = e.loading,
      r = e.isBusy,
      i = e.children,
      u = e.padding,
      d = e.style,
      m = function (e, t) {
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
      }(e, l),
      p = s(s(s({}, u ? {
        padding: u
      } : ["secondary", "primary"].includes(null == m ? void 0 : m.variant) && "small" !== (null == m ? void 0 : m.size) ? {
        padding: "6px 24px"
      } : {}), "outline" === (null == m ? void 0 : m.variant) ? {
        border: "1px solid #C8D2E980",
        backgroundColor: "transparent",
        color: "#000D25"
      } : {}), d);
    return a().createElement(o.Button, c({
      ref: t
    }, m, {
      isBusy: n || r,
      style: p
    }), i);
  });
});
