<?php // phpcs:ignore WordPress.Files.FileName -- PSR-4 namespace/class filename required by the existing Composer autoloader.
/**
 * The print page of an exam's printable paper: the student paper and its answer key.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Exams;

use OhMyLMS\Assessment\QuestionSnapshot;
use OhMyLMS\Assessment\Schema;
use OhMyLMS\Assessment\Template;
use OhMyLMS\Learning\NativeQuizEditor;
use OhMyLMS\QuestionBank\AccessPolicy;
use OhMyLMS\QuestionBank\VersionPublisher;

defined( 'ABSPATH' ) || exit;

/**
 * An editor-only page that lays the exam out with the paper settings for the browser to print.
 * The student paper is built from each question's learner view, so answers never reach it.
 */
final class PrintPaper {
	const QUERY  = 'ohmylms_print';
	const SCRIPT = 'ohmylms-paper-print';
	const STYLE  = 'ohmylms-paper';

	/** Serve the print page before the theme renders anything. */
	public static function init() {
		add_action( 'template_redirect', array( __CLASS__, 'render' ), 1 );
	}

	/**
	 * Link to the print page of an exam.
	 *
	 * @param int    $id      Quiz ID.
	 * @param string $variant 'paper' for the student paper, 'key' for the answer key.
	 * @return string Print URL.
	 */
	public static function url( $id, $variant = 'paper' ) {
		return add_query_arg(
			array(
				self::QUERY => (int) $id,
				'variant'   => 'key' === $variant ? 'key' : 'paper',
				'_wpnonce'  => wp_create_nonce( self::QUERY . '_' . (int) $id ),
			),
			home_url( '/' )
		);
	}

	/**
	 * Printed items in document order: core blocks as rendered HTML and questions as data.
	 *
	 * @param int  $id      Quiz ID.
	 * @param bool $answers Whether to include answer keys the current user may see.
	 * @return array[] Items for the print bundle.
	 */
	public static function items( $id, $answers ) {
		$quiz      = ohmylms_get_quiz( $id );
		$questions = array();
		foreach ( $quiz->get_questions() as $placement ) {
			$questions[ (int) $placement['id'] ] = $placement;
		}
		$items = array();
		$walk  = static function ( array $blocks ) use ( &$walk, &$items, $questions, $id, $answers ) {
			foreach ( $blocks as $block ) {
				if ( NativeQuizEditor::is_question( $block ) ) {
					$question_id = (int) ( $block['attrs']['questionId'] ?? 0 );
					if ( isset( $questions[ $question_id ] ) ) {
						$question = self::question( $id, $questions[ $question_id ], $answers );
						if ( $question ) {
							$items[] = array(
								'kind'     => 'question',
								'question' => $question,
							);
						}
					}
					continue;
				}
				if ( empty( $block['blockName'] ) ) {
					continue;
				}
				if ( self::has_question( $block['innerBlocks'] ?? array() ) ) {
					// Layout containers print their contents in order until multi-column sections exist.
					$walk( $block['innerBlocks'] );
					continue;
				}
				$html = trim( wp_kses_post( render_block( $block ) ) );
				if ( '' !== $html ) {
					$items[] = array(
						'kind' => 'html',
						'html' => $html,
					);
				}
			}
		};
		$walk( parse_blocks( NativeQuizEditor::editor_content( get_post( $id ) ) ) );
		return $items;
	}

	/**
	 * Whether any nested block is a question placement.
	 *
	 * @param array $blocks Parsed blocks.
	 * @return bool Contains a question.
	 */
	private static function has_question( array $blocks ) {
		foreach ( $blocks as $block ) {
			if ( NativeQuizEditor::is_question( $block ) || self::has_question( $block['innerBlocks'] ?? array() ) ) {
				return true;
			}
		}
		return false;
	}

	/**
	 * One question as the exam delivers it: the pinned version, else the current content.
	 * Both variants use the same seed, so a randomized question has the same numbers in the
	 * paper and its key.
	 *
	 * @param int   $quiz_id   Quiz ID.
	 * @param array $placement Quiz placement.
	 * @param bool  $answers   Whether to include the answer key.
	 * @return array|null Question data in the editor's shape, or null when unavailable.
	 */
	private static function question( $quiz_id, array $placement, $answers ) {
		$question_id = (int) $placement['id'];
		$content     = ! empty( $placement['pinned_version_id'] ) && Schema::ready() ? VersionPublisher::version( $placement['pinned_version_id'] ) : null;
		if ( $content && (int) $content['question_id'] !== $question_id ) {
			$content = null;
		}
		if ( ! $content ) {
			$content = VersionPublisher::content( $question_id );
		}
		if ( ! $content ) {
			return null;
		}
		$snapshot = QuestionSnapshot::from_row(
			$content + array(
				'question_id'   => $question_id,
				'id'            => 0,
				'version_no'    => 0,
				'question_uuid' => '',
			)
		)->instantiate( Template::seed_from( 'print:' . $quiz_id . ':' . $question_id ) );
		$options  = $snapshot->get_questions();
		usort(
			$options,
			static function ( $a, $b ) {
				return (int) ( $a['order_number'] ?? 0 ) <=> (int) ( $b['order_number'] ?? 0 );
			}
		);
		if ( $answers && AccessPolicy::can_use_question( $question_id ) ) {
			return array(
				'name'        => $snapshot->get_name(),
				'description' => $snapshot->get_description(),
				'settings'    => $snapshot->get_settings(),
				'questions'   => $options,
			);
		}
		$view = $snapshot->student_view( array_column( $options, 'id' ), array(), array(), array(), 'print:' . $quiz_id );
		// Only what the paper renderer reads; the player's blank bank and blank layout are left out.
		return array(
			'name'        => (string) $view['name'],
			'description' => (string) $view['description'],
			'settings'    => $view['settings'],
			'questions'   => $view['questions'],
		);
	}

	/**
	 * CSS for the printed page box: size, margins and the page number footer.
	 *
	 * @param array $paper Sanitized paper settings.
	 * @return string CSS.
	 */
	public static function page_css( array $paper ) {
		$size   = 'letter' === $paper['size'] ? 'letter' : 'A4';
		$footer = '';
		if ( $paper['page_numbers'] ) {
			/* translators: 1: page number, 2: page count. */
			$format  = __( 'Page %1$s of %2$s', 'ohmylms' );
			$content = array();
			foreach ( preg_split( '/(%[12]\$s)/', $format, -1, PREG_SPLIT_DELIM_CAPTURE ) as $part ) {
				if ( '%1$s' === $part ) {
					$content[] = 'counter(page)';
				} elseif ( '%2$s' === $part ) {
					$content[] = 'counter(pages)';
				} elseif ( '' !== $part ) {
					// Escape quotes and line breaks for the CSS string, and "<" so it cannot close the style element.
					$content[] = '"' . str_replace( '<', '\\3c ', addcslashes( $part, "\\\"\n\r" ) ) . '"';
				}
			}
			$footer = sprintf( '@bottom-center{content:%s;font:9pt Arial,Helvetica,sans-serif;color:#50575e}', implode( ' ', $content ) );
		}
		return sprintf(
			'@page{size:%1$s;margin:%2$dmm;%3$s}.ohmylms-print-page{--ohmylms-paper-font-size:%4$dpt;--ohmylms-paper-margin:%2$dmm;--ohmylms-paper-width:%5$s}',
			$size,
			(int) $paper['margin'],
			$footer,
			(int) $paper['font_size'],
			'letter' === $paper['size'] ? '215.9mm' : '210mm'
		);
	}

	/** Render the print page and stop, when requested. */
	public static function render() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Presence check; the nonce is verified below.
		if ( ! isset( $_GET[ self::QUERY ] ) ) {
			return;
		}
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Verified with the quiz-specific nonce below.
		$id    = absint( $_GET[ self::QUERY ] );
		$nonce = isset( $_GET['_wpnonce'] ) ? sanitize_text_field( wp_unslash( $_GET['_wpnonce'] ) ) : '';
		if ( get_post_type( $id ) !== OHMYLMS_QUIZ_CPT || ! AccessPolicy::can_edit_quiz( $id ) || ! wp_verify_nonce( $nonce, self::QUERY . '_' . $id ) ) {
			wp_die( esc_html__( 'You cannot print this exam.', 'ohmylms' ), '', array( 'response' => 403 ) );
		}
		$key   = isset( $_GET['variant'] ) && 'key' === sanitize_key( wp_unslash( $_GET['variant'] ) );
		$quiz  = ohmylms_get_quiz( $id );
		$paper = PaperSettings::sanitize( $quiz->get_settings()['paper'] ?? array() );
		$data  = array(
			'title'     => $quiz->get_name(),
			'variant'   => $key ? 'key' : 'paper',
			'settings'  => $paper,
			'items'     => self::items( $id, $key ),
			'autoPrint' => isset( $_GET['print'] ), // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Verified above.
		);
		nocache_headers();
		header( 'X-Robots-Tag: noindex, nofollow' );
		show_admin_bar( false );

		$asset = require OHMYLMS_DIR . '/assets/dist/admin/paper-print.asset.php';
		wp_register_style( self::STYLE, plugins_url( 'assets/css/paper.css', OHMYLMS_FILE ), array(), (string) filemtime( OHMYLMS_DIR . '/assets/css/paper.css' ) );
		$dependencies = $asset['dependencies'];
		if ( \OhMyLMS\Assessment\MathLive::enabled() ) {
			// This runs before wp_enqueue_scripts, where the math scripts are normally registered.
			\OhMyLMS\Assessment\MathLive::configure();
			// The loader script provides the math configuration that loads the runtime on demand.
			$dependencies[] = 'ohmylms-mathlive-loader';
			wp_enqueue_style( 'ohmylms-mathlive', plugins_url( 'assets/css/mathlive.css', OHMYLMS_FILE ), array(), '0.111.1' );
		}
		wp_register_script( self::SCRIPT, plugins_url( 'assets/dist/admin/paper-print.js', OHMYLMS_FILE ), $dependencies, $asset['version'], true );
		wp_set_script_translations( self::SCRIPT, 'ohmylms' );
		$title = $key
			/* translators: %s: exam title. */
			? sprintf( __( 'Answer key: %s', 'ohmylms' ), $quiz->get_name() )
			: $quiz->get_name();
		?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title><?php echo esc_html( $title ); ?></title>
		<?php
		wp_print_styles( array( self::STYLE, 'ohmylms-mathlive' ) );
		// The CSS is built only from sanitized enumerations, integers and an escaped CSS string.
		printf( '<style id="ohmylms-print-page">%s</style>', self::page_css( $paper ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- See above.
		?>
</head>
<body class="ohmylms-print-page is-<?php echo esc_attr( $data['variant'] ); ?><?php echo 'serif' === $paper['font'] ? ' is-serif' : ''; ?>">
<div class="ohmylms-print-toolbar" role="toolbar" aria-label="<?php esc_attr_e( 'Print', 'ohmylms' ); ?>">
	<span class="ohmylms-print-toolbar-title"><?php echo esc_html( $title ); ?></span>
	<span class="ohmylms-print-status" role="status"><?php esc_html_e( 'Preparing the paper…', 'ohmylms' ); ?></span>
	<button type="button" class="ohmylms-print-button" disabled><?php esc_html_e( 'Print', 'ohmylms' ); ?></button>
</div>
<main id="ohmylms-print-root" class="ohmylms-print-sheet"></main>
<script type="application/json" id="ohmylms-print-data"><?php echo wp_json_encode( $data, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_UNESCAPED_UNICODE ); ?></script>
		<?php
		wp_print_scripts( array( self::SCRIPT ) );
		?>
</body>
</html>
		<?php
		exit;
	}
}
