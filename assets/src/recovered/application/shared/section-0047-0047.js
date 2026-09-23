// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function sR() {
  return React.createElement("svg", {
    fill: "none",
    viewBox: "0 0 96 101",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "6.394",
    height: "15.984",
    x: "25.575",
    fill: "#2653C7",
    rx: "3.197"
  }), React.createElement("rect", {
    width: "6.394",
    height: "15.984",
    x: "63.937",
    fill: "#2653C7",
    rx: "3.197"
  }), React.createElement("path", {
    fill: "#2653C7",
    fillRule: "evenodd",
    d: "M54.878 53.066a13.257 13.257 0 01-3.025 6.877 13.33 13.33 0 01-6.567 4.256l-.112.032-.254.067-.021.005L24.767 69.7v-4.681c0-.104 0-.208.01-.313a5.073 5.073 0 013.674-4.568l.19-.051 26.234-7.03v.008h.003zm16.263-17.26c-.684 5.34-4.523 9.696-9.592 11.133l-.112.032-.25.067h-.004l-.021.005-36.395 9.752v-4.68a5.076 5.076 0 013.08-4.668l.604-.214.188-.05 42.5-11.388v.01h.002z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#2653C7",
    fillRule: "evenodd",
    d: "M19.98 11.189h55.945c7.503 0 13.586 6.083 13.586 13.586V70h6.394V24.775c0-11.034-8.946-19.98-19.98-19.98H19.98C8.945 4.795 0 13.741 0 24.775V80.72c0 11.035 8.945 19.98 19.98 19.98h44.972v-6.394H19.98c-7.504 0-13.586-6.083-13.586-13.586V24.775c0-7.503 6.082-13.586 13.586-13.586z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#2653C7",
    fillRule: "evenodd",
    d: "M95.952 70.748V69.7h-31v31H66l29.952-29.952z",
    clipRule: "evenodd"
  }));
}

function dR() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return mR(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (mR(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, mR(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, mR(d, "constructor", u), mR(u, "constructor", c), c.displayName = "GeneratorFunction", mR(u, a, "GeneratorFunction"), mR(d), mR(d, a, "Generator"), mR(d, r, function () {
    return this;
  }), mR(d, "toString", function () {
    return "[object Generator]";
  }), (dR = function () {
    return {
      w: o,
      m
    };
  })();
}

function mR(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  mR = function (e, t, n, r) {
    function o(t, n) {
      mR(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, mR(e, t, n, r);
}

function pR(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function fR(e, t) {
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
      if ("string" == typeof e) return vR(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vR(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function vR(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var gR,
  hR = {
    key: "fluentbooking_new_booking",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-fluent-booking",
    title: (0, b.__)("New Booking", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (cR = window) || void 0 === cR || null === (cR = cR.MRM_Vars) || void 0 === cR || null === (cR = cR.mint_trans) || void 0 === cR ? void 0 : cR.NewFluentFormBooking,
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: sR,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o = fR((0, g.useState)([]), 2),
        i = o[0],
        l = o[1],
        c = fR((0, g.useState)("Please enter 3 or more characters"), 2),
        u = c[0],
        s = c[1],
        d = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        m = d.selectedStep,
        p = d.selectedStepIndex,
        f = d.selectedStepCondition,
        v = d.selectedLogicalStepIndex,
        _ = (d.errors, function () {
          var e,
            t = (e = dR().m(function e() {
              var t,
                n,
                r = arguments;
              return dR().w(function (e) {
                for (;;) switch (e.n) {
                  case 0:
                    if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                      e.n = 2;
                      break;
                    }
                    return s((0, b.__)("loading...", "mrm")), e.n = 1, Dh(t);
                  case 1:
                    null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.calendars) ? s((0, b.__)("No Calender found", "mrm")) : l(null == n ? void 0 : n.calendars));
                  case 2:
                    return e.a(2, []);
                }
              }, e);
            }), function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                  pR(o, r, a, i, l, "next", e);
                }
                function l(e) {
                  pR(o, r, a, i, l, "throw", e);
                }
                i(void 0);
              });
            });
          return function () {
            return t.apply(this, arguments);
          };
        }());
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings tutor-after-enrolled learn-dash-enrolled-course"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(sR, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.NewBooking), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.NewFluentFormBooking)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.ChooseBooking), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, u));
          }
        },
        value: null !== (r = null === (a = m.settings) || void 0 === a || null === (a = a.fluentbooking_settings) || void 0 === a ? void 0 : a.calenders) && void 0 !== r ? r : "",
        onChange: function (e) {
          var t;
          t = e, (0, y.dispatch)(Lf).updateStepArgs(p, f, v, "fluentbooking_settings", "calenders", t);
        },
        onInputChange: function (e) {
          _(e);
        },
        options: i,
        isMulti: !0,
        placeholder: (0, b.__)("Search...", "mrm"),
        isSearchable: !0
      }), h().createElement("p", {
        className: "placeholder-text"
      }, "Leaving it blank will not trigger the automation.")))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function yR() {
  return React.createElement("svg", {
    fill: "none",
    viewBox: "0 0 96 101",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "6.394",
    height: "15.984",
    x: "25.575",
    fill: "#2653C7",
    rx: "3.197"
  }), React.createElement("rect", {
    width: "6.394",
    height: "15.984",
    x: "63.937",
    fill: "#2653C7",
    rx: "3.197"
  }), React.createElement("path", {
    fill: "#2653C7",
    fillRule: "evenodd",
    d: "M54.878 53.066a13.257 13.257 0 01-3.025 6.877 13.33 13.33 0 01-6.567 4.256l-.112.032-.254.067-.021.005L24.767 69.7v-4.681c0-.104 0-.208.01-.313a5.073 5.073 0 013.674-4.568l.19-.051 26.234-7.03v.008h.003zm16.263-17.26c-.684 5.34-4.523 9.696-9.592 11.133l-.112.032-.25.067h-.004l-.021.005-36.395 9.752v-4.68a5.076 5.076 0 013.08-4.668l.604-.214.188-.05 42.5-11.388v.01h.002z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#2653C7",
    fillRule: "evenodd",
    d: "M19.98 11.189h55.945c7.503 0 13.586 6.083 13.586 13.586V70h6.394V24.775c0-11.034-8.946-19.98-19.98-19.98H19.98C8.945 4.795 0 13.741 0 24.775V80.72c0 11.035 8.945 19.98 19.98 19.98h44.972v-6.394H19.98c-7.504 0-13.586-6.083-13.586-13.586V24.775c0-7.503 6.082-13.586 13.586-13.586z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#2653C7",
    fillRule: "evenodd",
    d: "M95.952 70.748V69.7h-31v31H66l29.952-29.952z",
    clipRule: "evenodd"
  }));
}

function bR() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return _R(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (_R(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, _R(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, _R(d, "constructor", u), _R(u, "constructor", c), c.displayName = "GeneratorFunction", _R(u, a, "GeneratorFunction"), _R(d), _R(d, a, "Generator"), _R(d, r, function () {
    return this;
  }), _R(d, "toString", function () {
    return "[object Generator]";
  }), (bR = function () {
    return {
      w: o,
      m
    };
  })();
}

function _R(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  _R = function (e, t, n, r) {
    function o(t, n) {
      _R(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _R(e, t, n, r);
}

function wR(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function ER(e, t) {
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
      if ("string" == typeof e) return SR(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? SR(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function SR(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var RR,
  xR = {
    key: "fluentbooking_cancelled",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-fluent-booking",
    title: (0, b.__)("Booking Cancelled", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (gR = window) || void 0 === gR || null === (gR = gR.MRM_Vars) || void 0 === gR || null === (gR = gR.mint_trans) || void 0 === gR ? void 0 : gR.CancelledFluentFormBooking,
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: yR,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o = ER((0, g.useState)([]), 2),
        i = o[0],
        l = o[1],
        c = ER((0, g.useState)("Please enter 3 or more characters"), 2),
        u = c[0],
        s = c[1],
        d = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        m = d.selectedStep,
        p = d.selectedStepIndex,
        f = d.selectedStepCondition,
        v = d.selectedLogicalStepIndex,
        _ = (d.errors, function () {
          var e,
            t = (e = bR().m(function e() {
              var t,
                n,
                r = arguments;
              return bR().w(function (e) {
                for (;;) switch (e.n) {
                  case 0:
                    if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                      e.n = 2;
                      break;
                    }
                    return s((0, b.__)("loading...", "mrm")), e.n = 1, Dh(t);
                  case 1:
                    null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.calendars) ? s((0, b.__)("No Calender found", "mrm")) : l(null == n ? void 0 : n.calendars));
                  case 2:
                    return e.a(2, []);
                }
              }, e);
            }), function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                  wR(o, r, a, i, l, "next", e);
                }
                function l(e) {
                  wR(o, r, a, i, l, "throw", e);
                }
                i(void 0);
              });
            });
          return function () {
            return t.apply(this, arguments);
          };
        }());
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings tutor-after-enrolled learn-dash-enrolled-course"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(yR, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.CancelledBooking), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.CancelledFluentFormBooking)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.ChooseBooking), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, u));
          }
        },
        value: null !== (r = null === (a = m.settings) || void 0 === a || null === (a = a.fluentbooking_settings) || void 0 === a ? void 0 : a.calenders) && void 0 !== r ? r : "",
        onChange: function (e) {
          var t;
          t = e, (0, y.dispatch)(Lf).updateStepArgs(p, f, v, "fluentbooking_settings", "calenders", t);
        },
        onInputChange: function (e) {
          _(e);
        },
        options: i,
        isMulti: !0,
        placeholder: (0, b.__)("Search...", "mrm"),
        isSearchable: !0
      }), h().createElement("p", {
        className: "placeholder-text"
      }, "Leaving it blank will not trigger the automation.")))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function CR() {
  return React.createElement("svg", {
    fill: "none",
    viewBox: "0 0 96 101",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "6.394",
    height: "15.984",
    x: "25.575",
    fill: "#2653C7",
    rx: "3.197"
  }), React.createElement("rect", {
    width: "6.394",
    height: "15.984",
    x: "63.937",
    fill: "#2653C7",
    rx: "3.197"
  }), React.createElement("path", {
    fill: "#2653C7",
    fillRule: "evenodd",
    d: "M54.878 53.066a13.257 13.257 0 01-3.025 6.877 13.33 13.33 0 01-6.567 4.256l-.112.032-.254.067-.021.005L24.767 69.7v-4.681c0-.104 0-.208.01-.313a5.073 5.073 0 013.674-4.568l.19-.051 26.234-7.03v.008h.003zm16.263-17.26c-.684 5.34-4.523 9.696-9.592 11.133l-.112.032-.25.067h-.004l-.021.005-36.395 9.752v-4.68a5.076 5.076 0 013.08-4.668l.604-.214.188-.05 42.5-11.388v.01h.002z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#2653C7",
    fillRule: "evenodd",
    d: "M19.98 11.189h55.945c7.503 0 13.586 6.083 13.586 13.586V70h6.394V24.775c0-11.034-8.946-19.98-19.98-19.98H19.98C8.945 4.795 0 13.741 0 24.775V80.72c0 11.035 8.945 19.98 19.98 19.98h44.972v-6.394H19.98c-7.504 0-13.586-6.083-13.586-13.586V24.775c0-7.503 6.082-13.586 13.586-13.586z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#2653C7",
    fillRule: "evenodd",
    d: "M95.952 70.748V69.7h-31v31H66l29.952-29.952z",
    clipRule: "evenodd"
  }));
}

function PR() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return OR(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (OR(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, OR(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, OR(d, "constructor", u), OR(u, "constructor", c), c.displayName = "GeneratorFunction", OR(u, a, "GeneratorFunction"), OR(d), OR(d, a, "Generator"), OR(d, r, function () {
    return this;
  }), OR(d, "toString", function () {
    return "[object Generator]";
  }), (PR = function () {
    return {
      w: o,
      m
    };
  })();
}

function OR(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  OR = function (e, t, n, r) {
    function o(t, n) {
      OR(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, OR(e, t, n, r);
}

function kR(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function jR(e, t) {
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
      if ("string" == typeof e) return AR(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? AR(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function AR(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
