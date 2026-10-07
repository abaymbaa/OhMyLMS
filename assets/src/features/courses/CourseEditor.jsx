import { createElement, Fragment, useEffect } from '@wordpress/element';
import { useCourseEditor } from './useCourseEditor';
import { useCourseIntegrations } from './useCourseIntegrations';
import { courseEditPath } from './model.mjs';

/** Course orchestration with the existing controls, routes and data store. */
export function createCourseEditor(readRuntime) {
  return function CourseEditor({ courseId = null, enableSpin = false }) {
    const r = readRuntime();
    const {
      I: Controls,
      oz: Toolbar,
      Sf: Curriculum,
      MH: Settings,
      JH: Preview,
      GH: Funnel,
      Bf: Community,
      ZD: AutomationDialog,
      TW: IntegrationDialog,
      qt: Visibility,
    } = r;
    const { step = 'content' } = r.f.g();
    const navigate = r.f.Zp();
    const { totalSteps } = r.JW();
    const editor = useCourseEditor({
      store: r.T.default,
      courseId,
      enableSpin,
    });
    const dialogs = useCourseIntegrations({
      actions: editor.actions,
      enableSpin,
    });
    const { contextHolder, openNotificationWithIcon } = r.z.A();
    const course = editor.course;
    const syllabusContent = !editor.loading && course?.syllabus_id > 0;
    useEffect(() => {
      if (syllabusContent)
        navigate(`${courseEditPath(course)}${step === 'content' ? '' : '?view=settings'}`, {
          replace: true,
        });
    }, [syllabusContent, course?.id, course?.syllabus_id, step, navigate]);
    useEffect(() => {
      const previous = document.body.style.background;
      document.body.style.background = '#FFFFFF';
      return () => {
        document.body.style.background = previous;
      };
    }, []);
    useEffect(() => {
      if (!editor.loading && editor.notice)
        openNotificationWithIcon(editor.noticeStatus, editor.notice);
    }, [editor.notice]);
    const setActiveStep = (next) => navigate(`/course-edit/${courseId}/${next}`);
    const noop = () => {};
    async function uploadMedia(media, type) {
      if (type === 'video')
        editor.actions.setCourse({
          video_id: media.id,
          video_src: media.url,
        });
      else
        editor.actions.setCourse({
          thumbnail_id: media.id,
          image_src: media.url ?? media.source_url,
        });
      await editor.actions.setFeaturedImage(courseId, media, type === 'video' ? 'video' : 'image');
    }
    return (
      <Fragment>
        {contextHolder}
        <div className={`ohmylms-course-builder-wrapper ohmylms-steps-${totalSteps}`}>
          <Toolbar
            activeStep={step}
            setActiveStep={setActiveStep}
            courseId={courseId}
            handleAutomation={dialogs.openAutomation}
            handleIntegration={dialogs.openIntegration}
            courseDescription={course?.description || ''}
            setLocalCourse={(value) =>
              editor.updateDescription(typeof value === 'string' ? value : value.description || '')
            }
            loading={editor.loading || editor.saving}
            courseName={course?.name}
            onSave={editor.save}
            isCommunityEnabled={editor.integrations?.community?.is_enable}
          />
          {editor.error && (
            <p role="alert" className="ohmylms-course-save-error">
              {editor.error}
            </p>
          )}
          <div
            className="ohmylms-course-builder-content"
            aria-busy={editor.loading || editor.saving}
          >
            {editor.loading || syllabusContent ? (
              <Controls.SkeletonWP active rows={10} />
            ) : course ? (
              <Fragment>
                {step === 'content' ? (
                  <Curriculum
                    handleAutomation={dialogs.openAutomation}
                    handleIntegration={dialogs.openIntegration}
                    courseId={courseId}
                    setIsSaved={noop}
                    setAutoSave={editor.setAutoSave}
                    setActiveStep={setActiveStep}
                    activeStep={step}
                    completedSteps={editor.completedSteps}
                    setCompletedSteps={noop}
                    onSave={editor.save}
                    courseDescription={course.description || ''}
                    handleInputChange={editor.updateTitle}
                    onContentChange={editor.updateDescription}
                    handleRemoveMedia={(type) => editor.actions.removeFeaturedImage(courseId, type)}
                    handleUploadComplete={uploadMedia}
                    hasMedia={Boolean(course.image_src || course.video_src)}
                    loading={editor.loading}
                  />
                ) : step === 'settings' ? (
                  <Visibility isVisible>
                    <Settings
                      setActiveStep={setActiveStep}
                      activeStep={step}
                      onSave={editor.save}
                    />
                  </Visibility>
                ) : step === 'community' ? (
                  <Visibility isVisible>
                    <Community
                      isCommunityEnabled={course.has_community}
                      courseId={courseId}
                      course={course}
                      onToggleCommunity={editor.toggleCommunity}
                      onUpdateCourse={editor.actions.setCourse}
                    />
                  </Visibility>
                ) : step === 'funnel' ? (
                  <Visibility isVisible>
                    <Funnel setActiveStep={setActiveStep} activeStep={step} onSave={editor.save} />
                  </Visibility>
                ) : (
                  <Visibility isVisible={step === 'preview'}>
                    <Preview completedSteps={editor.completedSteps} onSave={editor.save} />
                  </Visibility>
                )}
              </Fragment>
            ) : null}
          </div>
        </div>
        {dialogs.automation && (
          <AutomationDialog
            isOpen
            onClose={dialogs.closeAutomation}
            automationFor={dialogs.automation.forWhat}
            contentId={dialogs.automation.contentId}
            contentName={dialogs.automation.contentName}
          />
        )}
        {dialogs.integration && (
          <IntegrationDialog
            isOpen
            onClose={dialogs.closeIntegration}
            integrationFor={dialogs.integration.forWhat}
            contentId={dialogs.integration.contentId}
            contentName={dialogs.integration.contentName}
          />
        )}
      </Fragment>
    );
  };
}
