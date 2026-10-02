// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var KS,
  JS = {
    key: "jetform_before_submit",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-jet-form",
    title: (0, b.__)("Form Abandoned", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when a new user registered in WordPress.", "mrm"),
    subtitle: function (e) {
      var t, n;
      if ("" === (null === (t = e.settings) || void 0 === t || null === (t = t.jetform_settings) || void 0 === t ? void 0 : t.form_id) || Object.keys(e.settings) < 1) return null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet;
    },
    icon: function () {
      return React.createElement("svg", {
        className: "hover-stroke-fill",
        width: "22",
        height: "22",
        fill: "none",
        viewBox: "0 0 22 22"
      }, React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".8",
        d: "M7 21h8a3 3 0 000-6H7a3 3 0 000 6zm0-5.333h8a2.333 2.333 0 110 4.666H7a2.333 2.333 0 110-4.666zM19.333 8H2.667C1.747 8 1 8.622 1 9.389v2.222c.001.767.747 1.388 1.667 1.389h16.666c.92 0 1.666-.622 1.667-1.389V9.39C20.999 8.622 20.253 8 19.333 8zm1 3.611c0 .46-.447.833-1 .833H2.667c-.553 0-1-.373-1-.833V9.39c0-.46.447-.833 1-.833h16.666c.553 0 1 .373 1 .833v2.222zM19.333 1H2.667C1.747 1 1 1.622 1 2.389V4.61C1.001 5.378 1.747 6 2.667 6h16.666C20.253 6 21 5.378 21 4.611V2.39C20.999 1.622 20.253 1 19.333 1zm1 3.611c0 .46-.447.833-1 .833H2.667c-.553 0-1-.373-1-.833V2.39c0-.46.447-.833 1-.833h16.666c.553 0 1 .373 1 .833V4.61z"
      }));
    },
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
        s = QS((0, g.useState)([]), 2),
        d = s[0],
        m = s[1],
        p = QS((0, g.useState)("Please enter 3 or more characters"), 2),
        f = p[0],
        v = p[1],
        _ = QS((0, g.useState)(!1), 2),
        w = _[0],
        E = _[1],
        S = QS((0, g.useState)([]), 2),
        R = S[0],
        x = S[1],
        C = QS((0, g.useState)([]), 2),
        P = C[0],
        O = C[1],
        k = QS((0, g.useState)([]), 2),
        j = k[0],
        M = k[1],
        T = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        I = T.selectedStep,
        F = T.selectedStepIndex,
        N = T.selectedStepCondition,
        D = T.selectedLogicalStepIndex;
      T.errors, (0, g.useEffect)(function () {
        var e = function () {
          var e = YS(GS().m(function e() {
            var t, n, r, a;
            return GS().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if ((n = null === (t = I.settings) || void 0 === t || null === (t = t.jetform_settings) || void 0 === t || null === (t = t.form_id) || void 0 === t ? void 0 : t.value) || (n = null === (r = I.settings) || void 0 === r || null === (r = r.jetform_settings) || void 0 === r ? void 0 : r.form_id), !n) {
                    e.n = 2;
                    break;
                  }
                  return E(!0), e.n = 1, uh(n);
                case 1:
                  null != (a = e.v) && a.success && (x(null == a ? void 0 : a.fields), E(!1)), e.n = 3;
                  break;
                case 2:
                  x([]);
                case 3:
                  return e.a(2);
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        e();
      }, [null === (e = I.settings) || void 0 === e || null === (e = e.jetform_settings) || void 0 === e ? void 0 : e.form_id]), (0, g.useEffect)(function () {
        (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "jetform_settings", "mapping", P);
      }, [P, F, N, D]);
      var W = (0, g.useCallback)(function (e, t) {
        var n = e.value,
          r = P.findIndex(function (e) {
            return e.source === t;
          });
        O(-1 !== r ? function (e) {
          return [].concat(HS(e.slice(0, r)), [{
            source: t,
            target: n
          }], HS(e.slice(r + 1)));
        } : function (e) {
          return [].concat(HS(e), [{
            source: t,
            target: n
          }]);
        });
      }, [P]);
      (0, g.useEffect)(function () {
        var e;
        if (null !== (e = window) && void 0 !== e && null !== (e = e.MRM_Vars) && void 0 !== e && e.contacts_map_attrs) {
          var t,
            n = null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.contacts_map_attrs.map(function (e) {
              return {
                label: e.name,
                value: e.slug
              };
            });
          n.push({
            label: "Do not import this field",
            value: "no_import"
          }), M(n);
        }
      }, [null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.contacts_map_attrs]), (0, g.useEffect)(function () {
        var e, t;
        null !== (e = I.settings) && void 0 !== e && null !== (e = e.jetform_settings) && void 0 !== e && e.mapping && O(null === (t = I.settings) || void 0 === t || null === (t = t.jetform_settings) || void 0 === t ? void 0 : t.mapping);
      }, []);
      var z = function () {
          var e = YS(GS().m(function e(t) {
            var n;
            return GS().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  return E(!0), (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "jetform_settings", "form_id", t), e.n = 1, uh(null == t ? void 0 : t.value);
                case 1:
                  null != (n = e.v) && n.success && x(null == n ? void 0 : n.fields), E(!1);
                case 2:
                  return e.a(2);
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
        B = function () {
          var e = YS(GS().m(function e() {
            var t,
              n,
              r = arguments;
            return GS().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                    e.n = 2;
                    break;
                  }
                  return v((0, b.__)("loading...", "mrm")), e.n = 1, lh(t);
                case 1:
                  null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.forms) ? v((0, b.__)("No forms found", "mrm")) : m(null == n ? void 0 : n.forms));
                case 2:
                  return e.a(2, []);
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
        L = h().createElement("div", {
          style: {
            padding: 50,
            borderRadius: 4
          }
        });
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings mint-after-email bricks-form-submission"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(VS, null), (0, b.__)("Form Abandoned", "mrm")), h().createElement("p", {
        className: "sort-description"
      }, (0, b.__)("If a user enters his/her email but then leaves without submitting the form, this automation will be triggered.", "mrm"))), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.SelectAForm), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, f));
          }
        },
        value: null !== (r = null === (a = I.settings) || void 0 === a || null === (a = a.jetform_settings) || void 0 === a ? void 0 : a.form_id) && void 0 !== r ? r : "",
        onChange: function (e) {
          z(e);
        },
        onInputChange: function (e) {
          B(e);
        },
        options: d,
        isMulti: !1,
        placeholder: (0, b.__)("Search...", "mrm"),
        isSearchable: !0
      })), w && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement(q.Spinner, {
        tip: "Fields Loading",
        size: "large"
      }, L)), !w && 0 !== R.length && h().createElement(h().Fragment, null, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("div", {
        className: "select-field-table"
      }, h().createElement("table", null, h().createElement("thead", null, h().createElement("tr", null, h().createElement("th", null, "JetFormBuilder fields", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Map each form field to a contact field for proper data storage."))), h().createElement("th", null, "Mail Mint contact fields", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Select where to store the form data in your contact fields."))))), h().createElement("tbody", null, 0 === R.length ? h().createElement("tr", null, h().createElement("td", {
        colSpan: "2"
      }, h().createElement("p", null, "Please select a form to map the fields."))) : R.map(function (e, t) {
        var n = j.find(function (t) {
          var n;
          return t.value === ((null === (n = P.find(function (t) {
            return t.source === (null == e ? void 0 : e.value);
          })) || void 0 === n ? void 0 : n.target) || "");
        });
        return h().createElement("tr", {
          key: t
        }, h().createElement("td", null, null == e ? void 0 : e.label), h().createElement("td", null, h().createElement("div", {
          className: "form-group map-dropdown"
        }, h().createElement(yg.Ay, {
          options: j,
          isSearchable: !0,
          value: n,
          onChange: function (t) {
            W(t, null == e ? void 0 : e.value);
          }
        }))));
      }))))), h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "",
        className: "inline-with-link"
      }, "Create Contact As"), h().createElement(q.SelectControl, {
        options: [{
          value: "pending",
          label: null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.Pending
        }, {
          value: "subscribed",
          label: null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.Subscribed
        }, {
          value: "unsubscribed",
          label: null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.Unsubscribed
        }],
        value: null !== (c = null === (u = I.settings) || void 0 === u || null === (u = u.jetform_settings) || void 0 === u ? void 0 : u.status) && void 0 !== c ? c : "pending",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "jetform_settings", "status", e);
        }
      }))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function XS() {
  return React.createElement("svg", {
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M20 4.105v11.79C20 18.163 18.092 20 15.738 20H4.262C1.91 20 0 18.163 0 15.895V4.105C0 1.838 1.909 0 4.262 0h11.476C18.092 0 20 1.838 20 4.105z"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M16.155 8.522H6.398a2.758 2.758 0 00-2.757 2.757c0 .11.089.2.199.2h9.758a2.758 2.758 0 002.757-2.758.2.2 0 00-.2-.2zm-1.803 4.367h-6.08a2.788 2.788 0 00-2.788 2.788c0 .093.076.168.168.168h6.078a2.788 2.788 0 002.789-2.789.167.167 0 00-.167-.167zm1.803-8.734H6.398a2.758 2.758 0 00-2.757 2.758c0 .11.089.199.199.199h9.758a2.758 2.758 0 002.757-2.758.2.2 0 00-.2-.199z"
  }));
}

function eR(e) {
  return function (e) {
    if (Array.isArray(e)) return lR(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || iR(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function tR() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return nR(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (nR(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, nR(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, nR(d, "constructor", u), nR(u, "constructor", c), c.displayName = "GeneratorFunction", nR(u, a, "GeneratorFunction"), nR(d), nR(d, a, "Generator"), nR(d, r, function () {
    return this;
  }), nR(d, "toString", function () {
    return "[object Generator]";
  }), (tR = function () {
    return {
      w: o,
      m
    };
  })();
}

function nR(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  nR = function (e, t, n, r) {
    function o(t, n) {
      nR(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, nR(e, t, n, r);
}

function rR(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function aR(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        rR(o, r, a, i, l, "next", e);
      }
      function l(e) {
        rR(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function oR(e, t) {
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
  }(e, t) || iR(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function iR(e, t) {
  if (e) {
    if ("string" == typeof e) return lR(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lR(e, t) : void 0;
  }
}

function lR(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var cR,
  uR = {
    key: "fluentform_submission_inserted",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-fluent-form",
    title: null === (KS = window) || void 0 === KS || null === (KS = KS.MRM_Vars) || void 0 === KS || null === (KS = KS.mint_trans) || void 0 === KS ? void 0 : KS.FormSubmitted,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when a new user registered in WordPress.", "mrm"),
    subtitle: function (e) {
      var t, n;
      if ("" === (null === (t = e.settings) || void 0 === t || null === (t = t.fluentform_settings) || void 0 === t ? void 0 : t.form_id) || Object.keys(e.settings) < 1) return null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet;
    },
    icon: function () {
      return React.createElement("svg", {
        className: "fluent-form-fill",
        width: "20",
        height: "20",
        fill: "none",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        d: "M20 4.105v11.79C20 18.163 18.092 20 15.738 20H4.262C1.91 20 0 18.163 0 15.895V4.105C0 1.838 1.909 0 4.262 0h11.476C18.092 0 20 1.838 20 4.105z"
      }), React.createElement("path", {
        fill: "#fff",
        d: "M16.155 8.522H6.398a2.758 2.758 0 00-2.757 2.757c0 .11.089.2.199.2h9.758a2.758 2.758 0 002.757-2.758.2.2 0 00-.2-.2zm-1.803 4.367h-6.08a2.788 2.788 0 00-2.788 2.788c0 .093.076.168.168.168h6.078a2.788 2.788 0 002.789-2.789.167.167 0 00-.167-.167zm1.803-8.734H6.398a2.758 2.758 0 00-2.757 2.758c0 .11.089.199.199.199h9.758a2.758 2.758 0 002.757-2.758.2.2 0 00-.2-.199z"
      }));
    },
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
        m = oR((0, g.useState)([]), 2),
        p = m[0],
        f = m[1],
        v = oR((0, g.useState)([]), 2),
        _ = v[0],
        w = v[1],
        E = oR((0, g.useState)("Please enter 3 or more characters"), 2),
        S = E[0],
        R = E[1],
        x = oR((0, g.useState)([]), 2),
        C = x[0],
        P = x[1],
        O = oR((0, g.useState)([]), 2),
        k = O[0],
        j = O[1],
        M = oR((0, g.useState)(!1), 2),
        T = M[0],
        I = M[1],
        F = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex()
          };
        }, []),
        N = F.selectedStep,
        D = F.selectedStepIndex,
        W = F.selectedStepCondition,
        z = F.selectedLogicalStepIndex;
      (0, g.useEffect)(function () {
        var e = function () {
          var e = aR(tR().m(function e() {
            var t, n, r, a;
            return tR().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if ((n = null === (t = N.settings) || void 0 === t || null === (t = t.fluentform_settings) || void 0 === t || null === (t = t.form_id) || void 0 === t ? void 0 : t.value) || (n = null === (r = N.settings) || void 0 === r || null === (r = r.fluentform_settings) || void 0 === r ? void 0 : r.form_id), !n) {
                    e.n = 2;
                    break;
                  }
                  return I(!0), e.n = 1, ph(n);
                case 1:
                  null != (a = e.v) && a.success && (f(null == a ? void 0 : a.fields), I(!1)), e.n = 3;
                  break;
                case 2:
                  f([]);
                case 3:
                  return e.a(2);
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        e();
      }, [null === (e = N.settings) || void 0 === e || null === (e = e.fluentform_settings) || void 0 === e ? void 0 : e.form_id]), (0, g.useEffect)(function () {
        (0, y.dispatch)(Lf).updateStepArgs(D, W, z, "fluentform_settings", "mapping", k);
      }, [k, D, W, z]);
      var B = (0, g.useCallback)(function (e, t) {
        var n = e.value,
          r = k.findIndex(function (e) {
            return e.source === t;
          });
        j(-1 !== r ? function (e) {
          return [].concat(eR(e.slice(0, r)), [{
            source: t,
            target: n
          }], eR(e.slice(r + 1)));
        } : function (e) {
          return [].concat(eR(e), [{
            source: t,
            target: n
          }]);
        });
      }, [k]);
      (0, g.useEffect)(function () {
        var e;
        if (null !== (e = window) && void 0 !== e && null !== (e = e.MRM_Vars) && void 0 !== e && e.contacts_map_attrs) {
          var t,
            n = null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.contacts_map_attrs.map(function (e) {
              return {
                label: e.name,
                value: e.slug
              };
            });
          n.push({
            label: "Do not import this field",
            value: "no_import"
          }), P(n);
        }
      }, [null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.contacts_map_attrs]), (0, g.useEffect)(function () {
        var e, t;
        null !== (e = N.settings) && void 0 !== e && null !== (e = e.fluentform_settings) && void 0 !== e && e.mapping && j(null === (t = N.settings) || void 0 === t || null === (t = t.fluentform_settings) || void 0 === t ? void 0 : t.mapping);
      }, []);
      var L = function () {
          var e = aR(tR().m(function e(t) {
            var n;
            return tR().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  return I(!0), (0, y.dispatch)(Lf).updateStepArgs(D, W, z, "fluentform_settings", "form_id", t), e.n = 1, ph(null == t ? void 0 : t.value);
                case 1:
                  null != (n = e.v) && n.success && f(null == n ? void 0 : n.fields), I(!1);
                case 2:
                  return e.a(2);
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
        V = function () {
          var e = aR(tR().m(function e() {
            var t,
              n,
              r = arguments;
            return tR().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                    e.n = 2;
                    break;
                  }
                  return R((0, b.__)("loading...", "mrm")), e.n = 1, dh(t);
                case 1:
                  null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.forms) ? R((0, b.__)("No forms found", "mrm")) : w(null == n ? void 0 : n.forms));
                case 2:
                  return e.a(2, []);
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
        H = h().createElement("div", {
          style: {
            padding: 50,
            borderRadius: 4
          }
        });
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings bricks-form-submission"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(XS, null), null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.FormSubmitted), h().createElement("p", {
        className: "sort-description"
      }, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.FormSubmittedDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.SelectAForm), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, S));
          }
        },
        value: null !== (o = null === (i = N.settings) || void 0 === i || null === (i = i.fluentform_settings) || void 0 === i ? void 0 : i.form_id) && void 0 !== o ? o : "",
        onChange: function (e) {
          L(e);
        },
        onInputChange: function (e) {
          V(e);
        },
        options: _,
        isMulti: !1,
        placeholder: (0, b.__)("Search...", "mrm"),
        isSearchable: !0
      })), T && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement(q.Spinner, {
        tip: "Fields Loading",
        size: "large"
      }, H)), !T && 0 !== p.length && h().createElement(h().Fragment, null, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("div", {
        className: "select-field-table"
      }, h().createElement("table", null, h().createElement("thead", null, h().createElement("tr", null, h().createElement("th", null, "Fluent forms fields", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Map each form field to a contact field for proper data storage."))), h().createElement("th", null, "Mail Mint contact fields", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Select where to store the form data in your contact fields."))))), h().createElement("tbody", null, 0 === p.length ? h().createElement("tr", null, h().createElement("td", {
        colSpan: "2"
      }, h().createElement("p", null, "Please select a form to map the fields."))) : p.map(function (e, t) {
        var n = C.find(function (t) {
          var n;
          return t.value === ((null === (n = k.find(function (t) {
            return t.source === (null == e ? void 0 : e.value);
          })) || void 0 === n ? void 0 : n.target) || "");
        });
        return h().createElement("tr", {
          key: t
        }, h().createElement("td", null, null == e ? void 0 : e.label), h().createElement("td", null, h().createElement("div", {
          className: "form-group map-dropdown"
        }, h().createElement(yg.Ay, {
          options: C,
          isSearchable: !0,
          value: n,
          onChange: function (t) {
            B(t, null == e ? void 0 : e.value);
          }
        }))));
      }))))), h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "",
        className: "inline-with-link"
      }, "Create Contact As"), h().createElement(q.SelectControl, {
        options: [{
          value: "pending",
          label: null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.Pending
        }, {
          value: "subscribed",
          label: null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.Subscribed
        }, {
          value: "unsubscribed",
          label: null === (u = window) || void 0 === u || null === (u = u.MRM_Vars) || void 0 === u || null === (u = u.mint_trans) || void 0 === u ? void 0 : u.Unsubscribed
        }],
        value: null !== (s = null === (d = N.settings) || void 0 === d || null === (d = d.fluentform_settings) || void 0 === d ? void 0 : d.status) && void 0 !== s ? s : "pending",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(D, W, z, "fluentform_settings", "status", e);
        }
      }))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };
