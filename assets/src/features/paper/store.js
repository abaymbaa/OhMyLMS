import { createReduxStore, register } from '@wordpress/data';

export const PAPER_STORE = 'ohmylms/paper';

const DEFAULT_STATE = { view: false, answers: false, types: {} };

/**
 * Editor-only paper view state: whether the canvas shows sheets, whether the answer key is
 * visible, and each question block's type so numbering can skip unnumbered statements.
 * Nothing here is saved with the exam.
 */
const store = createReduxStore( PAPER_STORE, {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'SET_VIEW':
				return { ...state, view: action.view };
			case 'SET_ANSWERS':
				return { ...state, answers: action.answers };
			case 'SET_QUESTION_TYPE':
				if ( state.types[ action.clientId ] === action.questionType ) {
					return state;
				}
				return {
					...state,
					types: {
						...state.types,
						[ action.clientId ]: action.questionType,
					},
				};
			default:
				return state;
		}
	},
	actions: {
		setView: ( view ) => ( { type: 'SET_VIEW', view: Boolean( view ) } ),
		setAnswers: ( answers ) => ( {
			type: 'SET_ANSWERS',
			answers: Boolean( answers ),
		} ),
		setQuestionType: ( clientId, questionType ) => ( {
			type: 'SET_QUESTION_TYPE',
			clientId,
			questionType,
		} ),
	},
	selectors: {
		isPaperView: ( state ) => state.view,
		showsAnswers: ( state ) => state.answers,
		getQuestionType: ( state, clientId ) => state.types[ clientId ] || '',
	},
} );

// The native editor bundle evaluates this module once per screen.
register( store );
