<?php
/**
 * The template for displaying single course sidebar's course author
 *
 * This template can be overridden by copying it to yourtheme/single-course/widgets/course-author.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;
$course_id 		= get_the_ID();
$author_id 		= get_post_field ('post_author', $course_id);
$display_name 	= get_the_author_meta( 'nickname' , $author_id );
$avatar_url 	= get_avatar_url( $author_id );

?>

<!-- course author widget -->
<div class="creator-lms-sidebar-widget creator-lms-widget-course-author">
    <div class="course-author-wrapper">
        <figure class="author-avatar">
            <img src="<?php echo $avatar_url; ?>" alt="course author avatar">
        </figure>

        <p class="author-info">
            <?php
                echo sprintf(
                    __('by <strong>%s</strong>', 'ohmylms'),
                    ucfirst($display_name)
                );
            ?>
        </p>
    </div>
</div>
<!-- /.sidebar single widget -->
