/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createPromptTemplates(readRuntime) {
  return function PromptTemplates(props) {
    const {
      $re: PromptCarouselNavigation,
      I: Controls,
      React,
      aae,
      b: I18n,
      eae: PromptTemplateSlider,
      g: ReactHooks,
      iae: PromptTemplateToggleIcon,
      nae,
      qt,
      rae,
      wm,
    } = readRuntime();
    var t = props.templates,
      n = props.onEdit,
      r = props.style,
      a = void 0 === r ? {} : r,
      o = props.siblingRef,
      i = aae((0, ReactHooks.useState)(!1), 2),
      l = i[0],
      c = i[1],
      u = aae((0, ReactHooks.useState)(0), 2),
      s = u[0],
      d = u[1],
      m = t ? t.length : 0,
      p = (0, ReactHooks.useRef)(null);
    p.current || (p.current = document.createElement('div'));
    var f = function (e) {
        (n && 'function' == typeof n && n(e), v());
      },
      v = function () {
        c(!l);
      },
      h = function () {
        m > 0 &&
          d(function (e) {
            return (e + 1) % m;
          });
      },
      y = function () {
        m > 0 &&
          d(function (e) {
            return (e - 1 + m) % m;
          });
      },
      _ = function (e) {
        d(e);
      };
    ((0, ReactHooks.useEffect)(
      function () {
        ((l && 0 !== m) || d(0), l && m > 0 && s >= m && d(m - 1));
      },
      [l, m, s],
    ),
      (0, ReactHooks.useEffect)(
        function () {
          var e = p.current;
          if (l && null != o && o.current) {
            var t = o.current;
            t.parentNode && t.parentNode.insertBefore(e, t.nextSibling);
          } else e.parentNode && e.parentNode.removeChild(e);
          return function () {
            e.parentNode && e.parentNode.removeChild(e);
          };
        },
        [l, o],
      ));
    var w = function () {
        var e = React.createElement(
          qt,
          {
            isVisible: l,
          },
          <Controls.CardWP
            padding={''.concat(2 < t.length ? '16px 16px 0' : '16px')}
            className={'ohmylms-templates-card-container'}
          >
            <PromptTemplateSlider templates={t} currentIndex={s} onEdit={f} maxItemsToShow={2} />
            <PromptCarouselNavigation
              totalItems={m}
              currentIndex={s}
              onNext={h}
              onPrevious={y}
              onDotClick={_}
            />
          </Controls.CardWP>,
        );
        return null != o && o.current ? (0, wm.createPortal)(e, p.current) : e;
      },
      E = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nae(Object(n), !0).forEach(function (t) {
                rae(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : nae(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
        }
        return e;
      })(
        {
          position: 'relative',
          width: '100%',
        },
        a,
      );
    return (
      <React.Fragment>
        <div className={'ohmylms-prompt-template-wrapper'} style={E}>
          <Controls.FlexWP justify={'flex-end'}>
            <Controls.ButtonWP
              icon={<PromptTemplateToggleIcon rotate={l ? '0' : '180'} />}
              onClick={v}
              iconPosition={'right'}
              variant={'default'}
              style={{
                background: '#FCFCFC',
                padding: '2px 4px',
                color: '#7A8B9A',
              }}
            >
              {(0, I18n.__)('Use templates', 'ohmylms')}
            </Controls.ButtonWP>
          </Controls.FlexWP>
          {!(null != o && o.current) && w()}
        </div>
        {(null == o ? void 0 : o.current) && w()}
        <style jsx={'true'} scoped={!0}>
          {
            '\n                .ohmylms-templates-card-container {\n                    animation: ohmylms-templates-card-container-animation 0.5s ease-in-out;\n                }\n                @keyframes ohmylms-templates-card-container-animation {\n                    0% {\n                        height: 0;\n                        opacity: 0;\n                    }\n                    100% {\n                        height: 100%;\n                        opacity: 1;\n                    }\n                }\n            '
          }
        </style>
      </React.Fragment>
    );
  };
}
