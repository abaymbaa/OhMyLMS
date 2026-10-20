const { test, expect } = require( '@playwright/test' );
const fs = require( 'node:fs' );
const { useFormAuthoring } = require( './helpers/form-authoring.cjs' );

test.beforeEach( async ( { page } ) => {
	await useFormAuthoring( page );
	const config = JSON.parse(
		fs.readFileSync( process.env.OHMYLMS_TEST_CREDENTIALS, 'utf8' )
	);
	await page.goto( '/wp-login.php' );
	await page.locator( '#user_login' ).fill( config.username );
	await page.locator( '#user_pass' ).fill( config.password );
	await page.locator( '#wp-submit' ).click();
	await page.waitForURL( /wp-admin/ );
	await page.goto( '/wp-admin/admin.php?page=ohmylms' );
} );

test( 'rollback authoring preserves existing question types and saves quiz and prompt edits', async ( {
	page,
} ) => {
	const errors = [];
	page.on( 'pageerror', ( error ) => errors.push( error.message ) );
	const fixture = await page.evaluate( async () => {
		const quiz = await wp.apiFetch( {
			path: '/ohmylms/v1/quiz',
			method: 'POST',
			data: { name: 'Source quiz fixture', status: 'draft' },
		} );
		const types = [
			'multiple-choice',
			'single-choice',
			'true-false',
			'short-text',
			'long-text',
			'statement',
			'fill-in-the-blank',
			'reorder',
			'matching',
			'example-number',
		];
		const ids = [];
		for ( const type of types ) {
			const options = [ 'short-text', 'long-text' ].includes( type )
				? []
				: [
						{
							answer: type === 'true-false' ? 'True' : 'Answer A',
							is_correct: true,
							order_number: 1,
							matching_data: { label: 'Match A' },
						},
						{
							answer:
								type === 'true-false' ? 'False' : 'Answer B',
							is_correct: false,
							order_number: 2,
							matching_data: { label: 'Match B' },
						},
					];
			const question = await wp.apiFetch( {
				path: '/ohmylms/v1/question',
				method: 'POST',
				data: {
					quiz_id: quiz.id,
					name: `Fixture ${ type }`,
					order_number: ids.length + 1,
					settings: {
						type,
						expected: 1,
						required: false,
						score: { enabled: true, value: 1 },
					},
					questions: options,
				},
			} );
			ids.push( question.id );
		}
		return { quiz, types, ids };
	} );
	try {
		await page.goto(
			`/wp-admin/admin.php?page=ohmylms#/quiz-edit/${ fixture.quiz.id }`
		);
		await expect(
			page.getByRole( 'region', { name: /^Question \d+$/ } )
		).toHaveCount( 10 );
		await page
			.getByRole( 'textbox', {
				name: 'Quick edit question 1',
				exact: true,
			} )
			.fill( 'Edited rollback question prompt' );
		await expect
			.poll( () =>
				page.evaluate( async ( id ) => {
					const saved = await wp.apiFetch( {
						path: `/ohmylms/v1/quiz/${ id }`,
					} );
					return saved.content[ 0 ].description;
				}, fixture.quiz.id )
			)
			.toContain( 'Edited rollback question prompt' );
		await page
			.getByRole( 'tab', { name: 'Quiz introduction', exact: true } )
			.click();
		await expect( page.getByPlaceholder( 'Enter Quiz Title' ) ).toHaveValue(
			'Source quiz fixture'
		);
		await page
			.getByPlaceholder( 'Enter Quiz Title' )
			.fill( 'Saved rollback quiz' );
		await page
			.getByRole( 'region', { name: 'Quiz form editor' } )
			.getByRole( 'button', { name: 'Save', exact: true } )
			.click();
		await expect
			.poll( () =>
				page.evaluate(
					async ( id ) =>
						(
							await wp.apiFetch( {
								path: `/ohmylms/v1/quiz/${ id }`,
							} )
						).name,
					fixture.quiz.id
				)
			)
			.toBe( 'Saved rollback quiz' );
		await page.reload();
		await expect(
			page.getByRole( 'region', { name: /^Question \d+$/ } )
		).toHaveCount( 10 );
		const saved = await page.evaluate(
			( id ) => wp.apiFetch( { path: `/ohmylms/v1/quiz/${ id }` } ),
			fixture.quiz.id
		);
		expect(
			saved.content.map( ( question ) => Number( question.id ) )
		).toEqual( fixture.ids );
		expect(
			saved.content.map( ( question ) => question.settings.type )
		).toEqual( fixture.types );
		expect( errors ).toEqual( [] );
	} finally {
		await page.evaluate( async ( data ) => {
			await wp.apiFetch( {
				path: `/ohmylms/v1/quiz/${ data.quiz.id }`,
				method: 'DELETE',
			} );
			for ( const id of data.ids ) {
				await wp.apiFetch( {
					path: `/wp/v2/ohmylms-questions/${ id }?force=true`,
					method: 'DELETE',
				} );
			}
		}, fixture );
	}
} );
