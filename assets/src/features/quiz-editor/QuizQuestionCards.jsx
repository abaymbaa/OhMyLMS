import { createElement, useEffect, useState } from '@wordpress/element';
import { Button, Modal } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { QUESTION_BLOCK_TYPES } from '../question-editor/questionBlocks.mjs';

/**
 * Form cards share the canonical quiz store; only the active card mounts the block workspace.
 * @param root0
 * @param root0.editor
 * @param root0.children
 * @param root0.onBank
 */
export function QuizQuestionCards( { editor, children, onBank } ) {
	const [ removing, setRemoving ] = useState( null );
	const [ busy, setBusy ] = useState( false );
	useEffect( () => {
		if ( ! editor.loading && ! editor.questions.length ) {
			editor.addQuestion();
		}
	}, [ editor.loading, editor.questions.length ] );
	return (
		<section
			className="ohmylms-quiz-form"
			aria-label={ __( 'Quiz questions', 'ohmylms' ) }
		>
			<div
				className="ohmylms-form-actions"
				role="toolbar"
				aria-label={ __( 'Add quiz content', 'ohmylms' ) }
			>
				<Button
					variant="primary"
					icon="plus-alt2"
					onClick={ () => editor.addQuestion() }
				>
					{ __( 'Add question', 'ohmylms' ) }
				</Button>
				<Button variant="secondary" icon="download" onClick={ onBank }>
					{ __( 'Add from bank', 'ohmylms' ) }
				</Button>
			</div>
			<div className="ohmylms-question-cards">
				{ editor.questions.map( ( question, index ) => {
					const active = editor.question?.id === question.id;
					const readonly = !! question.readonly;
					const type = question.settings?.type || 'single-choice';
					return (
						<section
							key={ question.id }
							className={ `ohmylms-question-card${ active ? ' is-active' : '' }` }
							aria-label={ sprintf(
								__( 'Question %d', 'ohmylms' ),
								index + 1
							) }
						>
							{ ! active && (
								<div className="ohmylms-question-card-heading">
									<Button
										variant="tertiary"
										onClick={ () =>
											editor.selectQuestion( question )
										}
										aria-expanded={ active }
									>
										{ sprintf(
											__( 'Question %d', 'ohmylms' ),
											index + 1
										) }
									</Button>
									{ ! active && (
										<span className="ohmylms-question-card-type">
											{ QUESTION_BLOCK_TYPES.find(
												( [ value ] ) => value === type
											)?.[ 1 ] || type }
										</span>
									) }
								</div>
							) }
							{ active ? (
								children
							) : (
								<button
									type="button"
									className="ohmylms-question-card-summary"
									onClick={ () =>
										editor.selectQuestion( question )
									}
									aria-label={ sprintf(
										__( 'Edit question %d', 'ohmylms' ),
										index + 1
									) }
								>
									<h3>
										{ question.name ||
											__(
												'Untitled question',
												'ohmylms'
											) }
									</h3>
									<p>
										{ QUESTION_BLOCK_TYPES.find(
											( [ value ] ) => value === type
										)?.[ 1 ] || type }
									</p>
									<ul>
										{ ( question.questions || [] )
											.slice( 0, 4 )
											.map( ( option, i ) => (
												<li key={ i }>
													{ option.answer ||
														sprintf(
															__(
																'Option %d',
																'ohmylms'
															),
															i + 1
														) }
												</li>
											) ) }
									</ul>
								</button>
							) }
							<div className="ohmylms-question-card-footer">
								<Button
									icon="arrow-up-alt2"
									label={ __(
										'Move question up',
										'ohmylms'
									) }
									disabled={ index === 0 || editor.saving }
									onClick={ () =>
										editor.moveQuestion( index, index - 1 )
									}
								/>
								<Button
									icon="arrow-down-alt2"
									label={ __(
										'Move question down',
										'ohmylms'
									) }
									disabled={
										index === editor.questions.length - 1 ||
										editor.saving
									}
									onClick={ () =>
										editor.moveQuestion( index, index + 1 )
									}
								/>
								<Button
									icon="admin-page"
									label={ __(
										'Duplicate question',
										'ohmylms'
									) }
									disabled={ editor.saving }
									onClick={ () =>
										editor.addQuestion( question )
									}
								/>
								<Button
									icon="trash"
									label={ __( 'Remove question', 'ohmylms' ) }
									disabled={ editor.saving }
									onClick={ () => setRemoving( question ) }
								/>
							</div>
						</section>
					);
				} ) }
			</div>
			<Button
				className="ohmylms-form-add-bottom"
				variant="secondary"
				icon="plus-alt2"
				onClick={ () => editor.addQuestion() }
			>
				{ __( 'Add question', 'ohmylms' ) }
			</Button>
			{ removing && (
				<Modal
					title={ __( 'Remove question from quiz?', 'ohmylms' ) }
					onRequestClose={ () => ! busy && setRemoving( null ) }
				>
					<p>
						{ __(
							'Saved questions remain in the question bank.',
							'ohmylms'
						) }
					</p>
					<Button
						variant="primary"
						isDestructive
						isBusy={ busy }
						disabled={ busy }
						onClick={ async () => {
							setBusy( true );
							await editor.removeQuestion( removing );
							setBusy( false );
							setRemoving( null );
						} }
					>
						{ __( 'Remove question', 'ohmylms' ) }
					</Button>
					<Button
						variant="tertiary"
						disabled={ busy }
						onClick={ () => setRemoving( null ) }
					>
						{ __( 'Cancel', 'ohmylms' ) }
					</Button>
				</Modal>
			) }
		</section>
	);
}
