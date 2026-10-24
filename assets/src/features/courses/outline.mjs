/**
 * Move one stable row without changing the source list or its identifiers.
 * @param rows
 * @param id
 * @param offset
 */
export function moveOutlineRow( rows, id, offset ) {
	const result = [ ...rows ];
	const from = result.findIndex( ( row ) => row.id === id );
	const to = from + offset;
	if ( from >= 0 && to >= 0 && to < result.length ) {
		[ result[ from ], result[ to ] ] = [ result[ to ], result[ from ] ];
	}
	return result;
}

/**
 * Serialize the displayed unit/lesson order, keeping tests and the challenge terminal.
 * @param program
 * @param units
 */
export function orderedOutlineItems( program, units ) {
	const result = [];
	for ( const unit of [ ...units, { id: 0 } ] ) {
		const items = program.items.filter(
			( item ) => String( item.chapter_id || 0 ) === String( unit.id )
		);
		for ( const group of ( program.groups || [] ).filter(
			( row ) => String( row.chapter_id ) === String( unit.id )
		) ) {
			result.push(
				...items.filter(
					( item ) =>
						item.group_id === group.id &&
						! [ 'unit-test', 'course-challenge' ].includes(
							item.style
						)
				)
			);
		}
		const grouped = new Set( result );
		result.push(
			...items.filter(
				( item ) =>
					! grouped.has( item ) &&
					! [ 'unit-test', 'course-challenge' ].includes( item.style )
			)
		);
		result.push(
			...items.filter( ( item ) =>
				[ 'unit-test', 'course-challenge' ].includes( item.style )
			)
		);
	}
	const included = new Set( result );
	const remainder = program.items.filter(
		( item ) => ! included.has( item )
	);
	return [
		...result.filter( ( item ) => item.style !== 'course-challenge' ),
		...remainder.filter( ( item ) => item.style !== 'course-challenge' ),
		...result.filter( ( item ) => item.style === 'course-challenge' ),
		...remainder.filter( ( item ) => item.style === 'course-challenge' ),
	];
}

/**
 * Remove a lesson container, retaining its activities and skill outcomes in the unit.
 * @param program
 * @param id
 */
export function removeOutlineLesson( program, id ) {
	const ungroup = ( row ) => {
		if ( row.group_id !== id ) {
			return row;
		}
		const { group_id: removed, ...kept } = row;
		return kept;
	};
	return {
		...program,
		groups: ( program.groups || [] ).filter( ( row ) => row.id !== id ),
		items: program.items.map( ungroup ),
		outcomes: program.outcomes.map( ungroup ),
	};
}

/**
 * Intended skill coverage in each lesson, computed from current unsaved placements.
 * Shared resource tags and activities in other lessons do not imply coverage here.
 * @param program
 */
export function outlineLessonReadiness( program ) {
	return ( program.groups || [] ).map( ( lesson ) => {
		const member = ( row ) =>
			row.group_id === lesson.id &&
			String( row.chapter_id ) === String( lesson.chapter_id );
		const items = program.items.filter( member );
		const skills = program.outcomes
			.filter( member )
			.map( ( row ) => row.term_id );
		const taught = new Set();
		const assessed = new Set();
		for ( const item of items ) {
			const coverage =
				item.type === 'practice'
					? [ item.content_id ]
					: item.skill_ids || [];
			const target = [ 'quiz', 'practice', 'assignment' ].includes(
				item.type
			)
				? assessed
				: taught;
			coverage
				.filter( ( id ) => skills.includes( id ) )
				.forEach( ( id ) => target.add( id ) );
		}
		const missingTeaching = skills.filter( ( id ) => ! taught.has( id ) );
		const missingAssessment = skills.filter(
			( id ) => ! assessed.has( id )
		);
		const drafts = items.filter(
			( item ) => item.type !== 'practice' && item.status !== 'publish'
		);
		return {
			id: lesson.id,
			title: lesson.title,
			items: items.length,
			skills,
			missingTeaching,
			missingAssessment,
			drafts: drafts.length,
			complete:
				!! items.length &&
				!! skills.length &&
				! missingTeaching.length &&
				! missingAssessment.length &&
				! drafts.length,
		};
	} );
}
