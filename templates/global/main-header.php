
<?php
/**
 * Template for displaying dashboard of student profile
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/global/main-header.php
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 * @global \OMLMS\Data\Student $student
 * @global string $my_profile_url Custom URL for My Profile link (optional)
 * @global string $my_courses_url Custom URL for My Courses link (optional)
 */

defined( 'ABSPATH' ) || exit();

// Get URLs from General Settings (global) or use defaults
$my_profile_url = omlms_get_nav_link_url( 'profile' );
$my_courses_url = omlms_get_nav_link_url( 'courses' );

?>



<header class="creator-lms-header">
	<div class="creator-lms-container">
		<div class="creator-lms-header-wrapper">
			<div class="creator-lms-header-left">
                <?php
                    if(get_custom_logo()){
                        echo get_custom_logo();
                    }else {
                        echo '<a href="'.home_url().'" class="custom-logo-link">'.get_bloginfo('name').'</a>';
                    }
                ?>

<!--				<div class="search-box">-->
<!--                    --><?php //include(CREATOR_LMS_DIR . '/assets/images/icon/search-icon.php'); ?>
<!--					<input type="search" name="creator-lms-search" placeholder="Search...">-->
<!---->
<!--                    <span class="creator-lms-search-close">-->
<!--                        --><?php //include(CREATOR_LMS_DIR . '/assets/images/icon/cross-icon.php'); ?>
<!--                    </span>-->
<!--				</div>-->
			</div>

			<div class="creator-lms-header-right">
<!--                <button type="button" class="creator-lms-mobile-search-btn">-->
<!--                    --><?php //include(CREATOR_LMS_DIR . '/assets/images/icon/search-icon.php'); ?>
<!--                </button>-->
<!---->
<!--				<div class="creator-lms-notification">-->
<!--					<a href="" title="See all notifications">-->
<!--                        --><?php //include(CREATOR_LMS_DIR . '/assets/images/icon/notification-icon.php'); ?>
<!--						<span class="notification-count">10</span>-->
<!--					</a>-->
<!--				</div>-->

                <?php $student_profile_photo = $student->get_profile_image(); ?>
				<div class="creator-lms-user">
					<a href="#" class="creator-lms-user-avatar <?php echo $student_profile_photo ? 'has-profile-photo' : ''; ?>">
                        <?php
                        
                        if ($student_profile_photo) {
                            echo '<img class="student-profile-photo" src="'.esc_url($student_profile_photo).'" alt="Student Profile Photo" id="student-profile-photo">';
                        }else {
                            echo creator_lms_get_initials($student->get_first_name(), $student->get_last_name());
                        }
                        ?>
					</a>

                    <ul class="creator-lms-user-dropdown">
                        <li>
                            <a href="<?php echo esc_url( omlms_get_account_endpoint_url( 'dashboard' ) ); ?>" class="dashboard-link asdfads">
                                <?php include(CREATOR_LMS_DIR . '/assets/images/icon/home-icon.php'); ?>
                                <?php echo __( 'Dashboard', 'ohmylms' ); ?>
                            </a>
                        </li>

                        <li>
                            <a href="<?php echo $my_profile_url; ?>" class="my-profile-link">
                                <?php include(CREATOR_LMS_DIR . '/assets/images/icon/user-circle-outline-icon.php'); ?>
                                <?php echo __( 'My Profile', 'ohmylms' ); ?>
                            </a>
                        </li>

                        <li>
                            <a href="<?php echo $my_courses_url; ?>" class="my-course-link">
                                <?php include(CREATOR_LMS_DIR . '/assets/images/icon/course-icon.php'); ?>
                                <?php echo __( 'My Courses', 'ohmylms' ); ?>
                            </a>
                        </li>

<!--                        <li>-->
<!--                            <a href="--><?php //echo esc_url( omlms_get_account_endpoint_url( 'settings' ) ); ?><!--" class="settings-link">-->
<!--                                --><?php //include(CREATOR_LMS_DIR . '/assets/images/icon/settings-icon.php'); ?>
<!--                                --><?php //echo __( 'Settings', 'ohmylms' ); ?>
<!--                            </a>-->
<!--                        </li>-->

                        <?php do_action( 'creator_lms_header_user_dropdown_items' ); ?>

                        <li>
                            <a href="<?php echo esc_url( omlms_get_account_endpoint_url( 'customer-logout' ) ); ?>" class="logout-link">
                                <?php include(CREATOR_LMS_DIR . '/assets/images/icon/logout-icon.php'); ?>
                                <?php echo __( 'Log Out', 'ohmylms' ); ?>
                            </a>
                        </li>
                    </ul>

				</div>
			</div>

		</div>
	</div>
</header>
