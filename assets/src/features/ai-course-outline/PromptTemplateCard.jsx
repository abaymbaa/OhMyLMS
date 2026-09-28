/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createPromptTemplateCard(readRuntime) {
  return function PromptTemplateCard(props) {
    const { I: Controls, Kre, React, b: I18n, g: ReactHooks, pG } = readRuntime();
    var t = props.template,
      n = void 0 === t ? {} : t,
      r = props.onEdit,
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
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return Kre(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Kre(e, t)
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
      o = a[0],
      i = a[1];
    return (
      <React.Fragment>
        <Controls.CardWP
          fullHeight={!0}
          isBorderless={!0}
          variant={'secondary'}
          padding={'12px 16px'}
          className={'omlms-single-prompt-template'}
          onMouseEnter={function () {
            i(!0);
          }}
          onMouseLeave={function () {
            i(!1);
          }}
        >
          {(null == n ? void 0 : n.title) && (
            <Controls.HeadingWP level={4} size={16} weight={500}>
              {null == n ? void 0 : n.title}
            </Controls.HeadingWP>
          )}
          {(null == n ? void 0 : n.description) && (
            <Controls.TextWP size={12} color={'#7A8B9A'} lineHeight={'1.5em'}>
              {null == n ? void 0 : n.description}
            </Controls.TextWP>
          )}
          {o && (
            <React.Fragment>
              <Controls.FlexWP
                align={'center'}
                justify={'center'}
                className={'omlms-prompt-template-edit-btn-wrapper'}
              >
                <Controls.ButtonWP
                  icon={<pG.A width={'14'} height={'14'} />}
                  onClick={function () {
                    r(n);
                  }}
                  size={'small'}
                >
                  {(0, I18n.__)('Edit Prompt', 'ohmylms')}
                </Controls.ButtonWP>
              </Controls.FlexWP>
            </React.Fragment>
          )}
        </Controls.CardWP>
        <style scoped={!0}>
          {
            '\n                    .omlms-single-prompt-template {\n                        position: relative;\n                        animation: fadeIn 0.3s ease-in-out;\n                    }\n\n                    .omlms-prompt-template-edit-btn-wrapper {\n                        position: absolute;\n                        width: 100%;\n                        bottom: 0;\n                        height: 60%;\n                        left: 0;\n                    }\n                    .omlms-prompt-template-edit-btn-wrapper .components-button {\n                        background: #000D25;\n                        color: #FFFFFF;\n                        padding: 4px 6px;\n                    }\n                    .omlms-prompt-template-edit-btn-wrapper .components-button:hover {\n                        color: #FFFFFF;\n                    }\n                    .omlms-prompt-template-edit-btn-wrapper:before {\n                        content: "";\n                        height: 100%;\n                        width: 100%;\n                        position: absolute;\n                        background: linear-gradient(0deg, rgba(255, 255, 255, 0.60) 0%, rgba(244, 245, 247, 0.00) 204.29%);\n                        backdrop-filter: blur(2px);\n                        border-radius: 0 0 4px 4px;\n                    }\n\n                    @keyframes fadeIn {\n                        0% {\n                            opacity: 0;\n                        }\n                        100% {\n                            opacity: 1;\n                        }\n                    }\n                '
          }
        </style>
      </React.Fragment>
    );
  };
}
