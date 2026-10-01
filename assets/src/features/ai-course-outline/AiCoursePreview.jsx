/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAiCoursePreview(readRuntime) {
  return function AiCoursePreview(props) {
    const {
      Aae: MemoAiPreviewActions,
      Fae,
      I: Controls,
      Iae,
      Mae,
      Pae: MemoAiCourseOutline,
      React,
      T: StoreModule,
      b: I18n,
      g: ReactHooks,
      pae: MemoAiPreviewHeader,
      vae: MemoAiCourseSummary,
      wr,
      y: WordPressData,
    } = readRuntime();
    var t,
      n = props.isOpen,
      r = props.onClose,
      a = props.isCreating,
      o = props.onEdit,
      i = props.onAccept,
      l = props.onRegenerate;
    if (!n) return null;
    var c = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getAISuggestedCourses();
      }, []),
      u = Fae((0, ReactHooks.useState)(!1), 2),
      s = u[0],
      d = u[1],
      m = Fae((0, ReactHooks.useState)(0), 2),
      p = (m[0], m[1]),
      f = Fae((0, ReactHooks.useState)(null !== (t = c[0]) && void 0 !== t ? t : {}), 2),
      v = f[0],
      h = f[1],
      _ = (0, ReactHooks.useRef)(null),
      w = (function () {
        var e,
          t =
            ((e = Mae().m(function e() {
              var t;
              return Mae().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        if (((e.p = 0), d(!0), !i || 'function' != typeof i)) {
                          e.n = 1;
                          break;
                        }
                        return ((e.n = 1), i(v));
                      case 1:
                        e.n = 3;
                        break;
                      case 2:
                        ((e.p = 2), (t = e.v), console.error(t));
                      case 3:
                        return ((e.p = 3), d(!1), e.f(3));
                      case 4:
                        return e.a(2);
                    }
                },
                e,
                null,
                [[0, 2, 3, 4]],
              );
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, a) {
                var o = e.apply(t, n);
                function i(e) {
                  Iae(o, r, a, i, l, 'next', e);
                }
                function l(e) {
                  Iae(o, r, a, i, l, 'throw', e);
                }
                i(void 0);
              });
            });
        return function () {
          return t.apply(this, arguments);
        };
      })();
    return (
      (0, ReactHooks.useEffect)(
        function () {
          setTimeout(function () {
            var e;
            p(null == _ || null === (e = _.current) || void 0 === e ? void 0 : e.offsetHeight);
          }, 100);
        },
        [v],
      ),
      (0, ReactHooks.useEffect)(
        function () {
          c.length && h(c[c.length - 1]);
        },
        [c],
      ),
      (
        <React.Fragment>
          <Controls.ModalWP
            __experimentalHideHeader={!0}
            className={'ohmylms-ai-course-preview-modal '.concat(
              a ? 'ohmylms-ai-course-preview-modal--creating' : '',
            )}
            size={'fill'}
            style={{
              maxWidth: '902px',
              height: '637px',
            }}
          >
            {a ? (
              <React.Fragment>
                <wr.A width={'19'} height={'19'} />
                <Controls.TextWP
                  className={'clrms-ai-course-generating-text'}
                  as={'p'}
                  size={'15'}
                  weight={'500'}
                >
                  {(0, I18n.__)(
                    "Hang tight! We're building your course structure based on your input.",
                    'ohmylms',
                  )}
                </Controls.TextWP>
              </React.Fragment>
            ) : (
              <Controls.FlexWP
                align={'between'}
                justify={'between'}
                direction={'column'}
                gap={6}
                ref={_}
                className={'ohmylms-ai-course-preview-content'}
              >
                <MemoAiPreviewHeader
                  onClose={function () {
                    s || (r && 'function' == typeof r && r());
                  }}
                  showPagination={c.length > 1}
                  totalItems={c.length}
                  onPaginationChange={function (e) {
                    h(c[e]);
                  }}
                  isLoading={s}
                />
                {((null == v ? void 0 : v.title) || (null == v ? void 0 : v.description)) && (
                  <React.Fragment>
                    <MemoAiCourseSummary
                      title={null == v ? void 0 : v.title}
                      description={null == v ? void 0 : v.description}
                    />
                  </React.Fragment>
                )}
                <div
                  style={{
                    height: '100%',
                  }}
                >
                  <MemoAiCourseOutline data={null == v ? void 0 : v.chapters} />
                  <Controls.DividerWP color={'#C8D2E980'} marginStart={0} marginEnd={0} />
                </div>
                <MemoAiPreviewActions onEdit={o} onAccept={w} onRegenerate={l} isLoading={s} />
              </Controls.FlexWP>
            )}
          </Controls.ModalWP>
        </React.Fragment>
      )
    );
  };
}
