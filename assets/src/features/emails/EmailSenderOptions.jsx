/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createEmailSenderOptions(readRuntime) {
  return function EmailSenderOptions() {
    const {
      I: Controls,
      Mt,
      React,
      T: StoreModule,
      W: RichText,
      b: I18n,
      g4,
      y: WordPressData,
    } = readRuntime();
    var e = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).selectSettingsMap();
      }, []),
      t = (0, WordPressData.useDispatch)(StoreModule.default).updateSettings,
      n = function (e, n, r) {
        t(
          e,
          (function (e, t, n) {
            return (
              (t = (function (e) {
                var t = (function (e) {
                  if ('object' != g4(e) || !e) return e;
                  var t = e[Symbol.toPrimitive];
                  if (void 0 !== t) {
                    var n = t.call(e, 'string');
                    if ('object' != g4(n)) return n;
                    throw new TypeError('@@toPrimitive must return a primitive value.');
                  }
                  return String(e);
                })(e);
                return 'symbol' == g4(t) ? t : t + '';
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
          })({}, n, r),
        );
      };
    return (
      <React.Fragment>
        <Controls.FlexWP justify={'space-between'} align={'start'} gap={'4'}>
          <Controls.FlexItemWP
            style={{
              maxWidth: '300px',
            }}
          >
            <Controls.SpacerWP marginY={5}>
              <Controls.HeadingWP level={'4'}>
                {(0, I18n.__)('Email sender options', 'ohmylms')}
              </Controls.HeadingWP>
              <Controls.TextWP>
                {(0, I18n.__)('Set up sender details and email footer options.', 'ohmylms')}
              </Controls.TextWP>
            </Controls.SpacerWP>
          </Controls.FlexItemWP>
          <Controls.FlexItemWP
            style={{
              width: 'calc(100% - 300px - 4*4px)',
            }}
          >
            <Controls.SpacerWP marginY={5}>
              <Controls.FlexWP justify={'start'} align={'center'} gap={'2'}>
                <Controls.TextWP>{(0, I18n.__)('Sender Email Address', 'ohmylms')}</Controls.TextWP>
                <Controls.TooltipWP
                  title={(0, I18n.__)(
                    'Enter the email address that will be used to send emails.',
                    'ohmylms',
                  )}
                >
                  <Mt.A />
                </Controls.TooltipWP>
              </Controls.FlexWP>
              <Controls.SpacerWP />
              <Controls.InputWP
                value={null == e ? void 0 : e.creator_lms_email_sender_email_address}
                onChange={function (e) {
                  return n('creator_lms_email_sender_email_address', 'value', e);
                }}
              />
            </Controls.SpacerWP>
            <Controls.SpacerWP marginY={5}>
              <Controls.FlexWP justify={'start'} align={'center'} gap={'2'}>
                <Controls.TextWP>{(0, I18n.__)('Sender Name', 'ohmylms')}</Controls.TextWP>
                <Controls.TooltipWP
                  title={(0, I18n.__)(
                    'Enter the name that will be used to send emails.',
                    'ohmylms',
                  )}
                >
                  <Mt.A />
                </Controls.TooltipWP>
              </Controls.FlexWP>
              <Controls.SpacerWP />
              <Controls.InputWP
                value={null == e ? void 0 : e.creator_lms_email_sender_name}
                onChange={function (e) {
                  return n('creator_lms_email_sender_name', 'value', e);
                }}
              />
            </Controls.SpacerWP>
            <Controls.SpacerWP marginY={5}>
              <Controls.FlexWP justify={'start'} align={'center'} gap={'2'}>
                <Controls.TextWP>{(0, I18n.__)('Email Footer Text', 'ohmylms')}</Controls.TextWP>
                <Controls.TooltipWP
                  title={(0, I18n.__)(
                    'Enter the footer text that will be used to send emails.',
                    'ohmylms',
                  )}
                >
                  <Mt.A />
                </Controls.TooltipWP>
              </Controls.FlexWP>
              <Controls.SpacerWP />
              <RichText.A
                value={null == e ? void 0 : e.creator_lms_email_footer_text}
                onChange={function (e) {
                  return n('creator_lms_email_footer_text', 'value', e);
                }}
              />
            </Controls.SpacerWP>
          </Controls.FlexItemWP>
        </Controls.FlexWP>
      </React.Fragment>
    );
  };
}
