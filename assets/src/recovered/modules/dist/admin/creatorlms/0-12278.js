// Reconstructed Webpack factory 12278; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => d
  });
  var r = n(91386),
    a = n(2214),
    o = n(46942),
    i = n.n(o),
    l = ["items", "activekey", "onChange", "className", "centered", "tabBarExtraContent", "variant"];
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
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != n) {
        var r,
          a,
          o,
          i,
          l = [],
          c = !0,
          u = !1;
        try {
          if (o = (n = n.call(e)).next, 0 === t) {
            if (Object(n) !== n) return;
            c = !1;
          } else for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
        } catch (e) {
          u = !0, a = e;
        } finally {
          try {
            if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return;
          } finally {
            if (u) throw a;
          }
        }
        return l;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return s(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  const d = (0, r.memo)(function (e) {
    var t = e.items,
      n = void 0 === t ? [] : t,
      o = e.activekey,
      s = e.onChange,
      d = void 0 === s ? function () {} : s,
      m = e.className,
      p = void 0 === m ? "" : m,
      f = e.centered,
      v = void 0 !== f && f,
      g = e.tabBarExtraContent,
      h = void 0 === g ? null : g,
      y = e.variant,
      b = void 0 === y ? "horizontal" : y,
      _ = function (e, t) {
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
      w = u((0, r.useState)(o || n[0] && n[0].key), 2),
      E = (w[0], w[1]),
      S = u((0, r.useState)(0), 2),
      R = S[0],
      x = (S[1], n.map(function (e) {
        return {
          name: e.key,
          title: e.label,
          className: i()("omlms-tabs-tab", {
            "omlms-tabs-tab-disabled": e.disabled,
            "omlms-tabs-tab-active": o === e.key
          }),
          content: e.children,
          disabled: (null == e ? void 0 : e.disabled) || !1
        };
      }));
    return React.createElement("div", c({
      className: i()("omlms-tabs-container", p, {
        "omlms-tabs-centered": v,
        "omlms-tabs-vertical": "vertical" === b
      })
    }, _, {
      key: R
    }), h && React.createElement("div", {
      className: "omlms-tabs-header"
    }, React.createElement("div", {
      className: "omlms-tabs-extra"
    }, h)), React.createElement(a.TabPanel, {
      key: R,
      tabs: x,
      initialTabName: o,
      onSelect: function (e) {
        E(e), d(e);
      }
    }, function (e) {
      var t;
      return React.createElement("div", {
        className: "omlms-tabs-content ".concat(o)
      }, null === (t = x.find(function (e) {
        return e.name === o;
      })) || void 0 === t ? void 0 : t.content);
    }));
  });
});
