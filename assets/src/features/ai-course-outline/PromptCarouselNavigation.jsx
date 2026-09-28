/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createPromptCarouselNavigation(readRuntime) {
  return function PromptCarouselNavigation(props) {
    const { React, Zre: CarouselArrow, b: I18n } = readRuntime();
    var t = props.totalItems,
      n = props.currentIndex,
      r = props.onNext,
      a = props.onPrevious,
      o = props.onDotClick;
    return t <= 2
      ? null
      : (document.dir,
        (
          <React.Fragment>
            <div
              className={'omlms-prompt-carousel-navigation'}
              style={{
                marginTop: '15px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '10px',
                direction: 'ltr',
              }}
            >
              <button
                onClick={a}
                aria-label={(0, I18n.__)('Previous templates', 'ohmylms')}
                className={'omlms-carousel-arrow-button'}
              >
                <CarouselArrow direction={'left'} />
              </button>
              <div
                className={'omlms-carousel-dots'}
                style={{
                  display: 'flex',
                  margin: '0 10px',
                }}
              >
                {Array.from({
                  length: t,
                }).map(function (e, t) {
                  return (
                    <button
                      key={t}
                      onClick={function () {
                        return o(t);
                      }}
                      aria-label={''
                        .concat((0, I18n.__)('Go to template set', 'ohmylms'), ' ')
                        .concat(t + 1)}
                      className={'omlms-carousel-dot '.concat(n === t ? 'active' : '')}
                    />
                  );
                })}
              </div>
              <button
                onClick={r}
                aria-label={(0, I18n.__)('Next templates', 'ohmylms')}
                className={'omlms-carousel-arrow-button'}
              >
                <CarouselArrow direction={'right'} />
              </button>
            </div>
            <style scoped={!0}>
              {
                '\n                .omlms-carousel-arrow-button {\n                    background: transparent;\n                    border: none;\n                    cursor: pointer;\n                    padding: 8px;\n                    border-radius: 50%;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    color: #7A8B9A; /* Default arrow color */\n                    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n                }\n                .omlms-carousel-arrow-button:hover {\n                    background-color: #e0e0e0;\n                    color: var(--omlms-primary-hover-color, #5331A1); /* Use primary hover color */\n                }\n                .omlms-carousel-arrow-button:focus-visible {\n                    outline: 2px solid var(--omlms-primary-color, #6e42d3);\n                    outline-offset: 1px;\n                    color: var(--omlms-primary-color, #6e42d3);\n                }\n\n                .omlms-carousel-dots button.omlms-carousel-dot {\n                    height: 10px;\n                    width: 10px;\n                    background-color: #cccccc;\n                    border-radius: 50%;\n                    display: inline-block;\n                    margin: 0 4px;\n                    cursor: pointer;\n                    border: none;\n                    padding: 0;\n                    transition: background-color 0.2s ease-in-out;\n                }\n                .omlms-carousel-dots button.omlms-carousel-dot.active {\n                    background-color: var(--omlms-primary-color, #6e42d3); /* Use primary color */\n                }\n                .omlms-carousel-dots button.omlms-carousel-dot:focus-visible {\n                    outline: 2px solid var(--omlms-primary-color, #6e42d3);\n                    outline-offset: 1px;\n                }\n            '
              }
            </style>
          </React.Fragment>
        ));
  };
}
