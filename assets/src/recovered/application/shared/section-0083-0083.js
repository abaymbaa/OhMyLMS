// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var zN = {
  key: "lms_submit_assignment",
  group: "triggers",
  type: "trigger",
  package: "free",
  category: "ohmylms",
  category_label: "OhMyLMS",
  title: (0, b.__)("Submit Assignment", "ohmylms"),
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("This trigger will start the automation when a assignment is submitted by a student.", "ohmylms"),
  subtitle: function (e) {
    return (0, b.__)("", "ohmylms");
  },
  icon: WN,
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
      u = "assignment" === (null == c ? void 0 : c.automationFor) ? [{
        label: null == c ? void 0 : c.contentName,
        value: null == c ? void 0 : c.contentId
      }] : [];
    return (0, g.useEffect)(function () {
      if ("assignment" === (null == c ? void 0 : c.automationFor)) {
        var e = [{
          label: null == c ? void 0 : c.contentName,
          value: null == c ? void 0 : c.contentId
        }];
        (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "ohmylms_settings", "assignments", e);
      }
    }, [c]), React.createElement(React.Fragment, null, React.createElement(q.PanelBody, {
      opened: !0
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings wp-user-login"
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, React.createElement("h4", null, React.createElement(WN, null), (0, b.__)("Submit Assignment", "ohmylms")), React.createElement("p", {
      className: "sort-description"
    }, (0, b.__)("This automation will start when a student submitted an assignment.", "ohmylms"))), React.createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, React.createElement("div", {
      className: "form-group single-settings"
    }, React.createElement("label", {
      htmlFor: ""
    }, (0, b.__)("Select Assignment(s)", "ohmylms"), React.createElement("span", {
      className: "mintmrm-tooltip"
    }, React.createElement(hy, null), React.createElement("p", null, (0, b.__)("If no assignment is selected, this will apply to all assignments under the course.", "ohmylms")))), React.createElement(Jt.A, {
      cacheOptions: !0,
      isMulti: !0,
      value: null !== (t = null === (n = a.settings) || void 0 === n || null === (n = n.ohmylms_settings) || void 0 === n ? void 0 : n.assignments) && void 0 !== t ? t : "",
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
          (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "ohmylms_settings", "assignments", e);
        }(e);
      },
      isDisabled: "assignment" === (null == c ? void 0 : c.automationFor)
    }))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function BN() {
  return React.createElement("svg", {
    fill: "none",
    width: "33",
    height: "15",
    viewBox: "0 0 33 15",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "#CDCDCD",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.789",
    d: "M17.615 1.64L14.622 14"
  }), React.createElement("path", {
    stroke: "#78DB93",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.534",
    d: "M4.745 1h5.291l3.745 3.745v5.291l-3.745 3.745H4.745L1 10.036V4.745L4.745 1z"
  }), React.createElement("path", {
    stroke: "#78DB93",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.534",
    d: "M10.586 6.325L6.924 9.521 5.26 8.068"
  }), React.createElement("path", {
    stroke: "#FF4955",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.534",
    d: "M22.638 1h5.291l3.745 3.745v5.291l-3.744 3.745h-5.292l-3.745-3.745V4.745L22.638 1zM27.2 5.473l-3.833 3.835m0-3.835L27.2 9.308"
  }));
}

(0, b.__)("Review Completion", "ohmylms"), (0, b.__)("This trigger will start the automation when the assignment after review completion.", "ohmylms"), (0, b.__)("Assignment Start", "ohmylms"), (0, b.__)("This trigger will start the automation after assignment is start.", "ohmylms"), (0, b.__)("Submission Deadline", "ohmylms"), (0, b.__)("This trigger will start the automation after assignment submission deadline.", "ohmylms"), (0, b.__)("Assignment Achieved Mark", "ohmylms"), (0, b.__)("This trigger will start the automation on assignment mark is achieved.", "ohmylms");

var LN = {
  key: "lms_pass_fail_status_assignment",
  group: "triggers",
  type: "trigger",
  package: "free",
  category: "ohmylms",
  category_label: "OhMyLMS",
  title: (0, b.__)("Pass/Fail Status", "ohmylms"),
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("This trigger will start the automation on pass/fail the assignment.", "ohmylms"),
  subtitle: function (e) {
    return (0, b.__)("", "ohmylms");
  },
  icon: BN,
  edit: function (e) {
    var t,
      n,
      r,
      a,
      o = (0, y.useSelect)(function (e) {
        return {
          selectedStep: e(Lf).getSelectedStep(),
          selectedStepIndex: e(Lf).getSelectedStepIndex(),
          selectedStepCondition: e(Lf).getSelectedStepCondition(),
          selectedLogicalStepIndex: e(Lf).getSelectedLogicalStepIndex(),
          errors: e(Lf).getStepError(e(Lf).getSelectedStep().id)
        };
      }, []),
      i = o.selectedStep,
      l = o.selectedStepIndex,
      c = o.selectedStepCondition,
      u = o.selectedLogicalStepIndex,
      s = (o.errors, (0, y.useSelect)(function (e) {
        return e(T.default).getAutomationFor();
      }, [])),
      d = "assignment" === (null == s ? void 0 : s.automationFor) ? [{
        label: null == s ? void 0 : s.contentName,
        value: null == s ? void 0 : s.contentId
      }] : [];
    (0, g.useEffect)(function () {
      if ("assignment" === (null == s ? void 0 : s.automationFor)) {
        var e = [{
          label: null == s ? void 0 : s.contentName,
          value: null == s ? void 0 : s.contentId
        }];
        (0, y.dispatch)(Lf).updateStepArgs(l, c, u, "ohmylms_settings", "assignments", e);
      }
    }, [s]);
    var m = [{
      value: "pass",
      label: (0, b.__)("Pass", "ohmylms")
    }, {
      value: "fail",
      label: (0, b.__)("Fail", "ohmylms")
    }];
    return React.createElement(React.Fragment, null, React.createElement(q.PanelBody, {
      opened: !0
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings wp-user-login"
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, React.createElement("h4", null, React.createElement(BN, null), (0, b.__)("Pass/Fail Status", "ohmylms")), React.createElement("p", {
      className: "sort-description"
    }, (0, b.__)("This automation will start when the assignment pass/fail status is met.", "ohmylms"))), React.createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, React.createElement("div", {
      className: "form-group single-settings"
    }, React.createElement("label", {
      htmlFor: ""
    }, (0, b.__)("Select Assignment(s)", "ohmylms"), React.createElement("span", {
      className: "mintmrm-tooltip"
    }, React.createElement(hy, null), React.createElement("p", null, (0, b.__)("If no assignment is selected, this will apply to all assignments under the course.", "ohmylms")))), React.createElement(Jt.A, {
      cacheOptions: !0,
      isMulti: !0,
      value: null !== (t = null === (n = i.settings) || void 0 === n || null === (n = n.ohmylms_settings) || void 0 === n ? void 0 : n.assignments) && void 0 !== t ? t : "",
      defaultOptions: !0,
      loadOptions: function (e, t) {
        var n = null == d ? void 0 : d.filter(function (e) {
          return "select" !== (null == e ? void 0 : e.label.toLowerCase());
        });
        t(null == n ? void 0 : n.filter(function (t) {
          return null == t ? void 0 : t.label.toLowerCase().includes(e.toLowerCase());
        }));
      },
      onChange: function (e) {
        return function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(l, c, u, "ohmylms_settings", "assignments", e);
        }(e);
      },
      isDisabled: "assignment" === (null == s ? void 0 : s.automationFor)
    })), React.createElement("div", {
      className: "form-group single-settings"
    }, React.createElement("label", {
      htmlFor: ""
    }, (0, b.__)("Assignment Status", "ohmylms")), React.createElement(yg.Ay, {
      className: "basic-single",
      classNamePrefix: "select",
      value: null !== (r = null === (a = i.settings) || void 0 === a || null === (a = a.ohmylms_settings) || void 0 === a ? void 0 : a.compare_with) && void 0 !== r ? r : "",
      isClearable: !1,
      isSearchable: !1,
      name: "assignment-status",
      options: m,
      onChange: function (e) {
        return function (e) {
          (0, y.dispatch)(Lf).updateStepArgs(l, c, u, "ohmylms_settings", "compare_with", e);
        }(e);
      }
    }))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

function VN() {
  return React.createElement("svg", {
    fill: "none",
    width: "28",
    height: "21",
    viewBox: "0 0 28 21",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    stroke: "#47B8FF",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.8",
    d: "M14.146 16.024l2.817 2.817 9.39-9.39m-6.573.939a9.39 9.39 0 10-9.39 9.39"
  }), React.createElement("path", {
    stroke: "#47B8FF",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.8",
    d: "M7.657 7.573a2.817 2.817 0 015.475.94c0 1.877-2.817 2.816-2.817 2.816m.075 3.756h.01"
  }));
}

var HN = {
  key: "lms_submit_quiz",
  group: "triggers",
  type: "trigger",
  package: "free",
  category: "ohmylms",
  category_label: "OhMyLMS",
  title: (0, b.__)("Quiz Submit", "ohmylms"),
  foreground: "#2271b1",
  background: "#f0f6fc",
  description: (0, b.__)("This trigger will start the automation when a quiz is submitted.", "ohmylms"),
  subtitle: function (e) {
    return (0, b.__)("", "ohmylms");
  },
  icon: VN,
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
      u = "quiz" === (null == c ? void 0 : c.automationFor) ? [{
        label: null == c ? void 0 : c.contentName,
        value: null == c ? void 0 : c.contentId
      }] : [];
    return (0, g.useEffect)(function () {
      if ("quiz" === (null == c ? void 0 : c.automationFor)) {
        var e = [{
          label: null == c ? void 0 : c.contentName,
          value: null == c ? void 0 : c.contentId
        }];
        (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "ohmylms_settings", "quizes", e);
      }
    }, [c]), React.createElement(React.Fragment, null, React.createElement(q.PanelBody, {
      opened: !0
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings wp-user-login"
    }, React.createElement("div", {
      className: "mintmrm-automation_step-settings-header"
    }, React.createElement("h4", null, React.createElement(VN, null), (0, b.__)("Quiz Submit", "ohmylms")), React.createElement("p", {
      className: "sort-description"
    }, (0, b.__)("This automation will start when a student submitted the quiz.", "ohmylms"))), React.createElement("div", {
      className: "mintmrm-automation_step-settings-body"
    }, React.createElement("div", {
      className: "form-group single-settings"
    }, React.createElement("label", {
      htmlFor: ""
    }, (0, b.__)("Select Quiz(s)", "ohmylms"), React.createElement("span", {
      className: "mintmrm-tooltip"
    }, React.createElement(hy, null), React.createElement("p", null, (0, b.__)("If no quiz is selected, this will apply to all quizzes under the course.", "ohmylms")))), React.createElement(Jt.A, {
      cacheOptions: !0,
      isMulti: !0,
      value: null !== (t = null === (n = a.settings) || void 0 === n || null === (n = n.ohmylms_settings) || void 0 === n ? void 0 : n.quizes) && void 0 !== t ? t : "",
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
          (0, y.dispatch)(Lf).updateStepArgs(o, i, l, "ohmylms_settings", "quizes", e);
        }(e);
      },
      isDisabled: "quiz" === (null == c ? void 0 : c.automationFor)
    }))))));
  },
  help: {
    docLink: "https://getwpfunnels.com/docs/mail-mint/automation/",
    showVideo: !1
  }
};

(0, b.__)("Review Completion", "ohmylms"), (0, b.__)("This trigger will start the automation after review completion of the quiz.", "ohmylms"), (0, b.__)("Pass/Fail Status", "ohmylms"), (0, b.__)("This trigger will start the automation on pass/fail the quiz.", "ohmylms"), (0, b.__)("Quiz Achieved Mark", "ohmylms"), (0, b.__)("This trigger will start the automation on quiz's mark is achieved.", "ohmylms");

var GN = ["lms_submit_quiz", "lms_pass_fail_status_quiz", "lms_review_completion_quiz", "lms_achieved_mark_quiz", "lms_complete_lesson", "lms_new_course_order", "lms_course_enrollment_cancel", "lms_course_enrollment", "lms_course_completion_rate", "lms_submit_assignment", "lms_pass_fail_status_assignment", "lms_submission_deadline_assignment", "lms_review_completion_assignment", "lms_assignment_start", "lms_assignment_achieved_mark"];

function UN() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return qN(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (qN(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, qN(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, qN(d, "constructor", u), qN(u, "constructor", c), c.displayName = "GeneratorFunction", qN(u, a, "GeneratorFunction"), qN(d), qN(d, a, "Generator"), qN(d, r, function () {
    return this;
  }), qN(d, "toString", function () {
    return "[object Generator]";
  }), (UN = function () {
    return {
      w: o,
      m
    };
  })();
}

function qN(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  qN = function (e, t, n, r) {
    function o(t, n) {
      qN(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, qN(e, t, n, r);
}

function YN(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function QN(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var ZN = function () {
    return React.createElement("svg", {
      fill: "none",
      width: "80",
      height: "80",
      viewBox: "0 0 139 115",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#C5C7D3",
      d: "M126.988 39.144c-.097.126-.154.261-.226.394-3.844-2.863-10.877-10.371-16.345-19.807l4.262-6.616.001-.002c1.407-2.194 4.058-4.916 2.524-8.023-.747-1.515-2.088-2.398-3.342-3.222-.912-.58-1.854-1.18-2.976-1.54-5.394-1.738-7.386 3.822-9.609 7.285-2.018 3.152-1.074 1.667-3.088 4.794-4.97.75-14.423 3.94-22.854 9.175-8.982 5.61-6.443 9.186-6.71 18.685l-30.96 6.108c-2.331.452-3.985 2.757-3.612 5.032.363 2.23 1.218 4.492 2.691 7.12 2.9 5.172 6.049 7.936 16.334 20.207 1.562 1.826 3.165 4.492 5.812 6.818 2.606 2.29 6.896 1.567 10.253.721 16.31-4.103 30.501-8.008 46.093-10.674 4.375-.748 5.701-6.41 2.107-9.044a52.913 52.913 0 01-2.21-1.736c3.262.534 6.491.481 10.145-.45.218 1.324.869 2.587 2.696 3.08 2.878.779 7.219.553 8.478-2.242.764-1.692 2.678-22.776.959-25.653-1.275-2.132-8.697-2.65-10.423-.41zm-24.467-4.064a60.252 60.252 0 01-3.242 1.9l2.502-3.875a8.03 8.03 0 01.74 1.975zm-7.172 3.85a59.82 59.82 0 01-6.033 2.343L107.27 13.47a17.843 17.843 0 012.987 2.372L95.349 38.929zm-9.343 3.328c-1.617.434-3.422.946-3.832 2.75-.188.783-.002 1.616.507 2.41l-5.684 8.804c-1.747-1.01-3.33-1.407-3.487-1.468l1.7-2.632c2.288-1.562 4.022-4.089 4.45-6.894 7.96-12.312 21.946-33.973 22.081-34.183a18.3 18.3 0 013.571 1.32L86.006 42.259zm1.738 8.437l-6.148 9.527c-.71-.882-1.769-1.967-2.743-2.74l5.42-8.392c.978.739 2.138 1.275 3.47 1.605zm8.867-.216c.05.15 1.168 3.82 1.68 4.94.303.67-.348 1.782-1.123 2.36-.506.377-1.3.504-1.76.007-.208-1.523-.695-2.644-2.227-6.796 1.928-.174 3.18-.468 3.43-.511zm-5.789.603c.29.784 1.275 3.463 1.553 4.204.65 1.723 1.187 3.38.626 4.72-.418.997-1.49 1.703-2.434 1.637-1.03-.088-1.323-.203-1.743-.885.332-2.31.28-5.576.207-7.92l1.16-1.797c.21.014.415.035.631.04zM75.81 63.57c-.726-.692-2.063-1.621-3.217-2.19 0-.994-.003-4.235.025-4.528 2.974.76 5.392 2.496 7.279 4.855a1375.31 1375.31 0 00-4.087 1.863zm11.028-7.333c-.008 1.406-.058 2.92-.214 4.11-.175 1.322-.546 2.136-1.135 2.49-.816.491-1.86-.032-2.516-.709.535-.64.304-.412 3.865-5.891zm-6.621-22.046c1.197-2.628 4.227-4.021 7.075-4.915l-7.554 11.695c-.15-2.335-.431-4.784.479-6.78zm32.481-30.404c3.558 2.338 3.355 3.472.942 6.876-.983 1.384-.719 1.066-2.141 3.247-3.997-3.726-8.246-4.723-8.482-4.852 3.625-5.933 4.239-8.738 9.681-5.27zm-36.176 19.7c6.425-3.99 13.537-6.911 19.972-8.457l-7.364 11.4c-20.918 5.163-5.385 17.477-15.354 23.948a7.726 7.726 0 01-2.685 1.125l-.357-18.12c-.086-4.41.265-6.448 5.788-9.896zm38.337 49.898c-13.993 2.391-26.667 5.763-36.328 8.173-2.928-.125-7.066-2.147-9.108-4.471-1.1-1.252-2.606-3.77-5.24-3.968-2.589-.19-3.964 1.815-6.46 3.082-.61.311-3.416.05-4.385-.616C44.434 64.951 41.411 62.26 38.702 57.43c-1.34-2.391-2.114-4.42-2.434-6.383-.179-1.092.673-2.244 1.828-2.468l30.573-6.032.163 8.279c-1.74-.254-3.56.27-4.872 1.47-1.219 1.117-1.967 2.724-3.04 2.922-1.546.275-3-2.118-4.98-2.97-1.41-.61-3.418-.45-4.353 1.046-.88 1.404-.221 2.992-.509 3.852-.275.824-1.694.98-2.542.506-1.184-.665-1.944-2.147-2.554-3.338a1.121 1.121 0 10-1.996 1.024c.707 1.382 1.677 3.275 3.45 4.271 2.051 1.149 5.02.492 5.77-1.748.242-.724.203-1.437.168-2.066-.031-.555-.057-1.035.115-1.311.22-.351.965-.435 1.562-.175 1.62.697 3.378 3.646 6.276 3.116 2.11-.39 3.015-2.437 4.15-3.474.912-.836 2.281-1.13 3.475-.8.374 1.012 1.493.764 2.57.545-1.406 2.355-1.174 2.257-1.174 8.484 0 .03-.016 3.049-.024 3.985-1.596.502-2.507-.828-4.19-1.794-1.558-.896-3.81-1-4.905.573-.919 1.319-.384 2.887-.74 3.614-.233.474-1.003.658-1.608.562-1.957-.31-3.666-2.417-6.358-2.099-1.167.137-.974 1.401-1.023 1.551-.077 1.133 1.389 1.649 2.04.719 1.715.348 3.398 2.096 5.65 2.096 1.257 0 2.672-.534 3.313-1.84.63-1.287.186-2.77.567-3.32.292-.422 1.27-.299 1.946.09 1.06.61 2 1.632 3.48 2.047 1.314.37 2.739.04 3.838-.74.451-.203 8.283-3.757 8.903-4.086 2.154 2.401 5.413 2.334 6.85-.324.722.482 1.824.68 2.626.68 1.93 0 3.955-1.396 4.57-3.67 2.416.643 4.61-1.315 5.189-3.466 2.563 2.797 5.879 5.063 9.034 6.43 2.217 1.638 4.356 3.598 6.51 5.178 1.959 1.436 1.309 4.6-1.157 5.021zm-3.65-11.917c-6.328-2.417-11.22-7.703-12.384-11.426 6.463-1.23 8.212-.347 11.396 1.615 2.065 1.273 4.004 2.426 6.433 2.214a1.123 1.123 0 001.022-1.213 1.1 1.1 0 00-1.214-1.022c-2.679.224-5.06-2.232-7.948-3.48-4.048-1.749-8.471-.656-12.845.22-3.649.706-8.236.936-10.8-1.773-2.15-2.308 2.136-1.379 11.707-5.768a61.96 61.96 0 0010.971-6.435 1.122 1.122 0 10-1.327-1.81c-.599.44-1.171.84-1.731 1.22a11.002 11.002 0 00-1.353-2.805l5.931-9.185c4.126 6.919 11.651 16.43 17.228 20.145-.043 2.757-.842 11.701-1.101 20.117-4.572 1.273-9.547 1.081-13.985-.614z"
    }), React.createElement("path", {
      fill: "#573BFF",
      d: "M101.877 67.732l-24.302 6.41a1.123 1.123 0 10.573 2.17l24.302-6.41a1.122 1.122 0 10-.573-2.17z"
    }));
  },
  $N = function (e) {
    var t = e.handleCreate,
      n = function (e, t) {
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
            if ("string" == typeof e) return QN(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? QN(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, g.useState)(!1), 2),
      r = n[0],
      a = n[1],
      o = function () {
        var e,
          n = (e = UN().m(function e() {
            var n;
            return UN().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  return e.p = 0, a(!0), e.n = 1, t();
                case 1:
                  e.n = 3;
                  break;
                case 2:
                  e.p = 2, n = e.v, console.error(n);
                case 3:
                  return e.p = 3, a(!1), e.f(3);
                case 4:
                  return e.a(2);
              }
            }, e, null, [[0, 2, 3, 4]]);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                YN(o, r, a, i, l, "next", e);
              }
              function l(e) {
                YN(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function () {
          return n.apply(this, arguments);
        };
      }();
    return React.createElement(React.Fragment, null, React.createElement(I.FlexItemWP, {
      minWidth: "330px"
    }, React.createElement(I.CardWP, {
      isBorderless: !0,
      padding: "17px 16px 24px",
      fullHeight: !0
    }, React.createElement(I.FlexWP, {
      align: "center",
      justify: "center",
      gap: 2,
      direction: "column"
    }, React.createElement(ZN, null), React.createElement(I.ButtonWP, {
      onClick: o,
      variant: "primary",
      isBusy: r
    }, (0, b.__)("Start from scratch", "ohmylms"))))));
  };

const KN = (0, g.memo)($N);
