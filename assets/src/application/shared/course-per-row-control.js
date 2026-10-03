// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function cne(e) {
  var t = e.onChange,
    n = e.defaultValue,
    r = void 0 === n ? 4 : n,
    a = function (e, t) {
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
          if ("string" == typeof e) return lne(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lne(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(r), 2),
    o = a[0],
    i = a[1],
    l = function (e) {
      return {
        width: 4 === e ? "77.49px" : "76.356px",
        height: "63.623px",
        border: "1.631px solid ".concat(o == e ? "#6e42d3" : "rgba(200,210,233,0.5)"),
        borderRadius: "1.631px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "8.157px 11.42px",
        cursor: "pointer",
        transition: "border-color 0.2s ease"
      };
    },
    c = {
      display: "flex",
      flexDirection: "column",
      gap: "8.157px",
      alignItems: "center"
    },
    u = {
      display: "flex",
      alignItems: "center",
      lineHeight: "0",
      gap: "3px"
    },
    s = function (e) {
      return {
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400,
        fontSize: "12px",
        color: o === e ? "#000d25" : "#1f2328",
        lineHeight: "11.42px",
        textAlign: "center",
        margin: "0"
      };
    };
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
      lineHeight: "0"
    }
  }, React.createElement(I.HeadingWP, {
    level: "4"
  }, (0, b.__)("Course Per Row", "ohmylms")), React.createElement("div", {
    style: {
      display: "flex",
      gap: "6.525px",
      alignItems: "center"
    }
  }, [1, 2, 3, 4].map(function (e) {
    return React.createElement("div", {
      key: e,
      style: l(e),
      onClick: function () {
        return function (e) {
          i(e), t && t(e);
        }(e);
      }
    }, React.createElement("div", {
      style: c
    }, React.createElement("div", {
      style: u
    }, function (e) {
      for (var t = [], n = 1 === e ? "54.651px" : 2 === e ? "26.102px" : 3 === e ? "15.498px" : "10.604px", r = 0; r < e; r++) t.push(React.createElement("div", {
        key: r,
        style: {
          width: n,
          height: "26.102px",
          border: "1.142px solid ".concat(o === e ? "#000d25" : "#687784"),
          borderRadius: "3.263px"
        }
      }));
      return t;
    }(e)), React.createElement("p", {
      style: s(e)
    }, e)));
  })));
}
