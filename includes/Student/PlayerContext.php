<?php // phpcs:ignore WordPress.Files.FileName -- PSR-4 namespace/class filename required by the existing Composer autoloader.
/**
 * Context bar for the activity player: where the learner is and a clear way back to the course.
 *
 * Shown above lessons, quizzes and assignments for signed-in learners. It only links back; it changes
 * no progress, access or content.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Student;

defined( 'ABSPATH' ) || exit;

/** Exit bar on lesson, quiz and assignment pages. */
final class PlayerContext {

	/**
	 * Whether the focused shell is rendering.
	 *
	 * @var bool
	 */
	private static $active = false;

	/** Content types that play inside a course. */
	const TYPES = array( 'ohmylms-lesson', 'ohmylms-quiz', 'ohmylms-assignment', 'ohmylms-session' );

	/** Register the bar and its stylesheet. */
	public static function init() {
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'enqueue' ) );
		add_action( 'ohmylms_before_lesson_main_content', array( __CLASS__, 'render' ), 1 );
	}

	/** Load the small stylesheet only where the bar shows. */
	public static function enqueue() {
		if ( is_singular( self::TYPES ) && is_user_logged_in() ) {
			wp_enqueue_style( 'ohmylms-player-context', plugins_url( 'assets/css/player-context.css', OHMYLMS_FILE ), array(), (string) filemtime( OHMYLMS_DIR . '/assets/css/player-context.css' ) );
			wp_enqueue_script( 'ohmylms-player-context', plugins_url( 'assets/js/player-context.js', OHMYLMS_FILE ), array(), (string) filemtime( OHMYLMS_DIR . '/assets/js/player-context.js' ), true );
		}
	}

	/**
	 * Open the focused shell after the single-activity access gate has passed.
	 *
	 * Active quizzes retain their own exit confirmation and avoid extra navigation
	 * that could discard responses. Theme overrides can keep using the old hook.
	 *
	 * @param bool $taking_quiz Whether an existing quiz attempt is being rendered.
	 * @return bool Whether a shell was opened and must be closed.
	 */
	public static function open( $taking_quiz = false ) {
		if ( ! is_singular( self::TYPES ) || ! is_user_logged_in() ) {
			return false;
		}
		$course_id = (int) ohmylms_get_course_by_content_id( get_the_ID(), get_current_user_id() );
		$outline   = CourseOutline::get( $course_id, get_current_user_id() );
		if ( is_wp_error( $outline ) || $outline['locked'] ) {
			return false;
		}
		self::$active = true;
		ohmylms_get_template(
			'student-hub/player.php',
			array(
				'player_outline' => $outline,
				'player_quiz'    => (bool) $taking_quiz,
				'player_current' => get_the_ID(),
			)
		);
		return true;
	}

	/** Close a shell opened by open(). */
	public static function close() {
		if ( self::$active ) {
			echo '</main></div></div>';
			self::$active = false;
		}
	}

	/**
	 * Whether the focused shell supplies navigation instead of the classic sidebar.
	 *
	 * @return bool
	 */
	public static function active() {
		return self::$active;
	}

	/**
	 * Use the calm shared stage in the focused shell, retaining extension designs.
	 *
	 * This is presentation only: saved quiz settings and frozen attempts are unchanged.
	 *
	 * @param string $selected Resolved presentation identifier.
	 * @return string
	 */
	public static function quiz_template( $selected ) {
		return self::$active && in_array( $selected, array( 'playful', 'classic', 'paper', 'focus' ), true ) ? 'paper' : $selected;
	}

	/**
	 * Where "back to the course" goes: the Khan-style overview when Browse subjects is on, else the course page.
	 *
	 * @param int $course_id Course ID.
	 * @return string
	 */
	public static function overview_url( $course_id ) {
		return in_array( 'library', Hub::settings()['tabs'], true ) ? Hub::course_url( $course_id ) : get_permalink( $course_id );
	}

	/** Print the bar. */
	public static function render() {
		if ( self::$active || ! is_singular( self::TYPES ) || ! is_user_logged_in() ) {
			return;
		}
		$course_id = (int) ohmylms_get_course_by_content_id( get_the_ID(), get_current_user_id() );
		if ( ! $course_id || OHMYLMS_COURSE_CPT !== get_post_type( $course_id ) ) {
			return;
		}
		\OhMyLMS\Family\Provenance::render( $course_id, get_the_ID() );
		?>
		<nav class="oml-player-context" aria-label="<?php esc_attr_e( 'Course navigation', 'ohmylms' ); ?>">
			<a class="oml-player-exit" href="<?php echo esc_url( self::overview_url( $course_id ) ); ?>">
				<span aria-hidden="true">&larr;</span> <?php esc_html_e( 'Course overview', 'ohmylms' ); ?>
			</a>
			<span class="oml-player-course"><?php echo esc_html( get_the_title( $course_id ) ); ?></span>
		</nav>
		<?php
	}
}
