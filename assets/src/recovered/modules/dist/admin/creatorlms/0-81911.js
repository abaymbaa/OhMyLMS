// Reconstructed Webpack factory 81911; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => m
  });
  var r = n(41594),
    a = n(75206),
    o = n(12470),
    i = n(38093),
    l = n(2214),
    c = n(41573);
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
  var d = function (e) {
    var t = e.data,
      n = e.margin,
      s = u((0, r.useState)(!1), 2),
      d = s[0],
      m = s[1],
      p = u((0, r.useState)({
        top: 0,
        left: 0,
        right: "auto"
      }), 2),
      f = p[0],
      v = p[1],
      g = (0, r.useRef)(null),
      h = (0, r.useRef)(null),
      y = (0, r.useRef)(null);
    (0, r.useEffect)(function () {
      return h.current = document.createElement("div"), document.body.appendChild(h.current), function () {
        document.body.removeChild(h.current);
      };
    }, []);
    var b = function () {
        return m(!1);
      },
      _ = d && h.current ? (0, a.createPortal)(React.createElement("div", {
        ref: y,
        className: "omlms-tooltip-box",
        style: {
          position: "fixed",
          top: "".concat(f.top, "px"),
          left: "auto",
          right: "".concat(f.right, "px"),
          opacity: 0 === f.top ? 0 : 1,
          transition: "opacity 0.1s ease-in-out"
        },
        onMouseLeave: b
      }, React.createElement(i.SpacerWP, {
        paddingBottom: "5px"
      }, React.createElement(i.HeadingWP, {
        label: 3,
        color: "#000D25",
        size: 12,
        weight: 700
      }, (0, o.__)("Prompt Format Example", "ohmylms"))), React.createElement(i.CardWP, {
        isBorderless: !0,
        style: {
          background: "#F4F5F7",
          padding: "10px",
          borderRadius: "4px"
        }
      }, React.createElement(i.TextWP, {
        size: 12,
        color: "#000D25",
        style: {
          whiteSpace: "pre-wrap"
        }
      }, t))), h.current) : null;
    return React.createElement(React.Fragment, null, React.createElement("div", {
      ref: g,
      style: {
        margin: null != n ? n : "0"
      },
      className: "clrms-ai-template-wrapper",
      onMouseEnter: function () {
        if (g.current) {
          var e = g.current.getBoundingClientRect();
          m(!0), setTimeout(function () {
            if (y.current) {
              var t = y.current.getBoundingClientRect().height,
                n = e.top,
                r = window.innerHeight - e.bottom,
                a = n >= t + 8,
                o = (a && r >= t + 8 ? n > r : a) ? e.top - t - 8 : e.bottom + 8;
              v({
                top: o,
                left: e.left,
                right: window.innerWidth - e.right - 24
              });
            }
          }, 0);
        }
      },
      onMouseLeave: function () {
        setTimeout(function () {
          var e;
          null !== (e = h.current) && void 0 !== e && e.matches(":hover") || b();
        }, 100);
      }
    }, React.createElement(i.ButtonWP, {
      size: "small",
      style: {
        color: "var(--omlms-primary-color)"
      }
    }, React.createElement(l.Icon, {
      icon: c.A,
      style: {
        marginRight: 6,
        fontSize: 18,
        width: 18,
        height: 18
      }
    }), React.createElement(i.TextWP, {
      color: "#7A8B9A",
      fontSize: "14px"
    }, (0, o.__)("Prompt examples", "ohmylms")))), _);
  };
  const m = (0, r.memo)(d);
});
