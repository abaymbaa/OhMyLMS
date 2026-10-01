<?php
// Standalone regression checks: php tests/membership-permissions.php
class WP_REST_Controller {}
class WP_Error {
    public $data;
    public function __construct($code, $message, $data) { $this->data = $data; }
}
function __($text, $domain) { return $text; }
function absint($value) { return abs((int) $value); }
function get_post($id) { return $GLOBALS['posts'][$id] ?? null; }
function current_user_can($capability, $id = null) {
    return in_array($capability . ':' . $id, $GLOBALS['caps'], true);
}
function rest_authorization_required_code() { return 403; }
require dirname(__DIR__) . '/includes/Abstracts/RestController.php';
require dirname(__DIR__) . '/includes/Rest/V1/MembershipController.php';
function verify($condition, $message) {
    if (!$condition) { throw new RuntimeException($message); }
}
$GLOBALS['posts'] = [7 => (object) ['post_type' => 'ohmylms-membership'], 8 => (object) ['post_type' => 'post']];
$GLOBALS['caps'] = ['edit_posts:', 'read_post:7', 'edit_post:7', 'delete_post:7'];
$controller = new OhMyLMS\Rest\V1\MembershipController();
foreach (['read', 'edit', 'delete'] as $action) {
    $method = 'check_membership_' . $action . '_permission';
    verify($controller->$method(['id' => 7]) === true, "Authorized $action failed");
    foreach ([[], ['id' => 999], ['id' => 8]] as $request) {
        $result = $controller->$method($request);
        verify($result instanceof WP_Error && $result->data['status'] === 404, "Invalid object accepted for $action");
    }
}
$GLOBALS['caps'] = ['edit_posts:'];
foreach (['read', 'edit', 'delete'] as $action) {
    $method = 'check_membership_' . $action . '_permission';
    $result = $controller->$method(['id' => 7]);
    verify($result instanceof WP_Error && $result->data['status'] === 403, "Unauthorized $action accepted");
}
echo "15 membership permission checks passed.\n";
