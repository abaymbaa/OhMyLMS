import { createElement } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useCurriculum } from './context';
import { AddItemRow } from './AddItemRow';
import { ItemPanel } from './ItemPanel';
import { isOpen, siblingInfo, typeLabel } from './model.mjs';
import { workspacePath } from './workspace.mjs';

function counts( item ) {
	const parts = [];
	const { course = 0, skill = 0, bank = 0, quiz = 0 } = item.links || {};
	if ( course ) {
		parts.push(
			sprintf(
				_n( '%d course', '%d courses', course, 'ohmylms' ),
				course
			)
		);
	}
	if ( skill ) {
		parts.push(
			sprintf( _n( '%d skill', '%d skills', skill, 'ohmylms' ), skill )
		);
	}
	if ( bank ) {
		parts.push(
			sprintf(
				_n( '%d question bank', '%d question banks', bank, 'ohmylms' ),
				bank
			)
		);
	}
	if ( quiz ) {
		parts.push(
			sprintf(
				_n( '%d quiz or exam', '%d quizzes or exams', quiz, 'ohmylms' ),
				quiz
			)
		);
	}
	// A syllabus also counts its skill groups and the skills in them.
	const { groups = 0, skills: placed = 0 } = item.syllabus || {};
	if ( groups ) {
		parts.push(
			sprintf(
				_n( '%d skill group', '%d skill groups', groups, 'ohmylms' ),
				groups
			)
		);
	}
	if ( placed ) {
		parts.push(
			sprintf(
				_n(
					'%d skill in groups',
					'%d skills in groups',
					placed,
					'ohmylms'
				),
				placed
			)
		);
	}
	return parts.join( ' · ' );
}

/**
 * One accordion row: disclosure toggle, summary, actions, optional edit panel and nested children.
 * @param root0
 * @param root0.node
 */
export function TreeNode( { node } ) {
	const c = useCurriculum();
	const { item } = node;
	const open = isOpen( c.view, c.search, item.id );
	const editing = c.openId === item.id;
	const { index, count } = siblingInfo( c.items, item.id );
	const childrenId = `ohmylms-cur-children-${ item.id }`;
	const panelId = `ohmylms-cur-panel-${ item.id }`;
	const summary = counts( item );
	const hasChildren = item.child_count > 0;
	const adding = c.adding === item.id;
	return (
		<li className="ohmylms-cur-node">
			<div
				className={ `ohmylms-cur-row${ editing ? ' is-editing' : '' }${ c.search.matches.has( item.id ) ? ' is-match' : '' }` }
				style={ { '--ohmylms-cur-depth': node.depth } }
			>
				{ hasChildren ? (
					<button
						type="button"
						className="ohmylms-cur-toggle"
						aria-expanded={ open }
						aria-controls={ open ? childrenId : undefined }
						aria-label={ sprintf(
							open
								? __( 'Collapse %s', 'ohmylms' )
								: __( 'Expand %s', 'ohmylms' ),
							item.name
						) }
						onClick={ () => c.actions.toggle( item.id ) }
					>
						<span aria-hidden="true">{ open ? '▾' : '▸' }</span>
					</button>
				) : (
					<span
						className="ohmylms-cur-toggle-spacer"
						aria-hidden="true"
					/>
				) }
				<span className="screen-reader-text">
					{ sprintf( __( 'Level %d', 'ohmylms' ), node.depth + 1 ) }
				</span>
				<span className="ohmylms-cur-type">
					{ typeLabel( item.item_type ) }
				</span>
				{ item.is_syllabus && (
					<span className="ohmylms-cur-badge ohmylms-cur-syllabus-badge">
						{ __( 'Syllabus', 'ohmylms' ) }
					</span>
				) }
				{ item.is_syllabus ? (
					// A syllabus is edited in its own full-page workspace; its name opens it.
					<a
						className="ohmylms-cur-name ohmylms-cur-name-link"
						href={ `#${ workspacePath( item.id ) }` }
						title={ __( 'Open the syllabus editor', 'ohmylms' ) }
					>
						{ item.name }
					</a>
				) : (
					<span className="ohmylms-cur-name">{ item.name }</span>
				) }
				{ ( item.code || item.version ) && (
					<span className="ohmylms-cur-meta">
						{ [ item.code, item.version ]
							.filter( Boolean )
							.join( ' · ' ) }
					</span>
				) }
				{ summary && (
					<span className="ohmylms-cur-counts">{ summary }</span>
				) }
				<span className="ohmylms-cur-actions">
					<Button
						variant="secondary"
						size="small"
						aria-expanded={ editing }
						aria-controls={ editing ? panelId : undefined }
						aria-label={ sprintf(
							editing
								? __( 'Close editor for %s', 'ohmylms' )
								: __( 'Edit %s', 'ohmylms' ),
							item.name
						) }
						onClick={ () => c.actions.toggleEditor( item.id ) }
					>
						{ editing
							? __( 'Close', 'ohmylms' )
							: __( 'Edit', 'ohmylms' ) }
					</Button>
					{ /* A syllabus holds skill groups and skills; its contents are added in its Syllabus content section. */ }
					{ ! item.is_syllabus && (
						<Button
							variant="secondary"
							size="small"
							aria-label={ sprintf(
								__( 'Add child to %s', 'ohmylms' ),
								item.name
							) }
							onClick={ () => c.actions.startAdd( item.id ) }
						>
							{ __( 'Add child', 'ohmylms' ) }
						</Button>
					) }
					<Button
						id={ `ohmylms-cur-up-${ item.id }` }
						variant="secondary"
						size="small"
						disabled={ c.pending || c.search.active || index <= 0 }
						aria-label={ sprintf(
							__( 'Move %s up', 'ohmylms' ),
							item.name
						) }
						onClick={ () => c.actions.step( item, -1 ) }
					>
						<span aria-hidden="true">↑</span>
					</Button>
					<Button
						id={ `ohmylms-cur-down-${ item.id }` }
						variant="secondary"
						size="small"
						disabled={
							c.pending ||
							c.search.active ||
							index < 0 ||
							index >= count - 1
						}
						aria-label={ sprintf(
							__( 'Move %s down', 'ohmylms' ),
							item.name
						) }
						onClick={ () => c.actions.step( item, 1 ) }
					>
						<span aria-hidden="true">↓</span>
					</Button>
				</span>
			</div>
			{ editing && (
				<ItemPanel key={ item.id } id={ panelId } item={ item } />
			) }
			{ hasChildren && open && node.children.length > 0 && (
				<ul id={ childrenId } className="ohmylms-cur-children">
					{ node.children.map( ( child ) => (
						<TreeNode key={ child.item.id } node={ child } />
					) ) }
				</ul>
			) }
			{ adding && (
				<div
					className="ohmylms-cur-add-wrap"
					style={ { '--ohmylms-cur-depth': node.depth + 1 } }
				>
					<AddItemRow parentId={ item.id } parentName={ item.name } />
				</div>
			) }
		</li>
	);
}
