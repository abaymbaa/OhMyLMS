<?php

namespace OMLMS\Importers;

defined('ABSPATH') || exit;

/**
 * Class CourseImporter
 *
 * Handles importing a course, chapters, and contents from a JSON file.
 */
class CourseImporter {

    public $file;

    /**
	 * CourseImporter constructor.
	 *
	 * @param $assignment
	 * @throws \Exception
	 * @since 1.0.0
	 */
	public function __construct( $file ) {
        $this->file = $file;
    }

    /**
     * Import a course from an uploaded JSON file.
     *
     * @param array $this->file Uploaded file data from $_FILES.
     * @return int|WP_Error The imported course ID or WP_Error on failure.
     */
    public function import_course_from_json() {

        // Validate the file upload.
        if (!isset($this->file['tmp_name']) || empty($this->file['tmp_name'])) {
            return new \WP_Error('file_missing', __('No file uploaded.', 'creator-lms'));
        }

        // Check the file type.
        if ($this->file['type'] !== 'application/json') {
            return new \WP_Error('invalid_file', __('Invalid file type. Please upload a JSON file.', 'creator-lms'));
        }

        // Read the file contents.
        $json_data = file_get_contents($this->file['tmp_name']);
        if (!$json_data) {
            return new \WP_Error('read_error', __('Unable to read the uploaded file.', 'creator-lms'));
        }

        // Decode the JSON data.
        $course_datas = json_decode($json_data, true);
        $course_ids = [];
        if( is_array($course_datas) ){
            foreach( $course_datas as $course_data ){

                // Validate the course data structure.
                if (!$this->validate_course_data($course_data)) {
                    return new \WP_Error('invalid_data', __('Invalid course data structure.', 'creator-lms'));
                }
        
                // Create the course post.
                $course_id = $this->create_course($course_data);
                if (is_wp_error($course_id)) {
                    return $course_id;
                }
        
                // Import chapters and contents.
                foreach ($course_data['contents'] as $chapter_data) {
                    $chapter_id = $this->create_chapter($chapter_data, $course_id);
        
                    if (is_wp_error($chapter_id)) {
                        continue; // Log or handle error as needed.
                    }
        
                    foreach ($chapter_data['contents'] as $content_data) {
                        $this->create_content($content_data, $chapter_id);
                    }
                }   
                array_push($course_ids,$course_id);     
            }
        }
        
        // Trigger migration completed event for tracking
        if ( ! empty( $course_ids ) ) {
            // Get source LMS from request or file metadata if available
            $source_lms = isset( $this->file['source_lms'] ) ? $this->file['source_lms'] : 'unknown';
            do_action( 'creatorlms_import_completed', $source_lms, array( 'course_ids' => $course_ids, 'total_courses' => count( $course_ids ) ) );
        }
        
        return $course_ids;
    }

    /**
     * Validate the structure of the course data.
     *
     * @param array $data The decoded JSON data.
     * @return bool True if valid, false otherwise.
     */
    private function validate_course_data($data) {
        return isset($data['id'], $data['title'], $data['contents']) && is_array($data['contents']);
    }

    /**
     * Create a course post.
     *
     * @param array $data Course data.
     * @return int|WP_Error The course ID or WP_Error on failure.
     */
    private function create_course($data) {
        $course_id = wp_insert_post([
            'post_title'   => $data['title'],
            'post_content' => $this->process_content_images($data['content'] ?? ''),
            'post_excerpt' => $data['excerpt'] ?? '',
            'post_status'  => $data['status'] ?? 'draft',
            'post_type'    => CREATOR_LMS_COURSE_CPT,
        ]);

        if (is_wp_error($course_id)) {
            return $course_id;
        }

        // Save metadata.
        foreach ($data['meta'] as $key => $value) {
            if( '_video_url' == $key ){
                $video_id = $this->import_attachment($value[0]);
                
                if( $video_id ){
                    update_post_meta($course_id, '_video_id', $video_id);
                }
            }else{
                if( '_video_id' !== $key ){
                    update_post_meta($course_id, $key, maybe_unserialize($value[0]));
                }
            }
        }
       
        if (!empty($data['terms'])) {
            foreach ($data['terms'] as $term_data) {
                // Ensure taxonomy exists, if not, create it
                if (!taxonomy_exists($term_data['taxonomy'])) {
                    // Register the taxonomy if it doesn't exist
                    $taxonomy_args = [
                        'label'        => ucfirst(str_replace('_', ' ', $term_data['taxonomy'])),
                        'labels'       => [
                            'name'          => ucfirst(str_replace('_', ' ', $term_data['taxonomy'])),
                            'singular_name' => ucfirst(str_replace('_', ' ', $term_data['taxonomy'])),
                        ],
                        'public'       => true,
                        'hierarchical' => true,
                        'show_ui'      => true,
                        'show_in_menu' => true,
                        'show_in_nav_menus' => true,
                        'show_tagcloud' => true,
                        'show_in_quick_edit' => true,
                        'show_admin_column' => true,
                    ];
                    
                    // Register taxonomy for the course post type
                    $taxonomy = register_taxonomy($term_data['taxonomy'], CREATOR_LMS_COURSE_CPT, $taxonomy_args);
                    
                    if (is_wp_error($taxonomy)) {
                        continue; // Skip this term if there was an error
                    }
                }
               
                // Check if the term exists in the given taxonomy
                $term = term_exists($term_data['term'], $term_data['taxonomy']);
               
                if (!$term) {
                    // If term doesn't exist, create the new term
                    $term_args = [
                        'slug' => isset($term_data['slug']) ? $term_data['slug'] : sanitize_title($term_data['term']),
                    ];
                    
                    $term = wp_insert_term($term_data['term'], $term_data['taxonomy'], $term_args);
                    
                    if (is_wp_error($term)) {
                        continue; // Skip this term if there was an error
                    }
                }
        
                // Get the term ID for assignment
                $term_id = is_array($term) ? $term['term_id'] : $term;
                
                if ($term_id) {
                    // Assign the term to the course
                    $result = wp_set_object_terms($course_id, (int)$term_id, $term_data['taxonomy'], true);
                    if (is_wp_error($result)) {
                        continue; // Skip this term if there was an error
                    }
                }
            }
        }

        if( isset($data['thumbnail']) ){
            $thumbnail_id = $this->import_thumbnail($data['thumbnail']);
            if ($thumbnail_id) {
                set_post_thumbnail($course_id, $thumbnail_id);
            }
        }
        
        return $course_id;
    }

    /**
     * Create a chapter post.
     *
     * @param array $data Chapter data.
     * @param int $course_id The parent course ID.
     * @return int|WP_Error The chapter ID or WP_Error on failure.
     */
    private function create_chapter($data, $course_id) {
        $chapter_id = wp_insert_post([
            'post_title'   => $data['title'],
            'post_content' => $this->process_content_images($data['content'] ?? ''),
            'post_excerpt' => $data['excerpt'] ?? '',
            'post_status'  => $data['status'] ?? 'draft',
            'post_type'    => CREATOR_LMS_CHAPTER_CPT,
        ]);

        if (is_wp_error($chapter_id)) {
            return $chapter_id;
        }

        // Save metadata.
        foreach ($data['meta'] as $key => $value) {
            if( '_video_url' == $key ){
                $video_id = $this->import_attachment($value[0]);
                if( $video_id ){
                    update_post_meta($chapter_id, '_video_id', $video_id);
                }
            }else{
                if( '_video_id' !== $key ){
                    update_post_meta($chapter_id, $key, maybe_unserialize($value[0]));
                }
            }
        }

        // Add to the chapter relationship table.
        global $wpdb;
        $wpdb->insert(
            "{$wpdb->prefix}omlms_chapter_relationship",
            [
                'course_id'    => $course_id,
                'chapter_id'   => $chapter_id,
                'order_number' => $data['order_number'] ?? 0,
            ]
        );

        if( isset($data['thumbnail']) ){
            $thumbnail_id = $this->import_thumbnail($data['thumbnail']);
            if ($thumbnail_id) {
                set_post_thumbnail($chapter_id, $thumbnail_id);
            }
        }

        return $chapter_id;
    }

    /**
     * Create a content post.
     *
     * @param array $data Content data.
     * @param int $chapter_id The parent chapter ID.
     * @return int|WP_Error The content ID or WP_Error on failure.
     */
    private function create_content($data, $chapter_id) {
        $content_id = wp_insert_post([
            'post_title'   => $data['title'],
            'post_content' => $this->process_content_images($data['content'] ?? ''),
            'post_excerpt' => $data['excerpt'] ?? '',
            'post_status'  => $data['status'] ?? 'draft',
            'post_type'    => $data['type'] ?? 'post',
        ]);
    
        if (is_wp_error($content_id)) {
            return $content_id;
        }
    
        // Save metadata.
        foreach ($data['meta'] as $key => $value) {
            if ('_video_url' == $key) {
                $video_id = $this->import_attachment($value[0]);
                if ($video_id) {
                    update_post_meta($content_id, '_video_id', $video_id);
                }
            } else {
                if ('_video_id' !== $key) {
                    update_post_meta($content_id, $key, maybe_unserialize($value[0]));
                }
            }
        }
    
        if ('omlms-quiz' === $data['type']) {
            $this->import_quiz_questions($content_id, $data['questions'] ?? []);
        }
        
        // Add to the content relationship table.
        global $wpdb;
        $content_type = isset($data['content_type']) ? $data['content_type'] : $data['type'];
        $wpdb->insert(
            "{$wpdb->prefix}omlms_content_relationship",
            [
                'chapter_id'   => $chapter_id,
                'content_id'   => $content_id,
                'content_type' => str_replace("omlms-", "", $content_type),
                'order_number' => $data['order_number'] ?? 0,
            ]
        );
    
        if (isset($data['thumbnail'])) {
            $thumbnail_id = $this->import_thumbnail($data['thumbnail']);
            if ($thumbnail_id) {
                set_post_thumbnail($content_id, $thumbnail_id);
                update_post_meta($content_id, '_cover_image_id', $thumbnail_id);
            }
        }
    
        return $content_id;
    }


    /**
     * Process content images, download them locally, and update their URLs.
     *
     * @param string $content The post content with external image URLs.
     * @return string Updated content with local image URLs.
     */
    private function process_content_images($content) {
        if (empty($content)) {
            return $content;
        }

        preg_match_all('/<img[^>]+src=["\']?([^"\' >]+)["\']?[^>]*>/i', $content, $matches);
        $image_urls = $matches[1] ?? [];

        foreach ($image_urls as $image_url) {
            $local_image_id = $this->import_thumbnail(['url' => $image_url]);
            if ($local_image_id) {
                $local_image_url = wp_get_attachment_url($local_image_id);
                $content = str_replace($image_url, $local_image_url, $content);
            }
        }

        return $content;
    }

    private function import_thumbnail($thumbnail) {
        if (empty($thumbnail['url'])) {
            return null; // No thumbnail to import.
        }
        return $this->import_attachment($thumbnail['url']);
    }


    private function import_attachment($url) {
        if (!$url) {
            return null;
        }
    
        // Ensure WordPress file functions are available
        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/media.php';
        require_once ABSPATH . 'wp-admin/includes/image.php';
    
        // Add SSL verification bypass for local/development environments
        add_filter('https_ssl_verify', '__return_false');
        
        // Set longer timeout for large files
        add_filter('http_request_timeout', function() {
            return 60; // 60 seconds timeout
        });
    
        // Add custom headers for potential authentication
        add_filter('http_request_args', function($args) {
            $args['timeout'] = 60;
            $args['sslverify'] = false;
            $args['headers'] = array(
                'User-Agent' => 'WordPress/' . get_bloginfo('version'),
                'Accept' => '*/*'
            );
            return $args;
        });
    
        // Download the file
        $tmp_file = download_url($url);
       
        if (is_wp_error($tmp_file)) {
            return null;
        }
    
        // Get file type
        $file_type = '';
        if (function_exists('mime_content_type')) {
            $file_type = mime_content_type($tmp_file);
        } else {
            $file_type = wp_get_mime_type($tmp_file);
        }
       
        // Fallback to extension-based mime type
        if (empty($file_type)) {
            $ext = pathinfo($url, PATHINFO_EXTENSION);
            $mime_types = array(
                'webm' => 'video/webm',
                'mp4' => 'video/mp4',
                'png' => 'image/png',
                'jpg' => 'image/jpeg',
                'jpeg' => 'image/jpeg',
                'gif' => 'image/gif'
            );
            $file_type = isset($mime_types[strtolower($ext)]) ? $mime_types[strtolower($ext)] : '';
        }
    
        $file = array(
            'name' => basename($url),
            'type' => $file_type,
            'tmp_name' => $tmp_file,
            'error' => 0,
            'size' => filesize($tmp_file)
        );
    
        // Allow video uploads
        add_filter('upload_mimes', function($mimes) {
            $mimes['webm'] = 'video/webm';
            $mimes['mp4'] = 'video/mp4';
            return $mimes;
        });
    
        // Increase memory limit temporarily
        wp_raise_memory_limit('image');
        
        $attachment_id = media_handle_sideload($file, 0);
        
        if (is_wp_error($attachment_id)) {
            @unlink($tmp_file);
            return null;
        }
    
        return $attachment_id;
    }

    /**
     * Import questions for a quiz and establish relationships.
     *
     * @param int $quiz_id The quiz post ID.
     * @param array $questions Array of question data.
     */
    private function import_quiz_questions($quiz_id, $questions) {
        global $wpdb;
    
        foreach ($questions as $index => $question) {
            // Create the question post
            $question_id = wp_insert_post([
                'post_title'   => $question['title'] ?? 'Question',
                'post_content' => $this->process_content_images($question['content'] ?? ''),
                'post_status'  => $question['status'] ?? 'publish',
                'post_type'    => 'omlms-question',
            ]);
    
            if (is_wp_error($question_id)) {
                continue; // Skip this question if there is an error.
            }
    
            // Save metadata for the question
            foreach ($question['meta'] as $key => $value) {
                if ('_video_url' == $key) {
                    $video_id = $this->import_attachment($value[0]);
                    if ($video_id) {
                        update_post_meta($question_id, '_video_id', $video_id);
                    }
                } else {
                    if ('_video_id' !== $key) {
                        update_post_meta($question_id, $key, maybe_unserialize($value[0]));
                    }
                }
            }
    
            // Insert the question-answer relationship into `omlms_question_answers` table
            if (isset($question['answers']) && is_array($question['answers'])) {
                foreach ($question['answers'] as $answer) {
                    // Insert answer data into `omlms_question_answers`
                    $answer_data = [
                        'question_id' => $question_id,
                        'answer'      => $answer['answer'],
                        'is_correct'  => isset($answer['is_correct']) ? $answer['is_correct'] : 0,
                    ];
    
                    $wpdb->insert("{$wpdb->prefix}omlms_question_answers", $answer_data);
                    $answer_id = $wpdb->insert_id; // Get the last inserted answer ID
    
                    // Save answer metadata into `omlms_question_answermeta`
                    foreach ($answer['meta'] as $meta_key => $meta_value) {
                        $meta_data = [
                            'answer_id' => $answer_id,
                            'meta_key'  => $meta_key,
                            'meta_value'=> maybe_unserialize($meta_value),
                        ];
    
                        $wpdb->insert("{$wpdb->prefix}omlms_question_answermeta", $meta_data);
                    }
                }
            }
    
            // Insert into the quiz-question relationship table
            $wpdb->insert(
                "{$wpdb->prefix}omlms_quiz_questions_relationship",
                [
                    'quiz_id'      => $quiz_id,
                    'question_id'  => $question_id,
                    'order_number' => $index + 1,
                ]
            );
        }
    }
}
