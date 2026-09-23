<?php

function is_creator_lms() {
	// add a apply filters here if needed in future
	$maybe_yes = omlms_is_courses_page() || omlms_is_single_course_page() || omlms_is_course_taxonomy() || omlms_is_course_category() || is_creator_lms_profile() || omlms_is_content_page() || omlms_is_membership_page() || omlms_is_membership_plan_shortcode() || omlms_is_course_list_shortcode() || is_creator_lms_buy_now() || is_creator_lms_dashboard() || is_creator_lms_profile_shortcode() || is_creator_lms_my_courses_shortcode();
	return apply_filters( 'is_creator_lms_page', $maybe_yes );
}

/**
 * Check if the current page is the profile page.
 *
 * @return bool
 * @since 1.0.0
 */
function is_creator_lms_profile() {
	return is_page( omlms_get_page_id( 'student_profile' ) );
}

/**
 * Check if the current page is the checkout page.
 *
 * @return bool True if the current page is the checkout page, false otherwise.
 * @since 1.0.0
 */
function is_creator_lms_checkout() {
	
    $page_id = get_option( 'creator_lms_checkout_page_id' );
	
    $is_checkout = false;
    if ( ! $page_id ) {
        $is_checkout = false;
    }

    // Alternative 1: Using get_queried_object_id()
    $current_page_id = get_queried_object_id();
    
    // Alternative 2: Fallback to get_the_ID() if queried object ID is empty
    if ( ! $current_page_id ) {
        $current_page_id = get_the_ID();
    }
    
    // Alternative 3: Use global $post as final fallback
    if ( ! $current_page_id ) {
        global $post;
        $current_page_id = isset( $post->ID ) ? $post->ID : 0;
    }

    if ( $current_page_id != $page_id ) {
        // Check for shortcode, Elementor widget, Gutenberg block, Bricks element, or WPBakery element
        $is_checkout = creator_lms_post_content_has_shortcode( 'creator_lms_checkout' ) || 
               creator_lms_page_has_checkout_widget( $current_page_id ) ||
               creator_lms_page_has_checkout_block( $current_page_id ) ||
               creator_lms_page_has_checkout_bricks_element( $current_page_id ) ||
               creator_lms_page_has_checkout_wpbakery_element( $current_page_id );
    }

    $is_checkout = $current_page_id == $page_id || $is_checkout;

    return apply_filters( 'is_creator_lms_checkout_page', $is_checkout );
}


function is_creator_lms_buy_now() {
	return creator_lms_post_content_has_shortcode( 'creator_lms_buy_now' ) || 
	       creator_lms_page_has_buy_now_widget() ||
	       creator_lms_page_has_buy_now_block() ||
	       creator_lms_page_has_buy_now_bricks_element() ||
	       creator_lms_page_has_buy_now_wpbakery_element();
}

/**
 * Check if the current page has the dashboard shortcode.
 *
 * @return bool True if the current page has the dashboard shortcode, false otherwise.
 * @since 1.0.0
 */
function is_creator_lms_dashboard() {
	return creator_lms_post_content_has_shortcode( 'creator_lms_dashboard' ) || creator_lms_page_has_dashboard_block();
}

/**
 * Check if the current page has the profile shortcode.
 *
 * @return bool True if the current page has the profile shortcode, false otherwise.
 * @since 1.0.0
 */
function is_creator_lms_profile_shortcode() {
	return creator_lms_post_content_has_shortcode( 'creator_lms_profile' ) || creator_lms_page_has_profile_block();
}

/**
 * Check if the current page has the my courses shortcode.
 *
 * @return bool True if the current page has the my courses shortcode, false otherwise.
 * @since 1.0.0
 */
function is_creator_lms_my_courses_shortcode() {
	return creator_lms_post_content_has_shortcode( 'creator_lms_my_courses' ) || creator_lms_page_has_my_courses_block();
}

/**
 * Check if the current page is the order received page.
 *
 * @return bool True if the current page is the order received page, false otherwise.
 * @since 1.0.0
 */
function is_creator_lms_order_received_page() {
	if( is_creator_lms_checkout() ) {
		global $wp;
		if ( isset( $wp->query_vars['cr-order-received'] ) && ! empty( $wp->query_vars['cr-order-received'] ) ) {
			return true;
		}
	}
	return false;
}

/**
 * Check if the current page is a OhMyLMS endpoint URL.
 *
 * @param string $endpoint The endpoint to check. Default is an empty string.
 * @return bool True if the current page is a OhMyLMS endpoint URL, false otherwise.
 * @since 1.0.0
 */
function is_creatorlms_endpoint_url( $endpoint = '' ) {
	$endpoints = OMLMS()->omlms_endpoint->get_query_vars();
	if ( ! empty( $endpoints[ $endpoint ] ) ) {
		return isset( $endpoints[ $endpoint ] );
	}
	return false;
}


/**
 * Check if the post content has a specific shortcode.
 *
 * @param string $tag The shortcode tag to check for. Default is an empty string.
 * @return bool True if the post content has the shortcode, false otherwise.
 */
function creator_lms_post_content_has_shortcode( $tag = '' ) {
	global $post;
	return is_singular() && is_a( $post, 'WP_Post' ) && ( has_shortcode( $post->post_content, $tag ) || str_contains( $post->post_content, 'creator_lms_checkout' ) ) ;
}

/**
 * Check if a page has the CreatorLMS checkout Elementor widget.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the checkout widget, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_checkout_widget( $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}
	
	// Check if Elementor is active
	if ( ! class_exists( '\Elementor\Plugin' ) ) {
		return false;
	}
	
	// Get Elementor data for this page
	$elementor_data = get_post_meta( $page_id, '_elementor_data', true );
	
	if ( empty( $elementor_data ) ) {
		return false;
	}
	
	// Decode JSON data
	$data = is_string( $elementor_data ) ? json_decode( $elementor_data, true ) : $elementor_data;
	
	if ( ! is_array( $data ) ) {
		return false;
	}
	
	// Recursively search for the checkout widget
	return creator_lms_search_elementor_data_for_widget( $data, 'creator-lms-checkout' );
}



/**
 * Check if a page has the CreatorLMS checkout Elementor widget.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the checkout widget, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_buy_now_widget( $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}
	
	// Check if Elementor is active
	if ( ! class_exists( '\Elementor\Plugin' ) ) {
		return false;
	}
	
	// Get Elementor data for this page
	$elementor_data = get_post_meta( $page_id, '_elementor_data', true );
	
	if ( empty( $elementor_data ) ) {
		return false;
	}
	
	// Decode JSON data
	$data = is_string( $elementor_data ) ? json_decode( $elementor_data, true ) : $elementor_data;
	
	if ( ! is_array( $data ) ) {
		return false;
	}
	
	// Recursively search for the buy now widget
	return creator_lms_search_elementor_data_for_widget( $data, 'creator-lms-buy-now' );
}

/**
 * Recursively search Elementor data for a specific widget type.
 *
 * @param array $data Elementor data array
 * @param string $widget_type Widget type to search for
 * @return bool True if widget is found, false otherwise.
 * @since 1.0.0
 */
function creator_lms_search_elementor_data_for_widget( $data, $widget_type ) {
	if ( ! is_array( $data ) ) {
		return false;
	}
	
	foreach ( $data as $element ) {
		// Check if this element is the widget we're looking for
		if ( isset( $element['widgetType'] ) && $element['widgetType'] === $widget_type ) {
			return true;
		}
		
		// Check nested elements (sections, columns, etc.)
		if ( isset( $element['elements'] ) && is_array( $element['elements'] ) ) {
			if ( creator_lms_search_elementor_data_for_widget( $element['elements'], $widget_type ) ) {
				return true;
			}
		}
	}
	
	return false;
}

/**
 * Check if a page has the CreatorLMS checkout Gutenberg block.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the checkout block, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_checkout_block( $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}
	
	// Check if block editor functions are available
	if ( ! function_exists( 'has_block' ) ) {
		return false;
	}
	
	// Check if the page has the checkout block
	return has_block( 'creator-lms/checkout', $page_id );
}



/**
 * Check if a page has the CreatorLMS buy now Gutenberg block.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the buy now block, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_buy_now_block( $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}
	
	// Check if block editor functions are available
	if ( ! function_exists( 'has_block' ) ) {
		return false;
	}

	// Check if the page has the buy now block
	return has_block( 'creator-lms/buy-now', $page_id );
}

/**
 * Check if a page has the CreatorLMS course list Elementor widget.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the course list widget, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_course_list_widget( $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}

	// Check if Elementor is active
	if ( ! class_exists( '\Elementor\Plugin' ) ) {
		return false;
	}

	// Get Elementor data for this page
	$elementor_data = get_post_meta( $page_id, '_elementor_data', true );
	if ( empty( $elementor_data ) ) {
		return false;
	}

	// Parse the JSON data
	$data = is_string( $elementor_data ) ? json_decode( $elementor_data, true ) : $elementor_data;
	if ( ! is_array( $data ) ) {
		return false;
	}

	// Recursively search for the course list widget
	return creator_lms_search_elementor_data_for_widget( $data, 'creator-lms-course-list' );
}

/**
 * Check if a page has the CreatorLMS course list Gutenberg block.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the course list block, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_course_list_block( $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}
	
	// Check if block editor functions are available
	if ( ! function_exists( 'has_block' ) ) {
		return false;
	}
	
	// Check if the page has the course list block
	return has_block( 'creator-lms/course-list', $page_id );
}

/**
 * Check if a page has the CreatorLMS dashboard Gutenberg block.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the dashboard block, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_dashboard_block( $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}
	
	// Check if block editor functions are available
	if ( ! function_exists( 'has_block' ) ) {
		return false;
	}
	
	// Check if the page has the dashboard block
	return has_block( 'creator-lms/dashboard', $page_id );
}

/**
 * Check if a page has the CreatorLMS profile Gutenberg block.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the profile block, false otherwise.
 * @since 1.2.5
 */
function creator_lms_page_has_profile_block( $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}
	
	// Check if block editor functions are available
	if ( ! function_exists( 'has_block' ) ) {
		return false;
	}
	
	// Check if the page has the profile block
	return has_block( 'creator-lms/profile', $page_id );
}

/**
 * Check if a page has the CreatorLMS my courses Gutenberg block.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the my courses block, false otherwise.
 * @since 1.2.5
 */
function creator_lms_page_has_my_courses_block( $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}
	
	// Check if block editor functions are available
	if ( ! function_exists( 'has_block' ) ) {
		return false;
	}
	
	// Check if the page has the my courses block
	return has_block( 'creator-lms/my-courses', $page_id );
}

// === BRICKS ELEMENT DETECTION FUNCTIONS ===

/**
 * Check if a page has the CreatorLMS checkout Bricks element.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the checkout element, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_checkout_bricks_element( $page_id = 0 ) {
	return creator_lms_page_has_bricks_element( 'creator-lms-checkout', $page_id );
}

/**
 * Check if a page has the CreatorLMS buy now Bricks element.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the buy now element, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_buy_now_bricks_element( $page_id = 0 ) {
	return creator_lms_page_has_bricks_element( 'creator-lms-buy-now', $page_id );
}

/**
 * Check if a page has the CreatorLMS course list Bricks element.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the course list element, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_course_list_bricks_element( $page_id = 0 ) {
	return creator_lms_page_has_bricks_element( 'creator-lms-course-list', $page_id );
}

/**
 * Check if a page has the CreatorLMS offer button Bricks element.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the offer button element, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_offer_button_bricks_element( $page_id = 0 ) {
	return creator_lms_page_has_bricks_element( 'creator-lms-offer-button', $page_id );
}

/**
 * Generic function to check if a page has a specific Bricks element.
 *
 * @param string $element_name The Bricks element name to search for.
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the element, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_bricks_element( $element_name, $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}
	
	// Check if Bricks is active
	if ( ! class_exists( '\Bricks\Database' ) ) {
		return false;
	}
	
	// Get Bricks data for this page
	$bricks_data = get_post_meta( $page_id, BRICKS_DB_PAGE_CONTENT, true );
	
	if ( empty( $bricks_data ) ) {
		return false;
	}
	
	// Bricks stores data as an array of elements
	if ( ! is_array( $bricks_data ) ) {
		return false;
	}
	
	// Recursively search for the element
	return creator_lms_search_bricks_data_for_element( $bricks_data, $element_name );
}

/**
 * Recursively search Bricks data for a specific element type.
 *
 * @param array $data Bricks data array
 * @param string $element_name Element name to search for
 * @return bool True if element is found, false otherwise.
 * @since 1.0.0
 */
function creator_lms_search_bricks_data_for_element( $data, $element_name ) {
	if ( ! is_array( $data ) ) {
		return false;
	}
	
	foreach ( $data as $element ) {
		// Check if this element is the one we're looking for
		if ( isset( $element['name'] ) && $element['name'] === $element_name ) {
			return true;
		}
		
		// Check nested elements (containers, sections, etc.)
		if ( isset( $element['children'] ) && is_array( $element['children'] ) ) {
			if ( creator_lms_search_bricks_data_for_element( $element['children'], $element_name ) ) {
				return true;
			}
		}
	}
	
	return false;
}

function omlms_is_courses_page() {
	return ( is_post_type_archive( CREATOR_LMS_COURSE_CPT ) || is_page( omlms_get_page_id( 'course' ) ) );
}

function omlms_is_course_list_shortcode() {
	// Check for shortcode, Elementor widget, Gutenberg block, Bricks element, or WPBakery element
	return creator_lms_post_content_has_shortcode( 'creator_lms_course_list' ) || 
		   creator_lms_page_has_course_list_widget() || 
		   creator_lms_page_has_course_list_block() ||
		   creator_lms_page_has_course_list_bricks_element() ||
		   creator_lms_page_has_course_list_wpbakery_element();
}

function omlms_is_membership_page() {
	return ( is_post_type_archive( CREATOR_LMS_MEMBERSHIP_CPT ) || is_page( omlms_get_page_id( 'membership' ) ) );
}

function omlms_is_membership_plan_shortcode() {
	return creator_lms_post_content_has_shortcode( 'creator_lms_membership_plan' ) ||
		   creator_lms_page_has_membership_list_block();
}

/**
 * Check if a page has the CreatorLMS membership list Gutenberg block.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the membership list block, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_membership_list_block( $page_id = 0 ) {
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}

	if ( ! function_exists( 'has_block' ) ) {
		return false;
	}

	return has_block( 'creator-lms/membership-list', $page_id );
}

function omlms_is_single_course_page() {
	return is_singular( CREATOR_LMS_COURSE_CPT );
}

/**
 * Check if the current page is a single lesson page.
 *
 * @return bool True if the current page is a single lesson page, false otherwise.
 */
function omlms_is_single_lesson_page() {
	return is_singular( CREATOR_LMS_LESSON_CPT );
}

/**
 * Check if the current page is a single lesson page.
 *
 * @return bool True if the current page is a single lesson page, false otherwise.
 */
function omlms_is_single_assignment_page() {
	return is_singular( CREATOR_LMS_ASSIGNMENT_CPT );
}

function omlms_is_single_quiz_page() {
	return is_singular( CREATOR_LMS_QUIZ_CPT );
}
function omlms_is_single_session() {
	return is_singular( 'omlms-session' );
}
function omlms_is_content_page() {
	return omlms_is_single_lesson_page() || omlms_is_single_assignment_page() || omlms_is_single_quiz_page() || omlms_is_single_session();
}


function omlms_is_course_taxonomy() {
	return is_tax( get_object_taxonomies( CREATOR_LMS_COURSE_CPT ) );
}


function omlms_is_course_category( $term = '' ) {
	return is_tax( 'course_category', $term );
}

/**
 * Check if the current page is a OhMyLMS archive page.
 *
 * @return bool True if the current page is a OhMyLMS archive page, false otherwise.
 * @since 1.0.0
 */
function is_creator_lms_archive() {
	return ( is_post_type_archive( CREATOR_LMS_COURSE_CPT ) || is_page( omlms_get_page_id( 'course' ) ) || omlms_is_course_list_shortcode() );
}

/**
 * Check if the current page has any CreatorLMS offer button.
 *
 * @return bool True if the page has an offer button, false otherwise.
 * @since 1.0.0
 */
function is_creator_lms_offer_button() {
	return creator_lms_post_content_has_shortcode( 'creator_lms_offer_button' ) || 
	       creator_lms_page_has_offer_button_widget() ||
	       creator_lms_page_has_offer_button_block() ||
	       creator_lms_page_has_offer_button_bricks_element() ||
	       creator_lms_page_has_offer_button_wpbakery_element();
}

/**
 * Check if a page has the CreatorLMS offer button Elementor widget.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the offer button widget, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_offer_button_widget( $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}
	
	// Check if Elementor is active
	if ( ! class_exists( '\Elementor\Plugin' ) ) {
		return false;
	}
	
	// Get Elementor data for this page
	$elementor_data = get_post_meta( $page_id, '_elementor_data', true );
	
	if ( empty( $elementor_data ) ) {
		return false;
	}
	
	// Decode JSON data
	$data = is_string( $elementor_data ) ? json_decode( $elementor_data, true ) : $elementor_data;
	
	if ( ! is_array( $data ) ) {
		return false;
	}
	
	// Recursively search for the offer button widget
	return creator_lms_search_elementor_data_for_widget( $data, 'creator-lms-offer-button' );
}

/**
 * Check if a page has the CreatorLMS offer button Gutenberg block.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the offer button block, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_offer_button_block( $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}
	
	// Check if block editor functions are available
	if ( ! function_exists( 'has_block' ) ) {
		return false;
	}
	
	// Check if the page has the offer button block
	return has_block( 'creator-lms/offer-button', $page_id );
}

// === WPBAKERY ELEMENT DETECTION FUNCTIONS ===

/**
 * Check if a page has the CreatorLMS checkout WPBakery element.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the checkout element, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_checkout_wpbakery_element( $page_id = 0 ) {
	return creator_lms_page_has_wpbakery_element( 'creator_lms_checkout', $page_id );
}

/**
 * Check if a page has the CreatorLMS buy now WPBakery element.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the buy now element, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_buy_now_wpbakery_element( $page_id = 0 ) {
	return creator_lms_page_has_wpbakery_element( 'creator_lms_buy_now', $page_id );
}

/**
 * Check if a page has the CreatorLMS course list WPBakery element.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the course list element, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_course_list_wpbakery_element( $page_id = 0 ) {
	return creator_lms_page_has_wpbakery_element( 'creator_lms_course_list', $page_id );
}

/**
 * Check if a page has the CreatorLMS offer button WPBakery element.
 *
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the offer button element, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_offer_button_wpbakery_element( $page_id = 0 ) {
	return creator_lms_page_has_wpbakery_element( 'creator_lms_offer_button', $page_id );
}

/**
 * Generic function to check if a page has a specific WPBakery element.
 * WPBakery stores content as shortcodes in post_content.
 *
 * @param string $shortcode_tag The shortcode tag to search for (e.g., 'creator_lms_checkout').
 * @param int $page_id The page ID to check. If not provided, uses current page.
 * @return bool True if the page has the element, false otherwise.
 * @since 1.0.0
 */
function creator_lms_page_has_wpbakery_element( $shortcode_tag, $page_id = 0 ) {
	// If no page ID provided, get current page ID
	if ( ! $page_id ) {
		$page_id = get_the_ID();
	}
	
	// Check if WPBakery is active
	if ( ! class_exists( 'Vc_Manager' ) ) {
		return false;
	}
	
	// Get the post content
	$post = get_post( $page_id );
	
	if ( ! $post || empty( $post->post_content ) ) {
		return false;
	}
	
	// Check if the shortcode exists in the post content
	return has_shortcode( $post->post_content, $shortcode_tag );
}

