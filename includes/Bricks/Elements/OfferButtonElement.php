<?php
namespace OMLMS\Bricks\Elements;

use Bricks\Element;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class OfferButtonElement extends Element {

    public $category     = 'creator-lms';
    public $name         = 'creatorlms-offer-button';
    public $icon         = 'ti-gift';
    public $css_selector = '.creatorlms-offer-btn';

    public function get_label() {
        return __( 'Offer Button', 'ohmylms' );
    }

    public function set_controls() {
        // Content controls
        $this->controls['action'] = [
            'tab'     => 'content',
            'label'   => __( 'Action', 'ohmylms' ),
            'type'    => 'select',
            'options' => [
                'accept'  => __( 'Accept Offer', 'ohmylms' ),
                'decline' => __( 'Decline Offer', 'ohmylms' ),
            ],
            'default' => 'accept',
        ];

        $this->controls['text'] = [
            'tab'     => 'content',
            'label'   => __( 'Button Text', 'ohmylms' ),
            'type'    => 'text',
            'default' => __( 'Accept Offer', 'ohmylms' ),
        ];

        // Style controls
        $this->controls['background'] = [
            'tab'     => 'style',
            'label'   => __( 'Background Color', 'ohmylms' ),
            'type'    => 'color',
            'default' => '#6e42d3',
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'background-color']],
        ];

        $this->controls['color'] = [
            'tab'     => 'style',
            'label'   => __( 'Text Color', 'ohmylms' ),
            'type'    => 'color',
            'default' => '#fff',
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'color']],
        ];

        $this->controls['border'] = [
            'tab'     => 'style',
            'label'   => __( 'Border', 'ohmylms' ),
            'type'    => 'text',
            'default' => '',
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'border']],
        ];

        $this->controls['padding'] = [
            'tab'     => 'style',
            'label'   => __( 'Padding', 'ohmylms' ),
            'type'    => 'dimensions',
            'units'   => ['px','em','%'],
            'default' => '12px 24px',
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'padding']],
        ];

        $this->controls['margin'] = [
            'tab'     => 'style',
            'label'   => __( 'Margin', 'ohmylms' ),
            'type'    => 'dimensions',
            'units'   => ['px','em','%'],
            'default' => '',
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'margin']],
        ];

        $this->controls['font_size'] = [
            'tab'     => 'style',
            'label'   => __( 'Font Size', 'ohmylms' ),
            'type'    => 'text',
            'default' => '16px',
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'font-size']],
        ];

        $this->controls['font_weight'] = [
            'tab'     => 'style',
            'label'   => __( 'Font Weight', 'ohmylms' ),
            'type'    => 'text',
            'default' => '',
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'font-weight']],
        ];

        $this->controls['border_radius'] = [
            'tab'     => 'style',
            'label'   => __( 'Border Radius', 'ohmylms' ),
            'type'    => 'text',
            'default' => '4px',
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'border-radius']],
        ];

        $this->controls['width'] = [
            'tab'     => 'style',
            'label'   => __( 'Width', 'ohmylms' ),
            'type'    => 'text',
            'default' => '',
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'width']],
        ];

        $this->controls['height'] = [
            'tab'     => 'style',
            'label'   => __( 'Height', 'ohmylms' ),
            'type'    => 'text',
            'default' => '',
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'height']],
        ];

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
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'display']],
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
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'vertical-align']],
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
            'css'     => [['selector' => '{{WRAPPER}} .creator-lms-offer-btn','property' => 'box-sizing']],
        ];

        // Advanced controls
        $this->controls['id'] = [
            'tab'     => 'advanced',
            'label'   => __( 'CSS ID', 'ohmylms' ),
            'type'    => 'text',
            'default' => '',
        ];

        $this->controls['class'] = [
            'tab'     => 'advanced',
            'label'   => __( 'Additional CSS Class', 'ohmylms' ),
            'type'    => 'text',
            'default' => '',
        ];

        $this->controls['style'] = [
            'tab'     => 'advanced',
            'label'   => __( 'Inline CSS Styles', 'ohmylms' ),
            'type'    => 'text',
            'default' => '',
        ];
    }

    public function render() {
		$defaults = [
			'action'         => 'accept',
			'text'           => __( 'Accept Offer', 'ohmylms' ),
			'background'     => '#6e42d3',
			'color'          => '#fff',
			'padding'        => '12px 24px',
			'border_radius'  => '4px',
			'font_size'      => '16px',
			'text_decoration'=> 'none',
			'line_height'    => '1',
			'width'          => 'auto',
			'max_width'      => '100%',
			'min_width'      => '100px',
			'height'         => 'auto',
			'display'        => 'inline-block',
			'vertical_align' => 'baseline',
			'margin'         => '0px',
			'box_sizing'     => 'border-box',
			'class'          => '.creatorlms-offer-button',
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

		// Generate offer action URL (similar to shortcode logic)
		$action_url = $this->get_offer_action_url($settings['action']);

		// Build button classes
		$button_classes = array( 'creator-lms-offer-btn' );
		$button_classes[] = 'creator-lms-offer-btn--' . sanitize_html_class( $settings['action'] );
		
		if ( ! empty( $settings['class'] ) ) {
			$custom_classes = explode( ' ', $settings['class'] );
			$button_classes = array_merge( $button_classes, array_map( 'sanitize_html_class', $custom_classes ) );
		}

		// Build inline styles (like Buy Now Element)
		$style = sprintf(
			'background:%s;color:%s;padding:%s;border-radius:%s;font-size:%s;border:none;cursor:pointer;text-decoration:%s;line-height:%s;width:%s;max-width:%s;min-width:%s;height:%s;display:%s;vertical-align:%s;margin:%s;box-sizing:%s;',
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
		);

		// Add border if set
		if ( ! empty($settings['border']) ) {
			$style .= 'border:' . esc_attr($settings['border']) . ';';
		}

		$this->set_attribute('_root', 'class', 'creatorlms-offer-button ' . esc_attr($settings['class']));
		echo '<div '.$this->render_attributes('_root').'>';
		
		printf(
			'<a href="%s" class="%s" style="%s" data-action="%s">%s</a>',
			esc_url($action_url),
			esc_attr(implode(' ', $button_classes)),
			esc_attr($style),
			esc_attr($settings['action']),
			esc_html($settings['text'])
		);

		echo '</div>';
	}

	/**
	 * Generate offer action URL
	 */
	private function get_offer_action_url($action) {
		// Get funnel session data
		if ( class_exists('\OMLMS\Integrations\Funnel\Includes\FunnelManager') ) {
			$funnel_data = \OMLMS\Integrations\Funnel\Includes\FunnelManager::get_funnel_session();
			$order_id = $funnel_data['order_id'] ?? '';
			$current_step = $funnel_data['current_step'] ?? '';
			
			// Also check URL parameters
			if ( empty( $order_id ) && isset( $_GET['order_id'] ) ) {
				$order_id = absint( $_GET['order_id'] );
			}
			
			if ( empty( $current_step ) ) {
				$current_step = get_query_var( 'step' );
				if ( empty( $current_step ) && isset( $_GET['step'] ) ) {
					$current_step = sanitize_text_field( $_GET['step'] );
				}
			}
			
			if ( ! empty( $current_step ) && strpos( $current_step, 'step_' ) !== 0 ) {
				$current_step = 'step_' . $current_step;
			}

			if ( $order_id && $current_step ) {
				$step_number = strpos( $current_step, 'step_' ) === 0 ? substr( $current_step, 5 ) : $current_step;
				$base_url = home_url( sprintf( '/post-checkout-funnel/order/%d/step/%s', $order_id, $step_number ) );
				$action_url = add_query_arg( 'action', $action, $base_url );
				
				// Add nonce
				$nonce = $_GET['funnel_nonce'] ?? wp_create_nonce( 'funnel_action_' . $order_id . '_' . $current_step );
				return add_query_arg( '_wpnonce', $nonce, $action_url );
			}
		}
		
		return '#';
    }

    public function enqueue_scripts() {
        wp_enqueue_script( 'omlms-frontend' );
        wp_enqueue_script( 'omlms-add-to-cart' );
    }
}
