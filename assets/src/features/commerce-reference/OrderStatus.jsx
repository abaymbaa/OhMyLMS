/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createOrderStatus(readRuntime) {
  return function OrderStatus(props) {
    const {
      I: Controls,
      React,
      T: StoreModule,
      b: I18n,
      bQ,
      g: ReactHooks,
      gQ,
      vQ,
      vn,
      y: WordPressData,
      yQ
    } = readRuntime();
    var t = props.order,
      n = props.status,
      r = (0, WordPressData.useDispatch)(StoreModule.default),
      a = r.updateOrder,
      o = r.fetchOrder,
      i = (0, WordPressData.useDispatch)(StoreModule.default),
      l = (0, WordPressData.useDispatch)(StoreModule.default).updateOrderState,
      c = bQ((0, ReactHooks.useState)(!1), 2),
      u = c[0],
      s = c[1],
      d = bQ((0, ReactHooks.useState)(!0), 2),
      m = d[0],
      p = d[1],
      f = function () {
        var e,
          n = (e = gQ().m(function e() {
            return gQ().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  return e.n = 1, a(t);
                case 1:
                  e.v && (i.showNotification((0, I18n.__)("Updated Successfully", "ohmylms"), "success"), o(t.id), s(!1));
                case 2:
                  return e.a(2);
              }
            }, e);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                yQ(o, r, a, i, l, "next", e);
              }
              function l(e) {
                yQ(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function () {
          return n.apply(this, arguments);
        };
      }(),
      v = [].concat(vQ("refunded" !== t.status ? [{
        value: "completed",
        label: (0, I18n.__)("Completed", "ohmylms")
      }] : []), vQ(0 !== Number(null == t ? void 0 : t.total) ? [{
        value: "pending",
        label: (0, I18n.__)("Pending", "ohmylms")
      }, {
        value: "on-hold",
        label: (0, I18n.__)("On Hold", "ohmylms")
      }, {
        value: "processing",
        label: (0, I18n.__)("Processing", "ohmylms")
      }] : []), [{
        value: "cancelled",
        label: (0, I18n.__)("Cancelled", "ohmylms")
      }], vQ(0 !== Number(null == t ? void 0 : t.total) ? [{
        value: "refunded",
        label: (0, I18n.__)("Refunded", "ohmylms")
      }] : []));
    return <React.Fragment><Controls.FlexWP gap={2} justify={"space-between"} align={"center"}><Controls.HeadingWP level={4} size={18} weight={500} color={"#000D25"}>{(0, I18n.__)("Order action", "ohmylms")}</Controls.HeadingWP><Controls.ButtonWP size={"small"} onClick={function () {
          return p(!m);
        }}><svg style={{
            transform: m ? "rotate(0deg)" : "rotate(180deg)"
          }} width={"12"} height={"6"} fill={"none"} viewBox={"0 0 12 6"} xmlns={"http://www.w3.org/2000/svg"}><path fill={"#000D25"} d={"M11.5 4.4L6 0 .5 4.4l.9 1.2L6 2l4.5 3.6 1-1.2z"} /></svg></Controls.ButtonWP></Controls.FlexWP>{m && <React.Fragment><Controls.SpacerWP marginTop={6} marginBottom={0} /><Controls.FlexWP gap={2} justify={"start"} align={"center"}><Controls.FlexItemWP style={{
            width: "calc(100% - 53px)"
          }}><vn.A value={n} onChange={function (e) {
              l({
                status: e
              });
            }} options={v} /></Controls.FlexItemWP><Controls.ButtonWP variant={"primary"} onClick={f} loading={u} style={{
            height: "40px",
            width: "53px",
            backgroundColor: "#6e42d34d"
          }}><svg style={{
              margin: "0 auto"
            }} width={"7"} height={"12"} fill={"none"} viewBox={"0 0 7 12"} xmlns={"http://www.w3.org/2000/svg"}><path fill={"#000D25"} d={"M2.018.5l4.4 5.5-4.4 5.5-1.2-.9 3.6-4.6-3.6-4.5 1.2-1z"} /></svg></Controls.ButtonWP></Controls.FlexWP></React.Fragment>}</React.Fragment>;
  };
}
