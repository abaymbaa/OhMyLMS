/**
 * Pure model for the exam builder: one document of sections and questions, edited in place and saved as a whole.
 */
export const QUESTION_TYPES = [
	{ value: 'single-choice', label: 'Multiple choice' },
	{ value: 'multiple-choice', label: 'Multiple select' },
	{ value: 'numerical', label: 'Numerical answer' },
	{ value: 'short-text', label: 'Written answer (teacher marked)' },
];

export const MAX_OPTIONS = 8;

let counter = 0;
const key = () => `k${ ++counter }`;

const choiceType = ( type ) =>
	type === 'single-choice' || type === 'multiple-choice';

/**
 * A blank question of one type.
 * @param {string} type Question type.
 * @return {Object} Question.
 */
export function newQuestion( type = 'single-choice' ) {
	return {
		key: key(),
		id: 0,
		type,
		text: '',
		points: 1,
		options: choiceType( type )
			? [ 1, 2, 3, 4 ].map( () => ( { text: '', correct: false } ) )
			: [],
		answer: '',
	};
}

/**
 * A blank document with one empty section.
 * @return {Object} Document.
 */
export function newDocument() {
	return {
		title: '',
		duration_minutes: 60,
		instructions: '',
		sections: [ { key: key(), title: '', questions: [] } ],
	};
}

/**
 * Give every section and question a stable client key, so React keeps focus while items move.
 * @param {Object} document Document from the server.
 * @return {Object} Document with keys.
 */
export function withKeys( document ) {
	return {
		...document,
		sections: ( document.sections || [] ).map( ( section ) => ( {
			...section,
			key: key(),
			questions: ( section.questions || [] ).map( ( question ) => ( {
				...question,
				key: key(),
			} ) ),
		} ) ),
	};
}

const patchQuestion = ( document, at, patch ) => ( {
	...document,
	sections: document.sections.map( ( section, s ) =>
		s !== at.s
			? section
			: {
					...section,
					questions: section.questions.map( ( question, q ) =>
						q === at.q
							? {
									...question,
									...( typeof patch === 'function'
										? patch( question )
										: patch ),
								}
							: question
					),
				}
	),
} );

export const updateQuestion = patchQuestion;

/**
 * Switch the type, keeping what still applies: options stay for choice types, one correct answer for single.
 * @param {Object} document Document.
 * @param {Object} at       Position {s, q}.
 * @param {string} type     New type.
 * @return {Object} Document.
 */
export function changeType( document, at, type ) {
	return patchQuestion( document, at, ( question ) => {
		let options = question.options;
		if ( choiceType( type ) && ! options.length ) {
			options = newQuestion( type ).options;
		}
		if ( type === 'single-choice' ) {
			let kept = false;
			options = options.map( ( option ) => {
				const correct = option.correct && ! kept;
				kept = kept || correct;
				return { ...option, correct };
			} );
		}
		return { type, options };
	} );
}

/**
 * Mark an option correct; single choice has exactly one, multiple select toggles.
 * @param {Object} document Document.
 * @param {Object} at       Position {s, q}.
 * @param {number} index    Option index.
 * @return {Object} Document.
 */
export function toggleCorrect( document, at, index ) {
	return patchQuestion( document, at, ( question ) => ( {
		options: question.options.map( ( option, i ) => {
			if ( question.type === 'single-choice' ) {
				return { ...option, correct: i === index };
			}
			return i === index
				? { ...option, correct: ! option.correct }
				: option;
		} ),
	} ) );
}

export const setOptionText = ( document, at, index, text ) =>
	patchQuestion( document, at, ( question ) => ( {
		options: question.options.map( ( option, i ) =>
			i === index ? { ...option, text } : option
		),
	} ) );

export const addOption = ( document, at ) =>
	patchQuestion( document, at, ( question ) => ( {
		options:
			question.options.length >= MAX_OPTIONS
				? question.options
				: [ ...question.options, { text: '', correct: false } ],
	} ) );

export const removeOption = ( document, at, index ) =>
	patchQuestion( document, at, ( question ) => ( {
		options:
			question.options.length <= 2
				? question.options
				: question.options.filter( ( option, i ) => i !== index ),
	} ) );

/**
 * Append a question to a section.
 * @param {Object} document Document.
 * @param {number} s        Section index.
 * @param {string} type     Question type.
 * @return {Object} Document.
 */
export function addQuestion( document, s, type = 'single-choice' ) {
	return {
		...document,
		sections: document.sections.map( ( section, i ) =>
			i === s
				? {
						...section,
						questions: [
							...section.questions,
							newQuestion( type ),
						],
					}
				: section
		),
	};
}

export const addSection = ( document ) => ( {
	...document,
	sections: [
		...document.sections,
		{ key: key(), title: '', questions: [] },
	],
} );

export const setSectionTitle = ( document, s, title ) => ( {
	...document,
	sections: document.sections.map( ( section, i ) =>
		i === s ? { ...section, title } : section
	),
} );

/**
 * Remove a section, or a question when `q` is given. The document keeps at least one section.
 * @param {Object} document Document.
 * @param {number} s        Section index.
 * @param {number} [q]      Question index.
 * @return {Object} Document.
 */
export function removeItem( document, s, q ) {
	if ( q === undefined ) {
		const sections = document.sections.filter( ( x, i ) => i !== s );
		return {
			...document,
			sections: sections.length
				? sections
				: [ { key: key(), title: '', questions: [] } ],
		};
	}
	return {
		...document,
		sections: document.sections.map( ( section, i ) =>
			i === s
				? {
						...section,
						questions: section.questions.filter(
							( x, j ) => j !== q
						),
					}
				: section
		),
	};
}

/**
 * Copy a question into the slot after it; the copy is new to the server.
 * @param {Object} document Document.
 * @param {Object} at       Position {s, q}.
 * @return {Object} Document.
 */
export function duplicateQuestion( document, at ) {
	return {
		...document,
		sections: document.sections.map( ( section, s ) => {
			if ( s !== at.s ) {
				return section;
			}
			const source = section.questions[ at.q ];
			const copy = {
				...source,
				key: key(),
				id: 0,
				options: source.options.map( ( option ) => ( { ...option } ) ),
			};
			const questions = [ ...section.questions ];
			questions.splice( at.q + 1, 0, copy );
			return { ...section, questions };
		} ),
	};
}

/**
 * Move a question up or down inside its section.
 * @param {Object} document Document.
 * @param {Object} at       Position {s, q}.
 * @param {number} step     -1 up, 1 down.
 * @return {Object} Document.
 */
export function moveQuestion( document, at, step ) {
	return {
		...document,
		sections: document.sections.map( ( section, s ) => {
			const target = at.q + step;
			if (
				s !== at.s ||
				target < 0 ||
				target >= section.questions.length
			) {
				return section;
			}
			const questions = [ ...section.questions ];
			[ questions[ at.q ], questions[ target ] ] = [
				questions[ target ],
				questions[ at.q ],
			];
			return { ...section, questions };
		} ),
	};
}

/**
 * What stops a question from being published.
 * @param {Object} question Question.
 * @return {string[]} Short problem phrases, empty when complete.
 */
export function questionProblems( question ) {
	const problems = [];
	if ( ! question.text.trim() ) {
		problems.push( 'text' );
	}
	if ( choiceType( question.type ) ) {
		const filled = question.options.filter( ( o ) => o.text.trim() );
		const correct = filled.filter( ( o ) => o.correct );
		if ( filled.length < 2 ) {
			problems.push( 'options' );
		}
		if (
			! correct.length ||
			( question.type === 'single-choice' && correct.length > 1 )
		) {
			problems.push( 'correct' );
		}
	}
	if (
		question.type === 'numerical' &&
		( question.answer.trim() === '' ||
			! Number.isFinite( Number( question.answer ) ) )
	) {
		problems.push( 'answer' );
	}
	return problems;
}

/**
 * Counts for the summary panel.
 * @param {Object} document Document.
 * @return {Object} sections, questions, points and the number of incomplete questions.
 */
export function summarize( document ) {
	const all = document.sections.flatMap( ( section ) => section.questions );
	return {
		sections: document.sections.length,
		questions: all.length,
		points: all.reduce(
			( sum, q ) => sum + ( Number( q.points ) || 0 ),
			0
		),
		incomplete: all.filter( ( q ) => questionProblems( q ).length ).length,
	};
}

/**
 * Whole-exam number of the question at a position, counting across sections.
 * @param {Object} document Document.
 * @param {Object} at       Position {s, q}.
 * @return {number} One-based number.
 */
export function numberOf( document, at ) {
	let n = 0;
	for ( let s = 0; s < at.s; s++ ) {
		n += document.sections[ s ].questions.length;
	}
	return n + at.q + 1;
}

/**
 * The selection after an edit, kept inside the document.
 * @param {Object} document Document.
 * @param {Object} at       Wanted position {s, q}.
 * @return {Object} A position that exists, or {s: 0, q: -1} when there are no questions.
 */
export function clampSelection( document, at ) {
	const s = Math.min( at.s, document.sections.length - 1 );
	const size = document.sections[ s ].questions.length;
	if ( size ) {
		return { s, q: Math.min( Math.max( at.q, 0 ), size - 1 ) };
	}
	const next = document.sections.findIndex( ( x ) => x.questions.length );
	return next < 0 ? { s, q: -1 } : { s: next, q: 0 };
}
