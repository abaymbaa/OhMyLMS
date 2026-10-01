<?php
/** Load from a development-only plugin or theme; not enabled automatically. */
add_action('ohmylms_register_extensions', function () {
    ohmylms_register_layout('example-quiz-frame',[
        'label'=>'Example quiz frame','contexts'=>['quiz'],
        'render'=>function($args){
            echo '<div class="ohmylms-example-layout"><p>Example quiz layout</p>';
            // Recursion guard delegates to the built-in quiz form.
            ohmylms_get_template('single-lesson/quiz-form.php');
            echo '</div>';
        },
    ]);
    ohmylms_register_question_type('example-number',[
        'label'=>'Example numeric answer',
        'editor'=>['format'=>'settings-json','properties'=>['expected'=>['type'=>'number']]],
        'render'=>function($question,$attempt){
            printf('<label>Answer <input type="number" step="any" name="attempt[%d][quiz_question][%d][]"></label>', $attempt['id'], $question['id']);
        },
        'validate'=>function($answer){return is_array($answer) && (empty($answer) || (count($answer)===1 && (reset($answer)==='' || is_numeric(reset($answer)))));},
        'grade'=>function($answer,$question){
            $settings=$question->get_settings();
            $correct=count($answer)===1 && is_numeric(reset($answer)) && isset($settings['expected']) && (float)reset($answer)===(float)$settings['expected'];
            return ['correct'=>$correct,'fraction'=>$correct?1:0,'manual'=>false];
        },
    ]);
    ohmylms_register_lesson_type('example-reading',[
        'label'=>'Example reading','editor'=>['format'=>'wordpress-content'],
        'render'=>function($lesson){echo '<section class="example-reading">';the_content();echo '</section>';},
    ]);
    ohmylms_register_activity('example-reveal',[
        'label'=>'Example reveal card',
        'render'=>function($data){echo '<details><summary>'.esc_html($data['prompt'] ?? 'Reveal').'</summary><p>'.esc_html($data['answer'] ?? '').'</p></details>';},
    ]);
});
