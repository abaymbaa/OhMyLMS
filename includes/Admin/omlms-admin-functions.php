<?php

/**
 * OhMyLMS admin functions
 */

/**
 * Check if current page is OhMyLMS admin page
 *
 * @return bool
 */
function is_crlm_admin_page(): bool {
	return is_admin() && isset( $_GET['page'] ) && in_array( $_GET['page'], array( 'omlms-settings', 'omlms-tools' ), true );
}
