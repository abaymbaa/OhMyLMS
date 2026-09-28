/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAiLessonList(readRuntime) {
  return function AiLessonList(props) {
    const { I: Controls, React, b: I18n, hae: MemoAiOutlineItem } = readRuntime();
    var t = props.data,
      n = void 0 === t ? [] : t;
    return (
      <React.Fragment>
        <Controls.CardWP
          fullHeight={!0}
          isBorderless={!0}
          padding={'8px'}
          borderRadius={'0'}
          style={{
            overflow: 'auto',
            maxHeight: 'calc(100vh - 500px)',
            background: 'transparent',
          }}
        >
          <Controls.FlexWP align={'flex-start'} justify={'flex-start'} direction={'column'} gap={2}>
            <Controls.TextWP
              as={'p'}
              size={11}
              color={'#7A8B9A'}
              wight={500}
              style={{
                textTransform: 'uppercase',
                padding: '8px 0',
              }}
            >
              {(0, I18n.__)('Lesson names', 'ohmylms')}
            </Controls.TextWP>
            {null == n
              ? void 0
              : n.map(function (e, t) {
                  return (
                    <MemoAiOutlineItem
                      key={t}
                      title={null == e ? void 0 : e.title}
                      type={null == e ? void 0 : e.type}
                    />
                  );
                })}
          </Controls.FlexWP>
        </Controls.CardWP>
      </React.Fragment>
    );
  };
}
