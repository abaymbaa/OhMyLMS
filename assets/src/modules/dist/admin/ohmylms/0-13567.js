// Reconstructed Webpack factory 13567; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    A: () => s
  });
  var r = n(41594),
    a = (n(12470), n(38093)),
    o = n(13174),
    i = n(86169),
    l = n(37562);
  function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var u = (0, r.forwardRef)(function (e, t) {
    var n,
      u,
      s = e.variant,
      d = void 0 === s ? "medium" : s,
      m = e.onSubmit,
      p = e.defaultValue,
      f = e.placeholder,
      v = e.type,
      g = void 0 === v ? "course" : v,
      h = e.disabled,
      y = (0, l.useDispatch)(i.default),
      b = (n = (0, r.useState)(null != p ? p : ""), u = 2, function (e) {
        if (Array.isArray(e)) return e;
      }(n) || function (e, t) {
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
      }(n, u) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return c(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0;
        }
      }(n, u) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }()),
      _ = b[0],
      w = b[1];
    return (0, r.useEffect)(function () {
      p && w(p);
    }, [p]), React.createElement(React.Fragment, null, React.createElement(a.CardWP, {
      isBorderless: !0,
      variant: "secondary",
      fullWidth: !0,
      padding: "12px"
    }, React.createElement(a.TextareaWP, {
      ref: t,
      onChange: function (e) {
        w(e);
      },
      value: _,
      placeholder: f,
      style: {
        border: "none",
        background: "transparent",
        boxShadow: "none",
        resize: "none",
        padding: 0
      },
      className: "ohmylms-prompt-input ohmylms-prompt-input-".concat(d)
    }), React.createElement(a.SpacerWP, null), React.createElement(a.FlexWP, {
      align: "center",
      justify: "flex-end"
    }, React.createElement(a.ButtonWP, {
      disabled: h || 0 == _.trim().length,
      onClick: function () {
        0 != _.trim().length && (y.setAISuggestion({
          type: g,
          data: _.trim()
        }), m && "function" == typeof m && m(_.trim()));
      },
      icon: React.createElement(o.A, null),
      variant: "primary"
    }))));
  });
  const s = (0, r.memo)(u);
});
