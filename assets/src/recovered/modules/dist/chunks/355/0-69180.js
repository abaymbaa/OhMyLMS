// Reconstructed Webpack factory 69180; arguments retain original semantics.
((e, t, n) => {
  n.r(t), n.d(t, {
    default: () => r
  });
  var l = n(41594),
    a = n(61696);
  function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, l = Array(t); n < t; n++) l[n] = e[n];
    return l;
  }
  var o = function (e) {
    var t,
      n,
      o = e.className,
      r = void 0 === o ? "" : o,
      c = e.label,
      u = void 0 === c ? "Save" : c,
      d = e.onClick,
      s = void 0 === d ? function () {
        return console.error("No onClick function passed");
      } : d,
      m = e.multiOptions,
      f = void 0 === m ? [] : m,
      p = e.loading,
      g = (t = (0, l.useState)(!1), n = 2, function (e) {
        if (Array.isArray(e)) return e;
      }(t) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var l,
            a,
            i,
            o,
            r = [],
            c = !0,
            u = !1;
          try {
            if (i = (n = n.call(e)).next, 0 === t) {
              if (Object(n) !== n) return;
              c = !1;
            } else for (; !(c = (l = i.call(n)).done) && (r.push(l.value), r.length !== t); c = !0);
          } catch (e) {
            u = !0, a = e;
          } finally {
            try {
              if (!c && null != n.return && (o = n.return(), Object(o) !== o)) return;
            } finally {
              if (u) throw a;
            }
          }
          return r;
        }
      }(t, n) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return i(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
        }
      }(t, n) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }()),
      v = g[0],
      h = g[1],
      b = (0, l.useMemo)(function () {
        return f.length;
      }, [f]),
      _ = (0, l.useRef)(null);
    return (0, a.useOutsideAlerter)(_, h), React.createElement(React.Fragment, null, React.createElement("div", {
      className: "mint-mrm-save-multi-action-btn ".concat(r)
    }, React.createElement("button", {
      onClick: s,
      disabled: p,
      style: 0 == b ? {
        borderRadius: "6px"
      } : {}
    }, u, p && React.createElement("span", {
      className: "mintmrm-loader"
    })), 0 < b && React.createElement(React.Fragment, null, React.createElement("div", {
      className: "dropdown-wrapper ".concat(v ? "show" : ""),
      ref: _,
      onClick: function () {
        return h(!v);
      }
    }, React.createElement("svg", {
      width: "10",
      height: "6",
      fill: "none",
      viewBox: "0 0 10 6",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 5L5 1 1 5"
    })), v && React.createElement("ul", {
      className: "mint-mrm-save-multi-action-dropdown ".concat(b > 2 ? "more-options" : "")
    }, f.map(function (e, t) {
      return React.createElement("li", {
        key: (null == e ? void 0 : e.id) || t,
        onClick: null == e ? void 0 : e.onClick
      }, null == e ? void 0 : e.label);
    }))))));
  };
  const r = (0, l.memo)(o);
});
