<?php
/**
 * Student dashboard. Override in yourtheme/ohmylms/profile/student-dashboard.php.
 *
 * The sections come from the "Student dashboard" layout in OhMyLMS > Profile Builder (block editor);
 * each is a template under profile/sections/.
 */
defined( 'ABSPATH' ) || exit;
if ( ! is_user_logged_in() ) {
	return; }
$oml_context = \OhMyLMS\ProfileBuilder\Sections::context();
$dashboard   = $oml_context['dashboard'];
?>
<?php ohmylms_get_template( 'global/ohmylms-celebration.php' ); ?>
<section class="oml-student-dashboard" data-dashboard-theme="<?php echo esc_attr( $dashboard['theme'] ); ?>" data-theme-endpoint="<?php echo esc_url( rest_url( 'ohmylms/v1/student/dashboard-theme' ) ); ?>" data-nonce="<?php echo esc_attr( wp_create_nonce( 'wp_rest' ) ); ?>" data-save-error="<?php esc_attr_e( 'Could not save your theme. Please try again.', 'ohmylms' ); ?>" data-save-success="<?php esc_attr_e( 'Dashboard theme saved.', 'ohmylms' ); ?>">
	<?php echo \OhMyLMS\ProfileBuilder\Layouts::render( 'student' ); // phpcs:ignore WordPress.Security.EscapeOutput -- block output, escaped by each section. ?>
</section>
