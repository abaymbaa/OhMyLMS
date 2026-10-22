<?php // phpcs:ignore WordPress.Files.FileName -- Composer PSR-4 class/file mapping; see docs/CODING-STANDARDS.md.
/**
 * Exam builder: author sections and questions directly, on the same quiz engine as imported exams.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Exams;

use OhMyLMS\Assessment\AssessmentSettings;
use OhMyLMS\Assessment\ErrorException;
use OhMyLMS\QuestionBank\BankAttributes;
use OhMyLMS\QuestionBank\DraftWriter;
use OhMyLMS\QuestionBank\ReviewQueue;
use OhMyLMS\QuestionBank\Usage;
use OhMyLMS\QuestionBank\VersionPublisher;
use OhMyLMS\Utility\Transaction;

defined( 'ABSPATH' ) || exit;

/** One document holds the whole exam: header, sections and questions in paper order. */
final class Composer {
	const TYPES        = array( 'single-choice', 'multiple-choice', 'numerical', 'short-text' );
	const MAX_SECTIONS = 20;
	const MAX_ITEMS    = 200;
	const MAX_OPTIONS  = 8;

	/** Register the load and save routes beside the other exam routes. */
	public static function init() {
		add_action( 'rest_api_init', array( __CLASS__, 'routes' ) );
	}

	/** Create-and-save, load and save a composed exam. */
	public static function routes() {
		register_rest_route(
			'ohmylms/v1',
			'/exams/compose',
			array(
				'methods'             => 'POST',
				'permission_callback' => array( Library::class, 'permission' ),
				'callback'            => array( __CLASS__, 'create' ),
			)
		);
		register_rest_route(
			'ohmylms/v1',
			'/exams/(?P<id>\d+)/compose',
			array(
				array(
					'methods'             => 'GET',
					'permission_callback' => array( Library::class, 'permission' ),
					'callback'            => array( __CLASS__, 'load' ),
				),
				array(
					'methods'             => 'PUT',
					'permission_callback' => array( Library::class, 'permission' ),
					'callback'            => array( __CLASS__, 'save' ),
				),
			)
		);
	}

	/**
	 * Create a new draft exam from a builder document.
	 *
	 * @param \WP_REST_Request $request Document.
	 * @return array|\WP_Error Exam summary and document.
	 */
	public static function create( $request ) {
		return self::write( 0, $request );
	}

	/**
	 * Save the whole document of an unpublished exam.
	 *
	 * @param \WP_REST_Request $request Exam ID and document.
	 * @return array|\WP_Error Exam summary and document.
	 */
	public static function save( $request ) {
		return self::write( (int) $request['id'], $request );
	}

	/**
	 * The editable document of a composed exam.
	 *
	 * @param \WP_REST_Request $request Exam ID.
	 * @return array|\WP_Error Exam summary and document.
	 */
	public static function load( $request ) {
		$id   = (int) $request['id'];
		$data = get_post_meta( $id, Library::META, true );
		if ( ! is_array( $data ) || empty( $data['composed'] ) ) {
			return self::error( 'composed', __( 'Only exams created in the builder can be opened here.', 'ohmylms' ), 404 );
		}
		return array(
			'exam'     => Library::view( $id ),
			'document' => self::document( $id ),
		);
	}

	/**
	 * Approve the current version of every question so a composed exam can be published.
	 *
	 * @param int $id Exam ID.
	 * @return true|\WP_Error True, or the first approval failure.
	 */
	public static function approve( $id ) {
		$data = get_post_meta( $id, Library::META, true );
		foreach ( (array) $data['question_ids'] as $question_id ) {
			$result = ReviewQueue::approve( (int) $question_id );
			if ( true !== $result ) {
				return self::error( 'approval', $result, 409 );
			}
			$version                             = (int) VersionPublisher::identity( $question_id )['approved_version_id'];
			$data['version_ids'][ $question_id ] = $version;
		}
		update_post_meta( $id, Library::META, wp_slash( $data ) );
		update_post_meta( $data['quiz_id'], '_ohmylms_version_pins', $data['version_ids'] );
		return true;
	}

	/**
	 * Problems that block publication; saving drafts never requires these.
	 *
	 * @param array $document Builder document.
	 * @return string[] Messages.
	 */
	public static function problems( array $document ) {
		$problems = array();
		$count    = 0;
		foreach ( $document['sections'] as $section ) {
			foreach ( $section['questions'] as $question ) {
				++$count;
				$label = sprintf( /* translators: %d: question number. */ __( 'Question %d', 'ohmylms' ), $count );
				if ( '' === trim( wp_strip_all_tags( $question['text'] ) ) ) {
					$problems[] = $label . ': ' . __( 'add the question text.', 'ohmylms' );
				}
				if ( in_array( $question['type'], array( 'single-choice', 'multiple-choice' ), true ) ) {
					$filled  = array_filter(
						$question['options'],
						static function ( $option ) {
							return '' !== trim( $option['text'] );
						}
					);
					$correct = array_filter(
						$question['options'],
						static function ( $option ) {
							return $option['correct'] && '' !== trim( $option['text'] );
						}
					);
					if ( count( $filled ) < 2 ) {
						$problems[] = $label . ': ' . __( 'add at least two answer options.', 'ohmylms' );
					}
					if ( ! $correct || ( 'single-choice' === $question['type'] && count( $correct ) > 1 ) ) {
						$problems[] = $label . ': ' . __( 'mark the correct answer.', 'ohmylms' );
					}
				}
				if ( 'numerical' === $question['type'] && ! is_numeric( $question['answer'] ) ) {
					$problems[] = $label . ': ' . __( 'enter the correct number.', 'ohmylms' );
				}
			}
		}
		return $problems ? $problems : ( $count ? array() : array( __( 'Add at least one question.', 'ohmylms' ) ) );
	}

	/**
	 * Normalize and bound the posted document.
	 *
	 * @param mixed $input Raw request document.
	 * @return array|\WP_Error Clean document.
	 */
	public static function clean( $input ) {
		$input   = is_array( $input ) ? $input : array();
		$title   = isset( $input['title'] ) && is_scalar( $input['title'] ) ? sanitize_text_field( (string) $input['title'] ) : '';
		$minutes = $input['duration_minutes'] ?? 60;
		if ( '' === trim( $title ) || ! is_numeric( $minutes ) || $minutes < 1 || $minutes > 1440 ) {
			return self::error( 'header', __( 'Provide a title and a duration from 1 to 1440 minutes.', 'ohmylms' ) );
		}
		$sections = array();
		$items    = 0;
		foreach ( array_slice( is_array( $input['sections'] ?? null ) ? array_values( $input['sections'] ) : array(), 0, self::MAX_SECTIONS ) as $section ) {
			$questions = array();
			foreach ( is_array( $section['questions'] ?? null ) ? array_values( $section['questions'] ) : array() as $question ) {
				if ( ++$items > self::MAX_ITEMS ) {
					return self::error( 'size', __( 'An exam can have at most 200 questions.', 'ohmylms' ) );
				}
				$type = isset( $question['type'] ) && in_array( $question['type'], self::TYPES, true ) ? $question['type'] : 'single-choice';
				$rows = array();
				foreach ( array_slice( is_array( $question['options'] ?? null ) ? array_values( $question['options'] ) : array(), 0, self::MAX_OPTIONS ) as $option ) {
					$rows[] = array(
						'text'    => mb_substr( is_scalar( $option['text'] ?? null ) ? (string) $option['text'] : '', 0, 1000 ),
						'correct' => ! empty( $option['correct'] ) && 'false' !== $option['correct'],
					);
				}
				$points      = $question['points'] ?? 1;
				$questions[] = array(
					'id'      => absint( $question['id'] ?? 0 ),
					'type'    => $type,
					'text'    => mb_substr( is_scalar( $question['text'] ?? null ) ? (string) $question['text'] : '', 0, 8000 ),
					'points'  => is_numeric( $points ) ? max( 0, min( 1000, round( (float) $points, 2 ) ) ) : 1,
					'options' => $rows,
					'answer'  => mb_substr( is_scalar( $question['answer'] ?? null ) ? trim( (string) $question['answer'] ) : '', 0, 40 ),
				);
			}
			$sections[] = array(
				'title'     => mb_substr( sanitize_text_field( (string) ( $section['title'] ?? '' ) ), 0, 190 ),
				'questions' => $questions,
			);
		}
		if ( ! $sections ) {
			$sections[] = array(
				'title'     => '',
				'questions' => array(),
			);
		}
		return array(
			'title'            => $title,
			'duration_minutes' => (int) $minutes,
			'instructions'     => mb_substr( is_scalar( $input['instructions'] ?? null ) ? sanitize_textarea_field( (string) $input['instructions'] ) : '', 0, 4000 ),
			'sections'         => $sections,
		);
	}

	/**
	 * Engine payload for one builder question.
	 *
	 * @param array $question Clean question.
	 * @param int   $order    Position in the whole exam.
	 * @return array DraftWriter payload.
	 */
	private static function payload( array $question, $order ) {
		$payload = array(
			'name'         => $question['text'],
			'status'       => 'publish',
			'order_number' => $order,
			'settings'     => array(
				'type'  => $question['type'],
				'score' => array(
					'enabled' => $question['points'] > 0,
					'value'   => $question['points'],
				),
			),
		);
		if ( $question['id'] ) {
			$payload['id'] = $question['id'];
		}
		if ( in_array( $question['type'], array( 'single-choice', 'multiple-choice' ), true ) ) {
			$payload['questions'] = array_map(
				static function ( $option, $index ) {
					return array(
						'answer'       => $option['text'],
						'is_correct'   => $option['correct'],
						'order_number' => $index + 1,
					);
				},
				$question['options'],
				array_keys( $question['options'] )
			);
		}
		if ( 'numerical' === $question['type'] ) {
			$payload['settings']['answer']         = is_numeric( $question['answer'] ) ? (float) $question['answer'] : 0;
			$payload['settings']['tolerance']      = 0;
			$payload['settings']['tolerance_type'] = 'absolute';
		}
		return $payload;
	}

	/**
	 * Create or update the exam, its backing quiz and every question in one transaction.
	 *
	 * @param int              $id      Existing exam ID, or 0 to create.
	 * @param \WP_REST_Request $request Document.
	 * @return array|\WP_Error Exam summary and document.
	 */
	private static function write( $id, $request ) {
		if ( ! Library::permission( $request ) ) {
			return self::error( 'permission', __( 'You cannot manage exams.', 'ohmylms' ), 403 );
		}
		$document = self::clean( $request->get_json_params() );
		if ( is_wp_error( $document ) ) {
			return $document;
		}
		$existing = $id ? get_post_meta( $id, Library::META, true ) : array();
		if ( $id && ( ! is_array( $existing ) || empty( $existing['composed'] ) ) ) {
			return self::error( 'composed', __( 'Only exams created in the builder can be saved here.', 'ohmylms' ), 404 );
		}
		if ( $id && 'publish' === get_post_status( $id ) ) {
			return self::error( 'locked', __( 'This exam is published and can no longer be edited.', 'ohmylms' ), 409 );
		}
		$work = static function () use ( $id, $document, $existing ) {
			global $wpdb;
			if ( $id ) {
				$exam_id = $id;
				$quiz_id = (int) $existing['quiz_id'];
				ErrorException::raise(
					wp_update_post(
						array(
							'ID'         => $exam_id,
							'post_title' => $document['title'],
						),
						true
					)
				);
				ErrorException::raise(
					wp_update_post(
						array(
							'ID'         => (int) $existing['course_id'],
							'post_title' => $document['title'],
						),
						true
					)
				);
				ErrorException::raise(
					wp_update_post(
						array(
							'ID'         => $quiz_id,
							'post_title' => $document['title'],
						),
						true
					)
				);
				$data = $existing;
			} else {
				list( $course, $quiz_id, $chapter ) = Library::scaffold( $document['title'], $document['duration_minutes'] );
				$exam_id                            = ErrorException::raise(
					wp_insert_post(
						array(
							'post_type'   => Library::TYPE,
							'post_status' => 'draft',
							'post_title'  => $document['title'],
							'post_author' => get_current_user_id(),
						),
						true
					)
				);
				$data                               = array(
					'job_id'       => 0,
					'course_id'    => $course,
					'chapter_id'   => $chapter,
					'quiz_id'      => $quiz_id,
					'source_pages' => array(),
				);
				update_post_meta( $quiz_id, '_ohmylms_exam_id', $exam_id );
			}
			$payloads = array();
			$order    = 0;
			foreach ( $document['sections'] as $section ) {
				foreach ( $section['questions'] as $question ) {
					$payloads[] = self::payload( $question, ++$order );
				}
			}
			$saved = $payloads ? ErrorException::raise( DraftWriter::save_many( $payloads, $quiz_id ) ) : array();
			$ids   = array_map( 'intval', array_column( $saved, 'id' ) );
			// Questions dropped from the document leave the backing quiz; they stay in the bank.
			foreach ( array_diff( array_map( 'intval', (array) ( $existing['question_ids'] ?? array() ) ), $ids ) as $removed ) {
				ErrorException::raise( Usage::remove_from_quiz( $quiz_id, $removed ) );
			}
			$versions = array();
			$marks    = 0.0;
			$sections = array();
			$cursor   = 0;
			foreach ( $document['sections'] as $section ) {
				$members = array();
				foreach ( $section['questions'] as $question ) {
					$question_id = $ids[ $cursor++ ];
					$members[]   = $question_id;
					$marks      += $question['points'];
					BankAttributes::write( $question_id, array( 'secure' => 1 ) );
					$versions[ $question_id ] = (int) VersionPublisher::identity( $question_id )['current_version_id'];
				}
				$sections[] = array(
					'title'     => $section['title'],
					'questions' => $members,
					'marks'     => array(),
					'new_page'  => false,
				);
			}
			update_post_meta( $quiz_id, '_ohmylms_version_pins', $versions );
			ErrorException::raise(
				AssessmentSettings::save(
					$quiz_id,
					array(
						'preset'           => 'exam',
						'feedback_release' => 'manual',
						'sections'         => array_values(
							array_filter(
								$sections,
								static function ( $section ) {
									return $section['questions'];
								}
							)
						),
					)
				)
			);
			$request_quiz = new \WP_REST_Request( 'PUT', '/ohmylms/v1/quiz/' . $quiz_id );
			$request_quiz->set_header( 'Content-Type', 'application/json' );
			$request_quiz->set_body(
				wp_json_encode(
					array(
						'name'     => $document['title'],
						'settings' => array(
							'allow_attempts' => 1,
							'layout'         => 'one_question_per_page',
							'time_limit'     => array(
								'enabled' => true,
								'value'   => $document['duration_minutes'],
								'type'    => 'minutes',
							),
						),
					)
				)
			);
			$response = rest_do_request( $request_quiz );
			if ( $response->is_error() ) {
				ErrorException::raise( $response->as_error() );
			}
			update_post_meta(
				$exam_id,
				Library::META,
				wp_slash(
					array_merge(
						$data,
						array(
							'composed'         => true,
							'question_ids'     => $ids,
							'version_ids'      => $versions,
							'duration_minutes' => $document['duration_minutes'],
							'total_marks'      => $marks,
							'instructions'     => $document['instructions'],
						)
					)
				)
			);
			return $exam_id;
		};
		try {
			$exam_id = Transaction::run( $work );
		} catch ( ErrorException $error ) {
			return $error->error;
		} catch ( \Throwable $error ) {
			return self::error( 'storage', __( 'The exam could not be saved. Your edits remain on this page.', 'ohmylms' ), 500 );
		}
		return array(
			'exam'     => Library::view( $exam_id ),
			'document' => self::document( $exam_id ),
		);
	}

	/**
	 * Rebuild the editable document from the stored questions.
	 *
	 * @param int $id Exam ID.
	 * @return array Document.
	 */
	public static function document( $id ) {
		$data     = (array) get_post_meta( $id, Library::META, true );
		$quiz     = ohmylms_get_quiz( (int) $data['quiz_id'] );
		$settings = AssessmentSettings::get( (int) $data['quiz_id'] );
		$by_id    = array();
		foreach ( $quiz->get_questions() as $link ) {
			$by_id[ (int) $link['id'] ] = $link;
		}
		$sections = array();
		$placed   = array();
		foreach ( (array) $settings['sections'] as $section ) {
			$questions = array();
			foreach ( (array) $section['questions'] as $question_id ) {
				if ( isset( $by_id[ (int) $question_id ] ) ) {
					$questions[]                  = self::question( $by_id[ (int) $question_id ] );
					$placed[ (int) $question_id ] = true;
				}
			}
			$sections[] = array(
				'title'     => (string) $section['title'],
				'questions' => $questions,
			);
		}
		$loose = array();
		foreach ( $by_id as $question_id => $link ) {
			if ( empty( $placed[ $question_id ] ) ) {
				$loose[] = self::question( $link );
			}
		}
		if ( $loose || ! $sections ) {
			$sections[] = array(
				'title'     => '',
				'questions' => $loose,
			);
		}
		return array(
			'title'            => get_the_title( $id ),
			'duration_minutes' => (int) ( $data['duration_minutes'] ?? 60 ),
			'instructions'     => (string) ( $data['instructions'] ?? '' ),
			'sections'         => $sections,
		);
	}

	/**
	 * One stored quiz question in builder form.
	 *
	 * @param array $link Question as listed by the quiz.
	 * @return array Builder question.
	 */
	private static function question( array $link ) {
		$settings = (array) ( $link['settings'] ?? array() );
		$options  = array();
		foreach ( (array) ( $link['questions'] ?? array() ) as $option ) {
			$options[] = array(
				'text'    => (string) $option['answer'],
				'correct' => ! empty( $option['is_correct'] ),
			);
		}
		$type = (string) ( $settings['type'] ?? 'single-choice' );
		return array(
			'id'      => (int) $link['id'],
			'type'    => in_array( $type, self::TYPES, true ) ? $type : 'single-choice',
			// The engine names an untitled question "Untitled"; the builder shows it as empty.
			'text'    => __( 'Untitled', 'ohmylms' ) === $link['name'] ? '' : (string) $link['name'],
			'points'  => (float) ( $settings['score']['value'] ?? 0 ),
			'options' => $options,
			'answer'  => isset( $settings['answer'] ) ? (string) $settings['answer'] : '',
		);
	}

	/**
	 * Safe domain error.
	 *
	 * @param string $code    Code.
	 * @param string $message Message.
	 * @param int    $status  HTTP status.
	 * @return \WP_Error Error.
	 */
	private static function error( $code, $message, $status = 400 ) {
		return new \WP_Error( 'exam_' . $code, $message, array( 'status' => $status ) );
	}
}
