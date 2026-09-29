<?php

use OMLMS\Data\Lesson;
use OMLMS\Data\Quiz;

/**
 * Get page ID by page name.
 *
 * @param string $page Page name.
 * @return int
 * @since 1.0.0
 */
function omlms_get_page_id( $page ) {

	$page_id = apply_filters( 'creator_lms_get_' . $page . '_page_id', get_option( 'creator_lms_' . $page . '_page_id' ) );
	if( 'course' === $page ) {
		$page_slug = get_post_field( 'post_name', $page_id );
		if( ! in_array( $page_slug, array( 'cr-all-courses', 'ohmylms-all-courses' ), true ) ) {
			return -1;
		}
	}

	return $page_id ? absint( $page_id ) : -1;
}

/**
 * Get page url by name
 *
 * @param $page
 * @return false|string|null
 * @since 1.0.0
 */
function omlms_get_page_url( $page ) {
	$id = omlms_get_page_id( $page );

	if ( $id ) {
		return get_permalink( $id );
	}

	return site_url();
}


/**
 * Get endpoint URL.
 *
 * Gets the URL for an endpoint, which varies depending on permalink settings.
 *
 * @param  string $endpoint  Endpoint slug.
 * @param  string $value     Query param value.
 * @param  string $permalink Permalink.
 *
 * @return string
 */
function omlms_get_endpoint_url( $endpoint, $value = '', $permalink = '' ) {
	if ( ! $permalink ) {
		$permalink = get_permalink();
	}

	// Map endpoint to options.
	$query_vars = \CodeRex\Ecommerce\ecommerce()->query->get_query_vars();
	$endpoint   = ! empty( $query_vars[ $endpoint ] ) ? $query_vars[ $endpoint ] : $endpoint;
	$value      = ( get_option( 'creator_lms_myprofile_edit_address_endpoint', 'edit-address' ) === $endpoint ) ? creator_lms_edit_address_i18n( $value ) : $value;

	if ( get_option( 'permalink_structure' ) ) {
		if ( strstr( $permalink, '?' ) ) {
			$query_string = '?' . wp_parse_url( $permalink, PHP_URL_QUERY );
			$permalink    = current( explode( '?', $permalink ) );
		} else {
			$query_string = '';
		}
		$url = trailingslashit( $permalink );

		if ( $value ) {
			$url .= trailingslashit( $endpoint ) . user_trailingslashit( $value );
		} else {
			$url .= user_trailingslashit( $endpoint );
		}

		$url .= $query_string;
	} else {
		$url = add_query_arg( $endpoint, $value, $permalink );
	}

	return apply_filters( 'creator_lms_get_endpoint_url', $url, $endpoint, $value, $permalink );
}


/**
 * Retrieve page permalink.
 *
 * @param string      $page page slug.
 * @param string|bool $fallback Fallback URL if page is not set. Defaults to home URL. @since 3.4.0.
 * @return string
 */
function omlms_get_page_permalink( $page, $fallback = null ) {
	$page_id   = omlms_get_page_id( $page );
	$permalink = 0 < $page_id ? get_permalink( $page_id ) : '';
	if ( ! $permalink ) {
		$permalink = is_null( $fallback ) ? get_home_url() : $fallback;
	}

	return apply_filters( 'creator_lms_get_' . $page . '_page_permalink', $permalink );
}



function omlms_get_next_content_permalink( $current_lesson ) {
	$next_lesson = omlms_get_next_content( $current_lesson );
	if ( $next_lesson ) {
		return get_permalink( $next_lesson['id'] );
	}
	return null;
}



function omlms_get_next_content( $current_lesson_id ) {
	$course_id = creator_lms_get_course_by_content_id( $current_lesson_id );
	$course    = omlms_get_course( $course_id );
	if ( $course ) {
		$lessons = $course->get_lessons();
		foreach ( $lessons as $index => $l ) {
			if ( $l['type'] === 'quiz' ) {
				$lesson = new Quiz( $l['id'] );
			} elseif ( $l['type'] === 'assignment' ) {
				$lesson = creator_lms_is_pro() ? new OMLMS\Data\Assignment( $l['id'] ) : null;
			} else {
				$lesson = new Lesson( $l['id'] );
			}

			if ( $lesson && $lesson->get_id() == $current_lesson_id && isset( $lessons[ $index + 1 ] ) ) {
				return $lessons[ $index + 1 ];
			}
		}
	}
	return null;
}


function omlms_get_prev_content( $current_lesson_id ) {
	$course_id = creator_lms_get_course_by_content_id( $current_lesson_id );
	$course    = omlms_get_course( $course_id );
	if ( $course ) {
		$lessons = $course->get_lessons();
		foreach ( $lessons as $index => $l ) {
			if ( $l['type'] === 'quiz' ) {
				$lesson = new Quiz( $l['id'] );
			} elseif ( $l['type'] === 'assignment' ) {
				$lesson = creator_lms_is_pro() ? new OMLMS\Data\Assignment( $l['id'] ) : null;
			} else {
				$lesson = new Lesson( $l['id'] );
			}

			if ( $lesson && $lesson->get_id() == $current_lesson_id && isset( $lessons[ $index - 1 ] ) ) {
				return $lessons[ $index - 1 ];
			}
		}
	}
	return null;
}

/**
 * Check if current page is student dashboard page.
 *
 * @return bool
 * @since 1.0.0
 */
function is_creator_lms_student_dashboard() {
	return is_page( omlms_get_page_id( 'student_dashboard' ) );
}

/**
 * Check if current page is student profile page.
 *
 * @return bool
 * @since 1.0.0
 */
function is_creator_lms_student_profile() {
	return is_page( omlms_get_page_id( 'student_profile' ) );
}

/**
 * Check if current page is student courses page.
 *
 * @return bool
 * @since 1.0.0
 */
function is_creator_lms_student_courses() {
	return is_page( omlms_get_page_id( 'student_courses' ) );
}
