/** @jsx createElement */
import { createElement, useState } from '@wordpress/element';
import {
	Button,
	Notice,
	SelectControl,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

/**
 * Create a reusable draft, then add its placement to the local outline.
 * @param {Object}                     root0             Properties.
 * @param {number}                     root0.courseId    Course ID.
 * @param {string}                     root0.revision    Saved course revision.
 * @param {string}                     root0.requestId   Stable creation UUID.
 * @param {string}                     root0.initialKind Initial reading, video or quiz choice.
 * @param {(resource: Object) => void} root0.onCreated   Place the draft locally.
 * @param {(busy: boolean) => void}    root0.onBusy      Disable dialog dismissal during creation.
 * @param {string}                     [root0.style]     Assessment style for a unit test or course challenge slot.
 */
export function ActivityCreateForm( {
	courseId,
	revision,
	requestId,
	initialKind,
	onCreated,
	onBusy,
	style = '',
} ) {
	const [ kind, setKind ] = useState(
		style ? 'quiz' : initialKind || 'reading'
	);
	const [ title, setTitle ] = useState( '' );
	const [ content, setContent ] = useState( '' );
	const [ url, setUrl ] = useState( '' );
	const [ busy, setBusy ] = useState( false );
	const [ error, setError ] = useState( '' );
	async function create() {
		setBusy( true );
		onBusy( true );
		setError( '' );
		try {
			const resource = await apiFetch( {
				path: `/ohmylms/v1/courses/${ courseId }/structure/resources`,
				method: 'POST',
				data: {
					revision,
					request_id: requestId,
					kind,
					title,
					content,
					url,
					...( style ? { style } : {} ),
				},
			} );
			onCreated( resource );
		} catch ( cause ) {
			setError( cause.message );
			setBusy( false );
		} finally {
			onBusy( false );
		}
	}
	return (
		<div>
			<p>
				{ __(
					'Create a draft resource here, then save the outline to keep its placement. Finish and publish the resource in its content editor.',
					'ohmylms'
				) }
			</p>
			{ error && (
				<Notice status="error" isDismissible={ false }>
					{ error }
				</Notice>
			) }
			{ ! style && (
				<SelectControl
					label={ __( 'New activity type', 'ohmylms' ) }
					value={ kind }
					disabled={ busy }
					options={ [
						{ value: 'reading', label: __( 'Reading', 'ohmylms' ) },
						{ value: 'video', label: __( 'Video', 'ohmylms' ) },
						{ value: 'quiz', label: __( 'Quiz', 'ohmylms' ) },
					] }
					onChange={ setKind }
				/>
			) }
			<TextControl
				label={ __( 'New activity title', 'ohmylms' ) }
				value={ title }
				maxLength={ 200 }
				disabled={ busy }
				onChange={ setTitle }
			/>
			{ kind === 'video' && (
				<TextControl
					label={ __( 'Video URL', 'ohmylms' ) }
					type="url"
					value={ url }
					onChange={ setUrl }
					disabled={ busy }
				/>
			) }
			{ kind !== 'quiz' && (
				<TextareaControl
					label={
						kind === 'reading'
							? __( 'Reading content', 'ohmylms' )
							: __( 'Video notes', 'ohmylms' )
					}
					value={ content }
					onChange={ setContent }
					disabled={ busy }
					help={ __(
						'You can use HTML or finish the content in the block editor.',
						'ohmylms'
					) }
				/>
			) }
			{ kind === 'quiz' && (
				<p>
					{ __(
						'Add questions and configure this quiz in its content editor after creating it.',
						'ohmylms'
					) }
				</p>
			) }
			<Button
				variant="primary"
				isBusy={ busy }
				disabled={
					busy ||
					! title.trim() ||
					( kind === 'video' && ! url.trim() )
				}
				onClick={ create }
			>
				{ __( 'Create draft activity', 'ohmylms' ) }
			</Button>
		</div>
	);
}
