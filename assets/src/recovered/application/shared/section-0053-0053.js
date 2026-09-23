// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var fC = {
  key: "memberpress_member_added",
  group: "triggers",
  type: "trigger",
  package: "pro",
  category: "mint-memberpress",
  title: (0, b.__)("Added to a Membership Level", "mrm"),
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("This automation will start when a membership level get activated for a member.", "mrm"),
  subtitle: function () {
    return (0, b._x)("", "noun", "mrm");
  },
  icon: cC,
  edit: function () {
    var e,
      t,
      n = mC((0, g.useState)([]), 2),
      r = n[0],
      a = n[1],
      o = mC((0, g.useState)("Please enter 3 or more characters"), 2),
      i = o[0],
      l = o[1],
      c = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      u = c.selectedStep,
      s = c.selectedStepIndex,
      d = c.selectedStepCondition,
      m = c.selectedLogicalStepIndex,
      p = (c.errors, function () {
        var e,
          t = (e = uC().m(function e() {
            var t,
              n,
              r = arguments;
            return uC().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                    e.n = 2;
                    break;
                  }
                  return l((0, b.__)("loading...", "mrm")), e.n = 1, Fh(t);
                case 1:
                  null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.levels) ? l((0, b.__)("No membership found", "mrm")) : a(null == n ? void 0 : n.levels));
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
                dC(o, r, a, i, l, "next", e);
              }
              function l(e) {
                dC(o, r, a, i, l, "throw", e);
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
      className: "mintmrm-automation_step-settings memberpress-member-added"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(cC, null), (0, b.__)("Added a member", "mrm")), h().createElement("p", {
      className: "sort-description"
    }, (0, b.__)("This automation will start when a membership level get activated for a member.", "mrm"))), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: ""
    }, (0, b.__)("Select membership level(s)", "mrm"), h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, (0, b.__)("Leave it blank to trigger the automation for any membership level.", "mrm")))), h().createElement(yg.Ay, {
      name: "select-two",
      components: {
        NoOptionsMessage: function (e) {
          return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, i));
        }
      },
      value: null !== (e = null === (t = u.settings) || void 0 === t || null === (t = t.member_press_settings) || void 0 === t ? void 0 : t.levels) && void 0 !== e ? e : "",
      onChange: function (e) {
        var t;
        t = e, (0, y.dispatch)(Lf).updateStepArgs(s, d, m, "member_press_settings", "levels", t), l("Please enter 3 or more characters");
      },
      onInputChange: function (e) {
        p(e);
      },
      options: r,
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

function vC() {
  return React.createElement("svg", {
    className: "bricks-form-fill",
    width: "30",
    height: "22",
    viewBox: "0 0 30 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M18.9549 18.7358H3.91169C2.30794 18.7358 1.00781 17.4357 1.00781 15.832V3.9029C1.00781 2.29915 2.30794 0.999023 3.91169 0.999023H26.0973C27.7011 0.999023 29.0012 2.29915 29.0012 3.9029V15.832",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M8.48282 10.9666C10.0612 10.9666 11.3406 9.68713 11.3406 8.1088C11.3406 6.53047 10.0612 5.25098 8.48282 5.25098C6.90449 5.25098 5.625 6.53047 5.625 8.1088C5.625 9.68713 6.90449 10.9666 8.48282 10.9666Z",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M4.99219 14.4837C4.99219 12.5592 6.55233 10.999 8.47684 10.999C10.4014 10.999 11.9615 12.5592 11.9615 14.4837H4.99219Z",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M20.0391 6.2998H25.0769",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M15.0078 6.2998H18.1984",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M15.0078 9.86719H23.4386",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M15.0078 13.4346H18.3763",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M23.4331 20.999C26.5071 20.999 28.999 18.5071 28.999 15.4331C28.999 12.3591 26.5071 9.86719 23.4331 9.86719C20.3591 9.86719 17.8672 12.3591 17.8672 15.4331C17.8672 18.5071 20.3591 20.999 23.4331 20.999Z",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M23.1543 17.2754C22.6686 17.2754 22.2734 17.6635 22.2734 18.1405C22.3177 19.2866 23.9911 19.2863 24.0352 18.1405C24.0352 17.6635 23.6401 17.2754 23.1543 17.2754Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    d: "M24.0304 12.3995C23.5933 11.867 22.7069 11.8667 22.2696 12.3995C22.0506 12.6555 21.9586 12.9912 22.0173 13.3204C22.1924 14.3025 22.4394 15.6886 22.5502 16.3111C22.6744 16.9663 23.6256 16.9661 23.7497 16.3111L24.2827 13.3204C24.3414 12.9912 24.2494 12.6555 24.0304 12.3995Z",
    fill: "#2D3149"
  }));
}

function gC() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return hC(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (hC(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, hC(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, hC(d, "constructor", u), hC(u, "constructor", c), c.displayName = "GeneratorFunction", hC(u, a, "GeneratorFunction"), hC(d), hC(d, a, "Generator"), hC(d, r, function () {
    return this;
  }), hC(d, "toString", function () {
    return "[object Generator]";
  }), (gC = function () {
    return {
      w: o,
      m
    };
  })();
}

function hC(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  hC = function (e, t, n, r) {
    function o(t, n) {
      hC(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, hC(e, t, n, r);
}

function yC(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function bC(e, t) {
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
      if ("string" == typeof e) return _C(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _C(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function _C(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var wC,
  EC = {
    key: "memberpress_subscription_expired",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-memberpress",
    title: (0, b.__)("Subscription Expired", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("This automation will start when a subscription has been expired.", "mrm"),
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: vC,
    edit: function () {
      var e,
        t,
        n = bC((0, g.useState)([]), 2),
        r = n[0],
        a = n[1],
        o = bC((0, g.useState)("Please enter 3 or more characters"), 2),
        i = o[0],
        l = o[1],
        c = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        u = c.selectedStep,
        s = c.selectedStepIndex,
        d = c.selectedStepCondition,
        m = c.selectedLogicalStepIndex,
        p = (c.errors, function () {
          var e,
            t = (e = gC().m(function e() {
              var t,
                n,
                r = arguments;
              return gC().w(function (e) {
                for (;;) switch (e.n) {
                  case 0:
                    if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                      e.n = 2;
                      break;
                    }
                    return l((0, b.__)("loading...", "mrm")), e.n = 1, Fh(t);
                  case 1:
                    null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.levels) ? l((0, b.__)("No membership found", "mrm")) : a(null == n ? void 0 : n.levels));
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
                  yC(o, r, a, i, l, "next", e);
                }
                function l(e) {
                  yC(o, r, a, i, l, "throw", e);
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
        className: "mintmrm-automation_step-settings memberpress-subscription-expired"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(vC, null), (0, b.__)("Subscription Expired", "mrm")), h().createElement("p", {
        className: "sort-description"
      }, (0, b.__)("This automation will start when a subscription has been expired.", "mrm"))), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, (0, b.__)("Select membership level(s)", "mrm"), h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, (0, b.__)("Leave it blank to trigger the automation for any membership level.", "mrm")))), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, i));
          }
        },
        value: null !== (e = null === (t = u.settings) || void 0 === t || null === (t = t.member_press_settings) || void 0 === t ? void 0 : t.levels) && void 0 !== e ? e : "",
        onChange: function (e) {
          var t;
          t = e, (0, y.dispatch)(Lf).updateStepArgs(s, d, m, "member_press_settings", "levels", t), l("Please enter 3 or more characters");
        },
        onInputChange: function (e) {
          p(e);
        },
        options: r,
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

function SC() {
  return React.createElement("svg", {
    width: "18",
    height: "20",
    fill: "none",
    viewBox: "0 0 18 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M8.447 19.778h5.712a2.966 2.966 0 002.963-2.962V3.184A2.965 2.965 0 0014.159.222H8.447a2.965 2.965 0 00-2.963 2.962v2.441a.781.781 0 101.563 0v-2.44a1.4 1.4 0 011.4-1.4h5.712a1.4 1.4 0 011.4 1.4v13.63c0 .772-.628 1.4-1.4 1.4H8.447c-.772 0-1.4-.628-1.4-1.4v-2.44a.781.781 0 10-1.563 0v2.44a2.966 2.966 0 002.963 2.963z"
  }), React.createElement("path", {
    fill: "#2D3149",
    d: "M9.316 12.425l2.321-1.808a.782.782 0 000-1.233L9.316 7.576a.78.78 0 10-.96 1.232l.527.41H1.648a.781.781 0 100 1.563h7.235l-.527.41a.78.78 0 00-.136 1.097.781.781 0 001.096.137z"
  }));
}

var RC,
  xC = {
    key: "lifterlms_enrolled_course",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-lifterlms",
    title: (0, b.__)("Enrolls in a Course", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (wC = window) || void 0 === wC || null === (wC = wC.MRM_Vars) || void 0 === wC || null === (wC = wC.mint_trans) || void 0 === wC ? void 0 : wC.EnrollsInACourseDescription,
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: SC,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i,
        l,
        c = null !== (e = null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.lifter_courses) && void 0 !== e ? e : [],
        u = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        s = u.selectedStep,
        d = u.selectedStepIndex,
        m = u.selectedStepCondition,
        p = u.selectedLogicalStepIndex;
      return u.errors, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings tutor-after-enrolled learn-dash-enrolled-course"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(SC, null), null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.EnrollsInACourse), h().createElement("p", {
        className: "sort-description"
      }, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.EnrollsInACourseDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.SelectCourseS, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.SelectCourseTooltip))), h().createElement(Jt.A, {
        cacheOptions: !0,
        isMulti: !0,
        value: null !== (i = null === (l = s.settings) || void 0 === l || null === (l = l.lifter_settings) || void 0 === l ? void 0 : l.courses) && void 0 !== i ? i : "",
        defaultOptions: !0,
        loadOptions: function (e, t) {
          t((null == c ? void 0 : c.filter(function (e) {
            return "select" !== (null == e ? void 0 : e.label.toLowerCase());
          })).filter(function (t) {
            return null == t ? void 0 : t.label.toLowerCase().includes(e.toLowerCase());
          }));
        },
        onChange: function (e) {
          return function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(d, m, p, "lifter_settings", "courses", e);
          }(e);
        }
      })))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function CC() {
  return React.createElement("svg", {
    width: "30",
    height: "22",
    viewBox: "0 0 30 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M18.9549 18.7368H3.91169C2.30794 18.7368 1.00781 17.4367 1.00781 15.8329V3.90388C1.00781 2.30012 2.30794 1 3.91169 1H26.0973C27.7011 1 29.0012 2.30012 29.0012 3.90388V15.8329",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M8.48282 10.9676C10.0612 10.9676 11.3406 9.68811 11.3406 8.10978C11.3406 6.53144 10.0612 5.25195 8.48282 5.25195C6.90449 5.25195 5.625 6.53144 5.625 8.10978C5.625 9.68811 6.90449 10.9676 8.48282 10.9676Z",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M4.99219 14.4847C4.99219 12.5601 6.55233 11 8.47684 11C10.4014 11 11.9615 12.5601 11.9615 14.4847H4.99219Z",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M20.0391 6.30078H25.0769",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M15.0078 6.30078H18.1984",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M15.0078 9.86816H23.4386",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M15.0078 13.4355H18.3763",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M23.4331 21C26.5071 21 28.999 18.5081 28.999 15.4341C28.999 12.3601 26.5071 9.86816 23.4331 9.86816C20.3591 9.86816 17.8672 12.3601 17.8672 15.4341C17.8672 18.5081 20.3591 21 23.4331 21Z",
    stroke: "#2D3149",
    strokeWidth: "1.6",
    strokeMiterlimit: "10"
  }), React.createElement("path", {
    d: "M26.375 14.875H24.25C24.181 14.875 24.125 14.819 24.125 14.75V12.625C24.125 12.2798 23.8452 12 23.5 12C23.1548 12 22.875 12.2798 22.875 12.625V14.75C22.875 14.819 22.819 14.875 22.75 14.875H20.625C20.2798 14.875 20 15.1548 20 15.5C20 15.8452 20.2798 16.125 20.625 16.125H22.75C22.819 16.125 22.875 16.181 22.875 16.25V18.375C22.875 18.7202 23.1548 19 23.5 19C23.8452 19 24.125 18.7202 24.125 18.375V16.25C24.125 16.181 24.181 16.125 24.25 16.125H26.375C26.7202 16.125 27 15.8452 27 15.5C27 15.1548 26.7202 14.875 26.375 14.875Z",
    fill: "#2D3149"
  }));
}

var PC,
  OC = {
    key: "lifterlms_enrolled_membership",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-lifterlms",
    title: (0, b.__)("Enrolls in a Membership", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (RC = window) || void 0 === RC || null === (RC = RC.MRM_Vars) || void 0 === RC || null === (RC = RC.mint_trans) || void 0 === RC ? void 0 : RC.EnrollsInAMembershipDescription,
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: CC,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i,
        l = null !== (e = null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.lifter_memberships) && void 0 !== e ? e : [],
        c = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        u = c.selectedStep,
        s = c.selectedStepIndex,
        d = c.selectedStepCondition,
        m = c.selectedLogicalStepIndex;
      return c.errors, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings tutor-after-enrolled learn-dash-enrolled-course"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(CC, null), "Enrolls in a Membership"), h().createElement("p", {
        className: "sort-description"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.EnrollsInAMembershipDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.selectMembershipLevels, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.SelectMembershipTooltip))), h().createElement(Jt.A, {
        cacheOptions: !0,
        isMulti: !0,
        value: null !== (o = null === (i = u.settings) || void 0 === i || null === (i = i.lifter_settings) || void 0 === i ? void 0 : i.courses) && void 0 !== o ? o : "",
        defaultOptions: !0,
        loadOptions: function (e, t) {
          t(l.filter(function (e) {
            return "select" !== (null == e ? void 0 : e.label.toLowerCase());
          }).filter(function (t) {
            return null == t ? void 0 : t.label.toLowerCase().includes(e.toLowerCase());
          }));
        },
        onChange: function (e) {
          return function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(s, d, m, "lifter_settings", "courses", e);
          }(e);
        }
      })))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function kC() {
  return React.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M21.691 0H2.314A2.288 2.288 0 000 2.314v19.367C0 22.998 1.034 23.994 2.314 24h19.371A2.288 2.288 0 0024 21.686V2.314A2.286 2.286 0 0021.691 0zm-2.877 2.004l-3.455 2.34-2.888-2.34h6.343zm-7.28 0l-2.893 2.34H8.64l-3.455-2.34h6.349zm10.159 19.988H2.315a.319.319 0 01-.311-.311V2.308c0-.161.139-.311.311-.311h.498l5.909 4.001 3.279-2.672 3.283 2.672 5.908-3.996h.498c.171 0 .311.15.311.311V21.68h.001c.001.166-.138.317-.309.312z"
  }), React.createElement("path", {
    d: "M9.391 12.233h10.501v1.997H9.391zm5.176 3.995h5.325v1.997h-5.325zM4.11 12.233h3.937v1.997H4.11zm5.281-3.985h10.501v1.981H9.391zm-5.281 0h3.937v1.981H4.11z"
  }));
}

function jC(e) {
  return function (e) {
    if (Array.isArray(e)) return DC(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || NC(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function AC() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return MC(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (MC(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, MC(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, MC(d, "constructor", u), MC(u, "constructor", c), c.displayName = "GeneratorFunction", MC(u, a, "GeneratorFunction"), MC(d), MC(d, a, "Generator"), MC(d, r, function () {
    return this;
  }), MC(d, "toString", function () {
    return "[object Generator]";
  }), (AC = function () {
    return {
      w: o,
      m
    };
  })();
}

function MC(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  MC = function (e, t, n, r) {
    function o(t, n) {
      MC(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, MC(e, t, n, r);
}
