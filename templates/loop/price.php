<?php
/**
 * OhMyLMS Loop Price
 *
 * This template can be overridden by copying it to yourtheme/creator-lms/loop/price.php.
 *
 * @package OMLMS\Templates
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $course;
?>

<?php if ( $price_html = $course->get_price_html() ) : ?>
	<p class="price"><?php echo $price_html; ?></p>
<?php endif; ?>

