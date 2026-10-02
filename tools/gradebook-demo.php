<?php
/** Local-only, repeatable demo setup. Run from CLI. */
if (PHP_SAPI !== 'cli') { exit; }
define('DISABLE_WP_CRON', true);
$GLOBALS['wp_filter']['pre_http_request'][10][] = ['function' => function () { return new WP_Error('demo_network', 'Demo setup does not make external requests.'); }, 'accepted_args' => 3];
$GLOBALS['wp_filter']['pre_wp_mail'][10][] = ['function' => function () { return true; }, 'accepted_args' => 2];
require dirname(__DIR__, 4) . '/wp-load.php';
if (wp_get_environment_type() !== 'local') { throw new RuntimeException('This demo script requires the local site.'); }
if (($argv[1] ?? '') === 'inspect') {
    global $wpdb;
    echo wp_json_encode([
        'admins' => array_map(function ($u) { return ['id' => $u->ID, 'name' => $u->display_name]; }, get_users(['role' => 'administrator'])),
        'courses' => array_map(function ($p) { return ['id' => $p->ID, 'title' => $p->post_title, 'status' => $p->post_status]; }, get_posts(['post_type' => OHMYLMS_COURSE_CPT, 'posts_per_page' => 20, 'post_status' => ['publish', 'draft']])),
        'classes' => $wpdb->get_results('SELECT id,name,school_id FROM ' . \OhMyLMS\Schools\Schema::table('classes'), ARRAY_A),
        'demo' => get_option('ohmylms_gradebook_demo', null),
    ], JSON_PRETTY_PRINT);
    exit;
}

use OhMyLMS\Schools\Service;
use OhMyLMS\Schools\Schema;
use OhMyLMS\Schools\Gradebook;
use OhMyLMS\Quiz\Submission;
global $wpdb;
wp_set_current_user(1);
function demo_need($result) {
    if (is_wp_error($result)) { throw new RuntimeException($result->get_error_message()); }
    return $result;
}
function demo_post($type, $title, $description = '') {
    return demo_need(wp_insert_post(['post_type'=>$type,'post_title'=>$title,'post_content'=>$description,'post_status'=>'publish','post_author'=>1], true));
}
$demo = get_option('ohmylms_gradebook_demo', []);
if (!$demo) {
    $demo = ['users'=>[], 'quizzes'=>[]];
    update_option('ohmylms_gradebook_demo', $demo, false);
}
for ($i=1; $i<=20; $i++) {
    if (isset($demo['users'][$i])) { continue; }
    $login = 'gradebook_demo_' . sprintf('%02d', $i);
    if (username_exists($login)) { throw new RuntimeException('A demo login already exists outside this setup.'); }
    $id = demo_need(wp_insert_user(['user_login'=>$login,'user_pass'=>wp_generate_password(40,true,true),'user_email'=>$login.'@example.invalid','display_name'=>($i<=10?'9B Student ':'Demo Student ').sprintf('%02d',$i),'first_name'=>$i<=10?'9B Student':'Demo Student','last_name'=>sprintf('%02d',$i),'role'=>ohmylms_get_student_role()]));
    update_user_meta($id, '_is_ohmylms_student', 'yes');
    update_user_meta($id, '_is_ohmylms_user', 'yes');
    update_user_meta($id, '_ohmylms_gradebook_demo', 'yes');
    $demo['users'][$i] = $id;
    update_option('ohmylms_gradebook_demo', $demo, false);
}
if (empty($demo['class'])) {
    $class = Service::create_class(0,['name'=>'9B','subject'=>'Mathematics','grade'=>'9']);
    $demo['class'] = $class['id'];
    update_option('ohmylms_gradebook_demo', $demo, false);
}
foreach (array_slice($demo['users'],0,10) as $user) { Service::membership('class_memberships',['class_id'=>$demo['class'],'user_id'=>$user,'role'=>'student']); }
if (empty($demo['course'])) {
    $demo['course'] = demo_post(OHMYLMS_COURSE_CPT, 'Grade 9 Mathematics - Gradebook Demo', '<p>A demonstration course with 20 fictional students, the nested 9B class, two quizzes and a problem-solving assignment.</p>');
    foreach (['_price_type'=>'free','_type'=>'course','_availability'=>'available','_access_type'=>'lifetime','_sequential_mode'=>'no','_level'=>'beginner'] as $key=>$value) { update_post_meta($demo['course'],$key,$value); }
    update_option('ohmylms_gradebook_demo', $demo, false);
}
if (empty($demo['chapter'])) {
    $demo['chapter'] = demo_post(OHMYLMS_CHAPTER_CPT,'Mathematics practice');
    Service::insert('chapter_relationship',['course_id'=>$demo['course'],'chapter_id'=>$demo['chapter'],'order_number'=>1]);
    update_option('ohmylms_gradebook_demo', $demo, false);
}
$sets = [
    ['Algebra Check',['Solve x + 5 = 12.','Solve 3x = 18.','What is 2 squared?','Simplify 4a + 3a.','Solve x - 4 = 9.'],[['7','5','12'],['6','3','18'],['4','2','8'],['7a','12a','a'],['13','5','9']]],
    ['Geometry Check',['How many degrees are in a triangle?','Find the area of a 5 by 4 rectangle.','Find the perimeter of a square with side 3.','What is a right angle?','Find the area of a triangle with base 6 and height 4.'],[['180','90','360'],['20','18','9'],['12','9','6'],['90 degrees','45 degrees','180 degrees'],['12','24','10']]],
];
foreach ($sets as $n=>$set) {
    if (isset($demo['quizzes'][$n])) { continue; }
    $quiz = demo_post(OHMYLMS_QUIZ_CPT,$set[0],'<p>Choose one answer for each question. Each correct answer earns 2 points.</p>');
    update_post_meta($quiz,'_quiz_settings',['allow_attempts'=>3,'passing_grade'=>['enabled'=>true,'value'=>6],'time_limit'=>['value'=>0,'type'=>'minutes'],'questions_display'=>'all']);
    Service::insert('content_relationship',['chapter_id'=>$demo['chapter'],'content_id'=>$quiz,'content_type'=>'quiz','order_number'=>$n+1]);
    $questions = [];
    foreach ($set[1] as $q=>$title) {
        $question = demo_post(OHMYLMS_QUESTION_CPT,$title);
        update_post_meta($question,'_question_settings',['type'=>'single-choice','required'=>true,'score'=>['enabled'=>true,'value'=>2]]);
        Service::insert('quiz_questions_relationship',['quiz_id'=>$quiz,'question_id'=>$question,'order_number'=>$q+1]);
        $options=[];
        foreach ($set[2][$q] as $a=>$answer) { $options[] = Service::insert('question_answers',['question_id'=>$question,'answer'=>$answer,'order_number'=>$a+1,'is_correct'=>$a===0?1:0]); }
        $questions[$question]=$options;
    }
    $demo['quizzes'][$n] = ['id'=>$quiz,'questions'=>$questions];
    update_option('ohmylms_gradebook_demo', $demo, false);
}
if (empty($demo['assignment'])) {
    $demo['assignment'] = demo_post(OHMYLMS_ASSIGNMENT_CPT,'Problem-solving Assignment','<p>Solve 2x + 4 = 18 and explain each step. Then calculate the area and perimeter of a rectangle measuring 8 cm by 5 cm.</p>');
    foreach (['_type'=>'assignment','_content'=>'Solve 2x + 4 = 18. Explain each step. Find the area and perimeter of an 8 cm by 5 cm rectangle.','_total_points'=>20,'_maximum_pass_points'=>12,'_allow_upload_files'=>true,'_number_of_files'=>3,'_enable_time_limit'=>false] as $key=>$value) { update_post_meta($demo['assignment'],$key,$value); }
    Service::insert('content_relationship',['chapter_id'=>$demo['chapter'],'content_id'=>$demo['assignment'],'content_type'=>'assignment','order_number'=>3]);
    update_option('ohmylms_gradebook_demo', $demo, false);
}
foreach ($demo['quizzes'] as $quiz) {
    $settings=get_post_meta($quiz['id'],'_quiz_settings',true); $settings['passing_grade']['value']=6;
    update_post_meta($quiz['id'],'_quiz_settings',$settings);
    $wpdb->update(Schema::table('content_relationship'),['content_type'=>'quiz'],['content_id'=>$quiz['id'],'chapter_id'=>$demo['chapter']]);
}
$wpdb->update(Schema::table('content_relationship'),['content_type'=>'assignment'],['content_id'=>$demo['assignment'],'chapter_id'=>$demo['chapter']]);
foreach (['_type'=>'assignment','_allow_upload_files'=>true,'_number_of_files'=>3,'_enable_time_limit'=>false] as $key=>$value) { update_post_meta($demo['assignment'],$key,$value); }
Gradebook::attach($demo['course'],$demo['class'],true);
foreach (array_slice($demo['users'],10) as $user) {
    if (!$wpdb->get_var($wpdb->prepare('SELECT id FROM '.Schema::table('user_enrollment').' WHERE course_id=%d AND user_id=%d',$demo['course'],$user))) {
        Service::insert('user_enrollment',['user_id'=>$user,'course_id'=>$demo['course'],'status'=>'enrolled','progress'=>'running','start_date'=>current_time('mysql')]);
        do_action('ohmylms_manual_student_enrollment',$user,$demo['course']);
    }
}
// Generate starter attempts through the same submission/grading service used by the browser.
// Students 01 and 11 are reserved for live browser quiz demonstrations.
foreach ($demo['users'] as $i=>$user) {
    wp_set_current_user($user);
    foreach ($demo['quizzes'] as $n=>$quiz) {
        if (in_array($i,[1,11],true) || ($n===1 && $i%4===0)) { continue; }
        if ($wpdb->get_var($wpdb->prepare('SELECT id FROM '.Schema::table('quiz_attempts').' WHERE quiz_id=%d AND student_id=%d',$quiz['id'],$user))) { continue; }
        $correct = ($i+$n)%6;
        $answers=[]; $q=0;
        foreach ($quiz['questions'] as $id=>$options) { $answers[$id]=[(string)$options[$q++<$correct?0:1]]; }
        $attempt=demo_need(Submission::start($quiz['id'],$user));
        demo_need(Submission::submit($quiz['id'],$attempt,$user,$answers));
    }
    if ($i===1 || $i%5===0) { continue; }
    if (!$wpdb->get_var($wpdb->prepare('SELECT id FROM '.Schema::table('assignment_attempts').' WHERE assignment_id=%d AND user_id=%d',$demo['assignment'],$user))) {
        Service::insert('assignment_attempts',['user_id'=>$user,'course_id'=>$demo['course'],'assignment_id'=>$demo['assignment'],'content'=>'Demo work: 2x = 14, so x = 7. Rectangle area = 40 square cm; perimeter = 26 cm.','total_attempt'=>1,'score'=>$i%3===0?0:12+$i%9,'status'=>$i%3===0?'submitted':'passed','note'=>$i%3===0?'Awaiting review (demo)':'Generated demo feedback: good reasoning; show units.','start_date'=>current_time('mysql'),'end_date'=>current_time('mysql')]);
    }
}
wp_set_current_user(1);
flush_rewrite_rules(false);
$book=Gradebook::read($demo['course']);
echo wp_json_encode(['course'=>$demo['course'],'class'=>$demo['class'],'students'=>count($demo['users']),'quiz_links'=>array_map(function($q)use($demo){return ohmylms_get_course($demo['course'])->get_content_link($q['id']);},$demo['quizzes']),'assignment_link'=>ohmylms_get_course($demo['course'])->get_content_link($demo['assignment']),'gradebook'=>$book],JSON_PRETTY_PRINT);
