<?php

namespace OMLMS;

use OMLMS\Webhooks\WebhookSender;

defined( 'ABSPATH' ) || exit;

/**
 * Class WebhookManager
 *
 * Handles webhook execution and event triggers
 *
 * @package CreatorLms
 * @since 1.0.0
 */
class WebhookManager {

	/**
	 * WebhookSender instance
	 *
	 * @var WebhookSender
	 * @since 1.0.0
	 */
	private $webhook_sender;

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->webhook_sender = new WebhookSender();
		$this->webhook_sender->init();
	}
}
