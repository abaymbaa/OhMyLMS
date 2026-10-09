import {
	createElement,
	useContext,
	useEffect,
	useState,
} from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import {
	Button,
	Notice,
	Spinner,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
import { AdminCard, AdminPage } from '../../extensions/AdminPage';
import { HubContext } from '../content-hub/context';
import { TrackEditor } from './TrackEditor';
import * as api from './api.mjs';
import { validateTrack } from './model.mjs';

/**
 * Learning Tracks: named groupings of selected courses and curriculum items that can span
 * curricula. Creating and editing happen inline on this screen.
 */
export function TracksPage() {
	const [ tracks, setTracks ] = useState( null );
	const [ loadError, setLoadError ] = useState( '' );
	const [ openId, setOpenId ] = useState( 0 );
	const [ notice, setNotice ] = useState( null );
	const [ creating, setCreating ] = useState( false );
	const [ title, setTitle ] = useState( '' );
	const [ description, setDescription ] = useState( '' );
	const [ touched, setTouched ] = useState( false );
	const [ pending, setPending ] = useState( false );
	const errors = validateTrack( { title, description } );
	const hub = useContext( HubContext );

	const reload = () => {
		setLoadError( '' );
		return api
			.listTracks()
			.then( ( response ) => setTracks( response.tracks || [] ) )
			.catch( ( error ) =>
				setLoadError(
					error?.message ||
						__( 'Could not load learning tracks.', 'ohmylms' )
				)
			);
	};
	useEffect( () => {
		reload();
	}, [] );
	useEffect( () => {
		if ( ! notice || notice.kind !== 'success' ) {
			return undefined;
		}
		const timer = setTimeout(
			() =>
				setNotice( ( current ) =>
					current === notice ? null : current
				),
			8000
		);
		return () => clearTimeout( timer );
	}, [ notice ] );
	const say = ( kind, text ) =>
		setNotice( { id: Date.now() + Math.random(), kind, text } );
	const replace = ( track ) =>
		setTracks( ( previous ) =>
			( previous || [] ).map( ( existing ) =>
				existing.id === track.id ? track : existing
			)
		);

	async function create( event ) {
		event.preventDefault();
		setTouched( true );
		if ( Object.keys( errors ).length || pending ) {
			return;
		}
		setPending( true );
		try {
			const response = await api.createTrack( { title, description } );
			setTracks( ( previous ) => [
				...( previous || [] ),
				response.track,
			] );
			setOpenId( response.track.id );
			setCreating( false );
			setTitle( '' );
			setDescription( '' );
			setTouched( false );
			say(
				'success',
				sprintf(
					__(
						'Created “%s”. Add courses or syllabuses, then publish it.',
						'ohmylms'
					),
					response.track.title
				)
			);
		} catch ( error ) {
			say(
				'error',
				error?.message ||
					__( 'The track could not be created.', 'ohmylms' )
			);
		} finally {
			setPending( false );
		}
	}

	return (
		<AdminPage
			className="ohmylms-tracks-admin"
			headingLevel={ hub ? 2 : 1 }
			title={ __( 'Learning Tracks', 'ohmylms' ) }
			description={ __(
				'A Learning Track groups selected courses and syllabuses, from any curricula, into one path learners can add to their dashboard. Following a track never enrols anyone or changes access.',
				'ohmylms'
			) }
			actions={
				<Button
					variant="primary"
					onClick={ () => {
						setCreating( true );
						setTimeout(
							() =>
								document
									.getElementById( 'ohmylms-track-new-title' )
									?.focus(),
							0
						);
					} }
				>
					{ __( 'New track', 'ohmylms' ) }
				</Button>
			}
		>
			<div className="ohmylms-cur-status">
				{ notice && (
					<Notice
						key={ notice.id }
						status={ notice.kind }
						onRemove={ () => setNotice( null ) }
					>
						{ notice.text }
					</Notice>
				) }
			</div>
			{ loadError && (
				<Notice status="error" isDismissible={ false }>
					{ loadError }{ ' ' }
					<Button variant="link" onClick={ reload }>
						{ __( 'Try again', 'ohmylms' ) }
					</Button>
				</Notice>
			) }
			{ ! tracks && ! loadError && <Spinner /> }
			{ tracks && (
				<AdminCard>
					{ creating && (
						<form
							className="ohmylms-cur-add ohmylms-track-new"
							onSubmit={ create }
							noValidate
						>
							<TextControl
								id="ohmylms-track-new-title"
								label={ __(
									'Name of the new track',
									'ohmylms'
								) }
								value={ title }
								onChange={ setTitle }
								help={
									touched && errors.title
										? errors.title === 'required'
											? __(
													'Enter a name for the track.',
													'ohmylms'
												)
											: __(
													'That is too long.',
													'ohmylms'
												)
										: undefined
								}
								__nextHasNoMarginBottom
							/>
							<TextareaControl
								label={ __(
									'Description (optional)',
									'ohmylms'
								) }
								value={ description }
								onChange={ setDescription }
								__nextHasNoMarginBottom
							/>
							<div className="ohmylms-cur-add-actions">
								<Button
									variant="primary"
									type="submit"
									isBusy={ pending }
									disabled={ pending }
								>
									{ __( 'Create track', 'ohmylms' ) }
								</Button>
								<Button
									variant="secondary"
									onClick={ () => setCreating( false ) }
								>
									{ __( 'Cancel', 'ohmylms' ) }
								</Button>
							</div>
						</form>
					) }
					{ ! tracks.length && ! creating && (
						<div className="ohmylms-cur-empty">
							<p>
								<strong>
									{ __(
										'No learning tracks yet.',
										'ohmylms'
									) }
								</strong>
							</p>
							<p className="ohmylms-ext-muted">
								{ __(
									'Create a track such as “English Exam Preparation” and pick the courses and syllabuses that belong in it. Nothing is added automatically.',
									'ohmylms'
								) }
							</p>
							<Button
								variant="primary"
								onClick={ () => setCreating( true ) }
							>
								{ __( 'Create the first track', 'ohmylms' ) }
							</Button>
						</div>
					) }
					<ul
						className="ohmylms-cur-tree ohmylms-track-list"
						aria-label={ __( 'Learning tracks', 'ohmylms' ) }
					>
						{ tracks.map( ( track ) => {
							const editing = openId === track.id;
							return (
								<li
									key={ track.id }
									className="ohmylms-cur-node"
								>
									<div
										className={ `ohmylms-cur-row${ editing ? ' is-editing' : '' }` }
										style={ { '--ohmylms-cur-depth': 0 } }
									>
										<span
											className="ohmylms-cur-toggle-spacer"
											aria-hidden="true"
										/>
										<span className="ohmylms-cur-type">
											{ track.status === 'published'
												? __( 'Published', 'ohmylms' )
												: __( 'Draft', 'ohmylms' ) }
										</span>
										<span className="ohmylms-cur-name">
											{ track.title }
										</span>
										<span className="ohmylms-cur-counts">
											{ sprintf(
												_n(
													'%d member',
													'%d members',
													track.member_count,
													'ohmylms'
												),
												track.member_count
											) }
											{ track.follower_count > 0
												? ` · ${ sprintf( _n( '%d follower', '%d followers', track.follower_count, 'ohmylms' ), track.follower_count ) }`
												: '' }
										</span>
										<span className="ohmylms-cur-actions">
											<Button
												variant="secondary"
												size="small"
												aria-expanded={ editing }
												aria-controls={
													editing
														? `ohmylms-track-panel-${ track.id }`
														: undefined
												}
												aria-label={ sprintf(
													editing
														? __(
																'Close editor for %s',
																'ohmylms'
															)
														: __(
																'Edit %s',
																'ohmylms'
															),
													track.title
												) }
												onClick={ () =>
													setOpenId(
														editing ? 0 : track.id
													)
												}
											>
												{ editing
													? __( 'Close', 'ohmylms' )
													: __( 'Edit', 'ohmylms' ) }
											</Button>
										</span>
									</div>
									{ editing && (
										<TrackEditor
											key={ track.id }
											track={ track }
											say={ say }
											onChanged={ replace }
											onDeleted={ ( id ) => {
												setTracks( ( previous ) =>
													previous.filter(
														( existing ) =>
															existing.id !== id
													)
												);
												setOpenId( 0 );
											} }
										/>
									) }
								</li>
							);
						} ) }
					</ul>
				</AdminCard>
			) }
		</AdminPage>
	);
}
