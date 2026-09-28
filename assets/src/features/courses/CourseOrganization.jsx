/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCourseOrganization(readRuntime) {
  return function CourseOrganization() {
    const {
      $V,
      I: Controls,
      React,
      T: StoreModule,
      XV,
      aH,
      b: I18n,
      g: ReactHooks,
      tH,
      y: WordPressData,
    } = readRuntime();
    var e = (0, WordPressData.useDispatch)(StoreModule.default),
      t = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getAllCategories();
      }, []),
      n = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getTags();
      }, []),
      r = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourseCategories();
      }, []),
      a = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getCourseTags();
      }, []),
      o = (0, ReactHooks.useCallback)(
        function (t, n) {
          e.setCourseCategories(t, n);
        },
        [e],
      ),
      i = (function () {
        var t = aH(
          tH().m(function t(n) {
            var r;
            return tH().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    return (
                      (r = {
                        name: null == n ? void 0 : n.name,
                        parent: null == n ? void 0 : n.parent,
                      }),
                      (t.n = 1),
                      e.saveCourseCategory(r)
                    );
                  case 1:
                    return (t.v, t.a(2, !0));
                }
            }, t);
          }),
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      l = (function () {
        var t = aH(
          tH().m(function t(n) {
            var r, a;
            return tH().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    ((a = XV(
                      XV({}, n),
                      {},
                      {
                        id: null !== (r = n.id) && void 0 !== r ? r : n.term_id,
                      },
                    )),
                      e.setCourseCategories(a, !1),
                      e.deleteCourseCategory(a));
                  case 1:
                    return t.a(2);
                }
            }, t);
          }),
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      c = (0, ReactHooks.useCallback)(
        function (t, n) {
          n ? e.setCourseTags(t) : e.removeCourseTag(t);
        },
        [e],
      ),
      u = (function () {
        var t = aH(
          tH().m(function t(n) {
            var r, a;
            return tH().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    return (
                      (r = {
                        name: null == n ? void 0 : n.name,
                      }),
                      (t.n = 1),
                      e.saveCourseTag(r)
                    );
                  case 1:
                    ((a = t.v),
                      c(
                        {
                          id: null == a ? void 0 : a.term_id,
                          name: null == a ? void 0 : a.name,
                          children: [],
                        },
                        !0,
                      ));
                  case 2:
                    return t.a(2);
                }
            }, t);
          }),
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      s = (function () {
        var t = aH(
          tH().m(function t(n) {
            var r, a;
            return tH().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    ((a = XV(
                      XV({}, n),
                      {},
                      {
                        id: null !== (r = n.id) && void 0 !== r ? r : n.term_id,
                      },
                    )),
                      e.removeCourseTag(a),
                      e.deleteCourseTag(a));
                  case 1:
                    return t.a(2);
                }
            }, t);
          }),
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
    return (
      <React.Fragment>
        <Controls.CardWP isBorderless={!0}>
          <Controls.SpacerWP padding={6} marginTop={6} marginBottom={6}>
            <Controls.FlexWP gap={6} align={'stretch'}>
              <Controls.FlexItemWP flex={1}>
                <Controls.CardWP isBorderless={!0} variant={'secondary'} fullHeight={!0}>
                  <Controls.SpacerWP marginBottom={0} padding={5}>
                    <$V
                      termFor={'category'}
                      items={t}
                      availableTerms={r}
                      handleToggle={o}
                      handleAdd={i}
                      handleDelete={l}
                      title={(0, I18n.__)('Categories', 'ohmylms')}
                      description={(0, I18n.__)(
                        'Organize your courses in categories. Type the name of the category and press enter.',
                        'ohmylms',
                      )}
                      deleteTitle={(0, I18n.__)('Delete Category', 'ohmylms')}
                      deleteDescription={(0, I18n.__)(
                        'Are you sure you want to delete this category?',
                        'ohmylms',
                      )}
                      showParent={!0}
                    />
                  </Controls.SpacerWP>
                </Controls.CardWP>
              </Controls.FlexItemWP>
              <Controls.FlexItemWP flex={1}>
                <Controls.CardWP isBorderless={!0} variant={'secondary'} fullHeight={!0}>
                  <Controls.SpacerWP marginBottom={0} padding={5}>
                    <$V
                      termFor={'tag'}
                      items={n}
                      availableTerms={a}
                      handleToggle={c}
                      handleAdd={u}
                      handleDelete={s}
                      title={(0, I18n.__)('Tags', 'ohmylms')}
                      description={(0, I18n.__)(
                        'Use a unique tag to identify your courses easily.',
                        'ohmylms',
                      )}
                      deleteTitle={(0, I18n.__)('Delete Tag', 'ohmylms')}
                      deleteDescription={(0, I18n.__)(
                        'Are you sure you want to delete this tag?',
                        'ohmylms',
                      )}
                    />
                  </Controls.SpacerWP>
                </Controls.CardWP>
              </Controls.FlexItemWP>
            </Controls.FlexWP>
          </Controls.SpacerWP>
        </Controls.CardWP>
      </React.Fragment>
    );
  };
}
