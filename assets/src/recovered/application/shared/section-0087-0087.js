// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var RW = function (e) {
  var t = e.crmType,
    n = e.integrationFor,
    r = e.contentId,
    a = e.contentName,
    o = e.integrationId,
    i = e.onSave,
    c = e.onCancel,
    u = e.loading,
    s = wW((0, g.useState)(t || ""), 2),
    d = s[0],
    m = s[1],
    p = wW((0, g.useState)("My Integration"), 2),
    f = p[0],
    v = p[1],
    h = wW((0, g.useState)(!1), 2),
    y = h[0],
    _ = h[1],
    w = wW((0, g.useState)({
      name: "",
      action_type: "",
      action_data: {},
      status: "active"
    }), 2),
    E = (w[0], w[1]),
    S = wW((0, g.useState)([{
      id: Date.now(),
      event: "",
      list: "",
      tags: ""
    }]), 2),
    R = S[0],
    x = S[1],
    C = wW((0, g.useState)([]), 2),
    P = C[0],
    O = C[1],
    k = wW((0, g.useState)([]), 2),
    j = (k[0], k[1]),
    A = wW((0, g.useState)([]), 2),
    M = A[0],
    T = A[1],
    F = wW((0, g.useState)([]), 2),
    N = F[0],
    D = F[1],
    W = wW((0, g.useState)(!1), 2),
    z = W[0],
    B = W[1];
  (0, g.useEffect)(function () {
    H();
  }, []), (0, g.useEffect)(function () {
    d && (G(), L(), V(), o && U());
  }, [d, o]);
  var L = function () {
      var e = _W(hW().m(function e() {
        var t, n;
        return hW().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (d) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, e.n = 2, l()({
                path: "/creatorlms/v1/".concat(d, "/auth/tags")
              });
            case 2:
              null != (t = e.v) && t.success && null != t && t.data && T(t.data.map(function (e) {
                return {
                  value: e.id,
                  label: e.name
                };
              })), e.n = 4;
              break;
            case 3:
              e.p = 3, n = e.v, console.error("Error fetching tags:", n);
            case 4:
              return e.a(2);
          }
        }, e, null, [[1, 3]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    V = function () {
      var e = _W(hW().m(function e() {
        var t, n;
        return hW().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (d) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, e.n = 2, l()({
                path: "/creatorlms/v1/".concat(d, "/triggers/lists")
              });
            case 2:
              null != (t = e.v) && t.success && null != t && t.data && D(t.data.map(function (e) {
                return {
                  value: e.id,
                  label: e.name
                };
              })), e.n = 4;
              break;
            case 3:
              e.p = 3, n = e.v, console.error("Error fetching lists:", n), D([]);
            case 4:
              return e.a(2);
          }
        }, e, null, [[1, 3]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    H = function () {
      var e = _W(hW().m(function e() {
        var t, n, r, a, o;
        return hW().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, t = [], e.p = 1, e.n = 2, l()({
                path: "/creatorlms/v1/wpfusion/auth/status"
              });
            case 2:
              null != (r = e.v) && null !== (n = r.data) && void 0 !== n && n.connected && t.push({
                value: "wpfusion",
                label: (0, b.__)("WP Fusion", "ohmylms")
              }), e.n = 4;
              break;
            case 3:
              e.p = 3, a = e.v, console.error("Error checking WP Fusion status:", a);
            case 4:
              O(t), e.n = 6;
              break;
            case 5:
              e.p = 5, o = e.v, console.error("Error fetching available CRMs:", o);
            case 6:
              return e.a(2);
          }
        }, e, null, [[1, 3], [0, 5]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    G = function () {
      var e = _W(hW().m(function e() {
        var t, n;
        return hW().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (d) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              return e.p = 1, e.n = 2, l()({
                path: "/creatorlms/v1/".concat(d, "/triggers/actions")
              });
            case 2:
              null != (t = e.v) && t.success && null != t && t.data && j(t.data), e.n = 4;
              break;
            case 3:
              e.p = 3, n = e.v, console.error("Error fetching available actions:", n);
            case 4:
              return e.a(2);
          }
        }, e, null, [[1, 3]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    U = function () {
      var e = _W(hW().m(function e() {
        var t, n, r, a, i, c, u, s, m, p, f, g, h;
        return hW().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return B(!0), e.p = 1, e.n = 2, l()({
                path: "/creatorlms/v1/".concat(d, "/triggers/").concat(o)
              });
            case 2:
              if (null != (t = e.v) && t.success && null != t && t.data) {
                if (r = t.data, v(r.name || "My Integration"), "string" == typeof (a = r.action_data)) try {
                  a = JSON.parse(a);
                } catch (e) {
                  console.error("Error parsing action_data:", e), a = {};
                }
                E({
                  name: r.name,
                  action_type: r.action_type,
                  action_data: a,
                  status: r.status
                }), i = r.trigger_event || "", (c = {
                  creator_lms_quiz_completed: "quiz_submitted",
                  creator_lms_quiz_submission: "quiz_submitted",
                  creator_lms_after_assignment_submitted: "assignment_submitted",
                  creator_lms_lesson_completed: "lesson_completed",
                  creator_lms_course_completed: "course_completed",
                  creator_lms_manual_student_enrollment: "course_enrollment",
                  creator_lms_student_unenrolled: "course_unenrollment"
                })[i] ? i = c[i] : i.startsWith("creator_lms_") && (i = i.replace("creator_lms_", "")), null !== (n = a) && void 0 !== n && n.actions && Array.isArray(a.actions) ? (u = {
                  creator_lms_quiz_submission: "quiz_submitted",
                  creator_lms_after_assignment_submitted: "assignment_submitted",
                  creator_lms_lesson_completed: "lesson_completed",
                  creator_lms_course_completed: "course_completed",
                  creator_lms_manual_student_enrollment: "course_enrollment",
                  creator_lms_student_unenrolled: "course_unenrollment"
                }, s = a.actions.map(function (e, t) {
                  var n = u[e.event] || e.event,
                    r = e.tag_ids || [];
                  return {
                    id: Date.now() + t,
                    event: n,
                    list: e.list_id || "",
                    tags: Array.isArray(r) ? r[0] : r
                  };
                }), x(s)) : (f = (null === (m = a) || void 0 === m ? void 0 : m.tag_ids) || [], g = (null === (p = a) || void 0 === p ? void 0 : p.list_id) || "", x([{
                  id: Date.now(),
                  event: i,
                  list: g,
                  tags: Array.isArray(f) ? f[0] : f
                }]));
              }
              e.n = 4;
              break;
            case 3:
              e.p = 3, h = e.v, console.error("Error fetching integration data:", h);
            case 4:
              return e.p = 4, B(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    Y = function (e, t, n) {
      x(R.map(function (r) {
        return r.id === e ? vW(vW({}, r), {}, gW({}, t, n)) : r;
      }));
    },
    Q = function () {
      var e = [{
        value: "",
        label: (0, b.__)("Select Event", "ohmylms")
      }];
      switch (n) {
        case "course":
          e.push({
            value: "course_enrollment",
            label: (0, b.__)("Course Enrollment", "ohmylms")
          }, {
            value: "course_completed",
            label: (0, b.__)("Course Completed", "ohmylms")
          }, {
            value: "course_unenrollment",
            label: (0, b.__)("Cancel Enrollment", "ohmylms")
          });
          break;
        case "lesson":
          e.push({
            value: "lesson_completed",
            label: "".concat(a, " ").concat((0, b.__)("Completed", "ohmylms"))
          });
          break;
        case "quiz":
          e.push({
            value: "quiz_submitted",
            label: "".concat(a, " ").concat((0, b.__)("Submitted", "ohmylms"))
          });
          break;
        case "assignment":
          e.push({
            value: "assignment_submitted",
            label: "".concat(a, " ").concat((0, b.__)("Submitted", "ohmylms"))
          });
      }
      return e;
    };
  return z ? React.createElement("div", {
    className: "omlms-integration-modal"
  }, React.createElement("div", {
    className: "omlms-integration-modal__header"
  }, React.createElement("div", {
    className: "omlms-integration-modal__header-left"
  }, React.createElement("button", {
    type: "button",
    className: "omlms-integration-modal__back-btn",
    onClick: c
  }, React.createElement(q.Icon, {
    icon: jr.A
  })), React.createElement("h2", {
    className: "omlms-integration-modal__title"
  }, o ? (0, b.__)("Edit Integration", "ohmylms") : (0, b.__)("Add Integration", "ohmylms")))), React.createElement("div", {
    className: "omlms-integration-modal__content"
  }, React.createElement(I.SkeletonWP, {
    active: !0,
    title: !1,
    rows: 10
  }))) : React.createElement("div", {
    className: "omlms-integration-modal"
  }, React.createElement("div", {
    className: "omlms-integration-modal__header"
  }, React.createElement("div", {
    className: "omlms-integration-modal__header-left"
  }, React.createElement("button", {
    type: "button",
    className: "omlms-integration-modal__back-btn",
    onClick: c,
    disabled: u
  }, React.createElement(q.Icon, {
    icon: jr.A
  })), React.createElement("h2", {
    className: "omlms-integration-modal__title"
  }, o ? (0, b.__)("Edit Integration", "ohmylms") : (0, b.__)("Add Integration", "ohmylms")))), React.createElement("div", {
    className: "omlms-integration-modal__content"
  }, React.createElement("div", {
    className: "omlms-integration-form-wrapper wpfunnels-style"
  }, React.createElement("form", {
    onSubmit: function (e) {
      e.preventDefault();
      var t = R.filter(function (e) {
        return !e.event || !e.tags;
      });
      if (t.length > 0) console.error("Invalid action rows:", t);else {
        var a = {
          name: f,
          crmType: d,
          integrationFor: n,
          contentId: r,
          status: "active",
          actions: R.filter(function (e) {
            return e.event && e.tags;
          }).map(function (e) {
            return {
              event: e.event,
              list_id: e.list,
              tag_ids: e.tags
            };
          })
        };
        i(a);
      }
    }
  }, React.createElement("div", {
    className: "integration-header"
  }, React.createElement("div", {
    className: "integration-name-field"
  }, React.createElement("div", {
    className: "integration-name-label"
  }, React.createElement("label", null, (0, b.__)("Integration Name", "ohmylms")), !y && React.createElement(I.ButtonWP, {
    icon: React.createElement(Re, null),
    variant: "tertiary",
    onClick: function () {
      return _(!0);
    },
    size: "small"
  })), y ? React.createElement(I.InputWP, {
    value: f,
    onChange: function (e) {
      return v(e);
    },
    onBlur: function () {
      return _(!1);
    },
    autoFocus: !0
  }) : React.createElement("div", {
    className: "integration-name-display"
  }, React.createElement("span", null, f))), React.createElement("div", {
    className: "crm-selector"
  }, React.createElement(I.SelectWP, {
    label: (0, b.__)("Connect CRM", "ohmylms"),
    value: d,
    onChange: function (e) {
      m(e), x([{
        id: Date.now(),
        event: "",
        list: "",
        tags: ""
      }]);
    },
    options: [{
      value: "",
      label: (0, b.__)("Select CRM", "ohmylms")
    }].concat(pW(P)),
    disabled: o
  }))), React.createElement(I.SpacerWP, {
    marginBottom: 6
  }), d && React.createElement("div", {
    className: "integration-flow-wrapper"
  }, R.map(function (e, t) {
    return React.createElement("div", {
      key: e.id,
      className: "integration-flow-row"
    }, React.createElement("div", {
      className: "flow-row-container"
    }, React.createElement("div", {
      className: "flow-column when-column"
    }, React.createElement("div", {
      className: "flow-badge when-badge"
    }, (0, b.__)("When", "ohmylms")), React.createElement("div", {
      className: "flow-field-group"
    }, React.createElement("label", {
      className: "flow-label"
    }, (0, b.__)("USER EVENT", "ohmylms"), " *"), React.createElement(I.SelectWP, {
      value: e.event,
      onChange: function (t) {
        return Y(e.id, "event", t);
      },
      options: Q(),
      placeholder: (0, b.__)("Select event", "ohmylms"),
      required: !0
    }))), React.createElement("div", {
      className: "flow-divider"
    }, React.createElement("div", {
      className: "divider-line"
    })), React.createElement("div", {
      className: "flow-column then-column"
    }, React.createElement("div", {
      className: "flow-badge then-badge"
    }, (0, b.__)("Then", "ohmylms")), React.createElement("div", {
      className: "flow-fields-row"
    }, N.length > 0 && React.createElement("div", {
      className: "flow-field-group"
    }, React.createElement("label", {
      className: "flow-label"
    }, (0, b.__)("ADD TO LIST", "ohmylms"), " *"), React.createElement(I.SelectWP, {
      value: e.list || "",
      onChange: function (t) {
        return Y(e.id, "list", t);
      },
      options: [{
        value: "",
        label: (0, b.__)("Select List", "ohmylms")
      }].concat(pW(N)),
      placeholder: (0, b.__)("Select List", "ohmylms")
    })), React.createElement("div", {
      className: "flow-field-group"
    }, React.createElement("label", {
      className: "flow-label"
    }, (0, b.__)("ASSIGN TAG", "ohmylms"), " *"), React.createElement(I.SelectWP, {
      value: e.tags || "",
      onChange: function (t) {
        return Y(e.id, "tags", t);
      },
      options: [{
        value: "",
        label: (0, b.__)("Select Tag", "ohmylms")
      }].concat(pW(M)),
      placeholder: (0, b.__)("Select Tag", "ohmylms"),
      required: !0
    }))))), R.length > 1 && React.createElement("button", {
      type: "button",
      className: "remove-row-link",
      onClick: function () {
        return t = e.id, void (R.length > 1 && x(R.filter(function (e) {
          return e.id !== t;
        })));
        var t;
      }
    }, (0, b.__)("Remove", "ohmylms")), t < R.length - 1 && React.createElement("div", {
      className: "row-connector"
    }));
  }), React.createElement("div", {
    className: "add-row-section"
  }, React.createElement("div", {
    className: "add-connector"
  }), React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: function () {
      x([].concat(pW(R), [{
        id: Date.now(),
        event: "course" === n ? "course_completed" : "".concat(n, "_completed"),
        list: "",
        tags: ""
      }]));
    },
    className: "add-row-btn"
  }, React.createElement(q.Icon, {
    icon: $e.A,
    width: "24px",
    height: "24px"
  }), React.createElement("span", null, (0, b.__)("New Action", "ohmylms"))))), React.createElement(I.SpacerWP, {
    marginBottom: 6
  }), React.createElement(I.FlexWP, {
    justify: "flex-end",
    gap: 3
  }, React.createElement(I.ButtonWP, {
    variant: "secondary",
    onClick: c,
    disabled: u
  }, (0, b.__)("Back", "ohmylms")), React.createElement(I.ButtonWP, {
    variant: "primary",
    type: "submit",
    disabled: u || !d,
    isBusy: u
  }, o ? (0, b.__)("Update", "ohmylms") : (0, b.__)("Save", "ohmylms")))))));
};

const xW = (0, g.memo)(RW);

function CW() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return PW(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (PW(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, PW(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, PW(d, "constructor", u), PW(u, "constructor", c), c.displayName = "GeneratorFunction", PW(u, a, "GeneratorFunction"), PW(d), PW(d, a, "Generator"), PW(d, r, function () {
    return this;
  }), PW(d, "toString", function () {
    return "[object Generator]";
  }), (CW = function () {
    return {
      w: o,
      m
    };
  })();
}

function PW(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  PW = function (e, t, n, r) {
    function o(t, n) {
      PW(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, PW(e, t, n, r);
}

function OW(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function kW(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        OW(o, r, a, i, l, "next", e);
      }
      function l(e) {
        OW(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function jW(e, t) {
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
      if ("string" == typeof e) return AW(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? AW(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function AW(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var MW = function (e) {
  var t = e.isOpen,
    n = e.onClose,
    r = e.integrationFor,
    a = e.contentId,
    o = e.contentName,
    i = jW((0, g.useState)(!1), 2),
    c = i[0],
    u = i[1],
    s = jW((0, g.useState)(!1), 2),
    d = s[0],
    m = s[1],
    p = jW((0, g.useState)(null), 2),
    f = p[0],
    v = p[1],
    h = jW((0, g.useState)(""), 2),
    _ = h[0],
    w = h[1],
    E = jW((0, g.useState)([]), 2),
    S = E[0],
    R = E[1],
    x = jW((0, g.useState)(!1), 2),
    C = x[0],
    P = x[1],
    O = (0, y.useDispatch)(T.default);
  (0, g.useEffect)(function () {
    t && k();
  }, [t]);
  var k = function () {
      var e = kW(CW().m(function e() {
        var t, n, r, a, o;
        return CW().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return P(!0), e.p = 1, e.n = 2, l()({
                path: "/creatorlms/v1/wpfusion/auth/status"
              });
            case 2:
              r = e.v, a = [], null != r && r.success && (null != r && null !== (t = r.data) && void 0 !== t && t.connected || null != r && null !== (n = r.data) && void 0 !== n && n.is_connected) && a.push({
                value: "wpfusion",
                label: (0, b.__)("WP Fusion", "ohmylms")
              }), R(a), e.n = 4;
              break;
            case 3:
              e.p = 3, o = e.v, console.error("Error fetching available CRMs:", o);
            case 4:
              return e.p = 4, P(!1), e.f(4);
            case 5:
              return e.a(2);
          }
        }, e, null, [[1, 3, 4, 5]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    j = function () {
      if (v(null), c) return u(!1), void w("");
      n();
    },
    A = function () {
      var e = kW(CW().m(function e(t) {
        return CW().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              if (a) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              t && w(t), u(!0);
            case 2:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    M = function () {
      var e = kW(CW().m(function e(t) {
        var n, i, c, s, d, p, g, h, y, E, S;
        return CW().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, m(!0), n = t.crmType || _, i = t.integrationFor || r, c = t.contentId || a, s = {
                quiz_submitted: "creator_lms_quiz_submission",
                assignment_submitted: "creator_lms_after_assignment_submitted",
                lesson_completed: "creator_lms_lesson_completed",
                course_completed: "creator_lms_course_completed",
                course_enrollment: "creator_lms_manual_student_enrollment",
                course_unenrollment: "creator_lms_student_unenrolled"
              }, d = t.actions.map(function (e) {
                var t = {
                  event: s[e.event] || e.event,
                  tag_ids: e.tag_ids ? [e.tag_ids] : []
                };
                return e.list_id && (t.list_id = e.list_id), t;
              }), p = {
                name: t.name || "".concat(o, " - ").concat(n),
                crm_type: n,
                trigger_event: "multiple",
                content_type: i,
                content_id: c,
                action_type: "apply_tags",
                action_data: {
                  actions: d
                },
                status: t.status || "active"
              }, g = f ? "/creatorlms/v1/".concat(n, "/triggers/").concat(f) : "/creatorlms/v1/".concat(n, "/triggers"), h = f ? "PUT" : "POST", e.n = 1, l()({
                path: g,
                method: h,
                data: p
              });
            case 1:
              (y = e.v).success && (O.showNotification(f ? (0, b.__)("Integration updated successfully", "ohmylms") : (0, b.__)("Integration created successfully", "ohmylms"), "success"), !f && null !== (E = y.data) && void 0 !== E && E.id && v(y.data.id), u(!1), v(null), w("")), e.n = 3;
              break;
            case 2:
              e.p = 2, S = e.v, O.showNotification((null == S ? void 0 : S.message) || (0, b.__)("Failed to save integration", "ohmylms"), "error");
            case 3:
              return e.p = 3, m(!1), e.f(3);
            case 4:
              return e.a(2);
          }
        }, e, null, [[0, 2, 3, 4]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
    F = function () {
      var e = kW(CW().m(function e(t, n) {
        var r;
        return CW().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return e.p = 0, e.n = 1, l()({
                path: "/creatorlms/v1/".concat(n, "/triggers/").concat(t),
                method: "DELETE"
              });
            case 1:
              e.v.success && O.showNotification((0, b.__)("Integration deleted successfully", "ohmylms"), "success"), e.n = 3;
              break;
            case 2:
              e.p = 2, r = e.v, O.showNotification((null == r ? void 0 : r.message) || (0, b.__)("Failed to delete integration", "ohmylms"), "error");
            case 3:
              return e.a(2);
          }
        }, e, null, [[0, 2]]);
      }));
      return function (t, n) {
        return e.apply(this, arguments);
      };
    }();
  return React.createElement(I.ModalWP, {
    isDismissible: !1,
    __experimentalHideHeader: !0,
    size: "fill",
    style: {
      maxWidth: "1500px"
    },
    overlayClassName: "omlms-modal-wrap omlms-integration-modal-wrap ".concat(c ? "omlms-integration-editor-open" : "omlms-integration-lists"),
    shouldCloseOnEsc: !c,
    shouldCloseOnClickOutside: !c,
    onRequestClose: j,
    className: "omlms-integration-modal-wrapper"
  }, c ? React.createElement(xW, {
    crmType: _,
    integrationFor: r,
    contentId: a,
    contentName: o,
    integrationId: f,
    onSave: M,
    onCancel: j,
    loading: d
  }) : React.createElement(dW, {
    integrationFor: r,
    contentId: a,
    onEdit: function (e) {
      v(e.id), w(e.crm_type || "wpfusion"), u(!0);
    },
    onDelete: F,
    availableCRMs: S,
    onAddNew: A,
    handleClose: j,
    loading: C
  }));
};

const TW = (0, g.memo)(MW);

var IW = n(28351),
  FW = n(83826),
  NW = n.n(FW);

function DW(e, t) {
  var n = t || sn().tz.guess(),
    r = sn().tz(e, n),
    a = sn()().tz(n);
  return r.isAfter(a);
}

function WW(e) {
  return WW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, WW(e);
}

function zW(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function BW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? zW(Object(n), !0).forEach(function (t) {
      LW(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zW(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function LW(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != WW(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != WW(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == WW(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function VW(e, t) {
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
      if ("string" == typeof e) return HW(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? HW(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function HW(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

sn().extend(NW()), sn().extend(lo());
