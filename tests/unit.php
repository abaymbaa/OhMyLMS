<?php
require dirname(__DIR__).'/vendor/autoload.php';
function crator_lms_get_question_ans_by_question_id($id){return array_values(array_filter($GLOBALS['options'],function($o){return !empty($o['is_correct']);}));}
function check($condition,$message){if(!$condition)throw new RuntimeException($message);}
$GLOBALS['options']=[['id'=>1,'answer'=>'A','is_correct'=>1],['id'=>2,'answer'=>'B','is_correct'=>1]];
$q=new class {function get_id(){return 1;} function get_questions(){return $GLOBALS['options'];}};
use OMLMS\Extensions\QuestionTypes as Q;
use OMLMS\Extensions\Registry as R;
Q::register_defaults();
check(count(R::all('question'))===9,'All built-in types registered');
check(Q::grade_builtin('multiple-choice',['2','1'],$q)['correct'],'Choice order must not affect grade');
check(!Q::grade_builtin('multiple-choice',['1','1'],$q)['correct'],'Duplicate selections must not pass');
check(Q::grade_builtin('reorder',['1','2'],$q)['correct'],'HTML string IDs grade correctly');
check(!Q::grade_builtin('reorder',['2','1'],$q)['correct'],'Wrong order fails');
check(Q::grade_builtin('matching',[1=>'1',2=>'2'],$q)['correct'],'Matching pairs grade');
check(!Q::grade_builtin('matching',[1=>'1'],$q)['correct'],'Incomplete matching fails');
check(Q::grade_builtin('short-text',['essay'],$q)['manual'],'Text requires manual review');
check(Q::grade_builtin('long-text',['essay'],$q)['manual'],'Long text requires manual review');
check(Q::grade_builtin('fill-in-the-blank',['A','B'],$q)['correct'],'Fill-in-the-blank grade');
check(Q::grade_builtin('statement',['A','B'],$q)['correct'],'Statement grade');
check(!Q::grade_builtin('single-choice',[],$q)['correct'],'Empty answer does not pass');
$GLOBALS['options']=[['id'=>1,'answer'=>'True','is_correct'=>1],['id'=>2,'answer'=>'False','is_correct'=>0]];
check(Q::grade_builtin('single-choice',['1'],$q)['correct'],'Single choice grades');
check(Q::grade_builtin('true-false',['1'],$q)['correct'],'True/false grades');
check(!Q::grade_builtin('true-false',['2'],$q)['correct'],'Incorrect true/false fails');
try {R::register('question','reorder',[]);throw new RuntimeException('Duplicate registration accepted');}catch(InvalidArgumentException $expected){}
echo "16 registry and grading checks passed.\n";
