/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createBonusPointSettings(readRuntime) {
  return function BonusPointSettings() {
    const {
      A2,
      I: Controls,
      I2,
      L: Entitlements,
      M2,
      O2,
      React,
      T: StoreModule,
      T2,
      b: I18n,
      g: ReactHooks,
      l,
      lf,
      x2,
      y: WordPressData,
      z: Notifications,
    } = readRuntime();
    var e,
      t,
      n,
      r,
      a,
      o,
      i = (0, Entitlements.useIsPro)(),
      c = (0, WordPressData.useDispatch)(StoreModule.default),
      u = M2(
        (0, ReactHooks.useState)({
          enable: !1,
          rules: [
            {
              label: (0, I18n.__)('Course Completion', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Award points when a user completes an entire course.',
                'ohmylms',
              ),
              slug: 'course_completion_rate',
              value: !1,
              threshold: 100,
              point: 10,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
            {
              label: (0, I18n.__)('Lesson Completion', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Award points when a learner finishes a lesson successfully.',
                'ohmylms',
              ),
              slug: 'lesson_complete',
              value: !1,
              point: 5,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
            {
              label: (0, I18n.__)('Quiz Achievement', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Award points when a learner scores at or above the defined pass mark on a quiz.',
                'ohmylms',
              ),
              slug: 'quiz_passing_mark',
              value: !1,
              threshold: 30,
              point: 5,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
            {
              label: (0, I18n.__)('Assignment Achievement', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Award points when a learner meets the minimum passing score on an assignment.',
                'ohmylms',
              ),
              slug: 'assignment_passing_mark',
              value: !1,
              threshold: 30,
              point: 5,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
            {
              label: (0, I18n.__)('Quiz Submission', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Award points whenever a quiz is submitted, regardless of the score.',
                'ohmylms',
              ),
              slug: 'submit_quiz',
              value: !1,
              point: 5,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
            {
              label: (0, I18n.__)('Assignment Submission', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Award points when a learner submits an assignment for review.',
                'ohmylms',
              ),
              slug: 'submit_assignment',
              value: !1,
              point: 5,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
            {
              label: (0, I18n.__)('First Comment on a Course', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Award points when a learner comments on a course for the first time.',
                'ohmylms',
              ),
              slug: 'comment_on_course',
              value: !1,
              point: 2,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
            {
              label: (0, I18n.__)('User Registration', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Award points when a new user registers on the site.',
                'ohmylms',
              ),
              slug: 'user_registration',
              value: !1,
              point: 5,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
            {
              label: (0, I18n.__)('Course Enrollment', 'ohmylms'),
              tooltip: (0, I18n.__)('Award points when a user enrolls in a course.', 'ohmylms'),
              slug: 'course_enrollment',
              value: !1,
              point: 5,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
            {
              label: (0, I18n.__)('Purchase', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Award points when a user makes a purchase on the site.',
                'ohmylms',
              ),
              slug: 'purchase',
              value: !1,
              point: 10,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
            {
              label: (0, I18n.__)('Post on Community', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Award points when a user creates a new post in the community.',
                'ohmylms',
              ),
              slug: 'community_post_create',
              value: !1,
              point: 8,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
            {
              label: (0, I18n.__)('Comment on Community Post', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Award points when a user comments on a community post.',
                'ohmylms',
              ),
              slug: 'community_post_comment',
              value: !1,
              point: 3,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
            {
              label: (0, I18n.__)('Reaction on Community', 'ohmylms'),
              tooltip: (0, I18n.__)(
                'Award points when a user reacts to community content (likes, loves, etc.).',
                'ohmylms',
              ),
              slug: 'community_reaction',
              value: !1,
              point: 1,
              email: {
                enable: !1,
                subject: '',
                body: '',
              },
            },
          ],
        }),
        2,
      ),
      s = u[0],
      d = u[1],
      m = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      p = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      f = M2((0, ReactHooks.useState)(!1), 2),
      v = f[0],
      h = f[1],
      _ = M2((0, ReactHooks.useState)(!1), 2),
      w = _[0],
      E = _[1],
      S = M2((0, ReactHooks.useState)(null), 2),
      R = S[0],
      x = S[1],
      C = M2((0, ReactHooks.useState)(!1), 2),
      P = C[0],
      O = C[1],
      k = M2((0, ReactHooks.useState)(!1), 2),
      j = k[0],
      A = k[1],
      M = (0, Notifications.A)(),
      openNotificationWithIcon = M.openNotificationWithIcon,
      contextHolder = M.contextHolder,
      D = (0, ReactHooks.useRef)(null);
    (0, ReactHooks.useEffect)(function () {
      var e = (function () {
        var e = A2(
          x2().m(function e() {
            var t, n, r;
            return x2().w(function (e) {
              for (;;)
                switch (e.n) {
                  case 0:
                    return (
                      h(!0),
                      (e.n = 1),
                      l()({
                        path: 'creator-lms/v1/engagement/settings/point',
                      })
                    );
                  case 1:
                    ((t = e.v),
                      d(t || s),
                      h(!1),
                      t &&
                        ((n = W(t.rules || [], q)),
                        d(
                          O2(
                            O2({}, t),
                            {},
                            {
                              rules: n,
                            },
                          ),
                        ),
                        (r = n.find(function (e) {
                          return e.value;
                        })),
                        x(r)));
                  case 2:
                    return e.a(2);
                }
            }, e);
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
      i && e();
    }, []);
    var W = function (e, t) {
      var n = (function (e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return I2(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          T2(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      })(e);
      return (
        t.forEach(function (t) {
          e.some(function (e) {
            return e.slug === t.slug;
          }) || n.push(t);
        }),
        n
      );
    };
    ((0, ReactHooks.useEffect)(
      function () {
        !v && m && openNotificationWithIcon(p, m);
      },
      [m],
    ),
      (0, ReactHooks.useEffect)(
        function () {
          if (R) {
            var e = s.rules.findIndex(function (e) {
              return e.slug === R.slug;
            });
            d(
              O2(
                O2({}, s),
                {},
                {
                  rules: s.rules.map(function (t, n) {
                    return n === e ? R : t;
                  }),
                },
              ),
            );
          }
        },
        [R],
      ));
    var B = (function () {
        var e = A2(
          x2().m(function e() {
            var t;
            return x2().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (i) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      return (
                        c.setLoadingSetting(!0),
                        E(!0),
                        (e.p = 2),
                        (e.n = 3),
                        l()({
                          path: '/creator-lms/v1/engagement/settings/point',
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(s),
                        })
                      );
                    case 3:
                      return (
                        (t = e.v),
                        openNotificationWithIcon(
                          'success',
                          (0, I18n.__)('Settings saved successfully.', 'ohmylms'),
                        ),
                        e.a(2, t)
                      );
                    case 4:
                      ((e.p = 4),
                        e.v,
                        E(!1),
                        openNotificationWithIcon(
                          'error',
                          (0, I18n.__)('Something went wrong.', 'ohmylms'),
                        ));
                    case 5:
                      return ((e.p = 5), c.setLoadingSetting(!1), E(!1), e.f(5));
                    case 6:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[2, 4, 5, 6]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      V = (function () {
        var e = A2(
          x2().m(function e(t, n) {
            var r, a;
            return x2().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        d(function (e) {
                          var r = e.rules.map(function (e, r) {
                            return r === t
                              ? O2(
                                  O2({}, e),
                                  {},
                                  {
                                    value: n,
                                  },
                                )
                              : e;
                          });
                          return O2(
                            O2({}, e),
                            {},
                            {
                              rules: r,
                            },
                          );
                        }),
                        A(!1),
                        (r = O2(
                          O2({}, s),
                          {},
                          {
                            rules: s.rules.map(function (e, r) {
                              return r === t
                                ? O2(
                                    O2({}, e),
                                    {},
                                    {
                                      value: n,
                                    },
                                  )
                                : e;
                            }),
                          },
                        )),
                        (a = r.rules.filter(function (e) {
                          return null == e ? void 0 : e.value;
                        })),
                        n ? x(r.rules[t]) : a.length > 0 ? x(a[0]) : x(null),
                        (e.p = 1),
                        (e.n = 2),
                        l()({
                          path: '/creator-lms/v1/engagement/settings/point',
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(r),
                        })
                      );
                    case 2:
                      (openNotificationWithIcon(
                        'success',
                        (0, I18n.__)('Rule updated successfully.', 'ohmylms'),
                      ),
                        (e.n = 4));
                      break;
                    case 3:
                      ((e.p = 3),
                        e.v,
                        openNotificationWithIcon(
                          'error',
                          (0, I18n.__)('Failed to update rule.', 'ohmylms'),
                        ));
                    case 4:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 3]],
            );
          }),
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      H = function () {
        (x(null), O(!1));
      },
      G = (function () {
        var e = A2(
          x2().m(function e() {
            var t;
            return x2().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (R) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      return (
                        E(!0),
                        (e.p = 2),
                        (t = O2(
                          O2({}, s),
                          {},
                          {
                            rules: s.rules.map(function (e, t) {
                              return t === R.index ? R : e;
                            }),
                          },
                        )),
                        (e.n = 3),
                        l()({
                          path: '/creator-lms/v1/engagement/settings/point',
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(t),
                        })
                      );
                    case 3:
                      (d(t),
                        openNotificationWithIcon(
                          'success',
                          (0, I18n.__)('Settings saved successfully.', 'ohmylms'),
                        ),
                        H(),
                        (e.n = 5));
                      break;
                    case 4:
                      ((e.p = 4),
                        e.v,
                        openNotificationWithIcon(
                          'error',
                          (0, I18n.__)('Failed to save settings.', 'ohmylms'),
                        ));
                    case 5:
                      return ((e.p = 5), E(!1), e.f(5));
                    case 6:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[2, 4, 5, 6]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      U = function () {
        return s.rules.filter(function (e) {
          return null == e ? void 0 : e.value;
        });
      },
      q = [
        {
          label: (0, I18n.__)('Course Completion', 'ohmylms'),
          tooltip: (0, I18n.__)('Award points when a user completes an entire course.', 'ohmylms'),
          slug: 'course_completion_rate',
          value: !1,
          threshold: 100,
          point: 10,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
        {
          label: (0, I18n.__)('Lesson Completion', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Award points when a learner finishes a lesson successfully.',
            'ohmylms',
          ),
          slug: 'lesson_complete',
          value: !1,
          point: 5,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
        {
          label: (0, I18n.__)('Quiz Achievement', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Award points when a learner scores at or above the defined pass mark on a quiz.',
            'ohmylms',
          ),
          slug: 'quiz_passing_mark',
          value: !1,
          threshold: 30,
          point: 5,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
        {
          label: (0, I18n.__)('Assignment Achievement', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Award points when a learner meets the minimum passing score on an assignment.',
            'ohmylms',
          ),
          slug: 'assignment_passing_mark',
          value: !1,
          threshold: 30,
          point: 5,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
        {
          label: (0, I18n.__)('Quiz Submission', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Award points whenever a quiz is submitted, regardless of the score.',
            'ohmylms',
          ),
          slug: 'submit_quiz',
          value: !1,
          point: 5,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
        {
          label: (0, I18n.__)('Assignment Submission', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Award points when a learner submits an assignment for review.',
            'ohmylms',
          ),
          slug: 'submit_assignment',
          value: !1,
          point: 5,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
        {
          label: (0, I18n.__)('First Comment on a Course', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Award points when a learner comments on a course for the first time.',
            'ohmylms',
          ),
          slug: 'comment_on_course',
          value: !1,
          point: 2,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
        {
          label: (0, I18n.__)('User Registration', 'ohmylms'),
          tooltip: (0, I18n.__)('Award points when a new user registers on the site.', 'ohmylms'),
          slug: 'user_registration',
          value: !1,
          point: 5,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
        {
          label: (0, I18n.__)('Course Enrollment', 'ohmylms'),
          tooltip: (0, I18n.__)('Award points when a user enrolls in a course.', 'ohmylms'),
          slug: 'course_enrollment',
          value: !1,
          point: 5,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
        {
          label: (0, I18n.__)('Purchase', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Award points when a user makes a purchase on the site.',
            'ohmylms',
          ),
          slug: 'purchase',
          value: !1,
          point: 10,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
        {
          label: (0, I18n.__)('Post on Community', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Award points when a user creates a new post in the community.',
            'ohmylms',
          ),
          slug: 'community_post_create',
          value: !1,
          point: 8,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
        {
          label: (0, I18n.__)('Comment on Community Post', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Award points when a user comments on a community post.',
            'ohmylms',
          ),
          slug: 'community_post_comment',
          value: !1,
          point: 3,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
        {
          label: (0, I18n.__)('Reaction on Community', 'ohmylms'),
          tooltip: (0, I18n.__)(
            'Award points when a user reacts to community content (likes, loves, etc.).',
            'ohmylms',
          ),
          slug: 'community_reaction',
          value: !1,
          point: 1,
          email: {
            enable: !1,
            subject: '',
            body: '',
          },
        },
      ],
      Y = function (e) {
        x(function (t) {
          return O2(
            O2({}, t),
            {},
            {
              email: O2(
                O2({}, t.email),
                {},
                {
                  body: e,
                },
              ),
            },
          );
        });
      },
      Q = function (e) {
        if (!e) return !1;
        var t = null === e.point || '' === e.point || e.point < 0,
          n =
            void 0 !== e.threshold &&
            (null === e.threshold || '' === e.threshold || e.threshold < 0);
        return t || n;
      };
    return v ? (
      <React.Fragment>
        <Controls.CardWP isBorderless={!0}>
          <Controls.SpacerWP marginTop={2.5} padding={6}>
            <Controls.SkeletonWP active={!0} rows={15} />
          </Controls.SpacerWP>
        </Controls.CardWP>
      </React.Fragment>
    ) : (
      <React.Fragment>
        {contextHolder}
        <Controls.ProOverlayWP
          title={(0, I18n.__)(
            'The Bonus Point System is a Pro feature and will be available soon. Stay tuned to unlock advanced gamification tools that boost learner motivation and course completion rates.',
            'ohmylms',
          )}
        />
        <Controls.CardWP isBorderless={!0} variant={'secondary'}>
          <Controls.SpacerWP padding={0} marginTop={2.5} marginBottom={0}>
            <Controls.FlexWP
              justify={'flex-start'}
              align={'flex-start'}
              direction={'column'}
              gap={2}
            >
              {i && (
                <React.Fragment>
                  <Controls.CardWP isBorderless={!0} padding={'24px'} fullWidth={!0}>
                    <Controls.FlexWP justify={'space-between'} align={'center'}>
                      <Controls.FlexItemWP>
                        <Controls.HeadingWP level={'4'} color={'#000D25'} size={'18px'}>
                          {(0, I18n.__)('Add Bonus Point Rules', 'ohmylms')}
                        </Controls.HeadingWP>
                        <Controls.SpacerWP marginBottom={1} />
                        <Controls.TextWP
                          style={{
                            maxWidth: '500px',
                          }}
                          as={'p'}
                          color={'#687784'}
                          size={'14px'}
                        >
                          {(0, I18n.__)(
                            'Configure how and when learners earn points based on their actions within the course. Use this to boost motivation and track progress.',
                            'ohmylms',
                          )}
                        </Controls.TextWP>
                      </Controls.FlexItemWP>
                      <Controls.FlexItemWP>
                        {React.createElement(lf, {
                          ref: D,
                          label: (0, I18n.__)('Add Rules', 'ohmylms'),
                          onClick: function () {
                            return A(!j);
                          },
                        })}
                        {j && (
                          <Controls.PopoverWP
                            onClose={function () {
                              return A(!1);
                            }}
                            anchor={D.current}
                            onFocusOutside={function () {
                              return A(!1);
                            }}
                            placement={'bottom-end'}
                            style={{
                              marginTop: '8px',
                            }}
                          >
                            <div
                              style={{
                                padding: '16px',
                                width: '400px',
                                maxHeight: '60%',
                              }}
                            >
                              <Controls.FlexWP direction={'column'} gap={'3'}>
                                <div
                                  style={{
                                    padding: '12px',
                                    cursor: 'pointer',
                                    borderBottom: '1px solid #eee',
                                  }}
                                >
                                  <Controls.HeadingWP
                                    level={'4'}
                                    style={{
                                      fontWeight: 500,
                                    }}
                                  >
                                    {(0, I18n.__)('Select Rules to Enable')}
                                  </Controls.HeadingWP>
                                </div>
                                {s.rules
                                  .filter(function (e) {
                                    return !e.value;
                                  })
                                  .map(function (e, t) {
                                    var n = s.rules.findIndex(function (t) {
                                      return t.slug === e.slug;
                                    });
                                    return (
                                      <div
                                        key={e.slug}
                                        style={{
                                          padding: '12px',
                                          cursor: 'pointer',
                                          borderTop: ''.concat(0 === t ? 'none' : '1px solid #eee'),
                                        }}
                                        onClick={function () {
                                          Q(R)
                                            ? openNotificationWithIcon(
                                                'error',
                                                (0, I18n.__)(
                                                  'Please fix the errors in the current rule before adding a new one.',
                                                  'ohmylms',
                                                ),
                                              )
                                            : (V(n, !0), A(!1));
                                        }}
                                        onMouseEnter={function (e) {
                                          return (e.currentTarget.style.backgroundColor =
                                            '#f0f0f0');
                                        }}
                                        onMouseLeave={function (e) {
                                          return (e.currentTarget.style.backgroundColor =
                                            'transparent');
                                        }}
                                      >
                                        <Controls.TextWP
                                          style={{
                                            fontWeight: 500,
                                          }}
                                        >
                                          {e.label}
                                        </Controls.TextWP>
                                        <Controls.SpacerWP marginBottom={1} />
                                        <Controls.TextWP
                                          style={{
                                            fontSize: '12px',
                                            color: '#666',
                                          }}
                                        >
                                          {e.tooltip}
                                        </Controls.TextWP>
                                      </div>
                                    );
                                  })}
                                {0 ===
                                  s.rules.filter(function (e) {
                                    return !(null != e && e.value);
                                  }).length && (
                                  <div
                                    style={{
                                      padding: '12px',
                                      cursor: 'pointer',
                                    }}
                                    onMouseEnter={function (e) {
                                      return (e.currentTarget.style.backgroundColor = '#f0f0f0');
                                    }}
                                    onMouseLeave={function (e) {
                                      return (e.currentTarget.style.backgroundColor =
                                        'transparent');
                                    }}
                                  >
                                    <Controls.TextWP
                                      style={{
                                        fontWeight: 500,
                                      }}
                                    >
                                      {(0, I18n.__)('All rules are enabled')}
                                    </Controls.TextWP>
                                  </div>
                                )}
                              </Controls.FlexWP>
                            </div>
                          </Controls.PopoverWP>
                        )}
                      </Controls.FlexItemWP>
                    </Controls.FlexWP>
                  </Controls.CardWP>
                  <Controls.FlexWP
                    gap={5}
                    style={{
                      marginTop: '24px',
                    }}
                    align={'flex-start'}
                  >
                    <Controls.FlexItemWP
                      style={{
                        flex: '0 0 300px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          maxHeight: '400px',
                          overflowY: 'auto',
                          marginBottom: '16px',
                        }}
                      >
                        {U().length > 0 && (
                          <Controls.TextWP
                            style={{
                              fontWeight: '500',
                            }}
                          >
                            {(0, I18n.__)('Active Rules', 'ohmylms')}
                            {(0, I18n.__)('(' + U().length + ')', 'ohmylms')}
                          </Controls.TextWP>
                        )}
                        {U().map(function (e, t) {
                          var n = s.rules.findIndex(function (t) {
                            return t.slug === e.slug;
                          });
                          return (
                            <Controls.CardWP
                              key={e.slug}
                              isBorderless={!0}
                              padding={'12px'}
                              onClick={function () {
                                Q(R)
                                  ? openNotificationWithIcon(
                                      'error',
                                      (0, I18n.__)(
                                        'Please fix the errors in the current rule before switching.',
                                        'ohmylms',
                                      ),
                                    )
                                  : x(
                                      O2(
                                        O2({}, e),
                                        {},
                                        {
                                          index: n,
                                        },
                                      ),
                                    );
                              }}
                              style={{
                                cursor: 'pointer',
                                backgroundColor: '#fff',
                                border:
                                  (null == R ? void 0 : R.slug) === e.slug
                                    ? '1px solid #6e42d3'
                                    : '1px solid #e0e0e0',
                                borderRadius: '6px',
                              }}
                            >
                              <Controls.FlexWP justify={'space-between'} align={'center'}>
                                <Controls.HeadingWP
                                  level={'4'}
                                  style={{
                                    fontWeight: '500',
                                  }}
                                >
                                  {(0, I18n.__)(e.label, 'ohmylms')}
                                </Controls.HeadingWP>
                                <Controls.ButtonWP
                                  variant={'ghost'}
                                  size={'sm'}
                                  onClick={function (e) {
                                    (e.stopPropagation(), V(n, !1));
                                  }}
                                  style={{
                                    padding: '4px',
                                  }}
                                >
                                  {'✕'}
                                </Controls.ButtonWP>
                              </Controls.FlexWP>
                              <Controls.FlexWP justify={'flex'} align={'center'}>
                                <Controls.TextWP
                                  style={{
                                    fontWeight: '500',
                                  }}
                                >
                                  {(0, I18n.__)(e.point, 'ohmylms')}
                                  {(0, I18n.__)(' Points', 'ohmylms')}
                                </Controls.TextWP>
                              </Controls.FlexWP>
                            </Controls.CardWP>
                          );
                        })}
                      </div>
                    </Controls.FlexItemWP>
                    <Controls.FlexItemWP
                      style={{
                        flex: '1',
                      }}
                    >
                      {R && (
                        <Controls.CardWP
                          isBorderless={!0}
                          padding={'24px'}
                          style={{
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                          }}
                        >
                          <Controls.FlexWP direction={'column'} gap={4}>
                            <div>
                              <Controls.HeadingWP
                                level={'4'}
                                style={{
                                  marginBottom: '8px',
                                }}
                              >
                                {(0, I18n.__)(R.label, 'ohmylms')}
                              </Controls.HeadingWP>
                              <Controls.TextWP
                                style={{
                                  color: '#666',
                                }}
                              >
                                {(0, I18n.__)(R.tooltip, 'ohmylms')}
                              </Controls.TextWP>
                            </div>
                            <div
                              style={{
                                borderTop: '1px solid #eee',
                                paddingTop: '16px',
                              }}
                            >
                              {void 0 !== R.threshold && (
                                <div
                                  style={{
                                    marginBottom: '20px',
                                  }}
                                >
                                  <Controls.HeadingWP
                                    level={'5'}
                                    style={{
                                      marginBottom: '8px',
                                    }}
                                  >
                                    {(0, I18n.__)('Minimum Threshold', 'ohmylms')}
                                    <span
                                      style={{
                                        color: '#FF4955',
                                      }}
                                    >
                                      {'*'}
                                    </span>
                                  </Controls.HeadingWP>
                                  <Controls.TextWP
                                    style={{
                                      fontSize: '13px',
                                      color: '#666',
                                      marginBottom: '12px',
                                    }}
                                  >
                                    {(0, I18n.__)(
                                      'Set the minimum percentage learners must achieve to earn points.',
                                      'ohmylms',
                                    )}
                                  </Controls.TextWP>
                                  <Controls.InputNumberWP
                                    value={R.threshold}
                                    onChange={function (e) {
                                      return x(
                                        O2(
                                          O2({}, R),
                                          {},
                                          {
                                            threshold: e,
                                          },
                                        ),
                                      );
                                    }}
                                    min={0}
                                    max={100}
                                    suffix={'%'}
                                  />
                                </div>
                              )}
                              {void 0 !== R.point && (
                                <div>
                                  <Controls.HeadingWP
                                    level={'5'}
                                    style={{
                                      marginBottom: '8px',
                                    }}
                                  >
                                    {(0, I18n.__)('Points Awarded', 'ohmylms')}
                                    <span
                                      style={{
                                        color: '#FF4955',
                                      }}
                                    >
                                      {'*'}
                                    </span>
                                  </Controls.HeadingWP>
                                  <Controls.TextWP
                                    style={{
                                      fontSize: '13px',
                                      color: '#666',
                                      marginBottom: '12px',
                                    }}
                                  >
                                    {(0, I18n.__)(
                                      'Number of points learners will earn when this rule is triggered.',
                                      'ohmylms',
                                    )}
                                  </Controls.TextWP>
                                  <Controls.InputNumberWP
                                    value={R.point}
                                    onChange={function (e) {
                                      return x(
                                        O2(
                                          O2({}, R),
                                          {},
                                          {
                                            point: e,
                                          },
                                        ),
                                      );
                                    }}
                                    min={0}
                                  />
                                </div>
                              )}
                            </div>
                            <Controls.CardWP
                              isBorderless={!0}
                              padding={'20px'}
                              style={{
                                backgroundColor: '#f8f9fa',
                                borderRadius: '6px',
                              }}
                            >
                              <Controls.FlexWP direction={'column'} gap={3}>
                                {void 0 !==
                                  (null === (e = R.email) || void 0 === e ? void 0 : e.enable) && (
                                  <Controls.FlexItemWP>
                                    <Controls.FlexWP align={'flex-start'} justify={'space-between'}>
                                      <Controls.FlexItemWP>
                                        <Controls.HeadingWP
                                          level={'5'}
                                          style={{
                                            marginBottom: '4px',
                                          }}
                                        >
                                          {(0, I18n.__)('Send Email', 'ohmylms')}
                                        </Controls.HeadingWP>
                                        <Controls.TextWP size={'13px'} variant={'muted'}>
                                          {(0, I18n.__)(
                                            'Notify learners via email when they earn points.',
                                            'ohmylms',
                                          )}
                                        </Controls.TextWP>
                                      </Controls.FlexItemWP>
                                      <Controls.FlexItemWP>
                                        <Controls.SwitchWP
                                          checked={R.email.enable}
                                          onChange={function (e) {
                                            return x(function (t) {
                                              return O2(
                                                O2({}, t),
                                                {},
                                                {
                                                  email: O2(
                                                    O2({}, t.email),
                                                    {},
                                                    {
                                                      enable: e,
                                                    },
                                                  ),
                                                },
                                              );
                                            });
                                          }}
                                        />
                                      </Controls.FlexItemWP>
                                    </Controls.FlexWP>
                                  </Controls.FlexItemWP>
                                )}
                                {(null === (t = R.email) || void 0 === t ? void 0 : t.enable) && (
                                  <React.Fragment>
                                    <Controls.FlexItemWP>
                                      <Controls.HeadingWP
                                        level={'5'}
                                        style={{
                                          marginBottom: '8px',
                                        }}
                                      >
                                        {(0, I18n.__)('Email Subject', 'ohmylms')}
                                      </Controls.HeadingWP>
                                      <Controls.InputWP
                                        value={R.email.subject}
                                        onChange={function (e) {
                                          return x(function (t) {
                                            return O2(
                                              O2({}, t),
                                              {},
                                              {
                                                email: O2(
                                                  O2({}, t.email),
                                                  {},
                                                  {
                                                    subject: e,
                                                  },
                                                ),
                                              },
                                            );
                                          });
                                        }}
                                      />
                                    </Controls.FlexItemWP>
                                    <Controls.FlexItemWP>
                                      <Controls.HeadingWP
                                        level={'5'}
                                        style={{
                                          marginBottom: '8px',
                                        }}
                                      >
                                        {(0, I18n.__)('Email Body', 'ohmylms')}
                                      </Controls.HeadingWP>
                                      <Controls.TextareaWP
                                        className={'omlms-text-generate-prompt-input'}
                                        placeholder={(0, I18n.__)('Write here...', 'ohmylms')}
                                        value={R.email.body}
                                        onChange={Y}
                                      />
                                    </Controls.FlexItemWP>
                                  </React.Fragment>
                                )}
                              </Controls.FlexWP>
                            </Controls.CardWP>
                          </Controls.FlexWP>
                        </Controls.CardWP>
                      )}
                    </Controls.FlexItemWP>
                  </Controls.FlexWP>
                </React.Fragment>
              )}
            </Controls.FlexWP>
          </Controls.SpacerWP>
        </Controls.CardWP>
        <Controls.SpacerWP paddingTop={6} paddingBottom={25}>
          <Controls.FlexWP justify={'flex-end'}>
            <Controls.ButtonWP
              variant={'primary'}
              size={'md'}
              onClick={B}
              isBusy={w}
              disabled={Q(R)}
            >
              {(0, I18n.__)('Save', 'ohmylms')}
            </Controls.ButtonWP>
          </Controls.FlexWP>
        </Controls.SpacerWP>
        {P && R.length > 0 && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '600px',
              height: '100vh',
              backgroundColor: '#f8f9fa',
              borderLeft: '1px solid #e0e0e0',
              boxShadow: '-2px 0 8px rgba(0,0,0,0.1)',
              zIndex: 1e3,
              overflowY: 'auto',
            }}
          >
            <div
              style={{
                padding: '20px',
                paddingTop: '40px',
              }}
            >
              <Controls.FlexWP direction={'column'} gap={3}>
                <Controls.FlexWP justify={'space-between'} align={'center'}>
                  <Controls.HeadingWP
                    level={'3'}
                    style={{
                      fontSize: '20px',
                    }}
                  >
                    {(0, I18n.__)('Rule Configuration', 'ohmylms')}
                  </Controls.HeadingWP>
                  <Controls.ButtonWP
                    variant={'ghost'}
                    size={'sm'}
                    onClick={H}
                    style={{
                      padding: '8px',
                    }}
                  >
                    {'✕'}
                  </Controls.ButtonWP>
                </Controls.FlexWP>
                <Controls.CardWP
                  isBorderless={!0}
                  padding={'20px'}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                  }}
                >
                  <Controls.FlexWP direction={'column'} gap={3}>
                    <div>
                      <Controls.HeadingWP
                        level={'4'}
                        style={{
                          marginBottom: '8px',
                          fontSize: '18px',
                        }}
                      >
                        {(0, I18n.__)(R.label, 'ohmylms')}
                      </Controls.HeadingWP>
                      <Controls.TextWP
                        style={{
                          color: '#666',
                          fontSize: '14px',
                        }}
                      >
                        {(0, I18n.__)(R.tooltip, 'ohmylms')}
                      </Controls.TextWP>
                    </div>
                    <div
                      style={{
                        borderTop: '1px solid #eee',
                        paddingTop: '16px',
                      }}
                    >
                      {void 0 !== (null == R ? void 0 : R.threshold) && (
                        <div
                          style={{
                            marginBottom: '20px',
                          }}
                        >
                          <Controls.HeadingWP
                            level={'5'}
                            style={{
                              marginBottom: '8px',
                              fontSize: '16px',
                            }}
                          >
                            {(0, I18n.__)('Minimum Threshold', 'ohmylms')}
                          </Controls.HeadingWP>
                          <Controls.TextWP
                            style={{
                              fontSize: '13px',
                              color: '#666',
                              marginBottom: '12px',
                            }}
                          >
                            {(0, I18n.__)(
                              'Set the minimum percentage learners must achieve to earn points.',
                              'ohmylms',
                            )}
                          </Controls.TextWP>
                          <Controls.InputNumberWP
                            value={R.threshold}
                            onChange={function (e) {
                              return x(
                                O2(
                                  O2({}, R),
                                  {},
                                  {
                                    threshold: e,
                                  },
                                ),
                              );
                            }}
                            min={0}
                            max={100}
                            suffix={'%'}
                          />
                        </div>
                      )}
                      {void 0 !== (null == R ? void 0 : R.point) && (
                        <div>
                          <Controls.HeadingWP
                            level={'5'}
                            style={{
                              marginBottom: '8px',
                              fontSize: '16px',
                            }}
                          >
                            {(0, I18n.__)('Points Awarded', 'ohmylms')}
                          </Controls.HeadingWP>
                          <Controls.TextWP
                            style={{
                              fontSize: '13px',
                              color: '#666',
                              marginBottom: '12px',
                            }}
                          >
                            {(0, I18n.__)(
                              'Number of points learners will earn when this rule is triggered.',
                              'ohmylms',
                            )}
                          </Controls.TextWP>
                          <Controls.InputNumberWP
                            value={R.point}
                            onChange={function (e) {
                              return x(
                                O2(
                                  O2({}, R),
                                  {},
                                  {
                                    point: e,
                                  },
                                ),
                              );
                            }}
                            min={0}
                            max={100}
                          />
                        </div>
                      )}
                    </div>
                  </Controls.FlexWP>
                </Controls.CardWP>
                <Controls.CardWP
                  isBorderless={!0}
                  padding={'20px'}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                  }}
                >
                  <Controls.FlexWP direction={'column'} gap={3}>
                    {void 0 !==
                      (null == R || null === (n = R.email) || void 0 === n ? void 0 : n.enable) && (
                      <Controls.FlexItemWP
                        style={{
                          marginBottom: '20px',
                        }}
                      >
                        <Controls.FlexWP align={'flex-start'} justify={'space-between'}>
                          <Controls.FlexItemWP>
                            <Controls.HeadingWP
                              level={'5'}
                              style={{
                                marginBottom: '8px',
                                fontSize: '16px',
                              }}
                            >
                              {(0, I18n.__)('Send Email', 'ohmylms')}
                            </Controls.HeadingWP>
                            <Controls.TextWP size={'13px'} variant={'muted'}>
                              {(0, I18n.__)(
                                'Enable to notify learners via email when they earn points',
                                'ohmylms',
                              )}
                            </Controls.TextWP>
                          </Controls.FlexItemWP>
                          <Controls.FlexItemWP>
                            <Controls.SwitchWP
                              checked={R.email.enable}
                              onChange={function (e) {
                                return x(function (t) {
                                  return O2(
                                    O2({}, t),
                                    {},
                                    {
                                      email: O2(
                                        O2({}, t.email),
                                        {},
                                        {
                                          enable: e,
                                        },
                                      ),
                                    },
                                  );
                                });
                              }}
                            />
                          </Controls.FlexItemWP>
                        </Controls.FlexWP>
                      </Controls.FlexItemWP>
                    )}
                    {(null == R || null === (r = R.email) || void 0 === r ? void 0 : r.enable) && (
                      <div>
                        <Controls.HeadingWP
                          level={'5'}
                          style={{
                            marginBottom: '8px',
                            fontSize: '16px',
                          }}
                        >
                          {(0, I18n.__)('Email Subject', 'ohmylms')}
                        </Controls.HeadingWP>
                        <Controls.TextWP size={'13px'} variant={'muted'}>
                          {(0, I18n.__)(
                            'Enter the subject line for the email notification',
                            'ohmylms',
                          )}
                        </Controls.TextWP>
                        <Controls.InputWP
                          value={
                            null == R || null === (a = R.email) || void 0 === a ? void 0 : a.subject
                          }
                          onChange={function (e) {
                            return x(function (t) {
                              return O2(
                                O2({}, t),
                                {},
                                {
                                  email: O2(
                                    O2({}, t.email),
                                    {},
                                    {
                                      subject: e,
                                    },
                                  ),
                                },
                              );
                            });
                          }}
                        />
                      </div>
                    )}
                    {(null == R || null === (o = R.email) || void 0 === o ? void 0 : o.enable) && (
                      <Controls.FlexItemWP>
                        <Controls.HeadingWP
                          level={'5'}
                          style={{
                            marginBottom: '8px',
                            fontSize: '16px',
                          }}
                        >
                          {(0, I18n.__)('Email body', 'ohmylms')}
                        </Controls.HeadingWP>
                        <Controls.TextareaWP
                          className={'omlms-text-generate-prompt-input'}
                          placeholder={(0, I18n.__)('Write here...', 'ohmylms')}
                          value={R.email.body}
                          onChange={Y}
                        />
                      </Controls.FlexItemWP>
                    )}
                  </Controls.FlexWP>
                </Controls.CardWP>
                <div
                  style={{
                    borderTop: '1px solid #eee',
                    paddingTop: '16px',
                  }}
                >
                  <Controls.FlexWP justify={'flex-end'} gap={2}>
                    <Controls.ButtonWP variant={'ghost'} onClick={H}>
                      {(0, I18n.__)('Cancel', 'ohmylms')}
                    </Controls.ButtonWP>
                    <Controls.ButtonWP variant={'primary'} onClick={G} isBusy={w}>
                      {(0, I18n.__)('Save Configuration', 'ohmylms')}
                    </Controls.ButtonWP>
                  </Controls.FlexWP>
                </div>
              </Controls.FlexWP>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  };
}
