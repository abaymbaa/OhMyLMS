<?php
/**
 * Template for displaying checkout billing form.
 *
 * This template can be overridden by copying it to yourtheme/ohmylms/checkout/billing-form.php.
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();
?>

<h2>Billing Details</h2>
<div class="form-group">
	<label for="first-name">First Name</label>
	<input type="text" id="first-name" name="first-name" required>
</div>
<div class="form-group">
	<label for="last-name">Last Name</label>
	<input type="text" id="last-name" name="last-name" required>
</div>
<div class="form-group">
	<label for="email">Email</label>
	<input type="email" id="email" name="email" required>
</div>
<div class="form-group">
	<label for="address">Address</label>
	<input type="text" id="address" name="address" required>
</div>
<div class="form-group">
	<label for="city">City</label>
	<input type="text" id="city" name="city" required>
</div>
<div class="form-group">
	<label for="state">State</label>
	<input type="text" id="state" name="state" required>
</div>
<div class="form-group">
	<label for="zip">Zip Code</label>
	<input type="text" id="zip" name="zip" required>
</div>
<div class="form-group">
	<label for="country">Country</label>
	<input type="text" id="country" name="country" required>
</div>
