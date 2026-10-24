/** @jsx createElement */
import { createElement, useState } from '@wordpress/element';
import { Button, CheckboxControl, Modal, Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';

/**
 * Preview saved course structure and explicitly publish one reviewed revision.
 *
 * @param {Object}                     root0               Component properties.
 * @param {number}                     root0.courseId      Course ID.
 * @param {Object}                     root0.editor        Existing editor state and save action.
 * @param {(revision: string) => void} [root0.onPublished] Advance the outline's reviewed revision after publication.
 */
export function CourseStructurePublish( { courseId, editor, onPublished } ) {
	const [ preview, setPreview ] = useState( null );
	const [ busy, setBusy ] = useState( false );
	const [ error, setError ] = useState( '' );
	const [ notice, setNotice ] = useState( '' );
	const [ applyExisting, setApplyExisting ] = useState( false );
	async function openPreview() {
		setBusy( true );
		setError( '' );
		setNotice( '' );
		try {
			if (
				editor.dirty &&
				! ( await editor.save( undefined, undefined, undefined, {
					silent: true,
				} ) )
			) {
				throw new Error(
					__(
						'Save the course successfully before previewing.',
						'ohmylms'
					)
				);
			}
			setPreview(
				await apiFetch( {
					path: `/ohmylms/v1/courses/${ courseId }/structure/preview`,
				} )
			);
			setApplyExisting( false );
		} catch ( cause ) {
			setError(
				cause.message ||
					__( 'Could not load the draft preview.', 'ohmylms' )
			);
		} finally {
			setBusy( false );
		}
	}
	async function publish() {
		setBusy( true );
		setError( '' );
		try {
			const published = await apiFetch( {
				path: `/ohmylms/v1/courses/${ courseId }/structure/publish`,
				method: 'POST',
				data: {
					revision: preview.revision,
					apply_existing: applyExisting,
				},
			} );
			setPreview( null );
			if ( published.structure_revision ) {
				onPublished?.( published.structure_revision );
			}
			setNotice(
				__(
					'Course outline published. Learners will see the published version assigned to them.',
					'ohmylms'
				)
			);
		} catch ( cause ) {
			setError(
				[ cause.message, ...( cause.data?.errors || [] ) ]
					.filter( Boolean )
					.join( ' ' )
			);
		} finally {
			setBusy( false );
		}
	}
	return (
		<section
			className="ohmylms-course-structure-publish"
			aria-label={ __( 'Course outline publishing', 'ohmylms' ) }
		>
			<p>
				{ __(
					'Unit edits are saved as drafts. Preview and publish when the outline is ready for learners.',
					'ohmylms'
				) }
			</p>
			<Button
				variant="secondary"
				onClick={ openPreview }
				disabled={ busy || editor.saving }
				isBusy={ busy }
			>
				{ __( 'Preview draft outline', 'ohmylms' ) }
			</Button>
			{ notice && (
				<Notice status="success" onRemove={ () => setNotice( '' ) }>
					{ notice }
				</Notice>
			) }
			{ error && ! preview && (
				<Notice status="error" onRemove={ () => setError( '' ) }>
					{ error }
				</Notice>
			) }
			{ preview && (
				<Modal
					title={ __( 'Draft course outline', 'ohmylms' ) }
					onRequestClose={ () => {
						if ( ! busy ) {
							setPreview( null );
						}
					} }
				>
					<p>
						{ __(
							'This preview shows the saved draft. Shared activity content remains live; publishing versions the outline and learning program.',
							'ohmylms'
						) }
					</p>
					<ol>
						{ preview.units.map( ( unit, index ) => (
							<li key={ unit.id }>
								<h3>{ `${ unit.number || index + 1 }. ${ unit.title }` }</h3>
								{ unit.description && (
									<p>
										{ unit.description.replace(
											/<[^>]*>/g,
											''
										) }
									</p>
								) }
								<ul>
									{ unit.groups.map( ( group ) => (
										<li key={ group.id }>
											<strong>{ group.title }</strong>
											<ul>
												{ group.items.map( ( item ) => (
													<li key={ item.id }>
														{ item.name }
													</li>
												) ) }
											</ul>
										</li>
									) ) }
									{ unit.ungrouped.map( ( item ) => (
										<li key={ item.id }>{ item.name }</li>
									) ) }
								</ul>
							</li>
						) ) }
					</ol>
					{ preview.readiness.length > 0 && (
						<Notice status="warning" isDismissible={ false }>
							{ preview.readiness.join( ' ' ) }
						</Notice>
					) }
					{ error && (
						<Notice status="error" isDismissible={ false }>
							{ error }
						</Notice>
					) }
					<CheckboxControl
						label={ __(
							'Apply to existing learners who have not completed the course',
							'ohmylms'
						) }
						help={ __(
							'Otherwise, existing learners keep their assigned version. New learners receive this publication.',
							'ohmylms'
						) }
						checked={ applyExisting }
						onChange={ setApplyExisting }
						disabled={ busy }
					/>
					<Button
						variant="primary"
						onClick={ publish }
						disabled={ busy || preview.readiness.length > 0 }
						isBusy={ busy }
					>
						{ __( 'Publish changes', 'ohmylms' ) }
					</Button>
				</Modal>
			) }
		</section>
	);
}
