// Reconstructed application fragment. Assembled in manifest order within factory 1841.
const FQ = function (e) {
  var t = e.id,
    n = void 0 === t ? null : t,
    r = (0, f.Zp)(),
    a = (0, y.useSelect)(function (e) {
      return e(T.default).getOrder();
    }, [n]),
    o = (0, y.useDispatch)(T.default).fetchOrder,
    i = TQ((0, g.useState)(!0), 2),
    l = i[0],
    c = i[1],
    u = TQ((0, g.useState)(!1), 2),
    s = u[0],
    d = u[1],
    m = (0, z.A)(),
    p = m.openNotificationWithIcon,
    v = m.contextHolder,
    w = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    E = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []);
  return (0, g.useEffect)(function () {
    !l && w && p(E, w);
  }, [w]), (0, g.useEffect)(function () {
    var e = function () {
      var e,
        t = (e = jQ().m(function e() {
          var t;
          return jQ().w(function (e) {
            for (;;) switch (e.p = e.n) {
              case 0:
                if (e.p = 0, c(!0), n) {
                  e.n = 1;
                  break;
                }
                return e.a(2);
              case 1:
                return e.n = 2, o(n);
              case 2:
                c(!1), e.n = 4;
                break;
              case 3:
                e.p = 3, 404 == (null == (t = e.v) ? void 0 : t.status) ? d(!0) : c(!1);
              case 4:
                return e.p = 4, c(!1), e.f(4);
              case 5:
                return e.a(2);
            }
          }, e, null, [[0, 3, 4, 5]]);
        }), function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              MQ(o, r, a, i, l, "next", e);
            }
            function l(e) {
              MQ(o, r, a, i, l, "throw", e);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    e();
  }, [n]), l ? h().createElement(_.A, {
    active: !0
  }) : a ? h().createElement(I.ContainerWP, {
    isFullWidth: !0
  }, h().createElement(I.SpacerWP, {
    paddingTop: 5
  }), v, h().createElement(I.FlexWP, {
    gap: 2,
    align: "center",
    justify: "flex-start"
  }, h().createElement(Nr, {
    onClick: function () {
      r("/orders");
    }
  }), h().createElement(I.HeadingWP, {
    level: 3,
    size: 18,
    weight: 600,
    color: "#000D25"
  }, (0, b.__)("Order Details", "ohmylms"))), h().createElement(I.SpacerWP, {
    marginBottom: 3
  }), s ? h().createElement(h().Fragment, null, h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    padding: 6,
    marginBottom: 0
  }, h().createElement(I.EmptyWP, {
    description: "No Orders Found"
  })))) : h().createElement(I.CardWP, {
    isBorderless: !0
  }, h().createElement(I.SpacerWP, {
    padding: 6,
    marginBottom: 0
  }, h().createElement(I.FlexWP, {
    className: "ohmylms-order-details",
    justify: "start",
    align: "start",
    gap: 3
  }, h().createElement(I.FlexItemWP, {
    className: "ohmylms-order-details-left",
    style: {
      width: "calc(70% - 12px)"
    }
  }, h().createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, h().createElement(I.SpacerWP, {
    padding: 4,
    marginBottom: 0
  }, h().createElement(XY, {
    order: a,
    status: a.status
  }))), h().createElement(I.SpacerWP, {
    marginBottom: 3
  }), h().createElement(I.FlexWP, {
    justify: "space-between",
    align: "stretch",
    gap: 3,
    className: "ohmylms-order-details-general-billing"
  }, h().createElement(I.FlexBlockWP, null, h().createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    style: {
      height: "100%"
    }
  }, h().createElement(I.SpacerWP, {
    paddingX: 4,
    paddingY: 5,
    marginBottom: 0
  }, h().createElement(PQ, {
    student_name: Ge(a.student_name),
    student_email: a.student_email,
    student_id: a.student_id
  })))), h().createElement(I.FlexBlockWP, null, h().createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary",
    style: {
      height: "100%"
    }
  }, h().createElement(I.SpacerWP, {
    paddingX: 4,
    paddingY: 5,
    marginBottom: 0
  }, h().createElement(eQ, {
    order: a,
    address: a.address,
    email: a.student_email
  }))))), h().createElement(I.SpacerWP, {
    marginBottom: 3
  }), h().createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, h().createElement(I.SpacerWP, {
    paddingY: 6,
    paddingX: 4,
    marginBottom: 0
  }, h().createElement(cQ, {
    order: a,
    items: a.line_items,
    coupon: a.coupon_lines,
    subtotal: a.subtotal,
    total: a.total,
    paid: a.paid,
    discount: null == a ? void 0 : a.cart_discount,
    taxAmount: null == a ? void 0 : a.tax_amount,
    taxRate: null == a ? void 0 : a.tax_rate
  }))), h().createElement(I.SpacerWP, {
    marginBottom: 3
  }), Array.isArray(a.related_orders) && a.related_orders.length > 0 && h().createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, h().createElement(I.SpacerWP, {
    paddingY: 6,
    paddingX: 4,
    marginBottom: 0
  }, h().createElement(kQ, {
    relatedOrders: a.related_orders
  })))), h().createElement(I.FlexItemWP, {
    className: "ohmylms-order-details-right",
    style: {
      width: "30%"
    }
  }, h().createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, h().createElement(I.SpacerWP, {
    paddingX: 4,
    paddingY: 5,
    marginBottom: 0
  }, h().createElement(EQ, {
    status: a.status,
    order: a
  }))), h().createElement(I.SpacerWP, {
    marginBottom: 3
  }), h().createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, h().createElement(I.SpacerWP, {
    paddingX: 4,
    paddingY: 5,
    marginBottom: 0
  }, h().createElement(CQ, {
    student_name: Ge(a.student_name),
    student_email: a.student_email,
    student_id: a.student_id,
    student_image: a.student_image
  }))), h().createElement(I.SpacerWP, {
    marginBottom: 3
  }), h().createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, h().createElement(I.SpacerWP, {
    paddingX: 4,
    paddingY: 5,
    marginBottom: 0
  }, h().createElement(RQ, {
    order: a
  }))), h().createElement(I.SpacerWP, {
    marginBottom: 3
  }), h().createElement(I.CardWP, {
    isBorderless: !0,
    variant: "secondary"
  }, h().createElement(I.SpacerWP, {
    paddingX: 4,
    paddingY: 5,
    marginBottom: 0
  }, h().createElement(fQ, {
    notes: a.order_notes,
    order: a
  })))))))) : h().createElement(I.CardWP, null, h().createElement(I.SpacerWP, {
    padding: 6,
    marginBottom: 0
  }, h().createElement(I.EmptyWP, {
    description: "No Orders Found"
  })));
};
function NQ() {
  var e,
    t,
    n = "function" == typeof Symbol ? Symbol : {},
    r = n.iterator || "@@iterator",
    a = n.toStringTag || "@@toStringTag";
  function o(n, r, a, o) {
    var c = r && r.prototype instanceof l ? r : l,
      u = Object.create(c.prototype);
    return DQ(u, "_invoke", function (n, r, a) {
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
  var s = [][r] ? t(t([][r]())) : (DQ(t = {}, r, function () {
      return this;
    }), t),
    d = u.prototype = l.prototype = Object.create(s);
  function m(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, DQ(e, a, "GeneratorFunction")), e.prototype = Object.create(d), e;
  }
  return c.prototype = u, DQ(d, "constructor", u), DQ(u, "constructor", c), c.displayName = "GeneratorFunction", DQ(u, a, "GeneratorFunction"), DQ(d), DQ(d, a, "Generator"), DQ(d, r, function () {
    return this;
  }), DQ(d, "toString", function () {
    return "[object Generator]";
  }), (NQ = function () {
    return {
      w: o,
      m
    };
  })();
}
function DQ(e, t, n, r) {
  var a = Object.defineProperty;
  try {
    a({}, "", {});
  } catch (e) {
    a = 0;
  }
  DQ = function (e, t, n, r) {
    function o(t, n) {
      DQ(e, t, function (e) {
        return this._invoke(t, n, e);
      });
    }
    t ? a ? a(e, t, {
      value: n,
      enumerable: !r,
      configurable: !r,
      writable: !r
    }) : e[t] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, DQ(e, t, n, r);
}
function WQ(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i),
      c = l.value;
  } catch (e) {
    return void n(e);
  }
  l.done ? t(c) : Promise.resolve(c).then(r, a);
}
function zQ(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, a) {
      var o = e.apply(t, n);
      function i(e) {
        WQ(o, r, a, i, l, "next", e);
      }
      function l(e) {
        WQ(o, r, a, i, l, "throw", e);
      }
      i(void 0);
    });
  };
}
function BQ(e, t) {
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
      if ("string" == typeof e) return LQ(e, t);
      var n = {}.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? LQ(e, t) : void 0;
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function LQ(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var VQ = function () {
  var e = true,
    t = (0, y.useDispatch)(T.default),
    n = (0, f.Zp)(),
    r = (0, z.A)(),
    a = r.openNotificationWithIcon,
    o = r.contextHolder,
    i = (0, y.useSelect)(function (e) {
      return e(T.default).selectSubscriptions();
    }, []),
    l = (0, y.useSelect)(function (e) {
      return e(T.default).selectSubscriptionsPagination();
    }, []),
    c = l.totalSubscriptions,
    u = l.totalPages,
    s = (0, y.useSelect)(function (e) {
      return e(T.default).selectSubscriptionsLoading();
    }, []),
    d = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationMessage();
    }, []),
    m = (0, y.useSelect)(function (e) {
      return e(T.default).getNotificationStatus();
    }, []),
    p = BQ((0, g.useState)([]), 2),
    h = p[0],
    _ = p[1],
    w = BQ((0, g.useState)(!1), 2),
    E = (w[0], w[1], BQ((0, g.useState)(1), 2)),
    S = E[0],
    R = E[1],
    x = BQ((0, g.useState)(10), 2),
    C = x[0],
    P = (x[1], BQ((0, g.useState)(""), 2)),
    O = P[0],
    k = P[1],
    j = BQ((0, g.useState)(null), 2),
    A = (j[0], j[1], BQ((0, g.useState)(!1), 2)),
    M = (A[0], A[1]),
    F = BQ((0, g.useState)(null), 2),
    N = F[0],
    D = F[1],
    W = (0, g.useCallback)(function () {
      var e = {
        page: S,
        per_page: C,
        search: O,
        orderby: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "start_date",
        order: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "DESC"
      };
      t.fetchSubscriptions(e);
    }, [t, S, C, O]);
  (0, g.useEffect)(function () {
    W();
  }, [W]), (0, g.useEffect)(function () {
    !s && d && d.length > 0 && a(m, d);
  }, [s, d, m, a, t]);
  var B = (0, g.useCallback)(function (e) {
      k(e), R(1);
    }, []),
    V = (0, g.useCallback)(function (e) {
      R(e), _([]);
    }, []),
    H = (0, g.useCallback)(function (e) {
      n("/subscription-edit/".concat(e));
    }, [n]),
    G = (0, g.useMemo)(function () {
      return [{
        title: (0, b.__)("ID", "ohmylms"),
        dataIndex: "id",
        key: "id",
        sorter: !0,
        render: function (e) {
          return React.createElement(v.Link, {
            to: "/subscription-edit/".concat(e)
          }, "#", e || "N/A");
        }
      }, {
        title: (0, b.__)("Student", "ohmylms"),
        dataIndex: "student_name",
        key: "student_name",
        sorter: !0,
        render: function (e, t) {
          return t.student_id ? React.createElement(v.Link, {
            to: "/students/".concat(t.student_id, "/report")
          }, e || t.customer_name || (0, b.__)("N/A", "ohmylms")) : e || t.customer_name || (0, b.__)("N/A", "ohmylms");
        }
      }, {
        title: (0, b.__)("Start Date", "ohmylms"),
        dataIndex: "schedule_start_date",
        key: "schedule_start_date",
        sorter: !0,
        render: function (e) {
          return VY(e) || "-";
        }
      }, {
        title: (0, b.__)("Next Payment", "ohmylms"),
        dataIndex: "schedule_next_payment_date",
        key: "schedule_next_payment_date",
        sorter: !0,
        render: function (e) {
          return VY(e) || "-";
        }
      }, {
        title: (0, b.__)("End Date", "ohmylms"),
        dataIndex: "schedule_end_date",
        key: "schedule_end_date",
        sorter: !0,
        render: function (e) {
          return VY(e) || "-";
        }
      }, {
        title: (0, b.__)("Last Payment Date", "ohmylms"),
        dataIndex: "last_payment_date",
        key: "last_payment_date",
        sorter: !0,
        render: function (e) {
          return VY(e) || "-";
        }
      }, {
        title: (0, b.__)("Status", "ohmylms"),
        dataIndex: "status",
        key: "status",
        render: function (e) {
          var t = "";
          switch (e) {
            case "active":
              t = "success";
              break;
            case "pending":
            case "on-hold":
              t = "warning";
              break;
            case "cancelled":
            case "expired":
              t = "danger";
              break;
            default:
              t = "default";
          }
          return React.createElement(I.BadgeWP, {
            isBorderLess: !0,
            variant: t,
            style: {
              textTransform: "capitalize"
            }
          }, e ? e.replace("ohmylms-", "").replace("-", " ").replace(/^(\w)/, function (e) {
            return e.toUpperCase();
          }) : (0, b.__)("N/A", "ohmylms"));
        }
      }, {
        title: (0, b.__)("Action", "ohmylms"),
        key: "action",
        render: function (e, t) {
          return React.createElement(I.ButtonWP, {
            onClick: function () {
              return H(t.id);
            }
          }, React.createElement(Br, null));
        }
      }];
    }, [H, function (e) {
      var t = null == e ? void 0 : e.toLowerCase();
      return "active" === t || "completed" === t || "ohmylms-active" === t ? "green" : "pending" === t || "ohmylms-pending" === t ? "gold" : "on-hold" === t || "ohmylms-on-hold" === t ? "orange" : "cancelled" === t || "ohmylms-cancelled" === t ? "red" : "expired" === t || "ohmylms-expired" === t ? "grey" : "default";
    }]),
    U = (0, g.useCallback)(function (e, t, n) {
      var r = {}[n.field] || n.field || "start_date",
        a = {
          ascend: "ASC",
          descend: "DESC"
        }[n.order] || "DESC";
      R(1), W(r, a);
    }, [W]),
    q = ((0, g.useMemo)(function () {
      return {
        selectedRowKeys: h,
        onChange: _
      };
    }, [h]), (0, g.useMemo)(function () {
      return [{
        label: (0, b.__)("Delete", "ohmylms"),
        value: "delete",
        action: function () {
          M(!0);
        }
      }];
    }, [h]));
  return (0, g.useCallback)(zQ(NQ().m(function e() {
    var n;
    return NQ().w(function (e) {
      for (;;) switch (e.n) {
        case 0:
          return n = N ? [N] : h, e.n = 1, t.trashBulkOrdersAction(n);
        case 1:
          W(), _([]), R(1), D(null), M(!1);
        case 2:
          return e.a(2);
      }
    }, e);
  })), [h, N, W]), React.createElement(React.Fragment, null, o, React.createElement(I.ContainerWP, null, React.createElement(YG, {
    title: (0, b.__)("Subscriptions", "ohmylms")
  }), React.createElement(Ea, {
    isBorderless: !0,
    style: {
      minHeight: "408px"
    }
  }, React.createElement(I.SpacerWP, {
    padding: 5,
    marginBottom: 0
  }, React.createElement(I.SpacerWP, {
    marginBottom: 4
  }, h.length > 0 ? React.createElement(hN, {
    items: h,
    setItems: _,
    bulksActions: q
  }) : React.createElement(I.FlexWP, {
    align: "center",
    justify: "start",
    gap: "2",
    wrap: "wrap"
  }, React.createElement(I.FlexItemWP, null, React.createElement(Cm, {
    placeholder: (0, b.__)("Search Subscriptions", "ohmylms"),
    onChange: B
  })))), React.createElement(I.TableWP, {
    rowKey: "id",
    columns: G,
    dataSource: i || [],
    pagination: !1,
    loading: s,
    onChange: U,
    locale: {
      emptyText: React.createElement(uf, {
        icon: React.createElement(df, null),
        title: (0, b.__)("No Subscriptions Found", "ohmylms"),
        text: O ? (0, b.__)("Try adjusting your search or filters.", "ohmylms") : (0, b.__)("There are no subscriptions to display yet.", "ohmylms")
      })
    }
  }), !s && c > 0 && u > 1 && React.createElement(fN, {
    total: c,
    currentPage: S,
    onPageChange: V,
    perPage: C
  })))));
};
const HQ = (0, g.memo)(VQ);
