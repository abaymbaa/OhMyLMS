/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createPermalinkSettings(readRuntime) {
  return function PermalinkSettings(props) {
    const {
      I: Controls,
      Pf,
      React,
      SK: MemoSettingsActionBar,
      T: StoreModule,
      aJ,
      b: I18n,
      eJ,
      g: ReactHooks,
      l,
      nJ,
      oJ,
      y: WordPressData,
    } = readRuntime();
    var t,
      n,
      r,
      a,
      o,
      i,
      c,
      u,
      s = props.activeTab,
      d = props.handleSave,
      m = props.handleMigration,
      p = props.selectedCourses,
      f = props.isSaving,
      v = (0, WordPressData.useDispatch)(StoreModule.default),
      h = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getPermalinkSettings();
      }, []),
      _ = function (e, t) {
        var n;
        v.updatePermalinkSettings({
          ohmylms_permalink: {
            value: aJ(
              aJ(
                {},
                null == h || null === (n = h.ohmylms_permalink) || void 0 === n ? void 0 : n.value,
              ),
              {},
              oJ({}, t, e),
            ),
          },
        });
      },
      w = function (e) {
        return String(e)
          .toLowerCase()
          .trim()
          .replace(/[\s_]+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-');
      };
    return (
      (0, ReactHooks.useEffect)(function () {
        var e = (function () {
          var e,
            t =
              ((e = eJ().m(function e() {
                var t;
                return eJ().w(function (e) {
                  for (;;)
                    switch (e.n) {
                      case 0:
                        return (
                          v.setLoadingSetting(!0),
                          (e.n = 1),
                          l()({
                            path: 'ohmylms/v1/settings/permalink',
                          })
                        );
                      case 1:
                        ((t = e.v), v.setPermalinkSettings(t), v.setLoadingSetting(!1));
                      case 2:
                        return e.a(2);
                    }
                }, e);
              })),
              function () {
                var t = this,
                  n = arguments;
                return new Promise(function (r, a) {
                  var o = e.apply(t, n);
                  function i(e) {
                    nJ(o, r, a, i, l, 'next', e);
                  }
                  function l(e) {
                    nJ(o, r, a, i, l, 'throw', e);
                  }
                  i(void 0);
                });
              });
          return function () {
            return t.apply(this, arguments);
          };
        })();
        e();
      }, []),
      (
        <React.Fragment>
          <Controls.CardWP
            isBorderless={!0}
            variant={'secondary'}
            className={'ohmylms-full-screen-height'}
          >
            <Controls.SpacerWP padding={4} marginTop={0} marginBottom={0}>
              <Controls.CardWP isBorderless={!0}>
                <Controls.SpacerWP paddingY={4} paddingX={2} marginTop={0} marginBottom={4}>
                  <Pf
                    title={(0, I18n.__)('Course Base', 'ohmylms')}
                    description={'https://yoursite.com/<code style="background: #27BDFE4D; font-style: italic;">{'.concat(
                      null == h ||
                        null === (t = h.ohmylms_permalink) ||
                        void 0 === t ||
                        null === (t = t.value) ||
                        void 0 === t
                        ? void 0
                        : t.course_base,
                      '}</code>/sample-course',
                    )}
                    inputType={'text'}
                    value={
                      (null == h ||
                      null === (n = h.ohmylms_permalink) ||
                      void 0 === n ||
                      null === (n = n.value) ||
                      void 0 === n
                        ? void 0
                        : n.course_base) || ''
                    }
                    onChange={function (e) {
                      return _(w(e), 'course_base');
                    }}
                    isDescriptionHTML={!0}
                  />
                  <Controls.SpacerWP paddingX={4} paddingTop={2} paddingBottom={4} marginBottom={0}>
                    <Controls.DividerWP color={'#EDF2FB'} />
                  </Controls.SpacerWP>
                  <Pf
                    title={(0, I18n.__)('Category Base', 'ohmylms')}
                    description={'https://yoursite.com/courses/<code style="background: #27BDFE4D; font-style: italic;">{'.concat(
                      null == h ||
                        null === (r = h.ohmylms_permalink) ||
                        void 0 === r ||
                        null === (r = r.value) ||
                        void 0 === r
                        ? void 0
                        : r.category_base,
                      '}</code>/sample-category/',
                    )}
                    inputType={'text'}
                    value={
                      (null == h ||
                      null === (a = h.ohmylms_permalink) ||
                      void 0 === a ||
                      null === (a = a.value) ||
                      void 0 === a
                        ? void 0
                        : a.category_base) || ''
                    }
                    onChange={function (e) {
                      return _(w(e), 'category_base');
                    }}
                    isDescriptionHTML={!0}
                  />
                  <Controls.SpacerWP paddingX={4} paddingTop={2} paddingBottom={4} marginBottom={0}>
                    <Controls.DividerWP color={'#EDF2FB'} />
                  </Controls.SpacerWP>
                  <Pf
                    title={(0, I18n.__)('Lesson Base', 'ohmylms')}
                    description={'https://yoursite.com/courses/sample-course/<code style="background: #27BDFE4D; font-style: italic;">{'.concat(
                      null == h ||
                        null === (o = h.ohmylms_permalink) ||
                        void 0 === o ||
                        null === (o = o.value) ||
                        void 0 === o
                        ? void 0
                        : o.lesson_base,
                      '}</code>/sample-lesson/',
                    )}
                    inputType={'text'}
                    value={
                      (null == h ||
                      null === (i = h.ohmylms_permalink) ||
                      void 0 === i ||
                      null === (i = i.value) ||
                      void 0 === i
                        ? void 0
                        : i.lesson_base) || ''
                    }
                    onChange={function (e) {
                      return _(w(e), 'lesson_base');
                    }}
                    isDescriptionHTML={!0}
                  />
                  <Controls.SpacerWP paddingX={4} paddingTop={2} paddingBottom={4} marginBottom={0}>
                    <Controls.DividerWP color={'#EDF2FB'} />
                  </Controls.SpacerWP>
                  <Pf
                    title={(0, I18n.__)('Quiz Base', 'ohmylms')}
                    description={' https://yoursite.com/courses/sample-course/<code style="background: #27BDFE4D; font-style: italic;">{'.concat(
                      null == h ||
                        null === (c = h.ohmylms_permalink) ||
                        void 0 === c ||
                        null === (c = c.value) ||
                        void 0 === c
                        ? void 0
                        : c.quiz_base,
                      '}</code>/sample-quiz/',
                    )}
                    inputType={'text'}
                    value={
                      (null == h ||
                      null === (u = h.ohmylms_permalink) ||
                      void 0 === u ||
                      null === (u = u.value) ||
                      void 0 === u
                        ? void 0
                        : u.quiz_base) || ''
                    }
                    onChange={function (e) {
                      return _(w(e), 'quiz_base');
                    }}
                    isDescriptionHTML={!0}
                  />
                </Controls.SpacerWP>
              </Controls.CardWP>
              <MemoSettingsActionBar
                activeTab={s}
                handleSave={d}
                handleMigration={m}
                selectedCourses={p}
                isSaving={f}
              />
            </Controls.SpacerWP>
          </Controls.CardWP>
        </React.Fragment>
      )
    );
  };
}
