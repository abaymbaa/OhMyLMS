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
							assignment === null || assignment === void 0
								? void 0
								: assignment.name
						}
						imageSrc={
							assignment === null || assignment === void 0
								? void 0
								: assignment.image_src
						}
						videoSrc={ ( () => {
							if (
								assignment !== null &&
								assignment !== void 0 &&
								assignment.video_id
							) {
								if (
									assignment === null ||
									assignment === void 0
								) {
									return void 0;
								}
								return assignment.video_src;
							}
							return ( () => {
								if (
									'video' ==
									( assignment === null ||
									assignment === void 0
										? void 0
										: assignment.type )
								) {
									if (
										assignment === null ||
										assignment === void 0
									) {
										return void 0;
									}
									return assignment.external_url;
								}
								return '';
							} )();
						} )() }
						audioSrc={ ( () => {
							if (
								assignment !== null &&
								assignment !== void 0 &&
								assignment.audio_id
							) {
								if (
									assignment === null ||
									assignment === void 0
								) {
									return void 0;
								}
								return assignment.audio_src;
							}
							return ( () => {
								if (
									'audio' ==
									( assignment === null ||
									assignment === void 0
										? void 0
										: assignment.type )
								) {
									if (
										assignment === null ||
										assignment === void 0
									) {
										return void 0;
									}
									return assignment.external_url;
								}
								return '';
							} )();
						} )() }
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
							assignment === null || assignment === void 0
								? void 0
								: assignment.description
						}
						onInputChange={ handleInputChange }
						onContentChange={ handleEditorContentChange }
						onUploadComplete={ handleUploadComplete }
						onRemoveMedia={ handleRemoveMedia }
						align={ 'left' }
						mediaType={ ( () => {
							if (
								'text' ==
								( assignment === null || assignment === void 0
									? void 0
									: assignment.type )
							) {
								return 'image_video';
							}
							if (
								assignment === null ||
								assignment === void 0
							) {
								return void 0;
							}
							return assignment.type;
						} )() }
						mediaId={ ( () => {
							if (
								'audio' ==
								( assignment === null || assignment === void 0
									? void 0
									: assignment.type )
							) {
								if (
									assignment === null ||
									assignment === void 0
								) {
									return void 0;
								}
								return assignment.audio_id;
							}
							if (
								assignment === null ||
								assignment === void 0
							) {
								return void 0;
							}
							return assignment.video_id;
						} )() }
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
