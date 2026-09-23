<?php
if (PHP_SAPI !== 'cli') { exit; }
require dirname(__DIR__, 4) . '/wp-load.php';
function prefix_check($condition, $message) {
    if (!$condition) { throw new RuntimeException($message); }
}
$admins = get_users(['role' => 'administrator', 'number' => 1]);
prefix_check(!empty($admins), 'An administrator is needed for the integration test.');
wp_set_current_user($admins[0]->ID);
$id = 0;
try {
    $request = new WP_REST_Request('POST', '/ohmylms/v1/membership');
    $request->set_body_params(['name' => 'OhMyLMS prefix regression test', 'status' => 'draft']);
    $response = rest_do_request($request);
    prefix_check($response->get_status() === 201, 'Membership create failed: ' . wp_json_encode($response->get_data()));
    $id = $response->get_data()['id'];
    prefix_check(get_post_type($id) === 'omlms-membership', 'Incorrect membership post type.');
    prefix_check(rest_do_request(new WP_REST_Request('GET', '/ohmylms/v1/membership/' . $id))->get_status() === 200, 'Membership read failed.');
    $request = new WP_REST_Request('PUT', '/ohmylms/v1/membership/' . $id);
    $request->set_body_params(['name' => 'OhMyLMS prefix regression updated', 'regular_price' => '100']);
    $response = rest_do_request($request);
    prefix_check($response->get_status() === 200, 'Membership update failed: ' . wp_json_encode($response->get_data()));
    prefix_check(get_the_title($id) === 'OhMyLMS prefix regression updated', 'Membership name not persisted.');
    prefix_check((float) omlms_get_membership($id)->get_regular_price() === 100.0, 'Membership price not persisted.');
    prefix_check(rest_do_request(new WP_REST_Request('GET', '/ohmylms/v1/membership'))->get_status() === 200, 'Membership collection failed.');
    wp_set_current_user(0);
    prefix_check(rest_do_request(new WP_REST_Request('PUT', '/ohmylms/v1/membership/' . $id))->get_status() >= 400, 'Anonymous edit was accepted.');
    echo "8 live membership API checks passed.\n";
} finally {
    if ($id) { wp_delete_post($id, true); }
}
