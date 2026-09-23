<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! $notices ) {
	return;
}

?>
<div class="omlms-success">
	<div class="omlms-NoticeGroup">
		<?php foreach ( $notices as $notice ) : ?>
			<div class="omlms-message"<?php echo \CodeRex\Ecommerce\omlmse_get_notice_data_attr( $notice ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> role="alert">
				<?php echo \CodeRex\Ecommerce\omlmse_kses_notice( $notice['notice'] ); ?>
			</div>
		<?php endforeach; ?>
	</div>
</div>
