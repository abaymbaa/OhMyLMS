<?php // phpcs:ignore WordPress.Files.FileName -- PSR-4 namespace/class filename required by the existing Composer autoloader.
/**
 * MCP tools for AI analysis of syllabuses and shared skills.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\MCP;

defined( 'ABSPATH' ) || exit;

/** Start and follow analyses, and review what they suggest. Nothing changes the curriculum until a suggestion is accepted. */
final class CurriculumAiTools {

	/**
	 * Tool definitions in the shape the MCP server and abilities layer share.
	 *
	 * @return array
	 */
	public static function definitions() {
		$id     = array(
			'type'    => 'integer',
			'minimum' => 1,
		);
		$tools  = array(
			'get_skill_placement_options' => array(
				'GET',
				'/syllabus-comparison/skill-placement',
				'The domains (number, algebra, functions, geometry, …) and grades (1 to 12, and 13 for beyond grade 12) a shared skill can be placed in, and whether AI analysis can run on this site.',
				array(),
				array(),
				false,
			),
			'start_syllabus_analysis'     => array(
				'POST',
				'/syllabus-comparison/ai/runs',
				'Start an AI analysis. kind "syllabus" (with syllabus_id) places each objective in a domain and grade band, then suggests the shared skills it maps to or proposes new shared skills; by default only unmapped objectives, include_mapped analyses all. kind "placement" (with subject) suggests a domain and grades for shared skills that have none. Suggestions wait for review; call advance_syllabus_analysis until the status is done.',
				array(
					'kind'           => array(
						'type' => 'string',
						'enum' => array( 'syllabus', 'placement' ),
					),
					'syllabus_id'    => $id,
					'subject'        => array(
						'type'      => 'string',
						'maxLength' => 100,
					),
					'include_mapped' => array( 'type' => 'boolean' ),
				),
				array( 'kind' ),
				false,
			),
			'advance_syllabus_analysis'   => array(
				'POST',
				'/syllabus-comparison/ai/runs/{id}/step',
				'Process the next slice of an analysis (about eight objectives) and return its progress: status, total, processed, suggested, failures and how many suggestions are pending.',
				array( 'id' => $id ),
				array( 'id' ),
				false,
			),
			'list_skill_suggestions'      => array(
				'GET',
				'/syllabus-comparison/ai/suggestions',
				'AI suggestions to review, 30 per page, new skills first and then by confidence. Each has kind (new_skill, mapping or placement), the objective with its estimated domain, grades and English meaning, the shared skill or proposed skill, the relation, confidence and reason. Filter by run_id, status (pending by default, or accepted, rejected, all), kind and min_confidence.',
				array(
					'run_id'         => $id,
					'status'         => array(
						'type' => 'string',
						'enum' => array( 'pending', 'accepted', 'rejected', 'all' ),
					),
					'kind'           => array(
						'type' => 'string',
						'enum' => array( 'new_skill', 'mapping', 'placement' ),
					),
					'min_confidence' => array(
						'type'    => 'number',
						'minimum' => 0,
						'maximum' => 1,
					),
				),
				array(),
				true,
			),
			'review_skill_suggestions'    => array(
				'POST',
				'/syllabus-comparison/ai/suggestions/review',
				'Accept or reject up to 200 suggestions. Accepting a new_skill creates the shared skill and maps its objective; a mapping saves it through the normal guarded mapping save and records that AI suggested it; a placement stores the domain and grades. overrides maps a suggestion id to changes to apply when accepting: relation, shared_id, name, description, topic, domain, grade_from, grade_to. Accept a proposed new skill before the mappings that point to it.',
				array(
					'ids'       => array(
						'type'     => 'array',
						'minItems' => 1,
						'maxItems' => 200,
						'items'    => $id,
					),
					'action'    => array(
						'type' => 'string',
						'enum' => array( 'accept', 'reject' ),
					),
					'overrides' => array( 'type' => 'object' ),
				),
				array( 'ids', 'action' ),
				false,
			),
		);
		$result = array();
		foreach ( $tools as $name => $definition ) {
			$result[ $name ] = array(
				'method'      => $definition[0],
				'route'       => $definition[1],
				'description' => $definition[2],
				'properties'  => $definition[3],
				'required'    => $definition[4],
				'list'        => $definition[5],
				'readonly'    => 'GET' === $definition[0],
				'destructive' => false,
				'idempotent'  => 'GET' === $definition[0],
			);
		}
		return $result;
	}
}
