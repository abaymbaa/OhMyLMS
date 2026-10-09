import { createComponentAdapter } from './component-adapter.mjs';

export const adaptCommerce = createComponentAdapter( {
	manifest: new URL(
		'../assets/src/features/commerce/components.json',
		import.meta.url
	),
	namespace: 'commerceComponents',
	label: 'commerce',
	declarations: true,
} );
