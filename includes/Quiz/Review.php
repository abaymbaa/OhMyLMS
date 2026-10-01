<?php
namespace OhMyLMS\Quiz;

use OhMyLMS\Extensions\Registry;
use OhMyLMS\Data\Student;

/** Shared manual-review writer for both legacy report endpoints. */
final class Review {
    public static function save($quiz_id,$attempt_id,array $marks) {
        global $wpdb;
        if (!current_user_can('edit_post',$quiz_id)) return new \WP_Error('quiz_permission','You cannot grade this quiz.',['status'=>403]);
        $quiz=ohmylms_get_quiz($quiz_id);
        if (!$quiz) return new \WP_Error('quiz_missing','Quiz unavailable.',['status'=>404]);
        $wpdb->query('START TRANSACTION');
        try {
            $attempt=$wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->prefix}ohmylms_quiz_attempts WHERE id=%d AND quiz_id=%d FOR UPDATE",$attempt_id,$quiz_id),ARRAY_A);
            if (!$attempt || !in_array($attempt['status'],['in-review','completed'],true)) {
                $wpdb->query('ROLLBACK');return new \WP_Error('quiz_attempt','Submitted attempt unavailable.',['status'=>409]);
            }
            $rows=$wpdb->get_results($wpdb->prepare("SELECT * FROM {$wpdb->prefix}ohmylms_quiz_attempts_answers WHERE quiz_attempt_id=%d",$attempt_id),ARRAY_A);
            $by_question=array_column($rows,null,'question_id');
            foreach($marks as $id=>$mark) {
                if(!isset($by_question[$id]) || !is_numeric($mark) || !is_finite((float)$mark) || $mark<0 || $mark>$by_question[$id]['question_marks']) {
                    $wpdb->query('ROLLBACK');return new \WP_Error('quiz_marks','Invalid question or marks.',['status'=>400]);
                }
            }
            $total=0;$pending=false;
            foreach($rows as $row) {
                $id=$row['question_id'];
                if(array_key_exists($id,$marks)) {
                    $row['achive_mark']=(int)round($marks[$id]);$row['is_manually_reviewed']=1;
                    $row['is_correct']=$row['achive_mark']>0 && $row['achive_mark']>=$row['question_marks']?1:0;
                    if($wpdb->update($wpdb->prefix.'ohmylms_quiz_attempts_answers',array_intersect_key($row,array_flip(['achive_mark','is_manually_reviewed','is_correct'])),['id'=>$row['id']])===false) throw new \RuntimeException();
                }
                $question=ohmylms_get_question($id);$settings=$question?$question->get_settings():[];
                $definition=Registry::get('question',$settings['type']??'');
                $answer=maybe_unserialize($row['given_answer']);
                $present=is_array($answer)?count(array_filter($answer,static function($v){return is_scalar($v)&&trim((string)$v)!=='';}))>0:trim((string)$answer)!=='';
                $pending=$pending || ($present && empty($row['is_manually_reviewed']) && (!$definition || !empty($definition['manual'])));
                $total+=(float)$row['achive_mark'];
            }
            $status=$pending?'in-review':'completed';
            if($wpdb->update($wpdb->prefix.'ohmylms_quiz_attempts',['total'=>$total,'status'=>$status],['id'=>$attempt_id])===false) throw new \RuntimeException();
            $wpdb->query('COMMIT');
        } catch(\Throwable $error) {
            $wpdb->query('ROLLBACK');return new \WP_Error('quiz_storage','Could not save review.',['status'=>500]);
        }
        $student_id=(int)$attempt['student_id'];$course_id=(int)$attempt['course_id'];
        if(!$pending && ($attempt['status']!==$status || (float)$attempt['total']!==$total)) {
            $event=['quiz_id'=>(int)$quiz_id,'attempt_id'=>(int)$attempt_id,'student_id'=>$student_id,'course_id'=>$course_id,'total'=>$total,'status'=>$status,'reason'=>'manual-review'];
            do_action('ohmylms_attempt_graded',$event);
            do_action('ohmylms_rest_review_quiz_attempt',$quiz_id,$course_id,$student_id,$total);
            if($total >= $quiz->get_passing_grade()) {
                $student=new Student($student_id);$before=$student->get_over_all_completion_rate($course_id);
                if(!$student->is_lesson_completed($quiz_id,$course_id)) {
                    $student->complete_lesson($quiz_id,$course_id);
                    do_action('ohmylms_lesson_completed',$quiz_id,$course_id,$student_id);
                }
                if((int)$before!==100 && (int)$student->get_over_all_completion_rate($course_id)===100) {
                    $order=(int)$wpdb->get_var($wpdb->prepare("SELECT order_id FROM {$wpdb->prefix}ohmylms_user_enrollment WHERE user_id=%d AND course_id=%d",$student_id,$course_id));
                    do_action('ohmylms_course_completed',$student_id,$course_id,$order);
                }
            }
        }
        return $quiz->get_attempt_report($attempt_id);
    }
}
