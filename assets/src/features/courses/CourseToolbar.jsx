/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCourseToolbar(readRuntime) {
  return function CourseToolbar(props) {
    const {
      He,
      I: Controls,
      IW,
      JW,
      L: Entitlements,
      Nr,
      React,
      Sc,
      T: StoreModule,
      UW,
      Ze,
      b: I18n,
      f: Router,
      g: ReactHooks,
      q,
      rz,
      tz,
      y: WordPressData,
    } = readRuntime();
    var t = (0, Entitlements.useIsPro)(),
      activeStep = props.activeStep,
      r = (props.setActiveStep, props.courseDescription),
      setLocalCourse = props.setLocalCourse,
      loading = props.loading,
      handleAutomation = props.handleAutomation,
      handleIntegration = props.handleIntegration,
      courseId = props.courseId,
      courseName = props.courseName,
      onSave = props.onSave,
      d = (0, Router.Zp)(),
      subStep = (0, Router.g)().subStep,
      p = (0, WordPressData.useDispatch)(StoreModule.default),
      v = Ze(),
      _ = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourse();
      }, []),
      w = rz((0, ReactHooks.useState)(!1), 2),
      E = w[0],
      S = w[1],
      R = rz((0, ReactHooks.useState)(!1), 2),
      x = R[0],
      C = R[1],
      P = rz((0, ReactHooks.useState)(!1), 2),
      O = P[0],
      k = P[1],
      j = JW(),
      steps = j.steps,
      totalSteps = j.totalSteps,
      F = function (e) {
        var t = '/course-edit/'.concat(courseId, '/').concat(e);
        if ('settings' === e) {
          var r = 'settings' === activeStep && subStep ? subStep : 'basics';
          d(''.concat(t, '/').concat(r));
        } else d('funnel' === e ? ''.concat(t) : t);
      },
      N = function () {
        var e = steps.findIndex(function (e) {
            return activeStep === e.id;
          }),
          t = steps[e + 1],
          r = null == t ? void 0 : t.id;
        F(r);
      },
      Buttons = function () {
        var e = steps.findIndex(function (e) {
            return activeStep === e.id;
          }),
          t = steps[e - 1],
          r = null == t ? void 0 : t.id;
        F(r);
      },
      RichText = [
        {
          title:
            'future' === (null == _ ? void 0 : _.status)
              ? (0, I18n.__)('Scheduled', 'ohmylms')
              : (0, I18n.__)('Schedule', 'ohmylms'),
          key: '1',
          onClick: function () {
            C(!0);
          },
        },
      ],
      Notifications = async function (e, t) {
        if (await onSave(e, t)) {
          if ('preview' === activeStep) k(true);
        }
      };
    return (
      <React.Fragment>
        <Controls.CardWP
          padding={'10px 10px 10px 20px'}
          className={'omlms-top-navigation '
            .concat(v ? ' ai-course' : '', ' creatorlms-active-step-')
            .concat(activeStep)}
        >
          <Controls.FlexWP
            align={'center'}
            justify={'space-between'}
            className={'omlms-top-navigation-inner omlms-steps-'.concat(totalSteps)}
          >
            <Controls.FlexItemWP flex={1} className={'omlms-back-button-wrapper'}>
              <Controls.TooltipWP title={(0, I18n.__)('Exit the builder', 'ohmylms')}>
                <Nr
                  onClick={function () {
                    d('/courses');
                  }}
                />
              </Controls.TooltipWP>
            </Controls.FlexItemWP>
            <Controls.FlexItemWP flex={2} className={'omlms-course-single-steps-item'}>
              <Controls.FlexWP
                align={'center'}
                justify={'center'}
                gap={10}
                className={'omlms-course-single-steps-container'}
              >
                {steps.map(function (e, t) {
                  return (
                    <div
                      key={e.id}
                      className={'omlms-course-single-steps-wrapper '
                        .concat(activeStep === e.id ? 'active' : '', ' ')
                        .concat(
                          steps.findIndex(function (e) {
                            return e.id === activeStep;
                          }) > t
                            ? 'completed'
                            : '',
                          ' ',
                        )
                        .concat(O ? 'completed' : '')}
                    >
                      <Controls.ButtonWP
                        variant={'default'}
                        onClick={function () {
                          return (
                            (t = e.id),
                            void (
                              v ||
                              ((null == _ ? void 0 : _.description) !== r &&
                                (p.setCourse(
                                  tz(
                                    tz({}, _),
                                    {},
                                    {
                                      description: r,
                                    },
                                  ),
                                ),
                                setLocalCourse(r)),
                              F(t))
                            )
                          );
                          var t;
                        }}
                        disabled={v || loading}
                        className={'omlms-course-single-steps '
                          .concat(activeStep === e.id ? 'active' : '', ' ')
                          .concat(
                            steps.findIndex(function (e) {
                              return e.id === activeStep;
                            }) > t
                              ? 'completed'
                              : '',
                            ' ',
                          )
                          .concat(O ? 'completed' : '')}
                      >
                        <div className={'omlms-course-single-steps-indicator'}>
                          {steps.findIndex(function (e) {
                            return e.id === activeStep;
                          }) > t || O ? (
                            <q.Icon icon={IW.A} />
                          ) : (
                            t + 1
                          )}
                        </div>
                        {e.title}
                      </Controls.ButtonWP>
                    </div>
                  );
                })}
              </Controls.FlexWP>
            </Controls.FlexItemWP>
            <Controls.FlexItemWP flex={1} className={'omlms-course-actions-wrapper'}>
              <Controls.FlexWP align={'center'} justify={'flex-end'} gap={1}>
                {'content' === activeStep && (
                  <React.Fragment>
                    <Controls.ButtonWP variant={'primary'} onClick={N}>
                      {(0, I18n.__)('Next', 'ohmylms')}
                    </Controls.ButtonWP>
                  </React.Fragment>
                )}
                {'settings' === activeStep && (
                  <Controls.FlexWP justify={'flex-end'} align={'stretch'} gap={5}>
                    <Controls.ButtonWP variant={'secondary'} onClick={Buttons}>
                      {(0, I18n.__)('Previous', 'ohmylms')}
                    </Controls.ButtonWP>
                    <Controls.ButtonWP variant={'primary'} onClick={N}>
                      {(0, I18n.__)('Next', 'ohmylms')}
                    </Controls.ButtonWP>
                  </Controls.FlexWP>
                )}
                {'community' === activeStep && (
                  <Controls.FlexWP justify={'flex-end'} align={'stretch'} gap={5}>
                    <Controls.ButtonWP variant={'secondary'} onClick={Buttons}>
                      {(0, I18n.__)('Previous', 'ohmylms')}
                    </Controls.ButtonWP>
                    <Controls.ButtonWP variant={'primary'} onClick={N}>
                      {(0, I18n.__)('Next', 'ohmylms')}
                    </Controls.ButtonWP>
                  </Controls.FlexWP>
                )}
                {'funnel' === activeStep && (
                  <Controls.FlexWP justify={'flex-end'} align={'stretch'} gap={5}>
                    <Controls.ButtonWP variant={'secondary'} onClick={Buttons}>
                      {(0, I18n.__)('Previous', 'ohmylms')}
                    </Controls.ButtonWP>
                    <Controls.ButtonWP variant={'primary'} onClick={N}>
                      {(0, I18n.__)('Next', 'ohmylms')}
                    </Controls.ButtonWP>
                  </Controls.FlexWP>
                )}
                {'preview' === activeStep && (
                  <React.Fragment>
                    <Controls.FlexWP justify={'flex-end'} align={'stretch'} gap={5}>
                      <Controls.ButtonWP variant={'secondary'} onClick={Buttons}>
                        {(0, I18n.__)('Previous', 'ohmylms')}
                      </Controls.ButtonWP>
                      <Controls.DropdownButtonWP
                        menuItems={RichText}
                        buttonLabel={(0, I18n.__)(
                          ''.concat(
                            'draft' === (null == _ ? void 0 : _.status) ||
                              'future' === (null == _ ? void 0 : _.status)
                              ? 'Publish'
                              : 'Update',
                          ),
                          'ohmylms',
                        )}
                        onClick={function () {
                          return Notifications('publish');
                        }}
                        loading={loading}
                      />
                    </Controls.FlexWP>
                  </React.Fragment>
                )}
                <Controls.DropdownMenuWP
                  className={'omlms-more-options-dropdown'}
                  contentClassName={'omlms-more-options-dropdown-content'}
                  icon={<q.Icon icon={Sc.A} />}
                  controls={[
                    {
                      title: (0, I18n.__)('Integrations', 'ohmylms'),
                      onClick: function () {
                        v ||
                          (t
                            ? handleIntegration && handleIntegration('course', courseId, courseName)
                            : S(!0));
                      },
                    },
                    {
                      title: (0, I18n.__)('Course Automation', 'ohmylms'),
                      onClick: function () {
                        var e;
                        if (!v) {
                          if (t)
                            return null !== (e = window) &&
                              void 0 !== e &&
                              null !== (e = e.creator_lms_params) &&
                              void 0 !== e &&
                              e.is_mailmint_active
                              ? void handleAutomation('course', courseId, courseName)
                              : (S(!0),
                                p.updateProModalTitle(
                                  (0, I18n.__)('Missing Mail Mint Plugin!', 'ohmylms'),
                                ),
                                p.updateProModalContent(
                                  (0, I18n.__)(
                                    'Mail Mint is required to enable automation. Please install and activate the plugin.',
                                    'ohmylms',
                                  ),
                                ),
                                p.updateProModalButtonText(
                                  (0, I18n.__)('Install and Activate', 'ohmylms'),
                                ),
                                void p.updateProModalButtonAction('activate-mail-mint'));
                          S(!0);
                        }
                      },
                    },
                    {
                      title: (0, I18n.__)('Save as Draft', 'ohmylms'),
                      onClick: function () {
                        Notifications('draft');
                      },
                    },
                  ]}
                />
              </Controls.FlexWP>
            </Controls.FlexItemWP>
          </Controls.FlexWP>
        </Controls.CardWP>
        {E && (
          <React.Fragment>
            <He.default isOpen={E} onClose={S} />
          </React.Fragment>
        )}
        {x && (
          <React.Fragment>
            <UW
              isOpen={x}
              onClose={function () {
                return C(!1);
              }}
              onSave={Notifications}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };
}
