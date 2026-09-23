// Reconstructed Webpack factory 36032; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => d
  });
  var r = n(2214),
    a = n(41594);
  function o(e) {
    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, o(e);
  }
  var i = ["children", "actions", "fullHeight", "fullWidth", "cursor", "padding", "margin", "style", "width", "height", "minHeight", "borderRadius"];
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
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(n), !0).forEach(function (t) {
        s(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function s(e, t, n) {
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
  const d = (0, a.forwardRef)(function (e, t) {
    var n = e.children,
      a = e.actions,
      o = e.fullHeight,
      c = e.fullWidth,
      s = e.cursor,
      d = e.padding,
      m = e.margin,
      p = e.style,
      f = e.width,
      v = e.height,
      g = e.minHeight,
      h = e.borderRadius,
      y = function (e, t) {
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
      }(e, i);
    return React.createElement(React.Fragment, null, React.createElement(r.Card, l({
      ref: t,
      style: u(u(u(u(u(u(u(u(u(u({}, o ? {
        minHeight: "100%"
      } : {}), c ? {
        minWidth: "100%"
      } : {}), s ? {
        cursor: s
      } : {}), d ? {
        padding: d
      } : {}), m ? {
        margin: m
      } : {}), f ? {
        width: f
      } : {}), v ? {
        height: v
      } : {}), g ? {
        minHeight: g
      } : {}), h ? {
        borderRadius: h
      } : {}), p)
    }, y), n, a && React.createElement("div", {
      className: "omlms-card-actions"
    }, a)));
  });
});
