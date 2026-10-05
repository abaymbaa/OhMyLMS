<?php
namespace OhMyLMS\Rest\V1;

use OhMyLMS\Abstracts\RestController;
use OhMyLMS\Curriculum\Access;
use OhMyLMS\Tracks\Follows;
use OhMyLMS\Tracks\Frontend;
use OhMyLMS\Tracks\Progress;
use OhMyLMS\Tracks\Tracks;
use WP_REST_Request;
use WP_REST_Server;

defined('ABSPATH') || exit;

/**
 * Learner routes. A signed-in account can only read and change its own dashboard: the
 * learner is always the current user, never a request parameter. Following a track is
 * independent of enrollment and grants no access.
 */
class MyTracksController extends RestController {
    public function register_routes() {
        $learner = [Access::class, 'learner'];
        register_rest_route($this->namespace, '/me/tracks', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'index'], 'permission_callback' => $learner],
        ]);
        register_rest_route($this->namespace, '/me/tracks/(?P<id>\d+)', [
            ['methods' => WP_REST_Server::READABLE, 'callback' => [$this, 'show'], 'permission_callback' => $learner],
        ]);
        register_rest_route($this->namespace, '/tracks/(?P<id>\d+)/follow', [
            ['methods' => WP_REST_Server::CREATABLE, 'callback' => [$this, 'follow'], 'permission_callback' => $learner],
            ['methods' => WP_REST_Server::DELETABLE, 'callback' => [$this, 'unfollow'], 'permission_callback' => $learner],
        ]);
    }

    private function summary(array $row) {
        $track = Tracks::describe($row);
        return ['id' => $track['id'], 'title' => $track['title'], 'description' => $track['description'], 'member_count' => $track['member_count']] + (isset($row['enrolled_overlap']) ? ['enrolled_overlap' => (int) $row['enrolled_overlap']] : []);
    }

    public function index() {
        $user = get_current_user_id();
        return rest_ensure_response([
            'followed' => array_map([$this, 'summary'], Follows::followed($user)),
            'suggested' => array_map([$this, 'summary'], Follows::suggested($user)),
        ]);
    }

    /** Progress for a published track, always for the current learner only. */
    public function show(WP_REST_Request $request) {
        $track = Tracks::get((int) $request['id']);
        if (!$track || $track['status'] !== 'published') { return Tracks::missing(); }
        \OhMyLMS\Skills\Evidence::process(50);
        return rest_ensure_response(Progress::for_track($track, get_current_user_id()) + ['following' => Follows::is_following(get_current_user_id(), (int) $track['id'])]);
    }

    public function follow(WP_REST_Request $request) {
        $result = Follows::follow(get_current_user_id(), (int) $request['id']);
        return is_wp_error($result) ? $result : rest_ensure_response(['followed' => true, 'html' => Frontend::section(get_current_user_id())]);
    }

    public function unfollow(WP_REST_Request $request) {
        Follows::unfollow(get_current_user_id(), (int) $request['id']);
        return rest_ensure_response(['followed' => false, 'html' => Frontend::section(get_current_user_id())]);
    }
}
