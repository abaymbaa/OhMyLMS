<?php
/**
 * Khan-style course page: unit rail, unit headers with skill grids, mastery legend and Up next.
 * Override in yourtheme/ohmylms/student-hub/course.php.
 *
 * @package OhMyLMS
 */

use OhMyLMS\Student\CourseOutline;
use OhMyLMS\Student\Hub;

defined( 'ABSPATH' ) || exit;

// Rendered inside the hub (?hub_course=ID) and as the public course page ($hub_standalone).
$hub_course_id  = isset( $hub_course_id ) ? absint( $hub_course_id ) : absint( get_query_var( 'hub_course', 0 ) );
$hub_standalone = ! empty( $hub_standalone );
$hub_outline    = CourseOutline::get( $hub_course_id, get_current_user_id() );
$hub_back       = $hub_standalone ? Hub::catalog_url() : Hub::url( 'library' );

$hub_kind_paths = array(
	'lesson'     => 'M6 3h9l4 4v14H6zM9 12h7M9 16h7',
	'practice'   => 'M4 20l4-1 11-11-3-3L5 16z',
	'quiz'       => 'M13 2L5 14h6l-1 8 8-12h-6z',
	'assignment' => 'M9 11l3 3 8-8M5 5h9M5 12h2M5 19h9',
);
$hub_kind_name  = array(
	'lesson'     => __( 'Lesson', 'ohmylms' ),
	'practice'   => __( 'Practice', 'ohmylms' ),
	'quiz'       => __( 'Quiz', 'ohmylms' ),
	'assignment' => __( 'Assignment', 'ohmylms' ),
);
/**
 * Small activity icon.
 *
 * @param string $kind Activity kind.
 * @return string Static SVG built from an allowlist.
 */
$hub_kind_icon = static function ( $kind ) use ( $hub_kind_paths ) {
	return '<svg class="oml-hub-kind" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="' . esc_attr( $hub_kind_paths[ $kind ] ?? $hub_kind_paths['lesson'] ) . '"/></svg>';
};
/**
 * One list of activity rows.
 *
 * @param array[] $rows Outline rows.
 */
$hub_rows = static function ( array $rows ) use ( $hub_kind_icon, $hub_kind_name ) {
	?>
	<ul class="oml-hub-rows">
	<?php foreach ( $rows as $hub_row ) : ?>
		<li>
			<a class="oml-hub-row" href="<?php echo esc_url( $hub_row['url'] ); ?>">
				<span class="oml-hub-row-icon <?php echo esc_attr( $hub_row['level'] ? 'is-' . $hub_row['level'] : ( $hub_row['complete'] ? 'is-complete' : '' ) ); ?>"><?php echo $hub_kind_icon( $hub_row['kind'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Static SVG built from an allowlist. ?></span>
				<span class="oml-hub-row-name"><?php echo esc_html( $hub_row['name'] ); ?></span>
				<span class="oml-hub-row-meta"><?php echo esc_html( $hub_row['label'] ? $hub_row['label'] : ( ! empty( $hub_row['kind_label'] ) ? $hub_row['kind_label'] : $hub_kind_name[ $hub_row['kind'] ] ) ); ?><?php echo $hub_row['complete'] && ! $hub_row['label'] ? ' · ' . esc_html__( 'Complete', 'ohmylms' ) : ''; ?></span>
			</a>
		</li>
	<?php endforeach; ?>
	</ul>
	<?php
};
?>
<p class="oml-hub-crumb"><a class="oml-hub-crumb-link" href="<?php echo esc_url( $hub_back ); ?>">&larr; <?php esc_html_e( 'Browse subjects', 'ohmylms' ); ?></a></p>
<?php if ( is_wp_error( $hub_outline ) ) : ?>
	<div class="oml-hub-empty">
		<h2><?php esc_html_e( 'This course is not available', 'ohmylms' ); ?></h2>
		<p><?php esc_html_e( 'It may have been unpublished or moved. Browse the subjects to find another course.', 'ohmylms' ); ?></p>
		<a class="oml-hub-button" href="<?php echo esc_url( $hub_back ); ?>"><?php esc_html_e( 'Browse subjects', 'ohmylms' ); ?></a>
	</div>
	<?php return; ?>
<?php endif; ?>
<?php
$hub_summary = $hub_outline['summary'];
$hub_units   = $hub_outline['units'];
$hub_marker  = static function ( $row ) {
	$style = $row['style'] ?? '';
	if ( 'unit-test' === $style || 'course-challenge' === $style ) {
		return '★';
	}
	return 'quiz' === $row['kind'] || 'assignment' === $row['kind'] ? '↯' : '';
};
// First unfinished activity, for "Up next", and the unit that holds it.
$hub_next      = null;
$hub_next_unit = 0;
if ( $hub_outline['enrolled'] ) {
	foreach ( $hub_units as $hub_index => $hub_unit ) {
		foreach ( $hub_unit['items'] as $hub_row ) {
			if ( empty( $hub_row['complete'] ) ) {
				$hub_next      = $hub_row;
				$hub_next_unit = $hub_index;
				break 2;
			}
		}
	}
}
$hub_course_object = $hub_outline['locked'] ? null : ohmylms_get_course( $hub_course_id );
?>
<div class="oml-course">
	<?php if ( $hub_units ) : ?>
		<nav class="oml-course-rail" aria-label="<?php esc_attr_e( 'Course units', 'ohmylms' ); ?>">
			<p class="oml-course-rail-title"><?php echo esc_html( $hub_outline['title'] ); ?></p>
			<p class="oml-course-rail-meta"><?php /* translators: %d: number of units. */ echo esc_html( sprintf( _n( '%d unit', '%d units', count( $hub_units ), 'ohmylms' ), count( $hub_units ) ) ); ?></p>
			<ol>
				<?php foreach ( $hub_units as $hub_index => $hub_unit ) : ?>
					<li>
						<a href="#hub-unit-<?php echo esc_attr( $hub_index + 1 ); ?>" <?php echo $hub_index === $hub_next_unit ? 'aria-current="true"' : ''; ?>>
							<span class="oml-course-unit-label"><?php /* translators: %s: unit number or label, such as 3 or 2A. */ echo esc_html( sprintf( __( 'UNIT %s', 'ohmylms' ), $hub_unit['number'] ) ); ?></span>
							<span><?php echo esc_html( $hub_unit['title'] ); ?></span>
						</a>
					</li>
				<?php endforeach; ?>
			</ol>
		</nav>
	<?php endif; ?>
	<div class="oml-course-main">
		<section class="oml-hub-hero">
			<h1><?php echo esc_html( $hub_outline['title'] ); ?></h1>
			<?php if ( $hub_summary ) : ?>
				<p class="oml-hub-meta">
					<?php esc_html_e( 'Course', 'ohmylms' ); ?>
					<span aria-hidden="true">&bull;</span> <?php /* translators: %d: number of units. */ echo esc_html( sprintf( _n( '%d unit', '%d units', $hub_summary['units'], 'ohmylms' ), $hub_summary['units'] ) ); ?>
					<?php if ( $hub_summary['skills'] ) : ?>
						<span aria-hidden="true">&bull;</span> <?php /* translators: %d: number of skills. */ echo esc_html( sprintf( _n( '%d skill', '%d skills', $hub_summary['skills'], 'ohmylms' ), $hub_summary['skills'] ) ); ?>
					<?php endif; ?>
				</p>
			<?php endif; ?>
			<?php if ( $hub_outline['description'] ) : ?>
				<p><?php echo esc_html( $hub_outline['description'] ); ?></p>
			<?php endif; ?>
			<?php if ( $hub_outline['locked'] ) : ?>
				<p>
					<?php esc_html_e( 'This course is protected.', 'ohmylms' ); ?>
					<a href="<?php echo esc_url( get_permalink( $hub_course_id ) ); ?>"><?php esc_html_e( 'Open the course page to enter its password.', 'ohmylms' ); ?></a>
				</p>
			<?php endif; ?>
			<?php if ( $hub_outline['enrolled'] ) : ?>
				<a class="oml-hub-button" href="<?php echo esc_url( $hub_outline['continue']['url'] ); ?>"><?php echo esc_html( $hub_outline['continue']['label'] ); ?></a>
			<?php endif; ?>
		</section>
		<?php $hub_links = $hub_outline['links'] ?? array(); ?>
		<?php if ( ! empty( $hub_links['get_ready'] ) || ! empty( $hub_links['subcourses'] ) ) : ?>
			<aside class="oml-course-links" aria-label="<?php esc_attr_e( 'Related courses', 'ohmylms' ); ?>">
				<?php foreach ( array( 'get_ready' => __( 'Get ready for this course', 'ohmylms' ), 'subcourses' => __( 'Sub-courses', 'ohmylms' ) ) as $hub_link_key => $hub_link_label ) : ?>
					<?php if ( ! empty( $hub_links[ $hub_link_key ] ) ) : ?>
						<p class="oml-course-links-group">
							<span class="oml-course-links-label"><?php echo esc_html( $hub_link_label ); ?></span>
							<?php foreach ( $hub_links[ $hub_link_key ] as $hub_link ) : ?>
								<a class="oml-hub-chip" href="<?php echo esc_url( $hub_link['url'] ); ?>"><?php echo esc_html( $hub_link['title'] ); ?></a>
							<?php endforeach; ?>
						</p>
					<?php endif; ?>
				<?php endforeach; ?>
			</aside>
		<?php endif; ?>
		<?php if ( ! $hub_outline['enrolled'] && $hub_course_object ) : ?>
			<?php
			global $course;
			$hub_previous_course = $course;
			$course              = $hub_course_object; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited -- The enrollment card reads the current course global.
			?>
			<div id="oml-course-enroll" class="oml-course-enroll">
				<?php ohmylms_get_template( 'single-course/widgets/pricebox.php' ); ?>
			</div>
			<?php $course = $hub_previous_course; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited -- Restore the global the enrollment card borrowed. ?>
		<?php endif; ?>
		<?php if ( ! $hub_units ) : ?>
			<?php if ( ! $hub_outline['locked'] ) : ?>
				<div class="oml-hub-empty">
					<h2><?php esc_html_e( 'No activities yet', 'ohmylms' ); ?></h2>
					<p><?php esc_html_e( 'Units and activities appear here once they are published.', 'ohmylms' ); ?></p>
				</div>
			<?php endif; ?>
		<?php else : ?>
			<?php if ( $hub_summary['tracked'] ) : ?>
				<p class="oml-course-progress">
					<span class="oml-hub-chip"><?php echo esc_html( $hub_summary['percent'] . '%' ); ?></span>
					<?php
					if ( $hub_summary['skills'] ) {
						/* translators: 1: skills at Proficient or better, 2: total skills. */
						echo esc_html( sprintf( __( '%1$d of %2$d skills to Proficient', 'ohmylms' ), $hub_summary['proficient'], $hub_summary['skills'] ) );
					} else {
						/* translators: 1: completed activities, 2: total activities. */
						echo esc_html( sprintf( __( '%1$d of %2$d activities complete', 'ohmylms' ), $hub_summary['done'], $hub_summary['total'] ) );
					}
					?>
					<progress max="100" value="<?php echo esc_attr( $hub_summary['percent'] ); ?>" aria-label="<?php esc_attr_e( 'Course progress', 'ohmylms' ); ?>"></progress>
				</p>
			<?php elseif ( ! $hub_outline['enrolled'] ) : ?>
				<p class="oml-course-progress"><?php esc_html_e( 'Enroll to track your progress', 'ohmylms' ); ?></p>
			<?php endif; ?>

			<?php if ( $hub_next ) : ?>
				<aside class="oml-course-upnext" aria-label="<?php esc_attr_e( 'Up next', 'ohmylms' ); ?>">
					<span class="oml-course-upnext-label"><?php esc_html_e( 'Up next', 'ohmylms' ); ?></span>
					<a href="<?php echo esc_url( $hub_next['url'] ); ?>"><?php echo esc_html( $hub_next['name'] ); ?></a>
					<span class="oml-course-upnext-unit"><?php /* translators: %s: unit number or label, such as 3 or 2A. */ echo esc_html( sprintf( __( 'Unit %s', 'ohmylms' ), $hub_units[ $hub_next_unit ]['number'] ?? $hub_next_unit + 1 ) ); ?></span>
				</aside>
			<?php endif; ?>

			<ul class="oml-hub-legend" aria-label="<?php esc_attr_e( 'Skill mastery legend', 'ohmylms' ); ?>">
				<?php if ( $hub_summary['skills'] && $hub_outline['enrolled'] ) : ?>
					<?php foreach ( \OhMyLMS\Skills\MasteryDisplay::LEVELS as $hub_level ) : ?>
						<li class="is-<?php echo esc_attr( $hub_level ); ?>"><span class="oml-hub-swatch" aria-hidden="true"></span><?php echo esc_html( \OhMyLMS\Skills\MasteryDisplay::label( $hub_level ) ); ?></li>
					<?php endforeach; ?>
				<?php endif; ?>
				<li><span class="oml-course-marker" aria-hidden="true">↯</span><?php esc_html_e( 'Quiz', 'ohmylms' ); ?></li>
				<li><span class="oml-course-marker" aria-hidden="true">★</span><?php esc_html_e( 'Unit test', 'ohmylms' ); ?></li>
			</ul>

			<?php foreach ( $hub_units as $hub_index => $hub_unit ) : ?>
				<?php $hub_unit_skills = count( array_filter( $hub_unit['items'], static function ( $item ) { return 'practice' === $item['kind']; } ) ); ?>
				<section class="oml-course-unit" id="hub-unit-<?php echo esc_attr( $hub_index + 1 ); ?>" aria-labelledby="hub-unit-<?php echo esc_attr( $hub_index + 1 ); ?>-title">
					<p class="oml-course-unit-label"><?php /* translators: %s: unit number or label, such as 3 or 2A. */ echo esc_html( sprintf( __( 'UNIT %s', 'ohmylms' ), $hub_unit['number'] ) ); ?></p>
					<h2 id="hub-unit-<?php echo esc_attr( $hub_index + 1 ); ?>-title"><?php echo esc_html( $hub_unit['title'] ); ?></h2>
					<p class="oml-course-unit-meta">
						<?php if ( $hub_unit_skills ) : ?>
							<?php /* translators: %d: number of skills. */ echo esc_html( sprintf( _n( '%d skill', '%d skills', $hub_unit_skills, 'ohmylms' ), $hub_unit_skills ) ); ?> <span aria-hidden="true">&bull;</span>
						<?php endif; ?>
						<?php /* translators: 1: completed, 2: total. */ echo esc_html( sprintf( __( '%1$d/%2$d', 'ohmylms' ), $hub_unit['done'], $hub_unit['total'] ) ); ?>
					</p>
					<div class="oml-course-grid">
						<?php foreach ( $hub_unit['items'] as $hub_row ) : ?>
							<?php
							$hub_state = $hub_row['level'] ? $hub_row['level'] : ( $hub_row['complete'] ? 'complete' : 'none' );
							$hub_tip   = ( ! empty( $hub_row['kind_label'] ) ? $hub_row['kind_label'] : $hub_kind_name[ $hub_row['kind'] ] ) . ': ' . $hub_row['name'] . ( $hub_row['label'] ? ' (' . $hub_row['label'] . ')' : ( $hub_row['complete'] ? ' (' . __( 'Complete', 'ohmylms' ) . ')' : '' ) );
							?>
							<a class="oml-course-cell is-<?php echo esc_attr( $hub_state ); ?>" href="<?php echo esc_url( $hub_row['url'] ); ?>" title="<?php echo esc_attr( $hub_tip ); ?>"><span aria-hidden="true"><?php echo esc_html( $hub_marker( $hub_row ) ); ?></span><span class="screen-reader-text"><?php echo esc_html( $hub_tip ); ?></span></a>
						<?php endforeach; ?>
					</div>
					<?php if ( ! empty( $hub_unit['test'] ) ) : ?>
						<p class="oml-hub-levelup">
							<a class="oml-hub-button" href="<?php echo esc_url( $hub_unit['test']['url'] ); ?>"><?php esc_html_e( 'Level up', 'ohmylms' ); ?></a>
							<span><?php echo esc_html( $hub_unit['test']['complete'] ? __( 'Take the unit test again to keep your skills sharp.', 'ohmylms' ) : __( 'Take the unit test to level up your skills in this unit.', 'ohmylms' ) ); ?></span>
						</p>
					<?php endif; ?>
					<?php foreach ( $hub_unit['groups'] ?? array() as $hub_custom_group ) : ?>
						<section class="oml-hub-unit-group oml-hub-lesson-group" aria-labelledby="hub-group-<?php echo esc_attr( $hub_custom_group['id'] ); ?>">
							<h3 id="hub-group-<?php echo esc_attr( $hub_custom_group['id'] ); ?>"><?php echo esc_html( $hub_custom_group['title'] ); ?></h3>
							<?php $hub_rows( $hub_custom_group['items'] ); ?>
						</section>
					<?php endforeach; ?>
					<?php
					$hub_groups = array(
						'learn'       => array(
							'label' => __( 'Learn', 'ohmylms' ),
							'kinds' => array( 'lesson' ),
						),
						'practice'    => array(
							'label' => __( 'Practice', 'ohmylms' ),
							'kinds' => array( 'practice' ),
						),
						'assessments' => array(
							'label' => __( 'Assessments', 'ohmylms' ),
							'kinds' => array( 'quiz', 'assignment' ),
						),
					);
					foreach ( $hub_groups as $hub_group_key => $hub_group ) :
						$hub_group_items = array_filter(
							$hub_unit['ungrouped'] ?? $hub_unit['items'],
							static function ( $item ) use ( $hub_group ) {
								return in_array( $item['kind'], $hub_group['kinds'], true );
							}
						);
						if ( ! $hub_group_items ) {
							continue;
						}
						?>
					<section class="oml-hub-unit-group" aria-labelledby="hub-unit-<?php echo esc_attr( $hub_index + 1 ); ?>-<?php echo esc_attr( $hub_group_key ); ?>">
						<h3 id="hub-unit-<?php echo esc_attr( $hub_index + 1 ); ?>-<?php echo esc_attr( $hub_group_key ); ?>"><?php echo esc_html( $hub_group['label'] ); ?></h3>
						<?php $hub_rows( $hub_group_items ); ?>
					</section>
					<?php endforeach; ?>
				</section>
			<?php endforeach; ?>
			<?php if ( ! empty( $hub_outline['challenge'] ) ) : ?>
				<section class="oml-hub-challenge" aria-labelledby="hub-challenge-title">
					<h2 id="hub-challenge-title"><?php esc_html_e( 'Course challenge', 'ohmylms' ); ?></h2>
					<p class="oml-hub-challenge-text"><?php esc_html_e( 'Test your knowledge of the skills in this course.', 'ohmylms' ); ?></p>
					<a class="oml-hub-button" href="<?php echo esc_url( $hub_outline['challenge']['url'] ); ?>"><?php echo esc_html( $hub_outline['challenge']['complete'] ? __( 'Take the course challenge again', 'ohmylms' ) : __( 'Start course challenge', 'ohmylms' ) ); ?></a>
				</section>
			<?php endif; ?>
		<?php endif; ?>
		<?php if ( $hub_standalone && $hub_course_object && $hub_course_object->get_enable_reviews() ) : ?>
			<section class="oml-course-reviews" aria-labelledby="hub-reviews-title">
				<h2 id="hub-reviews-title"><?php esc_html_e( 'Reviews', 'ohmylms' ); ?></h2>
				<?php
				global $course;
				$hub_previous_course = $course;
				$course              = $hub_course_object; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited -- The reviews template reads the current course global.
				ohmylms_get_template( 'single-course/tabs/reviews.php' );
				$course = $hub_previous_course; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited -- Restore the global the reviews template borrowed.
				?>
			</section>
		<?php endif; ?>
	</div>
</div>
