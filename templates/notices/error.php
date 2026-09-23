<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! $notices ) {
	return;
}

$className = count($notices) === 1 ? 'only-one-error' : '';

?>
<div class="omlms-error-notices">
	<div class="omlms-NoticeGroup">
		<ul class="omlms-error <?php echo $className;?>" role="alert">
			<?php foreach ( $notices as $notice ) :
				?>
				<li
					<?php echo \CodeRex\Ecommerce\omlmse_get_notice_data_attr( $notice ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> >
					<?php echo \CodeRex\Ecommerce\omlmse_kses_notice( $notice['notice'] ); ?>
				</li>
			<?php endforeach; ?>
		</ul>
	</div>
</div>

