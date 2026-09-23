<?php
/**
 * The template for displaying a Zoom session/meeting inside a lesson
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/single-lesson/content-session.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>

<?php while ( have_posts() ) : ?>
	<?php 
        the_post(); 
        $session = omlms_get_session(get_the_ID());
        $platform = get_post_meta( get_the_ID(), '_platform', true );
    ?>
    <div class="creator-lms-lesson-content-body content-type-session <?php $platform ?>" >
        <?php 
            if( $platform ) {
                include( CREATOR_LMS_DIR . '/templates/single-lesson/content-' . $platform . '.php' );
            } else {
                error_log('No platform set for this session.');
            }
            // if('zoom' === $platform) {
            //     include(CREATOR_LMS_DIR . '/templates/single-lesson/content-zoom.php');
            // }elseif('googlemeet' === $platform){
            //     include(CREATOR_LMS_PRO_DIR . '/includes/Integrations/GoogleMeet/Templates/content-googlemeet.php');
            // } else {
            //     echo esc_html__( 'No session platform selected.', 'ohmylms' );
            // }
        ?>
    </div>
<?php endwhile; ?>