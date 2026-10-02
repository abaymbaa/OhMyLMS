// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function jx() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Ax(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Ax(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Ax(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Ax(d, "constructor", u), Ax(u, "constructor", c), c.displayName = "GeneratorFunction", Ax(u, a, "GeneratorFunction"), Ax(d), Ax(d, a, "Generator"), Ax(d, r, function () {
    return this;
  }), Ax(d, "toString", function () {
    return "[object Generator]";
  }), (jx = function () {
    return {
      w: o,
      m
    };
  })();
}

function Ax(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Ax = function (e, t, n, r) {
    function o(t, n) {
      Ax(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Ax(e, t, n, r);
}

function Mx(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Tx(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Mx(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Mx(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function Ix(e, t) {
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
      if ("string" == typeof e) return Fx(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Fx(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Fx(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Nx,
  Dx = {
    key: "learndash_complete_topic",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-learndash",
    title: null === (Cx = window) || void 0 === Cx || null === (Cx = Cx.MRM_Vars) || void 0 === Cx || null === (Cx = Cx.mint_trans) || void 0 === Cx ? void 0 : Cx.CompletesATopic,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (Px = window) || void 0 === Px || null === (Px = Px.MRM_Vars) || void 0 === Px || null === (Px = Px.mint_trans) || void 0 === Px ? void 0 : Px.CompletesATopicDescription,
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: kx,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i,
        l = Ix((0, g.useState)([]), 2),
        c = l[0],
        u = l[1],
        s = Ix((0, g.useState)([]), 2),
        d = s[0],
        m = s[1],
        p = Ix((0, g.useState)([]), 2),
        f = p[0],
        v = p[1],
        _ = Ix((0, g.useState)(!1), 2),
        w = _[0],
        E = _[1],
        S = Ix((0, g.useState)(!1), 2),
        R = S[0],
        x = S[1],
        C = Ix((0, g.useState)((0, b.__)("Please enter 3 or more characters", "mrm")), 2),
        P = C[0],
        O = C[1],
        k = (0, g.useRef)(!1),
        j = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex()
          };
        }, []),
        M = j.selectedStep,
        T = j.selectedStepIndex,
        I = j.selectedStepCondition,
        F = j.selectedLogicalStepIndex,
        N = function () {
          var e = Tx(jx().m(function e() {
            var t,
              n,
              r = arguments;
            return jx().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                    e.n = 2;
                    break;
                  }
                  return O((0, b.__)("loading...", "mrm")), e.n = 1, xh(t);
                case 1:
                  null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.courses) ? (O((0, b.__)("No courses found", "mrm")), v([])) : v(null == n ? void 0 : n.courses)), e.n = 3;
                  break;
                case 2:
                  v([]);
                case 3:
                  return e.a(2);
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
        D = function () {
          var e = Tx(jx().m(function e(t) {
            var n;
            return jx().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if ((0, y.dispatch)(Lf).updateStepArgs(T, I, F, "learn_dash_settings", "courses", t), !t) {
                    e.n = 5;
                    break;
                  }
                  return E(!0), m([]), u([]), e.p = 1, e.n = 2, Ph(null == t ? void 0 : t.value);
                case 2:
                  null != (n = e.v) && n.success && u((null == n ? void 0 : n.lessons) || []);
                case 3:
                  return e.p = 3, E(!1), e.f(3);
                case 4:
                  e.n = 6;
                  break;
                case 5:
                  u([]), m([]);
                case 6:
                  return e.a(2);
              }
            }, e, null, [[1,, 3, 4]]);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
        W = function () {
          var e = Tx(jx().m(function e(t) {
            var n;
            return jx().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if ((0, y.dispatch)(Lf).updateStepArgs(T, I, F, "learn_dash_settings", "lessons", t), !t) {
                    e.n = 5;
                    break;
                  }
                  return x(!0), m([]), e.p = 1, e.n = 2, Th(t.value);
                case 2:
                  null != (n = e.v) && n.success && m((null == n ? void 0 : n.topics) || []);
                case 3:
                  return e.p = 3, x(!1), e.f(3);
                case 4:
                  e.n = 6;
                  break;
                case 5:
                  m([]);
                case 6:
                  return e.a(2);
              }
            }, e, null, [[1,, 3, 4]]);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }();
      (0, g.useEffect)(function () {
        var e, t;
        if (!k.current) {
          var n = null === (e = M.settings) || void 0 === e || null === (e = e.learn_dash_settings) || void 0 === e ? void 0 : e.courses,
            r = null === (t = M.settings) || void 0 === t || null === (t = t.learn_dash_settings) || void 0 === t ? void 0 : t.lessons;
          n && Tx(jx().m(function e() {
            return jx().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  return e.n = 1, D(n);
                case 1:
                  if (!r) {
                    e.n = 2;
                    break;
                  }
                  return e.n = 2, W(r);
                case 2:
                  return e.a(2);
              }
            }, e);
          }))(), k.current = !0;
        }
      }, [null === (e = M.settings) || void 0 === e || null === (e = e.learn_dash_settings) || void 0 === e ? void 0 : e.courses, null === (t = M.settings) || void 0 === t || null === (t = t.learn_dash_settings) || void 0 === t ? void 0 : t.lessons]);
      var z = h().createElement("div", {
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
      }, h().createElement("h4", null, h().createElement(kx, null), null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.CompletesATopic), h().createElement("p", {
        className: "sort-description"
      }, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.CompletesATopicDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", null, (0, b.__)("Select a course", "mrm")), h().createElement(yg.Ay, {
        name: "course-select",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, P));
          }
        },
        value: (null === (a = M.settings) || void 0 === a || null === (a = a.learn_dash_settings) || void 0 === a ? void 0 : a.courses) || "",
        onChange: D,
        onInputChange: function (e) {
          e.length >= 3 && N(e);
        },
        options: f,
        isMulti: !1,
        placeholder: (0, b.__)("Search for a course...", "mrm"),
        isSearchable: !0
      })), w && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement(q.Spinner, {
        tip: "Lessons Loading",
        size: "large"
      }, z)), !w && c.length > 0 && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", null, (0, b.__)("Select a lesson", "mrm")), h().createElement(yg.Ay, {
        name: "lesson-select",
        value: (null === (o = M.settings) || void 0 === o || null === (o = o.learn_dash_settings) || void 0 === o ? void 0 : o.lessons) || "",
        onChange: W,
        options: c,
        isMulti: !1,
        placeholder: (0, b.__)("Search for lessons...", "mrm"),
        isSearchable: !0
      })), R && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement(Spin, {
        tip: "Topics Loading",
        size: "large"
      }, z)), !R && d.length > 0 && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", null, (0, b.__)("Select topic(s)", "mrm")), h().createElement(yg.Ay, {
        name: "topic-select",
        value: (null === (i = M.settings) || void 0 === i || null === (i = i.learn_dash_settings) || void 0 === i ? void 0 : i.topics) || "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(T, I, F, "learn_dash_settings", "topics", e);
        },
        options: d,
        isMulti: !0,
        placeholder: (0, b.__)("Search for topics...", "mrm"),
        isSearchable: !0
      })))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function Wx() {
  return React.createElement("svg", {
    className: "hover-stroke",
    width: "18",
    height: "20",
    viewBox: "0 0 18 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_9613_1667)"
  }, React.createElement("path", {
    d: "M11.175 15.9399V7.17846L10.0674 6.16203C10.2165 6.3001 10.3318 6.46132 10.4092 6.63497L10.4092 6.635C10.4866 6.80854 10.5254 6.99255 10.525 7.17695V7.17846V15.9392M11.175 15.9399L10.525 15.9387C10.525 15.9389 10.525 15.9391 10.525 15.9392M11.175 15.9399C11.173 16.9552 10.7366 17.9284 9.96121 18.6464L11.175 15.9399ZM10.525 15.9392C10.5232 16.7656 10.1684 17.5687 9.5196 18.1694M10.525 15.9392L9.5196 18.1694M9.5196 18.1694C8.92231 18.7224 8.12167 19.0601 7.26719 19.1129L7.2672 7.17846L7.26719 7.17689C7.26675 6.99254 7.30556 6.80855 7.38295 6.63502L9.5196 18.1694ZM8.89739 5.71836L8.8948 5.71837C8.67425 5.71792 8.45683 5.75787 8.25537 5.8349C8.05397 5.91191 7.87407 6.02382 7.72484 6.16197L8.89739 5.71836ZM8.89739 5.71836C9.11791 5.71792 9.33535 5.75787 9.5368 5.83489L8.89739 5.71836ZM9.53682 5.8349C9.73821 5.91191 9.91812 6.02384 10.0674 6.162L9.53682 5.8349ZM8.8961 5.06836V5.06839V5.06836ZM7.38296 6.635C7.46043 6.46133 7.57569 6.3001 7.72478 6.16203L7.38296 6.635Z",
    stroke: "#2D3149",
    strokeWidth: "1.3"
  }), React.createElement("path", {
    d: "M1.63818 11.7988L1.63814 11.7988C1.43675 11.8758 1.25687 11.9877 1.10765 12.1259M1.63818 11.7988L3.45018 12.1259C3.59931 12.264 3.71457 12.4252 3.79203 12.5989C3.86942 12.7724 3.90824 12.9564 3.9078 13.1408H3.9078V13.1423V16.1692C3.90604 16.9955 3.55118 17.7986 2.90242 18.3993L2.90241 18.3993C2.30513 18.9524 1.50449 19.29 0.650005 19.3428L0.650007 13.1423L0.650004 13.1408C0.649569 12.9564 0.688395 12.7724 0.765788 12.5989L0.76579 12.5989C0.843242 12.4252 0.958505 12.264 1.10765 12.1259M1.63818 11.7988C1.83963 11.7217 2.05707 11.6818 2.27762 11.6822L2.2802 11.6822M1.63818 11.7988L2.2802 11.6822M1.10765 12.1259L0.666023 11.6489L1.10765 12.1259ZM2.2802 11.6822C2.50074 11.6818 2.71819 11.7217 2.91965 11.7988L2.91967 11.7988M2.2802 11.6822L2.91967 11.7988M2.91967 11.7988C3.12103 11.8758 3.30092 11.9877 3.45015 12.1258L2.91967 11.7988ZM2.27891 11.0323L2.27891 11.0322L2.27891 11.0323ZM4.5578 16.1699V13.1423L0.421108 20.0001C1.51762 19.9983 2.56867 19.5942 3.34403 18.8763C4.11939 18.1583 4.55584 17.1852 4.5578 16.1699Z",
    stroke: "#2D3149",
    strokeWidth: "1.3"
  }), React.createElement("path", {
    d: "M14.8647 0.76653L14.8647 0.766531C14.6633 0.84354 14.4834 0.955465 14.3342 1.09362L14.3342 1.09364C14.1851 1.23171 14.0698 1.39294 13.9923 1.56664C13.9149 1.74017 13.8761 1.92416 13.8766 2.10853L13.8766 2.1101L13.8766 19.251C14.731 19.1982 15.5317 18.8605 16.129 18.3075L16.5706 18.7844L16.129 18.3075C16.7777 17.7068 17.1326 16.9036 17.1344 16.0773V2.1101V2.10859C17.1348 1.92418 17.096 1.74017 17.0186 1.56664L17.0186 1.56659C16.9411 1.39293 16.8259 1.23171 16.6767 1.09364M14.8647 0.76653H16.1462C16.3476 0.843539 16.5275 0.955466 16.6767 1.09364M14.8647 0.76653C15.0662 0.689501 15.2836 0.649558 15.5042 0.650009L15.5068 0.650004M14.8647 0.76653L15.5068 0.650004M16.6767 1.09364L17.1172 0.617929L16.6767 1.09364ZM15.5068 0.650004C15.7273 0.649558 15.9447 0.6895 16.1462 0.766524L15.5068 0.650004ZM15.5055 5.00827e-06V3.45222e-05V5.00827e-06Z",
    stroke: "#2D3149",
    strokeWidth: "1.3"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_9613_1667"
  }, React.createElement("rect", {
    width: "18",
    height: "20",
    fill: "white"
  }))));
}

function zx() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return Bx(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (Bx(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, Bx(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, Bx(d, "constructor", u), Bx(u, "constructor", c), c.displayName = "GeneratorFunction", Bx(u, a, "GeneratorFunction"), Bx(d), Bx(d, a, "Generator"), Bx(d, r, function () {
    return this;
  }), Bx(d, "toString", function () {
    return "[object Generator]";
  }), (zx = function () {
    return {
      w: o,
      m
    };
  })();
}

function Bx(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  Bx = function (e, t, n, r) {
    function o(t, n) {
      Bx(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, Bx(e, t, n, r);
}

function Lx(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Vx(e, t) {
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
      if ("string" == typeof e) return Hx(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Hx(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Hx(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Gx,
  Ux = {
    key: "learndash_completes_quiz",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-learndash",
    title: (0, b.__)("Completes a Quiz", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (Nx = window) || void 0 === Nx || null === (Nx = Nx.MRM_Vars) || void 0 === Nx || null === (Nx = Nx.mint_trans) || void 0 === Nx ? void 0 : Nx.CompletesAQuizDescription,
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: Wx,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i = Vx((0, g.useState)([]), 2),
        l = i[0],
        c = i[1],
        u = Vx((0, g.useState)("Please enter 3 or more characters"), 2),
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
            t = (e = zx().m(function e() {
              var t,
                n,
                r = arguments;
              return zx().w(function (e) {
                for (;;) switch (e.n) {
                  case 0:
                    if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                      e.n = 2;
                      break;
                    }
                    return d((0, b.__)("loading...", "mrm")), e.n = 1, kh(t);
                  case 1:
                    null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.quizzes) ? d((0, b.__)("No forms found", "mrm")) : c(null == n ? void 0 : n.quizzes));
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
                  Lx(o, r, a, i, l, "next", e);
                }
                function l(e) {
                  Lx(o, r, a, i, l, "throw", e);
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
        className: "mintmrm-automation_step-settings tutor-after-enrolled learn-dash-completes-quiz"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(Wx, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.CompletesAQuiz), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.CompletesAQuizDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.SelectQuizS, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectQuizTooltip))), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, s));
          }
        },
        value: null !== (a = null === (o = p.settings) || void 0 === o || null === (o = o.learn_dash_settings) || void 0 === o ? void 0 : o.quizzes) && void 0 !== a ? a : "",
        onChange: function (e) {
          var t;
          t = e, (0, y.dispatch)(Lf).updateStepArgs(f, v, _, "learn_dash_settings", "quizzes", t), d("Please enter 3 or more characters");
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

function qx() {
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
