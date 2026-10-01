/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAiModelSettings(readRuntime) {
  return function AiModelSettings(props) {
    const {
      I: Controls,
      Kt,
      Nm,
      Pf,
      React,
      T: StoreModule,
      b: I18n,
      c7,
      g: ReactHooks,
      l,
      l7,
      m7,
      p7,
      u7,
      y: WordPressData,
    } = readRuntime();
    var t = props.onSave,
      n = props.onCancel,
      r = p7(
        (0, ReactHooks.useState)({
          self: !0,
          platform: 'openai',
          model: 'gpt-3.5-turbo',
          api_key: '',
          image_model: 'dall-e-2',
          max_tokens: 500,
          temperature: 1,
          image_per_request: 1,
        }),
        2,
      ),
      a = r[0],
      o = r[1],
      i = (0, WordPressData.useDispatch)(StoreModule.default),
      c = p7((0, ReactHooks.useState)(!1), 2),
      u = c[0],
      s = c[1],
      d = p7((0, ReactHooks.useState)({}), 2),
      m = d[0],
      p = d[1],
      f = p7((0, ReactHooks.useState)(!0), 2),
      v = f[0],
      h = f[1];
    function _() {
      return (_ = m7(
        u7().m(function e() {
          var t, n, r, a, i, c, u, s, d, m;
          return u7().w(
            function (e) {
              for (;;)
                switch ((e.p = e.n)) {
                  case 0:
                    return (
                      (e.p = 0),
                      (e.n = 1),
                      l()({
                        path: '/ohmylms/v1/ai/settings/credentials',
                        method: 'GET',
                      })
                    );
                  case 1:
                    (null != (t = e.v) &&
                      t.data &&
                      o({
                        self:
                          (null == t || null === (n = t.data) || void 0 === n ? void 0 : n.self) ||
                          !1,
                        platform:
                          (null == t || null === (r = t.data) || void 0 === r
                            ? void 0
                            : r.platform) || 'openai',
                        model:
                          (null == t || null === (a = t.data) || void 0 === a ? void 0 : a.model) ||
                          'gpt-3.5-turbo',
                        api_key:
                          (null == t || null === (i = t.data) || void 0 === i
                            ? void 0
                            : i.api_key) || '',
                        image_model:
                          (null == t || null === (c = t.data) || void 0 === c
                            ? void 0
                            : c.image_model) || 'dall-e-2',
                        max_tokens:
                          (null == t || null === (u = t.data) || void 0 === u
                            ? void 0
                            : u.max_tokens) || 500,
                        temperature:
                          null !==
                            (s =
                              null == t || null === (d = t.data) || void 0 === d
                                ? void 0
                                : d.temperature) && void 0 !== s
                            ? s
                            : 1,
                        image_per_request:
                          (null == t || null === (m = t.data) || void 0 === m
                            ? void 0
                            : m.image_per_request) || 1,
                      }),
                      (e.n = 3));
                    break;
                  case 2:
                    ((e.p = 2), e.v);
                  case 3:
                    return ((e.p = 3), h(!1), e.f(3));
                  case 4:
                    return e.a(2);
                }
            },
            e,
            null,
            [[0, 2, 3, 4]],
          );
        }),
      )).apply(this, arguments);
    }
    var w = function () {
        var e,
          t,
          n,
          r,
          o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
          i = {};
        return (
          o.self ||
            ((null !== (e = o.platform) && void 0 !== e && e.trim()) ||
              (i.platform = (0, I18n.__)('Platform is required', 'ohmylms')),
            (null !== (t = o.model) && void 0 !== t && t.trim()) ||
              (i.model = (0, I18n.__)('Model is required', 'ohmylms')),
            (null !== (n = o.api_key) && void 0 !== n && n.trim()) ||
              (i.api_key = (0, I18n.__)('API Key is required', 'ohmylms')),
            (null !== (r = o.image_model) && void 0 !== r && r.trim()) ||
              (i.image_model = (0, I18n.__)('Image Model is required', 'ohmylms')),
            (o.max_tokens && !isNaN(o.max_tokens)) ||
              (i.max_tokens = (0, I18n.__)('Max Tokens must be a number', 'ohmylms')),
            (void 0 === o.temperature ||
              isNaN(o.temperature) ||
              o.temperature < 0 ||
              o.temperature > 2) &&
              (i.temperature = (0, I18n.__)(
                'Temperature must be a number between 0 and 2',
                'ohmylms',
              )),
            (void 0 === o.image_per_request ||
              isNaN(o.image_per_request) ||
              o.image_per_request < 1 ||
              o.image_per_request > 3) &&
              (i.image_per_request = (0, I18n.__)(
                'Image per request must be a number between 1 and 3',
                'ohmylms',
              ))),
          i
        );
      },
      E = (function () {
        var e = m7(
          u7().m(function e() {
            var n, r, o;
            return u7().w(
              function (e) {
                for (;;)
                  switch ((e.p = e.n)) {
                    case 0:
                      if (((n = w()), p(n), !(Object.keys(n).length > 0))) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2);
                    case 1:
                      return (
                        s(!0),
                        (e.p = 2),
                        (e.n = 3),
                        l()({
                          path: '/ohmylms/v1/ai/settings/credentials',
                          method: 'POST',
                          data: a,
                        })
                      );
                    case 3:
                      (null != (r = e.v) &&
                        r.success &&
                        (i.setGlobalDataViaKey('ai_settings', a),
                        null != a && a.self && i.getLmsUtilityData(),
                        t &&
                          t(
                            'success',
                            (0, I18n.__)('AI Model credentials saved successfully.', 'ohmylms'),
                          )),
                        (e.n = 5));
                      break;
                    case 4:
                      ((e.p = 4),
                        (o = e.v),
                        t && t('error', (0, I18n.__)('Something went wrong.', 'ohmylms')),
                        console.error(o));
                    case 5:
                      return ((e.p = 5), s(!1), e.f(5));
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
      S = function (e, t) {
        (o(function (n) {
          var r, a;
          return l7(
            l7({}, n),
            {},
            'platform' === e
              ? {
                  platform: t,
                  model:
                    (null === (r = x[t]) || void 0 === r || null === (r = r[0]) || void 0 === r
                      ? void 0
                      : r.value) || '',
                  image_model:
                    (null === (a = P[t]) || void 0 === a || null === (a = a[0]) || void 0 === a
                      ? void 0
                      : a.value) || '',
                }
              : c7({}, e, t),
          );
        }),
          p(function (t) {
            return l7(l7({}, t), {}, c7({}, e, void 0));
          }));
      },
      R = [
        {
          label: (0, I18n.__)('OpenAI', 'ohmylms'),
          value: 'openai',
        },
        {
          label: (0, I18n.__)('Anthropic', 'ohmylms'),
          value: 'anthropic',
        },
        {
          label: (0, I18n.__)('Gemini', 'ohmylms'),
          value: 'gemini',
        },
      ],
      x = {
        openai: [
          {
            label: 'GPT-3.5 Turbo',
            value: 'gpt-3.5-turbo',
          },
          {
            label: 'GPT-4 Turbo',
            value: 'gpt-4-turbo',
          },
          {
            label: 'GPT-4.1',
            value: 'gpt-4.1',
          },
          {
            label: 'GPT-4.1 mini',
            value: 'gpt-4.1-mini',
          },
          {
            label: 'GPT-4.1 nano',
            value: 'gpt-4.1-nano',
          },
          {
            label: 'GPT-4.5 (Orion)',
            value: 'gpt-4.5',
          },
          {
            label: 'o4-mini',
            value: 'o4-mini',
          },
          {
            label: 'o4-mini-high',
            value: 'o4-mini-high',
          },
          {
            label: 'GPT-5',
            value: 'gpt-5',
          },
        ],
        anthropic: [
          {
            label: 'Claude 3.7 Sonnet',
            value: 'claude-3-7-sonnet-20250219',
          },
          {
            label: 'Claude Sonnet 4',
            value: 'claude-sonnet-4-20250522',
          },
          {
            label: 'Claude Opus 4',
            value: 'claude-opus-4-20250522',
          },
          {
            label: 'Claude Opus 4.1',
            value: 'claude-opus-4-1-20250805',
          },
        ],
        gemini: [
          {
            label: 'Gemini 2.5 Pro',
            value: 'gemini-2.5-pro',
          },
          {
            label: 'Gemini 2.5 Flash',
            value: 'gemini-2.5-flash',
          },
          {
            label: 'Gemini 2.5 Flash-Lite',
            value: 'gemini-2.5-flash-lite',
          },
          {
            label: 'Gemini 2.0 Flash',
            value: 'gemini-2.0-flash',
          },
        ],
      },
      C = x[a.platform] || [],
      P = {
        openai: [
          {
            label: 'DALL·E 2',
            value: 'dall-e-2',
          },
          {
            label: 'DALL·E 3',
            value: 'dall-e-3',
          },
          {
            label: 'DALL·E 3.5',
            value: 'dall-e-3.5',
          },
          {
            label: 'o1 Image',
            value: 'o1-image',
          },
        ],
        anthropic: [
          {
            label: 'Claude 3.7 Sonnet (with vision)',
            value: 'claude-3-7-sonnet-20250219',
          },
          {
            label: 'Claude Sonnet 4 (with vision)',
            value: 'claude-sonnet-4-20250514',
          },
          {
            label: 'Claude Opus 4 (with vision)',
            value: 'claude-opus-4-20250514',
          },
          {
            label: 'Claude Opus 4.1 (with vision)',
            value: 'claude-opus-4-1-20250805',
          },
        ],
        gemini: [
          {
            label: 'Gemini 2.5 Flash Image',
            value: 'gemini-2.5-flash-image',
          },
          {
            label: 'Gemini 2.0 Flash (Image Preview)',
            value: 'gemini-2.0-flash-preview-image-generation',
          },
        ],
      },
      O = P[a.platform] || [];
    return (
      (0, ReactHooks.useEffect)(function () {
        var e = !0;
        return (
          e &&
            (function () {
              _.apply(this, arguments);
            })(),
          function () {
            e = !1;
          }
        );
      }, []),
      v ? (
        <div>{(0, I18n.__)('Loading AI Model settings...', 'ohmylms')}</div>
      ) : (
        <React.Fragment>
          <Controls.CardWP
            variant={'secondary'}
            isBorderless={!0}
            style={{
              minHeight: '250px',
            }}
            margin={'0 0 20px'}
          >
            <Controls.SpacerWP marginTop={5} padding={1}>
              <Kt
                title={(0, I18n.__)('Self Hosted AI Model', 'ohmylms')}
                description={(0, I18n.__)('Enable or disable the self-hosted AI model', 'ohmylms')}
                customClass={'schedule-price-handler'}
                showDivider={!1}
                isChecked={a.self}
                onChange={function (e) {
                  return S('self', e);
                }}
              />
              {a.self ? (
                <Controls.SpacerWP paddingX={4}>
                  <Controls.TextWP>
                    {(0, I18n.__)(
                      'Powered by OhMyLMS, our advanced AI enables you to generate texts and images. Enjoy seamless content creation, image generation, and brainstorming directly within your LMS, without the need for external API keys or additional setup. Experience fast, secure, and integrated AI features designed to help you teach, create, and innovate with ease.',
                      'ohmylms',
                    )}
                  </Controls.TextWP>
                </Controls.SpacerWP>
              ) : (
                <React.Fragment>
                  <Nm
                    title={(0, I18n.__)('Select Platform', 'ohmylms')}
                    data={R}
                    value={a.platform}
                    onChange={function (e) {
                      return S('platform', e);
                    }}
                    error={m.platform}
                    placeholder={(0, I18n.__)('Choose a platform', 'ohmylms')}
                    staticSearch={!0}
                  />
                  {a.platform && (
                    <Nm
                      title={(0, I18n.__)('Select Text Model', 'ohmylms')}
                      data={C}
                      value={a.model}
                      onChange={function (e) {
                        return S('model', e);
                      }}
                      error={m.model}
                      placeholder={(0, I18n.__)('Choose a model', 'ohmylms')}
                      staticSearch={!0}
                    />
                  )}
                  {a.model && (
                    <React.Fragment>
                      <Pf
                        title={(0, I18n.__)('API Key', 'ohmylms')}
                        inputType={'text'}
                        value={a.api_key}
                        onChange={function (e) {
                          return S('api_key', e);
                        }}
                        placeholder={(0, I18n.__)('Enter your API Key', 'ohmylms')}
                        error={m.api_key}
                        required={!0}
                      />
                      <Pf
                        title={(0, I18n.__)('Temperature', 'ohmylms')}
                        inputType={'number'}
                        value={a.temperature}
                        onChange={function (e) {
                          return S('temperature', Number(e));
                        }}
                        placeholder={(0, I18n.__)('Enter temperature (0-1)', 'ohmylms')}
                        error={m.temperature}
                        min={0}
                        max={1}
                        step={0.1}
                      />
                    </React.Fragment>
                  )}
                  {a.platform && 'anthropic' !== a.platform && (
                    <Nm
                      title={(0, I18n.__)('Select Image Model', 'ohmylms')}
                      data={O}
                      value={a.image_model}
                      onChange={function (e) {
                        return S('image_model', e);
                      }}
                      error={m.image_model}
                      placeholder={(0, I18n.__)('Choose an image model', 'ohmylms')}
                      staticSearch={!0}
                    />
                  )}
                  <Pf
                    title={(0, I18n.__)('Max Tokens per Request', 'ohmylms')}
                    inputType={'number'}
                    value={a.max_tokens}
                    onChange={function (e) {
                      return S('max_tokens', Number(e));
                    }}
                    placeholder={(0, I18n.__)('Enter max tokens (e.g. 2048)', 'ohmylms')}
                    error={m.max_tokens}
                  />
                  {'anthropic' !== a.platform && (
                    <Pf
                      title={(0, I18n.__)('Image Count per Request', 'ohmylms')}
                      inputType={'number'}
                      value={a.image_per_request}
                      onChange={function (e) {
                        return S('image_per_request', Number(e));
                      }}
                      placeholder={(0, I18n.__)('Enter image count (1-3)', 'ohmylms')}
                      error={m.image_per_request}
                      min={1}
                      max={3}
                      step={1}
                      tooltip={(0, I18n.__)(
                        '1-3 images can be generated per request. Please set a value between 1 and 3.',
                        'ohmylms',
                      )}
                    />
                  )}
                </React.Fragment>
              )}
            </Controls.SpacerWP>
          </Controls.CardWP>
          <Controls.FlexWP justify={'flex-end'} gap={2}>
            <Controls.ButtonWP isSecondary={!0} onClick={n}>
              {(0, I18n.__)('Cancel', 'ohmylms')}
            </Controls.ButtonWP>
            <Controls.ButtonWP isPrimary={!0} onClick={E} disabled={u}>
              {u ? (0, I18n.__)('Saving...', 'ohmylms') : (0, I18n.__)('Save', 'ohmylms')}
            </Controls.ButtonWP>
          </Controls.FlexWP>
        </React.Fragment>
      )
    );
  };
}
