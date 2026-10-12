import { createElement } from '@wordpress/element';

/**
 * Stacked discs: the question bank. The header buttons are icon-only, so this stands in for
 * the "Add from bank" label (its tooltip and accessible name carry the words).
 *
 * Each shape sets `fill="none"` itself: the admin button styles fill every SVG shape, which
 * would turn these outlines into a solid blob.
 */
export const BankIcon = () => (
	<svg
		fill="none"
		width="22"
		height="22"
		viewBox="0 0 22 22"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<ellipse
			cx="11"
			cy="5.5"
			rx="6.5"
			ry="2.5"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
		/>
		<path
			d="M4.5 5.5v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-5"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
		/>
		<path
			d="M4.5 10.5v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-5"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
		/>
	</svg>
);
