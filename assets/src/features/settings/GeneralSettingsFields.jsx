/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createGeneralSettingsFields(readRuntime) {
  return function GeneralSettingsFields(props) {
    const {
      I: Controls,
      Nm,
      React,
      T: StoreModule,
      b: I18n,
      bK,
      gK,
      hK,
      y: WordPressData,
    } = readRuntime();
    var t = props.pages,
      n = void 0 === t ? [] : t,
      r = props.setPages,
      a = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getGeneralSettings();
      }, []),
      o = (0, WordPressData.useDispatch)(StoreModule.default),
      i = function (e, t) {
        o.updateGeneralSettings(
          (function (e, t, n) {
            return (
              (t = (function (e) {
                var t = (function (e) {
                  if ('object' != gK(e) || !e) return e;
                  var t = e[Symbol.toPrimitive];
                  if (void 0 !== t) {
                    var n = t.call(e, 'string');
                    if ('object' != gK(n)) return n;
                    throw new TypeError('@@toPrimitive must return a primitive value.');
                  }
                  return String(e);
                })(e);
                return 'symbol' == gK(t) ? t : t + '';
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          })({}, e, {
            value: null == t ? void 0 : t.value,
            meta_data: null == t ? void 0 : t.label,
          }),
        );
      },
      l = (function () {
        var e,
          t =
            ((e = hK().m(function e(t) {
              var r;
              return hK().w(function (e) {
                for (;;)
                  if (0 === e.n)
                    return (
                      (r = n.filter(function (e) {
                        return e.label.toLowerCase().includes(t.toLowerCase());
                      })),
                      e.a(2, r)
                    );
              }, e);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                  bK(o, r, a, i, l, 'next', e);
                }
                function l(e) {
                  bK(o, r, a, i, l, 'throw', e);
                }
                i(void 0);
              });
            });
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      c = function (e) {
        var t = (function (e) {
          var t = null == a ? void 0 : a[e];
          return t ? ('object' === gK(t) && void 0 !== t.value ? t.value : t) : null;
        })(e);
        if (!t || '-1' === t || -1 === t) return [];
        var r = n.find(function (e) {
          return e.value === t || e.value === String(t);
        });
        return r ? [r] : [];
      };
    return (
      <React.Fragment>
        <div className={'omlms-settings-general-card-wrapper'}>
          <Controls.CardWP isBorderless={!0}>
            <Controls.SpacerWP paddingY={4} paddingX={2} marginTop={0} marginBottom={4}>
              <Nm
                title={(0, I18n.__)('Course Archive Page', 'ohmylms')}
                description={(0, I18n.__)(
                  'Select the page where all your available courses will be displayed.',
                  'ohmylms',
                )}
                placeholder={(0, I18n.__)('Type to Select Option', 'ohmylms')}
                data={n}
                setData={r}
                onChange={function (e) {
                  return i('creator_lms_course_page_id', e);
                }}
                staticSearch={!1}
                value={c('creator_lms_course_page_id')}
                defaultOptions={n}
                loadOptions={l}
                isClearable={!1}
                isSearchable={!0}
                isMulti={!1}
                showDivider={!0}
              />
              <Nm
                title={(0, I18n.__)('Checkout Page', 'ohmylms')}
                description={(0, I18n.__)(
                  'Choose the page students will use to complete their course purchases.',
                  'ohmylms',
                )}
                placeholder={(0, I18n.__)('Type to Select Option', 'ohmylms')}
                data={n}
                setData={r}
                onChange={function (e) {
                  return i('creator_lms_checkout_page_id', e);
                }}
                staticSearch={!1}
                value={c('creator_lms_checkout_page_id')}
                defaultOptions={n}
                loadOptions={l}
                isClearable={!1}
                isSearchable={!0}
                isMulti={!1}
                showDivider={!0}
              />
              <Nm
                title={(0, I18n.__)('Student Dashboard', 'ohmylms')}
                description={(0, I18n.__)(
                  'Select the page where students can access their dashboard and overview.',
                  'ohmylms',
                )}
                placeholder={(0, I18n.__)('Type to Select Option', 'ohmylms')}
                data={n}
                setData={r}
                onChange={function (e) {
                  return i('creator_lms_student_dashboard_page_id', e);
                }}
                value={c('creator_lms_student_dashboard_page_id')}
                defaultOptions={n}
                loadOptions={l}
                isClearable={!1}
                isSearchable={!0}
                isMulti={!1}
                showDivider={!0}
              />
              <Nm
                title={(0, I18n.__)('Student Courses Page', 'ohmylms')}
                description={(0, I18n.__)(
                  'Select the page where students can view and manage their enrolled courses.',
                  'ohmylms',
                )}
                placeholder={(0, I18n.__)('Type to Select Option', 'ohmylms')}
                data={n}
                setData={r}
                onChange={function (e) {
                  return i('creator_lms_student_courses_page_id', e);
                }}
                value={c('creator_lms_student_courses_page_id')}
                defaultOptions={n}
                loadOptions={l}
                isClearable={!1}
                isSearchable={!0}
                isMulti={!1}
                showDivider={!0}
              />
              <Nm
                title={(0, I18n.__)('Student Profile Page', 'ohmylms')}
                description={(0, I18n.__)(
                  'Select the page where students can manage their profile information and settings.',
                  'ohmylms',
                )}
                placeholder={(0, I18n.__)('Type to Select Option', 'ohmylms')}
                data={n}
                setData={r}
                onChange={function (e) {
                  return i('creator_lms_student_profile_page_id', e);
                }}
                value={c('creator_lms_student_profile_page_id')}
                defaultOptions={n}
                loadOptions={l}
                isClearable={!1}
                isSearchable={!0}
                isMulti={!1}
                showDivider={!0}
              />
              <Nm
                title={(0, I18n.__)('Terms and Conditions Page', 'ohmylms')}
                description={(0, I18n.__)(
                  'Assign the page that outlines your terms and conditions.',
                  'ohmylms',
                )}
                placeholder={(0, I18n.__)('Type to Select Option', 'ohmylms')}
                data={n}
                setData={r}
                onChange={function (e) {
                  return i('creator_lms_terms_page_id', e);
                }}
                value={c('creator_lms_terms_page_id')}
                defaultOptions={n}
                loadOptions={l}
                isClearable={!1}
                isSearchable={!0}
                isMulti={!1}
              />
            </Controls.SpacerWP>
          </Controls.CardWP>
        </div>
      </React.Fragment>
    );
  };
}
