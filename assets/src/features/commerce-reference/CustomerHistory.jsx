/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createCustomerHistory(readRuntime) {
  return function CustomerHistory(props) {
    const {
      I: Controls,
      React,
      SQ,
      b: I18n,
      g: ReactHooks
    } = readRuntime();
    var t = props.order,
      n = function (e, t) {
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
            if ("string" == typeof e) return SQ(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? SQ(e, t) : void 0;
          }
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((0, ReactHooks.useState)(!0), 2),
      r = n[0],
      a = n[1];
    return <React.Fragment><Controls.FlexWP gap={2} justify={"space-between"} align={"center"}><Controls.HeadingWP level={4} size={18} weight={500} color={"#000D25"}>{(0, I18n.__)("Customer history", "ohmylms")}</Controls.HeadingWP><Controls.ButtonWP size={"small"} onClick={function () {
          return a(!r);
        }}><svg style={{
            transform: r ? "rotate(0deg)" : "rotate(180deg)"
          }} width={"12"} height={"6"} fill={"none"} viewBox={"0 0 12 6"} xmlns={"http://www.w3.org/2000/svg"}><path fill={"#000D25"} d={"M11.5 4.4L6 0 .5 4.4l.9 1.2L6 2l4.5 3.6 1-1.2z"} /></svg></Controls.ButtonWP></Controls.FlexWP>{r && <React.Fragment><Controls.SpacerWP marginTop={6} marginBottom={0} />{t.total_orders ? <React.Fragment><Controls.TextWP as={"p"} color={"#7A8B9A"} size={16} weight={500} lineHeight={1.5}>{(0, I18n.__)("Total orders", "ohmylms")}<span style={{
              color: "#000D25",
              display: "block"
            }} dangerouslySetInnerHTML={{
              __html: t.total_orders
            }} /></Controls.TextWP><Controls.SpacerWP marginBottom={2} /><Controls.TextWP as={"p"} size={16} weight={500} color={"#7A8B9A"}>{(0, I18n.__)("Total Revenue", "ohmylms")}<span style={{
              color: "#000D25",
              display: "block"
            }} dangerouslySetInnerHTML={{
              __html: t.total_revenue
            }} /></Controls.TextWP><Controls.SpacerWP marginBottom={2} /><Controls.TextWP as={"p"} color={"#7A8B9A"} size={16} weight={500} lineHeight={1.5}>{(0, I18n.__)("Average order value", "ohmylms")}<span style={{
              color: "#000D25",
              display: "block"
            }} dangerouslySetInnerHTML={{
              __html: t.aov
            }} /></Controls.TextWP></React.Fragment> : <React.Fragment><Controls.TextWP as={"p"} color={"#7A8B9A"} size={16} weight={400} lineHeight={1.5}>{(0, I18n.__)("No history found", "ohmylms")}</Controls.TextWP></React.Fragment>}</React.Fragment>}</React.Fragment>;
  };
}
