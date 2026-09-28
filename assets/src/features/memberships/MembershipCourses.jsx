/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createMembershipCourses(readRuntime) {
  return function MembershipCourses() {
    const {
      C8,
      Ea,
      Ge,
      I: Controls,
      O8,
      React,
      S8,
      T: StoreModule,
      b: I18n,
      g: ReactHooks,
      j8,
      k8,
      l,
      x8,
      y: WordPressData,
    } = readRuntime();
    var e = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectMembershipPlanData();
      }, []),
      updateMembershipPlan = (0, WordPressData.useDispatch)(
        StoreModule.default,
      ).updateMembershipPlan,
      n = j8((0, ReactHooks.useState)([]), 2),
      r = (n[0], n[1]),
      a = j8((0, ReactHooks.useState)([]), 2),
      o = a[0],
      i = a[1],
      c = j8((0, ReactHooks.useState)([]), 2),
      u = (c[0], c[1]),
      s = j8((0, ReactHooks.useState)(!1), 2),
      d = s[0],
      m = s[1],
      p = function (e) {
        return e && Array.isArray(e)
          ? e.map(function (e) {
              return {
                id: null == e ? void 0 : e.id,
                name: null == e ? void 0 : e.name,
                image_src: (null == e ? void 0 : e.image_src) || null,
                date_created: (null == e ? void 0 : e.date_created) || {},
              };
            })
          : [];
      },
      f = (function () {
        var e,
          t =
            ((e = S8().m(function e(t) {
              var n, a, o, c;
              return S8().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        return (
                          (e.p = 0),
                          m(!0),
                          (e.n = 1),
                          l()({
                            path: '/creator-lms/v1/courses?search='.concat(
                              t,
                              '&post_status=publish',
                            ),
                            method: 'GET',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                          })
                        );
                      case 1:
                        if ((o = e.v)) {
                          e.n = 2;
                          break;
                        }
                        o = [];
                      case 2:
                        ((a = p((n = o))),
                          r(function (e) {
                            var t = [].concat(x8(e), x8(a));
                            return Array.from(
                              new Map(
                                t.map(function (e) {
                                  return [e.id, e];
                                }),
                              ).values(),
                            );
                          }),
                          i(
                            n.map(function (e) {
                              return {
                                label: Ge(null == e ? void 0 : e.name),
                                value: e.id,
                              };
                            }),
                          ),
                          (e.n = 4));
                        break;
                      case 3:
                        ((e.p = 3), (c = e.v), console.error(c));
                      case 4:
                        return ((e.p = 4), m(!1), e.f(4));
                      case 5:
                        return e.a(2);
                    }
                },
                e,
                null,
                [[0, 3, 4, 5]],
              );
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                  C8(o, r, a, i, l, 'next', e);
                }
                function l(e) {
                  C8(o, r, a, i, l, 'throw', e);
                }
                i(void 0);
              });
            });
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      v = (0, ReactHooks.useCallback)(function (e) {
        !(function (e, n, r) {
          updateMembershipPlan(e, r ? O8(O8({}, o[e]), {}, k8({}, r, n)) : n);
        })(
          'products',
          e.map(function (e) {
            return O8(
              O8({}, e),
              {},
              {
                id: e.value,
              },
            );
          }),
        );
      }, []),
      h = (0, ReactHooks.useCallback)(function (e) {
        f(e);
      }, []);
    return (
      (0, ReactHooks.useEffect)(function () {
        f('');
        var t = ((null == e ? void 0 : e.products) || []).map(function (e) {
          return e.name;
        });
        u(t);
      }, []),
      (
        <Controls.SpacerWP marginTop={4} className={'omlms-membership-plan-course-section'}>
          <Ea isBorderless={!0} variant={'secondary'}>
            <Controls.SpacerWP padding={6} margin={0}>
              <Controls.HeadingWP level={4}>{(0, I18n.__)('Course', 'ohmylms')}</Controls.HeadingWP>
              <Controls.SpacerWP />
              <Controls.AdvancedSelectWP
                isMulti={!0}
                closeMenuOnSelect={!1}
                defaultValue={null == e ? void 0 : e.products}
                options={o}
                onChange={v}
                isDisabled={d}
                onSearch={h}
              />
            </Controls.SpacerWP>
          </Ea>
        </Controls.SpacerWP>
      )
    );
  };
}
