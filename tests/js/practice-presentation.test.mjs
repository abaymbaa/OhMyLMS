import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';

// A small DOM double runs the authored runner; no grading or selection logic is duplicated.
function fixture( failAnswer = false, remembered = null ) {
	let focus;
	class Element {
		constructor( tag ) {
			this.tag = tag;
			this.children = [];
			this.attributes = {};
			this.events = {};
			this.value = '';
			this.classList = { add() {} };
		}
		setAttribute( name, value ) {
			this.attributes[ name ] = String( value );
		}
		appendChild( child ) {
			this.children.push( child );
			child.parentNode = this;
			return child;
		}
		set innerHTML( value ) {
			this.children = [];
		}
		set textContent( value ) {
			this.children = [];
			this.text = value;
		}
		addEventListener( name, listener ) {
			this.events[ name ] = listener;
		}
		focus() {
			focus = this;
		}
		querySelector() {
			return null;
		}
		remove() {
			this.parentNode.children = this.parentNode.children.filter(
				( child ) => child !== this
			);
		}
	}
	const stage = new Element( 'div' );
	const root = {
		dataset: { course: '7', skill: '9', items: '3' },
		querySelector: () => stage,
	};
	const requests = [];
	const state = {
		uuid: 'session-a',
		status: 'active',
		item_limit: 3,
		answered: 0,
		correct: 0,
		current: { item_id: 10, name: 'Add', settings: { type: 'numerical' } },
	};
	let stored = remembered;
	const context = {
		document: {
			querySelector: () => root,
			createElement: ( tag ) => new Element( tag ),
		},
		window: {
			ohmylmsPractice: {
				root: '/api/',
				studentId: 4,
				loggedIn: true,
				practiceI18n: {
					start: 'Start',
					resume: 'Resume',
					check: 'Check',
					next: 'Next',
					progress: 'Question %1$d of %2$d',
					correct: 'Correct',
					done: '%1$d of %2$d',
					again: 'Again',
				},
			},
		},
		localStorage: { getItem: () => null },
		sessionStorage: {
			getItem: () => stored,
			setItem: ( key, value ) => {
				stored = value;
			},
			removeItem: () => {
				stored = null;
			},
		},
		fetch: async ( url, options ) => {
			requests.push( { url, options } );
			if ( url.endsWith( '/answer' ) )
				return {
					ok: ! failAnswer,
					json: async () =>
						failAnswer
							? { message: 'Try again' }
							: {
									correct: true,
									feedback: {},
									session: {
										...state,
										status: 'completed',
										answered: 3,
										correct: 3,
										current: null,
									},
								},
				};
			return { ok: true, json: async () => state };
		},
	};
	vm.runInNewContext(
		fs.readFileSync(
			new URL( '../../assets/js/practice.js', import.meta.url ),
			'utf8'
		),
		context
	);
	const all = ( node = stage ) => [
		node,
		...node.children.flatMap( ( child ) => all( child ) ),
	];
	return {
		stage,
		requests,
		all,
		focus: () => focus,
		stored: () => stored,
		button: ( text ) =>
			all().find(
				( node ) => node.tag === 'button' && node.text === text
			),
	};
}
const settle = async () => {
	for ( let i = 0; i < 12; i++ ) await Promise.resolve();
};

test( 'practice entry does not start an attempt; checking is single-flight and Next uses the server state', async () => {
	const f = fixture();
	assert.equal( f.requests.length, 0 );
	f.button( 'Start' ).events.click();
	await settle();
	assert.equal( f.stored(), 'session-a' );
	assert.equal( f.focus().attributes.class, 'ohmylms-practice-progress' );
	const form = f.all().find( ( node ) => node.tag === 'form' );
	const controls = f
		.all()
		.find(
			( node ) => node.attributes.class === 'ohmylms-practice-controls'
		);
	assert.ok( controls.children.includes( f.button( 'Check' ) ) );
	form.events.submit( { preventDefault() {} } );
	form.events.submit( { preventDefault() {} } );
	await settle();
	assert.equal(
		f.requests.filter( ( r ) => r.url.endsWith( '/answer' ) ).length,
		1
	);
	assert.equal( f.button( 'Check' ).hidden, true );
	assert.equal( f.focus(), f.button( 'Next' ) );
	f.button( 'Next' ).events.click();
	assert.equal( f.stored(), null );
	assert.ok( f.button( 'Again' ) );
	assert.equal( f.focus().attributes.class, 'ohmylms-practice-summary' );
} );

test( 'answer failures keep the question and permit retry', async () => {
	const f = fixture( true );
	f.button( 'Start' ).events.click();
	await settle();
	const form = f.all().find( ( node ) => node.tag === 'form' );
	form.events.submit( { preventDefault() {} } );
	await settle();
	assert.equal( f.button( 'Check' ).disabled, false );
	assert.ok( f.all().includes( form ) );
	assert.equal( f.stored(), 'session-a' );
} );

test( 'resume reads the remembered session without creating or answering one', async () => {
	const f = fixture( false, 'session-a' );
	f.button( 'Resume' ).events.click();
	await settle();
	assert.equal( f.requests.length, 1 );
	assert.equal( f.requests[ 0 ].options.method, 'GET' );
	assert.equal( f.requests[ 0 ].url, '/api/practice/sessions/session-a' );
} );
