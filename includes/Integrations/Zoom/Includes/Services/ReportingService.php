<?php
/**
 * ReportingService class.
 *
 * @package creator-lms-pro
 * @since 1.0.0
 */

namespace OMLMS\Integrations\Zoom\Includes\Services;

use OMLMS\Integrations\Zoom\Includes\Api\Endpoints\ReportingApi;

/**
 * Class ReportingService
 *
 * @package OMLMS\Integrations\Zoom\Services
 * @since 1.0.0
 */
class ReportingService {
	/**
	 * The ReportingApi instance.
	 *
	 * @var ReportingApi
	 */
	private $reporting_api;

	/**
	 * ReportingService constructor.
	 *
	 * @param ReportingApi $reporting_api The ReportingApi instance.
	 */
	public function __construct( ReportingApi $reporting_api ) {
		$this->reporting_api = $reporting_api;
	}

	/**
	 * Get meeting participant report.
	 *
	 * @param int   $meeting_id The meeting ID.
	 * @param array $params     The query parameters.
	 *
	 * @return array The API response.
	 */
	public function get_meeting_participants_report( $meeting_id, $params = array() ) {
		return $this->reporting_api->get_meeting_participants( $meeting_id, $params );
	}

	/**
	 * Get webinar participant report.
	 *
	 * @param int   $webinar_id The webinar ID.
	 * @param array $params     The query parameters.
	 *
	 * @return array The API response.
	 */
	public function get_webinar_participants_report( $webinar_id, $params = array() ) {
		return $this->reporting_api->get_webinar_participants( $webinar_id, $params );
	}
}
