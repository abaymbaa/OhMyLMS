/** Extended question widgets share the quiz player's native answer fields. */
( function () {
	'use strict';
	const api = window.OhMyLMSInteractive;
	if ( ! api ) {
		return;
	}
	const { el, setAnswer } = api.util;
	const __ = window.wp.i18n.__;
	let instanceId = 0;
	const types = [
		'passage',
		'graphing',
		'hot-text',
		'match-table-grid',
		'labeling',
		'hotspot',
		'draw',
		'audio-response',
		'video-response',
		'poll',
		'word-cloud',
		'discussion-board',
		'slide',
		'interactive-video',
	];
	const button = ( text, action ) => {
		const node = el( 'button', { type: 'button', text } );
		node.addEventListener( 'click', action );
		return node;
	};
	function field( root, key, label, multiline = false ) {
		const wrapper = el( 'label', { class: 'ohmylms-extended-field' }, [
			el( 'span', { text: label } ),
		] );
		const input = el( multiline ? 'textarea' : 'input', {
			'aria-label': label,
			...( multiline ? { rows: 4 } : { type: 'text' } ),
		} );
		input.addEventListener( 'input', () =>
			setAnswer( root, key, input.value )
		);
		wrapper.appendChild( input );
		root.appendChild( wrapper );
		return input;
	}
	function plot( root, config, drawing ) {
		const canvas = el( 'canvas', {
			width: 640,
			height: 400,
			tabindex: 0,
			'aria-label': drawing
				? __( 'Drawing canvas', 'ohmylms' )
				: __( 'Coordinate graph', 'ohmylms' ),
		} );
		const context = canvas.getContext( '2d' );
		const min = Number( config.min ?? -5 ),
			max = Number( config.max ?? 5 ),
			span = max - min;
		let points = [],
			painting = false;
		const pixel = ( point ) => ( {
			x: ( ( point.x - min ) / span ) * 640,
			y: ( ( max - point.y ) / span ) * 400,
		} );
		function paint() {
			context.clearRect( 0, 0, 640, 400 );
			if ( ! drawing ) {
				context.strokeStyle = '#cfd6e0';
				context.lineWidth = 1;
				for ( let value = Math.ceil( min ); value <= max; value++ ) {
					const position = pixel( { x: value, y: value } );
					context.beginPath();
					context.moveTo( position.x, 0 );
					context.lineTo( position.x, 400 );
					context.moveTo( 0, position.y );
					context.lineTo( 640, position.y );
					context.stroke();
				}
				context.strokeStyle = '#3c434a';
				context.beginPath();
				const zero = pixel( { x: 0, y: 0 } );
				context.moveTo( zero.x, 0 );
				context.lineTo( zero.x, 400 );
				context.moveTo( 0, zero.y );
				context.lineTo( 640, zero.y );
				context.stroke();
				context.fillStyle = '#3c434a';
				context.font = '12px sans-serif';
				const labelStep = Math.max( 1, Math.ceil( span / 20 ) );
				for (
					let value = Math.ceil( min );
					value <= max;
					value += labelStep
				) {
					const position = pixel( { x: value, y: value } );
					context.fillText(
						String( value ),
						Math.min( 615, Math.max( 4, position.x + 3 ) ),
						Math.min( 390, Math.max( 14, zero.y + 14 ) )
					);
					if ( value !== 0 ) {
						context.fillText(
							String( value ),
							Math.min( 615, Math.max( 4, zero.x + 3 ) ),
							Math.min( 390, Math.max( 14, position.y - 3 ) )
						);
					}
				}
			}
			context.strokeStyle = '#7153c6';
			context.fillStyle = '#7153c6';
			context.lineWidth = 3;
			if ( drawing || config.mode === 'line' ) {
				context.beginPath();
				points.forEach( ( point, index ) => {
					const p = drawing
						? { x: point.x * 6.4, y: point.y * 4 }
						: pixel( point );
					if ( index === 0 || point.start ) {
						context.moveTo( p.x, p.y );
					} else {
						context.lineTo( p.x, p.y );
					}
				} );
				context.stroke();
			}
			if ( ! drawing ) {
				points.forEach( ( point ) => {
					const p = pixel( point );
					context.beginPath();
					context.arc( p.x, p.y, 6, 0, Math.PI * 2 );
					context.fill();
				} );
			}
		}
		const write = () => {
			setAnswer(
				root,
				'points',
				points.length ? JSON.stringify( points ) : ''
			);
			paint();
		};
		function add( event, start = false ) {
			const bounds = canvas.getBoundingClientRect();
			const x = Math.max(
					0,
					Math.min(
						1,
						( event.clientX - bounds.left ) / bounds.width
					)
				),
				y = Math.max(
					0,
					Math.min(
						1,
						( event.clientY - bounds.top ) / bounds.height
					)
				);
			const point = drawing
				? { x: x * 100, y: y * 100, start }
				: {
						x: Math.round( ( min + x * span ) * 4 ) / 4,
						y: Math.round( ( max - y * span ) * 4 ) / 4,
					};
			if ( points.length < ( drawing ? 5000 : 50 ) ) {
				points.push( point );
			}
			write();
		}
		canvas.addEventListener( 'pointerdown', ( event ) => {
			canvas.setPointerCapture( event.pointerId );
			painting = true;
			if ( ! drawing && config.mode === 'line' && points.length === 2 ) {
				points = [];
			}
			add( event, true );
		} );
		canvas.addEventListener( 'pointermove', ( event ) => {
			if ( drawing && painting ) {
				add( event );
			}
		} );
		canvas.addEventListener( 'pointerup', () => {
			painting = false;
		} );
		canvas.addEventListener( 'pointercancel', () => {
			painting = false;
		} );
		root.appendChild( canvas );
		if ( ! drawing ) {
			const toolbar = el( 'div', { class: 'ohmylms-plot-toolbar' } ),
				x = el( 'input', {
					type: 'number',
					min,
					max,
					step: '0.25',
					'aria-label': __( 'X coordinate', 'ohmylms' ),
					value: 0,
				} ),
				y = el( 'input', {
					type: 'number',
					min,
					max,
					step: '0.25',
					'aria-label': __( 'Y coordinate', 'ohmylms' ),
					value: 0,
				} );
			toolbar.append(
				x,
				y,
				button( __( 'Plot point', 'ohmylms' ), () => {
					const a = Number( x.value ),
						b = Number( y.value );
					if (
						Number.isFinite( a ) &&
						Number.isFinite( b ) &&
						a >= min &&
						a <= max &&
						b >= min &&
						b <= max
					) {
						if ( config.mode === 'line' && points.length === 2 ) {
							points = [];
						}
						points.push( { x: a, y: b } );
						write();
					}
				} )
			);
			root.appendChild( toolbar );
		}
		root.appendChild(
			button( __( 'Clear', 'ohmylms' ), () => {
				points = [];
				write();
			} )
		);
		paint();
		root.addEventListener( 'change', ( event ) => {
			if ( event.target.getAttribute( 'data-answer-key' ) === 'points' ) {
				try {
					points = JSON.parse( event.target.value || '[]' );
					paint();
				} catch {
					points = [];
				}
			}
		} );
	}
	function media( root, type, config ) {
		const video = type === 'video-response';
		const player = el( video ? 'video' : 'audio', {
			controls: '',
			hidden: '',
			class: 'ohmylms-response-media',
		} );
		root.appendChild( player );
		const status = el( 'p', { role: 'status' } );
		root.appendChild( status );
		const link = field(
			root,
			'media',
			__( 'Media link (optional)', 'ohmylms' )
		);
		link.addEventListener( 'change', () => {
			if ( /^https?:\/\//i.test( link.value ) ) {
				player.src = link.value;
				player.hidden = false;
			}
		} );
		function accept( blob ) {
			if ( blob.size > 4 * 1024 * 1024 ) {
				status.textContent = __(
					'Use a recording or file smaller than 4 MB.',
					'ohmylms'
				);
				return;
			}
			const reader = new FileReader();
			reader.addEventListener( 'load', () => {
				player.src = reader.result;
				player.hidden = false;
				setAnswer( root, 'media', reader.result );
				status.textContent = __( 'Media response ready.', 'ohmylms' );
			} );
			reader.readAsDataURL( blob );
		}
		const upload = el( 'input', {
			type: 'file',
			accept: video
				? 'video/webm,video/mp4,video/ogg'
				: 'audio/webm,audio/mp4,audio/mpeg,audio/ogg,audio/wav',
			'aria-label': __( 'Upload media response', 'ohmylms' ),
		} );
		upload.addEventListener( 'change', () => {
			if ( upload.files[ 0 ] ) {
				accept( upload.files[ 0 ] );
			}
		} );
		root.appendChild( upload );
		let recorder, stream, timer;
		const stop = () => {
			if ( recorder?.state === 'recording' ) {
				recorder.stop();
			}
			stream?.getTracks().forEach( ( track ) => track.stop() );
			clearTimeout( timer );
		};
		const record = button( __( 'Record', 'ohmylms' ), async () => {
			try {
				if (
					! navigator.mediaDevices?.getUserMedia ||
					! window.MediaRecorder
				) {
					status.textContent = __(
						'Recording is unavailable here. Upload a file or use a media link.',
						'ohmylms'
					);
					return;
				}
				stream = await navigator.mediaDevices.getUserMedia( {
					audio: true,
					video,
				} );
				recorder = new MediaRecorder( stream );
				const chunks = [];
				recorder.addEventListener( 'dataavailable', ( event ) =>
					chunks.push( event.data )
				);
				recorder.addEventListener( 'stop', () => {
					accept(
						new Blob( chunks, {
							type: recorder.mimeType.split( ';' )[ 0 ],
						} )
					);
					stream.getTracks().forEach( ( track ) => track.stop() );
					record.disabled = false;
				} );
				recorder.start();
				record.disabled = true;
				status.textContent = __( 'Recording…', 'ohmylms' );
				timer = setTimeout(
					stop,
					Math.max(
						1,
						Math.min( 300, Number( config.max_seconds || 60 ) )
					) * 1000
				);
			} catch {
				status.textContent = __(
					'Recording permission was not granted. You can upload a file or use a media link.',
					'ohmylms'
				);
				stop();
			}
		} );
		root.append(
			record,
			button( __( 'Stop recording', 'ohmylms' ), stop )
		);
		const observer = new MutationObserver( () => {
			if ( ! root.isConnected ) {
				stop();
				observer.disconnect();
			}
		} );
		observer.observe( document.body, { childList: true, subtree: true } );
	}
	function build( root, type, config ) {
		const instance = ++instanceId;
		root.classList.add( 'ohmylms-extended-question' );
		if ( [ 'graphing', 'draw' ].includes( type ) ) {
			plot( root, config, type === 'draw' );
			return;
		}
		if ( [ 'audio-response', 'video-response' ].includes( type ) ) {
			media( root, type, config );
			return;
		}
		if ( type === 'slide' ) {
			setAnswer( root, 'seen', '1' );
			return;
		}
		if ( [ 'word-cloud', 'discussion-board' ].includes( type ) ) {
			const input = field(
				root,
				'text',
				type === 'word-cloud'
					? __( 'Your words', 'ohmylms' )
					: __( 'Your response', 'ohmylms' ),
				type === 'discussion-board'
			);
			input.maxLength = type === 'word-cloud' ? 1000 : 20000;
			if ( type === 'word-cloud' ) {
				const cloud = el( 'div', {
					class: 'ohmylms-word-cloud',
					'aria-label': __( 'Your word cloud', 'ohmylms' ),
				} );
				root.appendChild( cloud );
				input.addEventListener( 'input', () => {
					cloud.textContent = '';
					const counts = new Map();
					input.value
						.trim()
						.split( /\s+/ )
						.filter( Boolean )
						.slice( 0, 100 )
						.forEach( ( word ) =>
							counts.set( word, ( counts.get( word ) || 0 ) + 1 )
						);
					counts.forEach( ( count, word ) =>
						cloud.appendChild(
							el( 'span', {
								text: word,
								style:
									'font-size:' +
									Math.min( 40, 16 + count * 4 ) +
									'px',
							} )
						)
					);
				} );
			}
			return;
		}
		if ( type === 'hot-text' ) {
			( config.tokens || [] ).forEach( ( token ) => {
				const item = button( token.text, () => {
					const selected =
						item.getAttribute( 'aria-pressed' ) !== 'true';
					item.setAttribute( 'aria-pressed', String( selected ) );
					setAnswer( root, token.id, selected ? '1' : '' );
				} );
				item.setAttribute( 'aria-pressed', 'false' );
				root.appendChild( item );
			} );
			return;
		}
		if ( type === 'poll' ) {
			( config.choices || [] ).forEach( ( choice ) => {
				const label = el( 'label', {
						class: 'ohmylms-preview-choice',
					} ),
					input = el( 'input', {
						type: 'radio',
						name: 'ohmylms-poll-' + instance,
					} );
				input.addEventListener( 'change', () => {
					root.querySelectorAll( 'input[type="radio"]' ).forEach(
						( option ) => {
							option.checked = option === input;
						}
					);
					setAnswer( root, 'choice', choice.id );
				} );
				label.append( input, document.createTextNode( choice.text ) );
				root.appendChild( label );
			} );
			return;
		}
		if ( type === 'passage' ) {
			root.appendChild(
				el( 'div', {
					class: 'ohmylms-passage',
					text: config.passage || '',
				} )
			);
			( config.parts || [] ).forEach( ( part ) => {
				const input = field(
					root,
					part.id,
					( part.label || '' ) + ' ' + ( part.prompt || '' ),
					part.kind === 'written'
				);
				if ( part.kind === 'numerical' ) {
					input.type = 'number';
				}
			} );
			return;
		}
		if ( type === 'match-table-grid' ) {
			const table = el( 'table', { class: 'ohmylms-match-grid' } ),
				head = el( 'tr', {}, [
					el( 'th', { text: __( 'Item', 'ohmylms' ) } ),
				] );
			( config.columns || [] ).forEach( ( column ) =>
				head.appendChild(
					el( 'th', { text: column.label, scope: 'col' } )
				)
			);
			table.appendChild( el( 'thead', {}, [ head ] ) );
			const body = el( 'tbody' );
			( config.rows || [] ).forEach( ( row ) => {
				const tr = el( 'tr', {}, [
					el( 'th', { text: row.label, scope: 'row' } ),
				] );
				( config.columns || [] ).forEach( ( column ) => {
					const input = el( 'input', {
						type: 'radio',
						name: 'ohmylms-grid-' + instance + '-' + row.id,
						'aria-label': row.label + ' — ' + column.label,
					} );
					input.addEventListener( 'change', () =>
						setAnswer( root, row.id, column.id )
					);
					tr.appendChild( el( 'td', {}, [ input ] ) );
				} );
				body.appendChild( tr );
			} );
			table.appendChild( body );
			root.appendChild( table );
			return;
		}
		if ( [ 'labeling', 'hotspot' ].includes( type ) ) {
			const box = el( 'div', { class: 'ohmylms-diagram' } ),
				image = el( 'img', {
					src: config.image_url || '',
					alt: __( 'Question diagram', 'ohmylms' ),
				} );
			box.appendChild( image );
			root.appendChild( box );
			if ( type === 'labeling' ) {
				( config.targets || [] ).forEach( ( target ) => {
					const select = el( 'select', {
						'aria-label':
							__( 'Diagram label', 'ohmylms' ) + ' ' + target.id,
						style:
							'left:' +
							Number( target.x ) +
							'%;top:' +
							Number( target.y ) +
							'%',
					} );
					select.appendChild(
						el( 'option', {
							value: '',
							text: __( 'Choose label', 'ohmylms' ),
						} )
					);
					( config.choices || [] ).forEach( ( choice ) =>
						select.appendChild(
							el( 'option', { value: choice, text: choice } )
						)
					);
					select.addEventListener( 'change', () =>
						setAnswer( root, target.id, select.value )
					);
					box.appendChild( select );
				} );
			} else {
				const pin = el( 'span', {
					class: 'ohmylms-hotspot-pin',
					text: '●',
				} );
				const place = ( x, y ) => {
					setAnswer( root, 'x', String( x ) );
					setAnswer( root, 'y', String( y ) );
					pin.style.left = x + '%';
					pin.style.top = y + '%';
					box.appendChild( pin );
				};
				image.addEventListener( 'click', ( event ) => {
					const bounds = image.getBoundingClientRect();
					place(
						( ( event.clientX - bounds.left ) / bounds.width ) *
							100,
						( ( event.clientY - bounds.top ) / bounds.height ) * 100
					);
				} );
				const x = field(
						root,
						'x',
						__( 'Horizontal position (%)', 'ohmylms' )
					),
					y = field(
						root,
						'y',
						__( 'Vertical position (%)', 'ohmylms' )
					);
				[ x, y ].forEach( ( input ) => {
					input.type = 'number';
					input.min = 0;
					input.max = 100;
					input.addEventListener( 'input', () => {
						if ( x.value !== '' && y.value !== '' ) {
							place( Number( x.value ), Number( y.value ) );
						}
					} );
				} );
			}
			return;
		}
		if ( type === 'interactive-video' ) {
			const player = el( 'video', {
				controls: '',
				src: config.video_url || '',
			} );
			root.appendChild( player );
			( config.checkpoints || [] ).forEach( ( checkpoint ) => {
				const panel = el(
					'fieldset',
					{ class: 'ohmylms-video-checkpoint' },
					[
						el( 'legend', {
							text: checkpoint.at + 's · ' + checkpoint.prompt,
						} ),
					]
				);
				const input = field( root, checkpoint.id, checkpoint.prompt );
				panel.appendChild( input.parentElement );
				panel.appendChild(
					button( __( 'Jump to checkpoint', 'ohmylms' ), () => {
						player.currentTime = Number( checkpoint.at );
						player.pause();
					} )
				);
				root.appendChild( panel );
				player.addEventListener( 'timeupdate', () => {
					if (
						Math.abs(
							player.currentTime - Number( checkpoint.at )
						) < 0.5
					) {
						player.pause();
						panel.scrollIntoView( { block: 'nearest' } );
					}
				} );
			} );
		}
	}
	types.forEach( ( type ) =>
		api.register( type, {
			build: ( root, config ) => build( root, type, config ),
		} )
	);
	api.enhance( document );
} )();
