import { createElement, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, SelectControl, TextControl } from '@wordpress/components';
import { mathsPreset } from './mathsGenerator.mjs';

/**
 * Topic and range wizard that writes ordinary numerical/template settings.
 *
 * @param {Object}                   props            Component properties.
 * @param {Object}                   props.value      Existing settings.
 * @param {(preset: Object) => void} props.onGenerate Apply the authored definition.
 * @return {Element} Maths generator controls.
 */
export function MathsGenerator( { value, onGenerate } ) {
	const saved = value.maths_generator || {};
	const [ kind, setKind ] = useState( saved.kind || 'addition' );
	const [ min, setMin ] = useState( saved.min || 1 );
	const [ max, setMax ] = useState( saved.max || 12 );
	const preset = mathsPreset( kind, Number( min ), Number( max ) );
	return (
		<details className="ohmylms-maths-generator">
			<summary>{ __( 'Maths generator', 'ohmylms' ) }</summary>
			<p>
				{ __(
					'Choose a topic and number range. Apply to create a numerical question with fresh numbers for each issued attempt. Variables and the calculated answer stay private in the learner player.',
					'ohmylms'
				) }
			</p>
			<SelectControl
				label={ __( 'Maths topic', 'ohmylms' ) }
				value={ kind }
				onChange={ setKind }
				options={ [
					{ value: 'addition', label: __( 'Addition', 'ohmylms' ) },
					{
						value: 'subtraction',
						label: __( 'Subtraction', 'ohmylms' ),
					},
					{
						value: 'multiplication',
						label: __( 'Multiplication', 'ohmylms' ),
					},
					{
						value: 'division',
						label: __( 'Exact division', 'ohmylms' ),
					},
					{
						value: 'percentage',
						label: __( 'Percentages', 'ohmylms' ),
					},
					{
						value: 'fractions',
						label: __( 'Fractions (decimal answer)', 'ohmylms' ),
					},
					{
						value: 'algebra',
						label: __( 'Linear equations', 'ohmylms' ),
					},
					{
						value: 'pythagorean',
						label: __( 'Pythagorean triples', 'ohmylms' ),
					},
					{
						value: 'quadratic',
						label: __( 'Quadratic, two distinct solutions', 'ohmylms' ),
					},
				] }
			/>
			<TextControl
				label={ __( 'Minimum generated number', 'ohmylms' ) }
				type="number"
				min={ 1 }
				max={ 1000 }
				value={ min }
				onChange={ setMin }
			/>
			<TextControl
				label={ __( 'Maximum generated number', 'ohmylms' ) }
				type="number"
				min={ 1 }
				max={ 1000 }
				value={ max }
				onChange={ setMax }
			/>
			{ preset ? (
				<p>{ preset.prompt }</p>
			) : (
				<p role="alert">
					{ __(
						'Use integers from 1 to 1000, with minimum no greater than maximum.',
						'ohmylms'
					) }
				</p>
			) }
			<p>
				{ __(
					'Division generates an exact product divided by a nonzero factor. Subtraction excludes negative results. Fractions use a shared denominator from 2 to 12. Linear equations use nonzero coefficients from 1 to 9. Pythagorean triples are whole-number right triangles built from two coprime numbers in the range (needs at least two numbers). Quadratics are built from two different whole-number solutions between minus the maximum and the maximum, each at least the minimum away from zero, so the equation always has two distinct whole solutions. Apply replaces the current numerical answer and variable definition.',
					'ohmylms'
				) }
			</p>
			<Button
				variant="secondary"
				disabled={ ! preset }
				onClick={ () => onGenerate( preset ) }
			>
				{ __( 'Apply generated question', 'ohmylms' ) }
			</Button>
		</details>
	);
}
