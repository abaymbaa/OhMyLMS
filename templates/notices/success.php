<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! $notices ) {
	return;
}

?>
<div class="ohmylms-success">
	<div class="ohmylms-NoticeGroup">
		<?php foreach ( $notices as $notice ) : ?>
			<div class="ohmylms-message"<?php echo \CodeRex\Ecommerce\ohmylmse_get_notice_data_attr( $notice ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> role="alert">
				<?php echo \CodeRex\Ecommerce\ohmylmse_kses_notice( $notice['notice'] ); ?>
			</div>
		<?php endforeach; ?>
	</div>
</div>
