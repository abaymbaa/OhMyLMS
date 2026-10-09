import test from 'node:test';
import assert from 'node:assert/strict';
import { createQuizPlayer } from '../../assets/interactivity/quiz-player/player.js';

function fixture( overrides = {} ) {
	const context = {
		quizId: 7,
		page: 1,
		totalPages: 2,
		layout: 'one_question_per_page',
		errors: {},
		...overrides,
	};
	const events = [];
	const boxes = [ true, false ].map( ( answered ) => ( {
		answered,
		focused: false,
		querySelector( selector ) {
			return selector === '.is-required'
				? { value: '1', getAttribute: () => 'custom-type' }
				: {
						focus: () => {
							this.focused = true;
						},
					};
		},
	} ) );
	const root = { querySelectorAll: () => boxes };
	const player = createQuizPlayer( {
		getContext: () => context,
		getElement: () => ( { ref: { closest: () => root } } ),
		withSyncEvent: ( callback ) => callback,
		withScope: ( callback ) => callback,
		isAnswered: ( box, type ) => {
			assert.equal( type, 'custom-type' );
			return box.answered;
		},
		emit: ( root, name, detail ) => {
			events.push( { name, detail } );
			return ! context.cancel;
		},
		expire: () => {
			context.expired = true;
		},
	} );
	const event = {
		prevented: false,
		preventDefault() {
			this.prevented = true;
		},
		stopPropagation() {},
		target: { querySelector: () => ( { value: 'normal-submit' } ) },
	};
	return { context, boxes, player, event, events };
}

test( 'player navigation validates only the current page and honors cancellation', () => {
	const { context, boxes, player, event, events } = fixture();
	player.actions.next( event );
	assert.equal( context.page, 2 );
	assert.equal( events.at( -1 ).name, 'quiz-navigated' );
	player.actions.submit( event );
	assert.equal( context.submitting, undefined );
	assert.equal( event.prevented, true );
	assert.equal( boxes[ 1 ].focused, true );
	context.cancel = true;
	player.actions.previous( event );
	assert.equal( context.page, 2 );
} );

test( 'full submission checks other pages and exit bypasses required-answer checks', () => {
	const { context, boxes, player, event } = fixture( { page: 2 } );
	boxes[ 0 ].answered = false;
	boxes[ 1 ].answered = true;
	player.actions.submit( event );
	assert.deepEqual( context.errors, { 1: true } );
	assert.equal( context.page, 1 );
	event.target.querySelector = () => ( {
		value: 'ohmylms-quiz-preview-exit',
	} );
	event.prevented = false;
	player.actions.submit( event );
	assert.equal( context.submitting, true );
	assert.equal( event.prevented, false );
} );

test( 'player state reads current context and formats the timer', () => {
	const { context, player } = fixture( { remaining: 3661, duration: 7322 } );
	assert.equal( player.state.timeLabel, '01h 01m 01s' );
	assert.equal( player.state.timerWidth, '50%' );
	assert.equal( player.state.nextDisplay, '' );
	context.page = 2;
	assert.equal( player.state.nextDisplay, 'none' );
	assert.equal( player.state.submitDisplay, '' );
	context.remaining = 0;
	assert.equal( player.state.timeLabel, '00m 00s' );
} );

test( 'per-page validation moves to the page containing the first unanswered question', () => {
	const { context, player, event } = fixture( {
		layout: 'number_of_questions_per_page',
		perPage: 2,
	} );
	player.actions.next( event );
	assert.equal( context.page, 1 );
	assert.deepEqual( context.errors, { 2: true } );
} );

test( 'timer mount uses the injected scoped expiry and cleanup allows remounting', ( t ) => {
	t.mock.timers.enable( { apis: [ 'setInterval', 'Date' ] } );
	const context = { timed: true, remaining: 1, quizId: 9 };
	const root = {};
	let expired = 0;
	const player = createQuizPlayer( {
		getContext: () => context,
		getElement: () => ( { ref: root } ),
		withScope: ( callback ) => callback,
		withSyncEvent: ( callback ) => callback,
		emit: () => true,
		isAnswered: () => true,
		expire: () => expired++,
	} );
	const cleanup = player.callbacks.mount();
	assert.equal( player.callbacks.mount(), undefined );
	t.mock.timers.tick( 1000 );
	assert.equal( expired, 1 );
	cleanup();
	context.remaining = 2;
	const cleanupAgain = player.callbacks.mount();
	cleanupAgain();
	t.mock.timers.tick( 2000 );
	assert.equal( expired, 1 );
} );
