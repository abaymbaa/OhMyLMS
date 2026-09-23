<?php
/**
 * Template for displaying billing fields.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/checkout/terms.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \CodeRex\Ecommerce\Checkout $checkout
 */

defined( 'ABSPATH' ) || exit();
?>


<div class="creator-lms-tnc-wrapper">
	<p class="creator-lms-form-row validate-required">
		<label for="terms" class="creator-lms-checkbox creator-lms-tnc-label creator-lms-tnc-label-for-checkbox" tabindex="0">
			<input type="checkbox" class="creator-lms-tnc-input-checkbox" name="terms" id="terms" aria-required="true" aria-labelledby="terms-label" />
			<span class="creator-lms-checkbox-text">
				<span class="checkedbox" aria-hidden="true" id="terms-label"></span>
				<?php
					$link = '#';
					$privacy_policy_page = get_option( 'wp_page_for_privacy_policy' );

					if( $privacy_policy_page ) {
						$link = esc_url( get_the_permalink( $privacy_policy_page ) );
					}

					if ( empty($link) ) {
						$link = $link ? $link : '#';
					}
					$privacy_policy_link = '<a href="'.$link.'">' . __('privacy policy', 'ohmylms') . '</a>';
					$privacy_policy_text = get_option('creator_lms_privacy_policy_message', '');

					if (empty($privacy_policy_text)) {
						$privacy_policy_text = 'Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our [privacy_policy].';
					}
					// releace the [privacy_policy] text with link
					$privacy_policy_text = str_replace('[privacy_policy]', $privacy_policy_link, $privacy_policy_text);
					echo $privacy_policy_text;
				?>
			</span>
		</label>
		<input type="hidden" name="terms-field" value="1" />
	</p>
</div>
