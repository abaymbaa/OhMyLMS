/** @jsx createElement */
import { createElement, useEffect, useRef } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';
import { DEFAULT_CONFIG, MAX_PARAMS, normalizeConfig } from './config.mjs';
import { mountFunctionGraph } from './function-graph.mjs';

/**
 * @return {Object} Interface text for the activity, translated for the editor.
 */
function labels() {
	return {
		graph: __( 'Graph', 'ohmylms' ),
		equations: __( 'Equations', 'ohmylms' ),
		equation: __( 'Equation', 'ohmylms' ),
		addFunction: __( 'Add function', 'ohmylms' ),
		remove: __( 'Remove function', 'ohmylms' ),
		parameters: __( 'Parameters', 'ohmylms' ),
		invalid: __( 'Cannot graph this expression yet.', 'ohmylms' ),
	};
}

/**
 * Numeric field that keeps the raw text while typing and saves finite numbers only.
 *
 * @param {Object}                props          Field properties.
 * @param {string}                props.label    Field label.
 * @param {number}                props.value    Saved number.
 * @param {function(number):void} props.onChange Save a number.
 * @return {Element} Control.
 */
function NumberControl( { label, value, onChange } ) {
	return (
		<TextControl
			label={ label }
			type="number"
			value={ String( value ) }
			onChange={ ( text ) => {
				if ( text !== '' && Number.isFinite( Number( text ) ) ) {
					onChange( Number( text ) );
				}
			} }
		/>
	);
}

/**
 * Live preview that is also the authoring surface for the starting equations.
 *
 * @param {Object}                props        Preview properties.
 * @param {Object}                props.config Normalized configuration.
 * @param {function(Object):void} props.onEdit Save an edited configuration.
 * @return {Element} Preview host.
 */
function ActivityPreview( { config, onEdit } ) {
	const host = useRef( null );
	const handle = useRef( null );
	const latest = useRef( onEdit );
	latest.current = onEdit;
	useEffect( () => {
		handle.current = mountFunctionGraph( host.current, config, {
			authoring: true,
			labels: labels(),
			fonts: window.ohmylmsActivity?.fonts,
			onChange: ( next ) => latest.current( next ),
		} );
		return () => handle.current.destroy();
		// Mounted once; later edits go through update().
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );
	useEffect( () => {
		handle.current?.update( config );
	}, [ config ] );
	return <div ref={ host } className="ohmylms-activity-host" />;
}

/**
 * Editor for the interactive activity block.
 *
 * @param {Object}                props               Block editor properties.
 * @param {Object}                props.attributes    Saved activity and configuration.
 * @param {function(Object):void} props.setAttributes Update saved attributes.
 * @return {Element} Editor.
 */
export function InteractiveActivityEdit( { attributes, setAttributes } ) {
	const config = attributes.config?.version
		? normalizeConfig( attributes.config )
		: DEFAULT_CONFIG;
	const blockProps = useBlockProps( { className: 'ohmylms-activity' } );
	const save = ( next ) => setAttributes( { config: next } );
	const setView = ( key, value ) =>
		save( { ...config, view: { ...config.view, [ key ]: value } } );
	const setParam = ( index, key, value ) =>
		save( {
			...config,
			params: config.params.map( ( param, position ) =>
				position === index ? { ...param, [ key ]: value } : param
			),
		} );
	const usedNames = config.params.map( ( param ) => param.name );
	const freeName = 'abcdfghijklmnopqrstuvwyz'
		.split( '' )
		.find( ( name ) => ! usedNames.includes( name ) );
	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Graph window', 'ohmylms' ) }>
					{ [
						[ 'xMin', __( 'x minimum', 'ohmylms' ) ],
						[ 'xMax', __( 'x maximum', 'ohmylms' ) ],
						[ 'yMin', __( 'y minimum', 'ohmylms' ) ],
						[ 'yMax', __( 'y maximum', 'ohmylms' ) ],
					].map( ( [ key, label ] ) => (
						<NumberControl
							key={ key }
							label={ label }
							value={ config.view[ key ] }
							onChange={ ( value ) => setView( key, value ) }
						/>
					) ) }
				</PanelBody>
				<PanelBody
					title={ __( 'Parameters (sliders)', 'ohmylms' ) }
					initialOpen={ false }
				>
					<p>
						{ __(
							'Use a parameter name as a letter in an equation, for example a x^2 + b.',
							'ohmylms'
						) }
					</p>
					{ config.params.map( ( param, index ) => (
						<div
							key={ param.name }
							className="ohmylms-activity-param-editor"
						>
							<strong>{ param.name }</strong>
							{ [
								[ 'min', __( 'Minimum', 'ohmylms' ) ],
								[ 'max', __( 'Maximum', 'ohmylms' ) ],
								[ 'step', __( 'Step', 'ohmylms' ) ],
								[ 'value', __( 'Start value', 'ohmylms' ) ],
							].map( ( [ key, label ] ) => (
								<NumberControl
									key={ key }
									label={ label }
									value={ param[ key ] }
									onChange={ ( value ) =>
										setParam( index, key, value )
									}
								/>
							) ) }
							<Button
								variant="link"
								isDestructive
								onClick={ () =>
									save( {
										...config,
										params: config.params.filter(
											( item, position ) =>
												position !== index
										),
									} )
								}
							>
								{ __( 'Remove parameter', 'ohmylms' ) }
							</Button>
						</div>
					) ) }
					{ config.params.length < MAX_PARAMS && freeName && (
						<Button
							variant="secondary"
							onClick={ () =>
								save( {
									...config,
									params: [
										...config.params,
										{
											name: freeName,
											min: -5,
											max: 5,
											step: 0.1,
											value: 1,
										},
									],
								} )
							}
						>
							{ __( 'Add parameter', 'ohmylms' ) }
						</Button>
					) }
				</PanelBody>
				<PanelBody
					title={ __( 'Learner options', 'ohmylms' ) }
					initialOpen={ false }
				>
					<ToggleControl
						label={ __( 'Learners can edit equations', 'ohmylms' ) }
						checked={ config.allowEdit }
						onChange={ ( value ) =>
							save( { ...config, allowEdit: value } )
						}
					/>
					<ToggleControl
						label={ __( 'Learners can add functions', 'ohmylms' ) }
						checked={ config.allowAdd }
						onChange={ ( value ) =>
							save( { ...config, allowAdd: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<ActivityPreview config={ config } onEdit={ save } />
		</div>
	);
}

registerBlockType( metadata, {
	edit: InteractiveActivityEdit,
	save: () => null,
} );
