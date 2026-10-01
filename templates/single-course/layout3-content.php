<?php
/**
 * The template for displaying single course layout-3 nav
 *
 * This template can be overridden by copying it to yourtheme/single-course/layout3-content.php
 *
 * @package OhMyLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;

$course_tabs = apply_filters( 'ohmylms_course_tabs', array() );

if ( ! empty( $course_tabs ) ) : ?>
	<nav class="ohmylms-single-course-layout3-content-nav" aria-label="<?php esc_attr_e( 'Course Tabs', 'ohmylms' ); ?>">
        <ul role="tablist">
            <?php foreach ( $course_tabs as $key => $course_tab ) : ?>
                <li class="<?php echo 'description' === $key ? 'active': ''; ?>" role="presentation">
                    <a href="#course-<?php echo esc_attr( $key ); ?>" role="tab" aria-controls="course-<?php echo esc_attr( $key ); ?>" aria-selected="<?php echo 'description' === $key ? 'true': 'false'; ?>" tabindex="<?php echo 'description' === $key ? '0': '-1'; ?>" >
                        <?php echo wp_kses_post( $course_tab['title'] ); ?>
                        
                        <?php if('reviews' === $key){
                            echo '('.$course->get_review_count().')';
                        }  ?>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </nav>


    <div class="ohmylms-single-course-layout3-content">
        <?php 
        foreach ( $course_tabs as $key => $course_tab ) :
            $courseClass = 'ohmylms-single-tab-content course-' . esc_attr($key);

            if ('description' === $key) {
                $courseClass .= ' active';
            }
            $courseId = 'course-' . esc_attr($key);
            ?>
            <div class="<?php echo $courseClass; ?>" id="<?php echo $courseId; ?>" aria-labelledby="<?php echo $courseId; ?>" role="tabpanel" tabindex="0">
                <?php
                    if ( isset( $course_tab['callback'] ) ) {
                        call_user_func( $course_tab['callback'], $key, $course_tab );
                    }
                ?>
            </div>
        <?php endforeach; ?>
    </div>

<?php endif; ?>
