// Reconstructed Webpack factory 71046; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => l
  });
  var r = n(41594),
    a = n(2214);
  function o(e, t) {
    if (e) {
      if ("string" == typeof e) return i(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
    }
  }
  function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  const l = function () {
    var e,
      t,
      n = (e = (0, r.useState)([]), t = 2, function (e) {
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
      }(e, t) || o(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }()),
      l = n[0],
      c = n[1],
      u = (0, r.useCallback)(function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "info",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3,
          r = Date.now();
        c(function (n) {
          var a = [].concat(function (e) {
            return function (e) {
              if (Array.isArray(e)) return i(e);
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || o(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }(n), [{
            id: r,
            status: e,
            message: t
          }]);
          return a.length > 3 && a.shift(), a;
        }), n > 0 && setTimeout(function () {
          c(function (e) {
            return e.filter(function (e) {
              return e.id !== r;
            });
          });
        }, n);
      }, []);
    return {
      openNotificationWithIcon: u,
      contextHolder: React.createElement("div", {
        className: "omlms-notice-wrapper",
        style: {
          position: "fixed",
          top: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 99999999,
          width: "auto",
          maxWidth: "90%",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }
      }, l.map(function (e) {
        var t = e.id,
          n = e.status,
          r = e.message;
        return React.createElement(a.Notice, {
          key: t,
          status: n,
          isDismissible: !0,
          onRemove: function () {
            return c(function (e) {
              return e.filter(function (e) {
                return e.id !== t;
              });
            });
          }
        }, r);
      }))
    };
  };
});
