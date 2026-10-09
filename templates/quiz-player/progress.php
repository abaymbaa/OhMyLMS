<?php
/**
 * Reactive page progress for every player design and pagination mode.
 *
 * @package OhMyLMS
 */

defined( 'ABSPATH' ) || exit;
?>
<div class="ohmylms-player-progress" aria-label="<?php esc_attr_e( 'Quiz progress', 'ohmylms' ); ?>">
	<span class="ohmylms-player-page" data-wp-text="state.pageLabel"><?php echo esc_html( '1 / ' . $total_pages ); ?></span>
	<div class="ohmylms-player-track" role="progressbar" aria-label="<?php esc_attr_e( 'Page progress', 'ohmylms' ); ?>" aria-valuemin="1" aria-valuemax="<?php echo esc_attr( $total_pages ); ?>" aria-valuenow="1" data-wp-bind--aria-valuenow="context.page">
		<span data-wp-style--width="state.pageWidth"></span>
	</div>
</div>
