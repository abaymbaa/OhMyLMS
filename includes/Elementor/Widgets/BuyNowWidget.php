<?php

namespace OMLMS\Elementor\Widgets;


use Elementor\Widget_Base;
use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class BuyNowWidget extends Widget_Base {

    /**
     * Get list of published courses for dropdown
     *
     * @return array
     */
    private function get_courses_dropdown() {
        $courses = get_posts([
            'post_type' => 'omlms-course',
            'post_status' => 'publish',
            'numberposts' => -1,
            'orderby' => 'title',
            'order' => 'ASC',
        ]);
        $options = [];
        foreach ($courses as $course) {
            $options[$course->ID] = $course->post_title;
        }
        return $options;
    }
    public function get_name() {
        return 'creator-lms-buy-now';
    }

    public function get_title() {
        return __( 'Buy Now', 'ohmylms' );
    }

    public function get_icon() {
        return 'eicon-cart';
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
            'course_id',
            [
                'label' => __( 'Course', 'ohmylms' ),
                'type' => Controls_Manager::SELECT,
                'options' => $this->get_courses_dropdown(),
                'default' => '',
            ]
        );

        $this->add_control(
            'btn_text',
            [
                'label' => __( 'Button Text', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => __('Buy Now', 'ohmylms'),
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
            'padding',
            [
                'label' => __( 'Padding', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '12px 24px',
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
            'font_size',
            [
                'label' => __( 'Font Size', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '16px',
            ]
        );
        $this->add_control(
            'text_decoration',
            [
                'label' => __( 'Text Decoration', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => 'none',
            ]
        );
        $this->add_control(
            'line_height',
            [
                'label' => __( 'Line Height', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '1.5',
            ]
        );
        $this->add_control(
            'width',
            [
                'label' => __( 'Width', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => 'auto',
            ]
        );
        $this->add_control(
            'max_width',
            [
                'label' => __( 'Max Width', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '100%',
            ]
        );
        $this->add_control(
            'min_width',
            [
                'label' => __( 'Min Width', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => '100px',
            ]
        );
        $this->add_control(
            'height',
            [
                'label' => __( 'Height', 'ohmylms' ),
                'type' => Controls_Manager::TEXT,
                'default' => 'auto',
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
        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $course_id = !empty($settings['course_id']) ? $settings['course_id'] : '';
        if ($course_id) {
            $atts = [
                'course_id' => $course_id,
                'btn_text' => $settings['btn_text'],
                'background' => $settings['background'],
                'color' => $settings['color'],
                'padding' => $settings['padding'],
                'border_radius' => $settings['border_radius'],
                'font_size' => $settings['font_size'],
                'class' => $settings['class'],
                'text_decoration' => $settings['text_decoration'],
                'line_height' => $settings['line_height'],
                'width' => $settings['width'],
                'max_width' => $settings['max_width'],
                'min_width' => $settings['min_width'],
                'height' => $settings['height'],
            ];
            $shortcode = '[creator_lms_buy_now';
            foreach ($atts as $k => $v) {
                if ($v !== '' && $v !== null) {
                    $shortcode .= ' ' . $k . '="' . esc_attr($v) . '"';
                }
            }
            $shortcode .= ']';
            echo do_shortcode($shortcode);
        } else {
            echo '<span>' . esc_html__('Please select a course.', 'ohmylms') . '</span>';
        }
    }
}
