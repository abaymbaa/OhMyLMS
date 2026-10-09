<?php
/**
 * Additional frozen assessment response formats.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Assessment;

use OhMyLMS\Extensions\Registry;

defined( 'ABSPATH' ) || exit;

/** Native response formats with independent frozen grading keys. */
final class ExtendedQuestions {
	const TYPES          = array( 'passage', 'graphing', 'hot-text', 'match-table-grid', 'labeling', 'hotspot', 'draw', 'audio-response', 'video-response', 'poll', 'word-cloud', 'discussion-board', 'slide', 'interactive-video' );
	const MANUAL_TYPES   = array( 'draw', 'audio-response', 'video-response', 'discussion-board' );
	const UNSCORED_TYPES = array( 'poll', 'word-cloud', 'slide' );

	/** Register definitions before third-party extensions. */
	public static function register() {
		foreach ( self::TYPES as $type ) {
			Registry::register(
				'question',
				$type,
				array(
					'label'             => ucwords( str_replace( '-', ' ', $type ) ),
					'snapshot'          => true,
					'manual'            => in_array( $type, self::MANUAL_TYPES, true ),
					'answers'           => 'text',
					'public_settings'   => array(),
					'editor'            => array( 'format' => 'ohmylms-settings' ),
					'public_view'       => static function ( $settings ) use ( $type ) {
						return self::public_view( $type, $settings );
					},
					'validate_settings' => static function ( $settings ) use ( $type ) {
						return self::validate_settings( $type, $settings );
					},
					'validate'          => static function ( $answer ) use ( $type ) {
						return self::validate_answer( $type, $answer );
					},
					'grade'             => static function ( $answer, $question ) use ( $type ) {
						if ( 'passage' === $type ) {
							return Structured::grade( $answer, $question );
						}
						return self::grade( $type, $answer, $question->get_settings() );
					},
					'render'            => static function ( $question, $attempt ) {
						ohmylms_get_template(
							'single-lesson/quiz-loop/extended.php',
							array(
								'question' => $question,
								'attempt'  => $attempt,
							)
						);
					},
				)
			);
		}
	}

	/**
	 * Build a presentation view without grading keys or marking notes.
	 *
	 * @param string $type Response format.
	 * @param array  $settings Authored settings.
	 * @return array
	 */
	public static function public_view( $type, array $settings ) {
		$keys = array(
			'passage'          => array( 'passage' ),
			'graphing'         => array( 'mode', 'min', 'max' ),
			'hot-text'         => array( 'tokens' ),
			'match-table-grid' => array( 'rows', 'columns' ),
			'labeling'         => array( 'image_url' ),
			'hotspot'          => array( 'image_url' ),
			'audio-response'   => array( 'max_seconds' ),
			'video-response'   => array( 'max_seconds' ),
			'poll'             => array( 'choices' ),
		);
		$view = array_intersect_key( $settings, array_flip( $keys[ $type ] ?? array() ) );
		if ( 'passage' === $type ) {
			$view['parts'] = Structured::public_parts( $settings );
		}
		if ( 'labeling' === $type ) {
			$view['targets'] = array_map(
				static function ( $target ) {
					return array_intersect_key( $target, array_flip( array( 'id', 'x', 'y' ) ) );
				},
				$settings['targets'] ?? array()
			);
			$view['choices'] = array_merge( array_column( $settings['targets'] ?? array(), 'answer' ), $settings['distractors'] ?? array() );
			sort( $view['choices'], SORT_STRING );
		}
		if ( 'interactive-video' === $type ) {
			$view['video_url']   = $settings['video_url'] ?? '';
			$view['checkpoints'] = array_map(
				static function ( $checkpoint ) {
					return array_intersect_key( $checkpoint, array_flip( array( 'id', 'at', 'prompt' ) ) );
				},
				$settings['checkpoints'] ?? array()
			);
		}
		return $view;
	}

	/**
	 * Validate bounded presentation lists and private keys before versioning.
	 *
	 * @param string $type Response format.
	 * @param array  $settings Authored settings.
	 * @return true|\WP_Error
	 */
	public static function validate_settings( $type, array $settings ) {
		$valid = true;
		if ( 'passage' === $type ) {
			return Structured::validate_settings( $settings );
		}
		if ( in_array( $type, array( 'labeling', 'hotspot', 'interactive-video' ), true ) ) {
			$url   = $settings[ 'interactive-video' === $type ? 'video_url' : 'image_url' ] ?? '';
			$valid = is_string( $url ) && 2048 >= strlen( $url ) && (bool) preg_match( '#^https?://#i', $url );
		}
		if ( 'graphing' === $type ) {
			$points = $settings['points'] ?? array();
			$valid  = self::valid_points( $points, 50, -100, 100 ) && count( $points ) > 0;
			$valid  = $valid && is_numeric( $settings['min'] ?? null ) && is_numeric( $settings['max'] ?? null ) && $settings['min'] < $settings['max'] && -100 <= $settings['min'] && 100 >= $settings['max'];
			$valid  = $valid && in_array( $settings['mode'] ?? 'points', array( 'points', 'line' ), true );
			$valid  = $valid && self::valid_points( $points, 50, (float) ( $settings['min'] ?? 0 ), (float) ( $settings['max'] ?? 0 ) );
			$valid  = $valid && is_numeric( $settings['tolerance'] ?? 0.25 ) && 0 <= ( $settings['tolerance'] ?? 0.25 ) && 1 >= ( $settings['tolerance'] ?? 0.25 );
			if ( 'line' === ( $settings['mode'] ?? '' ) ) {
				$valid = $valid && 2 === count( $points ) && 0 < hypot( $points[0]['x'] - $points[1]['x'], $points[0]['y'] - $points[1]['y'] );
			}
		}
		if ( 'hot-text' === $type ) {
			$tokens  = $settings['tokens'] ?? array();
			$correct = $settings['correct'] ?? array();
			$valid   = self::valid_rows( $tokens, 'text' ) && is_array( $correct ) && count( $correct ) > 0 && count( array_filter( $correct, 'is_string' ) ) === count( $correct );
			$valid   = $valid && ! array_diff( $correct, array_column( $tokens, 'id' ) );
		}
		if ( 'match-table-grid' === $type ) {
			$rows    = $settings['rows'] ?? array();
			$columns = $settings['columns'] ?? array();
			$key     = $settings['key'] ?? array();
			$valid   = self::valid_rows( $rows, 'label' ) && self::valid_rows( $columns, 'label' ) && is_array( $key ) && count( $key ) === count( $rows );
			if ( $valid ) {
				foreach ( $rows as $row ) {
					$valid = $valid && in_array( $key[ $row['id'] ] ?? null, array_column( $columns, 'id' ), true );
				}
			}
		}
		if ( 'labeling' === $type ) {
			$targets = $settings['targets'] ?? array();
			$valid   = $valid && self::valid_rows( $targets, 'answer' ) && self::valid_points( $targets, 50, 0, 100 );
		}
		if ( 'hotspot' === $type ) {
			$zones = $settings['zones'] ?? array();
			$valid = $valid && self::valid_points( $zones, 50, 0, 100 ) && count( $zones ) > 0;
			if ( $valid ) {
				foreach ( $zones as $zone ) {
					$valid = $valid && is_numeric( $zone['radius'] ?? null ) && 0 < $zone['radius'] && 100 >= $zone['radius'];
				}
			}
		}
		if ( 'poll' === $type ) {
			$valid = self::valid_rows( $settings['choices'] ?? array(), 'text' ) && count( $settings['choices'] ) >= 2;
		}
		if ( in_array( $type, array( 'audio-response', 'video-response' ), true ) ) {
			$duration = $settings['max_seconds'] ?? 60;
			$valid    = is_numeric( $duration ) && 1 <= $duration && 300 >= $duration;
		}
		if ( 'interactive-video' === $type ) {
			$checkpoints = $settings['checkpoints'] ?? array();
			$valid       = $valid && self::valid_rows( $checkpoints, 'prompt' );
			if ( $valid ) {
				foreach ( $checkpoints as $checkpoint ) {
					$valid = $valid && is_numeric( $checkpoint['at'] ?? null ) && 0 <= $checkpoint['at'] && 86400 >= $checkpoint['at'] && is_string( $checkpoint['answer'] ?? null ) && '' !== trim( $checkpoint['answer'] );
				}
			}
		}
		if ( in_array( $type, self::UNSCORED_TYPES, true ) ) {
			$valid = $valid && 0.0 === (float) ( $settings['score']['value'] ?? 0 );
		}
		return $valid ? true : new \WP_Error( 'ohmylms_extended_settings', __( 'Complete the question response settings and correct answers.', 'ohmylms' ), array( 'status' => 400 ) );
	}

	/**
	 * Validate list identifiers and required text.
	 *
	 * @param mixed  $rows Items.
	 * @param string $label Text property.
	 * @return bool
	 */
	private static function valid_rows( $rows, $label ) {
		if ( ! is_array( $rows ) || 0 === count( $rows ) || 100 < count( $rows ) ) {
			return false;
		}
		$ids = array();
		foreach ( $rows as $row ) {
			if ( ! is_array( $row ) || ! is_string( $row['id'] ?? null ) || ! preg_match( '/^[a-z0-9_-]{1,40}$/i', $row['id'] ) || ! is_string( $row[ $label ] ?? null ) || '' === trim( $row[ $label ] ) || 2000 < strlen( $row[ $label ] ) ) {
				return false;
			}
			$ids[] = $row['id'];
		}
		return count( $ids ) === count( array_unique( $ids ) );
	}

	/**
	 * Reject nonnumeric or out-of-range coordinates.
	 *
	 * @param mixed $points Coordinates.
	 * @param int   $limit Count limit.
	 * @param float $min Minimum coordinate.
	 * @param float $max Maximum coordinate.
	 * @return bool
	 */
	private static function valid_points( $points, $limit, $min, $max ) {
		if ( ! is_array( $points ) || count( $points ) > $limit ) {
			return false;
		}
		foreach ( $points as $point ) {
			if ( ! is_array( $point ) ) {
				return false;
			}
			foreach ( array( 'x', 'y' ) as $axis ) {
				$value = $point[ $axis ] ?? null;
				if ( ! is_numeric( $value ) || ! is_finite( (float) $value ) || $value < $min || $value > $max ) {
					return false;
				}
			}
		}
		return true;
	}

	/**
	 * Bound scalar submissions and reject unsafe media sources.
	 *
	 * @param string $type Response format.
	 * @param mixed  $answer Submitted response.
	 * @return bool
	 */
	public static function validate_answer( $type, $answer ) {
		if ( ! is_array( $answer ) || 200 < count( $answer ) ) {
			return false;
		}
		$total_bytes = 0;
		$max_bytes   = in_array( $type, array( 'audio-response', 'video-response' ), true ) ? 6000000 : 500000;
		foreach ( $answer as $value ) {
			$total_bytes += is_scalar( $value ) ? strlen( (string) $value ) : 6000001;
			if ( $max_bytes < $total_bytes ) {
				return false;
			}
			if ( ! is_scalar( $value ) || 6000000 < strlen( (string) $value ) ) {
				return false;
			}
		}
		if ( in_array( $type, array( 'word-cloud', 'discussion-board' ), true ) ) {
			return strlen( (string) ( $answer['text'] ?? '' ) ) <= ( 'word-cloud' === $type ? 1000 : 20000 );
		}
		if ( 'hotspot' === $type && ! empty( $answer ) ) {
			return self::valid_points( array( $answer ), 1, 0, 100 );
		}
		if ( in_array( $type, array( 'audio-response', 'video-response' ), true ) && ! empty( $answer['media'] ) ) {
			$value = (string) $answer['media'];
			$mime  = 'audio-response' === $type ? 'audio' : 'video';
			return (bool) preg_match( '#^https?://[^\s<>]+$#i', $value ) || (bool) preg_match( '#^data:' . $mime . '/(?:webm|mp4|mpeg|ogg|wav);base64,[a-zA-Z0-9+/=]+$#D', $value );
		}
		if ( in_array( $type, array( 'graphing', 'draw' ), true ) && ! empty( $answer['points'] ) ) {
			return self::valid_points( json_decode( (string) $answer['points'], true ), 'draw' === $type ? 5000 : 50, 'draw' === $type ? 0 : -100, 100 );
		}
		return true;
	}

	/**
	 * Grade only the frozen settings supplied by the grading contract.
	 *
	 * @param string $type Response format.
	 * @param array  $answer Submitted response.
	 * @param array  $settings Frozen settings.
	 * @return array
	 */
	public static function grade( $type, array $answer, array $settings ) {
		$correct = false;
		if ( 'hot-text' === $type ) {
			$given    = array_keys(
				array_filter(
					$answer,
					static function ( $value ) {
						return '1' === (string) $value;
					}
				)
			);
			$expected = $settings['correct'] ?? array();
			sort( $given );
			sort( $expected );
			$correct = $given === $expected;
		}
		if ( 'match-table-grid' === $type ) {
			$given    = array_map( 'strval', $answer );
			$expected = array_map( 'strval', $settings['key'] ?? array() );
			ksort( $given );
			ksort( $expected );
			$correct = $given === $expected;
		}
		if ( 'labeling' === $type ) {
			$correct = count( $answer ) === count( $settings['targets'] ?? array() );
			foreach ( $settings['targets'] ?? array() as $target ) {
				$correct = $correct && ( $answer[ $target['id'] ] ?? '' ) === $target['answer'];
			}
		}
		if ( 'hotspot' === $type && is_numeric( $answer['x'] ?? null ) && is_numeric( $answer['y'] ?? null ) ) {
			foreach ( $settings['zones'] ?? array() as $zone ) {
				$correct = $correct || hypot( (float) $answer['x'] - $zone['x'], (float) $answer['y'] - $zone['y'] ) <= $zone['radius'];
			}
		}
		if ( 'interactive-video' === $type ) {
			$correct = count( $answer ) === count( $settings['checkpoints'] ?? array() );
			foreach ( $settings['checkpoints'] ?? array() as $checkpoint ) {
				$correct = $correct && strtolower( trim( (string) ( $answer[ $checkpoint['id'] ] ?? '' ) ) ) === strtolower( trim( $checkpoint['answer'] ) );
			}
		}
		if ( 'graphing' === $type ) {
			$given     = json_decode( $answer['points'] ?? '[]', true );
			$expected  = $settings['points'] ?? array();
			$tolerance = max( 0.0, min( 1.0, (float) ( $settings['tolerance'] ?? 0.25 ) ) );
			$correct   = is_array( $given ) && count( $given ) === count( $expected );
			if ( $correct && 'line' === ( $settings['mode'] ?? '' ) && 2 === count( $given ) ) {
				$dx      = $expected[1]['x'] - $expected[0]['x'];
				$dy      = $expected[1]['y'] - $expected[0]['y'];
				$correct = 0 < hypot( $given[0]['x'] - $given[1]['x'], $given[0]['y'] - $given[1]['y'] );
				foreach ( $given as $point ) {
					$correct = $correct && abs( $dx * ( $point['y'] - $expected[0]['y'] ) - $dy * ( $point['x'] - $expected[0]['x'] ) ) <= $tolerance * hypot( $dx, $dy );
				}
			} elseif ( $correct ) {
				foreach ( $expected as $point ) {
					$found = false;
					foreach ( $given as $index => $candidate ) {
						if ( hypot( $candidate['x'] - $point['x'], $candidate['y'] - $point['y'] ) <= $tolerance ) {
							$found = true;
							unset( $given[ $index ] );
							break;
						}
					}
					$correct = $correct && $found;
				}
			}
		}
		return array(
			'correct'  => $correct,
			'fraction' => $correct ? 1.0 : 0.0,
			'manual'   => in_array( $type, self::MANUAL_TYPES, true ),
		);
	}
}
