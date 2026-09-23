<?php
/**
 * @package    OMLMS\Duplicate
 * @subpackage CreatorLmsPro
 * @since      1.0.0
 */
namespace OMLMS\Duplicate;

/**
 * Course class for duplicate courses.
 * 
 * @package    OMLMS\Duplicate
 * @subpackage CreatorLmsPro
 *
 * @since 1.0.0
 * 
 * @return void
 */
class Course {

    /**
     * Course ID
     *
     * @since 1.0.0
     *
     * @var int
     */
    protected $course_id;

    /**
     * Constructor
     *
     * @param int $course_id Course ID.
     *
     * @since 1.0.0
     */
    public function __construct( $course_id ) {
        $this->course_id = $course_id;
    }


    /**
     * Duplicate a course and return the new course ID.
     *
     * @return int New course ID.
     */
    public function duplicate() {
        global $wpdb;

        // Duplicate the course post.
        $original_post = get_post($this->course_id);
        if (!$original_post || $original_post->post_type !== CREATOR_LMS_COURSE_CPT) {
            throw new \Exception(__('Invalid course type.', 'creator-lms'));
        }
       
        $new_post = [
            'post_title'     => $original_post->post_title . ' (Copy)',
            'post_content'   => $original_post->post_content,
            'post_excerpt'   => $original_post->post_excerpt,
            'post_name'      => $original_post->post_name.'-copy',
            'post_status'    => 'draft',
            'post_type'      => $original_post->post_type,
            'post_author'    => get_current_user_id(),
        ];

        $new_course_id = wp_insert_post($new_post);
        $new_course = omlms_get_course($new_course_id);
        if (!$new_course) {
            throw new \Exception(__('Failed to create new course.', 'creator-lms'));
        }
        $new_course->save();

        if (is_wp_error($new_course_id)) {
            throw new \Exception(__('Failed to duplicate course.', 'creator-lms'));
        }

        // Duplicate meta data.
        $this->duplicate_meta($this->course_id, $new_course_id);

        // Duplicate thumbnail.
        $thumbnail_id = get_post_thumbnail_id($this->course_id);
        if ($thumbnail_id) {
            set_post_thumbnail($new_course_id, $thumbnail_id);
        }

        // Duplicate terms.
        $taxonomies = get_object_taxonomies(CREATOR_LMS_COURSE_CPT);
        foreach ($taxonomies as $taxonomy) {
            $terms = wp_get_post_terms($this->course_id, $taxonomy, ['fields' => 'ids']);
            if (!is_wp_error($terms)) {
                wp_set_post_terms($new_course_id, $terms, $taxonomy);
            }
        }

        // Duplicate chapters and contents.
        $chapter_query = $wpdb->prepare("
            SELECT * FROM {$wpdb->prefix}omlms_chapter_relationship
            WHERE course_id = %d
            ORDER BY order_number ASC
        ", $this->course_id);

        $chapters = $wpdb->get_results($chapter_query, ARRAY_A);

        foreach ($chapters as $chapter) {
            $original_chapter_id = $chapter['chapter_id'];
            $chapter_post = get_post($original_chapter_id);

            $new_chapter_id = wp_insert_post([
                'post_title'   => $chapter_post->post_title,
                'post_content' => $chapter_post->post_content,
                'post_excerpt' => $chapter_post->post_excerpt,
                'post_status'  => 'draft',
                'post_type'    => $chapter_post->post_type,
                'post_author'  => get_current_user_id(),
            ]);

            $this->duplicate_meta($original_chapter_id, $new_chapter_id);

            $wpdb->insert("{$wpdb->prefix}omlms_chapter_relationship", [
                'course_id'    => $new_course_id,
                'chapter_id'   => $new_chapter_id,
                'order_number' => $chapter['order_number'],
            ]);

            // Duplicate contents.
            $content_query = $wpdb->prepare("
                SELECT * FROM {$wpdb->prefix}omlms_content_relationship
                WHERE chapter_id = %d
                ORDER BY order_number ASC
            ", $original_chapter_id);

            $contents = $wpdb->get_results($content_query, ARRAY_A);

            foreach ($contents as $content) {
                $original_content_id = $content['content_id'];
                $content_post = get_post($original_content_id);

                $new_content_id = wp_insert_post([
                    'post_title'   => $content_post->post_title,
                    'post_content' => $content_post->post_content,
                    'post_excerpt' => $content_post->post_excerpt,
                    'post_status'  => $content_post->post_status,
                    'post_type'    => $content_post->post_type,
                    'post_author'  => get_current_user_id(),
                ]);

                $this->duplicate_meta($original_content_id, $new_content_id);

                $wpdb->insert("{$wpdb->prefix}omlms_content_relationship", [
                    'chapter_id'   => $new_chapter_id,
                    'content_id'   => $new_content_id,
                    'content_type'   => $content['content_type'],
                    'order_number' => $content['order_number'],
                ]);

                // If content is quiz, duplicate quiz questions and answers
                if ($content_post->post_type === 'omlms-quiz') {
                    $this->duplicate_quiz_questions($original_content_id, $new_content_id);
                }
            }
        }

        return $new_course_id;
    }

    /**
     * Duplicate all post meta from one post to another, with option to exclude certain meta keys.
     * Uses update_post_meta to update if exists, or add if not.
     *
     * @param int   $from_id   Source post ID.
     * @param int   $to_id     Destination post ID.
     * @param array $exclude   (Optional) Meta keys to exclude from duplication.
     */
    private function duplicate_meta($from_id, $to_id, $exclude = array()) {
        $meta = get_post_meta($from_id);
        foreach ($meta as $key => $values) {
            if (in_array($key, $exclude, true)) {
                continue;
            }
            foreach ($values as $value) {
                update_post_meta($to_id, $key, maybe_unserialize($value));
            }
        }
    }

    /**
     * Duplicate all questions and answers for a quiz.
     */
    private function duplicate_quiz_questions($from_quiz_id, $to_quiz_id) {
        global $wpdb;

        $questions = $wpdb->get_results($wpdb->prepare("
            SELECT * FROM {$wpdb->prefix}omlms_quiz_questions_relationship
            WHERE quiz_id = %d
            ORDER BY order_number ASC
        ", $from_quiz_id), ARRAY_A);

        foreach ($questions as $question) {
            $original_question_id = $question['question_id'];
            $question_post = get_post($original_question_id);

            $new_question_id = wp_insert_post([
                'post_title'   => $question_post->post_title,
                'post_content' => $question_post->post_content,
                'post_status'  => $question_post->post_status,
                'post_type'    => $question_post->post_type,
                'post_author'  => get_current_user_id(),
            ]);

            $this->duplicate_meta($original_question_id, $new_question_id);

            $wpdb->insert("{$wpdb->prefix}omlms_quiz_questions_relationship", [
                'quiz_id'      => $to_quiz_id,
                'question_id'  => $new_question_id,
                'order_number' => $question['order_number'],
            ]);

            // Duplicate answers.
            $answers = $wpdb->get_results($wpdb->prepare("
                SELECT * FROM {$wpdb->prefix}omlms_question_answers
                WHERE question_id = %d
                ORDER BY order_number ASC
            ", $original_question_id), ARRAY_A);

            foreach ($answers as $answer) {
                $wpdb->insert("{$wpdb->prefix}omlms_question_answers", [
                    'question_id'  => $new_question_id,
                    'answer'       => $answer['answer'],
                    'order_number' => $answer['order_number'],
                    'is_correct'   => $answer['is_correct'],
                ]);

                $new_answer_id = $wpdb->insert_id;

                // Duplicate answer meta.
                $answer_meta = $wpdb->get_results($wpdb->prepare("
                    SELECT * FROM {$wpdb->prefix}omlms_question_answermeta
                    WHERE answer_id = %d
                ", $answer['id']), ARRAY_A);

                foreach ($answer_meta as $meta_entry) {
                    $wpdb->insert("{$wpdb->prefix}omlms_question_answermeta", [
                        'answer_id' => $new_answer_id,
                        'meta_key'  => $meta_entry['meta_key'],
                        'meta_value'=> $meta_entry['meta_value'],
                    ]);
                }
            }
        }
    }
}
?>