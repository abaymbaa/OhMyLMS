/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createOrderBilling(readRuntime) {
  return function OrderBilling(props) {
    const {
      Ge,
      I: Controls,
      React,
      b: I18n
    } = readRuntime();
    var t = props.order,
      n = props.address,
      r = props.email;
    return <React.Fragment><Controls.HeadingWP level={4} size={18} weight={500} color={"#000D25"}>{(0, I18n.__)("Billing", "ohmylms")}</Controls.HeadingWP><Controls.SpacerWP marginBottom={4} /><Controls.FlexWP direction={"column"} gap={3} justify={"start"} align={"start"}><Controls.TextWP size={"14px"} color={"#7A8B9A"}><strong style={{
            color: "#000D21"
          }}>{(0, I18n.__)("Name: ", "ohmylms")}</strong>{" "}{Ge(null == t ? void 0 : t.student_name)}</Controls.TextWP><Controls.TextWP variant={"muted"} size={"14px"} color={"#7A8B9A"}><strong style={{
            color: "#000D21"
          }}>{(0, I18n.__)("Address: ", "ohmylms")}</strong>{Ge(n)}</Controls.TextWP><Controls.TextWP size={"14px"} color={"#7A8B9A"}><strong style={{
            color: "#000D21"
          }}>{(0, I18n.__)("Email address: ", "ohmylms")}</strong><Controls.ButtonWP variant={"link"} href={"mailto:".concat(r)}>{r}</Controls.ButtonWP></Controls.TextWP>{(null == t ? void 0 : t.student_phone) && <Controls.TextWP size={"14px"} color={"#7A8B9A"}><strong style={{
            color: "#000D21"
          }}>{(0, I18n.__)("Phone: ", "ohmylms")}</strong>{t.student_phone}</Controls.TextWP>}</Controls.FlexWP></React.Fragment>;
  };
}
