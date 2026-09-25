/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createSubscriptionStatus(readRuntime) {
  return function SubscriptionStatus(props) {
    const {
      I: Controls,
      QQ,
      React,
      T: StoreModule,
      ZQ,
      b: I18n,
      g: ReactHooks,
      qQ,
      vn,
      y: WordPressData
    } = readRuntime();
    var t = props.subscription,
      n = props.status,
      r = (0, WordPressData.useDispatch)(StoreModule.default),
      a = r.updateSubscription,
      o = r.fetchSubscription,
      i = (0, WordPressData.useDispatch)(StoreModule.default),
      l = (0, WordPressData.useDispatch)(StoreModule.default).updateSubscriptionState,
      c = ZQ((0, ReactHooks.useState)(!1), 2),
      u = c[0],
      s = c[1],
      d = ZQ((0, ReactHooks.useState)(!0), 2),
      m = d[0],
      p = d[1],
      f = function () {
        var e,
          n = (e = qQ().m(function e() {
            return qQ().w(function (e) {
              for (;;) switch (e.n) {
                case 0:
                  return s(!0), e.n = 1, a(t);
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
                QQ(o, r, a, i, l, "next", e);
              }
              function l(e) {
                QQ(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function () {
          return n.apply(this, arguments);
        };
      }(),
      v = [{
        value: "pending",
        label: (0, I18n.__)("Pending", "ohmylms")
      }, {
        value: "active",
        label: (0, I18n.__)("Active", "ohmylms")
      }, {
        value: "on-hold",
        label: (0, I18n.__)("On-hold", "ohmylms")
      }, {
        value: "pending-cancel",
        label: (0, I18n.__)("Pending cancel", "ohmylms")
      }, {
        value: "cancelled",
        label: (0, I18n.__)("Cancelled", "ohmylms")
      }, {
        value: "expired",
        label: (0, I18n.__)("Expired", "ohmylms")
      }];
    return <React.Fragment><Controls.FlexWP gap={2} justify={"space-between"} align={"center"}><Controls.HeadingWP level={4} size={18} weight={500} color={"#000D25"}>{(0, I18n.__)("Subscription action", "ohmylms")}</Controls.HeadingWP><Controls.ButtonWP size={"small"} onClick={function () {
          return p(!m);
        }}><svg style={{
            transform: m ? "rotate(0deg)" : "rotate(180deg)"
          }} width={"12"} height={"6"} fill={"none"} viewBox={"0 0 12 6"} xmlns={"http://www.w3.org/2000/svg"}><path fill={"#000D25"} d={"M11.5 4.4L6 0 .5 4.4l.9 1.2L6 2l4.5 3.6 1-1.2z"} /></svg></Controls.ButtonWP></Controls.FlexWP>{m && <React.Fragment><Controls.SpacerWP marginTop={6} marginBottom={0} /><Controls.FlexWP gap={2} justify={"start"} align={"center"}><Controls.FlexItemWP style={{
            width: "calc(100% - 53px)"
          }}><vn.A defaultValue={n} onChange={function (e) {
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
