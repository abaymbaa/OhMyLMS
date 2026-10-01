<?php
namespace CodeRex\Ecommerce\Factory;

use CodeRex\Ecommerce\Data\Subscription;

class SubscriptionFactory {
    /**
     * Get subscription
     *
     * @param bool|int|Subscription $subscription_id
     * @return Subscription|bool
     */
    public function get_subscription( $subscription_id = false ) {
        $subscription_id = $this->get_subscription_id( $subscription_id );
        if ( ! $subscription_id ) {
            return false;
        }

        return new Subscription( $subscription_id );
    }

    /**
     * Get subscription id
     *
     * @param $subscription
     * @return bool|int
     */
    private function get_subscription_id( $subscription ) {
        global $post;

        if ( false === $subscription && isset( $post, $post->ID ) && 'ohmylms-subscription' === \get_post_type( $post->ID ) ) {
            return \absint( $post->ID );
        } elseif ( is_numeric( $subscription ) ) {
            return $subscription;
        } elseif ( $subscription instanceof Subscription ) {
            return $subscription->get_id();
        } elseif ( ! empty( $subscription->ID ) ) {
            return $subscription->ID;
        } else {
            return false;
        }
    }
} 