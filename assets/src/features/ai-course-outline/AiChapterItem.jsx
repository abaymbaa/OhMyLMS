/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAiChapterItem(readRuntime) {
  return function AiChapterItem(props) {
    const { I: Controls, React } = readRuntime();
    var t = props.data,
      n = props.index,
      r = props.isActive,
      a = props.onClick,
      o = {
        border: '1px solid '.concat(r ? '#6E42D3' : 'transparent'),
        borderRadius: '2px',
        padding: '8px',
        width: '100%',
        cursor: 'pointer',
      };
    return (
      <React.Fragment>
        <Controls.TextWP
          as={'p'}
          size={12}
          color={r ? '#6E42D3' : '#000D25'}
          wight={500}
          style={o}
          onClick={function () {
            a(t, n);
          }}
        >
          {null == t ? void 0 : t.title}
        </Controls.TextWP>
      </React.Fragment>
    );
  };
}
