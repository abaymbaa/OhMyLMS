// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var $U = n(93509),
  KU = function () {
    return React.createElement(React.Fragment, null, React.createElement("svg", {
      width: "61",
      height: "61",
      fill: "none",
      viewBox: "0 0 61 61",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      fill: "#B6B6BE",
      d: "M30.766.53C14.068.53.529 14.066.529 30.765.53 47.464 14.067 61 30.766 61c16.7 0 30.236-13.536 30.236-30.235C61.002 14.066 47.466.53 30.766.53zm0 9.04c5.525 0 10.002 4.48 10.002 10.002 0 5.523-4.477 10-10.002 10-5.523 0-10-4.477-10-10s4.477-10.001 10-10.001zm-.007 43.525a22.19 22.19 0 01-14.45-5.328 4.262 4.262 0 01-1.496-3.24c0-5.6 4.533-10.083 10.135-10.083h11.638c5.603 0 10.119 4.482 10.119 10.083a4.25 4.25 0 01-1.495 3.238 22.183 22.183 0 01-14.451 5.33z"
    })));
  };
const JU = (0, g.memo)(KU);
var XU = function (e) {
  var t = true,
    n = e.studentData,
    r = e.isHover,
    a = void 0 !== r && r;
  return React.createElement(React.Fragment, null, React.createElement(I.FlexWP, {
    gap: 5,
    justify: "flex-start",
    align: "flex-start",
    style: {
      width: "250px",
      height: "50px"
    }
  }, React.createElement(PG, null, null != n && n.profile_image ? React.createElement(I.AvatarWP, {
    shape: "circle",
    alt: null == n ? void 0 : n.name,
    src: null == n ? void 0 : n.profile_image,
    style: {
      width: "40px",
      height: "40px",
      borderRadius: "50%"
    },
    size: 40,
    wrapperStyle: {
      height: "40px"
    }
  }) : React.createElement(JU, null)), React.createElement("div", {
    className: "ohmylms-student-info"
  }, React.createElement(I.HeadingWP, {
    level: 4,
    className: "student-name"
  }, Ge(null == n ? void 0 : n.name)), React.createElement(I.FlexWP, {
    gap: 2,
    className: "student-email-wrapper"
  }, a ? React.createElement(React.Fragment, null, React.createElement(v.Link, {
    disabled: !t,
    to: "/students/".concat(null == n ? void 0 : n.student_id, "/report"),
    className: "student-analytics-link"
  }, React.createElement(vG, null))) : React.createElement(React.Fragment, null, React.createElement(I.TagWP, {
    className: "student-email"
  }, null == n ? void 0 : n.email))))));
};
const eq = (0, g.memo)(XU);
function tq() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return nq(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (nq(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, nq(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, nq(d, "constructor", u), nq(u, "constructor", c), c.displayName = "GeneratorFunction", nq(u, a, "GeneratorFunction"), nq(d), nq(d, a, "Generator"), nq(d, r, function () {
    return this;
  }), nq(d, "toString", function () {
    return "[object Generator]";
  }), (tq = function () {
    return {
      w: o,
      m
    };
  })();
}
function nq(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  nq = function (e, t, n, r) {
    function o(t, n) {
      nq(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, nq(e, t, n, r);
}
function rq(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function aq(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        rq(o, r, a, i, l, "next", e);
      }
      function l(e) {
        rq(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function oq(e, t) {
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
      if ("string" == typeof e) return iq(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? iq(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function iq(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var lq = function (e) {
  var t = true,
    n = e.students,
    r = (0, f.g)().id,
    a = (0, y.useDispatch)(T.default),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    c = oq((0, g.useState)(n || []), 2),
    u = c[0],
    s = c[1],
    d = oq((0, g.useState)(!1), 2),
    m = d[0],
    p = d[1],
    v = oq((0, g.useState)(!1), 2),
    h = v[0],
    _ = v[1],
    w = oq((0, g.useState)(!1), 2),
    E = w[0],
    S = w[1],
    R = oq((0, g.useState)(""), 2),
    x = R[0],
    C = R[1],
    P = oq((0, g.useState)(1), 2),
    O = (P[0], P[1]),
    k = oq((0, g.useState)(""), 2),
    j = k[0],
    A = k[1],
    M = oq((0, g.useState)("all"), 2),
    F = M[0],
    N = M[1],
    W = oq((0, g.useState)(""), 2),
    B = W[0],
    V = W[1],
    H = oq((0, g.useState)(""), 2),
    G = H[0],
    U = H[1],
    q = oq((0, g.useState)(""), 2),
    Y = q[0],
    Q = q[1],
    Z = oq((0, g.useState)(null), 2),
    $ = Z[0],
    K = Z[1],
    J = oq((0, g.useState)(!1), 2),
    X = J[0],
    ee = J[1],
    te = (0, z.A)(),
    ne = te.openNotificationWithIcon,
    re = te.contextHolder,
    ae = oq((0, g.useState)(null), 2),
    oe = ae[0],
    ie = ae[1],
    le = [{
      title: "Student Name",
      dataIndex: "student-name",
      key: "student-name",
      className: "col-student-name",
      sorter: !0,
      render: function (e, t) {
        var n = oe === t.id;
        return React.createElement(eq, {
          studentData: t,
          isHover: n
        });
      }
    }, {
      title: "Skipped Quizzes",
      dataIndex: "skipped_quizzes",
      key: "skipped_quizzes",
      className: "col-skipped-quizzes",
      render: function (e) {
        return React.createElement(React.Fragment, null, e.length > 0 ? e.map(function (e, t) {
          return React.createElement(kt.A, {
            key: t
          }, Ge(null == e ? void 0 : e.name));
        }) : "--");
      }
    }, {
      title: "Skipped Assignment ",
      dataIndex: "skipped_assignments",
      key: "skipped_assignments",
      className: "col-skipped-assignment",
      render: function (e) {
        return React.createElement(React.Fragment, null, e.length > 0 ? e.map(function (e, t) {
          return React.createElement(kt.A, {
            key: t
          }, Ge(null == e ? void 0 : e.name));
        }) : "--");
      }
    }, {
      title: "Completed All? ",
      dataIndex: "completion_rate",
      key: "completion_rate",
      className: "col-completed-all",
      render: function (e) {
        return React.createElement(React.Fragment, null, React.createElement("div", {
          className: "course-status-wrapper ".concat("100" == e ? "status-completed" : "status-in-progress", " ").concat(Number(e) >= 50 ? "progress-green" : "")
        }, React.createElement(kt.A, null, "100" == e ? (0, b.__)("Yes", "ohmylms") : (0, b.__)("No", "ohmylms")), " ", React.createElement("span", {
          className: "status-progressbar",
          "data-percent": "".concat(e)
        }, React.createElement("span", {
          className: "status-progressbar-inner",
          style: {
            width: "calc(".concat(e, "% + 2px)")
          }
        }), React.createElement("span", {
          className: "progressbar-percentage"
        }, "".concat(e), "%"))));
      }
    }, {
      title: "Enrolled Date",
      dataIndex: "start_date",
      key: "start_date",
      className: "col-enrolled-date",
      sorter: !0,
      render: function (e) {
        return React.createElement("span", null, aN()(e).format("MMMM DD, YYYY") || "-");
      }
    }, {
      title: "Action",
      dataIndex: "action",
      key: "action",
      className: "col-table-action",
      render: function (e, t) {
        return React.createElement(D.A, {
          className: "send-reminder",
          onClick: function () {
            return ce(null == t ? void 0 : t.email, null == t ? void 0 : t.student_id);
          },
          disabled: 100 == (null == t ? void 0 : t.completion_rate),
          variant: "secondary"
        }, (0, b.__)("Send Reminder", "ohmylms"));
      }
    }],
    ce = (0, g.useCallback)(function (e, n) {
      V(e), S(!0), K(n);
    }, []),
    ue = (0, g.useCallback)(aq(tq().m(function e() {
      var t, n;
      return tq().w(function (e) {
        for (;;) switch (e.p = e.n) {
          case 0:
            if (r && $ && B && G) {
              e.n = 1;
              break;
            }
            return ne("error", "Subject and Email are required"), e.a(2);
          case 1:
            return t = {
              student_id: $,
              course_id: r,
              email: B,
              subject: G,
              message: tinymce.get("new-message").getContent() || Y
            }, e.p = 2, ee(!0), e.n = 3, l()({
              path: "/ohmylms/v1/notification/course/".concat(r, "/student/").concat($),
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(t)
            });
          case 3:
            null != (n = e.v) && n.status ? a.showNotification((0, b.__)("Email sent successfully", "ohmylms"), "success") : a.showNotification((0, b.__)("Email not sent", "ohmylms"), "error"), e.n = 5;
            break;
          case 4:
            e.p = 4, e.v, a.showNotification((0, b.__)("Error sending email", "ohmylms"), "error");
          case 5:
            return e.p = 5, ee(!1), S(!1), V(""), U(""), Q(""), e.f(5);
          case 6:
            return e.a(2);
        }
      }, e, null, [[2, 4, 5, 6]]);
    })), [B, G, Y]),
    se = (0, g.useCallback)(function () {
      S(!1), V(""), U(""), Q("");
    }, []),
    de = (0, g.useMemo)(function () {
      return [{
        value: "all",
        label: (0, b.__)("All", "ohmylms")
      }, {
        value: "completed",
        label: (0, b.__)("Completed", "ohmylms")
      }, {
        value: "not_completed",
        label: (0, b.__)("In Progress", "ohmylms")
      }];
    }, []),
    me = (0, g.useCallback)(function (e) {
      C(e), O(1), p(!0);
    }, []),
    pe = (0, g.useCallback)(function (e) {
      A(e), O(1), p(!0);
    }, []),
    fe = (0, g.useCallback)(function (e) {
      N(e), O(1), p(!0);
    }, []),
    ve = (0, g.useCallback)(aq(tq().m(function e() {
      var t,
        n,
        a,
        o,
        i,
        c,
        u = arguments;
      return tq().w(function (e) {
        for (;;) switch (e.p = e.n) {
          case 0:
            return t = u.length > 0 && void 0 !== u[0] ? u[0] : "date", n = u.length > 1 && void 0 !== u[1] ? u[1] : "DESC", _(!0), e.p = 1, o = {
              sort_by: n,
              filter: j || "",
              search: x || "",
              order: t,
              completion_type: F,
              data_type: "student"
            }, "string" != typeof j && (o.filter = "custom", o.start_date = aN()(j[0]).format("YYYY-MM-DD"), o.end_date = aN()(j[1]).format("YYYY-MM-DD")), e.n = 2, l()({
              path: (0, lN.addQueryArgs)("/ohmylms/v1/analytics/course/".concat(r), o),
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            });
          case 2:
            null != (i = e.v) && null !== (a = i.students) && void 0 !== a && a.errors || s(null == i ? void 0 : i.students), e.n = 4;
            break;
          case 3:
            e.p = 3, c = e.v, console.error("Error fetching data:", c);
          case 4:
            return e.p = 4, _(!1), e.f(4);
          case 5:
            return e.a(2);
        }
      }, e, null, [[1, 3, 4, 5]]);
    })), [r, j, x, F]);
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && m && ve(), function () {
      e = !1;
    };
  }, [j, x, r, F]), (0, g.useEffect)(function () {
    n && !m && (s(n), p(!0));
  }, [n]), (0, g.useEffect)(function () {
    !h && o && ne(i, o);
  }, [o]), React.createElement(React.Fragment, null, re, React.createElement("div", {
    className: "ohmylms-course-report-table-wrapper"
  }, React.createElement(I.FlexWP, {
    gap: 4,
    justify: "flex-start"
  }, React.createElement(I.FlexItemWP, null, React.createElement(Cm, {
    placeholder: (0, b.__)("Search", "ohmylms"),
    onChange: me,
    className: "ohmylms-filter-report-search"
  })), React.createElement(I.FlexItemWP, null, React.createElement(ZU, {
    placeholder: (0, b.__)("Filter By Days", "ohmylms"),
    className: "ohmylms-filter-report-by-days",
    popupClassName: "ohmylms-custom-daterange",
    onChange: function (e) {
      "custom_range" !== e && pe(e);
    },
    onRangeChange: pe
  })), React.createElement(I.FlexItemWP, null, React.createElement(vn.A, {
    placeholder: (0, b.__)("Status", "ohmylms"),
    className: "ohmylms-filter-report-status",
    onChange: fe,
    value: F,
    options: de
  }))), React.createElement(I.SpacerWP, {
    marginBottom: 5
  }), React.createElement(sN.A, {
    rowKey: "student_id",
    columns: le,
    dataSource: null != u ? u : [],
    pagination: !1,
    loading: h,
    scroll: {
      x: "max-content"
    },
    onMouseEnterOnRow: function (e) {
      return ie(null == e ? void 0 : e.id);
    },
    onMouseLeaveOnRow: function () {
      return ie(null);
    },
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("Things are quiet for now", "ohmylms"),
        description: (0, b.__)("Once learners start engaging, you’ll see their actions and progress right here.", "ohmylms")
      })
    }
  }), E && t && React.createElement(UU, {
    isOpen: E,
    handleCancel: se,
    handleOk: ue,
    email: B,
    isEmailDisabled: !0,
    onSubjectChange: U,
    subject: G,
    onEmailBodyChange: Q,
    emailBody: Y,
    loading: X
  })));
};
const cq = (0, g.memo)(lq);
function uq(e) {
  return uq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, uq(e);
}
function sq(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function dq(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? sq(Object(n), !0).forEach(function (t) {
      mq(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sq(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function mq(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != uq(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != uq(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == uq(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function pq() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return fq(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (fq(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, fq(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, fq(d, "constructor", u), fq(u, "constructor", c), c.displayName = "GeneratorFunction", fq(u, a, "GeneratorFunction"), fq(d), fq(d, a, "Generator"), fq(d, r, function () {
    return this;
  }), fq(d, "toString", function () {
    return "[object Generator]";
  }), (pq = function () {
    return {
      w: o,
      m
    };
  })();
}
function fq(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  fq = function (e, t, n, r) {
    function o(t, n) {
      fq(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, fq(e, t, n, r);
}
function vq(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function gq(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        vq(o, r, a, i, l, "next", e);
      }
      function l(e) {
        vq(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function hq(e, t) {
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
      if ("string" == typeof e) return yq(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yq(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function yq(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
