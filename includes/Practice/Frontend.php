<?php // phpcs:ignore WordPress.Files.FileName -- Existing PSR-4 class/file mapping.
/**
 * Skill practice pages and entry presentation.
 *
 * @package OhMyLMS
 */
namespace OhMyLMS\Practice;

use OhMyLMS\Assessment\Engine;
use OhMyLMS\Assessment\Schema;
use OhMyLMS\Skills\Evidence;
use OhMyLMS\Skills\Mastery;
use OhMyLMS\Skills\Recommendations;

defined( 'ABSPATH' ) || exit;

/**
 * Learner-facing pages: the skill progress dashboard ([ohmylms_skills], also shown on the
 * student dashboard) and the practice runner ([ohmylms_practice skill="ID"], or the
 * ?ohmylms_practice=ID page). Logged-in pages also load the guest-claim prompt.
 */
final class Frontend {
	/** Register practice pages, shortcodes and assets. */
	public static function init() {
		add_shortcode( 'ohmylms_skills', array( __CLASS__, 'skills' ) );
		add_shortcode( 'ohmylms_practice', array( __CLASS__, 'practice' ) );
		add_action(
			'ohmylms_lms_student_profile_after_dashboard_content',
			static function () {
				if ( ! Dashboard::$rendered ) {
					echo self::skills(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped markup from the skills renderer.
				}
			}
		);
		add_filter(
			'query_vars',
			static function ( $vars ) {
				$vars[] = 'ohmylms_practice';
				return $vars;
			}
		);
		add_action( 'template_redirect', array( __CLASS__, 'practice_page' ) );
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'claim_assets' ) );
	}

	/**
	 * Check whether the practice engine is available.
	 *
	 * @return bool
	 */
	public static function enabled() {
		return Schema::ready() && Engine::practice();
	}

	/** Logged-in visitors may have unclaimed guest answers in this browser. */
	public static function claim_assets() {
		if ( ! self::enabled() || ! is_user_logged_in() ) {
			return; }
		wp_enqueue_script( 'ohmylms-inline-check', plugins_url( 'assets/js/inline-check.js', OHMYLMS_FILE ), array(), OHMYLMS_VERSION, true );
		wp_localize_script( 'ohmylms-inline-check', 'ohmylmsInlineCheck', Inline::client_config() );
	}

	/**
	 * Render the skill dashboard.
	 *
	 * @return string Escaped HTML.
	 */
	public static function skills() {
		if ( ! self::enabled() || ! is_user_logged_in() ) {
			return ''; }
		Evidence::process( 50 );
		wp_enqueue_style( 'ohmylms-practice', plugins_url( 'assets/css/practice.css', OHMYLMS_FILE ), array(), OHMYLMS_VERSION );
		$student         = get_current_user_id();
		$skills          = Evidence::summary( $student );
		$recommendations = Recommendations::for_student( $student, 5 );
		ob_start();
		?>
		<section class="ohmylms-skill-progress" aria-labelledby="ohmylms-skill-progress-title">
			<h2 id="ohmylms-skill-progress-title"><?php esc_html_e( 'My skills', 'ohmylms' ); ?></h2>
			<?php if ( ! $skills ) { ?>
				<p><?php esc_html_e( 'Answer quiz questions, lesson checks or practice to see your skills here.', 'ohmylms' ); ?></p>
			<?php } else { ?>
				<table class="ohmylms-skill-table">
					<thead><tr><th><?php esc_html_e( 'Skill', 'ohmylms' ); ?></th><th><?php esc_html_e( 'Level', 'ohmylms' ); ?></th>
					<?php
					if ( \OhMyLMS\Skills\Score::enabled() ) {
						?>
						<th><?php esc_html_e( 'Mastery', 'ohmylms' ); ?></th><?php } ?><th><?php esc_html_e( 'Evidence', 'ohmylms' ); ?></th><th></th></tr></thead>
					<tbody>
					<?php foreach ( $skills as $skill ) { ?>
						<tr>
							<td><?php echo esc_html( $skill['name'] ); ?></td>
							<td>
								<span class="ohmylms-skill-level ohmylms-skill-<?php echo esc_attr( $skill['level'] ); ?>"><?php echo esc_html( $skill['level_label'] ); ?></span>
								<?php
								if ( $skill['review_due'] ) {
									?>
									<span class="ohmylms-skill-review"><?php esc_html_e( 'Review due', 'ohmylms' ); ?></span><?php } ?>
							</td>
							<?php if ( \OhMyLMS\Skills\Score::enabled() ) { ?>
								<td><?php echo isset( $skill['mastery'] ) ? esc_html( (int) round( $skill['mastery']['score'] ) . '/100' . ( $skill['mastery']['medal'] ? ' · ' . ucfirst( $skill['mastery']['medal'] ) : '' ) ) : '—'; ?></td>
							<?php } ?>
							<td>
							<?php
							echo esc_html(
								sprintf(
								/* translators: 1: independent correct answers, 2: question families */
									__( '%1$d correct on your own · %2$d kinds of question', 'ohmylms' ),
									$skill['independent_correct'],
									$skill['families']
								)
							);
							?>
								</td>
							<td><a class="ohmylms-button" href="<?php echo esc_url( add_query_arg( 'ohmylms_practice', $skill['id'], home_url( '/' ) ) ); ?>"><?php esc_html_e( 'Practice', 'ohmylms' ); ?></a></td>
						</tr>
					<?php } ?>
					</tbody>
				</table>
			<?php } ?>
			<?php if ( $recommendations ) { ?>
				<h3><?php esc_html_e( 'Suggested next steps', 'ohmylms' ); ?></h3>
				<ul class="ohmylms-recommendations">
					<?php
					foreach ( $recommendations as $item ) {
						if ( ! $item['skill'] ) {
							continue; }
						?>
						<li class="ohmylms-recommendation-<?php echo esc_attr( $item['type'] ); ?>">
							<strong><?php echo esc_html( $item['skill']['name'] ); ?></strong> — <?php echo esc_html( $item['message'] ); ?>
							<?php
							foreach ( $item['lessons'] as $lesson ) {
								?>
								<a href="<?php echo esc_url( $lesson['url'] ); ?>"><?php echo esc_html( $lesson['title'] ); ?></a><?php } ?>
							<?php
							foreach ( $item['prerequisites'] as $prerequisite ) {
								?>
								<a href="<?php echo esc_url( add_query_arg( 'ohmylms_practice', $prerequisite['id'], home_url( '/' ) ) ); ?>"><?php /* translators: %s: prerequisite skill name. */ echo esc_html( sprintf( __( 'Practice %s', 'ohmylms' ), $prerequisite['name'] ) ); ?></a><?php } ?>
							<a href="<?php echo esc_url( add_query_arg( 'ohmylms_practice', $item['skill']['id'], home_url( '/' ) ) ); ?>"><?php esc_html_e( 'Practice', 'ohmylms' ); ?></a>
						</li>
					<?php } ?>
				</ul>
			<?php } ?>
		</section>
		<?php
		return ob_get_clean();
	}

	/**
	 * Render an entry without creating an attempt or disclosing question data.
	 *
	 * @param array $attributes Shortcode attributes.
	 * @return string Escaped practice markup.
	 */
	public static function practice( $attributes ) {
		if ( ! self::enabled() ) {
			return ''; }
		$attributes = shortcode_atts(
			array(
				'skill'  => 0,
				'items'  => 10,
				'course' => 0,
				// standard, or lesson for fast feedback with staged questions and replay of misses.
				'style'  => get_option( 'ohmylms_practice_style', 'standard' ),
			),
			(array) $attributes,
			'ohmylms_practice'
		);
		$term       = get_term( (int) $attributes['skill'], \OhMyLMS\Skills\Taxonomy::NAME );
		if ( ! $term || is_wp_error( $term ) ) {
			return ''; }
		// The inline-check script provides the shared guest credential and local history.
		if ( ! wp_script_is( 'ohmylms-inline-check', 'enqueued' ) ) {
			wp_enqueue_script( 'ohmylms-inline-check', plugins_url( 'assets/js/inline-check.js', OHMYLMS_FILE ), array(), OHMYLMS_VERSION, true );
			wp_localize_script( 'ohmylms-inline-check', 'ohmylmsInlineCheck', Inline::client_config() );
		}
		\OhMyLMS\Assessment\Interactive::enqueue();
		wp_enqueue_script( 'ohmylms-practice', plugins_url( 'assets/js/practice.js', OHMYLMS_FILE ), array( 'ohmylms-inline-check', 'ohmylms-interactive-visual' ), (string) filemtime( OHMYLMS_DIR . '/assets/js/practice.js' ), true );
		wp_enqueue_style( 'ohmylms-quiz-a11y', plugins_url( 'assets/css/quiz-a11y.css', OHMYLMS_FILE ), array(), OHMYLMS_VERSION );
		wp_enqueue_style( 'ohmylms-practice', plugins_url( 'assets/css/practice.css', OHMYLMS_FILE ), array(), (string) filemtime( OHMYLMS_DIR . '/assets/css/practice.css' ) );
		wp_localize_script(
			'ohmylms-practice',
			'ohmylmsPractice',
			Inline::client_config() + array(
				'studentId'    => get_current_user_id(),
				'practiceI18n' => array(
					'start'         => __( 'Start practice', 'ohmylms' ),
					'resume'        => __( 'Resume practice', 'ohmylms' ),
					'check'         => __( 'Check answer', 'ohmylms' ),
					'next'          => __( 'Next question', 'ohmylms' ),
					'hint'          => __( 'Show a hint', 'ohmylms' ),
					'skip'          => __( 'Skip', 'ohmylms' ),
					'tryAgain'      => __( 'Try again', 'ohmylms' ),
					'notQuite'      => __( 'Not quite! Give it another try!', 'ohmylms' ),
					'levelsTitle'   => __( 'Skill level', 'ohmylms' ),
					'levelUp'       => __( 'Leveled up', 'ohmylms' ),
					'levelDown'     => __( 'Leveled down', 'ohmylms' ),
					'levelSame'     => __( 'Stayed at', 'ohmylms' ),
					'level_not-started' => __( 'Not started', 'ohmylms' ),
					'level_attempted'   => __( 'Attempted', 'ohmylms' ),
					'level_familiar'    => __( 'Familiar', 'ohmylms' ),
					'level_proficient'  => __( 'Proficient', 'ohmylms' ),
					'level_mastered'    => __( 'Mastered', 'ohmylms' ),
					'restart'       => __( 'Start over', 'ohmylms' ),
					'restartAsk'    => __( 'Start over with a new set of questions? Your answers so far in this session stay recorded.', 'ohmylms' ),
					'greatWork'     => __( 'Great work! You got it. Onward!', 'ohmylms' ),
					'niceWork'      => __( 'Nice work! Great that you stuck with it. Onward!', 'ohmylms' ),
					/* translators: 1: hint number, 2: number of hints */
					'hintStep'      => __( 'Hint %1$d of %2$d', 'ohmylms' ),
					/* translators: 1: hints shown, 2: number of hints */
					'anotherHint'   => __( 'Get another hint (%1$d/%2$d)', 'ohmylms' ),
					/* translators: %d: number of problems in the session */
					'problems'      => __( 'Do %d problems', 'ohmylms' ),
					/* translators: 1: current problem, 2: number of problems */
					'problemOf'     => __( '%1$d of %2$d', 'ohmylms' ),
					'dotRight'      => __( 'Right first time', 'ohmylms' ),
					'dotHelp'       => __( 'Right with help', 'ohmylms' ),
					'dotWrong'      => __( 'Not right', 'ohmylms' ),
					'dotCurrent'    => __( 'Current question', 'ohmylms' ),
					'dotLeft'       => __( 'Not answered yet', 'ohmylms' ),
					/* translators: 1: answered, 2: total */
					'progress'      => __( 'Question %1$d · session limit %2$d', 'ohmylms' ),
					'checked'       => __( 'Answers checked', 'ohmylms' ),
					/* translators: 1: correct, 2: answered */
					'done'          => __( 'Practice complete: %1$d of %2$d correct.', 'ohmylms' ),
					'empty'         => __( 'There are no practice questions for this skill yet.', 'ohmylms' ),
					'again'         => __( 'Practice again', 'ohmylms' ),
					'continue'      => __( 'Continue', 'ohmylms' ),
					'tutorHint'     => __( 'Ask the tutor for a hint', 'ohmylms' ),
					'explain'       => __( 'Explain my answer', 'ohmylms' ),
					'thinking'      => __( 'The tutor is thinking…', 'ohmylms' ),
					'tutor'         => __( 'Tutor', 'ohmylms' ),
					'solution'      => __( 'Worked solution', 'ohmylms' ),
					'replay'        => __( 'Let\'s try that one again.', 'ohmylms' ),
					'recognize'     => __( 'Recognise', 'ohmylms' ),
					'guided'        => __( 'Build', 'ohmylms' ),
					'produce'       => __( 'Solve', 'ohmylms' ),
					'sound'         => __( 'Sound', 'ohmylms' ),
					/* translators: 1: right first time, 2: planned questions */
					'lessonDone'    => __( 'Lesson complete: %1$d of %2$d right first time.', 'ohmylms' ),
					'missedTitle'   => __( 'Questions to review', 'ohmylms' ),
					'fixed'         => __( 'put right on the second try', 'ohmylms' ),
					'notFixed'      => __( 'still tricky, worth another look', 'ohmylms' ),
					'perfect'       => __( 'No mistakes. Well done!', 'ohmylms' ),
					'rewardTitle'   => __( 'Your rewards', 'ohmylms' ),
					'xp_lesson'     => __( 'Lesson', 'ohmylms' ),
					'xp_perfect'    => __( 'No mistakes', 'ohmylms' ),
					'xp_challenge'  => __( 'Challenge zone', 'ohmylms' ),
					/* translators: 1: XP earned today, 2: the daily goal */
					'xpToday'       => __( '%1$d of %2$d XP today', 'ohmylms' ),
					'goalMet'       => __( 'Daily goal reached!', 'ohmylms' ),
					'xpCapped'      => __( 'You have reached today\'s XP limit. Keep practising; it counts toward your skills.', 'ohmylms' ),
					'mastery'       => __( 'Mastery', 'ohmylms' ),
					/* translators: 1: score before, 2: score after */
					'masteryChange' => __( '%1$d → %2$d out of 100', 'ohmylms' ),
					'medal_80'      => __( 'Bronze medal: skill at 80', 'ohmylms' ),
					'medal_90'      => __( 'Silver medal: skill at 90', 'ohmylms' ),
					'medal_100'     => __( 'Gold medal: skill mastered!', 'ohmylms' ),
					'unlocked'      => __( 'Next skill unlocked', 'ohmylms' ),
					/* translators: %d: days in a row */
					'streakDays'    => __( '%d-day streak', 'ohmylms' ),
				),
			)
		);
		$practice_available = Presentation::available( $term->term_id, (int) $attributes['course'], (int) $attributes['items'] );
		ob_start();
		?>
		<?php \OhMyLMS\Family\Provenance::render( (int) $attributes['course'], $term->term_id, 'practice' ); ?>
		<section class="ohmylms-practice" data-style="<?php echo esc_attr( 'lesson' === $attributes['style'] ? 'lesson' : 'standard' ); ?>" data-skill="<?php echo esc_attr( $term->term_id ); ?>" data-course="<?php echo esc_attr( (int) $attributes['course'] ); ?>" data-items="<?php echo esc_attr( (int) $attributes['items'] ); ?>">
			<h2><?php /* translators: %s: skill name. */ echo esc_html( sprintf( __( 'Practice: %s', 'ohmylms' ), $term->name ) ); ?></h2>
			<p class="ohmylms-practice-entry"><?php /* translators: %d: maximum questions in a new session from the current authorized pool. */ echo esc_html( sprintf( _n( 'Up to %d question in a new session.', 'Up to %d questions in a new session.', $practice_available, 'ohmylms' ), $practice_available ) ); ?> <?php esc_html_e( 'Check each answer for feedback. You can leave and resume on this device; unanswered work is not submitted.', 'ohmylms' ); ?>
			<?php
			if ( 'lesson' === $attributes['style'] ) :
				?>
				<?php esc_html_e( 'Missed questions may return for review.', 'ohmylms' ); ?><?php endif; ?></p>
			<noscript><p><?php esc_html_e( 'Enable JavaScript to start or resume practice.', 'ohmylms' ); ?></p></noscript>
			<?php
			if ( ! is_user_logged_in() ) {
				?>
				<p class="ohmylms-practice-guest"><?php esc_html_e( 'You are practising as a guest. Your answers are kept on this device until you log in.', 'ohmylms' ); ?></p><?php } ?>
			<div class="ohmylms-practice-stage" aria-live="polite"></div>
		</section>
		<?php
		return ob_get_clean();
	}

	/** Minimal standalone practice page for ?ohmylms_practice=SKILL_ID links. */
	public static function practice_page() {
		$skill = (int) get_query_var( 'ohmylms_practice' );
		if ( ! $skill || ! self::enabled() ) {
			return; }
		$course = isset( $_GET['learning_course'] ) ? absint( $_GET['learning_course'] ) : 0;
		$args   = array(
			'skill'  => $skill,
			'course' => $course,
		);
		if ( isset( $_GET['style'] ) ) {
			$args['style'] = sanitize_key( wp_unslash( $_GET['style'] ) ); }
		if ( isset( $_GET['items'] ) ) {
			$args['items'] = absint( $_GET['items'] ); }
		$html = self::practice( $args );
		if ( '' === $html ) {
			return; }
		ob_start();
		$focused = \OhMyLMS\Student\PlayerContext::open_practice( $course, $skill );
		$shell   = ob_get_clean();
		status_header( 200 );
		if ( $focused ) {
			ohmylms_get_template(
				'student-hub/activity-page.php',
				array(
					'activity_shell' => $shell,
					'activity_html'  => $html,
				)
			);
			exit;
		}
		get_header();
		echo '<main class="ohmylms-container" style="max-width:780px;margin:40px auto;padding:0 16px">' . $html . '</main>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped practice renderer above.
		get_footer();
		exit;
	}
}
