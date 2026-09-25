/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createSubscriptionList(readRuntime) {
  return function SubscriptionList() {
    const {
      BQ,
      Br,
      Cm,
      Ea,
      I: Controls,
      L: Entitlements,
      NQ,
      React,
      T: StoreModule,
      VY,
      YG: PageHeader,
      b: I18n,
      df: EmptyIcon,
      f: Router,
      fN,
      g: ReactHooks,
      hN,
      uf: EmptyState,
      v,
      y: WordPressData,
      z: Notifications,
      zQ
    } = readRuntime();
    var e = (0, Entitlements.useIsPro)(),
      t = (0, WordPressData.useDispatch)(StoreModule.default),
      n = (0, Router.Zp)(),
      r = (0, Notifications.A)(),
      a = r.openNotificationWithIcon,
      o = r.contextHolder,
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectSubscriptions();
      }, []),
      l = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectSubscriptionsPagination();
      }, []),
      c = l.totalSubscriptions,
      u = l.totalPages,
      s = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectSubscriptionsLoading();
      }, []),
      d = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      m = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      p = BQ((0, ReactHooks.useState)([]), 2),
      h = p[0],
      _ = p[1],
      w = BQ((0, ReactHooks.useState)(!1), 2),
      E = (w[0], w[1], BQ((0, ReactHooks.useState)(1), 2)),
      S = E[0],
      R = E[1],
      x = BQ((0, ReactHooks.useState)(10), 2),
      C = x[0],
      P = (x[1], BQ((0, ReactHooks.useState)(""), 2)),
      O = P[0],
      k = P[1],
      j = BQ((0, ReactHooks.useState)(null), 2),
      A = (j[0], j[1], BQ((0, ReactHooks.useState)(!1), 2)),
      M = (A[0], A[1]),
      F = BQ((0, ReactHooks.useState)(null), 2),
      N = F[0],
      D = F[1],
      W = (0, ReactHooks.useCallback)(function () {
        var e = {
          page: S,
          per_page: C,
          search: O,
          orderby: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "start_date",
          order: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "DESC"
        };
        t.fetchSubscriptions(e);
      }, [t, S, C, O]);
    (0, ReactHooks.useEffect)(function () {
      e && W();
    }, [W]), (0, ReactHooks.useEffect)(function () {
      !s && d && d.length > 0 && a(m, d);
    }, [s, d, m, a, t]);
    var B = (0, ReactHooks.useCallback)(function (e) {
        k(e), R(1);
      }, []),
      V = (0, ReactHooks.useCallback)(function (e) {
        R(e), _([]);
      }, []),
      H = (0, ReactHooks.useCallback)(function (e) {
        n("/subscription-edit/".concat(e));
      }, [n]),
      G = (0, ReactHooks.useMemo)(function () {
        return [{
          title: (0, I18n.__)("ID", "ohmylms"),
          dataIndex: "id",
          key: "id",
          sorter: !0,
          render: function (e) {
            return <v.Link to={"/subscription-edit/".concat(e)}>{"#"}{e || "N/A"}</v.Link>;
          }
        }, {
          title: (0, I18n.__)("Student", "ohmylms"),
          dataIndex: "student_name",
          key: "student_name",
          sorter: !0,
          render: function (e, t) {
            return t.student_id ? <v.Link to={"/students/".concat(t.student_id, "/report")}>{e || t.customer_name || (0, I18n.__)("N/A", "ohmylms")}</v.Link> : e || t.customer_name || (0, I18n.__)("N/A", "ohmylms");
          }
        }, {
          title: (0, I18n.__)("Start Date", "ohmylms"),
          dataIndex: "schedule_start_date",
          key: "schedule_start_date",
          sorter: !0,
          render: function (e) {
            return VY(e) || "-";
          }
        }, {
          title: (0, I18n.__)("Next Payment", "ohmylms"),
          dataIndex: "schedule_next_payment_date",
          key: "schedule_next_payment_date",
          sorter: !0,
          render: function (e) {
            return VY(e) || "-";
          }
        }, {
          title: (0, I18n.__)("End Date", "ohmylms"),
          dataIndex: "schedule_end_date",
          key: "schedule_end_date",
          sorter: !0,
          render: function (e) {
            return VY(e) || "-";
          }
        }, {
          title: (0, I18n.__)("Last Payment Date", "ohmylms"),
          dataIndex: "last_payment_date",
          key: "last_payment_date",
          sorter: !0,
          render: function (e) {
            return VY(e) || "-";
          }
        }, {
          title: (0, I18n.__)("Status", "ohmylms"),
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
            return <Controls.BadgeWP isBorderLess={!0} variant={t} style={{
              textTransform: "capitalize"
            }}>{e ? e.replace("omlms-", "").replace("-", " ").replace(/^(\w)/, function (e) {
                return e.toUpperCase();
              }) : (0, I18n.__)("N/A", "ohmylms")}</Controls.BadgeWP>;
          }
        }, {
          title: (0, I18n.__)("Action", "ohmylms"),
          key: "action",
          render: function (e, t) {
            return <Controls.ButtonWP onClick={function () {
              return H(t.id);
            }}><Br /></Controls.ButtonWP>;
          }
        }];
      }, [H, function (e) {
        var t = null == e ? void 0 : e.toLowerCase();
        return "active" === t || "completed" === t || "creatorlms-active" === t ? "green" : "pending" === t || "creatorlms-pending" === t ? "gold" : "on-hold" === t || "creatorlms-on-hold" === t ? "orange" : "cancelled" === t || "creatorlms-cancelled" === t ? "red" : "expired" === t || "creatorlms-expired" === t ? "grey" : "default";
      }]),
      U = (0, ReactHooks.useCallback)(function (e, t, n) {
        var r = {}[n.field] || n.field || "start_date",
          a = {
            ascend: "ASC",
            descend: "DESC"
          }[n.order] || "DESC";
        R(1), W(r, a);
      }, [W]),
      q = ((0, ReactHooks.useMemo)(function () {
        return {
          selectedRowKeys: h,
          onChange: _
        };
      }, [h]), (0, ReactHooks.useMemo)(function () {
        return [{
          label: (0, I18n.__)("Delete", "ohmylms"),
          value: "delete",
          action: function () {
            M(!0);
          }
        }];
      }, [h]));
    return (0, ReactHooks.useCallback)(zQ(NQ().m(function e() {
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
    })), [h, N, W]), <React.Fragment>{o}<Controls.ContainerWP><PageHeader title={(0, I18n.__)("Subscriptions", "ohmylms")} /><Ea isBorderless={!0} style={{
          minHeight: "408px"
        }}><Controls.SpacerWP padding={5} marginBottom={0}><Controls.ProOverlayWP title={(0, I18n.__)("Subscription is available in the OhMyLMS version. Upgrade to Pro today to unlock this and more powerful features.", "ohmylms")} /><Controls.SpacerWP marginBottom={4}>{h.length > 0 ? React.createElement(hN, {
                items: h,
                setItems: _,
                bulksActions: q
              }) : <Controls.FlexWP align={"center"} justify={"start"} gap={"2"} wrap={"wrap"}><Controls.FlexItemWP><Cm placeholder={(0, I18n.__)("Search Subscriptions", "ohmylms")} onChange={B} /></Controls.FlexItemWP></Controls.FlexWP>}</Controls.SpacerWP><Controls.TableWP rowKey={"id"} columns={G} dataSource={i || []} pagination={!1} loading={s} onChange={U} locale={{
              emptyText: <EmptyState icon={<EmptyIcon />} title={(0, I18n.__)("No Subscriptions Found", "ohmylms")} text={O ? (0, I18n.__)("Try adjusting your search or filters.", "ohmylms") : (0, I18n.__)("There are no subscriptions to display yet.", "ohmylms")} />
            }} />{!s && c > 0 && u > 1 && React.createElement(fN, {
              total: c,
              currentPage: S,
              onPageChange: V,
              perPage: C
            })}</Controls.SpacerWP></Ea></Controls.ContainerWP></React.Fragment>;
  };
}
