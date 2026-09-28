/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAiPreviewActions(readRuntime) {
  return function AiPreviewActions(props) {
    const { I: Controls, Oae, React, b: I18n, kae: AiAcceptIcon, pG } = readRuntime();
    var t = props.onEdit,
      n = props.onAccept,
      r = props.onRegenerate,
      a = props.isLoading;
    return (
      <React.Fragment>
        <Controls.FlexWP align={'center'} justify={'center'} gap={1}>
          <Controls.ButtonWP
            onClick={t}
            icon={<pG.A width={'12'} height={'12'} />}
            variant={'outline'}
            disabled={a}
          >
            {(0, I18n.__)('Edit Prompt', 'ohmylms')}
          </Controls.ButtonWP>
          <Controls.ButtonWP
            onClick={r}
            icon={<Oae.A />}
            variant={'outline'}
            style={{
              marginLeft: 'auto',
            }}
            disabled={a}
          >
            {(0, I18n.__)('Regenerate Outline', 'ohmylms')}
          </Controls.ButtonWP>
          <Controls.ButtonWP onClick={n} icon={<AiAcceptIcon />} variant={'primary'} isBusy={a}>
            {(0, I18n.__)('Accept Outline', 'ohmylms')}
          </Controls.ButtonWP>
        </Controls.FlexWP>
      </React.Fragment>
    );
  };
}
