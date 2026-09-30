<?php

namespace OMLMS\Blocks\Blocks;

use OMLMS\Shortcodes\ShortCodeMembershipPlan;

defined( 'ABSPATH' ) || exit;

/**
 * MembershipListBlock
 *
 * Registers the OhMyLMS Membership List Gutenberg block. Wraps
 * [creator_lms_membership_plan]. Available with all OhMyLMS blocks.
 *
 * @since 1.0.0
 */
class MembershipListBlock {

	const BLOCK_NAME = 'creator-lms/membership-list';

	public function __construct() {
		$this->register_block();
	}

	private function register_block() {
		register_block_type( self::BLOCK_NAME, array(
			'attributes' => $this->get_block_attributes(),
			'render_callback' => array( $this, 'render_block' ),
			'editor_script' => 'creator-lms-blocks-editor',
			'editor_style' => 'creator-lms-blocks-editor',
			'style' => 'creator-lms-blocks-frontend',
		) );
	}

	private function get_block_attributes() {
		return array(
			'title' => array( 'type' => 'string', 'default' => '' ),
			'align' => array( 'type' => 'string', 'default' => 'full' ),
		);
	}

	public function render_block( $attributes, $content = '' ) {
		wp_enqueue_style( 'omlms-frontend' );
		wp_enqueue_style( 'omlms-general' );

		// All plugin CSS is scoped under `.creator-lms-page` on <body>. That class is
		// normally added by creator_lms_body_class() via omlms_is_membership_plan_shortcode(),
		// but force it here too so the block renders styled even if that detection
		// path is bypassed (matches CourseListBlock::render_block()).
		add_filter( 'body_class', function( $classes ) {
			$classes[] = 'creator-lms-page';
			return $classes;
		} );

		$shortcode_atts = array(
			'title' => isset( $attributes['title'] ) ? $attributes['title'] : '',
		);

		ob_start();
		ShortCodeMembershipPlan::output( $shortcode_atts );
		return ob_get_clean();
	}
}
