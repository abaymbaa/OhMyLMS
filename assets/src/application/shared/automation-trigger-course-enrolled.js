// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function Yx() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Qx(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Qx(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Qx(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Qx(d, "constructor", u), Qx(u, "constructor", c), c.displayName = "GeneratorFunction", Qx(u, a, "GeneratorFunction"), Qx(d), Qx(d, a, "Generator"), Qx(d, r, function () {
    return this;
  }), Qx(d, "toString", function () {
    return "[object Generator]";
  }), (Yx = function () {
    return {
      w: o,
      m
    };
  })();
}

function Qx(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Qx = function (e, t, n, r) {
    function o(t, n) {
      Qx(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Qx(e, t, n, r);
}

function Zx(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function $x(e, t) {
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
      if ("string" == typeof e) return Kx(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kx(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Kx(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Jx,
  Xx,
  eC = {
    key: "learndash_enrolled_course",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-learndash",
    title: (0, b.__)("Enrolls in a Course", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (Gx = window) || void 0 === Gx || null === (Gx = Gx.MRM_Vars) || void 0 === Gx || null === (Gx = Gx.mint_trans) || void 0 === Gx ? void 0 : Gx.EnrollsInACourseDescription,
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: qx,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i = $x((0, g.useState)([]), 2),
        l = i[0],
        c = i[1],
        u = $x((0, g.useState)("Please enter 3 or more characters"), 2),
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
            t = (e = Yx().m(function e() {
              var t,
                n,
                r = arguments;
              return Yx().w(function (e) {
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
                  Zx(o, r, a, i, l, "next", e);
                }
                function l(e) {
                  Zx(o, r, a, i, l, "throw", e);
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
      }, h().createElement("h4", null, h().createElement(qx, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.EnrollsInACourse), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.EnrollsInACourseDescription)), h().createElement("div", {
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

function tC() {
  return React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M18.2981 2.55499C17.9191 2.47612 17.5402 2.42593 17.1612 2.36139V1.97419C17.161 1.69479 17.1017 1.41861 16.987 1.16396C16.8724 0.909312 16.7051 0.681999 16.4962 0.497087C16.2831 0.309499 16.0326 0.169622 15.7613 0.0867813C15.49 0.00394018 15.2043 -0.0199614 14.9231 0.0166699C13.0519 0.239084 11.3156 1.10582 10.0107 2.46895C8.70579 1.10582 6.96956 0.239084 5.09835 0.0166699C4.81715 -0.0199614 4.5314 0.00394018 4.26014 0.0867813C3.98888 0.169622 3.73835 0.309499 3.52525 0.497087C3.31637 0.681999 3.14907 0.909312 3.03443 1.16396C2.91978 1.41861 2.86041 1.69479 2.86025 1.97419V2.36139C2.48128 2.42593 2.1023 2.47612 1.72333 2.55499C1.23748 2.65272 0.800358 2.9161 0.486218 3.30039C0.172079 3.68468 0.000300892 4.16619 6.77822e-05 4.66309V16.8098C-0.00235433 17.1153 0.060163 17.4179 0.183457 17.6973C0.306751 17.9767 0.487993 18.2266 0.715114 18.4303C0.945245 18.6311 1.21544 18.7804 1.50767 18.8682C1.7999 18.9559 2.10745 18.9802 2.40977 18.9394C4.88907 18.6042 7.41258 18.9512 9.7104 19.9432C9.79862 19.9807 9.89346 20 9.98927 20C10.0851 20 10.1799 19.9807 10.2681 19.9432C12.566 18.9512 15.0895 18.6042 17.5688 18.9394C17.8735 18.9805 18.1835 18.9554 18.4777 18.8659C18.772 18.7764 19.0436 18.6245 19.2741 18.4205C19.5047 18.2164 19.6888 17.9651 19.8141 17.6835C19.9393 17.4019 20.0027 17.0966 19.9999 16.7882V4.66309C20.0007 4.16919 19.832 3.69007 19.5221 3.30619C19.2122 2.92231 18.78 2.65706 18.2981 2.55499ZM15.109 1.43641C15.1883 1.4259 15.269 1.43263 15.3455 1.45614C15.4219 1.47965 15.4925 1.51938 15.5523 1.57265C15.6087 1.62317 15.6537 1.68506 15.6845 1.75426C15.7153 1.82346 15.7312 1.89841 15.7311 1.97419V14.3862C15.7351 14.5519 15.6818 14.7139 15.5801 14.8447C15.4784 14.9754 15.3347 15.0668 15.1734 15.1032C13.5021 15.3891 11.9537 16.168 10.7258 17.3404V3.79547C11.8418 2.48776 13.4054 1.64621 15.109 1.43641ZM4.29035 1.97419C4.2922 1.83024 4.35005 1.6927 4.45156 1.59091C4.55308 1.48911 4.69023 1.4311 4.83378 1.42924H4.91244C6.61708 1.64091 8.18086 2.48509 9.29567 3.79547V17.3404C8.06959 16.1628 6.521 15.3788 4.84808 15.0889C4.68678 15.0524 4.54305 14.9611 4.44136 14.8303C4.33967 14.6996 4.28631 14.5376 4.29035 14.3718V1.97419ZM2.23816 17.5196C2.13677 17.533 2.0337 17.5243 1.93591 17.4943C1.83812 17.4643 1.74789 17.4136 1.67131 17.3456C1.59472 17.2777 1.53357 17.194 1.49197 17.1004C1.45037 17.0067 1.42929 16.9051 1.43016 16.8026V4.66309C1.42679 4.49534 1.48218 4.33172 1.5867 4.2007C1.69123 4.06969 1.83826 3.97957 2.0022 3.94605C2.28822 3.88869 2.57423 3.84567 2.86025 3.80264V14.3862C2.86011 14.8884 3.0352 15.3748 3.35516 15.7611C3.67512 16.1475 4.1198 16.4094 4.61212 16.5014C5.66392 16.6867 6.65945 17.111 7.52236 17.7419C5.78795 17.3549 3.9988 17.2796 2.23816 17.5196ZM18.5913 16.8026C18.5921 16.9051 18.5711 17.0067 18.5295 17.1004C18.4879 17.194 18.4267 17.2777 18.3501 17.3456C18.2735 17.4136 18.1833 17.4643 18.0855 17.4943C17.9877 17.5243 17.8847 17.533 17.7833 17.5196C16.0226 17.2796 14.2335 17.3549 12.4991 17.7419C13.362 17.111 14.3575 16.6867 15.4093 16.5014C15.9016 16.4094 16.3463 16.1475 16.6663 15.7611C16.9862 15.3748 17.1613 14.8884 17.1612 14.3862V3.81698C17.4472 3.86001 17.7332 3.90303 18.0264 3.96039C18.189 3.99538 18.3344 4.08611 18.4375 4.21699C18.5406 4.34786 18.595 4.51069 18.5913 4.67743V16.8026Z",
    fill: "#2D3149"
  }));
}

function nC() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return rC(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (rC(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, rC(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, rC(d, "constructor", u), rC(u, "constructor", c), c.displayName = "GeneratorFunction", rC(u, a, "GeneratorFunction"), rC(d), rC(d, a, "Generator"), rC(d, r, function () {
    return this;
  }), rC(d, "toString", function () {
    return "[object Generator]";
  }), (nC = function () {
    return {
      w: o,
      m
    };
  })();
}

function rC(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  rC = function (e, t, n, r) {
    function o(t, n) {
      rC(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, rC(e, t, n, r);
}

function aC(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function oC(e, t) {
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
      if ("string" == typeof e) return iC(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? iC(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function iC(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var lC = {
  key: "learndash_enrolls_groups",
  group: "triggers",
  type: "trigger",
  package: "pro",
  category: "mint-learndash",
  title: null === (Jx = window) || void 0 === Jx || null === (Jx = Jx.MRM_Vars) || void 0 === Jx || null === (Jx = Jx.mint_trans) || void 0 === Jx ? void 0 : Jx.EnrollsInAGroup,
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: null === (Xx = window) || void 0 === Xx || null === (Xx = Xx.MRM_Vars) || void 0 === Xx || null === (Xx = Xx.mint_trans) || void 0 === Xx ? void 0 : Xx.EnrollsInAGroupDescription,
  subtitle: function () {
    return (0, b._x)("", "noun", "mrm");
  },
  icon: tC,
  edit: function () {
    var e,
      t,
      n,
      r,
      a,
      o,
      i = oC((0, g.useState)([]), 2),
      l = i[0],
      c = i[1],
      u = oC((0, g.useState)("Please enter 3 or more characters"), 2),
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
          t = (e = nC().m(function e() {
            var t,
              n,
              r = arguments;
            return nC().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                    e.n = 2;
                    break;
                  }
                  return d((0, b.__)("loading...", "mrm")), e.n = 1, Ah(t);
                case 1:
                  null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.groups) ? d((0, b.__)("No forms found", "mrm")) : c(null == n ? void 0 : n.groups));
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
                aC(o, r, a, i, l, "next", e);
              }
              function l(e) {
                aC(o, r, a, i, l, "throw", e);
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
      className: "mintmrm-automation_step-settings tutor-after-enrolled learn-dash-enrolled-group"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(tC, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.EnrollsInAGroup), h().createElement("p", {
      className: "sort-description"
    }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.EnrollsInAGroupDescription)), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: ""
    }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.SelectGroupsS, h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectGroupTooltip))), h().createElement(yg.Ay, {
      name: "select-two",
      components: {
        NoOptionsMessage: function (e) {
          return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, s));
        }
      },
      value: null !== (a = null === (o = p.settings) || void 0 === o || null === (o = o.learn_dash_settings) || void 0 === o ? void 0 : o.groups) && void 0 !== a ? a : "",
      onChange: function (e) {
        var t;
        t = e, (0, y.dispatch)(Lf).updateStepArgs(f, v, _, "learn_dash_settings", "groups", t), d("Please enter 3 or more characters");
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

function cC() {
  return React.createElement("svg", {
    className: "bricks-form-fill",
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

function uC() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return sC(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (sC(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, sC(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, sC(d, "constructor", u), sC(u, "constructor", c), c.displayName = "GeneratorFunction", sC(u, a, "GeneratorFunction"), sC(d), sC(d, a, "Generator"), sC(d, r, function () {
    return this;
  }), sC(d, "toString", function () {
    return "[object Generator]";
  }), (uC = function () {
    return {
      w: o,
      m
    };
  })();
}

function sC(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  sC = function (e, t, n, r) {
    function o(t, n) {
      sC(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, sC(e, t, n, r);
}

function dC(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function mC(e, t) {
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
      if ("string" == typeof e) return pC(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pC(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function pC(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
