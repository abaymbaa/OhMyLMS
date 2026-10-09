/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createMatchingResult( readRuntime ) {
	return function MatchingResult( props ) {
		const {
			I: Controls,
			React,
			b: I18n,
			g: ReactHooks,
			j$,
			p$: QuizQuestionHeader,
		} = readRuntime();
		var t,
			n,
			r,
			data = props.data,
			index = props.index,
			i =
				( props.type,
				( 0, ReactHooks.useMemo )(
					function () {
						return j$( null == data ? void 0 : data.given_answer );
					},
					[ data ]
				) );
		return (
			<React.Fragment>
				<QuizQuestionHeader
					data={ data }
					index={ index }
					isCorrect={ i }
				/>
				<Controls.SpacerWP marginBottom={ 2 } />
				<Controls.TextWP as={ 'p' } size={ 14 } variant={ 'muted' }>
					{ i
						? ( 0, I18n.__ )( 'Answer', 'ohmylms' )
						: ( 0, I18n.__ )( "Student's Answer", 'ohmylms' ) }
				</Controls.TextWP>
				<Controls.SpacerWP marginBottom={ 2 } />
				{ i ? (
					<React.Fragment>
						<Controls.CardWP
							isBorderless={ ! 0 }
							variant={ 'secondary' }
							padding={ '16px' }
							style={ {
								background: '#E6F7E9',
							} }
						>
							{ null == data ||
							null === ( r = data.questions ) ||
							void 0 === r ||
							null === ( r = r.slice() ) ||
							void 0 === r ||
							null ===
								( r = r.sort( function ( e, t ) {
									return (
										Number( e.order_number ) -
										Number( t.order_number )
									);
								} ) ) ||
							void 0 === r
								? void 0
								: r.map( function ( e, t ) {
										var n, r, a, o;
										return (
											<Controls.CardWP
												key={ e.id }
												isBorderless={ ! 0 }
												padding={ '12px 16px' }
												margin={
													0 == t ? '0' : '16px 0 0'
												}
											>
												<Controls.FlexWP gap={ 6 }>
													<Controls.CardWP
														width={ '100%' }
														isBorderless={ ! 0 }
														variant={ 'secondary' }
														padding={ '8px' }
													>
														<Controls.FlexWP>
															<Controls.TextWP>
																{ null == e
																	? void 0
																	: e.answer }
															</Controls.TextWP>
															{ ( null == e
																? void 0
																: e.image_url ) && (
																<React.Fragment>
																	<img
																		src={
																			null ==
																			e
																				? void 0
																				: e.image_url
																		}
																		alt={
																			null ==
																			e
																				? void 0
																				: e.answer
																		}
																		style={ {
																			width: '53px',
																			height: '30px',
																			objectFit:
																				'fill',
																		} }
																	/>
																</React.Fragment>
															) }
														</Controls.FlexWP>
													</Controls.CardWP>
													<Controls.CardWP
														width={ '100%' }
														isBorderless={ ! 0 }
														variant={ 'secondary' }
														padding={ '8px' }
													>
														<Controls.FlexWP>
															<Controls.TextWP>
																{ null == e ||
																null ===
																	( n =
																		e.matching_data ) ||
																void 0 === n
																	? void 0
																	: n.label }
															</Controls.TextWP>
															{ ( null == e ||
															null ===
																( r =
																	e.matching_data ) ||
															void 0 === r
																? void 0
																: r.image_url ) && (
																<React.Fragment>
																	<img
																		src={
																			null ==
																				e ||
																			null ===
																				( a =
																					e.matching_data ) ||
																			void 0 ===
																				a
																				? void 0
																				: a.image_url
																		}
																		alt={
																			null ==
																				e ||
																			null ===
																				( o =
																					e.matching_data ) ||
																			void 0 ===
																				o
																				? void 0
																				: o.label
																		}
																		style={ {
																			width: '53px',
																			height: '30px',
																			objectFit:
																				'fill',
																		} }
																	/>
																</React.Fragment>
															) }
														</Controls.FlexWP>
													</Controls.CardWP>
												</Controls.FlexWP>
											</Controls.CardWP>
										);
									} ) }
						</Controls.CardWP>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Controls.CardWP padding={ '16px' }>
							{ null == data ||
							null === ( t = data.questions ) ||
							void 0 === t ||
							null === ( t = t.slice() ) ||
							void 0 === t ||
							null ===
								( t = t.sort( function ( e, t ) {
									return (
										Number( e.order_number ) -
										Number( t.order_number )
									);
								} ) ) ||
							void 0 === t
								? void 0
								: t.map( function ( e, t ) {
										var n,
											r,
											o,
											i,
											l,
											c,
											u =
												null == data ||
												null ===
													( n = data.given_answer ) ||
												void 0 === n
													? void 0
													: n[
															null == e
																? void 0
																: e.id
														],
											s =
												( null == e
													? void 0
													: e.id ) === u
													? e
													: null == data ||
														  null ===
																( r =
																	data.questions ) ||
														  void 0 === r
														? void 0
														: r.find(
																function ( e ) {
																	return (
																		e.id ==
																		u
																	);
																}
															);
										return (
											<Controls.CardWP
												key={ e.id }
												isBorderless={ ! 0 }
												padding={ '12px 16px' }
												margin={
													0 == t ? '0' : '16px 0 0'
												}
												style={ {
													background:
														( null == e
															? void 0
															: e.id ) === u
															? '#E6F7E9'
															: '#FFEDEE',
												} }
											>
												<Controls.FlexWP gap={ 6 }>
													<Controls.CardWP
														width={ '100%' }
														isBorderless={ ! 0 }
														padding={ '8px' }
													>
														<Controls.FlexWP>
															<Controls.TextWP
																color={
																	( null == e
																		? void 0
																		: e.id ) ===
																	u
																		? 'primary'
																		: '#FF4955'
																}
															>
																{ null == e
																	? void 0
																	: e.answer }
															</Controls.TextWP>
															{ ( null == e
																? void 0
																: e.image_url ) && (
																<React.Fragment>
																	<img
																		src={
																			null ==
																			e
																				? void 0
																				: e.image_url
																		}
																		alt={
																			null ==
																			e
																				? void 0
																				: e.answer
																		}
																		style={ {
																			width: '30px',
																			height: '30px',
																			objectFit:
																				'cover',
																		} }
																	/>
																</React.Fragment>
															) }
														</Controls.FlexWP>
													</Controls.CardWP>
													<Controls.CardWP
														width={ '100%' }
														isBorderless={ ! 0 }
														padding={ '8px' }
													>
														<Controls.FlexWP>
															<Controls.TextWP
																color={
																	( null == e
																		? void 0
																		: e.id ) ===
																	u
																		? 'primary'
																		: '#FF4955'
																}
															>
																{ null == s ||
																null ===
																	( o =
																		s.matching_data ) ||
																void 0 === o
																	? void 0
																	: o.label }
															</Controls.TextWP>
															{ ( null == s ||
															null ===
																( i =
																	s.matching_data ) ||
															void 0 === i
																? void 0
																: i.image_url ) && (
																<React.Fragment>
																	<img
																		src={
																			null ==
																				s ||
																			null ===
																				( l =
																					s.matching_data ) ||
																			void 0 ===
																				l
																				? void 0
																				: l.image_url
																		}
																		alt={
																			null ==
																				s ||
																			null ===
																				( c =
																					s.matching_data ) ||
																			void 0 ===
																				c
																				? void 0
																				: c.label
																		}
																		style={ {
																			width: '30px',
																			height: '30px',
																			objectFit:
																				'cover',
																		} }
																	/>
																</React.Fragment>
															) }
														</Controls.FlexWP>
													</Controls.CardWP>
												</Controls.FlexWP>
											</Controls.CardWP>
										);
									} ) }
						</Controls.CardWP>
						<Controls.SpacerWP marginTop={ 4 }>
							<Controls.TextWP
								as={ 'p' }
								size={ 14 }
								variant={ 'muted' }
							>
								{ ( 0, I18n.__ )(
									'Correct Answer',
									'ohmylms'
								) }
							</Controls.TextWP>
						</Controls.SpacerWP>
						<Controls.CardWP
							isBorderless={ ! 0 }
							variant={ 'secondary' }
							padding={ '16px' }
							style={ {
								background: '#E6F7E9',
							} }
						>
							{ null == data ||
							null === ( n = data.questions ) ||
							void 0 === n ||
							null === ( n = n.slice() ) ||
							void 0 === n ||
							null ===
								( n = n.sort( function ( e, t ) {
									return (
										Number( e.order_number ) -
										Number( t.order_number )
									);
								} ) ) ||
							void 0 === n
								? void 0
								: n.map( function ( e, t ) {
										var n, r, a, o;
										return (
											<Controls.CardWP
												key={ e.id }
												isBorderless={ ! 0 }
												padding={ '12px 16px' }
												margin={
													0 == t ? '0' : '16px 0 0'
												}
											>
												<Controls.FlexWP gap={ 6 }>
													<Controls.CardWP
														width={ '100%' }
														isBorderless={ ! 0 }
														variant={ 'secondary' }
														padding={ '8px' }
													>
														<Controls.FlexWP>
															<Controls.TextWP>
																{ null == e
																	? void 0
																	: e.answer }
															</Controls.TextWP>
															{ ( null == e
																? void 0
																: e.image_url ) && (
																<React.Fragment>
																	<img
																		src={
																			null ==
																			e
																				? void 0
																				: e.image_url
																		}
																		alt={
																			null ==
																			e
																				? void 0
																				: e.answer
																		}
																		style={ {
																			width: '30px',
																			height: '30px',
																			objectFit:
																				'cover',
																		} }
																	/>
																</React.Fragment>
															) }
														</Controls.FlexWP>
													</Controls.CardWP>
													<Controls.CardWP
														width={ '100%' }
														isBorderless={ ! 0 }
														variant={ 'secondary' }
														padding={ '8px' }
													>
														<Controls.FlexWP>
															<Controls.TextWP>
																{ null == e ||
																null ===
																	( n =
																		e.matching_data ) ||
																void 0 === n
																	? void 0
																	: n.label }
															</Controls.TextWP>
															{ ( null == e ||
															null ===
																( r =
																	e.matching_data ) ||
															void 0 === r
																? void 0
																: r.image_url ) && (
																<React.Fragment>
																	<img
																		src={
																			null ==
																				e ||
																			null ===
																				( a =
																					e.matching_data ) ||
																			void 0 ===
																				a
																				? void 0
																				: a.image_url
																		}
																		alt={
																			null ==
																				e ||
																			null ===
																				( o =
																					e.matching_data ) ||
																			void 0 ===
																				o
																				? void 0
																				: o.label
																		}
																		style={ {
																			width: '30px',
																			height: '30px',
																			objectFit:
																				'cover',
																		} }
																	/>
																</React.Fragment>
															) }
														</Controls.FlexWP>
													</Controls.CardWP>
												</Controls.FlexWP>
											</Controls.CardWP>
										);
									} ) }
						</Controls.CardWP>
					</React.Fragment>
				) }
			</React.Fragment>
		);
	};
}
