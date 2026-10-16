<?php
/**
 * Signed-out entry: choose learner, parent or teacher, then sign in or create a parent account.
 *
 * @package OhMyLMS
 */

use OhMyLMS\Student\Hub;
use OhMyLMS\Student\ParentActions;
use OhMyLMS\Student\ParentWorkspace;
use OhMyLMS\Student\TeacherWorkspace;

defined( 'ABSPATH' ) || exit;

$signin_role   = isset( $signin_role ) ? $signin_role : '';
$signin_return = isset( $signin_return ) ? $signin_return : Hub::url();
$signup        = isset( $_GET['signup'] ) && is_string( $_GET['signup'] ) ? sanitize_key( wp_unslash( $_GET['signup'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Read-only result code.
$error_key     = 'ohmylms_parent_signup_' . ParentActions::client_key();
$error_text    = 'failed' === $signup ? get_transient( $error_key ) : '';
if ( $error_text ) {
	delete_transient( $error_key );
}
$choices = array(
	array( 'learner', __( 'I’m a learner', 'ohmylms' ), Hub::url() ),
	array( 'parent', __( 'I’m a parent', 'ohmylms' ), ParentWorkspace::url() ),
	array( 'teacher', __( 'I’m a teacher', 'ohmylms' ), TeacherWorkspace::url() ),
);
?>
<div class="ohmylms-student-hub oml-hub-signin" data-role-choice="<?php echo esc_attr( $signin_role ? $signin_role : 'none' ); ?>">
	<h2><?php esc_html_e( 'Your learning space', 'ohmylms' ); ?></h2>
	<nav class="oml-hub-subnav" aria-label="<?php esc_attr_e( 'Choose how you use this site', 'ohmylms' ); ?>">
		<?php foreach ( $choices as $choice ) : ?>
			<a class="oml-hub-pill" href="<?php echo esc_url( $choice[2] ); ?>" <?php echo ( $signin_role ? $signin_role : 'learner' ) === $choice[0] ? 'aria-current="page"' : ''; ?>><?php echo esc_html( $choice[1] ); ?></a>
		<?php endforeach; ?>
	</nav>
	<p><a class="oml-hub-button" href="<?php echo esc_url( wp_login_url( $signin_return ) ); ?>"><?php esc_html_e( 'Sign in to continue', 'ohmylms' ); ?></a></p>
<?php
$signup_role      = $signin_role ? $signin_role : 'learner';
	$signup_texts = array(
		'learner' => array( __( 'Create a learner account', 'ohmylms' ), __( 'No course enrollment is created. You can join a class later with an invitation.', 'ohmylms' ), 'student', __( 'Create learner account', 'ohmylms' ) ),
		'parent'  => array( __( 'Create a parent account', 'ohmylms' ), __( 'A parent account does not link to a child automatically. A school must approve the link before you can see any learner’s work.', 'ohmylms' ), 'parent', __( 'Create parent account', 'ohmylms' ) ),
		'teacher' => array( __( 'Create a teacher account', 'ohmylms' ), __( 'You can create your own classes. A school links you to its classes only through an invitation.', 'ohmylms' ), 'teacher', __( 'Create teacher account', 'ohmylms' ) ),
	);
	$signup_text  = $signup_texts[ $signup_role ];
	?>
		<section class="oml-hub-card oml-hub-settings-card">
			<h3><?php echo esc_html( $signup_text[0] ); ?></h3>
			<p><?php echo esc_html( $signup_text[1] ); ?></p>
			<?php if ( 'created' === $signup ) : ?>
				<p class="oml-hub-notice" role="status"><?php esc_html_e( 'Account created. If email verification is required, check your inbox first, then sign in.', 'ohmylms' ); ?></p>
			<?php elseif ( $error_text ) : ?>
				<p class="oml-hub-notice" role="alert"><?php echo esc_html( $error_text ); ?></p>
			<?php endif; ?>
			<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" autocomplete="off">
				<input type="hidden" name="action" value="<?php echo esc_attr( ParentActions::ACTION ); ?>">
				<?php Hub::nonce_field( ParentActions::ACTION ); ?>
				<input type="hidden" name="role" value="<?php echo esc_attr( $signup_text[2] ); ?>">
				<div class="oml-hub-field"><label for="parent-first"><?php esc_html_e( 'First name', 'ohmylms' ); ?></label><input id="parent-first" name="first_name" type="text" required maxlength="60" autocomplete="given-name"></div>
				<div class="oml-hub-field"><label for="parent-last"><?php esc_html_e( 'Last name', 'ohmylms' ); ?></label><input id="parent-last" name="last_name" type="text" maxlength="60" autocomplete="family-name"></div>
				<div class="oml-hub-field"><label for="parent-email"><?php esc_html_e( 'Email', 'ohmylms' ); ?></label><input id="parent-email" name="email" type="email" required maxlength="190" autocomplete="email"></div>
				<div class="oml-hub-field"><label for="parent-pass"><?php esc_html_e( 'Password (12–128 characters)', 'ohmylms' ); ?></label><input id="parent-pass" name="password" type="password" required minlength="12" maxlength="128" autocomplete="new-password"></div>
				<div class="screen-reader-text" aria-hidden="true"><label>Website<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
				<p class="oml-hub-actions"><button type="submit" class="oml-hub-button"><?php echo esc_html( $signup_text[3] ); ?></button></p>
			</form>
		</section>
</div>
