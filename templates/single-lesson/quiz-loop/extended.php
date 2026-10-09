<?php
/**
 * Learner-safe shells for extended response formats.
 *
 * @package OhMyLMS\Templates
 */

use OhMyLMS\Assessment\ExtendedQuestions;
use OhMyLMS\Assessment\Interactive;

defined( 'ABSPATH' ) || exit;
$question_type = (string) ( $question['settings']['type'] ?? '' );
$config        = ! empty( $question['frozen'] ) ? $question['settings'] : ExtendedQuestions::public_view( $question_type, $question['settings'] ?? array() );
Interactive::enqueue();
?>
<div class="ohmylms-interactive ohmylms-extended-question" data-ohmylms-interactive="<?php echo esc_attr( $question_type ); ?>" data-name-prefix="<?php echo esc_attr( Interactive::field_prefix( $attempt, $question ) ); ?>" data-config="<?php echo esc_attr( wp_json_encode( $config ) ); ?>">
	<noscript><p><?php esc_html_e( 'Enable JavaScript to answer this question.', 'ohmylms' ); ?></p></noscript>
</div>
