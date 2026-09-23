<?php
namespace OMLMS\Bricks\Elements;

use Bricks\Element;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class BuyNowElement extends Element {

    public $category     = 'creator-lms';
    public $name         = 'creatorlms-buy-now';
    public $icon         = 'ti-shopping-cart';
    public $css_selector = '.creatorlms-buy-now';

    public function get_label() {
        return __( 'Buy Now Button', 'ohmylms' );
    }

    public function set_controls() {
        // Content controls
        $this->controls['course_id'] = [
            'tab'     => 'content',
            'label'   => __( 'Course', 'ohmylms' ),
            'type'    => 'select',
            'options' => $this->get_courses_dropdown(),
            'default' => '',
        ];

        $this->controls['btn_text'] = [
            'tab'     => 'content',
            'label'   => __( 'Button Text', 'ohmylms' ),
            'type'    => 'text',
            'default' => __( 'Buy Now', 'ohmylms' ),
        ];

        // Style controls
        $this->controls['background'] = [
            'tab'     => 'style',
            'label'   => __( 'Background Color', 'ohmylms' ),
            'type'    => 'color',
            'default' => '#6e42d3',
            'css'     => [['selector' => '{{WRAPPER}} .add_to_cart_button','property' => 'background-color']],
        ];

        $this->controls['color'] = [
            'tab'     => 'style',
            'label'   => __( 'Text Color', 'ohmylms' ),
            'type'    => 'color',
            'default' => '#fff',
            'css'     => [['selector' => '{{WRAPPER}} .add_to_cart_button','property' => 'color']],
        ];

        $this->controls['padding'] = [
            'tab'     => 'style',
            'label'   => __( 'Padding', 'ohmylms' ),
            'type'    => 'dimensions',
            'units'   => ['px','em','%'],
            'default' => '12px 24px',
            'css'     => [['selector' => '{{WRAPPER}} .add_to_cart_button','property' => 'padding']],
        ];

        $this->controls['border_radius'] = [
            'tab'     => 'style',
            'label'   => __( 'Border Radius', 'ohmylms' ),
            'type'    => 'text',
            'default' => '4px',
            'css'     => [['selector' => '{{WRAPPER}} .add_to_cart_button','property' => 'border-radius']],
        ];

        $this->controls['font_size'] = [
            'tab'     => 'style',
            'label'   => __( 'Font Size', 'ohmylms' ),
            'type'    => 'text',
            'default' => '16px',
            'css'     => [['selector' => '{{WRAPPER}} .add_to_cart_button','property' => 'font-size']],
        ];

        $this->controls['text_decoration'] = [
            'tab'     => 'style',
            'label'   => __( 'Text Decoration', 'ohmylms' ),
            'type'    => 'select',
            'options' => [
                'none'         => __( 'None','ohmylms' ),
                'underline'    => __( 'Underline','ohmylms' ),
                'line-through' => __( 'Line Through','ohmylms' ),
            ],
            'default' => 'none',
            'css'     => [['selector' => '{{WRAPPER}} .add_to_cart_button','property' => 'text-decoration']],
        ];

        $this->controls['line_height'] = [
            'tab'     => 'style',
            'label'   => __( 'Line Height', 'ohmylms' ),
            'type'    => 'text',
            'default' => '1.5',
            'css'     => [['selector' => '{{WRAPPER}} .add_to_cart_button','property' => 'line-height']],
        ];

        foreach (['width','max_width','min_width','height'] as $prop) {
            $this->controls[$prop] = [
                'tab'     => 'style',
                'label'   => ucwords(str_replace('_',' ',$prop)),
                'type'    => 'text',
                'default' => $prop === 'width' ? 'auto' : ($prop === 'height' ? 'auto' : ($prop === 'max_width' ? '100%' : '100px')),
                'css'     => [[
                    'selector' => '{{WRAPPER}} .add_to_cart_button',
                    'property' => str_replace('_','-',$prop)
                ]],
            ];
        }

        // Positioning and alignment controls
        $this->controls['display'] = [
            'tab'     => 'style',
            'label'   => __( 'Display', 'ohmylms' ),
            'type'    => 'select',
            'options' => [
                'inline-block' => __( 'Inline Block', 'ohmylms' ),
                'block'        => __( 'Block', 'ohmylms' ),
                'inline'       => __( 'Inline', 'ohmylms' ),
                'flex'         => __( 'Flex', 'ohmylms' ),
            ],
            'default' => 'inline-block',
            'css'     => [['selector' => '{{WRAPPER}} .add_to_cart_button','property' => 'display']],
        ];

        $this->controls['vertical_align'] = [
            'tab'     => 'style',
            'label'   => __( 'Vertical Align', 'ohmylms' ),
            'type'    => 'select',
            'options' => [
                'baseline'    => __( 'Baseline', 'ohmylms' ),
                'top'         => __( 'Top', 'ohmylms' ),
                'middle'      => __( 'Middle', 'ohmylms' ),
                'bottom'      => __( 'Bottom', 'ohmylms' ),
                'text-top'    => __( 'Text Top', 'ohmylms' ),
                'text-bottom' => __( 'Text Bottom', 'ohmylms' ),
            ],
            'default' => 'baseline',
            'css'     => [['selector' => '{{WRAPPER}} .add_to_cart_button','property' => 'vertical-align']],
        ];

        $this->controls['margin'] = [
            'tab'     => 'style',
            'label'   => __( 'Margin', 'ohmylms' ),
            'type'    => 'dimensions',
            'units'   => ['px','em','%'],
            'default' => '0px',
            'css'     => [['selector' => '{{WRAPPER}} .add_to_cart_button','property' => 'margin']],
        ];

        $this->controls['box_sizing'] = [
            'tab'     => 'style',
            'label'   => __( 'Box Sizing', 'ohmylms' ),
            'type'    => 'select',
            'options' => [
                'content-box' => __( 'Content Box', 'ohmylms' ),
                'border-box'  => __( 'Border Box', 'ohmylms' ),
            ],
            'default' => 'border-box',
            'css'     => [['selector' => '{{WRAPPER}} .add_to_cart_button','property' => 'box-sizing']],
        ];

        $this->controls['class'] = [
            'tab'     => 'advanced',
            'label'   => __( 'Additional CSS Class', 'ohmylms' ),
            'type'    => 'text',
            'default' => '',
        ];
    }

    private function get_courses_dropdown() {
        $courses = get_posts([
            'post_type'   => 'omlms-course',
            'post_status' => 'publish',
            'numberposts' => -1,
            'orderby'     => 'title',
            'order'       => 'ASC',
        ]);

        $options = ['' => __( 'Select a course', 'ohmylms' )];
        foreach ($courses as $course) {
            $options[$course->ID] = $course->post_title;
        }

        return $options;
    }

    public function enqueue_scripts() {
        wp_enqueue_script( 'omlms-frontend' );
        wp_enqueue_script( 'omlms-add-to-cart' );
    }

    public function render() {
		$defaults = [
			'btn_text'       => __( 'Buy Now', 'ohmylms' ),
			'course_id'      => '',
			'background'     => '#6e42d3',
			'color'          => '#fff',
			'padding'        => '12px 24px',
			'border_radius'  => '4px',
			'font_size'      => '16px',
			'text_decoration'=> 'none',
			'line_height'    => '1.5',
			'width'          => 'auto',
			'max_width'      => '100%',
			'min_width'      => '100px',
			'height'         => 'auto',
			'display'        => 'inline-block',
			'vertical_align' => 'baseline',
			'margin'         => '0px',
			'box_sizing'     => 'border-box',
			'class'          => '',
		];

		$settings = wp_parse_args($this->settings, $defaults);

		// === COLORS ===
		if ( isset( $settings['_background']['color']['hex'] ) ) {
			$settings['background'] = $settings['_background']['color']['hex'];
		}

		if ( isset( $settings['_typography']['color']['hex'] ) ) {
			$settings['color'] = $settings['_typography']['color']['hex'];
		}

		// === TYPOGRAPHY ===
		if ( isset($settings['_typography']['font-size']) ) {
			$settings['font_size'] = $settings['_typography']['font-size'] . 'px';
		}
		if ( isset($settings['_typography']['line-height']) ) {
			$settings['line_height'] = $settings['_typography']['line-height'];
		}
		if ( isset($settings['_typography']['text-decoration']) ) {
			$settings['text_decoration'] = $settings['_typography']['text-decoration'];
		}

		// === PADDING ===
		if ( is_array($settings['padding']) ) {
			$settings['padding'] = implode(' ', array_filter([
				$settings['padding']['top'] ?? '',
				$settings['padding']['right'] ?? '',
				$settings['padding']['bottom'] ?? '',
				$settings['padding']['left'] ?? ''
			]));
		}

		// === BORDER RADIUS ===
		if ( is_array($settings['border_radius']) ) {
			$settings['border_radius'] = $settings['border_radius']['top'] ?? '0';
		}

		// === WIDTH / HEIGHT ===
		foreach ( ['width','max_width','min_width','height'] as $dim ) {
			if ( is_array($settings[$dim]) && isset($settings[$dim]['size']) ) {
				$settings[$dim] = $settings[$dim]['size'] . ($settings[$dim]['unit'] ?? 'px');
			}
		}

		// === MARGIN ===
		if ( is_array($settings['margin']) ) {
			$settings['margin'] = implode(' ', array_filter([
				$settings['margin']['top'] ?? '',
				$settings['margin']['right'] ?? '',
				$settings['margin']['bottom'] ?? '',
				$settings['margin']['left'] ?? ''
			]));
		}

		if ( isset($settings['_border']) ) {
			$border = $settings['_border'];

			// Width
			$width = $border['width'] ?? ['top'=>'0','right'=>'0','bottom'=>'0','left'=>'0'];
			$border_width = "{$width['top']} {$width['right']} {$width['bottom']} {$width['left']}";

			// Style
			$border_style = $border['style'] ?? 'solid';

			// Color
			$border_color = $border['color']['hex'] ?? '#000';

			// Radius
			$radius = $border['radius'] ?? ['top'=>0,'right'=>0,'bottom'=>0,'left'=>0];
			$border_radius = "{$radius['top']}px {$radius['right']}px {$radius['bottom']}px {$radius['left']}px";

			$settings['border'] = "{$border_width} {$border_style} {$border_color}";
			$settings['border_radius'] = $border_radius;
		}

		$this->set_attribute('_root', 'class', 'creatorlms-buy-now ' . esc_attr($settings['class']));
		echo '<div '.$this->render_attributes('_root').'>';
		echo do_shortcode(
			sprintf(
				'[creator_lms_buy_now course_id="%s" btn_text="%s" class="%s" background="%s" color="%s" padding="%s" border_radius="%s" font_size="%s" text_decoration="%s" line_height="%s" width="%s" max_width="%s" min_width="%s" height="%s" display="%s" vertical_align="%s" margin="%s" box_sizing="%s"]',
				esc_attr($settings['course_id']),
				esc_attr($settings['btn_text']),
				esc_attr($settings['class']),
				esc_attr($settings['background']),
				esc_attr($settings['color']),
				esc_attr($settings['padding']),
				esc_attr($settings['border_radius']),
				esc_attr($settings['font_size']),
				esc_attr($settings['text_decoration']),
				esc_attr($settings['line_height']),
				esc_attr($settings['width']),
				esc_attr($settings['max_width']),
				esc_attr($settings['min_width']),
				esc_attr($settings['height']),
				esc_attr($settings['display']),
				esc_attr($settings['vertical_align']),
				esc_attr($settings['margin']),
				esc_attr($settings['box_sizing'])
			)
		);
		echo '</div>';
	}
}