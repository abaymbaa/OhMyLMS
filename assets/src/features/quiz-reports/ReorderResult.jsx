/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createReorderResult( readRuntime ) {
	return function ReorderResult( props ) {
		const {
			I: Controls,
			R$,
			React,
			b: I18n,
			g: ReactHooks,
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
						return R$(
							null == data ? void 0 : data.given_answer,
							null == data ? void 0 : data.questions
						);
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
										return (
											<Controls.CardWP
												key={ e.id }
												isBorderless={ ! 0 }
												padding={ '12px 16px' }
												margin={
													0 == t ? '0' : '16px 0 0'
												}
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
																	null == e
																		? void 0
																		: e.image_url
																}
																alt={
																	null == e
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
										);
									} ) }
						</Controls.CardWP>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Controls.CardWP
							isBorderless={ ! 0 }
							variant={ 'secondary' }
							padding={ '16px' }
							style={ {
								background: '#FFEDEE',
							} }
						>
							{ null == data ||
							null === ( t = data.given_answer ) ||
							void 0 === t
								? void 0
								: t.map( function ( e, t ) {
										var n,
											r =
												null == data ||
												null ===
													( n = data.questions ) ||
												void 0 === n
													? void 0
													: n.find( function ( t ) {
															return t.id == e;
														} );
										return (
											<Controls.CardWP
												key={ e }
												isBorderless={ ! 0 }
												padding={ '24px' }
												margin={
													0 == t ? '0' : '20px 0 0'
												}
											>
												<Controls.FlexWP>
													<Controls.TextWP>
														{ null == r
															? void 0
															: r.answer }
													</Controls.TextWP>
													{ ( null == r
														? void 0
														: r.image_url ) && (
														<React.Fragment>
															<img
																src={
																	null == r
																		? void 0
																		: r.image_url
																}
																alt={
																	null == r
																		? void 0
																		: r.answer
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
										);
									} ) }
						</Controls.CardWP>
						<Controls.SpacerWP margin={ 2 }>
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
										return (
											<Controls.CardWP
												key={ e.id }
												isBorderless={ ! 0 }
												padding={ '12px 16px' }
												margin={
													0 == t ? '0' : '16px 0 0'
												}
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
																	null == e
																		? void 0
																		: e.image_url
																}
																alt={
																	null == e
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
										);
									} ) }
						</Controls.CardWP>
					</React.Fragment>
				) }
			</React.Fragment>
		);
	};
}
