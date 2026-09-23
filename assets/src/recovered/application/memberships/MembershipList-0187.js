// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var Z8 = function () {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).getMembershipPagination();
    }, []),
    a = r.totalPlans,
    o = (r.totalPages, (0, y.useSelect)(function (e) {
      return e(T.default).getMemberships();
    }, [])),
    i = (0, L.useIsPro)(),
    c = Y8((0, g.useState)(!0), 2),
    u = c[0],
    s = c[1],
    d = Y8((0, g.useState)([]), 2),
    m = d[0],
    p = d[1],
    v = Y8((0, g.useState)(!1), 2),
    h = v[0],
    _ = v[1],
    w = Y8((0, g.useState)(1), 2),
    E = w[0],
    S = w[1],
    R = Y8((0, g.useState)(10), 2),
    x = R[0],
    C = (R[1], Y8((0, g.useState)(""), 2)),
    P = C[0],
    O = C[1],
    k = Y8((0, g.useState)("All"), 2),
    j = k[0],
    A = k[1],
    M = Y8((0, g.useState)(null), 2),
    F = M[0],
    N = M[1],
    W = Y8((0, g.useState)(null), 2),
    B = (W[0], W[1]),
    V = Y8((0, g.useState)(!1), 2),
    H = V[0],
    G = V[1],
    U = Y8((0, g.useState)(!1), 2),
    Y = U[0],
    Q = U[1],
    Z = Y8((0, g.useState)(!1), 2),
    $ = Z[0],
    K = Z[1],
    J = Y8((0, g.useState)("all"), 2),
    X = J[0],
    ee = J[1],
    te = Y8((0, g.useState)(!1), 2),
    ne = te[0],
    re = te[1],
    ae = (0, z.A)(),
    oe = ae.openNotificationWithIcon,
    ie = ae.contextHolder,
    le = ((0, f.Zp)(), (0, g.useCallback)(function (e) {
      O(e), S(1);
    }, [])),
    ce = (0, g.useCallback)(function (e) {
      A(e), S(1);
    }, []),
    ue = (0, g.useCallback)(function (e) {
      ee(e), S(1);
    }, []),
    se = (0, g.useCallback)(function (e) {
      S(e), p([]);
    }, []),
    de = (0, g.useCallback)(function () {
      var t = q8(H8().m(function t(n) {
        var r, a;
        return H8().w(function (t) {
          for (;;) switch (t.p = t.n) {
            case 0:
              if (i) {
                t.n = 1;
                break;
              }
              return re(!0), t.a(2);
            case 1:
              return t.p = 1, G(!0), Q(!0), t.n = 2, l()({
                path: "/creator-lms/v1/membership/".concat(n),
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                }
              });
            case 2:
              r = t.v, e.addFullMembershipPlan(r), t.n = 4;
              break;
            case 3:
              t.p = 3, a = t.v, console.error(a);
            case 4:
              return t.p = 4, Q(!1), t.f(4);
            case 5:
              return t.a(2);
          }
        }, t, null, [[1, 3, 4, 5]]);
      }));
      return function (e) {
        return t.apply(this, arguments);
      };
    }(), []),
    me = (0, g.useCallback)(q8(H8().m(function t() {
      var n,
        r,
        a,
        o = arguments;
      return H8().w(function (t) {
        for (;;) switch (t.n) {
          case 0:
            if (n = o.length > 0 && void 0 !== o[0] ? o[0] : "date", r = o.length > 1 && void 0 !== o[1] ? o[1] : "DESC", i) {
              t.n = 1;
              break;
            }
            return s(!1), t.a(2);
          case 1:
            s(!0), a = {
              offset: (E - 1) * x,
              order: r,
              page: E,
              per_page: x,
              search: P,
              post_status: j,
              orderby: n,
              date_filter: X
            }, xq(X) && (a.date_filter = "custom", a.start_date = sn()(X[0]).format("YYYY-MM-DD"), a.end_date = sn()(X[1]).format("YYYY-MM-DD")), e.fetchMembershipPlans(a).finally(function () {
              s(!1);
            });
          case 2:
            return t.a(2);
        }
      }, t);
    })), [E, x, P, j, X]),
    pe = (0, g.useCallback)(function (e) {
      i ? (_(!0), N(e)) : re(!0);
    }, []),
    fe = (0, g.useCallback)(function () {
      _(!1);
    }, []),
    ve = (0, g.useCallback)(q8(H8().m(function t() {
      return H8().w(function (t) {
        for (;;) switch (t.n) {
          case 0:
            return t.n = 1, e.handleBulkDelete("membership", {
              membership_ids: F ? [F] : m
            });
          case 1:
            me(), p([]), S(1), N(null), _(!1), K(!0);
          case 2:
            return t.a(2);
        }
      }, t);
    })), [m, F, me]),
    ge = (0, g.useCallback)(function (e, t, n) {
      var r = {
          number_of_submissions: "number_of_submissions",
          name: "title"
        }[n.field] || n.field,
        a = {
          ascend: "ASC",
          descend: "DESC"
        }[n.order] || n.order;
      S(1), me(r, a);
    }, [me, S]),
    he = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("Delete", "ohmylms"),
        value: "delete",
        action: function () {
          i ? _(!0) : re(!0);
        }
      }];
    }, [m]),
    ye = (0, g.useMemo)(function () {
      return [{
        value: "all",
        label: (0, b.__)("All", "ohmylms")
      }, {
        value: "publish",
        label: (0, b.__)("Published", "ohmylms")
      }, {
        value: "draft",
        label: (0, b.__)("Draft", "ohmylms")
      }];
    }, []),
    be = (0, g.useMemo)(function () {
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
    _e = (0, g.useMemo)(function () {
      return {
        selectedRowKeys: m,
        onChange: p
      };
    }, [m]),
    we = (0, g.useMemo)(function () {
      return {
        label: (0, b.__)("Add Membership", "ohmylms"),
        onClick: function () {
          return G(!0);
        }
      };
    }, []),
    Ee = [{
      title: (0, b.__)("ID", "ohmylms"),
      dataIndex: "id",
      key: "id",
      sorter: !0,
      render: function (e) {
        return React.createElement(D.A, {
          variant: "link",
          onClick: function () {
            return de(e);
          }
        }, "#", e || "#");
      }
    }, {
      title: (0, b.__)("Membership Plan", "ohmylms"),
      dataIndex: "name",
      key: "name",
      sorter: !0,
      render: function (e) {
        return React.createElement("span", null, Ge(e) || "Untitled");
      }
    }, {
      title: (0, b.__)("Price", "ohmylms"),
      dataIndex: "price",
      key: "price",
      sorter: !0,
      render: function (e, t) {
        return React.createElement(I.BadgeWP, {
          variant: "secondary",
          isBorderLess: !0
        }, null != t && t.sale_price ? React.createElement(React.Fragment, null, React.createElement("span", null, React.createElement(YH, {
          currency: (null == t ? void 0 : t.currency) || "$",
          currency_pos: (null == t ? void 0 : t.currency_pos) || "left",
          price: Number((null == t ? void 0 : t.sale_price) || "0")
        }), " ", React.createElement("del", null, React.createElement(YH, {
          currency: (null == t ? void 0 : t.currency) || "$",
          currency_pos: (null == t ? void 0 : t.currency_pos) || "left",
          price: Number((null == t ? void 0 : t.regular_price) || "0"),
          del: !0
        })))) : React.createElement(YH, {
          currency: (null == t ? void 0 : t.currency) || "$",
          currency_pos: (null == t ? void 0 : t.currency_pos) || "left",
          price: Number((null == t ? void 0 : t.price) || "0")
        }));
      }
    }, {
      title: (0, b.__)("Billing Cycle", "ohmylms"),
      dataIndex: "subscription_period",
      key: "subscription_period",
      sorter: !0,
      render: function (e) {
        var t = {
          day: (0, b.__)("Daily", "ohmylms"),
          week: (0, b.__)("Weekly", "ohmylms"),
          month: (0, b.__)("Monthly", "ohmylms"),
          year: (0, b.__)("Yearly", "ohmylms"),
          one_time: (0, b.__)("One Time", "ohmylms")
        };
        return React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "secondary"
        }, t[e] || e);
      }
    }, {
      title: (0, b.__)("Subscribers", "ohmylms"),
      dataIndex: "members",
      key: "members",
      sorter: !0,
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "secondary"
        }, e || 0);
      }
    }, {
      title: (0, b.__)("Courses", "ohmylms"),
      dataIndex: "courses",
      key: "courses",
      sorter: !0,
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "secondary"
        }, e || 0);
      }
    }, {
      title: (0, b.__)("Status", "ohmylms"),
      dataIndex: "status",
      key: "status",
      render: function (e) {
        return React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "publish" === e ? "success" : "secondary",
          style: {
            textTransform: "capitalize"
          }
        }, "publish" === e ? (0, b.__)("Published", "ohmylms") : "future" === e ? (0, b.__)("Scheduled", "ohmylms") : (0, b.__)("Draft", "ohmylms"));
      }
    }, {
      title: (0, b.__)("Last Updated", "ohmylms"),
      dataIndex: "date_modified",
      key: "date_modified",
      render: function (e) {
        var t,
          n = "",
          r = (null === (t = window.creator_lms_params) || void 0 === t ? void 0 : t.date_format) || "F j, Y",
          a = "".concat(r);
        return e && "object" === V8(e) && e.date ? n = (0, wq.dateI18n)(a, e.date) : "string" == typeof e && (n = (0, wq.dateI18n)(a, e)), React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: "secondary"
        }, n || "-");
      }
    }, {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: function (e, t) {
        return React.createElement(I.DropdownMenuWP, {
          controls: [{
            title: (0, b.__)("Edit", "ohmylms"),
            key: "edit",
            onClick: function () {
              return de(null == t ? void 0 : t.id);
            },
            icon: React.createElement("span", null, React.createElement(pG.A, null))
          }, {
            title: (0, b.__)("Delete", "ohmylms"),
            key: "delete",
            onClick: function () {
              return pe(null == t ? void 0 : t.id);
            },
            icon: React.createElement(We, null)
          }],
          icon: React.createElement(q.Icon, {
            icon: Ne.A
          })
        });
      }
    }];
  return (0, g.useEffect)(function () {
    var e = !0;
    return e && me(), function () {
      e = !1;
    };
  }, [E, x, P, e, j, X, $]), (0, g.useEffect)(function () {
    !u && t && oe(n, t);
  }, [t]), (0, g.useCallback)(function () {
    window.open(L.pricingPageLink, "_blank");
  }, []), React.createElement(React.Fragment, null, ie, React.createElement(I.ContainerWP, null, React.createElement(YG, {
    title: (0, b.__)("All Memberships", "ohmylms"),
    showAddButton: !0,
    addButtonConfig: we
  }), React.createElement(Ea, {
    isBorderless: !0,
    minHeight: "calc(100vh - 200px)"
  }, React.createElement(I.SpacerWP, {
    padding: 5
  }, React.createElement(I.ProOverlayWP, {
    title: (0, b.__)("Membership is available in the OhMyLMS version. Upgrade to Pro today to unlock this and more powerful features.", "ohmylms")
  }), m.length > 0 ? React.createElement(hN, {
    items: m,
    setItems: p,
    bulksActions: he
  }) : React.createElement(aY, {
    handleSearch: le,
    searchPlaceholder: (0, b.__)("Search Membership", "ohmylms"),
    handleFilterByDays: ue,
    filterByDaysOptions: be,
    filterByDays: X,
    handleFilterByStatus: ce,
    filterByStatusOptions: ye,
    filterByStatus: j,
    currentPage: E,
    totalItems: a,
    perPage: x,
    showFilterByCategory: !1,
    showFilterByPriceType: !1,
    showFilterByStatus: !1
  }), React.createElement(sN.A, {
    rowKey: "id",
    columns: Ee,
    dataSource: i ? o || [] : [{
      id: 1,
      name: "Premium Membership",
      price: 100,
      regular_price: 120,
      sale_price: 90,
      currency: "$",
      currency_pos: "left",
      members: 150,
      courses: 10,
      status: "active"
    }, {
      id: 2,
      name: "Standard Membership",
      price: 50,
      regular_price: 50,
      sale_price: null,
      currency: "$",
      currency_pos: "left",
      members: 80,
      courses: 5,
      status: "inactive"
    }, {
      id: 3,
      name: "Basic Membership",
      price: 20,
      regular_price: 20,
      sale_price: null,
      currency: "$",
      currency_pos: "left",
      members: 30,
      courses: 2,
      status: "draft"
    }, {
      id: 4,
      name: "Enterprise Plan",
      price: 300,
      regular_price: 350,
      sale_price: 280,
      currency: "$",
      currency_pos: "left",
      members: 250,
      courses: 20,
      status: "active"
    }, {
      id: 5,
      name: "Trial Membership",
      price: 0,
      regular_price: 0,
      sale_price: null,
      currency: "$",
      currency_pos: "left",
      members: 500,
      courses: 1,
      status: "inactive"
    }],
    rowSelection: _e,
    pagination: !1,
    loading: u,
    onChange: ge,
    onRowMouseEnter: function (e) {
      return B(null == e ? void 0 : e.id);
    },
    onRowMouseLeave: function () {
      return B(null);
    },
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No Memberships yet!", "ohmylms"),
        description: (0, b.__)("Start building your first membership and it’ll show up here as soon as you hit publish.", "ohmylms"),
        ctaText: (0, b.__)("Add Membership", "ohmylms"),
        ctaHandler: function () {
          return G(!0);
        }
      })
    }
  }), u && Number(a) > x && React.createElement(fN, {
    total: a,
    currentPage: E,
    onPageChange: se,
    perPage: x
  })))), h && React.createElement(Ie, {
    title: m.length > 1 ? (0, b.__)("Delete Memberships", "ohmylms") : (0, b.__)("Delete Membership", "ohmylms"),
    description: m.length > 1 ? (0, b.__)("Are you sure you want to delete these memberships?", "ohmylms") : (0, b.__)("Are you sure you want to delete membership?", "ohmylms"),
    onClose: fe,
    onDelete: ve,
    isOpen: h,
    isDelete: !0
  }), H && React.createElement(L8, {
    isOpen: H,
    setIsOpen: G,
    isFetch: $,
    setIsFetch: K,
    isLoading: Y
  }), ne && React.createElement(React.Fragment, null, React.createElement(He.default, {
    isOpen: ne,
    onClose: re
  })));
};
