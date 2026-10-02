<?php
namespace OhMyLMS\Extensions;

final class QuestionTypes {
    public static function register_defaults() {
        $templates=['multiple-choice'=>'multiple-question','single-choice'=>'single-choice','true-false'=>'true-false','short-text'=>'short-text','long-text'=>'long-text','fill-in-the-blank'=>'fill-in-the-blank','statement'=>'statement','reorder'=>'reorder','matching'=>'matching'];
        foreach ($templates as $type=>$template) Registry::register('question',$type,[
            'manual'=>in_array($type,['short-text','long-text'],true),
            // Graders read only the question object they receive, so frozen versions grade correctly.
            'snapshot'=>true,
            // Answers reference options; versioned deliveries send opaque option tokens.
            'answers'=>in_array($type,['multiple-choice','single-choice','true-false','reorder','matching'],true)?'options':'text',
            'label'=>ucwords(str_replace('-',' ',$type)),
            'editor'=>['format'=>'ohmylms-options','settings'=>['required','score','randomize']],
            'render'=>static function ($question,$attempt) use ($template) { ohmylms_get_template('single-lesson/quiz-loop/'.$template.'.php',compact('question','attempt')); },
            'validate'=>static function ($answer) { return is_array($answer) && count($answer)<=1000 && !array_filter($answer, static function($v){ return !is_scalar($v); }); },
            'grade'=>static function ($answer,$question) use ($type) { return self::grade_builtin($type,$answer,$question); },
        ]);
    }
    /** Mathematics types: tolerance-based numerical answers and structured multi-part questions. */
    public static function register_math() {
        Registry::register('question','numerical',[
            'label'=>__('Numerical','ohmylms'),
            'manual'=>false,
            'snapshot'=>true,
            'answers'=>'text',
            'public_settings'=>['unit'],
            'editor'=>['format'=>'ohmylms-settings','schema'=>['type'=>'object','properties'=>[
                'answer'=>['type'=>'number'],
                'answers'=>['type'=>'array','items'=>['type'=>'number']],
                'tolerance'=>['type'=>'number','minimum'=>0],
                'tolerance_type'=>['type'=>'string','enum'=>['absolute','relative']],
                'unit'=>['type'=>'string','maxLength'=>40],
                'allow_fractions'=>['type'=>'boolean'],
            ],'anyOf'=>[['required'=>['answer']],['required'=>['answers']]]]],
            'render'=>static function ($question,$attempt) { ohmylms_get_template('single-lesson/quiz-loop/numerical.php',compact('question','attempt')); },
            // Any text is a valid submission; invalid numbers are graded as incorrect, not rejected.
            'validate'=>static function ($answer) { return is_array($answer) && count($answer)<=1 && !array_filter($answer,static function($v){return !is_scalar($v);}); },
            'grade'=>static function ($answer,$question) { $result=\OhMyLMS\Assessment\NumericAnswer::grade($answer,$question->get_settings()); unset($result['valid']); return $result; },
        ]);
        Registry::register('question','structured',[
            'label'=>__('Structured (multi-part)','ohmylms'),
            'manual'=>false,
            'snapshot'=>true,
            'answers'=>'text',
            'public_settings'=>['parts'],
            'editor'=>['format'=>'ohmylms-settings'],
            'validate_settings'=>[\OhMyLMS\Assessment\Structured::class,'validate_settings'],
            'render'=>static function ($question,$attempt) { ohmylms_get_template('single-lesson/quiz-loop/structured.php',compact('question','attempt')); },
            'validate'=>static function ($answer) { return is_array($answer) && count($answer)<=50 && !array_filter($answer,static function($v){return !is_scalar($v);}); },
            'grade'=>[\OhMyLMS\Assessment\Structured::class,'grade'],
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
            // Correctness comes from the options of the object being graded (a frozen version
            // in the versioned engine), never from the current answer tables.
            $expected=array_values(array_filter($options,static function($option){return !empty($option['is_correct']);}));
            $field=in_array($type,['statement','fill-in-the-blank'],true)?'answer':'id';
            $expected=array_map('strval',array_column($expected,$field));
            $answer=array_values($answer);
            if ($type==='multiple-choice') { sort($expected); sort($answer); }
            $correct=count($expected)>0 && $answer===$expected;
        }
        return ['correct'=>$correct,'fraction'=>$correct?1:0,'manual'=>false];
    }
}
