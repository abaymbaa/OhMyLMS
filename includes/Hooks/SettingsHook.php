<?php
/**
 * Hook for Settings
 *
 * @package    OhMyLMSPro
 * @subpackage OhMyLMSPro/includes
 */
namespace OhMyLMS\Hooks;

class SettingsHook
{
    public function register_hooks(){
        add_filter( 'ohmylms_default_pages', array( $this, 'add_membership_default_page' ) );
    }

    public function add_membership_default_page( $pages ) {
        $pages['membership'] = array(
            'name'    => _x( 'ohmylms-all-membership', 'Page slug', 'ohmylms' ),
            'title'   => _x( 'All Membership', 'Page title', 'ohmylms' ),
            'content' => '<!-- wp:shortcode -->[ohmylms_membership_plan]<!-- /wp:shortcode -->',
        );

        return $pages;
    }
}
?>