// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Yj = null !== (Vj = null === (Hj = window) || void 0 === Hj || null === (Hj = Hj.MRM_Vars) || void 0 === Hj ? void 0 : Hj.sequences) && void 0 !== Vj ? Vj : [],
  Qj = {
    key: "sequence",
    group: "actions",
    type: "action",
    package: "pro",
    category: "mailmint",
    title: (0, b._x)("Email Sequence", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: null === (Gj = window) || void 0 === Gj || null === (Gj = Gj.MRM_Vars) || void 0 === Gj || null === (Gj = Gj.mint_trans) || void 0 === Gj ? void 0 : Gj.ActionDescription,
    subtitle: function (e) {
      var t, n, r, a;
      return "" === (null === (t = e.settings) || void 0 === t || null === (t = t.sequence_settings) || void 0 === t ? void 0 : t.id) || void 0 === (null === (n = e.settings) || void 0 === n || null === (n = n.sequence_settings) || void 0 === n ? void 0 : n.id) ? null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.NotSetUpYet : null === (a = (null == Yj ? void 0 : Yj.filter(function (t) {
        var n;
        if ((null == t ? void 0 : t.value) === (null == e || null === (n = e.settings) || void 0 === n || null === (n = n.sequence_settings) || void 0 === n ? void 0 : n.id)) return null == t ? void 0 : t.label;
      }))[0]) || void 0 === a ? void 0 : a.label;
    },
    icon: function () {
      return React.createElement("svg", {
        width: "28",
        height: "22",
        fill: "none",
        viewBox: "0 0 28 22",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".8",
        d: "M25.684.94H7.987c-.725 0-1.316.59-1.316 1.314v1.134h-1.52c-.725 0-1.315.59-1.315 1.316v1.134h-1.52C1.59 5.838 1 6.428 1 7.154v12.59c0 .726.59 1.317 1.316 1.317h17.698c.726 0 1.316-.59 1.316-1.316V18.61h1.52c.725 0 1.316-.59 1.316-1.316v-1.133h1.518c.726 0 1.316-.59 1.316-1.316V2.254c0-.725-.59-1.315-1.316-1.315v0zm-12.48 12.51l7.313-6.318v12.633l-7.313-6.316zm-2.038.687L2.499 6.65h17.332l-8.665 7.487zm-9.352 5.63l-.002-.022V7.154l.002-.022 7.312 6.317-7.312 6.318zm.685.481l7.249-6.262 1.152.995a.405.405 0 00.531 0l1.152-.995 7.25 6.262H2.499zm20.854-2.953a.504.504 0 01-.503.503h-1.52V7.154c0-.726-.59-1.316-1.316-1.316H4.648V4.704c0-.278.226-.504.504-.504H22.85a.51.51 0 01.503.504v12.59h0zm2.834-2.449a.504.504 0 01-.503.504h-1.518V4.704c0-.726-.59-1.316-1.316-1.316H7.484V2.254c0-.277.226-.502.503-.502h17.697c.278 0 .504.225.504.502v12.592h0z"
      }));
    },
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        l = i.selectedStep,
        c = i.selectedStepIndex,
        u = i.selectedStepCondition,
        s = i.selectedLogicalStepIndex,
        d = (i.errors, null !== (e = null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t ? void 0 : t.sequences) && void 0 !== e ? e : []);
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings sequence"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(qj, null), (0, b.__)("Email Sequence", "mrm")), h().createElement("p", {
        className: "sort-description"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.EmailSequenceDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, (0, b.__)("Select Email Sequence", "mrm")), h().createElement(q.SelectControl, {
        options: d,
        value: null !== (r = null === (a = l.settings) || void 0 === a || null === (a = a.sequence_settings) || void 0 === a ? void 0 : a.id) && void 0 !== r ? r : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(c, u, s, "sequence_settings", "id", e);
        }
      }), h().createElement("span", {
        className: "hints"
      }, null === (o = window) || void 0 === o || null === (o = o.MRM_Vars) || void 0 === o || null === (o = o.mint_trans) || void 0 === o ? void 0 : o.EmailSequenceHits)))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function Zj() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 22 22"
  }, React.createElement("path", {
    stroke: "#2D3149",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.7",
    d: "M9.086 18.945a8.633 8.633 0 119.882-9.703M10.414 4.594v5.82l-2.89 2.93"
  }), React.createElement("path", {
    stroke: "#2D3149",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.7",
    d: "M20.222 16.547a4.494 4.494 0 01-8.91-.82 4.492 4.492 0 015.704-4.328"
  }), React.createElement("path", {
    stroke: "#2D3149",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.7",
    d: "M19.633 13.148l-3.414 3.38a.586.586 0 01-.827-.003l-1.15-1.15"
  }));
}

function $j(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var Kj,
  Jj = {
    key: "specificTimeDelay",
    group: "actions",
    type: "action",
    package: "pro",
    category: "mailmint",
    title: (0, b._x)("Specific Time Delay", "time-related action", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: (0, b.__)("Wait some time before proceeding with the steps below", "mrm"),
    subtitle: function (e) {
      var t, n, r;
      return "" === (null === (t = e.settings.specific_delay_settings) || void 0 === t ? void 0 : t.time) ? null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet : "Wait for " + (null === (r = e.settings.specific_delay_settings) || void 0 === r ? void 0 : r.time);
    },
    icon: function () {
      return React.createElement("svg", {
        className: "specific-delay-fill",
        width: "22",
        height: "22",
        fill: "none",
        viewBox: "0 0 22 22"
      }, React.createElement("path", {
        stroke: "#2D3149",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.7",
        d: "M9.086 18.945a8.633 8.633 0 119.882-9.703M10.414 4.594v5.82l-2.89 2.93"
      }), React.createElement("path", {
        stroke: "#2D3149",
        strokeLinecap: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.7",
        d: "M20.222 16.547a4.494 4.494 0 01-8.91-.82 4.492 4.492 0 015.704-4.328"
      }), React.createElement("path", {
        stroke: "#2D3149",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.7",
        d: "M19.633 13.148l-3.414 3.38a.586.586 0 01-.827-.003l-1.15-1.15"
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
        m = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id),
            automationData: e(Lf).getAutomationData()
          };
        }, []),
        p = m.selectedStep,
        f = m.selectedStepIndex,
        v = m.selectedStepCondition,
        b = m.selectedLogicalStepIndex,
        _ = m.errors,
        w = (m.automationData, null !== (e = null == _ ? void 0 : _.fields) && void 0 !== e ? e : {}),
        E = null !== (t = null == w ? void 0 : w.delay) && void 0 !== t ? t : "",
        S = null !== (n = null == w ? void 0 : w.delay_type) && void 0 !== n ? n : "",
        R = "delay-number-".concat(p.id),
        x = function (e, t) {
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
              if ("string" == typeof e) return $j(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $j(e, t) : void 0;
            }
          }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }((0, g.useState)(""), 2),
        C = x[0],
        P = x[1],
        O = null === (r = window.MRM_Vars) || void 0 === r ? void 0 : r.start_of_week,
        k = null === (a = window.MRM_Vars) || void 0 === a ? void 0 : a.time_format,
        j = null === (o = window.MRM_Vars) || void 0 === o ? void 0 : o.gmt_offset;
      function A() {
        return "H:i" !== k;
      }
      var M = new Date(),
        T = new Date(M.getTime() + 60 * j * 60 * 1e3).toUTCString(),
        I = new Date(T).toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour12: A(),
          timeZone: "UTC"
        });
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings specific-delay"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(Zj, null), null === (i = window) || void 0 === i || null === (i = i.MRM_Vars) || void 0 === i || null === (i = i.mint_trans) || void 0 === i ? void 0 : i.SpecificTimeDelay), h().createElement("p", {
        className: "sort-description"
      }, null === (l = window) || void 0 === l || null === (l = l.MRM_Vars) || void 0 === l || null === (l = l.mint_trans) || void 0 === l ? void 0 : l.TimeDelayDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings specific-waiting-time ".concat(w ? "mintmrm-has-error" : "")
      }, h().createElement("label", {
        className: "specific-waiting-time-label",
        htmlFor: "specific-waiting-time-".concat(R)
      }, null === (c = window) || void 0 === c || null === (c = c.MRM_Vars) || void 0 === c || null === (c = c.mint_trans) || void 0 === c ? void 0 : c.SetWaitingTime, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (u = window) || void 0 === u || null === (u = u.MRM_Vars) || void 0 === u || null === (u = u.mint_trans) || void 0 === u ? void 0 : u.TimeDelayTooltip))), h().createElement("span", {
        className: C ? "warning-message" : "warning-message none"
      }, C), h().createElement(q.DateTimePicker, {
        currentDate: null != p && null !== (s = p.settings) && void 0 !== s && null !== (s = s.specific_delay_settings) && void 0 !== s && s.time ? null == p || null === (d = p.settings) || void 0 === d || null === (d = d.specific_delay_settings) || void 0 === d ? void 0 : d.time : I,
        onChange: function (e) {
          return function (e) {
            var t = new Date(e).toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour12: A()
              }),
              n = new Date().getTime();
            new Date(t).getTime() < n ? P("You cannot select an older date and time") : (P(""), (0, y.dispatch)(Lf).updateStepArgs(f, v, b, "specific_delay_settings", "time", t));
          }(e);
        },
        is12Hour: A(),
        startOfWeek: O,
        __nextRemoveHelpButton: !0,
        __nextRemoveResetButton: !0
      }), h().createElement("span", {
        className: "hints"
      }, E || "", S || "")))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function Xj() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 22 22"
  }, React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".4",
    d: "M11 21c5.514 0 10-4.486 10-10a9.935 9.935 0 00-2.927-7.073A9.936 9.936 0 0011 1C5.486 1 1 5.486 1 11a9.935 9.935 0 002.927 7.073A9.935 9.935 0 0011 21zm0-1.667a8.275 8.275 0 01-5.276-1.879l11.73-11.73A8.275 8.275 0 0119.334 11c0 4.595-3.74 8.333-8.334 8.333zm0-16.666c1.947 0 3.792.662 5.276 1.879l-11.73 11.73A8.275 8.275 0 012.666 11c0-4.595 3.74-8.333 8.334-8.333z"
  }));
}

var eA,
  tA = {
    key: "stopAutomation",
    group: "actions",
    type: "action",
    package: "pro",
    category: "mailmint",
    title: (0, b._x)("Stop Automation", "noun", "mrm"),
    foreground: "#7F54B3",
    background: "#f7edf7",
    description: null === (Kj = window) || void 0 === Kj || null === (Kj = Kj.MRM_Vars) || void 0 === Kj || null === (Kj = Kj.mint_trans) || void 0 === Kj ? void 0 : Kj.ActionDescription,
    subtitle: function (e) {
      return (0, b.__)("Stop This Automation Workflow", "mrm");
    },
    icon: function () {
      return React.createElement("svg", {
        width: "22",
        height: "22",
        fill: "none",
        viewBox: "0 0 22 22"
      }, React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".4",
        d: "M11 21c5.514 0 10-4.486 10-10a9.935 9.935 0 00-2.927-7.073A9.936 9.936 0 0011 1C5.486 1 1 5.486 1 11a9.935 9.935 0 002.927 7.073A9.935 9.935 0 0011 21zm0-1.667a8.275 8.275 0 01-5.276-1.879l11.73-11.73A8.275 8.275 0 0119.334 11c0 4.595-3.74 8.333-8.334 8.333zm0-16.666c1.947 0 3.792.662 5.276 1.879l-11.73 11.73A8.275 8.275 0 012.666 11c0-4.595 3.74-8.333 8.334-8.333z"
      }));
    },
    edit: function () {
      var e,
        t,
        n = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []);
      return n.selectedStep, n.selectedStepIndex, n.selectedStepCondition, n.selectedLogicalStepIndex, n.errors, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings sequence"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(Xj, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.StopTheAutomation), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.StopTheAutomationDescription))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  },
  nA = n(29571);

function rA() {
  return React.createElement("svg", {
    width: "23",
    height: "22",
    fill: "none",
    viewBox: "0 0 21 21",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M14.888.028H8.929c-3.559 0-4.73 1.968-5.044 3.83C2.019 4.17.047 5.34.047 8.89v3.715c0 4.285 1.974 5.146 5.158 5.146l.346-.002c.02.004.065.033.064.02l1.117 1.485a1.748 1.748 0 002.275.57c.254-.136.47-.33.63-.569l1.154-1.504h.372c3.575 0 4.741-1.983 5.047-3.83 1.866-.314 3.837-1.483 3.837-5.031V5.174c0-3.366-1.784-5.146-5.16-5.146zm.038 12.577c.001.213-.01.426-.036.637-.18 2.126-1.365 3.115-3.727 3.115h-.372a1.45 1.45 0 00-1.153.576L8.519 18.42a.373.373 0 01-.67-.002l-1.12-1.491a1.54 1.54 0 00-1.152-.57h-.372c-2.776 0-3.761-.567-3.761-3.753V8.89c0-2.355.992-3.537 3.15-3.721.203-.023.407-.034.611-.032h5.959c2.602 0 3.762 1.157 3.762 3.753v3.715zm3.724-3.716c0 2.04-.744 3.199-2.327 3.591V8.89c0-3.367-1.784-5.146-5.16-5.146H5.33c.392-1.58 1.554-2.322 3.6-2.322h5.958c2.602 0 3.762 1.157 3.762 3.752V8.89zm-9.533 2.232a.925.925 0 01-.93.928h-.003a.934.934 0 01-.86-.574.927.927 0 01.68-1.266.933.933 0 011.113.912zm2.977 0a.924.924 0 01-.574.857.93.93 0 01-.356.071h-.004a.932.932 0 01-.91-1.111.928.928 0 01.732-.729.933.933 0 011.112.912zm-5.953 0a.925.925 0 01-.93.928h-.003a.934.934 0 01-.86-.574.927.927 0 01.68-1.266.933.933 0 011.113.912z"
  }));
}

function aA(e, t) {
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
      if ("string" == typeof e) return oA(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? oA(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function oA(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
