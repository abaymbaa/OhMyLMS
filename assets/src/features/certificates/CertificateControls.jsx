/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCertificateControls(readRuntime) {
  return function CertificateControls() {
    const {
      He,
      I: Controls,
      IL,
      L: Entitlements,
      ML: MemoCertificateImageField,
      React,
      T: StoreModule,
      TL,
      b: I18n,
      g: ReactHooks,
      kL: MemoCertificateTextField,
      y: WordPressData,
    } = readRuntime();
    var e = true,
      t = TL((0, ReactHooks.useState)(D('instructor_signature_img', 'src')), 2),
      n = t[0],
      r = t[1],
      a = TL((0, ReactHooks.useState)(D('director_signature_img', 'src')), 2),
      o = a[0],
      i = a[1],
      l = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectCertificate();
      }, []),
      c = (0, WordPressData.useDispatch)(StoreModule.default),
      u = TL((0, ReactHooks.useState)(D('title_text', 'content')), 2),
      s = u[0],
      d = u[1],
      m = TL((0, ReactHooks.useState)(D('subtitle_text', 'content')), 2),
      p = m[0],
      f = m[1],
      v = TL((0, ReactHooks.useState)(D('description_text', 'content')), 2),
      h = v[0],
      _ = v[1],
      w = TL((0, ReactHooks.useState)(D('surname_text', 'content')), 2),
      E = w[0],
      S = (w[1], TL((0, ReactHooks.useState)(D('recognition_text', 'content')), 2)),
      R = S[0],
      x = S[1],
      C = TL((0, ReactHooks.useState)(D('director_signature_text', 'content')), 2),
      P = C[0],
      O = C[1],
      k = TL((0, ReactHooks.useState)(D('instructor_signature_text', 'content')), 2),
      j = k[0],
      A = k[1],
      M = TL((0, ReactHooks.useState)(!1), 2),
      F = M[0],
      N = M[1];
    function D(e, t) {
      var n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        a = function (n) {
          if (n) {
            var o,
              i = (function (e) {
                var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (!t) {
                  if (Array.isArray(e) || (t = IL(e))) {
                    t && (e = t);
                    var n = 0,
                      r = function () {};
                    return {
                      s: r,
                      n: function () {
                        return n >= e.length
                          ? {
                              done: !0,
                            }
                          : {
                              done: !1,
                              value: e[n++],
                            };
                      },
                      e: function (e) {
                        throw e;
                      },
                      f: r,
                    };
                  }
                  throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                  );
                }
                var a,
                  o = !0,
                  i = !1;
                return {
                  s: function () {
                    t = t.call(e);
                  },
                  n: function () {
                    var e = t.next();
                    return ((o = e.done), e);
                  },
                  e: function (e) {
                    ((i = !0), (a = e));
                  },
                  f: function () {
                    try {
                      o || null == t.return || t.return();
                    } finally {
                      if (i) throw a;
                    }
                  },
                };
              })(n);
            try {
              for (i.s(); !(o = i.n()).done;) {
                var l = o.value;
                if (l.selector === e) {
                  var c;
                  if (r && 'style' === t && l[t])
                    return null === (c = l[t][r]) || void 0 === c
                      ? void 0
                      : c.replace('!important', '').trim();
                  if (t in l)
                    return 'string' == typeof l[t] ? l[t].replace('!important', '').trim() : l[t];
                }
                if (l.children) {
                  var u = a(l.children);
                  if (u) return u;
                }
              }
            } catch (e) {
              i.e(e);
            } finally {
              i.f();
            }
            return null;
          }
        };
      return a(null == l || null === (n = l.contents) || void 0 === n ? void 0 : n.elements);
    }
    var W = [
        {
          label: (0, I18n.__)('Document Color', 'ohmylms'),
          colors: ['#FFFFFF', 'var(--ohmylms-primary-color)', '#F6F6F6', '#ED9702', '#000D21'],
        },
        {
          label: (0, I18n.__)('Default Color', 'ohmylms'),
          colors: [
            '#FFFFFF',
            '#EBEBEB',
            '#D6D6D6',
            '#999999',
            '#707070',
            '#474747',
            '#068EA8',
            '#08C0DF',
            '#5BE1E6',
            '#37B6FE',
            '#5171FF',
            '#0049AC',
            '#04B55F',
            '#7DD856',
            '#C0FF72',
            '#FEDE58',
            '#FFBC59',
            '#FF914D',
            '#5E16EA',
            '#8C51FF',
            '#CB6BE5',
            '#FF57BF',
            '#FF5756',
            '#FE3130',
          ],
        },
      ],
      z = function (t, n, r) {
        var a = {
          selector: t,
          key: n,
          value: r,
        };
        c.updateClassicData(a);
      };
    return (
      (0, ReactHooks.useEffect)(function () {
        (r(D('instructor_signature_img', 'src')), i(D('director_signature_img', 'src')));
      }, []),
      (
        <React.Fragment>
          <Controls.CardWP
            style={{
              borderRadius: 0,
            }}
            isBorderless={!0}
          >
            <Controls.SpacerWP paddingX={4} paddingY={3}>
              <Controls.FlexWP align={'start'} justify={'start'} direction={'column'} gap={4}>
                <Controls.FlexItemWP
                  isBlock={!0}
                  style={{
                    width: '100%',
                  }}
                >
                  {'string' == typeof s && (
                    <MemoCertificateTextField
                      label={(0, I18n.__)('Title Text', 'ohmylms')}
                      color={D('title_text', 'style', 'color')}
                      value={s}
                      onValueChange={function (t) {
                        (d(t), z('title_text', 'content', t));
                      }}
                      onColorChange={function (e) {
                        return z('title_text', 'style', {
                          color: ''.concat(e, ' !important'),
                        });
                      }}
                      presets={W}
                      isItProFeature={!0}
                    />
                  )}
                </Controls.FlexItemWP>
                <Controls.FlexItemWP
                  isBlock={!0}
                  style={{
                    width: '100%',
                  }}
                >
                  {'string' == typeof p && (
                    <MemoCertificateTextField
                      label={(0, I18n.__)('Subtitle Text', 'ohmylms')}
                      color={D('subtitle_text', 'style', 'color')}
                      value={p}
                      onValueChange={function (t) {
                        (f(t), z('subtitle_text', 'content', t));
                      }}
                      onColorChange={function (e) {
                        return z('subtitle_text', 'style', {
                          color: ''.concat(e, ' !important'),
                        });
                      }}
                      presets={W}
                      isItProFeature={!0}
                    />
                  )}
                </Controls.FlexItemWP>
                <Controls.FlexItemWP
                  isBlock={!0}
                  style={{
                    width: '100%',
                  }}
                >
                  {'string' == typeof h && (
                    <MemoCertificateTextField
                      label={(0, I18n.__)('Description Text', 'ohmylms')}
                      color={D('description_text', 'style', 'color')}
                      value={h}
                      onValueChange={function (t) {
                        (_(t), z('description_text', 'content', t));
                      }}
                      onColorChange={function (e) {
                        return z('description_text', 'style', {
                          color: ''.concat(e, ' !important'),
                        });
                      }}
                      presets={W}
                      isItProFeature={!0}
                    />
                  )}
                </Controls.FlexItemWP>
                <Controls.FlexItemWP
                  isBlock={!0}
                  style={{
                    width: '100%',
                  }}
                >
                  {'string' == typeof E && (
                    <MemoCertificateTextField
                      label={(0, I18n.__)('Surname Text', 'ohmylms')}
                      color={D('surname_text', 'style', 'color')}
                      value={E}
                      onColorChange={function (e) {
                        return z('surname_text', 'style', {
                          color: ''.concat(e, ' !important'),
                        });
                      }}
                      presets={W}
                      disabled={!0}
                      isItProFeature={!0}
                    />
                  )}
                </Controls.FlexItemWP>
                <Controls.FlexItemWP
                  isBlock={!0}
                  style={{
                    width: '100%',
                  }}
                >
                  {'string' == typeof R && (
                    <MemoCertificateTextField
                      label={(0, I18n.__)('Recognition Text', 'ohmylms')}
                      color={D('recognition_text', 'style', 'color')}
                      value={R}
                      onValueChange={function (t) {
                        (x(t), z('recognition_text', 'content', t));
                      }}
                      onColorChange={function (e) {
                        return z('recognition_text', 'style', {
                          color: ''.concat(e, ' !important'),
                        });
                      }}
                      presets={W}
                      isItProFeature={!0}
                    />
                  )}
                </Controls.FlexItemWP>
                <Controls.FlexItemWP
                  isBlock={!0}
                  style={{
                    width: '100%',
                  }}
                >
                  {'string' == typeof j && (
                    <MemoCertificateTextField
                      label={(0, I18n.__)('Instructor Signature Label', 'ohmylms')}
                      color={D('instructor_signature_text', 'style', 'color')}
                      value={j}
                      onValueChange={function (t) {
                        (A(t), z('instructor_signature_text', 'content', t));
                      }}
                      onColorChange={function (e) {
                        return z('instructor_signature_text', 'style', {
                          color: ''.concat(e, ' !important'),
                        });
                      }}
                      presets={W}
                      isItProFeature={!0}
                    />
                  )}
                </Controls.FlexItemWP>
                <Controls.FlexItemWP
                  isBlock={!0}
                  style={{
                    width: '100%',
                  }}
                >
                  {'string' == typeof P && (
                    <MemoCertificateTextField
                      label={(0, I18n.__)('Director Signature Label', 'ohmylms')}
                      color={D('director_signature_text', 'style', 'color')}
                      value={P}
                      onValueChange={function (t) {
                        (O(t), z('director_signature_text', 'content', t));
                      }}
                      onColorChange={function (e) {
                        return z('director_signature_text', 'style', {
                          color: ''.concat(e, ' !important'),
                        });
                      }}
                      presets={W}
                      isItProFeature={!0}
                    />
                  )}
                </Controls.FlexItemWP>
                <Controls.FlexItemWP
                  isBlock={!0}
                  style={{
                    width: '100%',
                  }}
                >
                  {'string' == typeof j && (
                    <MemoCertificateImageField
                      title={(0, I18n.__)('Instructor Signature', 'ohmylms')}
                      tooltip={null}
                      thumbnail={n}
                      alertTitle={(0, I18n.__)('Remove the signature', 'ohmylms')}
                      alertDescription={(0, I18n.__)(
                        'Are you sure you want to remove the signature?',
                        'ohmylms',
                      )}
                      onRemove={function () {
                        (r(null), z('instructor_signature_img', 'src', ''));
                      }}
                      onChange={function (e) {
                        (r(null == e ? void 0 : e.url),
                          z('instructor_signature_img', 'src', null == e ? void 0 : e.url));
                      }}
                    />
                  )}
                </Controls.FlexItemWP>
                <Controls.FlexItemWP
                  isBlock={!0}
                  style={{
                    width: '100%',
                  }}
                >
                  {'string' == typeof P && (
                    <MemoCertificateImageField
                      title={(0, I18n.__)('Director Signature', 'ohmylms')}
                      tooltip={null}
                      thumbnail={o}
                      alertTitle={(0, I18n.__)('Remove the signature', 'ohmylms')}
                      alertDescription={(0, I18n.__)(
                        'Are you sure you want to remove the signature?',
                        'ohmylms',
                      )}
                      onRemove={function () {
                        (i(null), z('director_signature_img', 'src', ''));
                      }}
                      onChange={function (e) {
                        (i(null == e ? void 0 : e.url),
                          z('director_signature_img', 'src', null == e ? void 0 : e.url));
                      }}
                    />
                  )}
                </Controls.FlexItemWP>
              </Controls.FlexWP>
            </Controls.SpacerWP>
          </Controls.CardWP>
          {F && (
            <React.Fragment>
              <He.default isOpen={F} onClose={N} />
            </React.Fragment>
          )}
        </React.Fragment>
      )
    );
  };
}
