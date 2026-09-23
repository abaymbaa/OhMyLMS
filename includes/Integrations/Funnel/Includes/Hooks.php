<?php 

namespace OMLMS\Integrations\Funnel\Includes;

class Hooks {
    
    public function __construct() {
        add_filter( 'creatorlms_integrations', array($this, 'add_funnel') );
        add_filter( 'creatorlms_should_show_funnel', array($this, 'should_show_funnel') );
        add_action( 'creatorlms_after_payment_complete', array($this, 'maybe_process_funnel'), 10, 1 );
    }

    /**
     * Add Funnel integration to the list of available integrations.
     * 
     * @param array $integrations List of existing integrations.
     * @return array Updated list of integrations with Funnel added.
     * @since 1.0.0
     */
    public function add_funnel( $integrations ) {
        $integrations['funnel'] = array(
            'label' => __('One-Click Offer', 'ohmylms'),
            'icon' => CREATORLMS_PRO_URL.'/includes/Integrations/Funnel/Assets/Images/funnel-icon.svg',
            'description' => __('Create sales funnels to show additional offers after course checkout, increasing revenue through upsells and cross-sells.', 'ohmylms'),
            'categories' => array('sales'),
            'hasSettings' => false,
            'class' => 'OMLMS\Integrations\Funnel',
            'is_valid'    => \OMLMS\Utility\LicenseHelper::is_feature_enabled('funnel'),
            'required_plan'    => \OMLMS\Utility\LicenseHelper::get_required_plan_for_feature('funnel'),
        );
        return $integrations;
    }

    /**
     * Check if funnel is enabled
     * 
     * @param bool $should_show Default value
     * @return bool Whether funnel is enabled
     * @since 1.0.0
     */
    public function should_show_funnel( $should_show = false ) {
        $integrations = get_option( 'creatorlms_integrations' );
  
        if ( empty( $integrations ) || ! is_array( $integrations ) ) {
            return $should_show;
        }
  
        if ( ! isset( $integrations['funnel']['is_enable'] ) ) {
            return $should_show;
        }
  
        return 1 === (int) $integrations['funnel']['is_enable'];
     }

    /**
     * Maybe process funnel after successful payment.
     * 
     * @param int $order_id The order ID.
     * @since 1.0.0
     */
    public function maybe_process_funnel( $order_id ) {
        if ( ! $this->should_show_funnel() ) {
            return;
        }

        $manager = new FunnelManager();
        $result = $manager->process_order_funnel( $order_id, array() );
        
        // If we got a funnel result, redirect to the funnel
        if ( $result && isset( $result['redirect'] ) ) {
            wp_redirect( $result['redirect'] );
            exit;
        }
    }
}
