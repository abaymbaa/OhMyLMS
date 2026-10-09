<?php
namespace OhMyLMS\Extensions;

defined( 'ABSPATH' ) || exit;

/** Public frontend module contract. Admin editors and server-side graders remain separate. */
final class Interactivity {
	const API_VERSION        = 1;
	private static $rendered = array();

	public static function once( $component ) {
		if ( isset( self::$rendered[ $component ] ) ) {
			return false;
		}
		self::$rendered[ $component ] = true;
		return true;
	}

	public static function init() {
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'register' ), 5 );
		add_filter( 'script_loader_src', array( __CLASS__, 'legacy_url' ), 30 );
		add_filter( 'ohmylms_template_html', array( __CLASS__, 'disclosures' ), 10, 2 );
	}

	public static function register() {
		foreach ( array(
			'interactivity' => 'sdk',
			'quiz'          => 'quiz',
			'ui'            => 'ui',
			'gamification'  => 'gamification',
			'questions'     => 'questions',
			'tabs'          => 'tabs',
			'curriculum'    => 'curriculum',
		) as $id => $file ) {
			$path         = 'assets/interactivity/' . $file . '.js';
			$dependencies = apply_filters(
				'ohmylms_interactivity_module_dependencies',
				$id === 'interactivity' ? array() : array( '@wordpress/interactivity', 'ohmylms/interactivity' ),
				'ohmylms/' . $id
			);
			wp_register_script_module(
				'ohmylms/' . $id,
				plugins_url( $path, OHMYLMS_FILE ),
				$dependencies,
				(string) filemtime( OHMYLMS_DIR . '/' . $path )
			);
		}
		do_action( 'ohmylms_register_interactivity_modules', self::API_VERSION );
	}

	/** Call while rendering any custom template/shortcode, including after wp_head. */
	public static function enqueue( $id ) {
		wp_enqueue_style(
			'ohmylms-interactivity',
			plugins_url( 'assets/interactivity/frontend.css', OHMYLMS_FILE ),
			array(),
			(string) filemtime( OHMYLMS_DIR . '/assets/interactivity/frontend.css' )
		);
		wp_enqueue_script_module( $id );
		static $late_map = false;
		if ( ! $late_map && did_action( 'wp_head' ) && wp_is_block_theme() ) {
			$late_map = true;
			if ( doing_action( 'wp_footer' ) ) {
				wp_script_modules()->print_import_map();
			} else {
				add_action( 'wp_footer', array( wp_script_modules(), 'print_import_map' ), 5 );
			}
		}
	}

	/** Keep original compiled assets as provenance; execute the maintained frontend source. */
	public static function legacy_url( $url ) {
		$base = plugins_url( '/', OHMYLMS_FILE );
		$path = strtok( substr( $url, strlen( $base ) ), '?' );
		if ( strpos( $url, $base ) === 0 && in_array( $path, array( 'assets/dist/frontend/ohmylms.js', 'build/assets/dist/frontend/ohmylms.js' ), true ) ) {
			$file = 'assets/src/frontend/js/ohmylms.js';
			return $base . $file . '?ver=' . filemtime( OHMYLMS_DIR . '/' . $file );
		}
		return $url;
	}

	/** Accessible accordions and mobile table details, including custom template overrides. */
	public static function disclosures( $html, $template ) {
		if ( strpos( $template, 'emails/' ) === 0 || strpos( $template, 'quiz-loop/' ) !== false || $template === 'single-lesson/quiz-form.php' ) {
			return $html;
		}
		if ( strpos( $html, 'ohmylms-accordion-item' ) === false && strpos( $html, 'ohmylms-td-handle' ) === false && strpos( $html, 'table-accordion-handler' ) === false ) {
			return $html;
		}
		$tags    = new \WP_HTML_Tag_Processor( $html );
		$changed = false;
		while ( $tags->next_tag() ) {
			$classes = preg_split( '/\s+/', (string) $tags->get_attribute( 'class' ) );
			$has     = static function ( $class ) use ( $classes ) {
				return in_array( $class, $classes, true );
			};
			if ( ( $has( 'ohmylms-accordion-item' ) || $has( 'ohmylms-tr' ) || $has( 'dashboard-table-tr' ) ) && ! $tags->get_attribute( 'data-wp-interactive' ) ) {
				$open = $has( 'active' ) || ( $template === 'filters/filters.php' );
				$tags->set_attribute( 'data-wp-interactive', 'ohmylms/ui' );
				$tags->set_attribute( 'data-wp-context', wp_json_encode( array( 'open' => $open ) ) );
				$tags->set_attribute( 'data-wp-class--active', 'context.open' );
				$changed = true;
			}
			if ( ( $has( 'ohmylms-accordion-head' ) || $has( 'ohmylms-td-handle' ) || $has( 'table-accordion-handler' ) ) && ! $tags->get_attribute( 'data-wp-on--click' ) ) {
				$tags->set_attribute( 'data-wp-on--click', 'actions.toggle' );
				$tags->set_attribute( 'data-wp-on--keydown', 'actions.keyToggle' );
				$tags->set_attribute( 'data-wp-bind--aria-expanded', 'context.open' );
				$tags->set_attribute( 'role', 'button' );
				$tags->set_attribute( 'tabindex', '0' );
			}
			if ( ( $has( 'ohmylms-accordion-body' ) || $has( 'ohmylms-mobile-td' ) || $has( 'dashboard-table-mobile-td' ) ) && ! $tags->get_attribute( 'data-wp-style--display' ) ) {
				$tags->set_attribute( 'data-wp-style--display', 'state.display' );
			}
		}
		if ( $changed ) {
			self::enqueue( 'ohmylms/ui' );
		}
		return $tags->get_updated_html();
	}

	/** Add directives without changing existing question renderers or answer field names. */
	public static function quiz( $html, array $context ) {
		self::enqueue( 'ohmylms/quiz' );
		$context = apply_filters( 'ohmylms_quiz_interactivity_context', $context, self::API_VERSION );
		$tags    = new \WP_HTML_Tag_Processor( $html );
		while ( $tags->next_tag() ) {
			$class = (string) $tags->get_attribute( 'class' );
			$has   = static function ( $name ) use ( $class ) {
				return in_array( $name, preg_split( '/\s+/', $class ), true );
			};
			if ( $tags->get_tag() === 'SECTION' && $has( 'ohmylms-quiz' ) ) {
				$tags->set_attribute( 'data-wp-interactive', 'ohmylms/quiz' );
				$tags->set_attribute( 'data-wp-context', wp_json_encode( $context ) );
				$tags->set_attribute( 'data-wp-init', 'callbacks.mount' );
				$tags->set_attribute( 'data-wp-on-document--keydown', 'actions.escape' );
				$tags->set_attribute( 'data-wp-on-document--click', 'actions.outside' );
			}
			if ( $has( 'ohmylms-question-group' ) && preg_match( '/question-group-(\d+)/', $class, $match ) ) {
				$tags->set_attribute( 'data-wp-context', wp_json_encode( array( 'questionPage' => (int) $match[1] ) ) );
				$tags->set_attribute( 'data-wp-class--active', 'state.isPage' );
			}
			if ( $has( 'ohmylms-quiz-box' ) && preg_match( '/question-(\d+)/', $class, $match ) ) {
				$number = (int) $match[1];
				$tags->set_attribute(
					'data-wp-context',
					wp_json_encode(
						array(
							'questionNumber' => $number,
							'questionPage'   => $context['layout'] === 'number_of_questions_per_page' ? (int) ceil( $number / $context['perPage'] ) : $number,
						)
					)
				);
				$tags->set_attribute( 'data-wp-class--active', 'state.isQuestion' );
			}
			if ( $has( 'ohmylms-next-quiz' ) || $has( 'ohmylms-next-quiz-group' ) ) {
				$tags->set_attribute( 'data-wp-on--click', 'actions.next' );
				$tags->set_attribute( 'data-wp-style--display', 'state.nextDisplay' );
				$tags->set_attribute( 'data-wp-bind--disabled', 'context.submitting' );
			}
			if ( $has( 'ohmylms-previous-quiz' ) || $has( 'ohmylms-previous-quiz-group' ) ) {
				$tags->set_attribute( 'data-wp-on--click', 'actions.previous' );
				$tags->set_attribute( 'data-wp-bind--disabled', 'state.previousDisabled' );
			}
			if ( $has( 'quiz-submit' ) ) {
				$tags->set_attribute( 'data-wp-on--click', 'actions.submitClick' );
				$tags->set_attribute( 'data-wp-style--display', 'state.submitDisplay' );
				$tags->set_attribute( 'data-wp-bind--disabled', 'context.submitting' );
			}
			if ( $tags->get_tag() === 'FORM' ) {
				$tags->set_attribute( 'data-wp-on--submit', 'actions.submit' );
			}
			if ( $has( 'quiz-page-close' ) ) {
				$tags->set_attribute( 'data-wp-on--click', 'actions.openExit' );
			}
			if ( $has( 'quiz-alert-cancel' ) ) {
				$tags->set_attribute( 'data-wp-on--click', 'actions.closeExit' );
			}
			if ( $has( 'ohmylms-quiz-alert' ) ) {
				$tags->set_attribute( 'data-wp-style--display', 'state.exitDisplay' );
				$tags->set_attribute( 'data-wp-bind--aria-hidden', '!context.exitOpen' );
			}
			if ( $has( 'timer-display' ) ) {
				$tags->set_attribute( 'data-wp-text', 'state.timeLabel' );
			}
			if ( $has( 'progress-inner' ) ) {
				$tags->set_attribute( 'data-wp-style--width', 'state.timerWidth' );
			}
			if ( $has( 'ohmylms-quiz-timeup-text' ) ) {
				$tags->set_attribute( 'data-wp-text', 'context.error' );
				$tags->set_attribute( 'data-wp-style--display', 'state.errorDisplay' );
				$tags->set_attribute( 'role', 'alert' );
			}
			if ( in_array( $tags->get_tag(), array( 'INPUT', 'TEXTAREA', 'SELECT' ), true ) && $tags->get_attribute( 'type' ) !== 'hidden' && ! $tags->get_attribute( 'data-wp-on--input' ) ) {
				$tags->set_attribute( 'data-wp-on--input', 'ohmylms/quiz::actions.answerChanged' );
				if ( ! $tags->get_attribute( 'data-wp-on--change' ) ) {
					$tags->set_attribute( 'data-wp-on--change', 'ohmylms/quiz::actions.answerChanged' );
				}
			}
			if ( $has( 'required-question' ) ) {
				$tags->set_attribute( 'data-wp-style--display', 'state.requiredDisplay' );
				$tags->set_attribute( 'role', 'alert' );
			}
		}
		return $tags->get_updated_html();
	}
}
