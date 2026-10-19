/** @jsx createElement */
import { createElement, useEffect, useState } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	ComboboxControl,
	Notice,
	Placeholder,
	RangeControl,
	SelectControl,
	Spinner,
	ToggleControl,
} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { __, sprintf } from '@wordpress/i18n';
import metadata from './block.json';
import { addSelection, moveSelection } from './model.mjs';
import { installNativeCanvasRecovery } from '../../features/learning/nativeCanvas.mjs';

if ( ! window.ohmylmsNativeLesson ) {
	installNativeCanvasRecovery();
}

/**
 * Configure a question player without issuing learner questions in the editor.
 *
 * @param {Object}                props               Block properties.
 * @param {Object}                props.attributes    Saved selection and outcome settings.
 * @param {function(Object):void} props.setAttributes Update block attributes.
 * @return {Element} Bank picker and settings.
 */
export function QuestionPlayerEdit( { attributes, setAttributes } ) {
	const { source, questionIds, skillIds, count, graded, affectsSkills } =
		attributes;
	const [ search, setSearch ] = useState( '' );
	const [ items, setItems ] = useState( [] );
	const [ labels, setLabels ] = useState( {} );
	const [ error, setError ] = useState( '' );
	const [ loading, setLoading ] = useState( false );
	const ids = source === 'random' ? skillIds : questionIds;
	const key = source === 'random' ? 'skillIds' : 'questionIds';
	const kind = source === 'random' ? 'skills' : 'questions';
	const selection = ids.join( ',' );
	useEffect( () => {
		let active = true;
		const timer = setTimeout( async () => {
			setLoading( true );
			try {
				const base = `/ohmylms/v1/question-player/choices?kind=${ kind }`;
				const [ found, chosen ] = await Promise.all( [
					apiFetch( {
						path: `${ base }&search=${ encodeURIComponent( search ) }`,
					} ),
					selection
						? apiFetch( {
								path: `${ base }&include=${ selection }`,
							} )
						: [],
				] );
				if ( active ) {
					setItems( found );
					setLabels(
						Object.fromEntries(
							[ ...found, ...chosen ].map( ( item ) => [
								item.id,
								item.title,
							] )
						)
					);
					setError( '' );
				}
			} catch ( failure ) {
				if ( active ) {
					setError( failure.message );
				}
			} finally {
				if ( active ) {
					setLoading( false );
				}
			}
		}, 250 );
		return () => {
			active = false;
			clearTimeout( timer );
		};
	}, [ kind, search, selection ] );
	return (
		<div { ...useBlockProps() }>
			<Placeholder
				icon="welcome-learn-more"
				label={ __( 'OhMyLMS Question Player', 'ohmylms' ) }
			>
				<div style={ { width: '100%' } }>
					<p>
						{ __(
							'Use approved, automatically marked bank questions. Students log in to play. Save this post and preview the page to try the player; instructor previews never update student performance.',
							'ohmylms'
						) }
					</p>
					{ error && (
						<Notice status="error" isDismissible={ false }>
							{ error }
						</Notice>
					) }
					<SelectControl
						label={ __( 'Question source', 'ohmylms' ) }
						value={ source }
						options={ [
							{
								value: 'selected',
								label: __(
									'Choose specific questions',
									'ohmylms'
								),
							},
							{
								value: 'random',
								label: __(
									'Random questions by skill',
									'ohmylms'
								),
							},
						] }
						onChange={ ( value ) => {
							setSearch( '' );
							setAttributes( { source: value } );
						} }
					/>
					<ComboboxControl
						label={
							source === 'random'
								? __( 'Add a skill', 'ohmylms' )
								: __(
										'Add a question from the bank',
										'ohmylms'
									)
						}
						value={ null }
						options={ items
							.filter( ( item ) => ! ids.includes( item.id ) )
							.map( ( item ) => ( {
								value: String( item.id ),
								label: item.title,
							} ) ) }
						onFilterValueChange={ setSearch }
						onChange={ ( value ) =>
							setAttributes( {
								[ key ]: addSelection( ids, value ),
							} )
						}
					/>
					{ loading && <Spinner /> }
					{ ! loading && ! items.length && (
						<p>{ __( 'No eligible items found.', 'ohmylms' ) }</p>
					) }
					<ol>
						{ ids.map( ( id, index ) => (
							<li key={ id }>
								{ labels[ id ] ||
									sprintf(
										/* translators: %d: saved question or skill ID. */ __(
											'Item %d (unavailable)',
											'ohmylms'
										),
										id
									) }
								{ source === 'selected' && (
									<>
										<Button
											icon="arrow-up-alt2"
											label={ __(
												'Move question up',
												'ohmylms'
											) }
											disabled={ index === 0 }
											onClick={ () =>
												setAttributes( {
													questionIds: moveSelection(
														ids,
														index,
														-1
													),
												} )
											}
										/>
										<Button
											icon="arrow-down-alt2"
											label={ __(
												'Move question down',
												'ohmylms'
											) }
											disabled={
												index === ids.length - 1
											}
											onClick={ () =>
												setAttributes( {
													questionIds: moveSelection(
														ids,
														index,
														1
													),
												} )
											}
										/>
									</>
								) }
								<Button
									icon="no-alt"
									label={ __(
										'Remove selection',
										'ohmylms'
									) }
									onClick={ () =>
										setAttributes( {
											[ key ]: ids.filter(
												( item ) => item !== id
											),
										} )
									}
								/>
							</li>
						) ) }
					</ol>
					{ source === 'random' && (
						<RangeControl
							label={ __(
								'Maximum questions per play',
								'ohmylms'
							) }
							help={ __(
								'Draws a fresh set without duplicates from the selected skills and their subskills. A smaller pool uses all available questions.',
								'ohmylms'
							) }
							min={ 1 }
							max={ 30 }
							value={ count }
							onChange={ ( value ) =>
								setAttributes( { count: value } )
							}
						/>
					) }
					<ToggleControl
						label={ __( 'Grade responses', 'ohmylms' ) }
						checked={ graded }
						help={ __(
							'Show a score and save results for students. Turn off for an ungraded activity.',
							'ohmylms'
						) }
						onChange={ ( value ) =>
							setAttributes( {
								graded: value,
								affectsSkills: value && affectsSkills,
							} )
						}
					/>
					<ToggleControl
						label={ __(
							'Count toward skill performance',
							'ohmylms'
						) }
						checked={ graded && affectsSkills }
						disabled={ ! graded }
						help={ __(
							'When enabled, graded student responses contribute to the questions’ linked skills. Instructor previews never count.',
							'ohmylms'
						) }
						onChange={ ( value ) =>
							setAttributes( { affectsSkills: value } )
						}
					/>
				</div>
			</Placeholder>
		</div>
	);
}

registerBlockType( metadata, { edit: QuestionPlayerEdit, save: () => null } );
