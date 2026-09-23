// Reconstructed application fragment. Assembled in manifest order within factory 1841.
var ZY = function () {
  var e = (0, y.useDispatch)(T.default),
    t = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    n = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    r = (0, y.useSelect)(function (e) {
      return e(T.default).selectOrdersPagination();
    }, []),
    a = r.totalOrders,
    o = (r.totalPages, (0, y.useSelect)(function (e) {
      return e(T.default).selectOrders();
    }, [])),
    i = (0, y.useSelect)(function (e) {
      return e(T.default).getCurrency();
    }, []),
    l = YY((0, g.useState)(!0), 2),
    c = l[0],
    u = l[1],
    s = YY((0, g.useState)([]), 2),
    d = s[0],
    m = s[1],
    p = YY((0, g.useState)(!1), 2),
    h = p[0],
    _ = p[1],
    w = YY((0, g.useState)(1), 2),
    E = w[0],
    S = w[1],
    R = YY((0, g.useState)(10), 2),
    x = R[0],
    C = (R[1], YY((0, g.useState)(""), 2)),
    P = C[0],
    O = C[1],
    k = YY((0, g.useState)("any"), 2),
    j = k[0],
    A = k[1],
    M = YY((0, g.useState)(null), 2),
    F = M[0],
    N = M[1],
    D = YY((0, g.useState)(null), 2),
    W = (D[0], D[1]),
    B = YY((0, g.useState)("all"), 2),
    L = B[0],
    V = B[1],
    H = YY((0, g.useState)(""), 2),
    G = H[0],
    U = H[1],
    Y = (0, z.A)(),
    Q = Y.openNotificationWithIcon,
    Z = Y.contextHolder,
    $ = (0, f.Zp)(),
    K = (0, g.useCallback)(function (e) {
      O(e), S(1);
    }, []),
    J = (0, g.useCallback)(function (e) {
      A(e), S(1);
    }, []),
    X = (0, g.useCallback)(function (e) {
      V(e), S(1);
    }, []),
    ee = (0, g.useCallback)(function (e) {
      U(e), S(1);
    }, []),
    te = (0, g.useCallback)(function (e) {
      S(e), m([]);
    }, []),
    ne = (0, g.useCallback)(function (e) {
      $("/order-edit/".concat(e));
    }, [$]),
    re = (0, g.useCallback)(qY(HY().m(function t() {
      var n,
        r,
        a,
        o = arguments;
      return HY().w(function (t) {
        for (;;) switch (t.n) {
          case 0:
            n = o.length > 0 && void 0 !== o[0] ? o[0] : "date", r = o.length > 1 && void 0 !== o[1] ? o[1] : "DESC", u(!0), a = {
              offset: (E - 1) * x,
              order: r,
              page: E,
              per_page: x,
              search: P,
              orderby: n,
              post_status: j,
              date_filter: L,
              payment_method: G
            }, xq(L) && (a.date_filter = "custom", a.start_date = sn()(L[0]).format("YYYY-MM-DD"), a.end_date = sn()(L[1]).format("YYYY-MM-DD")), e.fetchOrders(a).finally(function () {
              u(!1);
            });
          case 1:
            return t.a(2);
        }
      }, t);
    })), [E, x, P, j, L, G]),
    ae = (0, g.useCallback)(function (e) {
      _(!0), N(e);
    }, []),
    oe = (0, g.useCallback)(function () {
      _(!1);
    }, []),
    ie = (0, g.useCallback)(qY(HY().m(function t() {
      var n;
      return HY().w(function (t) {
        for (;;) switch (t.n) {
          case 0:
            return n = F ? [F] : d, t.n = 1, e.trashBulkOrdersAction(n);
          case 1:
            re(), m([]), S(1), N(null), _(!1);
          case 2:
            return t.a(2);
        }
      }, t);
    })), [d, F, re]),
    le = (0, g.useCallback)(function (e, t, n) {
      var r = {
          student_email: "student_name",
          name: "title"
        }[n.field] || n.field,
        a = {
          ascend: "ASC",
          descend: "DESC"
        }[n.order] || n.order;
      S(1), re(r, a);
    }, [re, S]),
    ce = (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("Delete", "ohmylms"),
        value: "delete",
        action: function () {
          _(!0);
        }
      }];
    }, [d]),
    ue = (0, g.useMemo)(function () {
      return [{
        value: "",
        label: (0, b.__)("All Payment Method", "ohmylms")
      }, {
        value: "stripe",
        label: (0, b.__)("Stripe", "ohmylms")
      }, {
        value: "paypal",
        label: (0, b.__)("PayPal", "ohmylms")
      }, {
        value: "offline",
        label: (0, b.__)("Offline", "ohmylms")
      }, {
        value: "mollie",
        label: (0, b.__)("Mollie", "ohmylms")
      }, {
        value: "razorpay",
        label: (0, b.__)("Razorpay", "ohmylms")
      }, {
        value: "authorize_net",
        label: (0, b.__)("Authorize.Net", "ohmylms")
      }];
    }, []),
    se = (0, g.useMemo)(function () {
      return [{
        value: "any",
        label: (0, b.__)("All Status", "ohmylms")
      }, {
        value: "omlms-completed",
        label: (0, b.__)("Completed", "ohmylms")
      }, {
        value: "omlms-pending",
        label: (0, b.__)("Pending", "ohmylms")
      }, {
        value: "omlms-on-hold",
        label: (0, b.__)("On Hold", "ohmylms")
      }, {
        value: "omlms-processing",
        label: (0, b.__)("Processing", "ohmylms")
      }, {
        value: "omlms-cancelled",
        label: (0, b.__)("Cancelled", "ohmylms")
      }, {
        value: "omlms-refunded",
        label: (0, b.__)("Refunded", "ohmylms")
      }];
    }, []),
    de = ((0, g.useMemo)(function () {
      return [{
        value: "all",
        label: (0, b.__)("All", "ohmylms")
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
    }, []), (0, g.useMemo)(function () {
      return {
        selectedRowKeys: d,
        onChange: m
      };
    }, [d])),
    me = [{
      title: (0, b.__)("Order", "ohmylms"),
      dataIndex: "id",
      key: "id",
      sorter: !0,
      render: function (e) {
        return React.createElement(v.Link, {
          to: "/order-edit/".concat(e)
        }, "#", e || "#");
      }
    }, {
      title: (0, b.__)("Date", "ohmylms"),
      dataIndex: "date_created",
      key: "date_created",
      sorter: !0,
      render: function (e) {
        return VY(e) || "-";
      }
    }, {
      title: (0, b.__)("Student", "ohmylms"),
      dataIndex: "student_email",
      key: "student_email",
      sorter: !0,
      render: function (e) {
        return React.createElement("span", null, e || "-");
      }
    }, {
      title: (0, b.__)("Payment Method", "ohmylms"),
      dataIndex: "payment_method",
      key: "payment_method",
      render: function (e) {
        return React.createElement("span", {
          style: {
            textTransform: "capitalize"
          }
        }, "offline_payment" === e ? "Offline" : e || "-");
      }
    }, {
      title: (0, b.__)("Purchased By", "ohmylms"),
      dataIndex: "purchased_by",
      key: "purchased_by",
      render: function (e) {
        return React.createElement("span", {
          style: {
            textTransform: "capitalize"
          }
        }, e);
      }
    }, {
      title: (0, b.__)("Subscription Relationship", "ohmylms"),
      dataIndex: "subscription_relationship",
      key: "subscription_relationship",
      render: function (e, t) {
        return null != t && t.is_renewal_order ? "Renewal order" : null != t && t.is_parent_order ? "Parent order" : (null != t && t.is_normal_order, "-");
      }
    }, {
      title: (0, b.__)("Total", "ohmylms"),
      dataIndex: "total",
      key: "total",
      sorter: !0,
      render: function (e, t) {
        var n;
        return React.createElement(React.Fragment, null, 0 < (null == t || null === (n = t.refunds) || void 0 === n ? void 0 : n.length) ? React.createElement(React.Fragment, null, React.createElement("span", null, React.createElement(YH, {
          currency: (null == i ? void 0 : i.currency) || "$",
          currency_pos: (null == i ? void 0 : i.currency_pos) || "left",
          price: Number((null == t ? void 0 : t.total) || "0")
        }), React.createElement("del", null, React.createElement(YH, {
          currency: (null == i ? void 0 : i.currency) || "$",
          currency_pos: (null == i ? void 0 : i.currency_pos) || "left",
          price: Number((null == t ? void 0 : t.total) || "0")
        })))) : React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: null == t ? void 0 : t.formattedTotal
          }
        }));
      }
    }, {
      title: (0, b.__)("Status", "ohmylms"),
      dataIndex: "status",
      key: "status",
      render: function (e) {
        var t = "";
        switch (e) {
          case "completed":
            t = "success";
            break;
          case "pending":
          case "on-hold":
            t = "warning";
            break;
          case "cancelled":
          case "refunded":
            t = "danger";
            break;
          case "processing":
            t = "secondary";
            break;
          default:
            t = "default";
        }
        return React.createElement(React.Fragment, null, React.createElement(I.BadgeWP, {
          isBorderLess: !0,
          variant: t,
          style: {
            textTransform: "capitalize"
          }
        }, e));
      }
    }, {
      title: (0, b.__)("Action", "ohmylms"),
      dataIndex: "action",
      key: "action",
      render: function (e, t) {
        return React.createElement(I.DropdownMenuWP, {
          controls: [{
            title: (0, b.__)("View", "ohmylms"),
            key: "view",
            onClick: function () {
              return ne(null == t ? void 0 : t.id);
            },
            icon: React.createElement(Br, null)
          }, {
            title: (0, b.__)("Delete", "ohmylms"),
            key: "delete",
            onClick: function () {
              return ae(null == t ? void 0 : t.id);
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
    return e && re(), function () {
      e = !1;
    };
  }, [E, x, P, e, j, L, G]), (0, g.useEffect)(function () {
    !c && t && Q(n, t);
  }, [t]), React.createElement(React.Fragment, null, Z, React.createElement(I.ContainerWP, null, React.createElement(YG, {
    title: (0, b.__)("Order Management", "ohmylms")
  }), React.createElement(Ea, {
    isBorderless: !0,
    minHeight: "calc(100vh - 200px)"
  }, React.createElement(I.SpacerWP, {
    padding: 5
  }, React.createElement(I.SpacerWP, {
    marginBottom: 4
  }, d.length > 0 ? React.createElement(hN, {
    items: d,
    setItems: m,
    bulksActions: ce
  }) : React.createElement(I.FlexWP, {
    align: "center",
    justify: "start",
    gap: "2",
    wrap: "wrap"
  }, React.createElement(I.FlexItemWP, null, React.createElement(Cm, {
    placeholder: (0, b.__)("Search Orders", "ohmylms"),
    onChange: K
  })), React.createElement(I.FlexItemWP, null, React.createElement(vn.A, {
    placeholder: (0, b.__)("Filter By Status", "ohmylms"),
    onChange: J,
    value: j,
    options: se
  })), React.createElement(I.FlexItemWP, null, React.createElement(vn.A, {
    placeholder: (0, b.__)("Payment Type", "ohmylms"),
    onChange: ee,
    value: G,
    options: ue
  })), React.createElement(I.FlexItemWP, null, React.createElement(ZU, {
    placeholder: (0, b.__)("Filter By Days", "ohmylms"),
    onChange: function (e) {
      "custom_range" !== e && X(e);
    },
    onRangeChange: X
  })))), React.createElement(sN.A, {
    rowKey: "id",
    columns: me,
    dataSource: o || [],
    rowSelection: de,
    pagination: !1,
    loading: c,
    onChange: le,
    onRowMouseEnter: function (e) {
      return W(null == e ? void 0 : e.id);
    },
    onRowMouseLeave: function () {
      return W(null);
    },
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No Order yet!", "ohmylms")
      })
    }
  }), !c && Number(a) > x && React.createElement(fN, {
    total: a,
    currentPage: E,
    onPageChange: te,
    perPage: x
  })))), h && React.createElement(Ie, {
    title: d.length > 1 ? (0, b.__)("Delete Orders", "ohmylms") : (0, b.__)("Delete order", "ohmylms"),
    description: d.length > 1 ? (0, b.__)("Are you sure you want to delete these orders?", "ohmylms") : (0, b.__)("Are you sure you want to delete order?", "ohmylms"),
    onClose: oe,
    onDelete: ie,
    isOpen: h,
    isDelete: !0
  }));
};
