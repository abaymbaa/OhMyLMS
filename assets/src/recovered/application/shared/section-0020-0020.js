// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Zm = [{
    value: "draft",
    label: (0, b.__)("Draft", "ohmylms")
  }, {
    value: "publish",
    label: (0, b.__)("Publish", "ohmylms")
  }],
  $m = [{
    value: "minutes",
    label: (0, b.__)("Minutes", "ohmylms")
  }, {
    value: "hours",
    label: (0, b.__)("Hours", "ohmylms")
  }, {
    value: "days",
    label: (0, b.__)("Days", "ohmylms")
  }],
  Km = [{
    value: "one_question_per_page",
    label: (0, b.__)("One question per page", "ohmylms")
  }, {
    value: "all_questions_in_one_page",
    label: (0, b.__)("All questions in one page", "ohmylms")
  }, {
    value: "number_of_questions_per_page",
    label: (0, b.__)("Number of questions per page", "ohmylms")
  }],
  Jm = function (e) {
    var t,
      n,
      r,
      a,
      o,
      i,
      l,
      c,
      u,
      s = (0, L.useIsPro)(),
      d = (e.chapterId, (0, y.useSelect)(function (e) {
        return e(T.default).getQuizSettings();
      }, [])),
      m = (0, y.useSelect)(function (e) {
        return e(T.default).getQuiz();
      }, []),
      p = (0, y.useSelect)(function (e) {
        return e(T.default).getAllQuestions();
      }, []) || [],
      f = "cohort-based" === (0, y.useSelect)(function (e) {
        return e(T.default).getCourseType();
      }, []),
      v = (0, y.useDispatch)(T.default).setQuiz,
      h = ((0, y.useDispatch)(T.default), Ym((0, g.useState)(!1), 2)),
      _ = (h[0], h[1], Ym((0, g.useState)(!1), 2)),
      w = (_[0], _[1], Ym((0, g.useState)(!1), 2)),
      E = w[0],
      S = w[1],
      R = ["time_limit", "hide_answers", "move_to_next_section", "randomize_questions", "allow_attempts", "question_in_one_page", "layout", "hide_question_number", "short_text_limit", "long_text_limit"],
      x = function (e, t) {
        s || !R.includes(e) ? v({
          settings: Um(Um({}, d), {}, qm({}, e, t))
        }) : S(!0);
      },
      C = function (e, t, n) {
        s || !R.includes(e) ? v(n ? {
          settings: Um(Um({}, d), {}, qm({}, e, Um(Um({}, null == d ? void 0 : d[e]), {}, qm({}, n, t))))
        } : {
          settings: Um(Um({}, d), {}, qm({}, e, t))
        }) : S(!0);
      },
      P = (0, g.useCallback)(function (e) {
        Number(e) < 1 || v(Um(Um({}, m), {}, {
          drip_settings: Um(Um({}, null == m ? void 0 : m.drip_settings), {}, {
            days: e
          })
        }));
      }, [m, v]),
      O = p.reduce(function (e, t) {
        var n;
        return e + Number((null == t || null === (n = t.settings) || void 0 === n || null === (n = n.score) || void 0 === n ? void 0 : n.value) || 0);
      }, 0);
    return (0, g.useEffect)(function () {
      null != d && d.allow_attempts || v({
        settings: Um(Um({}, d), {}, {
          allow_attempts: 1
        })
      });
    }, []), React.createElement(React.Fragment, null, React.createElement(zm, {
      title: (0, b.__)("Visibility", "ohmylms"),
      description: (0, b.__)("Choose whether to publish this quiz for members or save it as a draft to keep editing.", "ohmylms"),
      className: "omlms-quiz-visibility-settings"
    }, React.createElement(vn.A, {
      value: null == m ? void 0 : m.status,
      onChange: function (e) {
        return v({
          status: e
        });
      },
      options: Zm,
      placeholder: (0, b.__)("Select Visibility", "ohmylms"),
      className: "omlms-quiz-visibility-select"
    })), React.createElement(Pn, {
      onChange: function () {
        var e;
        if (s) {
          var t = !(null != m && null !== (e = m.drip_settings) && void 0 !== e && e.enable);
          v(Um(Um({}, m), {}, {
            drip_settings: Um(Um({}, null == m ? void 0 : m.drip_settings), {}, {
              enable: t
            }, t && {
              type: f ? "cohort-start" : "enrollment-from-x-days"
            })
          }));
        } else S(!0);
      },
      isChecked: null == m || null === (t = m.drip_settings) || void 0 === t ? void 0 : t.enable,
      onDripFeedTypeChange: function (e) {
        if (s) {
          var t,
            n,
            r = Um(Um({}, null == m ? void 0 : m.drip_settings), {}, {
              type: e
            });
          if ("specific-date" === e) delete r.days, r.date = (null == m || null === (t = m.drip_settings) || void 0 === t ? void 0 : t.date) || sn()(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSSD"), r.time = (null == m || null === (n = m.drip_settings) || void 0 === n ? void 0 : n.time) || sn()(new Date()).format("YYYY-MM-DDTHH:mm:ss.SSSD");else if ("cohort-from-x-days" === e || "enrollment-from-x-days" === e) {
            var a;
            delete r.date, delete r.time, r.days = (null == m || null === (a = m.drip_settings) || void 0 === a ? void 0 : a.days) || 1;
          } else "cohort-start" === e && (delete r.days, delete r.date, delete r.time);
          v(Um(Um({}, m), {}, {
            drip_settings: r
          }));
        } else S(!0);
      },
      handleDripDatePickerChange: function (e, t) {
        v(Um(Um({}, m), {}, {
          drip_settings: Um(Um({}, null == m ? void 0 : m.drip_settings), {}, {
            date: e ? sn()(e).format("YYYY-MM-DDTHH:mm:ss.SSS") : null
          })
        }));
      },
      handleDripTimePickerChange: function (e) {
        v(Um(Um({}, m), {}, {
          drip_settings: Um(Um({}, null == m ? void 0 : m.drip_settings), {}, {
            time: e ? sn()(e).format("YYYY-MM-DDTHH:mm:ss.SSS") : null
          })
        }));
      },
      handleDayChange: P,
      dripFeedType: null == m || null === (n = m.drip_settings) || void 0 === n ? void 0 : n.type,
      dripDate: (null == m || null === (r = m.drip_settings) || void 0 === r ? void 0 : r.date) || sn()().startOf("day").format("YYYY-MM-DD"),
      dripTime: (null == m || null === (a = m.drip_settings) || void 0 === a ? void 0 : a.time) || new Date(),
      enrollmentFromXDays: null == m || null === (o = m.drip_settings) || void 0 === o ? void 0 : o.days,
      isCohortBased: f,
      padding: 0
    }), React.createElement(I.DividerWP, {
      marginStart: 4,
      marginEnd: 4
    }), React.createElement(I.SpacerWP, {
      marginBottom: 3
    }), React.createElement(zm, {
      title: (0, b.__)("Time Limit", "ohmylms"),
      description: (0, b.__)("Set a time limit for how long students have to complete the quiz.", "ohmylms"),
      className: "omlms-quiz-time-limit-settings"
    }, React.createElement(I.FlexWP, {
      justify: "flex-end",
      align: "center",
      gap: 2
    }, React.createElement(I.InputNumberWP, {
      type: "number",
      min: 0,
      max: 1e3,
      value: null == d || null === (i = d.time_limit) || void 0 === i ? void 0 : i.value,
      controls: !1,
      style: {
        width: 100
      },
      className: "omlms-time-limit-input",
      onChange: function (e) {
        var t = e;
        /^\d*\.?\d*$/.test(t) && C("time_limit", t, "value");
      },
      onKeyDown: function (e) {
        (["e", "E", "+", "-", "/", "\\", ".", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
      },
      onBlur: function () {
        var e;
        (null == d || null === (e = d.time_limit) || void 0 === e ? void 0 : e.value) < 0 && C("time_limit", 0, "value");
      },
      disabled: !s
    }), React.createElement(vn.A, {
      value: (null == d || null === (l = d.time_limit) || void 0 === l ? void 0 : l.type) || "minutes",
      onChange: function (e) {
        return C("time_limit", e, "type");
      },
      options: $m,
      placeholder: (0, b.__)("Select Time Type", "ohmylms"),
      disabled: !s,
      className: "omlms-time-limit-type-select"
    }))), React.createElement(Vm, {
      handleChange: C,
      isChecked: null == d || null === (c = d.passing_grade) || void 0 === c ? void 0 : c.enabled,
      value: null == d || null === (u = d.passing_grade) || void 0 === u ? void 0 : u.value,
      maxScore: O
    }), React.createElement(zm, {
      title: (0, b.__)("Hide Answers On Results Page", "ohmylms"),
      description: (0, b.__)("Keep the correct answers hidden after quiz completion to focus students on learning.", "ohmylms"),
      className: "omlms-quiz-hide-answers-settings"
    }, React.createElement("div", {
      style: {
        display: "inline-block",
        opacity: s ? 1 : .3,
        cursor: "pointer"
      }
    }, React.createElement(Bt.A, {
      checked: (null == d ? void 0 : d.hide_answers) || !1,
      onChange: function (e) {
        return x("hide_answers", e);
      },
      className: "omlms-hide-answers-switch"
    }))), React.createElement(zm, {
      title: (0, b.__)("Move to Next Section Without Passing Grade", "ohmylms"),
      description: (0, b.__)("Allow students to continue to the next section even if they don’t pass the quiz.", "ohmylms"),
      className: "omlms-quiz-move-next-settings"
    }, React.createElement("div", {
      style: {
        display: "inline-block",
        opacity: s ? 1 : .3,
        cursor: "pointer"
      }
    }, React.createElement(Bt.A, {
      checked: (null == d ? void 0 : d.move_to_next_section) || !1,
      onChange: function (e) {
        return x("move_to_next_section", e);
      },
      className: "omlms-move-next-switch"
    }))), React.createElement(zm, {
      title: (0, b.__)("Randomize Quiz Questions", "ohmylms"),
      description: (0, b.__)("Shuffle the question order to create a different quiz experience each time.", "ohmylms"),
      className: "omlms-quiz-randomize-questions-settings"
    }, React.createElement("div", {
      style: {
        display: "inline-block",
        opacity: s ? 1 : .3,
        cursor: "pointer"
      }
    }, React.createElement(Bt.A, {
      checked: (null == d ? void 0 : d.randomize_questions) || !1,
      onChange: function (e) {
        return x("randomize_questions", e);
      },
      className: "omlms-randomize-questions-switch"
    }))), React.createElement(zm, {
      title: (0, b.__)("Attempts Allowed", "ohmylms"),
      description: (0, b.__)("Limit the number of times a student can retake the quiz for better evaluation.", "ohmylms"),
      className: "omlms-quiz-attempts-allowed-settings"
    }, React.createElement(I.InputNumberWP, {
      type: "number",
      min: 0,
      max: 1e3,
      value: null == d ? void 0 : d.allow_attempts,
      controls: !1,
      style: {
        width: 100
      },
      onChange: function (e) {
        var t = e;
        /^\d*\.?\d*$/.test(t) && x("allow_attempts", t);
      },
      onKeyDown: function (e) {
        (["e", "E", "+", "-", "/", "\\", ".", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
      },
      onBlur: function () {
        (null == d ? void 0 : d.allow_attempts) < 0 && x("allow_attempts", 0);
      },
      className: "omlms-attempts-allowed-input"
    })), React.createElement(zm, {
      title: (0, b.__)("Question Layout", "ohmylms"),
      description: (0, b.__)("Choose how your quiz questions are displayed to students.", "ohmylms"),
      isItProFeature: !0,
      className: "omlms-quiz-layout-settings-card"
    }, React.createElement("div", {
      className: "omlms-quiz-layout-settings"
    }, React.createElement(vn.A, {
      value: (null == d ? void 0 : d.layout) || "one_question_per_page",
      onChange: function (e) {
        return C("layout", e);
      },
      options: Km,
      placeholder: (0, b.__)("Select layout", "ohmylms"),
      showSearch: !1,
      classNames: {
        popup: {
          root: "omlms-ant-select-dropdown"
        }
      },
      disabled: !s
    }), "number_of_questions_per_page" === (null == d ? void 0 : d.layout) && React.createElement(React.Fragment, null, React.createElement(I.SpacerWP, null), React.createElement(I.InputNumberWP, {
      type: "number",
      min: 0,
      max: 1e3,
      value: null == d ? void 0 : d.question_in_one_page,
      controls: !1,
      style: {
        width: 170,
        marginLeft: "auto"
      },
      onChange: function (e) {
        var t = e;
        /^\d*\.?\d*$/.test(t) && x("question_in_one_page", t);
      },
      onKeyDown: function (e) {
        (["e", "E", "+", "-", "/", "\\", ".", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
      },
      onBlur: function () {
        (null == d ? void 0 : d.question_in_one_page) < 0 && x("question_in_one_page", value);
      },
      className: "omlms-questions-per-page-input"
    })))), React.createElement(zm, {
      title: (0, b.__)("Hide Question Number", "ohmylms"),
      isItProFeature: !0,
      className: "omlms-quiz-hide-question-number-settings"
    }, React.createElement("div", {
      style: {
        display: "inline-block",
        opacity: s ? 1 : .3,
        cursor: "pointer"
      }
    }, React.createElement(Bt.A, {
      checked: (null == d ? void 0 : d.hide_question_number) || !1,
      onChange: function (e) {
        return x("hide_question_number", e);
      },
      className: "omlms-hide-question-number-switch"
    }))), React.createElement(zm, {
      title: (0, b.__)("Set Character Limit for Short Answers", "ohmylms"),
      isItProFeature: !0,
      className: "omlms-quiz-short-answer-limit-settings"
    }, React.createElement(I.InputNumberWP, {
      type: "number",
      min: 0,
      max: 1e3,
      placeholder: (0, b.__)("Set Character Limit", "ohmylms"),
      value: null == d ? void 0 : d.short_text_limit,
      controls: !1,
      style: {
        width: 170
      },
      onChange: function (e) {
        var t = e;
        /^\d*\.?\d*$/.test(t) && x("short_text_limit", t);
      },
      onKeyDown: function (e) {
        (["e", "E", "+", "-", "/", "\\", ".", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
      },
      onBlur: function () {
        (null == d ? void 0 : d.short_text_limit) < 0 && x("short_text_limit", 0);
      },
      disabled: !s,
      className: "omlms-short-answer-limit-input"
    })), React.createElement(zm, {
      title: (0, b.__)("Set Character Limit for Long Answers", "ohmylms"),
      showDivider: !1,
      isItProFeature: !0,
      className: "omlms-quiz-long-answer-limit-settings"
    }, React.createElement(I.InputNumberWP, {
      type: "number",
      min: 0,
      max: 1e3,
      placeholder: (0, b.__)("Set Character Limit", "ohmylms"),
      value: null == d ? void 0 : d.long_text_limit,
      controls: !1,
      style: {
        width: 170
      },
      onChange: function (e) {
        var t = e;
        /^\d*\.?\d*$/.test(t) && x("long_text_limit", t);
      },
      onKeyDown: function (e) {
        (["e", "E", "+", "-", "/", "\\", ".", ",", "*", " "].includes(e.key) || /[a-zA-Z]/.test(e.key) && !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Enter"].includes(e.key)) && e.preventDefault();
      },
      onBlur: function () {
        (null == d ? void 0 : d.long_text_limit) < 0 && x("long_text_limit", 0);
      },
      disabled: !s,
      className: "omlms-long-answer-limit-input"
    })), E && React.createElement(React.Fragment, null, React.createElement(He.default, {
      isOpen: E,
      onClose: S
    })));
  };

const Xm = (0, g.memo)(Jm);

var ep = n(12278),
  tp = function (e) {
    var t = e.setIsSettingsOpen;
    return e.chapterId, (0, b.__)("General", "ohmylms"), React.createElement(I.CardWP, {
      variant: "secondary",
      isBorderless: !0
    }, React.createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 4,
      padding: 4
    }, React.createElement(I.ContainerWP, null, React.createElement("div", null, React.createElement(I.ButtonWP, {
      variant: "secondary",
      onClick: function () {
        return t(!1);
      }
    }, React.createElement(I.FlexWP, {
      justify: "start",
      gap: 2
    }, React.createElement("svg", {
      className: "omlms-back-arrow-btn-icon",
      width: "19",
      height: "16",
      fill: "none",
      viewBox: "0 0 19 16",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "currentColor",
      d: "M8.707 13.793a1 1 0 11-1.414 1.414L1.5 9.414a2 2 0 010-2.828L7.293.793a1 1 0 111.414 1.414L3.914 7H18a1 1 0 110 2H3.914l4.793 4.793z"
    })), React.createElement("span", null, (0, b.__)("Back", "ohmylms")))), React.createElement(I.SpacerWP, null), React.createElement(I.HeadingWP, {
      level: 4
    }, (0, b.__)("Settings", "ohmylms"))), React.createElement(I.CardWP, {
      isBorderless: !0
    }, React.createElement(I.SpacerWP, {
      marginBottom: 0,
      marginTop: 4,
      padding: 4
    }, React.createElement(Xm, null))))));
  };

const np = (0, g.memo)(tp);

function rp(e) {
  return rp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, rp(e);
}

function ap(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function op(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ap(Object(n), !0).forEach(function (t) {
      sp(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ap(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function ip() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return lp(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (lp(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, lp(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, lp(d, "constructor", u), lp(u, "constructor", c), c.displayName = "GeneratorFunction", lp(u, a, "GeneratorFunction"), lp(d), lp(d, a, "Generator"), lp(d, r, function () {
    return this;
  }), lp(d, "toString", function () {
    return "[object Generator]";
  }), (ip = function () {
    return {
      w: o,
      m
    };
  })();
}

function lp(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  lp = function (e, t, n, r) {
    function o(t, n) {
      lp(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, lp(e, t, n, r);
}

function cp(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function up(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        cp(o, r, a, i, l, "next", e);
      }
      function l(e) {
        cp(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function sp(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != rp(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != rp(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == rp(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function dp(e, t) {
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
      if ("string" == typeof e) return mp(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? mp(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function mp(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var pp = function (e) {
  var t = e.chapterId,
    n = e.isSettingsOpen,
    r = e.setIsSettingsOpen,
    a = (0, f.g)().id,
    o = (0, z.A)(),
    i = o.contextHolder,
    l = o.openNotificationWithIcon,
    c = dp((0, g.useState)(!1), 2),
    u = c[0],
    s = c[1],
    d = (0, y.useDispatch)(T.default),
    m = (0, y.useSelect)(function (e) {
      return e(T.default).getSelectedQuizId();
    }, []),
    p = (0, y.useSelect)(function (e) {
      return e(T.default).getQuiz();
    }, []),
    v = (0, y.useSelect)(function (e) {
      return e(T.default).getQuizTypes();
    }, []),
    h = (0, y.useSelect)(function (e) {
      return e(T.default).selectQuestion();
    }, []),
    w = (0, y.useSelect)(function (e) {
      return e(T.default).getAllQuestions();
    }, [null == p ? void 0 : p.id]) || [],
    E = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    S = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    R = dp((0, g.useState)(!1), 2),
    x = R[0],
    C = R[1],
    P = dp((0, g.useState)(!1), 2),
    O = P[0],
    k = P[1],
    j = (0, y.useDispatch)(T.default),
    A = j.getQuiz,
    M = j.resetQuizState,
    F = j.setQuiz,
    N = (j.getQuestions, j.resetQuestionState),
    B = (0, f.Zp)(),
    L = (0, g.useRef)(null),
    V = function (e, t) {
      F(sp({}, e, t));
    };
  (0, g.useEffect)(function () {
    var e = function () {
      var e = up(ip().m(function e() {
        var t, n, r;
        return ip().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (C(!0), e.p = 1, m) {
                e.n = 2;
                break;
              }
              return e.a(2);
            case 2:
              return e.n = 3, A(m);
            case 3:
              n = e.v, d.setSelectedQuestionId(null == n || null === (t = n.content[0]) || void 0 === t ? void 0 : t.id), d.setQuestion(null == n ? void 0 : n.content[0]), C(!1), e.n = 5;
              break;
            case 4:
              e.p = 4, r = e.v, console.error("Error fetching course data:", r), C(!1);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 4]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
    return e(), 0 === v.length && (bm(Gs), bm(Qs), bm(nd), bm(yd), bm(Rd), bm(Od), bm(zd), _m(rm), _m(ym)), function () {
      M(), N();
    };
  }, [m]), (0, g.useEffect)(function () {
    L.current && L.current.focus();
  }, []);
  var H = function (e) {
      null != e && e.temp && (delete e.temp, delete e.id);
    },
    G = function () {
      var e = up(ip().m(function e() {
        var n, r, a, o;
        return ip().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if ((0, Ec.$)(h).isValid || null == h || null === (n = h.settings) || void 0 === n || !n.type) {
                e.n = 1;
                break;
              }
              return d.setQuizError(!0), e.a(2);
            case 1:
              if (e.p = 1, k(!0), t) {
                e.n = 2;
                break;
              }
              return (a = op({}, p)).content = w, null == a || null === (r = a.content) || void 0 === r || r.forEach(function (e) {
                var t;
                H(e), null == e || null === (t = e.questions) || void 0 === t || t.forEach(function (e) {
                  H(e);
                });
              }), e.n = 2, d.updateQuiz(p.id, a);
            case 2:
              e.n = 4;
              break;
            case 3:
              e.p = 3, o = e.v, console.error(o);
            case 4:
              return e.p = 4, k(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();
  return (0, g.useEffect)(function () {
    !x && E && l(S, E);
  }, [E]), React.createElement(React.Fragment, null, !t && i, !t && React.createElement(Wr, {
    title: (0, b.__)("Quiz Outline", "ohmylms"),
    redirection: "/quizzes",
    className: "omlms-quiz-header",
    rightContent: React.createElement(React.Fragment, null, React.createElement(D.A, {
      variant: "secondary",
      onClick: function () {
        B("/quiz-report/".concat(a));
      },
      icon: React.createElement(za, null)
    }, (0, b.__)("Result", "ohmylms")), React.createElement(D.A, {
      variant: "secondary",
      onClick: function () {
        null != p && p.preview_url && window.open(null == p ? void 0 : p.preview_url, "_blank");
      },
      icon: React.createElement(Br, null)
    }, (0, b.__)("Preview", "ohmylms")), React.createElement(D.A, {
      variant: "primary",
      onClick: G,
      isBusy: O
    }, (0, b.__)("Save", "ohmylms")), React.createElement(D.A, {
      variant: "tertiary",
      onClick: function () {
        var e;
        (0, Ec.$)(h).isValid || null == h || null === (e = h.settings) || void 0 === e || !e.type ? r(!0) : d.setQuizError(!0);
      },
      icon: React.createElement(Rt, null),
      className: "omlms-quize-settings-btn"
    }))
  }), x ? React.createElement(React.Fragment, null, React.createElement(_.A, {
    active: !0,
    paragraph: {
      rows: 5
    }
  })) : n ? React.createElement(React.Fragment, null, React.createElement(np, {
    setIsSettingsOpen: r,
    chapterId: t
  })) : React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, React.createElement(I.SpacerWP, {
    marginBottom: 0,
    padding: 6,
    marginTop: 4
  }, React.createElement("div", {
    className: "omlms-quiz-editor-header"
  }, React.createElement(I.InputWP, {
    value: "Untitled" === (null == p ? void 0 : p.name) ? "" : Ge(null == p ? void 0 : p.name),
    onChange: function (e) {
      return V("name", e);
    },
    placeholder: (0, b.__)("Enter Quiz Title", "ohmylms"),
    name: "chapterName",
    className: "omlms-quiz-name-title",
    autoComplete: "off"
  }), React.createElement(I.SpacerWP, null), React.createElement(W.A, {
    value: (null == p ? void 0 : p.description) || "",
    onChange: function (e) {
      return V("description", e);
    },
    placeholder: (0, b.__)("Add Quiz description ...", "ohmylms"),
    className: "omlms-quiz-description",
    name: "descriptionName",
    rows: 3
  })), React.createElement(I.CardWP, {
    isBorderless: !0
  }, React.createElement(I.SpacerWP, null, React.createElement(I.FlexWP, {
    align: "stretch",
    justify: "flex-start",
    gap: 0
  }, React.createElement(I.FlexItemWP, {
    flex: 1
  }, React.createElement(Yc, null)), React.createElement(I.FlexItemWP, {
    flex: 2
  }, React.createElement(Nu, {
    chapterId: t,
    setHovered: s
  })), React.createElement(I.FlexItemWP, {
    flex: 1,
    className: "omlms-editor-sider omlms-editor-right ".concat(u ? "omlms-editor-right-hovered" : ""),
    style: {
      borderLeft: "1px solid #EBEBEF"
    }
  }, React.createElement(_s, {
    chapterId: t,
    setHovered: s
  }))))))));
};

const fp = (0, g.memo)(pp);

function vp(e) {
  return vp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, vp(e);
}
