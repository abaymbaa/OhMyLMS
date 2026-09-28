/**
 * OrderGeneral component (replaces recovered binding PQ).
 * Displays order general information (assigned student details).
 */
import { createElement } from '@wordpress/element';

export function createOrderGeneral(readRuntime) {
  return function OrderGeneral({ student_name, student_email, student_id }) {
    const { I: Controls, React, b: I18n } = readRuntime();

    return (
      <React.Fragment>
        <Controls.HeadingWP level={4} size={18} weight={500} color="#000D25">
          {I18n.__('General', 'ohmylms')}
        </Controls.HeadingWP>
        <div layout="horizontal">
          <Controls.SpacerWP marginBottom={4} />
          <Controls.FlexWP gap={3} align="center" justify="flex-start">
            <Controls.TextWP
              as="p"
              size={14}
              weight={500}
              color="#000D21"
              style={{ width: '100px' }}
            >
              {I18n.__('Student: ', 'ohmylms')}
            </Controls.TextWP>
            <Controls.FlexWP
              align="center"
              justify="flex-start"
              gap={2}
              style={{ width: 'calc(100% - 112px)' }}
            >
              <Controls.FlexItemWP style={{ width: 'calc(100% - 53px)' }}>
                <Controls.TextWP as="p" size={14} weight={500} color="#000D21">
                  {student_name && student_id && student_email
                    ? `${student_name} (#${student_id} – ${student_email})`
                    : I18n.__('No student assigned', 'ohmylms')}
                </Controls.TextWP>
              </Controls.FlexItemWP>
            </Controls.FlexWP>
          </Controls.FlexWP>
        </div>
      </React.Fragment>
    );
  };
}
