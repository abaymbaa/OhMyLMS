/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createOrderHeader(readRuntime) {
  return function OrderHeader(props) {
    const {
      Ge,
      I: Controls,
      JY,
      React,
      b: I18n
    } = readRuntime();
    var t = props.order;
    return props.status, <React.Fragment><Controls.HeadingWP level={4} size={18} weight={500} color={"#000D25"}>{"Order #"}{t.id}</Controls.HeadingWP><Controls.FlexWP gap={2} justify={"start"} align={"center"}><Controls.BadgeWP isBorderLess={!0}><Controls.TextWP>{(0, I18n.__)("Payment via", "ohmylms")}{" "}{Ge(t.payment_method_title)}{" "}{t.transaction_id && t.transaction_url && <Controls.ButtonWP href={t.transaction_url} target={"_blank"} variant={"link"} style={{
              textDecoration: "none"
            }}>{"("}{t.transaction_id}{")"}</Controls.ButtonWP>}</Controls.TextWP></Controls.BadgeWP><Controls.BadgeWP isBorderLess={!0}><Controls.TextWP>{(0, I18n.__)("Created on", "ohmylms")}{" "}{JY(t.date_created)}</Controls.TextWP></Controls.BadgeWP></Controls.FlexWP></React.Fragment>;
  };
}
