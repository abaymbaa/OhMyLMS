<?php
/**
 * The template for displaying single course information
 *
 * This template can be overridden by copying it to yourtheme/single-course/tabs/information.php
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;
$course_id = $course->get_id();
$chapters  = $course->get_chapters( 'objects' );
$lessons   = $course->get_lessons( 'objects' );

$single_course_layout = get_option( 'ohmylms_single_course_page_layout', 'layout_1' );
$chapter_classs       = 'ohmylms-chapter-layout-1';

if ( 'layout_2' === $single_course_layout ) {
	$chapter_classs = 'ohmylms-chapter-layout-2';
	ohmylms_enqueue_interactivity_module( 'ohmylms/curriculum' );
}
$expanded = array();
foreach ( $chapters as $chapter ) {
	$expanded[ $chapter->get_id() ] = false;
}

?>

<div class="ohmylms-course-chapters <?php echo $chapter_classs; ?>" 
<?php
if ( $single_course_layout === 'layout_2' ) {
	echo 'data-wp-interactive="ohmylms/curriculum" ' . wp_interactivity_data_wp_context(
		array(
			'expanded' => (object) $expanded,
			'showAll'  => false,
		)
	); }
?>
>
	<?php if ( 'layout_2' === $single_course_layout && count( $chapters ) > 0 ) { ?>
		<div class="chapters-header">
			<div class="chapters-header-left">
				<h2 class="ohmylms-content-section-title chapter-header-title">
					<?php echo __( 'Course content', 'ohmylms' ); ?>
				</h2>

				<span class="chapter-overview">
					<?php
						// ----total chapters----
						$total_chapters = count( $chapters );
						printf(
							_nx(
								'1 chapter',
								'%s chapters',
								$total_chapters,
								'chapter count',
								'ohmylms'
							),
							$total_chapters
						);

						// ----total lesson----
						$total_lesson = $course->get_lessons_count();
					if ( $total_lesson > 0 ) {
						echo ' • ';
						printf(
							_nx(
								'1 lesson',
								'%s lessons',
								$total_lesson,
								'lesson count',
								'ohmylms'
							),
							$total_lesson
						);
					}

						// ----total time----
					if ( ohmylms_format_duration( $course->get_duration() ) ) {
						echo ' • ';
						echo ohmylms_format_duration( $course->get_duration() ) . ' ' . __( 'total time', 'ohmylms' );
					}
					?>
				</span>
			</div>

			<div class="chapters-header-right">
				<div class="ohmylms-chapter-toggle">
					<button class="chapter-expand" type="button" aria-expanded="false" aria-controls="ohmylms-chapters" data-wp-on--click="actions.expand" data-wp-bind--hidden="state.allExpanded">
						<?php echo __( 'Expand all chapters', 'ohmylms' ); ?>
					</button>

					<button class="chapter-collapse" type="button" aria-expanded="true" aria-controls="ohmylms-chapters" hidden data-wp-on--click="actions.collapse" data-wp-bind--hidden="!state.allExpanded">
						<?php echo __( 'Collapse all chapters', 'ohmylms' ); ?>
					</button>
				</div>
			</div>
		</div>
	<?php } ?>

	<?php
	foreach ( $chapters as $chapter ) {
		if ( \OhMyLMS\Extensions\Layouts::render(
			'chapter',
			$chapter->get_id(),
			$course->get_id(),
			array(
				'chapter' => $chapter,
				'course'  => $course,
			)
		) ) {
			continue;
		}

		$chapter_id           = $chapter->get_id();
		$chapter_title        = $chapter->get_name();
		$chapter_lessons      = $chapter->get_lessons( 'objects' );
		$chapter_lesson_count = count( $chapter_lessons );

		$chapter_lesson_titles = array();
		?>

		<div class="ohmylms-single-chapter" 
		<?php
		if ( $single_course_layout === 'layout_2' ) {
			echo wp_interactivity_data_wp_context( array( 'chapterId' => (int) $chapter_id ) ) . ' data-wp-class--active="state.chapterOpen" data-wp-style--display="state.chapterDisplay"'; }
		?>
		>
			<?php if ( 'layout_1' === $single_course_layout ) { ?>
				<div class="chapter-title-wrapper">
					<h2 class="chapter-title">
						<?php
							echo $chapter_title;
						?>
					</h2>

					<?php
					if ( $chapter->get_description() ) {
						echo '<div class="ohmylms-wysiwyg-content">' . $chapter->get_description() . '</div>';
					}
					?>
				</div>
			<?php } ?>

			<?php if ( 'layout_2' === $single_course_layout ) { ?>
				<h3 class="chapter-title" role="button" tabindex="0" aria-expanded="false" data-wp-bind--aria-expanded="state.chapterOpen" data-wp-on--click="actions.toggle" data-wp-on--keydown="actions.key">
					<span class="arrow">
						<svg width="12" height="7" fill="none" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg"><path fill="#A1A1AA" d="M11.59.841a.832.832 0 00-1.184 0L6.59 4.658a.833.833 0 01-1.184 0L1.59.84A.833.833 0 10.406 2.016l3.825 3.825a2.5 2.5 0 003.534 0l3.825-3.825a.833.833 0 000-1.175z"/></svg>
					</span>

					<span class="chapter-title-text">
						<?php
							echo $chapter_title;
						?>
					</span>

					<?php
						$total_lesson = $chapter->get_lesson_count();

					if ( $total_lesson > 0 ) {
						echo '<span class="chapter-info">';
							printf(
								_nx(
									'1 lesson',
									'%s lessons',
									$total_lesson,
									'lesson count',
									'ohmylms'
								),
								$total_lesson
							);
						echo '</span>';
					}
					?>
				</h3>
			<?php } ?>

			<ul class="ohmylms-chapter-content-list <?php echo 'layout_1' === $single_course_layout && count( $chapter_lessons ) > 2 ? 'enabled-readmore' : ''; ?>" 
			<?php
			if ( $single_course_layout === 'layout_2' ) {
				echo 'data-wp-style--display="state.display"';}
			?>
			>
				<?php
					// ----add chapter description in the li item for layout 2----
				if ( 'layout_2' === $single_course_layout && $chapter->get_description() ) {
					echo '<div class="ohmylms-wysiwyg-content">' . $chapter->get_description() . '</div>';
				}

				foreach ( $chapter_lessons as $index => $lesson ) {
					if ( ! $lesson ) {
						continue;
					}
					$lesson_id          = $lesson->get_id();
					$lesson_title       = $lesson->get_name();
					$type               = $lesson->get_type();
					$current_student_id = get_current_user_id();
					$student            = $current_student_id ? new \OhMyLMS\Data\Student( $current_student_id ) : null;
					$maybe_enrolled     = $student ? $student->maybe_enrolled( $course_id ) : false;
					$content_type       = get_post_meta( $lesson_id, '_content_type', true );
					$preview_mode       = get_post_meta( $lesson_id, '_preview_enable', true );

					switch ( $type ) {
						case 'video':
							$icon = 'play-circle-icon.php';
							break;
						case 'audio':
							$icon = 'audio-icon.php';
							break;
						case 'text':
							$icon = 'text-file-icon.php';
							break;
						case 'quiz':
							$icon = 'quiz-icon.php';
							break;
						case 'assignment':
							$icon = 'assignment-icon.php';
							break;
						case 'event':
							$icon = 'calendar-icon.php';
							break;
						default:
							$icon = 'text-file-icon.php';
							break;
					}

					if ( 'session' == $content_type ) {
						$icon = 'live-file-icon.php';
						$type = $content_type;
					}

					if ( 'assignment' === $type && ! ohmylms_is_pro() ) {
						continue;
					}

					?>

						<li class="ohmylms-chapter-content-list-item type-<?php echo $type; ?><?php echo ! $maybe_enrolled ? ' lesson-locked' : ''; ?>">
							<span class="icon">
							<?php include OHMYLMS_DIR . '/assets/images/icon/' . $icon; ?>
							</span>
							<span class="lesson-title-row">
							<?php
							if ( function_exists( 'apply_filters' ) ) {
								$is_lesson_locked   = apply_filters( 'ohmylms_is_lesson_locked', false, $lesson_id, $course_id, $current_student_id );
								$unlock_date        = '';
								$is_sequential_lock = false;
								if ( $is_lesson_locked ) {
									$unlock_date = apply_filters( 'ohmylms_lesson_unlock_date', '', $lesson_id, $course_id, $current_student_id );
									// Determine if this lock is from sequential mode (no date = sequential, date = drip).
									if ( ! $unlock_date ) {
										$is_sequential_lock = apply_filters( 'ohmylms_is_lesson_sequentially_locked', false, $lesson_id, $course_id, $current_student_id );
									}
								}
							} else {
								$is_lesson_locked   = false;
								$unlock_date        = '';
								$is_sequential_lock = false;
							}
							?>
								<?php
								if ( $maybe_enrolled || $preview_mode ) {
									if ( ! $is_lesson_locked || $preview_mode ) {
										if ( 'layout_1' === $single_course_layout && count( $chapter_lessons ) > 2 ) {
											if ( function_exists( 'get_permalink' ) ) {
												?>
												<a href="<?php echo get_permalink( $lesson_id ); ?>" tabindex="-1"><?php echo $lesson_title; ?></a>
											<?php } else { ?>
												<span><?php echo $lesson_title; ?></span>
												<?php
											}
										} elseif ( function_exists( 'get_permalink' ) ) {
											?>
												<a href="<?php echo get_permalink( $lesson_id ); ?>"><?php echo $lesson_title; ?></a>
											<?php } else { ?>
												<span><?php echo $lesson_title; ?></span>
											<?php

											}
									} else {
										?>
										<span class="lesson-title-locked">
											<?php echo $lesson_title; ?>
											<?php if ( $is_sequential_lock ) : ?>
												<span class="lesson-unlock-tooltip"><?php esc_html_e( 'Complete previous lesson to unlock', 'ohmylms' ); ?></span>
											<?php elseif ( $unlock_date ) : ?>
												<span class="lesson-unlock-tooltip"><?php echo esc_html( sprintf( __( 'Unlocks on %s', 'ohmylms' ), $unlock_date ) ); ?></span>
											<?php endif; ?>
										</span>
										<?php
									}
								} else {
									?>
									<span class="lesson-title-locked"><?php echo $lesson_title; ?></span>
								<?php } ?>
								<?php
								$show_lock = ( ! $maybe_enrolled || ( isset( $is_lesson_locked ) && $is_lesson_locked ) );

								if ( $show_lock && ! $preview_mode ) {
									?>
									<span class="lock-icon">
										<?php include OHMYLMS_DIR . '/assets/images/icon/lock-icon.php'; ?>
									</span>
								<?php } ?>
							</span>

						</li>
						<?php
				}
				?>
			</ul>

			<?php if ( 'layout_1' === $single_course_layout && count( $chapter_lessons ) > 2 ) { ?>
				<button class="readmore" tabindex="0" aria-expanded="false">
					<span class="readmore-text">
						<?php echo __( 'See more lesson items', 'ohmylms' ); ?>
					</span>

					<svg width="12" height="6" fill="none" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg"><path fill="var(--ohmylms-primary-color)" stroke="var(--ohmylms-primary-color)" stroke-width=".4" d="M10.5.375a.75.75 0 00-.533.217L6.532 4.035a.75.75 0 01-1.065 0L2.032.592A.753.753 0 10.967 1.657l3.442 3.435a2.295 2.295 0 003.18 0l3.443-3.435a.748.748 0 00-.245-1.226.75.75 0 00-.288-.056z"/></svg>
				</button>
			<?php } ?>
		</div>

		<?php
	}

	// --------show more chapter button for layout 2----
	if ( 'layout_2' === $single_course_layout && count( $chapters ) > 5 ) {
		$additional_chapters = count( $chapters ) - 5;
		$more_section_text   = __( 'More Sections', 'ohmylms' );

		echo '<button type="button" class="show-more-chapter" data-wp-on--click="actions.showAll" data-wp-bind--hidden="context.showAll">' . $additional_chapters . ' ' . $more_section_text . '<svg width="12" height="7" fill="none" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg"><path fill="var(--ohmylms-primary-color)" d="M11.59.841a.832.832 0 00-1.184 0L6.59 4.658a.833.833 0 01-1.184 0L1.59.84A.833.833 0 10.406 2.016l3.825 3.825a2.5 2.5 0 003.534 0l3.825-3.825a.833.833 0 000-1.175z"/></svg></button>';
	}

	?>
</div>
