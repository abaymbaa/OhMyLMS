<?php
/**
 * OhMyLMS Offer Button Block (PHP registration)
 *
 * @package OhMyLMS\Blocks\Blocks
 */

namespace OhMyLMS\Blocks\Blocks;

if ( ! defined( 'ABSPATH' ) ) exit;

class OfferButtonBlock {
    public static function register() {
        register_block_type( 'ohmylms/offer-button', [
            'attributes'      => [
                'action'        => [ 'type' => 'string', 'default' => 'accept' ],
                'text'          => [ 'type' => 'string', 'default' => 'Accept Offer' ],
                'background'    => [ 'type' => 'string', 'default' => '#0073aa' ],
                'color'         => [ 'type' => 'string', 'default' => '#fff' ],
                'border'        => [ 'type' => 'string', 'default' => '' ],
                'padding'       => [ 'type' => 'string', 'default' => '12px 24px' ],
                'margin'        => [ 'type' => 'string', 'default' => '' ],
                'font_size'     => [ 'type' => 'string', 'default' => '16px' ],
                'font_weight'   => [ 'type' => 'string', 'default' => '' ],
                'border_radius' => [ 'type' => 'string', 'default' => '4px' ],
                'width'         => [ 'type' => 'string', 'default' => '' ],
                'height'        => [ 'type' => 'string', 'default' => '' ],
                'class'         => [ 'type' => 'string', 'default' => '' ],
                'id'            => [ 'type' => 'string', 'default' => '' ],
                'style'         => [ 'type' => 'string', 'default' => '' ],
            ],
            'render_callback' => [ __CLASS__, 'render' ],
            'editor_script' => 'ohmylms-blocks-editor',
			'editor_style' => 'ohmylms-blocks-editor',
			'style' => 'ohmylms-blocks-frontend',
        ] );
    }

    public static function render( $atts ) {
        // Use the pro shortcode handler for output
        if ( class_exists( '\OhMyLMS\Shortcodes\ShortCodeOfferButton' ) ) {
            ob_start();
            \OhMyLMS\Shortcodes\ShortCodeOfferButton::output( $atts );
            return ob_get_clean();
        }
        return '<div class="ohmylms-offer-button-missing">Offer Button not available.</div>';
    }
}

// Register on init
add_action( 'init', [ '\OhMyLMS\Blocks\Blocks\OfferButtonBlock', 'register' ] );
