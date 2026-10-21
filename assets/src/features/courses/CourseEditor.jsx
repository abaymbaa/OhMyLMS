/** @jsx createElement */
import { createElement, Fragment, useEffect } from '@wordpress/element';
import { useCourseEditor } from './useCourseEditor';
import { useCourseIntegrations } from './useCourseIntegrations';
import { courseEditPath, orderedChapters } from './model.mjs';
import { CourseObjectives } from './CourseObjectives';
import { CourseSaveStatus } from './CourseSaveStatus';
import { CourseContentTools } from './CourseContentTools';
import { CourseReadiness } from './CourseReadiness';

/**
 * Course orchestration with the existing controls, routes and data store.
 * @param readRuntime
 */
export function createCourseEditor( readRuntime ) {
	return function CourseEditor( { courseId = null, enableSpin = false } ) {
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
		const editor = useCourseEditor( {
			store: r.T.default,
			courseId,
			enableSpin,
		} );
		const dialogs = useCourseIntegrations( {
			actions: editor.actions,
			enableSpin,
		} );
		const { contextHolder, openNotificationWithIcon } = r.z.A();
		const course = editor.course;
		const syllabusContent = ! editor.loading && course?.syllabus_id > 0;
		useEffect( () => {
			if ( syllabusContent ) {
				navigate(
					`${ courseEditPath( course ) }${ step === 'content' ? '' : '?view=settings' }`,
					{
						replace: true,
					}
				);
			}
		}, [
			syllabusContent,
			course?.id,
			course?.syllabus_id,
			step,
			navigate,
		] );
		useEffect( () => {
			const previous = document.body.style.background;
			document.body.style.background = '#FFFFFF';
			return () => {
				document.body.style.background = previous;
			};
		}, [] );
		useEffect( () => {
			if ( ! editor.loading && editor.notice ) {
				openNotificationWithIcon( editor.noticeStatus, editor.notice );
			}
		}, [ editor.notice ] );
		const setActiveStep = ( next ) =>
			navigate( `/course-edit/${ courseId }/${ next }` );
		const noop = () => {};
		async function uploadMedia( media, type ) {
			if ( type === 'video' ) {
				editor.actions.setCourse( {
					video_id: media.id,
					video_src: media.url,
				} );
			} else {
				editor.actions.setCourse( {
					thumbnail_id: media.id,
					image_src: media.url ?? media.source_url,
				} );
			}
			await editor.actions.setFeaturedImage(
				courseId,
				media,
				type === 'video' ? 'video' : 'image'
			);
		}
		return (
			<Fragment>
				{ contextHolder }
				<div
					className={ `ohmylms-course-builder-wrapper ohmylms-steps-${ totalSteps }` }
					// Leaving a course that was never touched removes it again; the server checks it is truly blank.
					onClickCapture={ ( event ) => {
						if (
							event.target.closest?.(
								'.ohmylms-back-button-wrapper'
							) &&
							! editor.dirty &&
							! editor.saving &&
							course?.status === 'draft' &&
							[ 'Untitled', 'Untitled Course' ].includes(
								course?.name
							) &&
							! ( course?.description || '' ).trim()
						) {
							window.wp
								.apiFetch( {
									path: `/ohmylms/v1/courses/${ courseId }/discard-if-blank`,
									method: 'POST',
								} )
								.catch( () => {} );
						}
					} }
					// A name still holding its "Untitled" default is selected on focus, so typing replaces it.
					onFocusCapture={ ( event ) => {
						const field = event.target;
						if (
							field.matches?.(
								'input[type="text"], input:not([type]), textarea'
							) &&
							[ 'Untitled', 'Untitled Course' ].includes(
								field.value
							)
						) {
							field.select();
						}
					} }
				>
					<Toolbar
						activeStep={ step }
						setActiveStep={ setActiveStep }
						courseId={ courseId }
						handleAutomation={ dialogs.openAutomation }
						handleIntegration={ dialogs.openIntegration }
						courseDescription={ course?.description || '' }
						setLocalCourse={ ( value ) =>
							editor.updateDescription(
								typeof value === 'string'
									? value
									: value.description || ''
							)
						}
						loading={ editor.loading || editor.saving }
						courseName={ course?.name }
						onSave={ editor.save }
						isCommunityEnabled={
							editor.integrations?.community?.is_enable
						}
					/>
					{ editor.error && (
						<p role="alert" className="ohmylms-course-save-error">
							{ editor.error }
						</p>
					) }
					{ ! editor.loading && course && (
						<CourseSaveStatus
							dirty={ editor.dirty }
							saving={ editor.saving }
							savedAt={ editor.savedAt }
							status={ course.status }
							onSave={ editor.save }
						/>
					) }
					<div
						className="ohmylms-course-builder-content"
						aria-busy={ editor.loading || editor.saving }
					>
						{ ( () => {
							if ( editor.loading || syllabusContent ) {
								return (
									<Controls.SkeletonWP active rows={ 10 } />
								);
							}
							if ( course ) {
								return (
									<Fragment>
										{ ( () => {
											if ( step === 'content' ) {
												return (
													<Fragment>
														<Curriculum
															objectivesPanel={
																<Fragment>
																	<CourseObjectives
																		key={
																			courseId
																		}
																		courseId={
																			courseId
																		}
																	/>
																	<CourseReadiness
																		courseId={
																			courseId
																		}
																	/>
																	<CourseContentTools
																		courseId={
																			courseId
																		}
																		units={ orderedChapters(
																			editor.chapters
																		).map(
																			(
																				chapter
																			) => ( {
																				id: chapter.id,
																				name:
																					chapter.name ||
																					chapter.title,
																			} )
																		) }
																		actions={
																			editor.actions
																		}
																	/>
																</Fragment>
															}
															handleAutomation={
																dialogs.openAutomation
															}
															handleIntegration={
																dialogs.openIntegration
															}
															courseId={
																courseId
															}
															setIsSaved={ noop }
															setAutoSave={
																editor.setAutoSave
															}
															setActiveStep={
																setActiveStep
															}
															activeStep={ step }
															completedSteps={
																editor.completedSteps
															}
															setCompletedSteps={
																noop
															}
															onSave={
																editor.save
															}
															courseDescription={
																course.description ||
																''
															}
															handleInputChange={
																editor.updateTitle
															}
															onContentChange={
																editor.updateDescription
															}
															handleRemoveMedia={ (
																type
															) =>
																editor.actions.removeFeaturedImage(
																	courseId,
																	type
																)
															}
															handleUploadComplete={
																uploadMedia
															}
															hasMedia={ Boolean(
																course.image_src ||
																course.video_src
															) }
															loading={
																editor.loading
															}
														/>
													</Fragment>
												);
											}
											if ( step === 'settings' ) {
												return (
													<Visibility isVisible>
														<Settings
															setActiveStep={
																setActiveStep
															}
															activeStep={ step }
															onSave={
																editor.save
															}
														/>
													</Visibility>
												);
											}
											return ( () => {
												if ( step === 'community' ) {
													return (
														<Visibility isVisible>
															<Community
																isCommunityEnabled={
																	course.has_community
																}
																courseId={
																	courseId
																}
																course={
																	course
																}
																onToggleCommunity={
																	editor.toggleCommunity
																}
																onUpdateCourse={
																	editor
																		.actions
																		.setCourse
																}
															/>
														</Visibility>
													);
												}
												if ( step === 'funnel' ) {
													return (
														<Visibility isVisible>
															<Funnel
																setActiveStep={
																	setActiveStep
																}
																activeStep={
																	step
																}
																onSave={
																	editor.save
																}
															/>
														</Visibility>
													);
												}
												return (
													<Visibility
														isVisible={
															step === 'preview'
														}
													>
														<Preview
															completedSteps={
																editor.completedSteps
															}
															onSave={
																editor.save
															}
														/>
													</Visibility>
												);
											} )();
										} )() }
									</Fragment>
								);
							}
							return null;
						} )() }
					</div>
				</div>
				{ dialogs.automation && (
					<AutomationDialog
						isOpen
						onClose={ dialogs.closeAutomation }
						automationFor={ dialogs.automation.forWhat }
						contentId={ dialogs.automation.contentId }
						contentName={ dialogs.automation.contentName }
					/>
				) }
				{ dialogs.integration && (
					<IntegrationDialog
						isOpen
						onClose={ dialogs.closeIntegration }
						integrationFor={ dialogs.integration.forWhat }
						contentId={ dialogs.integration.contentId }
						contentName={ dialogs.integration.contentName }
					/>
				) }
			</Fragment>
		);
	};
}
