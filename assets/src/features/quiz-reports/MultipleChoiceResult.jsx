/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createMultipleChoiceResult(readRuntime) {
  return function MultipleChoiceResult(props) {
    const {
      I: Controls,
      React,
      b: I18n,
      p$: QuizQuestionHeader
    } = readRuntime();
    var t,
      n,
      data = props.data,
      index = props.index,
      o = function (e) {
        var t,
          n = e.given_answer,
          r = e.questions;
        if (!n || !Array.isArray(n)) return "in-review";
        var a = r.filter(function (e) {
            return 1 == (null == e ? void 0 : e.is_correct);
          }).map(function (e) {
            return null == e ? void 0 : e.id;
          }),
          o = null == n ? void 0 : n.every(function (e) {
            return null == a ? void 0 : a.includes(e);
          });
        return "single-choice" === (null == e || null === (t = e.settings) || void 0 === t ? void 0 : t.type) ? o && 1 == (null == n ? void 0 : n.length) && null != a && a.includes(n[0]) ? "correct" : "incorrect" : "multiple-choice" === e.settings.type ? o && (null == n ? void 0 : n.length) === (null == a ? void 0 : a.length) ? "correct" : "incorrect" : "in-review";
      }(data);
    return <React.Fragment><div className={"omlms-question-types omlms-multiple-choice-question omlms-".concat(o)}><QuizQuestionHeader data={data} index={index} /><div><Controls.TextWP as={"p"} size={14} variant={"muted"}>{(0, I18n.__)("Select multiple", "ohmylms")}</Controls.TextWP><Controls.SpacerWP marginBottom={2} /><Controls.CardWP isBorderless={!0} variant={"secondary"} style={{
            padding: "16px"
          }}><Controls.FlexWP direction={"column"} gap={3}>{null == data || null === (t = data.questions) || void 0 === t ? void 0 : t.map(function (e, t) {
                var n, a, o, i;
                return <Controls.CheckboxWP key={t} value={null == e ? void 0 : e.id} disabled={!0} checked={(null == data || null === (n = data.given_answer) || void 0 === n ? void 0 : n.includes(Number(null == e ? void 0 : e.id))) || (null == data || null === (a = data.given_answer) || void 0 === a ? void 0 : a.includes(null == e ? void 0 : e.id))} className={"\n                                                ".concat(null != data && null !== (o = data.given_answer) && void 0 !== o && o.includes(Number(null == e ? void 0 : e.id)) || null != data && null !== (i = data.given_answer) && void 0 !== i && i.includes(null == e ? void 0 : e.id) ? "omlms-selected" : "", "\n                                                    ").concat(1 == (null == e ? void 0 : e.is_correct) ? "omlms-correct" : "", "\n                                            ")} label={null == e ? void 0 : e.answer} />;
              })}</Controls.FlexWP></Controls.CardWP><Controls.SpacerWP /><Controls.CardWP style={{
            padding: "16px"
          }}><Controls.HeadingWP level={4} size={"14"} weight={"400"}>{(0, I18n.__)("Answer of this question:")}<br /><strong>{(null == data || null === (n = data.questions) || void 0 === n || null === (n = n.filter(function (e) {
                  return "1" === (null == e ? void 0 : e.is_correct);
                })) || void 0 === n || null === (n = n.map(function (e) {
                  return e.answer;
                })) || void 0 === n ? void 0 : n.join(", ")) || (0, I18n.__)("No correct answer")}</strong></Controls.HeadingWP></Controls.CardWP></div></div></React.Fragment>;
  };
}
