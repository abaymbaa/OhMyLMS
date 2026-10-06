<?php
if (PHP_SAPI !== 'cli') { exit; }
$config = json_decode(file_get_contents(getenv('OHMYLMS_TEST_CREDENTIALS')), true);
require $config['site'] . '/wp-load.php';
if (!defined('OHMYLMS_TEST_SITE') || DB_NAME !== 'ohmylms_source_test') { throw new RuntimeException('Requires disposable test site'); }
function student_check($condition, $message) { if (!$condition) { throw new RuntimeException($message); } }
function student_request($method, $path, $params = []) {
    $request = new WP_REST_Request($method, '/ohmylms/v1/' . $path);
    $request->set_body_params($params);
    return rest_do_request($request);
}
function student_list($params) {
    $request = new WP_REST_Request('GET', '/ohmylms/v1/students');
    $request->set_query_params($params);
    return rest_do_request($request);
}
function student_list_ids($response) { return array_map('intval', wp_list_pluck($response->get_data(), 'user_id')); }
$admin = get_user_by('login', $config['username']);
$student = wp_create_user('source-student-' . wp_generate_password(10, false), wp_generate_password(32));
student_check(!is_wp_error($student), 'Could not create fixture');
$newcomer = $bystander = 0;
$course = 0;
try {
    $course = wp_insert_post(['post_type'=>'ohmylms-courses', 'post_title'=>'Student source fixture', 'post_status'=>'draft']);
    $wpdb->insert($wpdb->prefix . 'ohmylms_user_enrollment', ['user_id'=>$student, 'course_id'=>$course, 'status'=>'enrolled', 'progress'=>'running', 'start_date'=>current_time('mysql')]);
    foreach ([0, $student] as $viewer) {
        wp_set_current_user($viewer);
        foreach ([['GET','students'], ['GET','students/'.$student], ['POST','students'], ['POST','students/unban']] as [$method,$path]) {
            student_check(student_request($method,$path,['ids'=>[$student]])->get_status() >= 400, 'Unauthorized student access: '.$path);
        }
    }
    wp_set_current_user($admin->ID);
    student_check(student_request('POST','students',['ids'=>[$student]])->get_status() === 200, 'Block failed');
    student_check(get_user_meta($student,'_ohmylms_banned_student',true) === 'yes', 'Block metadata missing');
    student_check($wpdb->get_var($wpdb->prepare("SELECT status FROM {$wpdb->prefix}ohmylms_user_enrollment WHERE user_id=%d",$student)) === 'banned', 'Enrollment not blocked');
    student_check(student_request('POST','students/unban',['ids'=>[$student]])->get_status() === 200, 'Unblock failed');
    student_check(get_user_meta($student,'_ohmylms_banned_student',true) !== 'yes', 'Block metadata retained');
    student_check($wpdb->get_var($wpdb->prepare("SELECT status FROM {$wpdb->prefix}ohmylms_user_enrollment WHERE user_id=%d",$student)) === 'enrolled', 'Enrollment not restored');
    // A newly created student has no enrollment yet but must still be listed; a plain subscriber must not.
    $tag = 'source-listed-' . wp_generate_password(8, false, false);
    $newcomer = wp_insert_user(['user_login'=>$tag . '-student', 'user_pass'=>wp_generate_password(32), 'user_email'=>$tag . '-student@example.invalid', 'role'=>ohmylms_get_student_role()]);
    $bystander = wp_insert_user(['user_login'=>$tag . '-subscriber', 'user_pass'=>wp_generate_password(32), 'user_email'=>$tag . '-subscriber@example.invalid', 'role'=>'subscriber']);
    student_check(!is_wp_error($newcomer) && !is_wp_error($bystander), 'Could not create list fixtures');
    $listed = student_list(['search'=>$tag, 'per_page'=>50]);
    student_check($listed->get_status() === 200, 'Student list failed');
    student_check(student_list_ids($listed) === [$newcomer], 'New student without enrollment missing from list, or non-student listed');
    student_check((int) $listed->get_headers()['X-WP-Total'] === 1, 'Student list total ignores students without enrollment');
    $row = $listed->get_data()[0];
    student_check($row['courses_enrolled'] === 0 && !empty($row['registration_date']), 'Unenrolled student row malformed');
    student_check(student_list_ids(student_list(['search'=>$tag, 'date_filter'=>'last_30_days'])) === [$newcomer], 'Date filter hides new student');
    student_check(student_list_ids(student_list(['search'=>$tag, 'course_id'=>$course])) === [], 'Course filter lists a non-enrolled student');
    student_check(student_request('POST','students',['ids'=>[$newcomer]])->get_status() === 200 && get_user_meta($newcomer,'_ohmylms_banned_student',true) === 'yes', 'Unenrolled student could not be blocked');
    echo "Student permissions, block/unblock and listing integration passed.\n";
} finally {
    $wpdb->delete($wpdb->prefix.'ohmylms_user_enrollment',['user_id'=>$student]);
    if ($course) { wp_delete_post($course,true); }
    require_once ABSPATH.'wp-admin/includes/user.php';
    wp_delete_user($student);
    foreach ([$newcomer, $bystander] as $fixture) { if ($fixture && !is_wp_error($fixture)) { wp_delete_user($fixture); } }
}
