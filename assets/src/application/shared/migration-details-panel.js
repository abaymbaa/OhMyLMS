// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function B4() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return L4(u, "_invoke", function (n, r, a) {
      var o,
        l,
        c,
        u = 0,
        s = a || [],
        d = !1,
        m = {
          p: 0,
          n: 0,
          v: e,
          a: p,
          f: p.bind(e, 4),
          d: function (t, n) {
            return o = t, l = 0, c = e, m.n = n, i;
          }
        };
      function p(n, r) {
        for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
          var a,
            o = s[t],
            p = m.p,
            f = o[2];
          n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
        }
        if (a || n > 1) return i;
        throw d = !0, r;
      }
      return function (a, s, f) {
        if (u > 1) throw TypeError("Generator is already running");
        for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
          o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
          try {
            if (u = 2, o) {
              if (l || (a = "next"), t = o[a]) {
                if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                c = t.value, l < 2 && (l = 0);
              } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
              o = e;
            } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
          } catch (t) {
            o = e, l = 1, c = t;
          } finally {
            u = 1;
          }
        }
        return {
          value: t,
          done: d
        };
      };
    }(n, a, o), !0), u;
  }
  var i = {};
  function l() {}
  function c() {}
  function u() {}
  t = Object.getPrototypeOf;
  var s = [][r] ? t(t([][r]())) : (L4(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, L4(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, L4(d, "constructor", u), L4(u, "constructor", c), c.displayName = "GeneratorFunction", L4(u, a, "GeneratorFunction"), L4(d), L4(d, a, "Generator"), L4(d, r, function () {
    return this;
  }), L4(d, "toString", function () {
    return "[object Generator]";
  }), (B4 = function () {
    return {
      w: o,
      m
    };
  })();
}

function L4(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  L4 = function (e, t, n, r) {
    function o(t, n) {
      L4(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, L4(e, t, n, r);
}

function V4(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function H4(e, t) {
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
  }(e, t) || G4(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function G4(e, t) {
  if (e) {
    if ("string" == typeof e) return U4(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? U4(e, t) : void 0;
  }
}

function U4(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function q4(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != z4(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != z4(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == z4(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

var Y4 = "M1.32788 4.74275L4.14909 7.56396L9.73284 1.02771",
  Q4 = function () {
    return React.createElement("svg", {
      width: "9",
      height: "7",
      viewBox: "0 0 9 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M1 3.5L3.5 6L8 1",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  },
  Z4 = function () {
    return React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "9",
      fill: "#15B02C"
    }), React.createElement("path", {
      d: "M5 9.5L7.5 12L13 6.5",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  },
  $4 = function (e) {
    var t = e.lms,
      n = e.isSelected,
      r = e.onSelect;
    return React.createElement("div", {
      onClick: function () {
        return r(t.value);
      },
      role: "button",
      tabIndex: 0,
      onKeyDown: function (e) {
        return "Enter" === e.key && r(t.value);
      },
      style: {
        background: "#ffffff",
        border: "1px solid ".concat(n ? "#6e42d3" : "transparent"),
        borderRadius: "8px",
        padding: "8px 9px",
        minWidth: "240px",
        cursor: "pointer",
        position: "relative",
        boxSizing: "border-box",
        boxShadow: n ? "0px 1px 1px 0px rgba(0,0,0,0.03), 0px 1px 2px 0px rgba(0,0,0,0.02), 0px 3px 3px 0px rgba(0,0,0,0.02), 0px 4px 4px 0px rgba(0,0,0,0.01)" : "0px 2px 3px 0px rgba(147,130,171,0.05), 0px 4px 5px 0px rgba(85,85,85,0.04), 0px 4px 5px 0px rgba(85,85,85,0.03), 0px 16px 16px 0px rgba(85,85,85,0.02)"
      }
    }, n && React.createElement("div", {
      style: {
        position: "absolute",
        top: "16px",
        right: "14px",
        width: "16px",
        height: "16px",
        borderRadius: "100px",
        backgroundColor: "#6e42d3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, React.createElement(Q4, null)), React.createElement("div", {
      style: {
        padding: "8px",
        borderRadius: "16px",
        overflow: "hidden"
      }
    }, React.createElement(I.FlexWP, {
      direction: "column",
      gap: 5,
      align: "flex-start"
    }, React.createElement("div", {
      style: {
        width: "29px",
        height: "29px",
        borderRadius: "50%",
        backgroundColor: "#f4f5f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flexShrink: 0,
        boxSizing: "border-box"
      }
    }, React.createElement("img", {
      src: t.icon,
      alt: t.label,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain"
      }
    })), React.createElement(I.TextWP, {
      as: "p",
      size: "16",
      weight: "500",
      color: n ? "#000d25" : "#444d5e",
      style: {
        margin: 0
      }
    }, t.label))));
  },
  K4 = function (e) {
    var t = e.lms,
      n = e.courses,
      r = e.selectedIds,
      a = e.onToggle,
      o = e.onToggleAll,
      i = e.isLoading,
      l = n.length > 0 && r.length === n.length,
      c = (r.length > 0 && (r.length, n.length), [(0, b.__)("Course title & description", "ohmylms"), (0, b.__)("Lessons and topics", "ohmylms"), (0, b.__)("Video and text content", "ohmylms"), (0, b.__)("Language & Currency", "ohmylms")]);
    return React.createElement(I.FlexWP, {
      align: "flex-start",
      gap: 6,
      style: {
        marginTop: "24px"
      },
      className: "ohmylms-migration-details"
    }, React.createElement("div", {
      style: {
        flexShrink: 0,
        width: "380px",
        backgroundColor: "#f4f5f7",
        borderRadius: "8px",
        padding: "24px",
        boxSizing: "border-box",
        boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.03), 0px 1px 2px 0px rgba(0,0,0,0.02), 0px 3px 3px 0px rgba(0,0,0,0.02), 0px 4px 4px 0px rgba(0,0,0,0.01)"
      },
      className: "ohmylms-migration-left-panel"
    }, React.createElement(I.FlexWP, {
      direction: "column",
      gap: 3,
      align: "flex-start"
    }, React.createElement(I.HeadingWP, {
      as: "h4",
      size: "18px",
      color: "#000D25",
      weight: "600",
      style: {
        margin: 0
      }
    }, (0, b.__)("Detected: ", "ohmylms"), t.label), React.createElement("div", {
      style: {
        backgroundColor: "#fff",
        borderRadius: "4px",
        padding: "16px",
        width: "100%",
        boxSizing: "border-box"
      }
    }, React.createElement(I.FlexWP, {
      direction: "column",
      gap: 6,
      align: "flex-start"
    }, React.createElement("div", {
      style: {
        backgroundColor: "rgba(122, 139, 154, 0.1)",
        borderRadius: "2px",
        padding: "8px 14px",
        width: "100%",
        boxSizing: "border-box"
      }
    }, React.createElement(I.FlexWP, {
      gap: 3,
      align: "flex-start",
      justify: "start"
    }, React.createElement("div", {
      style: {
        flexShrink: 0,
        marginTop: "1px"
      }
    }, React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "19",
      viewBox: "0 0 16 19",
      fill: "none"
    }, React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.33333 4.66675H12.6667C12.7551 4.66675 12.8399 4.70187 12.9024 4.76438C12.9649 4.82689 13 4.91168 13 5.00008V6.00008C13 6.08849 12.9649 6.17327 12.9024 6.23578C12.8399 6.2983 12.7551 6.33341 12.6667 6.33341H3.33333C3.24493 6.33341 3.16014 6.2983 3.09763 6.23578C3.03512 6.17327 3 6.08849 3 6.00008V5.00008C3 4.91168 3.03512 4.82689 3.09763 4.76438C3.16014 4.70187 3.24493 4.66675 3.33333 4.66675ZM2.66667 7.15475C2.46398 7.03773 2.29567 6.86941 2.17864 6.66673C2.06162 6.46404 2.00001 6.23412 2 6.00008V5.00008C2 4.64646 2.14048 4.30732 2.39052 4.05727C2.64057 3.80722 2.97971 3.66675 3.33333 3.66675H12.6667C13.0203 3.66675 13.3594 3.80722 13.6095 4.05727C13.8595 4.30732 14 4.64646 14 5.00008V6.00008C14 6.23412 13.9384 6.46404 13.8214 6.66673C13.7043 6.86941 13.536 7.03773 13.3333 7.15475V13.0001C13.3333 13.3537 13.1929 13.6928 12.9428 13.9429C12.6928 14.1929 12.3536 14.3334 12 14.3334H4C3.64638 14.3334 3.30724 14.1929 3.05719 13.9429C2.80714 13.6928 2.66667 13.3537 2.66667 13.0001V7.15475ZM3.66667 7.33341V13.0001C3.66667 13.0885 3.70179 13.1733 3.7643 13.2358C3.82681 13.2983 3.91159 13.3334 4 13.3334H12C12.0884 13.3334 12.1732 13.2983 12.2357 13.2358C12.2982 13.1733 12.3333 13.0885 12.3333 13.0001V7.33341H3.66667Z",
      fill: "#687784"
    }))), React.createElement(I.TextWP, {
      as: "p",
      size: "14",
      weight: "500",
      color: "#000",
      style: {
        margin: 0
      }
    }, (0, b.__)("We'll import course structure and content to create a draft course.", "ohmylms")))), React.createElement(I.FlexWP, {
      direction: "column",
      gap: 6,
      align: "flex-start"
    }, c.map(function (e) {
      return React.createElement(I.FlexWP, {
        key: e,
        gap: 3,
        align: "center",
        justify: "start"
      }, React.createElement("div", {
        style: {
          flexShrink: 0
        }
      }, React.createElement(Z4, null)), React.createElement(I.TextWP, {
        as: "p",
        size: "14",
        weight: "500",
        color: "#444d5e",
        style: {
          margin: 0
        }
      }, e));
    })))), React.createElement(I.TextWP, {
      as: "p",
      size: "12",
      weight: "400",
      color: "#687784",
      style: {
        margin: 0
      }
    }, (0, b.__)("Your original courses will remain unchanged. You'll be able to review and edit everything before publishing.", "ohmylms")))), React.createElement(I.CardWP, {
      variant: "secondary",
      padding: "24px",
      isBorderless: !0,
      style: {
        width: "100%"
      },
      className: "ohmylms-migration-right-panel"
    }, React.createElement("div", {
      style: {
        background: "white",
        borderRadius: "2px",
        width: "100%",
        maxWidth: "614px",
        boxSizing: "border-box",
        minHeight: "405px"
      },
      className: "ohmylms-migration-right-inner-panel"
    }, React.createElement("div", {
      style: q4(q4({
        background: "#FFFFFF",
        borderRadius: "2px",
        display: "flex",
        alignItems: "center",
        gap: "50px",
        height: "40px",
        padding: "24px 24px 0"
      }, "height", "56px"), "boxSizing", "border-box")
    }, React.createElement("div", {
      className: "ohmylms-setup-wizard-checkbox",
      onClick: o,
      style: {
        position: "relative",
        width: "16px",
        height: "16px",
        background: l ? "#6e42d3" : "white",
        border: "1px solid #6e42d3",
        borderRadius: "4px",
        flexShrink: 0,
        cursor: "pointer"
      }
    }, l && React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "10px",
        height: "7px"
      }
    }, React.createElement("svg", {
      style: {
        display: "block",
        width: "100%",
        height: "100%"
      },
      fill: "none",
      preserveAspectRatio: "none",
      viewBox: "0 0 11.0607 8.59099"
    }, React.createElement("path", {
      d: Y4,
      stroke: "#FFF",
      strokeWidth: "1.5"
    })))), React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    }, React.createElement("span", {
      style: {
        background: "#C8D2E980",
        borderRadius: "20px",
        padding: "0 8px",
        fontSize: "12px",
        color: "#6E42D3",
        fontWeight: 600
      }
    }, r.length), React.createElement(I.TextWP, {
      size: "12",
      weight: "500",
      color: "#687784"
    }, (0, b.__)("Courses selected", "ohmylms")))), i ? React.createElement(I.FlexWP, {
      justify: "center",
      align: "center",
      style: {
        padding: "40px"
      }
    }, React.createElement(I.SkeletonWP, {
      active: !0,
      rows: 10
    })) : React.createElement("div", {
      style: {
        maxHeight: "600px",
        overflowY: "auto"
      }
    }, n.map(function (e) {
      var t = r.includes(e.id);
      return React.createElement("div", {
        key: e.id,
        style: {
          borderBottom: "0.5px solid rgba(200, 210, 233, 0.5)",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          cursor: "pointer"
        },
        onClick: function () {
          return a(e.id);
        }
      }, React.createElement("div", {
        className: "ohmylms-setup-wizard-checkbox",
        onClick: function (t) {
          t.stopPropagation(), a(e.id);
        },
        style: {
          position: "relative",
          width: "16px",
          height: "16px",
          background: t ? "#6e42d3" : "white",
          border: "1px solid #6e42d3",
          borderRadius: "4px",
          flexShrink: 0,
          cursor: "pointer"
        }
      }, t && React.createElement("div", {
        style: {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "10px",
          height: "7px"
        }
      }, React.createElement("svg", {
        style: {
          display: "block",
          width: "100%",
          height: "100%"
        },
        fill: "none",
        preserveAspectRatio: "none",
        viewBox: "0 0 11.0607 8.59099"
      }, React.createElement("path", {
        d: Y4,
        stroke: "white",
        strokeWidth: "1.5"
      })))), React.createElement("div", {
        style: {
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }
      }, React.createElement("div", {
        style: {
          width: "80px",
          height: "50px",
          background: "#e1e1e1",
          borderRadius: "4px",
          overflow: "hidden",
          flexShrink: 0
        }
      }, e.thumbnail && React.createElement("img", {
        src: e.thumbnail,
        alt: e.title || e.label,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      })), React.createElement("div", null, React.createElement(I.TextWP, {
        size: "14",
        weight: "700",
        color: "#000d25"
      }, Ge(e.title || e.label)))));
    }), 0 === n.length && React.createElement("div", {
      style: {
        padding: "20px",
        textAlign: "center",
        marginTop: "100px"
      }
    }, React.createElement(I.TextWP, null, (0, b.__)("No courses found to migrate.", "ohmylms")))))));
  },
  J4 = function () {
    var e = H4((0, g.useState)(function () {
        var e, t;
        return null !== (e = null === (t = _6[0]) || void 0 === t ? void 0 : t.value) && void 0 !== e ? e : null;
      }), 2),
      t = e[0],
      n = e[1],
      r = H4((0, g.useState)([]), 2),
      a = r[0],
      o = r[1],
      i = H4((0, g.useState)([]), 2),
      c = i[0],
      u = i[1],
      s = H4((0, g.useState)(!1), 2),
      d = s[0],
      m = s[1],
      p = (0, y.useDispatch)(T.default),
      f = _6.find(function (e) {
        return e.value === t;
      });
    return (0, g.useEffect)(function () {
      if (!t) return o([]), void u([]);
      var e = function () {
        var e,
          n = (e = B4().m(function e() {
            var n, r;
            return B4().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  return m(!0), e.p = 1, e.n = 2, l()({
                    path: "/ohmylms/v1/migrations/".concat(t, "/courses")
                  });
                case 2:
                  null != (n = e.v) && n.courses && (o(n.courses), u(n.courses.map(function (e) {
                    return e.id;
                  }))), e.n = 4;
                  break;
                case 3:
                  e.p = 3, r = e.v, console.error("Failed to fetch migration courses", r);
                case 4:
                  return e.p = 4, m(!1), e.f(4);
                case 5:
                  return e.a(2);
              }
            }, e, null, [[1, 3, 4, 5]]);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                V4(o, r, a, i, l, "next", e);
              }
              function l(e) {
                V4(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function () {
          return n.apply(this, arguments);
        };
      }();
      e();
    }, [t]), React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
      isBorderless: !0,
      padding: "24px"
    }, React.createElement(I.HeadingWP, {
      as: "h4",
      size: "18px",
      color: "#000D25",
      weight: "600"
    }, (0, b.__)("Which platform do you want to migrate from?", "ohmylms")), React.createElement(I.CardWP, {
      variant: "secondary",
      isBorderless: !0,
      padding: "16px",
      margin: "24px 0 0"
    }, React.createElement(I.FlexWP, {
      wrap: "wrap",
      gap: 4,
      justify: "flex-start",
      align: "stretch"
    }, _6.map(function (e) {
      return React.createElement($4, {
        key: e.value,
        lms: e,
        isSelected: t === e.value,
        onSelect: n
      });
    }))), f && React.createElement(K4, {
      lms: f,
      courses: a,
      selectedIds: c,
      onToggle: function (e) {
        u(function (t) {
          return t.includes(e) ? t.filter(function (t) {
            return t !== e;
          }) : [].concat(function (e) {
            return function (e) {
              if (Array.isArray(e)) return U4(e);
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || G4(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }(t), [e]);
        });
      },
      onToggleAll: function () {
        u(c.length === a.length ? [] : a.map(function (e) {
          return e.id;
        }));
      },
      isLoading: d
    })), React.createElement(I.SpacerWP, {
      padding: 0,
      marginBottom: 0,
      marginTop: 4
    }, React.createElement(I.FlexWP, {
      justify: "flex-end"
    }, React.createElement(I.ButtonWP, {
      variant: "primary",
      size: "md",
      onClick: function () {
        if (t && 0 !== c.length) {
          var e = a.filter(function (e) {
            return c.includes(e.id);
          });
          p.setMigrationTool(t), p.setMigrationToolCourses(e.map(function (e) {
            return {
              value: e.id,
              label: e.title || e.label
            };
          })), p.setMigrationCourses(c), p.setMigrationStatus("migrating"), p.setMigrationModalOpen(!0);
        }
      },
      disabled: !t || 0 === c.length
    }, (0, b.__)("Migrate courses", "ohmylms")))), f && React.createElement(W4, {
      lms: f.label
    }));
  };

const X4 = (0, g.memo)(J4);

function e6(e, t) {
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
      if ("string" == typeof e) return t6(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? t6(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function t6(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var n6 = function (e) {
  var t = e.onFileChange,
    n = e.jsonImportEnabled,
    r = void 0 === n || n,
    a = e6((0, g.useState)(""), 2),
    o = a[0],
    i = a[1],
    l = e6((0, g.useState)(!1), 2),
    c = l[0],
    u = l[1],
    s = function (e) {
      if (e) {
        var n = ["application/zip", "application/x-zip-compressed", "multipart/x-zip"].includes(e.type) || e.name.toLowerCase().endsWith(".zip"),
          r = "application/json" === e.type || e.name.toLowerCase().endsWith(".json");
        (n || r) && (i(e.name), t && t(e, n ? "scorm" : "json"));
      }
    };
  return React.createElement("div", {
    onDrop: function (e) {
      e.preventDefault(), u(!1);
      var t = e.dataTransfer.files[0];
      s(t);
    },
    onDragOver: function (e) {
      e.preventDefault(), u(!0);
    },
    onDragLeave: function () {
      return u(!1);
    },
    style: {
      backgroundColor: c ? "#f0f4ff" : "#fcfcfc",
      border: c ? "1px dashed #6E42D3" : "1px dashed rgba(200, 210, 233, 0.74)",
      borderRadius: "8px",
      padding: "40px 12px",
      width: "100%",
      boxSizing: "border-box",
      transition: "all 0.2s ease-in-out"
    }
  }, React.createElement(I.FlexWP, {
    direction: "column",
    gap: 4,
    justify: "center",
    align: "center",
    style: {
      textAlign: "center"
    }
  }, React.createElement(I.FormFileUploadWP, {
    accept: r ? ".zip,.json" : ".zip",
    onChange: function (e) {
      var t = e.target.files[0];
      s(t);
    },
    label: React.createElement(I.FlexWP, {
      gap: 2,
      align: "center",
      justify: "center"
    }, React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none"
    }, React.createElement("path", {
      d: "M13.875 11.25V13.875H9.75V5.02505L13.125 8.10005L13.875 7.27505L9.225 2.92505L4.875 7.27505L5.625 8.10005L8.625 5.10005V13.875H4.125V11.25H3V15H15V11.25H13.875Z",
      fill: "#687784"
    })), React.createElement("span", null, (0, b.__)("Upload", "ohmylms"))),
    style: {
      backgroundColor: "#f4f5f7",
      border: "1px solid #ebebef",
      borderRadius: "2px",
      height: "40px",
      minWidth: "125px",
      padding: "8px 22px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      color: "#000d25",
      letterSpacing: "-0.14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px"
    }
  }), React.createElement(I.FlexWP, {
    direction: "column",
    gap: 1,
    align: "center"
  }, o ? React.createElement(I.TextWP, {
    as: "p",
    size: "14",
    color: "#444d5e",
    align: "center",
    weight: "500",
    style: {
      margin: 0
    }
  }, (0, b.__)("Selected: ", "ohmylms"), React.createElement("strong", null, o)) : React.createElement(React.Fragment, null, React.createElement(I.TextWP, {
    as: "p",
    size: "14",
    color: "#687784",
    align: "center",
    weight: "400",
    style: {
      margin: 0
    }
  }, (0, b.__)("Drag & drop or upload your file here.", "ohmylms")), React.createElement(I.TextWP, {
    as: "p",
    size: "14",
    color: "#687784",
    align: "center",
    weight: "400",
    style: {
      margin: 0
    }
  }, React.createElement("span", {
    style: {
      marginRight: "4px"
    }
  }, React.createElement("strong", null, (0, b.__)("ZIP", "ohmylms")), (0, b.__)(" (SCORM 1.2 / 2004)", "ohmylms")), React.createElement("span", {
    style: {
      background: "#e6f4ea",
      color: "#1e7e34",
      borderRadius: "3px",
      padding: "1px 6px",
      fontSize: "11px",
      fontWeight: "600",
      marginRight: "12px"
    }
  }, (0, b.__)("Free", "ohmylms")), React.createElement("span", {
    style: {
      marginRight: "4px"
    }
  }, React.createElement("strong", null, (0, b.__)("JSON", "ohmylms")), (0, b.__)(" (OhMyLMS)", "ohmylms")), React.createElement("span", {
    style: {
      background: r ? "#e6f4ea" : "#6e42d3",
      color: r ? "#1e7e34" : "#fff",
      borderRadius: "3px",
      padding: "1px 6px",
      fontSize: "11px",
      fontWeight: "600"
    }
  }, r ? (0, b.__)("Free", "ohmylms") : (0, b.__)("Pro", "ohmylms")))))));
};

const r6 = (0, g.memo)(n6);

function a6() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return o6(u, "_invoke", function (n, r, a) {
      var o,
        l,
        c,
        u = 0,
        s = a || [],
        d = !1,
        m = {
          p: 0,
          n: 0,
          v: e,
          a: p,
          f: p.bind(e, 4),
          d: function (t, n) {
            return o = t, l = 0, c = e, m.n = n, i;
          }
        };
      function p(n, r) {
        for (l = n, c = r, t = 0; !d && u && !a && t < s.length; t++) {
          var a,
            o = s[t],
            p = m.p,
            f = o[2];
          n > 3 ? (a = f === r) && (c = o[(l = o[4]) ? 5 : (l = 3, 3)], o[4] = o[5] = e) : o[0] <= p && ((a = n < 2 && p < o[1]) ? (l = 0, m.v = r, m.n = o[1]) : p < f && (a = n < 3 || o[0] > r || r > f) && (o[4] = n, o[5] = r, m.n = f, l = 0));
        }
        if (a || n > 1) return i;
        throw d = !0, r;
      }
      return function (a, s, f) {
        if (u > 1) throw TypeError("Generator is already running");
        for (d && 1 === s && p(s, f), l = s, c = f; (t = l < 2 ? e : c) || !d;) {
          o || (l ? l < 3 ? (l > 1 && (m.n = -1), p(l, c)) : m.n = c : m.v = c);
          try {
            if (u = 2, o) {
              if (l || (a = "next"), t = o[a]) {
                if (!(t = t.call(o, c))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                c = t.value, l < 2 && (l = 0);
              } else 1 === l && (t = o.return) && t.call(o), l < 2 && (c = TypeError("The iterator does not provide a '" + a + "' method"), l = 1);
              o = e;
            } else if ((t = (d = m.n < 0) ? c : n.call(r, m)) !== i) break;
          } catch (t) {
            o = e, l = 1, c = t;
          } finally {
            u = 1;
          }
        }
        return {
          value: t,
          done: d
        };
      };
    }(n, a, o), !0), u;
  }
  var i = {};
  function l() {}
  function c() {}
  function u() {}
  t = Object.getPrototypeOf;
  var s = [][r] ? t(t([][r]())) : (o6(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, o6(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, o6(d, "constructor", u), o6(u, "constructor", c), c.displayName = "GeneratorFunction", o6(u, a, "GeneratorFunction"), o6(d), o6(d, a, "Generator"), o6(d, r, function () {
    return this;
  }), o6(d, "toString", function () {
    return "[object Generator]";
  }), (a6 = function () {
    return {
      w: o,
      m
    };
  })();
}
