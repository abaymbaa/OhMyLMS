<?php
/**
 * Signup form
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/global/form-signup.php.
 *
 * @package OMLMS\Templates
 * * @version  1.0.0
 * * @global \CodeRex\Ecommerce\Checkout $checkout
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>
<?php omlms_get_template( 'global/creator-lms-celebration.php' ); ?>

<form class="creator-lms-login-signup creator-lms-form-signup signup" method="post" <?php echo ( $hidden ) ? 'style="display:none;"' : ''; ?> >

	<?php do_action( 'creator_lms_signup_form_start' ); ?>

	<?php echo ( $message ) ? wpautop( wptexturize( $message ) ) : ''; // @codingStandardsIgnoreLine ?>

	<div class="creator-lms-form-row creator-lms-form-names-row">
		<p class="creator-lms-form-row row-first-name">
			<span class="creator-lms-input-wrapper">
				<label for="signup-first-name" class="creator-lms-input-label">
					<?php esc_html_e( 'First Name', 'ohmylms' ); ?>&nbsp;
					<span class="required" aria-hidden="true">*</span>
				</label>

				<input type="text" class="creator-lms-input-text" name="first_name" id="signup-first-name" required aria-required="true" />
			</span>
		</p>

		<p class="creator-lms-form-row row-last-name">
			<span class="creator-lms-input-wrapper">
				<label for="signup-last-name" class="creator-lms-input-label">
					<?php esc_html_e( 'Last Name', 'ohmylms' ); ?>&nbsp;
					<span class="required" aria-hidden="true">*</span>
				</label>

				<input type="text" class="creator-lms-input-text" name="last_name" id="signup-last-name" required aria-required="true" />
			</span>
		</p>
	</div>

	<p class="creator-lms-form-row row-email">
		<span class="creator-lms-input-wrapper">
			<label for="signup-email" class="creator-lms-input-label">
				<?php esc_html_e( 'Email', 'ohmylms' ); ?>&nbsp;
				<span class="required" aria-hidden="true">*</span>

				<span class="screen-reader-text">
					<?php esc_html_e( 'Required', 'ohmylms' ); ?>
				</span>
			</label>

			<input type="email" class="creator-lms-input-text email" name="email" id="signup-email" aria-required="true" required pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" />
		</span>
	</p>

	<p class="creator-lms-form-row row-password">
		<span class="creator-lms-input-wrapper">
			<label for="signup-password" class="creator-lms-input-label">
				<?php esc_html_e( 'Password', 'ohmylms' ); ?>&nbsp;
				<span class="required" aria-hidden="true">*</span>

				<span class="screen-reader-text">
					<?php esc_html_e( 'Required', 'ohmylms' ); ?>
				</span>
			</label>

			<span class="creator-lms-password-show">
				<input class="creator-lms-input-text password" type="password" name="password" id="signup-password" autocomplete="current-password" required aria-required="true">

				<label class="show-password-icon" tabindex="0">
					<input type="checkbox" name="show-password-checkbox" class="show-password-checkbox" aria-required="true" aria-hidden="true">

					<span class="show-password" aria-label="Toggle password visibility">
						<span class="eye-on">
							<?php
								include(CREATOR_LMS_DIR . '/assets/images/icon/eye-icon2.php');
							?>
						</span>

						<span class="eye-off">
							<?php
								include(CREATOR_LMS_DIR . '/assets/images/icon/eye-off-icon.php');
							?>
						</span>
					</span>
				</label>
			</span>
		</span>
	</p>

	<p class="creator-lms-form-row row-phone">
		<span class="creator-lms-input-wrapper">
			<label for="signup-phone" class="creator-lms-input-label">
				<?php esc_html_e( 'Phone Number', 'ohmylms' ); ?>
			</label>

			<input type="text" class="creator-lms-input-text phone" name="phone" id="signup-phone" />
		</span>
	</p>

	<p class="creator-lms-form-row row-country">
		<span class="creator-lms-input-wrapper">
			<label for="signup-country" class="creator-lms-input-label">
				<?php esc_html_e( 'Country', 'ohmylms' ); ?>
			</label>

			<select name="country" id="signup-country" class="creator-lms-input-text">
				<option value=""><?php esc_html_e( '— Select country —', 'ohmylms' ); ?></option>
				<?php foreach ( creator_lms_get_countries() as $country ) : ?>
					<option value="<?php echo esc_attr( $country['code'] ); ?>"><?php echo esc_html( $country['title'] ); ?></option>
				<?php endforeach; ?>
			</select>
		</span>
	</p>

	<?php do_action( 'creator_lms_signup_form' ); ?>

	<p class="creator-lms-form-row privacy-policy-row">
		<label for="tnc-accept" class="creator-lms-checkbox creator-lms-form-login-rememberme">
			<input class="creator-lms-form__input creator-lms-form__input-checkbox" name="tnc-accept" type="checkbox" id="tnc-accept" required />

			<span class="creator-lms-checkbox-text">
				<span class="checkedbox" aria-hidden="true" id="tnc-accept-label">
					<svg width="11" height="8" fill="none" viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M9.845 1.157c.207.21.207.55 0 .76L5.3 6.528c-.62.63-1.626.63-2.247 0L1.155 4.602a.543.543 0 010-.76.524.524 0 01.749 0L3.802 5.77c.207.21.542.21.749 0l4.545-4.612a.524.524 0 01.749 0z" clip-rule="evenodd"/></svg>
				</span>
				<?php
					printf(
						wp_kses_post(
							__('By signing up, you agree to our <a href="%1$s" target="_blank">Privacy Policy</a>.', 'ohmylms')
						),
						esc_url(get_permalink(get_option('wp_page_for_privacy_policy')))
					);
				?>
			</span>
		</label>
	</p>

	<p class="creator-lms-form-row form-submit-btn">
		<?php wp_nonce_field( 'creator-lms-signup', 'creator-lms-signup-nonce' ); ?>
		<input type="hidden" name="action" value="creator_lms_signup">
		<input type="hidden" name="redirect_to" value="<?php echo esc_url( $redirect_to ); ?>" />

		<button type="submit" class="creator-lms-button creator-lms-form-signup-submit" name="signup" value="<?php esc_attr_e( 'Sign Up', 'ohmylms' ); ?>" disabled>
			<?php esc_html_e( 'Sign Up', 'ohmylms' ); ?>
		</button>
	</p>

	<p class="creator-lms-form-row dont-have-account">
		<?php echo __('Already have an account?', 'ohmylms') ?>
		<a href="#" class="creator-lms-show-login-form">
			<?php esc_html_e( 'Log In', 'ohmylms' ); ?>
		</a>
	</p>

	<?php do_action( 'creator_lms_signup_form_end' ); ?>

</form>

