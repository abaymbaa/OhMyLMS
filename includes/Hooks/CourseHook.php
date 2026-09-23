<?php
/**
 * Hook for Course
 *
 * @package    CreatorLmsPro
 * @subpackage CreatorLmsPro/includes
 */
namespace OMLMS\Hooks;

class CourseHook
{
    public function register_hooks(){
        add_filter('creatorlms_rest_get_course_data', array($this, 'get_course_data'), 10, 2);
    }

    /**
     *
     * @param $data
     * @param $course
     * @return mixed
     */
    public function get_course_data( $data, $course ) {
        $data['has_community'] = $course->get_has_community();
        return $data;
    }
}
?>