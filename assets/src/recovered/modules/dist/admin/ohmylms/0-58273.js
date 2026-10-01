// Reconstructed Webpack factory 58273; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => d
  });
  var r = n(41594);
  function a(e) {
    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, a(e);
  }
  n(12470);
  var o = ["variant", "children", "padding", "paddingX", "paddingY", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "margin", "marginX", "marginY", "marginTop", "marginBottom", "marginLeft", "marginRight", "width", "height", "isBorderLess", "isRounded", "cursor", "textTransform", "color", "style"];
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
  var s = function (e) {
    var t,
      n = e.variant,
      r = void 0 === n ? "default" : n,
      a = e.children,
      l = e.padding,
      u = e.paddingX,
      s = e.paddingY,
      d = e.paddingTop,
      m = e.paddingBottom,
      p = e.paddingLeft,
      f = e.paddingRight,
      v = e.margin,
      g = e.marginX,
      h = e.marginY,
      y = e.marginTop,
      b = e.marginBottom,
      _ = e.marginLeft,
      w = e.marginRight,
      E = e.width,
      S = e.height,
      R = e.isBorderLess,
      x = void 0 !== R && R,
      C = e.isRounded,
      P = void 0 !== C && C,
      O = e.cursor,
      k = void 0 === O ? "default" : O,
      j = e.textTransform,
      A = e.color,
      M = e.style,
      T = function (e, t) {
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
      }(e, o),
      I = ["ohmylms-badge", "ohmylms-badge-".concat(r), x && "ohmylms-badge-borderless", P && "ohmylms-badge-rounded"].filter(Boolean).join(" ");
    return React.createElement("span", i({
      className: I,
      style: (t = {}, l && (t.padding = l), u && (t.paddingLeft = u, t.paddingRight = u), s && (t.paddingTop = s, t.paddingBottom = s), d && (t.paddingTop = d), m && (t.paddingBottom = m), p && (t.paddingLeft = p), f && (t.paddingRight = f), E && (t.width = E), S && (t.height = S), k && (t.cursor = k), v && (t.margin = v), g && (t.marginLeft = g, t.marginRight = g), h && (t.marginTop = h, t.marginBottom = h), y && (t.marginTop = y), b && (t.marginBottom = b), _ && (t.marginLeft = _), w && (t.marginRight = w), j && (t.textTransform = j), A && (t.color = A), M && (t = c(c({}, t), M)), t)
    }, T), a);
  };
  const d = (0, r.memo)(s);
});
