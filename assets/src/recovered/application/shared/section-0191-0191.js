// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var X8 = function (e) {
  var t = e.data,
    n = (e.isHover, (0, f.Zp)()),
    r = (0, g.useCallback)(function () {
      n("/students/".concat(null == t ? void 0 : t.user_id, "/report"));
    }, [null == t ? void 0 : t.user_id, n]);
  return React.createElement(UG.A, {
    style: {
      minHeight: "65px",
      minWidth: "220px"
    },
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    align: "start",
    justify: "start",
    gap: 4
  }, React.createElement(v.Link, {
    to: "/students/".concat(null == t ? void 0 : t.user_id, "/report")
  }, null != t && t.student_img ? React.createElement(I.AvatarWP, {
    shape: "circle",
    alt: null == t ? void 0 : t.student_name,
    src: t.student_img,
    size: 40
  }) : React.createElement(JU, null)), React.createElement(I.FlexWP, {
    direction: "column",
    className: "omlms-td-thumbnail-title"
  }, React.createElement(v.Link, {
    to: "/students/".concat(null == t ? void 0 : t.user_id, "/report"),
    title: null == t ? void 0 : t.student_name,
    style: {
      textDecoration: "none"
    }
  }, React.createElement(I.TextWP, {
    as: "span",
    color: "#000d25",
    size: 16,
    numberOfLines: 2,
    truncate: !0
  }, null == t ? void 0 : t.student_name)), React.createElement(I.FlexWP, {
    align: "center",
    justify: "start",
    gap: "2"
  }, React.createElement("div", {
    className: "omlms-td-action-analytics"
  }, React.createElement(I.ButtonWP, {
    icon: React.createElement(vG, null),
    onClick: r,
    variant: "text",
    label: (0, b.__)("Analytics", "ohmylms"),
    style: {
      height: "26px"
    }
  })), React.createElement("div", {
    className: "omlms-td-login-info"
  }, null != t && t.last_login ? React.createElement(I.BadgeWP, {
    variant: "secondary",
    isBorderLess: !0
  }, (0, b.__)("Last login", "ohmylms"), " ", aN()(null == t ? void 0 : t.last_login).format("MMMM DD, YYYY") || "-") : React.createElement(I.BadgeWP, {
    variant: "secondary",
    isBorderLess: !0
  }, (0, b.__)("Not logged in yet", "ohmylms")))))));
};

const e9 = (0, g.memo)(X8);

function t9() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return n9(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (n9(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, n9(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, n9(d, "constructor", u), n9(u, "constructor", c), c.displayName = "GeneratorFunction", n9(u, a, "GeneratorFunction"), n9(d), n9(d, a, "Generator"), n9(d, r, function () {
    return this;
  }), n9(d, "toString", function () {
    return "[object Generator]";
  }), (t9 = function () {
    return {
      w: o,
      m
    };
  })();
}

function n9(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  n9 = function (e, t, n, r) {
    function o(t, n) {
      n9(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, n9(e, t, n, r);
}

function r9(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}

function a9(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        r9(o, r, a, i, l, "next", e);
      }
      function l(e) {
        r9(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}

function o9(e, t) {
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
      if ("string" == typeof e) return i9(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i9(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function i9(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

var l9 = function () {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getAllStudents();
    }, []),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getStudentsPagination();
    }, []),
    r = (n.totalPages, n.total),
    a = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getCategories();
    }, []),
    c = o9((0, g.useState)(""), 2),
    u = c[0],
    s = c[1],
    d = o9((0, g.useState)("all"), 2),
    m = d[0],
    p = (d[1], o9((0, g.useState)(""), 2)),
    v = p[0],
    h = (p[1], o9((0, g.useState)("all"), 2)),
    _ = h[0],
    w = (h[1], o9((0, g.useState)(""), 2)),
    E = w[0],
    S = w[1],
    R = o9((0, g.useState)(1), 2),
    x = R[0],
    C = R[1],
    P = o9((0, g.useState)(!1), 2),
    O = P[0],
    k = P[1],
    j = o9((0, g.useState)([]), 2),
    A = j[0],
    M = j[1],
    F = o9((0, g.useState)(null), 2),
    N = F[0],
    D = F[1],
    W = o9((0, g.useState)(!1), 2),
    B = W[0],
    L = W[1],
    V = o9((0, g.useState)(!1), 2),
    H = V[0],
    G = V[1],
    U = o9((0, g.useState)(null), 2),
    Y = U[0],
    Q = U[1],
    Z = o9((0, g.useState)(null), 2),
    $ = Z[0],
    K = Z[1],
    J = o9((0, g.useState)(5), 2),
    X = J[0],
    ee = (J[1], (0, f.Zp)()),
    te = (0, z.A)(),
    ne = te.openNotificationWithIcon,
    re = te.contextHolder,
    ae = (0, g.useCallback)(a9(t9().m(function t() {
      var n,
        r,
        a,
        o = arguments;
      return t9().w(function (t) {
        for (;;) switch (t.n) {
          case 0:
            n = o.length > 0 && void 0 !== o[0] ? o[0] : "date", r = o.length > 1 && void 0 !== o[1] ? o[1] : "DESC", k(!0), a = {
              offset: (x - 1) * X,
              order: r,
              page: x,
              per_page: X,
              search: E,
              post_status: _,
              orderby: n,
              date_filter: u,
              price_type: m,
              category_id: v
            }, xq(u) && (a.date_filter = "custom", a.start_date = aN()(u[0]).format("YYYY-MM-DD"), a.end_date = aN()(u[1]).format("YYYY-MM-DD")), e.fetchStudents(a).finally(function () {
              k(!1);
            });
          case 1:
            return t.a(2);
        }
      }, t);
    })), [x, X, E, _, u, m, v]),
    oe = (0, g.useCallback)(function (e) {
      S(e), C(1);
    }, []),
    ie = (0, g.useCallback)(function (e) {
      s(e), C(1);
    }, []),
    le = (0, g.useCallback)(function (e) {
      C(e), M([]);
    }, []),
    ce = (0, g.useCallback)(function (e, t, n) {
      var r = {
          student_name: "name",
          student_email: "email",
          registration_date: "registration_date",
          courses_enrolled: "courses_enrolled",
          membership_enrolled: "membership_enrolled"
        }[n.field] || n.field,
        a = {
          ascend: "ASC",
          descend: "DESC"
        }[n.order] || n.order;
      C(1), ae(r, a);
    }, [ae, C]),
    ue = (0, g.useCallback)(function (e) {
      L(!0), Q(e);
    }, []),
    se = (0, g.useCallback)(function () {
      L(!1);
    }, []),
    de = (0, g.useCallback)(a9(t9().m(function t() {
      var n, r;
      return t9().w(function (t) {
        for (;;) switch (t.p = t.n) {
          case 0:
            return t.p = 0, n = {
              ids: Y ? [Y] : A
            }, t.n = 1, l()({
              path: "/creator-lms/v1/students",
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(n)
            });
          case 1:
            "success" === (null == (r = t.v) ? void 0 : r.status) ? e.showNotification((0, b.__)("Students banned successfully.", "ohmylms"), "success") : e.showNotification((0, b.__)("Something went wrong. Please try again.", "ohmylms"), "error"), t.n = 3;
            break;
          case 2:
            t.p = 2, t.v, e.showNotification((0, b.__)("Something went wrong. Please try again.", "ohmylms"), "error");
          case 3:
            return t.p = 3, ae(), M([]), C(1), Q(null), L(!1), t.f(3);
          case 4:
            return t.a(2);
        }
      }, t, null, [[0, 2, 3, 4]]);
    })), [A, Y, ae]),
    me = (0, g.useCallback)(function (e) {
      G(!0), K(e);
    }, []),
    pe = (0, g.useCallback)(function () {
      G(!1), K(null);
    }, []),
    fe = (0, g.useCallback)(a9(t9().m(function t() {
      var n, r;
      return t9().w(function (t) {
        for (;;) switch (t.p = t.n) {
          case 0:
            return t.p = 0, n = {
              ids: [$]
            }, t.n = 1, l()({
              path: "/creator-lms/v1/students/unban",
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(n)
            });
          case 1:
            "success" === (null == (r = t.v) ? void 0 : r.status) ? e.showNotification((0, b.__)("Student unbanned successfully.", "ohmylms"), "success") : e.showNotification((0, b.__)("Something went wrong. Please try again.", "ohmylms"), "error"), t.n = 3;
            break;
          case 2:
            t.p = 2, t.v, e.showNotification((0, b.__)("Something went wrong. Please try again.", "ohmylms"), "error");
          case 3:
            return t.p = 3, ae(), K(null), G(!1), t.f(3);
          case 4:
            return t.a(2);
        }
      }, t, null, [[0, 2, 3, 4]]);
    })), [$, ae]),
    ve = (0, g.useMemo)(function () {
      return [{
        value: "",
        label: (0, b.__)("All Times", "ohmylms")
      }, {
        value: "last_30_days",
        label: (0, b.__)("Last 30 days", "ohmylms")
      }, {
        value: "current_month",
        label: (0, b.__)("Current month", "ohmylms")
      }, {
        value: "previous_month",
        label: (0, b.__)("Previous month", "ohmylms")
      }, {
        value: "current_year",
        label: (0, b.__)("Current year", "ohmylms")
      }, {
        value: "last_12_months",
        label: (0, b.__)("Last 12 months", "ohmylms")
      }];
    }, []),
    ge = (0, g.useMemo)(function () {
      return {
        selectedRowKeys: A,
        onChange: M
      };
    }, [A]),
    he = [{
      title: (0, b.__)("Student Name", "ohmylms"),
      dataIndex: "student_name",
      key: "student_name",
      sorter: !0,
      size: "320px",
      render: function (e, t) {
        var n = N === t.id;
        return React.createElement(e9, {
          data: t,
          isHover: n
        });
      }
    }, {
      title: (0, b.__)("Reg. Date", "ohmylms"),
      dataIndex: "registration_date",
      key: "registration_date",
      sorter: !0,
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, aN()(e).format("MMMM DD, YYYY") || "-");
      }
    }, {
      title: (0, b.__)("Email", "ohmylms"),
      dataIndex: "student_email",
      key: "student_email",
      sorter: !0,
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, e || "-");
      }
    }, {
      title: (0, b.__)("Phone", "ohmylms"),
      dataIndex: "student_phone",
      key: "student_phone",
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, e || "-");
      }
    }, {
      title: (0, b.__)("Course Taken", "ohmylms"),
      dataIndex: "courses_enrolled",
      key: "courses_enrolled",
      sorter: !0,
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, e || 0);
      }
    }, {
      title: (0, b.__)("Membership Taken", "ohmylms"),
      dataIndex: "membership_enrolled",
      key: "membership_enrolled",
      sorter: !0,
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, e || 0);
      }
    }, {
      title: (0, b.__)("Status", "ohmylms"),
      dataIndex: "is_banned",
      key: "is_banned",
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          variant: e ? "danger" : "success",
          isBorderLess: !1
        }, e ? (0, b.__)("Blocked", "ohmylms") : (0, b.__)("Active", "ohmylms"));
      }
    }, {
      title: (0, b.__)("Action", "ohmylms"),
      dataIndex: "action",
      key: "action",
      render: function (e, t) {
        return React.createElement(I.DropdownMenuWP, {
          controls: [{
            title: (0, b.__)("Analytics", "ohmylms"),
            key: "analytics",
            onClick: function () {
              return ee("/students/".concat(null == t ? void 0 : t.user_id, "/report"));
            },
            icon: React.createElement(vG, null)
          }, t.is_banned ? {
            title: (0, b.__)("Unblock", "ohmylms"),
            key: "unban",
            onClick: function () {
              return me(t.user_id);
            },
            icon: React.createElement(RZ, null)
          } : {
            title: (0, b.__)("Block", "ohmylms"),
            key: "ban",
            onClick: function () {
              return ue(t.user_id);
            },
            icon: React.createElement(RZ, null)
          }],
          icon: React.createElement(q.Icon, {
            icon: Ne.A
          })
        });
      }
    }],
    ye = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("Remove", "ohmylms"),
        value: "remove",
        action: function () {
          L(!0);
        }
      }];
    }, []);
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && ae(), function () {
      e = !1;
    };
  }, [x, X, E, u, m, v, _]), (0, g.useEffect)(function () {
    !O && a && ne(o, a);
  }, [a]), React.createElement(React.Fragment, null, re, React.createElement(I.ContainerWP, null, React.createElement(YG, {
    title: (0, b.__)("All Students", "ohmylms"),
    showAddButton: !1
  }), React.createElement(Ea, {
    isBorderless: !0,
    minHeight: "calc(100vh - 200px)"
  }, React.createElement(I.SpacerWP, {
    padding: 5
  }, A.length > 0 ? React.createElement(hN, {
    items: A,
    setItems: M,
    bulksActions: ye
  }) : React.createElement(aY, {
    handleSearch: oe,
    searchPlaceholder: (0, b.__)("Search Students", "ohmylms"),
    handleFilterByDays: ie,
    filterByDays: u,
    filterByDaysOptions: ve,
    categories: i,
    currentPage: x,
    totalItems: r,
    showFilterByPriceType: !1,
    showFilterByCategory: !1,
    showFilterByStatus: !1
  }), React.createElement(sN.A, {
    rowKey: "user_id",
    columns: he,
    dataSource: t || [],
    rowSelection: ge,
    pagination: !1,
    loading: O,
    onChange: ce,
    onMouseEnter: function (e) {
      return D(e.id);
    },
    onRowMouseLeave: function () {
      return D(null);
    },
    className: "student-listing-table",
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No Students yet!", "ohmylms"),
        description: (0, b.__)("Create your first student and it’ll show up here as soon as you hit publish.", "ohmylms")
      })
    }
  }), !O && Number(r) > X && React.createElement(fN, {
    total: r,
    currentPage: x,
    onPageChange: le,
    perPage: X
  })))), B && React.createElement(Ie, {
    title: (A.length, (0, b.__)("Block", "ohmylms")),
    description: A.length > 1 ? (0, b.__)("Are you sure you want to block these students? They will lose access to all their enrolled courses and memberships.", "ohmylms") : (0, b.__)("Are you sure you want to block this student? They will lose access to all their enrolled courses and memberships.", "ohmylms"),
    onClose: se,
    onDelete: de,
    isOpen: B,
    isDelete: !0,
    actionBtnText: (0, b.__)("Block", "ohmylms")
  }), H && React.createElement(Ie, {
    title: (0, b.__)("Unblock Student", "ohmylms"),
    description: (0, b.__)("Are you sure you want to unblock this student? They will regain access to their enrolled courses and memberships.", "ohmylms"),
    onClose: pe,
    onDelete: fe,
    isOpen: H,
    type: (0, b.__)("warning", "ohmylms"),
    isDelete: !1,
    actionBtnText: (0, b.__)("Unblock", "ohmylms")
  }));
};

const c9 = (0, g.memo)(l9);
