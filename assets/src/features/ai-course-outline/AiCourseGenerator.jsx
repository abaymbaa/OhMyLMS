/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAiCourseGenerator(readRuntime) {
  return function AiCourseGenerator() {
    const {
      B,
      F,
      Hae,
      I: Controls,
      L: Entitlements,
      Nr,
      Qre,
      React,
      T: StoreModule,
      Vae,
      Wae: MemoAiCoursePreview,
      Yre,
      b: I18n,
      cae: MemoPromptTemplates,
      f: Router,
      g: ReactHooks,
      l,
      sae,
      uae,
      wr,
      y: WordPressData,
      z: Notifications,
      zae,
    } = readRuntime();
    var e,
      t = (0, WordPressData.useDispatch)(StoreModule.default),
      n = Hae((0, ReactHooks.useState)(''), 2),
      r = n[0],
      a = n[1],
      o = Hae((0, ReactHooks.useState)(!1), 2),
      i = o[0],
      c = o[1],
      u = Hae((0, ReactHooks.useState)(!1), 2),
      s = u[0],
      d = u[1],
      m = (0, ReactHooks.useRef)(null),
      p = (0, ReactHooks.useRef)(null),
      v = (0, F.z)(),
      h = (0, Router.Zp)(),
      _ = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getAllCourseSuggestions();
      }, []),
      w = (0, Router.zy)(),
      E = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationMessage();
      }, []),
      S = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getNotificationStatus();
      }, []),
      R = (0, Notifications.A)(),
      x = R.openNotificationWithIcon,
      C = R.contextHolder,
      P = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getAISettings();
      }, []),
      O = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getAllIntegrations();
      }, []),
      k = (0, Entitlements.useIsPro)();
    function j(e, t) {
      var n,
        r,
        a = {
          title: null !== (n = null == e ? void 0 : e.title) && void 0 !== n ? n : 'Untitled',
          description: (null == e ? void 0 : e.description) || '',
          status: 'draft',
          chapters:
            null == e || null === (r = e.chapters) || void 0 === r
              ? void 0
              : r.map(function (e) {
                  var t, n;
                  return {
                    title:
                      null !== (t = null == e ? void 0 : e.title) && void 0 !== t ? t : 'Untitled',
                    description: (null == e ? void 0 : e.description) || '',
                    status: 'publish',
                    contents:
                      null == e || null === (n = e.content) || void 0 === n
                        ? void 0
                        : n.map(function (e) {
                            var t;
                            return {
                              title:
                                null !== (t = null == e ? void 0 : e.title) && void 0 !== t
                                  ? t
                                  : 'Untitled',
                              type: null == e ? void 0 : e.type,
                              status: 'publish',
                            };
                          }),
                  };
                }),
        };
      return (t && (a.id = t), a);
    }
    (0, ReactHooks.useEffect)(
      function () {
        E && x(S, E);
      },
      [E],
    );
    var A = (function () {
        var e = Vae(
          zae().m(function e(n) {
            var r, o, i, l, u, s;
            return zae().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (!(
                        null != P &&
                        P.self &&
                        Number(null == P ? void 0 : P.text_credit) <= 0
                      )) {
                        e.n = 1;
                        break;
                      }
                      return (x('error', 'You have reached your text generation limit.'), e.a(2));
                    case 1:
                      return (
                        (e.p = 1),
                        d(!0),
                        c(!0),
                        a(n),
                        (e.n = 2),
                        v({
                          prompt: n,
                          type: 'text',
                          contentType: 'course_outline',
                        })
                      );
                    case 2:
                      if (null == (r = e.v) || !r.error) {
                        e.n = 3;
                        break;
                      }
                      (d(!1), c(!1), a(n), (i = null));
                      try {
                        i = r.message ? JSON.parse(r.message) : null;
                      } catch (e) {
                        console.error('Error parsing AI response:', e);
                      }
                      ('anthropic' === (null == P ? void 0 : P.platform) &&
                        (i = (null === (l = i) || void 0 === l ? void 0 : l.data) || {
                          error: {
                            message:
                              (null === (u = i) || void 0 === u ? void 0 : u.message) ||
                              'Unknown error',
                          },
                        }),
                        x(
                          'error',
                          (null === (o = i) ||
                          void 0 === o ||
                          null === (o = o.error) ||
                          void 0 === o
                            ? void 0
                            : o.message) || 'Unknown error',
                        ),
                        (e.n = 4));
                      break;
                    case 3:
                      return (
                        (e.n = 4),
                        t.setAiCourseOutline(null == r ? void 0 : r.formattedResult)
                      );
                    case 4:
                      e.n = 6;
                      break;
                    case 5:
                      ((e.p = 5), (s = e.v), console.error(s));
                    case 6:
                      return ((e.p = 6), d(!1), e.f(6));
                    case 7:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[1, 5, 6, 7]],
            );
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      M = function () {
        m.current &&
          (m.current.focus(),
          setTimeout(function () {
            m.current.selectionStart = m.current.selectionEnd = m.current.value.length;
          }, 0));
      },
      N = function () {
        (c(!1), M());
      },
      D = (function () {
        var e = Vae(
          zae().m(function e() {
            var t;
            return zae().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return ((e.p = 0), (e.n = 1), A(r));
                    case 1:
                      e.n = 3;
                      break;
                    case 2:
                      ((e.p = 2), (t = e.v), console.error(t));
                    case 3:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 2]],
            );
          }),
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      W = (function () {
        var e = Vae(
          zae().m(function e(t) {
            var n, r, a, o, i;
            return zae().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      return (
                        (e.p = 0),
                        ((a = j(t)).course_type =
                          null !==
                            (n =
                              null == w || null === (r = w.state) || void 0 === r
                                ? void 0
                                : r.courseType) && void 0 !== n
                            ? n
                            : 'self-paced'),
                        (e.n = 1),
                        l()({
                          path: '/creator-lms/v1/ai/course',
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(a),
                        })
                      );
                    case 1:
                      ((o = e.v),
                        setTimeout(function () {
                          null != o &&
                            o.course_id &&
                            h('/course-edit/'.concat(null == o ? void 0 : o.course_id));
                        }, 100),
                        (e.n = 3));
                      break;
                    case 2:
                      ((e.p = 2), (i = e.v), console.error(i));
                    case 3:
                      return ((e.p = 3), N(), e.f(3));
                    case 4:
                      return e.a(2);
                  }
              },
              e,
              null,
              [[0, 2, 3, 4]],
            );
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    return k &&
      null != O &&
      null !== (e = O.ai_model) &&
      void 0 !== e &&
      e.is_enable &&
      ((null != P && P.self) || (null != P && P.api_key)) ? (
      <React.Fragment>
        {C}
        <Controls.SurfaceWP minHeight={'calc(100vh - 32px)'}>
          <Controls.ContainerWP>
            <Controls.SpacerWP paddingY={5}>
              <Controls.FlexWP justify={'start'} align={'center'} gap={3}>
                <Nr />
                <Controls.HeadingWP level={2} size={20}>
                  {(0, I18n.__)('OhMyLMS AI', 'ohmylms')}
                </Controls.HeadingWP>
              </Controls.FlexWP>
              <Controls.CardWP
                isBorderless={!0}
                variant={'secondary'}
                padding={'32px'}
                margin={'30px 0'}
                minHeight={'calc(100vh - 170px)'}
              >
                <Controls.FlexWP
                  direction={'column'}
                  gap={0}
                  align={'center'}
                  justify={'center'}
                  style={{
                    minHeight: '100%',
                    width: '804px',
                    margin: '0 auto',
                    maxWidth: '100%',
                  }}
                >
                  <Controls.SpacerWP marginBottom={4}>
                    <wr.A width={'60'} height={'50'} />
                  </Controls.SpacerWP>
                  <Controls.SpacerWP marginBottom={12}>
                    <Controls.HeadingWP align={'center'} level={3} size={30}>
                      {(0, I18n.__)(
                        "Describe your course idea, and we'll generate a course outline with chapters and lessons.",
                        'ohmylms',
                      )}
                    </Controls.HeadingWP>
                    <Controls.SpacerWP marginBottom={4} />
                    <Controls.TextWP
                      as={'p'}
                      size={'20px'}
                      color={'#7A8B9A'}
                      align={'center'}
                      weight={'300'}
                    >
                      {(0, I18n.__)(
                        "Just give us a topic or a short description — we'll take care of the rest.",
                        'ohmylms',
                      )}
                    </Controls.TextWP>
                  </Controls.SpacerWP>
                  <Yre.A>
                    <B.A type={'text'} count={Number(null == P ? void 0 : P.text_credit) || 0} />
                    <Controls.FlexWP align={'center'} justify={'flex-start'} gap={3} ref={p}>
                      <Qre.A
                        data={_}
                        onClick={function (e) {
                          (a(e), M());
                        }}
                      />
                      <MemoPromptTemplates
                        templates={sae}
                        onEdit={function (e) {
                          (a(e.description), M());
                        }}
                        siblingRef={p}
                      />
                    </Controls.FlexWP>
                    <Controls.SpacerWP gap={3} />
                    <uae.A
                      ref={m}
                      placeholder={(0, I18n.__)(
                        'Ask AI to generate.......(E.g. A wellness course focused on reducing stress through mindfulness)',
                        'ohmylms',
                      )}
                      defaultValue={r}
                      onSubmit={A}
                      disabled={
                        (null == P ? void 0 : P.self) &&
                        Number(null == P ? void 0 : P.text_credit) <= 0
                      }
                    />
                  </Yre.A>
                  <Controls.SpacerWP marginBottom={3} />
                  <Controls.FlexWP justify={'flex-start'} align={'center'} gap={2}>
                    <svg
                      fill={'none'}
                      width={'16'}
                      height={'16'}
                      viewBox={'0 0 16 16'}
                      xmlns={'http://www.w3.org/2000/svg'}
                    >
                      <path
                        fill={'#000D25'}
                        fillRule={'evenodd'}
                        d={
                          'M4.17 8.533C2.21 5.5 4.388 1.5 8 1.5s5.79 4 3.83 7.033L9.592 12H6.408L4.17 8.533zM5 12.584L2.91 9.347C.305 5.315 3.2 0 8 0s7.694 5.315 5.09 9.347L11 12.584V14a2 2 0 01-2 2H7a2 2 0 01-2-2v-1.416zm1.5.916v.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-.5h-3z'
                        }
                        clipRule={'evenodd'}
                      />
                    </svg>
                    <Controls.TextWP color={'#000D25'} size={12}>
                      {(0, I18n.__)(
                        'Tip: A good prompt = Topic + Audience + Goal or Outcome',
                        'ohmylms',
                      )}
                    </Controls.TextWP>
                  </Controls.FlexWP>
                </Controls.FlexWP>
              </Controls.CardWP>
            </Controls.SpacerWP>
          </Controls.ContainerWP>
        </Controls.SurfaceWP>
        {i && (
          <React.Fragment>
            <MemoAiCoursePreview
              isOpen={i}
              onClose={N}
              isCreating={s}
              onEdit={N}
              onAccept={W}
              onRegenerate={D}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    ) : (
      <Router.C5 to={'/courses'} />
    );
  };
}
