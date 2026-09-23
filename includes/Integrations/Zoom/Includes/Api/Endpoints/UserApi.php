<?php
/**
 * UserApi class.
 *
 * @package creator-lms-pro
 * @since 1.0.0
 */

namespace OMLMS\Integrations\Zoom\Includes\Api\Endpoints;

use OMLMS\Integrations\Zoom\Includes\Api\ZoomApiClient;

/**
 * Class UserApi
 *
 * @package OMLMS\Integrations\Zoom\Api\Endpoints
 * @since 1.0.0
 */
class UserApi {
	/**
	 * The ZoomApiClient instance.
	 *
	 * @var ZoomApiClient
	 */
	private $client;

	/**
	 * UserApi constructor.
	 *
	 * @param ZoomApiClient $client The ZoomApiClient instance.
	 */
	public function __construct( ZoomApiClient $client ) {
		$this->client = $client;
	}

	/**
	 * Get the details of a user.
	 *
	 * @param string $user_id The user ID.
	 *
	 * @return array The API response.
	 */
	public function get( $user_id ) {
		return $this->client->get( "users/{$user_id}" );
	}

	/**
	 * Create a new user.
	 *
	 * @param array $data The user data.
	 *
	 * @return array The API response.
	 */
	public function create( $data ) {
		return $this->client->post( 'users', $data );
	}

	/**
	 * Update a user.
	 *
	 * @param string $user_id The user ID.
	 * @param array  $data    The user data.
	 *
	 * @return array The API response.
	 */
	public function update( $user_id, $data ) {
		return $this->client->put( "users/{$user_id}", $data );
	}
}
