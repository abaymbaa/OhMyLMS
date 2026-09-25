/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createOrderNotes(readRuntime) {
  return function OrderNotes(props) {
    const {
      Ge,
      I: Controls,
      JY,
      React,
      T: StoreModule,
      W,
      b: I18n,
      dQ,
      g: ReactHooks,
      mQ,
      q,
      uQ,
      y: WordPressData
    } = readRuntime();
    var t = props.notes,
      n = props.order,
      r = mQ((0, ReactHooks.useState)(""), 2),
      a = r[0],
      o = r[1],
      i = mQ((0, ReactHooks.useState)(!1), 2),
      l = i[0],
      c = i[1],
      u = mQ((0, ReactHooks.useState)(!0), 2),
      s = u[0],
      d = u[1],
      m = (0, WordPressData.useDispatch)(StoreModule.default),
      p = m.setOrderNote,
      f = m.saveOrderNote,
      v = m.fetchOrder,
      _ = function () {
        var e,
          t = (e = uQ().m(function e() {
            var t;
            return uQ().w(function (e) {
              for (;;) switch (e.p = e.n) {
                case 0:
                  if (!a.trim()) {
                    e.n = 4;
                    break;
                  }
                  return c(!0), e.p = 1, e.n = 2, f(a, n);
                case 2:
                  e.v && v(n.id), c(!1), o(""), e.n = 4;
                  break;
                case 3:
                  e.p = 3, t = e.v, console.error("Failed to add order note:", t);
                case 4:
                  return e.a(2);
              }
            }, e, null, [[1, 3]]);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, a) {
              var o = e.apply(t, n);
              function i(e) {
                dQ(o, r, a, i, l, "next", e);
              }
              function l(e) {
                dQ(o, r, a, i, l, "throw", e);
              }
              i(void 0);
            });
          });
        return function () {
          return t.apply(this, arguments);
        };
      }();
    return <React.Fragment><Controls.FlexWP gap={2} justify={"space-between"} align={"center"}><Controls.HeadingWP level={4} size={18} weight={500} color={"#000D25"}>{(0, I18n.__)("Order Notes", "ohmylms")}</Controls.HeadingWP><Controls.ButtonWP size={"small"} onClick={function () {
          return d(!s);
        }}><svg style={{
            transform: s ? "rotate(0deg)" : "rotate(180deg)"
          }} width={"12"} height={"6"} fill={"none"} viewBox={"0 0 12 6"} xmlns={"http://www.w3.org/2000/svg"}><path fill={"#000D25"} d={"M11.5 4.4L6 0 .5 4.4l.9 1.2L6 2l4.5 3.6 1-1.2z"} /></svg></Controls.ButtonWP></Controls.FlexWP>{s && <React.Fragment>{t.length > 0 && <React.Fragment><Controls.SpacerWP marginTop={6} marginBottom={0} /><q.__experimentalScrollable style={{
            maxHeight: 500
          }}>{t.map(function (e, t) {
              return <div key={t}><Controls.SpacerWP marginBottom={0} marginTop={0 === t ? 0 : 4} paddingX={2}><Controls.CardWP isBorderless={!0} variant={"muted"} style={{
                    borderRadius: "7px"
                  }}><Controls.SpacerWP marginBottom={0} padding={4}><Controls.TextWP variant={"muted"} color={"#000D25"} weight={400} size={13}>{Ge(e.content)}</Controls.TextWP></Controls.SpacerWP></Controls.CardWP><Controls.SpacerWP marginBottom={1} /><Controls.FlexWP align={"center"} gap={3} justify={"space-between"}><Controls.TextWP as={"time"} variant={"muted"} size={13} color={"#8C929B;"}>{JY(e.date_created.date)}</Controls.TextWP></Controls.FlexWP></Controls.SpacerWP></div>;
            })}</q.__experimentalScrollable></React.Fragment>}<Controls.SpacerWP marginTop={6} marginBottom={0} /><div><W.A rows={3} value={a} placeholder={"Add a note"} onChange={function (e) {
            var t = e;
            o(t), p(t);
          }} style={{
            marginBottom: "10px"
          }} /><Controls.ButtonWP variant={"primary"} style={{
            marginRight: "10px"
          }} onClick={_} loading={l} iconPosition={"end"}>{"Add Note"}</Controls.ButtonWP></div></React.Fragment>}</React.Fragment>;
  };
}
