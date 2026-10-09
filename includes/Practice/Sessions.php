<?php
namespace OhMyLMS\Practice;

use OhMyLMS\Assessment\AttemptItems;
use OhMyLMS\Assessment\GradeEvents;
use OhMyLMS\Assessment\Grader;
use OhMyLMS\Assessment\QuestionSnapshot;
use OhMyLMS\Assessment\Schema;
use OhMyLMS\QuestionBank\VersionPublisher;
use OhMyLMS\Skills\Evidence;
use OhMyLMS\Skills\Recommendations;
use OhMyLMS\Skills\Taxonomy;
use OhMyLMS\Utility\Transaction;

defined( 'ABSPATH' ) || exit;

/**
 * Skill practice and inline-check sessions. Both use the same frozen versions, the same
 * grading contract and the same grade-event/evidence pipeline as formal quizzes.
 *
 * Practice never calls course-completion hooks. An owner is a logged-in learner or a
 * pseudonymous guest session; guest results are attached only by a verified claim.
 */
final class Sessions {
	const MODES = array( 'skill', 'inline' );

	/** @param array $owner ['student_id'=>int] or ['guest_id'=>int] */
	public static function start( array $owner, $term_id, array $options = array() ) {
		global $wpdb;
		$term_id = (int) $term_id;
		$access  = \OhMyLMS\Learning\PracticeAccessPolicy::check( $owner, $term_id, (int) ( $options['course_id'] ?? 0 ) );
		if ( is_wp_error( $access ) ) {
			return $access; }
		if ( ! $term_id || ! term_exists( $term_id, Taxonomy::NAME ) ) {
			return new \WP_Error( 'ohmylms_skill_missing', __( 'Skill not found.', 'ohmylms' ), array( 'status' => 404 ) ); }
		if ( ! \OhMyLMS\Learning\PracticeAccessPolicy::pool( Selector::pool( $term_id ), $owner, $term_id, (int) ( $options['course_id'] ?? 0 ) ) ) {
			return new \WP_Error( 'ohmylms_practice_empty', __( 'There are no approved practice questions for this skill yet.', 'ohmylms' ), array( 'status' => 409 ) );
		}
		$limit   = max( 3, min( 30, (int) ( $options['item_limit'] ?? 10 ) ) );
		$session = array(
			'uuid'       => wp_generate_uuid4(),
			'student_id' => (int) ( $owner['student_id'] ?? 0 ),
			'guest_id'   => (int) ( $owner['guest_id'] ?? 0 ),
			'mode'       => 'skill',
			'term_id'    => $term_id,
			'course_id'  => (int) ( $options['course_id'] ?? 0 ),
			// "lesson" is the fast-feedback style: staged questions and replay of misses.
			'policy'     => wp_json_encode( array( 'band' => 'standard' ) + ( ( $options['style'] ?? '' ) === 'lesson' ? array( 'style' => 'lesson' ) : array() ) ),
			'status'     => 'active',
			'item_limit' => $limit,
			'started_at' => current_time( 'mysql', true ),
		);
		if ( ! $wpdb->insert( Schema::table( 'practice_sessions' ), $session ) ) {
			return new \WP_Error( 'ohmylms_practice_storage', __( 'Could not start practice.', 'ohmylms' ), array( 'status' => 500 ) ); }
		$session['id'] = (int) $wpdb->insert_id;
		self::issue( $session );
		return self::get( $session['uuid'] );
	}

	public static function get( $uuid ) {
		global $wpdb;
		$row = $wpdb->get_row( $wpdb->prepare( 'SELECT * FROM ' . Schema::table( 'practice_sessions' ) . ' WHERE uuid=%s', (string) $uuid ), ARRAY_A );
		if ( $row ) {
			$row['policy'] = json_decode( $row['policy'], true ) ?: array(); }
		return $row ?: null;
	}

	public static function owns( array $session, array $owner ) {
		if ( ! empty( $owner['student_id'] ) ) {
			return (int) $session['student_id'] === (int) $owner['student_id']; }
		return ! empty( $owner['guest_id'] ) && (int) $session['guest_id'] === (int) $owner['guest_id'] && ! (int) $session['student_id'];
	}

	public static function items( $session_id ) {
		global $wpdb;
		$items = Schema::table( 'practice_items' );
		$bank  = Schema::table( 'qb_questions' );
		$rows  = $wpdb->get_results( $wpdb->prepare( "SELECT i.*, COALESCE(q.family_id,'') AS family_id FROM $items i LEFT JOIN $bank q ON q.question_id=i.question_id WHERE i.session_id=%d ORDER BY i.position", (int) $session_id ), ARRAY_A );
		foreach ( $rows as &$row ) {
			$row['option_order'] = json_decode( $row['option_order'], true ) ?: array();
			$row['display']      = json_decode( $row['display'], true ) ?: array();
			$row['response']     = $row['response'] === null ? null : json_decode( $row['response'], true );
		}
		return $rows;
	}

	/** Issue the next item, or complete the session when the limit or pool is reached. */
	private static function issue( array $session ) {
		global $wpdb;
		$items   = self::items( $session['id'] );
		$policy  = is_array( $session['policy'] ) ? $session['policy'] : ( json_decode( $session['policy'], true ) ?: array() );
		$lesson  = ( $policy['style'] ?? '' ) === 'lesson';
		$planned = count( array_filter( $items, static function ( $item ) {
			return empty( $item['display']['replay_of'] );
		} ) );
		if ( $lesson && $planned >= (int) $session['item_limit'] ) {
			// The planned questions are done: every miss comes back once (new numbers for a template).
			$replay = self::next_replay( $items, (int) $session['item_limit'] );
			return $replay ? self::add_item( (int) $session['id'], (int) $replay['version_id'], count( $items ) + 1, null, array( 'replay_of' => (int) $replay['id'] ) ) : self::complete( $session, 'limit' );
		}
		if ( ! $lesson && count( $items ) >= (int) $session['item_limit'] ) {
			return self::complete( $session, 'limit' ); }
		$band   = Selector::band(
			$policy['band'] ?? 'standard',
			array_values(
				array_filter(
					$items,
					static function ( $item ) {
						// Replays do not move the difficulty band: they repeat a question already judged.
						return $item['answered_at'] !== null && empty( $item['display']['replay_of'] );
					}
				)
			)
		);
		$next   = Selector::next( $session, $items, $band, $lesson ? Selector::stage_for( $planned, (int) $session['item_limit'] ) : '' );
		if ( ! $next ) {
			$replay = $lesson ? self::next_replay( $items, (int) $session['item_limit'] ) : null;
			return $replay ? self::add_item( (int) $session['id'], (int) $replay['version_id'], count( $items ) + 1, null, array( 'replay_of' => (int) $replay['id'] ) ) : self::complete( $session, 'exhausted' ); }
		$wpdb->update( Schema::table( 'practice_sessions' ), array( 'policy' => wp_json_encode( array( 'band' => $band ) + $policy ) ), array( 'id' => (int) $session['id'] ) );
		return self::add_item( (int) $session['id'], (int) $next['version_id'], count( $items ) + 1 );
	}

	/**
	 * The first missed question that has not been replayed yet, while replays are still allowed
	 * (at most half the lesson length, and a replay that is missed again is not replayed).
	 */
	private static function next_replay( array $items, $planned ) {
		$replayed = array();
		foreach ( $items as $item ) {
			if ( ! empty( $item['display']['replay_of'] ) ) {
				$replayed[ (int) $item['display']['replay_of'] ] = true; }
		}
		if ( count( $replayed ) >= max( 1, (int) ceil( $planned / 2 ) ) ) {
			return null; }
		foreach ( $items as $item ) {
			if ( empty( $item['display']['replay_of'] ) && $item['answered_at'] !== null && (int) $item['correct'] === 0 && empty( $replayed[ (int) $item['id'] ] ) ) {
				return $item; }
		}
		return null;
	}

	/** A short label for an item: the question text, or its title when the text is empty. */
	private static function label( array $item ) {
		$snapshot = AttemptItems::snapshot( $item );
		if ( ! $snapshot ) {
			return ''; }
		$text = \OhMyLMS\AI\Feedback::plain( $snapshot->get_description(), 110 );
		return $text !== '' ? $text : \OhMyLMS\AI\Feedback::plain( $snapshot->get_name(), 110 );
	}

	/** Freeze one version into a session as the next item. */
	public static function add_item( $session_id, $version_id, $position, $instance_seed = null, array $extra_display = array() ) {
		global $wpdb;
		$snapshot = VersionPublisher::snapshot( $version_id );
		if ( ! $snapshot ) {
			return null; }
		$ids = array_map(
			static function ( $option ) {
				return (int) $option['id'];
			},
			$snapshot->get_questions()
		);
		if ( ! empty( $snapshot->get_settings()['randomize'] ) || in_array( $snapshot->get_type(), array( 'reorder', 'matching', 'single-choice', 'multiple-choice' ), true ) ) {
			shuffle( $ids ); }
		$display = $snapshot->get_type() === 'matching' ? array(
			'definitions' => ( static function ( $list ) {
							shuffle( $list );
							return $list;
			} )( $ids ),
		) : array();
		// A template question gets numbers that differ from any it already gave in this session.
		if ( $snapshot->is_template() ) {
			$seen = array();
			foreach ( self::items( $session_id ) as $earlier ) {
				if ( (int) $earlier['question_id'] === $snapshot->get_id() ) {
					$seen[] = \OhMyLMS\Assessment\Template::signature( \OhMyLMS\Assessment\Template::generate( $snapshot->get_settings()['template'], AttemptItems::instance_seed( $earlier ) )['params'] ); }
			}
			$display['instance_seed'] = $instance_seed ?: \OhMyLMS\Assessment\Template::fresh_seed( $snapshot->get_settings(), $seen );
		}
		$display += $extra_display;
		$wpdb->insert(
			Schema::table( 'practice_items' ),
			array(
				'session_id'    => (int) $session_id,
				'position'      => (int) $position,
				'question_id'   => $snapshot->get_id(),
				'question_uuid' => $snapshot->get_uuid(),
				'version_id'    => (int) $version_id,
				'option_order'  => wp_json_encode( $ids ),
				'display'       => wp_json_encode( $display ),
			)
		);
		return (int) $wpdb->insert_id;
	}

	private static function complete( array $session, $reason ) {
		global $wpdb;
		$policy    = is_array( $session['policy'] ) ? $session['policy'] : ( json_decode( $session['policy'], true ) ?: array() );
		$completed = $wpdb->update(
			Schema::table( 'practice_sessions' ),
			array(
				'status'       => 'complete',
				'completed_at' => current_time( 'mysql', true ),
				'policy'       => wp_json_encode( array( 'ended' => $reason ) + $policy ),
			),
			array(
				'id'     => (int) $session['id'],
				'status' => 'active',
			)
		);
		if ( $completed === 1 ) {
			do_action( 'ohmylms_practice_completed', $session['uuid'] );
			if ( ( $policy['style'] ?? '' ) === 'lesson' ) {
				// Lets gamification (XP, streaks) react to a finished fast-feedback lesson.
				do_action( 'ohmylms_practice_lesson_completed', $session['uuid'], self::lesson_result( self::items( $session['id'] ) ), (int) $session['student_id'], (int) $session['term_id'] );
			}
		}
		return null;
	}

	/** Learner-safe view of an item, with tokens scoped to the item. */
	public static function item_view( array $item ) {
		$snapshot = AttemptItems::snapshot( $item );
		if ( ! $snapshot ) {
			return null; }
		$scope            = 'p' . (int) $item['id'];
		$ids              = array_map(
			static function ( $option ) {
				return (int) $option['id'];
			},
			$snapshot->get_questions()
		);
		$view             = $snapshot->student_view( $item['option_order'], AttemptItems::tokens( $scope, $ids ), $item['display'], AttemptItems::tokens( $scope, $ids, 'd' ) );
		$view['item_id']  = (int) $item['id'];
		$view['position'] = (int) $item['position'];
		$view['has_hint'] = trim( (string) ( $snapshot->get_settings()['hint'] ?? '' ) ) !== '';
		unset( $view['settings']['score'] );
		return $view;
	}

	/**
	 * How a finished lesson went: accuracy on the planned questions and which misses were put right
	 * on replay. Labels are question text only.
	 */
	private static function lesson_result( array $items ) {
		$replay_of = array();
		foreach ( $items as $item ) {
			if ( ! empty( $item['display']['replay_of'] ) ) {
				$replay_of[ (int) $item['display']['replay_of'] ] = $item; }
		}
		$planned = array_values( array_filter( $items, static function ( $item ) {
			return empty( $item['display']['replay_of'] ) && $item['answered_at'] !== null;
		} ) );
		$right   = count( array_filter( $planned, static function ( $item ) {
			return (int) $item['correct'] === 1;
		} ) );
		$missed  = array();
		foreach ( $planned as $item ) {
			if ( (int) $item['correct'] === 1 ) {
				continue; }
			$again    = $replay_of[ (int) $item['id'] ] ?? null;
			$missed[] = array(
				'label' => self::label( $item ),
				'fixed' => $again && $again['answered_at'] !== null ? (int) $again['correct'] === 1 : null,
			);
		}
		return array(
			'accuracy'         => $planned ? round( $right / count( $planned ), 2 ) : 0,
			'planned_right'    => $right,
			'planned_answered' => count( $planned ),
			'missed'           => $missed,
		);
	}

	/** Public state of a session for its owner. */
	public static function state( array $session ) {
		$items   = self::items( $session['id'] );
		$current = null;
		foreach ( $items as $item ) {
			if ( $item['answered_at'] === null ) {
				$current = $item;
				break; }
		}
		$answered = array_values(
			array_filter(
				$items,
				static function ( $item ) {
					return $item['answered_at'] !== null;
				}
			)
		);
		$term     = get_term( (int) $session['term_id'], Taxonomy::NAME );
		$state    = array(
			'uuid'       => $session['uuid'],
			'status'     => $session['status'],
			'mode'       => $session['mode'],
			'skill'      => $term && ! is_wp_error( $term ) ? array(
				'id'   => (int) $term->term_id,
				'name' => $term->name,
			) : null,
			'item_limit' => (int) $session['item_limit'],
			'answered'   => count( $answered ),
			'correct'    => count(
				array_filter(
					$answered,
					static function ( $item ) {
						return (int) $item['correct'] === 1; }
				)
			),
			'current'    => $current ? self::item_view( $current ) : null,
			'ended'      => $session['policy']['ended'] ?? null,
			'band'       => $session['policy']['band'] ?? 'standard',
			// What tutor help the learner can ask for (AI hint and explanation), never keys or settings.
			'ai'         => \OhMyLMS\AI\Feedback::availability( $session ),
		);
		if ( ( $session['policy']['style'] ?? '' ) === 'lesson' ) {
			$replays          = array_filter( $items, static function ( $item ) {
				return ! empty( $item['display']['replay_of'] );
			} );
			$state['style']   = 'lesson';
			$state['planned'] = (int) $session['item_limit'];
			$state['replay']  = $current ? ! empty( $current['display']['replay_of'] ) : false;
			$state['stage']   = $current && ! empty( $state['current']['settings']['type'] ) ? ( $state['replay'] ? 'replay' : Selector::stage( $state['current']['settings']['type'] ) ) : '';
			$state['replays'] = count( $replays );
			if ( $session['status'] === 'complete' ) {
				$state += self::lesson_result( $items );
			}
		}
		if ( $session['status'] === 'complete' && ( $state['ended'] ?? '' ) === 'exhausted' ) {
			$state['notice'] = __( 'You have answered every available practice question for this skill. Ask your teacher for more, or come back later for a review.', 'ohmylms' );
		}
		if ( $session['status'] === 'complete' && (int) $session['student_id'] ) {
			$state['recommendations'] = Recommendations::for_student( (int) $session['student_id'], 3 );
			// XP, the daily goal, the mastery score change and the streak, when those are on.
			$reward = \OhMyLMS\Engagement\SessionReward::for_session( $session );
			if ( $reward ) {
				$state['reward'] = $reward; }
		}
		return $state;
	}

	/**
	 * Grade the current item. Practice allows one graded answer per item; feedback then
	 * reveals the correct response for that item only.
	 */
	public static function answer( array $session, $item_id, $response ) {
		global $wpdb;
		$access = \OhMyLMS\Learning\PracticeAccessPolicy::session( $session );
		if ( is_wp_error( $access ) ) {
			return $access; }
		if ( $session['status'] !== 'active' ) {
			return new \WP_Error( 'ohmylms_practice_closed', __( 'This practice session has ended.', 'ohmylms' ), array( 'status' => 409 ) ); }
		$item = null;
		foreach ( self::items( $session['id'] ) as $candidate ) {
			if ( (int) $candidate['id'] === (int) $item_id ) {
				$item = $candidate; }
		}
		if ( ! $item ) {
			return new \WP_Error( 'ohmylms_practice_item', __( 'This question is not part of the session.', 'ohmylms' ), array( 'status' => 404 ) ); }
		if ( $item['answered_at'] !== null ) {
			return new \WP_Error( 'ohmylms_practice_answered', __( 'This question was already answered.', 'ohmylms' ), array( 'status' => 409 ) ); }
		$graded = self::grade_item( $session, $item, $response, 'practice' );
		if ( is_wp_error( $graded ) ) {
			return $graded; }
		$fresh = self::get( $session['uuid'] );
		self::issue( $fresh );
		return $graded + array( 'session' => self::state( self::get( $session['uuid'] ) ) );
	}

	/**
	 * Shared grading for practice and inline items: record response, grade event and receipt.
	 * $scope is the token scope the learner's form was rendered with (default: the item).
	 */
	public static function grade_item( array $session, array $item, $response, $source_type, $scope = null ) {
		global $wpdb;
		$snapshot = AttemptItems::snapshot( $item );
		if ( ! $snapshot ) {
			return new \WP_Error( 'ohmylms_practice_item', __( 'Question unavailable.', 'ohmylms' ), array( 'status' => 410 ) ); }
		$scope  = $scope ?: 'p' . (int) $item['id'];
		$answer = AttemptItems::untokenize( $scope, $item, is_array( $response ) ? $response : array( $response ) );
		$grade  = Grader::grade( $snapshot, $answer, array( 'ignore_manual' => false ) );
		if ( is_wp_error( $grade ) ) {
			return $grade; }
		if ( $grade['pending'] ) {
			return new \WP_Error( 'ohmylms_practice_manual', __( 'This question needs teacher marking and cannot be practised here.', 'ohmylms' ), array( 'status' => 409 ) ); }
		$receipt = hash_hmac( 'sha256', $session['uuid'] . ':' . $item['id'] . ':' . $grade['fraction'], wp_salt( 'auth' ) );
		try {
			Transaction::run(
				static function () use ( $wpdb, $session, $item, $grade, $receipt, $source_type ) {
					$updated = $wpdb->query(
						$wpdb->prepare(
							'UPDATE ' . Schema::table( 'practice_items' ) . ' SET response=%s, fraction=%f, correct=%d, tries=tries+1, receipt=%s, answered_at=%s WHERE id=%d AND answered_at IS NULL',
							wp_json_encode( $grade['answer'] ),
							$grade['fraction'],
							$grade['correct'] ? 1 : 0,
							$receipt,
							current_time( 'mysql', true ),
							(int) $item['id']
						)
					);
					if ( $updated !== 1 ) {
						throw new \RuntimeException( 'Item already answered' ); }
					GradeEvents::record(
						array(
							'source_type' => $source_type,
							'source_id'   => (int) $session['id'],
							'item_id'     => (int) $item['id'],
							'student_id'  => (int) $session['student_id'],
							'question_id' => (int) $item['question_id'],
							'version_id'  => (int) $item['version_id'],
							'awarded'     => $grade['fraction'],
							'max_marks'   => 1,
							'fraction'    => $grade['fraction'],
							'correct'     => $grade['correct'],
							'grader'      => 'auto',
							'reason'      => $grade['present'] ? 'answered' : 'unanswered',
						)
					);
				}
			);
		} catch ( \Throwable $error ) {
			return new \WP_Error( 'ohmylms_practice_answered', __( 'This question was already answered.', 'ohmylms' ), array( 'status' => 409 ) );
		}
		Evidence::soon();
		do_action( 'ohmylms_practice_answered', (int) $session['id'], (int) $item['id'], $grade['correct'], $source_type );
		return array(
			'item_id'       => (int) $item['id'],
			'correct'       => $grade['correct'],
			'fraction'      => $grade['fraction'],
			'feedback'      => self::feedback( $snapshot, $scope ),
			'receipt'       => $receipt,
			'question_uuid' => $item['question_uuid'],
		);
	}

	/** What the correct response was, in the item's own tokens (revealed only after answering). */
	private static function feedback( QuestionSnapshot $snapshot, $scope ) {
		$settings = $snapshot->get_settings();
		$correct  = $snapshot->get_correct_options();
		$tokens   = AttemptItems::tokens(
			$scope,
			array_map(
				static function ( $option ) {
					return (int) $option['id'];
				},
				$snapshot->get_questions()
			)
		);
		$result   = array( 'explanation' => wp_kses_post( (string) ( $settings['explanation'] ?? '' ) ) );
		if ( \OhMyLMS\Assessment\Interactive::is_interactive( $snapshot->get_type() ) ) {
			$result['expected'] = \OhMyLMS\Assessment\Interactive::expected( $snapshot->get_type(), $settings );
		} elseif ( QuestionSnapshot::hides_option_text( $snapshot->get_type() ) ) {
			$result['expected'] = array_map(
				static function ( $option ) {
					return (string) $option['answer'];
				},
				$correct
			);
		} elseif ( $snapshot->get_type() === 'matching' ) {
			$definitions     = AttemptItems::tokens( $scope, array_keys( $tokens ), 'd' );
			$result['pairs'] = array();
			foreach ( $tokens as $id => $token ) {
				$result['pairs'][ $definitions[ $id ] ] = $token; }
		} elseif ( $snapshot->get_type() === 'reorder' ) {
			$result['order'] = array_map(
				static function ( $option ) use ( $tokens ) {
					return $tokens[ (int) $option['id'] ] ?? '';
				},
				$snapshot->get_questions()
			);
		} else {
			$result['correct_options'] = array_values(
				array_map(
					static function ( $option ) use ( $tokens ) {
						return $tokens[ (int) $option['id'] ] ?? '';
					},
					$correct
				)
			);
		}
		$numeric = $settings['answer'] ?? null;
		if ( $snapshot->get_type() === 'numerical' && is_numeric( $numeric ) ) {
			$result['expected'] = array( (string) $numeric ); }
		return $result;
	}

	/**
	 * Tutor help from the AI provider for one item: a hint before the answer, an explanation
	 * after it. Never affects grading. A hint counts as assisted exactly like the authored hint.
	 *
	 * @return array|\WP_Error
	 */
	public static function ai_help( array $session, $item_id, $kind ) {
		global $wpdb;
		$access = \OhMyLMS\Learning\PracticeAccessPolicy::session( $session );
		if ( is_wp_error( $access ) ) {
			return $access; }
		foreach ( self::items( $session['id'] ) as $item ) {
			if ( (int) $item['id'] !== (int) $item_id ) {
				continue; }
			$answered = $item['answered_at'] !== null;
			if ( $kind === 'hint' && $answered ) {
				return new \WP_Error( 'ohmylms_practice_answered', __( 'This question was already answered.', 'ohmylms' ), array( 'status' => 409 ) ); }
			if ( $kind === 'explain' && ! $answered ) {
				return new \WP_Error( 'ohmylms_practice_unanswered', __( 'Answer the question first, then the tutor can explain.', 'ohmylms' ), array( 'status' => 409 ) ); }
			$snapshot = AttemptItems::snapshot( $item );
			if ( ! $snapshot ) {
				return new \WP_Error( 'ohmylms_practice_item', __( 'Question unavailable.', 'ohmylms' ), array( 'status' => 410 ) ); }
			$reply = \OhMyLMS\AI\Feedback::help( (string) $kind, $session, $item, $snapshot );
			if ( ! is_wp_error( $reply ) && $kind === 'hint' ) {
				$wpdb->update( Schema::table( 'practice_items' ), array( 'assisted' => 1 ), array( 'id' => (int) $item['id'] ) ); }
			return $reply;
		}
		return new \WP_Error( 'ohmylms_practice_item', __( 'This question is not part of the session.', 'ohmylms' ), array( 'status' => 404 ) );
	}

	/** Reveal the hint; the item no longer counts as independent evidence. */
	public static function hint( array $session, $item_id ) {
		global $wpdb;
		$access = \OhMyLMS\Learning\PracticeAccessPolicy::session( $session );
		if ( is_wp_error( $access ) ) {
			return $access; }
		foreach ( self::items( $session['id'] ) as $item ) {
			if ( (int) $item['id'] !== (int) $item_id ) {
				continue; }
			if ( $item['answered_at'] !== null ) {
				return new \WP_Error( 'ohmylms_practice_answered', __( 'This question was already answered.', 'ohmylms' ), array( 'status' => 409 ) ); }
			$wpdb->update( Schema::table( 'practice_items' ), array( 'assisted' => 1 ), array( 'id' => (int) $item['id'] ) );
			$snapshot = AttemptItems::snapshot( $item );
			$lessons  = array();
			foreach ( \OhMyLMS\QuestionBank\SkillMap::for_version( (int) $item['version_id'] ) as $mapping ) {
				foreach ( Taxonomy::linked_posts( (int) $mapping['term_id'], OHMYLMS_LESSON_CPT ) as $lesson ) {
					$lessons[ $lesson ] = array(
						'id'    => $lesson,
						'title' => get_the_title( $lesson ),
						'url'   => get_permalink( $lesson ),
					); }
			}
			if ( (int) $session['course_id'] ) {
				$program = \OhMyLMS\Learning\CourseProgram::for_enrollment( \OhMyLMS\Learning\CourseProgram::enrollment( $session['student_id'], $session['course_id'] ) );
				$scoped  = array();
				foreach ( $program['items'] as $placement ) {
					if ( $placement['type'] !== 'lesson' || ! isset( $lessons[ $placement['content_id'] ] ) || get_post_status( $placement['content_id'] ) !== 'publish' ) {
						continue; }
					$scoped[] = array(
						'id'    => $placement['content_id'],
						'title' => get_the_title( $placement['content_id'] ),
						'url'   => add_query_arg( 'learning_item', $placement['id'], \OhMyLMS\Learning\Frontend::url( $session['course_id'] ) ),
					);
				}
				$lessons = $scoped;
			}
			return array(
				'hint'    => wp_kses_post( (string) ( $snapshot->get_settings()['hint'] ?? '' ) ),
				'lessons' => array_values( array_slice( $lessons, 0, 3 ) ),
			);
		}
		return new \WP_Error( 'ohmylms_practice_item', __( 'This question is not part of the session.', 'ohmylms' ), array( 'status' => 404 ) );
	}
}
