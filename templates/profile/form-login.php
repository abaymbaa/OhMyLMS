<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$args = [
	'redirect_to' => isset( $_GET['redirect_to'] ) ? $_GET['redirect_to'] : '',
];

?>

<div class="creator-lms-user-login-wrapper">

    <?php
        creator_lms_login_form($args);
        creator_lms_signup_form($args);
    ?>
</div>
