<?php
/**
 * Template for displaying course filter header.
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/filters/filter-header.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

defined( 'ABSPATH' ) || exit();
$is_filter_enabled = get_option('creator_lms_archive_page_filter_is_enabled','no');

if( 'no' === $is_filter_enabled ){
    return;
}

$filter_data = get_option('creator_lms_archive_page_filters',[]);
?>
<div class="creator-lms-filter-header">
    <span class="filter-title">
        <svg width="18" height="18" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill="#A1A1AA" fill-rule="evenodd" d="M13 3a.75.75 0 01.75.75v.75h3a.75.75 0 010 1.5h-3v.75a.75.75 0 01-1.5 0v-3A.75.75 0 0113 3zM2.5 5.25a.75.75 0 01.75-.75H10A.75.75 0 0110 6H3.25a.75.75 0 01-.75-.75zM7 7.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-.75h-3a.75.75 0 010-1.5h3v-.75A.75.75 0 017 7.5zm2.25 2.25A.75.75 0 0110 9h6.75a.75.75 0 010 1.5H10a.75.75 0 01-.75-.75zM13 12a.75.75 0 01.75.75v.75h3a.75.75 0 010 1.5h-3v.75a.75.75 0 01-1.5 0v-3A.75.75 0 0113 12zM2.5 14.25a.75.75 0 01.75-.75H10a.75.75 0 010 1.5H3.25a.75.75 0 01-.75-.75z" clip-rule="evenodd"/></svg>
        <?php 
            echo __( 'Filter', 'ohmylms' );
        ?>
    </span>

    <button type="button" class="clear-filter">
        <?php 
            echo __( 'Clear All', 'ohmylms' );
        ?>
    </button>

    <button type="button" class="creator-lms-close-filter">
        <?php include(CREATOR_LMS_DIR . '/assets/images/icon/cross-icon.php'); ?>
    </button>
    
</div>