<?php
namespace CodeRex\Ecommerce\Data;

use CodeRex\Ecommerce\Abstracts\Data;
use CodeRex\Ecommerce\DataStores;

class Subscription extends Data {

	protected string $data_store_name = 'subscription';

	protected string $object_type = 'subscription';

	protected array $data = array(
		'student_id'                   => null,
		'membership_id'                => null,
		'original_order_id'            => null,
		'payment_gateway_id'           => null,
		'gateway_customer_id'          => null,
		'gateway_payment_method_token' => null,
		'schedule_start_date'          => null,
		'schedule_next_payment_date'   => null,
		'schedule_end_date'            => null,
		'status'                       => null,
		'student_name'                 => null,
		'student_email'                => null,
		'student_profile'              => null,
		'trial_end'                    => '',
		'last_payment_date'            => '',
		'recurring_amount'             => '',
		'billing_period'               => '',
		'billing_interval'             => 1,
		'order_total'                  => 0,
		'order_version'                => OHMYLMS_VERSION,
	);

	public function __construct( $data = 0 ) {
		parent::__construct( $data );
		if ( is_int( $data ) ) {
			$this->set_id( $data );
		} elseif ( is_string( $data ) ) {
			$this->set_id( $data );
		} else {
			// No set_object_read method in parent, so do nothing here.
		}

		// load the data store
		$this->data_store = DataStores::load( $this->data_store_name );

		if ( $this->get_id() > 0 ) {
			$this->data_store->read( $this );
		}
	}

	// Getters
	public function get_student_id( $context = 'view' ) {
		return $this->get_prop( 'student_id', $context );
	}
	public function get_membership_id( $context = 'view' ) {
		return $this->get_prop( 'membership_id', $context );
	}
	public function get_original_order_id( $context = 'view' ) {
		return $this->get_prop( 'original_order_id', $context );
	}
	public function get_payment_gateway_id( $context = 'view' ) {
		return $this->get_prop( 'payment_gateway_id', $context );
	}
	public function get_gateway_customer_id( $context = 'view' ) {
		return $this->get_prop( 'gateway_customer_id', $context );
	}
	public function get_gateway_payment_method_token( $context = 'view' ) {
		return $this->get_prop( 'gateway_payment_method_token', $context );
	}
	public function get_start_date( $context = 'view' ) {
		return $this->get_prop( 'start_date', $context );
	}
	public function get_next_payment_date( $context = 'view' ) {
		return $this->get_prop( 'next_payment_date', $context );
	}
	public function get_status( $context = 'view' ) {
		$status = $this->get_prop( 'status', $context );
		return ! empty( $status ) ? $status : 'pending';
	}
	public function get_student_name( $context = 'view' ) {
		return $this->get_prop( 'student_name', $context );
	}
	public function get_student_email( $context = 'view' ) {
		return $this->get_prop( 'student_email', $context );
	}
	public function get_student_profile( $context = 'view' ) {
		return $this->get_prop( 'student_profile', $context );
	}
	public function get_billing_period( $context = 'view' ) {
		return $this->get_prop( 'billing_period', $context );
	}
	public function get_products( $context = 'view' ) {
		return $this->get_prop( 'products', $context );
	}
	public function get_trial_end_date( $context = 'view' ) {
		return $this->get_prop( 'trial_end_date', $context );
	}
	public function get_last_payment_date( $context = 'view' ) {
		return $this->get_prop( 'last_payment_date', $context );
	}
	public function get_recurring_amount( $context = 'view' ) {
		return $this->get_prop( 'recurring_amount', $context );
	}
	public function get_order_total( $context = 'view' ) {
		return $this->get_prop( 'order_total', $context );
	}
	public function get_order_version( $context = 'view' ) {
		return $this->get_prop( 'order_version', $context );
	}
	public function get_schedule_start_date( $context = 'view' ) {
		return $this->get_prop( 'schedule_start_date', $context );
	}
	public function get_schedule_next_payment_date( $context = 'view' ) {
		return $this->get_prop( 'schedule_next_payment_date', $context );
	}
	public function get_schedule_end_date( $context = 'view' ) {
		return $this->get_prop( 'schedule_end_date', $context );
	}

	public function get_related_orders() {
		return $this->data_store->get_related_orders( $this->get_id() );
	}

	// Setters
	public function set_student_id( $student_id ) {
		$this->set_prop( 'student_id', $student_id );
	}
	public function set_membership_id( $membership_id ) {
		$this->set_prop( 'membership_id', $membership_id );
	}
	public function set_original_order_id( $original_order_id ) {
		$this->set_prop( 'original_order_id', $original_order_id );
	}
	public function set_payment_gateway_id( $payment_gateway_id ) {
		$this->set_prop( 'payment_gateway_id', $payment_gateway_id );
	}
	public function set_gateway_customer_id( $gateway_customer_id ) {
		$this->set_prop( 'gateway_customer_id', $gateway_customer_id );
	}
	public function set_gateway_payment_method_token( $gateway_payment_method_token ) {
		$this->set_prop( 'gateway_payment_method_token', $gateway_payment_method_token );
	}
	public function set_start_date( $start_date ) {
		$this->set_prop( 'start_date', $start_date );
	}
	public function set_next_payment_date( $next_payment_date ) {
		$this->set_prop( 'next_payment_date', $next_payment_date );
	}
	public function set_status( $new_status ) {
		$new_status = 0 === strpos( $new_status, 'ohmylms-' ) ? substr( $new_status, strlen( 'ohmylms-' ) ) : $new_status;
		$this->set_prop( 'status', $new_status );
	}
	public function set_student_name( $status ) {
		$this->set_prop( 'student_name', $status );
	}
	public function set_student_email( $status ) {
		$this->set_prop( 'student_email', $status );
	}
	public function set_student_profile( $status ) {
		$this->set_prop( 'student_profile', $status );
	}

	public function set_billing_period( $billing_period ) {
		$this->set_prop( 'billing_period', $billing_period );
	}

	public function set_products( $products ) {
		$this->set_prop( 'products', $products );
	}

	public function set_trial_end_date( $trial_end ) {
		$this->set_prop( 'trial_end_date', $trial_end );
	}

	public function set_last_payment_date( $last_payment_date ) {
		$this->set_prop( 'last_payment_date', $last_payment_date );
	}

	public function set_recurring_amount( $recurring_amount ) {
		$this->set_prop( 'recurring_amount', $recurring_amount );
	}

	public function set_order_total( $order_total ) {
		$this->set_prop( 'order_total', $order_total );
	}

	public function set_order_version( $order_version ) {
		$this->set_prop( 'order_version', $order_version );
	}
	public function set_related_orders( $related_orders ) {
		$this->set_prop( 'related_orders', $related_orders );
	}
	public function set_schedule_start_date( $date ) {
		$this->set_prop( 'schedule_start_date', $date );
	}
	public function set_schedule_next_payment_date( $date ) {
		$this->set_prop( 'schedule_next_payment_date', $date );
	}
	public function set_schedule_end_date( $date ) {
		$this->set_prop( 'schedule_end_date', $date );
	}
}
