/** Exercise the retained rollback forms without changing the site's default editor. */
exports.useFormAuthoring = async ( page ) => {
	await page.addInitScript( () => {
		let configuration;
		Object.defineProperty( window, 'ohmylmsAssessment', {
			configurable: true,
			get: () => configuration,
			set: ( value ) => {
				configuration = { ...value, formAuthoring: true };
			},
		} );
	} );
};
