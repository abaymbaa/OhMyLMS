/**
 * Skill practice runner. Questions arrive learner-safe (option tokens, no answer key);
 * each answer is graded by the server, which returns feedback and the next question.
 * Guests practise with the same pseudonymous credential as inline checks.
 */
( function () {
	'use strict';
	var config = window.ohmylmsPractice || {};
	var i18n = Object.assign(
		{},
		config.i18n || {},
		config.practiceI18n || {}
	);
	var root = document.querySelector( '.ohmylms-practice' );
	if ( ! root ) return;
	var stage = root.querySelector( '.ohmylms-practice-stage' );
	var session = null;
	var token = null;
	var storageKey =
		'ohmylms-practice-' +
		( config.studentId || 'guest' ) +
		'-' +
		root.dataset.course +
		'-' +
		root.dataset.skill;
	function remembered( value ) {
		try {
			if ( arguments.length ) {
				if ( value ) sessionStorage.setItem( storageKey, value );
				else sessionStorage.removeItem( storageKey );
			}
			return sessionStorage.getItem( storageKey );
		} catch ( error ) {
			return null;
		}
	}

	function request( path, body, method ) {
		var headers = { 'Content-Type': 'application/json' };
		if ( config.nonce ) headers[ 'X-WP-Nonce' ] = config.nonce;
		if ( token ) headers[ 'X-OhMyLMS-Guest' ] = token;
		return fetch( config.root + path, {
			method: method || 'POST',
			credentials: 'same-origin',
			headers: headers,
			body: method === 'GET' ? undefined : JSON.stringify( body || {} ),
		} ).then( function ( response ) {
			return response.json().then( function ( data ) {
				if ( ! response.ok )
					throw new Error( ( data && data.message ) || i18n.error );
				return data;
			} );
		} );
	}
	function el( tag, attributes, children ) {
		var node = document.createElement( tag );
		Object.keys( attributes || {} ).forEach( function ( key ) {
			if ( key === 'text' ) node.textContent = attributes[ key ];
			else if ( key === 'html' ) node.innerHTML = attributes[ key ];
			else node.setAttribute( key, attributes[ key ] );
		} );
		( children || [] ).forEach( function ( child ) {
			if ( child ) node.appendChild( child );
		} );
		return node;
	}
	function format( template ) {
		var args = Array.prototype.slice.call( arguments, 1 );
		var index = 0;
		return String( template || '' ).replace(
			/%(\d\$)?[ds]/g,
			function ( match, position ) {
				return String(
					position
						? args[ parseInt( position, 10 ) - 1 ]
						: args[ index++ ]
				);
			}
		);
	}

	/** Build answer inputs for a learner-safe question view; returns a collector. */
	function renderInputs( container, view ) {
		var type = view.settings && view.settings.type;
		var name = 'q' + view.item_id;
		if ( type === 'fill-in-the-blank' && view.inline_blanks ) {
			var blanks = [];
			view.inline_blanks.forEach( function ( part ) {
				if ( Object.prototype.hasOwnProperty.call( part, 'text' ) ) {
					container.appendChild( el( 'span', { html: part.text } ) );
				} else {
					var input = el( 'input', {
						type: 'text',
						class: 'ohmylms-text-input',
						size: part.length,
						'aria-label': 'Blank ' + ( blanks.length + 1 ),
					} );
					input.style.cssText =
						'display:inline-block;min-width:0;max-width:100%;box-sizing:border-box;font:inherit;letter-spacing:inherit;padding:0.2em 0.5em;width:calc(' +
						part.length +
						'ch + 1.2em)';
					blanks.push( input );
					container.appendChild( input );
				}
			} );
			return function () {
				return blanks.map( function ( input ) {
					return input.value;
				} );
			};
		}
		if (
			type === 'single-choice' ||
			type === 'true-false' ||
			type === 'multiple-choice'
		) {
			var kind = type === 'multiple-choice' ? 'checkbox' : 'radio';
			view.questions.forEach( function ( option ) {
				var input = el( 'input', {
					type: kind,
					name: name,
					value: option.id,
				} );
				container.appendChild(
					el( 'label', { class: 'ohmylms-practice-option' }, [
						input,
						document.createTextNode( ' ' + option.answer ),
					] )
				);
			} );
			return function () {
				return Array.prototype.map.call(
					container.querySelectorAll( 'input:checked' ),
					function ( input ) {
						return input.value;
					}
				);
			};
		}
		if ( type === 'reorder' ) {
			var list = el( 'ol', { class: 'ohmylms-practice-reorder' } );
			view.questions.forEach( function ( option ) {
				var up = el( 'button', {
					type: 'button',
					'aria-label': '↑',
					text: '↑',
				} );
				var down = el( 'button', {
					type: 'button',
					'aria-label': '↓',
					text: '↓',
				} );
				var item = el( 'li', { 'data-token': option.id }, [
					document.createTextNode( option.answer + ' ' ),
					up,
					down,
				] );
				up.addEventListener( 'click', function () {
					if ( item.previousElementSibling )
						list.insertBefore( item, item.previousElementSibling );
				} );
				down.addEventListener( 'click', function () {
					if ( item.nextElementSibling )
						list.insertBefore( item.nextElementSibling, item );
				} );
				list.appendChild( item );
			} );
			container.appendChild( list );
			return function () {
				return Array.prototype.map.call(
					list.children,
					function ( item ) {
						return item.getAttribute( 'data-token' );
					}
				);
			};
		}
		if ( type === 'matching' ) {
			var selects = [];
			( view.definitions || [] ).forEach( function ( definition ) {
				var select = el(
					'select',
					{ 'data-definition': definition.id },
					[ el( 'option', { value: '', text: '—' } ) ]
				);
				view.questions.forEach( function ( option ) {
					select.appendChild(
						el( 'option', {
							value: option.id,
							text: option.answer,
						} )
					);
				} );
				selects.push( select );
				container.appendChild(
					el( 'label', { class: 'ohmylms-practice-match' }, [
						document.createTextNode(
							( definition.matching_data &&
								definition.matching_data.label ) ||
								''
						),
						select,
					] )
				);
			} );
			return function () {
				var answer = {};
				selects.forEach( function ( select ) {
					if ( select.value )
						answer[ select.getAttribute( 'data-definition' ) ] =
							select.value;
				} );
				return answer;
			};
		}
		if (
			window.OhMyLMSInteractive &&
			[
				'dropdown-blanks',
				'categorize',
				'multi-blank',
				'build-expression',
				'expression',
				'number-line',
				'shade-model',
				'count-blocks',
				'set-clock',
				'make-amount',
				'fill-level',
				'build-chart',
				'grid-build',
			].indexOf( type ) !== -1
		) {
			window.OhMyLMSInteractive.render( container, type, view.settings );
			return function () {
				return window.OhMyLMSInteractive.collect( container );
			};
		}
		if ( type === 'structured' ) {
			var fields = {};
			( ( view.settings && view.settings.parts ) || [] ).forEach(
				function ( part ) {
					var field = el( 'input', {
						type: 'text',
						class: 'ohmylms-text-input',
						inputmode:
							part.kind === 'numerical' ? 'decimal' : 'text',
						'aria-label': part.label,
					} );
					fields[ part.id ] = field;
					container.appendChild(
						el( 'div', { class: 'ohmylms-structured-part' }, [
							el( 'p', {
								html:
									'<strong>' +
									( part.label || '' ) +
									'</strong> ' +
									( part.prompt || '' ),
							} ),
							field,
							part.unit
								? el( 'span', {
										class: 'ohmylms-numerical-unit',
										text: ' ' + part.unit,
									} )
								: null,
						] )
					);
				}
			);
			return function () {
				var answer = {};
				Object.keys( fields ).forEach( function ( id ) {
					answer[ id ] = fields[ id ].value;
				} );
				return answer;
			};
		}
		var count =
			type === 'fill-in-the-blank' || type === 'statement'
				? Math.max( 1, view.questions.length )
				: 1;
		var inputs = [];
		for ( var i = 0; i < count; i++ ) {
			var input = el( 'input', {
				type: 'text',
				class: 'ohmylms-text-input',
				inputmode: type === 'numerical' ? 'decimal' : 'text',
				'aria-label': view.name,
			} );
			inputs.push( input );
			container.appendChild( input );
		}
		if ( view.settings && view.settings.unit )
			container.appendChild(
				el( 'span', {
					class: 'ohmylms-numerical-unit',
					text: ' ' + view.settings.unit,
				} )
			);
		return function () {
			return inputs.map( function ( input ) {
				return input.value;
			} );
		};
	}

	/* ---------- Lesson style: stages, sound, tutor ---------- */

	var STAGES = [ 'recognize', 'guided', 'produce' ];

	function lessonHeader( state ) {
		var total = state.planned + ( state.replays || 0 );
		var bar = el( 'div', {
			class: 'ohmylms-lesson-bar',
			role: 'progressbar',
			'aria-valuemin': '0',
			'aria-valuemax': String( total ),
			'aria-valuenow': String( state.answered ),
		} );
		for ( var i = 0; i < total; i++ ) {
			bar.appendChild(
				el( 'span', {
					class:
						'ohmylms-lesson-seg' +
						( i < state.answered
							? ' is-done'
							: i === state.answered
								? ' is-current'
								: '' ),
				} )
			);
		}
		var chips = el( 'ul', { class: 'ohmylms-lesson-stages' } );
		STAGES.forEach( function ( name ) {
			chips.appendChild(
				el( 'li', {
					class:
						'is-' +
						name +
						( state.stage === name ? ' is-active' : '' ),
					text: i18n[ name ] || name,
				} )
			);
		} );
		return el( 'div', { class: 'ohmylms-lesson-header' }, [ bar, chips ] );
	}

	var soundOn = false;
	try {
		soundOn = localStorage.getItem( 'ohmylms-practice-sound' ) === '1';
	} catch ( error ) {
		soundOn = false;
	}
	function tone( correct ) {
		if ( ! soundOn || ! window.AudioContext ) return;
		try {
			var context = new window.AudioContext();
			var oscillator = context.createOscillator();
			var gain = context.createGain();
			oscillator.frequency.value = correct ? 660 : 220;
			gain.gain.value = 0.06;
			oscillator.connect( gain );
			gain.connect( context.destination );
			oscillator.start();
			oscillator.stop( context.currentTime + ( correct ? 0.16 : 0.3 ) );
		} catch ( error ) {
			/* sound is optional */
		}
	}
	function soundToggle() {
		var box = el( 'input', { type: 'checkbox' } );
		box.checked = soundOn;
		box.addEventListener( 'change', function () {
			soundOn = box.checked;
			try {
				localStorage.setItem(
					'ohmylms-practice-sound',
					soundOn ? '1' : '0'
				);
			} catch ( error ) {
				/* remembered for this page only */
			}
		} );
		return el(
			'label',
			{ class: 'ohmylms-practice-sound' },
			[ box, document.createTextNode( ' ' + ( i18n.sound || 'Sound' ) ) ]
		);
	}

	/** A button that asks the tutor and shows its reply as plain text below. */
	function tutorButton( state, view, kind, label, mount ) {
		var button = el( 'button', {
			type: 'button',
			class: 'ohmylms-button outline ohmylms-tutor-button',
			text: label,
		} );
		var reply = el( 'div', {
			class: 'ohmylms-ai-reply',
			'aria-live': 'polite',
		} );
		// aria-disabled, not disabled: a disabled button would drop keyboard focus to the top of the page.
		button.addEventListener( 'click', function () {
			if ( button.getAttribute( 'aria-disabled' ) === 'true' ) return;
			button.setAttribute( 'aria-disabled', 'true' );
			reply.textContent = i18n.thinking || '…';
			reply.className = 'ohmylms-ai-reply is-waiting';
			request( 'practice/sessions/' + state.uuid + '/ai', {
				item_id: view.item_id,
				kind: kind,
			} )
				.then( function ( result ) {
					reply.className = 'ohmylms-ai-reply';
					reply.textContent = '';
					reply.appendChild(
						el( 'strong', { text: ( i18n.tutor || 'Tutor' ) + ': ' } )
					);
					reply.appendChild( document.createTextNode( result.text ) );
					if ( window.ohmylmsTypeset ) window.ohmylmsTypeset( reply );
				} )
				.catch( function ( error ) {
					reply.className = 'ohmylms-ai-reply is-error';
					reply.textContent = error.message;
					// The learner may try again; the server limits how often.
					button.removeAttribute( 'aria-disabled' );
				} );
		} );
		mount.appendChild( button );
		mount.appendChild( reply );
	}

	function renderQuestion( state ) {
		stage.innerHTML = '';
		var view = state.current;
		var lesson = state.style === 'lesson';
		var progress = el( 'p', {
			class: 'ohmylms-practice-progress',
			text: format(
				i18n.progress,
				Math.min( state.answered + 1, state.item_limit ),
				state.item_limit
			),
		} );
		var form = el( 'form', { class: 'ohmylms-practice-question' } );
		if ( ! view.inline_blanks )
			form.appendChild(
				el( 'p', { class: 'the-question', html: view.name } )
			);
		if ( view.description )
			form.appendChild( el( 'div', { html: view.description } ) );
		if ( view.image_src )
			form.appendChild( el( 'img', { src: view.image_src, alt: '' } ) );
		var inputs = el( 'div', { class: 'ohmylms-practice-inputs' } );
		form.appendChild( inputs );
		var collect = renderInputs( inputs, view );
		var feedback = el( 'div', {
			class: 'ohmylms-practice-feedback',
			'aria-live': 'polite',
		} );
		var check = el( 'button', {
			type: 'submit',
			class: 'ohmylms-button',
			text: i18n.check,
		} );
		form.appendChild( check );
		if ( view.has_hint ) {
			var hint = el( 'button', {
				type: 'button',
				class: 'ohmylms-button outline',
				text: i18n.hint,
			} );
			hint.addEventListener( 'click', function () {
				hint.disabled = true;
				request( 'practice/sessions/' + state.uuid + '/hint', {
					item_id: view.item_id,
				} ).then( function ( result ) {
					var box = el( 'div', {
						class: 'ohmylms-practice-hint',
						html: result.hint || '',
					} );
					( result.lessons || [] ).forEach( function ( lesson ) {
						box.appendChild(
							el( 'a', {
								href: lesson.url,
								text: ' ' + lesson.title,
							} )
						);
					} );
					feedback.appendChild( box );
				} );
			} );
			form.appendChild( hint );
		}
		var tutor = el( 'div', { class: 'ohmylms-tutor' } );
		if ( state.ai && state.ai.hint )
			tutorButton( state, view, 'hint', i18n.tutorHint, tutor );
		form.appendChild( tutor );
		form.appendChild( feedback );
		form.addEventListener( 'submit', function ( event ) {
			event.preventDefault();
			check.disabled = true;
			request( 'practice/sessions/' + state.uuid + '/answer', {
				item_id: view.item_id,
				response: collect(),
			} )
				.then( function ( result ) {
					if ( window.ohmylmsRememberPractice )
						window.ohmylmsRememberPractice( result );
					feedback.className =
						'ohmylms-practice-feedback ' +
						( result.correct ? 'is-correct' : 'is-wrong' );
					tone( result.correct );
					feedback.appendChild(
						el( 'p', {
							class: result.correct
								? 'ohmylms-inline-correct'
								: 'ohmylms-inline-incorrect',
							text: result.correct
								? i18n.correct
								: i18n.incorrect,
						} )
					);
					( result.feedback.correct_options || [] ).forEach(
						function ( correct ) {
							var input = form.querySelector(
								'input[value="' + correct + '"]'
							);
							if ( input && input.parentNode )
								input.parentNode.classList.add(
									'ohmylms-inline-answer'
								);
						}
					);
					if (
						! result.correct &&
						result.feedback.expected &&
						result.feedback.expected.length
					) {
						feedback.appendChild(
							el( 'p', {
								text:
									i18n.answer +
									' ' +
									result.feedback.expected.join( ', ' ),
							} )
						);
					}
					if ( result.feedback.explanation )
						feedback.appendChild(
							el( 'div', { class: 'ohmylms-solution' }, [
								! result.correct
									? el( 'strong', {
											text: i18n.solution || '',
										} )
									: null,
								el( 'div', {
									html: result.feedback.explanation,
								} ),
							] )
						);
					if ( window.ohmylmsTypeset )
						window.ohmylmsTypeset( feedback );
					if ( ! result.correct && state.ai && state.ai.explain )
						tutorButton(
							state,
							view,
							'explain',
							i18n.explain,
							feedback
						);
					var next = el( 'button', {
						type: 'button',
						class: 'ohmylms-button',
						text: lesson ? i18n.continue || i18n.next : i18n.next,
					} );
					next.addEventListener( 'click', function () {
						show( result.session );
					} );
					feedback.appendChild( next );
					next.focus();
				} )
				.catch( function ( error ) {
					feedback.textContent = error.message;
					check.disabled = false;
				} );
		} );
		if ( lesson ) {
			stage.appendChild( lessonHeader( state ) );
			stage.appendChild( soundToggle() );
			if ( state.replay )
				stage.appendChild(
					el( 'p', {
						class: 'ohmylms-replay-banner',
						role: 'status',
						text: i18n.replay,
					} )
				);
		}
		stage.appendChild( progress );
		stage.appendChild( form );
		if ( window.ohmylmsTypeset ) window.ohmylmsTypeset( stage );
	}

	/** XP and the daily goal, the mastery score change and the streak after a lesson. */
	function rewardCard( reward ) {
		var card = el( 'section', {
			class: 'ohmylms-reward',
			'aria-label': i18n.rewardTitle || 'Your rewards',
		} );
		if ( reward.xp ) {
			var xp = reward.xp;
			var chips = el( 'ul', { class: 'ohmylms-reward-parts' } );
			[ 'lesson', 'perfect', 'challenge' ].forEach( function ( key ) {
				if ( xp.parts && xp.parts[ key ] )
					chips.appendChild(
						el( 'li', {
							text:
								( i18n[ 'xp_' + key ] || key ) +
								' +' +
								xp.parts[ key ],
						} )
					);
			} );
			card.appendChild(
				el( 'div', { class: 'ohmylms-reward-xp' }, [
					el( 'strong', {
						class: 'ohmylms-reward-gain',
						text: '+' + xp.xp + ' XP',
					} ),
					chips,
					el( 'progress', {
						max: String( xp.goal ),
						value: String( Math.min( xp.today, xp.goal ) ),
						'aria-label': format( i18n.xpToday, xp.today, xp.goal ),
					} ),
					el( 'p', { text: format( i18n.xpToday, xp.today, xp.goal ) } ),
					xp.goal_met
						? el( 'p', {
								class: 'ohmylms-reward-goal',
								text: i18n.goalMet,
							} )
						: null,
					xp.capped
						? el( 'p', {
								class: 'ohmylms-reward-note',
								text: i18n.xpCapped,
							} )
						: null,
				] )
			);
		}
		if ( reward.score ) {
			var score = reward.score;
			var change = Math.round( score.after ) - Math.round( score.before );
			var lines = [
				el( 'strong', {
					text:
						( i18n.mastery || 'Mastery' ) +
						( score.skill ? ': ' + score.skill : '' ),
				} ),
				el( 'p', {
					class: 'ohmylms-reward-score',
					text:
						format(
							i18n.masteryChange,
							Math.round( score.before ),
							Math.round( score.after )
						) +
						( change ? ' (' + ( change > 0 ? '+' : '' ) + change + ')' : '' ),
				} ),
				el( 'progress', {
					max: '100',
					value: String( Math.round( score.after ) ),
					'aria-label': ( i18n.mastery || 'Mastery' ) + ' ' + Math.round( score.after ),
				} ),
			];
			( score.reached || [] ).forEach( function ( at ) {
				lines.push(
					el( 'p', {
						class: 'ohmylms-reward-medal is-' + at,
						text: i18n[ 'medal_' + at ] || '',
					} )
				);
			} );
			if ( score.before < score.unlock && score.after >= score.unlock )
				lines.push(
					el( 'p', {
						class: 'ohmylms-reward-goal',
						text: i18n.unlocked,
					} )
				);
			card.appendChild( el( 'div', { class: 'ohmylms-reward-mastery' }, lines ) );
		}
		if ( reward.streak && reward.streak.current > 0 )
			card.appendChild(
				el( 'p', {
					class: 'ohmylms-reward-streak',
					text: format( i18n.streakDays, reward.streak.current ),
				} )
			);
		return card;
	}

	function renderSummary( state ) {
		stage.innerHTML = '';
		var lessonResult = state.style === 'lesson';
		stage.appendChild(
			el( 'p', {
				class: 'ohmylms-practice-summary',
				text: lessonResult
					? format(
							i18n.lessonDone,
							state.planned_right,
							state.planned_answered
						)
					: format( i18n.done, state.correct, state.answered ),
			} )
		);
		if ( lessonResult ) {
			var missed = state.missed || [];
			if ( ! missed.length ) {
				stage.appendChild(
					el( 'p', {
						class: 'ohmylms-practice-notice',
						text: i18n.perfect,
					} )
				);
			} else {
				var list = el( 'ul', { class: 'ohmylms-missed' } );
				missed.forEach( function ( entry ) {
					list.appendChild(
						el(
							'li',
							{
								class:
									entry.fixed === true
										? 'is-fixed'
										: 'is-open',
							},
							[
								el( 'span', { text: entry.label } ),
								el( 'em', {
									text:
										' — ' +
										( entry.fixed === true
											? i18n.fixed
											: i18n.notFixed ),
								} ),
							]
						)
					);
				} );
				stage.appendChild(
					el( 'h3', { text: i18n.missedTitle } )
				);
				stage.appendChild( list );
				if ( window.ohmylmsTypeset ) window.ohmylmsTypeset( list );
			}
		}
		if ( state.reward ) stage.appendChild( rewardCard( state.reward ) );
		if ( state.notice )
			stage.appendChild(
				el( 'p', {
					class: 'ohmylms-practice-notice',
					text: state.notice,
				} )
			);
		( state.recommendations || [] ).forEach( function ( item ) {
			if ( ! item.skill ) return;
			var line = el( 'p', {}, [
				el( 'strong', { text: item.skill.name } ),
				document.createTextNode( ' — ' + item.message + ' ' ),
			] );
			( item.lessons || [] ).forEach( function ( lesson ) {
				line.appendChild(
					el( 'a', { href: lesson.url, text: lesson.title + ' ' } )
				);
			} );
			stage.appendChild( line );
		} );
		if ( ! config.loggedIn ) {
			stage.appendChild(
				el( 'p', {}, [
					document.createTextNode( i18n.save + ' ' ),
					el( 'a', { href: config.loginUrl, text: i18n.login } ),
				] )
			);
		}
		var again = el( 'button', {
			type: 'button',
			class: 'ohmylms-button',
			text: i18n.again,
		} );
		again.addEventListener( 'click', start );
		stage.appendChild( again );
	}

	function show( state ) {
		session = state;
		remembered( state.status === 'active' ? state.uuid : null );
		if ( state.status === 'active' && state.current )
			renderQuestion( state );
		else renderSummary( state );
	}

	function start() {
		stage.textContent = '…';
		var ready = window.ohmylmsGuestToken
			? window.ohmylmsGuestToken()
			: Promise.resolve( null );
		ready
			.then( function ( guest ) {
				token = guest;
				return request( 'practice/sessions', {
					term_id: Number( root.dataset.skill ),
					item_limit: Number( root.dataset.items ) || 10,
					course_id: Number( root.dataset.course ) || 0,
					style: root.dataset.style || 'standard',
				} );
			} )
			.then( show )
			.catch( function ( error ) {
				stage.textContent = error.message || i18n.empty;
			} );
	}

	var button = el( 'button', {
		type: 'button',
		class: 'ohmylms-button',
		text: i18n.start,
	} );
	button.addEventListener( 'click', start );
	stage.appendChild( button );
	if ( remembered() ) {
		var resume = el( 'button', {
			type: 'button',
			class: 'ohmylms-button outline',
			text: i18n.resume,
		} );
		resume.addEventListener( 'click', function () {
			resume.disabled = true;
			var ready = window.ohmylmsGuestToken
				? window.ohmylmsGuestToken()
				: Promise.resolve( null );
			ready
				.then( function ( guest ) {
					token = guest;
					return request(
						'practice/sessions/' + remembered(),
						null,
						'GET'
					);
				} )
				.then( show )
				.catch( function ( error ) {
					remembered( null );
					resume.remove();
					stage.appendChild(
						el( 'p', { role: 'alert', text: error.message } )
					);
				} );
		} );
		stage.appendChild( resume );
	}
} )();
