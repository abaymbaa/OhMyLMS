<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! $notices ) {
	return;
}

?>
<div class="ohmylms-notices">
	<div class="ohmylms-NoticeGroup">
		<?php foreach ( $notices as $notice ) : ?>
			<div class="ohmylms-info"<?php echo \CodeRex\Ecommerce\ohmylmse_get_notice_data_attr( $notice ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
				<?php echo \CodeRex\Ecommerce\ohmylmse_kses_notice( $notice['notice'] ); ?>
			</div>
		<?php endforeach; ?>
	</div>
</div>
