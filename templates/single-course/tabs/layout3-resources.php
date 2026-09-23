<?php
/**
 * The template for displaying single course resources
 *
 * This template can be overridden by copying it to yourtheme/single-course/tabs/layout3-resources.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

if(!$course){
    return;
}

$current_student_id = get_current_user_id();
$student 			= new \OMLMS\Data\Student( $current_student_id );
$maybe_enrolled     = !empty($student) ? $student->maybe_enrolled( $course->get_id() ) : null;

$resources = method_exists( $course, 'get_resources' ) ? $course->get_resources() : [];
$single_course_layout = get_option('creator_lms_single_course_page_layout','layout_1');

if( !$maybe_enrolled ){
    return;
}

$total_resource = 0;

if( !empty($resources) ){
    foreach ( $resources as $resource ) {
        $total_resource += isset( $resource['file'] ) ? count($resource['file']) : 0;
    }
}


?>
<div class="layout3-content-box layout3-resources">
    <h2 class="content-box-title">
        <?php
            echo apply_filters( 'creator_lms_course_resource_title', __( 'Resources', 'ohmylms' ) ); 
        ?>

        <?php if( 0 < $total_resource ){ ?>
            <span class="small-title">
                <?php
                    printf(
                        _n('%d Resource', '%d Resources', $total_resource, 'ohmylms'),
                        $total_resource
                    );
                ?>
            </span>
        <?php } ?>
    </h2>

    <?php
    if( !empty($resources) ){

        $expand_class = 2 < $total_resource ? 'creator-lms-expandable' : '';
        ?>

        <div class="creator-lms-table <?php echo esc_attr( $expand_class ); ?>">
            <?php
                foreach ( $resources as $resource ) { 
                    foreach ( $resource['file'] as $file ) { 
                        ?>
                        <div class="creator-lms-tr">
                            <div class="creator-lms-td-handle" role="button">
                                <svg width="10" height="6" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg"><path stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1l4 4 4-4"></path></svg>
                            </div>

                            <div class="creator-lms-td title">
                                <?php echo $file['name']; ?>
                            </div>

                            <div class="creator-lms-td action">
                                <a href="<?php echo esc_url($file['url']); ?>" title="Download Now" download >
                                    <?php include(CREATOR_LMS_DIR . '/assets/images/icon/download-icon.php'); ?>
                                </a>
                            </div>
                        </div>
                        <?php
                    } 
                } 
            ?>

            <?php if (2 < $total_resource) { ?>
                <div class="layout3-content-readmore">
                    <button type="button" class="layout3-content-readmore-button">
                        <span class="button-text">
                            <?php echo __( 'Show More', 'ohmylms' ); ?>
                        </span>

                        <span class="icon">
                            <svg width="12" height="6" fill="none" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg"><path fill="#6F767E" fill-rule="evenodd" d="M.234.217a.845.845 0 011.132 0L6 4.516 10.634.217a.845.845 0 011.132 0c.312.29.312.76 0 1.05L7.13 5.565a1.69 1.69 0 01-2.262 0L.234 1.267a.705.705 0 010-1.05z" clip-rule="evenodd"/></svg>
                        </span>
                    </button>
                </div>
            <?php } ?>
        </div>

        <?php
    }else{
        ?>
        <div class="no-course-data">
            <?php include(CREATOR_LMS_DIR . '/assets/images/icon/no-course-found-image.php'); ?>
            <p>
                <?php echo __( 'No Resource Found.', 'ohmylms' ); ?>
            </p>
        </div>
        <?php
    }
    ?>
</div>