import { createElement, RawHTML, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { parse, serialize, getBlockType, createBlock } from '@wordpress/blocks';
import { registerCoreBlocks } from '@wordpress/block-library';
import '@wordpress/format-library';
import {
	BlockEditorProvider,
	BlockList,
	BlockInspector,
	BlockTools,
	BlockToolbar,
	Inserter,
	WritingFlow,
	ObserveTyping,
	BlockNavigationDropdown,
} from '@wordpress/block-editor';
import {
	Button,
	Popover,
	SlotFillProvider,
	TabPanel,
	PanelBody,
} from '@wordpress/components';
import { uploadMedia } from '@wordpress/media-utils';
import { decodeEntities } from '@wordpress/html-entities';
import {
	QuestionBlockContext,
	registerQuestionBlocks,
} from '../question-bank/QuestionBlocks';
import {
	QUESTION_BLOCK_TYPES,
	questionBlockName,
	isQuestionBlock,
	publicQuestionBlocks,
} from '../question-bank/questionBlocks.mjs';

const LESSON_BLOCKS = [
	'core/paragraph',
	'core/heading',
	'core/list',
	'core/list-item',
	'core/image',
	'core/gallery',
	'core/video',
	'core/audio',
	'core/file',
	'core/embed',
	'core/quote',
	'core/pullquote',
	'core/table',
	'core/code',
	'core/preformatted',
	'core/separator',
	'core/spacer',
	'core/buttons',
	'core/button',
	'core/columns',
	'core/column',
	'core/group',
	'core/cover',
	'core/shortcode',
	'core/freeform',
	'core/html',
];

/**
 * A full lesson workspace: the inspector shares the block provider with the writing canvas.
 * @param root0
 * @param root0.document
 * @param root0.onTitleChange
 * @param root0.onContentChange
 * @param root0.settings
 * @param root0.media
 * @param root0.customContent
 * @param root0.label
 * @param root0.titleLabel
 * @param root0.titlePlaceholder
 * @param root0.workspaceLabel
 * @param root0.beforeContent
 * @param root0.afterContent
 * @param root0.outline
 * @param root0.readOnly
 * @param root0.questionType
 * @param root0.questionBlockContent
 * @param root0.questionBlockSettings
 * @param root0.onQuestionTypeChange
 * @param root0.toolbarActions
 * @param root0.questionTypes
 * @param root0.readOnlyContent
 * @param root0.previewQuestion
 * @param root0.compact
 */
export function BlockWorkspace( {
	document,
	onTitleChange,
	onContentChange,
	settings,
	media,
	customContent,
	label = __( 'Lesson', 'ohmylms' ),
	titleLabel = __( 'Lesson title', 'ohmylms' ),
	titlePlaceholder = __( 'Enter lesson title', 'ohmylms' ),
	workspaceLabel = __( 'Lesson block editor', 'ohmylms' ),
	beforeContent,
	afterContent,
	outline,
	readOnly = false,
	questionType,
	questionBlockContent,
	questionBlockSettings,
	onQuestionTypeChange,
	toolbarActions,
	questionTypes = QUESTION_BLOCK_TYPES.map( ( [ type ] ) => type ),
	readOnlyContent,
	previewQuestion,
	compact = false,
} ) {
	if ( ! getBlockType( 'core/paragraph' ) ) {
		registerCoreBlocks();
	}
	if ( onQuestionTypeChange ) {
		registerQuestionBlocks();
	}
	const [ blocks, setBlocks ] = useState( () => {
		const initial = parse( document.description || '' );
		if (
			questionType &&
			getBlockType( questionBlockName( questionType ) )
		) {
			initial.push(
				createBlock( questionBlockName( questionType ), {
					questionId: String( document.id || '' ),
					lock: { move: true, remove: true },
				} )
			);
		}
		return initial;
	} );
	const currentBlocks = useRef( blocks );
	const history = useRef( { past: [], future: [], changedAt: 0 } );
	const [ , updateHistory ] = useState( 0 );
	const [ fullscreen, setFullscreen ] = useState( false );
	const [ showSettings, setShowSettings ] = useState(
		() => ! compact && window.matchMedia( '(min-width: 781px)' ).matches
	);
	const [ editorSettings ] = useState( () => ( {
		...( window.ohmylmsLessonBlockSettings || {} ),
		allowedBlockTypes: [
			...LESSON_BLOCKS,
			...( onQuestionTypeChange
				? questionTypes.map( questionBlockName )
				: [] ),
		],
		hasFixedToolbar: true,
		mediaUpload: ( options ) =>
			uploadMedia( {
				...options,
				additionalData:
					Number( document.id ) > 0
						? { post: Number( document.id ) }
						: {},
			} ),
	} ) );
	function commitBlocks( next ) {
		currentBlocks.current = next;
		setBlocks( next );
		onContentChange( serialize( publicQuestionBlocks( next ) ) );
		if ( onQuestionTypeChange ) {
			const type = next
				.find( isQuestionBlock )
				?.name.slice( 'ohmylms/question-'.length );
			if ( type && type !== questionType ) {
				onQuestionTypeChange( type );
			}
		}
	}
	function changeBlocks( next ) {
		if ( readOnly ) {
			return;
		}
		const answers = next.filter( isQuestionBlock );
		if ( answers.length > 1 ) {
			const chosen =
				answers.find(
					( block ) =>
						block.name !== questionBlockName( questionType )
				) || answers.at( -1 );
			next = next.filter(
				( block ) =>
					! isQuestionBlock( block ) ||
					block.clientId === chosen.clientId
			);
		}
		if ( serialize( next ) === serialize( currentBlocks.current ) ) {
			return;
		}
		const now = Date.now();
		if (
			now - history.current.changedAt > 750 ||
			next.length !== currentBlocks.current.length
		) {
			history.current.past.push( currentBlocks.current );
		}
		history.current.changedAt = now;
		history.current.future = [];
		commitBlocks( next );
		updateHistory( ( value ) => value + 1 );
	}
	function undo( redo = false ) {
		const source = redo ? history.current.future : history.current.past;
		const target = redo ? history.current.past : history.current.future;
		if ( ! source.length ) {
			return;
		}
		target.push( currentBlocks.current );
		commitBlocks( source.pop() );
		history.current.changedAt = 0;
		updateHistory( ( value ) => value + 1 );
	}
	return (
		<QuestionBlockContext.Provider
			value={ {
				type: questionType,
				content: questionBlockContent,
				settings: questionBlockSettings,
				preview: {
					...previewQuestion,
					name: document.name,
					description: document.description,
					settings: {
						...previewQuestion?.settings,
						type: questionType,
					},
				},
			} }
		>
			<SlotFillProvider>
				<BlockEditorProvider
					value={ blocks }
					onInput={ changeBlocks }
					onChange={ changeBlocks }
					settings={ editorSettings }
				>
					<section
						className={ `ohmylms-lesson-block-workspace${ fullscreen ? ' is-fullscreen' : '' }${ compact ? ' is-question-card' : '' }` }
						aria-label={ workspaceLabel }
						onKeyDown={ ( event ) => {
							if (
								readOnly ||
								! ( event.ctrlKey || event.metaKey ) ||
								event.target.matches( 'input, textarea' )
							) {
								return;
							}
							if ( event.key.toLowerCase() === 'z' ) {
								event.preventDefault();
								undo( event.shiftKey );
							}
						} }
					>
						<div
							className="ohmylms-lesson-block-toolbar"
							role="toolbar"
							aria-label={ __( 'Editor tools', 'ohmylms' ) }
						>
							{ ! customContent && ! readOnly && (
								<>
									<Inserter
										renderToggle={ ( {
											onToggle,
											isOpen,
										} ) => (
											<Button
												variant="primary"
												icon="plus"
												onClick={ onToggle }
												aria-expanded={ isOpen }
											>
												{ __( 'Add block', 'ohmylms' ) }
											</Button>
										) }
									/>
									<Button
										icon="undo"
										label={ __( 'Undo', 'ohmylms' ) }
										disabled={
											! history.current.past.length
										}
										onClick={ () => undo() }
									/>
									<Button
										icon="redo"
										label={ __( 'Redo', 'ohmylms' ) }
										disabled={
											! history.current.future.length
										}
										onClick={ () => undo( true ) }
									/>
									<BlockNavigationDropdown />
									<BlockToolbar />
								</>
							) }
							{ toolbarActions }
							{ toolbarActions && (
								<Button
									icon={
										fullscreen
											? 'fullscreen-exit-alt'
											: 'fullscreen-alt'
									}
									label={
										fullscreen
											? __( 'Exit fullscreen', 'ohmylms' )
											: __(
													'Fullscreen editor',
													'ohmylms'
												)
									}
									isPressed={ fullscreen }
									onClick={ () =>
										setFullscreen( ! fullscreen )
									}
								/>
							) }
							<Button
								className="ohmylms-lesson-inspector-toggle"
								icon="admin-generic"
								isPressed={ showSettings }
								aria-expanded={ showSettings }
								onClick={ () =>
									setShowSettings( ! showSettings )
								}
							>
								{ __( 'Settings', 'ohmylms' ) }
							</Button>
						</div>
						<div
							className={ `ohmylms-lesson-block-body${ showSettings ? ' has-inspector' : '' }${ outline ? ' has-outline' : '' }` }
						>
							{ outline && (
								<aside
									className="ohmylms-block-outline"
									aria-label={ __(
										'Quiz questions',
										'ohmylms'
									) }
								>
									{ outline }
								</aside>
							) }
							<div className="ohmylms-lesson-block-canvas">
								<div className="ohmylms-lesson-block-document editor-styles-wrapper">
									<input
										className="ohmylms-lesson-block-title"
										aria-label={ titleLabel }
										placeholder={ titlePlaceholder }
										disabled={ readOnly }
										value={ decodeEntities(
											document.title ??
												document.name ??
												''
										) }
										onChange={ ( event ) =>
											onTitleChange( event.target.value )
										}
									/>
									{ beforeContent }
									{ readOnly ? (
										<RawHTML>
											{ document.description || '' }
										</RawHTML>
									) : (
										customContent || (
											<BlockTools>
												<WritingFlow>
													<ObserveTyping>
														<BlockList />
													</ObserveTyping>
												</WritingFlow>
											</BlockTools>
										)
									) }
									<fieldset
										className="ohmylms-block-answer-fields"
										disabled={ readOnly }
									>
										{ readOnly
											? readOnlyContent ||
												questionBlockContent
											: afterContent }
									</fieldset>
								</div>
							</div>
							{ showSettings && (
								<aside
									className="ohmylms-lesson-block-inspector"
									aria-label={ __(
										'Editor settings',
										'ohmylms'
									) }
								>
									<TabPanel
										tabs={ [
											{ name: 'lesson', title: label },
											...( ! customContent && ! readOnly
												? [
														{
															name: 'block',
															title: __(
																'Block',
																'ohmylms'
															),
														},
													]
												: [] ),
										] }
									>
										{ ( tab ) =>
											tab.name === 'block' ? (
												<BlockInspector />
											) : (
												<>
													{ media && (
														<PanelBody
															title={ __(
																'Media',
																'ohmylms'
															) }
															initialOpen={
																false
															}
														>
															{ media }
														</PanelBody>
													) }
													<div className="ohmylms-lesson-document-settings">
														{ settings }
													</div>
												</>
											)
										}
									</TabPanel>
								</aside>
							) }
						</div>
						<Popover.Slot />
					</section>
				</BlockEditorProvider>
			</SlotFillProvider>
		</QuestionBlockContext.Provider>
	);
}
