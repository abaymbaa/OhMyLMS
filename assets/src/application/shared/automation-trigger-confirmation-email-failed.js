// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var jS,
  AS = {
    key: "gform_send_email_failed",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-gravity-form",
    title: (0, b.__)("Confirmation Email Failed", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when a new user registered in WordPress.", "mrm"),
    subtitle: function (e) {
      var t, n;
      if ("" === (null === (t = e.settings) || void 0 === t || null === (t = t.gform_settings) || void 0 === t ? void 0 : t.form_id) || Object.keys(e.settings) < 1) return null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet;
    },
    icon: function () {
      return React.createElement("svg", {
        width: "23",
        height: "20",
        fill: "none",
        viewBox: "0 0 23 20",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        d: "M11.245 17.03a.816.816 0 01-.235.573.798.798 0 01-.567.237H4.031a3.58 3.58 0 01-1.604-.178 3.61 3.61 0 01-1.368-.867A3.66 3.66 0 01.2 15.413a3.689 3.689 0 01-.177-1.622V4.073A3.689 3.689 0 01.2 2.452c.18-.52.472-.993.858-1.382A3.61 3.61 0 012.427.203 3.58 3.58 0 014.03.024h12.824a3.58 3.58 0 011.605.18 3.61 3.61 0 011.368.866 3.667 3.667 0 011.035 3.003v3.24c0 .215-.085.42-.235.572a.798.798 0 01-1.134 0 .814.814 0 01-.234-.572v-3.24c0-1.702-.72-2.43-2.405-2.43H4.031c-1.685 0-2.404.728-2.404 2.43v9.718c0 1.703.72 2.43 2.404 2.43h6.412c.213 0 .417.085.567.237.15.152.235.358.235.573zm5.723-12.353a.8.8 0 00-.522-.324.79.79 0 00-.596.146L10.6 8.356a.264.264 0 01-.313 0l-5.25-3.857a.797.797 0 00-1.25.465.817.817 0 00.308.844l5.249 3.858a1.85 1.85 0 002.199 0l5.25-3.858a.805.805 0 00.32-.529.818.818 0 00-.145-.602zM23 14.871a5.167 5.167 0 01-.855 2.85 5.087 5.087 0 01-2.279 1.889 5.027 5.027 0 01-2.932.291 5.06 5.06 0 01-2.6-1.403 5.145 5.145 0 01-1.389-2.626 5.178 5.178 0 01.29-2.964 5.117 5.117 0 011.869-2.301 5.039 5.039 0 012.82-.865 5.056 5.056 0 013.587 1.504A5.163 5.163 0 0123 14.871zm-1.603 0c0-.694-.204-1.372-.585-1.95a3.481 3.481 0 00-1.559-1.292 3.44 3.44 0 00-3.785.76 3.543 3.543 0 00-.753 3.824 3.5 3.5 0 001.28 1.576 3.447 3.447 0 001.929.591 3.46 3.46 0 002.454-1.029 3.532 3.532 0 001.019-2.48zm-1.838-1.652a.8.8 0 00-.873-.176.8.8 0 00-.26.176l-.502.507-.502-.507a.802.802 0 00-.573-.258.795.795 0 00-.757.507.818.818 0 00.197.896l.501.507-.501.508a.808.808 0 00-.255.578.818.818 0 00.235.587.802.802 0 00.58.237.794.794 0 00.573-.258l.502-.506.502.506a.797.797 0 001.113-.02.813.813 0 00.02-1.124l-.501-.508.5-.507a.809.809 0 00.175-.882.809.809 0 00-.174-.263z"
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
        s = PS((0, g.useState)([]), 2),
        d = s[0],
        m = s[1],
        p = PS((0, g.useState)([]), 2),
        f = p[0],
        v = p[1],
        _ = PS((0, g.useState)("Please enter 3 or more characters"), 2),
        w = _[0],
        E = _[1],
        S = PS((0, g.useState)([]), 2),
        R = S[0],
        x = S[1],
        C = PS((0, g.useState)([]), 2),
        P = C[0],
        O = C[1],
        k = PS((0, g.useState)(!1), 2),
        j = k[0],
        M = k[1],
        T = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex()
          };
        }, []),
        I = T.selectedStep,
        F = T.selectedStepIndex,
        N = T.selectedStepCondition,
        D = T.selectedLogicalStepIndex;
      (0, g.useEffect)(function () {
        var e = function () {
          var e = CS(SS().m(function e() {
            var t, n, r, a;
            return SS().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if ((n = null === (t = I.settings) || void 0 === t || null === (t = t.gform_settings) || void 0 === t || null === (t = t.form_id) || void 0 === t ? void 0 : t.value) || (n = null === (r = I.settings) || void 0 === r || null === (r = r.gform_settings) || void 0 === r ? void 0 : r.form_id), !n) {
                    e.n = 2;
                    break;
                  }
                  return M(!0), e.n = 1, bh(n);
                case 1:
                  null != (a = e.v) && a.success && (m(null == a ? void 0 : a.fields), M(!1)), e.n = 3;
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
        }();
        e();
      }, [null === (e = I.settings) || void 0 === e || null === (e = e.gform_settings) || void 0 === e ? void 0 : e.form_id]), (0, g.useEffect)(function () {
        (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "gform_settings", "mapping", P);
      }, [P, F, N, D]);
      var W = (0, g.useCallback)(function (e, t) {
        var n = e.value,
          r = P.findIndex(function (e) {
            return e.source === t;
          });
        O(-1 !== r ? function (e) {
          return [].concat(ES(e.slice(0, r)), [{
            source: t,
            target: n
          }], ES(e.slice(r + 1)));
        } : function (e) {
          return [].concat(ES(e), [{
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
          }), x(n);
        }
      }, [null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.contacts_map_attrs]), (0, g.useEffect)(function () {
        var e, t;
        null !== (e = I.settings) && void 0 !== e && null !== (e = e.gform_settings) && void 0 !== e && e.mapping && O(null === (t = I.settings) || void 0 === t || null === (t = t.gform_settings) || void 0 === t ? void 0 : t.mapping);
      }, []);
      var z = function () {
          var e = CS(SS().m(function e(t) {
            var n;
            return SS().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  return M(!0), (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "gform_settings", "form_id", t), e.n = 1, bh(null == t ? void 0 : t.value);
                case 1:
                  null != (n = e.v) && n.success && m(null == n ? void 0 : n.fields), M(!1);
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
          var e = CS(SS().m(function e() {
            var t,
              n,
              r = arguments;
            return SS().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                    e.n = 2;
                    break;
                  }
                  return E((0, b.__)("loading...", "mrm")), e.n = 1, hh(t);
                case 1:
                  null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.forms) ? E((0, b.__)("No forms found", "mrm")) : v(null == n ? void 0 : n.forms));
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
        className: "mintmrm-automation_step-settings bricks-form-submission"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(wS, null), (0, b.__)("Send email failed", "mrm")), h().createElement("p", {
        className: "sort-description"
      }, (0, b.__)("This automation will be triggered if send email failed", "mrm"))), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.SelectAForm), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, w));
          }
        },
        value: null !== (r = null === (a = I.settings) || void 0 === a || null === (a = a.gform_settings) || void 0 === a ? void 0 : a.form_id) && void 0 !== r ? r : "",
        onChange: function (e) {
          z(e);
        },
        onInputChange: function (e) {
          B(e);
        },
        options: f,
        isMulti: !1,
        placeholder: (0, b.__)("Search...", "mrm"),
        isSearchable: !0
      })), j && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement(q.Spinner, {
        tip: "Fields Loading",
        size: "large"
      }, L)), !j && 0 !== d.length && h().createElement(h().Fragment, null, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("div", {
        className: "select-field-table"
      }, h().createElement("table", null, h().createElement("thead", null, h().createElement("tr", null, h().createElement("th", null, "Gravity forms fields", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Map each form field to a contact field for proper data storage."))), h().createElement("th", null, "Mail Mint contact fields", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Select where to store the form data in your contact fields."))))), h().createElement("tbody", null, 0 === d.length ? h().createElement("tr", null, h().createElement("td", {
        colSpan: "2"
      }, h().createElement("p", null, "Please select a form to map the fields."))) : d.map(function (e, t) {
        var n = R.find(function (t) {
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
          options: R,
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
        value: null !== (c = null === (u = I.settings) || void 0 === u || null === (u = u.gform_settings) || void 0 === u ? void 0 : u.status) && void 0 !== c ? c : "pending",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(F, N, D, "gform_settings", "status", e);
        }
      }))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function MS() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 22 22"
  }, React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".8",
    d: "M7 21h8a3 3 0 000-6H7a3 3 0 000 6zm0-5.333h8a2.333 2.333 0 110 4.666H7a2.333 2.333 0 110-4.666zM19.333 8H2.667C1.747 8 1 8.622 1 9.389v2.222c.001.767.747 1.388 1.667 1.389h16.666c.92 0 1.666-.622 1.667-1.389V9.39C20.999 8.622 20.253 8 19.333 8zm1 3.611c0 .46-.447.833-1 .833H2.667c-.553 0-1-.373-1-.833V9.39c0-.46.447-.833 1-.833h16.666c.553 0 1 .373 1 .833v2.222z"
  }), React.createElement("path", {
    fill: "#2D3149",
    fillRule: "evenodd",
    stroke: "#2D3149",
    strokeWidth: ".3",
    d: "M11.758 10H4.242c-.133 0-.242.224-.242.5s.109.5.242.5h7.516c.134 0 .242-.224.242-.5s-.108-.5-.242-.5z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".8",
    d: "M19.333 1H2.667C1.747 1 1 1.622 1 2.389V4.61C1.001 5.378 1.747 6 2.667 6h16.666C20.253 6 21 5.378 21 4.611V2.39C20.999 1.622 20.253 1 19.333 1zm1 3.611c0 .46-.447.833-1 .833H2.667c-.553 0-1-.373-1-.833V2.39c0-.46.447-.833 1-.833h16.666c.553 0 1 .373 1 .833V4.61z"
  }), React.createElement("path", {
    fill: "#2D3149",
    fillRule: "evenodd",
    stroke: "#2D3149",
    strokeWidth: ".3",
    d: "M17.576 3H4.424C4.19 3 4 3.224 4 3.5s.19.5.424.5h13.152c.234 0 .424-.224.424-.5s-.19-.5-.424-.5z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#2D3149",
    fillRule: "evenodd",
    stroke: "#2D3149",
    strokeWidth: ".6",
    d: "M9.76 19.236c.118.117.303.13.436.03l2.667-2a.333.333 0 00-.4-.533l-2.436 1.827-.462-.462a.333.333 0 00-.471.471l.666.667z",
    clipRule: "evenodd"
  }));
}

function TS(e) {
  return function (e) {
    if (Array.isArray(e)) return BS(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || zS(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function IS() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return FS(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (FS(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, FS(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, FS(d, "constructor", u), FS(u, "constructor", c), c.displayName = "GeneratorFunction", FS(u, a, "GeneratorFunction"), FS(d), FS(d, a, "Generator"), FS(d, r, function () {
    return this;
  }), FS(d, "toString", function () {
    return "[object Generator]";
  }), (IS = function () {
    return {
      w: o,
      m
    };
  })();
}

function FS(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  FS = function (e, t, n, r) {
    function o(t, n) {
      FS(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, FS(e, t, n, r);
}

function NS(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function DS(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        NS(o, r, a, i, l, "next", e);
      }
      function l(e) {
        NS(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function WS(e, t) {
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
  }(e, t) || zS(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function zS(e, t) {
  if (e) {
    if ("string" == typeof e) return BS(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? BS(e, t) : void 0;
  }
}

function BS(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
