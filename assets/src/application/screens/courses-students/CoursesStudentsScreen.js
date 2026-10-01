// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var hee = function () {
  HG("ohmylms", "courses");
  var e = (0, y.useDispatch)(T.default),
    t = (0, f.Zp)(),
    n = (0, z.A)(),
    r = n.openNotificationWithIcon,
    a = n.contextHolder,
    o = true,
    i = (0, f.g)().id,
    c = vee((0, g.useState)(!0), 2),
    u = c[0],
    s = c[1],
    d = vee((0, g.useState)([]), 2),
    m = d[0],
    p = d[1],
    h = vee((0, g.useState)(""), 2),
    _ = h[0],
    w = h[1],
    E = vee((0, g.useState)(1), 2),
    S = E[0],
    R = E[1],
    x = vee((0, g.useState)(1), 2),
    C = x[0],
    P = x[1],
    O = vee((0, g.useState)(5), 2),
    k = O[0],
    j = (O[1], vee((0, g.useState)(""), 2)),
    A = j[0],
    M = j[1],
    F = vee((0, g.useState)(!1), 2),
    N = F[0],
    D = F[1],
    W = vee((0, g.useState)(""), 2),
    B = W[0],
    V = W[1],
    H = vee((0, g.useState)("name_asc"), 2),
    G = H[0],
    U = H[1],
    q = vee((0, g.useState)(!1), 2),
    Y = q[0],
    Q = q[1],
    Z = vee((0, g.useState)(!1), 2),
    $ = Z[0],
    K = Z[1],
    J = vee((0, g.useState)([]), 2),
    X = J[0],
    ee = J[1],
    te = vee((0, g.useState)(!1), 2),
    ne = te[0],
    re = te[1],
    ae = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("Name (A-Z)", "ohmylms"),
        value: "name_asc"
      }, {
        label: (0, b.__)("Name (Z-A)", "ohmylms"),
        value: "name_desc"
      }, {
        label: (0, b.__)("Date Enrolled (Newest)", "ohmylms"),
        value: "date_desc"
      }, {
        label: (0, b.__)("Date Enrolled (Oldest)", "ohmylms"),
        value: "date_asc"
      }];
    }, []),
    oe = [{
      key: "student_name",
      title: (0, b.__)("Student Name", "ohmylms"),
      dataIndex: "student_name",
      className: "student-name",
      render: function (e, t) {
        return React.createElement(I.FlexWP, {
          gap: 4,
          justify: "flex-start"
        }, null != t && t.student_img ? React.createElement(gG.A, {
          size: 40,
          src: null == t ? void 0 : t.student_img
        }) : React.createElement("span", {
          className: "ohmylms-col-avatar"
        }, React.createElement(JU, null)), React.createElement("span", {
          className: "ohmylms-title-text"
        }, null == t ? void 0 : t.student_name));
      }
    }, {
      key: "student_email",
      title: (0, b.__)("Email", "ohmylms"),
      dataIndex: "student_email",
      className: "student-email"
    }, {
      key: "registration_date",
      title: (0, b.__)("Registration Date", "ohmylms"),
      dataIndex: "registration_date",
      className: "reg-date",
      isExpandable: !0,
      render: function (e) {
        return React.createElement(React.Fragment, null, sn()(e).format("DD MMMM, YYYY"));
      }
    }, {
      key: "action",
      title: "Action",
      dataIndex: "action",
      className: "action",
      render: function (e, t) {
        return React.createElement(React.Fragment, null, React.createElement(I.ButtonWP, {
          variant: "link",
          icon: React.createElement(zn, null),
          className: "ohmylms-delete-btn",
          onClick: function () {
            return ie(null == t ? void 0 : t.user_id);
          }
        }));
      }
    }],
    ie = (0, g.useCallback)(function (e) {
      K(!0), ee([e]);
    }, []),
    le = (0, g.useCallback)(function () {
      K(!1);
    }, []),
    ce = (0, g.useCallback)(fee(dee().m(function e() {
      var t, n;
      return dee().w(function (e) {
        for (;;) switch (e.p = e.n) {
          case 0:
            return e.p = 0, e.n = 1, l()({
              path: "/ohmylms/v1/courses/".concat(i, "/enroll/").concat(X[0]),
              method: "DELETE"
            });
          case 1:
            null != (t = e.v) && t.success ? w((0, b.__)("Unenrolled Successfully", "ohmylms")) : w((0, b.__)("Failed to unenroll", "ohmylms")), e.n = 3;
            break;
          case 2:
            e.p = 2, n = e.v, console.error(n), w(n.message);
          case 3:
            return e.p = 3, K(!1), de({
              page: 1
            }), R(1), e.f(3);
          case 4:
            return e.a(2);
        }
      }, e, null, [[0, 2, 3, 4]]);
    })), [X]),
    ue = ((0, g.useMemo)(function () {
      return {
        total: C,
        current: S,
        perPage: k,
        onChange: function (e) {
          return R(e);
        }
      };
    }, [C, S, k]), (0, g.useCallback)(function (e) {
      U(e);
    }, [])),
    se = (0, g.useCallback)(function () {
      D(!0);
    }, [o, e]),
    de = function () {
      var e = fee(dee().m(function e() {
        var t,
          n,
          r,
          a,
          o,
          c,
          u,
          d,
          f,
          v,
          g = arguments;
        return dee().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              return t = g.length > 0 && void 0 !== g[0] ? g[0] : {}, e.p = 1, 0 === (null == m ? void 0 : m.length) ? s(!0) : Q(!0), a = uee({
                course_id: i,
                page: S,
                per_page: k,
                search: B,
                offset: (S - 1) * k,
                order_by: G.split("_")[0],
                order: G.split("_")[1]
              }, t), e.n = 2, l()({
                path: (0, lN.addQueryArgs)("/ohmylms/v1/students", a),
                method: "GET",
                parse: !1,
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 2:
              if (f = e.v) {
                e.n = 3;
                break;
              }
              f = [];
            case 3:
              return o = f, e.n = 4, o.json();
            case 4:
              c = e.v, u = null == o || null === (n = o.headers) || void 0 === n ? void 0 : n.get("X-WP-Total"), d = null == o || null === (r = o.headers) || void 0 === r ? void 0 : r.get("X-WP-Course-Name"), M(d), P(u), p(c || []), e.n = 6;
              break;
            case 5:
              e.p = 5, v = e.v, console.error(v);
            case 6:
              return e.p = 6, s(!1), Q(!1), e.f(6);
            case 7:
              return e.a(2);
          }
        }, e, null, [[1, 5, 6, 7]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    me = (0, g.useCallback)(function (e) {
      V(e), R(1);
    }, []);
  return (0, g.useEffect)(function () {
    i ? de() : t("/courses");
  }, [i, S, k, B, G]), (0, g.useEffect)(function () {
    !u && _ && (_.includes("wrong") ? r("error", _) : r("success", _));
  }, [_]), React.createElement(React.Fragment, null, React.createElement(I.ContainerWP, null, a, React.createElement(I.SpacerWP, {
    marginY: 4
  }, React.createElement(I.FlexWP, {
    gap: 4,
    justify: "space-between"
  }, React.createElement(I.CardWP, null, React.createElement(I.FlexWP, {
    justify: "center",
    align: "center",
    gap: 2
  }, React.createElement(I.SpacerWP, {
    padding: 2,
    marginBottom: 0
  }, React.createElement(I.FlexWP, {
    justify: "center",
    align: "center",
    gap: 2
  }, React.createElement(v.Link, {
    to: "/courses"
  }, React.createElement(I.FlexWP, {
    justify: "flex-start",
    align: "center",
    gap: 1
  }, React.createElement(oK, null), (0, b.__)("Courses /", "ohmylms"))), React.createElement(I.TextWP, {
    as: "span"
  }, A))))), React.createElement(I.ButtonWP, {
    variant: "primary",
    onClick: se,
    title: (0, b.__)("Enroll a Student", "ohmylms"),
    autoFocus: !0
  }, React.createElement(nf, null), " ", (0, b.__)("Enroll a Student", "ohmylms"))), React.createElement(I.CardWP, {
    className: "ohmylms-data-table-wrapper"
  }, React.createElement(I.SpacerWP, {
    padding: 5,
    marginTop: 4
  }, React.createElement(I.FlexWP, {
    gap: 4,
    justify: "space-between"
  }, React.createElement(Cm, {
    placeholder: (0, b.__)("Search Students", "ohmylms"),
    onChange: me
  }), React.createElement(vn.A, {
    placeholder: (0, b.__)("Sort", "ohmylms"),
    className: "ohmylms-selectbox-filter",
    onChange: ue,
    value: G,
    options: ae
  })), React.createElement(I.SpacerWP, {
    marginBottom: 4
  }), React.createElement(sN.A, {
    rowKey: "user_id",
    columns: oe,
    dataSource: m || [],
    pagination: !1,
    loading: u || Y,
    scroll: {
      x: "max-content"
    },
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No Students yet!", "ohmylms"),
        description: (0, b.__)("Create your first student and it’ll show up here as soon as you hit publish.", "ohmylms")
      })
    }
  }), !u && !Y && Number(C) > k && React.createElement(fN, {
    total: C,
    currentPage: S,
    onPageChange: function (e) {
      return R(e);
    },
    perPage: k
  }))))), $ && React.createElement(React.Fragment, null, React.createElement(Ie, {
    title: (0, b.__)("Unenroll Student", "ohmylms"),
    description: (0, b.__)("Are you sure you want to unenroll this student?", "ohmylms"),
    onClose: le,
    onDelete: ce,
    isOpen: $
  })), N && React.createElement(iee, {
    isOpen: N,
    setIsOpen: D,
    courseId: i,
    setNotification: w,
    onEnrollment: de
  }), ne && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: ne,
    onClose: re
  })));
};
