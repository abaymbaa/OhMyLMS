<?php
/**
 * Hook for Settings
 *
 * @package    CreatorLmsPro
 * @subpackage CreatorLmsPro/includes
 */
namespace OMLMS\Hooks;

class SettingsHook
{
    public function register_hooks(){
        add_filter( 'creator_lms_default_pages', array( $this, 'add_membership_default_page' ) );
    }

    public function add_membership_default_page( $pages ) {
        if ( ! \OMLMS\Utility\Licensing::is_license_valid() ) {
            return $pages;
        }

        $pages['membership'] = array(
            'name'    => _x( 'cr-all-membership', 'Page slug', 'creator-lms' ),
            'title'   => _x( 'All Membership', 'Page title', 'creator-lms' ),
            'content' => '<!-- wp:shortcode -->[creator_lms_membership_plan]<!-- /wp:shortcode -->',
        );

        return $pages;
    }
}
?>