/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAssignmentContent( readRuntime ) {
	return function AssignmentContent( props ) {
		const {
			I: Controls,
			Pr: LearningContentForm,
			React,
			b: I18n,
		} = readRuntime();
		const assignment = props.assignment,
			handleInputChange = props.handleInputChange,
			handleEditorContentChange = props.handleEditorContentChange,
			handleUploadComplete = props.handleUploadComplete,
			handleRemoveMedia = props.handleRemoveMedia,
			chapterId = props.chapterId,
			onExternalUploadComplete = props.onExternalUploadComplete;
		return (
			<Controls.CardWP fullHeight={ ! 0 } isBorderless={ ! 0 }>
				<Controls.SpacerWP padding={ 4 }>
					<LearningContentForm
						titleValue={
							null == assignment ? void 0 : assignment.name
						}
						imageSrc={
							null == assignment ? void 0 : assignment.image_src
						}
						videoSrc={
							null != assignment && assignment.video_id
								? null == assignment
									? void 0
									: assignment.video_src
								: 'video' ==
									  ( null == assignment
											? void 0
											: assignment.type )
									? null == assignment
										? void 0
										: assignment.external_url
									: ''
						}
						audioSrc={
							null != assignment && assignment.audio_id
								? null == assignment
									? void 0
									: assignment.audio_src
								: 'audio' ==
									  ( null == assignment
											? void 0
											: assignment.type )
									? null == assignment
										? void 0
										: assignment.external_url
									: ''
						}
						titlePlaceholder={ ( 0, I18n.__ )(
							'Enter assignment title',
							'ohmylms'
						) }
						titleName={ 'name' }
						descriptionPlaceholder={ ( 0, I18n.__ )(
							'Enter assignment description...',
							'ohmylms'
						) }
						content={
							null == assignment ? void 0 : assignment.description
						}
						onInputChange={ handleInputChange }
						onContentChange={ handleEditorContentChange }
						onUploadComplete={ handleUploadComplete }
						onRemoveMedia={ handleRemoveMedia }
						align={ 'left' }
						mediaType={
							'text' ==
							( null == assignment ? void 0 : assignment.type )
								? 'image_video'
								: null == assignment
									? void 0
									: assignment.type
						}
						mediaId={
							'audio' ==
							( null == assignment ? void 0 : assignment.type )
								? null == assignment
									? void 0
									: assignment.audio_id
								: null == assignment
									? void 0
									: assignment.video_id
						}
						onExternalUploadComplete={ onExternalUploadComplete }
						chapterId={ chapterId }
						autofocus={ ! 1 }
						editorFor={ 'assignment' }
					/>
				</Controls.SpacerWP>
			</Controls.CardWP>
		);
	};
}
