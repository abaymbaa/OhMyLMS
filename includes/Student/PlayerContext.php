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

	/** Content types that play inside a course. */
	const TYPES = array( 'ohmylms-lesson', 'ohmylms-quiz', 'ohmylms-assignment' );

	/** Register the bar and its stylesheet. */
	public static function init() {
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'enqueue' ) );
		add_action( 'ohmylms_before_lesson_main_content', array( __CLASS__, 'render' ), 1 );
	}

	/** Load the small stylesheet only where the bar shows. */
	public static function enqueue() {
		if ( is_singular( self::TYPES ) && is_user_logged_in() ) {
			wp_enqueue_style( 'ohmylms-player-context', plugins_url( 'assets/css/player-context.css', OHMYLMS_FILE ), array(), (string) filemtime( OHMYLMS_DIR . '/assets/css/player-context.css' ) );
		}
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
		if ( ! is_singular( self::TYPES ) || ! is_user_logged_in() ) {
			return;
		}
		$course_id = (int) ohmylms_get_course_by_content_id( get_the_ID(), get_current_user_id() );
		if ( ! $course_id || OHMYLMS_COURSE_CPT !== get_post_type( $course_id ) ) {
			return;
		}
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
