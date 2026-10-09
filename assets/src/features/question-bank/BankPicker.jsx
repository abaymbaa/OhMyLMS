import { createElement, useEffect, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	Button,
	CheckboxControl,
	Modal,
	Notice,
	SelectControl,
	Spinner,
	TextControl,
} from '@wordpress/components';
import { addQuestionsToQuiz, listSkills, searchBank } from './api.mjs';
import {
	cleanFilters,
	DIFFICULTIES,
	flattenTree,
	selectableResults,
	skillTree,
	versionLabel,
} from './model.mjs';

/**
 * Pick existing bank questions and place them in a quiz by reference.
 * Marks and placement belong to the quiz; the question content stays in the bank.
 * @param root0
 * @param root0.quizId
 * @param root0.existingIds
 * @param root0.onAdded
 * @param root0.onClose
 */
export function BankPicker( { quizId, existingIds, onAdded, onClose } ) {
	const [ filters, setFilters ] = useState( {
		search: '',
		skill: '',
		difficulty: '',
		status: 'approved',
	} );
	const [ items, setItems ] = useState( null );
	const [ skills, setSkills ] = useState( [] );
	const [ chosen, setChosen ] = useState( [] );
	const [ pin, setPin ] = useState( false );
	const [ busy, setBusy ] = useState( false );
	const [ error, setError ] = useState( '' );
	useEffect( () => {
		listSkills()
			.then( ( data ) => setSkills( data.skills || [] ) )
			.catch( () => {} );
	}, [] );
	useEffect( () => {
		let active = true;
		const timer = setTimeout( () => {
			searchBank( {
				...cleanFilters( filters ),
				exclude_quiz: quizId,
				per_page: 50,
			} )
				.then(
					( data ) =>
						active &&
						setItems( selectableResults( data.items, existingIds ) )
				)
				.catch( ( cause ) => active && setError( cause.message ) );
		}, 250 );
		return () => {
			active = false;
			clearTimeout( timer );
		};
	}, [ filters ] );
	async function add() {
		setBusy( true );
		setError( '' );
		try {
			const result = await addQuestionsToQuiz( quizId, chosen, pin );
			onAdded( result.content || [], result.added || chosen );
			onClose();
		} catch ( cause ) {
			setError(
				cause.message || __( 'Could not add the questions.', 'ohmylms' )
			);
		} finally {
			setBusy( false );
		}
	}
	const set = ( key ) => ( value ) =>
		setFilters( { ...filters, [ key ]: value } );
	return (
		<Modal
			title={ __( 'Add questions from the bank', 'ohmylms' ) }
			onRequestClose={ onClose }
			size="large"
		>
			{ error && (
				<Notice status="error" isDismissible={ false }>
					{ error }
				</Notice>
			) }
			<div
				style={ {
					display: 'flex',
					flexWrap: 'wrap',
					gap: 12,
					alignItems: 'end',
				} }
			>
				<TextControl
					label={ __( 'Search', 'ohmylms' ) }
					value={ filters.search }
					onChange={ set( 'search' ) }
				/>
				<SelectControl
					label={ __( 'Skill', 'ohmylms' ) }
					value={ filters.skill }
					options={ [
						{ value: '', label: __( 'Any skill', 'ohmylms' ) },
						...flattenTree( skillTree( skills ) ).map(
							( skill ) => ( {
								value: String( skill.id ),
								label: `${ '— '.repeat( skill.depth ) }${ skill.name }`,
							} )
						),
					] }
					onChange={ set( 'skill' ) }
				/>
				<SelectControl
					label={ __( 'Difficulty', 'ohmylms' ) }
					value={ filters.difficulty }
					options={ [
						{ value: '', label: __( 'Any', 'ohmylms' ) },
						...DIFFICULTIES.map( ( value ) => ( {
							value,
							label: value,
						} ) ),
					] }
					onChange={ set( 'difficulty' ) }
				/>
				<SelectControl
					label={ __( 'Status', 'ohmylms' ) }
					value={ filters.status }
					options={ [
						{
							value: 'approved',
							label: __( 'Approved', 'ohmylms' ),
						},
						{ value: '', label: __( 'All I can use', 'ohmylms' ) },
					] }
					onChange={ set( 'status' ) }
				/>
			</div>
			{ ! items ? (
				<Spinner />
			) : items.length === 0 ? (
				<p>{ __( 'No matching questions.', 'ohmylms' ) }</p>
			) : (
				<ul
					className="ohmylms-bank-picker-list"
					style={ { maxHeight: 360, overflow: 'auto' } }
				>
					{ items.map( ( item ) => (
						<li key={ item.id }>
							<CheckboxControl
								label={ `${ item.name } — ${ item.type } · ${ versionLabel( item ) }${ item.can_edit ? '' : ` · ${ __( 'shared, read-only', 'ohmylms' ) }` }` }
								checked={ chosen.includes( item.id ) }
								disabled={ item.alreadyInQuiz }
								onChange={ ( checked ) =>
									setChosen(
										checked
											? [ ...chosen, item.id ]
											: chosen.filter(
													( id ) => id !== item.id
												)
									)
								}
							/>
						</li>
					) ) }
				</ul>
			) }
			<CheckboxControl
				label={ __(
					'Pin the current version (later edits will not change this quiz)',
					'ohmylms'
				) }
				checked={ pin }
				onChange={ setPin }
			/>
			<Button
				variant="primary"
				isBusy={ busy }
				disabled={ ! chosen.length }
				onClick={ add }
			>
				{ sprintf(
					__( 'Add %d question(s)', 'ohmylms' ),
					chosen.length
				) }
			</Button>
		</Modal>
	);
}
