<?php
/**
 * Template for displaying billing information of student profile
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/profile/billing-information.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();
?>

<div class="creator-lms-student-profile-tab-content student-billing">
	<h4 class="profile-tab-title">
		<?php echo __( 'Billing Information ', 'ohmylms' ); ?>
	</h4>

	<div class="creator-lms-billing-box">
		<div class="creator-lms-form-group firstname half-width">
			<label>
				<?php echo __( 'First Name', 'ohmylms' ); ?>
			</label>

			<span class="creator-lms-input-wrapper">
				<input type="text" name="firstname" placeholder="Enter first name">
			</span>
		</div>

		<div class="creator-lms-form-group lastname half-width">
			<label>
				<?php echo __( 'Last Name', 'ohmylms' ); ?>
			</label>

			<span class="creator-lms-input-wrapper">
				<input type="text" name="lastname" placeholder="Enter last name">
			</span>
		</div>

		<div class="creator-lms-form-group email">
			<label>
				<?php echo __( 'Email', 'ohmylms' ); ?>
			</label>

			<span class="creator-lms-input-wrapper">
				<input type="email" name="email" placeholder="Enter email address">
			</span>
		</div>

		<div class="creator-lms-form-group address-line1">
			<label>
				<?php echo __( 'Address line 1', 'ohmylms' ); ?>
			</label>

			<span class="creator-lms-input-wrapper">
				<input type="text" name="address-line1" placeholder="Street address, P. O. box">
			</span>
		</div>

		<div class="creator-lms-form-group address-line2">
			<label>
				<?php echo __( 'Address line 2 (optional)', 'ohmylms' ); ?>
			</label>

			<span class="creator-lms-input-wrapper">
				<input type="text" name="address-line2" placeholder="Street address, P. O. box">
			</span>
		</div>

		<div class="creator-lms-form-group city half-width">
			<label>
				<?php echo __( 'City', 'ohmylms' ); ?>
			</label>

			<span class="creator-lms-input-wrapper">
				<input type="text" name="city" placeholder="Enter your city">
			</span>
		</div>

		<div class="creator-lms-form-group state half-width">
			<label>
				<?php echo __( 'State', 'ohmylms' ); ?>
			</label>

			<span class="creator-lms-input-wrapper">
				<select name="state" id="state">
					<option value="arizona">Arizona</option>
					<option value="arizona">Arizona</option>
					<option value="arizona">Arizona</option>
					<option value="arizona">Arizona</option>
					<option value="arizona">Arizona</option>
					<option value="arizona">Arizona</option>
				</select>
			</span>
		</div>

		<div class="creator-lms-form-group zip-code half-width">
			<label>
				<?php echo __( 'ZIP / Postal code', 'ohmylms' ); ?>
			</label>

			<span class="creator-lms-input-wrapper">
				<input type="text" name="zip-code" placeholder="Enter zip code">
			</span>
		</div>

		<div class="creator-lms-form-group country half-width">
			<label>
				<?php echo __( 'Country', 'ohmylms' ); ?>
			</label>

			<span class="creator-lms-input-wrapper">
				<select name="country" id="country">
					<option value="bangladesh">Bangladesh</option>
					<option value="bangladesh">Bangladesh</option>
					<option value="bangladesh">Bangladesh</option>
					<option value="bangladesh">Bangladesh</option>
					<option value="bangladesh">Bangladesh</option>
				</select>
			</span>
		</div>

	</div>

	<?php omlms_get_template( 'global/form-submit.php' ); ?>

</div>
