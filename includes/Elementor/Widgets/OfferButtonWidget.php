<?php
/**
 * CreatorLMS Offer Button Widget for Elementor
 *
 * @package Creatorlms\Elementor\Widgets
 */

namespace OMLMS\Elementor\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class OfferButtonWidget extends Widget_Base {

    public function get_name() {
        return 'creator-lms-offer-button';
    }

    public function get_title() {
        return __( 'Offer Button', 'ohmylms' );
    }

    public function get_icon() {
        return 'eicon-badge';
    }

    public function get_categories() {
        return [ 'creator-lms' ];
    }

    protected function _register_controls() {
        $this->start_controls_section(
            'section_content',
            [
                'label' => __( 'Content', 'ohmylms' ),
            ]
        );

        $this->add_control(
            'action',
            [
                'label' => __( 'Action', 'ohmylms' ),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    'accept' => __( 'Accept Offer', 'ohmylms' ),
                    'decline' => __( 'Decline Offer', 'ohmylms' ),
                ],
                'default' => 'accept',
            ]
        );
        $this->add_control(
            'text',
            [
                'label' => __( 'Button Text', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => 'Accept Offer',
            ]
        );
        $this->add_control(
            'background',
            [
                'label' => __( 'Background Color', 'ohmylms' ),
                'type' => Controls_Manager::COLOR,
                'default' => '#0073aa',
            ]
        );
        $this->add_control(
            'color',
            [
                'label' => __( 'Text Color', 'ohmylms' ),
                'type' => Controls_Manager::COLOR,
                'default' => '#fff',
            ]
        );
        $this->add_control(
            'border',
            [
                'label' => __( 'Border', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '',
            ]
        );
        $this->add_control(
            'padding',
            [
                'label' => __( 'Padding', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '12px 24px',
            ]
        );
        $this->add_control(
            'margin',
            [
                'label' => __( 'Margin', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '',
            ]
        );
        $this->add_control(
            'font_size',
            [
                'label' => __( 'Font Size', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '16px',
            ]
        );
        $this->add_control(
            'font_weight',
            [
                'label' => __( 'Font Weight', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '',
            ]
        );
        $this->add_control(
            'border_radius',
            [
                'label' => __( 'Border Radius', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '4px',
            ]
        );
        $this->add_control(
            'width',
            [
                'label' => __( 'Width', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '',
            ]
        );
        $this->add_control(
            'height',
            [
                'label' => __( 'Height', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '',
            ]
        );
        $this->add_control(
            'class',
            [
                'label' => __( 'Extra CSS Class', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '',
            ]
        );
        $this->add_control(
            'id',
            [
                'label' => __( 'CSS ID', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '',
            ]
        );
        $this->add_control(
            'style',
            [
                'label' => __( 'Inline CSS Styles', 'ohmylms' ),
                'type' => Controls_Manager::TEXTAREA,
                'default' => '',
            ]
        );
        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $atts = [
            'action'        => $settings['action'],
            'text'          => $settings['text'],
            'background'    => $settings['background'],
            'color'         => $settings['color'],
            'border'        => $settings['border'],
            'padding'       => $settings['padding'],
            'margin'        => $settings['margin'],
            'font_size'     => $settings['font_size'],
            'font_weight'   => $settings['font_weight'],
            'border_radius' => $settings['border_radius'],
            'width'         => $settings['width'],
            'height'        => $settings['height'],
            'class'         => $settings['class'],
            'id'            => $settings['id'],
            'style'         => $settings['style'],
        ];
        $shortcode = '[creator_lms_offer_button';
        foreach ($atts as $k => $v) {
            if ($v !== '' && $v !== null) {
                $shortcode .= ' ' . $k . '="' . esc_attr($v) . '"';
            }
        }
        $shortcode .= ']';
        echo do_shortcode($shortcode);
    }
}
