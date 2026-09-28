/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createIntegrationCard(readRuntime) {
  return function IntegrationCard(props) {
    const { F6, I: Controls, N6, React, T6, b: I18n, g: ReactHooks } = readRuntime();
    var t = props.integration,
      n = props.onToggle,
      r = props.onManage,
      a = t.label,
      o = t.description,
      i = t.icon,
      l = t.hasSettings,
      c = t.is_enable,
      u = t.dependency,
      s = (function (e, t) {
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
              if ('string' == typeof e) return N6(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? N6(e, t)
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
      d = s[0],
      m = s[1],
      p = (function () {
        var e,
          t =
            ((e = T6().m(function e(t) {
              var r;
              return T6().w(
                function (e) {
                  for (;;)
                    switch ((e.p = e.n)) {
                      case 0:
                        return ((e.p = 0), m(!0), (e.n = 1), n(t));
                      case 1:
                        e.n = 3;
                        break;
                      case 2:
                        ((e.p = 2), (r = e.v), console.error('Error toggling integration:', r));
                      case 3:
                        return ((e.p = 3), m(!1), e.f(3));
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
                  F6(o, r, a, i, l, 'next', e);
                }
                function l(e) {
                  F6(o, r, a, i, l, 'throw', e);
                }
                i(void 0);
              });
            });
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
    return (
      <Controls.CardWP isBorderless={!0} variant={'secondary'}>
        <Controls.SpacerWP padding={5} margin={0} marginBottom={0}>
          <Controls.FlexWP gap={2} justify={'space-between'}>
            <Controls.FlexWP gap={2} justify={'flex-start'}>
              <img src={i} alt={a} />
              <Controls.HeadingWP level={3} size={18} weight={500} color={'#000D25'}>
                {(0, I18n.__)(a, 'ohmylms')}
              </Controls.HeadingWP>
            </Controls.FlexWP>
            {u && (
              <Controls.FlexWP
                justify={'flex-end'}
                align={'center'}
                gap={0}
                style={{
                  marginTop: '5px',
                }}
              >
                <svg
                  width={'16'}
                  height={'16'}
                  viewBox={'0 0 16 16'}
                  fill={'none'}
                  xmlns={'http://www.w3.org/2000/svg'}
                  style={{
                    marginRight: '4px',
                  }}
                >
                  <path
                    d={
                      'M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z'
                    }
                    stroke={'#F59E0B'}
                    strokeWidth={'1.5'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  />
                  <path
                    d={'M8 5.5V8.5'}
                    stroke={'#F59E0B'}
                    strokeWidth={'1.5'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  />
                  <path
                    d={
                      'M8 11.5C8.41421 11.5 8.75 11.1642 8.75 10.75C8.75 10.3358 8.41421 10 8 10C7.58579 10 7.25 10.3358 7.25 10.75C7.25 11.1642 7.58579 11.5 8 11.5Z'
                    }
                    fill={'#F59E0B'}
                  />
                </svg>
                <Controls.TextWP
                  size={13}
                  style={{
                    color: '#F59E0B',
                  }}
                >
                  {u}
                </Controls.TextWP>
              </Controls.FlexWP>
            )}
          </Controls.FlexWP>
          <Controls.SpacerWP marginBottom={2} />
          <Controls.TextWP size={14} variant={'muted'}>
            {o}
          </Controls.TextWP>
          <Controls.SpacerWP marginBottom={7} />
          <Controls.FlexWP gap={3} align={'center'} justify={'space-between'}>
            <Controls.FlexWP gap={1} align={'center'} justify={'flex-start'}>
              {l && (
                <Controls.ButtonWP
                  variant={'secondary'}
                  onClick={function () {
                    return r(t);
                  }}
                  aria-label={(0, I18n.__)('Manage', 'ohmylms')}
                  style={{
                    padding: '7px 10px',
                    gap: '6px',
                    borderRadius: '4px',
                    height: 'auto',
                    minHeight: 'auto',
                  }}
                >
                  <svg
                    width={'16'}
                    height={'16'}
                    fill={'none'}
                    viewBox={'0 0 16 16'}
                    xmlns={'http://www.w3.org/2000/svg'}
                  >
                    <path
                      fill={'#6E42D3'}
                      fillRule={'evenodd'}
                      d={
                        'M6.29.836A1 1 0 017.274 0H8.58a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.026 6.026 0 010 2.435l1.15.946a1 1 0 01.23 1.272l-.654 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466A1 1 0 018.58 16H7.275a1 1 0 01-.986-.836l-.244-1.466a5.994 5.994 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.15-.946a6.026 6.026 0 010-2.435l-1.15-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218L6.29.836zM10.93 8a3 3 0 11-6 0 3 3 0 016 0z'
                      }
                      clipRule={'evenodd'}
                    />
                  </svg>
                  {(0, I18n.__)('Manage', 'ohmylms')}
                </Controls.ButtonWP>
              )}
            </Controls.FlexWP>
            <Controls.FlexWP justify={'flex-end'} gap={2}>
              <Controls.SwitchWP
                checked={null != c && c}
                onChange={function () {
                  return p(t);
                }}
                loading={d}
              />
            </Controls.FlexWP>
          </Controls.FlexWP>
        </Controls.SpacerWP>
      </Controls.CardWP>
    );
  };
}
