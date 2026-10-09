import { createElement, Fragment, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	Button,
	CheckboxControl,
	SelectControl,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import { VisualPreview } from './VisualEditors';
import { listToNumbers, numbersToList } from '../question-bank/model.mjs';
import {
	blankIds,
	nextId,
	removeBucket,
	removeItem,
	sequencesFromText,
	syncBlanks,
	syncSlots,
	tilesFromText,
} from './interactiveModel.mjs';

const VISUAL_TYPES = [
	'number-line',
	'shade-model',
	'count-blocks',
	'set-clock',
	'make-amount',
	'fill-level',
	'build-chart',
	'grid-build',
];

/**
 * A text field that edits a parsed value without eating the characters being typed
 * (a trailing space or newline would otherwise vanish on every keystroke).
 * @param root0
 * @param root0.value
 * @param root0.format
 * @param root0.parse
 * @param root0.onChange
 * @param root0.multiline
 * @param root0.label
 * @param root0.help
 */
function ParsedField( {
	value,
	format,
	parse,
	onChange,
	multiline = false,
	label,
	help,
} ) {
	const [ text, setText ] = useState( () => format( value ) );
	const shown = format( parse( text ) ) === format( value ) ? text : format( value );
	const Control = multiline ? TextareaControl : TextControl;
	return (
		<Control
			label={ label }
			help={ help }
			value={ shown }
			onChange={ ( next ) => {
				setText( next );
				onChange( parse( next ) );
			} }
		/>
	);
}

const lines = ( text ) => String( text ).split( '\n' );
const joinLines = ( list ) => ( list || [] ).join( '\n' );
const csv = ( text ) => String( text ).split( ',' ).map( ( s ) => s.trim() );
const joinCsv = ( list ) => ( list || [] ).join( ', ' );

/**
 * Partial credit applies to every type that has several independent parts.
 * @param root0
 * @param root0.value
 * @param root0.onChange
 */
function PartialCredit( { value, onChange } ) {
	return (
		<CheckboxControl
			label={ __(
				'Give partial credit for each correct part (otherwise all parts must be correct)',
				'ohmylms'
			) }
			checked={ !! value.partial_credit }
			onChange={ ( partial_credit ) => onChange( { partial_credit } ) }
		/>
	);
}

const formOptions = () => [
	{ value: 'any', label: __( 'Any equivalent form', 'ohmylms' ) },
	{ value: 'expanded', label: __( 'Must be expanded', 'ohmylms' ) },
	{ value: 'factored', label: __( 'Must be factored', 'ohmylms' ) },
	{ value: 'simplified', label: __( 'Must be simplified', 'ohmylms' ) },
];

/**
 * Required shape of an equivalent answer.
 * @param root0
 * @param root0.value
 * @param root0.onChange
 */
function FormSelect( { value, onChange } ) {
	return (
		<SelectControl
			label={ __( 'Answer form', 'ohmylms' ) }
			help={ __(
				'Equivalent answers such as 2x+6 and 2(x+3) are accepted; choose a form to require a particular shape.',
				'ohmylms'
			) }
			value={ value || 'any' }
			options={ formOptions() }
			onChange={ onChange }
		/>
	);
}

/**
 * A typed math expression graded by algebraic equivalence.
 * @param root0
 * @param root0.value
 * @param root0.onChange
 */
export function ExpressionEditor( { value, onChange } ) {
	return (
		<div className="ohmylms-interactive-editor">
			<TextControl
				label={ __( 'Correct answer', 'ohmylms' ) }
				help={ __(
					'Write it as you would type it: 2(x+3), x^2-1, 3/4, sqrt(x), sin(x). Equations such as 2x+5=11 are also supported.',
					'ohmylms'
				) }
				value={ value.answer || '' }
				onChange={ ( answer ) => onChange( { answer } ) }
			/>
			<FormSelect
				value={ value.form }
				onChange={ ( form ) => onChange( { form } ) }
			/>
			<ParsedField
				multiline
				label={ __( 'Other accepted answers (one per line, optional)', 'ohmylms' ) }
				help={ __(
					'Only needed when two answers are both right but not equivalent, such as x=2 or x=-2.',
					'ohmylms'
				) }
				value={ value.alternatives }
				format={ joinLines }
				parse={ lines }
				onChange={ ( alternatives ) => onChange( { alternatives } ) }
			/>
		</div>
	);
}

/**
 * Sentence with {1}, {2} … markers; each marker becomes a dropdown.
 * @param root0
 * @param root0.value
 * @param root0.onChange
 */
export function DropdownBlanksEditor( { value, onChange } ) {
	const slots = value.slots || [];
	const setSlot = ( id, patch ) =>
		onChange( {
			slots: slots.map( ( slot ) =>
				slot.id === id ? { ...slot, ...patch } : slot
			),
		} );
	return (
		<div className="ohmylms-interactive-editor">
			<TextareaControl
				label={ __( 'Sentence', 'ohmylms' ) }
				help={ __(
					'Write {1}, {2} … where a dropdown should appear.',
					'ohmylms'
				) }
				value={ value.text || '' }
				onChange={ ( text ) =>
					onChange( { text, slots: syncSlots( text, slots ) } )
				}
			/>
			{ slots.map( ( slot ) => (
				<fieldset key={ slot.id } className="ohmylms-interactive-row">
					<legend>{ sprintf( __( 'Dropdown {%s}', 'ohmylms' ), slot.id ) }</legend>
					<ParsedField
						multiline
						label={ __( 'Choices (one per line)', 'ohmylms' ) }
						value={ slot.choices }
						format={ joinLines }
						parse={ lines }
						onChange={ ( choices ) => setSlot( slot.id, { choices } ) }
					/>
					<SelectControl
						label={ __( 'Correct choice', 'ohmylms' ) }
						value={ slot.answer || '' }
						options={ [
							{ value: '', label: __( 'Choose …', 'ohmylms' ) },
							...( slot.choices || [] )
								.filter( ( choice ) => choice.trim() )
								.map( ( choice ) => ( {
									value: choice,
									label: choice,
								} ) ),
						] }
						onChange={ ( answer ) => setSlot( slot.id, { answer } ) }
					/>
				</fieldset>
			) ) }
			<PartialCredit value={ value } onChange={ onChange } />
		</div>
	);
}

/**
 * Groups and the items that belong in them.
 * @param root0
 * @param root0.value
 * @param root0.onChange
 */
export function CategorizeEditor( { value, onChange } ) {
	const buckets = value.buckets || [];
	const items = value.items || [];
	const key = value.key || {};
	const setBucket = ( id, patch ) =>
		onChange( {
			buckets: buckets.map( ( bucket ) =>
				bucket.id === id ? { ...bucket, ...patch } : bucket
			),
		} );
	const setItem = ( id, patch ) =>
		onChange( {
			items: items.map( ( item ) =>
				item.id === id ? { ...item, ...patch } : item
			),
		} );
	return (
		<div className="ohmylms-interactive-editor">
			<h4>{ __( 'Groups', 'ohmylms' ) }</h4>
			{ buckets.map( ( bucket, index ) => (
				<div key={ bucket.id } className="ohmylms-interactive-row">
					<TextControl
						label={ sprintf( __( 'Group %d', 'ohmylms' ), index + 1 ) }
						value={ bucket.label || '' }
						onChange={ ( label ) => setBucket( bucket.id, { label } ) }
					/>
					<Button
						isDestructive
						variant="tertiary"
						disabled={ buckets.length <= 2 }
						onClick={ () => onChange( removeBucket( value, bucket.id ) ) }
					>
						{ __( 'Remove group', 'ohmylms' ) }
					</Button>
				</div>
			) ) }
			<Button
				variant="secondary"
				onClick={ () =>
					onChange( {
						buckets: [
							...buckets,
							{ id: nextId( buckets, 'b' ), label: '' },
						],
					} )
				}
			>
				{ __( 'Add group', 'ohmylms' ) }
			</Button>
			<h4>{ __( 'Items to sort', 'ohmylms' ) }</h4>
			{ items.map( ( item, index ) => (
				<div key={ item.id } className="ohmylms-interactive-row">
					<TextControl
						label={ sprintf( __( 'Item %d', 'ohmylms' ), index + 1 ) }
						value={ item.text || '' }
						onChange={ ( text ) => setItem( item.id, { text } ) }
					/>
					<SelectControl
						label={ __( 'Belongs to', 'ohmylms' ) }
						value={ key[ item.id ] || '' }
						options={ [
							{ value: '', label: __( 'Choose …', 'ohmylms' ) },
							...buckets.map( ( bucket ) => ( {
								value: bucket.id,
								label:
									bucket.label ||
									sprintf( __( 'Group %s', 'ohmylms' ), bucket.id ),
							} ) ),
						] }
						onChange={ ( bucketId ) =>
							onChange( { key: { ...key, [ item.id ]: bucketId } } )
						}
					/>
					<MediaUpload
						allowedTypes={ [ 'image' ] }
						value={ item.thumbnail_id }
						onSelect={ ( image ) =>
							setItem( item.id, {
								thumbnail_id: image.id,
								image_url: image.url,
							} )
						}
						render={ ( { open } ) => (
							<Button
								icon="format-image"
								label={ __( 'Item image', 'ohmylms' ) }
								onClick={ open }
							/>
						) }
					/>
					{ item.image_url && (
						<Button
							variant="tertiary"
							onClick={ () =>
								setItem( item.id, { thumbnail_id: 0, image_url: '' } )
							}
						>
							{ __( 'Remove image', 'ohmylms' ) }
						</Button>
					) }
					<Button
						isDestructive
						variant="tertiary"
						disabled={ items.length <= 1 }
						onClick={ () => onChange( removeItem( value, item.id ) ) }
					>
						{ __( 'Remove item', 'ohmylms' ) }
					</Button>
				</div>
			) ) }
			<Button
				variant="secondary"
				onClick={ () =>
					onChange( {
						items: [
							...items,
							{ id: nextId( items, 'i' ), text: '' },
						],
					} )
				}
			>
				{ __( 'Add item', 'ohmylms' ) }
			</Button>
			<PartialCredit value={ value } onChange={ onChange } />
		</div>
	);
}

const rowsText = ( rows ) => ( rows || [] ).map( ( row ) => row.join( ' | ' ) ).join( '\n' );
const parseRows = ( text ) =>
	String( text )
		.split( '\n' )
		.map( ( line ) => line.split( '|' ).map( ( cell ) => cell.trim() ) );

/**
 * Blanks in a sentence or table cells, each with its own expected answer.
 * @param root0
 * @param root0.value
 * @param root0.onChange
 */
export function MultiBlankEditor( { value, onChange } ) {
	const table = value.layout === 'table';
	const apply = ( patch ) => {
		const next = { ...value, ...patch };
		onChange( { ...patch, blanks: syncBlanks( next ) } );
	};
	const setBlank = ( id, patch ) =>
		onChange( {
			blanks: {
				...value.blanks,
				[ id ]: { ...( value.blanks?.[ id ] || {} ), ...patch },
			},
		} );
	return (
		<div className="ohmylms-interactive-editor">
			<SelectControl
				label={ __( 'Layout', 'ohmylms' ) }
				value={ table ? 'table' : 'inline' }
				options={ [
					{ value: 'inline', label: __( 'Sentence with blanks', 'ohmylms' ) },
					{ value: 'table', label: __( 'Table', 'ohmylms' ) },
				] }
				onChange={ ( layout ) =>
					apply(
						layout === 'table' && ! value.rows
							? {
									layout,
									columns: [ 'x', 'y' ],
									rows: [ [ '1', '{a}' ], [ '2', '{b}' ] ],
								}
							: { layout }
					)
				}
			/>
			{ table ? (
				<Fragment>
					<ParsedField
						label={ __( 'Column headings (comma separated)', 'ohmylms' ) }
						value={ value.columns }
						format={ joinCsv }
						parse={ csv }
						onChange={ ( columns ) => onChange( { columns } ) }
					/>
					<ParsedField
						multiline
						label={ __( 'Rows (one per line, cells separated by |)', 'ohmylms' ) }
						help={ __(
							'Write {a}, {b} … in a cell where the learner fills in a value.',
							'ohmylms'
						) }
						value={ value.rows }
						format={ rowsText }
						parse={ parseRows }
						onChange={ ( rows ) => apply( { rows } ) }
					/>
				</Fragment>
			) : (
				<TextareaControl
					label={ __( 'Text', 'ohmylms' ) }
					help={ __(
						'Write {a}, {b} … where a blank should appear.',
						'ohmylms'
					) }
					value={ value.text || '' }
					onChange={ ( text ) => apply( { text } ) }
				/>
			) }
			{ blankIds( value ).map( ( id ) => {
				const spec = value.blanks?.[ id ] || { kind: 'text' };
				return (
					<fieldset key={ id } className="ohmylms-interactive-row">
						<legend>{ sprintf( __( 'Blank {%s}', 'ohmylms' ), id ) }</legend>
						<SelectControl
							label={ __( 'Answer type', 'ohmylms' ) }
							value={ spec.kind || 'text' }
							options={ [
								{ value: 'numerical', label: __( 'Number', 'ohmylms' ) },
								{ value: 'text', label: __( 'Exact text', 'ohmylms' ) },
								{
									value: 'expression',
									label: __( 'Math expression', 'ohmylms' ),
								},
							] }
							onChange={ ( kind ) => setBlank( id, { kind } ) }
						/>
						{ spec.kind === 'numerical' ? (
							<Fragment>
								<TextControl
									type="number"
									step="any"
									label={ __( 'Correct answer', 'ohmylms' ) }
									value={ spec.answer ?? '' }
									onChange={ ( answer ) =>
										setBlank( id, {
											answer: answer === '' ? undefined : Number( answer ),
										} )
									}
								/>
								<TextControl
									label={ __( 'Other accepted answers (comma separated)', 'ohmylms' ) }
									value={ numbersToList( spec.answers ) }
									onChange={ ( text ) =>
										setBlank( id, { answers: listToNumbers( text ) } )
									}
								/>
								<TextControl
									type="number"
									min={ 0 }
									step="any"
									label={ __( 'Tolerance', 'ohmylms' ) }
									value={ spec.tolerance ?? 0 }
									onChange={ ( tolerance ) =>
										setBlank( id, { tolerance: Math.max( 0, Number( tolerance ) || 0 ) } )
									}
								/>
								<TextControl
									label={ __( 'Unit shown after the box', 'ohmylms' ) }
									value={ spec.unit || '' }
									onChange={ ( unit ) => setBlank( id, { unit } ) }
								/>
							</Fragment>
						) : spec.kind === 'expression' ? (
							<Fragment>
								<TextControl
									label={ __( 'Correct expression', 'ohmylms' ) }
									value={ spec.answer || '' }
									onChange={ ( answer ) => setBlank( id, { answer } ) }
								/>
								<FormSelect
									value={ spec.form }
									onChange={ ( form ) => setBlank( id, { form } ) }
								/>
							</Fragment>
						) : (
							<ParsedField
								label={ __( 'Accepted answers (comma separated, not case-sensitive)', 'ohmylms' ) }
								value={ spec.accepted }
								format={ joinCsv }
								parse={ csv }
								onChange={ ( accepted ) => setBlank( id, { accepted } ) }
							/>
						) }
					</fieldset>
				);
			} ) }
			<PartialCredit value={ value } onChange={ onChange } />
		</div>
	);
}

/**
 * Tiles the learner arranges into an answer.
 * @param root0
 * @param root0.value
 * @param root0.onChange
 */
export function BuildExpressionEditor( { value, onChange } ) {
	return (
		<div className="ohmylms-interactive-editor">
			<ParsedField
				label={ __( 'Correct tiles in order (separate tiles with spaces)', 'ohmylms' ) }
				help={ __( 'Example: 3 x + 4 = 10', 'ohmylms' ) }
				value={ value.correct }
				format={ ( list ) => ( list || [] ).join( ' ' ) }
				parse={ tilesFromText }
				onChange={ ( correct ) => onChange( { correct } ) }
			/>
			<ParsedField
				label={ __( 'Extra tiles that do not belong (distractors)', 'ohmylms' ) }
				value={ value.distractors }
				format={ ( list ) => ( list || [] ).join( ' ' ) }
				parse={ tilesFromText }
				onChange={ ( distractors ) => onChange( { distractors } ) }
			/>
			<ParsedField
				multiline
				label={ __( 'Other accepted orders (one per line, optional)', 'ohmylms' ) }
				help={ __(
					'Use these when more than one order is correct, such as 2 + 3 and 3 + 2.',
					'ohmylms'
				) }
				value={ value.alternatives }
				format={ ( list ) => ( list || [] ).map( ( s ) => s.join( ' ' ) ).join( '\n' ) }
				parse={ sequencesFromText }
				onChange={ ( alternatives ) => onChange( { alternatives } ) }
			/>
			<CheckboxControl
				label={ __(
					'Also accept equivalent expressions (for example 3x+4 for 4+3x)',
					'ohmylms'
				) }
				checked={ !! value.equivalence }
				onChange={ ( equivalence ) => onChange( { equivalence } ) }
			/>
			{ value.equivalence && (
				<FormSelect
					value={ value.form }
					onChange={ ( form ) => onChange( { form } ) }
				/>
			) }
		</div>
	);
}

/**
 * Author-side learner preview of an interactive question (answers are not graded or saved).
 * @param root0
 * @param root0.type
 * @param root0.settings
 */
export function InteractivePreview( { type, settings = {} } ) {
	const [ picked, setPicked ] = useState( [] );
	if ( VISUAL_TYPES.includes( type ) ) {
		return <VisualPreview type={ type } settings={ settings } />;
	}
	const parts = ( text, field ) =>
		String( text || '' )
			.split( /\{([a-z0-9_-]{1,20})\}/gi )
			.map( ( part, index ) =>
				index % 2 ? (
					<Fragment key={ index }>{ field( part ) }</Fragment>
				) : (
					<Fragment key={ index }>{ part }</Fragment>
				)
			);
	if ( type === 'dropdown-blanks' ) {
		return (
			<p>
				{ parts( settings.text, ( id ) => {
					const slot = ( settings.slots || [] ).find( ( s ) => s.id === id );
					return slot ? (
						<select aria-label={ sprintf( __( 'Choice %s', 'ohmylms' ), id ) }>
							<option value="">{ __( 'Choose…', 'ohmylms' ) }</option>
							{ ( slot.choices || [] ).map( ( choice, i ) => (
								<option key={ i }>{ choice }</option>
							) ) }
						</select>
					) : null;
				} ) }
			</p>
		);
	}
	if ( type === 'expression' ) {
		return (
			<input
				type="text"
				className="ohmylms-expression-input"
				aria-label={ __( 'Your answer', 'ohmylms' ) }
				placeholder={ __( 'e.g. 2(x+3)', 'ohmylms' ) }
			/>
		);
	}
	if ( type === 'multi-blank' ) {
		const input = ( id ) => (
			<input
				type="text"
				size={ 6 }
				aria-label={ sprintf( __( 'Blank %s', 'ohmylms' ), id ) }
			/>
		);
		if ( settings.layout === 'table' ) {
			return (
				<table className="ohmylms-blank-table">
					<thead>
						<tr>
							{ ( settings.columns || [] ).map( ( column, i ) => (
								<th key={ i }>{ column }</th>
							) ) }
						</tr>
					</thead>
					<tbody>
						{ ( settings.rows || [] ).map( ( row, r ) => (
							<tr key={ r }>
								{ row.map( ( cell, c ) => (
									<td key={ c }>{ parts( cell, input ) }</td>
								) ) }
							</tr>
						) ) }
					</tbody>
				</table>
			);
		}
		return <p>{ parts( settings.text, input ) }</p>;
	}
	if ( type === 'categorize' ) {
		return (
			<ul className="ohmylms-cat-items">
				{ ( settings.items || [] ).map( ( item ) => (
					<li key={ item.id }>
						{ item.image_url && <img src={ item.image_url } alt="" /> }
						<label>
							{ item.text }{ ' ' }
							<select>
								<option value="">{ __( 'Choose a group…', 'ohmylms' ) }</option>
								{ ( settings.buckets || [] ).map( ( bucket ) => (
									<option key={ bucket.id } value={ bucket.id }>
										{ bucket.label }
									</option>
								) ) }
							</select>
						</label>
					</li>
				) ) }
			</ul>
		);
	}
	if ( type === 'build-expression' ) {
		const tiles = [
			...( settings.correct || [] ),
			...( settings.distractors || [] ),
		].map( ( text, index ) => ( { text, index } ) );
		return (
			<div className="ohmylms-build-expression">
				<div className="ohmylms-build-answer" aria-label={ __( 'Your answer', 'ohmylms' ) }>
					{ picked.map( ( tile ) => (
						<button
							type="button"
							key={ tile.index }
							className="ohmylms-tile is-placed"
							onClick={ () =>
								setPicked( picked.filter( ( t ) => t !== tile ) )
							}
						>
							{ tile.text }
						</button>
					) ) }
				</div>
				<div className="ohmylms-build-bank">
					{ tiles
						.filter( ( tile ) => ! picked.includes( tile ) )
						.reverse()
						.map( ( tile ) => (
							<button
								type="button"
								key={ tile.index }
								className="ohmylms-tile"
								onClick={ () => setPicked( [ ...picked, tile ] ) }
							>
								{ tile.text }
							</button>
						) ) }
				</div>
			</div>
		);
	}
	return null;
}
