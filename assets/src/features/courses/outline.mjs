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

/**
 * One label for where the outline stands, for the editor header.
 *
 * @param {Object}  state             Editor state.
 * @param {boolean} state.saving      A save or publication is running.
 * @param {boolean} state.dirty       There are local edits that are not saved.
 * @param {boolean} state.unpublished The saved draft differs from the published version.
 * @return {string} One of saving, unsaved, unpublished or published.
 */
export function outlineStatus( { saving, dirty, unpublished } ) {
	if ( saving ) {
		return 'saving';
	}
	if ( dirty ) {
		return 'unsaved';
	}
	return unpublished ? 'unpublished' : 'published';
}

/**
 * Course skill outcomes whose shared skill no longer exists in the library.
 *
 * @param {Object} program Draft program.
 * @param {Object} names   Skill labels keyed by term ID; missing skills have none.
 * @return {number[]} Term IDs.
 */
export function missingOutlineSkills( program, names ) {
	return program.outcomes
		.filter( ( row ) => ! names?.[ row.term_id ] )
		.map( ( row ) => row.term_id );
}

/**
 * Remove skill outcomes with their practice placements and activity coverage links.
 *
 * @param {Object}   program Draft program.
 * @param {number[]} ids     Term IDs to remove.
 * @return {Object} Updated program.
 */
export function removeOutlineSkills( program, ids ) {
	const removed = ( id ) => ids.includes( id );
	return {
		...program,
		outcomes: program.outcomes.filter(
			( row ) => ! removed( row.term_id )
		),
		items: program.items
			.filter(
				( item ) =>
					item.type !== 'practice' || ! removed( item.content_id )
			)
			.map( ( item ) =>
				item.skill_ids?.some( removed )
					? {
							...item,
							skill_ids: item.skill_ids.filter(
								( id ) => ! removed( id )
							),
						}
					: item
			),
	};
}

/**
 * Where a skill can be practised from: a lesson's practice is the skill itself, as on Khan Academy.
 * A skill already linked to another lesson stays there, because a course places each skill once.
 *
 * @param {Object}        program       Draft program.
 * @param {number}        termId        Skill term ID.
 * @param {Object}        place         Destination.
 * @param {number|string} place.unitId  Unit ID.
 * @param {string}        place.groupId Lesson UUID, or empty for the unit.
 * @return {string} One of new, move, linked, elsewhere or placed.
 */
export function practicePlacement( program, termId, { unitId, groupId } ) {
	if (
		program.items.some(
			( item ) => item.type === 'practice' && item.content_id === termId
		)
	) {
		return 'placed';
	}
	const outcome = program.outcomes.find( ( row ) => row.term_id === termId );
	if ( ! outcome ) {
		return 'new';
	}
	const sameUnit = String( outcome.chapter_id || 0 ) === String( unitId );
	if ( sameUnit && ( outcome.group_id || '' ) === ( groupId || '' ) ) {
		return 'linked';
	}
	return outcome.group_id ? 'elsewhere' : 'move';
}

/**
 * Link a skill to a lesson (or unit) and place its practice in one step.
 *
 * @param {Object}        program       Draft program.
 * @param {Object}        skill         Skill choice.
 * @param {number}        skill.termId  Skill term ID.
 * @param {number|string} skill.unitId  Unit ID.
 * @param {string}        skill.groupId Lesson UUID, or empty for the unit.
 * @param {string}        skill.id      New placement UUID.
 * @return {Object|null} Updated program, or null when the skill is placed elsewhere.
 */
export function addOutlinePractice( program, { termId, unitId, groupId, id } ) {
	const placement = practicePlacement( program, termId, { unitId, groupId } );
	if ( 'elsewhere' === placement || 'placed' === placement ) {
		return null;
	}
	const scope = {
		chapter_id: unitId,
		...( groupId ? { group_id: groupId } : {} ),
	};
	let outcomes = program.outcomes;
	if ( 'new' === placement ) {
		outcomes = [
			...outcomes,
			{
				term_id: termId,
				required: false,
				target: 'proficient',
				chapter_id: unitId,
				group_id: groupId || '',
			},
		];
	} else if ( 'move' === placement ) {
		outcomes = outcomes.map( ( row ) =>
			row.term_id === termId
				? { ...row, chapter_id: unitId, group_id: groupId || '' }
				: row
		);
	}
	return {
		...program,
		outcomes,
		items: [
			...program.items,
			{
				id,
				content_id: termId,
				type: 'practice',
				style: 'practice',
				required: false,
				...scope,
			},
		],
	};
}

/**
 * Counts shown on a unit card.
 *
 * @param {Object}        program Draft program.
 * @param {number|string} unitId  Unit ID.
 * @return {{lessons: number, skills: number, activities: number}} Counts.
 */
export function outlineUnitSummary( program, unitId ) {
	const inUnit = ( row ) =>
		String( row.chapter_id || 0 ) === String( unitId );
	return {
		lessons: ( program.groups || [] ).filter( inUnit ).length,
		skills: program.outcomes.filter( inUnit ).length,
		activities: program.items.filter( inUnit ).length,
	};
}
