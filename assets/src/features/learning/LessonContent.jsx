/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
import { LessonBlockWorkspace } from './LessonBlockWorkspace';
function createBuiltinLessonContent( readRuntime ) {
	return function LessonContent( props ) {
		const { Pr: LearningContentForm, React, b: I18n } = readRuntime();
		var t,
			lesson = props.lesson,
			handleInputChange = props.handleInputChange,
			handleEditorContentChange = props.handleEditorContentChange,
			handleUploadComplete = props.handleUploadComplete,
			handleRemoveMedia = props.handleRemoveMedia,
			chapterId = props.chapterId,
			onExternalUploadComplete = props.onExternalUploadComplete;
		return (
			<LessonBlockWorkspace
				key={ lesson?.id }
				lesson={ lesson || {} }
				onTitleChange={ handleInputChange }
				onContentChange={ handleEditorContentChange }
				settings={ props.settings }
				customContent={ props.customContent }
				media={
					<LearningContentForm
						mediaOnly
						titleValue={
							null !==
								( t =
									null == lesson ? void 0 : lesson.title ) &&
							void 0 !== t
								? t
								: null == lesson
									? void 0
									: lesson.name
						}
						imageSrc={ null == lesson ? void 0 : lesson.image_src }
						videoSrc={
							null != lesson && lesson.video_id
								? null == lesson
									? void 0
									: lesson.video_src
								: 'video' ===
									  ( null == lesson ? void 0 : lesson.type )
									? null == lesson
										? void 0
										: lesson.external_url
									: ''
						}
						audioSrc={
							null != lesson && lesson.audio_id
								? null == lesson
									? void 0
									: lesson.audio_src
								: 'audio' ===
									  ( null == lesson ? void 0 : lesson.type )
									? null == lesson
										? void 0
										: lesson.external_url
									: ''
						}
						titlePlaceholder={ ( 0, I18n.__ )(
							'Enter lesson title',
							'ohmylms'
						) }
						titleName={ 'name' }
						descriptionPlaceholder={ ( 0, I18n.__ )(
							'Enter lesson description...',
							'ohmylms'
						) }
						content={ null == lesson ? void 0 : lesson.description }
						onInputChange={ handleInputChange }
						onContentChange={ handleEditorContentChange }
						onUploadComplete={ handleUploadComplete }
						onRemoveMedia={ handleRemoveMedia }
						align={ 'left' }
						mediaType={
							'text' === ( null == lesson ? void 0 : lesson.type )
								? 'image'
								: null == lesson
									? void 0
									: lesson.type
						}
						mediaId={
							'audio' ===
							( null == lesson ? void 0 : lesson.type )
								? null == lesson
									? void 0
									: lesson.audio_id
								: null == lesson
									? void 0
									: lesson.video_id
						}
						onExternalUploadComplete={ onExternalUploadComplete }
						chapterId={ chapterId }
						autofocus={ ! 1 }
						editorFor={ 'lesson' }
					/>
				}
			/>
		);
	};
}

export function createLessonContent( readRuntime ) {
	const BuiltinLessonContent = createBuiltinLessonContent( readRuntime );
	return function LessonContent( props ) {
		return createElement( BuiltinLessonContent, {
			...props,
			customContent: window.ohmylms.extensions.lessonEditor(
				props,
				null
			),
		} );
	};
}
