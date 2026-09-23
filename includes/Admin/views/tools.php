<?php
defined( 'ABSPATH' ) || exit;

?>

<div class="omlms-tools">
	<h2><?php echo esc_html__( 'Install Sample Data', 'ohmylms' ); ?></h2>
	<p class="omlms-install-actions">
		<a class="button button-primary omlms-tools-sample-data-install"
			data-installing-text="<?php echo esc_attr__( 'Installing...', 'ohmylms' ); ?>"
			href="<?php echo esc_url( wp_nonce_url( admin_url( 'index.php?page=omlms-tools' ), 'install-sample-course' ) ); ?>">
			<?php echo esc_html__( 'Install', 'ohmylms' ); ?>
		</a>

		<a class="button omlms-tools-sample-data-delete"
			data-installing-text="<?php echo esc_attr__( 'Deleting...', 'ohmylms' ); ?>"
			href="<?php echo esc_url( wp_nonce_url( admin_url( 'index.php?page=omlms-tools' ), 'delete-sample-course' ) ); ?>">
			<?php echo esc_html__( 'Delete Sample Data', 'ohmylms' ); ?>
		</a>
	</p>
</div>
