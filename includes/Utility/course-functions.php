<?php

/**
 * Get course object
 *
 * @param $course_id
 * @return bool|\OMLMS\Data\Course
 * @throws Exception
 * @since 1.0.0
 */
function omlms_get_course( $course_id ) {
	// Ensure the plugin is loaded and course_factory exists
    if ( function_exists( 'OMLMS' ) && isset( OMLMS()->course_factory ) && OMLMS()->course_factory ) {
        return OMLMS()->course_factory->get_course( $course_id );
    }

    // Fallback: return null if course_factory is not ready
    return null;
}

function omlms_get_course_id_by_content_id( $content_id ) {
	global $wpdb;

	$table_content = $wpdb->prefix . 'omlms_content_relationship';
	$table_chapter = $wpdb->prefix . 'omlms_chapter_relationship';

	$query     = $wpdb->prepare(
		"SELECT cr.course_id
		FROM {$table_content} AS c
		JOIN {$table_chapter} AS cr
		ON c.chapter_id = cr.chapter_id
		WHERE c.content_id = %d",
		$content_id
	);
	$course_id = $wpdb->get_var( $query );
	if ( $course_id === null ) {
		return false;
	}

	return $course_id;
}

/**
 * Get the first lesson of a course.
 *
 * @param int $course_id The ID of the course.
 * @return string The permalink of the first lesson.
 * @since 1.0.0
 */
function creator_lms_get_course_first_lesson_url( $course_id ) {
	$course = omlms_get_course( $course_id );
	$chapters = $course->get_chapters();
	if( is_array($chapters) ) {
		foreach ( $chapters as $chapter_array ) {
			if( !isset($chapter_array['id']) ) {
				continue;
			}
			$chapter = omlms_get_chapter( $chapter_array['id'] );
			
			if ( ! $chapter ) {
				continue;
			}

			$lessons = $chapter->get_lessons();
			if ( is_array( $lessons ) ) {
				foreach ( $lessons as $lesson_array ) {
					if( !isset($lesson_array['id']) ) {
						continue;
					}
					if( isset($lesson_array['type']) && 'quiz' === $lesson_array['type'] ) {
						$quiz = omlms_get_quiz( $lesson_array['id'] );
						if ( $quiz ) {
							return creatorlms_get_pretty_content_permalink( $quiz->get_id() ); // Return the URL of the first incomplete quiz
						}
					}
					
					if( isset($lesson_array['type']) && 'assignment' === $lesson_array['type'] ) {
						$assignment = omlms_get_assignment( $lesson_array['id'] );
						if ( $assignment ) {
							return creatorlms_get_pretty_content_permalink( $assignment->get_id() ); // Return the URL of the first incomplete assignment
						}
					}
					
					$lesson = omlms_get_lesson( $lesson_array['id'] );
					if ( ! $lesson ) {
						continue;
					}
					return creatorlms_get_pretty_content_permalink( $lesson->get_id() ); // Return the URL of the first incomplete lesson
					
				}
			}
		}
	}


	global $wpdb;
	$sql       = $wpdb->prepare(
		"SELECT content_rel.content_id
        FROM {$wpdb->posts} AS wp_posts
        INNER JOIN {$wpdb->prefix}omlms_chapter_relationship AS chapter_rel
            ON wp_posts.ID = chapter_rel.course_id
        INNER JOIN {$wpdb->prefix}omlms_content_relationship AS content_rel
            ON chapter_rel.chapter_id = content_rel.chapter_id
        INNER JOIN {$wpdb->posts} AS lesson_post
            ON content_rel.content_id = lesson_post.ID
        WHERE wp_posts.ID = %d
        AND lesson_post.post_status = 'publish'
        ORDER BY content_rel.order_number ASC
        LIMIT 1",
		$course_id
	);
	$lesson_id = $wpdb->get_var( $sql );
	return $lesson_id ? creatorlms_get_pretty_content_permalink( $lesson_id ) : '';
}

/**
 * Get course ID by chapter ID.
 *
 * @param int $chapter_id The ID of the chapter.
 * @return int|null The course ID or null if not found.
 *
 * @since 1.0.0
 */
function creator_lms_get_course_id_by_chapter_id( $chapter_id ) {
	static $cache = array();

	if ( array_key_exists( $chapter_id, $cache ) ) {
		return $cache[ $chapter_id ];
	}

	global $wpdb;
	$sql = $wpdb->prepare(
		"SELECT course_id FROM {$wpdb->prefix}omlms_chapter_relationship WHERE chapter_id = %d LIMIT 1",
		$chapter_id
	);
	$result = $wpdb->get_var( $sql );

	if ($result) $cache[ $chapter_id ] = $result;
	return $result;
}

/**
 * Retrieves the best selling courses.
 *
 * This function fetches the courses that have the highest number of sales.
 *
 * @return array An array of best selling courses.
 */
function get_best_selling_course_ids( $category = null ) {
	global $wpdb;
	$category = 'all' === $category ? null : $category;
	// Base query to fetch best-selling courses
	$query = "
        SELECT p.ID
        FROM {$wpdb->posts} p
        INNER JOIN {$wpdb->prefix}omlms_order_itemmeta m ON p.ID = m.meta_value
    ";

	// If category is provided, join term relationships and taxonomy tables
	if ( $category ) {
		$query .= "
            INNER JOIN {$wpdb->term_relationships} tr ON p.ID = tr.object_id
            INNER JOIN {$wpdb->term_taxonomy} tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
            INNER JOIN {$wpdb->terms} t ON tt.term_id = t.term_id
        ";
	}

	// Add conditions for post type, status, and course ID meta key
	$query .= '
        WHERE p.post_type = %s 
          AND p.post_status = %s
          AND m.meta_key = %s
    ';

	// Add category condition if category is provided
	if ( $category ) {
		$query .= ' AND t.slug = %s ';
	}

	// Group by course ID and order by sales count in descending order
	$query .= '
        GROUP BY p.ID
        ORDER BY COUNT(m.meta_value) DESC
    ';

	// Prepare the query with or without category
	if ( $category ) {
		$prepared_query = $wpdb->prepare( $query, 'omlms-course', 'publish', '_course_id', $category );
	} else {
		$prepared_query = $wpdb->prepare( $query, 'omlms-course', 'publish', '_course_id' );
	}

	// Execute the query and return the results
	$results = $wpdb->get_col( $prepared_query ); // Fetch only course IDs
	
	return $results;
}

/**
 * Retrieves the top rated courses.
 *
 * This function fetches the courses that have the highest ratings.
 *
 * @return array An array of top rated courses.
 */
function get_top_rated_course_ids( $category = null ) {
	global $wpdb;
	$category = 'all' === $category ? null : $category;
	// Base query to fetch courses with average rating
	$query = "
        SELECT p.ID AS course_id
        FROM {$wpdb->posts} p
        LEFT JOIN {$wpdb->prefix}postmeta pm ON p.ID = pm.post_id
    ";

	// If category is provided, join term relationships and taxonomy tables
	if ( $category ) {
		$query .= "
            INNER JOIN {$wpdb->term_relationships} tr ON p.ID = tr.object_id
            INNER JOIN {$wpdb->term_taxonomy} tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
            INNER JOIN {$wpdb->terms} t ON tt.term_id = t.term_id
        ";
	}

	// Adding conditions for post type, status, and average rating meta key
	$query .= '
        WHERE p.post_type = %s
          AND p.post_status = %s
          AND pm.meta_key = %s
    ';

	// Add category condition if category is provided
	if ( $category ) {
		$query .= ' AND t.slug = %s ';
	}

	// Order by average rating in descending order
	$query .= '
        ORDER BY CAST(pm.meta_value AS DECIMAL(10,2)) DESC
    ';

	// Prepare the query with or without category
	if ( $category ) {
		$prepared_query = $wpdb->prepare( $query, 'omlms-course', 'publish', '_average_rating', $category );
	} else {
		$prepared_query = $wpdb->prepare( $query, 'omlms-course', 'publish', '_average_rating' );
	}

	// Execute the query and return the results
	$results = $wpdb->get_col( $prepared_query ); // Fetch only course IDs
	
	return $results;
}

/**
 * Retrieves the top reviewed courses.
 *
 * This function retrieves the courses that have received the highest number of reviews.
 *
 * @return array An array of top reviewed courses.
 */
function get_top_reviewed_course_ids( $category = null ) {
	global $wpdb;
	$category = 'all' === $category ? null : $category;
	// Base query to fetch courses with average rating
	$query = "
        SELECT p.ID AS course_id
        FROM {$wpdb->posts} p
        LEFT JOIN {$wpdb->prefix}postmeta pm ON p.ID = pm.post_id
    ";

	// If category is provided, join term relationships and taxonomy tables
	if ( $category ) {
		$query .= "
            INNER JOIN {$wpdb->term_relationships} tr ON p.ID = tr.object_id
            INNER JOIN {$wpdb->term_taxonomy} tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
            INNER JOIN {$wpdb->terms} t ON tt.term_id = t.term_id
        ";
	}

	// Adding conditions for post type, status, and review count
	$query .= '
        WHERE p.post_type = %s
          AND p.post_status = %s
          AND pm.meta_key = %s
    ';

	// Add category condition if category is provided
	if ( $category ) {
		$query .= ' AND t.slug = %s ';
	}

	// Order by review count (assuming _review_count stores numeric values)
	$query .= '
        ORDER BY CAST(pm.meta_value AS DECIMAL(10,2)) DESC
    ';

	// Prepare the query with or without category
	if ( $category ) {
		$prepared_query = $wpdb->prepare( $query, 'omlms-course', 'publish', '_review_count', $category );
	} else {
		$prepared_query = $wpdb->prepare( $query, 'omlms-course', 'publish', '_review_count' );
	}

	// Execute the query and return the results
	$results = $wpdb->get_col( $prepared_query ); // Fetch only course IDs
	return $results;
}


/**
 * Retrieves the list of free courses.
 *
 * @return array The array of free courses.
 */
function get_free_course_ids( $category = null ) {
	global $wpdb;
	$category = 'all' === $category ? null : $category;
	// Base query to fetch free courses
	$query = "
        SELECT p.ID AS course_id
        FROM {$wpdb->posts} p
        LEFT JOIN {$wpdb->prefix}postmeta pm ON p.ID = pm.post_id
    ";

	// If category is provided, join term relationships and taxonomy tables
	if ( $category ) {
		$query .= "
            INNER JOIN {$wpdb->term_relationships} tr ON p.ID = tr.object_id
            INNER JOIN {$wpdb->term_taxonomy} tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
            INNER JOIN {$wpdb->terms} t ON tt.term_id = t.term_id
        ";
	}

	// Adding conditions for post type, status, and free price type
	$query .= '
        WHERE p.post_type = %s
          AND p.post_status = %s
          AND pm.meta_key = %s
          AND pm.meta_value = %s
    ';

	// Add category condition if category is provided
	if ( $category ) {
		$query .= ' AND t.slug = %s ';
	}

	// Prepare the query with or without category
	if ( $category ) {
		$prepared_query = $wpdb->prepare( $query, 'omlms-course', 'publish', '_price_type', 'free', $category );
	} else {
		$prepared_query = $wpdb->prepare( $query, 'omlms-course', 'publish', '_price_type', 'free' );
	}

	// Execute the query and return the results
	$results = $wpdb->get_col( $prepared_query ); // Fetch only course IDs
	return $results;
}


/**
 * Retrieves the list of paid courses.
 *
 * @return array The list of paid courses.
 */
function get_paid_course_ids( $category = null ) {
	global $wpdb;
	$category = 'all' === $category ? null : $category;
	// Base query to fetch paid courses
	$query = "
        SELECT p.ID AS course_id
        FROM {$wpdb->posts} p
        LEFT JOIN {$wpdb->prefix}postmeta pm ON p.ID = pm.post_id
    ";

	// If category is provided, join term relationships and taxonomy tables
	if ( $category ) {
		$query .= "
            INNER JOIN {$wpdb->term_relationships} tr ON p.ID = tr.object_id
            INNER JOIN {$wpdb->term_taxonomy} tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
            INNER JOIN {$wpdb->terms} t ON tt.term_id = t.term_id
        ";
	}

	// Adding conditions for post type, status, and paid price type
	$query .= '
        WHERE p.post_type = %s
          AND p.post_status = %s
          AND pm.meta_key = %s
          AND pm.meta_value = %s
    ';

	// Add category condition if category is provided
	if ( $category ) {
		$query .= ' AND t.slug = %s ';
	}

	// Prepare the query with or without category
	if ( $category ) {
		$prepared_query = $wpdb->prepare( $query, 'omlms-course', 'publish', '_price_type', 'paid', $category );
	} else {
		$prepared_query = $wpdb->prepare( $query, 'omlms-course', 'publish', '_price_type', 'paid' );
	}

	// Execute the query and return the results
	$results = $wpdb->get_col( $prepared_query ); // Fetch only course IDs
	return $results;
}



/**
 * Retrieves the list of recent courses.
 *
 * @return array The list of recent course IDs.
 */
function get_recent_course_ids( $category = null ) {
	global $wpdb;

	$category = 'all' === $category ? null : $category;
	// Base query to fetch recent courses
	$query = "
        SELECT p.ID AS course_id
        FROM {$wpdb->posts} p
    ";

	// If category is provided, join term relationships and taxonomy tables
	if ( $category ) {
		$query .= "
            INNER JOIN {$wpdb->term_relationships} tr ON p.ID = tr.object_id
            INNER JOIN {$wpdb->term_taxonomy} tt ON tr.term_taxonomy_id = tt.term_taxonomy_id
            INNER JOIN {$wpdb->terms} t ON tt.term_id = t.term_id
        ";
	}

	// Adding conditions for post type and post status
	$query .= '
        WHERE p.post_type = %s
          AND p.post_status = %s
    ';

	// Add category condition if category is provided
	if ( $category ) {
		$query .= ' AND t.slug = %s ';
	}

	// Order by post_date to get the most recent courses
	$query .= ' ORDER BY p.post_date DESC ';

	// Prepare the query with or without category
	if ( $category ) {
		$prepared_query = $wpdb->prepare( $query, 'omlms-course', 'publish', $category );
	} else {
		$prepared_query = $wpdb->prepare( $query, 'omlms-course', 'publish' );
	}

	// Execute the query and return the results
	$results = $wpdb->get_col( $prepared_query ); // Fetch only course IDs
	return $results;
}

