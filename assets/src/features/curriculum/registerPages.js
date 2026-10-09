import { __ } from '@wordpress/i18n';

/**
 * Curriculum and Learning Track admin pages, registered through the public extension registry.
 * @param registry
 * @param components
 */
export function registerCurriculumPages( registry, components ) {
	const { CurriculumPage, TracksPage } = components;
	registry.registerAdminPage( 'curriculum', {
		label: __( 'Curriculum', 'ohmylms' ),
		render: CurriculumPage,
		priority: 2,
	} );
	registry.registerAdminPage( 'tracks', {
		label: __( 'Learning Tracks', 'ohmylms' ),
		render: TracksPage,
		priority: 2,
	} );
}
