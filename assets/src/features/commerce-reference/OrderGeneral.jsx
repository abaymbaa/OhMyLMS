/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createOrderGeneral(readRuntime) {
  return function OrderGeneral(props) {
    const {
      I: Controls,
      React,
      T: StoreModule,
      b: I18n,
      y: WordPressData
    } = readRuntime();
    var t = props.student_name,
      n = props.student_email,
      r = props.student_id;
    return (0, WordPressData.useDispatch)(StoreModule.default), (0, WordPressData.useDispatch)(StoreModule.default).updateOrderState, <React.Fragment><Controls.HeadingWP level={4} size={18} weight={500} color={"#000D25"}>{(0, I18n.__)("General", "ohmylms")}</Controls.HeadingWP><div layout={"horizontal"}><Controls.SpacerWP marginBottom={4} /><Controls.FlexWP gap={3} align={"center"} justify={"flex-start"}><Controls.TextWP as={"p"} size={14} weight={500} color={"#000D21"} style={{
            width: "100px"
          }}>{(0, I18n.__)("Student: ", "ohmylms")}</Controls.TextWP><Controls.FlexWP align={"center"} justify={"flex-start"} gap={2} style={{
            width: "calc(100% - 112px)"
          }}><Controls.FlexItemWP style={{
              width: "calc(100% - 53px)"
            }}><Controls.TextWP as={"p"} size={14} weight={500} color={"#000D21"}>{t && r && n ? "".concat(t, " (#").concat(r, " – ").concat(n, ")") : (0, I18n.__)("No student assigned", "ohmylms")}</Controls.TextWP></Controls.FlexItemWP></Controls.FlexWP></Controls.FlexWP></div></React.Fragment>;
  };
}
