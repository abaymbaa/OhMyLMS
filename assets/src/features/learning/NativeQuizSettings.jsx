/** @jsx createElement */
import {
	createElement,
	createPortal,
	useEffect,
	useState,
} from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Keep the player preview visible when the document sidebar is closed.
 * Core has no public SlotFill for an arbitrary header action, so scope this
 * portal to its settings container; the sidebar link remains the fallback.
 *
 * @return {Element|null} Quiz preview action.
 */
function QuizPreviewAction() {
	const [ container, setContainer ] = useState( null );
	useEffect( () => {
		const host = document.createElement( 'span' );
		host.className = 'ohmylms-quiz-preview-action';
		const attach = () => {
			const header = document.querySelector(
				'.editor-header__settings, .edit-post-header__settings'
			);
			if ( header && host.parentElement !== header ) {
				header.prepend( host );
				setContainer( host );
			}
		};
		const observer = new MutationObserver( attach );
		observer.observe( document.body, { childList: true, subtree: true } );
		attach();
		return () => {
			observer.disconnect();
			host.remove();
		};
	}, [] );
	return container
		? createPortal(
				<Button
					variant="secondary"
					href={ window.ohmylmsNativeLesson.previewUrl }
					target="_blank"
					rel="noopener noreferrer"
					title={ __(
						'Preview the saved quiz in the quiz player',
						'ohmylms'
					) }
				>
					{ __( 'Preview quiz', 'ohmylms' ) }
				</Button>,
				container
			)
		: null;
}

/**
 * Keep native Gutenberg controls and provide the existing quiz settings and player preview.
 * @return {Element|null} Native quiz sidebar.
 */
function NativeQuizSettings() {
	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);
	if ( postType !== 'ohmylms-quiz' ) {
		return null;
	}
	return (
		<>
			<QuizPreviewAction />
			<PluginDocumentSettingPanel
				name="ohmylms-native-quiz"
				title={ __( 'Quiz authoring', 'ohmylms' ) }
				initialOpen
			>
				<p>
					{ __(
						'Use the block inserter to add paragraphs, headings, images and OhMyLMS Multiple Choice questions. Save each question, then save the quiz. Drag question blocks or use Gutenberg’s move controls to set their order.',
						'ohmylms'
					) }
				</p>
				<p>
					{ __(
						'Publishing uses the existing versioned quiz engine. Learner attempts and skill evidence stay with the quiz.',
						'ohmylms'
					) }
				</p>
				<Button
					variant="secondary"
					href={ window.ohmylmsNativeLesson.previewUrl }
					target="_blank"
					rel="noopener noreferrer"
				>
					{ __( 'Preview saved quiz', 'ohmylms' ) }
				</Button>
				<p>
					<Button
						variant="link"
						href={ window.ohmylmsNativeLesson.returnUrl }
					>
						{ __( 'Current quiz editor and settings', 'ohmylms' ) }
					</Button>
				</p>
			</PluginDocumentSettingPanel>
		</>
	);
}

registerPlugin( 'ohmylms-native-quiz-settings', {
	render: NativeQuizSettings,
} );
