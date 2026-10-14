/** @jsx createElement */
import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { SharedContentEditor } from './SharedContentEditor';
import { RelationshipBadge } from './RelationshipBadge';

/**
 * Show a shared ability and the syllabus objectives explicitly linked to it.
 * @param {Object} props       Component props.
 * @param {Object} props.skill Selected shared skill.
 */
export function SharedSkillDetails( { skill } ) {
	if ( ! skill ) {
		return (
			<p>
				{ __(
					'Choose a shared skill to see its linked syllabus objectives.',
					'ohmylms'
				) }
			</p>
		);
	}
	return (
		<section>
			<h3>{ skill.name }</h3>
			<p>{ skill.description }</p>
			<h4>{ __( 'Linked syllabus objectives', 'ohmylms' ) }</h4>
			{ ! skill.mappings?.mapped_from.length && (
				<p>
					{ __(
						'This shared skill has no saved syllabus mappings yet.',
						'ohmylms'
					) }
				</p>
			) }
			<ul>
				{ skill.mappings?.mapped_from.map( ( mapping ) => (
					<li key={ mapping.id }>
						<strong>
							{ mapping.specific.code } { mapping.specific.name }
						</strong>
						<p>
							<RelationshipBadge relation={ mapping.relation } />
							{ mapping.note ? ` · ${ mapping.note }` : '' }
						</p>
					</li>
				) ) }
			</ul>
			<SharedContentEditor skill={ skill } />
		</section>
	);
}
