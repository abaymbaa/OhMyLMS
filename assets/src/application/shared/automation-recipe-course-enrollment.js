// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var kN = {
  key: "lms_course_enrollment",
  group: "triggers",
  type: "trigger",
  package: "free",
  category: "ohmylms",
  category_label: "OhMyLMS",
  title: (0, b.__)("Course Enrollment", "ohmylms"),
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("This trigger will start the automation when a course is enrolled by a student.", "ohmylms"),
  subtitle: function (e) {
    return (0, b.__)("", "ohmylms");
  },
  icon: ON,
  edit: function (e) {
    var t,
      n,
      r = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      a = r.selectedStep,
      o = r.selectedStepIndex,
      i = r.selectedStepCondition,
      l = r.selectedLogicalStepIndex,
      c = (r.errors, (0, y.useSelect)(function (e) {
        return e(T.default).getAutomationFor();
      }, [])),
      u = "course" === (null == c ? void 0 : c.automationFor) ? [{
        label: null == c ? void 0 : c.contentName,
        value: null == c ? void 0 : c.contentId
      }] : [];
    return (0, g.useEffect)(function () {
      if ("course" === (null == c ? void 0 : c.automationFor)) {
        var e = [{
          label: null == c ? void 0 : c.contentName,
          value: null == c ? void 0 : c.contentId
        }];
        (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "ohmylms_settings", "courses", e);
      }
    }, [c]), React.createElement(React.Fragment, null, React.createElement(q.PanelBody, {
      opened: !0
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings wp-user-login"
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, React.createElement("h4", null, React.createElement(ON, null), (0, b.__)("Course Enrollment", "ohmylms")), React.createElement("p", {
      className: "sort-description"
    }, (0, b.__)("This automation will start when a student enrolls in a course.", "ohmylms"))), React.createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, React.createElement("div", {
      className: "form-group single-settings"
    }, React.createElement("label", {
      htmlFor: ""
    }, (0, b.__)("Select course(s)", "ohmylms"), React.createElement("span", {
      className: "mintmrm-tooltip"
    }, React.createElement(hy, null), React.createElement("p", null, (0, b.__)("Leave it blank to trigger the automation for any course.", "ohmylms")))), React.createElement(Jt.A, {
      cacheOptions: !0,
      isMulti: !0,
      value: null !== (t = null === (n = a.settings) || void 0 === n || null === (n = n.ohmylms_settings) || void 0 === n ? void 0 : n.courses) && void 0 !== t ? t : "",
      defaultOptions: !0,
      loadOptions: function (e, t) {
        var n = null == u ? void 0 : u.filter(function (e) {
          return "select" !== (null == e ? void 0 : e.label.toLowerCase());
        });
        t(null == n ? void 0 : n.filter(function (t) {
          return null == t ? void 0 : t.label.toLowerCase().includes(e.toLowerCase());
        }));
      },
      onChange: function (e) {
        return function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "ohmylms_settings", "courses", e);
        }(e);
      },
      isDisabled: "course" === (null == c ? void 0 : c.automationFor)
    }))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function jN() {
  return React.createElement("svg", {
    width: "18",
    height: "22",
    fill: "none",
    viewBox: "0 0 18 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "#7A8B9A",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M11 1H3a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7l-6-6z"
  }), React.createElement("path", {
    stroke: "#7A8B9A",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M11 1v6h6"
  }), React.createElement("path", {
    fill: "#000",
    stroke: "#7A8B9A",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".7",
    d: "M7.667 17a.333.333 0 100-.667.333.333 0 000 .667zm3.666 0a.333.333 0 100-.667.333.333 0 000 .667z"
  }), React.createElement("path", {
    stroke: "#7A8B9A",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2",
    d: "M5 10h1.333l.894 4.463a.667.667 0 00.666.537h3.24a.667.667 0 00.667-.537l.533-2.796H6.667"
  }));
}

var AN = {
  key: "lms_new_course_order",
  group: "triggers",
  type: "trigger",
  package: "free",
  category: "ohmylms",
  category_label: "OhMyLMS",
  title: (0, b.__)("New Course Order", "ohmylms"),
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("This trigger will start the automation when a new course order is placed by a student.", "ohmylms"),
  subtitle: function (e) {
    return (0, b.__)("", "ohmylms");
  },
  icon: jN,
  edit: function (e) {
    var t,
      n,
      r = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      a = r.selectedStep,
      o = r.selectedStepIndex,
      i = r.selectedStepCondition,
      l = r.selectedLogicalStepIndex,
      c = (r.errors, (0, y.useSelect)(function (e) {
        return e(T.default).getAutomationFor();
      }, [])),
      u = "course" === (null == c ? void 0 : c.automationFor) ? [{
        label: null == c ? void 0 : c.contentName,
        value: null == c ? void 0 : c.contentId
      }] : [];
    return (0, g.useEffect)(function () {
      if ("course" === (null == c ? void 0 : c.automationFor)) {
        var e = [{
          label: null == c ? void 0 : c.contentName,
          value: null == c ? void 0 : c.contentId
        }];
        (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "ohmylms_settings", "courses", e);
      }
    }, [c]), React.createElement(React.Fragment, null, React.createElement(q.PanelBody, {
      opened: !0
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings wp-user-login"
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, React.createElement("h4", null, React.createElement(jN, null), (0, b.__)("New Course Order", "ohmylms")), React.createElement("p", {
      className: "sort-description"
    }, (0, b.__)("This trigger will start the automation when a new course order is placed by a student.", "ohmylms"))), React.createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, React.createElement("div", {
      className: "form-group single-settings"
    }, React.createElement("label", {
      htmlFor: ""
    }, (0, b.__)("Select course(s)", "ohmylms"), React.createElement("span", {
      className: "mintmrm-tooltip"
    }, React.createElement(hy, null), React.createElement("p", null, (0, b.__)("Leave it blank to trigger the automation for any course.", "ohmylms")))), React.createElement(Jt.A, {
      cacheOptions: !0,
      isMulti: !0,
      value: null !== (t = null === (n = a.settings) || void 0 === n || null === (n = n.ohmylms_settings) || void 0 === n ? void 0 : n.courses) && void 0 !== t ? t : "",
      defaultOptions: !0,
      loadOptions: function (e, t) {
        var n = null == u ? void 0 : u.filter(function (e) {
          return "select" !== (null == e ? void 0 : e.label.toLowerCase());
        });
        t(null == n ? void 0 : n.filter(function (t) {
          return null == t ? void 0 : t.label.toLowerCase().includes(e.toLowerCase());
        }));
      },
      onChange: function (e) {
        return function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "ohmylms_settings", "courses", e);
        }(e);
      },
      isDisabled: "course" === (null == c ? void 0 : c.automationFor)
    }))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function MN() {
  return React.createElement("svg", {
    className: "ohmylms-course-enrollment-automation-icon",
    width: "24",
    height: "25",
    fill: "none",
    viewBox: "0 0 24 25",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    fill: "#7A8B9A",
    fillRule: "evenodd",
    d: "M1.792 5.261a1.379 1.379 0 000 2.495l1.973.932v5.41c0 1.023.333 2.166 1.303 2.87 1.223.883 3.45 1.96 6.983 1.96 3.533 0 5.754-1.084 6.983-1.96.97-.701 1.302-1.835 1.302-2.87v-5.41l1.38-.653v6.058a.69.69 0 001.38 0v-7.59a1.38 1.38 0 00-.79-1.247L14.414 1.53a5.52 5.52 0 00-4.72 0L1.8 5.256l-.008.005zm3.353 8.832v-4.76l4.54 2.152a5.52 5.52 0 004.72 0l4.54-2.153v4.761c0 .768-.248 1.394-.731 1.74-1 .72-2.94 1.71-6.169 1.71-3.229 0-5.175-.982-6.168-1.71-.482-.349-.732-.98-.732-1.74zM10.28 2.777a4.126 4.126 0 013.533 0l7.893 3.726-7.893 3.726a4.127 4.127 0 01-3.533 0L2.385 6.503l7.894-3.726z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "#7A8B9A",
    d: "M1.792 5.261l.042.09a.1.1 0 00.013-.006l-.055-.084zM1 6.51h.1H1zm.792 1.247l.043-.09-.043.09zm1.973.932h.1a.1.1 0 00-.057-.09l-.043.09zm1.303 8.28l-.059.08v.001l.059-.081zm13.966 0l.058.081-.058-.081zm1.302-8.28l-.042-.09a.1.1 0 00-.058.09h.1zm1.38-.653h.1a.1.1 0 00-.142-.09l.042.09zm1.38-1.532h-.1.1zm-.79-1.247l.044-.09-.043.09zM14.414 1.53l-.042.09.042-.09zm-4.72 0l.043.09-.042-.09zM1.8 5.256l-.043-.09a.1.1 0 00-.012.007l.055.083zm3.345 4.076l.043-.09a.1.1 0 00-.143.09h.1zm4.54 2.153l-.042.09.042-.09zm2.36.53v.1-.1zm2.36-.53l.043.09-.043-.09zm4.54-2.153h.1a.1.1 0 00-.143-.09l.043.09zm-.731 6.5l-.058-.081.058.081zm-12.337 0l.059-.08-.06.08zm4.402-13.055l.043.09-.043-.09zm3.533 0l-.043.09.043-.09zm7.893 3.726l.043.09a.1.1 0 000-.18l-.043.09zm-7.893 3.726l-.043-.09.043.09zm-3.533 0l.043-.09-.043.09zM2.385 6.503l-.042-.09a.1.1 0 000 .18l.042-.09zM1.75 5.171a1.49 1.49 0 00-.619.545l.17.108c.13-.205.315-.369.534-.472L1.75 5.17zm-.619.545c-.15.237-.23.512-.23.793h.2c0-.243.07-.48.2-.685l-.17-.108zM.9 6.51c0 .28.08.555.23.792l.17-.107c-.13-.205-.2-.442-.2-.685H.9zm.23.792c.15.237.365.426.62.546l.084-.181a1.279 1.279 0 01-.535-.472l-.169.107zm.62.546l1.973.931.085-.18-1.973-.932-.086.18zm1.915.84v5.41h.2v-5.41h-.2zm0 5.41c0 1.043.339 2.222 1.344 2.952l.118-.162c-.935-.678-1.262-1.784-1.262-2.79h-.2zM5.01 17.05c1.24.895 3.487 1.979 7.042 1.979v-.2c-3.511 0-5.718-1.07-6.924-1.941l-.118.162zm7.042 1.979c3.555 0 5.797-1.091 7.04-1.979l-.116-.162c-1.212.864-3.414 1.94-6.924 1.94v.2zm7.041-1.979c1.006-.727 1.344-1.898 1.344-2.951h-.2c0 1.016-.326 2.113-1.261 2.789l.117.162zm1.344-2.951v-5.41h-.2v5.41h.2zm-.057-5.32l1.38-.652-.085-.181-1.38.653.085.18zm1.237-.743v6.058h.2V8.035h-.2zm0 6.058c0 .21.084.41.232.559l.141-.141a.59.59 0 01-.173-.418h-.2zm.232.559a.79.79 0 00.558.231v-.2a.59.59 0 01-.417-.172l-.141.141zm.558.231a.79.79 0 00.559-.231l-.142-.141a.59.59 0 01-.417.172v.2zm.559-.231a.79.79 0 00.231-.559h-.2a.59.59 0 01-.172.418l.14.141zm.231-.559v-7.59h-.2v7.59h.2zm0-7.59c0-.28-.08-.554-.229-.791l-.169.107c.13.204.198.442.198.684h.2zm-.229-.791a1.48 1.48 0 00-.617-.547l-.086.181c.22.104.404.268.534.473l.169-.107zm-.617-.547L14.456 1.44l-.085.181 7.893 3.726.086-.18zM14.456 1.44A5.62 5.62 0 0012.054.9v.2a5.42 5.42 0 012.317.52l.085-.18zM12.054.9a5.62 5.62 0 00-2.403.54l.085.18a5.42 5.42 0 012.317-.52V.9zm-2.403.54L1.757 5.164l.086.181L9.736 1.62l-.085-.18zM1.745 5.172l-.009.005.111.167.009-.006-.111-.166zm3.5 8.92v-4.76h-.2v4.76h.2zm-.143-4.67l4.54 2.152.086-.18-4.54-2.153-.086.18zm4.54 2.153a5.62 5.62 0 002.403.539v-.2a5.42 5.42 0 01-2.317-.52l-.085.18zm2.403.539a5.62 5.62 0 002.403-.54l-.086-.18a5.42 5.42 0 01-2.317.52v.2zm2.403-.54l4.54-2.152-.086-.181-4.54 2.153.086.18zm4.397-2.243v4.761h.2v-4.76h-.2zm0 4.761c0 .749-.242 1.338-.69 1.658l.117.163c.519-.37.773-1.034.773-1.82h-.2zm-.69 1.658c-.983.71-2.903 1.692-6.11 1.692v.2c3.252 0 5.212-.996 6.227-1.73l-.117-.162zm-6.11 1.692c-3.207 0-5.132-.975-6.11-1.692l-.117.162c1.01.74 2.976 1.73 6.227 1.73v-.2zm-6.11-1.692c-.446-.322-.69-.916-.69-1.658h-.2c0 .78.257 1.447.773 1.82l.117-.162zm4.387-12.883a4.026 4.026 0 011.723-.388v-.2a4.24 4.24 0 00-1.809.407l.086.18zm1.723-.388c.596 0 1.185.133 1.724.388l.085-.181a4.226 4.226 0 00-1.809-.407v.2zm1.724.388l7.894 3.726.085-.181-7.894-3.726-.085.18zm7.894 3.545l-7.894 3.726.085.18 7.894-3.725-.085-.181zm-7.894 3.726a4.026 4.026 0 01-1.724.388v.2c.626 0 1.244-.14 1.81-.407l-.086-.181zm-1.724.388a4.026 4.026 0 01-1.723-.388l-.086.18a4.227 4.227 0 001.81.408v-.2zm-1.723-.388L2.428 6.413l-.085.18 7.893 3.727.085-.181zM2.428 6.594l7.894-3.726-.086-.181-7.893 3.726.085.18z"
  }), React.createElement("path", {
    fill: "#fff",
    stroke: "#7A8B9A",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M15.72 24a5.52 5.52 0 100-11.04 5.52 5.52 0 000 11.04z"
  }), React.createElement("path", {
    stroke: "#7A8B9A",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M13.512 18.48h4.416"
  }));
}

var TN = {
  key: "lms_course_enrollment_cancel",
  group: "triggers",
  type: "trigger",
  package: "free",
  category: "ohmylms",
  category_label: "OhMyLMS",
  title: (0, b.__)("Enrollment Cancellation", "ohmylms"),
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("This trigger will start the automation when a course enrollment is cancelled by a student.", "ohmylms"),
  subtitle: function (e) {
    return (0, b.__)("", "ohmylms");
  },
  icon: MN,
  edit: function (e) {
    var t,
      n,
      r = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      a = r.selectedStep,
      o = r.selectedStepIndex,
      i = r.selectedStepCondition,
      l = r.selectedLogicalStepIndex,
      c = (r.errors, (0, y.useSelect)(function (e) {
        return e(T.default).getAutomationFor();
      }, [])),
      u = "course" === (null == c ? void 0 : c.automationFor) ? [{
        label: null == c ? void 0 : c.contentName,
        value: null == c ? void 0 : c.contentId
      }] : [];
    return (0, g.useEffect)(function () {
      if ("course" === (null == c ? void 0 : c.automationFor)) {
        var e = [{
          label: null == c ? void 0 : c.contentName,
          value: null == c ? void 0 : c.contentId
        }];
        (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "ohmylms_settings", "courses", e);
      }
    }, [c]), React.createElement(React.Fragment, null, React.createElement(q.PanelBody, {
      opened: !0
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings wp-user-login"
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, React.createElement("h4", null, React.createElement(MN, null), (0, b.__)("Course Enrollment Cancellation", "ohmylms")), React.createElement("p", {
      className: "sort-description"
    }, (0, b.__)("This automation will start when students cancel their enrollment.", "ohmylms"))), React.createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, React.createElement("div", {
      className: "form-group single-settings"
    }, React.createElement("label", {
      htmlFor: ""
    }, (0, b.__)("Select course(s)", "ohmylms"), React.createElement("span", {
      className: "mintmrm-tooltip"
    }, React.createElement(hy, null), React.createElement("p", null, (0, b.__)("Leave it blank to trigger the automation for any course.", "ohmylms")))), React.createElement(Jt.A, {
      cacheOptions: !0,
      isMulti: !0,
      value: null !== (t = null === (n = a.settings) || void 0 === n || null === (n = n.ohmylms_settings) || void 0 === n ? void 0 : n.courses) && void 0 !== t ? t : "",
      defaultOptions: !0,
      loadOptions: function (e, t) {
        var n = null == u ? void 0 : u.filter(function (e) {
          return "select" !== (null == e ? void 0 : e.label.toLowerCase());
        });
        t(null == n ? void 0 : n.filter(function (t) {
          return null == t ? void 0 : t.label.toLowerCase().includes(e.toLowerCase());
        }));
      },
      onChange: function (e) {
        return function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "ohmylms_settings", "courses", e);
        }(e);
      },
      isDisabled: "course" === (null == c ? void 0 : c.automationFor)
    }))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function IN() {
  return React.createElement("svg", {
    width: "16",
    height: "24",
    fill: "none",
    viewBox: "0 0 16 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "#7A8B9A",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M8 15A7 7 0 108 1a7 7 0 000 14z"
  }), React.createElement("path", {
    stroke: "#7A8B9A",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M4.21 13.89L3 23l5-3 5 3-1.21-9.12M11 6l-4.125 4L5 8.182"
  }));
}

var FN = {
  key: "lms_course_completion_rate",
  group: "triggers",
  type: "trigger",
  package: "free",
  category: "ohmylms",
  category_label: "OhMyLMS",
  title: (0, b.__)("Course Completion Rate", "ohmylms"),
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("This trigger will start the automation when a student reach a certain completion rate in a course.", "ohmylms"),
  subtitle: function (e) {
    return (0, b.__)("", "ohmylms");
  },
  icon: IN,
  edit: function (e) {
    var t,
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
      d = l.selectedLogicalStepIndex,
      m = (l.errors, (0, y.useSelect)(function (e) {
        return e(T.default).getAutomationFor();
      }, [])),
      p = "course" === (null == m ? void 0 : m.automationFor) ? [{
        label: null == m ? void 0 : m.contentName,
        value: null == m ? void 0 : m.contentId
      }] : [],
      f = [{
        value: "greater_than",
        label: (0, b.__)("Greater than", "ohmylms")
      }, {
        value: "less_than",
        label: (0, b.__)("Less than", "ohmylms")
      }, {
        value: "equal_to",
        label: (0, b.__)("Equal to", "ohmylms")
      }, {
        value: "greater_than_or_equal",
        label: (0, b.__)("Greater than or equal", "ohmylms")
      }, {
        value: "less_than_or_equal",
        label: (0, b.__)("Less than or equal", "ohmylms")
      }];
    return (0, g.useEffect)(function () {
      if ("course" === (null == m ? void 0 : m.automationFor)) {
        var e = [{
          label: null == m ? void 0 : m.contentName,
          value: null == m ? void 0 : m.contentId
        }];
        (0, y.dispatch)(Lf).updateStepArgs(u, s, d, "ohmylms_settings", "courses", e);
      }
    }, [m]), React.createElement(React.Fragment, null, React.createElement(q.PanelBody, {
      opened: !0
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings wp-user-login"
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, React.createElement("h4", null, React.createElement(IN, null), (0, b.__)("Course Completion Rate", "ohmylms")), React.createElement("p", {
      className: "sort-description"
    }, (0, b.__)("This trigger will start the automation when a student reach a certain completion rate in a course.", "ohmylms"))), React.createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, React.createElement("div", {
      className: "form-group single-settings"
    }, React.createElement("label", {
      htmlFor: ""
    }, (0, b.__)("Select course(s)", "ohmylms"), React.createElement("span", {
      className: "mintmrm-tooltip"
    }, React.createElement(hy, null), React.createElement("p", null, (0, b.__)("Leave it blank to trigger the automation for any course.", "ohmylms")))), React.createElement(Jt.A, {
      cacheOptions: !0,
      isMulti: !0,
      value: null !== (t = null === (n = c.settings) || void 0 === n || null === (n = n.ohmylms_settings) || void 0 === n ? void 0 : n.courses) && void 0 !== t ? t : "",
      defaultOptions: !0,
      loadOptions: function (e, t) {
        var n = null == p ? void 0 : p.filter(function (e) {
          return "select" !== (null == e ? void 0 : e.label.toLowerCase());
        });
        t(null == n ? void 0 : n.filter(function (t) {
          return null == t ? void 0 : t.label.toLowerCase().includes(e.toLowerCase());
        }));
      },
      onChange: function (e) {
        return function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(u, s, d, "ohmylms_settings", "courses", e);
        }(e);
      },
      isDisabled: "course" === (null == m ? void 0 : m.automationFor)
    })), React.createElement("div", {
      className: "form-group single-settings"
    }, React.createElement("label", {
      htmlFor: ""
    }, (0, b.__)("Completion rate", "ohmylms"), React.createElement("span", {
      className: "mintmrm-tooltip"
    }, React.createElement(hy, null), React.createElement("p", null, (0, b.__)("If nothing is selected, the automation will trigger when the course is completed.", "ohmylms")))), React.createElement("div", {
      className: "ohmylms-automation-completion-rate"
    }, React.createElement(yg.Ay, {
      className: "basic-single",
      classNamePrefix: "select",
      value: null !== (r = null === (a = c.settings) || void 0 === a || null === (a = a.ohmylms_settings) || void 0 === a ? void 0 : a.compare_with) && void 0 !== r ? r : "",
      isClearable: !1,
      isSearchable: !1,
      name: "color",
      options: f,
      onChange: function (e) {
        return function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(u, s, d, "ohmylms_settings", "compare_with", e);
        }(e);
      }
    }), React.createElement(wn.A, {
      min: "less_than" !== (null == c || null === (o = c.settings) || void 0 === o || null === (o = o.ohmylms_settings) || void 0 === o ? void 0 : o.compare_with) ? 0 : 1,
      max: 100,
      value: null == c || null === (i = c.settings) || void 0 === i || null === (i = i.ohmylms_settings) || void 0 === i ? void 0 : i.compare_with_value,
      onChange: function (e) {
        /^\d*\.?\d*$/.test(e) && function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(u, s, d, "ohmylms_settings", "compare_with_value", e);
        }(e);
      },
      suffix: "%"
    })))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function NN() {
  return React.createElement("svg", {
    width: "22",
    height: "18",
    fill: "none",
    viewBox: "0 0 22 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "#EC57AB",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M1 1h5.333A3.556 3.556 0 019.89 4.556V17a2.667 2.667 0 00-2.667-2.667H1V1zm6 7H4m1-3H4"
  }), React.createElement("path", {
    stroke: "#EC57AB",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M12.556 14.333A2.667 2.667 0 009.889 17V4.556A3.556 3.556 0 0113.445 1h5.333v8.889M21 11l-4.125 4L15 13.182"
  }));
}

var DN = {
  key: "lms_complete_lesson",
  group: "triggers",
  type: "trigger",
  package: "free",
  category: "ohmylms",
  category_label: "OhMyLMS",
  title: (0, b.__)("Complete Lesson", "ohmylms"),
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("This trigger will start the automation when a lesson is completed by a student.", "ohmylms"),
  subtitle: function (e) {
    return (0, b.__)("", "ohmylms");
  },
  icon: NN,
  edit: function (e) {
    var t,
      n,
      r = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      a = r.selectedStep,
      o = r.selectedStepIndex,
      i = r.selectedStepCondition,
      l = r.selectedLogicalStepIndex,
      c = (r.errors, (0, y.useSelect)(function (e) {
        return e(T.default).getAutomationFor();
      }, [])),
      u = "lesson" === (null == c ? void 0 : c.automationFor) ? [{
        label: null == c ? void 0 : c.contentName,
        value: null == c ? void 0 : c.contentId
      }] : [];
    return (0, g.useEffect)(function () {
      if ("lesson" === (null == c ? void 0 : c.automationFor)) {
        var e = [{
          label: null == c ? void 0 : c.contentName,
          value: null == c ? void 0 : c.contentId
        }];
        (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "ohmylms_settings", "lessons", e);
      }
    }, [c]), React.createElement(React.Fragment, null, React.createElement(q.PanelBody, {
      opened: !0
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings wp-user-login"
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, React.createElement("h4", null, React.createElement(NN, null), (0, b.__)("Complete Lesson", "ohmylms")), React.createElement("p", {
      className: "sort-description"
    }, (0, b.__)("This automation will start when a student complete the Lesson.", "ohmylms"))), React.createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, React.createElement("div", {
      className: "form-group single-settings"
    }, React.createElement("label", {
      htmlFor: ""
    }, (0, b.__)("Select Lesson(s)", "ohmylms")), React.createElement(Jt.A, {
      cacheOptions: !0,
      isMulti: !0,
      value: null !== (t = null === (n = a.settings) || void 0 === n || null === (n = n.ohmylms_settings) || void 0 === n ? void 0 : n.lessons) && void 0 !== t ? t : "",
      defaultOptions: !0,
      loadOptions: function (e, t) {
        var n = null == u ? void 0 : u.filter(function (e) {
          return "select" !== (null == e ? void 0 : e.label.toLowerCase());
        });
        t(null == n ? void 0 : n.filter(function (t) {
          return null == t ? void 0 : t.label.toLowerCase().includes(e.toLowerCase());
        }));
      },
      onChange: function (e) {
        return function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "ohmylms_settings", "lessons", e);
        }(e);
      },
      isDisabled: "lesson" === (null == c ? void 0 : c.automationFor)
    }))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function WN() {
  return React.createElement("svg", {
    fill: "none",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "#5D56EA",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M15.4 14.95V6.4L10 1H2.8A1.8 1.8 0 001 2.8v14.4A1.8 1.8 0 002.8 19H10"
  }), React.createElement("path", {
    stroke: "#5D56EA",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M10 1v5.4h5.4m-3.6 4.5H4.6m7.2 3.6H4.6m1.8-7.2H4.6M19 15l-4.125 4L13 17.182"
  }));
}
