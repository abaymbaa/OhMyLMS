/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAiOutlineItem(readRuntime) {
  return function AiOutlineItem(props) {
    const { Ee, I: Controls, React, b: I18n, ce } = readRuntime();
    var t = props.title,
      n = props.type,
      r = Ee(n);
    return (
      <React.Fragment>
        <Controls.CardWP
          padding={'10px 18px'}
          isBorderless={!0}
          style={{
            border: '1px solid #C8D2E980',
          }}
          borderRadius={'2px'}
          fullWidth={!0}
        >
          <Controls.FlexWP justify={'flex-start'} gap={2.5} align={'flex-start'}>
            <Controls.TextWP
              color={'#7A8B9A'}
              style={{
                width: '17px',
                position: 'relative',
                top: '4px',
              }}
            >
              {r ? React.createElement(r, null) : React.createElement(ce, null)}
            </Controls.TextWP>
            <Controls.HeadingWP
              level={5}
              style={{
                width: '100%',
              }}
            >
              {t}
              {n && (
                <Controls.BadgeWP
                  isBorderLess={!0}
                  variant={'secondary'}
                  color={'var(--omlms-primary-color)'}
                  style={{
                    marginInlineStart: '10px',
                  }}
                >
                  {(function (e) {
                    switch (e) {
                      case 'quiz':
                        return (0, I18n.__)('Quiz', 'ohmylms');
                      case 'assignment':
                        return (0, I18n.__)('Assignment', 'ohmylms');
                      default:
                        return (0, I18n.__)('Lesson', 'ohmylms');
                    }
                  })(n)}
                </Controls.BadgeWP>
              )}
            </Controls.HeadingWP>
          </Controls.FlexWP>
        </Controls.CardWP>
      </React.Fragment>
    );
  };
}
