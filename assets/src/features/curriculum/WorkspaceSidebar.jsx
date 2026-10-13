import { createElement, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Dashicon } from '@wordpress/components';
import { AddContentMenu } from './AddContentMenu';
import { QuickAdd, KindIcon } from './WorkspaceParts';
import {
	containerOf,
	displayCounts,
	topicLabel,
	outlineDropPosition,
	visibleChildren,
} from './workspace.mjs';
import { groupLabel, skillLabel } from './syllabus.mjs';
import { skillText } from './skillTranslations.mjs';
import { categoryAppearance } from './categoryAppearance.mjs';

function label( node, language ) {
	if ( node.kind === 'content' ) {
		return topicLabel( node.content );
	}
	if ( node.kind === 'group' ) {
		return groupLabel( node.group );
	}
	return skillLabel( {
		...node.skill,
		name: skillText( node.skill, language ),
	} );
}

/**
 * One node of the outline: a button that selects it, and a toggle when something is nested inside.
 * @param root0
 * @param root0.node
 * @param root0.selected
 * @param root0.open
 * @param root0.onSelect
 * @param root0.onToggle
 * @param root0.drag
 */
function Branch( { node, selected, open, onSelect, onToggle, drag } ) {
	const isOpen = open.has( node.key );
	const nested = visibleChildren( node, drag.settings ).length > 0;
	const kind = { content: 'topic', group: 'chapter', skill: 'skill' }[
		node.kind
	];
	const total = node.kind === 'group' ? node.children.length : 0;
	const appearance =
		node.kind === 'skill'
			? categoryAppearance(
					node.skill,
					drag.settings,
					drag.tree.index.get( node.parentKey )?.group
				)
			: null;
	const counts =
		node.kind === 'content' ? displayCounts( node, drag.settings ) : null;
	let dropClass = '';
	if ( drag.target?.key === node.key ) {
		if ( drag.target.after === 'inside' ) {
			dropClass = ' is-drop-inside';
		} else {
			dropClass = drag.target.after
				? ' is-drop-after'
				: ' is-drop-before';
		}
	}
	return (
		<li className={ `ohmylms-ws-node is-${ kind }` }>
			<div
				className={ `ohmylms-ws-node-line${ selected === node.key ? ' is-selected' : '' }${ dropClass }` }
				onDragOver={ ( event ) => drag.over( event, node ) }
				onDrop={ ( event ) => drag.drop( event, node ) }
			>
				<button
					type="button"
					className="ohmylms-ws-drag-handle"
					draggable={ ! drag.pending }
					disabled={ drag.pending }
					aria-label={ sprintf(
						__(
							'Reorder %s. Use Alt and arrow keys to move.',
							'ohmylms'
						),
						label( node, drag.language )
					) }
					title={ __(
						'Drag to move; Alt + Up/Down reorders, Alt + Left moves folders out',
						'ohmylms'
					) }
					onDragStart={ ( event ) => drag.start( event, node ) }
					onDragEnd={ drag.end }
					onKeyDown={ ( event ) => drag.key( event, node ) }
				>
					<span className="ohmylms-ws-drag-grip" aria-hidden="true" />
				</button>
				{ nested ? (
					<button
						type="button"
						className="ohmylms-ws-toggle"
						aria-expanded={ isOpen }
						aria-label={ sprintf(
							isOpen
								? __( 'Collapse %s', 'ohmylms' )
								: __( 'Expand %s', 'ohmylms' ),
							label( node, drag.language )
						) }
						onClick={ () => onToggle( node.key ) }
					>
						<Dashicon
							icon={
								isOpen ? 'arrow-down-alt2' : 'arrow-right-alt2'
							}
						/>
					</button>
				) : (
					<span
						className="ohmylms-ws-toggle-spacer"
						aria-hidden="true"
					/>
				) }
				<button
					type="button"
					className="ohmylms-ws-node-main"
					draggable={ node.kind !== 'skill' && ! drag.pending }
					onDragStart={ ( event ) => drag.start( event, node ) }
					onDragEnd={ drag.end }
					aria-current={ selected === node.key ? 'true' : undefined }
					onClick={ () => onSelect( node.key ) }
				>
					<KindIcon
						kind={ kind }
						icon={
							appearance?.icon ||
							node.group?.icon ||
							node.content?.icon
						}
						color={ appearance?.color }
					/>
					<span className="ohmylms-ws-node-label">
						{ label( node, drag.language ) }
					</span>
					{ counts && (
						<span className="ohmylms-ws-node-count">
							{ [
								sprintf(
									_n(
										'%d skill',
										'%d skills',
										counts.skills,
										'ohmylms'
									),
									counts.skills
								),
								sprintf(
									_n(
										'%d folder',
										'%d folders',
										counts.topics + counts.chapters,
										'ohmylms'
									),
									counts.topics + counts.chapters
								),
							].join( ' · ' ) }
						</span>
					) }
					{ node.kind === 'group' && (
						<span
							className="ohmylms-ws-node-count"
							aria-label={ sprintf(
								_n( '%d skill', '%d skills', total, 'ohmylms' ),
								total
							) }
						>
							{ total }
						</span>
					) }
				</button>
			</div>
			{ nested && isOpen && (
				<ul className="ohmylms-ws-children">
					{ visibleChildren( node, drag.settings ).map( ( child ) => (
						<Branch
							key={ child.key }
							node={ child }
							selected={ selected }
							open={ open }
							onSelect={ onSelect }
							onToggle={ onToggle }
							drag={ drag }
						/>
					) ) }
				</ul>
			) }
		</li>
	);
}

/**
 * The syllabus outline, with nested topics and skills.
 * @param root0
 * @param root0.tree
 * @param root0.selected
 * @param root0.open
 * @param root0.onSelect
 * @param root0.onToggle
 * @param root0.onOpenAll
 * @param root0.onCloseAll
 * @param root0.onAddSkill
 * @param root0.onAddTopic
 * @param root0.onReorder
 * @param root0.language
 * @param root0.settings
 * @param root0.collapsed
 * @param root0.onCollapse
 * @param root0.pending
 */
export function WorkspaceSidebar( {
	tree,
	selected,
	open,
	onSelect,
	onToggle,
	onOpenAll,
	onCloseAll,
	onAddSkill,
	onAddTopic,
	onReorder,
	settings,
	language,
	collapsed,
	onCollapse,
	pending,
} ) {
	const [ adding, setAdding ] = useState( '' );
	const [ dragged, setDragged ] = useState( '' );
	const [ target, setTarget ] = useState( null );
	const endDrag = () => {
		setDragged( '' );
		setTarget( null );
	};
	const dropPlacement = ( event, node ) => {
		if ( node === tree.root ) {
			return 'inside';
		}
		const box = event.currentTarget.getBoundingClientRect();
		const fraction = ( event.clientY - box.top ) / box.height;
		if (
			node.kind === 'content' &&
			tree.index.get( dragged )?.kind !== 'skill' &&
			fraction > 0.25 &&
			fraction < 0.75
		) {
			return 'inside';
		}
		return fraction > 0.5;
	};
	const drag = {
		language,
		pending,
		target,
		tree,
		settings,
		start( event, node ) {
			if ( pending ) {
				event.preventDefault();
				return;
			}
			event.stopPropagation();
			event.dataTransfer.effectAllowed = 'move';
			event.dataTransfer.setData( 'text/plain', node.key );
			setDragged( node.key );
		},
		over( event, node ) {
			event.stopPropagation();
			const after = dropPlacement( event, node );
			if (
				pending ||
				outlineDropPosition( tree, dragged, node.key, after ) === null
			) {
				setTarget( null );
				return;
			}
			event.preventDefault();
			event.stopPropagation();
			event.dataTransfer.dropEffect = 'move';
			setTarget( { key: node.key, after } );
		},
		drop( event, node ) {
			event.preventDefault();
			event.stopPropagation();
			const after = dropPlacement( event, node );
			if (
				! pending &&
				outlineDropPosition( tree, dragged, node.key, after ) !== null
			) {
				onReorder( dragged, node.key, after );
			}
			endDrag();
		},
		end: endDrag,
		key( event, node ) {
			if (
				pending ||
				! event.altKey ||
				! [ 'ArrowUp', 'ArrowDown', 'ArrowLeft' ].includes( event.key )
			) {
				return;
			}
			event.preventDefault();
			const parent = tree.index.get( node.parentKey );
			if ( event.key === 'ArrowLeft' ) {
				if ( node.kind !== 'skill' && parent?.parentKey ) {
					onReorder(
						node.key,
						node.kind === 'content' ? parent.key : parent.parentKey,
						node.kind === 'content' ? true : 'inside'
					);
				}
				return;
			}
			const siblings =
				node.kind === 'skill'
					? visibleChildren(
							tree.index.get( parent.parentKey ),
							settings
						).filter( ( child ) => child.kind === 'skill' )
					: parent.children.filter(
							( child ) => child.kind === node.kind
						);
			const index = siblings.findIndex(
				( child ) => child.key === node.key
			);
			const down = event.key === 'ArrowDown';
			const sibling = siblings[ index + ( down ? 1 : -1 ) ];
			if ( sibling ) {
				onReorder( node.key, sibling.key, down );
			}
		},
	};
	if ( ! tree.root ) {
		return null;
	}
	const container = containerOf( tree, selected );
	const counts = displayCounts( tree.root, settings );
	const expandable = [];
	const collectTopics = ( parent ) =>
		visibleChildren( parent, settings ).forEach( ( child ) => {
			if ( visibleChildren( child, settings ).length ) {
				expandable.push( child.key );
			}
			collectTopics( child );
		} );
	collectTopics( tree.root );
	const allExpanded =
		expandable.length > 0 && expandable.every( ( key ) => open.has( key ) );
	const toggleLabel = allExpanded
		? __( 'Collapse all', 'ohmylms' )
		: __( 'Expand all', 'ohmylms' );
	const into =
		container.depth === 0
			? __( 'the syllabus', 'ohmylms' )
			: topicLabel( container.content );
	return (
		<aside
			className={ `ohmylms-ws-side${ collapsed ? ' is-collapsed' : '' }` }
			aria-label={ __( 'Syllabus outline', 'ohmylms' ) }
		>
			<div className="ohmylms-ws-side-head">
				<AddContentMenu
					compact
					className="ohmylms-ws-add-chapter"
					buttonLabel={ __( 'Add', 'ohmylms' ) }
					label={ __( 'Add to the outline', 'ohmylms' ) }
					disabled={ pending }
					items={ [
						{
							key: 'topic',
							title: __( 'Folder', 'ohmylms' ),
							info: __(
								'A folder containing skills and nested folders',
								'ohmylms'
							),
							onClick: () => setAdding( 'topic' ),
						},
						{
							key: 'skill',
							title: __( 'Skill', 'ohmylms' ),
							info: __(
								'A learning objective in this folder',
								'ohmylms'
							),
							onClick: () => setAdding( 'skill' ),
						},
					] }
				/>
				<div className="ohmylms-ws-side-tools is-header">
					<button
						type="button"
						onClick={ () => onSelect( tree.root.key ) }
						onDragOver={ ( event ) =>
							drag.over( event, tree.root )
						}
						onDrop={ ( event ) => drag.drop( event, tree.root ) }
						aria-label={ __( 'Syllabus home', 'ohmylms' ) }
						title={ __( 'Syllabus home', 'ohmylms' ) }
					>
						<Dashicon icon="admin-home" aria-hidden="true" />
					</button>
					<button
						type="button"
						onClick={ allExpanded ? onCloseAll : onOpenAll }
						aria-label={ toggleLabel }
						title={ toggleLabel }
						aria-expanded={ allExpanded }
						disabled={ ! expandable.length }
					>
						<Dashicon
							icon={
								allExpanded
									? 'editor-contract'
									: 'editor-expand'
							}
							aria-hidden="true"
						/>
					</button>
				</div>
				<span className="ohmylms-ws-side-count">
					<Dashicon icon="screenoptions" />
					<span>
						<span>
							{ sprintf(
								_n(
									'%d Folder',
									'%d Folders',
									counts.topics + counts.chapters,
									'ohmylms'
								),
								counts.topics + counts.chapters
							) }
						</span>
						<span>
							{ sprintf(
								_n(
									'%d Skill',
									'%d Skills',
									counts.skills,
									'ohmylms'
								),
								counts.skills
							) }
						</span>
					</span>
				</span>
				<button
					type="button"
					className="ohmylms-ws-collapse"
					aria-expanded={ ! collapsed }
					aria-label={
						collapsed
							? __( 'Show the outline', 'ohmylms' )
							: __( 'Hide the outline', 'ohmylms' )
					}
					onClick={ onCollapse }
				>
					<Dashicon
						icon={
							collapsed ? 'arrow-right-alt2' : 'arrow-left-alt2'
						}
					/>
				</button>
			</div>
			{ ! collapsed && (
				<div
					className="ohmylms-ws-side-body"
					onDragOver={ ( event ) => drag.over( event, tree.root ) }
					onDrop={ ( event ) => drag.drop( event, tree.root ) }
				>
					{ dragged &&
						tree.index.get( dragged )?.kind !== 'skill' && (
							<button
								type="button"
								className={ `ohmylms-ws-root-drop${ target?.key === tree.root.key ? ' is-drop-inside' : '' }` }
								onDragOver={ ( event ) =>
									drag.over( event, tree.root )
								}
								onDrop={ ( event ) =>
									drag.drop( event, tree.root )
								}
								onClick={ () => {
									onReorder(
										dragged,
										tree.root.key,
										'inside'
									);
									endDrag();
								} }
							>
								{ __(
									'Move to syllabus top level',
									'ohmylms'
								) }
							</button>
						) }
					{ adding && (
						<QuickAdd
							key={ adding }
							nameLabel={
								adding === 'topic'
									? __( 'Folder name', 'ohmylms' )
									: __( 'Skill name', 'ohmylms' )
							}
							codeLabel={ __( 'Code', 'ohmylms' ) }
							submitLabel={
								adding === 'topic'
									? __( 'Add folder', 'ohmylms' )
									: __( 'Add skill', 'ohmylms' )
							}

							pending={ pending }
							help={ sprintf(
								__( 'Goes into %s.', 'ohmylms' ),
								into
							) }
							onAdd={ ( data ) =>
								adding === 'topic'
									? onAddTopic( container.id, data )
									: onAddSkill( container.id, data )
							}
							onCancel={ () => setAdding( '' ) }
						/>
					) }

					<ul
						className="ohmylms-ws-tree"
						aria-label={ __( 'Folders and skills', 'ohmylms' ) }
					>
						{ visibleChildren( tree.root, settings ).map(
							( node ) => (
								<Branch
									key={ node.key }
									node={ node }
									selected={ selected }
									open={ open }
									onSelect={ onSelect }
									onToggle={ onToggle }
									drag={ drag }
								/>
							)
						) }
					</ul>
					{ ! tree.root.children.length && (
						<p className="ohmylms-ext-muted ohmylms-ws-side-empty">
							{ __(
								'No folders or skills yet. Use Add, or import a CSV file.',
								'ohmylms'
							) }
						</p>
					) }
				</div>
			) }
		</aside>
	);
}
