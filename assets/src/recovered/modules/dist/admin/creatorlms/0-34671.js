// Reconstructed Webpack factory 34671; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => p
  });
  var r = n(41594),
    a = n(75206),
    o = n.n(a),
    i = n(12470),
    l = n(38093),
    c = n(2214),
    u = n(43337);
  function s(e, t) {
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
        if ("string" == typeof e) return d(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var m = function (e) {
    var t = e.onClick,
      n = e.data,
      a = void 0 === n ? [] : n,
      d = e.disable,
      m = void 0 !== d && d,
      p = s((0, r.useState)(!1), 2),
      f = p[0],
      v = p[1],
      g = s((0, r.useState)({
        top: 0,
        left: 0
      }), 2),
      h = g[0],
      y = g[1],
      b = (0, r.useRef)(null),
      _ = (0, r.useRef)(null),
      w = (0, r.useCallback)(function () {
        if (b.current && _.current) {
          var e,
            t = b.current.getBoundingClientRect(),
            n = _.current.offsetHeight,
            r = _.current.offsetWidth,
            a = t.top,
            o = window.innerHeight - t.bottom;
          e = o >= n || o > a ? t.bottom + window.scrollY + 1 : t.top + window.scrollY - n - 1;
          var i = t.left + window.scrollX;
          i + r > window.innerWidth && (i = window.innerWidth - r - 8), i < 8 && (i = 8), y({
            top: e,
            left: i
          });
        }
      }, []),
      E = function () {
        return v(!1);
      };
    (0, r.useEffect)(function () {
      if (f) {
        requestAnimationFrame(w);
        var e = function (e) {
          var t, n;
          null !== (t = b.current) && void 0 !== t && t.contains(e.target) || null !== (n = _.current) && void 0 !== n && n.contains(e.target) || E();
        };
        return window.addEventListener("scroll", w, !0), window.addEventListener("resize", w), document.addEventListener("mousemove", e), function () {
          window.removeEventListener("scroll", w, !0), window.removeEventListener("resize", w), document.removeEventListener("mousemove", e);
        };
      }
    }, [f, w]);
    return a.length ? React.createElement(React.Fragment, null, React.createElement("div", {
      className: "clrms-ai-history-wrapper",
      ref: b
    }, React.createElement(l.ButtonWP, {
      size: "small",
      icon: React.createElement(c.Icon, {
        icon: u.A,
        width: "24px",
        height: "24px"
      }),
      onMouseEnter: function () {
        m || v(!0);
      },
      disable: "".concat(m)
    }, (0, i.__)("History", "learndash"))), f && o().createPortal(React.createElement("div", {
      ref: _,
      className: "omlms-history-list",
      onMouseLeave: E,
      style: {
        position: "absolute",
        top: "".concat(h.top - 1, "px"),
        left: "".concat(h.left, "px")
      }
    }, a.map(function (e, n) {
      return React.createElement(l.TextWP, {
        key: n,
        size: 12,
        weight: 500,
        color: "#000D25",
        onClick: function () {
          return function (e) {
            t(e), E();
          }(e);
        }
      }, e);
    })), document.body), React.createElement("style", {
      scoped: !0
    }, "\n\t\t\t\t.clrms-ai-history-wrapper {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t}\n\t\t\t\t.omlms-history-list {\n\t\t\t\t\twidth: 187px;\n\t\t\t\t\tmax-height: 176px;\n\t\t\t\t\tbackground: #FFF;\n\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t\tbox-shadow: 0px 3px 25px 2px rgba(0, 0, 0, 0.15),\n\t\t\t\t\t\t0px 0px 14px -4px rgba(0, 0, 0, 0.05);\n\t\t\t\t\tpadding: 4px 4px 0;\n\t\t\t\t\toverflow: auto;\n                    overflow-x: hidden;\n\t\t\t\t\tz-index: 999999;\n\t\t\t\t\ttransition: opacity 0.2s ease-in-out;\n\t\t\t\t}\n\t\t\t\t.omlms-history-list span {\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\t\tpadding: 4px 4px 8px;\n\t\t\t\t\tline-height: 1;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tdisplay: block;\n                    height: 16px;\n\t\t\t\t}\n\t\t\t\t.omlms-history-list span:last-child {\n\t\t\t\t\tpadding-bottom: 4px;\n\t\t\t\t}\n\t\t\t\t.omlms-history-list span:hover {\n\t\t\t\t\tcolor: var(--omlms-primary-color);\n\t\t\t\t}\n\t\t\t")) : null;
  };
  const p = (0, r.memo)(m);
});
