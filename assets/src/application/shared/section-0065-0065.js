// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var iA = {
  key: "twilioSendMessage",
  group: "actions",
  type: "action",
  package: "pro",
  category: "mint-twilio",
  title: (0, b._x)("Send Message", "noun", "mrm"),
  foreground: "#7F54B3",
  background: "#f7edf7",
  description: null === (eA = window) || void 0 === eA || null === (eA = eA.MRM_Vars) || void 0 === eA || null === (eA = eA.mint_trans) || void 0 === eA ? void 0 : eA.ActionDescription,
  subtitle: function (e) {
    var t;
    return null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.SendMessageSubTitle;
  },
  icon: rA,
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
      w,
      E,
      S,
      R,
      x = aA((0, g.useState)(!1), 2),
      C = x[0],
      P = x[1],
      O = aA((0, g.useState)(!1), 2),
      k = O[0],
      j = O[1],
      A = (0, g.useRef)(null),
      M = (0, g.useRef)(null),
      T = aA((0, g.useState)(""), 2),
      I = T[0],
      F = T[1],
      N = aA((0, g.useState)(""), 2),
      D = N[0],
      W = N[1],
      z = aA((0, g.useState)(!1), 2),
      B = z[0],
      L = z[1],
      V = aA((0, g.useState)(!1), 2),
      H = (V[0], V[1]),
      G = aA((0, g.useState)(0), 2),
      U = G[0],
      Y = G[1],
      Q = aA((0, g.useState)(0), 2),
      Z = (Q[0], Q[1], aA((0, g.useState)(""), 2)),
      $ = (Z[0], Z[1]),
      K = null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.is_mailmint_pro_license_active,
      J = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          automationData: e(Lf).getAutomationData(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      X = J.selectedStep,
      ee = J.selectedStepIndex,
      te = J.selectedStepCondition,
      ne = J.selectedLogicalStepIndex,
      re = (J.errors, J.automationData);
    J.ctaProModal, (0, wy.useOutsideAlerter)(A, P), (0, wy.useOutsideAlerter)(M, j);
    var ae = function (e) {
        var t,
          n = null === (t = X.settings) || void 0 === t || null === (t = t.twilio_data) || void 0 === t ? void 0 : t.phone_number,
          r = n.substring(0, U) + e + n.substring(U, n.length);
        Y(U + e.length), (0, y.dispatch)(Lf).updateStepArgs(ee, te, ne, "twilio_data", "phone_number", r);
      },
      oe = function (e) {
        F(e), L(!B);
      };
    (0, g.useEffect)(function () {
      F(""), L(!1);
    }, [C]), (0, g.useEffect)(function () {
      W(""), H(!1);
    }, [k]), (0, g.useEffect)(function () {
      L(!0);
    }, [I]), (0, g.useEffect)(function () {
      H(!0);
    }, [D]);
    var ie = function (e) {
      Y(e.target.selectionStart);
    };
    return h().createElement(h().Fragment, null, h().createElement(q.PanelBody, {
      opened: !0
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings send-message"
    }, h().createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, h().createElement("h4", null, h().createElement(rA, null), null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.SendMessage), h().createElement("p", {
      className: "sort-description"
    }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.SendMessageDescription)), h().createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, h().createElement("div", {
      className: "form-group single-settings data-send-method"
    }, h().createElement("label", {
      htmlFor: "email-sender-email"
    }, "Send Method", h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, "Choose the type of message you want to send."))), h().createElement(q.SelectControl, {
      label: "",
      value: null !== (r = null === (a = X.settings) || void 0 === a || null === (a = a.twilio_data) || void 0 === a ? void 0 : a.method) && void 0 !== r ? r : "",
      options: [{
        label: "SMS",
        value: "sms"
      }, {
        label: "WhatsApp",
        value: "whatsapp"
      }],
      onChange: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(ee, te, ne, "twilio_data", "method", e);
      }
    })), h().createElement("div", {
      className: "form-group single-settings phone-number"
    }, h().createElement("label", {
      htmlFor: "from_number"
    }, "Sender Phone Number", h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, "Country code + Twilio phone number (i.e. +16592045629) or Alphanumeric Sender"))), h().createElement("div", {
      className: "pos-relative"
    }, h().createElement(q.TextControl, {
      id: "from_number",
      maxLength: 201,
      placeholder: "Place merge tag here",
      value: null !== (o = null === (i = X.settings) || void 0 === i || null === (i = i.twilio_data) || void 0 === i ? void 0 : i.from_number) && void 0 !== o ? o : "",
      onClick: function (e) {
        return ie(e);
      },
      onChange: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(ee, te, ne, "twilio_data", "from_number", e);
      }
    }))), h().createElement("div", {
      className: "form-group single-settings phone-number"
    }, h().createElement("label", {
      htmlFor: "phone-number"
    }, "Contact Phone Number", h().createElement("span", {
      className: "required-mark"
    }, "*"), h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.PhoneNumberTooltip))), h().createElement("div", {
      className: "pos-relative"
    }, h().createElement(q.TextControl, {
      id: "phone-number",
      maxLength: 201,
      placeholder: "Place merge tag here",
      value: null !== (c = null === (u = X.settings) || void 0 === u || null === (u = u.twilio_data) || void 0 === u ? void 0 : u.phone_number) && void 0 !== c ? c : "",
      onClick: function (e) {
        return ie(e);
      },
      onChange: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(ee, te, ne, "twilio_data", "phone_number", e);
      }
    }), h().createElement("div", {
      className: "pos-relative",
      ref: A
    }, h().createElement("span", {
      className: "merge-tag-icon",
      onClick: function () {
        P(!C);
      }
    }, h().createElement(nA.default, null), h().createElement("p", {
      className: "personalized-tooltip"
    }, null === (s = window) || void 0 === s || null === (s = s.MRM_Vars) || void 0 === s || null === (s = s.mint_trans) || void 0 === s ? void 0 : s.personalizeTooltip)), h().createElement("ul", {
      className: "personalization mintmrm-dropdown ".concat(C ? "show" : "")
    }, h().createElement("div", {
      className: "title"
    }, "Personalization"), h().createElement("li", {
      className: "has-sub-dropdown ".concat("contact" === I && B ? "show" : null, " "),
      onClick: function () {
        return oe("contact");
      }
    }, null === (d = window) || void 0 === d || null === (d = d.MRM_Vars) || void 0 === d || null === (d = d.mint_trans) || void 0 === d ? void 0 : d.Contact), "contact" === I && B && h().createElement(h().Fragment, null, h().createElement("li", {
      className: "group-item",
      onClick: function () {
        return ae("{{contact.phone_number}}");
      }
    }, null === (m = window) || void 0 === m || null === (m = m.MRM_Vars) || void 0 === m ? void 0 : m.contact_general_fields.phone_number)), 0 !== (null === (p = window) || void 0 === p || null === (p = p.MRM_Vars) || void 0 === p ? void 0 : p.contact_custom_fields.length) && h().createElement("li", {
      className: "has-sub-dropdown ".concat("custom" === I && B ? "show" : null, " "),
      onClick: function () {
        return oe("custom");
      }
    }, null === (f = window) || void 0 === f || null === (f = f.MRM_Vars) || void 0 === f || null === (f = f.mint_trans) || void 0 === f ? void 0 : f.Custom), "custom" === I && B && h().createElement(h().Fragment, null, Object.keys(null === (v = window) || void 0 === v || null === (v = v.MRM_Vars) || void 0 === v ? void 0 : v.contact_custom_fields).map(function (e) {
      var t;
      return h().createElement("li", {
        className: "group-item",
        key: e,
        onClick: function () {
          return ae("{{custom.".concat(e, "}}"));
        }
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.contact_custom_fields[e]);
    })))))), h().createElement("div", {
      className: "form-group single-settings subject"
    }, h().createElement("label", {
      htmlFor: "message-body"
    }, "Message Body", h().createElement("span", {
      className: "required-mark"
    }, "*"), h().createElement("span", {
      className: "mintmrm-tooltip"
    }, h().createElement(hy, null), h().createElement("p", null, null === (_ = window) || void 0 === _ || null === (_ = _.MRM_Vars) || void 0 === _ || null === (_ = _.mint_trans) || void 0 === _ ? void 0 : _.MessageBodyTooltip))), h().createElement("div", {
      className: "pos-relative"
    }, h().createElement(q.TextareaControl, {
      id: "message-body",
      maxLength: 201,
      placeholder: "Be Specific and concise to spark interest",
      value: null !== (w = null === (E = X.settings) || void 0 === E || null === (E = E.twilio_data) || void 0 === E ? void 0 : E.message_body) && void 0 !== w ? w : "",
      onChange: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(ee, te, ne, "twilio_data", "message_body", e);
      },
      ref: M
    }), h().createElement("div", {
      className: "pos-relative"
    }, h().createElement(Ej, {
      inputRef: M,
      inputValue: null === (S = X.settings) || void 0 === S || null === (S = S.twilio_data) || void 0 === S ? void 0 : S.message_body,
      setInputValue: function (e) {
        (0, y.dispatch)(Lf).updateStepArgs(ee, te, ne, "twilio_data", "message_body", e);
      },
      tooltip: null === (R = window) || void 0 === R || null === (R = R.MRM_Vars) || void 0 === R || null === (R = R.mint_trans) || void 0 === R ? void 0 : R.personalizeTooltip,
      triggerName: null == re ? void 0 : re.trigger_name,
      contentType: "preview"
    })), h().createElement("span", {
      className: "open-ai-icon",
      onClick: function (e) {
        return function (e, t, n) {
          var r, a;
          K ? ((0, y.dispatch)(Lf).setOpenAIModal(!0, "twilio_message_body", n, "twilio_message_body"), $(n)) : (closeSidebar(), setCtaProModal(!0, ctaIcon, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.UnlockWithPremium, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.GetProVersionMsg, CampaignOpenAILink, "openai"));
        }(0, 0, "Generate Text Message Using AI");
      }
    }, h().createElement(pP.default, null), h().createElement("p", {
      className: "personalized-tooltip"
    }, (0, b.__)("OpenAI", "mrm")))))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function lA() {
  return React.createElement("svg", {
    width: "18",
    height: "18",
    fill: "none",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#686F7F",
    d: "M15 3.75h-1.5V3A2.25 2.25 0 0011.25.75h-4.5A2.25 2.25 0 004.5 3v.75H3a.75.75 0 000 1.5v8.25a3.75 3.75 0 003.75 3.75h4.5A3.75 3.75 0 0015 13.5V5.25a.75.75 0 100-1.5zM6 3a.75.75 0 01.75-.75h4.5A.75.75 0 0112 3v.75H6V3zm7.5 10.5a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 014.5 13.5V5.25h9v8.25z"
  }), React.createElement("path", {
    fill: "#686F7F",
    d: "M7.5 7.5a.75.75 0 00-.75.75v4.5a.75.75 0 101.5 0v-4.5a.75.75 0 00-.75-.75zm3 0a.75.75 0 00-.75.75v4.5a.75.75 0 101.5 0v-4.5a.75.75 0 00-.75-.75z"
  }));
}

const cA = (0, g.memo)(lA);

function uA(e) {
  return uA = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, uA(e);
}

function sA(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function dA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? sA(Object(n), !0).forEach(function (t) {
      mA(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sA(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function mA(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != uA(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != uA(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == uA(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function pA(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var fA = function (e) {
  var t,
    n,
    r,
    a,
    o = e.handleBodyKey,
    i = e.deleteBodyRequest,
    l = e.keyProp,
    c = e.valueProp,
    u = e.automationData,
    s = (0, y.useSelect)(function (e) {
      return {
        selectedStep: e(Lf).getSelectedStep(),
        selectedStepIndex: e(Lf).getSelectedStepIndex(),
        selectedStepCondition: e(Lf).getSelectedStepCondition(),
        selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
        errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
      };
    }, []),
    d = s.selectedStep,
    m = s.selectedStepIndex,
    p = s.selectedStepCondition,
    f = s.selectedLogicalStepIndex,
    v = (s.errors, function (e, t) {
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
          if ("string" == typeof e) return pA(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pA(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(0), 2)),
    h = v[0],
    _ = v[1],
    w = function (e, t, n) {
      var r,
        a,
        o = null === (r = d.settings) || void 0 === r || null === (r = r.message_data) || void 0 === r ? void 0 : r.body_request_data[n];
      t.body_key = t.body_key, t.body_value = e;
      var i = null === (a = d.settings) || void 0 === a || null === (a = a.message_data) || void 0 === a ? void 0 : a.body_request_data.map(function (e, r) {
        return n === r && (e = dA(dA({}, o[n]), t)), e;
      });
      _(h + e.length), (0, y.dispatch)(Lf).updateStepArgs(m, p, f, "message_data", "body_request_data", i);
    },
    E = (0, g.useRef)(null);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "repeater-wrapper"
  }, React.createElement("div", {
    className: "single-repeater-item single-repeater-item-key"
  }, React.createElement("label", {
    htmlFor: "email-sender-name"
  }, " ", (0, b.__)("Body Key", "mrm"), " "), React.createElement(q.TextControl, {
    id: "email-sender-name",
    type: "text",
    placeholder: (0, b.__)("Enter key", "mrm"),
    value: null !== (t = null === (n = d.settings) || void 0 === n || null === (n = n.message_data) || void 0 === n || null === (n = n.body_request_data[l]) || void 0 === n ? void 0 : n.body_key) && void 0 !== t ? t : "",
    onChange: function (e) {
      return o(e, c, l);
    }
  })), React.createElement("div", {
    className: "single-repeater-item"
  }, React.createElement("label", {
    htmlFor: "email-sender-name"
  }, " ", (0, b.__)("Body Value", "mrm"), " "), React.createElement(q.TextControl, {
    id: "email-sender-name",
    type: "text",
    placeholder: (0, b.__)("Enter Value", "mrm"),
    value: null !== (r = null === (a = d.settings) || void 0 === a || null === (a = a.message_data) || void 0 === a || null === (a = a.body_request_data[l]) || void 0 === a ? void 0 : a.body_value) && void 0 !== r ? r : "",
    onClick: function (e) {
      return function (e) {
        _(e.target.selectionStart);
      }(e);
    },
    onChange: function (e) {
      return w(e, c, l);
    },
    ref: E
  }), React.createElement(Ej, {
    inputRef: E,
    inputValue: null == c ? void 0 : c.body_value,
    setInputValue: function (e) {
      w(e, c, l);
    },
    triggerName: null == u ? void 0 : u.trigger_name
  })), React.createElement(q.Button, {
    className: "trash-btn",
    title: "Delete",
    variant: "secondary",
    onClick: function () {
      return i(l);
    }
  }, React.createElement(cA, null))));
};

const vA = (0, g.memo)(fA);

function gA(e) {
  return gA = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, gA(e);
}

function hA(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function yA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? hA(Object(n), !0).forEach(function (t) {
      bA(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hA(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function bA(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != gA(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != gA(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == gA(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function _A(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var wA = function (e) {
  var t,
    n,
    r,
    a,
    o = e.keyProp,
    i = e.valueProp,
    l = e.deleteHeaderRequest,
    c = e.automationData,
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
    p = u.selectedLogicalStepIndex,
    f = (u.errors, function (e, t) {
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
          if ("string" == typeof e) return _A(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _A(e, t) : void 0;
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }((0, g.useState)(0), 2)),
    v = f[0],
    h = f[1],
    _ = function (e, t, n) {
      var r,
        a,
        o = null === (r = s.settings) || void 0 === r || null === (r = r.message_data) || void 0 === r ? void 0 : r.header_request_data[n];
      t.header_key = t.header_key, t.header_value = e;
      var i = null === (a = s.settings) || void 0 === a || null === (a = a.message_data) || void 0 === a ? void 0 : a.header_request_data.map(function (e, r) {
        return n === r && (e = yA(yA({}, o[n]), t)), e;
      });
      h(v + e.length), (0, y.dispatch)(Lf).updateStepArgs(d, m, p, "message_data", "header_request_data", i);
    },
    w = (0, g.useRef)(null);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "repeater-wrapper"
  }, React.createElement("div", {
    className: "single-repeater-item single-repeater-item-key"
  }, React.createElement("label", {
    htmlFor: "email-sender-name"
  }, " ", (0, b.__)("Header Key", "mrm"), " "), React.createElement(q.TextControl, {
    id: "email-sender-name",
    type: "text",
    placeholder: (0, b.__)("Enter key", "mrm"),
    value: null !== (t = null === (n = s.settings) || void 0 === n || null === (n = n.message_data) || void 0 === n || null === (n = n.header_request_data[o]) || void 0 === n ? void 0 : n.header_key) && void 0 !== t ? t : "",
    onChange: function (e) {
      return function (e, t, n) {
        var r,
          a,
          o = null === (r = s.settings) || void 0 === r || null === (r = r.message_data) || void 0 === r ? void 0 : r.header_request_data[n];
        t.header_key = e, t.header_value = t.header_value;
        var i = null === (a = s.settings) || void 0 === a || null === (a = a.message_data) || void 0 === a ? void 0 : a.header_request_data.map(function (e, r) {
          return n === r && (e = yA(yA({}, o[n]), t)), e;
        });
        (0, y.dispatch)(Lf).updateStepArgs(d, m, p, "message_data", "header_request_data", i);
      }(e, i, o);
    }
  })), React.createElement("div", {
    className: "single-repeater-item"
  }, React.createElement("label", {
    htmlFor: "email-sender-name"
  }, " ", (0, b.__)("Header Value", "mrm"), " "), React.createElement(q.TextControl, {
    id: "email-sender-name",
    type: "text",
    placeholder: (0, b.__)("Enter Value", "mrm"),
    value: null !== (r = null === (a = s.settings) || void 0 === a || null === (a = a.message_data) || void 0 === a || null === (a = a.header_request_data[o]) || void 0 === a ? void 0 : a.header_value) && void 0 !== r ? r : "",
    onClick: function (e) {
      return function (e) {
        h(e.target.selectionStart);
      }(e);
    },
    onChange: function (e) {
      return _(e, i, o);
    },
    ref: w
  }), React.createElement(Ej, {
    inputRef: w,
    inputValue: null == i ? void 0 : i.header_value,
    setInputValue: function (e) {
      _(e, i, o);
    },
    triggerName: null == c ? void 0 : c.trigger_name
  })), React.createElement(q.Button, {
    className: "trash-btn",
    title: "Delete",
    variant: "secondary",
    onClick: function () {
      return l(o);
    }
  }, React.createElement(cA, null))));
};

const EA = (0, g.memo)(wA);

function SA(e) {
  return SA = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, SA(e);
}

function RA(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function xA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? RA(Object(n), !0).forEach(function (t) {
      CA(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : RA(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function CA(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != SA(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != SA(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == SA(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function PA(e) {
  return function (e) {
    if (Array.isArray(e)) return OA(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return OA(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? OA(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function OA(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
