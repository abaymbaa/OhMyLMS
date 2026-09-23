<?php
/**
 * Blocks Manager
 *
 * Manages all Gutenberg blocks for CreatorLMS
 *
 * @package OMLMS\Blocks
 * @since 1.0.0
 */

namespace OMLMS\Blocks;

defined( 'ABSPATH' ) || exit;

/**
 * BlocksManager class
 */
class BlocksManager {

	/**
	 * Instance of this class
	 *
	 * @var BlocksManager
	 */
	private static $instance = null;

	/**
	 * Get instance
	 *
	 * @return BlocksManager
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 */
	private function __construct() {
		$this->init();
	}

	/**
	 * Initialize the Blocks integration
	 *
	 * @return void
	 */
	private function init() {
		// Hook into init to register blocks
		add_action( 'init', array( $this, 'register_blocks' ) );
		
		// Enqueue block editor assets
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ) );
		
		// Enqueue frontend block assets
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_frontend_assets' ) );
	}

	/**
	 * Register all blocks
	 *
	 * @return void
	 */
	public function register_blocks() {
		// Include block files
		$this->include_blocks();

		// Register block category
		add_filter( 'block_categories_all', array( $this, 'register_block_category' ) );

		// Register individual blocks
		   new CheckoutBlock();
		   new DashboardGutenbergBlock();
		   new ProfileGutenbergBlock();
		   new MyCoursesGutenbergBlock();
		   new \OMLMS\Blocks\Blocks\CourseListBlock();
		   \OMLMS\Blocks\Blocks\BuyNowBlock::register();
		   if ( class_exists( '\OMLMS\Blocks\Blocks\OfferButtonBlock' ) ) {
			   \OMLMS\Blocks\Blocks\OfferButtonBlock::register();
		   }

		   // Pro feature: only register when Pro is active and its license is valid.
		   if ( creator_lms_is_pro_license() ) {
			   new \OMLMS\Blocks\Blocks\MembershipListBlock();
		   }
	}

	/**
	 * Include block files
	 *
	 * @return void
	 */
	   private function include_blocks() {
		   require_once CREATOR_LMS_PATH . '/includes/Blocks/CheckoutBlock.php';
		   require_once CREATOR_LMS_PATH . '/includes/Blocks/Blocks/CourseListBlock.php';
		   require_once CREATOR_LMS_PATH . '/includes/Blocks/Blocks/BuyNowBlock.php';
		   require_once CREATOR_LMS_PATH . '/includes/Blocks/Blocks/OfferButtonBlock.php';
		   require_once CREATOR_LMS_PATH . '/includes/Blocks/DashboardGutenbergBlock.php';
		   require_once CREATOR_LMS_PATH . '/includes/Blocks/ProfileGutenbergBlock.php';
		   require_once CREATOR_LMS_PATH . '/includes/Blocks/MyCoursesGutenbergBlock.php';
		   require_once CREATOR_LMS_PATH . '/includes/Blocks/Blocks/MembershipListBlock.php';
	   }

	/**
	 * Register CreatorLMS block category
	 *
	 * @param array $categories Existing block categories
	 * @return array Updated block categories
	 */
	public function register_block_category( $categories ) {
		// Add CreatorLMS category at the beginning
		array_unshift( $categories, array(
			'slug'  => 'creator-lms',
			'title' => esc_html__( 'CreatorLMS', 'ohmylms' ),
			'icon'  => 'graduation-cap',
		) );

		return $categories;
	}

	/**
	 * Enqueue block editor assets
	 *
	 * @return void
	 */
	public function enqueue_block_editor_assets() {
		// Enqueue main blocks script
		wp_enqueue_script(
			'creator-lms-blocks-editor',
			CREATOR_LMS_URL . '/assets/js/blocks.js',
			array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ),
			CREATOR_LMS_VERSION,
			true
		);

		// Enqueue individual block scripts
		$this->enqueue_individual_block_scripts();
		
		// Enqueue slick.js for carousel functionality in editor
		wp_enqueue_script(
			'omlms-slick-editor',
			CREATOR_LMS_URL . '/assets/dist/frontend/slick.js',
			array( 'jquery' ),
			'1.8.1',
			true
		);
		
		// Enqueue frontend script for slick initialization in editor
		wp_enqueue_script(
			'omlms-frontend-editor',
			CREATOR_LMS_URL . '/assets/dist/frontend/creator-lms.js',
			array( 'jquery', 'omlms-slick-editor' ),
			CREATOR_LMS_VERSION,
			true
		);

		// Enqueue block editor styles
		wp_enqueue_style(
			'creator-lms-blocks-editor',
			CREATOR_LMS_URL . '/assets/blocks/css/blocks-editor.css',
			array( 'wp-edit-blocks' ),
			CREATOR_LMS_VERSION
		);

        // Enqueue frontend styles
		wp_enqueue_style(
			'creator-lms-blocks-frontend',
			CREATOR_LMS_URL . '/assets/blocks/css/blocks-frontend.css',
			array(),
			CREATOR_LMS_VERSION
		);
		
		// Enqueue main CreatorLMS styles in editor for ServerSideRender checkout styling
		wp_enqueue_style(
			'creator-lms-main-editor',
			CREATOR_LMS_URL . '/assets/css/style.css',
			array(),
			CREATOR_LMS_VERSION
		);
		
	}

	/**
	 * Enqueue individual block scripts
	 *
	 * @return void
	 */
	private function enqueue_individual_block_scripts() {
		$suffix = $this->is_development_mode() ? '' : '.min';
		
		// Checkout block
		wp_enqueue_script(
			'creator-lms-checkout-block',
			CREATOR_LMS_URL . "/assets/blocks/js/checkout{$suffix}.js",
			array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ),
			CREATOR_LMS_VERSION,
			true
		);

		// Dashboard block
		wp_enqueue_script(
			'creator-lms-dashboard-block',
			CREATOR_LMS_URL . "/assets/blocks/js/dashboard{$suffix}.js",
			array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-server-side-render' ),
			CREATOR_LMS_VERSION,
			true
		);

		// Profile block
		wp_enqueue_script(
			'creator-lms-profile-block',
			CREATOR_LMS_URL . "/assets/blocks/js/profile{$suffix}.js",
			array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-server-side-render' ),
			CREATOR_LMS_VERSION,
			true
		);

		// My Courses block
		wp_enqueue_script(
			'creator-lms-my-courses-block',
			CREATOR_LMS_URL . "/assets/blocks/js/my-courses{$suffix}.js",
			array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-server-side-render' ),
			CREATOR_LMS_VERSION,
			true
		);

		// Course List block
		wp_enqueue_script(
			'creator-lms-course-list-block',
			CREATOR_LMS_URL . "/assets/blocks/js/course-list{$suffix}.js",
			array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-server-side-render' ),
			CREATOR_LMS_VERSION,
			true
		);

		// Localize course list block script
		wp_localize_script(
			'creator-lms-course-list-block',
			'creator_lms_blocks',
			array(
				'is_pro_active' => creator_lms_is_pro_license()
			)
		);

		// Buy Now block
		wp_enqueue_script(
			'creator-lms-buy-now-block',
			CREATOR_LMS_URL . "/assets/blocks/js/buy-now{$suffix}.js",
			array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ),
			CREATOR_LMS_VERSION,
			true
		);

		// Offer Button block
		wp_enqueue_script(
			'creator-lms-offer-button-block',
			CREATOR_LMS_URL . "/assets/blocks/js/offer-button{$suffix}.js",
			array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ),
			CREATOR_LMS_VERSION,
			true
		);

		// Membership List block (pro feature; script is only useful if the block was registered)
		if ( creator_lms_is_pro_license() ) {
			wp_enqueue_script(
				'creator-lms-membership-list-block',
				CREATOR_LMS_URL . "/assets/blocks/js/membership-list{$suffix}.js",
				array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-server-side-render' ),
				CREATOR_LMS_VERSION,
				true
			);
		}

		// Add more blocks here as needed
	}
	
	/**
	 * Check if development mode is enabled
	 *
	 * @return bool
	 */
	private function is_development_mode() {
		return defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG;
	}

	/**
	 * Enqueue frontend block assets
	 *
	 * @return void
	 */
	public function enqueue_frontend_assets() {
		$creator_lms_blocks = array(
			'creator-lms/dashboard',
			'creator-lms/my-courses',
			'creator-lms/checkout',
			'creator-lms/profile',
			'creator-lms/course-list',
			'creator-lms/buy-now',
			'creator-lms/offer-button',
			'creator-lms/membership-list',
		);

		$has_creator_lms_block = false;
		foreach ( $creator_lms_blocks as $block_name ) {
			if ( has_block( $block_name ) ) {
				$has_creator_lms_block = true;
				break;
			}
		}

		if ( ! $has_creator_lms_block ) {
			return;
		}

		// Enqueue frontend styles
		wp_enqueue_style(
			'creator-lms-blocks-frontend',
			CREATOR_LMS_URL . '/assets/blocks/css/blocks-frontend.css',
			array(),
			CREATOR_LMS_VERSION
		);

		// Enqueue frontend script
		wp_enqueue_script(
			'creator-lms-blocks-frontend',
			CREATOR_LMS_URL . '/assets/blocks/js/blocks-frontend.js',
			array( 'jquery' ),
			CREATOR_LMS_VERSION,
			true
		);
	}
}
