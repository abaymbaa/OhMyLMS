/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
import { removeQuestionFromQuiz } from '../quiz-editor/api.mjs';
import { QuestionForm } from './QuestionForm';
import { questionWorkspaceKey } from './choiceModel.mjs';
import { QUESTION_BLOCK_TYPES, questionTypePatch } from './questionBlocks.mjs';
export function createQuestionCanvas( readRuntime ) {
	return function QuestionCanvas( props ) {
		const {
			Eu,
			I: Controls,
			Ie,
			Iu,
			Lc,
			Pu,
			React,
			Ru,
			T: StoreModule,
			Tu,
			b: I18n,
			du,
			fc,
			g: ReactHooks,
			ju,
			lu,
			nu,
			tu,
			y: WordPressData,
		} = readRuntime();
		const previewOptions = ( 0, WordPressData.useSelect )(
			( select ) => select( StoreModule.default ).getQuestionContents(),
			[]
		);
		var t;
		var n;
		var r;
		var a;
		var chapterId = props.chapterId;
		var question = ( function () {
			var e = ( 0, WordPressData.useSelect )( function ( _eLocal ) {
					return _eLocal( StoreModule.default ).getQuizTypes();
				}, [] ),
				_tLocal = ( 0, WordPressData.useSelect )( function (
					_eLocal2
				) {
					return _eLocal2(
						StoreModule.default
					).getInteractiveQuizTypes();
				}, [] ),
				_nLocal = [].concat( nu( e ), nu( _tLocal ) ),
				_rLocal = ( 0, WordPressData.useSelect )( function (
					_eLocal3
				) {
					return _eLocal3( StoreModule.default ).selectQuestion();
				}, [] );
			if ( ! _rLocal ) {
				return {
					edit: tu,
					showDefault: ! 0,
				};
			}
			var _aLocal = _rLocal.settings;
			if ( _aLocal === null || _aLocal === void 0 || ! _aLocal.type ) {
				return {
					edit: tu,
					showDefault: ! 0,
				};
			}
			var o = _nLocal.find( function ( _eLocal4 ) {
				return (
					( _eLocal4 === null || _eLocal4 === void 0
						? void 0
						: _eLocal4.type ) ===
					( _aLocal === null || _aLocal === void 0
						? void 0
						: _aLocal.type )
				);
			} );
			return o
				? {
						edit: o.edit,
						showDefault: ! 1,
					}
				: {
						edit: tu,
						showDefault: ! 0,
					};
		} )();
		var edit = question.edit;
		var showDefault = question.showDefault;
		var s = ( 0, WordPressData.useDispatch )( StoreModule.default );
		var quizId = ( 0, WordPressData.useSelect )( function ( e ) {
			return e( StoreModule.default ).getSelectedQuizId();
		}, [] );
		var m =
			( ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getQuiz();
			}, [] ),
			( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).selectSelectedQuestionId();
			}, [] ),
			( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).selectQuestion();
			}, [] ) );
		var p =
			( ( 0, WordPressData.useSelect )(
				function ( e ) {
					return e( StoreModule.default ).getCourseChaptersContent();
				},
				[ chapterId ]
			),
			( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getAllQuestions();
			}, [] ) );
		var Router = ( 0, WordPressData.useSelect )( function ( e ) {
			return e( StoreModule.default ).getQuestionErrors();
		}, [] );
		var v = ( function ( e, _tLocal2 ) {
			return (
				( function ( _eLocal5 ) {
					if ( Array.isArray( _eLocal5 ) ) {
						return _eLocal5;
					}
				} )( e ) ||
				( function ( _eLocal6, _tLocal3 ) {
					var _nLocal2 =
						_eLocal6 === null || _eLocal6 === void 0
							? null
							: ( 'undefined' !== typeof Symbol &&
									_eLocal6[ Symbol.iterator ] ) ||
								_eLocal6[ '@@iterator' ];
					if ( _nLocal2 !== null && _nLocal2 !== void 0 ) {
						var _rLocal2,
							_aLocal2,
							o,
							_iLocal,
							l = [],
							c = ! 0,
							u = ! 1;
						try {
							if (
								( ( o = ( _nLocal2 = _nLocal2.call( _eLocal6 ) )
									.next ),
								0 === _tLocal3 )
							) {
								if ( Object( _nLocal2 ) !== _nLocal2 ) {
									return;
								}
								c = ! 1;
							} else {
								for (
									;
									! ( c = ( _rLocal2 = o.call( _nLocal2 ) )
										.done ) &&
									( l.push( _rLocal2.value ),
									l.length !== _tLocal3 );
									c = ! 0
								) {}
							}
						} catch ( _eLocal7 ) {
							u = ! 0;
							_aLocal2 = _eLocal7;
						} finally {
							try {
								if (
									! c &&
									( ( _nullableValue ) =>
										_nullableValue !== null &&
										_nullableValue !== void 0 )(
										_nLocal2.return
									) &&
									( ( _iLocal = _nLocal2.return() ),
									Object( _iLocal ) !== _iLocal )
								) {
									return;
								}
							} finally {
								if ( u ) {
									throw _aLocal2;
								}
							}
						}
						return l;
					}
				} )( e, _tLocal2 ) ||
				( function ( _eLocal8, _tLocal4 ) {
					if ( _eLocal8 ) {
						if ( 'string' === typeof _eLocal8 ) {
							return Iu( _eLocal8, _tLocal4 );
						}
						var _nLocal3 = {}.toString
							.call( _eLocal8 )
							.slice( 8, -1 );
						return (
							'Object' === _nLocal3 &&
								_eLocal8.constructor &&
								( _nLocal3 = _eLocal8.constructor.name ),
							( () => {
								if (
									'Map' === _nLocal3 ||
									'Set' === _nLocal3
								) {
									return Array.from( _eLocal8 );
								}
								if (
									'Arguments' === _nLocal3 ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
										_nLocal3
									)
								) {
									return Iu( _eLocal8, _tLocal4 );
								}
								return void 0;
							} )()
						 );
					}
				} )( e, _tLocal2 ) ||
				( function () {
					throw new TypeError(
						'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
					);
				} )()
			);
		} )( ( 0, ReactHooks.useState )( ! 1 ), 2 );
		var h = v[ 0 ];
		var _ = v[ 1 ];
		var w =
			( Lc().isValidQuestion,
			( 0, WordPressData.useSelect )( function ( e ) {
				var _tLocal5, _nLocal4, _rLocal3, _aLocal3, o, _iLocal2, l, c;
				return {
					question:
						null ===
							( _tLocal5 = e(
								StoreModule.default
							).selectQuestion() ) || void 0 === _tLocal5
							? void 0
							: _tLocal5.name,
					videoSrc:
						null ===
							( _nLocal4 = e(
								StoreModule.default
							).selectQuestion() ) || void 0 === _nLocal4
							? void 0
							: _nLocal4.video_src,
					imgSrc:
						null ===
							( _rLocal3 = e(
								StoreModule.default
							).selectQuestion() ) || void 0 === _rLocal3
							? void 0
							: _rLocal3.image_src,
					options:
						null ===
							( _aLocal3 = e(
								StoreModule.default
							).selectQuestion() ) || void 0 === _aLocal3
							? void 0
							: _aLocal3.options,
					correctAnswerId:
						null ===
							( o = e( StoreModule.default ).selectQuestion() ) ||
						void 0 === o
							? void 0
							: o.correctAnswerId,
					id:
						null ===
							( _iLocal2 = e(
								StoreModule.default
							).selectQuestion() ) || void 0 === _iLocal2
							? void 0
							: _iLocal2.id,
					quizType:
						null ===
							( l = e( StoreModule.default ).selectQuestion() ) ||
						void 0 === l ||
						null === ( l = l.settings ) ||
						void 0 === l
							? void 0
							: l.type,
					description:
						null ===
							( c = e( StoreModule.default ).selectQuestion() ) ||
						void 0 === c
							? void 0
							: c.description,
				};
			}, [] ) );
		var E = w.question;
		var videoSrc = w.videoSrc;
		var imgSrc = w.imgSrc;
		var x = ( w.options, w.correctAnswerId, w.id );
		var quizType = w.quizType;
		var description = w.description;
		var O = fc( quizType );
		var k =
			( ( t = quizType ),
			( n = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getQuizTypes();
			}, [] ) ),
			( r = ( 0, WordPressData.useSelect )( function ( e ) {
				return e( StoreModule.default ).getInteractiveQuizTypes();
			}, [] ) ),
			( a = [].concat( Eu( n ), Eu( r ) ) ),
			t
				? a.find( function ( e ) {
						return e.type === t;
					} )
				: null );
		var j = ( function ( e ) {
			var _tLocal6 = ( 0, WordPressData.useSelect )( function (
					_eLocal9
				) {
					return _eLocal9( StoreModule.default ).getQuizTypes();
				}, [] ),
				_nLocal5 = ( 0, WordPressData.useSelect )( function (
					_eLocal0
				) {
					return _eLocal0(
						StoreModule.default
					).getInteractiveQuizTypes();
				}, [] ),
				_rLocal4 = [].concat( Ru( _tLocal6 ), Ru( _nLocal5 ) );
			if ( ! e ) {
				return null;
			}
			var _aLocal4 = _rLocal4.find( function ( _tLocal7 ) {
				return _tLocal7.type === e;
			} );
			return (
				( _aLocal4 === null || _aLocal4 === void 0
					? void 0
					: _aLocal4.otherContent ) || null
			);
		} )( quizType );
		var M = ( function () {
			var e = Tu(
				Pu().m( function _eLocal1() {
					var _tLocal8;
					return Pu().w( function ( _eLocal10 ) {
						for (;;) {
							switch ( _eLocal10.n ) {
								case 0:
									if ( quizId ) {
										_eLocal10.n = 1;
										break;
									}
									return _eLocal10.a( 2 );
								case 1: {
									_eLocal10.n = 2;
									break;
								}
								case 2:
									( _tLocal8 = ju( {}, m ) ).order_number =
										p.length + 1;
									_tLocal8.id = new Date().getTime();
									_tLocal8.temp = ! 0;
									s.setQuestion( _tLocal8 );
									s.setQuestions( _tLocal8 );
									s.setSelectedQuestionId( _tLocal8.id ); // Falls through to the shared async state cleanup.
								// Falls through to the shared async state cleanup.
								case 3:
									return _eLocal10.a( 2 );
							}
						}
					}, _eLocal1 );
				} )
			);
			return function ( ..._args ) {
				return e.apply( this, _args );
			};
		} )();
		var F = async function () {
			// Deleting from the quiz editor removes the question from this quiz only;
			// the question and its learner history stay in the question bank.
			if ( m !== null && m !== void 0 && ! m.temp ) {
				if ( ! quizId ) {
					await s.deleteQuestion( m.id );
					_( ! 1 );
					return;
				}
				try {
					await removeQuestionFromQuiz( quizId, m.id );
				} catch ( cause ) {
					s.showNotification?.(
						( cause && cause.message ) ||
							( 0, I18n.__ )(
								'Could not remove the question.',
								'ohmylms'
							),
						'error'
					);
					_( ! 1 );
					return;
				}
			}
			s.deleteTempQuestion( m === null || m === void 0 ? void 0 : m.id );
			_( ! 1 );
		};
		const answerControls = (
			<React.Fragment>
				{ ! showDefault && React.createElement( edit, null ) }
				{ j && React.createElement( j, null ) }
			</React.Fragment>
		);
		return (
			<React.Fragment>
				<QuestionForm
					key={ questionWorkspaceKey( m?.id, quizType ) }
					question={ {
						...m,
						name: E === 'Untitled' ? '' : E,
						description: description || '',
						questions: previewOptions || [],
					} }
					label={ ( 0, I18n.__ )( 'Question', 'ohmylms' ) }
					titleLabel={ ( 0, I18n.__ )( 'Question title', 'ohmylms' ) }
					titlePlaceholder={ ( 0, I18n.__ )(
						'Type your question here ...',
						'ohmylms'
					) }
					workspaceLabel={ ( 0, I18n.__ )(
						'Question form editor',
						'ohmylms'
					) }
					compact={ props.formCard }
					readOnly={ !! m?.readonly }
					onChange={ ( patch ) => {
						if ( m?.readonly ) {
							return;
						}
						const { questions, ...fields } = patch;
						if ( questions ) {
							s.addContentToQuestion( x, questions );
						}
						if ( Object.keys( fields ).length ) {
							s.updateQuestionData( x, fields );
						}
					} }
					types={ QUESTION_BLOCK_TYPES.map(
						( [ value, label ] ) => ( {
							value,
							label,
						} )
					) }
					onTypeChange={ ( type ) => {
						if ( m?.readonly ) {
							return;
						}
						const patch = questionTypePatch( m, type );
						if ( patch.description !== undefined ) {
							s.updateQuestionData( x, {
								description: patch.description,
							} );
						}
						if ( patch.name ) {
							s.updateQuestionData( x, {
								name: patch.name,
							} );
						}
						if ( patch.settings ) {
							s.updateQuestionData( x, {
								settings: patch.settings,
							} );
						}
						if ( patch.questions ) {
							s.addContentToQuestion( x, patch.questions );
						}
					} }
					questionType={ quizType }
					previewQuestion={ {
						...m,
						questions: previewOptions || [],
					} }
					toolbarActions={ props.toolbarActions }
					toolbarLeading={ props.toolbarLeading }
					settings={ props.settings }
					extraSettings={ props.extraSettings }
					outline={ props.outline }
					beforeContent={
						<React.Fragment>
							{ ! props.formCard && (
								<Controls.FlexWP
									align="center"
									justify="space-between"
								>
									{ React.createElement( lu, {
										icon: O,
										label: k?.name,
										iconColor:
											'var(--ohmylms-primary-color)',
									} ) }
									{ ! m?.readonly &&
										React.createElement( du, {
											handleCopy: M,
											handleDelete: () => _( ! 0 ),
										} ) }
								</Controls.FlexWP>
							) }
							{ Router?.name && (
								<p role="alert">
									{ ( 0, I18n.__ )(
										'Enter the question.',
										'ohmylms'
									) }
								</p>
							) }
							{ imgSrc && (
								<img
									className="ohmylms-question-legacy-media"
									src={ imgSrc }
									alt={ ( 0, I18n.__ )(
										'Question image',
										'ohmylms'
									) }
								/>
							) }
							{ videoSrc && (
								<video
									className="ohmylms-question-legacy-media"
									src={ videoSrc }
									controls
								/>
							) }
						</React.Fragment>
					}
					answers={
						QUESTION_BLOCK_TYPES.some(
							( [ type ] ) => type === quizType
						)
							? undefined
							: answerControls
					}
				/>
				{ h && (
					<Ie
						title={ ( 0, I18n.__ )( 'Delete Question', 'ohmylms' ) }
						description={ ( 0, I18n.__ )(
							'Are you sure you want to delete this question?',
							'ohmylms'
						) }
						onClose={ () => _( ! 1 ) }
						onDelete={ F }
						isOpen={ h }
						wrapClassName="ohmylms-delete-question-modal"
						isDelete={ ! 0 }
					/>
				) }
			</React.Fragment>
		);
	};
}
