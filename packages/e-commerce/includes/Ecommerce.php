<?php

namespace CodeRex\Ecommerce;

use CodeRex\Ecommerce\Factory\OrderFactory;
use CodeRex\Ecommerce\Factory\SubscriptionFactory;
use CodeRex\Ecommerce\Gateways\Gateways;
use CodeRex\Ecommerce\Rest\Api;

defined( 'ABSPATH' ) || exit;

/**
 * Class CLMS_Order_Loader
 * Handles loading and instantiation of order-related classes.
 */
final class Ecommerce {

	/**
	 * @var PostTypes
	 */
	public $post_types;


	/**
	 * @var SessionHandler
	 */
	public $session;


	/**
	 * @var $cart Cart
	 */
	public $cart;

	/**
	 * @var $payment Cart
	 */
	public $payment;

	/**
	 * Holds the singleton instance of this class.
	 *
	 * @var Ecommerce
	 */
	private static $instance;

	/**
	 * @var OrderFactory
	 */
	public $order_factory;


	public $subscription_factory;

	/**
	 * @var CustomEndpoints
	 */
	public $query;

	/**
	 * @var SubscriptionManager
	 */
	public $subscription_manager;


	public $prefix = 'ohmylms';

	/**
	 * @var Api
	 */
	public $rest_api;

	/**
	 * @var Gateways
	 */
	public $gateways;


	/**
	 * Singleton instance.
	 *
	 * @return OhMyLMS
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'init' ) );
	}


	public function init() {
		$this->register_services();
		$this->init_post_types();
	}


	/**
	 * Register order-related services in the container.
	 *
	 * @since 1.0.0
	 */
	private function register_services() {
		$this->post_types = new PostTypes();
		$this->session    = new SessionHandler();
		$this->session->init();

		$this->cart                 = new Cart();
		$this->order_factory        = new OrderFactory();
		$this->subscription_factory = new SubscriptionFactory();
		$this->query                = new CustomEndpoints();
		$this->rest_api             = new Api();
		$this->gateways             = $this->gateways();
		$this->subscription_manager = new SubscriptionManager();
		$this->subscription_manager::init_hooks();

		$ajax = new Ajax();
		$ajax::init();
	}


	/**
	 * Initialize the post types.
	 *
	 * @since 1.0.0
	 */
	public function init_post_types() {
		$this->post_types->register_post_types();
		$this->post_types->register_post_status();
	}


	/**
	 * Get Checkout Class.
	 *
	 * @return Checkout|null
	 */
	public function checkout() {
		return Checkout::instance();
	}

	/**
	 * Membership instance declared
	 *
	 * @return Membership|null
	 * @since 1.0.0
	 */
	public function membership() {
		return Membership::instance();
	}

	/**
	 * Get gateways class.
	 *
	 * @return Gateways
	 */
	public function gateways() {
		return Gateways::instance();
	}

	/**
	 * Order object
	 *
	 * @param $order_id
	 * @return Order
	 * @sincee 1.0.0
	 */
	public function order( $order_id = null ): Order {
		if ( $order_id ) {
			return new Order( $order_id );
		}
		return new Order();
	}
}

function ecommerce() {
	return Ecommerce::instance();
}

ecommerce(); // phpcs:ignore




