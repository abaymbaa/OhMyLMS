<?php
/**
 * BuyNowBlock
 *
 * @package OhMyLMS\Blocks\Blocks
 */

namespace OhMyLMS\Blocks\Blocks;

if ( ! defined( 'ABSPATH' ) ) exit;

class BuyNowBlock {
    public static function register() {
        register_block_type( 'ohmylms/buy-now', [
            'attributes'      => [
                'courseId'       => [ 'type' => 'integer', 'default' => 0 ],
                'btnText'        => [ 'type' => 'string', 'default' => 'Buy Now' ],
                'background'     => [ 'type' => 'string', 'default' => '#0073aa' ],
                'color'          => [ 'type' => 'string', 'default' => '#fff' ],
                'padding'        => [ 'type' => 'string', 'default' => '12px 24px' ],
                'borderRadius'   => [ 'type' => 'string', 'default' => '4px' ],
                'fontSize'       => [ 'type' => 'string', 'default' => '16px' ],
                'textDecoration' => [ 'type' => 'string', 'default' => 'none' ],
                'lineHeight'     => [ 'type' => 'string', 'default' => '1.5' ],
                'width'          => [ 'type' => 'string', 'default' => 'auto' ],
                'maxWidth'       => [ 'type' => 'string', 'default' => '100%' ],
                'minWidth'       => [ 'type' => 'string', 'default' => '100px' ],
                'height'         => [ 'type' => 'string', 'default' => 'auto' ],
                'className'      => [ 'type' => 'string', 'default' => '' ],
            ],
            'render_callback' => [ __CLASS__, 'render' ],
        ] );
    }

    public static function render( $attributes ) {
        $atts = [
            'course_id'      => isset($attributes['courseId']) ? $attributes['courseId'] : '',
            'btn_text'       => isset($attributes['btnText']) ? $attributes['btnText'] : '',
            'background'     => isset($attributes['background']) ? $attributes['background'] : '',
            'color'          => isset($attributes['color']) ? $attributes['color'] : '',
            'padding'        => isset($attributes['padding']) ? $attributes['padding'] : '',
            'border_radius'  => isset($attributes['borderRadius']) ? $attributes['borderRadius'] : '',
            'font_size'      => isset($attributes['fontSize']) ? $attributes['fontSize'] : '',
            'text_decoration'=> isset($attributes['textDecoration']) ? $attributes['textDecoration'] : '',
            'line_height'    => isset($attributes['lineHeight']) ? $attributes['lineHeight'] : '',
            'width'          => isset($attributes['width']) ? $attributes['width'] : '',
            'max_width'      => isset($attributes['maxWidth']) ? $attributes['maxWidth'] : '',
            'min_width'      => isset($attributes['minWidth']) ? $attributes['minWidth'] : '',
            'height'         => isset($attributes['height']) ? $attributes['height'] : '',
            'class'          => isset($attributes['className']) ? $attributes['className'] : '',
        ];
        $shortcode = '[ohmylms_buy_now';
        foreach ($atts as $k => $v) {
            if ($v !== '' && $v !== null) {
                $shortcode .= ' ' . $k . '="' . esc_attr($v) . '"';
            }
        }
        $shortcode .= ']';
        return do_shortcode($shortcode);
    }
}