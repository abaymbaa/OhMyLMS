<?php
namespace OhMyLMS\Schools;

defined( 'ABSPATH' ) || exit;

final class Views {
	public static function portal_url() {
		return add_query_arg( 'ohmylms_portal', '1', home_url( '/' ) ); }
	public static function dashboard_link() {
		if ( ! is_user_logged_in() ) {
			return; }
		echo '<p class="ohmylms-school-shortcut"><a href="' . esc_url( self::portal_url() ) . '">' . esc_html__( 'Open school assignments and family learning', 'ohmylms' ) . '</a></p>';
	}
	public static function standalone_assets() {
		// This standalone document has no theme widgets, checkout, or page-builder content.
		// WordPress resolves the school entry's dependency tree even when dependencies
		// are not explicitly queued, so core React/i18n remain available.
		// Some installed plugins print inline jQuery in wp_head/wp_footer without
		// declaring a script handle. Preserve this core dependency for those hooks.
		wp_enqueue_script( 'jquery' );
		foreach ( wp_scripts()->queue as $handle ) {
			if ( ! in_array( $handle, array( 'ohmylms-schools', 'jquery' ), true ) ) {
				wp_dequeue_script( $handle ); }
		}
		foreach ( wp_styles()->queue as $handle ) {
			if ( ! in_array( $handle, array( 'ohmylms-schools', 'ohmylms-font' ), true ) ) {
				wp_dequeue_style( $handle ); }
		}
	}
	public static function assets() {
		$asset = OHMYLMS_DIR . '/build/sdk/schools.asset.php';
		if ( ! is_file( $asset ) ) {
			return; }
		$meta = require $asset;
		wp_register_script( 'ohmylms-schools', plugins_url( 'build/sdk/schools.js', OHMYLMS_FILE ), $meta['dependencies'], $meta['version'], true );
		wp_register_style( 'ohmylms-schools', plugins_url( 'assets/schools/schools.css', OHMYLMS_FILE ), array(), filemtime( OHMYLMS_DIR . '/assets/schools/schools.css' ) );
		if ( is_admin() && in_array( $_GET['page'] ?? '', array( 'ohmylms-schools', OHMYLMS_SLUG ), true ) ) {
			wp_enqueue_style( 'ohmylms-schools' ); }
		if ( is_admin() ) {
			wp_add_inline_script( 'wp-element', 'window.ohmylmsViewAs=' . wp_json_encode( array( 'enabled' => current_user_can( 'manage_options' ) ) ) . ';', 'before' );
		}
	}
	public static function blocks() {
		wp_register_script( 'ohmylms-school-blocks', plugins_url( 'assets/schools/blocks.js', OHMYLMS_FILE ), array( 'wp-blocks', 'wp-block-editor', 'wp-element', 'wp-i18n' ), filemtime( OHMYLMS_DIR . '/assets/schools/blocks.js' ), true );
		foreach ( array( 'student-registration', 'teacher-registration', 'parent-registration', 'sign-in', 'school-dashboard', 'teacher-dashboard', 'parent-dashboard', 'student-assignments' ) as $kind ) {
			register_block_type(
				'ohmylms/' . $kind,
				array(
					'api_version'     => 2,
					'editor_script'   => 'ohmylms-school-blocks',
					'render_callback' => function () use ( $kind ) {
						return self::render( $kind );
					},
				)
			);
			add_shortcode(
				'ohmylms_' . str_replace( '-', '_', $kind ),
				function () use ( $kind ) {
					return self::render( $kind );
				}
			);
		}
		add_action( 'template_redirect', array( self::class, 'portal' ) );
	}
	public static function redirect_management() {
		if ( ( $_GET['page'] ?? '' ) !== 'ohmylms-schools' || ! current_user_can( 'manage_options' ) ) {
			return; }
		$tab = sanitize_key( $_GET['tab'] ?? 'schools' );
		if ( ! in_array( $tab, array( 'students', 'teachers', 'parents', 'users', 'classes', 'schools' ), true ) ) {
			$tab = 'schools'; }
		wp_safe_redirect( admin_url( 'admin.php?page=' . OHMYLMS_SLUG ) . '#/accounthub' . ( $tab === 'students' ? '' : '?tab=' . $tab ) );
		exit;
	}
	public static function menu() {
		if ( ( $_GET['page'] ?? '' ) === 'ohmylms-schools' ) {
			add_filter(
				'parent_file',
				function () {
					return OHMYLMS_SLUG;
				}
			);
			add_filter(
				'submenu_file',
				function () {
					return 'admin.php?page=' . OHMYLMS_SLUG . '#/accounthub';
				}
			);
		}
		add_submenu_page(
			null,
			__( 'Students', 'ohmylms' ),
			__( 'Students', 'ohmylms' ),
			'read',
			'ohmylms-schools',
			function () {
				echo '<div class="wrap"><hr class="wp-header-end">' . self::render( 'admin-management' ) . '</div>';
			}
		);
	}
	public static function render( $kind ) {
		if ( ! defined( 'DONOTCACHEPAGE' ) ) {
			define( 'DONOTCACHEPAGE', true ); }
		self::assets();
		if ( $kind === 'sign-in' ) {
			return self::sign_in(); }
		wp_enqueue_script( 'ohmylms-schools' );
		wp_enqueue_style( 'ohmylms-schools' );
		static $configured = false;
		if ( ! $configured ) {
			$config = array(
				'api'       => rest_url( 'ohmylms/v1/school/' ),
				'nonce'     => wp_create_nonce( 'wp_rest' ),
				'loggedIn'  => is_user_logged_in(),
				'loginUrl'  => wp_login_url( self::portal_url() ),
				'logoutUrl' => wp_logout_url( self::portal_url() ),
				'portalUrl' => self::portal_url(),
				'googleUrl' => \OhMyLMS\Services\GoogleAuthService::is_configured() ? add_query_arg( 'redirect_to', self::portal_url(), rest_url( 'ohmylms/v1/auth/google' ) ) : '',
				'skillsApi' => class_exists( \OhMyLMS\Practice\Frontend::class ) && \OhMyLMS\Practice\Frontend::enabled() ? rest_url( 'ohmylms/v1/' ) : '',
			);
			if ( is_admin() ) {
				$config['usersUrl']    = current_user_can( 'create_users' ) ? admin_url( 'user-new.php' ) : '';
				$config['studentsUrl'] = current_user_can( 'manage_options' ) ? admin_url( 'admin.php?page=' . OHMYLMS_SLUG . '#/accounthub' ) : '';
			}
			if ( $config['googleUrl'] && is_user_logged_in() ) {
				$config['googleUrl'] = add_query_arg( '_wpnonce', wp_create_nonce( 'wp_rest' ), $config['googleUrl'] ); }
			wp_add_inline_script( 'ohmylms-schools', 'window.ohmylmsSchools=' . wp_json_encode( $config, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT ) . ';', 'before' );
			$configured = true;
		}
		return '<div class="ohmylms-schools" data-ohmylms-school-view="' . esc_attr( $kind ) . '"><p>' . esc_html__( 'Loading OhMyLMS…', 'ohmylms' ) . '</p></div>';
	}
	private static function sign_in() {
		wp_enqueue_style( 'ohmylms-schools' );
		$id   = wp_unique_id( 'ohmylms-login-' );
		$body = is_user_logged_in()
			? '<p>' . esc_html__( 'You are signed in.', 'ohmylms' ) . '</p><p><a href="' . esc_url( self::portal_url() ) . '">' . esc_html__( 'Open your dashboard', 'ohmylms' ) . '</a> · <a href="' . esc_url( wp_logout_url( get_permalink() ?: self::portal_url() ) ) . '">' . esc_html__( 'Sign out', 'ohmylms' ) . '</a></p>'
			: wp_login_form(
				array(
					'echo'           => false,
					'redirect'       => self::portal_url(),
					'form_id'        => $id,
					'id_username'    => $id . '-username',
					'id_password'    => $id . '-password',
					'id_remember'    => $id . '-remember',
					'id_submit'      => $id . '-submit',
					'label_username' => __( 'Email or username', 'ohmylms' ),
					'label_log_in'   => __( 'Sign in', 'ohmylms' ),
				)
			)
				. '<p><a href="' . esc_url( wp_lostpassword_url( get_permalink() ?: self::portal_url() ) ) . '">' . esc_html__( 'Forgot your password?', 'ohmylms' ) . '</a></p>';
		if ( ! is_user_logged_in() && \OhMyLMS\Services\GoogleAuthService::is_configured() ) {
			$body .= '<p><a href="' . esc_url( add_query_arg( 'redirect_to', self::portal_url(), rest_url( 'ohmylms/v1/auth/google' ) ) ) . '">' . esc_html__( 'Continue with Google', 'ohmylms' ) . '</a></p>';
		}
		return '<div class="ohmylms-schools"><section class="ohmylms-school-shell ohmylms-account-block"><h2>' . esc_html__( 'Sign in', 'ohmylms' ) . '</h2>' . $body . '</section></div>';
	}
	public static function portal() {
		if ( isset( $_GET['ohmylms_school_file'] ) ) {
			try {
				Access::require_access( is_user_logged_in() && wp_verify_nonce( $_GET['_wpnonce'] ?? '', 'ohmylms_school_file' ) );
				[, $attempt] = Service::submission_scope( absint( $_GET['learning_id'] ?? 0 ), absint( $_GET['ohmylms_school_file'] ) );
				$files       = maybe_unserialize( $attempt['files'] );
				$file        = is_array( $files ) && ! empty( $files['file'] ) ? realpath( $files['file'] ) : false;
				$uploads     = wp_upload_dir();
				$root        = realpath( $uploads['basedir'] );
				Access::require_access( $file && $root && strpos( wp_normalize_path( $file ), trailingslashit( wp_normalize_path( $root ) ) ) === 0 && is_file( $file ) );
				nocache_headers();
				header( 'Content-Type: application/octet-stream' );
				header( 'X-Content-Type-Options: nosniff' );
				header( 'Content-Disposition: attachment; filename="' . sanitize_file_name( basename( $file ) ) . '"' );
				readfile( $file );
				exit;
			} catch ( \Throwable $error ) {
				wp_die( esc_html__( 'You cannot download this submission.', 'ohmylms' ), '', array( 'response' => 403 ) ); }
		}
		if ( ! isset( $_GET['ohmylms_portal'] ) ) {
			return; }
		show_admin_bar( false );
		// JetFormBuilder's journey recorder emits inline hooks even when there is
		// no Jet form (and therefore no JetPlugins runtime) on the page.
		// This standalone portal has only OhMyLMS forms; leave normal pages alone.
		if ( class_exists( 'JFB_Modules\\User_Journey\\Module' ) ) {
			remove_action( 'wp_footer', array( \JFB_Modules\User_Journey\Module::instance(), 'enqueue_journey_script' ) );
		}
		add_action( 'wp_enqueue_scripts', array( self::class, 'standalone_assets' ), PHP_INT_MAX );
		nocache_headers();
		header( 'Referrer-Policy: no-referrer' );
		header( 'X-Robots-Tag: noindex' );
		// Enqueue before wp_head so styles render in the document head.
		$view = sanitize_key( $_GET['view'] ?? 'school-dashboard' );
		$body = self::render( in_array( $view, array( 'parent-dashboard', 'student-assignments', 'teacher-dashboard' ), true ) ? $view : 'school-dashboard' );
		?><!doctype html><html <?php language_attributes(); ?>><head><meta charset="<?php bloginfo( 'charset' ); ?>"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="referrer" content="no-referrer"><title><?php esc_html_e( 'OhMyLMS Learning Portal', 'ohmylms' ); ?></title><?php wp_head(); ?></head><body <?php body_class( 'ohmylms-school-portal' ); ?>><?php wp_body_open(); ?><main><?php echo $body; ?></main><?php wp_footer(); ?></body></html>
		<?php
		exit;
	}
}
