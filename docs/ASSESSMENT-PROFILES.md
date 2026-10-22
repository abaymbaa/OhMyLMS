# Assessment profiles

A quiz, a practice set and an exam are **one stored thing**: one `ohmylms-quiz` post with the same question
links, revisions, attempts, grading and skill evidence. They differ only in a **profile**, chosen by the
assessment kind saved with the quiz (`AssessmentSettings::get( $quiz_id )['kind']`). Shared code never tests
for a particular kind; it asks `Assessment\Profiles::of( $quiz_id )`.

| What a profile decides | Key | Used by |
| --- | --- | --- |
| Player design (template) the kind always uses | `player_template` | `templates/single-lesson/quiz-form.php` |
| Layout (`one_question_per_page`, `all_questions_in_one_page`, `number_of_questions_per_page`) | `layout` | quiz form |
| Deliveries the kind's questions may use (`quiz`, `inline`, `practice`; the editor offers only matching blocks) | `deliveries` | `NativeQuizEditor::quiz_blocks`, `Profiles::allows` |
| List the author returns to from the editor | `return_route` | `NativeLessonEditor::return_url` |
| Editor sidebar panel and the data it receives | `panel`, `editor_data` | `Profiles::editor`, `ProfilePanel.jsx` |
| Starting context of the player script | `context` | `Interactivity::quiz` filter |
| Player designs the kind brings (hidden from the quiz design picker) | `templates` | `PlayerTemplates` |

Built in: `quiz` and `practice` (no overrides) and `exam` (`includes/Exams/Profile.php`: the exam dashboard
design, one question per page, formal attempts only, the Exams tab, the Exam panel). The exam also has a record
(`ohmylms-exam`), a private wrapper course for enrollment and a public URL, which is delivery, not authoring.

## Add a kind

Register it before the first assessment is read (plugin load or `plugins_loaded`):

```php
add_filter( 'ohmylms_assessment_profiles', function ( $profiles ) {
	$profiles['placement'] = array(
		'label'           => 'Placement test',
		'player_template' => 'placement',                 // a design registered below
		'layout'          => 'all_questions_in_one_page',
		'deliveries'      => array( 'quiz' ),                // no practice sets or inline checks
		'return_route'    => '/content-hub/quizzes',
		'panel'           => 'placement',
		'editor_data'     => fn( $quiz_id ) => array( 'quiz' => $quiz_id ),
		'context'         => function ( $context, $quiz_id ) {
			$context['placement'] = true;
			return $context;
		},
		'templates'       => array(
			'placement' => array(
				'label'       => 'Placement',
				'description' => 'Placement test design.',
				'stylesheet'  => 'my-placement-style',      // a registered style handle
			),
		),
	);
	return $profiles;
} );
```

- **Deliveries** are the ways a question reaches a learner. See [Deliveries](#deliveries).
- **Kind ids** are lowercase letters, digits and hyphens. A quiz saved with an unregistered kind is refused.
- **Set the kind** with `AssessmentSettings::save( $quiz_id, array( 'kind' => 'placement' ) )`.
- **Design parts**: a design is `templates/quiz-player/<id>/{header,progress,question-meta,footer}.php`, found
  in the plugin or in the theme at `ohmylms/quiz-player/<id>/`. A missing part falls back to the shared one.
  The player script is the shared `ohmylms/quiz` store; add actions to it from your own module if needed.
- **Editor panel**: from your own editor script, `window.ohmylmsProfilePanels[ 'placement' ] = Component`. The
  component receives the profile's `editor_data` as `data` and renders a `PluginDocumentSettingPanel`.
- **Extra rules** (publish checks, delivery pages, REST routes) belong to the kind's own code, as for exams
  (`includes/Exams/`); the registry only carries what shared code needs to ask.

`tests/php/assessment-profiles-integration.php` checks the built-in kinds and registers a new kind through the
filter alone.

## Deliveries

One bank question can reach a learner three ways, and `Assessment\DeliveryPolicy` is the single place that decides
which questions each accepts:

| Delivery | Served as | Accepts |
| --- | --- | --- |
| `quiz` | A slot in a formal quiz or exam attempt | Any question that exists and is not trashed or archived, including exam-only and teacher-marked ones |
| `inline` | A one-question check in lesson content | The approved version (an editor sees an unapproved one as a preview); not exam-only, not teacher-marked |
| `practice` | A run of the question player | The approved version; not exam-only, not teacher-marked |

`DeliveryPolicy::snapshot()`, `DeliveryPolicy::allows()` and `Profiles::allows()` are used by the question player
(`QuestionPlayer::eligible`), the inline check, the exam builder and the editor's block list. The question block
and the question player block convert into each other (block toolbar, *Change block type*) when one question is
chosen, keeping the same question; a kind that does not allow the `practice` delivery offers neither.
`tests/php/delivery-policy-integration.php` covers the rules.
