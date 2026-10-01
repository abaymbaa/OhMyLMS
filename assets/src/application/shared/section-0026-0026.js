// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function zy() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return By(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (By(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, By(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, By(d, "constructor", u), By(u, "constructor", c), c.displayName = "GeneratorFunction", By(u, a, "GeneratorFunction"), By(d), By(d, a, "Generator"), By(d, r, function () {
    return this;
  }), By(d, "toString", function () {
    return "[object Generator]";
  }), (zy = function () {
    return {
      w: o,
      m
    };
  })();
}

function By(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  By = function (e, t, n, r) {
    function o(t, n) {
      By(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, By(e, t, n, r);
}

function Ly(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function Vy(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        Ly(o, r, a, i, l, "next", e);
      }
      function l(e) {
        Ly(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function Hy(e, t) {
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
      if ("string" == typeof e) return Gy(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gy(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Gy(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Uy = {
  key: "wp_post_publish",
  group: "triggers",
  type: "trigger",
  package: "free",
  category: "mint-wordpress",
  title: null === (yy = window) || void 0 === yy || null === (yy = yy.MRM_Vars) || void 0 === yy || null === (yy = yy.mint_trans) || void 0 === yy ? void 0 : yy.PostPublish,
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: null === (by = window) || void 0 === by || null === (by = by.MRM_Vars) || void 0 === by || null === (by = by.mint_trans) || void 0 === by ? void 0 : by.PostPublishDescription,
  subtitle: function (e) {},
  icon: Wy,
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
      b,
      _,
      w,
      E,
      S,
      R,
      x,
      C,
      P,
      O,
      k,
      j,
      A,
      M,
      T,
      I,
      F,
      N,
      D,
      W,
      z,
      B,
      L,
      V = Hy((0, g.useState)(!1), 2),
      H = V[0],
      G = V[1],
      U = Hy((0, g.useState)(!1), 2),
      Y = U[0],
      Q = U[1],
      Z = Hy((0, g.useState)(!1), 2),
      $ = Z[0],
      K = Z[1],
      J = Hy((0, g.useState)([]), 2),
      X = J[0],
      ee = J[1],
      te = Hy((0, g.useState)([]), 2),
      ne = te[0],
      re = te[1],
      ae = Hy((0, g.useState)([]), 2),
      oe = ae[0],
      ie = ae[1],
      le = Hy((0, g.useState)([]), 2),
      ce = le[0],
      ue = le[1],
      se = Hy((0, g.useState)([]), 2),
      de = se[0],
      me = se[1],
      pe = Hy((0, g.useState)([]), 2),
      fe = pe[0],
      ve = pe[1],
      ge = Hy((0, g.useState)("none"), 2),
      he = ge[0],
      ye = ge[1],
      be = Hy((0, g.useState)(), 2),
      _e = be[0],
      we = be[1],
      Ee = null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.is_mailmint_pro_license_active,
      Se = Hy((0, g.useState)([]), 2),
      Re = Se[0],
      xe = Se[1],
      Ce = Hy((0, g.useState)([]), 2),
      Pe = Ce[0],
      Oe = Ce[1],
      ke = Hy((0, g.useState)([]), 2),
      je = ke[0],
      Ae = ke[1],
      Me = Hy((0, g.useState)("Please enter 3 or more characters"), 2),
      Te = Me[0],
      Ie = Me[1],
      Fe = (0, g.useRef)(null),
      Ne = (0, g.useRef)(null),
      De = (0, g.useRef)(null);
    (0, wy.useOutsideAlerter)(Fe, G), (0, wy.useOutsideAlerter)(Ne, Q), (0, wy.useOutsideAlerter)(De, K);
    var We = [{
        value: "any",
        label: null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.SelectACriteria
      }, {
        value: "categories",
        label: null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.Categories
      }, {
        value: "tags",
        label: null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.Tags
      }, {
        value: "author",
        label: null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.Authors
      }],
      ze = null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o ? void 0 : o.post_types,
      Be = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id),
          emailConditions: e(Lf).getEmailConditions(),
          contactConditions: e(Lf).getContactConditions(),
          segmentConditions: e(Lf).getSegmentConditions()
        };
      }, []),
      Le = Be.selectedStep,
      Ve = Be.selectedStepIndex,
      He = Be.selectedStepCondition,
      Ge = Be.selectedLogicalStepIndex;
    Be.errors, Be.emailConditions, Be.contactConditions, Be.segmentConditions, (0, g.useEffect)(function () {
      var e;
      Cy().then(function (e) {
        e.data.map(function () {
          ue(e.data);
        });
      }), ee((null == Le || null === (e = Le.settings) || void 0 === e || null === (e = e.post_settings) || void 0 === e ? void 0 : e.lists) || []);
    }, [_e]), (0, g.useEffect)(function () {
      var e;
      Ny().then(function (e) {
        e.data.map(function () {
          me(e.data);
        });
      }), re((null == Le || null === (e = Le.settings) || void 0 === e || null === (e = e.post_settings) || void 0 === e ? void 0 : e.tags) || []);
    }, [_e]), (0, g.useEffect)(function () {
      var e;
      Ee && Ay().then(function (e) {
        ve(e.data.data);
      }), ie((null == Le || null === (e = Le.settings) || void 0 === e || null === (e = e.post_settings) || void 0 === e ? void 0 : e.segments) || []);
    }, [_e]);
    var Ue = null !== (i = Le.settings) && void 0 !== i && null !== (i = i.post_settings) && void 0 !== i && i.criteria ? null === (l = Le.settings) || void 0 === l || null === (l = l.post_settings) || void 0 === l ? void 0 : l.criteria : "any";
    (0, g.useEffect)(function () {
      X.length >= 0 && (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "lists", X);
    }, [X]), (0, g.useEffect)(function () {
      ne.length >= 0 && (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "tags", ne);
    }, [ne]), (0, g.useEffect)(function () {
      oe.length >= 0 && (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "segments", oe);
    }, [oe]);
    var qe = function () {
        var e = Vy(zy().m(function e(t) {
          return zy().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                if (!(t.length >= 3)) {
                  e.n = 1;
                  break;
                }
                return Ie("loading..."), e.n = 1, Lg(t).then(function (e) {
                  "success" === (null == e ? void 0 : e.status) && (0 === e.data.length ? Ie("No category found") : (Oe(null == e ? void 0 : e.data), Ie("Please enter 3 or more characters")));
                });
              case 1:
                return e.a(2);
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
      Ye = function () {
        var e = Vy(zy().m(function e(t) {
          return zy().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                if (!(t.length >= 3)) {
                  e.n = 1;
                  break;
                }
                return Ie("loading..."), e.n = 1, Hg(t).then(function (e) {
                  "success" === (null == e ? void 0 : e.status) && (0 === e.data.length ? Ie("No tag found") : (xe(null == e ? void 0 : e.data), Ie("Please enter 3 or more characters")));
                });
              case 1:
                return e.a(2);
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
      Qe = function () {
        var e = Vy(zy().m(function e(t) {
          return zy().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                if (!(t.length >= 3)) {
                  e.n = 1;
                  break;
                }
                return Ie("loading..."), e.n = 1, Ug(t).then(function (e) {
                  "success" === (null == e ? void 0 : e.status) && (0 === e.data.length ? Ie("No author found") : (Ae(null == e ? void 0 : e.data), Ie("Please enter 3 or more characters")));
                });
              case 1:
                return e.a(2);
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
      Ze = function (e) {
        return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, Te));
      };
    return h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings post-publish"
    }, !Ee && h().createElement("div", {
      className: "hoverlay"
    }, h().createElement("button", {
      className: "upgrade-btn"
    }, h().createElement("a", {
      className: "mintmrm-btn",
      target: "_blank",
      href: Ey.AutomationOpenAILink
    }, h().createElement(_y.A, null), null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.UpgradeToPRONow))), h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(Wy, null), null === (u = window) || void 0 === u || null === (u = u.MRM_Vars) || void 0 === u || null === (u = u.mint_trans) || void 0 === u ? void 0 : u.PostPublish), h().createElement("p", {
      className: "sort-description"
    }, null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.PostPublishDescription)), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: "add-tag"
    }, null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.ChoosePostCriteria, h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, null === (m = window) || void 0 === m || null === (m = m.MRM_Vars) || void 0 === m || null === (m = m.mint_trans) || void 0 === m ? void 0 : m.PostPublishAttributeTooltip))), h().createElement(q.SelectControl, {
      options: We,
      value: null !== (p = null === (f = Le.settings) || void 0 === f || null === (f = f.post_settings) || void 0 === f ? void 0 : f.criteria) && void 0 !== p ? p : "",
      onChange: function (e) {
        !function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "criteria", e);
        }(e);
      }
    })), h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: "post-type"
    }, null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v || null === (v = v.mint_trans) || void 0 === v ? void 0 : v.ChoosePostType, h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, null === (b = window) || void 0 === b || null === (b = b.MRM_Vars) || void 0 === b || null === (b = b.mint_trans) || void 0 === b ? void 0 : b.ChoosePostTypeTooltip))), h().createElement("div", {
      className: "form-group react-select-control-group"
    }, h().createElement(yg.Ay, {
      name: "select-two",
      components: {
        NoOptionsMessage: Ze
      },
      value: null !== (_ = null === (w = Le.settings) || void 0 === w || null === (w = w.post_settings) || void 0 === w ? void 0 : w.post_types) && void 0 !== _ ? _ : "",
      onChange: function (e) {
        !function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "post_types", e);
        }(e);
      },
      options: ze,
      isMulti: "true",
      placeholder: null === (E = window) || void 0 === E || null === (E = E.MRM_Vars) || void 0 === E || null === (E = E.mint_trans) || void 0 === E ? void 0 : E.Search,
      isSearchable: !0
    }))), "tags" === Ue && h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: "add-list"
    }, null === (S = window) || void 0 === S || null === (S = S.MRM_Vars) || void 0 === S || null === (S = S.mint_trans) || void 0 === S ? void 0 : S.ChooseTagS, h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, null === (R = window) || void 0 === R || null === (R = R.MRM_Vars) || void 0 === R || null === (R = R.mint_trans) || void 0 === R ? void 0 : R.PostTagSelectTooltip))), h().createElement("div", {
      className: "form-group react-select-control-group"
    }, h().createElement(yg.Ay, {
      name: "select-two",
      components: {
        NoOptionsMessage: Ze
      },
      value: null !== (x = null === (C = Le.settings) || void 0 === C || null === (C = C.post_settings) || void 0 === C ? void 0 : C.post_tags) && void 0 !== x ? x : "",
      onChange: function (e) {
        !function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "post_tags", e);
        }(e);
      },
      onInputChange: function (e) {
        Ye(e);
      },
      options: Re,
      isMulti: "true",
      placeholder: "Search tags...",
      isSearchable: !0
    }))), "categories" === Ue && h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: "add-list"
    }, null === (P = window) || void 0 === P || null === (P = P.MRM_Vars) || void 0 === P || null === (P = P.mint_trans) || void 0 === P ? void 0 : P.ChooseCategoryS, h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, null === (O = window) || void 0 === O || null === (O = O.MRM_Vars) || void 0 === O || null === (O = O.mint_trans) || void 0 === O ? void 0 : O.PostCategorySelectTooltip))), h().createElement("div", {
      className: "form-group react-select-control-group"
    }, h().createElement(yg.Ay, {
      name: "select-two",
      components: {
        NoOptionsMessage: Ze
      },
      value: null !== (k = null === (j = Le.settings) || void 0 === j || null === (j = j.post_settings) || void 0 === j ? void 0 : j.post_categories) && void 0 !== k ? k : "",
      onChange: function (e) {
        var t;
        t = e, (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "post_categories", t);
      },
      onInputChange: function (e) {
        qe(e);
      },
      options: Pe,
      isMulti: "true",
      placeholder: "Search category...",
      isSearchable: !0
    }))), "author" === Ue && h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: "add-list"
    }, null === (A = window) || void 0 === A || null === (A = A.MRM_Vars) || void 0 === A || null === (A = A.mint_trans) || void 0 === A ? void 0 : A.ChooseAuthorS, h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, null === (M = window) || void 0 === M || null === (M = M.MRM_Vars) || void 0 === M || null === (M = M.mint_trans) || void 0 === M ? void 0 : M.ChooseAuthorTooltip))), h().createElement("div", {
      className: "form-group react-select-control-group"
    }, h().createElement(yg.Ay, {
      name: "select-two",
      components: {
        NoOptionsMessage: Ze
      },
      value: null !== (T = null === (I = Le.settings) || void 0 === I || null === (I = I.post_settings) || void 0 === I ? void 0 : I.post_authors) && void 0 !== T ? T : "",
      onChange: function (e) {
        var t;
        t = e, (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "post_authors", t);
      },
      onInputChange: function (e) {
        Qe(e);
      },
      options: je,
      isMulti: "true",
      placeholder: "Search author...",
      isSearchable: !0
    }))), h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: "add-list"
    }, null === (F = window) || void 0 === F || null === (F = F.MRM_Vars) || void 0 === F || null === (F = F.mint_trans) || void 0 === F ? void 0 : F.ChooseWhoCanEnterThisAutomation, h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, "If no filters are selected, all contacts will enter this automation."))), h().createElement("div", {
      className: "form-group lists-dropdown",
      ref: Fe
    }, h().createElement("button", {
      type: "button",
      className: "drop-down-button ".concat(H ? "show" : ""),
      onClick: function () {
        G(!H), (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "lists", X);
      },
      disabled: 0 < oe.length
    }, 0 != (null == X ? void 0 : X.length) ? null == X ? void 0 : X.map(function (e) {
      var t;
      return h().createElement("span", {
        className: "single-list mintmrm-tag-list",
        key: e.id
      }, e.title, h().createElement("span", {
        className: "close-list",
        title: null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.Delete,
        onClick: function (t) {
          return n = e.id, void (0 <= X.findIndex(function (e) {
            return e.id == n;
          }) && (ee(X.filter(function (e) {
            return e.id != n;
          })), (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "lists", X)));
          var n;
        }
      }, h().createElement(vy.A, null)));
    }) : null === (N = window) || void 0 === N || null === (N = N.MRM_Vars) || void 0 === N || null === (N = N.mint_trans) || void 0 === N ? void 0 : N.SelectLists), h().createElement(fy, {
      isActive: H,
      setIsActive: G,
      selected: X,
      setSelected: ee,
      endpoint: "lists",
      items: ce,
      allowMultiple: !0,
      allowNewCreate: !1,
      name: "list",
      title: null === (D = window) || void 0 === D || null === (D = D.MRM_Vars) || void 0 === D || null === (D = D.mint_trans) || void 0 === D ? void 0 : D.CHOOSELIST,
      refresh: _e,
      setRefresh: we,
      prefix: "create-list",
      comesFrom: "automation",
      setsuccessNotification: ye,
      successNotification: he
    })), h().createElement("div", {
      className: "form-group tag-dropdown",
      ref: Ne
    }, h().createElement("button", {
      type: "button",
      className: "drop-down-button ".concat(Y ? "show" : ""),
      onClick: function () {
        Q(!Y), (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "tags", ne);
      },
      disabled: 0 < oe.length
    }, 0 != (null == ne ? void 0 : ne.length) ? null == ne ? void 0 : ne.map(function (e) {
      var t;
      return h().createElement("span", {
        className: "single-list mintmrm-tag-list",
        key: e.id
      }, e.title, h().createElement("span", {
        className: "close-list",
        title: null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.Delete,
        onClick: function (t) {
          return n = e.id, void (0 <= ne.findIndex(function (e) {
            return e.id == n;
          }) && (re(ne.filter(function (e) {
            return e.id != n;
          })), (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "tags", ne)));
          var n;
        }
      }, h().createElement(vy.A, null)));
    }) : null === (W = window) || void 0 === W || null === (W = W.MRM_Vars) || void 0 === W || null === (W = W.mint_trans) || void 0 === W ? void 0 : W.SelectTags), h().createElement(fy, {
      isActive: Y,
      setIsActive: Q,
      selected: ne,
      setSelected: re,
      endpoint: "tags",
      items: de,
      allowMultiple: !0,
      allowNewCreate: !1,
      name: "tag",
      title: null === (z = window) || void 0 === z || null === (z = z.MRM_Vars) || void 0 === z || null === (z = z.mint_trans) || void 0 === z ? void 0 : z.CHOOSETAG,
      refresh: _e,
      setRefresh: we,
      prefix: "create-tag",
      comesFrom: "automation",
      setsuccessNotification: ye,
      successNotification: he
    })), h().createElement("div", {
      className: "form-group segment-dropdown",
      ref: De
    }, h().createElement("button", {
      type: "button",
      className: "drop-down-button ".concat($ ? "show" : ""),
      onClick: function () {
        K(!$), (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "segments", oe);
      },
      disabled: 0 < X.length || 0 < ne.length
    }, 0 != (null == oe ? void 0 : oe.length) ? null == oe ? void 0 : oe.map(function (e) {
      var t;
      return h().createElement("span", {
        className: "single-list mintmrm-tag-list",
        key: e.id
      }, e.title, h().createElement("span", {
        className: "close-list",
        title: null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.Delete,
        onClick: function (t) {
          return n = e.id, void (0 <= oe.findIndex(function (e) {
            return e.id == n;
          }) && (ie(oe.filter(function (e) {
            return e.id != n;
          })), (0, y.dispatch)(Lf).updateStepArgs(Ve, He, Ge, "post_settings", "segments", oe)));
          var n;
        }
      }, h().createElement(vy.A, null)));
    }) : null === (B = window) || void 0 === B || null === (B = B.MRM_Vars) || void 0 === B || null === (B = B.mint_trans) || void 0 === B ? void 0 : B.SelectSegment), h().createElement(fy, {
      isActive: $,
      setIsActive: K,
      selected: oe,
      setSelected: ie,
      endpoint: "segments",
      items: fe,
      allowMultiple: !1,
      allowNewCreate: !1,
      name: "segment",
      title: null === (L = window) || void 0 === L || null === (L = L.MRM_Vars) || void 0 === L || null === (L = L.mint_trans) || void 0 === L ? void 0 : L.ChooseSegment,
      refresh: _e,
      setRefresh: we,
      prefix: "create",
      comesFrom: "automation",
      setsuccessNotification: ye,
      successNotification: he
    }))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
    showVideo: !1
  }
};

function qy() {
  return React.createElement("svg", {
    width: "23",
    height: "23",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 22 22",
    "aria-hidden": "true",
    focusable: "false"
  }, React.createElement("path", {
    d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
  }));
}

var Yy = {
  key: "wp_user_login",
  group: "triggers",
  type: "trigger",
  package: "free",
  category: "mint-wordpress",
  title: (0, b.__)("User Login", "mrm"),
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("Starts the automation when a new user registered in WordPress.", "mrm"),
  subtitle: function (e) {
    return (0, b.__)("", "mrm");
  },
  icon: function () {
    return React.createElement("svg", {
      width: "13",
      height: "13",
      fill: "none",
      viewBox: "0 0 13 13",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#2D3149",
      d: "M3.903 4.012h-.718l1.957 5.533 1.096-3.132-.85-2.401h-.757v-.527h3.354v.527H7.2l1.957 5.533.703-2.011c.923-2.576-.756-3.378-.756-3.953a1.04 1.04 0 011.132-1.036A5.42 5.42 0 006.503 1.06a5.433 5.433 0 00-4.526 2.424h1.926v.527zM1.063 6.5a5.44 5.44 0 002.888 4.805L1.497 4.367A5.42 5.42 0 001.062 6.5zm10.169-2.68a3.85 3.85 0 01-.066 1.49h.022l-.082.235c-.049.17-.11.343-.18.513l-1.871 5.243a5.438 5.438 0 002.177-7.481z"
    }), React.createElement("path", {
      fill: "#2D3149",
      d: "M4.82 11.675a5.435 5.435 0 001.678.264 5.48 5.48 0 001.604-.24L6.51 7.2l-1.69 4.474z"
    }), React.createElement("path", {
      fill: "#2D3149",
      d: "M11.096 1.904A6.458 6.458 0 006.5 0a6.457 6.457 0 00-4.596 1.904A6.457 6.457 0 000 6.5c0 1.736.676 3.368 1.904 4.596A6.457 6.457 0 006.5 13a6.457 6.457 0 004.596-1.904A6.458 6.458 0 0013 6.5a6.457 6.457 0 00-1.904-4.596zM6.5 12.54A6.048 6.048 0 01.459 6.5 6.048 6.048 0 016.5.459 6.048 6.048 0 0112.541 6.5 6.048 6.048 0 016.5 12.541z"
    }));
  },
  edit: function () {
    return h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings wp-user-login"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(qy, null), (0, b.__)("WP User Login", "mrm")), h().createElement("p", {
      className: "sort-description"
    }, (0, b.__)("This automation will be triggered if a user logs in to your WordPress site.", "mrm"))), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    })));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};
