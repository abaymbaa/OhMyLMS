/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
import { removeQuestionFromQuiz } from './api.mjs';
import { FormWorkspace } from '../quizzes/FormWorkspace';
export function createQuestionCanvas(readRuntime) {
  return function QuestionCanvas(props) {
    const {
      Au,
      Eu,
      I: Controls,
      Ie,
      Iu,
      L: Entitlements,
      Lc,
      Pu,
      React,
      Ru,
      T: StoreModule,
      Tu,
      b: I18n,
      du,
      fc,
      g: ReactHooks,
      ju,
      lu,
      nu,
      ou,
      tu,
      wu,
      y: WordPressData,
    } = readRuntime();
    const previewOptions = (0, WordPressData.useSelect)(
      (select) => select(StoreModule.default).getQuestionContents(),
      [],
    );
    var t,
      n,
      r,
      a,
      chapterId = props.chapterId,
      i = true,
      question = (function () {
        var e = (0, WordPressData.useSelect)(function (e) {
            return e(StoreModule.default).getQuizTypes();
          }, []),
          t = (0, WordPressData.useSelect)(function (e) {
            return e(StoreModule.default).getInteractiveQuizTypes();
          }, []),
          n = [].concat(nu(e), nu(t)),
          r = (0, WordPressData.useSelect)(function (e) {
            return e(StoreModule.default).selectQuestion();
          }, []);
        if (!r)
          return {
            edit: tu,
            showDefault: !0,
          };
        var a = r.settings;
        if (null == a || !a.type)
          return {
            edit: tu,
            showDefault: !0,
          };
        var o = n.find(function (e) {
          return (null == e ? void 0 : e.type) === (null == a ? void 0 : a.type);
        });
        return o
          ? {
              edit: o.edit,
              showDefault: !1,
            }
          : {
              edit: tu,
              showDefault: !0,
            };
      })(),
      edit = question.edit,
      showDefault = question.showDefault,
      s = (0, WordPressData.useDispatch)(StoreModule.default),
      quizId = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getSelectedQuizId();
      }, []),
      m =
        ((0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).getQuiz();
        }, []),
        (0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).selectSelectedQuestionId();
        }, []),
        (0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).selectQuestion();
        }, [])),
      p =
        ((0, WordPressData.useSelect)(
          function (e) {
            return e(StoreModule.default).getCourseChaptersContent();
          },
          [chapterId],
        ),
        (0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).getAllQuestions();
        }, [])),
      Router = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getQuestionErrors();
      }, []),
      v = (function (e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null != n) {
              var r,
                a,
                o,
                i,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
              } catch (e) {
                ((u = !0), (a = e));
              } finally {
                try {
                  if (!c && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return Iu(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Iu(e, t)
                    : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      })((0, ReactHooks.useState)(!1), 2),
      h = v[0],
      _ = v[1],
      w =
        (Lc().isValidQuestion,
        (0, WordPressData.useSelect)(function (e) {
          var t, n, r, a, o, i, l, c;
          return {
            question:
              null === (t = e(StoreModule.default).selectQuestion()) || void 0 === t
                ? void 0
                : t.name,
            videoSrc:
              null === (n = e(StoreModule.default).selectQuestion()) || void 0 === n
                ? void 0
                : n.video_src,
            imgSrc:
              null === (r = e(StoreModule.default).selectQuestion()) || void 0 === r
                ? void 0
                : r.image_src,
            options:
              null === (a = e(StoreModule.default).selectQuestion()) || void 0 === a
                ? void 0
                : a.options,
            correctAnswerId:
              null === (o = e(StoreModule.default).selectQuestion()) || void 0 === o
                ? void 0
                : o.correctAnswerId,
            id:
              null === (i = e(StoreModule.default).selectQuestion()) || void 0 === i
                ? void 0
                : i.id,
            quizType:
              null === (l = e(StoreModule.default).selectQuestion()) ||
              void 0 === l ||
              null === (l = l.settings) ||
              void 0 === l
                ? void 0
                : l.type,
            description:
              null === (c = e(StoreModule.default).selectQuestion()) || void 0 === c
                ? void 0
                : c.description,
          };
        }, [])),
      E = w.question,
      videoSrc = w.videoSrc,
      imgSrc = w.imgSrc,
      x = (w.options, w.correctAnswerId, w.id),
      quizType = w.quizType,
      description = w.description,
      O = fc(quizType),
      k =
        ((t = quizType),
        (n = (0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).getQuizTypes();
        }, [])),
        (r = (0, WordPressData.useSelect)(function (e) {
          return e(StoreModule.default).getInteractiveQuizTypes();
        }, [])),
        (a = [].concat(Eu(n), Eu(r))),
        t
          ? a.find(function (e) {
              return e.type === t;
            })
          : null),
      j = (function (e) {
        var t = (0, WordPressData.useSelect)(function (e) {
            return e(StoreModule.default).getQuizTypes();
          }, []),
          n = (0, WordPressData.useSelect)(function (e) {
            return e(StoreModule.default).getInteractiveQuizTypes();
          }, []),
          r = [].concat(Ru(t), Ru(n));
        if (!e) return null;
        var a = r.find(function (t) {
          return t.type === e;
        });
        return (null == a ? void 0 : a.otherContent) || null;
      })(quizType),
      A = ['statement', 'fill-in-the-blank'],
      M = (function () {
        var e = Tu(
          Pu().m(function e() {
            var t;
            return Pu().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    if (quizId) {
                      e.n = 1;
                      break;
                    }
                    return e.a(2);
                  case 1: {
                    e.n = 2;
                    break;
                  }
                  case 2:
                    (((t = ju({}, m)).order_number = p.length + 1),
                      (t.id = new Date().getTime()),
                      (t.temp = !0),
                      s.setQuestion(t),
                      s.setQuestions(t),
                      s.setSelectedQuestionId(t.id));
                  case 3:
                    return e.a(2);
                }
            }, e);
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      F = async function () {
        // Deleting from the quiz editor removes the question from this quiz only;
        // the question and its learner history stay in the question bank.
        if (null != m && !m.temp) {
          if (!quizId) {
            await s.deleteQuestion(m.id);
            _(!1);
            return;
          }
          try {
            await removeQuestionFromQuiz(quizId, m.id);
          } catch (cause) {
            s.showNotification?.(
              (cause && cause.message) || (0, I18n.__)('Could not remove the question.', 'ohmylms'),
              'error',
            );
            _(!1);
            return;
          }
        }
        s.deleteTempQuestion(null == m ? void 0 : m.id);
        _(!1);
      };
    const answerControls = (
      <React.Fragment>
        <h3>{(0, I18n.__)('Answers', 'ohmylms')}</h3>
        {!showDefault && React.createElement(edit, null)}
        {j && React.createElement(j, null)}
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <FormWorkspace
          key={String(m?.id) + ':' + quizType}
          document={{
            id: m?.id,
            name: E === 'Untitled' ? '' : E,
            description: description || '',
          }}
          label={(0, I18n.__)('Question', 'ohmylms')}
          titleLabel={(0, I18n.__)('Question title', 'ohmylms')}
          titlePlaceholder={(0, I18n.__)('Type your question here ...', 'ohmylms')}
          workspaceLabel={(0, I18n.__)('Question form editor', 'ohmylms')}
          compact={props.formCard}
          readOnly={!!m?.readonly}
          onTitleChange={(name) => !m?.readonly && s.updateQuestionData(x, { name })}
          onContentChange={(description) =>
            !m?.readonly && s.updateQuestionData(x, { description })
          }
          questionType={quizType}
          previewQuestion={{ ...m, questions: previewOptions || [] }}
          toolbarActions={props.toolbarActions}
          settings={props.settings}
          outline={props.outline}
          beforeContent={
            <React.Fragment>
              {!props.formCard && (
                <Controls.FlexWP align="center" justify="space-between">
                  {React.createElement(lu, {
                    icon: O,
                    label: k?.name,
                    iconColor: 'var(--ohmylms-primary-color)',
                  })}
                  {!m?.readonly &&
                    React.createElement(du, { handleCopy: M, handleDelete: () => _(!0) })}
                </Controls.FlexWP>
              )}
              {Router?.name && (
                <p role="alert">{(0, I18n.__)('Give this question a title.', 'ohmylms')}</p>
              )}
              {imgSrc && (
                <img
                  className="ohmylms-question-legacy-media"
                  src={imgSrc}
                  alt={(0, I18n.__)('Question image', 'ohmylms')}
                />
              )}
              {videoSrc && (
                <video className="ohmylms-question-legacy-media" src={videoSrc} controls />
              )}
            </React.Fragment>
          }
          questionBlockContent={answerControls}
        />
        {h && (
          <Ie
            title={(0, I18n.__)('Delete Question', 'ohmylms')}
            description={(0, I18n.__)('Are you sure you want to delete this question?', 'ohmylms')}
            onClose={() => _(!1)}
            onDelete={F}
            isOpen={h}
            wrapClassName="ohmylms-delete-question-modal"
            isDelete={!0}
          />
        )}
      </React.Fragment>
    );
  };
}
