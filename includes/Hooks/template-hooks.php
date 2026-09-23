<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$single_course_layout = get_option( 'creator_lms_single_course_page_layout', 'layout_1' );

add_filter( 'body_class', 'creator_lms_body_class' );
add_action( 'body_class', 'creator_lms_add_theme_body_class' );
add_action( 'admin_body_class', 'creator_lms_add_theme_body_class' );

/**
 * Content Wrappers.
 *
 * @see creator_lms_show_toast_notices()
 * @see creator_lms_output_content_wrapper_start()
 * @see creator_lms_breadcrumb()
 */
add_action( 'creator_lms_before_main_content', 'creator_lms_show_toast_notices', 5 );
add_action( 'creator_lms_before_main_content', 'creator_lms_output_content_wrapper_start', 10 );
add_action( 'creator_lms_before_main_content', 'creator_lms_breadcrumb', 15 );

add_action( 'creator_lms_after_main_content', 'creator_lms_output_content_wrapper_end', 5 );
add_action( 'creator_lms_after_main_content', 'creator_lms_scroll_to_top', 10 );

add_action( 'creator_lms_membership_before_main_content', 'creator_lms_show_toast_notices', 5 );
add_action( 'creator_lms_membership_before_main_content', 'creator_lms_output_content_wrapper_start', 10 );
add_action( 'creator_lms_membership_before_main_content', 'creator_lms_breadcrumb', 15 );

add_action( 'creator_lms_membership_after_main_content', 'creator_lms_output_content_wrapper_end', 5 );
add_action( 'creator_lms_membership_after_main_content', 'creator_lms_scroll_to_top', 10 );

/**
 * Course loop
 *
 * @see creator_lms_no_products_found()
 * @see creator_lms_course_header()
 */
add_action( 'creator_lms_no_products_found', 'creator_lms_no_products_found', 5 );

add_action( 'creator_lms_course_loop_header', 'creator_lms_course_header', 10 );



if ( 'layout_1' === $single_course_layout ) {
	add_action( 'creator_lms_single_course_content', 'creator_lms_single_course_header', 5 );
	add_action( 'creator_lms_single_course_content', 'creator_lms_single_course_tabs', 10 );
}

if ( 'layout_2' === $single_course_layout ) {
	add_action( 'creator_lms_single_course_content', 'creator_lms_single_course_header', 5 );
	add_action( 'creator_lms_single_course_content', 'creator_lms_course_description_tab', 10 );
	add_action( 'creator_lms_single_course_content', 'creator_lms_course_information_tab', 15 );
	add_action( 'creator_lms_single_course_content', 'creator_lms_course_assignments_tab', 20 );
	add_action( 'creator_lms_single_course_content', 'creator_lms_course_resources_tab', 25 );
	add_action( 'creator_lms_single_course_content', 'creator_lms_course_reviews_tab', 30 );
}

if ( 'layout_3' === $single_course_layout ) {
	add_action( 'creator_lms_single_course_content', 'creator_lms_single_course_layout3_header', 5 );
	add_action( 'creator_lms_single_course_content', 'creator_lms_single_course_layout3_content', 10 );
}

// -----course single header's meta hooks-----
add_action( 'creator_lms_single_course_meta', 'creator_lms_single_course_level', 5 );
add_action( 'creator_lms_single_course_meta', 'creator_lms_single_course_review', 10 );
add_action( 'creator_lms_single_course_meta', 'creator_lms_single_course_student_count', 15 );
add_action( 'creator_lms_single_course_meta', 'creator_lms_single_course_capacity', 20 );

// -----course single sidebar widget's meta hooks-----
if ( 'layout_1' === $single_course_layout || 'layout_2' === $single_course_layout ) {
	add_action( 'creator_lms_course_sidebar_widget_meta', 'creator_lms_single_course_review', 5 );
	add_action( 'creator_lms_course_sidebar_widget_meta', 'creator_lms_single_course_level', 10 );
	add_action( 'creator_lms_course_sidebar_widget_meta', 'creator_lms_single_course_student_count', 15 );
	add_action( 'creator_lms_course_sidebar_widget_meta', 'creator_lms_single_course_duration', 20 );
	add_action( 'creator_lms_course_sidebar_widget_meta', 'creator_lms_single_course_capacity', 25 );

}
add_action( 'creator_lms_course_sidebar_widget_meta', 'creator_lms_single_course_lesson_count', 30 );
add_action( 'creator_lms_course_sidebar_widget_meta', 'creator_lms_single_course_additional_resource', 35 );

// ---course sidebar widget's hooks for layout 1-----
if ( 'layout_1' === $single_course_layout ) {
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_pricebox', 5 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_membership', 10 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_progress', 15 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_certificate', 20 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_meta', 25 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_leaderboard', 30 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_author', 35 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_taxonomy', 40 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_drop', 45 );
}

// ---course sidebar widget's hooks for layout 2-----
if ( 'layout_2' === $single_course_layout ) {
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_pricebox', 5 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_membership', 10 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_progress', 15 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_certificate', 20 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_meta', 25 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_leaderboard', 30 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_taxonomy', 40 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_drop', 45 );
}

// ---course sidebar widget's hooks for layout 3-----
if ( 'layout_3' === $single_course_layout ) {
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_pricebox_and_course_meta', 5 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_membership', 10 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_certificate', 15 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_leaderboard_layout3', 20 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_taxonomy', 25 );
	add_action( 'creator_lms_course_sidebar_widget', 'creator_lms_widget_course_drop', 30 );
}


add_action( 'creator_lms_course_before_sidebar_widget', 'creator_lms_course_feature_image_and_video', 5 );
add_action( 'creator_lms_course_before_sidebar_widget', 'creator_lms_widget_wrapper_start', 10 );
add_action( 'creator_lms_course_after_sidebar_widget', 'creator_lms_widget_wrapper_end', 5 );


// function hooked after single course content
add_action( 'creator_lms_after_single_course_content', 'creator_lms_widget_pricebox', 5 );



/**
 * Course loop items
 *
 * @see creator_lms_template_loop_product_link_open()
 * @see creator_lms_template_loop_product_link_close()
 * @see creator_lms_template_loop_course_thumbnail()
 * @see creator_lms_loop_course_title()
 * @see creator_lms_loop_course_meta()
 * @see creator_lms_loop_course_price()
 * @see creator_lms_loop_course_add_to_cart()
*/

add_action( 'creator_lms_before_courses_loop_item', 'creator_lms_template_loop_product_link_open', 5, 2 );
add_action( 'creator_lms_after_courses_loop_item', 'creator_lms_template_loop_product_link_close', 5, 2);

add_action( 'creator_lms_before_courses_loop_item_content', 'creator_lms_template_loop_course_thumbnail', 5 );

add_action( 'creator_lms_courses_loop_item_title', 'creator_lms_loop_course_title', 5, 2 );

add_action( 'creator_lms_courses_loop_item_description', 'creator_lms_loop_course_description', 5 );


// add_action( 'creator_lms_courses_loop_item_description', 'creator_lms_loop_course_cohort', 10, 2 );


add_action( 'creator_lms_courses_loop_item_meta', 'creator_lms_loop_course_meta', 5 );
add_action( 'creator_lms_courses_loop_item_meta', 'creator_lms_loop_course_cohort', 10, 2 );

add_action( 'creator_lms_courses_loop_item_price', 'creator_lms_loop_course_price', 5 );

add_action( 'creator_lms_courses_loop_item_add_to_cart', 'creator_lms_loop_course_add_to_cart', 5 );

add_action( 'creator_lms_courses_loop_item_add_to_cart', 'creator_lms_loop_course_after_add_to_cart', 10 );

add_action( 'creator_lms_courses_loop_item_certified_tag', 'creator_lms_loop_course_certified_tag', 5 );

add_action( 'creator_lms_courses_loop_item_author', 'creator_lms_loop_course_author', 5 );


/**
 * Checkout form
 *
 * @see creator_lms_checkout_login_form()
 * @see creator_lms_order_review()
 * @see creator_lms_checkout_payment()
 * @see creator_lms_checkout_order_summary()
 *
 * @since 1.0.0
 */
add_action( 'creator_lms_before_checkout_form_start', 'creator_lms_show_all_notices', 5 );

add_action( 'creator_lms_checkout_before_billing', 'creator_lms_checkout_form_title', 10 );
add_action( 'creator_lms_before_checkout_contact_form', 'creator_lms_checkout_form_contact_title', 10 );
add_action( 'creator_lms_before_checkout_form', 'creator_lms_checkout_login_form', 15 );
add_action( 'creator_lms_before_checkout_form', 'creator_lms_checkout_signup_form', 20 );

add_action( 'creator_lms_checkout_after_billing', 'creator_lms_checkout_payment', 20 );
add_action( 'creator_lms_checkout_after_billing', 'creator_lms_mobile_place_order', 30 );
add_action( 'creator_lms_checkout_order_review', 'creator_lms_order_review', 10 );
add_action( 'creator_lms_checkout_order_summary', 'creator_lms_checkout_order_summary' );


/**
 * Guest checkout
 *
 * @see creator_lms_checkout_authentication
 *
 * @since 1.0.0
 */
add_action( 'creator_lms_after_guest_checkout_email_field', 'creator_lms_checkout_authentication' );


add_filter( 'creator_lms_course_tabs', 'creator_lms_default_course_tabs', 10, 1 );


add_action( 'creator_lms_review_rating_area', 'creator_lms_review_rating_area', 5 );

/**
 * My profile
 *
 * @since 1.0.0
 */

add_action( 'creator_lms_account_navigation', 'creator_lms_account_navigation' );
add_action( 'creator_lms_account_header', 'creator_lms_account_student_dashboard_header' );
add_action( 'creator_lms_account_content', 'creator_lms_account_content' );
add_action( 'creator_lms_account_my-courses_endpoint', 'omlms_lms_student_profile_my_course_content' );

add_action( 'creator_lms_account_settings_endpoint', 'creator_lms_profile_layout' );
add_action( 'creator_lms_account_profile_endpoint', 'creator_lms_profile_layout' );
add_action( 'creator_lms_account_notification_endpoint', 'creator_lms_profile_layout' );
add_action( 'creator_lms_account_transactions-history_endpoint', 'creator_lms_profile_layout' );
add_action( 'creator_lms_account_membership_endpoint', 'creator_lms_profile_layout' );
add_action( 'creator_lms_account_invoice-details_endpoint', 'creator_lms_profile_layout' );
add_action( 'creator_lms_account_billing-information_endpoint', 'creator_lms_profile_layout' );
add_action( 'creator_lms_account_profile-edit_endpoint', 'creator_lms_profile_layout' );


add_action( 'creator_lms_profile_layout_content', 'creator_lms_profile_layout_content' );

add_action( 'creator_lms_layout_settings_content', 'creator_lms_account_settings_content' );
add_action( 'creator_lms_layout_profile_content', 'creator_lms_account_profile_content' );
add_action( 'creator_lms_layout_notification_content', 'creator_lms_account_notification_content' );
add_action( 'creator_lms_layout_transactions-history_content', 'creator_lms_account_transactions_history_content' );
add_action( 'creator_lms_layout_membership_content', 'creator_lms_account_membership_content' );
add_action( 'creator_lms_layout_invoice-details_content', 'creator_lms_account_invoice_details_content' );
add_action( 'creator_lms_layout_billing-information_content', 'creator_lms_account_billing_information_content' );
add_action( 'creator_lms_layout_profile-edit_content', 'creator_lms_account_profile_edit_content' );


add_action( 'omlms_lms_student_profile_before_dashboard_content', 'omlms_lms_student_profile_name' );
add_action( 'omlms_lms_student_profile_dashboard_content', 'omlms_lms_student_profile_dashboard_content' );

/**
 * Dashboard my courses tabs
 *
 * @since 1.0.0
 */
add_filter( 'creator_lms_my_course_tabs', 'creator_lms_default_my_course_tabs', 10, 1 );

/**
 * Notices
 */
add_action( 'creator_lms_account_content', 'creator_lms_show_all_notices', 5 );


/**
 * Membership Hook
 */
add_action( 'creator_lms_membership_section_header', 'creator_lms_membership_header', 5 );

add_action( 'creator_lms_membership_table_header', 'creator_lms_membership_title', 5 );
add_action( 'creator_lms_membership_table_header', 'creator_lms_membership_price', 10 );
add_action( 'creator_lms_membership_table_header', 'creator_lms_membership_description', 15 );

add_action( 'creator_lms_membership_table_body', 'creator_lms_membership_product_list', 5 );

add_action( 'creator_lms_membership_table_footer', 'creator_lms_membership_add_to_cart', 5 );

add_action( 'creator_lms_no_membership', 'creator_lms_no_membership_found', 5 );



/**
 * Lesson page Hook
 */
add_action( 'creator_lms_before_lesson_main_content', 'creator_lms_show_toast_notices', 5 );


/**
 * Email Hook
 */
add_action( 'creator_lms_email_header', 'creator_lms_email_header', 10, 2 );
add_action( 'creator_lms_email_footer', 'creator_lms_email_footer', 10, 2 );
add_action( 'creator_lms_email_order_details', 'creator_lms_email_order_details', 10, 2 );
add_action( 'creator_lms_email_order_items', 'creator_lms_email_order_items', 10, 2 );



/**
 * Course archive page hooks
 */
add_action( 'creator_lms_course_filter', 'creator_lms_course_filter_header', 5 );
add_action( 'creator_lms_course_filter', 'creator_lms_course_filters', 10 );


/**
 * Checks if the category filter is enabled for layout 'grid-style3' and 'grid-style4' adds an action to apply the category filter before the course loop.
 *
 * @global string $layout_style The current layout style of the course archive page.
*/
add_action( 'creator_lms_before_course_loop', 'creator_lms_course_loop_before_category_filter', 5 );


/**
 * Checks if course layout is 'grid-style1' and 'grid-style1' adds an action to apply the category filter before the course loop.
 *
 * @global string $layout_style The current layout style of the course archive page.
*/
add_action( 'creator_lms_before_course_loop', 'creator_lms_course_loop_before_filter', 10 );


/**
 * Checks if course layout is 'grid-style3' adds an action to apply course item hover popup before the course loop.
 *
 * @global string $layout_style The current layout style of the course archive page.
*/

add_action( 'creator_lms_after_course_loop', 'creator_lms_course_carousel_item_hover', 5 );

// ---course card popup actions----
add_action( 'creator_lms_course_card_popup', 'creator_lms_loop_course_popup_title', 5 );
add_action( 'creator_lms_course_card_popup', 'creator_lms_loop_course_update', 10 );
add_action( 'creator_lms_course_card_popup', 'creator_lms_loop_course_meta', 15 );
add_action( 'creator_lms_course_card_popup', 'creator_lms_loop_course_description', 20 );
add_action( 'creator_lms_course_card_popup', 'creator_lms_loop_course_add_to_cart', 25 );


/**
 * course single layout-3 header meta hooks
 *
*/
add_action( 'creator_lms_single_course_layout3_header_meta', 'creator_lms_single_course_review', 5 );
add_action( 'creator_lms_single_course_layout3_header_meta', 'creator_lms_single_course_level', 10 );
add_action( 'creator_lms_single_course_layout3_header_meta', 'creator_lms_single_course_duration', 15 );
add_action( 'creator_lms_single_course_layout3_header_meta', 'creator_lms_single_course_student_count', 20 );
add_action( 'creator_lms_single_course_layout3_header_meta', 'creator_lms_single_course_capacity', 25 );

// ---login page actions----
add_action( 'creator_lms_login_form_start', 'creator_lms_login_header', 5 );
add_action( 'creator_lms_login_form_start', 'creator_lms_login_signup_form_title', 15 );

// ---signup page actions----
add_action( 'creator_lms_signup_form_start', 'creator_lms_signup_header', 5 );
add_action( 'creator_lms_signup_form_start', 'creator_lms_login_signup_form_title', 15 );
