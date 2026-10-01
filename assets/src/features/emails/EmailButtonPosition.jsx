/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createEmailButtonPosition(readRuntime) {
  return function EmailButtonPosition() {
    const {
      I: Controls,
      React,
      T: StoreModule,
      Tt,
      b: I18n,
      d4,
      m4,
      p4,
      q,
      s4,
      y: WordPressData,
    } = readRuntime();
    var e = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectSettingsMap();
      }, []),
      t = (0, WordPressData.useDispatch)(StoreModule.default).updateSettings;
    return (
      <React.Fragment>
        <Controls.FlexWP
          justify={'space-between'}
          align={'start'}
          gap={'4'}
          className={'ohmylms-email-button-position-wrapper'}
        >
          <Controls.FlexItemWP
            style={{
              maxWidth: '300px',
            }}
          >
            <Controls.SpacerWP marginY={5}>
              <Controls.HeadingWP level={'4'}>
                {(0, I18n.__)('Button Position', 'ohmylms')}
              </Controls.HeadingWP>
              <Controls.TextWP>
                {(0, I18n.__)(
                  'Select the alignment of your Call To Action buttons in the email.',
                  'ohmylms',
                )}
              </Controls.TextWP>
            </Controls.SpacerWP>
          </Controls.FlexItemWP>
          <Controls.FlexItemWP
            style={{
              marginLeft: 'auto',
            }}
            className={'ohmylms-email-button-position-options'}
          >
            <Controls.RadioGroupWP
              onChange={function (e) {
                return (function (e, n, r) {
                  t(
                    'ohmylms_email_button_possition',
                    (function (e, t, n) {
                      return (
                        (t = (function (e) {
                          var t = (function (e) {
                            if ('object' != p4(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                              var n = t.call(e, 'string');
                              if ('object' != p4(n)) return n;
                              throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(e);
                          })(e);
                          return 'symbol' == p4(t) ? t : t + '';
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
                    })({}, 'value', r),
                  );
                })(0, 0, e);
              }}
              value={null == e ? void 0 : e.ohmylms_email_button_possition}
              options={[
                {
                  value: 'left',
                  label: <q.Icon icon={s4.A} width={'24px'} height={'24px'} />,
                },
                {
                  value: 'center',
                  label: <q.Icon icon={d4.A} width={'24px'} height={'24px'} />,
                },
                {
                  value: 'right',
                  label: <q.Icon icon={m4.A} width={'24px'} height={'24px'} />,
                },
              ]}
              isBlock={!1}
            />
          </Controls.FlexItemWP>
        </Controls.FlexWP>
        <Tt.A />
      </React.Fragment>
    );
  };
}
