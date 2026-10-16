<?php
/**
 * Course overview: hero, progress strip and unit accordions.
 * Override in yourtheme/ohmylms/student-hub/course.php.
 *
 * @package OhMyLMS
 */

use OhMyLMS\Student\CourseOutline;
use OhMyLMS\Student\Hub;

defined( 'ABSPATH' ) || exit;

$hub_outline = CourseOutline::get( absint( get_query_var( 'hub_course', 0 ) ), get_current_user_id() );
$hub_back    = Hub::url( 'library' );

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
?>
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
		<p><?php esc_html_e( 'This course is protected. Open the course page to enter its password.', 'ohmylms' ); ?></p>
	<?php endif; ?>
	<a class="oml-hub-button" href="<?php echo esc_url( $hub_outline['continue']['url'] ); ?>"><?php echo esc_html( $hub_outline['continue']['label'] ); ?></a>
</section>
<?php if ( ! $hub_units ) : ?>
	<?php if ( ! $hub_outline['locked'] ) : ?>
		<div class="oml-hub-empty">
			<h2><?php esc_html_e( 'No activities yet', 'ohmylms' ); ?></h2>
			<p><?php esc_html_e( 'Units and activities appear here once they are published.', 'ohmylms' ); ?></p>
		</div>
	<?php endif; ?>
	<?php return; ?>
<?php endif; ?>

<details class="oml-hub-progress" open>
	<summary>
		<span class="oml-hub-progress-title"><?php esc_html_e( 'Course progress', 'ohmylms' ); ?></span>
		<?php if ( $hub_summary['tracked'] ) : ?>
			<span class="oml-hub-chip"><?php echo esc_html( $hub_summary['percent'] . '%' ); ?></span>
		<?php endif; ?>
		<span class="oml-hub-progress-text">
			<?php
			if ( ! $hub_outline['enrolled'] ) {
				esc_html_e( 'Enroll to track your progress', 'ohmylms' );
			} elseif ( $hub_summary['skills'] && $hub_summary['tracked'] ) {
				/* translators: 1: skills at Proficient or better, 2: total skills. */
				echo esc_html( sprintf( __( '%1$d of %2$d skills to Proficient', 'ohmylms' ), $hub_summary['proficient'], $hub_summary['skills'] ) );
			} else {
				/* translators: 1: completed activities, 2: total activities. */
				echo esc_html( sprintf( __( '%1$d of %2$d activities complete', 'ohmylms' ), $hub_summary['done'], $hub_summary['total'] ) );
			}
			?>
		</span>
		<?php if ( $hub_outline['enrolled'] ) : ?>
			<progress max="100" value="<?php echo esc_attr( $hub_summary['percent'] ); ?>" aria-label="<?php esc_attr_e( 'Course progress', 'ohmylms' ); ?>"></progress>
		<?php endif; ?>
	</summary>
	<ol class="oml-hub-strip">
		<?php foreach ( $hub_units as $hub_index => $hub_unit ) : ?>
			<li>
				<a class="oml-hub-strip-title" href="#hub-unit-<?php echo esc_attr( $hub_index + 1 ); ?>"><?php echo esc_html( $hub_unit['title'] ); ?></a>
				<span class="oml-hub-dots">
					<?php foreach ( $hub_unit['items'] as $hub_row ) : ?>
						<?php
						$hub_state = $hub_row['level'] ? $hub_row['level'] : ( $hub_row['complete'] ? 'complete' : 'none' );
						$hub_tip   = ( ! empty( $hub_row['kind_label'] ) ? $hub_row['kind_label'] : $hub_kind_name[ $hub_row['kind'] ] ) . ': ' . $hub_row['name'] . ( $hub_row['label'] ? ' (' . $hub_row['label'] . ')' : ( $hub_row['complete'] ? ' (' . __( 'Complete', 'ohmylms' ) . ')' : '' ) );
						?>
						<span class="oml-hub-dot is-<?php echo esc_attr( $hub_state ); ?>" title="<?php echo esc_attr( $hub_tip ); ?>"><?php echo $hub_kind_icon( $hub_row['kind'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Static SVG built from an allowlist. ?><span class="screen-reader-text"><?php echo esc_html( $hub_tip ); ?></span></span>
					<?php endforeach; ?>
				</span>
			</li>
		<?php endforeach; ?>
	</ol>
</details>

<?php if ( $hub_summary['skills'] && $hub_outline['enrolled'] ) : ?>
	<ul class="oml-hub-legend" aria-label="<?php esc_attr_e( 'Skill mastery legend', 'ohmylms' ); ?>">
		<?php foreach ( \OhMyLMS\Skills\MasteryDisplay::LEVELS as $hub_level ) : ?>
			<li class="is-<?php echo esc_attr( $hub_level ); ?>"><span class="oml-hub-swatch" aria-hidden="true"></span><?php echo esc_html( \OhMyLMS\Skills\MasteryDisplay::label( $hub_level ) ); ?></li>
		<?php endforeach; ?>
	</ul>
<?php endif; ?>

<div class="oml-hub-units-head">
	<h2><?php esc_html_e( 'Units', 'ohmylms' ); ?></h2>
	<button type="button" class="oml-hub-link-button" data-hub-expand-all data-expand="<?php esc_attr_e( 'Expand all', 'ohmylms' ); ?>" data-collapse="<?php esc_attr_e( 'Collapse all', 'ohmylms' ); ?>"><?php esc_html_e( 'Expand all', 'ohmylms' ); ?></button>
</div>
<div class="oml-hub-units">
	<?php foreach ( $hub_units as $hub_index => $hub_unit ) : ?>
		<details class="oml-hub-unit" id="hub-unit-<?php echo esc_attr( $hub_index + 1 ); ?>">
			<summary class="oml-hub-disclosure">
				<span class="oml-hub-unit-title"><?php /* translators: 1: unit number, 2: unit title. */ echo esc_html( sprintf( __( 'Unit %1$d: %2$s', 'ohmylms' ), $hub_index + 1, $hub_unit['title'] ) ); ?></span>
				<?php if ( $hub_outline['enrolled'] ) : ?>
					<span class="oml-hub-unit-count"><?php /* translators: 1: completed, 2: total. */ echo esc_html( sprintf( __( '%1$d/%2$d', 'ohmylms' ), $hub_unit['done'], $hub_unit['total'] ) ); ?></span>
				<?php endif; ?>
			</summary>
			<?php if ( ! empty( $hub_unit['test'] ) ) : ?>
				<p class="oml-hub-levelup">
					<a class="oml-hub-button" href="<?php echo esc_url( $hub_unit['test']['url'] ); ?>"><?php esc_html_e( 'Level up', 'ohmylms' ); ?></a>
					<span><?php echo esc_html( $hub_unit['test']['complete'] ? __( 'Take the unit test again to keep your skills sharp.', 'ohmylms' ) : __( 'Take the unit test to level up your skills in this unit.', 'ohmylms' ) ); ?></span>
				</p>
			<?php endif; ?>
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
					$hub_unit['items'],
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
				<ul class="oml-hub-rows">
				<?php foreach ( $hub_group_items as $hub_row ) : ?>
					<li>
						<a class="oml-hub-row" href="<?php echo esc_url( $hub_row['url'] ); ?>">
							<span class="oml-hub-row-icon <?php echo esc_attr( $hub_row['level'] ? 'is-' . $hub_row['level'] : ( $hub_row['complete'] ? 'is-complete' : '' ) ); ?>"><?php echo $hub_kind_icon( $hub_row['kind'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Static SVG built from an allowlist. ?></span>
							<span class="oml-hub-row-name"><?php echo esc_html( $hub_row['name'] ); ?></span>
							<span class="oml-hub-row-meta"><?php echo esc_html( $hub_row['label'] ? $hub_row['label'] : ( ! empty( $hub_row['kind_label'] ) ? $hub_row['kind_label'] : $hub_kind_name[ $hub_row['kind'] ] ) ); ?><?php echo $hub_row['complete'] && ! $hub_row['label'] ? ' · ' . esc_html__( 'Complete', 'ohmylms' ) : ''; ?></span>
						</a>
					</li>
				<?php endforeach; ?>
			</ul>
			</section>
			<?php endforeach; ?>
		</details>
	<?php endforeach; ?>
</div>
<?php if ( ! empty( $hub_outline['challenge'] ) ) : ?>
	<section class="oml-hub-challenge" aria-labelledby="hub-challenge-title">
		<h2 id="hub-challenge-title"><?php esc_html_e( 'Course challenge', 'ohmylms' ); ?></h2>
		<p class="oml-hub-challenge-text"><?php esc_html_e( 'Test your knowledge of the skills in this course.', 'ohmylms' ); ?></p>
		<a class="oml-hub-button" href="<?php echo esc_url( $hub_outline['challenge']['url'] ); ?>"><?php echo esc_html( $hub_outline['challenge']['complete'] ? __( 'Take the course challenge again', 'ohmylms' ) : __( 'Start course challenge', 'ohmylms' ) ); ?></a>
	</section>
<?php endif; ?>
