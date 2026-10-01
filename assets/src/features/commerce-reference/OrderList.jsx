/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createOrderList(readRuntime) {
  return function OrderList() {
    const {
      Br,
      Cm,
      Ea,
      HY,
      I: Controls,
      Ie,
      Ne,
      React,
      T: StoreModule,
      VY,
      We,
      YG: PageHeader,
      YH: Price,
      YY,
      ZU: AnalyticsDateFilter,
      b: I18n,
      df: EmptyIcon,
      f: Router,
      fN,
      g: ReactHooks,
      hN,
      q,
      qY,
      sN: TableModule,
      sn,
      uf: EmptyState,
      v,
      vn,
      xq,
      y: WordPressData,
      z: Notifications
    } = readRuntime();
    var e = (0, WordPressData.useDispatch)(StoreModule.default),
      t = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      n = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      r = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectOrdersPagination();
      }, []),
      a = r.totalOrders,
      o = (r.totalPages, (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectOrders();
      }, [])),
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCurrency();
      }, []),
      l = YY((0, ReactHooks.useState)(!0), 2),
      c = l[0],
      u = l[1],
      s = YY((0, ReactHooks.useState)([]), 2),
      d = s[0],
      m = s[1],
      p = YY((0, ReactHooks.useState)(!1), 2),
      h = p[0],
      _ = p[1],
      w = YY((0, ReactHooks.useState)(1), 2),
      E = w[0],
      S = w[1],
      R = YY((0, ReactHooks.useState)(10), 2),
      x = R[0],
      C = (R[1], YY((0, ReactHooks.useState)(""), 2)),
      P = C[0],
      O = C[1],
      k = YY((0, ReactHooks.useState)("any"), 2),
      j = k[0],
      A = k[1],
      M = YY((0, ReactHooks.useState)(null), 2),
      F = M[0],
      N = M[1],
      D = YY((0, ReactHooks.useState)(null), 2),
      W = (D[0], D[1]),
      B = YY((0, ReactHooks.useState)("all"), 2),
      L = B[0],
      V = B[1],
      H = YY((0, ReactHooks.useState)(""), 2),
      G = H[0],
      U = H[1],
      Y = (0, Notifications.A)(),
      Q = Y.openNotificationWithIcon,
      Z = Y.contextHolder,
      $ = (0, Router.Zp)(),
      K = (0, ReactHooks.useCallback)(function (e) {
        O(e), S(1);
      }, []),
      J = (0, ReactHooks.useCallback)(function (e) {
        A(e), S(1);
      }, []),
      X = (0, ReactHooks.useCallback)(function (e) {
        V(e), S(1);
      }, []),
      ee = (0, ReactHooks.useCallback)(function (e) {
        U(e), S(1);
      }, []),
      te = (0, ReactHooks.useCallback)(function (e) {
        S(e), m([]);
      }, []),
      ne = (0, ReactHooks.useCallback)(function (e) {
        $("/order-edit/".concat(e));
      }, [$]),
      re = (0, ReactHooks.useCallback)(qY(HY().m(function t() {
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
      ae = (0, ReactHooks.useCallback)(function (e) {
        _(!0), N(e);
      }, []),
      oe = (0, ReactHooks.useCallback)(function () {
        _(!1);
      }, []),
      ie = (0, ReactHooks.useCallback)(qY(HY().m(function t() {
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
      le = (0, ReactHooks.useCallback)(function (e, t, n) {
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
      ce = (0, ReactHooks.useMemo)(function () {
        return [{
          label: (0, I18n.__)("Delete", "ohmylms"),
          value: "delete",
          action: function () {
            _(!0);
          }
        }];
      }, [d]),
      ue = (0, ReactHooks.useMemo)(function () {
        return [{
          value: "",
          label: (0, I18n.__)("All Payment Method", "ohmylms")
        }, {
          value: "stripe",
          label: (0, I18n.__)("Stripe", "ohmylms")
        }, {
          value: "paypal",
          label: (0, I18n.__)("PayPal", "ohmylms")
        }, {
          value: "offline",
          label: (0, I18n.__)("Offline", "ohmylms")
        }, {
          value: "mollie",
          label: (0, I18n.__)("Mollie", "ohmylms")
        }, {
          value: "razorpay",
          label: (0, I18n.__)("Razorpay", "ohmylms")
        }, {
          value: "authorize_net",
          label: (0, I18n.__)("Authorize.Net", "ohmylms")
        }];
      }, []),
      se = (0, ReactHooks.useMemo)(function () {
        return [{
          value: "any",
          label: (0, I18n.__)("All Status", "ohmylms")
        }, {
          value: "ohmylms-completed",
          label: (0, I18n.__)("Completed", "ohmylms")
        }, {
          value: "ohmylms-pending",
          label: (0, I18n.__)("Pending", "ohmylms")
        }, {
          value: "ohmylms-on-hold",
          label: (0, I18n.__)("On Hold", "ohmylms")
        }, {
          value: "ohmylms-processing",
          label: (0, I18n.__)("Processing", "ohmylms")
        }, {
          value: "ohmylms-cancelled",
          label: (0, I18n.__)("Cancelled", "ohmylms")
        }, {
          value: "ohmylms-refunded",
          label: (0, I18n.__)("Refunded", "ohmylms")
        }];
      }, []),
      de = ((0, ReactHooks.useMemo)(function () {
        return [{
          value: "all",
          label: (0, I18n.__)("All", "ohmylms")
        }, {
          value: "last_30_days",
          label: (0, I18n.__)("Last 30 days", "ohmylms")
        }, {
          value: "current_month",
          label: (0, I18n.__)("Current month", "ohmylms")
        }, {
          value: "previous_month",
          label: (0, I18n.__)("Previous month", "ohmylms")
        }, {
          value: "current_year",
          label: (0, I18n.__)("Current year", "ohmylms")
        }, {
          value: "last_12_months",
          label: (0, I18n.__)("Last 12 months", "ohmylms")
        }];
      }, []), (0, ReactHooks.useMemo)(function () {
        return {
          selectedRowKeys: d,
          onChange: m
        };
      }, [d])),
      me = [{
        title: (0, I18n.__)("Order", "ohmylms"),
        dataIndex: "id",
        key: "id",
        sorter: !0,
        render: function (e) {
          return <v.Link to={"/order-edit/".concat(e)}>{"#"}{e || "#"}</v.Link>;
        }
      }, {
        title: (0, I18n.__)("Date", "ohmylms"),
        dataIndex: "date_created",
        key: "date_created",
        sorter: !0,
        render: function (e) {
          return VY(e) || "-";
        }
      }, {
        title: (0, I18n.__)("Student", "ohmylms"),
        dataIndex: "student_email",
        key: "student_email",
        sorter: !0,
        render: function (e) {
          return <span>{e || "-"}</span>;
        }
      }, {
        title: (0, I18n.__)("Payment Method", "ohmylms"),
        dataIndex: "payment_method",
        key: "payment_method",
        render: function (e) {
          return <span style={{
            textTransform: "capitalize"
          }}>{"offline_payment" === e ? "Offline" : e || "-"}</span>;
        }
      }, {
        title: (0, I18n.__)("Purchased By", "ohmylms"),
        dataIndex: "purchased_by",
        key: "purchased_by",
        render: function (e) {
          return <span style={{
            textTransform: "capitalize"
          }}>{e}</span>;
        }
      }, {
        title: (0, I18n.__)("Subscription Relationship", "ohmylms"),
        dataIndex: "subscription_relationship",
        key: "subscription_relationship",
        render: function (e, t) {
          return null != t && t.is_renewal_order ? "Renewal order" : null != t && t.is_parent_order ? "Parent order" : (null != t && t.is_normal_order, "-");
        }
      }, {
        title: (0, I18n.__)("Total", "ohmylms"),
        dataIndex: "total",
        key: "total",
        sorter: !0,
        render: function (e, t) {
          var n;
          return <React.Fragment>{0 < (null == t || null === (n = t.refunds) || void 0 === n ? void 0 : n.length) ? <React.Fragment><span><Price currency={(null == i ? void 0 : i.currency) || "$"} currency_pos={(null == i ? void 0 : i.currency_pos) || "left"} price={Number((null == t ? void 0 : t.total) || "0")} /><del><Price currency={(null == i ? void 0 : i.currency) || "$"} currency_pos={(null == i ? void 0 : i.currency_pos) || "left"} price={Number((null == t ? void 0 : t.total) || "0")} /></del></span></React.Fragment> : <span dangerouslySetInnerHTML={{
              __html: null == t ? void 0 : t.formattedTotal
            }} />}</React.Fragment>;
        }
      }, {
        title: (0, I18n.__)("Status", "ohmylms"),
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
          return <React.Fragment><Controls.BadgeWP isBorderLess={!0} variant={t} style={{
              textTransform: "capitalize"
            }}>{e}</Controls.BadgeWP></React.Fragment>;
        }
      }, {
        title: (0, I18n.__)("Action", "ohmylms"),
        dataIndex: "action",
        key: "action",
        render: function (e, t) {
          return <Controls.DropdownMenuWP controls={[{
            title: (0, I18n.__)("View", "ohmylms"),
            key: "view",
            onClick: function () {
              return ne(null == t ? void 0 : t.id);
            },
            icon: <Br />
          }, {
            title: (0, I18n.__)("Delete", "ohmylms"),
            key: "delete",
            onClick: function () {
              return ae(null == t ? void 0 : t.id);
            },
            icon: <We />
          }]} icon={<q.Icon icon={Ne.A} />} />;
        }
      }];
    return (0, ReactHooks.useEffect)(function () {
      var e = !0;
      return e && re(), function () {
        e = !1;
      };
    }, [E, x, P, e, j, L, G]), (0, ReactHooks.useEffect)(function () {
      !c && t && Q(n, t);
    }, [t]), <React.Fragment>{Z}<Controls.ContainerWP><PageHeader title={(0, I18n.__)("Order Management", "ohmylms")} /><Ea isBorderless={!0} minHeight={"calc(100vh - 200px)"}><Controls.SpacerWP padding={5}><Controls.SpacerWP marginBottom={4}>{d.length > 0 ? React.createElement(hN, {
                items: d,
                setItems: m,
                bulksActions: ce
              }) : <Controls.FlexWP align={"center"} justify={"start"} gap={"2"} wrap={"wrap"}><Controls.FlexItemWP><Cm placeholder={(0, I18n.__)("Search Orders", "ohmylms")} onChange={K} /></Controls.FlexItemWP><Controls.FlexItemWP><vn.A placeholder={(0, I18n.__)("Filter By Status", "ohmylms")} onChange={J} value={j} options={se} /></Controls.FlexItemWP><Controls.FlexItemWP><vn.A placeholder={(0, I18n.__)("Payment Type", "ohmylms")} onChange={ee} value={G} options={ue} /></Controls.FlexItemWP><Controls.FlexItemWP><AnalyticsDateFilter placeholder={(0, I18n.__)("Filter By Days", "ohmylms")} onChange={function (e) {
                    "custom_range" !== e && X(e);
                  }} onRangeChange={X} /></Controls.FlexItemWP></Controls.FlexWP>}</Controls.SpacerWP><TableModule.A rowKey={"id"} columns={me} dataSource={o || []} rowSelection={de} pagination={!1} loading={c} onChange={le} onRowMouseEnter={function (e) {
              return W(null == e ? void 0 : e.id);
            }} onRowMouseLeave={function () {
              return W(null);
            }} locale={{
              emptyText: <EmptyState icon={<EmptyIcon />} title={(0, I18n.__)("No Order yet!", "ohmylms")} />
            }} />{!c && Number(a) > x && React.createElement(fN, {
              total: a,
              currentPage: E,
              onPageChange: te,
              perPage: x
            })}</Controls.SpacerWP></Ea></Controls.ContainerWP>{h && <Ie title={d.length > 1 ? (0, I18n.__)("Delete Orders", "ohmylms") : (0, I18n.__)("Delete order", "ohmylms")} description={d.length > 1 ? (0, I18n.__)("Are you sure you want to delete these orders?", "ohmylms") : (0, I18n.__)("Are you sure you want to delete order?", "ohmylms")} onClose={oe} onDelete={ie} isOpen={h} isDelete={!0} />}</React.Fragment>;
  };
}
