<?php

namespace CodeRex\Ecommerce;

class Comments {

	public function __construct() {
		add_filter( 'comments_clauses', array( __CLASS__, 'exclude_order_comments' ), 10, 1 );
		add_filter( 'comments_clauses', array( __CLASS__, 'exclude_subscription_comments' ), 10, 1 );
	}

	public static function exclude_order_comments( $clauses ) {
		$clauses['where'] .= ( $clauses['where'] ? ' AND ' : '' ) . " comment_type != 'order_note' ";
		return $clauses;
	}

	public static function exclude_subscription_comments( $clauses ) {
		$clauses['where'] .= ( $clauses['where'] ? ' AND ' : '' ) . " comment_type != 'subscription_note' ";
		return $clauses;
	}
}
