// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function NA(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  NA = function (e, t, n, r) {
    function o(t, n) {
      NA(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, NA(e, t, n, r);
}

function DA(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function WA() {
  return zA.apply(this, arguments);
}

function zA() {
  return (e = FA().m(function e() {
    return FA().w(function (e) {
      for (;;) if (0 === e.n) return e.a(2, l()({
        path: "mrm/v1/contacts/import/native/wp/roles"
      }).then(function (e) {
        return e;
      }).then(function (e) {
        if ("success" === (null == e ? void 0 : e.status)) return null == e ? void 0 : e.data;
      }));
    }, e);
  }), zA = function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        DA(o, r, a, i, l, "next", e);
      }
      function l(e) {
        DA(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  }).apply(this, arguments);
  var e;
}

function BA(e) {
  return function (e) {
    if (Array.isArray(e)) return UA(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || GA(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function LA() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return VA(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (VA(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, VA(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, VA(d, "constructor", u), VA(u, "constructor", c), c.displayName = "GeneratorFunction", VA(u, a, "GeneratorFunction"), VA(d), VA(d, a, "Generator"), VA(d, r, function () {
    return this;
  }), VA(d, "toString", function () {
    return "[object Generator]";
  }), (LA = function () {
    return {
      w: o,
      m
    };
  })();
}

function VA(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  VA = function (e, t, n, r) {
    function o(t, n) {
      VA(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, VA(e, t, n, r);
}

function HA(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function GA(e, t) {
  if (e) {
    if ("string" == typeof e) return UA(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? UA(e, t) : void 0;
  }
}

function UA(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var qA,
  YA = {
    key: "createWordPressUser",
    group: "actions",
    type: "action",
    package: "pro",
    category: "mint-wordpress",
    title: (0, b._x)("Create WordPress User", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: null === (MA = window) || void 0 === MA || null === (MA = MA.MRM_Vars) || void 0 === MA || null === (MA = MA.mint_trans) || void 0 === MA ? void 0 : MA.ActionDescription,
    subtitle: function (e) {
      var t, n, r;
      return "" === (null === (t = e.settings) || void 0 === t || null === (t = t.create_wordpress_user_settings) || void 0 === t ? void 0 : t.role) ? null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet : "Selected role: " + (null == e || null === (r = e.settings) || void 0 === r || null === (r = r.create_wordpress_user_settings) || void 0 === r ? void 0 : r.role);
    },
    icon: IA,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i,
        l,
        c,
        u,
        s,
        d,
        m,
        p,
        f,
        v,
        _,
        w = function (e, t) {
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
          }(e, t) || GA(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }((0, g.useState)([]), 2),
        E = w[0],
        S = w[1],
        R = (0, g.useRef)(null),
        x = (0, g.useRef)(null),
        C = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            automationData: e(Lf).getAutomationData()
          };
        }, []),
        P = C.selectedStep,
        O = C.selectedStepIndex,
        k = C.selectedStepCondition,
        j = C.selectedLogicalStepIndex,
        A = C.automationData;
      return (0, g.useEffect)(function () {
        var e;
        if (null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.is_mailmint_pro_license_active) {
          var t = function () {
            var e,
              t = (e = LA().m(function e() {
                var t, n;
                return LA().w(function (e) {
                  for (;;) switch (e.p = e.n) {
                    case 0:
                      return e.p = 0, e.n = 1, WA();
                    case 1:
                      t = e.v, S(t.map(function (e) {
                        return {
                          value: null == e ? void 0 : e.role,
                          label: (null == e ? void 0 : e.name) || (null == e ? void 0 : e.display_name)
                        };
                      }) || []), e.n = 3;
                      break;
                    case 2:
                      e.p = 2, n = e.v, console.error("Error fetching roles:", n);
                    case 3:
                      return e.a(2);
                  }
                }, e, null, [[0, 2]]);
              }), function () {
                var t = this,
                  n = arguments;
                return new Promise(function (r, a) {
                  var o = e.apply(t, n);
                  function i(e) {
                    HA(o, r, a, i, l, "next", e);
                  }
                  function l(e) {
                    HA(o, r, a, i, l, "throw", e);
                  }
                  i(void 0);
                });
              });
            return function () {
              return t.apply(this, arguments);
            };
          }();
          t();
        }
      }, []), h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings create-wordpress-user-settings"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(IA, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.CreateWordpressUser), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.CreateWPUserDes)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body "
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "",
        className: "inline-with-link"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.UserRole), h().createElement(q.SelectControl, {
        options: [{
          value: "",
          label: null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectUserRole
        }].concat(BA(E)),
        value: null == P || null === (a = P.settings) || void 0 === a || null === (a = a.create_wordpress_user_settings) || void 0 === a ? void 0 : a.role,
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "create_wordpress_user_settings", "role", e);
        }
      })), h().createElement("div", {
        className: "form-group single-settings password-settings"
      }, h().createElement("label", {
        htmlFor: "",
        className: "inline-with-link"
      }, "Password"), h().createElement("input", {
        type: "checkbox",
        checked: null === (o = P.settings) || void 0 === o || null === (o = o.create_wordpress_user_settings) || void 0 === o ? void 0 : o.auto_pass,
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "create_wordpress_user_settings", "auto_pass", e.target.checked);
        }
      }), (0, b.__)("Generate Password Automatically", "mrm")), !(null !== (i = P.settings) && void 0 !== i && null !== (i = i.create_wordpress_user_settings) && void 0 !== i && i.auto_pass) && h().createElement("div", {
        className: "form-group single-settings password-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, "Provide Custom User Password", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.CustomUserPassTooltip))), h().createElement(q.TextControl, {
        id: "custom-password",
        type: "text",
        placeholder: (0, b.__)("Enter password...", "mrm"),
        value: null !== (c = null === (u = P.settings) || void 0 === u || null === (u = u.create_wordpress_user_settings) || void 0 === u ? void 0 : u.custom_pass) && void 0 !== c ? c : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "create_wordpress_user_settings", "custom_pass", e);
        },
        ref: x
      }), h().createElement("div", {
        className: "pos-relative"
      }, h().createElement(Ej, {
        inputRef: x,
        inputValue: null === (s = P.settings) || void 0 === s || null === (s = s.create_wordpress_user_settings) || void 0 === s ? void 0 : s.custom_pass,
        setInputValue: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "create_wordpress_user_settings", "custom_pass", e);
        },
        tooltip: null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.personalizeTooltip,
        triggerName: null == A ? void 0 : A.trigger_name
      }))), h().createElement("div", {
        className: "form-group single-settings username-settings"
      }, h().createElement("label", null, (0, b.__)("Custom Username (optional)", "mrm"), h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "If you leave blank then email will be used as username. If provided username is not available then email address will be used for username."))), h().createElement(q.TextControl, {
        id: "custom-username",
        type: "text",
        placeholder: (0, b.__)("Enter username...", "mrm"),
        value: null !== (m = null === (p = P.settings) || void 0 === p || null === (p = p.create_wordpress_user_settings) || void 0 === p ? void 0 : p.custom_username) && void 0 !== m ? m : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "create_wordpress_user_settings", "custom_username", e);
        },
        ref: R
      }), h().createElement("div", {
        className: "pos-relative"
      }, h().createElement(Ej, {
        inputRef: R,
        inputValue: null === (f = P.settings) || void 0 === f || null === (f = f.create_wordpress_user_settings) || void 0 === f ? void 0 : f.custom_username,
        setInputValue: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "create_wordpress_user_settings", "custom_username", e);
        },
        tooltip: null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v || null === (v = v.mint_trans) || void 0 === v ? void 0 : v.personalizeTooltip,
        triggerName: null == A ? void 0 : A.trigger_name
      }))), h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "",
        className: "inline-with-link"
      }, "User Notification"), h().createElement("input", {
        type: "checkbox",
        checked: null === (_ = P.settings) || void 0 === _ || null === (_ = _.create_wordpress_user_settings) || void 0 === _ ? void 0 : _.notification_mail,
        onChange: function (e) {
          return t = e.target.checked, void (0, y.dispatch)(Lf).updateStepArgs(O, k, j, "create_wordpress_user_settings", "notification_mail", t);
          var t;
        }
      }), (0, b.__)("Send WordPress user notification email", "mrm")))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function QA() {
  return React.createElement("svg", {
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("mask", {
    id: "a",
    masktype: "luminance",
    width: "20",
    height: "20",
    x: "0",
    y: "0",
    maskUnits: "userSpaceOnUse"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0V0z"
  })), React.createElement("g", {
    stroke: "#2D3149",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    mask: "url(#a)"
  }, React.createElement("path", {
    d: "M12.781 9.96a2.734 2.734 0 11-5.469 0 2.734 2.734 0 015.47 0z"
  }), React.createElement("path", {
    d: "M15.905 15.11a1.57 1.57 0 002.134-.59c.426-.75.16-1.701-.592-2.125l-.048-.028a1.447 1.447 0 01-.724-1.451 6.808 6.808 0 00-.007-1.9 1.444 1.444 0 01.723-1.457l.056-.032a1.557 1.557 0 00.592-2.125 1.57 1.57 0 00-2.134-.59l-.068.039a1.461 1.461 0 01-1.637-.139 6.75 6.75 0 00-1.716-1 1.457 1.457 0 01-.921-1.353v-.015a1.563 1.563 0 00-3.126 0c0 .6-.37 1.135-.928 1.355a6.75 6.75 0 00-1.736 1.003 1.461 1.461 0 01-1.633.135l-.045-.025a1.57 1.57 0 00-2.134.59c-.426.75-.16 1.701.592 2.125l.013.007c.52.296.815.88.728 1.472a6.793 6.793 0 00-.006 1.928 1.446 1.446 0 01-.723 1.454l-.012.007a1.557 1.557 0 00-.592 2.125 1.57 1.57 0 002.134.59"
  }), React.createElement("path", {
    d: "M5.75 19.219c0-2.19 1.777-3.985 3.968-3.985h.735c2.192 0 3.969 1.796 3.969 3.985"
  })));
}

function ZA(e) {
  return function (e) {
    if (Array.isArray(e)) return tM(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || eM(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function $A() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return KA(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (KA(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, KA(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, KA(d, "constructor", u), KA(u, "constructor", c), c.displayName = "GeneratorFunction", KA(u, a, "GeneratorFunction"), KA(d), KA(d, a, "Generator"), KA(d, r, function () {
    return this;
  }), KA(d, "toString", function () {
    return "[object Generator]";
  }), ($A = function () {
    return {
      w: o,
      m
    };
  })();
}

function KA(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  KA = function (e, t, n, r) {
    function o(t, n) {
      KA(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, KA(e, t, n, r);
}

function JA(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function XA(e, t) {
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
  }(e, t) || eM(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function eM(e, t) {
  if (e) {
    if ("string" == typeof e) return tM(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? tM(e, t) : void 0;
  }
}

function tM(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
