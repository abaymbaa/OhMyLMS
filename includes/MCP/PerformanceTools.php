<?php // phpcs:ignore WordPress.Files.FileName -- PSR-4 namespace/class filename required by the existing Composer autoloader.
/**
 * MCP tools for skill and student performance tracking.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\MCP;

defined( 'ABSPATH' ) || exit;

/**
 * Read where learners stand on skills and choose how levels are decided. Levels themselves are
 * never writable here: they are derived from the answers by the site's policy.
 */
final class PerformanceTools {

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
			'get_student_skills'       => array(
				'GET',
				'/reports/skills/students/{student_id}',
				'One learner\'s skills: for each skill the level (not-started, attempted, familiar, proficient or mastered), review_due, how many answers back it, accuracy, and the 0-100 mastery score when the site shows it. Also next-step suggestions and the recent evidence behind the levels. Levels are decided by the site\'s policy from the learner\'s answers and cannot be set here.',
				array(
					'student_id' => $id,
				),
				array( 'student_id' ),
				false,
			),
			'get_student_guidance'     => array(
				'GET',
				'/reports/skills/students/{student_id}/guidance',
				'Guidance for one learner, read from their skill levels and the shared skill library: strength (0-100) per domain with the highest grade reached at proficient; next steps (help with struggling skills, reviews that are due, skills whose prerequisites are all proficient); reviews already covered by later work on skills that include them (credit 0-1 from "includes" link weights); and readiness (0-100) for each syllabus they have started, with the objectives still to learn. Read only.',
				array(
					'student_id' => $id,
					'limit'      => array(
						'type'    => 'integer',
						'minimum' => 1,
						'maximum' => 20,
					),
				),
				array( 'student_id' ),
				false,
			),
			'get_skill_report'         => array(
				'GET',
				'/reports/skills',
				'The learners x skills matrix for one course or one class: each cell has the learner\'s level on the skill. Give course_id or class_id. Skills are grouped by unit; the response also lists the five level names.',
				array(
					'course_id' => $id,
					'class_id'  => $id,
				),
				array(),
				true,
			),
			'get_performance_settings' => array(
				'GET',
				'/engagement/settings/mastery',
				'How skill levels are decided on this site: the active policy (evidence rules, step levels or mastery score), the policies to choose from, which activities count as skill evidence, whether the mastery score is shown, and whether AI study notes are on.',
				array(),
				array(),
				false,
			),
			'set_performance_settings' => array(
				'POST',
				'/engagement/settings/mastery',
				'Choose how skill levels are decided. policy is evidence, steps or score. surfaces maps an activity (quiz, practice, exam, inline, question-player, or another registered kind) to whether its answers count toward skills. Changing the policy or the activities rebuilds every learner\'s levels in the background from the stored answers; no answer is lost. Send the complete surfaces map you want.',
				array(
					'policy'      => array(
						'type' => 'string',
						'enum' => array( 'evidence', 'steps', 'score' ),
					),
					'surfaces'    => array(
						'type'                 => 'object',
						'additionalProperties' => array( 'type' => 'boolean' ),
					),
					'show_score'  => array( 'type' => 'boolean' ),
					'ai_insights' => array( 'type' => 'boolean' ),
				),
				array( 'policy' ),
				false,
			),
			'write_student_skill_note' => array(
				'POST',
				'/reports/skills/students/{student_id}/insight',
				'Ask the site\'s AI provider for a short teacher-facing note about one learner\'s skills (where they are strong, stuck or due for review, and what to try). It is written from skill names and numbers only, reused until the learner\'s skills change, and counted against the daily AI limit. Fails if AI study notes are switched off or no provider is connected. The note explains the levels; it never changes them.',
				array(
					'student_id' => $id,
					'audience'   => array(
						'type' => 'string',
						'enum' => array( 'teacher' ),
					),
				),
				array( 'student_id' ),
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
				'idempotent'  => 'GET' === $definition[0] || 'set_performance_settings' === $name,
			);
		}
		return $result;
	}
}
