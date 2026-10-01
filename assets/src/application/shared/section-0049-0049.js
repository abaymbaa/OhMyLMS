// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var KR = {
  key: "wpcf7_submit",
  group: "triggers",
  type: "trigger",
  package: "pro",
  category: "mint-contact-form",
  title: null === (BR = window) || void 0 === BR || null === (BR = BR.MRM_Vars) || void 0 === BR || null === (BR = BR.mint_trans) || void 0 === BR ? void 0 : BR.FormSubmitted,
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("Starts the automation when a new user registered in WordPress.", "mrm"),
  subtitle: function (e) {
    var t, n;
    if ("" === (null === (t = e.settings) || void 0 === t || null === (t = t.contact_form_settings) || void 0 === t ? void 0 : t.form_id) || Object.keys(e.settings) < 1) return null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet;
  },
  icon: function () {
    return React.createElement("svg", {
      className: "hover-ct7-form-submitted-icon",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("circle", {
      cx: "10",
      cy: "10",
      r: "9.2",
      stroke: "#2D3149",
      strokeWidth: "1.6"
    }), React.createElement("path", {
      d: "M3 15L8.5 6.50002C8.5 6.50002 10 4.49992 12 6.50002C13.2 7.70005 17.1667 11.3334 19 13",
      stroke: "#2D3149",
      strokeWidth: "1.6"
    }), React.createElement("path", {
      d: "M6 9.73138C6 9.73138 7.33276 9.12871 7.06586 10.1317C6.79897 11.1347 5.7331 12.5975 6.06629 12.6638C6.39948 12.7301 7.3362 11.7977 7.59966 11.9303C7.86311 12.0628 8.06629 11.9974 7.93285 12.4641C7.7994 12.9307 7.66595 13.2639 7.93285 13.2639C8.19974 13.2639 8.39948 12.6612 8.73267 12.0637C9.06586 11.4662 9.59879 11.7305 9.79854 11.9303C9.99828 12.13 10.5984 13.2639 11.065 13.1304C11.5316 12.997 11.7977 12.3969 11.5979 11.0641C11.3982 9.73138 11.7314 9.3319 11.7314 9.3319C11.7314 9.3319 12.1309 9.13216 12.8644 10.0646C13.5979 10.997 14.9307 12.3969 15.1296 12.3306C15.3285 12.2643 14.1972 10.7981 14.4632 10.6647C14.7292 10.5312 15.796 10.8644 16.3297 11.331C16.3297 11.331 16.5123 12.0947 16.5123 11.362L11.065 6L10.1317 6.06543L9.2656 6.13173C9.2656 6.13173 7.13302 9.3319 6 9.73138Z",
      fill: "#2D3149"
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
      m = QR((0, g.useState)([]), 2),
      p = m[0],
      f = m[1],
      v = QR((0, g.useState)([]), 2),
      _ = v[0],
      w = v[1],
      E = QR((0, g.useState)("Please enter 3 or more characters"), 2),
      S = E[0],
      R = E[1],
      x = QR((0, g.useState)([]), 2),
      C = x[0],
      P = x[1],
      O = QR((0, g.useState)([]), 2),
      k = O[0],
      j = O[1],
      M = QR((0, g.useState)(!1), 2),
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
        var e = YR(GR().m(function e() {
          var t, n, r, a;
          return GR().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                if ((n = null === (t = N.settings) || void 0 === t || null === (t = t.contact_form_settings) || void 0 === t || null === (t = t.form_id) || void 0 === t ? void 0 : t.value) || (n = null === (r = N.settings) || void 0 === r || null === (r = r.contact_form_settings) || void 0 === r ? void 0 : r.form_id), !n) {
                  e.n = 2;
                  break;
                }
                return I(!0), e.n = 1, th(n);
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
    }, [null === (e = N.settings) || void 0 === e || null === (e = e.contact_form_settings) || void 0 === e ? void 0 : e.form_id]), (0, g.useEffect)(function () {
      (0, y.dispatch)(Lf).updateStepArgs(D, W, z, "contact_form_settings", "mapping", k);
    }, [k, D, W, z]);
    var B = (0, g.useCallback)(function (e, t) {
      var n = e.value,
        r = k.findIndex(function (e) {
          return e.source === t;
        });
      j(-1 !== r ? function (e) {
        return [].concat(HR(e.slice(0, r)), [{
          source: t,
          target: n
        }], HR(e.slice(r + 1)));
      } : function (e) {
        return [].concat(HR(e), [{
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
      null !== (e = N.settings) && void 0 !== e && null !== (e = e.contact_form_settings) && void 0 !== e && e.mapping && j(null === (t = N.settings) || void 0 === t || null === (t = t.contact_form_settings) || void 0 === t ? void 0 : t.mapping);
    }, []);
    var L = function () {
        var e = YR(GR().m(function e(t) {
          var n;
          return GR().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                return I(!0), (0, y.dispatch)(Lf).updateStepArgs(D, W, z, "contact_form_settings", "form_id", t), e.n = 1, th(null == t ? void 0 : t.value);
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
        var e = YR(GR().m(function e() {
          var t,
            n,
            r = arguments;
          return GR().w(function (e) {
            for (;;) switch (e.n) {
              case 0:
                if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                  e.n = 2;
                  break;
                }
                return R((0, b.__)("loading...", "mrm")), e.n = 1, Xg(t);
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
      className: "mintmrm-automation_step-settings mint-after-email bricks-form-submission"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(VR, null), null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.FormSubmitted), h().createElement("p", {
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
      value: null !== (o = null === (i = N.settings) || void 0 === i || null === (i = i.contact_form_settings) || void 0 === i ? void 0 : i.form_id) && void 0 !== o ? o : "",
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
    }, h().createElement("table", null, h().createElement("thead", null, h().createElement("tr", null, h().createElement("th", null, "Contact From 7 fields", h().createElement("span", {
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
      value: null !== (s = null === (d = N.settings) || void 0 === d || null === (d = d.contact_form_settings) || void 0 === d ? void 0 : d.status) && void 0 !== s ? s : "pending",
      onChange: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(D, W, z, "contact_form_settings", "status", e);
      }
    }))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function JR() {
  return React.createElement("svg", {
    width: "20",
    height: "22",
    viewBox: "0 0 20 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#FD3",
    d: "M0 0h20v22H0z"
  }), React.createElement("text", {
    x: "5",
    y: "16",
    fill: "#1A1A1A"
  }, "b"));
}

function XR(e) {
  return function (e) {
    if (Array.isArray(e)) return ix(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || ox(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function ex() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return tx(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (tx(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, tx(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, tx(d, "constructor", u), tx(u, "constructor", c), c.displayName = "GeneratorFunction", tx(u, a, "GeneratorFunction"), tx(d), tx(d, a, "Generator"), tx(d, r, function () {
    return this;
  }), tx(d, "toString", function () {
    return "[object Generator]";
  }), (ex = function () {
    return {
      w: o,
      m
    };
  })();
}

function tx(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  tx = function (e, t, n, r) {
    function o(t, n) {
      tx(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, tx(e, t, n, r);
}

function nx(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function rx(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        nx(o, r, a, i, l, "next", e);
      }
      function l(e) {
        nx(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function ax(e, t) {
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
  }(e, t) || ox(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function ox(e, t) {
  if (e) {
    if ("string" == typeof e) return ix(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ix(e, t) : void 0;
  }
}

function ix(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var lx,
  cx = {
    key: "bricks_form_submit",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-bricks-form",
    title: "After Form Submission",
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Triggered when a Bricks form is submitted.", "mail-mint"),
    subtitle: function (e) {
      var t, n, r, a;
      if ("" == (null === (t = e.settings) || void 0 === t || null === (t = t.bricks_form_settings) || void 0 === t ? void 0 : t.form_id) || 0 == (null === (n = e.settings) || void 0 === n || null === (n = n.bricks_form_settings) || void 0 === n ? void 0 : n.form_id) || Object.keys(e.settings) < 1 || (0, A.isEmpty)(null === (r = e.settings) || void 0 === r || null === (r = r.bricks_form_settings) || void 0 === r ? void 0 : r.mapping)) return null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.NotSetUpYet;
    },
    icon: JR,
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
        d = ax((0, g.useState)([]), 2),
        m = d[0],
        p = d[1],
        f = ax((0, g.useState)([]), 2),
        v = f[0],
        _ = f[1],
        w = ax((0, g.useState)("Please enter 3 or more characters"), 2),
        E = w[0],
        S = w[1],
        R = ax((0, g.useState)([]), 2),
        x = R[0],
        C = R[1],
        P = ax((0, g.useState)([]), 2),
        O = P[0],
        k = P[1],
        j = ax((0, g.useState)(!1), 2),
        M = j[0],
        T = j[1],
        I = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex()
          };
        }, []),
        F = I.selectedStep,
        N = I.selectedStepIndex,
        D = I.selectedStepCondition,
        W = I.selectedLogicalStepIndex;
      (0, g.useEffect)(function () {
        var e = function () {
          var e = rx(ex().m(function e() {
            var t, n, r, a;
            return ex().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if ((n = null === (t = F.settings) || void 0 === t || null === (t = t.bricks_form_settings) || void 0 === t || null === (t = t.form_id) || void 0 === t ? void 0 : t.value) || (n = null === (r = F.settings) || void 0 === r || null === (r = r.bricks_form_settings) || void 0 === r ? void 0 : r.form_id), !n) {
                    e.n = 2;
                    break;
                  }
                  return T(!0), e.n = 1, Sh(n);
                case 1:
                  null != (a = e.v) && a.success && (p(null == a ? void 0 : a.fields), T(!1)), e.n = 3;
                  break;
                case 2:
                  p([]);
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
      }, [null === (e = F.settings) || void 0 === e || null === (e = e.bricks_form_settings) || void 0 === e ? void 0 : e.form_id]), (0, g.useEffect)(function () {
        (0, y.dispatch)(Lf).updateStepArgs(N, D, W, "bricks_form_settings", "mapping", O);
      }, [O, N, D, W]);
      var z = (0, g.useCallback)(function (e, t) {
        var n = e.value,
          r = O.findIndex(function (e) {
            return e.source === t;
          });
        k(-1 !== r ? function (e) {
          return [].concat(XR(e.slice(0, r)), [{
            source: t,
            target: n
          }], XR(e.slice(r + 1)));
        } : function (e) {
          return [].concat(XR(e), [{
            source: t,
            target: n
          }]);
        });
      }, [O]);
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
          }), C(n);
        }
      }, [null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.contacts_map_attrs]), (0, g.useEffect)(function () {
        var e, t;
        null !== (e = F.settings) && void 0 !== e && null !== (e = e.bricks_form_settings) && void 0 !== e && e.mapping && k(null === (t = F.settings) || void 0 === t || null === (t = t.bricks_form_settings) || void 0 === t ? void 0 : t.mapping);
      }, []);
      var B = function () {
          var e = rx(ex().m(function e(t) {
            var n;
            return ex().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  return T(!0), (0, y.dispatch)(Lf).updateStepArgs(N, D, W, "bricks_form_settings", "form_id", t), e.n = 1, Sh(null == t ? void 0 : t.value);
                case 1:
                  null != (n = e.v) && n.success && p(null == n ? void 0 : n.fields), T(!1);
                case 2:
                  return e.a(2);
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
        L = function () {
          var e = rx(ex().m(function e() {
            var t,
              n,
              r = arguments;
            return ex().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (!((t = r.length > 0 && void 0 !== r[0] ? r[0] : "").length >= 3)) {
                    e.n = 2;
                    break;
                  }
                  return S((0, b.__)("loading...", "mrm")), e.n = 1, wh(t);
                case 1:
                  null != (n = e.v) && n.success && ((0, A.isEmpty)(null == n ? void 0 : n.forms) ? S((0, b.__)("No forms found", "mrm")) : _(null == n ? void 0 : n.forms));
                case 2:
                  return e.a(2, []);
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
        V = h().createElement("div", {
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
      }, h().createElement("h4", null, h().createElement(JR, null), "Bricks Form - After Submission"), h().createElement("p", {
        className: "sort-description"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.FormSubmittedDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectAForm), h().createElement(yg.Ay, {
        name: "select-two",
        components: {
          NoOptionsMessage: function (e) {
            return h().createElement(hg.c.NoOptionsMessage, e, h().createElement("span", null, E));
          }
        },
        value: null !== (a = null === (o = F.settings) || void 0 === o || null === (o = o.bricks_form_settings) || void 0 === o ? void 0 : o.form_id) && void 0 !== a ? a : "",
        onChange: function (e) {
          B(e);
        },
        onInputChange: function (e) {
          L(e);
        },
        options: v,
        isMulti: !1,
        placeholder: (0, b.__)("Search...", "mrm"),
        isSearchable: !0
      })), M && h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement(q.Spinner, {
        tip: "Fields Loading",
        size: "large"
      }, V)), !M && 0 !== m.length && h().createElement(h().Fragment, null, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("div", {
        className: "select-field-table"
      }, h().createElement("table", null, h().createElement("thead", null, h().createElement("tr", null, h().createElement("th", null, "Bricks form fields", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Map each form field to a contact field for proper data storage."))), h().createElement("th", null, "Mail Mint contact fields", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Select where to store the form data in your contact fields."))))), h().createElement("tbody", null, 0 === m.length ? h().createElement("tr", null, h().createElement("td", {
        colSpan: "2"
      }, h().createElement("p", null, "Please select a form to map the fields."))) : m.map(function (e, t) {
        var n = x.find(function (t) {
          var n;
          return t.value === ((null === (n = O.find(function (t) {
            return t.source === (null == e ? void 0 : e.value);
          })) || void 0 === n ? void 0 : n.target) || "");
        });
        return h().createElement("tr", {
          key: t
        }, h().createElement("td", null, null == e ? void 0 : e.label), h().createElement("td", null, h().createElement("div", {
          className: "form-group map-dropdown"
        }, h().createElement(yg.Ay, {
          options: x,
          isSearchable: !0,
          value: n,
          onChange: function (t) {
            z(t, null == e ? void 0 : e.value);
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
          label: null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.Pending
        }, {
          value: "subscribed",
          label: null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.Subscribed
        }, {
          value: "unsubscribed",
          label: null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.Unsubscribed
        }],
        value: null !== (u = null === (s = F.settings) || void 0 === s || null === (s = s.bricks_form_settings) || void 0 === s ? void 0 : s.status) && void 0 !== u ? u : "subscribed",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(N, D, W, "bricks_form_settings", "status", e);
        }
      }))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };
