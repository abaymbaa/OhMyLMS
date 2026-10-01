// Reconstructed Webpack factory 6273; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => m
  });
  var r = n(41594),
    a = (n(12470), n(38093));
  function o(e) {
    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, o(e);
  }
  var i = ["children"];
  function l() {
    return l = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, l.apply(null, arguments);
  }
  function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function u(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != o(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != o(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == o(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  var s = (0, r.forwardRef)(function (e, t) {
      var n = e.children,
        r = function (e, t) {
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
        }(e, i),
        o = function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(n), !0).forEach(function (t) {
              u(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }
          return e;
        }({
          border: "none",
          background: "radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 7px, transparent 7px) 0% 0%/8px 8px no-repeat,\n            radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 7px, transparent 7px) 100% 0%/8px 8px no-repeat,\n            radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 7px, transparent 7px) 0% 100%/8px 8px no-repeat,\n            radial-gradient(circle at 0 0, #ffffff 0, #ffffff 7px, transparent 7px) 100% 100%/8px 8px no-repeat,\n            linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 2px) calc(100% - 16px) no-repeat,\n            linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 16px) calc(100% - 2px) no-repeat,\n            linear-gradient(0deg, #6e42d3 20%, #ffffff 47%, #c442d3 65%, #FFC554 96%)",
          borderRadius: "8px"
        }, null == r ? void 0 : r.style);
      return React.createElement(React.Fragment, null, React.createElement(a.CardWP, l({}, r, {
        padding: "8px",
        style: o,
        isBorderless: !0,
        fullWidth: !0,
        ref: t
      }), " ", n));
    }),
    d = (0, r.memo)(s);
  d.displayName = "AiCard";
  const m = d;
});
