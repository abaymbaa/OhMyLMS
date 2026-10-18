<?php // phpcs:ignore WordPress.Files.FileName -- Composer PSR-4 class/file mapping; see docs/CODING-STANDARDS.md.
/**
 * Native Gutenberg quiz documents backed by the existing question bank.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Learning;

use OhMyLMS\Assessment\ErrorException;
use OhMyLMS\QuestionBank\AccessPolicy;
use OhMyLMS\QuestionBank\DraftWriter;
use OhMyLMS\QuestionBank\Usage;
use OhMyLMS\QuestionBank\VersionPublisher;

defined( 'ABSPATH' ) || exit;

/** Keep native block documents and the existing quiz placements in agreement. */
final class NativeQuizEditor {
	const QUESTION_BLOCK  = 'ohmylms/shared-multiple-choice';
	const REFERENCE_BLOCK = 'ohmylms/quiz-question-reference';

	/** Register additive native authoring integration. */
	public static function init() {
		add_filter( 'ohmylms_rest_prepare_quiz', array( __CLASS__, 'editor_link' ), 10, 2 );
		add_filter( 'rest_prepare_post_type', array( __CLASS__, 'editor_viewability' ), 10, 2 );
		add_action( 'init', array( __CLASS__, 'register_reference' ) );
	}

	/**
	 * Omit standalone page preview actions from Gutenberg for quiz documents.
	 *
	 * Quiz previews use the existing author-only player. This REST metadata does
	 * not change the public routes used by course learners.
	 *
	 * @param \WP_REST_Response $response Post type metadata.
	 * @param \WP_Post_Type     $post_type Registered post type.
	 * @return \WP_REST_Response Native editor metadata.
	 */
	public static function editor_viewability( $response, $post_type ) {
		if ( 'ohmylms-quiz' === $post_type->name ) {
			$data = $response->get_data();
			if ( array_key_exists( 'viewable', $data ) ) {
				$data['viewable'] = false;
				$response->set_data( $data );
			}
		}
		return $response;
	}

	/** Register a movable reference for established question formats outside this prototype. */
	public static function register_reference() {
		register_block_type(
			self::REFERENCE_BLOCK,
			array(
				'api_version'     => 3,
				'attributes'      => array(
					'questionId' => array( 'type' => 'integer' ),
					'uuid'       => array( 'type' => 'string' ),
				),
				'render_callback' => '__return_empty_string',
			)
		);
	}

	/**
	 * Existing quiz editor remains available beside Gutenberg.
	 *
	 * @param int $quiz_id Quiz ID.
	 * @return string Existing authoring URL.
	 */
	public static function form_url( $quiz_id ) {
		return admin_url( 'admin.php?page=ohmylms' ) . '#/quiz-edit/' . absint( $quiz_id );
	}

	/**
	 * Expose native editing only to the quiz's editors.
	 *
	 * @param \WP_REST_Response $response Existing quiz response.
	 * @param \WP_Post          $post Quiz post.
	 * @return \WP_REST_Response Response with additive navigation metadata.
	 */
	public static function editor_link( $response, $post ) {
		if ( AccessPolicy::can_edit_quiz( $post->ID ) ) {
			$data                      = $response->get_data();
			$data['native_editor_url'] = (string) get_edit_post_link( $post->ID, 'raw' );
			$response->set_data( $data );
		}
		return $response;
	}

	/**
	 * Recognize only the registered question references, including compatibility blocks.
	 *
	 * @param array $block Parsed block.
	 * @return bool Whether this is a question placement.
	 */
	public static function is_question( $block ) {
		return in_array( $block['blockName'] ?? '', array( self::QUESTION_BLOCK, self::REFERENCE_BLOCK ), true );
	}

	/**
	 * Validate a block document and keep answer keys out of post content.
	 *
	 * @param string $content Submitted Gutenberg document.
	 * @return array|\WP_Error Normalized content and ordered question IDs.
	 */
	public static function prepare_document( $content ) {
		$ids = array();
		try {
			$blocks = self::normalize( parse_blocks( $content ), $ids );
			return array(
				'content' => serialize_blocks( $blocks ),
				'ids'     => $ids,
			);
		} catch ( ErrorException $error ) {
			return $error->error;
		}
	}

	/**
	 * Resolve references through existing bank permissions before any post is saved.
	 *
	 * @param array $blocks Parsed blocks.
	 * @param array $ids Ordered references, collected recursively.
	 * @return array Normalized blocks.
	 * @throws ErrorException When a reference is incomplete, duplicated or unauthorized.
	 */
	private static function normalize( $blocks, &$ids ) {
		foreach ( $blocks as &$block ) {
			if ( self::is_question( $block ) ) {
				$id = absint( $block['attrs']['questionId'] ?? 0 );
				if ( ! $id || in_array( $id, $ids, true ) ) {
					ErrorException::raise( new \WP_Error( 'ohmylms_quiz_block_reference', __( 'Save each question before saving the quiz. Each question can appear only once; add a new question block for another question.', 'ohmylms' ), array( 'status' => 400 ) ) );
				}
				if ( ! AccessPolicy::can_use_question( $id ) ) {
					ErrorException::raise( AccessPolicy::denied() );
				}
				$identity = VersionPublisher::identity( $id, false );
				if ( ! AccessPolicy::can_edit_question( $id ) && empty( $identity['approved_version_id'] ) ) {
					ErrorException::raise( new \WP_Error( 'quiz_question_unapproved', __( 'Shared questions must be approved before they can be used in a quiz.', 'ohmylms' ), array( 'status' => 409 ) ) );
				}
				$authoring_revision    = absint( $block['attrs']['authoringRevision'] ?? 0 );
				$ids[]                 = $id;
				$block['attrs']        = array(
					'questionId' => $id,
					'uuid'       => (string) ( $identity['uuid'] ?? '' ),
				);
				$block['innerBlocks']  = array();
				$block['innerHTML']    = '';
				$block['innerContent'] = array();
				if ( self::QUESTION_BLOCK === $block['blockName'] ) {
					$block['attrs']['delivery']          = 'quiz';
					$block['attrs']['authoringRevision'] = $authoring_revision;
				}
			} else {
				$block['innerBlocks'] = self::normalize( $block['innerBlocks'] ?? array(), $ids );
			}
		}
		unset( $block );
		return $blocks;
	}

	/**
	 * Collect reference IDs without grading or creating learner records.
	 *
	 * @param array $blocks Parsed blocks.
	 * @return int[] Ordered question IDs.
	 */
	private static function reference_ids( $blocks ) {
		$ids = array();
		foreach ( $blocks as $block ) {
			if ( self::is_question( $block ) ) {
				$ids[] = absint( $block['attrs']['questionId'] ?? 0 );
			} else {
				$ids = array_merge( $ids, self::reference_ids( $block['innerBlocks'] ?? array() ) );
			}
		}
		return $ids;
	}

	/**
	 * Keep core layout blocks when rebuilding references after edits in the current editor.
	 *
	 * @param array $blocks Parsed blocks.
	 * @return array Core content without quiz placement blocks.
	 */
	private static function without_questions( $blocks ) {
		$result = array();
		foreach ( $blocks as $block ) {
			if ( self::is_question( $block ) ) {
				continue;
			}
			$children = $block['innerBlocks'] ?? array();
			$index    = 0;
			$content  = array();
			foreach ( $block['innerContent'] ?? array() as $chunk ) {
				if ( null === $chunk && self::is_question( $children[ $index++ ] ) ) {
					continue;
				}
				$content[] = $chunk;
			}
			$block['innerContent'] = $content;
			$block['innerBlocks']  = self::without_questions( $children );
			$result[]              = $block;
		}
		return $result;
	}

	/**
	 * Open old quizzes in Gutenberg without losing existing question formats or placements.
	 *
	 * @param \WP_Post $post Quiz post.
	 * @return string Editor document, synthesized without changing the stored post.
	 */
	public static function editor_content( $post ) {
		$questions = ohmylms_get_quiz( $post->ID )->get_questions();
		$ids       = array_map( 'intval', array_column( $questions, 'id' ) );
		$blocks    = parse_blocks( $post->post_content );
		if ( self::reference_ids( $blocks ) === $ids ) {
			return $post->post_content;
		}
		$content = serialize_blocks( self::without_questions( $blocks ) );
		foreach ( $questions as $question ) {
			$choice = in_array( $question['settings']['type'] ?? '', array( 'single-choice', 'multiple-choice', 'short-text', 'long-text', 'reorder', 'fill-in-the-blank', 'matching', 'dropdown-blanks', 'match-table-grid', 'multi-blank', 'build-expression', 'expression' ), true );
			$attrs  = array(
				'questionId' => (int) $question['id'],
				'uuid'       => (string) ( $question['uuid'] ?? '' ),
			);
			if ( $choice ) {
				$attrs['delivery'] = 'quiz';
			}
			$content .= '<!-- wp:' . ( $choice ? self::QUESTION_BLOCK : self::REFERENCE_BLOCK ) . ' ' . wp_json_encode( $attrs ) . ' /-->';
		}
		return $content;
	}

	/**
	 * Sync only quiz placements, using the existing writer and removal policy.
	 *
	 * @param int   $quiz_id Quiz ID.
	 * @param int[] $ids Ordered question IDs.
	 * @throws ErrorException When an existing placement cannot be removed.
	 */
	public static function sync( $quiz_id, $ids ) {
		$existing = array_map( 'intval', array_column( ohmylms_get_quiz( $quiz_id )->get_questions(), 'id' ) );
		foreach ( array_diff( $existing, $ids ) as $id ) {
			ErrorException::raise( Usage::remove_from_quiz( $quiz_id, $id ) );
		}
		foreach ( $ids as $index => $id ) {
			DraftWriter::link( $quiz_id, $id, $index + 1 );
		}
	}
}
