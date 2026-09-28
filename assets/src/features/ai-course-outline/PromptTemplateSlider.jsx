/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createPromptTemplateSlider(readRuntime) {
  return function PromptTemplateSlider(props) {
    const { React, Xre: MemoPromptTemplateCard, b: I18n } = readRuntime();
    var t = props.templates,
      n = props.currentIndex,
      r = props.onEdit,
      a = props.maxItemsToShow,
      o = void 0 === a ? 2 : a;
    if (!t || 0 === t.length)
      return (
        <p
          style={{
            textAlign: 'center',
            width: '100%',
          }}
        >
          {(0, I18n.__)('No templates available.', 'ohmylms')}
        </p>
      );
    var i = t.length,
      l = [];
    if (i <= o) l = t;
    else for (var c = 0; c < o; c++) l.push(t[(n + c) % i]);
    var u = 'rtl' === document.dir,
      s = u ? 326 * n : 326 * -n;
    return (
      <React.Fragment>
        <div
          className={'omlms-templates-view-container'}
          style={{
            width: '100%',
            maxWidth: ''.concat(310 * o + 16 * (o - 1), 'px'),
            margin: '0 auto',
            overflow: 'hidden',
            direction: u ? 'rtl' : 'ltr',
          }}
        >
          <div
            className={'omlms-templates-slider'}
            style={{
              display: 'flex',
              transform: 'translateX('.concat(s, 'px)'),
              transition: 'transform 0.5s ease-in-out',
              width: ''.concat(326 * i - 16, 'px'),
            }}
          >
            {t.map(function (e, t) {
              return (
                <div
                  key={e.id || t}
                  className={'omlms-template-item-wrapper'}
                  style={{
                    minWidth: ''.concat(310, 'px'),
                    width: ''.concat(310, 'px'),
                    marginRight: ''.concat(t === i - 1 ? 0 : 16, 'px'),
                  }}
                >
                  <MemoPromptTemplateCard template={e} onEdit={r} />
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  };
}
