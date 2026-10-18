<?php // phpcs:ignore WordPress.Files.FileName -- Composer PSR-4 class/file mapping; see docs/CODING-STANDARDS.md.
/**
 * Inventory, extraction checkpoints, teacher review and explicit draft commits.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\ExamImport;

use OhMyLMS\QuestionBank\BulkImport;
use OhMyLMS\Utility\Transaction;
use OhMyLMS\Assessment\ErrorException;

defined( 'ABSPATH' ) || exit;

/** Each scheduler delivery runs one checkpoint, with stale-delivery protection. */
final class Workflow {
	const HOOK         = 'ohmylms_extract_exam_import';
	const MAX_REQUESTS = 125;

	/** Register stages and author-only review operations. */
	public static function init() {
		add_action( self::HOOK, array( __CLASS__, 'process' ), 10, 3 );
		add_action( 'rest_api_init', array( __CLASS__, 'routes' ) );
	}

	/** Register discrete extraction, review and draft commit actions. */
	public static function routes() {
		register_rest_route(
			'ohmylms/v1',
			'/exam-import-skills',
			array(
				'methods'             => 'GET',
				'permission_callback' => array( Jobs::class, 'permission' ),
				'callback'            => array( __CLASS__, 'skills' ),
			)
		);
		foreach ( array( 'extract', 'review', 'commit' ) as $operation ) {
			register_rest_route(
				'ohmylms/v1',
				'/exam-imports/(?P<id>\d+)/' . $operation,
				array(
					'methods'             => 'POST',
					'permission_callback' => array( Jobs::class, 'permission' ),
					'callback'            => array( __CLASS__, $operation ),
				)
			);
		}
	}

	/**
	 * Search the existing skill catalogue without leaving an unsaved PDF review.
	 *
	 * @param \WP_REST_Request $request Author search.
	 * @return array|\WP_Error Existing skill suggestions.
	 */
	public static function skills( $request ) {
		if ( ! Jobs::permission( $request ) || ! is_string( $request['search'] ) ) {
			return self::denied();
		}
		return \OhMyLMS\QuestionBank\SkillCatalogue::search( mb_substr( sanitize_text_field( $request['search'] ), 0, 1000 ), 1, 10 );
	}

	/**
	 * Projection for the owner review page, without source storage handles.
	 *
	 * @param array $job Private state.
	 * @return array Review data.
	 */
	public static function detail( array $job ) {
		return array_intersect_key( $job, array_flip( array( 'inventory', 'draft_inventory', 'draft', 'draft_revision', 'suggestions', 'cursor', 'usage', 'question_ids', 'version_ids', 'exam_id' ) ) ) + array(
			'has_mark_scheme' => ! empty( $job['mark_scheme'] ),
			'draft_revision'  => 0,
			'draft'           => array(),
		);
	}

	/**
	 * Persist the checkpoint before scheduling another delivery.
	 *
	 * @param int   $id Job ID.
	 * @param array $job State.
	 * @throws \RuntimeException When checkpoint storage fails.
	 */
	private static function save( $id, array $job ) {
		$job['updated_at'] = gmdate( 'c' );
		if ( false === update_post_meta( $id, Jobs::META, wp_slash( $job ) ) && get_post_meta( $id, Jobs::META, true ) !== $job ) {
			throw new \RuntimeException( 'Import checkpoint could not be stored.' );
		}
	}

	/**
	 * Schedule precisely one stage token. Persisted cursor rejects stale actions.
	 *
	 * @param int   $id Job ID.
	 * @param array $job State.
	 * @return bool Queued.
	 */
	private static function schedule( $id, array $job ) {
		return function_exists( 'as_schedule_single_action' ) && (bool) as_schedule_single_action( time() + 1, self::HOOK, array( (int) $id, $job['generation'], $job['cursor'] ), Jobs::GROUP, true );
	}

	/**
	 * Explicitly send the uploaded documents to the configured AI provider.
	 *
	 * @param \WP_REST_Request $request Owner request.
	 * @return array|\WP_Error Job status.
	 */
	public static function extract( $request ) {
		if ( ! Jobs::permission( $request ) ) {
			return self::denied();
		}
		return Jobs::locked(
			$request['id'],
			static function () use ( $request ) {
				$id = (int) $request['id'];
				clean_post_cache( $id );
				$job = get_post_meta( $id, Jobs::META, true );
				if ( ! in_array( $job['state'], array( 'ready_for_extraction', 'ready_for_review', 'extraction_failed', 'extracting' ), true ) || ! empty( $job['question_ids'] ) || ( $job['usage']['requests'] ?? 0 ) >= self::MAX_REQUESTS ) {
					return new \WP_Error( 'exam_state', __( 'This import cannot start extraction.', 'ohmylms' ), array( 'status' => 409 ) );
				}
				if ( ! \OhMyLMS\AI\Settings::configured( 'exam_converter' ) ) {
					return new \WP_Error( 'exam_provider', __( 'Enable the PDF exam converter and configure its connection in Settings → AI tools.', 'ohmylms' ), array( 'status' => 503 ) );
				}
				if ( in_array( $job['state'], array( 'ready_for_extraction', 'ready_for_review' ), true ) ) {
					unset( $job['inventory'] );
					$job['generation']     = wp_generate_uuid4();
					$job['cursor']         = -1;
					$job['stage_attempts'] = 0;
					$job['suggestions']    = array();
				}
				if ( $job['stage_attempts'] >= 3 ) {
					return new \WP_Error( 'exam_retry', __( 'This stage exhausted its three attempts. Start a new import.', 'ohmylms' ), array( 'status' => 409 ) );
				}
				$job['state'] = 'extracting';
				$job['error'] = '';
				self::save( $id, $job );
				if ( ! self::schedule( $id, $job ) ) {
					$job['state'] = 'extraction_failed';
					$job['error'] = 'scheduler';
					self::save( $id, $job );
				}
				return Jobs::status( $request );
			}
		);
	}

	/**
	 * One inventory or five-question extraction request, with a durable usage budget.
	 *
	 * @param int    $id Job ID.
	 * @param string $generation Extraction run token.
	 * @param int    $cursor Expected checkpoint.
	 * @return mixed Processing outcome.
	 */
	public static function process( $id, $generation, $cursor ) {
		return Jobs::locked(
			$id,
			static function () use ( $id, $generation, $cursor ) {
				clean_post_cache( $id );
				$job  = get_post_meta( $id, Jobs::META, true );
				$post = get_post( $id );
				if ( ! $post || Jobs::TYPE !== $post->post_type || ! is_array( $job ) || 'extracting' !== $job['state'] || $generation !== $job['generation'] || (int) $cursor !== (int) $job['cursor'] ) {
					return;
				}
				if ( ! user_can( $post->post_author, 'edit_posts' ) || ! user_can( $post->post_author, 'upload_files' ) || $job['stage_attempts'] >= 3 || ( $job['usage']['requests'] ?? 0 ) >= self::MAX_REQUESTS ) {
					$job['state'] = 'extraction_failed';
					$job['error'] = 'permission_or_budget';
					self::save( $id, $job );
					return;
				}
				if ( ! \OhMyLMS\AI\Settings::configured( 'exam_converter' ) ) {
					$job['state'] = 'extraction_failed';
					$job['error'] = 'exam_provider';
					self::save( $id, $job );
					return;
				}
				++$job['stage_attempts'];
				$job['usage']['requests'] = 1 + ( $job['usage']['requests'] ?? 0 );
				self::save( $id, $job );
				$reply = Extraction::complete( $job );
				if ( ! is_wp_error( $reply ) ) {
					foreach ( array( 'input_tokens', 'output_tokens' ) as $field ) {
						$job['usage'][ $field ] = ( $job['usage'][ $field ] ?? 0 ) + $reply[ $field ];
					}
					$valid = -1 === (int) $cursor ? Extraction::inventory( $reply['data'] ) : Extraction::questions( $reply['data']['questions'] ?? null, array_slice( $job['inventory']['question_numbers'], $cursor, Extraction::BATCH ), $job['inventory']['page_count'] );
				} else {
					$valid = $reply;
				}
				if ( is_wp_error( $valid ) ) {
					$job['state'] = 'extraction_failed';
					$job['error'] = $valid->get_error_code();
					self::save( $id, $job );
					return;
				}
				if ( -1 === (int) $cursor ) {
					$job['inventory'] = $valid;
					$job['cursor']    = 0;
				} else {
					// AI output cannot mark its own work as reviewed.
					foreach ( $valid as &$question ) {
						$question['reviewed'] = false;
					}
					unset( $question );
					$job['suggestions'] = array_merge( $job['suggestions'], $valid );
					$job['cursor']     += count( $valid );
				}
				$job['stage_attempts'] = 0;
				if ( count( $job['inventory']['question_numbers'] ) === $job['cursor'] ) {
					$job['state'] = 'ready_for_review';
					if ( ! isset( $job['draft'] ) ) {
						$job['draft']           = $job['suggestions'];
						$job['draft_inventory'] = $job['inventory'];
						$job['draft_revision']  = 1;
					}
				}
				self::save( $id, $job );
				if ( 'extracting' === $job['state'] && ! self::schedule( $id, $job ) ) {
					$job['state'] = 'extraction_failed';
					$job['error'] = 'scheduler';
					self::save( $id, $job );
				}
			}
		);
	}

	/**
	 * Save reviewed question edits with optimistic concurrency; re-extraction preserves them.
	 *
	 * @param \WP_REST_Request $request Edited questions and revision.
	 * @return array|\WP_Error Status.
	 */
	public static function review( $request ) {
		if ( ! Jobs::permission( $request ) ) {
			return self::denied();
		}
		return Jobs::locked(
			$request['id'],
			static function () use ( $request ) {
				$id = (int) $request['id'];
				clean_post_cache( $id );
				$job = get_post_meta( $id, Jobs::META, true );
				if ( 'ready_for_review' !== $job['state'] || (int) ( $job['draft_revision'] ?? 0 ) !== (int) $request['revision'] ) {
					return new \WP_Error( 'exam_conflict', __( 'The review changed. Reload before saving.', 'ohmylms' ), array( 'status' => 409 ) );
				}
				$inventory = $job['draft_inventory'] ?? $job['inventory'];
				$rows      = Extraction::questions( $request['questions'], $inventory['question_numbers'], $inventory['page_count'] );
				if ( is_wp_error( $rows ) ) {
					return $rows;
				}
				$job['draft'] = $rows;
				++$job['draft_revision'];
				self::save( $id, $job );
				return Jobs::status( $request );
			}
		);
	}

	/**
	 * Explicitly create question-bank drafts without approving or publishing an exam.
	 *
	 * @param \WP_REST_Request $request Reviewed import.
	 * @return array|\WP_Error Job status and question IDs.
	 */
	public static function commit( $request ) {
		if ( ! Jobs::permission( $request ) ) {
			return self::denied();
		}
		return Jobs::locked(
			$request['id'],
			static function () use ( $request ) {
				$id = (int) $request['id'];
				clean_post_cache( $id );
				$job = get_post_meta( $id, Jobs::META, true );
				if ( ! empty( $job['question_ids'] ) ) {
					return Jobs::status( $request );
				}
				if ( 'ready_for_review' !== $job['state'] || (int) $request['revision'] !== (int) $job['draft_revision'] || count(
					array_filter(
						$job['draft'],
						static function ( $row ) {
							return ! empty( $row['reviewed'] ); }
					)
				) !== count( $job['draft'] ) ) {
					return new \WP_Error( 'exam_review', __( 'Save and confirm review of every question first.', 'ohmylms' ), array( 'status' => 409 ) );
				}
				$rows = array();
				foreach ( $job['draft'] as $row ) {
					foreach ( $row['parts'] as &$part ) {
						if ( '' === trim( $part['skills'] ?? '' ) ) {
							unset( $part['skills'] );
						}
					}
					unset( $part );
					$rows[] = array(
						'exam'     => 'PDF author ' . get_current_user_id(),
						'title'    => ( $job['draft_inventory']['title'] ?? $job['inventory']['title'] ) . ' · Q' . $row['number'],
						'paper'    => $job['document']['sha256'],
						'number'   => $row['number'],
						'type'     => 'structured',
						'question' => $row['question'],
						'skills'   => $row['skills'],
						'parts'    => $row['parts'],
					);
				}
				$dry = BulkImport::run( $rows );
				if ( is_wp_error( $dry ) || $dry['counts']['error'] ) {
					return is_wp_error( $dry ) ? $dry : new \WP_Error(
						'exam_questions',
						__( 'Fix the question skills and answer settings before committing.', 'ohmylms' ),
						array(
							'status' => 400,
							'rows'   => $dry['rows'],
						)
					);
				}
				try {
					Transaction::run(
						static function () use ( &$job, $rows, $id ) {
							$saved               = ErrorException::raise(
								BulkImport::run(
									$rows,
									array(
										'dry_run' => false,
										'review'  => true,
									)
								)
							);
							$job['question_ids'] = array_map( 'intval', array_column( $saved['rows'], 'id' ) );
							$job['version_ids']  = array();
							foreach ( $job['question_ids'] as $question_id ) {
								\OhMyLMS\QuestionBank\BankAttributes::write( $question_id, array( 'secure' => 1 ) );
								$job['version_ids'][ $question_id ] = (int) \OhMyLMS\QuestionBank\VersionPublisher::identity( $question_id )['current_version_id'];
							}
							if ( count( $job['question_ids'] ) !== count( $rows ) || in_array( 0, $job['question_ids'], true ) ) {
								throw new \RuntimeException( 'Incomplete import commit.' );
							}
							$job['state'] = 'committed';
							self::save( $id, $job );
						}
					);
				} catch ( \Throwable $error ) {
					return new \WP_Error( 'exam_commit', __( 'Drafts could not be committed. Retry after reloading.', 'ohmylms' ), array( 'status' => 500 ) );
				}
				return Jobs::status( $request );
			}
		);
	}

	/**
	 * Cancel all stage tokens when a job is removed.
	 *
	 * @param int $id Job ID.
	 */
	public static function cancel( $id ) {
		if ( ! function_exists( 'as_unschedule_all_actions' ) ) {
			return;
		}
		$job = get_post_meta( $id, Jobs::META, true );
		if ( isset( $job['generation'], $job['cursor'] ) ) {
			as_unschedule_all_actions( self::HOOK, array( (int) $id, $job['generation'], $job['cursor'] ), Jobs::GROUP );
		}
	}

	/**
	 * Return an authorization error without disclosing job existence.
	 *
	 * @return \WP_Error Error.
	 */
	private static function denied() {
		return new \WP_Error( 'exam_forbidden', __( 'Import unavailable.', 'ohmylms' ), array( 'status' => 403 ) );
	}
}
