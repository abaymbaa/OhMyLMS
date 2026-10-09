<?php
/** Student dashboard. Override in yourtheme/ohmylms/profile/dashboard-content.php. */
defined( 'ABSPATH' ) || exit;
ohmylms_get_template( 'profile/student-dashboard.php', array( 'student' => $student ) );
