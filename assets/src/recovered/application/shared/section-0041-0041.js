// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function FE() {
  return React.createElement("svg", {
    width: "18",
    height: "22",
    fill: "none",
    viewBox: "0 0 18 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".2",
    d: "M9.243 3.964h2.37l-.898.884a.58.58 0 000 .828c.233.229.61.229.843 0l1.91-1.883a.58.58 0 00-.013-.842l-1.897-1.869a.603.603 0 00-.842 0 .58.58 0 00-.001.828l.895.882H9.218c-6.298 0-10.295 6.741-7.137 12.16.163.28.527.378.813.217a.58.58 0 00.22-.8C.397 9.706 3.875 3.937 9.244 3.964zm7.131 2.904a.601.601 0 00-.813-.217.58.58 0 00-.22.8c2.697 4.628-.707 10.406-6.111 10.406H6.843l.897-.884a.58.58 0 000-.83.603.603 0 00-.843.002l-1.91 1.883A.58.58 0 005 18.87l1.896 1.868c.233.23.61.23.843 0a.58.58 0 000-.828l-.894-.881h2.391c6.3 0 10.295-6.743 7.137-12.16z"
  }), React.createElement("path", {
    fill: "#2D3149",
    stroke: "#2D3149",
    strokeWidth: ".2",
    d: "M8.623 9.152h2.383a.591.591 0 00.595-.586.59.59 0 00-.595-.586H9.814v-.585a.59.59 0 00-.595-.586.59.59 0 00-.596.586v.585c-.986 0-1.787.789-1.787 1.758 0 .97.801 1.758 1.787 1.758h1.191c.329 0 .596.263.596.586a.59.59 0 01-.596.586H7.432a.59.59 0 00-.596.586.59.59 0 00.595.586h1.192v.586a.59.59 0 00.596.586.591.591 0 00.595-.586v-.586c.988 0 1.787-.786 1.787-1.758 0-.97-.802-1.758-1.787-1.758H8.623a.591.591 0 01-.596-.586c0-.323.267-.586.596-.586z"
  }));
}

var NE,
  DE = {
    key: "edd_recurring_update_subscription",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "edd",
    title: (0, b.__)("Update Subscription", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("Starts the automation when a new user registered in WordPress.", "mrm"),
    subtitle: function (e) {
      var t, n;
      if ("" === (null === (t = e.settings) || void 0 === t || null === (t = t.status_settings) || void 0 === t ? void 0 : t.status)) return null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.NotSetUpYet;
    },
    icon: function () {
      return React.createElement("svg", {
        width: "18",
        height: "22",
        fill: "none",
        viewBox: "0 0 18 22",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".2",
        d: "M9.243 3.964h2.37l-.898.884a.58.58 0 000 .828c.233.229.61.229.843 0l1.91-1.883a.58.58 0 00-.013-.842l-1.897-1.869a.603.603 0 00-.842 0 .58.58 0 00-.001.828l.895.882H9.218c-6.298 0-10.295 6.741-7.137 12.16.163.28.527.378.813.217a.58.58 0 00.22-.8C.397 9.706 3.875 3.937 9.244 3.964zm7.131 2.904a.601.601 0 00-.813-.217.58.58 0 00-.22.8c2.697 4.628-.707 10.406-6.111 10.406H6.843l.897-.884a.58.58 0 000-.83.603.603 0 00-.843.002l-1.91 1.883A.58.58 0 005 18.87l1.896 1.868c.233.23.61.23.843 0a.58.58 0 000-.828l-.894-.881h2.391c6.3 0 10.295-6.743 7.137-12.16z"
      }), React.createElement("path", {
        fill: "#2D3149",
        stroke: "#2D3149",
        strokeWidth: ".2",
        d: "M8.623 9.152h2.383a.591.591 0 00.595-.586.59.59 0 00-.595-.586H9.814v-.585a.59.59 0 00-.595-.586.59.59 0 00-.596.586v.585c-.986 0-1.787.789-1.787 1.758 0 .97.801 1.758 1.787 1.758h1.191c.329 0 .596.263.596.586a.59.59 0 01-.596.586H7.432a.59.59 0 00-.596.586.59.59 0 00.595.586h1.192v.586a.59.59 0 00.596.586.591.591 0 00.595-.586v-.586c.988 0 1.787-.786 1.787-1.758 0-.97-.802-1.758-1.787-1.758H8.623a.591.591 0 01-.596-.586c0-.323.267-.586.596-.586z"
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
        l = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        c = l.selectedStep,
        u = l.selectedStepIndex,
        s = l.selectedStepCondition,
        d = l.selectedLogicalStepIndex;
      return l.errors, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings order-status-changed"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(FE, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.EDDStatusChanged), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.EddStatusChangedDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: "",
        className: "inline-with-link"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.UpdateSubscriptionStatus), h().createElement(q.SelectControl, {
        options: [{
          value: "",
          label: null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectStatus
        }, {
          value: "active",
          label: (0, b.__)("Active", "mrm")
        }, {
          value: "pending",
          label: null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.Pending
        }, {
          value: "failing",
          label: (0, b.__)("Failing", "mrm")
        }, {
          value: "cancelled",
          label: (0, b.__)("Cancelled", "mrm")
        }, {
          value: "completed",
          label: (0, b.__)("Completed", "mrm")
        }, {
          value: "expired",
          label: (0, b.__)("Expired", "mrm")
        }],
        value: null !== (o = null === (i = c.settings) || void 0 === i || null === (i = i.status_settings) || void 0 === i ? void 0 : i.status) && void 0 !== o ? o : "",
        onChange: function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(u, s, d, "status_settings", "status", e);
        }
      })))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function WE() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    fill: "none",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "#2D3149",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M5.406 6.59a5.593 5.593 0 1111.187 0 5.593 5.593 0 01-11.187 0z"
  }), React.createElement("path", {
    stroke: "#2D3149",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M14.06 11.474c4.027 1.293 6.94 5.068 6.94 9.523H1c0-4.535 3.019-8.365 7.156-9.59"
  }), React.createElement("path", {
    stroke: "#2D3149",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M11 12.463l1.694 4.268L11 18.454l-1.695-1.723L11 12.463zm4.281 5.567h1.822"
  }));
}

var zE,
  BE = {
    key: "tutor_after_approved_instructor",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-tutor-lms",
    title: null === (NE = window) || void 0 === NE || null === (NE = NE.MRM_Vars) || void 0 === NE || null === (NE = NE.mint_trans) || void 0 === NE ? void 0 : NE.InstructorApproved,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("", "mrm"),
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: function () {
      return React.createElement("svg", {
        width: "22",
        height: "22",
        fill: "none",
        viewBox: "0 0 22 22",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        stroke: "#2D3149",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.5",
        d: "M5.406 6.59a5.593 5.593 0 1111.187 0 5.593 5.593 0 01-11.187 0z"
      }), React.createElement("path", {
        stroke: "#2D3149",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.5",
        d: "M14.06 11.474c4.027 1.293 6.94 5.068 6.94 9.523H1c0-4.535 3.019-8.365 7.156-9.59"
      }), React.createElement("path", {
        stroke: "#2D3149",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.5",
        d: "M11 12.463l1.694 4.268L11 18.454l-1.695-1.723L11 12.463zm4.281 5.567h1.822"
      }));
    },
    edit: function () {
      var e, t;
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings after-approved-instructor"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(WE, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.InstructorApproved), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.InstructorApprovedToolTip)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      })));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function LE() {
  return React.createElement("svg", {
    width: "18",
    height: "20",
    fill: "none",
    viewBox: "0 0 18 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M8.447 19.778h5.712a2.966 2.966 0 002.963-2.962V3.184A2.965 2.965 0 0014.159.222H8.447a2.965 2.965 0 00-2.963 2.962v2.441a.781.781 0 101.563 0v-2.44a1.4 1.4 0 011.4-1.4h5.712a1.4 1.4 0 011.4 1.4v13.63c0 .772-.628 1.4-1.4 1.4H8.447c-.772 0-1.4-.628-1.4-1.4v-2.44a.781.781 0 10-1.563 0v2.44a2.966 2.966 0 002.963 2.963z"
  }), React.createElement("path", {
    fill: "#2D3149",
    d: "M9.316 12.425l2.321-1.808a.782.782 0 000-1.233L9.316 7.576a.78.78 0 10-.96 1.232l.527.41H1.648a.781.781 0 100 1.563h7.235l-.527.41a.78.78 0 00-.136 1.097.781.781 0 001.096.137z"
  }));
}

var VE,
  HE = {
    key: "tutor_after_enrolled",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-tutor-lms",
    title: null === (zE = window) || void 0 === zE || null === (zE = zE.MRM_Vars) || void 0 === zE || null === (zE = zE.mint_trans) || void 0 === zE ? void 0 : zE.AfterCourseEnrollment,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("", "mrm"),
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: function () {
      return React.createElement("svg", {
        width: "18",
        height: "20",
        fill: "none",
        viewBox: "0 0 18 20",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        d: "M8.447 19.778h5.712a2.966 2.966 0 002.963-2.962V3.184A2.965 2.965 0 0014.159.222H8.447a2.965 2.965 0 00-2.963 2.962v2.441a.781.781 0 101.563 0v-2.44a1.4 1.4 0 011.4-1.4h5.712a1.4 1.4 0 011.4 1.4v13.63c0 .772-.628 1.4-1.4 1.4H8.447c-.772 0-1.4-.628-1.4-1.4v-2.44a.781.781 0 10-1.563 0v2.44a2.966 2.966 0 002.963 2.963z"
      }), React.createElement("path", {
        fill: "#2D3149",
        d: "M9.316 12.425l2.321-1.808a.782.782 0 000-1.233L9.316 7.576a.78.78 0 10-.96 1.232l.527.41H1.648a.781.781 0 100 1.563h7.235l-.527.41a.78.78 0 00-.136 1.097.781.781 0 001.096.137z"
      }));
    },
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i = null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.tutor_courses,
        l = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        c = l.selectedStep,
        u = l.selectedStepIndex,
        s = l.selectedStepCondition,
        d = l.selectedLogicalStepIndex;
      return l.errors, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings tutor-after-enrolled"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(LE, null), null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.AfterCourseEnrollment), h().createElement("p", {
        className: "sort-description"
      }, (0, b.__)("When a student enrolls in your course, trigger this automation.", "mrm"))), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.SelectCourseS, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectCourseTooltip))), h().createElement(Jt.A, {
        cacheOptions: !0,
        isMulti: !0,
        value: null !== (a = null === (o = c.settings) || void 0 === o || null === (o = o.tutor_lms_settings) || void 0 === o ? void 0 : o.courses) && void 0 !== a ? a : "",
        defaultOptions: !0,
        loadOptions: function (e, t) {
          t(i.filter(function (e) {
            return "select course(s)" !== (null == e ? void 0 : e.label.toLowerCase());
          }).filter(function (t) {
            return null == t ? void 0 : t.label.toLowerCase().includes(e.toLowerCase());
          }));
        },
        onChange: function (e) {
          return function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(u, s, d, "tutor_lms_settings", "courses", e);
          }(e);
        }
      })))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function GE() {
  return React.createElement("svg", {
    width: "18",
    height: "20",
    fill: "none",
    viewBox: "0 0 18 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#2D3149",
    d: "M12.766 8.594a.781.781 0 00-.782-.781H3.938a.781.781 0 100 1.562h8.046c.432 0 .782-.35.782-.781zm-8.828 2.344a.781.781 0 000 1.562h4.887a.781.781 0 100-1.563H3.938z"
  }), React.createElement("path", {
    fill: "#2D3149",
    d: "M5.777 18.438H3.164a1.564 1.564 0 01-1.562-1.563V3.125c0-.862.7-1.563 1.562-1.563h9.605c.862 0 1.563.701 1.563 1.563V7.93a.781.781 0 001.562 0V3.125A3.129 3.129 0 0012.77 0H3.164A3.129 3.129 0 00.04 3.125v13.75A3.129 3.129 0 003.164 20h2.613a.781.781 0 100-1.563z"
  }), React.createElement("path", {
    fill: "#2D3149",
    d: "M17.274 11.311a2.346 2.346 0 00-3.314 0l-4.289 4.28a.781.781 0 00-.195.325l-.934 3.076a.781.781 0 00.956.98l3.153-.874a.781.781 0 00.343-.2l4.28-4.272c.914-.914.914-2.4 0-3.315zm-5.238 6.336l-1.586.44.464-1.529 2.894-2.887 1.105 1.105-2.877 2.871zm4.134-4.126l-.151.15-1.105-1.104.15-.15a.782.782 0 011.106 1.104zm-4.186-8.833H3.938a.781.781 0 100 1.562h8.046a.781.781 0 100-1.563z"
  }));
}

var UE,
  qE = {
    key: "tutor_after_student_signup",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-tutor-lms",
    title: null === (VE = window) || void 0 === VE || null === (VE = VE.MRM_Vars) || void 0 === VE || null === (VE = VE.mint_trans) || void 0 === VE ? void 0 : VE.StudentRegistration,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("", "mrm"),
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: function () {
      return React.createElement("svg", {
        width: "18",
        height: "20",
        fill: "none",
        viewBox: "0 0 18 20",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        fill: "#2D3149",
        d: "M12.766 8.594a.781.781 0 00-.782-.781H3.938a.781.781 0 100 1.562h8.046c.432 0 .782-.35.782-.781zm-8.828 2.344a.781.781 0 000 1.562h4.887a.781.781 0 100-1.563H3.938z"
      }), React.createElement("path", {
        fill: "#2D3149",
        d: "M5.777 18.438H3.164a1.564 1.564 0 01-1.562-1.563V3.125c0-.862.7-1.563 1.562-1.563h9.605c.862 0 1.563.701 1.563 1.563V7.93a.781.781 0 001.562 0V3.125A3.129 3.129 0 0012.77 0H3.164A3.129 3.129 0 00.04 3.125v13.75A3.129 3.129 0 003.164 20h2.613a.781.781 0 100-1.563z"
      }), React.createElement("path", {
        fill: "#2D3149",
        d: "M17.274 11.311a2.346 2.346 0 00-3.314 0l-4.289 4.28a.781.781 0 00-.195.325l-.934 3.076a.781.781 0 00.956.98l3.153-.874a.781.781 0 00.343-.2l4.28-4.272c.914-.914.914-2.4 0-3.315zm-5.238 6.336l-1.586.44.464-1.529 2.894-2.887 1.105 1.105-2.877 2.871zm4.134-4.126l-.151.15-1.105-1.104.15-.15a.782.782 0 011.106 1.104zm-4.186-8.833H3.938a.781.781 0 100 1.562h8.046a.781.781 0 100-1.563z"
      }));
    },
    edit: function () {
      var e, t;
      return h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings after-student-signup"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(GE, null), null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e || null === (e = e.mint_trans) || void 0 === e ? void 0 : e.StudentRegistration), h().createElement("p", {
        className: "sort-description"
      }, null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.StudentRegistrationDes)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      })));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function YE() {
  return React.createElement("svg", {
    width: "23",
    height: "20",
    viewBox: "0 0 23 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.945675 8.26822C0.340186 7.9387 0 7.36178 0 6.75854C0 6.15425 0.340186 5.57733 0.945675 5.24886L9.83972 0.411371C10.8496 -0.137124 12.1504 -0.137124 13.1603 0.411371L22.0543 5.24886C22.6598 5.57733 23 6.15425 23 6.75854C23 7.36178 22.6598 7.9387 22.0543 8.26822L13.1603 13.1047C12.1504 13.6542 10.8496 13.6542 9.83972 13.1047L0.945675 8.26822ZM1.72126 6.88593L10.6153 11.7224C11.1534 12.015 11.8466 12.015 12.3847 11.7224L21.2787 6.88593C21.3376 6.85434 21.3953 6.81644 21.3953 6.75854C21.3953 6.69959 21.3376 6.66274 21.2787 6.6301L12.3847 1.79366C11.8466 1.50099 11.1534 1.50099 10.6153 1.79366L1.72126 6.6301C1.66242 6.66274 1.60465 6.69959 1.60465 6.75854C1.60465 6.81644 1.66242 6.85434 1.72126 6.88593Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.1877 9.2095C18.1877 8.77365 18.5471 8.41992 18.99 8.41992C19.4329 8.41992 19.7923 8.77365 19.7923 9.2095V13.947C19.7923 16.1273 17.9962 17.8949 15.7807 17.8949H7.22257C5.00708 17.8949 3.21094 16.1273 3.21094 13.947V9.2095C3.21094 8.77365 3.57038 8.41992 4.01326 8.41992C4.45615 8.41992 4.81559 8.77365 4.81559 9.2095V13.947C4.81559 15.2556 5.89284 16.3157 7.22257 16.3157H15.7807C17.1104 16.3157 18.1877 15.2556 18.1877 13.947V9.2095Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.9304 7.66174C10.617 7.35433 10.617 6.85321 10.9304 6.5458C11.2428 6.23734 11.752 6.23734 12.0643 6.5458L15.8085 10.2305C15.9594 10.3779 16.0439 10.579 16.0439 10.7885V19.2107C16.0439 19.6465 15.6844 20.0002 15.2416 20.0002C14.7987 20.0002 14.4392 19.6465 14.4392 19.2107V11.1159L10.9304 7.66174Z",
    fill: "#2D3149"
  }));
}

var QE,
  ZE = {
    key: "tutor_complete_course",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-tutor-lms",
    title: (0, b.__)("Completes a Course", "mrm"),
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: null === (UE = window) || void 0 === UE || null === (UE = UE.MRM_Vars) || void 0 === UE || null === (UE = UE.mint_trans) || void 0 === UE ? void 0 : UE.CompleteACourseDescription,
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: YE,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i,
        l = (null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.tutor_courses) || [],
        c = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        u = c.selectedStep,
        s = c.selectedStepIndex,
        d = c.selectedStepCondition,
        m = c.selectedLogicalStepIndex;
      return c.errors, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings tutor-after-enrolled tutor-completes-course"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement(YE, null), null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.CompletesACourse), h().createElement("p", {
        className: "sort-description"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.CompleteACourseDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectCourseS, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.SelectCourseTooltip))), h().createElement(Jt.A, {
        cacheOptions: !0,
        isMulti: !0,
        value: null !== (o = null === (i = u.settings) || void 0 === i || null === (i = i.tutor_lms_settings) || void 0 === i ? void 0 : i.courses) && void 0 !== o ? o : "",
        defaultOptions: !0,
        loadOptions: function (e, t) {
          var n = null == l ? void 0 : l.filter(function (e) {
            return "select" !== (null == e ? void 0 : e.label.toLowerCase());
          });
          t(null == n ? void 0 : n.filter(function (t) {
            return null == t ? void 0 : t.label.toLowerCase().includes(e.toLowerCase());
          }));
        },
        onChange: function (e) {
          return function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(s, d, m, "tutor_lms_settings", "courses", e);
          }(e);
        }
      })))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };

function $E() {
  return React.createElement("svg", {
    width: "18",
    height: "20",
    viewBox: "0 0 18 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.57943 5.996C4.30686 5.72343 4.30686 5.28154 4.57943 5.00896C4.85108 4.73732 5.2939 4.73732 5.56554 5.00896L6.31257 5.75599L8.3006 3.76888C8.57225 3.49631 9.01506 3.49631 9.28671 3.76888C9.55929 4.04146 9.55929 4.48335 9.28671 4.75592L6.80655 7.23608C6.53398 7.50866 6.09209 7.50866 5.81951 7.23608L4.57943 5.996Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.60397 11.6279C4.21883 11.6279 3.90625 11.3153 3.90625 10.9301C3.90625 10.545 4.21883 10.2324 4.60397 10.2324H10.5848C10.97 10.2324 11.2825 10.545 11.2825 10.9301C11.2825 11.3153 10.97 11.6279 10.5848 11.6279H4.60397Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.60397 15.3486C4.21883 15.3486 3.90625 15.036 3.90625 14.6508C3.90625 14.2657 4.21883 13.9531 4.60397 13.9531H12.9766C13.3617 13.9531 13.6743 14.2657 13.6743 14.6508C13.6743 15.036 13.3617 15.3486 12.9766 15.3486H4.60397Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.3005 20.0003H3.20674C2.52856 20.0003 1.87735 19.7305 1.39732 19.2514C0.918222 18.7714 0.648438 18.1202 0.648438 17.442V2.55733C0.648438 1.87914 0.918222 1.22794 1.39732 0.747909C1.87735 0.268808 2.52856 -0.000976562 3.20674 -0.000976562H12.0985C12.5571 -0.000976562 12.9943 0.192524 13.3032 0.532081L17.4356 5.07749C17.7081 5.37797 17.8588 5.76777 17.8588 6.17337V17.442C17.8588 18.1202 17.5891 18.7714 17.11 19.2514C16.6299 19.7305 15.9787 20.0003 15.3005 20.0003ZM15.3005 18.6049C15.6094 18.6049 15.9043 18.4821 16.1229 18.2644C16.3406 18.0458 16.4634 17.7509 16.4634 17.442V6.17337C16.4634 6.11476 16.442 6.05895 16.4029 6.01615L12.2706 1.47075C12.2259 1.42237 12.1636 1.39446 12.0985 1.39446H3.20674C2.89788 1.39446 2.60298 1.51726 2.38436 1.73495C2.16667 1.95357 2.04388 2.24847 2.04388 2.55733V17.442C2.04388 17.7509 2.16667 18.0458 2.38436 18.2644C2.60298 18.4821 2.89788 18.6049 3.20674 18.6049H15.3005Z",
    fill: "#2D3149"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.8125 1.16256C11.8125 0.777422 12.1251 0.464844 12.5102 0.464844C12.8954 0.464844 13.2079 0.777422 13.2079 1.16256V4.88373C13.2079 5.01211 13.3121 5.1163 13.4405 5.1163H16.6965C17.0817 5.1163 17.3943 5.42888 17.3943 5.81402C17.3943 6.19917 17.0817 6.51174 16.6965 6.51174H13.4405C12.5409 6.51174 11.8125 5.78239 11.8125 4.88373V1.16256Z",
    fill: "#2D3149"
  }));
}

var KE,
  JE = {
    key: "tutor_complete_lesson",
    group: "triggers",
    type: "trigger",
    package: "pro",
    category: "mint-tutor-lms",
    title: null === (QE = window) || void 0 === QE || null === (QE = QE.MRM_Vars) || void 0 === QE || null === (QE = QE.mint_trans) || void 0 === QE ? void 0 : QE.CompletesALesson,
    foreground: "#2271b1",
    background: "#f0f6fc",
    description: (0, b.__)("This automation will start a student completes a lesson", "mrm"),
    subtitle: function () {
      return (0, b._x)("", "noun", "mrm");
    },
    icon: $E,
    edit: function () {
      var e,
        t,
        n,
        r,
        a,
        o,
        i,
        l = (null === (e = window) || void 0 === e || null === (e = e.MRM_Vars) || void 0 === e ? void 0 : e.tutor_lessons) || [],
        c = (0, y.useSelect)(function (e) {
          return {
            selectedStep: e(Lf).getSelectedStep(),
            selectedStepIndex: e(Lf).getSelectedStepIndex(),
            selectedStepCondition: e(Lf).getSelectedStepCondition(),
            selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
            errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
          };
        }, []),
        u = c.selectedStep,
        s = c.selectedStepIndex,
        d = c.selectedStepCondition,
        m = c.selectedLogicalStepIndex;
      return c.errors, h().createElement(q.PanelBody, {
        opened: !0
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings tutor-after-enrolled tutor-completes-lesson"
      }, h().createElement("div", {
        className: "mintmrm-automation_step-settings-header"
      }, h().createElement("h4", null, h().createElement($E, null), null === (t = window) || void 0 === t || null === (t = t.MRM_Vars) || void 0 === t || null === (t = t.mint_trans) || void 0 === t ? void 0 : t.CompletesALesson), h().createElement("p", {
        className: "sort-description"
      }, null === (n = window) || void 0 === n || null === (n = n.MRM_Vars) || void 0 === n || null === (n = n.mint_trans) || void 0 === n ? void 0 : n.CompletesALessonDescription)), h().createElement("div", {
        className: "mintmrm-automation_step-settings-body"
      }, h().createElement("div", {
        className: "form-group single-settings"
      }, h().createElement("label", {
        htmlFor: ""
      }, null === (r = window) || void 0 === r || null === (r = r.MRM_Vars) || void 0 === r || null === (r = r.mint_trans) || void 0 === r ? void 0 : r.SelectLessonS, h().createElement("span", {
        className: "mintmrm-tooltip"
      }, h().createElement(hy, null), h().createElement("p", null, null === (a = window) || void 0 === a || null === (a = a.MRM_Vars) || void 0 === a || null === (a = a.mint_trans) || void 0 === a ? void 0 : a.SelectLessonTooltip))), h().createElement(Jt.A, {
        cacheOptions: !0,
        isMulti: !0,
        value: null !== (o = null === (i = u.settings) || void 0 === i || null === (i = i.tutor_lms_settings) || void 0 === i ? void 0 : i.lessons) && void 0 !== o ? o : "",
        defaultOptions: !0,
        loadOptions: function (e, t) {
          var n = null == l ? void 0 : l.filter(function (e) {
            return "select" !== (null == e ? void 0 : e.label.toLowerCase());
          });
          t(null == n ? void 0 : n.filter(function (t) {
            return null == t ? void 0 : t.label.toLowerCase().includes(e.toLowerCase());
          }));
        },
        onChange: function (e) {
          return function (e) {
            (0, y.dispatch)(Lf).updateStepArgs(s, d, m, "tutor_lms_settings", "lessons", e);
          }(e);
        }
      })))));
    },
    help: {
      docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
      showVideo: !1
    }
  };
