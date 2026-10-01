// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Jt = n(11541),
  Xt = ["title", "description", "isItProFeature", "placeholder", "options", "tooltip", "spacerMarginBottom", "padding", "direction", "gap", "flexItemWidth"];
function en() {
  return en = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, en.apply(null, arguments);
}
const tn = function (e) {
  var t = e.title,
    n = e.description,
    r = e.isItProFeature,
    a = void 0 !== r && r,
    o = e.placeholder,
    i = void 0 === o ? (0, b.__)("Type to search", "ohmylms") : o,
    l = (e.options, e.tooltip),
    c = void 0 !== l && l,
    u = e.spacerMarginBottom,
    s = void 0 === u ? null : u,
    d = e.padding,
    m = void 0 === d ? 4 : d,
    p = e.direction,
    f = void 0 === p ? "row" : p,
    v = e.gap,
    g = void 0 === v ? 8 : v,
    y = e.flexItemWidth,
    _ = void 0 === y ? "100%" : y,
    w = function (e, t) {
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
    }(e, Xt),
    E = true;
  return h().createElement(h().Fragment, null, h().createElement(I.SpacerWP, {
    marginBottom: s,
    padding: m
  }, h().createElement(I.FlexWP, {
    gap: g,
    align: "flex-start",
    justify: "space-between",
    direction: f
  }, h().createElement(I.FlexItemWP, {
    isBlock: !0,
    width: _
  }, t && h().createElement(h().Fragment, null, h().createElement(I.FlexWP, {
    align: "center",
    gap: "1",
    justify: "flex-start"
  }, h().createElement(I.HeadingWP, {
    level: "4"
  }, t, a && !E && h().createElement("span", null, (0, b.__)("Pro", "ohmylms"))), c && h().createElement(I.TooltipWP, {
    title: c,
    placement: "top"
  }, h().createElement("span", null, h().createElement(Mt.A, null)))), h().createElement(I.SpacerWP, {
    marginBottom: 1
  })), n && h().createElement(I.TextWP, null, n)), h().createElement(I.FlexItemWP, {
    isBlock: !0,
    width: _
  }, h().createElement(Jt.A, en({
    isMulti: !0,
    className: "ohmylms-multi-select",
    classNamePrefix: "ohmylms-react-select",
    placeholder: i
  }, w))))));
};
function nn() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return rn(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (rn(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, rn(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, rn(d, "constructor", u), rn(u, "constructor", c), c.displayName = "GeneratorFunction", rn(u, a, "GeneratorFunction"), rn(d), rn(d, a, "Generator"), rn(d, r, function () {
    return this;
  }), rn(d, "toString", function () {
    return "[object Generator]";
  }), (nn = function () {
    return {
      w: o,
      m
    };
  })();
}
function rn(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  rn = function (e, t, n, r) {
    function o(t, n) {
      rn(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, rn(e, t, n, r);
}
function an(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function on(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var ln = function (e) {
  var t = e.title,
    n = e.tooltip,
    r = e.onChange,
    a = e.isChecked,
    o = (e.childTitle, e.childPlaceholder, e.childNotFoundMessage, e.isMultiple, e.onSearch),
    i = e.onChildChange,
    l = e.defaultValue,
    c = e.showDivider,
    u = void 0 === c || c,
    s = function (e, t) {
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
          if ("string" == typeof e) return on(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? on(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)((0, b.__)("Please enter 3 or more characters...", "ohmylms")), 2),
    d = s[0],
    m = s[1],
    p = function () {
      var e,
        t = (e = nn().m(function e(t) {
          var n, r, a, i;
          return nn().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                if (!(t.length >= 3)) {
                  e.n = 4;
                  break;
                }
                return e.n = 1, o(t);
              case 1:
                if (0 !== (null == (r = e.v) || null === (n = r.data) || void 0 === n ? void 0 : n.length)) {
                  e.n = 2;
                  break;
                }
                return m((0, b.__)("No Content Found! Try to search another one", "ohmylms")), e.a(2, []);
              case 2:
                return m((0, b.__)("Please enter 3 or more characters...", "ohmylms")), i = null == r || null === (a = r.data) || void 0 === a ? void 0 : a.map(function (e) {
                  return {
                    label: Ge(null == e ? void 0 : e.label),
                    value: null == e ? void 0 : e.value
                  };
                }), e.a(2, i || []);
              case 3:
                e.n = 5;
                break;
              case 4:
                return e.a(2, []);
              case 5:
                return e.a(2);
            }
          }, e);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              an(o, r, a, i, l, "next", e);
            }
            function l(e) {
              an(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function (e) {
        return t.apply(this, arguments);
      };
    }();
  return React.createElement(React.Fragment, null, React.createElement(Kt, {
    title: t,
    tooltip: n,
    customClass: "ohmylms-lesson-settings-prerequisites-button",
    onChange: r,
    isChecked: a,
    showDivider: u,
    conditionalChild: React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
      marginBottom: 3
    }), React.createElement(I.CardWP, {
      isBorderless: !0,
      variant: "secondary"
    }, React.createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 4
    }, React.createElement(tn, {
      description: (0, b.__)("Members can access this content if they have completed all of the following content:", "ohmylms"),
      spacerMarginBottom: 0,
      value: l,
      onChange: function (e) {
        i(e);
      },
      cacheOptions: !0,
      loadOptions: p,
      noOptionsMessage: function () {
        return d;
      },
      closeMenuOnSelect: !1,
      padding: 0,
      direction: "column",
      gap: 1,
      flexItemWidth: "100%"
    }))))
  }));
};
const cn = (0, g.memo)(ln);
var un = n(74353),
  sn = n.n(un),
  dn = ["rotate"];
function mn() {
  return mn = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mn.apply(null, arguments);
}
var pn = function (e) {
  var t = e.rotate,
    n = void 0 === t ? 0 : t,
    r = function (e, t) {
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
    }(e, dn);
  return React.createElement(React.Fragment, null, React.createElement("svg", mn({}, r, {
    style: {
      transform: "rotate(".concat(n, "deg)")
    },
    fill: "none",
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    xmlns: "http://www.w3.org/2000/svg"
  }), React.createElement("path", {
    fill: "#A1A1AA",
    d: "M3.747 5.815a.708.708 0 011.006 0l3.244 3.244a.708.708 0 001.006 0l3.244-3.244a.708.708 0 111.006.999l-3.251 3.251a2.125 2.125 0 01-3.004 0l-3.25-3.251a.708.708 0 010-.999z"
  })));
};
const fn = (0, g.memo)(pn);
var vn = n(54870),
  gn = ["customClass", "options", "value", "placeholder", "onChange"];
function hn() {
  return hn = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hn.apply(null, arguments);
}
function yn(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var bn = function (e) {
  var t = e.customClass,
    n = void 0 === t ? "" : t,
    r = e.options,
    a = e.value,
    o = e.placeholder,
    i = e.onChange,
    l = void 0 === i ? function () {
      return console.error("No onChange function provided");
    } : i,
    c = function (e, t) {
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
    }(e, gn),
    u = function (e, t) {
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
          if ("string" == typeof e) return yn(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yn(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(!1), 2);
  return u[0], u[1], React.createElement(React.Fragment, null, React.createElement(vn.A, hn({
    className: "ohmylms-single-select ".concat(n),
    placeholder: o,
    options: r,
    value: a,
    onChange: l,
    classNames: {
      popup: {
        root: "ohmylms-ant-select-dropdown"
      }
    }
  }, c)));
};
const _n = (0, g.memo)(bn);
var wn = n(55907);
function En(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Sn = function (e) {
  var t = e.onDripFeedTypeChange,
    n = e.dripFeedType,
    r = e.handleDripDatePickerChange,
    a = e.handleDripTimePickerChange,
    o = e.handleDayChange,
    i = e.dripDate,
    l = e.dripTime,
    c = e.enrollmentFromXDays,
    u = e.isCohortBased,
    s = function (e, t) {
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
          if ("string" == typeof e) return En(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? En(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)({}), 2),
    d = s[0],
    m = s[1],
    p = u ? [{
      value: "cohort-start",
      label: (0, b.__)("Unlock on Cohort Start", "ohmylms")
    }, {
      value: "cohort-from-x-days",
      label: (0, b.__)("Unlock After X Days from Cohort Start", "ohmylms")
    }, {
      value: "specific-date",
      label: (0, b.__)("Unlock on Specific Date", "ohmylms")
    }] : [{
      value: "enrollment-from-x-days",
      label: (0, b.__)("Unlock After X Days from enrollment", "ohmylms")
    }, {
      value: "specific-date",
      label: (0, b.__)("Unlock on Specific Date", "ohmylms")
    }],
    f = function (e) {
      o(e);
    };
  return (0, g.useEffect)(function () {
    if (l) {
      var e = sn()(l),
        t = {
          hours: e.hour(),
          minutes: e.minute()
        };
      m(t);
    }
  }, [l]), React.createElement(React.Fragment, null, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    className: "ohmylms-lesson-settings-drip-feed-list"
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 4
  }, React.createElement(_n, {
    placeholder: (0, b.__)("Select option", "ohmylms"),
    options: p,
    value: n,
    onChange: t
  }), "specific-date" === n && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    marginBottom: 5
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    style: {
      padding: "24px",
      borderRadius: "4px"
    }
  }, React.createElement(I.TextWP, {
    weight: 500,
    variant: "muted"
  }, (0, b.__)("Select Time:")), React.createElement(I.SpacerWP, {
    marginBottom: 2
  }), React.createElement(I.TimePickerWP, {
    className: "ohmylms-lesson-settings-drip-feed-time-picker",
    onChange: function (e) {
      var t;
      e ? (t = i ? sn()(i).set("hour", e.hours).set("minute", e.minutes).set("second", 0).format("YYYY-MM-DDTHH:mm:ss.SSS") : sn()(e).format("YYYY-MM-DDTHH:mm:ss.SSS"), a(t)) : a(null);
    },
    is12Hour: !0,
    value: d
  })), React.createElement(I.SpacerWP, {
    marginBottom: 5
  }), React.createElement(I.CardWP, {
    isBorderless: !0,
    style: {
      padding: "24px",
      borderRadius: "4px"
    }
  }, React.createElement(I.TextWP, {
    weight: 500,
    variant: "muted"
  }, (0, b.__)("Select Date:")), React.createElement(I.SpacerWP, {
    marginBottom: 2
  }), React.createElement(I.DatePickerWP, {
    className: "ohmylms-lesson-settings-drip-feed-date-picker",
    onChange: function (e) {
      r(e);
    },
    value: i,
    disabledDate: function (e) {
      return e && e < sn()().startOf("day");
    }
  }))), ("enrollment-from-x-days" === n || "cohort-from-x-days" === n) && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    marginBottom: 5
  }), React.createElement("div", {
    className: "ohmylms-drip-feed-day-picker"
  }, React.createElement(wn.A, {
    min: 1,
    value: c,
    suffix: (0, b.__)("days", "ohmylms"),
    onChange: function (e) {
      /^\d*$/.test(e) && f(e);
    },
    onKeyDown: function (e) {
      (["e", "E", "+", "-", "/", "\\", ".", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
    },
    onBlur: function () {
      c < 0 && f(0);
    }
  }))))));
};
const Rn = (0, g.memo)(Sn);
var xn = ["onChange", "isChecked", "onDripFeedTypeChange", "handleDripDatePickerChange", "handleDripTimePickerChange", "handleDayChange", "dripFeedType", "dripDate", "dripTime", "enrollmentFromXDays", "isCohortBased", "padding"],
  Cn = function (e) {
    var t = e.onChange,
      n = e.isChecked,
      r = e.onDripFeedTypeChange,
      a = e.handleDripDatePickerChange,
      o = e.handleDripTimePickerChange,
      i = e.handleDayChange,
      l = e.dripFeedType,
      c = e.dripDate,
      u = e.dripTime,
      s = e.enrollmentFromXDays,
      d = e.isCohortBased,
      m = e.padding,
      p = void 0 === m ? 4 : m;
    return function (e, t) {
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
    }(e, xn), React.createElement(React.Fragment, null, React.createElement(Kt, {
      title: (0, b.__)("Drip Settings", "ohmylms"),
      tooltip: (0, b.__)("Schedule this lesson to unlock after a set number of days or a specific date.", "ohmylms"),
      customClass: "ohmylms-lesson-settings-drip-feed-button",
      onChange: t,
      isChecked: n,
      isItProFeature: !0,
      spacerPadding: p,
      conditionalChild: React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
        marginBottom: 3
      }), React.createElement(Rn, {
        onDripFeedTypeChange: r,
        handleDripDatePickerChange: a,
        handleDripTimePickerChange: o,
        handleDayChange: i,
        dripFeedType: l,
        dripDate: c,
        dripTime: u,
        enrollmentFromXDays: s,
        isCohortBased: d
      }))
    }));
  };
const Pn = (0, g.memo)(Cn);
var On = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    width: "14",
    height: "17",
    fill: "none",
    viewBox: "0 0 14 17",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#A1A1AA",
    fillRule: "evenodd",
    d: "M13.582 14.67a2.044 2.044 0 01-2.043 2.046H2.625A2.044 2.044 0 01.582 14.67V2.763A2.045 2.045 0 012.625.716h6.378c.345 0 .675.138.919.383l3.279 3.284a1.3 1.3 0 01.381.921v9.366zm-1.114 0V5.304a.19.19 0 00-.054-.132l-3.28-3.285a.186.186 0 00-.13-.054h-6.38a.93.93 0 00-.928.93V14.67a.932.932 0 00.929.93h8.914a.93.93 0 00.929-.93z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#A1A1AA",
    fillRule: "evenodd",
    d: "M8.75 1.647a.558.558 0 111.114 0V4.25c0 .103.083.186.186.186h2.6a.558.558 0 010 1.116h-2.6a1.3 1.3 0 01-1.3-1.302V1.647zM4.116 8.16a.558.558 0 010-1.117h5.943a.558.558 0 010 1.116H4.116zm0 2.603a.558.558 0 010-1.116h5.943a.558.558 0 010 1.116H4.116zm0 2.604a.558.558 0 010-1.116h3.343a.558.558 0 010 1.116H4.116z",
    clipRule: "evenodd"
  })));
};
const kn = (0, g.memo)(On);
var jn = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "21",
    height: "22",
    viewBox: "0 0 21 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.75 9.27c.483 0 .875.392.875.875v4.375a.875.875 0 01-1.75 0v-4.375c0-.483.392-.875.875-.875zm3.5 0c.483 0 .875.392.875.875v4.375a.875.875 0 01-1.75 0v-4.375c0-.483.392-.875.875-.875z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.75 2.27a2.625 2.625 0 00-2.625 2.625h-3.5a.875.875 0 000 1.75H3.5v10.5a2.625 2.625 0 002.625 2.625h8.75a2.625 2.625 0 002.625-2.625v-10.5h.875a.875.875 0 000-1.75h-3.5A2.625 2.625 0 0012.25 2.27h-3.5zm4.375 2.625a.875.875 0 00-.875-.875h-3.5a.875.875 0 00-.875.875h5.25zm-7 1.75H5.25v10.5c0 .483.392.875.875.875h8.75a.875.875 0 00.875-.875v-10.5H6.125z",
    clipRule: "evenodd"
  })));
};
const An = (0, g.memo)(jn);
var Mn = function () {
  return React.createElement(React.Fragment, null, React.createElement("svg", {
    fill: "none",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M5.051 16.3a4.5 4.5 0 01-3.176-7.683l6.364-6.364a.75.75 0 011.06 1.06L2.934 9.679a3 3 0 104.243 4.242l8.22-8.22a1.874 1.874 0 00-.608-3.058 1.876 1.876 0 00-2.044.406l-6.63 6.63a.75.75 0 101.062 1.06l4.243-4.242a.75.75 0 111.06 1.06L8.236 11.8a2.251 2.251 0 01-3.182-3.181l6.63-6.63a3.375 3.375 0 014.772 4.774l-8.22 8.22A4.467 4.467 0 015.054 16.3h-.003z"
  })));
};
const Tn = (0, g.memo)(Mn);
function In(e, t) {
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
      if ("string" == typeof e) return Fn(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Fn(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Fn(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Nn = function (e) {
  var t = true;
  M().noConflict();
  var n = e.resources,
    r = e.handleResources,
    a = e.handleDeleteResource,
    o = e.tooltipText,
    i = (0, y.useDispatch)(T.default),
    l = In((0, g.useState)(!1), 2),
    c = l[0],
    u = l[1],
    s = In((0, g.useState)(null), 2),
    d = s[0],
    m = s[1],
    p = In((0, g.useState)(!1), 2),
    f = p[0],
    v = p[1],
    h = (0, g.useCallback)(function () {
      var e;
      (e = wp.media({
        title: "Select or Upload Media",
        button: {
          text: "Use this media"
        },
        multiple: !0
      })).on("select", function () {
        var t = e.state().get("selection").toJSON().map(function (e) {
          return {
            id: e.id,
            url: e.url,
            name: e.filename,
            size: null == e ? void 0 : e.filesizeHumanReadable
          };
        });
        r(t);
      }), e.open();
    }, [t, i]);
  return React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 4,
    className: "ohmylms-lesson-settings-resources"
  }, React.createElement(I.FlexWP, {
    gap: 3,
    align: "center",
    justify: "flex-start"
  }, React.createElement(I.HeadingWP, {
    level: 4
  }, (0, b.__)("Download Resources", "ohmylms")), o && React.createElement(I.TooltipWP, {
    title: o,
    className: "ohmylms-tooltip"
  }, React.createElement(React.Fragment, null, React.createElement(Mt.A, null)))), React.createElement(I.SpacerWP, {
    marginBottom: 2
  }), React.createElement(I.CardWP, null, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 4
  }, React.createElement(I.FlexWP, {
    justify: "center",
    align: "center"
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    icon: React.createElement(Tn, null),
    onClick: h,
    className: "ohmylms-lesson-settings-resources-upload-button",
    "aria-disabled": "false",
    style: {
      cursor: "pointer"
    }
  }, (0, b.__)("Add files", "ohmylms"))))), n.length > 0 && React.createElement(React.Fragment, null, n.map(function (e) {
    return React.createElement("div", {
      key: e.id
    }, React.createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 4
    }), React.createElement(I.CardWP, null, React.createElement(I.SpacerWP, {
      marginBottom: 0,
      padding: 2
    }, React.createElement(I.FlexWP, {
      justify: "space-between",
      gap: 3
    }, React.createElement(I.FlexWP, {
      gap: 3,
      align: "center",
      justify: "flex-start",
      className: "ohmylms-single-resource-info"
    }, React.createElement(I.CardWP, {
      className: "resource-icon"
    }, React.createElement(I.FlexWP, {
      align: "center",
      justify: "center",
      style: {
        width: "40px",
        height: "40px"
      }
    }, React.createElement(kn, null))), React.createElement(I.FlexItemWP, {
      style: {
        width: "calc(100% - 52px)"
      }
    }, React.createElement(I.TextWP, {
      as: "span",
      size: 14,
      isBlock: !0,
      className: "resource-name",
      style: {
        wordWrap: "break-word"
      }
    }, e.name), React.createElement(I.TextWP, {
      as: "span",
      size: 12,
      variant: "muted",
      className: "resource-size"
    }, (0, b.__)("Size:", "ohmylms"), " ", (null == e ? void 0 : e.size) || "67 KB"))), React.createElement(I.ButtonWP, {
      className: "resource-action",
      type: "text",
      danger: !0,
      icon: React.createElement(An, null),
      onClick: function () {
        return t = e.id, u(!0), void m(t);
        var t;
      }
    })))));
  }))), c && React.createElement(Ie, {
    title: (0, b.__)("Delete resource item?", "ohmylms"),
    description: (0, b.__)("Are you sure you want to delete this resource item?", "ohmylms"),
    onClose: function () {
      u(!1), m(null);
    },
    onDelete: function () {
      u(!1), a(d), m(null);
    },
    isOpen: c,
    isDelete: !0
  }), f && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: f,
    onClose: v
  })));
};
const Dn = (0, g.memo)(Nn);
