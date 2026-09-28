/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createPromptTemplateToggleIcon(readRuntime) {
  return function PromptTemplateToggleIcon(props) {
    const { React } = readRuntime();
    var t = props.rotate,
      n = void 0 === t ? '0' : t;
    return (
      <svg
        className={'omlms-back-arrow-btn-icon'}
        style={{
          transform: 'rotate('.concat(n, 'deg)'),
        }}
        fill={'none'}
        width={'16'}
        height={'14'}
        viewBox={'0 0 16 14'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path
          fill={'currentColor'}
          d={'M11.99 8.111L8.002 4.693 4.014 8.111l.976 1.14 3.012-2.582 3.012 2.581.976-1.139z'}
        />
      </svg>
    );
  };
}
