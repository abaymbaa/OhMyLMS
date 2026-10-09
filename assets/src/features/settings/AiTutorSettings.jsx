// The JSX transform here compiles to createElement, so the import is required even though lint cannot see it.
import { createElement, useEffect, useState } from '@wordpress/element';
import {
	Button,
	CheckboxControl,
	Notice,
	RadioControl,
	SelectControl,
	Spinner,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

const PATH = '/ohmylms/v1/ai';

export function AiTutorSettings() {
	const [ data, setData ] = useState( null );
	const [ form, setForm ] = useState( null );
	const [ saving, setSaving ] = useState( false );
	const [ testing, setTesting ] = useState( false );
	const [ message, setMessage ] = useState( null );
	const load = ( snapshot ) => {
		setData( snapshot );
		setForm( {
			...snapshot.settings,
			practice_style: snapshot.practice_style,
			key: '',
			clear_key: false,
		} );
	};
	useEffect( () => {
		window.wp
			.apiFetch( { path: PATH } )
			.then( load )
			.catch( ( error ) =>
				setMessage( { status: 'error', text: error.message } )
			);
	}, [] );
	if ( ! data || ! form ) {
		return message ? (
			<Notice status="error" isDismissible={ false }>
				{ message.text }
			</Notice>
		) : (
			<Spinner />
		);
	}
	const summary = data.settings;
	const stats = data.stats;
	const locked =
		summary.key_from === 'constant' || summary.key_from === 'environment';
	const set = ( key, value ) =>
		setForm( ( previous ) => ( { ...previous, [ key ]: value } ) );
	const number = ( key, label, min, max, unit ) => (
		<TextControl
			type="number"
			label={ label }
			help={ unit }
			min={ min }
			max={ max }
			value={ form[ key ] }
			onChange={ ( value ) =>
				set( key, value === '' ? '' : Number( value ) )
			}
		/>
	);
	const run = async ( work ) => {
		setMessage( null );
		try {
			await work();
		} catch ( error ) {
			setMessage( { status: 'error', text: error.message } );
		}
	};
	const save = ( event ) => {
		event.preventDefault();
		if ( saving ) {
			return;
		}
		setSaving( true );
		run( async () => {
			load(
				await window.wp.apiFetch( {
					path: PATH,
					method: 'POST',
					data: form,
				} )
			);
			setMessage( {
				status: 'success',
				text: __( 'AI tutor settings saved.', 'ohmylms' ),
			} );
		} ).finally( () => setSaving( false ) );
	};
	const test = () => {
		setTesting( true );
		run( async () => {
			const result = await window.wp.apiFetch( {
				path: PATH + '/test',
				method: 'POST',
			} );
			setMessage( {
				status: result.ok ? 'success' : 'error',
				text: result.message,
			} );
			load( await window.wp.apiFetch( { path: PATH } ) );
		} ).finally( () => setTesting( false ) );
	};
	const providers = Object.entries( summary.providers ).map(
		( [ value, label ] ) => ( { value, label } )
	);
	return (
		<form className="ohmylms-streak-settings" onSubmit={ save }>
			<header className="ohmylms-streak-settings__header">
				<h2>{ __( 'AI tutor', 'ohmylms' ) }</h2>
				<p>
					{ __(
						'Connect Claude, OpenAI or Gemini so learners can ask for a hint before they answer and an explanation after. The tutor only explains: it never marks an answer, changes a score or affects mastery, and practice keeps working with your own hints and worked solutions if it is off or unavailable.',
						'ohmylms'
					) }
				</p>
			</header>
			{ message && (
				<Notice status={ message.status } isDismissible={ false }>
					{ message.text }
				</Notice>
			) }
			<fieldset
				disabled={ saving }
				className="ohmylms-streak-settings__fields"
			>
				<div className="ohmylms-streak-settings__grid">
					<section className="ohmylms-streak-settings__card">
						<ToggleControl
							label={ __( 'Turn the AI tutor on', 'ohmylms' ) }
							checked={ !! form.enabled }
							onChange={ ( value ) => set( 'enabled', value ) }
						/>
						<SelectControl
							label={ __( 'Provider', 'ohmylms' ) }
							value={ form.provider }
							options={ providers }
							onChange={ ( value ) => set( 'provider', value ) }
						/>
						<TextControl
							label={ __( 'Model', 'ohmylms' ) }
							help={ __(
								'Use a fast, inexpensive model: replies are a few sentences. Models that think at length use part of the reply budget below before writing.',
								'ohmylms'
							) }
							placeholder="claude-haiku-5-5"
							autoComplete="off"
							value={ form.model }
							onChange={ ( value ) => set( 'model', value ) }
						/>
						{ locked ? (
							<p>
								{ summary.key_from === 'constant'
									? __(
											'API key set by OHMYLMS_AI_API_KEY in wp-config.php.',
											'ohmylms'
										)
									: __(
											'API key set by the OHMYLMS_AI_API_KEY environment variable.',
											'ohmylms'
										) }
							</p>
						) : (
							<div>
								<TextControl
									type="password"
									label={ __( 'API key', 'ohmylms' ) }
									autoComplete="new-password"
									placeholder={
										summary.has_key
											? sprintf(
													/* translators: %s: last characters of the key */
													__(
														'Saved key %s. Type to replace.',
														'ohmylms'
													),
													summary.key_hint
												)
											: __(
													'Paste the key from your provider',
													'ohmylms'
												)
									}
									help={ __(
										'The key is stored encrypted and is never shown again. For a production site, define OHMYLMS_AI_API_KEY in wp-config.php instead.',
										'ohmylms'
									) }
									value={ form.key }
									onChange={ ( value ) =>
										set( 'key', value )
									}
								/>
								{ summary.has_key && (
									<CheckboxControl
										label={ __(
											'Remove the saved key',
											'ohmylms'
										) }
										checked={ form.clear_key }
										onChange={ ( value ) =>
											set( 'clear_key', value )
										}
									/>
								) }
							</div>
						) }
					</section>
					<section className="ohmylms-streak-settings__card">
						<h3>
							{ __( 'Help learners can ask for', 'ohmylms' ) }
						</h3>
						<CheckboxControl
							label={ __(
								'A hint before answering (the tutor is not told the answer)',
								'ohmylms'
							) }
							checked={ !! form.hints }
							onChange={ ( value ) => set( 'hints', value ) }
						/>
						<CheckboxControl
							label={ __(
								'An explanation of their answer after answering',
								'ohmylms'
							) }
							checked={ !! form.explanations }
							onChange={ ( value ) =>
								set( 'explanations', value )
							}
						/>
						<CheckboxControl
							label={ __(
								'Also for guests who are not logged in (limited to 10 requests a day each)',
								'ohmylms'
							) }
							checked={ !! form.guests }
							onChange={ ( value ) => set( 'guests', value ) }
						/>
						{ number(
							'daily_limit',
							__( 'Daily limit per learner', 'ohmylms' ),
							1,
							500,
							__(
								'Requests per day. Each question gets at most one hint and one explanation.',
								'ohmylms'
							)
						) }
						{ number(
							'max_tokens',
							__( 'Maximum reply length', 'ohmylms' ),
							100,
							1200,
							__( 'Tokens.', 'ohmylms' )
						) }
						{ number(
							'timeout',
							__( 'Wait for the provider', 'ohmylms' ),
							5,
							60,
							__( 'Seconds.', 'ohmylms' )
						) }
					</section>
				</div>
				<section className="ohmylms-streak-settings__card">
					<RadioControl
						label={ __( 'Practice style', 'ohmylms' ) }
						help={ __(
							'The default for skill practice. A page can choose with [ohmylms_practice style="lesson"].',
							'ohmylms'
						) }
						selected={ form.practice_style }
						options={ [
							{
								label: __(
									'Standard: questions in any order',
									'ohmylms'
								),
								value: 'standard',
							},
							{
								label: __(
									'Fast feedback lessons: recognise, then build, then solve; every miss comes back once',
									'ohmylms'
								),
								value: 'lesson',
							},
						] }
						onChange={ ( value ) => set( 'practice_style', value ) }
					/>
				</section>
				<div className="ohmylms-streak-settings__footer">
					<Button
						variant="primary"
						type="submit"
						isBusy={ saving }
						disabled={ saving }
					>
						{ __( 'Save AI tutor settings', 'ohmylms' ) }
					</Button>{ ' ' }
					<Button
						variant="secondary"
						isBusy={ testing }
						disabled={ ! summary.has_key || testing || saving }
						onClick={ test }
					>
						{ __( 'Test the saved connection', 'ohmylms' ) }
					</Button>
				</div>
				<section className="ohmylms-streak-settings__card">
					<h3>{ __( 'What is sent to the provider', 'ohmylms' ) }</h3>
					<ul>
						<li>
							{ __(
								'The question as the learner saw it, their own answer, and for an explanation the reference answer and your worked solution.',
								'ohmylms'
							) }
						</li>
						<li>
							{ __(
								'Never names, e-mail addresses, user IDs or anything about your site. Identical requests are answered from a cache for a week.',
								'ohmylms'
							) }
						</li>
						<li>
							{ __(
								'Learners type their own words, so mention the provider in your privacy policy and check its data-processing terms before using it with children.',
								'ohmylms'
							) }
						</li>
					</ul>
				</section>
				<section className="ohmylms-streak-settings__card">
					<h3>{ __( 'Usage so far', 'ohmylms' ) }</h3>
					<ul>
						<li>
							{ __( 'Requests to the provider', 'ohmylms' ) }:{ ' ' }
							{ stats.requests }
						</li>
						<li>
							{ __( 'Answered from the cache', 'ohmylms' ) }:{ ' ' }
							{ stats.cached }
						</li>
						<li>
							{ __( 'Failures', 'ohmylms' ) }: { stats.failures }
							{ stats.last_error
								? ` (${ stats.last_error })`
								: '' }
						</li>
						<li>
							{ __( 'Tokens in / out', 'ohmylms' ) }:{ ' ' }
							{ stats.input_tokens } / { stats.output_tokens }
						</li>
					</ul>
				</section>
			</fieldset>
		</form>
	);
}
