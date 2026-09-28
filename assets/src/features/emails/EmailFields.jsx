/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createEmailFields(readRuntime) {
  return function EmailFields(props) {
    const {
      Aee,
      I: Controls,
      Mee,
      Mt,
      React,
      T: StoreModule,
      W: RichText,
      b: I18n,
      g: ReactHooks,
      jee,
      ne,
      y: WordPressData,
    } = readRuntime();
    var t = props.setAdditionalContent,
      n = props.setFooterContent,
      r = props.setCourseSuggestionText,
      a = (function (e, t) {
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
          Mee(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      })((0, ReactHooks.useState)(''), 2),
      o = (a[0], a[1]),
      i = (0, WordPressData.useSelect)(function (e) {
        return e(StoreModule.default).getEmail();
      }, []),
      l = (0, WordPressData.useDispatch)(StoreModule.default).updateEmail,
      c = function (e, t) {
        if ('recipient_email' === e) {
          var n = t
              .split(',')
              .map(function (e) {
                return (function (e) {
                  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
                })(e.trim())
                  ? e.trim()
                  : null;
              })
              .filter(Boolean),
            r = (null == i ? void 0 : i.recipient_email) || [];
          (l(jee({}, e, [].concat(Aee(r), Aee(n)))), o(''));
        } else l(jee({}, e, t));
      };
    return (
      <Controls.CardWP isBorderless={!0}>
        <Controls.SpacerWP padding={5} gap={4}>
          <Controls.FlexWP direction={'column'} gap={3}>
            <Controls.HeadingWP level={'3'}>
              {(0, I18n.__)('Settings', 'ohmylms')}
            </Controls.HeadingWP>
            <Controls.FlexItemWP>
              <Controls.FlexWP justify={'start'} align={'center'} gap={'2'}>
                <Controls.TextWP size={16}>{(0, I18n.__)('Subject', 'ohmylms')}</Controls.TextWP>
                <Controls.TooltipWP
                  title={(0, I18n.__)('Set the subject of the email.', 'ohmylms')}
                >
                  <Mt.A />
                </Controls.TooltipWP>
              </Controls.FlexWP>
              <Controls.SpacerWP />
              <RichText.A
                value={null == i ? void 0 : i.subject}
                onChange={function (e) {
                  return c('subject', e);
                }}
                autoFocus={!0}
              />
            </Controls.FlexItemWP>
            <Controls.FlexItemWP>
              <Controls.FlexWP justify={'start'} align={'center'} gap={'2'}>
                <Controls.TextWP size={16}>
                  {(0, I18n.__)('Email heading', 'ohmylms')}
                </Controls.TextWP>
                <Controls.TooltipWP
                  title={(0, I18n.__)('Set the heading of the email.', 'ohmylms')}
                >
                  <Mt.A />
                </Controls.TooltipWP>
              </Controls.FlexWP>
              <Controls.SpacerWP />
              <Controls.InputWP
                value={null == i ? void 0 : i.heading}
                onChange={function (e) {
                  return c('heading', e);
                }}
              />
            </Controls.FlexItemWP>
            <Controls.FlexItemWP>
              <Controls.FlexWP justify={'start'} align={'center'} gap={'2'}>
                <Controls.TextWP size={16}>
                  {(0, I18n.__)('Additional content', 'ohmylms')}
                </Controls.TextWP>
                <Controls.TooltipWP
                  title={(0, I18n.__)('Add additional content to the email.', 'ohmylms')}
                >
                  <Mt.A />
                </Controls.TooltipWP>
              </Controls.FlexWP>
              <Controls.SpacerWP />
              <Controls.CardWP>
                <Controls.SpacerWP paddingX={2} marginBottom={0} paddingY={1}>
                  {React.createElement(ne, {
                    onContentChange: function (e) {
                      return t(e);
                    },
                    content: null == i ? void 0 : i.additional_content,
                    commandsConfig: {
                      image: !1,
                      horizontalRule: !1,
                      customHTML: !1,
                    },
                    showAddButton: !1,
                    placeholder: (0, I18n.__)('Add additional content to the email.', 'ohmylms'),
                  })}
                </Controls.SpacerWP>
              </Controls.CardWP>
            </Controls.FlexItemWP>
            {(null == i ? void 0 : i.footer_text) && (
              <Controls.FlexItemWP>
                <Controls.FlexWP justify={'start'} align={'center'} gap={'2'}>
                  <Controls.TextWP size={16}>
                    {(0, I18n.__)('Footer Text', 'ohmylms')}
                  </Controls.TextWP>
                  <Controls.TooltipWP
                    title={(0, I18n.__)('Set the footer text of the email.', 'ohmylms')}
                  >
                    <Mt.A />
                  </Controls.TooltipWP>
                </Controls.FlexWP>
                <Controls.SpacerWP />
                <Controls.CardWP>
                  <Controls.SpacerWP paddingX={2} marginBottom={0} paddingY={1}>
                    {React.createElement(ne, {
                      onContentChange: function (e) {
                        return n(e);
                      },
                      content: null == i ? void 0 : i.footer_text,
                      commandsConfig: {
                        image: !1,
                        horizontalRule: !1,
                        customHTML: !1,
                      },
                      showAddButton: !1,
                      placeholder: (0, I18n.__)('Add footer text to the email.', 'ohmylms'),
                    })}
                  </Controls.SpacerWP>
                </Controls.CardWP>
              </Controls.FlexItemWP>
            )}
            {(null == i ? void 0 : i.course_suggestion_text) && (
              <Controls.FlexItemWP>
                <Controls.FlexWP size={16} justify={'start'} align={'center'} gap={'2'}>
                  <Controls.TextWP>
                    {(0, I18n.__)('Course Suggestion Text', 'ohmylms')}
                  </Controls.TextWP>
                  <Controls.TooltipWP
                    title={(0, I18n.__)('Set the course suggestion text.', 'ohmylms')}
                  >
                    <Mt.A />
                  </Controls.TooltipWP>
                </Controls.FlexWP>
                <Controls.SpacerWP />
                <Controls.CardWP>
                  <Controls.SpacerWP paddingX={2} marginBottom={0} paddingY={1}>
                    {React.createElement(ne, {
                      onContentChange: function (e) {
                        return r(e);
                      },
                      content: null == i ? void 0 : i.course_suggestion_text,
                      commandsConfig: {
                        image: !1,
                        horizontalRule: !1,
                        customHTML: !1,
                      },
                      showAddButton: !1,
                      placeholder: (0, I18n.__)('Add course suggestion text.', 'ohmylms'),
                    })}
                  </Controls.SpacerWP>
                </Controls.CardWP>
              </Controls.FlexItemWP>
            )}
            {(null == i ? void 0 : i.hasOwnProperty('button_text')) && (
              <Controls.FlexItemWP>
                <Controls.FlexWP justify={'start'} align={'center'} gap={'2'}>
                  <Controls.TextWP size={16}>
                    {(0, I18n.__)('Email Button', 'ohmylms')}
                  </Controls.TextWP>
                  <Controls.TooltipWP title={(0, I18n.__)('Set the email button text.', 'ohmylms')}>
                    <Mt.A />
                  </Controls.TooltipWP>
                </Controls.FlexWP>
                <Controls.SpacerWP />
                <Controls.InputWP
                  value={null == i ? void 0 : i.button_text}
                  onChange={function (e) {
                    return c('button_text', e);
                  }}
                />
              </Controls.FlexItemWP>
            )}
          </Controls.FlexWP>
        </Controls.SpacerWP>
      </Controls.CardWP>
    );
  };
}
