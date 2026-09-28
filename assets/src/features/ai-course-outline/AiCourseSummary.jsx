/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAiCourseSummary(readRuntime) {
  return function AiCourseSummary(props) {
    const { I: Controls, React, b: I18n } = readRuntime();
    var t = props.title,
      n = props.description;
    return (
      <React.Fragment>
        <Controls.FlexWP
          align={'center'}
          justify={'center'}
          gap={3}
          direction={'column'}
          style={{
            maxHeight: '100px',
            overflow: 'auto',
          }}
        >
          <Controls.HeadingWP as={'h2'} size={20} lineHeight={1.33} align={'center'}>
            {t && (0, I18n.__)('Course title: ', 'ohmylms')} {t}
          </Controls.HeadingWP>
          <Controls.TextWP
            as={'p'}
            color={'#7A8B9A'}
            size={14}
            lineHeight={1.57}
            align={'center'}
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {n}
          </Controls.TextWP>
        </Controls.FlexWP>
      </React.Fragment>
    );
  };
}
