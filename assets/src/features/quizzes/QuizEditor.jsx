import { createElement, Fragment, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useQuizEditor } from './useQuizEditor';

/** Named React editor; the bridge retains existing controls, routes and store. */
export function createQuizEditor(readRuntime) {
  function registerTypes() {
    const r = readRuntime();
    [r.Gs, r.Qs, r.nd, r.yd, r.Rd, r.Od, r.zd].forEach(r.bm);
    [r.rm, r.ym].forEach(r._m);
    window.ohmylms.extensions.questionTypes(r.T.default).forEach(r.bm);
  }
  return function QuizEditor({ chapterId, isSettingsOpen, setIsSettingsOpen }) {
    const runtime = readRuntime();
    const {
      I: Controls,
      D: { A: Button },
      W: { A: RichText },
      Wr: PageHeader,
      Yc: QuestionList,
      Nu: QuestionCanvas,
      _s: QuestionSettings,
      np: QuizSettings,
      _: { A: Skeleton },
      Br: PreviewIcon,
      za: ResultIcon,
      Rt: SettingsIcon,
      Ge: decodeTitle,
    } = runtime;
    const route = runtime.f.g();
    const navigate = runtime.f.Zp();
    const { contextHolder, openNotificationWithIcon } = runtime.z.A();
    const [hovered, setHovered] = useState(false);
    const editor = useQuizEditor({
      store: runtime.T.default,
      chapterId,
      validate: runtime.Ec.$,
      registerTypes,
    });
    useEffect(() => {
      if (!editor.loading && editor.notice)
        openNotificationWithIcon(editor.noticeStatus, editor.notice);
    }, [editor.notice]);
    function openSettings() {
      if (editor.validateCurrentQuestion()) setIsSettingsOpen(true);
    }
    return (
      <Fragment>
        {!chapterId && contextHolder}
        {!chapterId && (
          <PageHeader
            title={__('Quiz Outline', 'ohmylms')}
            redirection="/quizzes"
            className="ohmylms-quiz-header"
            rightContent={
              <Fragment>
                <Button
                  variant="secondary"
                  onClick={() => navigate(`/quiz-report/${route.id}`)}
                  icon={<ResultIcon />}
                >
                  {__('Result', 'ohmylms')}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    if (editor.quiz?.preview_url) window.open(editor.quiz.preview_url, '_blank');
                  }}
                  icon={<PreviewIcon />}
                >
                  {__('Preview', 'ohmylms')}
                </Button>
                <Button variant="primary" onClick={editor.save} isBusy={editor.saving}>
                  {__('Save', 'ohmylms')}
                </Button>
                <Button
                  variant="tertiary"
                  onClick={openSettings}
                  icon={<SettingsIcon />}
                  className="ohmylms-quize-settings-btn"
                />
              </Fragment>
            }
          />
        )}
        {editor.error && <p role="alert">{editor.error}</p>}
        {editor.loading ? (
          <Skeleton active paragraph={{ rows: 5 }} />
        ) : isSettingsOpen ? (
          <QuizSettings setIsSettingsOpen={setIsSettingsOpen} chapterId={chapterId} />
        ) : (
          <Controls.CardWP isBorderless variant="secondary">
            <Controls.SpacerWP marginBottom={0} padding={6} marginTop={4}>
              <div className="ohmylms-quiz-editor-header">
                <Controls.InputWP
                  value={editor.quiz?.name === 'Untitled' ? '' : decodeTitle(editor.quiz?.name)}
                  onChange={(value) => editor.updateField('name', value)}
                  placeholder={__('Enter Quiz Title', 'ohmylms')}
                  name="chapterName"
                  className="ohmylms-quiz-name-title"
                  autoComplete="off"
                />
                <Controls.SpacerWP />
                <RichText
                  value={editor.quiz?.description || ''}
                  onChange={(value) => editor.updateField('description', value)}
                  placeholder={__('Add Quiz description ...', 'ohmylms')}
                  className="ohmylms-quiz-description"
                  name="descriptionName"
                  rows={3}
                />
              </div>
              <Controls.CardWP isBorderless>
                <Controls.SpacerWP>
                  <Controls.FlexWP align="stretch" justify="flex-start" gap={0}>
                    <Controls.FlexItemWP flex={1}>
                      <QuestionList />
                    </Controls.FlexItemWP>
                    <Controls.FlexItemWP flex={2}>
                      <QuestionCanvas chapterId={chapterId} setHovered={setHovered} />
                    </Controls.FlexItemWP>
                    <Controls.FlexItemWP
                      flex={1}
                      className={`ohmylms-editor-sider ohmylms-editor-right ${hovered ? 'ohmylms-editor-right-hovered' : ''}`}
                      style={{ borderLeft: '1px solid #EBEBEF' }}
                    >
                      <QuestionSettings chapterId={chapterId} setHovered={setHovered} />
                    </Controls.FlexItemWP>
                  </Controls.FlexWP>
                </Controls.SpacerWP>
              </Controls.CardWP>
            </Controls.SpacerWP>
          </Controls.CardWP>
        )}
      </Fragment>
    );
  };
}
