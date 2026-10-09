import { createElement } from '@wordpress/element';
import { BlockWorkspace } from '../content-hub/BlockWorkspace';

export function LessonBlockWorkspace( { lesson, ...props } ) {
	return (
		<BlockWorkspace key={ lesson.id } document={ lesson } { ...props } />
	);
}
