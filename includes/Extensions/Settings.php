<?php
namespace OhMyLMS\Extensions;

/** Schema-validated, namespaced extension settings for LMS content. */
final class Settings {
    private static $definitions = [];
    private static $contexts = ['course', 'lesson', 'quiz', 'question', 'membership', 'assignment', 'certificate', 'session'];

    public static function register($id, array $definition) {
        if (!is_string($id) || !preg_match('/^[a-z][a-z0-9_-]*$/D', $id) || isset(self::$definitions[$id])) {
            throw new \InvalidArgumentException('Invalid or duplicate settings ID.');
        }
        if (empty($definition['contexts']) || array_diff($definition['contexts'], self::$contexts) || ($definition['schema']['type'] ?? '') !== 'object') {
            throw new \InvalidArgumentException('Settings require supported contexts and an object schema.');
        }
        $definition['schema']['additionalProperties'] = false;
        self::$definitions[$id] = $definition;
    }
    public static function manifest() { return self::$definitions; }
    public static function init() {
        add_filter('rest_dispatch_request', static function($response,$request,$route,$handler){return self::before_content($response,$handler,$request);}, 10, 4);
        add_filter('rest_request_after_callbacks', [__CLASS__, 'after_content'], 10, 3);
        add_action('rest_api_init', static function () {
            register_rest_route('ohmylms/v1', '/extension-settings/(?P<type>[a-z]+)/(?P<id>\d+)', [
                ['methods' => 'GET', 'callback' => [__CLASS__, 'read'], 'permission_callback' => [__CLASS__, 'permission']],
                ['methods' => 'PUT', 'callback' => [__CLASS__, 'save'], 'permission_callback' => [__CLASS__, 'permission']],
            ]);
        });
    }
    public static function permission($request) {
        $post = get_post((int) $request['id']);
        if (!in_array($request['type'], self::$contexts, true) || !$post || $post->post_type !== 'ohmylms-' . $request['type']) {
            return new \WP_Error('ohmylms_invalid_content', 'Invalid LMS content.', ['status' => 404]);
        }
        return current_user_can('edit_post', $post->ID) ? true : new \WP_Error('ohmylms_forbidden', 'You cannot edit this content.', ['status' => rest_authorization_required_code()]);
    }
    public static function read($request) {
        $saved = (array) get_post_meta((int) $request['id'], '_ohmylms_extension_settings', true);
        $result = [];
        foreach (self::$definitions as $id => $definition) {
            if (in_array($request['type'], $definition['contexts'], true) && isset($saved[$id])) { $result[$id] = $saved[$id]; }
        }
        return rest_ensure_response(['settings' => (object) $result]);
    }
    public static function save($request) {
        $incoming = $request->get_param('settings');
        $saved = self::prepare($request['type'], $incoming, (array) get_post_meta((int) $request['id'], '_ohmylms_extension_settings', true));
        if (is_wp_error($saved)) { return $saved; }
        update_post_meta((int) $request['id'], '_ohmylms_extension_settings', wp_slash($saved));
        return self::read($request);
    }
    public static function prepare($type, $incoming, $saved = []) {
        if (!is_array($incoming)) { return new \WP_Error('ohmylms_invalid_settings', 'settings must be an object.', ['status' => 400]); }
        foreach ($incoming as $id => $value) {
            $definition = self::$definitions[$id] ?? null;
            if (!$definition || !in_array($type, $definition['contexts'], true)) {
                return new \WP_Error('ohmylms_unknown_settings', 'Unregistered extension settings.', ['status' => 400]);
            }
            $valid = rest_validate_value_from_schema($value, $definition['schema'], $id);
            if (is_wp_error($valid)) { $valid->add_data(['status' => 400]); return $valid; }
            $clean = rest_sanitize_value_from_schema($value, $definition['schema'], $id);
            if (is_wp_error($clean)) { $clean->add_data(['status' => 400]); return $clean; }
            $saved[$id] = $clean;
        }
        return $saved;
    }
    private static function content_type($request) {
        if (!preg_match('#^/(?:ohmylms|ohmylms)/v1/(courses|lessons|quiz|question|membership|assignment|certificates)(?:/\d+)?/?$#', $request->get_route(), $match)) { return null; }
        return ['courses'=>'course', 'lessons'=>'lesson', 'certificates'=>'certificate'][$match[1]] ?? $match[1];
    }
    public static function before_content($response, $handler, $request) {
        if ($response !== null || !in_array($request->get_method(), ['POST','PUT','PATCH'], true) || !$request->has_param('extension_settings')) { return $response; }
        $type = self::content_type($request);
        if (!$type) { return $response; }
        $prepared = self::prepare($type, $request['extension_settings']);
        return is_wp_error($prepared) ? $prepared : $response;
    }
    public static function after_content($response, $handler, $request) {
        $type = self::content_type($request);
        if (!$type || is_wp_error($response) || $request->get_method() === 'DELETE') { return $response; }
        $response = rest_ensure_response($response);
        if ($response->get_status() >= 400) { return $response; }
        $data = $response->get_data();
        $id = is_array($data) ? (int) ($data['id'] ?? 0) : 0;
        // Extension settings are author-only; never attach them to public responses.
        if (!$id || get_post_type($id) !== 'ohmylms-' . $type || !current_user_can('edit_post', $id)) { return $response; }
        $saved = (array) get_post_meta($id, '_ohmylms_extension_settings', true);
        if (in_array($request->get_method(), ['POST','PUT','PATCH'], true) && $request->has_param('extension_settings')) {
            $saved = self::prepare($type, $request['extension_settings'], $saved);
            if (is_wp_error($saved)) { return $saved; }
            update_post_meta($id, '_ohmylms_extension_settings', wp_slash($saved));
        }
        $data['extension_settings'] = (object) array_intersect_key($saved, self::$definitions);
        $response->set_data($data);
        return $response;
    }
}
