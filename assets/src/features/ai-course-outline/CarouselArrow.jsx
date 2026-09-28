/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createCarouselArrow(readRuntime) {
  return function CarouselArrow(props) {
    const { React } = readRuntime();
    var t = props.direction,
      n = 'left' === (void 0 === t ? 'left' : t) ? 'M9.4 11.4l-4-4 4-4' : 'M6.6 2.6l4 4-4 4';
    return (
      <svg
        width={'16'}
        height={'16'}
        viewBox={'0 0 16 16'}
        fill={'none'}
        xmlns={'http://www.w3.org/2000/svg'}
        style={{
          display: 'block',
        }}
      >
        <path
          d={n}
          stroke={'currentColor'}
          strokeWidth={'1.5'}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
        />
      </svg>
    );
  };
}
