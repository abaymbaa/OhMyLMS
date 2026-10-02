// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function Qy() {
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

function Zy() {
  return h().createElement(q.PanelBody, {
    opened: !0
  }, h().createElement("div", {
    className: "mintmrm-automation_step-settings wp-user-registered"
  }, h().createElement("div", {
    className: "mintmrm-automation_step-settings-header"
  }, h().createElement("h4", null, h().createElement(Qy, null), (0, b.__)("New User Registration", "mrm")), h().createElement("p", {
    className: "sort-description"
  }, (0, b.__)("This automation will be triggered if a new user registers on your WordPress site.", "mrm"))), h().createElement("div", {
    className: "mintmrm-automation_step-settings-body"
  })));
}

var $y,
  Ky,
  Jy = {
    key: "wp_user_registration",
    group: "triggers",
    type: "trigger",
    category: "mint-wordpress",
    title: (0, b.__)("New User Registration", "mrm"),
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
      return React.createElement(Zy, null);
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function Xy(e, t) {
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
      if ("string" == typeof e) return eb(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? eb(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function eb(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function tb(e) {
  var t,
    n = e.attribute,
    r = (0, g.useRef)(null),
    a = (0, g.useRef)(null),
    o = Xy((0, g.useState)(!1), 2),
    i = o[0],
    l = o[1],
    c = Xy((0, g.useState)(!1), 2),
    u = c[0],
    s = c[1],
    d = (0, y.useSelect)(function (e) {
      return {
        selectedStep: e(Lf).getSelectedStep(),
        selectedStepIndex: e(Lf).getSelectedStepIndex(),
        selectedStepCondition: e(Lf).getSelectedStepCondition(),
        selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
        errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
      };
    }, []),
    m = d.selectedStep,
    p = d.selectedStepIndex,
    f = d.selectedStepCondition,
    v = d.selectedLogicalStepIndex,
    b = (d.errors, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.date_fields),
    _ = Xy((0, g.useState)([]), 2),
    w = _[0],
    E = _[1],
    S = Xy((0, g.useState)(""), 2),
    R = S[0],
    x = S[1];
  return (0, g.useEffect)(function () {
    x(null == n ? void 0 : n.actionType);
    var e = null == b ? void 0 : b.find(function (e) {
      return (null == e ? void 0 : e.param) === (null == n ? void 0 : n.param);
    });
    if (e) {
      var t;
      E(null == e ? void 0 : e.conditions);
      var r = null == e || null === (t = e.conditions) || void 0 === t ? void 0 : t.find(function (e) {
        return (null == e ? void 0 : e.condition_value) === (null == n ? void 0 : n.condition_value);
      });
      x(null == r ? void 0 : r.actionType);
    }
  }, [n]), (0, wy.useOutsideAlerter)(r, l), (0, wy.useOutsideAlerter)(a, s), h().createElement("div", {
    className: "single-rules"
  }, h().createElement("div", {
    className: "rules-1 single-condition",
    ref: r
  }, h().createElement("button", {
    onClick: function () {
      return t = null === (e = m.settings) || void 0 === e ? void 0 : e.anniversary.attribute, l(!i), void (0, y.dispatch)(Lf).updateStepArgs(p, f, v, "anniversary", "attribute", t);
      var e, t;
    },
    type: "button",
    className: "drop-down-button ".concat(i ? "show " : "").concat("" === n.name ? "" : "focus"),
    title: "" === n.name ? "Choose attribute" : n.name
  }, "" === n.name ? "Choose attribute" : n.name), h().createElement("ul", {
    className: i ? "mintmrm-dropdown show" : "mintmrm-dropdown"
  }, null == b ? void 0 : b.map(function (e) {
    return h().createElement("li", {
      className: "single-column",
      onClick: function () {
        return t = e.param, r = null == m || null === (n = m.settings) || void 0 === n || null === (n = n.anniversary) || void 0 === n ? void 0 : n.attribute, a = null == b ? void 0 : b.find(function (e) {
          return (null == e ? void 0 : e.param) === t;
        }), E(null == a ? void 0 : a.conditions), r.action = null == b ? void 0 : b.action, r.name = null == a ? void 0 : a.name, r.param = null == a ? void 0 : a.param, r.condition_label = "", r.condition_value = "", r.value = "", r.action_type = "", l(!1), void (0, y.dispatch)(Lf).updateStepArgs(p, f, v, "anniversary", "attribute", r);
        var t, n, r, a;
      },
      key: e.param
    }, e.name);
  }))), h().createElement("div", {
    className: "rules-is single-condition",
    ref: a
  }, "" === n.action && 0 === (null == w ? void 0 : w.length) ? h().createElement("button", {
    className: "drop-down-button disabled",
    disabled: !0
  }) : h().createElement(h().Fragment, null, h().createElement("button", {
    onClick: function () {
      return t = null === (e = m.settings) || void 0 === e ? void 0 : e.anniversary.attribute, s(!u), void (0, y.dispatch)(Lf).updateStepArgs(p, f, v, "anniversary", "attribute", t);
      var e, t;
    },
    type: "button",
    className: "drop-down-button ".concat(u ? "show " : "").concat("" === n.condition_label ? "" : "focus"),
    title: "" === n.condition_label ? "Condition" : n.condition_label
  }, "" === n.condition_label ? "Condition" : n.condition_label), h().createElement("ul", {
    className: u ? "mintmrm-dropdown show" : "mintmrm-dropdown"
  }, null == w ? void 0 : w.map(function (e) {
    return h().createElement("li", {
      onClick: function () {
        return t = e, r = null == m || null === (n = m.settings) || void 0 === n || null === (n = n.anniversary) || void 0 === n ? void 0 : n.attribute, x(null == t ? void 0 : t.actionType), r.condition_label = null == t ? void 0 : t.condition_label, r.condition_value = null == t ? void 0 : t.condition_value, r.action_type = null == t ? void 0 : t.actionType, s(!1), void (0, y.dispatch)(Lf).updateStepArgs(p, f, v, "anniversary", "attribute", r);
        var t, n, r;
      },
      key: null == e ? void 0 : e.condition_value
    }, null == e ? void 0 : e.condition_label);
  })))), h().createElement("div", {
    className: "rules-2 single-condition"
  }, R ? h().createElement(h().Fragment, null, "input_number" === R && h().createElement(h().Fragment, null, h().createElement("input", {
    className: "input-value",
    type: "number",
    placeholder: "Enter here",
    min: 0,
    onKeyDown: function (e) {
      return ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
    },
    defaultValue: n.value,
    onChange: function (e) {
      return function (e) {
        var t,
          n = null === (t = m.settings) || void 0 === t ? void 0 : t.anniversary.attribute;
        n.value = e.target.value, (0, y.dispatch)(Lf).updateStepArgs(p, f, v, "anniversary", "attribute", n);
      }(e);
    }
  }))) : h().createElement("button", {
    className: "drop-down-button disabled",
    disabled: !0
  })));
}

function nb() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    clipPath: "url(#clip0_9905_2788)"
  }, React.createElement("path", {
    fill: "#2D2D31",
    stroke: "#fff",
    strokeWidth: ".1",
    d: "M18.283 18.334v.05h.884a.783.783 0 110 1.567H.833a.783.783 0 010-1.567h.884v-6.717A4.122 4.122 0 015.833 7.55h3.384V5l-.03-.013a2.033 2.033 0 01-1.22-1.856A6.027 6.027 0 019.422.307h0a.783.783 0 011.156 0h0a6.028 6.028 0 011.455 2.824 2.034 2.034 0 01-1.22 1.856l-.03.013v2.55h3.384a4.122 4.122 0 014.116 4.117v6.667zm-1.622-4.967l.056.006v-1.706a2.55 2.55 0 00-2.55-2.55H5.833a2.55 2.55 0 00-2.55 2.55v1.706l.055-.005a1.89 1.89 0 00.938-.35c.112-.083.2-.174.261-.262a.471.471 0 00.096-.255.783.783 0 111.567 0c0 .079.042.173.11.267.07.095.17.195.3.286.26.182.634.33 1.098.33.456 0 .83-.14 1.091-.318.131-.09.234-.188.305-.285a.5.5 0 00.113-.28.783.783 0 111.566 0c0 .079.042.173.11.267.07.095.171.195.3.286.26.182.634.33 1.099.33.455 0 .83-.14 1.09-.318a1.27 1.27 0 00.306-.285.5.5 0 00.112-.28.783.783 0 111.567 0c0 .073.035.158.094.242.06.086.147.177.258.262.222.17.543.32.942.362zm-13.33 1.566l-.048.002v3.448h13.434v-3.449l-.048-.002a3.414 3.414 0 01-2.053-.803l-.032-.027-.033.027a3.54 3.54 0 01-4.52.012L10 14.115l-.032.026a3.54 3.54 0 01-4.52-.012l-.032-.027-.032.027a3.414 3.414 0 01-2.053.804z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0_9905_2788"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h20v20H0z"
  }))));
}

function rb(e, t) {
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
      if ("string" == typeof e) return ab(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ab(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function ab(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var ob,
  ib = {
    key: "mint_anniversary_reminder",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mailmint",
    title: (null === ($y = window) || void 0 === $y || null === ($y = $y.MRM_Vars) || void 0 === $y || null === ($y = $y.mint_trans) || void 0 === $y ? void 0 : $y.Anniversary) || "Anniversary",
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (null === (Ky = window) || void 0 === Ky || null === (Ky = Ky.MRM_Vars) || void 0 === Ky || null === (Ky = Ky.mint_trans) || void 0 === Ky ? void 0 : Ky.AnniversaryDescription) || "This automation will be triggered for contacts based on a special event or birthday.",
    subtitle: function (e) {},
    icon: nb,
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
        w = rb((0, g.useState)(!1), 2),
        E = w[0],
        S = w[1],
        R = rb((0, g.useState)(!1), 2),
        x = R[0],
        C = R[1],
        P = rb((0, g.useState)(!1), 2),
        O = P[0],
        k = P[1],
        j = rb((0, g.useState)([]), 2),
        A = j[0],
        M = j[1],
        T = rb((0, g.useState)([]), 2),
        I = T[0],
        F = T[1],
        N = rb((0, g.useState)([]), 2),
        D = N[0],
        W = N[1],
        z = rb((0, g.useState)([]), 2),
        B = z[0],
        L = z[1],
        V = rb((0, g.useState)([]), 2),
        H = V[0],
        G = V[1],
        U = rb((0, g.useState)([]), 2),
        Y = U[0],
        Q = U[1],
        Z = rb((0, g.useState)("none"), 2),
        $ = Z[0],
        K = Z[1],
        J = rb((0, g.useState)(), 2),
        X = J[0],
        ee = J[1],
        te = null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.is_mailmint_pro_license_active,
        ne = (0, g.useRef)(null),
        re = (0, g.useRef)(null),
        ae = (0, g.useRef)(null);
      (0, wy.useOutsideAlerter)(ne, S), (0, wy.useOutsideAlerter)(re, C), (0, wy.useOutsideAlerter)(ae, k);
      var oe = (0, y.useSelect)(function (e) {
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
        ie = oe.selectedStep,
        le = oe.selectedStepIndex,
        ce = oe.selectedStepCondition,
        ue = oe.selectedLogicalStepIndex;
      return oe.errors, oe.emailConditions, oe.contactConditions, oe.segmentConditions, (0, g.useEffect)(function () {
        var e;
        Cy().then(function (e) {
          e.data.map(function () {
            L(e.data);
          });
        }), M((null == ie || null === (e = ie.settings) || void 0 === e || null === (e = e.anniversary) || void 0 === e ? void 0 : e.lists) || []);
      }, [X]), (0, g.useEffect)(function () {
        var e;
        Ny().then(function (e) {
          e.data.map(function () {
            G(e.data);
          });
        }), F((null == ie || null === (e = ie.settings) || void 0 === e || null === (e = e.anniversary) || void 0 === e ? void 0 : e.tags) || []);
      }, [X]), (0, g.useEffect)(function () {
        var e;
        te && Ay().then(function (e) {
          Q(e.data.data);
        }), W((null == ie || null === (e = ie.settings) || void 0 === e || null === (e = e.anniversary) || void 0 === e ? void 0 : e.segments) || []);
      }, [X]), (0, g.useEffect)(function () {
        A.length >= 0 && (0, y.dispatch)(Lf).updateStepArgs(le, ce, ue, "anniversary", "lists", A);
      }, [A]), (0, g.useEffect)(function () {
        I.length >= 0 && (0, y.dispatch)(Lf).updateStepArgs(le, ce, ue, "anniversary", "tags", I);
      }, [I]), (0, g.useEffect)(function () {
        D.length >= 0 && (0, y.dispatch)(Lf).updateStepArgs(le, ce, ue, "anniversary", "segments", D);
      }, [D]), h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings mint-anniversary"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(nb, null), (null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.Anniversary) || "Anniversary"), h().createElement("p", {
        className: "sort-description"
      }, (null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.AnniversaryDescription) || "This automation will be triggered for contacts based on a special event or birthday.")), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-tag"
      }, (null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectAnAttribute) || "Select an attribute", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, (null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.AnniversaryAttributeTooltip) || "Select the attribute that contains the anniversary date of the contact."))), h().createElement("div", {
        className: "conditional-setting-wrapper"
      }, h().createElement("div", {
        className: "rules-wrapper is-or-condition"
      }, h().createElement(tb, {
        attribute: null == ie || null === (o = ie.settings) || void 0 === o || null === (o = o.anniversary) || void 0 === o ? void 0 : o.attribute
      })))), h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-tag"
      }, (null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.WhenToCheck) || "At what time dates should be checked?", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, (null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.WhenToCheckDescription) || "Enter the time of the day you want Mail Mint to check the anniversary attribute of your contacts."))), h().createElement("div", {
        className: "mint-automation-time-picker"
      }, h().createElement(q.DateTimePicker, {
        currentDate: null !== (c = ie.settings) && void 0 !== c && null !== (c = c.anniversary) && void 0 !== c && c.time_to_check ? null === (u = ie.settings) || void 0 === u || null === (u = u.anniversary) || void 0 === u ? void 0 : u.time_to_check : null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s ? void 0 : s.local_time,
        onChange: function (e) {
          return t = e, void (0, y.dispatch)(Lf).updateStepArgs(le, ce, ue, "anniversary", "time_to_check", t);
          var t;
        },
        is12Hour: !0,
        __nextRemoveHelpButton: !0,
        __nextRemoveResetButton: !0
      }))), h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "add-list"
      }, (null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.ChooseWhoCanEnterThisAutomation) || "Filter who can enter this automation", h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "If no filters are selected, all contacts will enter this automation."))), h().createElement("div", {
        className: "form-group lists-dropdown",
        ref: ne
      }, h().createElement("button", {
        type: "button",
        className: "drop-down-button ".concat(E ? "show" : ""),
        onClick: function () {
          S(!E), (0, y.dispatch)(Lf).updateStepArgs(le, ce, ue, "anniversary", "lists", A);
        },
        disabled: 0 < D.length
      }, 0 != (null == A ? void 0 : A.length) ? null == A ? void 0 : A.map(function (e) {
        var t;
        return h().createElement("span", {
          className: "single-list mintmrm-tag-list",
          key: e.id
        }, e.title, h().createElement("span", {
          className: "close-list",
          title: (null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.Delete) || "Delete",
          onClick: function (t) {
            return n = e.id, void (0 <= A.findIndex(function (e) {
              return e.id == n;
            }) && (M(A.filter(function (e) {
              return e.id != n;
            })), (0, y.dispatch)(Lf).updateStepArgs(le, ce, ue, "anniversary", "lists", A)));
            var n;
          }
        }, h().createElement(vy.A, null)));
      }) : (null === (m = window) || void 0 === m || null === (m = m.MRM_Vars) || void 0 === m || null === (m = m.mint_trans) || void 0 === m ? void 0 : m.SelectLists) || "Select Lists"), h().createElement(fy, {
        isActive: E,
        setIsActive: S,
        selected: A,
        setSelected: M,
        endpoint: "lists",
        items: B,
        allowMultiple: !0,
        allowNewCreate: !1,
        name: "list",
        title: (null === (p = window) || void 0 === p || null === (p = p.MRM_Vars) || void 0 === p || null === (p = p.mint_trans) || void 0 === p ? void 0 : p.CHOOSELIST) || "Choose List",
        refresh: X,
        setRefresh: ee,
        prefix: "create-list",
        comesFrom: "automation",
        setsuccessNotification: K,
        successNotification: $
      })), h().createElement("div", {
        className: "form-group tag-dropdown",
        ref: re
      }, h().createElement("button", {
        type: "button",
        className: "drop-down-button ".concat(x ? "show" : ""),
        onClick: function () {
          C(!x), (0, y.dispatch)(Lf).updateStepArgs(le, ce, ue, "anniversary", "tags", I);
        },
        disabled: 0 < D.length
      }, 0 != (null == I ? void 0 : I.length) ? null == I ? void 0 : I.map(function (e) {
        var t;
        return h().createElement("span", {
          className: "single-list mintmrm-tag-list",
          key: e.id
        }, e.title, h().createElement("span", {
          className: "close-list",
          title: (null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.Delete) || "Delete",
          onClick: function (t) {
            return n = e.id, void (0 <= I.findIndex(function (e) {
              return e.id == n;
            }) && (F(I.filter(function (e) {
              return e.id != n;
            })), (0, y.dispatch)(Lf).updateStepArgs(le, ce, ue, "anniversary", "tags", I)));
            var n;
          }
        }, h().createElement(vy.A, null)));
      }) : (null === (f = window) || void 0 === f || null === (f = f.MRM_Vars) || void 0 === f || null === (f = f.mint_trans) || void 0 === f ? void 0 : f.SelectTags) || "Select Tags"), h().createElement(fy, {
        isActive: x,
        setIsActive: C,
        selected: I,
        setSelected: F,
        endpoint: "tags",
        items: H,
        allowMultiple: !0,
        allowNewCreate: !1,
        name: "tag",
        title: (null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v || null === (v = v.mint_trans) || void 0 === v ? void 0 : v.CHOOSETAG) || "Choose Tag",
        refresh: X,
        setRefresh: ee,
        prefix: "create-tag",
        comesFrom: "automation",
        setsuccessNotification: K,
        successNotification: $
      })), h().createElement("div", {
        className: "form-group segment-dropdown",
        ref: ae
      }, h().createElement("button", {
        type: "button",
        className: "drop-down-button ".concat(O ? "show" : ""),
        onClick: function () {
          k(!O), (0, y.dispatch)(Lf).updateStepArgs(le, ce, ue, "anniversary", "segments", D);
        },
        disabled: 0 < A.length || 0 < I.length
      }, 0 != (null == D ? void 0 : D.length) ? null == D ? void 0 : D.map(function (e) {
        var t;
        return h().createElement("span", {
          className: "single-list mintmrm-tag-list",
          key: e.id
        }, e.title, h().createElement("span", {
          className: "close-list",
          title: (null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.Delete) || "Delete",
          onClick: function (t) {
            return n = e.id, void (0 <= D.findIndex(function (e) {
              return e.id == n;
            }) && (W(D.filter(function (e) {
              return e.id != n;
            })), (0, y.dispatch)(Lf).updateStepArgs(le, ce, ue, "anniversary", "segments", D)));
            var n;
          }
        }, h().createElement(vy.A, null)));
      }) : (null === (b = window) || void 0 === b || null === (b = b.MRM_Vars) || void 0 === b || null === (b = b.mint_trans) || void 0 === b ? void 0 : b.SelectSegment) || "Select Segment"), h().createElement(fy, {
        isActive: O,
        setIsActive: k,
        selected: D,
        setSelected: W,
        endpoint: "segments",
        items: Y,
        allowMultiple: !1,
        allowNewCreate: !1,
        name: "segment",
        title: (null === (_ = window) || void 0 === _ || null === (_ = _.MRM_Vars) || void 0 === _ || null === (_ = _.mint_trans) || void 0 === _ ? void 0 : _.ChooseSegment) || "Choose Segment",
        refresh: X,
        setRefresh: ee,
        prefix: "create",
        comesFrom: "automation",
        setsuccessNotification: K,
        successNotification: $
      }))))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/woocommerce-automation/",
      showVideo: !1
    }
  };

function lb() {
  return React.createElement("svg", {
    viewBox: "0 0 20 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "#2D3149",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }, React.createElement("path", {
    d: "M6.028 20.21H4.232a2.343 2.343 0 01-2.343-2.343V4.123a2.343 2.343 0 012.343-2.342h9.6a2.343 2.343 0 012.343 2.342V8.77M5.008 5.838h8.043M5.008 8.962h4.924m-4.924 3.123h3.245"
  }), React.createElement("path", {
    d: "M11.338 13.22a2.265 2.265 0 114.529 0 2.265 2.265 0 01-4.53 0z"
  }), React.createElement("path", {
    d: "M13.602 15.507a4.694 4.694 0 014.59 3.74v-.011a.806.806 0 01-.777.973H9.79a.798.798 0 01-.778-.963 4.694 4.694 0 014.59-3.739"
  })));
}
