// Reconstructed application fragment. Assembled in manifest order within factory 1841.
function P5(e) {
  return P5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, P5(e);
}

function O5(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function k5(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? O5(Object(n), !0).forEach(function (t) {
      j5(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O5(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function j5(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != P5(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != P5(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == P5(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

var A5 = function (e) {
  var t = e.errors,
    n = (e.setErrors, e.validate),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectWebhookFormData();
    }, []),
    a = (0, y.useDispatch)(T.default).updateWebhookFormData,
    o = function (e, t) {
      a(e, t), n(k5(k5({}, r), {}, j5({}, e, t)));
    },
    i = [{
      label: (0, b.__)("Course Purchase", "ohmylms"),
      value: "course_purchase"
    }, {
      label: (0, b.__)("Course Enrollment", "ohmylms"),
      value: "course_enrollment"
    }, {
      label: (0, b.__)("Course Completion", "ohmylms"),
      value: "course_completion"
    }, {
      label: (0, b.__)("Lesson Completion", "ohmylms"),
      value: "lesson_completion"
    }, {
      label: (0, b.__)("Quiz Submission", "ohmylms"),
      value: "quiz_submission"
    }, {
      label: (0, b.__)("Quiz Achievement", "ohmylms"),
      value: "quiz_achievement"
    }, {
      label: (0, b.__)("Assignment Submission", "ohmylms"),
      value: "assignment_submission"
    }, {
      label: (0, b.__)("Assignment Achievement", "ohmylms"),
      value: "assignment_achievement"
    }],
    l = [{
      label: (0, b.__)("Active", "ohmylms"),
      value: "active"
    }, {
      label: (0, b.__)("Inactive", "ohmylms"),
      value: "inactive"
    }];
  return React.createElement(React.Fragment, null, React.createElement(Pf, {
    title: (0, b.__)("Webhook Name", "ohmylms"),
    description: (0, b.__)("Enter a descriptive name for this webhook", "ohmylms"),
    tooltip: (0, b.__)("This name helps you identify the webhook.", "ohmylms"),
    value: Ge((null == r ? void 0 : r.name) || ""),
    onChange: function (e) {
      return o("name", e);
    },
    error: null == t ? void 0 : t.name,
    placeholder: (0, b.__)("e.g. Zapier Course Purchase Hook", "ohmylms")
  }), React.createElement(I.DividerWP, {
    marginStart: "2",
    marginEnd: "2"
  }), React.createElement(Pf, {
    title: (0, b.__)("Webhook URL", "ohmylms"),
    description: (0, b.__)("The endpoint URL where the webhook data will be sent", "ohmylms"),
    tooltip: (0, b.__)("This is the destination URL for the webhook.", "ohmylms"),
    value: (null == r ? void 0 : r.webhook_url) || "",
    onChange: function (e) {
      return o("webhook_url", e);
    },
    error: null == t ? void 0 : t.webhook_url,
    placeholder: (0, b.__)("https://hooks.zapier.com/hooks/catch/11896719/brzfge4", "ohmylms")
  }), React.createElement(I.DividerWP, {
    marginStart: "2",
    marginEnd: "2"
  }), React.createElement(Nm, {
    title: (0, b.__)("Trigger Event", "ohmylms"),
    description: (0, b.__)("Select when this webhook should be triggered", "ohmylms"),
    tooltip: (0, b.__)("The webhook will fire when this event occurs.", "ohmylms"),
    placeholder: (0, b.__)("Select trigger event", "ohmylms"),
    data: i,
    notFoundMessage: (0, b.__)("Nothing Found", "ohmylms"),
    isMultiple: !1,
    onChange: function (e) {
      return o("trigger_event", e);
    },
    value: null == r ? void 0 : r.trigger_event,
    staticSearch: !0,
    error: null == t ? void 0 : t.trigger_event
  }), React.createElement(I.DividerWP, {
    marginStart: "2",
    marginEnd: "2"
  }), React.createElement(Nm, {
    title: (0, b.__)("HTTP Method", "ohmylms"),
    description: (0, b.__)("The HTTP method to use for the request", "ohmylms"),
    placeholder: (0, b.__)("Select HTTP method", "ohmylms"),
    data: [{
      label: "GET",
      value: "GET"
    }, {
      label: "POST",
      value: "POST"
    }, {
      label: "PUT",
      value: "PUT"
    }, {
      label: "DELETE",
      value: "DELETE"
    }, {
      label: "PATCH",
      value: "PATCH"
    }],
    notFoundMessage: (0, b.__)("Nothing Found", "ohmylms"),
    isMultiple: !1,
    onChange: function (e) {
      return o("http_method", e);
    },
    value: null == r ? void 0 : r.http_method,
    staticSearch: !0
  }), React.createElement(I.DividerWP, {
    marginStart: "2",
    marginEnd: "2"
  }), React.createElement(Nm, {
    title: (0, b.__)("Data Format", "ohmylms"),
    description: (0, b.__)("The format of the data to be sent", "ohmylms"),
    placeholder: (0, b.__)("Select data format", "ohmylms"),
    data: [{
      label: "JSON",
      value: "json"
    }, {
      label: "Form Data",
      value: "form"
    }, {
      label: "XML",
      value: "xml"
    }],
    notFoundMessage: (0, b.__)("Nothing Found", "ohmylms"),
    isMultiple: !1,
    onChange: function (e) {
      return o("data_type", e);
    },
    value: null == r ? void 0 : r.data_type,
    staticSearch: !0
  }), React.createElement(I.DividerWP, {
    marginStart: "2",
    marginEnd: "2"
  }), React.createElement(Nm, {
    title: (0, b.__)("Status", "ohmylms"),
    description: (0, b.__)("Enable or disable this webhook", "ohmylms"),
    placeholder: (0, b.__)("Select status", "ohmylms"),
    data: l,
    notFoundMessage: (0, b.__)("Nothing Found", "ohmylms"),
    isMultiple: !1,
    onChange: function (e) {
      return o("status", e);
    },
    value: null == r ? void 0 : r.status,
    staticSearch: !0
  }));
};

const M5 = (0, g.memo)(A5);

function T5(e) {
  return T5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, T5(e);
}

function I5(e) {
  return function (e) {
    if (Array.isArray(e)) return F5(e);
  }(e) || function (e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }(e) || function (e, t) {
    if (e) {
      if ("string" == typeof e) return F5(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? F5(e, t) : void 0;
    }
  }(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function F5(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function N5(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function D5(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? N5(Object(n), !0).forEach(function (t) {
      W5(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N5(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function W5(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != T5(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != T5(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == T5(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

var z5 = function (e) {
  var t = e.errors,
    n = (0, y.useSelect)(function (e) {
      return e(T.default).selectWebhookFormData();
    }, []),
    r = (0, y.useDispatch)(T.default),
    a = function (e, t, a) {
      var o = n.data_mapping.map(function (n, r) {
        return r === e ? D5(D5({}, n), {}, W5({}, t, a)) : n;
      });
      r.updateWebhookFormData("data_mapping", o);
    },
    o = function () {
      var e = [].concat(I5(n.data_mapping || []), [{
        key: "",
        value: "user_id"
      }]);
      r.updateWebhookFormData("data_mapping", e);
    };
  return React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: "24px"
    }
  }, React.createElement(I.TextWP, {
    as: "h3",
    size: "16",
    weight: "600",
    style: {
      marginBottom: "8px"
    }
  }, (0, b.__)("Field Mapping", "ohmylms")), React.createElement(I.TextWP, {
    as: "p",
    size: "14",
    style: {
      color: "#6B7280",
      marginBottom: "16px"
    }
  }, (0, b.__)("Map the fields you want to send in the webhook payload", "ohmylms"))), React.createElement("div", {
    style: {
      marginTop: "24px"
    }
  }, React.createElement(I.TextWP, {
    as: "h4",
    size: "15",
    weight: "600",
    style: {
      marginBottom: "16px"
    }
  }, (0, b.__)("Configure Fields", "ohmylms")), (null == t ? void 0 : t.data_mapping) && React.createElement("div", {
    style: {
      padding: "12px",
      backgroundColor: "#FEE2E2",
      border: "1px solid #FCA5A5",
      borderRadius: "6px",
      marginBottom: "16px"
    }
  }, React.createElement(I.TextWP, {
    style: {
      color: "#DC2626",
      fontSize: "14px"
    }
  }, t.data_mapping)), React.createElement("div", {
    style: {
      backgroundColor: "#F9FAFB",
      border: "1px solid #E5E7EB",
      borderRadius: "8px",
      padding: "20px"
    }
  }, React.createElement(I.FlexWP, {
    gap: 16,
    style: {
      marginBottom: "16px"
    }
  }, React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement(I.TextWP, {
    style: {
      fontWeight: "500",
      fontSize: "14px",
      color: "#374151"
    }
  }, (0, b.__)("Key", "ohmylms"))), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement(I.TextWP, {
    style: {
      fontWeight: "500",
      fontSize: "14px",
      color: "#374151"
    }
  }, (0, b.__)("Value", "ohmylms"))), React.createElement("div", {
    style: {
      width: "60px"
    }
  })), ((null == n ? void 0 : n.data_mapping) || [{
    key: "",
    value: ""
  }]).map(function (e, t) {
    var i, l, c;
    return React.createElement(I.FlexWP, {
      key: t,
      gap: 16,
      align: "center",
      style: {
        marginBottom: "12px"
      }
    }, React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement(I.InputWP, {
      placeholder: (0, b.__)("Enter key name", "ohmylms"),
      value: e.key || "",
      onChange: function (e) {
        return a(t, "key", e);
      }
    })), React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement(I.SelectWP, {
      placeholder: (0, b.__)("Select value", "ohmylms"),
      options: (l = [{
        label: (0, b.__)("User ID", "ohmylms"),
        value: "user_id"
      }, {
        label: (0, b.__)("User Email", "ohmylms"),
        value: "user_email"
      }, {
        label: (0, b.__)("User Name", "ohmylms"),
        value: "user_name"
      }, {
        label: (0, b.__)("Event Time", "ohmylms"),
        value: "event_time"
      }, {
        label: (0, b.__)("Site URL", "ohmylms"),
        value: "site_url"
      }], c = {
        course_purchase: [{
          label: (0, b.__)("Course ID", "ohmylms"),
          value: "course_id"
        }, {
          label: (0, b.__)("Course Title", "ohmylms"),
          value: "course_title"
        }, {
          label: (0, b.__)("Course Price", "ohmylms"),
          value: "course_price"
        }, {
          label: (0, b.__)("Order ID", "ohmylms"),
          value: "order_id"
        }, {
          label: (0, b.__)("Order Total", "ohmylms"),
          value: "order_total"
        }],
        course_enrollment: [{
          label: (0, b.__)("Course ID", "ohmylms"),
          value: "course_id"
        }, {
          label: (0, b.__)("Course Title", "ohmylms"),
          value: "course_title"
        }, {
          label: (0, b.__)("Enrollment Date", "ohmylms"),
          value: "enrollment_date"
        }],
        course_completion: [{
          label: (0, b.__)("Course ID", "ohmylms"),
          value: "course_id"
        }, {
          label: (0, b.__)("Course Title", "ohmylms"),
          value: "course_title"
        }, {
          label: (0, b.__)("Completion Date", "ohmylms"),
          value: "completion_date"
        }, {
          label: (0, b.__)("Completion Percentage", "ohmylms"),
          value: "completion_percentage"
        }],
        lesson_completion: [{
          label: (0, b.__)("Lesson ID", "ohmylms"),
          value: "lesson_id"
        }, {
          label: (0, b.__)("Lesson Title", "ohmylms"),
          value: "lesson_title"
        }, {
          label: (0, b.__)("Course ID", "ohmylms"),
          value: "course_id"
        }, {
          label: (0, b.__)("Course Title", "ohmylms"),
          value: "course_title"
        }],
        quiz_submission: [{
          label: (0, b.__)("Quiz ID", "ohmylms"),
          value: "quiz_id"
        }, {
          label: (0, b.__)("Quiz Title", "ohmylms"),
          value: "quiz_title"
        }, {
          label: (0, b.__)("Score", "ohmylms"),
          value: "score"
        }, {
          label: (0, b.__)("Course ID", "ohmylms"),
          value: "course_id"
        }],
        quiz_achievement: [{
          label: (0, b.__)("Quiz ID", "ohmylms"),
          value: "quiz_id"
        }, {
          label: (0, b.__)("Quiz Title", "ohmylms"),
          value: "quiz_title"
        }, {
          label: (0, b.__)("Score", "ohmylms"),
          value: "score"
        }, {
          label: (0, b.__)("Course ID", "ohmylms"),
          value: "course_id"
        }],
        assignment_submission: [{
          label: (0, b.__)("Assignment ID", "ohmylms"),
          value: "assignment_id"
        }, {
          label: (0, b.__)("Assignment Title", "ohmylms"),
          value: "assignment_title"
        }, {
          label: (0, b.__)("Submission Date", "ohmylms"),
          value: "submission_date"
        }, {
          label: (0, b.__)("Course ID", "ohmylms"),
          value: "course_id"
        }],
        assignment_achievement: [{
          label: (0, b.__)("Assignment ID", "ohmylms"),
          value: "assignment_id"
        }, {
          label: (0, b.__)("Assignment Title", "ohmylms"),
          value: "assignment_title"
        }, {
          label: (0, b.__)("Marks", "ohmylms"),
          value: "marks"
        }, {
          label: (0, b.__)("Submission Date", "ohmylms"),
          value: "submission_date"
        }, {
          label: (0, b.__)("Course ID", "ohmylms"),
          value: "course_id"
        }]
      }, [].concat(l, I5(c[null == n ? void 0 : n.trigger_event] || []))),
      value: e.value || "",
      onChange: function (e) {
        return a(t, "value", e);
      }
    })), React.createElement("div", {
      style: {
        display: "flex",
        gap: "8px"
      }
    }, React.createElement(I.ButtonWP, {
      icon: React.createElement(Ps, null),
      onClick: function () {
        return function (e) {
          if (n.data_mapping && n.data_mapping.length > 1) {
            var t = n.data_mapping.filter(function (t, n) {
              return n !== e;
            });
            r.updateWebhookFormData("data_mapping", t);
          }
        }(t);
      },
      title: (0, b.__)("Remove Field", "ohmylms"),
      style: {
        minWidth: "26px",
        padding: "2px"
      },
      disabled: ((null == n || null === (i = n.data_mapping) || void 0 === i ? void 0 : i.length) || 0) <= 1
    }), React.createElement(I.ButtonWP, {
      icon: React.createElement(ks, null),
      onClick: o,
      title: (0, b.__)("Add Field", "ohmylms"),
      style: {
        minWidth: "26px",
        padding: "2px"
      }
    })));
  }))));
};

const B5 = (0, g.memo)(z5);

function L5(e) {
  return L5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, L5(e);
}

function V5() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return H5(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (H5(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, H5(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, H5(d, "constructor", u), H5(u, "constructor", c), c.displayName = "GeneratorFunction", H5(u, a, "GeneratorFunction"), H5(d), H5(d, a, "Generator"), H5(d, r, function () {
    return this;
  }), H5(d, "toString", function () {
    return "[object Generator]";
  }), (V5 = function () {
    return {
      w: o,
      m
    };
  })();
}

function H5(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  H5 = function (e, t, n, r) {
    function o(t, n) {
      H5(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, H5(e, t, n, r);
}

function G5(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function U5(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function q5(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? U5(Object(n), !0).forEach(function (t) {
      Y5(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U5(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function Y5(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != L5(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != L5(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == L5(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function Q5(e, t) {
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
      if ("string" == typeof e) return Z5(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Z5(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function Z5(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var $5 = function (e) {
  var t = e.webhook,
    n = e.isOpen,
    r = e.onClose,
    a = e.onSave,
    o = (0, y.useDispatch)(T.default),
    i = (0, z.A)(),
    l = i.openNotificationWithIcon,
    c = i.contextHolder,
    u = Q5((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1],
    m = Q5((0, g.useState)("1"), 2),
    p = m[0],
    f = m[1],
    v = Q5((0, g.useState)({}), 2),
    h = v[0],
    _ = v[1],
    w = Q5((0, g.useState)(!1), 2),
    E = w[0];
  w[1], (0, g.useEffect)(function () {
    if (n) if (t) {
      var e = [{
        key: "",
        value: ""
      }];
      if (t.data_mapping) if ("string" == typeof t.data_mapping) try {
        e = JSON.parse(t.data_mapping);
      } catch (t) {
        console.error("Failed to parse data_mapping:", t), e = [{
          key: "",
          value: ""
        }];
      } else Array.isArray(t.data_mapping) && (e = t.data_mapping);
      o.setWebhookFormData(q5(q5({}, t), {}, {
        data_mapping: e
      }));
    } else o.setWebhookFormData({
      name: "",
      webhook_url: "",
      trigger_event: "course_purchase",
      http_method: "POST",
      data_type: "json",
      status: "active",
      description: "",
      headers: "",
      retry_attempts: 3,
      timeout: 30,
      data_mapping: [{
        key: "User ID",
        value: "user_id"
      }]
    });
  }, [n, t, o]);
  var S = (0, y.useSelect)(function (e) {
      return e(T.default).selectWebhookFormData();
    }, []),
    R = function (e) {
      var t,
        n,
        r = {};
      return null != e && null !== (t = e.name) && void 0 !== t && t.trim() || (r.name = (0, b.__)("Name is required.", "ohmylms")), null != e && null !== (n = e.webhook_url) && void 0 !== n && n.trim() ? /^https?:\/\/.+/.test(e.webhook_url) || (r.webhook_url = (0, b.__)("Please enter a valid URL.", "ohmylms")) : r.webhook_url = (0, b.__)("Webhook URL is required.", "ohmylms"), null != e && e.trigger_event || (r.trigger_event = (0, b.__)("Trigger event is required.", "ohmylms")), r;
    },
    x = function (e) {
      var t = {};
      return null != e && e.data_mapping && e.data_mapping.length > 0 && (e.data_mapping.filter(function (e) {
        return e.key && e.value;
      }), e.data_mapping.some(function (e) {
        return !(!e.key && !e.value || e.key && e.value);
      }) && (t.data_mapping = (0, b.__)("Please fill in all field mapping keys and values", "ohmylms"))), t;
    },
    C = function (e) {
      var t = R(e),
        n = x(e),
        r = q5(q5({}, t), n);
      return _(r), 0 === Object.keys(r).length;
    },
    P = function () {
      r && "function" == typeof r && r(), f("1"), _({}), o.clearWebhookFormData();
    },
    O = function () {
      var e,
        n = (e = V5().m(function e() {
          var n, r, i;
          return V5().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if ("1" !== p) {
                  e.n = 1;
                  break;
                }
                return n = R(S), _(n), 0 === Object.keys(n).length && f("2"), e.a(2);
              case 1:
                if (s) {
                  e.n = 10;
                  break;
                }
                if (C(S)) {
                  e.n = 2;
                  break;
                }
                return e.a(2);
              case 2:
                if (d(!0), e.p = 3, r = q5(q5({}, S), {}, {
                  data_mapping: JSON.stringify(S.data_mapping)
                }), !t || !t.id) {
                  e.n = 5;
                  break;
                }
                return e.n = 4, o.updateWebhookById(t.id, r);
              case 4:
                l("success", (0, b.__)("Webhook updated successfully!", "ohmylms")), e.n = 7;
                break;
              case 5:
                return e.n = 6, o.createWebhook(r);
              case 6:
                l("success", (0, b.__)("Webhook created successfully!", "ohmylms"));
              case 7:
                a && "function" == typeof a && a(r), P(), e.n = 9;
                break;
              case 8:
                e.p = 8, i = e.v, console.error("Error saving webhook:", i), l("error", (0, b.__)("Failed to save webhook. Please try again.", "ohmylms"));
              case 9:
                return e.p = 9, d(!1), e.f(9);
              case 10:
                return e.a(2);
            }
          }, e, null, [[3, 8, 9, 10]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              G5(o, r, a, i, l, "next", e);
            }
            function l(e) {
              G5(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return n.apply(this, arguments);
      };
    }();
  (0, g.useEffect)(function () {
    return function () {
      o.clearWebhookFormData();
    };
  }, []), (0, g.useEffect)(function () {
    var e = !0;
    if (e && S) if ("1" === p) {
      var t = R(S);
      _(t);
    } else {
      var n = x(S);
      _(n);
    }
    return function () {
      e = !1;
    };
  }, [S, p]);
  var k = [{
      label: React.createElement(I.TextWP, {
        as: "span",
        size: "16",
        weight: "500"
      }, (0, b.__)("Details", "ohmylms")),
      key: "1",
      children: React.createElement(I.CardWP, {
        isBorderless: !0
      }, React.createElement(I.SpacerWP, {
        marginBottom: 0,
        padding: 3,
        marginTop: 4
      }, React.createElement(M5, {
        errors: h,
        setErrors: _,
        validate: C
      })))
    }, {
      label: React.createElement(I.TextWP, {
        as: "span",
        size: "16",
        weight: "500"
      }, (0, b.__)("Data Mapping", "ohmylms")),
      key: "2",
      children: React.createElement(I.CardWP, {
        isBorderless: !0
      }, React.createElement(I.SpacerWP, {
        marginBottom: 0,
        padding: 3,
        marginTop: 4
      }, React.createElement(B5, {
        errors: h
      })))
    }],
    j = (0, g.useMemo)(function () {
      return {
        width: "830px",
        background: "#F5F5F5"
      };
    }, []),
    A = (0, g.useMemo)(function () {
      return R(S);
    }, [S]),
    M = "1" === p ? Object.keys(A).length > 0 : Object.keys(h).length > 0;
  return React.createElement(React.Fragment, null, c, n && React.createElement(I.ModalWP, {
    title: null != t && t.id ? (0, b.__)("Edit Webhook", "ohmylms") : (0, b.__)("Add Webhook", "ohmylms"),
    style: j,
    onRequestClose: P,
    shouldCloseOnEsc: !0,
    shouldCloseOnClickOutside: !0,
    className: "ohmylms-full-height-modal",
    size: "large"
  }, E ? React.createElement(I.SkeletonWP, {
    rows: 10
  }) : React.createElement(React.Fragment, null, React.createElement(I.TabsWP, {
    items: k,
    activekey: p,
    onChange: function () {},
    className: "ohmylms-tab-has-custom-navigation"
  }), React.createElement(I.DividerWP, {
    marginStart: 4
  }), React.createElement(I.SpacerWP, {
    marginTop: 4
  }, React.createElement(I.FlexWP, {
    justify: "space-between",
    align: "center",
    gap: 2
  }, React.createElement("div", null, "2" === p && React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: function () {
      return f("1");
    }
  }, (0, b.__)("Back", "ohmylms"))), React.createElement(I.FlexWP, {
    justify: "flex-end",
    align: "center",
    gap: 2
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: P
  }, (0, b.__)("Cancel", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: O,
    disabled: M,
    isBusy: s
  }, "1" === p ? (0, b.__)("Next", "ohmylms") : (0, b.__)("Save", "ohmylms"))))))));
};

const K5 = (0, g.memo)($5);
