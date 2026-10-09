import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	TextControl,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';

export function QuestionOptionsBar( { question, onChange } ) {
	const settings = question.settings || {};
	const set = ( patch ) =>
		onChange( { settings: { ...settings, ...patch } } );
	return (
		<div
			className="ohmylms-question-options-bar"
			aria-label={ __( 'Question options', 'ohmylms' ) }
		>
			<div className="ohmylms-question-options-controls">
				<ToggleControl
					label={ __( 'Required', 'ohmylms' ) }
					checked={ !! settings.required }
					onChange={ ( required ) => set( { required } ) }
				/>
				<ToggleControl
					label={ __( 'Randomize', 'ohmylms' ) }
					checked={ !! settings.randomize }
					onChange={ ( randomize ) => set( { randomize } ) }
				/>
				<TextControl
					label={ __( 'Score', 'ohmylms' ) }
					type="number"
					min={ 0 }
					step="0.5"
					value={ String( settings.score?.value ?? 1 ) }
					disabled={ settings.type === 'structured' }
					onChange={ ( value ) =>
						set( {
							score: {
								...settings.score,
								enabled: true,
								value: Number( value ),
							},
						} )
					}
					__nextHasNoMarginBottom
				/>
			</div>
			<div className="ohmylms-question-options-feedback">
				<TextareaControl
					label={ __( 'Hint', 'ohmylms' ) }
					rows={ 2 }
					value={ settings.hint || '' }
					onChange={ ( hint ) => set( { hint } ) }
					__nextHasNoMarginBottom
				/>
				<TextareaControl
					label={ __( 'Explanation', 'ohmylms' ) }
					rows={ 2 }
					value={ settings.explanation || '' }
					onChange={ ( explanation ) => set( { explanation } ) }
					__nextHasNoMarginBottom
				/>
			</div>
		</div>
	);
}
