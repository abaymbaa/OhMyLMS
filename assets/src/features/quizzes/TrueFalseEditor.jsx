/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import {createElement} from "@wordpress/element";
export function createTrueFalseEditor(readRuntime) {
  return function TrueFalseEditor() {
    const {
      I: Controls,
      React,
      T: StoreModule,
      V,
      Xs,
      b: I18n,
      y: WordPressData
    } = readRuntime();
    var questionId = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectSelectedQuestionId();
      }, []),
      options = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getQuestionContents();
      }, [questionId]),
      hasValidationErrors = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectQuizzesError();
      }, []),
      r = (0, WordPressData.useDispatch)(StoreModule.default),
      addContentToQuestion = r.addContentToQuestion;
    return r.updateQuestion, <React.Fragment><div className={"omlms-options-list omlms-options-list-true-false"}>{options.map(function (r, o) {
          var i, l;
          return <div className={"omlms-option-item-wrapper omlms-quiz-option-item omlms-quiz-option-item-".concat(o)} key={(null == r ? void 0 : r.id) || o}><Controls.CardWP isBorderless={!0} className={"omlms-option-item ".concat(1 == (null == r ? void 0 : r.is_correct) ? "omlms-option-item--correct" : "")}><Controls.FlexWP><V.A title={(0, I18n.__)("Mark as correct answer", "ohmylms")}><Controls.RadioWP onChange={function () {
                    return n = null == r ? void 0 : r.id, void addContentToQuestion(questionId, options.map(function (e) {
                      return Xs(Xs({}, e), {}, {
                        is_correct: e.id === n
                      });
                    }));
                    var n;
                  }} selected={1 == (null == r ? void 0 : r.is_correct) ? null == r ? void 0 : r.answer : null} options={[{
                    level: "",
                    value: null == r ? void 0 : r.answer
                  }]} /></V.A><Controls.FlexItemWP isBlock={!0}><Controls.InputWP placeholder={(0, I18n.__)("Option", "ohmylms")} value={null == r ? void 0 : r.answer} readOnly={!0} style={{
                    width: "100%"
                  }} /></Controls.FlexItemWP></Controls.FlexWP></Controls.CardWP>{!hasValidationErrors || null != r && null !== (i = r.answer) && void 0 !== i && i.trim() ? <React.Fragment /> : <div className={"omlms-option-correct"} style={{
              color: "red",
              marginTop: 4
            }}>{(0, I18n.__)("Field cannot be empty", "ohmylms")}</div>}{1 == r.is_correct && Boolean(null == r || null === (l = r.answer) || void 0 === l ? void 0 : l.trim()) && <span className={"omlms-option-correct"}>{(0, I18n.__)("This answer is correct", "ohmylms")}</span>}</div>;
        })}{hasValidationErrors && !options.some(function (e) {
          return 1 == e.is_correct;
        }) && <p className={"omlms-option-error-msg"}>{(0, I18n.__)("Please select at least one correct answer", "ohmylms")}</p>}</div></React.Fragment>;
  };
}
