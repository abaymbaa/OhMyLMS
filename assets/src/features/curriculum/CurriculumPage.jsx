import {
	createElement,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, Notice, Spinner, TextControl } from '@wordpress/components';
import { AdminCard, AdminPage } from '../../extensions/AdminPage';
import { AddItemRow } from './AddItemRow';
import { CurriculumContext } from './context';
import { HubContext } from '../content-hub/context';
import { TreeNode } from './TreeNode';
import * as api from './api.mjs';
import {
	buildTree,
	collapseAll,
	createViewState,
	DEFAULT_MAX_DEPTH,
	ensureOpen,
	expandAll,
	filterTree,
	pruneState,
	resetOverrides,
	searchItems,
	siblingMove,
	toggleOpen,
	withoutTopics,
} from './model.mjs';

const STORAGE_KEY = 'ohmylms-curriculum-expanded';

function readStored() {
	try {
		const value = JSON.parse(
			window.sessionStorage.getItem( STORAGE_KEY ) || '[]'
		);
		return Array.isArray( value )
			? value.filter( ( id ) => Number.isInteger( id ) )
			: [];
	} catch {
		return [];
	}
}
function writeStored( ids ) {
	try {
		window.sessionStorage.setItem( STORAGE_KEY, JSON.stringify( ids ) );
	} catch {
		/* Storage can be unavailable; the tree still works. */
	}
}

/**
 * Accordion curriculum editor. Branches open and close independently, items are added and edited
 * inline on this screen, and which branches are open is kept apart from the data so saving,
 * moving or linking never collapses what the administrator was looking at.
 */
export function CurriculumPage() {
	const [ data, setData ] = useState( null );
	const [ loadError, setLoadError ] = useState( '' );
	const [ view, setView ] = useState( () => createViewState( readStored() ) );
	const [ query, setQuery ] = useState( '' );
	const [ openId, setOpenId ] = useState( 0 );
	const [ adding, setAdding ] = useState( null );
	const [ notice, setNotice ] = useState( null );
	const [ pending, setPending ] = useState( false );
	const busy = useRef( false );
	const focusAfter = useRef( null );
	const hub = useContext( HubContext );

	const items = data?.items || [];
	const visibleItems = useMemo( () => withoutTopics( items ), [ items ] );
	const search = useMemo(
		() => searchItems( visibleItems, query ),
		[ visibleItems, query ]
	);
	const tree = useMemo(
		() => filterTree( buildTree( visibleItems ), search ),
		[ visibleItems, search ]
	);

	const reload = () => {
		setLoadError( '' );
		return api
			.loadTree()
			.then( ( response ) => {
				setData( {
					items: response.items || [],
					types: response.types || [],
					maxDepth: response.limits?.max_depth || DEFAULT_MAX_DEPTH,
				} );
				setView( ( previous ) =>
					pruneState( previous, response.items || [] )
				);
			} )
			.catch( ( error ) =>
				setLoadError(
					error?.message ||
						__( 'Could not load the curriculum.', 'ohmylms' )
				)
			);
	};
	useEffect( () => {
		reload();
	}, [] );
	useEffect( () => writeStored( [ ...view.expanded ] ), [ view.expanded ] );
	useEffect( () => setView( resetOverrides ), [ query ] );
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
	// Reordering reinserts a row's buttons; return keyboard focus to the same control.
	useEffect( () => {
		if ( ! focusAfter.current ) {
			return;
		}
		const [ primary, ...rest ] = focusAfter.current;
		focusAfter.current = null;
		for ( const id of [ primary, ...rest ] ) {
			const element = document.getElementById( id );
			if ( element && ! element.disabled ) {
				return element.focus();
			}
		}
	}, [ items ] );

	const say = ( kind, text ) =>
		setNotice( { id: Date.now() + Math.random(), kind, text } );

	function applyItems( next ) {
		setData( ( previous ) => ( { ...previous, items: next } ) );
		setView( ( previous ) => pruneState( previous, next ) );
		setOpenId( ( id ) =>
			next.some( ( item ) => item.id === id ) ? id : 0
		);
		setAdding( ( parent ) =>
			parent === null ||
			parent === 0 ||
			next.some( ( item ) => item.id === parent )
				? parent
				: null
		);
	}

	/**
	 * Run one guarded server change; returns the response, or null after showing the error.
	 * @param work
	 * @param success
	 */
	async function run( work, success ) {
		if ( busy.current ) {
			return null;
		}
		busy.current = true;
		setPending( true );
		try {
			const response = ( await work() ) || {};
			if ( response.items ) {
				applyItems( response.items );
			}
			if ( success ) {
				say(
					'success',
					typeof success === 'function'
						? success( response )
						: success
				);
			}
			return response;
		} catch ( error ) {
			say(
				'error',
				error?.message ||
					__(
						'The change could not be saved. Nothing was changed.',
						'ohmylms'
					)
			);
			return null;
		} finally {
			busy.current = false;
			setPending( false );
		}
	}

	const actions = {
		run,
		say,
		// For changes made outside run() (a CSV import) that still return the fresh tree.
		applyItems,
		toggle: ( id ) =>
			setView( ( previous ) => toggleOpen( previous, search, id ) ),
		toggleEditor: ( id ) =>
			setOpenId( ( current ) => ( current === id ? 0 : id ) ),
		startAdd( parentId ) {
			setAdding( parentId );
			if ( parentId ) {
				setView( ( previous ) => ensureOpen( previous, parentId ) );
			}
			setTimeout(
				() =>
					document
						.getElementById( `ohmylms-cur-add-name-${ parentId }` )
						?.focus(),
				0
			);
		},
		cancelAdd: () => setAdding( null ),
		async create( parentId, fields ) {
			const response = await run(
				() => api.createItem( { parent_id: parentId, ...fields } ),
				( result ) =>
					sprintf( __( 'Added “%s”.', 'ohmylms' ), result.item.name )
			);
			if ( response && parentId ) {
				setView( ( previous ) => ensureOpen( previous, parentId ) );
			}
			return Boolean( response );
		},
		async update( item, payload ) {
			const response = await run(
				() =>
					api.updateItem( item.id, {
						...payload,
						expected_updated_at: item.updated_at,
					} ),
				( result ) =>
					sprintf( __( 'Saved “%s”.', 'ohmylms' ), result.item.name )
			);
			return Boolean( response );
		},
		async move( item, parentId, position ) {
			const response = await run(
				() => api.moveItem( item.id, parentId, position ),
				() => sprintf( __( 'Moved “%s”.', 'ohmylms' ), item.name )
			);
			if ( response && parentId ) {
				setView( ( previous ) => ensureOpen( previous, parentId ) );
			}
			return Boolean( response );
		},
		async step( item, direction ) {
			const target = siblingMove( items, item.id, direction );
			if ( ! target ) {
				return false;
			}
			const preferred = direction < 0 ? 'up' : 'down';
			focusAfter.current = [
				`ohmylms-cur-${ preferred }-${ item.id }`,
				`ohmylms-cur-${ preferred === 'up' ? 'down' : 'up' }-${ item.id }`,
			];
			const response = await run(
				() => api.moveItem( item.id, target.parentId, target.position ),
				() =>
					sprintf(
						direction < 0
							? __( 'Moved “%s” up.', 'ohmylms' )
							: __( 'Moved “%s” down.', 'ohmylms' ),
						item.name
					)
			);
			if ( ! response ) {
				focusAfter.current = null;
			}
			return Boolean( response );
		},
		async remove( item, options ) {
			const response = await run(
				() => api.deleteItem( item.id, options ),
				( result ) => {
					const parts = [
						sprintf(
							_n(
								'Deleted “%1$s” and %2$d item under it.',
								'Deleted “%1$s” and %2$d items under it.',
								Math.max(
									0,
									( result.deleted || [] ).length - 1
								),
								'ohmylms'
							),
							item.name,
							Math.max( 0, ( result.deleted || [] ).length - 1 )
						),
					];
					if ( result.promoted ) {
						parts.push(
							sprintf(
								_n(
									'%d child moved up.',
									'%d children moved up.',
									result.promoted,
									'ohmylms'
								),
								result.promoted
							)
						);
					}
					if ( result.links_removed ) {
						parts.push(
							sprintf(
								_n(
									'%d link removed.',
									'%d links removed.',
									result.links_removed,
									'ohmylms'
								),
								result.links_removed
							)
						);
					}
					if ( result.tracks_updated ) {
						parts.push(
							sprintf(
								_n(
									'Removed from %d learning track.',
									'Removed from %d learning tracks.',
									result.tracks_updated,
									'ohmylms'
								),
								result.tracks_updated
							)
						);
					}
					return parts.join( ' ' );
				}
			);
			return Boolean( response );
		},
	};

	const context = {
		items,
		types: data?.types || [],
		maxDepth: data?.maxDepth || DEFAULT_MAX_DEPTH,
		view,
		search,
		openId,
		adding,
		pending,
		actions,
	};

	return (
		<AdminPage
			className="ohmylms-curriculum"
			headingLevel={ hub ? 2 : 1 }
			title={ __( 'Curriculum', 'ohmylms' ) }
			description={ __(
				'Organize exam boards, national curricula, tests, grades, subjects and syllabuses into any structure, then place courses, skills, question banks and exams in it. Learning mode stays a course setting.',
				'ohmylms'
			) }
			actions={
				<Button
					variant="primary"
					onClick={ () => actions.startAdd( 0 ) }
				>
					{ __( 'Add top-level item', 'ohmylms' ) }
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
			{ ! data && ! loadError && <Spinner /> }
			{ data && (
				<CurriculumContext.Provider value={ context }>
					<AdminCard>
						<div className="ohmylms-ext-toolbar ohmylms-cur-toolbar">
							<TextControl
								label={ __( 'Search curriculum', 'ohmylms' ) }
								type="search"
								value={ query }
								onChange={ setQuery }
								__nextHasNoMarginBottom
							/>
							{ query && (
								<Button
									variant="secondary"
									onClick={ () => setQuery( '' ) }
								>
									{ __( 'Clear search', 'ohmylms' ) }
								</Button>
							) }
							<Button
								variant="secondary"
								onClick={ () => setView( expandAll( items ) ) }
							>
								{ __( 'Expand all', 'ohmylms' ) }
							</Button>
							<Button
								variant="secondary"
								onClick={ () => setView( collapseAll() ) }
							>
								{ __( 'Collapse all', 'ohmylms' ) }
							</Button>
							<Button variant="secondary" onClick={ reload }>
								{ __( 'Reload', 'ohmylms' ) }
							</Button>
						</div>
						<p
							className="ohmylms-ext-muted ohmylms-cur-search-status"
							role="status"
						>
							{ search.active
								? search.matches.size
									? sprintf(
											_n(
												'%d matching item, shown inside its branch.',
												'%d matching items, shown inside their branches.',
												search.matches.size,
												'ohmylms'
											),
											search.matches.size
										)
									: __( 'No matching items.', 'ohmylms' )
								: '' }
						</p>
						{ adding === 0 && (
							<div
								className="ohmylms-cur-add-wrap"
								style={ { '--ohmylms-cur-depth': 0 } }
							>
								<AddItemRow parentId={ 0 } parentName="" />
							</div>
						) }
						{ ! items.length && adding !== 0 && (
							<div className="ohmylms-cur-empty">
								<p>
									<strong>
										{ __(
											'No curriculum structure yet.',
											'ohmylms'
										) }
									</strong>
								</p>
								<p className="ohmylms-ext-muted">
									{ __(
										'Add a top-level item such as an exam board, a national curriculum or a test, then add levels, grades, sections, subjects or syllabuses beneath it. You choose the names and the depth.',
										'ohmylms'
									) }
								</p>
								<Button
									variant="primary"
									onClick={ () => actions.startAdd( 0 ) }
								>
									{ __( 'Add the first item', 'ohmylms' ) }
								</Button>
							</div>
						) }
						{ tree.length > 0 && (
							<ul
								className="ohmylms-cur-tree"
								aria-label={ __(
									'Curriculum structure',
									'ohmylms'
								) }
							>
								{ tree.map( ( node ) => (
									<TreeNode
										key={ node.item.id }
										node={ node }
									/>
								) ) }
							</ul>
						) }
					</AdminCard>
				</CurriculumContext.Provider>
			) }
		</AdminPage>
	);
}
