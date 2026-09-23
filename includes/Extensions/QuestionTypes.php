<?php
namespace OMLMS\Extensions;

final class QuestionTypes {
    public static function register_defaults() {
        $templates=['multiple-choice'=>'multiple-question','single-choice'=>'single-choice','true-false'=>'true-false','short-text'=>'short-text','long-text'=>'long-text','fill-in-the-blank'=>'fill-in-the-blank','statement'=>'statement','reorder'=>'reorder','matching'=>'matching'];
        foreach ($templates as $type=>$template) Registry::register('question',$type,[
            'manual'=>in_array($type,['short-text','long-text'],true),
            'label'=>ucwords(str_replace('-',' ',$type)),
            'editor'=>['format'=>'creatorlms-options','settings'=>['required','score','randomize']],
            'render'=>static function ($question,$attempt) use ($template) { omlms_get_template('single-lesson/quiz-loop/'.$template.'.php',compact('question','attempt')); },
            'validate'=>static function ($answer) { return is_array($answer) && count($answer)<=1000 && !array_filter($answer, static function($v){ return !is_scalar($v); }); },
            'grade'=>static function ($answer,$question) use ($type) { return self::grade_builtin($type,$answer,$question); },
        ]);
    }
    public static function render(array $question,array $attempt) {
        $definition=Registry::get('question',$question['settings']['type'] ?? '');
        if ($definition) call_user_func($definition['render'],$question,$attempt);
    }
    public static function grade_builtin($type,array $answer,$question) {
        if (in_array($type,['short-text','long-text'],true)) return ['correct'=>false,'fraction'=>0,'manual'=>true];
        $options=$question->get_questions();
        $answer=array_map('strval',$answer);
        $correct=false;
        if ($type==='matching') {
            $correct=count($options)>0 && count($answer)===count($options);
            foreach ($options as $option) $correct=$correct && isset($answer[$option['id']]) && $answer[$option['id']] === (string)$option['id'];
        } elseif ($type==='reorder') {
            $correct=count($options)>0 && array_values($answer)===array_map('strval',array_column($options,'id'));
        } else {
            $expected=crator_lms_get_question_ans_by_question_id($question->get_id());
            $field=in_array($type,['statement','fill-in-the-blank'],true)?'answer':'id';
            $expected=array_map('strval',array_column($expected,$field));
            $answer=array_values($answer);
            if ($type==='multiple-choice') { sort($expected); sort($answer); }
            $correct=count($expected)>0 && $answer===$expected;
        }
        return ['correct'=>$correct,'fraction'=>$correct?1:0,'manual'=>false];
    }
}
