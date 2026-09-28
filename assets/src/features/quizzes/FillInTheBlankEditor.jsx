/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createFillInTheBlankEditor(readRuntime) {
  return function FillInTheBlankEditor() {
    const {
      Fd,
      I: Controls,
      L: Entitlements,
      React,
      T: StoreModule,
      b: I18n,
      y: WordPressData,
    } = readRuntime();
    var e,
      t,
      n = (0, Entitlements.useIsPro)(),
      questionId = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectSelectedQuestionId();
      }, []),
      a =
        (0, WordPressData.useSelect)(
          function (e) {
            return e(StoreModule.default).getQuestionContents();
          },
          [questionId],
        ) || [],
      hasValidationErrors = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectQuizzesError();
      }, []),
      i = (0, WordPressData.useDispatch)(StoreModule.default),
      addContentToQuestion = i.addContentToQuestion,
      setIsProModalOpen = i.setIsProModalOpen;
    return (
      <React.Fragment>
        <div className={'omlms-options-list omlms-options-list-statement'}>
          <Controls.InputWP
            placeholder={(0, I18n.__)(
              'Enter answer(s) here, separated by commas (e.g., Dhaka, teacher, football)',
              'ohmylms',
            )}
            value={null === (e = a[0]) || void 0 === e ? void 0 : e.answer}
            onChange={function (e) {
              var t;
              return (function (e, t) {
                e &&
                  (n
                    ? addContentToQuestion(
                        questionId,
                        a.map(function (n) {
                          return (null == n ? void 0 : n.id) === e
                            ? Fd(
                                Fd({}, n),
                                {},
                                {
                                  answer: t,
                                },
                              )
                            : n;
                        }),
                      )
                    : setIsProModalOpen(!0));
              })(null === (t = a[0]) || void 0 === t ? void 0 : t.id, e);
            }}
          />
          {!hasValidationErrors ||
          (null !== (t = a[0]) &&
            void 0 !== t &&
            null !== (t = t.answer) &&
            void 0 !== t &&
            t.trim()) ? (
            <React.Fragment />
          ) : (
            <div
              className={'omlms-option-correct'}
              style={{
                color: 'red',
                marginTop: 4,
              }}
            >
              {(0, I18n.__)('Field cannot be empty', 'ohmylms')}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  };
}
