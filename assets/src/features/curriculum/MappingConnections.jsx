/** @jsx createElement */
import { createElement, useEffect, useState } from '@wordpress/element';
import { relationshipLabels } from './relationships.mjs';

/**
 * Connect only anchors visible within independently scrolling columns.
 * @param {Object} props          Overlay props.
 * @param {Object} props.gridRef  Grid element ref.
 * @param {number} props.sharedId Active shared skill.
 * @param          props.revision Layout and mapping changes.
 */
export function MappingConnections( { gridRef, sharedId, revision } ) {
	const [ drawing, setDrawing ] = useState( {
		width: 0,
		height: 0,
		paths: [],
	} );
	useEffect( () => {
		const grid = gridRef.current;
		if ( ! grid ) {
			return;
		}
		let frame = 0;
		const visible = ( element ) => {
			const box = element.getBoundingClientRect();
			if ( ! box.width || ! box.height ) {
				return null;
			}
			const list = element.closest( '.ohmylms-comparison-skills-list' );
			if ( list ) {
				const clip = list.getBoundingClientRect();
				if ( box.top < clip.top || box.top >= clip.bottom ) {
					return null;
				}
			}
			return box;
		};
		const update = () => {
			frame = 0;
			const origin = grid.getBoundingClientRect();
			const anchor = grid.querySelector(
				`[data-shared-anchor="${ sharedId }"]`
			);
			const start = anchor && visible( anchor );
			const paths = [];
			if ( start && sharedId ) {
				const x1 = start.right - origin.left + grid.scrollLeft;
				const y1 =
					start.top + start.height / 2 - origin.top + grid.scrollTop;
				const groups = new Map();
				for ( const target of grid.querySelectorAll(
					`[data-connection-shared="${ sharedId }"]`
				) ) {
					const end = visible( target );
					if ( ! end ) {
						continue;
					}
					const x2 = end.left - origin.left + grid.scrollLeft;
					const y2 =
						end.top +
						Math.min( 22, end.height / 2 ) -
						origin.top +
						grid.scrollTop;
					const relation = target.dataset.connectionRelation;
					const pending = target.dataset.connectionPending === 'true';
					const group = target.dataset.connectionGroup;
					if ( relation === 'combined' && group ) {
						const key = `${ group }:${ target.dataset.syllabusId }`;
						if ( ! groups.has( key ) ) {
							groups.set( key, [] );
						}
						groups.get( key ).push( { x2, y2, relation, pending } );
					} else {
						paths.push( {
							d: `M ${ x1 } ${ y1 } C ${ x1 + 24 } ${ y1 }, ${ x2 - 24 } ${ y2 }, ${ x2 } ${ y2 }`,
							relation,
							pending,
						} );
					}
				}
				for ( const members of groups.values() ) {
					const x =
						Math.min( ...members.map( ( row ) => row.x2 ) ) - 8;
					const top = Math.min( ...members.map( ( row ) => row.y2 ) );
					const bottom = Math.max(
						...members.map( ( row ) => row.y2 )
					);
					const middle = ( top + bottom ) / 2;
					paths.push( {
						...members[ 0 ],
						d: `M ${ x1 } ${ y1 } C ${ x1 + 24 } ${ y1 }, ${ x - 24 } ${ middle }, ${ x } ${ middle } M ${ x } ${ top } V ${ bottom } ${ members.map( ( row ) => `M ${ x } ${ row.y2 } H ${ row.x2 }` ).join( ' ' ) }`,
					} );
				}
			}
			setDrawing( {
				width: grid.scrollWidth,
				height: grid.scrollHeight,
				paths,
			} );
		};
		const schedule = () => {
			if ( ! frame ) {
				frame = requestAnimationFrame( update );
			}
		};
		const resize = new ResizeObserver( schedule );
		resize.observe( grid );
		for ( const column of grid.children ) {
			resize.observe( column );
		}
		const mutations = new MutationObserver( ( changes ) => {
			if (
				changes.some(
					( change ) =>
						! change.target.closest?.(
							'.ohmylms-mapping-connections'
						)
				)
			) {
				schedule();
			}
		} );
		mutations.observe( grid, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: [
				'data-connection-shared',
				'data-connection-relation',
				'data-connection-pending',
				'data-connection-group',
			],
		} );
		grid.addEventListener( 'scroll', schedule, true );
		window.addEventListener( 'resize', schedule );
		schedule();
		return () => {
			resize.disconnect();
			mutations.disconnect();
			grid.removeEventListener( 'scroll', schedule, true );
			window.removeEventListener( 'resize', schedule );
			cancelAnimationFrame( frame );
		};
	}, [ gridRef, sharedId, revision ] );
	return (
		<svg
			className="ohmylms-mapping-connections"
			width={ drawing.width }
			height={ drawing.height }
			aria-hidden="true"
		>
			{ drawing.paths.map( ( path, index ) => (
				<path
					key={ index }
					d={ path.d }
					className={ `is-${ path.relation }${ path.pending ? ' is-pending' : '' }` }
				>
					<title>{ relationshipLabels()[ path.relation ] }</title>
				</path>
			) ) }
		</svg>
	);
}
