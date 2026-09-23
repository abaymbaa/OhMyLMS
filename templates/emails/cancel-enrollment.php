<?php
if (! defined('ABSPATH')) {
    exit;
}
?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
    <?php 
    echo 'Confirm Enrollment';
    ?>
    </title>
</head>

<?php 
$email_logo = $email_settings['creator_lms_email_branding_image'] ?? '';
$base_color = $email_settings['creator_lms_email_base_color'] ?? 'var(--omlms-primary-color)';
$email_bg_color = $email_settings['creator_lms_email_background_color'] ?? '#F4F5F7';
$email_body_bg_color = $email_settings['creator_lms_email_body_background_color'] ?? '#ffffff';
$email_text_color = $email_settings['creator_lms_email_body_text_color'] ?? '#1F2328';
$cta_btn_position = $email_settings['creator_lms_email_button_possition'] ?? 'center';

?>

<body>
    <div class="creator-lms-email-container">
        <table class="creator-lms-table-main" style="width: 100%; border-spacing: 0; background: <?php echo $email_bg_color; ?>; border:0;">
            <tr style="background: transparent; border: none; border-radius: 0;">
                <td style="background: transparent; border: none; border-radius: 0; padding: 40px;">
                    <table class="creator-lms-table2" style="border-spacing: 0; max-width: 600px; width: 100%; margin-left: auto; margin-right: auto; border-collapse: separate;">
                        <tr>
                            <td style="border: 5px solid <?php echo $base_color; ?>; background: <?php echo $email_body_bg_color; ?>; border-radius: 20px;">
                                <table class="creator-lms-table3" style="width: 100%; border-collapse: collapse;">
                                    <!-- Include Header -->
                                    <?php do_action('creator_lms_email_header', 'Confirm enrollment', $email_settings ); ?>
                                    
                                    <!-- Main Content -->
                                    <tr>
                                        <td style="padding: 25px 35px 30px; background: <?php echo $email_body_bg_color; ?>; border: 0; border-radius: 0 0 20px 20px;">
                                            <div class="body-content-inner" style="color: <?php echo $email_text_color; ?>; font-family: Helvetica Neue;,Helvetica,Roboto,Arial,sans-serif; font-size: 15px; line-height: 1.6; text-align: left;">
                                                <h1 style="padding: 0; color: <?php echo $base_color; ?>; font-size: 28px; line-height: 1.3; margin: 0; font-weight: bold; text-align: center; margin-bottom: 20px;">
                                                    <?php echo $settings['heading']; ?>
                                                </h1>

                                                <div style="margin: 0 0 15px 0; padding:0; color: <?php echo $email_text_color; ?>; font-family: Helvetica Neue;,Helvetica,Roboto,Arial,sans-serif; font-size: 15px; line-height: 1.6;">
                                                    <?php echo $settings['additional_content']; ?>
                                                </div>

                                                <div style="box-shadow:0px 1px 4px #D3D6DD; background-color: <?php echo $email_body_bg_color; ?>; padding: 20px; border-radius: 12px; margin: 0 0 20px;">
                                                    <p style="color: <?php echo $email_text_color; ?>; font-size: 16px; font-style: normal; font-weight: 500; line-height: 1; margin: 0 0 10px">
                                                        <?php echo __('Enrollment Canceled','ohmylms'); ?>    
                                                    </p>

                                                    <ul style="padding: 0 0 0 35px;">
                                                        <li style="color: <?php echo $email_text_color; ?>; margin: 0 0 5px;">
                                                            <?php echo __('Order Date: ','ohmylms'); ?> 
                                                            <strong><?php echo $enroll_data['start_date']; ?></strong>
                                                        </li>

                                                        <li style="color: <?php echo $email_text_color; ?>; margin: 0 0 5px;">
                                                            <?php echo __('Status: ','ohmylms'); ?> 
                                                            <strong style="color: #F7393C;"><?php echo __('Canceled','ohmylms'); ?></strong>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <!-- Include Footer -->
                                                <div style="margin: 0 0 15px 0; padding:0; color: <?php echo $email_text_color; ?>; font-family: Helvetica Neue;,Helvetica,Roboto,Arial,sans-serif; font-size: 15px; line-height: 1.6;">
                                                    <?php echo $settings['footer_text']; ?>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>