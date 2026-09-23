<?php

use OMLMS\CreatorEndpoint;
use OMLMS\Hooks\AssignmentHookHandler;
use OMLMS\Hooks\CommonHook;
use OMLMS\Hooks\CourseHookHandler;
use OMLMS\Hooks\ChapterHookHandler;
use OMLMS\Hooks\LessonHookHandler;
use OMLMS\Hooks\OrderHooks;
use OMLMS\Hooks\QuestionHookHandler;
use OMLMS\Hooks\QuizHookHandler;
use OMLMS\Elementor\ElementorManager;
use OMLMS\Blocks\BlocksManager;
use OMLMS\WPBakery\WPBakeryManager;

final class OMLMS {
 public $session_factory;

	/**
	 * @var $rest_api OMLMS\Rest\Api
	 */
	public $rest_api;


	/**
	 * @var $admin OMLMS\Admin\Admin
	 */
	public \OMLMS\Admin\Admin $admin;

	/**
	 * @var $admin_notices \OMLMS\Admin\AdminNotices
	 */
	public $admin_notices;

	/**
	 * Initialize Gutenberg blocks
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function init_blocks() {
		// Include the Blocks Manager file
		if ( file_exists( CREATOR_LMS_PATH . '/includes/Blocks/BlocksManager.php' ) ) {
			require_once CREATOR_LMS_PATH . '/includes/Blocks/BlocksManager.php';
			BlocksManager::instance();
		}
	}

	/**
	 * @var $admin_menu \OMLMS\Admin\Menu
	 */
	public $admin_menu;


	/**
	 * @var $order_loader \OMLMS\Order\OrderLoader
	 */
	public $order_loader;


	/**
	 * @var $session \OMLMS\Order\SessionHandler
	 */
	public $session;


	/**
	 * @var \OMLMS\Factory\CourseFactory
	 */
	public $course_factory;

	/**
	 * @var \OMLMS\Factory\ChapterFactory
	 */
	public $chapter_factory;

	/**
	 * @var \OMLMS\Factory\StudentFactory
	 */
	public $student_factory;


	/**
	 * @var \OMLMS\Factory\LessonFactory
	 */
	public $lesson_factory;


	/**
	 * @var \OMLMS\Factory\LessonFactory
	 */
	public $question_factory;


	/**
	 * @var \OMLMS\Factory\QuizFactory
	 */
	public $quiz_factory;

	/**
	 * @var \OMLMS\Factory\MembershipFactory
	 */
	public $membership_factory;

	/**
	 * @var \OMLMS\Factory\AssignmentFactory
	 */
	public $assignment_factory;

	/**
	 * @var \OMLMS\Factory\CertificateFactory
	 */
	public $certificate_factory;

	/**
	 * @var \OMLMS\Factory\AttemptFactory
	 */
	public $attempt_factory;


	/**
	 * @var \OMLMS\Shortcodes\Shortcodes
	 */
	public $shortcode;


	/**
	 * @var \OMLMS\Admin\Ajax
	 */
	public $admin_ajax;


	/**
	 * @var \OMLMS\Admin\Pages\AdminSettings
	 */
	public $settings_pages;


	/**
	 * Holds the singleton instance of this class.
	 *
	 * @var CreatorLms
	 */
	private static $instance;

	/**
	 * @var \OMLMS\Hooks\CourseHookHandler
	 */
	private $course_hook_handler;


	/**
	 * @var \OMLMS\Hooks\ChapterHookHandler
	 */
	private $chapter_hook_handler;

	/**
	 * @var \OMLMS\Hooks\LessonHookHandler
	 */
	private $lesson_hook_handler;

	/**
	 * @var \OMLMS\Hooks\OrderHooks
	 */
	private $order_hook_handler;

	/**
	 * @var \OMLMS\Hooks\QuestionHookHandler
	 */
	private $question_hook_handler;

	/**
	 * @var \OMLMS\Hooks\QuizHookHandler
	 */
	private $quiz_hook_handler;

	/**
	 * @var \OMLMS\CreatorEndpoint
	 */
	public $omlms_endpoint;

	/**
	 * @var \OMLMS\CourseComment
	 */
	private $course_comment;
	/**
	 * @var \OMLMS\Hooks\CommonHook
	 */
	private $common_hook;
	/**
	 * @var \OMLMS\Hooks\AssignmentHookHandler
	 */
	private $assignment_hook_handler;

	/**
	 * @var \OMLMS\RewriteRules
	 */
	private $rewrite_rules;


	/**
	 * @var \OMLMS\Emails\Emails
	 */
	public $emails;

	/**
	 * @var \OMLMS\DripContent
	 */
	public $drip_content;

	/**
	 * @var \OMLMS\WebhookManager
	 */
	public $webhook_manager;

	/**
	 * Plugin version.
	 *
	 * @var string
	 */
	const VERSION = '1.2.20';

	/**
	 * Plugin slug.
	 *
	 * @var string
	 *
	 * @since 1.0.0
	 */
	const SLUG = 'creator-lms';



	/**
	 * Singleton instance.
	 *
	 * @return CreatorLms
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}



	/**
	 * Constructor for the PluginName class.
	 *
	 * Sets up all the appropriate hooks and actions within our plugin.
	 *
	 * @since 1.0.0
	 */
	private function __construct() {
		$this->includes();
		$this->init_plugin();
        $this->register_bundled_features();
	}

	public function maybe_run_setup_wizard() {
		if ( get_transient( '_omlms_activation_redirect' ) ) {
			add_action( 'admin_init', array( $this, 'admin_redirects' ) );
		}
	}


	/**
	 * Handle redirects to setup/welcome page after install and updates.
	 *
	 * For setup wizard, transient must be present, the user must have access rights, and we must ignore the network/bulk plugin updaters.
	 */
	public function admin_redirects() {
		$do_redirect = true;
		// On these pages, or during these events, postpone the redirect.
		if ( wp_doing_ajax() || is_network_admin() || ! current_user_can( 'manage_options' ) ) {
			$do_redirect = false;
		}

		if ( $do_redirect ) {
			delete_transient( '_omlms_activation_redirect' );
			$url = admin_url( 'admin.php?page=creator-lms#/setup-wizard' );
			wp_safe_redirect( wp_sanitize_redirect( esc_url_raw( $url ) ) );
			exit;
		}
	}


	/**
	 * Auto-load in-accessible properties on demand.
	 *
	 * @param mixed $key Key name.
	 * @return mixed
	 */
	public function __get( $key ) {
		if ( in_array( $key, array( 'payment_gateways' ), true ) ) {
			return \CodeRex\Ecommerce\ecommerce()->$key();
			// return $this->$key();
		}
	}


	/**
	 * Include required files.
	 *
	 * @since 1.0.0
	 */
	private function includes(): void {

		if ( $this->is_request( 'admin' ) ) {
			include_once plugin_dir_path( __FILE__ ) . 'Admin/omlms-admin-functions.php';
		}

		/**
		 * Utility functions
		 */
		include_once plugin_dir_path( __FILE__ ) . 'Hooks/template-hooks.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/core-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/course-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/lesson-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/quiz-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/chapter-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/notice-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/template-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/page-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/formatting-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/conditional-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/question-function.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/term-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/profile-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/content-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/certificate-function.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/attempt-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/student-function.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/time-functions.php';
		include_once plugin_dir_path( __FILE__ ) . 'Utility/update-functions.php';

		/**
		 * Core classes.
		 */
		include_once plugin_dir_path( __FILE__ ) . 'Ajax.php';
		include_once plugin_dir_path( __FILE__ ) . 'TemplateLoader.php';
		include_once plugin_dir_path( __FILE__ ) . 'Assets/FrontendAssets.php';
		include_once plugin_dir_path( __FILE__ ) . 'Assets/PoweredByBadge.php';
		include_once plugin_dir_path( __FILE__ ) . 'Assets/AdminAssets.php';

		/**
		 * CPT registration
		 */
		require_once plugin_dir_path( __FILE__ ) . 'PostTypes/CoursePostType.php';
		require_once plugin_dir_path( __FILE__ ) . 'PostTypes/MembershipPostType.php';

		$this->include_theme_support();
	}


	/**
	 * Activating the plugin.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function activate() {
		\OMLMS\Install::install();
	}

	/**
	 * Handles plugin deactivation.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function deactivate() {
		/**
		 * Fires when the plugin is deactivated.
		 *
		 * @since 1.1.10
		 */
		do_action( 'creatorlms_plugin_deactivated' );
	}


	/**
	 * Load the plugin after all plugins are loaded.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function init_plugin() {
		$this->define_constants();

		\OMLMS\Install::init();

		add_action( 'init', array( $this, 'add_image_sizes' ) );

		// Localize our plugin
		add_action( 'init', array( $this, 'localization_setup' ) );

		// Add the plugin page links
		add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( $this, 'plugin_action_links' ) );

		add_action( 'plugins_loaded', array( $this, 'on_plugins_loaded' ) );
		add_action( 'init', array( $this, 'init' ) );

		add_action( 'init', array( '\OMLMS\Shortcodes\Shortcodes', 'init' ) );

		// Initialize Elementor widgets
		add_action( 'plugins_loaded', array( $this, 'init_elementor' ) );

		// Initialize Bricks elements
		add_action( 'plugins_loaded', array( $this, 'init_bricks' ) );

		// Initialize WPBakery Page Builder elements
		add_action( 'plugins_loaded', array( $this, 'init_wpbakery' ) );

		// Initialize Gutenberg blocks
		add_action( 'plugins_loaded', array( $this, 'init_blocks' ) );

		// === register post types ===//
		$sectionCPT  = new OMLMS\PostTypes\SectionPostType();
		$lessonCPT   = new OMLMS\PostTypes\LessonPostType();
		$lessonCPT   = new OMLMS\PostTypes\ChapterPostType();
		$quizCPT     = new OMLMS\PostTypes\QuizPostType();
		$questionCPT = new OMLMS\PostTypes\QuestionPostType();
		$assignment  = new OMLMS\PostTypes\AssignmentPostType();
		$certificate = new OMLMS\PostTypes\CertificatePostType();

		// load the helper packages
		\OMLMS\Packages::init();

		// load form handler
		\OMLMS\FormHandler::init();

		/**
		 * Fires after the plugin is loaded.
		 *
		 * @since 1.0.0
		 */
		do_action( 'creator_lms_init' );
	}

	/**
	 * Define the constants.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function define_constants() {
		define( 'CREATOR_LMS_SLUG', self::SLUG );
		define( 'CREATOR_LMS_FILE', OMLMS_FILE );
		define( 'CREATOR_LMS_PATH', dirname( CREATOR_LMS_FILE ) );
		define( 'CREATOR_LMS_INCLUDES', CREATOR_LMS_PATH . '/includes' );
		define( 'CREATOR_LMS_TEMPLATE_PATH', CREATOR_LMS_PATH . '/views' );
		define( 'CREATOR_LMS_URL', plugins_url( '', CREATOR_LMS_FILE ) );
		define( 'CREATOR_LMS_ASSETS_URL', CREATOR_LMS_URL . '/assets' );
		define( 'CREATOR_LMS_ASSETS_DIR', CREATOR_LMS_DIR . '/assets' );
		define( 'CREATOR_LMS_PRODUCTION', 'yes' );
		define( 'CREATOR_LMS_SESSION_CACHE_GROUP', 'creator_lms_session_id' );
		define( 'CREATOR_LMS_COURSE_CPT', 'omlms-course' );
		define( 'CREATOR_LMS_CHAPTER_CPT', 'omlms-chapter' );
		define( 'CREATOR_LMS_CERTIFICATE_CPT', 'omlms-certificate' );
		define( 'CREATOR_LMS_LESSON_CPT', 'omlms-lesson' );
		define( 'CREATOR_LMS_QUIZ_CPT', 'omlms-quiz' );
		define( 'CREATOR_LMS_QUESTION_CPT', 'omlms-question' );
		define( 'CREATOR_LMS_MEMBERSHIP_CPT', 'omlms-membership' );
		define( 'CREATOR_LMS_ASSIGNMENT_CPT', 'omlms-assignment' );
		define( 'CREATOR_LMS_CHAPTER_RELATIONSHIP', 'omlms_chapter_relationship' );
		define( 'CREATOR_LMS_CONTENT_RELATIONSHIP', 'omlms_content_relationship' );

		define( 'CREATOR_LMS_QUIZ_QUESTION_RELATIONSHIP', 'omlms_quiz_questions_relationship' );
	}

	/**
	 * Init OhMyLMS when WordPress is loaded
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function init() {

		/**
		 * Action triggered before OhMyLMS initialization begins.
		 *
		 * @since 1.0.0
		 */
		do_action( 'creator_lms_before_init' );

		if ( $this->is_request( 'admin' ) ) {
			$this->admin          = new \OMLMS\Admin\Admin();
			$this->admin_notices  = new \OMLMS\Admin\AdminNotices();
			$this->settings_pages = new \OMLMS\Admin\Pages\AdminSettings();
			$this->settings_pages->init_settings_pages();
			$this->admin_menu = new OMLMS\Admin\Menu();
			$this->admin_ajax = new \OMLMS\Admin\Ajax();
			
			// Initialize promotional banner (customize dates for your promotional period)
			// Vendor promotions are not part of this distribution.
		}

		$this->rest_api            	= new OMLMS\Rest\Api();
		new \OMLMS\Integrations\GoogleSignIn\GoogleSignIn();
		$this->course_factory      	= new \OMLMS\Factory\CourseFactory();
		$this->lesson_factory      	= new \OMLMS\Factory\LessonFactory();
		$this->chapter_factory     	= new \OMLMS\Factory\ChapterFactory();
		$this->quiz_factory        	= new \OMLMS\Factory\QuizFactory();
		$this->question_factory    	= new \OMLMS\Factory\QuestionFactory();
		$this->certificate_factory 	= new \OMLMS\Factory\CertificateFactory();
		$this->student_factory	   	= new \OMLMS\Factory\StudentFactory();
		$this->attempt_factory		= new \OMLMS\Factory\AttemptFactory();
		$this->membership_factory = new \OMLMS\Factory\MembershipFactory();
        $this->assignment_factory = new \OMLMS\Factory\AssignmentFactory();
        $this->session_factory = new \OMLMS\Factory\SessionFactory();
		$this->rewrite_rules   		= new \OMLMS\RewriteRules();
		$this->shortcode 			= new OMLMS\Shortcodes\Shortcodes();
		$this->omlms_endpoint 		= new CreatorEndpoint();
		$this->course_comment 		= new \OMLMS\CourseComment();
		$this->emails 				= new \OMLMS\Emails\Emails();
		$this->drip_content 		= new \OMLMS\DripContent();
		
		// Initialize webhook manager only if webhooks integration is enabled
		if ( apply_filters( 'creatorlms_should_enable_webhooks', false ) && creator_lms_is_pro_license() ) {
			$this->webhook_manager = new \OMLMS\WebhookManager();
		}

		$this->set_custom_image_size();
		$this->emails->register_email();
		/**
		 * Action triggered after OhMyLMS initialize.
		 *
		 * @since 1.0.0
		 */
		do_action( 'creator_lms_after_init' );

		$this->maybe_run_setup_wizard();
	}


	public function on_plugins_loaded() {

		$this->course_hook_handler = new CourseHookHandler();
		$this->course_hook_handler->register_hooks();

		$this->chapter_hook_handler = new ChapterHookHandler();
		$this->chapter_hook_handler->register_hooks();

		$this->lesson_hook_handler = new LessonHookHandler();
		$this->lesson_hook_handler->register_hooks();

		$this->order_hook_handler = new OrderHooks();
		$this->order_hook_handler->register_hooks();

		$this->question_hook_handler = new QuestionHookHandler();
		$this->question_hook_handler->register_hooks();

		$this->quiz_hook_handler = new QuizHookHandler();
		$this->quiz_hook_handler->register_hooks();

		$this->assignment_hook_handler = new AssignmentHookHandler();
		$this->assignment_hook_handler->register_hooks();

		$this->common_hook = new CommonHook();
		$this->common_hook->register_hooks();
		/**
		 * Signal that OhMyLMS is loaded
		 *
		 * @since 1.0.0
		 */
		do_action( 'creator_lms_loaded' );
	}



	/**
	 * Initialize plugin for localization.
	 *
	 * @uses load_plugin_textdomain()
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function localization_setup() {
		load_plugin_textdomain( 'ohmylms', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

		// Load the React-pages translations.
		if ( is_admin() ) {
			wp_set_script_translations( 'creator-lms-app', 'ohmylms', OMLMS_FILE . 'languages/' );
		}
	}

	/**
	 * What type of request is this.
	 *
	 * @since 1.0.0
	 *
	 * @param string $type admin, ajax, cron or frontend
	 *
	 * @return bool
	 */
	private function is_request( $type ) {
		switch ( $type ) {
			case 'admin':
				return is_admin();

			case 'ajax':
				return defined( 'DOING_AJAX' );

			case 'rest':
				return defined( 'REST_REQUEST' );

			case 'cron':
				return defined( 'DOING_CRON' );

			case 'frontend':
				return ( ! is_admin() || defined( 'DOING_AJAX' ) ) && ! defined( 'DOING_CRON' );
		}
	}

	/**
	 * Plugin action links
	 *
	 * @param array $links
	 *
	 * @since 0.2.0
	 *
	 * @return array
	 */
	public function plugin_action_links( $links ) {
		$links[] = '<a href="' . admin_url( 'admin.php?page=plugin_name#/settings' ) . '">' . __( 'Settings', 'ohmylms' ) . '</a>';
		$links[] = '<a href="#" target="_blank">' . __( 'Documentation', 'ohmylms' ) . '</a>';

		return $links;
	}


	/**
	 * Init order module
	 *
	 * @since 1.0.0
	 */
	public function initialize_order_module() {
		if ( is_null( $this->order_loader ) || ! $this->order_loader instanceof OMLMS\Order\OrderLoader ) {
			$this->order_loader = new OMLMS\Order\OrderLoader();
		}
	}

	/**
	 * Set custom image for creator LMS.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function set_custom_image_size() {
		if ( function_exists( 'add_image_size' ) ) {
			add_image_size( 'course-listing-thumb', 130, 80 );
		}
	}

	/**
	 * Add custom image sizes for OhMyLMS.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function add_image_sizes() {
		add_image_size( 'creator_lms_thumbnail', 282, 160, true );
		add_image_size( 'creator_lms_single', 720, 405, true );
	}

	/**
	 * Initialize Elementor integration
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function init_elementor() {
		// Include the Elementor Manager file
		if ( file_exists( CREATOR_LMS_PATH . '/includes/Elementor/ElementorManager.php' ) ) {
			require_once CREATOR_LMS_PATH . '/includes/Elementor/ElementorManager.php';
			ElementorManager::instance();
		}
	}

	/**
	 * Initialize Bricks integration
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function init_bricks() {
		// Include the Bricks Manager file
		if ( file_exists( CREATOR_LMS_PATH . '/includes/Bricks/BricksManager.php' ) ) {
			require_once CREATOR_LMS_PATH . '/includes/Bricks/BricksManager.php';
			\OMLMS\Bricks\BricksManager::instance();
		}
	}

	/**
	 * Initialize WPBakery Page Builder integration
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function init_wpbakery() {
		// Include the WPBakery Manager file
		if ( defined( 'WPB_VC_VERSION' ) && file_exists( CREATOR_LMS_PATH . '/includes/WPBakery/WPBakeryManager.php' ) ) {
			require_once CREATOR_LMS_PATH . '/includes/WPBakery/WPBakeryManager.php';
			\OMLMS\WPBakery\WPBakeryManager::instance();
		}
	}

	/**
	 * Include theme support if available.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function include_theme_support() {
		if ( if_theme_support_available() ) {
			switch ( get_template() ) {
				case 'twentytwentyone':
					$theme_support = new \OMLMS\ThemeSupport\TwentyTwentyOne();
					$theme_support->init();
					break;
				case 'twentytwentytwo':
					$theme_support = new \OMLMS\ThemeSupport\TwentyTwentyTwo();
					$theme_support->init();
					break;
				case 'twentytwentythree':
					$theme_support = new \OMLMS\ThemeSupport\TwentyTwentyThree();
					$theme_support->init();
					break;
				case 'twentytwentyfour':
					$theme_support = new \OMLMS\ThemeSupport\TwentyTwentyFour();
					$theme_support->init();
					break;
				case 'twentytwentyfive':
					$theme_support = new \OMLMS\ThemeSupport\TwentyTwentyFive();
					$theme_support->init();
					break;
				case 'astra':
					$theme_support = new \OMLMS\ThemeSupport\Astra();
					$theme_support->init();
					break;
				case 'Avada':
					$theme_support = new \OMLMS\ThemeSupport\Avada();
					$theme_support->init();
					break;
				case 'blocksy':
					$theme_support = new \OMLMS\ThemeSupport\Blocksy();
					$theme_support->init();
					break;
				case 'bricks':
					$theme_support = new \OMLMS\ThemeSupport\Bricks();
					$theme_support->init();
					break;
				case 'colibri-wp':
					$theme_support = new \OMLMS\ThemeSupport\ColibriWP();
					$theme_support->init();
					break;
				case 'Divi':
					$theme_support = new \OMLMS\ThemeSupport\Divi();
					$theme_support->init();
					break;
				case 'generatepress':
					$theme_support = new \OMLMS\ThemeSupport\GeneratePress();
					$theme_support->init();
					break;
				case 'kadence':
					$theme_support = new \OMLMS\ThemeSupport\Kadence();
					$theme_support->init();
					break;
				case 'oceanwp':
					$theme_support = new \OMLMS\ThemeSupport\OceanWP();
					$theme_support->init();
					break;
				case 'storefront':
					$theme_support = new \OMLMS\ThemeSupport\Storefront();
					$theme_support->init();
					break;
				case 'twentynineteen':
					$theme_support = new \OMLMS\ThemeSupport\TwentyNineteen();
					$theme_support->init();
					break;
				case 'twentyseventeen':
					$theme_support = new \OMLMS\ThemeSupport\TwentySeventeen();
					$theme_support->init();
					break;
				case 'twentysixteen':
					$theme_support = new \OMLMS\ThemeSupport\TwentySixteen();
					$theme_support->init();
					break;
				case 'twentytwenty':
					$theme_support = new \OMLMS\ThemeSupport\TwentyTwenty();
					$theme_support->init();
					break;
				case 'helloelementor':
					$theme_support = new \OMLMS\ThemeSupport\HelloElementor();
					$theme_support->init();
					break;
				case 'hestia':
					$theme_support = new \OMLMS\ThemeSupport\Hestia();
					$theme_support->init();
					break;
				case 'thrive-theme':
					$theme_support = new \OMLMS\ThemeSupport\ThriveTheme();
					$theme_support->init();
					break;
				case 'woostify':
					$theme_support = new \OMLMS\ThemeSupport\Woostify();
					$theme_support->init();
					break;
				case 'betheme':
					$theme_support = new \OMLMS\ThemeSupport\BeTheme();
					$theme_support->init();
					break;
				case 'flatsome':
					$theme_support = new \OMLMS\ThemeSupport\Flatsome();
					$theme_support->init();
					break;
				case 'woodmart':
					$theme_support = new \OMLMS\ThemeSupport\Woodmart();
					$theme_support->init();
					break;
				case 'dt-the7':
					$theme_support = new \OMLMS\ThemeSupport\The7();
					$theme_support->init();
					break;
			}
		}
	}


    private function register_bundled_features() {
        foreach (['membership-function','assignment-function','session-function'] as $helper) {
            require_once OHMYLMS_DIR . '/includes/Utility/' . $helper . '.php';
        }
        add_action('plugins_loaded', [$this, 'load_bundled_features'], 15);
        add_action('plugins_loaded', function () { (new \OMLMS\Gateways\GatewayAutoloader())->load_gateways(); }, 25);
        add_action('init', [$this, 'register_sessions_post_type']);
    }
    public function load_bundled_features() {
        new \OMLMS\SequentialMode();
        foreach (['CourseHook','ChapterHook','LessonHook','QuizHook','MembershipHook','SettingsHook','ApiHook','AutomationHook','LeaderboardHook','EngagementHook'] as $name) {
            $class = 'OMLMS\\Hooks\\' . $name;
            (new $class())->register_hooks();
        }
        foreach (['Cohorts','Zoom','Gamification','Funnel','ContentProtection','AIModel','Webhooks','GoogleMeet','WPFusion'] as $name) {
            $class = 'OMLMS\\Integrations\\' . $name . '\\' . $name;
            new $class();
        }
    }


public function register_sessions_post_type() {
        $labels = array(
            'name'                  => \_x('Sessions', 'Post type general name', 'ohmylms'),
            'singular_name'         => \_x('Session', 'Post type singular name', 'ohmylms'),
            'menu_name'             => \_x('Sessions', 'Admin Menu text', 'ohmylms'),
            'name_admin_bar'        => \_x('Session', 'Add New on Toolbar', 'ohmylms'),
            'add_new'               => \__('Add New', 'ohmylms'),
            'add_new_item'          => \__('Add New Session', 'ohmylms'),
            'new_item'              => \__('New Session', 'ohmylms'),
            'edit_item'             => \__('Edit Session', 'ohmylms'),
            'view_item'             => \__('View Session', 'ohmylms'),
            'all_items'             => \__('All Sessions', 'ohmylms'),
            'search_items'          => \__('Search Sessions', 'ohmylms'),
            'parent_item_colon'     => \__('Parent Sessions:', 'ohmylms'),
            'not_found'             => \__('No sessions found.', 'ohmylms'),
            'not_found_in_trash'    => \__('No sessions found in Trash.', 'ohmylms'),
        );

        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => false,
            'show_in_menu'       => false,
            'query_var'          => true,
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_position'      => null,
            'exclude_from_search' => true,
            'rewrite'             => array( 'slug' => 'omlms-session' ),
        );

        \register_post_type('omlms-session', $args);
    }
}
