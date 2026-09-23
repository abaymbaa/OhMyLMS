// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var vY = function () {
  var e = (0, L.useIsPro)(),
    t = (0, y.useDispatch)(T.default),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).selectCourses();
    }, []),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectCoursesPagination();
    }, []),
    a = (r.totalPages, r.totalCourses),
    o = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    c = (0, y.useSelect)(function (e) {
      return e(T.default).getAllCategories();
    }, []),
    u = mY((0, g.useState)(""), 2),
    s = u[0],
    d = u[1],
    m = mY((0, g.useState)("all"), 2),
    p = m[0],
    h = m[1],
    _ = mY((0, g.useState)(""), 2),
    w = _[0],
    E = _[1],
    S = mY((0, g.useState)("all"), 2),
    R = S[0],
    x = S[1],
    C = mY((0, g.useState)(""), 2),
    P = C[0],
    O = C[1],
    k = mY((0, g.useState)(1), 2),
    j = k[0],
    A = k[1],
    M = mY((0, g.useState)(!1), 2),
    F = M[0],
    N = M[1],
    D = mY((0, g.useState)([]), 2),
    W = D[0],
    B = D[1],
    V = mY((0, g.useState)(null), 2),
    H = V[0],
    G = V[1],
    U = mY((0, g.useState)(!1), 2),
    Y = U[0],
    Q = U[1],
    Z = mY((0, g.useState)(!1), 2),
    $ = Z[0],
    K = Z[1],
    J = mY((0, g.useState)(!1), 2),
    X = J[0],
    ee = (J[1], mY((0, g.useState)(!1), 2)),
    te = ee[0],
    ne = ee[1],
    re = mY((0, g.useState)(null), 2),
    ae = re[0],
    oe = re[1],
    ie = mY((0, g.useState)(5), 2),
    le = (ie[0], ie[1], mY((0, g.useState)(!1), 2)),
    ce = le[0],
    ue = le[1],
    se = mY((0, g.useState)(!1), 2),
    de = se[0],
    me = se[1],
    pe = mY((0, g.useState)("1.2"), 2),
    fe = pe[0],
    ve = pe[1],
    ge = mY((0, g.useState)(!1), 2),
    he = ge[0],
    ye = ge[1],
    be = mY((0, g.useState)(!1), 2),
    _e = be[0],
    we = be[1],
    Ee = mY((0, g.useState)(!1), 2),
    Se = Ee[0],
    Re = Ee[1],
    xe = mY((0, g.useState)(!1), 2),
    Ce = xe[0],
    Pe = xe[1],
    Oe = mY((0, g.useState)(!1), 2),
    ke = (Oe[0], Oe[1], mY((0, g.useState)(!1), 2)),
    je = ke[0],
    Ae = ke[1],
    Me = function () {
      var e = function (e, t) {
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
              if ("string" == typeof e) return iY(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? iY(e, t) : void 0;
            }
          }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }((0, g.useState)(!1), 2),
        t = e[0],
        n = e[1],
        r = (0, g.useCallback)(function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "download_".concat(new Date().toISOString(), ".json");
          try {
            n(!0);
            var r = "object" === oY(e) ? JSON.stringify(e, null, 2) : e,
              a = new Blob([r], {
                type: "application/json"
              }),
              o = window.URL.createObjectURL(a),
              i = document.createElement("a");
            return i.href = o, i.download = t, document.body.appendChild(i), i.click(), document.body.removeChild(i), window.URL.revokeObjectURL(o), n(!1), !0;
          } catch (e) {
            return console.error("Download failed:", e), n(!1), !1;
          }
        }, []);
      return {
        isDownloading: t,
        downloadFile: r
      };
    }(),
    Te = (Me.isDownloading, Me.downloadFile),
    Fe = (0, z.A)(),
    De = Fe.openNotificationWithIcon,
    ze = Fe.contextHolder,
    Be = (0, f.Zp)(),
    Le = (0, f.zy)();
  (0, g.useEffect)(function () {
    "true" === new URLSearchParams(Le.search).get("openAddCourseModal") && (Ae(!0), Be("/courses", {
      replace: !0
    }));
  }, [Le.search, Be]);
  var Ve = (0, g.useCallback)(dY(cY().m(function e() {
      var n,
        r,
        a,
        o = arguments;
      return cY().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            n = o.length > 0 && void 0 !== o[0] ? o[0] : "date", r = o.length > 1 && void 0 !== o[1] ? o[1] : "DESC", N(!0), a = {
              offset: 5 * (j - 1),
              order: r,
              page: j,
              per_page: 5,
              search: P,
              post_status: R,
              orderby: n,
              date_filter: s,
              price_type: p,
              category_id: w
            }, xq(s) && (a.date_filter = "custom", a.start_date = sn()(s[0]).format("YYYY-MM-DD"), a.end_date = sn()(s[1]).format("YYYY-MM-DD")), t.fetchCourses(a).finally(function () {
              N(!1);
            });
          case 1:
            return e.a(2);
        }
      }, e);
    })), [j, P, s, p, w, R]),
    Ge = (0, g.useCallback)(dY(cY().m(function e() {
      return cY().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            Ae(!0);
          case 1:
            return e.a(2);
        }
      }, e);
    })), []),
    Ue = (0, g.useCallback)(function (e) {
      O(e), A(1);
    }, []),
    qe = (0, g.useCallback)(function (e) {
      d(e), A(1);
    }, []),
    Ye = (0, g.useCallback)(function (e) {
      h(e), A(1);
    }, []),
    Qe = (0, g.useCallback)(function (e) {
      E(e), A(1);
    }, []),
    Ze = (0, g.useCallback)(function (e) {
      x(e), A(1);
    }, []),
    $e = (0, g.useCallback)(function (e) {
      A(e), B([]);
    }, []),
    Ke = (0, g.useCallback)(function (e, t, n) {
      var r = {
          date_created: "date",
          total_enrollment: "enrollment",
          status: "post_status",
          price: "price",
          courseDetails: "title"
        }[n.field] || n.field,
        a = {
          ascend: "ASC",
          descend: "DESC"
        }[n.order] || n.order;
      A(1), Ve(r, a);
    }, [Ve, A]),
    Je = (0, g.useCallback)(function (e) {
      window.open(e, "_blank");
    }, []),
    Xe = (0, g.useCallback)(function (e) {
      ne(!0), oe(e);
    }, []),
    et = (0, g.useCallback)(function () {
      ne(!1);
    }, []),
    tt = (0, g.useCallback)(dY(cY().m(function e() {
      return cY().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            return e.n = 1, t.handleBulkDelete("courses", {
              course_ids: ae ? [ae] : W
            });
          case 1:
            e.v, Ve(), B([]), A(1), oe(null), ne(!1);
          case 2:
            return e.a(2);
        }
      }, e);
    })), [W, ae, Ve]),
    nt = (0, g.useCallback)(function () {
      var n = dY(cY().m(function n(r) {
        var a, o;
        return cY().w(function (n) {
          for (;;) switch (n.n) {
            case 0:
              if (e) {
                n.n = 1;
                break;
              }
              return Pe(!0), n.a(2);
            case 1:
              if (!r) {
                n.n = 3;
                break;
              }
              return n.n = 2, t.exportCourses([r]);
            case 2:
              a = n.v, n.n = 5;
              break;
            case 3:
              return n.n = 4, t.exportCourses(W);
            case 4:
              a = n.v;
            case 5:
              o = null, a && (o = Te(a, "courses_export_".concat(new Date().toISOString(), ".json"))), o && t.showNotification((0, b.__)("Exported successfully.", "ohmylms"), "success"), ue(!1), B([]);
            case 6:
              return n.a(2);
          }
        }, n);
      }));
      return function (e) {
        return n.apply(this, arguments);
      };
    }(), [e, Te, W]),
    rt = (0, g.useCallback)(function () {
      ue(!1);
    }, []),
    at = (0, g.useCallback)(dY(cY().m(function n() {
      var r, a;
      return cY().w(function (n) {
        for (;;) switch (n.p = n.n) {
          case 0:
            if (e) {
              n.n = 1;
              break;
            }
            return Pe(!0), n.a(2);
          case 1:
            if (ye(!0), n.p = 2, !ae) {
              n.n = 4;
              break;
            }
            return n.n = 3, t.exportCoursesAsScorm([ae], fe);
          case 3:
            a = n.v, n.n = 6;
            break;
          case 4:
            return n.n = 5, t.exportCoursesAsScorm(W, fe);
          case 5:
            a = n.v;
          case 6:
            null !== (r = a) && void 0 !== r && r.success ? (t.showNotification((0, b.__)("SCORM package is being downloaded...", "ohmylms"), "success"), me(!1), B([]), oe(null)) : t.showNotification((0, b.__)("SCORM export failed. Please try again.", "ohmylms"), "error"), n.n = 8;
            break;
          case 7:
            n.p = 7, n.v, t.showNotification((0, b.__)("SCORM export failed. Please try again.", "ohmylms"), "error");
          case 8:
            return n.p = 8, ye(!1), n.f(8);
          case 9:
            return n.a(2);
        }
      }, n, null, [[2, 7, 8, 9]]);
    })), [e, W, fe, ae]),
    ot = (0, g.useCallback)(function () {
      me(!1), ve("1.2"), oe(null);
    }, []),
    it = (0, g.useCallback)(function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      e ? (t && oe(t), me(!0)) : Pe(!0);
    }, [e]),
    lt = (0, g.useCallback)(function () {
      var e = dY(cY().m(function e(t) {
        var n, r;
        return cY().w(function (e) {
          for (;;) switch (e.n) {
            case 0:
              return n = {
                status: "publish"
              }, e.n = 1, l()({
                path: "/creator-lms/v1/courses/".concat(t, "/status"),
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(n)
              });
            case 1:
              "success" === (null == (r = e.v) ? void 0 : r.status) && (De("success", (0, b.__)("Course published successfully.", "ohmylms")), Ve());
            case 2:
              return e.a(2);
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(), []),
    ct = (0, g.useCallback)(dY(cY().m(function t() {
      var n, r;
      return cY().w(function (t) {
        for (;;) switch (t.p = t.n) {
          case 0:
            if (e && !Se) {
              t.n = 1;
              break;
            }
            return t.a(2);
          case 1:
            return t.p = 1, Re(!0), t.n = 2, l()({
              path: "/creator-lms/v1/courses/".concat(ae, "/clone"),
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              }
            });
          case 2:
            "success" === (null == (n = t.v) ? void 0 : n.status) && De("success", (0, b.__)("Course duplicated successfully.", "ohmylms")), t.n = 4;
            break;
          case 3:
            t.p = 3, r = t.v, console.error(r), De("error", (0, b.__)("Something went wrong!", "ohmylms"));
          case 4:
            return t.p = 4, Ve(), oe(null), we(!1), Re(!1), t.f(4);
          case 5:
            return t.a(2);
        }
      }, t, null, [[1, 3, 4, 5]]);
    })), [ae, Se, e]),
    ut = (0, g.useCallback)(function () {
      oe(null), we(!1);
    }, []),
    st = (0, g.useCallback)(function (t) {
      e ? (we(!0), oe(t)) : Pe(!0);
    }, []),
    dt = (0, g.useCallback)(function () {
      Q(!0);
    }, []),
    mt = (0, g.useCallback)(function () {
      Q(!1), K(!1);
    }, []),
    pt = (0, g.useCallback)(function () {
      var e = dY(cY().m(function e(n) {
        var r,
          a,
          o,
          i,
          l,
          c,
          u = arguments;
        return cY().w(function (e) {
          for (;;) switch (e.p = e.n) {
            case 0:
              if (r = u.length > 1 && void 0 !== u[1] ? u[1] : "json", n) {
                e.n = 1;
                break;
              }
              return e.a(2);
            case 1:
              if (e.p = 1, K(!0), "scorm" !== r) {
                e.n = 3;
                break;
              }
              return e.n = 2, t.importScormCourse(n);
            case 2:
              o = e.v, e.n = 5;
              break;
            case 3:
              return e.n = 4, t.importCourse(n);
            case 4:
              o = e.v;
            case 5:
              null !== (a = o) && void 0 !== a && a.success && (Q(!1), Ve(), "scorm" === r && null !== (i = o) && void 0 !== i && i.data && ((l = o.data).chapters_created, l.lessons_created, l.quizzes_created, l.media_imported)), e.n = 7;
              break;
            case 6:
              e.p = 6, c = e.v, console.error(c), De("error", c.message || (0, b.__)("Import failed", "ohmylms"));
            case 7:
              return e.p = 7, K(!1), e.f(7);
            case 8:
              return e.a(2);
          }
        }, e, null, [[1, 6, 7, 8]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(), [t, Ve, De]),
    ft = (0, g.useMemo)(function () {
      return [{
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
    vt = (0, g.useMemo)(function () {
      return [{
        value: "all",
        label: (0, b.__)("All Price Type", "ohmylms")
      }, {
        value: "free",
        label: (0, b.__)("Free", "ohmylms")
      }, {
        value: "paid",
        label: (0, b.__)("Paid", "ohmylms")
      }];
    }, []),
    gt = (0, g.useMemo)(function () {
      return {
        label: (0, b.__)("Add Course", "ohmylms"),
        onClick: Ge,
        loading: X
      };
    }, [X, Ge]),
    ht = (0, g.useMemo)(function () {
      return [{
        value: "all",
        label: (0, b.__)("All Status", "ohmylms")
      }, {
        value: "publish",
        label: (0, b.__)("Published", "ohmylms")
      }, {
        value: "future",
        label: (0, b.__)("Scheduled", "ohmylms")
      }, {
        value: "draft",
        label: (0, b.__)("Draft", "ohmylms")
      }];
    }, []),
    yt = (0, g.useMemo)(function () {
      return {
        selectedRowKeys: W,
        onChange: B
      };
    }, [W]),
    bt = [{
      title: (0, b.__)("Course Details", "ohmylms"),
      dataIndex: "courseDetails",
      key: "courseDetails",
      sorter: !0,
      width: "420px",
      render: function (e, t) {
        var n = H === t.id;
        return React.createElement(yG, {
          course: t,
          isHover: n
        });
      }
    }, {
      title: (0, b.__)("Course Type", "ohmylms"),
      dataIndex: "type",
      key: "type",
      width: 150,
      render: function (e) {
        return "cohort-based" === e ? React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, (0, b.__)("Cohort", "ohmylms")) : React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, (0, b.__)("Self-paced", "ohmylms"));
      }
    }, {
      title: (0, b.__)("Date", "ohmylms"),
      dataIndex: "date_created",
      key: "date_created",
      sorter: !0,
      width: null,
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, sn()(null == e ? void 0 : e.date).format("MMMM DD, YYYY") || "-");
      }
    }, {
      title: (0, b.__)("Total Enrolled", "ohmylms"),
      dataIndex: "total_enrollment",
      key: "total_enrollment",
      sorter: !0,
      width: null,
      render: function (e, t) {
        return React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, e ? React.createElement(v.Link, {
          to: "".concat(null == t ? void 0 : t.id, "/students")
        }, e, " ") : "-");
      }
    }, {
      title: (0, b.__)("Status", "ohmylms"),
      dataIndex: "status",
      key: "status",
      width: null,
      render: function (e, t) {
        return React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "publish" === e ? "success" : "future" === e ? "warning" : "secondary",
          style: {
            textTransform: "capitalize"
          }
        }, "publish" === e ? (0, b.__)("Published", "ohmylms") : "future" === e ? (0, b.__)("Scheduled", "ohmylms") : (0, b.__)("Draft", "ohmylms"));
      }
    }, {
      title: (0, b.__)("Price", "ohmylms"),
      dataIndex: "price",
      key: "price",
      width: null,
      render: function (e, t) {
        return "paid" === (null == t ? void 0 : t.price_type) ? React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, t.sale_price ? React.createElement(React.Fragment, null, React.createElement(YH, {
          currency: (null == t ? void 0 : t.currency) || "$",
          currency_pos: (null == t ? void 0 : t.currency_pos) || "left",
          price: Number((null == t ? void 0 : t.sale_price) || "0")
        }), " ", React.createElement("del", null, React.createElement(YH, {
          currency: (null == t ? void 0 : t.currency) || "$",
          currency_pos: (null == t ? void 0 : t.currency_pos) || "left",
          price: Number((null == t ? void 0 : t.regular_price) || "0"),
          del: !0
        }))) : React.createElement(YH, {
          currency: (null == t ? void 0 : t.currency) || "$",
          currency_pos: (null == t ? void 0 : t.currency_pos) || "left",
          price: Number((null == t ? void 0 : t.price) || "0")
        })) : React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, (0, b.__)("Free", "ohmylms"));
      }
    }, {
      title: (0, b.__)("Action", "ohmylms"),
      dataIndex: "action",
      key: "action",
      width: null,
      render: function (e, t) {
        return React.createElement(I.DropdownMenuWP, {
          controls: [{
            title: (0, b.__)("View", "ohmylms"),
            onClick: function () {
              return Je(null == t ? void 0 : t.course_url);
            },
            icon: React.createElement(Br, null)
          }].concat(lY("publish" !== (null == t ? void 0 : t.status) ? [{
            title: (0, b.__)("Publish", "ohmylms"),
            onClick: function () {
              return lt(null == t ? void 0 : t.id);
            },
            icon: React.createElement(Ot, null)
          }] : []), [{
            title: (0, b.__)("Duplicate", "ohmylms"),
            onClick: function () {
              return st(null == t ? void 0 : t.id);
            },
            icon: React.createElement(yc, null),
            isPro: !0
          }, {
            title: (0, b.__)("Export", "ohmylms"),
            onClick: function () {
              return nt(null == t ? void 0 : t.id);
            },
            icon: React.createElement(iN, null),
            isPro: !0
          }, {
            title: (0, b.__)("Export as SCORM", "ohmylms"),
            onClick: function () {
              return it(null == t ? void 0 : t.id);
            },
            icon: React.createElement(iN, null),
            isPro: !0
          }, {
            title: (0, b.__)("Delete", "ohmylms"),
            onClick: function () {
              return Xe(null == t ? void 0 : t.id);
            },
            icon: React.createElement(We, null)
          }]),
          icon: React.createElement(q.Icon, {
            icon: Ne.A
          })
        });
      }
    }],
    _t = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("Delete", "ohmylms"),
        value: "delete",
        action: function () {
          ne(!0);
        }
      }, {
        label: (0, b.__)("Export", "ohmylms"),
        value: "export",
        disabled: !e,
        action: function () {
          ue(!0);
        }
      }];
    }, [W, e]);
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && Ve(), function () {
      e = !1;
    };
  }, [j, P, s, p, w, R]), (0, g.useEffect)(function () {
    !F && o && De(i, o);
  }, [o]), React.createElement(React.Fragment, null, ze, React.createElement(I.ContainerWP, null, React.createElement(YG, {
    title: (0, b.__)("All Courses", "ohmylms"),
    showAddButton: !0,
    addButtonConfig: gt
  }, React.createElement(Gq, {
    onClick: dt
  })), React.createElement(Ea, {
    isBorderless: !0,
    minHeight: "calc(100vh - 200px)"
  }, React.createElement(I.SpacerWP, {
    padding: 5
  }, W.length > 0 ? React.createElement(React.Fragment, null, React.createElement(hN, {
    items: W,
    setItems: B,
    bulksActions: _t
  })) : React.createElement(React.Fragment, null, React.createElement(aY, {
    handleSearch: Ue,
    searchPlaceholder: (0, b.__)("Search Course", "ohmylms"),
    handleFilterByDays: qe,
    handleFilterByPriceType: Ye,
    handleFilterByCategory: Qe,
    filterByDays: s,
    filterByPriceType: p,
    filterByCategory: w,
    filterByDaysOptions: ft,
    filterByPriceTypeOptions: vt,
    categories: c,
    currentPage: j,
    totalItems: a,
    handleFilterByStatus: Ze,
    filterByStatus: R,
    filterByStatusOptions: ht
  })), React.createElement(sN.A, {
    rowKey: "id",
    columns: bt,
    dataSource: n || [],
    rowSelection: yt,
    pagination: !1,
    loading: F,
    onChange: Ke,
    scroll: {
      x: "max-content"
    },
    onRowMouseEnter: function (e) {
      return G(null == e ? void 0 : e.id);
    },
    onRowMouseLeave: function () {
      return G(null);
    },
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No courses yet!", "ohmylms"),
        description: (0, b.__)("Start building your first course and it’ll show up here as soon as you hit publish.", "ohmylms"),
        ctaText: (0, b.__)("Add Course", "ohmylms"),
        ctaHandler: Ge
      })
    }
  }), !F && Number(a) > 5 && React.createElement(fN, {
    total: a,
    currentPage: j,
    onPageChange: $e,
    perPage: 5
  })))), Y && React.createElement(React.Fragment, null, React.createElement(VG, {
    onClose: mt,
    onAction: pt,
    isOpen: Y,
    cancelBtnText: (0, b.__)("Cancel", "ohmylms"),
    actionBtnText: (0, b.__)("Import", "ohmylms"),
    loading: $,
    supportScorm: !0,
    jsonImportEnabled: e
  })), te && React.createElement(React.Fragment, null, React.createElement(Ie, {
    title: W.length > 1 ? (0, b.__)("Delete Courses", "ohmylms") : (0, b.__)("Delete Course", "ohmylms"),
    description: W.length > 1 ? (0, b.__)("Are you sure you want to delete these courses?", "ohmylms") : (0, b.__)("Are you sure you want to delete course?", "ohmylms"),
    onClose: et,
    onDelete: tt,
    isOpen: te,
    isDelete: !0
  })), ce && React.createElement(React.Fragment, null, React.createElement(Ie, {
    title: (0, b.__)("Export Courses", "ohmylms"),
    description: React.createElement(React.Fragment, null, (0, b.__)("You are about to export the selected courses.", "ohmylms"), React.createElement("br", null), (0, b.__)(" Do you want to proceed?", "ohmylms")),
    onClose: rt,
    onDelete: function () {
      return nt();
    },
    isOpen: ce,
    type: "warning",
    actionBtnText: "Export"
  })), de && React.createElement(React.Fragment, null, React.createElement(Ie, {
    title: (0, b.__)("Export as SCORM Package", "ohmylms"),
    description: React.createElement(React.Fragment, null, React.createElement("div", {
      style: {
        marginBottom: "15px"
      }
    }, W.length > 0 ? (0, b.__)("You are about to export the selected courses as a SCORM package.", "ohmylms") : (0, b.__)("You are about to export this course as a SCORM package.", "ohmylms")), React.createElement("div", {
      style: {
        marginBottom: "15px"
      }
    }, React.createElement("label", {
      style: {
        display: "block",
        marginBottom: "8px",
        fontWeight: "500"
      }
    }, (0, b.__)("Select SCORM Version:", "ohmylms")), React.createElement("select", {
      value: fe,
      onChange: function (e) {
        return ve(e.target.value);
      },
      style: {
        width: "100%",
        padding: "8px 12px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px"
      }
    }, React.createElement("option", {
      value: "1.2"
    }, "SCORM 1.2"), React.createElement("option", {
      value: "2004"
    }, "SCORM 2004"))), React.createElement("div", {
      style: {
        fontSize: "12px",
        color: "#666"
      }
    }, (0, b.__)("The SCORM package will be compatible with major LMS platforms like Moodle, Canvas, and Blackboard.", "ohmylms"))),
    onClose: ot,
    onDelete: function () {
      return at();
    },
    isOpen: de,
    type: "warning",
    actionBtnText: (0, b.__)("Export SCORM", "ohmylms"),
    loading: he
  })), _e && React.createElement(React.Fragment, null, React.createElement(Ie, {
    title: (0, b.__)("Duplicate this course", "ohmylms"),
    description: React.createElement(React.Fragment, null, (0, b.__)("You are about to duplicate the selected course.", "ohmylms"), React.createElement("br", null), (0, b.__)(" Do you want to proceed?", "ohmylms")),
    onClose: ut,
    onDelete: ct,
    isOpen: _e,
    type: "warning",
    actionBtnText: "Duplicate",
    loading: Se
  })), Ce && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: Ce,
    onClose: Pe
  })), je && React.createElement(lU, {
    isOpen: je,
    onClose: function () {
      return Ae(!1);
    }
  }));
};

const gY = (0, g.memo)(vY);

function hY(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}

function yY(e) {
  return yY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, yY(e);
}

function bY(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}

function _Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2 ? bY(Object(n), !0).forEach(function (t) {
      wY(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bY(Object(n)).forEach(function (t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}

function wY(e, t, n) {
  return (t = function (e) {
    var t = function (e) {
      if ("object" != yY(e) || !e) return e;
      var t = e[Symbol.toPrimitive];
      if (void 0 !== t) {
        var n = t.call(e, "string");
        if ("object" != yY(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e);
    }(e);
    return "symbol" == yY(t) ? t : t + "";
  }(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function EY(e, t) {
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
  }(e, t) || SY(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function SY(e, t) {
  if (e) {
    if ("string" == typeof e) return RY(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? RY(e, t) : void 0;
  }
}

function RY(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
