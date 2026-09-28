/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCourseBasics(readRuntime) {
  return function CourseBasics() {
    const {
      Az,
      Dz,
      He,
      I: Controls,
      Iz,
      Kt,
      L: Entitlements,
      Pz,
      React,
      T: StoreModule,
      b: I18n,
      g: ReactHooks,
      kz,
      mz,
      vz,
      wz,
      y: WordPressData,
      zz,
    } = readRuntime();
    var e = (0, WordPressData.useDispatch)(StoreModule.default),
      t = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourse();
      }, []),
      n = (0, Entitlements.useIsPro)(),
      r = (function (e, t) {
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
              if ('string' == typeof e) return zz(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? zz(e, t)
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
      a = r[0],
      o = r[1],
      availability = t.availability,
      available_date = t.available_date,
      access_type = t.access_type,
      has_capacity = t.has_capacity,
      capacity = t.capacity,
      level = t.level,
      enable_reviews = t.enable_reviews,
      slug = t.slug,
      is_cohort = t.is_cohort;
    return (
      <React.Fragment>
        <He.default isOpen={a} onClose={o} />
        <Controls.SpacerWP marginBottom={0} paddingY={6}>
          <Controls.CardWP isBorderless={!0}>
            <Controls.SpacerWP marginBottom={0} padding={5}>
              {React.createElement(mz, null)}
            </Controls.SpacerWP>
          </Controls.CardWP>
          <Controls.SpacerWP marginBottom={6} />
          <Controls.CardWP isBorderless={!0} className={'omlms-basic-tab omlms-course-settings'}>
            {!is_cohort && (
              <Controls.SpacerWP marginBottom={0} padding={5}>
                {React.createElement(vz, {
                  capacity: capacity,
                  capacityEnabled: has_capacity,
                  handleCapacityEnabled: function (n) {
                    e.setCourse(
                      Dz(
                        Dz({}, t),
                        {},
                        {
                          has_capacity: n,
                        },
                      ),
                    );
                  },
                  handleCapacityChange: function (n) {
                    isNaN(n)
                      ? e.setCourse(
                          Dz(
                            Dz({}, t),
                            {},
                            {
                              capacity: 0,
                            },
                          ),
                        )
                      : e.setCourse(
                          Dz(
                            Dz({}, t),
                            {},
                            {
                              capacity: n,
                            },
                          ),
                        );
                  },
                })}
              </Controls.SpacerWP>
            )}
            <Controls.SpacerWP marginBottom={0} padding={5}>
              {React.createElement(wz, {
                access: access_type,
                handleAccessChange: function (n) {
                  e.setCourse(
                    Dz(
                      Dz({}, t),
                      {},
                      {
                        access_type: n,
                      },
                    ),
                  );
                },
              })}
            </Controls.SpacerWP>
            <Controls.SpacerWP marginBottom={0} padding={5}>
              <Pz
                durationEnabled={availability}
                handleDurationEnabled={function (n) {
                  e.setCourse(
                    Dz(
                      Dz({}, t),
                      {},
                      {
                        availability: n,
                      },
                    ),
                  );
                }}
                availableDate={available_date}
                handleDurationChange={function (n) {
                  e.setCourse(
                    Dz(
                      Dz({}, t),
                      {},
                      {
                        available_date: n,
                      },
                    ),
                  );
                }}
              />
            </Controls.SpacerWP>
            <Controls.SpacerWP marginBottom={0} padding={5}>
              {React.createElement(kz, {
                experienceLevel: level,
                handleExperienceLevelChange: function (n) {
                  e.setCourse(
                    Dz(
                      Dz({}, t),
                      {},
                      {
                        level: n,
                      },
                    ),
                  );
                },
              })}
            </Controls.SpacerWP>
            <Controls.SpacerWP marginBottom={0} padding={5}>
              <Iz
                slug={slug}
                handleSlugChange={function (n) {
                  ('' === (null == n ? void 0 : n.trim())
                    ? e.setIsValidCourseSettings(!1)
                    : e.setIsValidCourseSettings(!0),
                    e.setCourse(
                      Dz(
                        Dz({}, t),
                        {},
                        {
                          slug: n,
                        },
                      ),
                    ));
                }}
              />
            </Controls.SpacerWP>
            <Controls.SpacerWP marginBottom={0} padding={5}>
              <Az
                reviewEnabled={enable_reviews}
                handleReviewEnabled={function (n) {
                  e.setCourse(
                    Dz(
                      Dz({}, t),
                      {},
                      {
                        enable_reviews: n,
                      },
                    ),
                  );
                }}
              />
            </Controls.SpacerWP>
            <Controls.SpacerWP marginBottom={0} padding={5}>
              <Kt
                title={(0, I18n.__)('Sequential Lesson Access', 'ohmylms')}
                isChecked={'yes' === (null == t ? void 0 : t.sequential_mode)}
                onChange={function (r) {
                  if (!n)
                    return (
                      e.updateProModalTitle(
                        (0, I18n.__)('Sequential Lesson Access is a Pro Feature', 'ohmylms'),
                      ),
                      e.updateProModalContent(
                        (0, I18n.__)(
                          'Upgrade to OhMyLMS to enforce lesson order and keep students on track.',
                          'ohmylms',
                        ),
                      ),
                      e.updateProModalButtonText((0, I18n.__)('Upgrade to Pro', 'ohmylms')),
                      void o(!0)
                    );
                  e.setCourse(
                    Dz(
                      Dz({}, t),
                      {},
                      {
                        sequential_mode: r ? 'yes' : 'no',
                      },
                    ),
                  );
                }}
                spacerPadding={0}
                description={(0, I18n.__)(
                  'Students must complete each lesson in order before the next one unlocks.',
                  'ohmylms',
                )}
              />
            </Controls.SpacerWP>
          </Controls.CardWP>
        </Controls.SpacerWP>
      </React.Fragment>
    );
  };
}
