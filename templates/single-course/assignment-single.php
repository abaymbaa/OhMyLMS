<?php
/**
 * The template for displaying single assignments
 *
 * This template can be overridden by copying it to yourtheme/single-course/assignment-single.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

if ( !creator_lms_is_pro() ) {
    return;
}

$assignment_id = filter_input( INPUT_GET, 'single-assignement-id', FILTER_VALIDATE_INT ) ?: '';
$attempt_id    = filter_input( INPUT_GET, 'attempt-id', FILTER_VALIDATE_INT ) ?: '';
$submission_id = filter_input( INPUT_GET, 'submission-id', FILTER_VALIDATE_INT ) ?: '';
$course_id     = filter_input( INPUT_GET, 'course-id', FILTER_VALIDATE_INT ) ?: '';

$course = omlms_get_course($course_id);

if ( empty( $assignment_id ) ) {
    return;
}

$current_student_id = get_current_user_id();
$student            = new \OMLMS\Data\Student( $current_student_id );

if ( ! $student ) {
    return;
}

$all_assignment_attempts = $student->get_all_assignment_attempts( $course_id );
$submission             = ( isset( $all_assignment_attempts[ $attempt_id - 1 ]['submissions'][ $submission_id - 1 ] ) )
    ? $all_assignment_attempts[ $attempt_id - 1 ]['submissions'][ $submission_id - 1 ]
    : [];

$assignment = omlms_get_assignment( $assignment_id );

if ( ! $assignment ) {
    return;
}

/*
 * Access control: the assignment brief and its downloadable resources are course
 * material. This view is reached via a query arg on the (public) course page, so
 * CommonHook::restrict_access() never gates it — enforce enrollment here. Guests get
 * the login form; authenticated users without access get an access-denied notice.
 */
$assignment_course_id = omlms_get_course_id_by_content_id( $assignment_id );
if ( empty( $assignment_course_id ) ) {
    $assignment_course_id = (int) $course_id;
}
$assignment_course  = $assignment_course_id ? omlms_get_course( $assignment_course_id ) : false;
$assignment_preview = get_post_meta( $assignment_id, '_preview_enable', true );

$can_view_assignment = (bool) $assignment_preview
    || current_user_can( 'manage_options' )
    || ( is_user_logged_in() && get_current_user_id() === (int) get_post_field( 'post_author', $assignment_id ) )
    || ( $assignment_course && $assignment_course->has_access() );

if ( ! $can_view_assignment ) {
    creator_lms_get_header();
    if ( ! is_user_logged_in() ) {
        omlms_get_template( 'profile/form-login.php' );
    } else {
        echo '<div class="creator-lms-access-denied-modal"><div class="creator-lms-access-denied-inner"><div class="creator-lms-access-denied-modal-content"><h4 class="creator-lms-access-denied-title">' . esc_html__( 'Access Denied', 'ohmylms' ) . '</h4><p class="creator-lms-access-denied-description">' . esc_html__( 'You do not have permission to view this content.', 'ohmylms' ) . '</p></div></div></div>';
    }
    creator_lms_get_footer();
    return;
}

// Ensure the breadcrumb below has a valid course object when `course-id` was absent.
if ( ! $course && $assignment_course ) {
    $course = $assignment_course;
}

$content          = $assignment->get_content();
$score            = isset( $submission['score'] ) ? (int) $submission['score'] : 0;
$total_points     = $assignment->get_total_points();
$note             = isset( $submission['note'] ) ? $submission['note'] : '';
$submission_date  = isset( $submission['start_date'] ) ? date( 'h:i A, F j, Y', strtotime( $submission['start_date'] ) ) : '';
$files            = isset( $submission['files'] ) ? $submission['files'] : [];
$submission_file_name = isset( $files['file'] ) ? basename( $files['file'] ) : '';
$submission_file_size = isset( $files['file'] ) ? filesize( $files['file'] ) : 0;
$submission_file_url  = isset( $submission['files']['url'] ) ? $submission['files']['url'] : '';

$submission_file_size = omlms_format_file_size( $submission_file_size );

$assignment_resource = $assignment->get_download_resource();
$class              = 'passed';
$pass_mark         = (int) $assignment->get_maximum_pass_points();

if ( $score < $pass_mark ) {
    $class = 'failed';
}


creator_lms_get_header();
?>

<nav class="creator-lms-breadcrumb">
	<div class="creator-lms-container">
		<ul>
			<li>
				<a href="<?php echo get_post_type_archive_link('omlms-course'); ?>">
					<?php echo __( 'All Courses', 'ohmylms' ); ?>
				</a>
			</li>

			<li>
				<a href="<?php echo esc_url($course->get_permalink()); ?>">
					<?php echo $course->get_name(); ?>
				</a>
			</li>

			<li>
				<?php echo $assignment->get_assignment_title();?>
			</li>
		</ul>
	</div>
</nav>

<section class="creator-lms-assignment-single">
	<div class="creator-lms-container">
		<h1 class="creator-lms-assignment-title">
			<?php echo $assignment->get_assignment_title();?>
		</h1>

		<div class="creator-lms-content-wrapper">
			<div class="creator-lms-content creator-lms-assignment-details-content creator-lms-wysiwyg-content">
				<?php echo $content; ?>

				<?php if( !empty($assignment_resource['file'] ) ) : ?>
					<ul class="creator-lms-resources-list">
						<?php foreach( $assignment_resource['file'] as $file ) : ?>
							<li>
								<div class="omlms-single-resource-info">
									<span class="resource-icon">
										<?php include(CREATOR_LMS_DIR . '/assets/images/icon/file-icon.php'); ?>
									</span>
									<span class="resource-name"><?php echo $file['name']; ?></span>
									<span class="resource-size"><?php echo $file['size']; ?></span>
								</div>
								
								<a href="<?php echo $file['url']; ?>" class="resource-action" download>
									<?php include(CREATOR_LMS_DIR . '/assets/images/icon/download-icon.php'); ?>
								</a>
							</li>
						<?php endforeach; ?>
					</ul>
				<?php endif; ?>
			</div>
			
			<aside class="creator-lms-sidebar">
				<div class="creator-lms-sidebar-widget submission-widget">
					<h3 class="submission-widget-title">
						<?php echo __( 'Your submission', 'ohmylms' ); ?>
						<time datetime="<?php echo $submission_date;?>">
							<?php echo $submission_date; ?>
						</time>
					</h3>

					<ul class="creator-lms-resources-list">
						<li>
							<div class="omlms-single-resource-info">
								<span class="resource-icon">
									<?php include(CREATOR_LMS_DIR . '/assets/images/icon/file-icon.php'); ?>
								</span>
								<span class="resource-name"><?php echo $submission_file_name;?></span>
								<span class="resource-size"><?php echo $submission_file_size;?></span>
							</div>
							
							<a href="<?php echo $submission_file_url;?>" class="resource-action" download>
								<?php include(CREATOR_LMS_DIR . '/assets/images/icon/download-icon.php'); ?>
							</a>
						</li>
					</ul>

				</div>
			</aside>
		</div>
	</div>
</section>
<?php
creator_lms_get_footer();
?>