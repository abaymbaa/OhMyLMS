// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var a4 = (0, g.memo)(function () {
  var e;
  HG("ohmylms", "webhooks");
  var t = true,
    n = (0, y.useDispatch)(T.default),
    r = (0, z.A)(),
    a = r.openNotificationWithIcon,
    o = r.contextHolder,
    i = n4((0, g.useState)(!1), 2),
    l = i[0],
    c = i[1],
    u = n4((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1],
    m = n4((0, g.useState)(null), 2),
    p = m[0],
    f = m[1],
    v = n4((0, g.useState)(""), 2),
    h = v[0],
    _ = v[1],
    w = n4((0, g.useState)(1), 2),
    E = w[0],
    S = w[1],
    R = n4((0, g.useState)(10), 2),
    x = R[0],
    C = (R[1], n4((0, g.useState)([]), 2)),
    P = C[0],
    O = C[1],
    k = n4((0, g.useState)("all"), 2),
    j = k[0],
    A = k[1],
    M = n4((0, g.useState)(!1), 2),
    F = M[0],
    N = M[1],
    D = n4((0, g.useState)(null), 2),
    W = D[0],
    B = D[1],
    V = n4((0, g.useState)(null), 2),
    H = (V[0], V[1], n4((0, g.useState)(!1), 2)),
    G = H[0],
    U = H[1],
    Y = (0, y.useSelect)(function (e) {
      return e(T.default).getWebhooks();
    }, []) || [],
    Q = (0, y.useSelect)(function (e) {
      return e(T.default).getWebhookTotal();
    }, []) || 0,
    Z = (0, y.useSelect)(function (e) {
      return e(T.default).getAllIntegrations();
    }, []),
    $ = 1 === (null == Z || null === (e = Z.webhooks) || void 0 === e ? void 0 : e.is_enable),
    K = (0, g.useCallback)(t4(J5().m(function e() {
      var t,
        r,
        a,
        o = arguments;
      return J5().w(function (e) {
        for (;;) switch (e.n) {
          case 0:
            t = o.length > 0 && void 0 !== o[0] ? o[0] : "created_at", r = o.length > 1 && void 0 !== o[1] ? o[1] : "DESC", c(!0), a = {
              page: E,
              per_page: x,
              search: h,
              status: j,
              orderby: t,
              order: r
            }, n.getWebhooks(a).finally(function () {
              c(!1);
            });
          case 1:
            return e.a(2);
        }
      }, e);
    })), [E, x, h, j, n, t, $]);
  (0, g.useEffect)(function () {
    K();
  }, [E, x, h, j, n, t, $]);
  var J = (0, g.useCallback)(function (e) {
      _(e), S(1);
    }, []),
    X = (0, g.useCallback)(function (e) {
      A(e), S(1);
    }, []),
    ee = (0, g.useCallback)(function (e) {
      S(e), O([]);
    }, []),
    te = (0, g.useCallback)(function () {
      $ ? (f(null), d(!0)) : U(!0);
    }, [t, $]),
    ne = (0, g.useCallback)(function (e) {
      if ($) {
        var n = Y.find(function (t) {
          return t.id === e;
        });
        n && (f(n), d(!0));
      } else U(!0);
    }, [Y, t, $]),
    re = (0, g.useCallback)(function (e) {
      $ ? (N(!0), B(e)) : U(!0);
    }, [t, $]),
    ae = (0, g.useCallback)(function () {
      N(!1), B(null);
    }, []),
    oe = (0, g.useCallback)(t4(J5().m(function e() {
      var t;
      return J5().w(function (e) {
        for (;;) switch (e.p = e.n) {
          case 0:
            if (t = W ? [W] : P, e.p = 1, !W) {
              e.n = 3;
              break;
            }
            return e.n = 2, n.deleteWebhookById(W);
          case 2:
            e.n = 4;
            break;
          case 3:
            return e.n = 4, n.bulkWebhookAction("delete", P);
          case 4:
            a("success", t.length > 1 ? (0, b.__)("Webhooks deleted successfully", "ohmylms") : (0, b.__)("Webhook deleted successfully", "ohmylms")), K(), O([]), S(1), e.n = 6;
            break;
          case 5:
            e.p = 5, e.v, a("error", (0, b.__)("Failed to delete webhook(s)", "ohmylms"));
          case 6:
            return e.p = 6, B(null), N(!1), e.f(6);
          case 7:
            return e.a(2);
        }
      }, e, null, [[1, 5, 6, 7]]);
    })), [P, W, n, K, a]),
    ie = (0, g.useCallback)(function () {
      d(!1), f(null), K();
    }, [K]),
    le = (0, g.useCallback)(function () {
      d(!1), f(null);
    }, []),
    ce = (0, g.useCallback)(function (e, t, n) {
      var r = n.field || "created_at",
        a = {
          ascend: "ASC",
          descend: "DESC"
        }[n.order] || "DESC";
      S(1), K(r, a);
    }, [K]),
    ue = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("Active", "ohmylms"),
        value: "active",
        action: (r = t4(J5().m(function e() {
          return J5().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if ($) {
                  e.n = 1;
                  break;
                }
                return U(!0), e.a(2);
              case 1:
                return e.p = 1, e.n = 2, n.bulkWebhookAction("active", P);
              case 2:
                a("success", (0, b.__)("Webhooks activated successfully", "ohmylms")), K(), O([]), e.n = 4;
                break;
              case 3:
                e.p = 3, e.v, a("error", (0, b.__)("Failed to activate webhooks", "ohmylms"));
              case 4:
                return e.a(2);
            }
          }, e, null, [[1, 3]]);
        })), function () {
          return r.apply(this, arguments);
        })
      }, {
        label: (0, b.__)("Inactive", "ohmylms"),
        value: "inactive",
        action: (e = t4(J5().m(function e() {
          return J5().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if ($) {
                  e.n = 1;
                  break;
                }
                return U(!0), e.a(2);
              case 1:
                return e.p = 1, e.n = 2, n.bulkWebhookAction("inactive", P);
              case 2:
                a("success", (0, b.__)("Webhooks inactive successfully", "ohmylms")), K(), O([]), e.n = 4;
                break;
              case 3:
                e.p = 3, e.v, a("error", (0, b.__)("Failed to inactive webhooks", "ohmylms"));
              case 4:
                return e.a(2);
            }
          }, e, null, [[1, 3]]);
        })), function () {
          return e.apply(this, arguments);
        })
      }, {
        label: (0, b.__)("Delete", "ohmylms"),
        value: "delete",
        action: function () {
          $ ? N(!0) : U(!0);
        }
      }];
      var e, r;
    }, [P, n, K, a, t, $]),
    se = (0, g.useMemo)(function () {
      return [{
        value: "all",
        label: (0, b.__)("All", "ohmylms")
      }, {
        value: "active",
        label: (0, b.__)("Active", "ohmylms")
      }, {
        value: "inactive",
        label: (0, b.__)("Inactive", "ohmylms")
      }];
    }, []),
    de = (0, g.useMemo)(function () {
      return {
        selectedRowKeys: P,
        onChange: O
      };
    }, [P]),
    me = (0, g.useMemo)(function () {
      return {
        label: (0, b.__)("Add Webhook", "ohmylms"),
        onClick: te
      };
    }, [te]),
    pe = [{
      title: (0, b.__)("ID", "ohmylms"),
      dataIndex: "id",
      key: "id",
      sorter: !1,
      render: function (e) {
        return React.createElement(I.ButtonWP, {
          variant: "link",
          onClick: function () {
            return ne(e);
          }
        }, "#", e);
      }
    }, {
      title: (0, b.__)("Webhook Name", "ohmylms"),
      dataIndex: "name",
      key: "name",
      sorter: !1,
      render: function (e, t) {
        return React.createElement("div", null, React.createElement("div", {
          style: {
            fontWeight: 500,
            marginBottom: "4px"
          }
        }, e || "Untitled"), React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "secondary",
          style: {
            fontSize: "11px"
          }
        }, t.http_method, " - ", t.data_type.toUpperCase()));
      }
    }, {
      title: (0, b.__)("Trigger Event", "ohmylms"),
      dataIndex: "trigger_event",
      key: "trigger_event",
      sorter: !1,
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "secondary"
        }, function (e) {
          return {
            course_purchase: (0, b.__)("Course Purchase", "ohmylms"),
            course_enrollment: (0, b.__)("Course Enrollment", "ohmylms"),
            course_completion: (0, b.__)("Course Completion", "ohmylms"),
            lesson_completion: (0, b.__)("Lesson Completion", "ohmylms"),
            quiz_submission: (0, b.__)("Quiz Submission", "ohmylms"),
            quiz_achievement: (0, b.__)("Quiz Achievement", "ohmylms"),
            assignment_submission: (0, b.__)("Assignment Submission", "ohmylms"),
            assignment_achievement: (0, b.__)("Assignment Achievement", "ohmylms")
          }[e] || e;
        }(e));
      }
    }, {
      title: (0, b.__)("Webhook URL", "ohmylms"),
      dataIndex: "webhook_url",
      key: "webhook_url",
      render: function (e) {
        return React.createElement("div", {
          style: {
            maxWidth: "175px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: "13px",
            color: "#6B7280"
          },
          title: e
        }, e);
      }
    }, {
      title: (0, b.__)("Status", "ohmylms"),
      dataIndex: "status",
      key: "status",
      sorter: !1,
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "active" === e ? "success" : "secondary",
          style: {
            textTransform: "capitalize"
          }
        }, "active" === e ? (0, b.__)("Active", "ohmylms") : (0, b.__)("Inactive", "ohmylms"));
      }
    }, {
      title: (0, b.__)("Last Updated", "ohmylms"),
      dataIndex: "updated_at",
      key: "updated_at",
      sorter: !1,
      render: function (e) {
        var t,
          n = (null === (t = window.ohmylms_params) || void 0 === t ? void 0 : t.date_format) || "F j, Y",
          r = e ? (0, wq.dateI18n)(n, e) : "-";
        return React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "secondary"
        }, r);
      }
    }, {
      title: (0, b.__)("Action", "ohmylms"),
      dataIndex: "action",
      key: "action",
      render: function (e, t) {
        return React.createElement(I.DropdownMenuWP, {
          controls: [{
            title: (0, b.__)("Edit", "ohmylms"),
            key: "edit",
            onClick: function () {
              return ne(null == t ? void 0 : t.id);
            },
            icon: React.createElement("span", null, React.createElement(pG.A, null))
          }, {
            title: (0, b.__)("Delete", "ohmylms"),
            key: "delete",
            onClick: function () {
              return re(null == t ? void 0 : t.id);
            },
            icon: React.createElement(We, null)
          }],
          icon: React.createElement(q.Icon, {
            icon: Ne.A
          })
        });
      }
    }];
  return React.createElement(React.Fragment, null, o, React.createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    className: "ohmylms-full-screen-height"
  }, React.createElement(I.SpacerWP, {
    padding: 4,
    paddingTop: 1,
    marginTop: 4,
    marginBottom: 0
  }, React.createElement(YG, {
    title: (0, b.__)("All Webhooks", "ohmylms"),
    showAddButton: !0,
    addButtonConfig: me,
    paddingY: 4
  }), React.createElement(Ea, {
    isBorderless: !0,
    minHeight: "calc(100vh - 30px)"
  }, React.createElement(I.SpacerWP, {
    padding: 5
  }, P.length > 0 ? React.createElement(hN, {
    items: P,
    setItems: O,
    bulksActions: ue
  }) : React.createElement(aY, {
    handleSearch: J,
    searchPlaceholder: (0, b.__)("Search Webhooks", "ohmylms"),
    handleFilterByStatus: X,
    filterByStatusOptions: se,
    filterByStatus: j,
    currentPage: E,
    totalItems: Q,
    perPage: x,
    showFilterByCategory: !1,
    showFilterByPriceType: !1,
    showFilterByDays: !1
  }), React.createElement(I.TableWP, {
    rowKey: "id",
    columns: pe,
    dataSource: Y || [],
    rowSelection: de,
    pagination: !1,
    loading: l,
    onChange: ce,
    scroll: {
      x: "max-content"
    },
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No Webhooks yet!", "ohmylms"),
        description: (0, b.__)("Start building your first webhook and it will show up here as soon as you create it.", "ohmylms"),
        ctaText: (0, b.__)("Add Webhook", "ohmylms"),
        ctaHandler: te
      })
    }
  }), !l && t && $ && Q > x && React.createElement(fN, {
    total: Q,
    currentPage: E,
    onPageChange: ee,
    perPage: x
  }))))), F && React.createElement(Ie, {
    title: P.length > 1 ? (0, b.__)("Delete Webhooks", "ohmylms") : (0, b.__)("Delete Webhook", "ohmylms"),
    description: P.length > 1 ? (0, b.__)("Are you sure you want to delete these webhooks?", "ohmylms") : (0, b.__)("Are you sure you want to delete this webhook?", "ohmylms"),
    onClose: ae,
    onDelete: oe,
    isOpen: F,
    isDelete: !0
  }), React.createElement(K5, {
    webhook: p,
    isOpen: s,
    onSave: ie,
    onClose: le
  }), G && React.createElement(He.default, {
    isOpen: G,
    onClose: U
  }));
});
