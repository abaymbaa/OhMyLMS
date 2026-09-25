/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createOrderDetails(readRuntime) {
  return function OrderDetails(props) {
    const {
      CQ,
      EQ,
      Ge,
      I: Controls,
      MQ,
      Nr: BackButton,
      PQ,
      RQ,
      React,
      T: StoreModule,
      TQ,
      XY,
      _,
      b: I18n,
      cQ,
      eQ,
      f: Router,
      fQ,
      g: ReactHooks,
      jQ,
      kQ,
      y: WordPressData,
      z: Notifications
    } = readRuntime();
    var t = props.id,
      n = void 0 === t ? null : t,
      r = (0, Router.Zp)(),
      a = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getOrder();
      }, [n]),
      o = (0, WordPressData.useDispatch)(StoreModule.default).fetchOrder,
      i = TQ((0, ReactHooks.useState)(!0), 2),
      l = i[0],
      c = i[1],
      u = TQ((0, ReactHooks.useState)(!1), 2),
      s = u[0],
      d = u[1],
      m = (0, Notifications.A)(),
      p = m.openNotificationWithIcon,
      v = m.contextHolder,
      w = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      E = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []);
    return (0, ReactHooks.useEffect)(function () {
      !l && w && p(E, w);
    }, [w]), (0, ReactHooks.useEffect)(function () {
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
    }, [n]), l ? <_.A active={!0} /> : a ? <Controls.ContainerWP isFullWidth={!0}><Controls.SpacerWP paddingTop={5} />{v}<Controls.FlexWP gap={2} align={"center"} justify={"flex-start"}><BackButton onClick={function () {
          r("/orders");
        }} /><Controls.HeadingWP level={3} size={18} weight={600} color={"#000D25"}>{(0, I18n.__)("Order Details", "ohmylms")}</Controls.HeadingWP></Controls.FlexWP><Controls.SpacerWP marginBottom={3} />{s ? <React.Fragment><Controls.CardWP isBorderless={!0}><Controls.SpacerWP padding={6} marginBottom={0}><Controls.EmptyWP description={"No Orders Found"} /></Controls.SpacerWP></Controls.CardWP></React.Fragment> : <Controls.CardWP isBorderless={!0}><Controls.SpacerWP padding={6} marginBottom={0}><Controls.FlexWP className={"omlms-order-details"} justify={"start"} align={"start"} gap={3}><Controls.FlexItemWP className={"omlms-order-details-left"} style={{
              width: "calc(70% - 12px)"
            }}><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP padding={4} marginBottom={0}><XY order={a} status={a.status} /></Controls.SpacerWP></Controls.CardWP><Controls.SpacerWP marginBottom={3} /><Controls.FlexWP justify={"space-between"} align={"stretch"} gap={3} className={"omlms-order-details-general-billing"}><Controls.FlexBlockWP><Controls.CardWP isBorderless={!0} variant={"secondary"} style={{
                    height: "100%"
                  }}><Controls.SpacerWP paddingX={4} paddingY={5} marginBottom={0}><PQ student_name={Ge(a.student_name)} student_email={a.student_email} student_id={a.student_id} /></Controls.SpacerWP></Controls.CardWP></Controls.FlexBlockWP><Controls.FlexBlockWP><Controls.CardWP isBorderless={!0} variant={"secondary"} style={{
                    height: "100%"
                  }}><Controls.SpacerWP paddingX={4} paddingY={5} marginBottom={0}>{React.createElement(eQ, {
                        order: a,
                        address: a.address,
                        email: a.student_email
                      })}</Controls.SpacerWP></Controls.CardWP></Controls.FlexBlockWP></Controls.FlexWP><Controls.SpacerWP marginBottom={3} /><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP paddingY={6} paddingX={4} marginBottom={0}>{React.createElement(cQ, {
                    order: a,
                    items: a.line_items,
                    coupon: a.coupon_lines,
                    subtotal: a.subtotal,
                    total: a.total,
                    paid: a.paid,
                    discount: null == a ? void 0 : a.cart_discount,
                    taxAmount: null == a ? void 0 : a.tax_amount,
                    taxRate: null == a ? void 0 : a.tax_rate
                  })}</Controls.SpacerWP></Controls.CardWP><Controls.SpacerWP marginBottom={3} />{Array.isArray(a.related_orders) && a.related_orders.length > 0 && <Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP paddingY={6} paddingX={4} marginBottom={0}>{React.createElement(kQ, {
                    relatedOrders: a.related_orders
                  })}</Controls.SpacerWP></Controls.CardWP>}</Controls.FlexItemWP><Controls.FlexItemWP className={"omlms-order-details-right"} style={{
              width: "30%"
            }}><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP paddingX={4} paddingY={5} marginBottom={0}><EQ status={a.status} order={a} /></Controls.SpacerWP></Controls.CardWP><Controls.SpacerWP marginBottom={3} /><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP paddingX={4} paddingY={5} marginBottom={0}><CQ student_name={Ge(a.student_name)} student_email={a.student_email} student_id={a.student_id} student_image={a.student_image} /></Controls.SpacerWP></Controls.CardWP><Controls.SpacerWP marginBottom={3} /><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP paddingX={4} paddingY={5} marginBottom={0}><RQ order={a} /></Controls.SpacerWP></Controls.CardWP><Controls.SpacerWP marginBottom={3} /><Controls.CardWP isBorderless={!0} variant={"secondary"}><Controls.SpacerWP paddingX={4} paddingY={5} marginBottom={0}>{React.createElement(fQ, {
                    notes: a.order_notes,
                    order: a
                  })}</Controls.SpacerWP></Controls.CardWP></Controls.FlexItemWP></Controls.FlexWP></Controls.SpacerWP></Controls.CardWP>}</Controls.ContainerWP> : <Controls.CardWP><Controls.SpacerWP padding={6} marginBottom={0}><Controls.EmptyWP description={"No Orders Found"} /></Controls.SpacerWP></Controls.CardWP>;
  };
}
