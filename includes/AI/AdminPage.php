<?php
namespace OhMyLMS\AI;

defined( 'ABSPATH' ) || exit;

/**
 * OhMyLMS → AI tutor: connect a provider, set limits, test the connection.
 *
 * Plain server-rendered form on purpose: the API key is posted once to the server and sealed,
 * and is never sent back to a browser, only its last four characters.
 */
final class AdminPage {
	const SLUG = 'ohmylms-ai';

	public static function init() {
		add_action( 'admin_menu', array( __CLASS__, 'menu' ), 99 );
		add_action( 'admin_post_ohmylms_ai_save', array( __CLASS__, 'save' ) );
		add_action( 'admin_post_ohmylms_ai_test', array( __CLASS__, 'test' ) );
	}

	public static function menu() {
		add_submenu_page( 'ohmylms', __( 'AI tutor', 'ohmylms' ), __( 'AI tutor', 'ohmylms' ), 'manage_options', self::SLUG, array( __CLASS__, 'page' ) );
	}

	private static function back( $args ) {
		wp_safe_redirect( add_query_arg( $args, admin_url( 'admin.php?page=' . self::SLUG ) ) );
		exit;
	}

	public static function save() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'You cannot change these settings.', 'ohmylms' ), '', array( 'response' => 403 ) ); }
		check_admin_referer( 'ohmylms_ai' );
		$input = wp_unslash( $_POST );
		Settings::update( is_array( $input ) ? $input : array(), ! empty( $input['clear_key'] ) );
		$style = isset( $input['practice_style'] ) && $input['practice_style'] === 'lesson' ? 'lesson' : 'standard';
		update_option( 'ohmylms_practice_style', $style, false );
		self::back( array( 'saved' => 1 ) );
	}

	public static function test() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'You cannot test this connection.', 'ohmylms' ), '', array( 'response' => 403 ) ); }
		check_admin_referer( 'ohmylms_ai' );
		$started = microtime( true );
		$reply   = Client::complete(
			array(
				'system'     => 'You are a connection test. Reply with the single word OK.',
				'user'       => 'ping',
				'max_tokens' => 60,
			)
		);
		set_transient(
			'ohmylms_ai_test_' . get_current_user_id(),
			is_wp_error( $reply ) ? array(
				'ok'      => false,
				'message' => $reply->get_error_message(),
			) : array(
				'ok'      => true,
				'message' => sprintf(
					/* translators: 1: seconds, 2: reply text */
					__( 'Connected in %1$s s. The model replied: %2$s', 'ohmylms' ),
					number_format_i18n( microtime( true ) - $started, 1 ),
					Feedback::plain( $reply['text'], 60 )
				),
			),
			60
		);
		self::back( array( 'tested' => 1 ) );
	}

	public static function page() {
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'You cannot view this page.', 'ohmylms' ) ); }
		$s      = Settings::summary();
		$stats  = Settings::stats();
		$result = get_transient( 'ohmylms_ai_test_' . get_current_user_id() );
		$locked = $s['key_from'] === 'constant' || $s['key_from'] === 'environment';
		$style  = get_option( 'ohmylms_practice_style', 'standard' );
		?>
		<div class="wrap">
			<h1><?php esc_html_e( 'AI tutor', 'ohmylms' ); ?></h1>
			<p><?php esc_html_e( 'Connect Claude, OpenAI or Gemini so learners can ask for a hint before they answer and an explanation after. The tutor only explains: it never marks an answer, changes a score or affects mastery, and practice keeps working with your own hints and worked solutions if it is off or unavailable.', 'ohmylms' ); ?></p>
			<?php if ( ! empty( $_GET['saved'] ) ) { ?>
				<div class="notice notice-success is-dismissible"><p><?php esc_html_e( 'Settings saved.', 'ohmylms' ); ?></p></div>
			<?php } ?>
			<?php if ( ! empty( $_GET['tested'] ) && is_array( $result ) ) { ?>
				<div class="notice notice-<?php echo $result['ok'] ? 'success' : 'error'; ?>"><p><?php echo esc_html( $result['message'] ); ?></p></div>
			<?php } ?>
			<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
				<?php wp_nonce_field( 'ohmylms_ai' ); ?>
				<table class="form-table" role="presentation">
					<tr>
						<th scope="row"><?php esc_html_e( 'Tutor', 'ohmylms' ); ?></th>
						<td><label><input type="checkbox" name="enabled" value="1" <?php checked( $s['enabled'] ); ?>> <?php esc_html_e( 'Turn the AI tutor on', 'ohmylms' ); ?></label></td>
					</tr>
					<tr>
						<th scope="row"><label for="ohmylms-ai-provider"><?php esc_html_e( 'Provider', 'ohmylms' ); ?></label></th>
						<td>
							<select id="ohmylms-ai-provider" name="provider">
								<?php foreach ( $s['providers'] as $id => $label ) { ?>
									<option value="<?php echo esc_attr( $id ); ?>" <?php selected( $s['provider'], $id ); ?>><?php echo esc_html( $label ); ?></option>
								<?php } ?>
							</select>
						</td>
					</tr>
					<tr>
						<th scope="row"><label for="ohmylms-ai-model"><?php esc_html_e( 'Model', 'ohmylms' ); ?></label></th>
						<td>
							<input id="ohmylms-ai-model" class="regular-text" type="text" name="model" value="<?php echo esc_attr( $s['model'] ); ?>" placeholder="<?php esc_attr_e( 'Model name from your provider, e.g. claude-haiku-5-5', 'ohmylms' ); ?>" autocomplete="off" spellcheck="false">
							<p class="description"><?php esc_html_e( 'Use a fast, inexpensive model: replies are a few sentences. Models that think at length use part of the reply budget below before writing.', 'ohmylms' ); ?></p>
						</td>
					</tr>
					<tr>
						<th scope="row"><label for="ohmylms-ai-key"><?php esc_html_e( 'API key', 'ohmylms' ); ?></label></th>
						<td>
							<?php if ( $locked ) { ?>
								<p><?php echo esc_html( $s['key_from'] === 'constant' ? __( 'Set by OHMYLMS_AI_API_KEY in wp-config.php.', 'ohmylms' ) : __( 'Set by the OHMYLMS_AI_API_KEY environment variable.', 'ohmylms' ) ); ?></p>
							<?php } else { ?>
								<input id="ohmylms-ai-key" class="regular-text" type="password" name="key" value="" autocomplete="new-password" spellcheck="false" placeholder="<?php echo esc_attr( $s['has_key'] ? sprintf( /* translators: %s: last characters of the key */ __( 'Saved key %s. Type to replace.', 'ohmylms' ), $s['key_hint'] ) : __( 'Paste the key from your provider', 'ohmylms' ) ); ?>">
								<?php if ( $s['has_key'] ) { ?>
									<label><input type="checkbox" name="clear_key" value="1"> <?php esc_html_e( 'Remove the saved key', 'ohmylms' ); ?></label>
								<?php } ?>
								<p class="description"><?php esc_html_e( 'The key is stored encrypted and is never shown again. For a production site, define OHMYLMS_AI_API_KEY in wp-config.php instead.', 'ohmylms' ); ?></p>
							<?php } ?>
						</td>
					</tr>
					<tr>
						<th scope="row"><?php esc_html_e( 'Help learners can ask for', 'ohmylms' ); ?></th>
						<td>
							<label><input type="checkbox" name="hints" value="1" <?php checked( $s['hints'] ); ?>> <?php esc_html_e( 'A hint before answering (the tutor is not told the answer)', 'ohmylms' ); ?></label><br>
							<label><input type="checkbox" name="explanations" value="1" <?php checked( $s['explanations'] ); ?>> <?php esc_html_e( 'An explanation of their answer after answering', 'ohmylms' ); ?></label><br>
							<label><input type="checkbox" name="guests" value="1" <?php checked( $s['guests'] ); ?>> <?php esc_html_e( 'Also for guests who are not logged in (limited to 10 requests a day each)', 'ohmylms' ); ?></label>
						</td>
					</tr>
					<tr>
						<th scope="row"><label for="ohmylms-ai-limit"><?php esc_html_e( 'Daily limit per learner', 'ohmylms' ); ?></label></th>
						<td><input id="ohmylms-ai-limit" type="number" min="1" max="500" name="daily_limit" value="<?php echo esc_attr( $s['daily_limit'] ); ?>"> <span class="description"><?php esc_html_e( 'requests per day. Each question gets at most one hint and one explanation.', 'ohmylms' ); ?></span></td>
					</tr>
					<tr>
						<th scope="row"><label for="ohmylms-ai-tokens"><?php esc_html_e( 'Maximum reply length', 'ohmylms' ); ?></label></th>
						<td><input id="ohmylms-ai-tokens" type="number" min="100" max="1200" name="max_tokens" value="<?php echo esc_attr( $s['max_tokens'] ); ?>"> <span class="description"><?php esc_html_e( 'tokens', 'ohmylms' ); ?></span></td>
					</tr>
					<tr>
						<th scope="row"><label for="ohmylms-ai-timeout"><?php esc_html_e( 'Wait for the provider', 'ohmylms' ); ?></label></th>
						<td><input id="ohmylms-ai-timeout" type="number" min="5" max="60" name="timeout" value="<?php echo esc_attr( $s['timeout'] ); ?>"> <span class="description"><?php esc_html_e( 'seconds', 'ohmylms' ); ?></span></td>
					</tr>
					<tr>
						<th scope="row"><?php esc_html_e( 'Practice style', 'ohmylms' ); ?></th>
						<td>
							<label><input type="radio" name="practice_style" value="standard" <?php checked( $style !== 'lesson' ); ?>> <?php esc_html_e( 'Standard: questions in any order', 'ohmylms' ); ?></label><br>
							<label><input type="radio" name="practice_style" value="lesson" <?php checked( $style === 'lesson' ); ?>> <?php esc_html_e( 'Fast feedback lessons: recognise, then build, then solve; every miss comes back once', 'ohmylms' ); ?></label>
							<p class="description"><?php esc_html_e( 'The default for skill practice. A page can choose with [ohmylms_practice style="lesson"].', 'ohmylms' ); ?></p>
						</td>
					</tr>
				</table>
				<p class="submit">
					<button type="submit" class="button button-primary" name="action" value="ohmylms_ai_save"><?php esc_html_e( 'Save settings', 'ohmylms' ); ?></button>
					<button type="submit" class="button" name="action" value="ohmylms_ai_test" <?php disabled( ! $s['has_key'] ); ?>><?php esc_html_e( 'Test the saved connection', 'ohmylms' ); ?></button>
				</p>
			</form>
			<h2><?php esc_html_e( 'What is sent to the provider', 'ohmylms' ); ?></h2>
			<ul class="ul-disc">
				<li><?php esc_html_e( 'The question as the learner saw it, their own answer, and for an explanation the reference answer and your worked solution.', 'ohmylms' ); ?></li>
				<li><?php esc_html_e( 'Never names, e-mail addresses, user IDs or anything about your site. Identical requests are answered from a cache for a week.', 'ohmylms' ); ?></li>
				<li><?php esc_html_e( 'Learners type their own words, so mention the provider in your privacy policy and check its data-processing terms before using it with children.', 'ohmylms' ); ?></li>
			</ul>
			<h2><?php esc_html_e( 'Usage so far', 'ohmylms' ); ?></h2>
			<table class="widefat striped" style="max-width:520px">
				<tbody>
					<tr><th><?php esc_html_e( 'Requests to the provider', 'ohmylms' ); ?></th><td><?php echo esc_html( number_format_i18n( $stats['requests'] ) ); ?></td></tr>
					<tr><th><?php esc_html_e( 'Answered from the cache', 'ohmylms' ); ?></th><td><?php echo esc_html( number_format_i18n( $stats['cached'] ) ); ?></td></tr>
					<tr><th><?php esc_html_e( 'Failures', 'ohmylms' ); ?></th><td><?php echo esc_html( number_format_i18n( $stats['failures'] ) ); ?><?php echo $stats['last_error'] !== '' ? ' (' . esc_html( $stats['last_error'] ) . ')' : ''; ?></td></tr>
					<tr><th><?php esc_html_e( 'Tokens in / out', 'ohmylms' ); ?></th><td><?php echo esc_html( number_format_i18n( $stats['input_tokens'] ) . ' / ' . number_format_i18n( $stats['output_tokens'] ) ); ?></td></tr>
				</tbody>
			</table>
		</div>
		<?php
	}
}
