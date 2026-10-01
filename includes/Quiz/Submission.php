<?php
namespace OhMyLMS\Quiz;

use OhMyLMS\Extensions\Registry;
use OhMyLMS\Data\Student;

/** One server-side submission path for HTML forms and timeout AJAX. */
final class Submission {
    public static function access($quiz_id, $student_id) {
        if (!$student_id || get_post_type($quiz_id)!=='ohmylms-quiz') return new \WP_Error('quiz_access','Quiz access denied.',['status'=>403]);
        $course_id=(int)ohmylms_get_course_by_content_id($quiz_id);
        if (!$course_id || (!(new Student($student_id))->maybe_enrolled($course_id) && !current_user_can('edit_post',$quiz_id))) {
            return new \WP_Error('quiz_access','Course enrollment is required.',['status'=>403]);
        }
        if (apply_filters('ohmylms_is_lesson_sequentially_locked',false,$quiz_id,$course_id,$student_id) || apply_filters('ohmylms_is_lesson_locked',false,$quiz_id,$course_id,$student_id)) return new \WP_Error('quiz_locked','This quiz is locked.',['status'=>403]);
        return $course_id;
    }
    private static function lock($quiz_id,$student_id) {
        global $wpdb;
        $key='ohmylms-quiz-'.md5($wpdb->prefix.':'.$quiz_id.':'.$student_id);
        return (string)$wpdb->get_var($wpdb->prepare('SELECT GET_LOCK(%s, 3)',$key))==='1'?$key:false;
    }
    public static function start($quiz_id,$student_id) {
        global $wpdb;
        $course_id=self::access($quiz_id,$student_id);
        if (is_wp_error($course_id)) return $course_id;
        $key=self::lock($quiz_id,$student_id);
        if (!$key) return new \WP_Error('quiz_busy','Please retry.',['status'=>409]);
        try {
            $quiz=ohmylms_get_quiz($quiz_id);
            $existing=$quiz->get_quiz_attempt($student_id);
            if ($existing) return (int)$existing['id'];
            if ($quiz->count_total_attempt($student_id,$course_id)>=$quiz->get_take_attempts()) return new \WP_Error('quiz_attempt_limit','No attempts remaining.',['status'=>403]);
            foreach($quiz->get_questions() as $q) if(!Registry::get('question',$q['settings']['type'] ?? '')) return new \WP_Error('quiz_type_missing','A required question extension is unavailable.');
            $saved=$wpdb->insert($wpdb->prefix.'ohmylms_quiz_attempts',['quiz_id'=>$quiz_id,'student_id'=>$student_id,'course_id'=>$course_id,'total'=>0,'status'=>'in-progress','start_date'=>current_time('mysql')]);
            if (!$saved) return new \WP_Error('quiz_storage','Could not start attempt.');
            $id=(int)$wpdb->insert_id;
            do_action('ohmylms_attempt_started',['quiz_id'=>(int)$quiz_id,'attempt_id'=>$id,'student_id'=>(int)$student_id,'course_id'=>$course_id]);
            return $id;
        } finally { $wpdb->get_var($wpdb->prepare('SELECT RELEASE_LOCK(%s)',$key)); }
    }
    public static function submit($quiz_id,$attempt_id,$student_id,array $answers,$reason='submit') {
        global $wpdb;
        $course_id=self::access($quiz_id,$student_id);
        if (is_wp_error($course_id)) return $course_id;
        $key=self::lock($quiz_id,$student_id);
        if (!$key) return new \WP_Error('quiz_busy','Please retry.',['status'=>409]);
        $rows=[]; $total=0; $manual=false;
        try {
            $attempt=$wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->prefix}ohmylms_quiz_attempts WHERE id=%d AND quiz_id=%d AND student_id=%d AND course_id=%d",$attempt_id,$quiz_id,$student_id,$course_id),ARRAY_A);
            if (!$attempt || $attempt['status']!=='in-progress') return new \WP_Error('quiz_attempt','Attempt unavailable or already submitted.',['status'=>409]);
            $quiz=ohmylms_get_quiz($quiz_id); $questions=$quiz->get_questions();
            $duration=(int)$quiz->get_timer()*60;
            $expired=$duration>0 && current_time('timestamp') >= strtotime($attempt['start_date'])+$duration;
            if ($reason==='timeout' && !$expired) return new \WP_Error('quiz_timer','The attempt has not reached its deadline.',['status'=>400]);
            if ($reason==='submit' && $expired) $reason='timeout';
            if (array_diff(array_map('strval',array_keys($answers)),array_map('strval',array_column($questions,'id')))) return new \WP_Error('quiz_question','Answer contains a question outside this quiz.',['status'=>400]);
            foreach ($questions as $data) {
                $question=ohmylms_get_question($data['id']); $settings=$question->get_settings();
                $definition=Registry::get('question',$settings['type'] ?? '');
                if (!$definition) return new \WP_Error('quiz_type_missing','A required question extension is unavailable.');
                $answer=$answers[$data['id']] ?? [];
                $answer=map_deep($answer,static function($value){return is_string($value)?sanitize_textarea_field($value):$value;});
                if (!call_user_func($definition['validate'],$answer,$question)) return new \WP_Error('quiz_answer','Invalid answer format.',['status'=>400]);
                $present=is_array($answer)?count(array_filter($answer,static function($v){return trim((string)$v)!=='';}))>0:trim((string)$answer)!=='';
                if ($reason==='submit' && !empty($settings['required']) && !$present) return new \WP_Error('quiz_required','A required question is unanswered.',['status'=>400]);
                $grade=call_user_func($definition['grade'],$answer,$question);
                if (is_wp_error($grade)) return $grade;
                if (!is_array($grade) || !isset($grade['fraction']) || !is_numeric($grade['fraction']) || !is_finite((float)$grade['fraction'])) return new \WP_Error('quiz_grader','Invalid grading result.');
                $marks=!empty($settings['score']['enabled'])?max(0,(float)($settings['score']['value'] ?? 0)):0;
                $pending=$reason!=='exit' && $present && !empty($grade['manual']);
                // The legacy attempt total is an integer; extensions award whole points.
                $earned=$present && !$pending && $reason!=='exit'?(int)round($marks*max(0,min(1,(float)$grade['fraction']))):0;
                $manual=$manual || $pending; $total+=$earned;
                $rows[]=['quiz_id'=>$quiz_id,'student_id'=>$student_id,'question_id'=>$question->get_id(),'quiz_attempt_id'=>$attempt_id,'given_answer'=>maybe_serialize($answer),'question_marks'=>$marks,'achive_mark'=>$earned,'minus_mark'=>0,'is_correct'=>$present && !empty($grade['correct'])?1:0];
            }
            $status=$manual?'in-review':'completed';
            $wpdb->query('START TRANSACTION');
            foreach ($rows as $row) if ($wpdb->insert($wpdb->prefix.'ohmylms_quiz_attempts_answers',$row)===false) throw new \RuntimeException('Answer write failed');
            if ($wpdb->update($wpdb->prefix.'ohmylms_quiz_attempts',['total'=>$total,'status'=>$status,'end_date'=>current_time('mysql')],['id'=>$attempt_id,'status'=>'in-progress'])!==1) throw new \RuntimeException('Attempt write failed');
            $wpdb->query('COMMIT');
        } catch (\Throwable $error) {
            $wpdb->query('ROLLBACK');
            return new \WP_Error('quiz_storage','Could not save this attempt. Please retry.',['status'=>500]);
        } finally { $wpdb->get_var($wpdb->prepare('SELECT RELEASE_LOCK(%s)',$key)); }

        $event=['quiz_id'=>(int)$quiz_id,'attempt_id'=>(int)$attempt_id,'student_id'=>(int)$student_id,'course_id'=>$course_id,'total'=>$total,'status'=>$status,'reason'=>$reason];
        foreach ($rows as $row) do_action('ohmylms_answer_graded',$row+['status'=>$status]);
        if (!$manual && $reason!=='exit' && $total >= $quiz->get_passing_grade()) {
            $student=new Student($student_id);
            $was_complete=$student->is_course_completed($course_id);
            $student->complete_lesson($quiz_id,$course_id);
            do_action('ohmylms_lesson_completed',$quiz_id,$course_id,$student_id);
            if (!$was_complete && (int)$student->get_over_all_completion_rate($course_id)===100) {
                $order=(int)$wpdb->get_var($wpdb->prepare("SELECT order_id FROM {$wpdb->prefix}ohmylms_user_enrollment WHERE user_id=%d AND course_id=%d",$student_id,$course_id));
                do_action('ohmylms_course_completed',$student_id,$course_id,$order);
            }
        }
        if (!$manual) do_action('ohmylms_quiz_result',$quiz_id,$course_id,$student_id,$total);
        do_action('ohmylms_quiz_submission',$quiz_id,$course_id,$student_id,$event);
        do_action('ohmylms_attempt_submitted',$event);
        if (!$manual) do_action('ohmylms_attempt_graded',$event);
        return $event;
    }
}
