// Reconstructed Webpack factory 53725; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => f
  });
  var r = n(5556),
    a = n.n(r),
    o = n(46942),
    i = n.n(o);
  function l(e) {
    return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, l(e);
  }
  var c = ["src", "alt", "href", "shape", "className", "size", "style", "wrapperStyle"];
  function u() {
    return u = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, u.apply(null, arguments);
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
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(n), !0).forEach(function (t) {
        m(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function m(e, t, n) {
    return (t = function (e) {
      var t = function (e) {
        if ("object" != l(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
          var n = t.call(e, "string");
          if ("object" != l(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e);
      return "symbol" == l(t) ? t : t + "";
    }(t)) in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  var p = function (e) {
    var t = e.src,
      n = e.alt,
      r = void 0 === n ? "" : n,
      a = e.href,
      o = e.shape,
      l = void 0 === o ? "circle" : o,
      s = e.className,
      m = void 0 === s ? "" : s,
      p = e.size,
      f = void 0 === p ? "80" : p,
      v = e.style,
      g = void 0 === v ? {} : v,
      h = e.wrapperStyle,
      y = void 0 === h ? {} : h,
      b = function (e, t) {
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
      }(e, c),
      _ = "omlms-avatar-".concat(l),
      w = i()("omlms-avatar", _, m),
      E = r ? r.trim().split(" ").map(function (e) {
        return e[0];
      }).join("").substring(0, 2).toUpperCase() : "",
      S = t ? React.createElement("img", u({
        src: t,
        alt: r,
        className: "omlms-avatar-img",
        width: f,
        height: f,
        decoding: "async",
        loading: "lazy",
        style: d({
          borderRadius: "circle" === l ? "50%" : "0"
        }, g)
      }, b)) : React.createElement("span", {
        className: "omlms-avatar-fallback",
        style: d({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: f + "px",
          height: f + "px",
          fontSize: Math.floor(f / 2.5) + "px",
          fontWeight: 600,
          background: "#e0e0e0",
          color: "#555",
          borderRadius: "circle" === l ? "50%" : "0"
        }, g)
      }, E);
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: w,
      style: d({
        "--size": f + "px"
      }, y)
    }, a ? React.createElement("a", {
      href: a,
      "aria-label": r,
      className: "omlms-avatar-link"
    }, S) : S));
  };
  p.propTypes = {
    src: a().string,
    alt: a().string,
    href: a().string,
    shape: a().oneOf(["circle", "square", "rounded"]),
    className: a().string
  };
  const f = p;
});
