/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createOrderItems(readRuntime) {
  return function OrderItems(props) {
    const {
      Ge,
      I: Controls,
      Mt,
      React,
      T: StoreModule,
      V,
      W,
      YH: Price,
      b: I18n,
      g: ReactHooks,
      iQ,
      nQ,
      oQ,
      rQ,
      sN: TableModule,
      tQ,
      wn,
      y: WordPressData
    } = readRuntime();
    var t,
      n,
      r,
      a,
      o,
      i,
      l,
      c = props.order,
      u = props.items,
      s = props.coupon,
      d = props.subtotal,
      m = props.total,
      p = props.discount,
      f = props.taxAmount,
      v = props.taxRate,
      _ = (0, WordPressData.useDispatch)(StoreModule.default),
      w = (0, WordPressData.useDispatch)(StoreModule.default),
      E = w.fetchOrder,
      S = w.issueRefund,
      R = iQ((0, ReactHooks.useState)(!1), 2),
      x = R[0],
      C = R[1],
      P = iQ((0, ReactHooks.useState)(!1), 2),
      O = P[0],
      k = P[1],
      j = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getRefundState();
      }, []),
      A = c.refunds.reduce(function (e, t) {
        return e + parseFloat(t.total);
      }, 0),
      M = parseFloat(c.total) + A > 0,
      F = parseFloat(c.total) + A,
      N = function () {
        C(!1);
      },
      D = function () {
        var e,
          t = (e = rQ().m(function e() {
            var t, n;
            return rQ().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  if (j.amount && !(j.amount <= 0)) {
                    e.n = 1;
                    break;
                  }
                  return alert((0, I18n.__)("Refund amount must be greater than 0.", "ohmylms")), e.a(2);
                case 1:
                  if (null !== (t = j.reason) && void 0 !== t && t.trim()) {
                    e.n = 2;
                    break;
                  }
                  return alert((0, I18n.__)("Refund reason is required.", "ohmylms")), e.a(2);
                case 2:
                  return k(!0), e.n = 3, S(c, j);
                case 3:
                  if (!(n = e.v)) {
                    e.n = 5;
                    break;
                  }
                  if (!1 !== (null == n ? void 0 : n.success)) {
                    e.n = 4;
                    break;
                  }
                  return k(!1), _.showNotification(null == n ? void 0 : n.message, "error"), e.a(2);
                case 4:
                  E(c.id), C(!1), k(!1), _.showNotification((0, I18n.__)("Refunded Successfully", "ohmylms"), "success"), e.n = 6;
                  break;
                case 5:
                  k(!1), _.showNotification((0, I18n.__)("Something went wrong!", "ohmylms"), "error");
                case 6:
                  return e.a(2);
              }
            }, e);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                oQ(o, r, a, i, l, "next", e);
              }
              function l(e) {
                oQ(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function () {
          return t.apply(this, arguments);
        };
      }(),
      z = function (e, t) {
        _.updateRefund(function (e, t, n) {
          return (t = function (e) {
            var t = function (e) {
              if ("object" != nQ(e) || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var n = t.call(e, "string");
                if ("object" != nQ(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            }(e);
            return "symbol" == nQ(t) ? t : t + "";
          }(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }({}, e, t));
      },
      B = {
        currencySymbol: (null == c || null === (t = c.currency) || void 0 === t ? void 0 : t.currency) || "$",
        currencyPosition: (null == c || null === (n = c.currency) || void 0 === n ? void 0 : n.currency_pos) || "left"
      },
      L = function (e, t) {
        var n,
          r,
          a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return <Controls.FlexWP justify={"space-between"} align={"center"} gap={5} className={"ohmylms-order-details-tfoot-td-flex"}><Controls.FlexItemWP className={"ohmylms-order-details-tfoot-td-left"}><Controls.TextWP as={"span"} color={"#000D25"} weight={"Paid" === e ? 700 : 400} size={14} align={"right"} isBlock={!0}>{e}{":"}</Controls.TextWP></Controls.FlexItemWP><Controls.FlexItemWP className={"ohmylms-order-details-tfoot-td-right"}><Controls.TextWP as={"span"} color={"#000D25"} weight={700} size={14} align={"right"} isBlock={!0}>{a && "-"}<Price currency={null == c || null === (n = c.currency) || void 0 === n ? void 0 : n.currency} currency_pos={null == c || null === (r = c.currency) || void 0 === r ? void 0 : r.currency_pos} price={Number(t)} /></Controls.TextWP></Controls.FlexItemWP></Controls.FlexWP>;
      },
      H = function (e, t) {
        var n, r;
        return <Controls.FlexWP justify={"space-between"} align={"center"} gap={5} className={"ohmylms-order-details-tfoot-td-flex"}><Controls.FlexItemWP className={"ohmylms-order-details-tfoot-td-left"}><Controls.TextWP as={"span"} color={"Refunded" === e ? "#FF4D4F" : "#000D25"} weight={"Net Payment" === e ? 700 : 400} size={14} align={"right"} isBlock={!0}>{e}{":"}</Controls.TextWP></Controls.FlexItemWP><Controls.FlexItemWP className={"ohmylms-order-details-tfoot-td-right"}><Controls.TextWP as={"span"} color={"Refunded" === e ? "#FF4D4F" : "#000D25"} weight={700} size={14} align={"right"} isBlock={!0}><Price currency={null == c || null === (n = c.currency) || void 0 === n ? void 0 : n.currency} currency_pos={null == c || null === (r = c.currency) || void 0 === r ? void 0 : r.currency_pos} price={Number(t)} /></Controls.TextWP></Controls.FlexItemWP></Controls.FlexWP>;
      },
      G = [{
        title: (0, I18n.__)("Item", "ohmylms"),
        dataIndex: "name",
        key: "name",
        render: function (e) {
          return <Controls.TextWP as={"p"} color={"#000D25"} weight={500} size={14}>{Ge(e)}</Controls.TextWP>;
        }
      }, {
        title: (0, I18n.__)("Price", "ohmylms"),
        dataIndex: "price",
        key: "price",
        render: function (e) {
          var t, n;
          return <Controls.TextWP as={"span"} color={"#7A8B9A"} weight={500} size={14}><Price currency={null == c || null === (t = c.currency) || void 0 === t ? void 0 : t.currency} currency_pos={null == c || null === (n = c.currency) || void 0 === n ? void 0 : n.currency_pos} price={Number(e)} /></Controls.TextWP>;
        }
      }, {
        title: (0, I18n.__)("Quantity", "ohmylms"),
        dataIndex: "quantity",
        key: "quantity",
        render: function (e) {
          return <Controls.TextWP as={"span"} color={"#7A8B9A"} weight={500} size={14}><svg width={"10"} height={"10"} fill={"none"} viewBox={"0 0 10 10"} xmlns={"http://www.w3.org/2000/svg"}><path stroke={"#7A8B9A"} stroke-linecap={"round"} stroke-linejoin={"round"} stroke-width={"2"} d={"M9.01 1l-8 8m0-8l8 8"} /></svg>{" "}{e}</Controls.TextWP>;
        }
      }, {
        title: (0, I18n.__)("Total", "ohmylms"),
        dataIndex: "total",
        key: "total",
        render: function (e, t) {
          var n, r;
          return <Controls.TextWP as={"span"} color={"#000D25"} weight={500} size={14} align={"right"}><Price currency={null == c || null === (n = c.currency) || void 0 === n ? void 0 : n.currency} currency_pos={null == c || null === (r = c.currency) || void 0 === r ? void 0 : r.currency_pos} price={Number(null == t ? void 0 : t.price) * Number(null == t ? void 0 : t.quantity)} /></Controls.TextWP>;
        }
      }];
    return <Controls.CardWP isBorderless={!0} style={{
      width: "100%"
    }}><Controls.SpacerWP padding={4}><TableModule.A rowKey={"key"} columns={G} dataSource={u} className={"ohmylms-order-details-summary-table"} /><Controls.SpacerWP marginBottom={0} paddingY={3} paddingX={4}><Controls.FlexWP justify={"space-between"} align={"flex-start"} gap={3} className={"ohmylms-order-details-tfoot-row"}>{s.code ? <div><Controls.TextWP as={"p"} color={"#000D25"} weight={500} size={14}>{(0, I18n.__)("Coupon(s)", "ohmylms")}</Controls.TextWP><Controls.SpacerWP marginBottom={2} /><tQ.A isBorderLess={!0} style={{
                backgroundColor: "#F4F5F7"
              }}>{s.code}</tQ.A></div> : <div />}<Controls.SpacerWP marginBottom={0}>{L("Item subtotal", "".concat(d))}<Controls.SpacerWP marginBottom={3} />{p && L("Discount", "".concat(p))}<Controls.SpacerWP marginBottom={3} />{f && !(null != c && c.is_included_tax) && L(v > 0 ? "Tax (".concat(v, "%)") : "Tax", "".concat(f))}<Controls.SpacerWP marginBottom={3} /><Controls.FlexWP justify={"space-between"} align={"flex-start"} gap={5} className={"ohmylms-order-details-tfoot-td-flex"}><Controls.FlexItemWP className={"ohmylms-order-details-tfoot-td-left"}><Controls.TextWP as={"span"} color={"#000D25"} weight={400} size={14} align={"right"} isBlock={!0}>{(0, I18n.__)("Order total", "ohmylms")}{":"}</Controls.TextWP></Controls.FlexItemWP><Controls.FlexItemWP className={"ohmylms-order-details-tfoot-td-right"}><Controls.TextWP as={"span"} color={"#000D25"} weight={700} size={14} align={"right"} isBlock={!0}><Price currency={null == c || null === (r = c.currency) || void 0 === r ? void 0 : r.currency} currency_pos={null == c || null === (a = c.currency) || void 0 === a ? void 0 : a.currency_pos} price={Number(m)} /></Controls.TextWP></Controls.FlexItemWP></Controls.FlexWP>{(null == c ? void 0 : c.is_included_tax) && <React.Fragment><Controls.FlexWP align={"flex-start"} justify={"flex-start"} gap={0} style={{
                  marginLeft: "45px"
                }}><small>{"("}{(0, I18n.__)("Including Tax: ", "ohmylms")}<Price currency={null == c || null === (o = c.currency) || void 0 === o ? void 0 : o.currency} currency_pos={null == c || null === (i = c.currency) || void 0 === i ? void 0 : i.currency_pos} price={Number(f)} />{")"}</small></Controls.FlexWP></React.Fragment>}<Controls.SpacerWP marginBottom={3} /></Controls.SpacerWP></Controls.FlexWP></Controls.SpacerWP><Controls.DividerWP marginBottom={3} marginTop={3} /><Controls.SpacerWP marginBottom={0} paddingY={3} paddingX={4}><Controls.FlexWP justify={"space-between"} align={"flex-start"} gap={3} className={"ohmylms-order-details-tfoot-row"}><div /><Controls.SpacerWP marginBottom={0}>{L("Paid", "".concat(m))}<Controls.SpacerWP marginBottom={3} /><Controls.SpacerWP marginTop={3} />{(null == c || null === (l = c.refunds) || void 0 === l ? void 0 : l.length) > 0 && <React.Fragment><Controls.FlexWP justify={"space-between"} align={"flex-start"} gap={3} className={"ohmylms-order-details-tfoot-row"}><div /><Controls.SpacerWP marginBottom={0}>{c.refunds.map(function (e, t) {
                      return <React.Fragment key={t}>{H("Refunded", "".concat(null == e ? void 0 : e.total))}<Controls.SpacerWP marginBottom={3} /></React.Fragment>;
                    })}{H((0, I18n.__)("Net Payment", "ohmylms"), "".concat(F))}<Controls.SpacerWP marginBottom={3} /></Controls.SpacerWP></Controls.FlexWP><Controls.DividerWP marginBottom={3} marginTop={3} /></React.Fragment>}<Controls.SpacerWP marginBottom={3} />{Array.isArray(c.payment_gateway_meta) && c.payment_gateway_meta.map(function (e, t) {
                return <React.Fragment key={t}>{L(e.label, e.value)}<Controls.SpacerWP marginBottom={3} /></React.Fragment>;
              })}</Controls.SpacerWP></Controls.FlexWP></Controls.SpacerWP><Controls.DividerWP marginBottom={3} marginTop={3} /><Controls.SpacerWP marginBottom={0} paddingTop={6} paddingX={4}><Controls.FlexWP justify={"space-between"} align={"center"} gap={3}>{M && <Controls.ButtonWP variant={"secondary"} onClick={function () {
              C(!0);
            }} style={{
              width: "110px",
              justifyContent: "center"
            }}>{(0, I18n.__)("Refund", "ohmylms")}</Controls.ButtonWP>}<Controls.FlexWP gap={2} justify={"end"} direction={"row-reverse"} align={"center"}><Controls.TextWP color={"#000D25"} weight={400} size={14} align={"right"}>{(0, I18n.__)("This order is no longer editable.", "ohmylms")}</Controls.TextWP><V.A title={(0, I18n.__)("Information about order edit.", "ohmylms")}><Mt.A /></V.A></Controls.FlexWP></Controls.FlexWP></Controls.SpacerWP><div>{x && <Controls.ModalWP title={(0, I18n.__)("Refund Order", "ohmylms")} open={x} onCancel={N} shouldCloseOnEsc={!0} shouldCloseOnClickOutside={!0} onRequestClose={N} size={"medium"}><Controls.FlexWP direction={"column"} gap={4}><div><label style={{
                  display: "block",
                  marginBottom: 4,
                  fontWeight: 500,
                  color: "#000D25"
                }}>{(0, I18n.__)("Refund Amount", "ohmylms")}{" "}<span style={{
                    color: "red"
                  }}>{"*"}</span></label><wn.A step={.01} precision={2} placeholder={"0.00"} prefix={"left" === B.currencyPosition ? B.currencySymbol : void 0} suffix={"right" === B.currencyPosition ? B.currencySymbol : void 0} max={m} min={0} value={j.amount} onChange={function (e) {
                  return z("amount", e);
                }} onKeyDown={function (e) {
                  "-" !== e.key && "Minus" !== e.key || e.preventDefault();
                }} /></div><div><label style={{
                  display: "block",
                  marginBottom: 4,
                  fontWeight: 500,
                  color: "#000D25"
                }}>{(0, I18n.__)("Refund Reason", "ohmylms")}{" "}<span style={{
                    color: "red"
                  }}>{"*"}</span></label><W.A rows={4} onChange={function (e) {
                  return z("reason", e);
                }} /></div><div><Controls.ButtonWP loading={O} onClick={D} variant={"primary"}>{(0, I18n.__)("Process Refund", "ohmylms")}</Controls.ButtonWP></div></Controls.FlexWP></Controls.ModalWP>}</div></Controls.SpacerWP></Controls.CardWP>;
  };
}
