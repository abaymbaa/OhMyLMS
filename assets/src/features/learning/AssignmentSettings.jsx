/** Reconstructed React source. Runtime dependencies are explicit in components.json. */
import { createElement } from '@wordpress/element';
export function createAssignmentSettings( readRuntime ) {
	return function AssignmentSettings( props ) {
		const {
			Aa,
			Ca,
			Dn: DownloadResources,
			Ea,
			Fa,
			Gn: DeleteLearningItem,
			I: Controls,
			Kt,
			L: Entitlements,
			Ma,
			Oa,
			Pn: DripSettings,
			React,
			Rt,
			T: StoreModule,
			Ta,
			_n,
			b: I18n,
			cn: PrerequisiteSettings,
			g: ReactHooks,
			l,
			sn,
			y: WordPressData,
		} = readRuntime();
		var t,
			n,
			r,
			a,
			o,
			i,
			c,
			u,
			s,
			d,
			m,
			p,
			f,
			v = true,
			assignment = props.assignment,
			chapterId = props.chapterId,
			setOpenModal = props.setOpenModal,
			E =
				'cohort-based' ===
				( 0, WordPressData.useSelect )( function ( e ) {
					return e( StoreModule.default ).getCourseType();
				}, [] ),
			S = ( 0, WordPressData.useDispatch )( StoreModule.default ),
			byId = ( 0, WordPressData.useSelect )( function ( e ) {
				var t,
					n = e( StoreModule.default ).getCourseChapters();
				return (
					null === ( t = e( StoreModule.default ).getCourse() ) ||
						void 0 === t ||
						t.settings,
					{
						byId: n.byId,
					}
				 );
			}, [] ).byId,
			x = byId && byId[ chapterId ],
			C = ( function () {
				var e,
					t =
						( ( e = Ta().m( function e( t ) {
							var n, r, a, o;
							return Ta().w( function ( e ) {
								for (;;) {
									switch ( e.n ) {
										case 0:
											return (
												( e.n = 1 ),
												l()( {
													path: '/ohmylms/v1/chapters/'
														.concat(
															chapterId,
															'/search-contents?term='
														)
														.concat( t ),
													method: 'GET',
													headers: {
														'Content-Type':
															'application/json',
													},
												} )
											 );
										case 1:
											return (
												( n = e.v ),
												( r =
													null == x
														? void 0
														: x.content.map(
																String
															) ),
												( a = r.indexOf(
													String( assignment.id )
												) ),
												( o = n.data.filter(
													function ( e ) {
														return (
															( null == e
																? void 0
																: e.value ) !=
																assignment.id &&
															r.indexOf(
																String(
																	null == e
																		? void 0
																		: e.value
																)
															) < a
														);
													}
												) ),
												e.a( 2, {
													data: o,
												} )
											 );
									}
								}
							}, e );
						} ) ),
						function () {
							var t = this,
								n = arguments;
							return new Promise( function ( r, a ) {
								var o = e.apply( t, n );
								function i( e ) {
									Fa( o, r, a, i, l, 'next', e );
								}
								function l( e ) {
									Fa( o, r, a, i, l, 'throw', e );
								}
								i( void 0 );
							} );
						} );
				return function ( e ) {
					return t.apply( this, arguments );
				};
			} )(),
			P = function ( e, t, n ) {
				S.setAssignment(
					Aa(
						Aa( {}, assignment ),
						{},
						Ma(
							{},
							e,
							n
								? Aa(
										Aa( {}, assignment[ e ] ),
										{},
										Ma( {}, n, t )
									)
								: t
						)
					)
				);
			},
			O = [
				{
					value: 'day',
					label: ( 0, I18n.__ )( 'Day', 'ohmylms' ),
				},
				{
					value: 'week',
					label: ( 0, I18n.__ )( 'Week', 'ohmylms' ),
				},
				{
					value: 'Month',
					label: ( 0, I18n.__ )( 'Month', 'ohmylms' ),
				},
			],
			k = ( 0, ReactHooks.useCallback )(
				function ( e ) {
					Number( e ) < 1 ||
						S.setAssignment(
							Aa(
								Aa( {}, assignment ),
								{},
								{
									drip_settings: Aa(
										Aa(
											{},
											null == assignment
												? void 0
												: assignment.drip_settings
										),
										{},
										{
											days: e,
										}
									),
								}
							)
						);
				},
				[ S, assignment ]
			),
			j = ( 0, ReactHooks.useCallback )(
				function () {
					null != assignment &&
						assignment.id &&
						( S.deleteLessonFromChapter(
							null == assignment ? void 0 : assignment.id,
							chapterId
						),
						setOpenModal( ! 1 ) );
				},
				[ chapterId, assignment, S ]
			);
		return (
			<Controls.CardWP fullHeight={ ! 0 } isBorderless={ ! 0 }>
				<Controls.SpacerWP
					paddingX={ 5 }
					paddingTop={ 5 }
					paddingBottom={ 0 }
				>
					<Controls.FlexWP
						align={ 'center' }
						gap={ 3 }
						justify={ 'flex-start' }
					>
						<Rt />
						{ ( 0, I18n.__ )( 'Settings', 'ohmylms' ) }
					</Controls.FlexWP>
				</Controls.SpacerWP>
				{ chapterId && (
					<PrerequisiteSettings
						title={ ( 0, I18n.__ )( 'Prerequisites', 'ohmylms' ) }
						tooltip={ ( 0, I18n.__ )(
							'Information about prerequisites',
							'ohmylms'
						) }
						onChange={ function () {
							var e;
							S.setAssignment(
								Aa(
									Aa( {}, assignment ),
									{},
									{
										prerequisites: Aa(
											Aa(
												{},
												null == assignment
													? void 0
													: assignment.prerequisites
											),
											{},
											{
												enable: ! (
													null != assignment &&
													null !==
														( e =
															assignment.prerequisites ) &&
													void 0 !== e &&
													e.enable
												),
											}
										),
									}
								)
							);
						} }
						isChecked={
							null !==
								( t =
									null == assignment ||
									null === ( n = assignment.prerequisites ) ||
									void 0 === n
										? void 0
										: n.enable ) &&
							void 0 !== t &&
							t
						}
						childTitle={ ( 0, I18n.__ )(
							'Members can access this content if they have completed all of the following content:',
							'ohmylms'
						) }
						childPlaceholder={ ( 0, I18n.__ )(
							'Type to search course modules',
							'ohmylms'
						) }
						childNotFoundMessage={ ( 0, I18n.__ )(
							'No Lessons Found',
							'ohmylms'
						) }
						isMultiple={ ! 0 }
						onSearch={ C }
						onChildChange={ function ( e ) {
							var t = e.map( function ( e ) {
								return {
									label: e.label,
									value: e.value,
								};
							} );
							S.setAssignment(
								Aa(
									Aa( {}, assignment ),
									{},
									{
										prerequisites: Aa(
											Aa(
												{},
												null == assignment
													? void 0
													: assignment.prerequisites
											),
											{},
											{
												data: Oa( t ),
											}
										),
									}
								)
							);
						} }
						defaultValue={
							null == assignment ||
							null === ( r = assignment.prerequisites ) ||
							void 0 === r
								? void 0
								: r.data
						}
						showDivider={ ! 1 }
					/>
				) }
				<DripSettings
					onChange={ function () {
						var e;
						{
							var t = ! (
								null != assignment &&
								null !== ( e = assignment.drip_settings ) &&
								void 0 !== e &&
								e.enable
							);
							S.setAssignment(
								Aa(
									Aa( {}, assignment ),
									{},
									{
										drip_settings: Aa(
											Aa(
												{},
												null == assignment
													? void 0
													: assignment.drip_settings
											),
											{},
											{
												enable: t,
											},
											t && {
												type: E
													? 'cohort-start'
													: 'enrollment-from-x-days',
											}
										),
									}
								)
							);
						}
					} }
					isChecked={
						null !==
							( a =
								null == assignment ||
								null === ( o = assignment.drip_settings ) ||
								void 0 === o
									? void 0
									: o.enable ) &&
						void 0 !== a &&
						a
					}
					onDripFeedTypeChange={ function ( e ) {
						{
							var t,
								n,
								r = Aa(
									Aa(
										{},
										null == assignment
											? void 0
											: assignment.drip_settings
									),
									{},
									{
										type: e,
									}
								);
							if ( 'specific-date' === e ) {
								( delete r.days,
									( r.date =
										( null == assignment ||
										null ===
											( t = assignment.drip_settings ) ||
										void 0 === t
											? void 0
											: t.date ) ||
										sn()( new Date() ).format(
											'YYYY-MM-DDTHH:mm:ss.SSSD'
										) ),
									( r.time =
										( null == assignment ||
										null ===
											( n = assignment.drip_settings ) ||
										void 0 === n
											? void 0
											: n.time ) ||
										sn()( new Date() ).format(
											'YYYY-MM-DDTHH:mm:ss.SSSD'
										) ) );
							} else if (
								'cohort-from-x-days' === e ||
								'enrollment-from-x-days' === e
							) {
								var a;
								( delete r.date,
									delete r.time,
									( r.days =
										( null == assignment ||
										null ===
											( a = assignment.drip_settings ) ||
										void 0 === a
											? void 0
											: a.days ) || 1 ) );
							} else {
								'cohort-start' === e &&
									( delete r.days,
									delete r.date,
									delete r.time );
							}
							S.setAssignment(
								Aa(
									Aa( {}, assignment ),
									{},
									{
										drip_settings: r,
									}
								)
							);
						}
					} }
					handleDripDatePickerChange={ function ( e, t ) {
						S.setAssignment(
							Aa(
								Aa( {}, assignment ),
								{},
								{
									drip_settings: Aa(
										Aa(
											{},
											null == assignment
												? void 0
												: assignment.drip_settings
										),
										{},
										{
											date: e
												? sn()( e ).format(
														'YYYY-MM-DDTHH:mm:ss.SSS'
													)
												: null,
										}
									),
								}
							)
						);
					} }
					handleDripTimePickerChange={ function ( e ) {
						S.setAssignment(
							Aa(
								Aa( {}, assignment ),
								{},
								{
									drip_settings: Aa(
										Aa(
											{},
											null == assignment
												? void 0
												: assignment.drip_settings
										),
										{},
										{
											time: e
												? sn()( e ).format(
														'YYYY-MM-DDTHH:mm:ss.SSS'
													)
												: null,
										}
									),
								}
							)
						);
					} }
					handleDayChange={ k }
					dripFeedType={
						null == assignment ||
						null === ( i = assignment.drip_settings ) ||
						void 0 === i
							? void 0
							: i.type
					}
					dripDate={
						( null == assignment ||
						null === ( c = assignment.drip_settings ) ||
						void 0 === c
							? void 0
							: c.date ) ||
						sn()().startOf( 'day' ).format( 'YYYY-MM-DD' )
					}
					dripTime={
						( null == assignment ||
						null === ( u = assignment.drip_settings ) ||
						void 0 === u
							? void 0
							: u.time ) || new Date()
					}
					enrollmentFromXDays={
						null == assignment ||
						null === ( s = assignment.drip_settings ) ||
						void 0 === s
							? void 0
							: s.days
					}
					isCohortBased={ E }
				/>
				<Kt
					title={ ( 0, I18n.__ )( 'Time Limit', 'ohmylms' ) }
					tooltip={ ( 0, I18n.__ )(
						'Set a deadline for submitting this assignment.',
						'ohmylms'
					) }
					onChange={ function ( e ) {
						return P( 'enable_time_limit', e );
					} }
					isChecked={
						null !==
							( d =
								null == assignment
									? void 0
									: assignment.enable_time_limit ) &&
						void 0 !== d &&
						d
					}
					showDivider={ ! 1 }
					customClass={
						'ohmylms-assignment-settings-time-limit-button'
					}
					conditionalChild={
						<Ea
							isBorderless={ ! 0 }
							variant={ 'secondary' }
							padding={ '16px' }
							margin={ '12px 0 0' }
						>
							<Controls.InputWP
								value={
									( null == assignment
										? void 0
										: assignment.time_limit ) || ''
								}
								type={ 'number' }
								min={ 1 }
								placeholder={ ( 0, I18n.__ )(
									'Enter time limit',
									'ohmylms'
								) }
								className={
									'ohmylms-assignment-settings-time-limit-input'
								}
								onChange={ function ( e ) {
									/^\d*\.?\d*$/.test( e ) &&
										P( 'time_limit', e );
								} }
								onKeyDown={ function ( e ) {
									( [
										'e',
										'E',
										'+',
										'-',
										'/',
										'\\',
										'.',
										',',
										'*',
										' ',
									].includes( e.key ) ||
										( /[a-zA-Z]/.test( e.key ) &&
											! [
												'Backspace',
												'Tab',
												'ArrowLeft',
												'ArrowRight',
												'Delete',
												'Enter',
											].includes( e.key ) ) ) &&
										e.preventDefault();
								} }
								onBlur={ function () {
									( null == assignment
										? void 0
										: assignment.time_limit ) < 1 &&
										P( 'time_limit', 1 );
								} }
							/>
							<Controls.SpacerWP />
							<_n
								placeholder={ ( 0, I18n.__ )(
									'Select option',
									'ohmylms'
								) }
								customClass={
									'ohmylms-assignment-settings-time-limit-type-select'
								}
								options={ O }
								value={
									null == assignment
										? void 0
										: assignment.time_limit_type
								}
								onChange={ function ( e ) {
									return P( 'time_limit_type', e );
								} }
							/>
						</Ea>
					}
				/>
				<Controls.SpacerWP padding={ 4 } marginBottom={ 0 }>
					<Controls.HeadingWP level={ '4' }>
						{ ( 0, I18n.__ )(
							'Maximum Passing Points',
							'ohmylms'
						) }
					</Controls.HeadingWP>
					<Ca
						value={
							( null == assignment
								? void 0
								: assignment.total_points ) || ''
						}
						title={ ( 0, I18n.__ )(
							'Set the maximum points a student can score',
							'ohmylms'
						) }
						error={
							Number(
								null == assignment
									? void 0
									: assignment.total_points
							) < 1
						}
						errorMessage={ ( 0, I18n.__ )(
							'Total points should be greater than 0',
							'ohmylms'
						) }
						className={
							'ohmylms-assignment-settings-total-points-input'
						}
						handleChange={ function ( e ) {
							var t = e;
							/^\d*\.?\d*$/.test( t ) && P( 'total_points', t );
						} }
						onKeyDown={ function ( e ) {
							( [
								'e',
								'E',
								'+',
								'-',
								'/',
								'\\',
								',',
								'*',
								' ',
							].includes( e.key ) ||
								( /[a-zA-Z]/.test( e.key ) &&
									! [
										'Backspace',
										'Tab',
										'ArrowLeft',
										'ArrowRight',
										'Delete',
										'Enter',
									].includes( e.key ) ) ) &&
								e.preventDefault();
						} }
						onBlur={ function () {
							( null == assignment
								? void 0
								: assignment.total_points ) < 1 &&
								P( 'total_points', 1 );
						} }
						variant={ 'secondary' }
					/>
				</Controls.SpacerWP>
				<Controls.SpacerWP padding={ 4 } marginBottom={ 0 }>
					<Controls.HeadingWP level={ '4' }>
						{ ( 0, I18n.__ )( 'Minimum Pass Points', 'ohmylms' ) }
					</Controls.HeadingWP>
					<Ca
						value={
							( null == assignment
								? void 0
								: assignment.maximum_pass_points ) || ''
						}
						title={ ( 0, I18n.__ )(
							'Set the minimum points required for the student to pass this assignment.',
							'ohmylms'
						) }
						error={
							Number(
								null == assignment
									? void 0
									: assignment.maximum_pass_points
							) < 0 ||
							Number(
								null == assignment
									? void 0
									: assignment.maximum_pass_points
							) >
								Number(
									null == assignment
										? void 0
										: assignment.total_points
								)
						}
						errorMessage={ ( 0, I18n.__ )(
							'Minimum pass points should be greater than 0 and less than or equal to total points',
							'ohmylms'
						) }
						className={
							'ohmylms-assignment-settings-pass-points-input'
						}
						handleChange={ function ( e ) {
							var t = e;
							/^\d*\.?\d*$/.test( t ) &&
								P( 'maximum_pass_points', t );
						} }
						onKeyDown={ function ( e ) {
							( [
								'e',
								'E',
								'+',
								'-',
								'/',
								'\\',
								',',
								'*',
								' ',
							].includes( e.key ) ||
								( /[a-zA-Z]/.test( e.key ) &&
									! [
										'Backspace',
										'Tab',
										'ArrowLeft',
										'ArrowRight',
										'Delete',
										'Enter',
									].includes( e.key ) ) ) &&
								e.preventDefault();
						} }
						onBlur={ function () {
							( null == assignment
								? void 0
								: assignment.maximum_pass_points ) < 1 &&
								P( 'maximum_pass_points', 1 );
						} }
						variant={ 'secondary' }
					/>
				</Controls.SpacerWP>
				<Kt
					title={ ( 0, I18n.__ )(
						'Assignment Submission Attempts',
						'ohmylms'
					) }
					onChange={ function ( e ) {
						return P( 'allow_upload_files', e );
					} }
					isChecked={
						null !==
							( m =
								null == assignment
									? void 0
									: assignment.allow_upload_files ) &&
						void 0 !== m &&
						m
					}
					customClass={
						'ohmylms-assignment-settings-submission-attempts-button'
					}
					showDivider={ ! 1 }
					conditionalChild={
						<Ca
							value={
								( null == assignment
									? void 0
									: assignment.number_of_files ) || ''
							}
							title={ ( 0, I18n.__ )(
								'Define the number of attempts that a student is allowed in this assignment.',
								'ohmylms'
							) }
							error={
								Number(
									null == assignment
										? void 0
										: assignment.number_of_files
								) < 1
							}
							errorMessage={ ( 0, I18n.__ )(
								'Number of files should be greater than 0',
								'ohmylms'
							) }
							className={
								'ohmylms-assignment-settings-number-of-files-input'
							}
							handleChange={ function ( e ) {
								var t = e;
								/^\d*\.?\d*$/.test( t ) &&
									P( 'number_of_files', t );
							} }
							onKeyDown={ function ( e ) {
								( [
									'e',
									'E',
									'+',
									'-',
									'/',
									'\\',
									'.',
									',',
									'*',
									' ',
								].includes( e.key ) ||
									( /[a-zA-Z]/.test( e.key ) &&
										! [
											'Backspace',
											'Tab',
											'ArrowLeft',
											'ArrowRight',
											'Delete',
											'Enter',
										].includes( e.key ) ) ) &&
									e.preventDefault();
							} }
							onBlur={ function () {
								( null == assignment
									? void 0
									: assignment.number_of_files ) < 1 &&
									P( 'number_of_files', 1 );
							} }
							variant={ 'secondary' }
						/>
					}
				/>
				<Kt
					title={ ( 0, I18n.__ )(
						'Submission File Size Limit',
						'ohmylms'
					) }
					onChange={ function ( e ) {
						return P( 'enable_file_size_limit', e );
					} }
					isChecked={
						null !==
							( p =
								null == assignment
									? void 0
									: assignment.enable_file_size_limit ) &&
						void 0 !== p &&
						p
					}
					showDivider={ ! 1 }
					customClass={
						'ohmylms-assignment-settings-file-size-limit-button'
					}
					conditionalChild={
						<Ca
							value={
								( null == assignment
									? void 0
									: assignment.max_file_size_limit ) || ''
							}
							title={ ( 0, I18n.__ )(
								'Define the maximum file size attachment that a student can upload in MB',
								'ohmylms'
							) }
							error={
								Number(
									null == assignment
										? void 0
										: assignment.max_file_size_limit
								) < 1
							}
							errorMessage={ ( 0, I18n.__ )(
								'File size limit should be greater than 0',
								'ohmylms'
							) }
							className={
								'ohmylms-assignment-settings-file-size-limit-input'
							}
							handleChange={ function ( e ) {
								var t = e;
								/^\d*\.?\d*$/.test( t ) &&
									P( 'max_file_size_limit', t );
							} }
							onKeyDown={ function ( e ) {
								( [
									'e',
									'E',
									'+',
									'-',
									'/',
									'\\',
									',',
									'*',
									' ',
								].includes( e.key ) ||
									( /[a-zA-Z]/.test( e.key ) &&
										! [
											'Backspace',
											'Tab',
											'ArrowLeft',
											'ArrowRight',
											'Delete',
											'Enter',
										].includes( e.key ) ) ) &&
									e.preventDefault();
							} }
							onBlur={ function () {
								( null == assignment
									? void 0
									: assignment.max_file_size_limit ) < 1 &&
									P( 'max_file_size_limit', 1 );
							} }
							variant={ 'secondary' }
						/>
					}
				/>
				<DownloadResources
					resources={
						( null == assignment ||
						null === ( f = assignment.download_resource ) ||
						void 0 === f
							? void 0
							: f.file ) || []
					}
					handleResources={ function ( e ) {
						var t;
						S.setAssignment(
							Aa(
								Aa( {}, assignment ),
								{},
								{
									download_resource: Aa(
										Aa(
											{},
											null == assignment
												? void 0
												: assignment.download_resource
										),
										{},
										{
											file: [].concat(
												Oa(
													( null == assignment ||
													null ===
														( t =
															assignment.download_resource ) ||
													void 0 === t
														? void 0
														: t.file ) || []
												),
												Oa( e )
											),
										}
									),
								}
							)
						);
					} }
					handleDeleteResource={ function ( e ) {
						var t,
							n =
								null == assignment ||
								null === ( t = assignment.download_resource ) ||
								void 0 === t ||
								null === ( t = t.file ) ||
								void 0 === t
									? void 0
									: t.filter( function ( t ) {
											return (
												( null == t
													? void 0
													: t.id ) !== e
											);
										} );
						S.setAssignment(
							Aa(
								Aa( {}, assignment ),
								{},
								{
									download_resource: Aa(
										Aa(
											{},
											null == assignment
												? void 0
												: assignment.download_resource
										),
										{},
										{
											file: n,
										}
									),
								}
							)
						);
					} }
					showDivider={ ! 1 }
					tooltipText={ ( 0, I18n.__ )(
						'Upload downloadable files or materials for students to access with this assignment.',
						'ohmylms'
					) }
				/>
				{ chapterId && (
					<Controls.SpacerWP
						paddingX={ 5 }
						paddingTop={ 5 }
						paddingBottom={ 0 }
					>
						<DeleteLearningItem
							label={ ( 0, I18n.__ )(
								'Delete Assignment',
								'ohmylms'
							) }
							onDelete={ j }
							alertTitle={ ( 0, I18n.__ )(
								'Delete Assignment',
								'ohmylms'
							) }
							alertDescription={ ( 0, I18n.__ )(
								'Are you sure you want to delete this assignment?',
								'ohmylms'
							) }
						/>
					</Controls.SpacerWP>
				) }
			</Controls.CardWP>
		);
	};
}
