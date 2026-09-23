// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var nM,
  rM,
  aM = {
    key: "changeUserRole",
    group: "actions",
    type: "action",
    package: "pro",
    category: "mint-wordpress",
    title: (0, b._x)("Change User Role", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: null === (qA = window) || void 0 === qA || null === (qA = qA.MRM_Vars) || void 0 === qA || null === (qA = qA.mint_trans) || void 0 === qA ? void 0 : qA.ActionDescription,
    subtitle: function (e) {
      var t, n, r;
      return null !== (t = e.settings) && void 0 !== t && null !== (t = t.change_role_settings) && void 0 !== t && t.role ? "Selected role: " + (null == e || null === (n = e.settings) || void 0 === n || null === (n = n.change_role_settings) || void 0 === n ? void 0 : n.role) : null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.NotSetUpYet;
    },
    icon: QA,
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
        u = XA((0, g.useState)([]), 2),
        s = u[0],
        d = u[1],
        m = XA((0, g.useState)(!0), 2),
        p = (m[0], m[1]),
        f = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex()
          };
        }, []),
        v = f.selectedStep,
        b = f.selectedStepIndex,
        _ = f.selectedStepCondition,
        w = f.selectedLogicalStepIndex;
      return (0, g.useEffect)(function () {
        var e;
        if (null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.is_mailmint_pro_license_active) {
          var t = function () {
            var e,
              t = (e = $A().m(function e() {
                var t;
                return $A().w(function (e) {
                  for (;;) switch (e.p = e.n) {
                    case 0:
                      return e.p = 0, e.n = 1, WA();
                    case 1:
                      t = e.v, d(t.map(function (e) {
                        return {
                          value: null == e ? void 0 : e.role,
                          label: (null == e ? void 0 : e.name) || (null == e ? void 0 : e.display_name)
                        };
                      }) || []), e.n = 3;
                      break;
                    case 2:
                      e.p = 2, e.v;
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
                    JA(o, r, a, i, l, "next", e);
                  }
                  function l(e) {
                    JA(o, r, a, i, l, "throw", e);
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
        className: "mintmrm-automation_step-settings change-role-settings"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(QA, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.ChangeUserRole), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.ChangeUserRoleDes)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.UserRole, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "Selected Role will be applied if there has a user with contact's email address."))), h().createElement(q.SelectControl, {
        options: [{
          value: "",
          label: null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectUserRole
        }].concat(ZA(s)),
        value: null == v || null === (a = v.settings) || void 0 === a || null === (a = a.change_role_settings) || void 0 === a ? void 0 : a.role,
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(b, _, w, "change_role_settings", "role", e);
        }
      })), h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.ReplaceUserRole, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, "When enabled, this will remove all existing roles and assign the selected role. If unchecked, the selected role will be added to the user’s current roles."))), h().createElement("input", {
        type: "checkbox",
        checked: null === (i = null === (l = v.settings) || void 0 === l || null === (l = l.change_role_settings) || void 0 === l ? void 0 : l.replace_user_role) || void 0 === i || i,
        onChange: function (e) {
          return t = e.target.checked, p(t), void (0, y.dispatch)(Lf).updateStepArgs(b, _, w, "change_role_settings", "replace_user_role", t);
          var t;
        }
      }), null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.ReplaceUserRoleCheckboxDes))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  },
  oM = {
    key: "changeContactStatus",
    group: "actions",
    type: "action",
    package: "pro",
    category: "mailmint",
    title: (0, b._x)("Change Contact Status", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: null === (nM = window) || void 0 === nM || null === (nM = nM.MRM_Vars) || void 0 === nM || null === (nM = nM.mint_trans) || void 0 === nM ? void 0 : nM.ActionDescription,
    subtitle: function (e) {
      var t, n, r;
      if ("" === (null == e || null === (t = e.settings) || void 0 === t || null === (t = t.change_contact_status_settings) || void 0 === t ? void 0 : t.status) || 0 == (null == e || null === (n = e.settings) || void 0 === n ? void 0 : n.length)) return null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.NotSetUpYet;
      var a,
        o = null == e || null === (a = e.settings.change_contact_status_settings) || void 0 === a ? void 0 : a.status;
      return "Selected status:  " + (o ? o.charAt(0).toUpperCase() + o.slice(1) : "");
    },
    icon: function () {
      return React.createElement("svg", {
        width: "19",
        height: "21",
        fill: "none",
        viewBox: "0 0 19 21",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".6",
        d: "M17.406 14.996h-2.289v-2.33a.672.672 0 00-.191-.47.648.648 0 00-.925 0 .672.672 0 00-.191.47v2.33h-2.29c-.173 0-.34.07-.462.195a.672.672 0 000 .941.648.648 0 00.462.195h2.288v2.33c0 .176.07.345.192.47a.648.648 0 00.925 0 .672.672 0 00.191-.47v-2.33h2.289c.173 0 .34-.07.462-.195a.672.672 0 000-.941.648.648 0 00-.462-.195z"
      }), React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".6",
        d: "M9.563 19.322H3.024a.648.648 0 01-.462-.195.672.672 0 01-.192-.47 7.397 7.397 0 012.11-5.175 7.138 7.138 0 015.082-2.146 5.193 5.193 0 003.444-1.297 5.368 5.368 0 001.765-3.277 5.418 5.418 0 00-.777-3.653A5.257 5.257 0 0011.056.87a5.162 5.162 0 00-3.662.27A5.295 5.295 0 004.8 3.785a5.43 5.43 0 00-.253 3.729 5.332 5.332 0 002.21 2.984 8.525 8.525 0 00-4.123 3.157 8.767 8.767 0 00-1.572 5.002c0 .53.206 1.037.574 1.412.368.374.867.584 1.387.584h6.539c.173 0 .34-.07.462-.195a.671.671 0 000-.94.648.648 0 00-.463-.196zM5.639 6.011c0-.79.23-1.562.662-2.219a3.939 3.939 0 011.76-1.47 3.86 3.86 0 012.267-.228c.76.155 1.46.535 2.008 1.093.55.559.923 1.27 1.074 2.045a4.06 4.06 0 01-.223 2.307 3.98 3.98 0 01-1.445 1.792 3.874 3.874 0 01-2.18.673 3.893 3.893 0 01-2.772-1.17A4.034 4.034 0 015.64 6.01z"
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
        v = d.selectedLogicalStepIndex;
      return d.errors, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings create-user"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(KC, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.ChangeContactStatus), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.ChangeContactStatusDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "",
        className: "inline-with-link"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.ContactStatus), h().createElement(q.SelectControl, {
        options: [{
          value: "",
          label: null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectStatus
        }, {
          value: "pending",
          label: null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.Pending
        }, {
          value: "subscribed",
          label: null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.Subscribed
        }, {
          value: "unsubscribed",
          label: null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.Unsubscribed
        }, {
          value: "bounced",
          label: null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.Bounced
        }, {
          value: "complained",
          label: null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.Complained
        }],
        value: null !== (u = null === (s = m.settings) || void 0 === s || null === (s = s.change_contact_status_settings) || void 0 === s ? void 0 : s.status) && void 0 !== u ? u : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(p, f, v, "change_contact_status_settings", "status", e);
        }
      })))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function iM(e) {
  return iM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, iM(e);
}

function lM(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function cM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function uM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? cM(Object(n), !0).forEach(function (t) {
      sM(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cM(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function sM(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != iM(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != iM(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == iM(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

var dM,
  mM = {
    key: "updateWPUserMeta",
    group: "actions",
    type: "action",
    package: "pro",
    category: "mint-wordpress",
    title: (0, b._x)("Update WP User Meta", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: null === (rM = window) || void 0 === rM || null === (rM = rM.MRM_Vars) || void 0 === rM || null === (rM = rM.mint_trans) || void 0 === rM ? void 0 : rM.ActionDescription,
    subtitle: function (e) {
      var t, n;
      return 0 === (null == e || null === (t = e.settings) || void 0 === t || null === (t = t.updateWPUserMeta) || void 0 === t ? void 0 : t.meta_properties.length) ? null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet : "Update Wordpress User Meta";
    },
    icon: function () {
      return React.createElement("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        d: "M13.9391 21.1455H8.35774C3.30658 21.1455 1.14844 18.9874 1.14844 13.9362V8.35481C1.14844 3.30365 3.30658 1.14551 8.35774 1.14551H13.9391C18.9903 1.14551 21.1484 3.30365 21.1484 8.35481V13.9362C21.1484 18.9874 18.9903 21.1455 13.9391 21.1455ZM8.35774 2.54086C4.06937 2.54086 2.54379 4.06644 2.54379 8.35481V13.9362C2.54379 18.2246 4.06937 19.7502 8.35774 19.7502H13.9391C18.2275 19.7502 19.7531 18.2246 19.7531 13.9362V8.35481C19.7531 4.06644 18.2275 2.54086 13.9391 2.54086H8.35774Z",
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: "0.4"
      }), React.createElement("path", {
        d: "M6.8029 14.1591C6.65406 14.1591 6.50523 14.1126 6.375 14.0103C6.06802 13.7778 6.0122 13.3405 6.24476 13.0336L8.45872 10.1591C8.72848 9.81496 9.10988 9.59171 9.54709 9.53589C9.97499 9.48008 10.4122 9.60101 10.7564 9.87078L12.4587 11.2103C12.5238 11.2661 12.5889 11.2661 12.6355 11.2568C12.6727 11.2568 12.7378 11.2382 12.7936 11.1638L14.9424 8.39171C15.175 8.08473 15.6215 8.02892 15.9192 8.27078C16.2262 8.50334 16.282 8.94055 16.0401 9.24752L13.8913 12.0196C13.6215 12.3638 13.2401 12.5871 12.8029 12.6336C12.3657 12.6894 11.9378 12.5685 11.5936 12.2987L9.89127 10.9592C9.82616 10.9033 9.75174 10.9033 9.71453 10.9126C9.67732 10.9126 9.6122 10.9312 9.55639 11.0057L7.34244 13.8801C7.22151 14.0661 7.01686 14.1591 6.8029 14.1591Z",
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: "0.4"
      }));
    },
    edit: function () {
      var e,
        t,
        n,
        r = (0, g.useRef)(),
        a = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            automationData: e(Lf).getAutomationData()
          };
        }, []),
        o = a.selectedStep,
        i = a.selectedStepIndex,
        l = a.selectedStepCondition,
        c = a.selectedLogicalStepIndex,
        u = a.automationData;
      (0, g.useEffect)(function () {
        var e;
        0 === ((null === (e = o.settings) || void 0 === e || null === (e = e.update_settings) || void 0 === e ? void 0 : e.meta_properties) || []).length && (0, y.dispatch)(Lf).updateStepArgs(i, l, c, "update_settings", "meta_properties", [{
          metaKey: "",
          metaValue: ""
        }]);
      }, [o, i, l, c]);
      var s = function (e, t, n) {
          var r,
            a = ((null === (r = o.settings) || void 0 === r || null === (r = r.update_settings) || void 0 === r ? void 0 : r.meta_properties) || []).map(function (r, a) {
              return a === e ? uM(uM({}, r), {}, sM({}, t, n)) : r;
            });
          (0, y.dispatch)(Lf).updateStepArgs(i, l, c, "update_settings", "meta_properties", a);
        },
        d = (null === (e = o.settings) || void 0 === e || null === (e = e.update_settings) || void 0 === e ? void 0 : e.meta_properties) || [];
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings update-wp-user-meta-settings"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(fP, null), null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.UpdateWPUserMeta), h().createElement("p", {
        className: "sort-description"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.UpdateWPUserMetaDes)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", null, d.map(function (e, t) {
        var n;
        return h().createElement("div", {
          key: t,
          className: "form-group single-settings meta-key-value-settings"
        }, h().createElement(q.TextControl, {
          type: "text",
          placeholder: (0, b.__)("Meta Key", "mrm"),
          value: e.metaKey || "",
          onChange: function (e) {
            return s(t, "metaKey", e);
          },
          style: {
            flex: 1,
            marginRight: "10px"
          }
        }), h().createElement("div", {
          className: "meta-value-wrapper"
        }, h().createElement(q.TextControl, {
          type: "text",
          placeholder: (0, b.__)("Meta Value", "mrm"),
          value: e.metaValue || "",
          onChange: function (e) {
            return s(t, "metaValue", e);
          },
          style: {
            width: "100%"
          }
        }), h().createElement("div", {
          className: "pos-relative"
        }, h().createElement(Ej, {
          inputRef: r,
          inputValue: e.metaValue,
          setInputValue: function (e) {
            return s(t, "metaValue", e);
          },
          tooltip: null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.personalizeTooltip,
          triggerName: null == u ? void 0 : u.trigger_name
        }))), h().createElement("button", {
          onClick: function () {
            return function (e) {
              var t,
                n = ((null === (t = o.settings) || void 0 === t || null === (t = t.update_settings) || void 0 === t ? void 0 : t.meta_properties) || []).filter(function (t, n) {
                  return n !== e;
                });
              0 === n.length && n.push({
                metaKey: "",
                metaValue: ""
              }), (0, y.dispatch)(Lf).updateStepArgs(i, l, c, "update_settings", "meta_properties", n);
            }(t);
          },
          className: "delete-row"
        }, h().createElement(cA, null)));
      }), h().createElement("button", {
        className: "add-more-btn",
        onClick: function () {
          var e,
            t = (null === (e = o.settings) || void 0 === e || null === (e = e.update_settings) || void 0 === e ? void 0 : e.meta_properties) || [];
          (0, y.dispatch)(Lf).updateStepArgs(i, l, c, "update_settings", "meta_properties", [].concat(function (e) {
            return function (e) {
              if (Array.isArray(e)) return lM(e);
            }(e) || function (e) {
              if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }(e) || function (e, t) {
              if (e) {
                if ("string" == typeof e) return lM(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lM(e, t) : void 0;
              }
            }(e) || function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }(t), [{
            metaKey: "",
            metaValue: ""
          }]));
        }
      }, "+ Add More")))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function pM(e) {
  return pM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, pM(e);
}

function fM(e) {
  return function (e) {
    if (Array.isArray(e)) return vM(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return vM(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vM(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function vM(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function gM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function hM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? gM(Object(n), !0).forEach(function (t) {
      yM(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gM(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function yM(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != pM(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != pM(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == pM(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
