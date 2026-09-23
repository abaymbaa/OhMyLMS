// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function TC(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function IC(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        TC(o, r, a, i, l, "next", e);
      }
      function l(e) {
        TC(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function FC(e, t) {
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
  }(e, t) || NC(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function NC(e, t) {
  if (e) {
    if ("string" == typeof e) return DC(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? DC(e, t) : void 0;
  }
}

function DC(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var WC,
  zC = {
    key: "wpforms_submission_inserted",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-wp-forms",
    title: null === (PC = window) || void 0 === PC || null === (PC = PC.MRM_Vars) || void 0 === PC || null === (PC = PC.mint_trans) || void 0 === PC ? void 0 : PC.FormSubmitted,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when a new user registered in WordPress.", "mrm"),
    subtitle: function (e) {
      var t, n;
      if ("" === (null === (t = e.settings) || void 0 === t || null === (t = t.wpforms_settings) || void 0 === t ? void 0 : t.form_id) || Object.keys(e.settings) < 1) return null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet;
    },
    icon: kC,
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
        m = FC((0, g.useState)([]), 2),
        p = m[0],
        f = m[1],
        v = FC((0, g.useState)([]), 2),
        _ = v[0],
        w = v[1],
        E = FC((0, g.useState)("Please enter 3 or more characters"), 2),
        S = E[0],
        R = E[1],
        x = FC((0, g.useState)([]), 2),
        C = x[0],
        P = x[1],
        O = FC((0, g.useState)([]), 2),
        k = O[0],
        j = O[1],
        M = FC((0, g.useState)(!1), 2),
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
          var e = IC(AC().m(function e() {
            var t, n, r, a;
            return AC().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if ((n = null === (t = N.settings) || void 0 === t || null === (t = t.wpforms_settings) || void 0 === t || null === (t = t.form_id) || void 0 === t ? void 0 : t.value) || (n = null === (r = N.settings) || void 0 === r || null === (r = r.wpforms_settings) || void 0 === r ? void 0 : r.form_id), !n) {
                    e.n = 2;
                    break;
                  }
                  return I(!0), e.n = 1, oh(n);
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
      }, [null === (e = N.settings) || void 0 === e || null === (e = e.wpforms_settings) || void 0 === e ? void 0 : e.form_id]), (0, g.useEffect)(function () {
        (0, y.dispatch)(Lf).updateStepArgs(D, W, z, "wpforms_settings", "mapping", k);
      }, [k, D, W, z]);
      var B = (0, g.useCallback)(function (e, t) {
        var n = e.value,
          r = k.findIndex(function (e) {
            return e.source === t;
          });
        j(-1 !== r ? function (e) {
          return [].concat(jC(e.slice(0, r)), [{
            source: t,
            target: n
          }], jC(e.slice(r + 1)));
        } : function (e) {
          return [].concat(jC(e), [{
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
        null !== (e = N.settings) && void 0 !== e && null !== (e = e.wpforms_settings) && void 0 !== e && e.mapping && j(null === (t = N.settings) || void 0 === t || null === (t = t.wpforms_settings) || void 0 === t ? void 0 : t.mapping);
      }, []);
      var L = function () {
          var e = IC(AC().m(function e(t) {
            var n;
            return AC().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  return I(!0), (0, y.dispatch)(Lf).updateStepArgs(D, W, z, "wpforms_settings", "form_id", t), e.n = 1, oh(null == t ? void 0 : t.value);
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
          var e = IC(AC().m(function e() {
            var t,
              n,
              r = arguments;
            return AC().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                    e.n = 2;
                    break;
                  }
                  return R((0, b.__)("loading...", "mrm")), e.n = 1, rh(t);
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
      }, h().createElement("h4", null, h().createElement(kC, null), null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.FormSubmitted), h().createElement("p", {
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
        value: null !== (o = null === (i = N.settings) || void 0 === i || null === (i = i.wpforms_settings) || void 0 === i ? void 0 : i.form_id) && void 0 !== o ? o : "",
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
      }, h().createElement("table", null, h().createElement("thead", null, h().createElement("tr", null, h().createElement("th", null, "WPForms forms fields", h().createElement("span", {
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
        value: null !== (s = null === (d = N.settings) || void 0 === d || null === (d = d.wpforms_settings) || void 0 === d ? void 0 : d.status) && void 0 !== s ? s : "pending",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(D, W, z, "wpforms_settings", "status", e);
        }
      }))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function BC() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".4",
    d: "M15.58 21a5.423 5.423 0 01-5.416-5.416 5.423 5.423 0 015.417-5.417 5.423 5.423 0 015.416 5.417A5.423 5.423 0 0115.581 21zm0-9.583a4.171 4.171 0 00-4.166 4.167 4.171 4.171 0 004.167 4.166 4.171 4.171 0 004.166-4.166 4.171 4.171 0 00-4.166-4.167z"
  }), React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".4",
    d: "M15.586 18.5a.625.625 0 01-.625-.625v-4.583a.625.625 0 011.25 0v4.583c0 .345-.28.625-.625.625z"
  }), React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".4",
    d: "M17.872 16.208H13.29a.625.625 0 010-1.25h4.583a.625.625 0 010 1.25zM8.658 18.5H3.292A2.294 2.294 0 011 16.208V3.292A2.294 2.294 0 013.292 1h9.583a2.294 2.294 0 012.292 2.292v5.075a.625.625 0 01-1.25 0V3.292c0-.575-.468-1.042-1.042-1.042H3.292c-.575 0-1.042.467-1.042 1.042v12.916c0 .575.467 1.042 1.042 1.042h5.366a.625.625 0 010 1.25z"
  }), React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".4",
    d: "M12.042 8.917H4.125a.625.625 0 010-1.25h7.917a.625.625 0 010 1.25zM8.708 12.25H4.125a.625.625 0 010-1.25h4.583a.625.625 0 010 1.25zm-.833-6.667h-3.75a.625.625 0 010-1.25h3.75a.625.625 0 010 1.25z"
  }));
}

function LC(e, t) {
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
      if ("string" == typeof e) return VC(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? VC(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function VC(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var HC = {
  key: "addList",
  group: "actions",
  type: "action",
  package: "free",
  category: "mailmint",
  title: (0, b._x)("Add To List(s)", "noun", "mrm"),
  foreground: "#7F54B3",
  background: "#f7edf7",
  description: null === (WC = window) || void 0 === WC || null === (WC = WC.MRM_Vars) || void 0 === WC || null === (WC = WC.mint_trans) || void 0 === WC ? void 0 : WC.ActionDescription,
  subtitle: function (e) {
    var t, n, r;
    return 0 === (null === (t = e.settings) || void 0 === t || null === (t = t.list_settings) || void 0 === t ? void 0 : t.lists.length) ? null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet : "Assigned List:" + (null === (r = e.settings) || void 0 === r || null === (r = r.list_settings) || void 0 === r ? void 0 : r.lists).map(function (e, t) {
      return [" " + e.title];
    }).toString();
  },
  icon: function () {
    return React.createElement("svg", {
      width: "22",
      height: "22",
      fill: "none",
      viewBox: "0 0 22 22",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#2D3149",
      stroke: "#2D3149",
      strokeWidth: ".4",
      d: "M15.58 21a5.423 5.423 0 01-5.416-5.416 5.423 5.423 0 015.417-5.417 5.423 5.423 0 015.416 5.417A5.423 5.423 0 0115.581 21zm0-9.583a4.171 4.171 0 00-4.166 4.167 4.171 4.171 0 004.167 4.166 4.171 4.171 0 004.166-4.166 4.171 4.171 0 00-4.166-4.167z"
    }), React.createElement("path", {
      fill: "#2D3149",
      stroke: "#2D3149",
      strokeWidth: ".4",
      d: "M15.586 18.5a.625.625 0 01-.625-.625v-4.583a.625.625 0 011.25 0v4.583c0 .345-.28.625-.625.625z"
    }), React.createElement("path", {
      fill: "#2D3149",
      stroke: "#2D3149",
      strokeWidth: ".4",
      d: "M17.872 16.208H13.29a.625.625 0 010-1.25h4.583a.625.625 0 010 1.25zM8.658 18.5H3.292A2.294 2.294 0 011 16.208V3.292A2.294 2.294 0 013.292 1h9.583a2.294 2.294 0 012.292 2.292v5.075a.625.625 0 01-1.25 0V3.292c0-.575-.468-1.042-1.042-1.042H3.292c-.575 0-1.042.467-1.042 1.042v12.916c0 .575.467 1.042 1.042 1.042h5.366a.625.625 0 010 1.25z"
    }), React.createElement("path", {
      fill: "#2D3149",
      stroke: "#2D3149",
      strokeWidth: ".4",
      d: "M12.042 8.917H4.125a.625.625 0 010-1.25h7.917a.625.625 0 010 1.25zM8.708 12.25H4.125a.625.625 0 010-1.25h4.583a.625.625 0 010 1.25zm-.833-6.667h-3.75a.625.625 0 010-1.25h3.75a.625.625 0 010 1.25z"
    }));
  },
  edit: function () {
    var e,
      t,
      n,
      r,
      a,
      o = LC((0, g.useState)(), 2),
      i = o[0],
      l = o[1],
      c = LC((0, g.useState)([]), 2),
      u = c[0],
      s = c[1],
      d = LC((0, g.useState)([]), 2),
      m = d[0],
      p = d[1],
      f = LC((0, g.useState)(!1), 2),
      v = f[0],
      b = f[1],
      _ = (0, g.useRef)(null),
      w = LC((0, g.useState)(!1), 2),
      E = (w[0], w[1], LC((0, g.useState)("none"), 2)),
      S = E[0],
      R = E[1];
    (0, wy.useOutsideAlerter)(_, b), (0, g.useEffect)(function () {
      var e;
      Cy().then(function (e) {
        e.data.map(function () {
          s(e.data);
        });
      }), p(null == C || null === (e = C.settings) || void 0 === e || null === (e = e.list_settings) || void 0 === e ? void 0 : e.lists);
    }, [i]), (0, g.useEffect)(function () {
      m.length >= 0 && (0, y.dispatch)(Lf).updateStepArgs(P, O, k, "list_settings", "lists", m);
    }, [m]);
    var x = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      C = x.selectedStep,
      P = x.selectedStepIndex,
      O = x.selectedStepCondition,
      k = x.selectedLogicalStepIndex;
    return x.errors, (0, g.useEffect)(function () {
      var e;
      p(null == C || null === (e = C.settings) || void 0 === e || null === (e = e.list_settings) || void 0 === e ? void 0 : e.lists);
    }, [null == C ? void 0 : C.step_id]), (0, g.useEffect)(function () {
      if (document.querySelector(".successful-notification")) {
        var e = document.querySelector(".edit-site-sidebar__panel-tabs");
        "block" === S ? (e.style.position = "relative", e.style.zIndex = "0") : (e.style.position = "sticky", e.style.zIndex = "1");
      }
    }, [S]), h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings add-list"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(BC, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.AddToListS), h().createElement("p", {
      className: "sort-description"
    }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.ChooseListToAddContact)), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, h().createElement("div", {
      className: "form-group single-settings"
    }, h().createElement("label", {
      htmlFor: "add-list"
    }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.ChooseListS), h().createElement("div", {
      className: "form-group tag-lists-dropdown",
      ref: _
    }, h().createElement("button", {
      type: "button",
      className: v ? "drop-down-button show" : "drop-down-button",
      onClick: function () {
        b(!v), (0, y.dispatch)(Lf).updateStepArgs(P, O, k, "list_settings", "lists", m);
      }
    }, 0 != (null == m ? void 0 : m.length) ? null == m ? void 0 : m.map(function (e) {
      return h().createElement("span", {
        className: "single-list mintmrm-tag-list",
        key: e.id
      }, e.title, h().createElement("span", {
        className: "close-list",
        title: "Delete",
        onClick: function (t) {
          return n = e.id, void (0 <= m.findIndex(function (e) {
            return e.id == n;
          }) && (p(m.filter(function (e) {
            return e.id != n;
          })), (0, y.dispatch)(Lf).updateStepArgs(P, O, k, "list_settings", "lists", m)));
          var n;
        }
      }, h().createElement(Xh.A, null)));
    }) : null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectLists), h().createElement(fy, {
      isActive: v,
      setIsActive: b,
      selected: m,
      setSelected: p,
      endpoint: "lists",
      items: u,
      allowMultiple: !0,
      allowNewCreate: !0,
      name: "list",
      title: null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.CHOOSELIST,
      refresh: i,
      setRefresh: l,
      prefix: "create",
      comesFrom: "automation",
      setsuccessNotification: R,
      successNotification: S
    }))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function GC() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".8",
    d: "M15.58 21a5.423 5.423 0 01-5.416-5.416 5.423 5.423 0 015.417-5.417 5.423 5.423 0 015.416 5.417A5.423 5.423 0 0115.581 21zm0-10a4.588 4.588 0 00-4.583 4.584 4.588 4.588 0 004.584 4.583 4.588 4.588 0 004.583-4.583A4.588 4.588 0 0015.581 11z"
  }), React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".8",
    d: "M15.58 18.5a.417.417 0 01-.416-.416v-5a.417.417 0 01.833 0v5c0 .23-.186.416-.416.416z"
  }), React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".8",
    d: "M18.08 16h-5a.417.417 0 010-.833h5a.417.417 0 010 .833z"
  }), React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".8",
    d: "M8.917 21a2.04 2.04 0 01-1.474-.617l-5.83-5.83a2.07 2.07 0 01-.037-2.9l9.39-9.742A2.892 2.892 0 0113.084 1h5.834C20.065 1 21 1.935 21 3.083v5.834c0 .36-.066.713-.2 1.078a.417.417 0 01-.782-.29c.1-.27.149-.527.149-.788V3.083c0-.689-.561-1.25-1.25-1.25h-5.834c-.576 0-1.115.232-1.514.654L2.175 12.23a1.231 1.231 0 00-.342.852c0 .335.13.647.366.877l5.837 5.837a1.244 1.244 0 001.524.184.416.416 0 11.446.704 2.02 2.02 0 01-1.09.315z"
  }), React.createElement("circle", {
    cx: "16",
    cy: "6",
    r: "1.4",
    stroke: "#2D3149",
    strokeWidth: "1.2"
  }));
}

function UC(e, t) {
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
      if ("string" == typeof e) return qC(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qC(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function qC(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
