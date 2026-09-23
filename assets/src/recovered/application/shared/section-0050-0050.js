// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function ux() {
  return React.createElement("svg", {
    width: "23",
    height: "20",
    viewBox: "0 0 23 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.945675 8.26822C0.340186 7.9387 0 7.36178 0 6.75854C0 6.15425 0.340186 5.57733 0.945675 5.24886L9.83972 0.411371C10.8496 -0.137124 12.1504 -0.137124 13.1603 0.411371L22.0543 5.24886C22.6598 5.57733 23 6.15425 23 6.75854C23 7.36178 22.6598 7.9387 22.0543 8.26822L13.1603 13.1047C12.1504 13.6542 10.8496 13.6542 9.83972 13.1047L0.945675 8.26822ZM1.72126 6.88593L10.6153 11.7224C11.1534 12.015 11.8466 12.015 12.3847 11.7224L21.2787 6.88593C21.3376 6.85434 21.3953 6.81644 21.3953 6.75854C21.3953 6.69959 21.3376 6.66274 21.2787 6.6301L12.3847 1.79366C11.8466 1.50099 11.1534 1.50099 10.6153 1.79366L1.72126 6.6301C1.66242 6.66274 1.60465 6.69959 1.60465 6.75854C1.60465 6.81644 1.66242 6.85434 1.72126 6.88593Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.1877 9.2095C18.1877 8.77365 18.5471 8.41992 18.99 8.41992C19.4329 8.41992 19.7923 8.77365 19.7923 9.2095V13.947C19.7923 16.1273 17.9962 17.8949 15.7807 17.8949H7.22257C5.00708 17.8949 3.21094 16.1273 3.21094 13.947V9.2095C3.21094 8.77365 3.57038 8.41992 4.01326 8.41992C4.45615 8.41992 4.81559 8.77365 4.81559 9.2095V13.947C4.81559 15.2556 5.89284 16.3157 7.22257 16.3157H15.7807C17.1104 16.3157 18.1877 15.2556 18.1877 13.947V9.2095Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.9304 7.66174C10.617 7.35433 10.617 6.85321 10.9304 6.5458C11.2428 6.23734 11.752 6.23734 12.0643 6.5458L15.8085 10.2305C15.9594 10.3779 16.0439 10.579 16.0439 10.7885V19.2107C16.0439 19.6465 15.6844 20.0002 15.2416 20.0002C14.7987 20.0002 14.4392 19.6465 14.4392 19.2107V11.1159L10.9304 7.66174Z",
    fill: "#2D3149"
  }));
}

function sx() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return dx(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (dx(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, dx(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, dx(d, "constructor", u), dx(u, "constructor", c), c.displayName = "GeneratorFunction", dx(u, a, "GeneratorFunction"), dx(d), dx(d, a, "Generator"), dx(d, r, function () {
    return this;
  }), dx(d, "toString", function () {
    return "[object Generator]";
  }), (sx = function () {
    return {
      w: o,
      m
    };
  })();
}

function dx(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  dx = function (e, t, n, r) {
    function o(t, n) {
      dx(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, dx(e, t, n, r);
}

function mx(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function px(e, t) {
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
      if ("string" == typeof e) return fx(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fx(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function fx(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var vx,
  gx = {
    key: "learndash_complete_course",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-learndash",
    title: (0, b.__)("Completes a Course", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (lx = window) || void 0 === lx || null === (lx = lx.MRM_Vars) || void 0 === lx || null === (lx = lx.mint_trans) || void 0 === lx ? void 0 : lx.CompleteACourseDescription,
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: ux,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i = px((0, g.useState)([]), 2),
        l = i[0],
        c = i[1],
        u = px((0, g.useState)("Please enter 3 or more characters"), 2),
        s = u[0],
        d = u[1],
        m = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        p = m.selectedStep,
        f = m.selectedStepIndex,
        v = m.selectedStepCondition,
        _ = m.selectedLogicalStepIndex,
        w = (m.errors, function () {
          var e,
            t = (e = sx().m(function e() {
              var t,
                n,
                r = arguments;
              return sx().w(function (e) {
                for (;;) switch (e.n) {
                  case 0:
                    if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                      e.n = 2;
                      break;
                    }
                    return d((0, b.__)("loading...", "mrm")), e.n = 1, xh(t);
                  case 1:
                    null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.courses) ? d((0, b.__)("No course found", "mrm")) : c(null == n ? void 0 : n.courses));
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
                  mx(o, r, a, i, l, "next", e);
                }
                function l(e) {
                  mx(o, r, a, i, l, "throw", e);
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
      }, h().createElement("h4", null, h().createElement(ux, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.CompletesACourse), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.CompleteACourseDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.SelectCourseS, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectCourseTooltip))), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, s));
          }
        },
        value: null !== (a = null === (o = p.settings) || void 0 === o || null === (o = o.learn_dash_settings) || void 0 === o ? void 0 : o.courses) && void 0 !== a ? a : "",
        onChange: function (e) {
          var t;
          t = e, (0, y.dispatch)(Lf).updateStepArgs(f, v, _, "learn_dash_settings", "courses", t), d("Please enter 3 or more characters");
        },
        onInputChange: function (e) {
          w(e);
        },
        options: l,
        isMulti: !0,
        placeholder: (0, b.__)("Search...", "mrm"),
        isSearchable: !0
      })))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function hx() {
  return React.createElement("svg", {
    width: "18",
    height: "20",
    viewBox: "0 0 18 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.57943 5.996C4.30686 5.72343 4.30686 5.28154 4.57943 5.00896C4.85108 4.73732 5.2939 4.73732 5.56554 5.00896L6.31257 5.75599L8.3006 3.76888C8.57225 3.49631 9.01506 3.49631 9.28671 3.76888C9.55929 4.04146 9.55929 4.48335 9.28671 4.75592L6.80655 7.23608C6.53398 7.50866 6.09209 7.50866 5.81951 7.23608L4.57943 5.996Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.60397 11.6279C4.21883 11.6279 3.90625 11.3153 3.90625 10.9301C3.90625 10.545 4.21883 10.2324 4.60397 10.2324H10.5848C10.97 10.2324 11.2825 10.545 11.2825 10.9301C11.2825 11.3153 10.97 11.6279 10.5848 11.6279H4.60397Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.60397 15.3486C4.21883 15.3486 3.90625 15.036 3.90625 14.6508C3.90625 14.2657 4.21883 13.9531 4.60397 13.9531H12.9766C13.3617 13.9531 13.6743 14.2657 13.6743 14.6508C13.6743 15.036 13.3617 15.3486 12.9766 15.3486H4.60397Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.3005 20.0003H3.20674C2.52856 20.0003 1.87735 19.7305 1.39732 19.2514C0.918222 18.7714 0.648438 18.1202 0.648438 17.442V2.55733C0.648438 1.87914 0.918222 1.22794 1.39732 0.747909C1.87735 0.268808 2.52856 -0.000976562 3.20674 -0.000976562H12.0985C12.5571 -0.000976562 12.9943 0.192524 13.3032 0.532081L17.4356 5.07749C17.7081 5.37797 17.8588 5.76777 17.8588 6.17337V17.442C17.8588 18.1202 17.5891 18.7714 17.11 19.2514C16.6299 19.7305 15.9787 20.0003 15.3005 20.0003ZM15.3005 18.6049C15.6094 18.6049 15.9043 18.4821 16.1229 18.2644C16.3406 18.0458 16.4634 17.7509 16.4634 17.442V6.17337C16.4634 6.11476 16.442 6.05895 16.4029 6.01615L12.2706 1.47075C12.2259 1.42237 12.1636 1.39446 12.0985 1.39446H3.20674C2.89788 1.39446 2.60298 1.51726 2.38436 1.73495C2.16667 1.95357 2.04388 2.24847 2.04388 2.55733V17.442C2.04388 17.7509 2.16667 18.0458 2.38436 18.2644C2.60298 18.4821 2.89788 18.6049 3.20674 18.6049H15.3005Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.8125 1.16256C11.8125 0.777422 12.1251 0.464844 12.5102 0.464844C12.8954 0.464844 13.2079 0.777422 13.2079 1.16256V4.88373C13.2079 5.01211 13.3121 5.1163 13.4405 5.1163H16.6965C17.0817 5.1163 17.3943 5.42888 17.3943 5.81402C17.3943 6.19917 17.0817 6.51174 16.6965 6.51174H13.4405C12.5409 6.51174 11.8125 5.78239 11.8125 4.88373V1.16256Z",
    fill: "#2D3149"
  }));
}

function yx(e) {
  return function (e) {
    if (Array.isArray(e)) return xx(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || Rx(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function bx() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return _x(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (_x(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, _x(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, _x(d, "constructor", u), _x(u, "constructor", c), c.displayName = "GeneratorFunction", _x(u, a, "GeneratorFunction"), _x(d), _x(d, a, "Generator"), _x(d, r, function () {
    return this;
  }), _x(d, "toString", function () {
    return "[object Generator]";
  }), (bx = function () {
    return {
      w: o,
      m
    };
  })();
}

function _x(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  _x = function (e, t, n, r) {
    function o(t, n) {
      _x(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _x(e, t, n, r);
}

function wx(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Ex(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        wx(o, r, a, i, l, "next", e);
      }
      function l(e) {
        wx(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function Sx(e, t) {
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
  }(e, t) || Rx(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Rx(e, t) {
  if (e) {
    if ("string" == typeof e) return xx(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xx(e, t) : void 0;
  }
}

function xx(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Cx,
  Px,
  Ox = {
    key: "learndash_complete_lesson",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-learndash",
    title: null === (vx = window) || void 0 === vx || null === (vx = vx.MRM_Vars) || void 0 === vx || null === (vx = vx.mint_trans) || void 0 === vx ? void 0 : vx.CompletesALesson,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("This automation will start a student completes a lesson", "mrm"),
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: hx,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i,
        l = Sx((0, g.useState)([]), 2),
        c = l[0],
        u = l[1],
        s = Sx((0, g.useState)([]), 2),
        d = s[0],
        m = s[1],
        p = Sx((0, g.useState)("Please enter 3 or more characters"), 2),
        f = p[0],
        v = p[1],
        _ = Sx((0, g.useState)(!1), 2),
        w = _[0],
        E = _[1],
        S = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        R = S.selectedStep,
        x = S.selectedStepIndex,
        C = S.selectedStepCondition,
        P = S.selectedLogicalStepIndex,
        O = (S.errors, function () {
          var e = Ex(bx().m(function e() {
            var t,
              n,
              r = arguments;
            return bx().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                    e.n = 2;
                    break;
                  }
                  return v((0, b.__)("loading...", "mrm")), e.n = 1, xh(t);
                case 1:
                  null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.courses) ? (v((0, b.__)("No courses found", "mrm")), m([])) : m(null == n ? void 0 : n.courses)), e.n = 3;
                  break;
                case 2:
                  m([]);
                case 3:
                  return e.a(2);
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }()),
        k = function () {
          var e = Ex(bx().m(function e(t) {
            var n, r, a, o, i;
            return bx().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if ((0, y.dispatch)(Lf).updateStepArgs(x, C, P, "learn_dash_settings", "courses", t), !t) {
                    e.n = 5;
                    break;
                  }
                  return E(!0), u([]), e.p = 1, e.n = 2, Ph(t.value);
                case 2:
                  null != (n = e.v) && n.success ? (a = (null === (r = R.settings) || void 0 === r || null === (r = r.learn_dash_settings) || void 0 === r ? void 0 : r.lessons) || [], o = a.map(function (e) {
                    return e.value;
                  }), i = n.lessons.filter(function (e) {
                    return !o.includes(e.value);
                  }), u([].concat(yx(a), yx(i)))) : u([]), e.n = 4;
                  break;
                case 3:
                  e.p = 3, e.v, u([]);
                case 4:
                  E(!1), e.n = 6;
                  break;
                case 5:
                  u([]);
                case 6:
                  return e.a(2);
              }
            }, e, null, [[1, 3]]);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
        j = function (e) {
          return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, f));
        };
      (0, g.useEffect)(function () {
        var e,
          t = null === (e = R.settings) || void 0 === e || null === (e = e.learn_dash_settings) || void 0 === e ? void 0 : e.courses;
        t && k(t);
      }, []);
      var M = h().createElement("div", {
        style: {
          padding: 50,
          borderRadius: 4
        }
      });
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings tutor-after-enrolled learn-dash-enrolled-course"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(hx, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.CompletesALesson), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.CompletesALessonDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, (0, b.__)("Select a course", "mrm")), h().createElement(yg.Ay, {
        name: "course-select",
        components: {
          NoOptionsMessage: j
        },
        value: null !== (n = null === (r = R.settings) || void 0 === r || null === (r = r.learn_dash_settings) || void 0 === r ? void 0 : r.courses) && void 0 !== n ? n : "",
        onChange: k,
        onInputChange: function (e) {
          e.length >= 3 && O(e);
        },
        options: d,
        isMulti: !1,
        placeholder: (0, b.__)("Search for a course...", "mrm"),
        isSearchable: !0
      })), w && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement(q.Spinner, {
        tip: "Lessons Loading",
        size: "large"
      }, M)), !w && c.length > 0 && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "lesson-select"
      }, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.SelectLessonS, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.SelectLessonTooltip))), h().createElement(yg.Ay, {
        name: "lesson-select",
        components: {
          NoOptionsMessage: j
        },
        value: (null === (i = R.settings) || void 0 === i || null === (i = i.learn_dash_settings) || void 0 === i ? void 0 : i.lessons) || "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(x, C, P, "learn_dash_settings", "lessons", e);
        },
        options: c,
        isMulti: !0,
        placeholder: (0, b.__)("Search for lessons...", "mrm"),
        isSearchable: !0
      })))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function kx() {
  return React.createElement("svg", {
    width: "18",
    height: "20",
    viewBox: "0 0 18 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.57943 5.996C4.30686 5.72343 4.30686 5.28154 4.57943 5.00896C4.85108 4.73732 5.2939 4.73732 5.56554 5.00896L6.31257 5.75599L8.3006 3.76888C8.57225 3.49631 9.01506 3.49631 9.28671 3.76888C9.55929 4.04146 9.55929 4.48335 9.28671 4.75592L6.80655 7.23608C6.53398 7.50866 6.09209 7.50866 5.81951 7.23608L4.57943 5.996Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.60397 11.6279C4.21883 11.6279 3.90625 11.3153 3.90625 10.9301C3.90625 10.545 4.21883 10.2324 4.60397 10.2324H10.5848C10.97 10.2324 11.2825 10.545 11.2825 10.9301C11.2825 11.3153 10.97 11.6279 10.5848 11.6279H4.60397Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.60397 15.3486C4.21883 15.3486 3.90625 15.036 3.90625 14.6508C3.90625 14.2657 4.21883 13.9531 4.60397 13.9531H12.9766C13.3617 13.9531 13.6743 14.2657 13.6743 14.6508C13.6743 15.036 13.3617 15.3486 12.9766 15.3486H4.60397Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.3005 20.0003H3.20674C2.52856 20.0003 1.87735 19.7305 1.39732 19.2514C0.918222 18.7714 0.648438 18.1202 0.648438 17.442V2.55733C0.648438 1.87914 0.918222 1.22794 1.39732 0.747909C1.87735 0.268808 2.52856 -0.000976562 3.20674 -0.000976562H12.0985C12.5571 -0.000976562 12.9943 0.192524 13.3032 0.532081L17.4356 5.07749C17.7081 5.37797 17.8588 5.76777 17.8588 6.17337V17.442C17.8588 18.1202 17.5891 18.7714 17.11 19.2514C16.6299 19.7305 15.9787 20.0003 15.3005 20.0003ZM15.3005 18.6049C15.6094 18.6049 15.9043 18.4821 16.1229 18.2644C16.3406 18.0458 16.4634 17.7509 16.4634 17.442V6.17337C16.4634 6.11476 16.442 6.05895 16.4029 6.01615L12.2706 1.47075C12.2259 1.42237 12.1636 1.39446 12.0985 1.39446H3.20674C2.89788 1.39446 2.60298 1.51726 2.38436 1.73495C2.16667 1.95357 2.04388 2.24847 2.04388 2.55733V17.442C2.04388 17.7509 2.16667 18.0458 2.38436 18.2644C2.60298 18.4821 2.89788 18.6049 3.20674 18.6049H15.3005Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.8125 1.16256C11.8125 0.777422 12.1251 0.464844 12.5102 0.464844C12.8954 0.464844 13.2079 0.777422 13.2079 1.16256V4.88373C13.2079 5.01211 13.3121 5.1163 13.4405 5.1163H16.6965C17.0817 5.1163 17.3943 5.42888 17.3943 5.81402C17.3943 6.19917 17.0817 6.51174 16.6965 6.51174H13.4405C12.5409 6.51174 11.8125 5.78239 11.8125 4.88373V1.16256Z",
    fill: "#2D3149"
  }));
}
