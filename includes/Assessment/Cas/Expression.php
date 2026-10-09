<?php
namespace OhMyLMS\Assessment\Cas;

defined( 'ABSPATH' ) || exit;

/**
 * A small, safe algebra engine for grading typed math.
 *
 * It never evaluates PHP: input is normalised (ASCII, Unicode symbols or the LaTeX a math
 * keyboard produces), parsed with a recursive-descent parser into a bounded tree, and
 * compared numerically. Two expressions are equivalent when they agree, within tolerance,
 * at a fixed set of sample points where both are defined. Equations are equivalent when
 * (left - right) agree up to a non-zero constant factor. Form checks (expanded, factored,
 * simplified) inspect the learner's tree after equivalence is established.
 *
 * Supported: + - * / ^, implicit multiplication (2x, 2(x+1), (a)(b)), parentheses, numbers,
 * single-letter variables, pi, e, abs sqrt ln log exp sin cos tan asin acos atan.
 * Hard limits on input length, depth and node count keep a hostile answer cheap to reject.
 * A site can replace the numeric test with an external CAS via the
 * 'ohmylms_cas_equivalent' filter.
 */
final class Expression {
	const MAX_LENGTH = 240;
	const MAX_NODES  = 400;
	const MAX_DEPTH  = 40;
	const SAMPLES    = 14;
	const FUNCTIONS  = array( 'abs', 'sqrt', 'ln', 'log', 'exp', 'sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'floor', 'ceil', 'round', 'gcd', 'lcm', 'mod', 'min', 'max' );
	const FORMS      = array( 'any', 'expanded', 'factored', 'simplified' );

	/* ---------- Normalisation ---------- */

	/** ASCII-math from what a learner typed, pasted or composed (Unicode, LaTeX). */
	public static function normalize( $input ) {
		$text = is_scalar( $input ) ? (string) $input : '';
		$text = str_replace(
			array( "\u{2212}", "\u{2013}", "\u{00D7}", "\u{00B7}", "\u{22C5}", "\u{00F7}", "\u{03C0}", "\u{00B2}", "\u{00B3}", "\u{00A0}" ),
			array( '-', '-', '*', '*', '*', '/', 'pi', '^2', '^3', ' ' ),
			$text
		);
		// Square root sign: √9, √(x+1), √x.
		$text = preg_replace( '/\x{221A}\s*(\(|[0-9.]+|[a-z])/iu', 'sqrt$1', $text );
		if ( strpos( $text, '\\' ) !== false ) {
			$text = self::latex( $text );
		}
		return trim( preg_replace( '/\s+/', ' ', $text ) );
	}

	/** The LaTeX subset a math keyboard emits, converted to ASCII-math. */
	private static function latex( $text ) {
		$text = preg_replace( '/\\\\(left|right|displaystyle|,|;|!|quad|qquad)\s*/', '', $text );
		$text = preg_replace( '/\\\\(cdot|times|ast)\b/', '*', $text );
		$text = preg_replace( '/\\\\div\b/', '/', $text );
		$text = preg_replace( '/\\\\pi\b/', 'pi', $text );
		$text = preg_replace( '/\\\\(sin|cos|tan|ln|log|exp|arcsin|arccos|arctan)\b/', '$1', $text );
		$text = str_replace( array( 'arcsin', 'arccos', 'arctan' ), array( 'asin', 'acos', 'atan' ), $text );
		// \frac{a}{b}, \sqrt{a}, \sqrt[n]{a}: innermost first, so nesting resolves in a few passes.
		for ( $pass = 0; $pass < 8; $pass++ ) {
			$before = $text;
			$text   = preg_replace( '/\\\\d?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/', '(($1)/($2))', $text );
			$text   = preg_replace( '/\\\\sqrt\s*\[([^\]{}]*)\]\s*\{([^{}]*)\}/', '(($2)^(1/($1)))', $text );
			$text   = preg_replace( '/\\\\sqrt\s*\{([^{}]*)\}/', 'sqrt($1)', $text );
			$text   = preg_replace( '/\^\s*\{([^{}]*)\}/', '^($1)', $text );
			$text   = preg_replace( '/\\\\operatorname\s*\{([^{}]*)\}/', '$1', $text );
			$text   = preg_replace( '/\\\\(?:mathrm|text)\s*\{([^{}]*)\}/', '$1', $text );
			if ( $text === $before ) {
				break; }
		}
		$text = str_replace( array( '{', '}' ), array( '(', ')' ), $text );
		return str_replace( '\\', '', $text );
	}

	/* ---------- Parsing ---------- */

	/**
	 * @return array|null Tree, or null when the text is empty, too large or not valid math.
	 *                    An equation is ['=', left, right].
	 */
	public static function parse( $input ) {
		$text = self::normalize( $input );
		if ( $text === '' || strlen( $text ) > self::MAX_LENGTH ) {
			return null; }
		$tokens = self::tokenize( $text );
		if ( $tokens === null ) {
			return null; }
		$state = array(
			'tokens' => $tokens,
			'pos'    => 0,
			'nodes'  => 0,
		);
		$left  = self::parse_sum( $state, 0 );
		if ( $left === null ) {
			return null; }
		$tree = $left;
		if ( self::peek( $state ) === array( 'op', '=' ) ) {
			++$state['pos'];
			$right = self::parse_sum( $state, 0 );
			if ( $right === null ) {
				return null; }
			$tree = array( '=', $left, $right );
		}
		return $state['pos'] === count( $state['tokens'] ) ? $tree : null;
	}

	/** @return array[]|null list of [type, value] */
	private static function tokenize( $text ) {
		$tokens = array();
		$length = strlen( $text );
		$i      = 0;
		while ( $i < $length ) {
			$char = $text[ $i ];
			if ( ctype_space( $char ) ) {
				++$i;
				continue; }
			if ( preg_match( '/\G(\d+(\.\d*)?|\.\d+)/', $text, $match, 0, $i ) ) {
				$tokens[] = array( 'num', (float) $match[1] );
				$i       += strlen( $match[1] );
				continue;
			}
			if ( preg_match( '/\G[a-zA-Z]+/', $text, $match, 0, $i ) ) {
				$word = strtolower( $match[0] );
				$i   += strlen( $match[0] );
				// Longest known words first ("sin", "pi"); anything else is single-letter variables.
				$parts = self::split_word( $word );
				foreach ( $parts as $part ) {
					$tokens[] = $part; }
				continue;
			}
			if ( strpos( '+-*/^()=|,', $char ) !== false ) {
				$tokens[] = array( 'op', $char );
				++$i;
				continue;
			}
			return null;
		}
		return count( $tokens ) > 200 ? null : $tokens;
	}

	private static function split_word( $word ) {
		$parts = array();
		$names = array_merge( self::FUNCTIONS, array( 'pi' ) );
		usort(
			$names,
			static function ( $a, $b ) {
				return strlen( $b ) - strlen( $a );
			}
		);
		while ( $word !== '' ) {
			$matched = false;
			foreach ( $names as $name ) {
				if ( strpos( $word, $name ) === 0 ) {
					$parts[] = $name === 'pi' ? array( 'const', 'pi' ) : array( 'fn', $name );
					$word    = substr( $word, strlen( $name ) );
					$matched = true;
					break;
				}
			}
			if ( ! $matched ) {
				$parts[] = $word[0] === 'e' ? array( 'const', 'e' ) : array( 'var', $word[0] );
				$word    = substr( $word, 1 );
			}
		}
		return $parts;
	}

	private static function peek( array &$state ) {
		return $state['tokens'][ $state['pos'] ] ?? null;
	}

	private static function node( array &$state, array $node ) {
		return ++$state['nodes'] > self::MAX_NODES ? null : $node;
	}

	private static function parse_sum( array &$state, $depth ) {
		if ( $depth > self::MAX_DEPTH ) {
			return null; }
		$left = self::parse_product( $state, $depth + 1 );
		while ( $left !== null ) {
			$token = self::peek( $state );
			if ( $token === array( 'op', '+' ) || $token === array( 'op', '-' ) ) {
				++$state['pos'];
				$right = self::parse_product( $state, $depth + 1 );
				$left  = $right === null ? null : self::node( $state, array( $token[1], $left, $right ) );
			} else {
				break; }
		}
		return $left;
	}

	private static function starts_factor( $token ) {
		return $token !== null && ( in_array( $token[0], array( 'num', 'var', 'const', 'fn' ), true ) || $token === array( 'op', '(' ) );
	}

	private static function parse_product( array &$state, $depth ) {
		$left = self::parse_unary( $state, $depth + 1 );
		while ( $left !== null ) {
			$token = self::peek( $state );
			if ( $token === array( 'op', '*' ) || $token === array( 'op', '/' ) ) {
				++$state['pos'];
				$right = self::parse_unary( $state, $depth + 1 );
				$left  = $right === null ? null : self::node( $state, array( $token[1], $left, $right ) );
			} elseif ( self::starts_factor( $token ) ) {
				// Implicit multiplication: 2x, 2(x+1), x sin(x).
				$right = self::parse_unary( $state, $depth + 1 );
				$left  = $right === null ? null : self::node( $state, array( '*', $left, $right ) );
			} else {
				break; }
		}
		return $left;
	}

	private static function parse_unary( array &$state, $depth ) {
		if ( $depth > self::MAX_DEPTH ) {
			return null; }
		$token = self::peek( $state );
		if ( $token === array( 'op', '-' ) || $token === array( 'op', '+' ) ) {
			++$state['pos'];
			$operand = self::parse_unary( $state, $depth + 1 );
			if ( $operand === null ) {
				return null; }
			return $token[1] === '-' ? self::node( $state, array( 'neg', $operand ) ) : $operand;
		}
		return self::parse_power( $state, $depth + 1 );
	}

	private static function parse_power( array &$state, $depth ) {
		$base = self::parse_primary( $state, $depth + 1 );
		if ( $base !== null && self::peek( $state ) === array( 'op', '^' ) ) {
			++$state['pos'];
			// Right associative; the exponent may carry a sign (x^-2).
			$exponent = self::parse_unary( $state, $depth + 1 );
			return $exponent === null ? null : self::node( $state, array( '^', $base, $exponent ) );
		}
		return $base;
	}

	private static function parse_primary( array &$state, $depth ) {
		if ( $depth > self::MAX_DEPTH ) {
			return null; }
		$token = self::peek( $state );
		if ( $token === null ) {
			return null; }
		++$state['pos'];
		if ( $token[0] === 'num' ) {
			return self::node( $state, array( 'num', $token[1] ) ); }
		if ( $token[0] === 'var' || $token[0] === 'const' ) {
			return self::node( $state, array( $token[0], $token[1] ) ); }
		if ( $token === array( 'op', '(' ) ) {
			$inner = self::parse_sum( $state, $depth + 1 );
			if ( $inner === null || self::peek( $state ) !== array( 'op', ')' ) ) {
				return null; }
			++$state['pos'];
			return $inner;
		}
		if ( $token === array( 'op', '|' ) ) {
			$inner = self::parse_sum( $state, $depth + 1 );
			if ( $inner === null || self::peek( $state ) !== array( 'op', '|' ) ) {
				return null; }
			++$state['pos'];
			return self::node( $state, array( 'fn', 'abs', $inner ) );
		}
		if ( $token[0] === 'fn' ) {
			if ( self::peek( $state ) === array( 'op', '(' ) ) {
				// f(x) or f(x, y): a comma-separated argument list.
				++$state['pos'];
				$args = array();
				do {
					$arg = self::parse_sum( $state, $depth + 1 );
					if ( $arg === null || count( $args ) >= 3 ) {
						return null; }
					$args[] = $arg;
					$more   = self::peek( $state ) === array( 'op', ',' );
					if ( $more ) {
						++$state['pos']; }
				} while ( $more );
				if ( self::peek( $state ) !== array( 'op', ')' ) ) {
					return null; }
				++$state['pos'];
				return self::node( $state, array_merge( array( 'fn', $token[1] ), $args ) );
			}
			// As typed on paper: sin x.
			$argument = self::parse_power( $state, $depth + 1 );
			return $argument === null ? null : self::node( $state, array( 'fn', $token[1], $argument ) );
		}
		return null;
	}

	/* ---------- Evaluation ---------- */

	/** @return float|null null when undefined (division by zero, sqrt of a negative, overflow). */
	public static function evaluate( array $tree, array $vars ) {
		switch ( $tree[0] ) {
			case 'num':
				return $tree[1];
			case 'var':
				return $vars[ $tree[1] ] ?? null;
			case 'const':
				return $tree[1] === 'pi' ? M_PI : M_E;
			case 'neg':
				$a = self::evaluate( $tree[1], $vars );
				return $a === null ? null : -$a;
			case 'fn':
				$args = array();
				foreach ( array_slice( $tree, 2 ) as $argument ) {
					$value = self::evaluate( $argument, $vars );
					if ( $value === null ) {
						return null; }
					$args[] = $value;
				}
				return self::apply( $tree[1], $args );
		}
		$a = self::evaluate( $tree[1], $vars );
		$b = self::evaluate( $tree[2], $vars );
		if ( $a === null || $b === null ) {
			return null; }
		switch ( $tree[0] ) {
			case '+':
				$value = $a + $b;
				break;
			case '-':
				$value = $a - $b;
				break;
			case '*':
				$value = $a * $b;
				break;
			case '/':
				if ( abs( $b ) < 1e-12 ) {
					return null; }
				$value = $a / $b;
				break;
			case '^':
				if ( ( $a == 0.0 && $b <= 0.0 ) || ( $a < 0 && floor( $b ) !== $b ) || abs( $b ) > 200 ) {
					return null; }
				$value = pow( $a, $b );
				break;
			default:
				return null;
		}
		return is_finite( $value ) && abs( $value ) < 1e15 ? $value : null;
	}

	/** Whole-number value of a float, or null when it is not (within noise) an integer. */
	private static function whole( $value ) {
		return abs( $value - round( $value ) ) < 1e-9 && abs( $value ) < 1e12 ? (int) round( $value ) : null;
	}

	/** @param float[] $args */
	private static function apply( $name, array $args ) {
		$count = count( $args );
		if ( in_array( $name, array( 'min', 'max' ), true ) ) {
			return $count >= 1 ? ( $name === 'min' ? min( $args ) : max( $args ) ) : null; }
		if ( in_array( $name, array( 'gcd', 'lcm', 'mod' ), true ) ) {
			$a = $count === 2 ? self::whole( $args[0] ) : null;
			$b = $count === 2 ? self::whole( $args[1] ) : null;
			if ( $a === null || $b === null ) {
				return null; }
			if ( $name === 'mod' ) {
				// Result takes the sign of the divisor, as in school maths (mod(-1, 5) = 4).
				return $b === 0 ? null : (float) ( ( ( $a % $b ) + $b ) % $b );
			}
			$g = self::gcd( $a, $b );
			return $name === 'gcd' ? (float) $g : ( $a === 0 || $b === 0 ? 0.0 : (float) abs( intdiv( $a, $g ) * $b ) );
		}
		if ( $name === 'round' ) {
			if ( $count === 1 ) {
				return round( $args[0] ); }
			return $count === 2 && abs( $args[1] ) <= 9 ? round( $args[0], (int) $args[1] ) : null;
		}
		return $count === 1 ? self::apply_unary( $name, $args[0] ) : null;
	}

	private static function apply_unary( $name, $a ) {
		switch ( $name ) {
			case 'floor':
				return floor( $a );
			case 'ceil':
				return ceil( $a );
			case 'abs':
				return abs( $a );
			case 'sqrt':
				return $a < 0 ? null : sqrt( $a );
			case 'ln':
				return $a <= 0 ? null : log( $a );
			case 'log':
				return $a <= 0 ? null : log10( $a );
			case 'exp':
				return $a > 50 ? null : exp( $a );
			case 'sin':
				return sin( $a );
			case 'cos':
				return cos( $a );
			case 'tan':
				return abs( cos( $a ) ) < 1e-9 ? null : tan( $a );
			case 'asin':
				return abs( $a ) > 1 ? null : asin( $a );
			case 'acos':
				return abs( $a ) > 1 ? null : acos( $a );
			case 'atan':
				return atan( $a );
		}
		return null;
	}

	/** Variable names used in a tree. */
	public static function variables( array $tree, array $found = array() ) {
		if ( $tree[0] === 'var' ) {
			$found[ $tree[1] ] = true;
			return $found; }
		foreach ( array_slice( $tree, 1 ) as $child ) {
			if ( is_array( $child ) ) {
				$found = self::variables( $child, $found ); }
		}
		return $found;
	}

	/* ---------- Equivalence ---------- */

	/**
	 * Is the learner's text equivalent to the key, and does it have the required form?
	 *
	 * @param string $form any | expanded | factored | simplified
	 * @return array{correct:bool,reason:string} reason: equivalent | parse | different | form
	 */
	public static function check( $student, $key, $form = 'any', array $settings = array() ) {
		$s_tree = self::parse( $student );
		$k_tree = self::parse( $key );
		if ( $s_tree === null || $k_tree === null ) {
			return array(
				'correct' => false,
				'reason'  => 'parse',
			); }
		$same = null;
		if ( function_exists( 'apply_filters' ) ) {
			// An external CAS may decide equivalence; null keeps the built-in numeric test.
			$same = apply_filters( 'ohmylms_cas_equivalent', null, self::normalize( $student ), self::normalize( $key ), $settings );
		}
		$same = is_bool( $same ) ? $same : self::equivalent( $s_tree, $k_tree );
		if ( ! $same ) {
			return array(
				'correct' => false,
				'reason'  => 'different',
			); }
		if ( ! self::has_form( $s_tree, $form ) ) {
			return array(
				'correct' => false,
				'reason'  => 'form',
			); }
		return array(
			'correct' => true,
			'reason'  => 'equivalent',
		);
	}

	public static function equivalent( array $a, array $b ) {
		$equation_a = $a[0] === '=';
		if ( $equation_a !== ( $b[0] === '=' ) ) {
			return false; }
		if ( $equation_a ) {
			$a = array( '-', $a[1], $a[2] );
			$b = array( '-', $b[1], $b[2] );
		}
		$names  = array_keys( self::variables( $b, self::variables( $a ) ) );
		sort( $names );
		$ratio  = null;
		$agreed = 0;
		$seed   = crc32( json_encode( array( $a, $b ) ) );
		for ( $i = 0; $i < self::SAMPLES; $i++ ) {
			$vars = array();
			foreach ( $names as $index => $name ) {
				$vars[ $name ] = self::sample( $seed, $i, $index );
			}
			$x = self::evaluate( $a, $vars );
			$y = self::evaluate( $b, $vars );
			if ( $x === null && $y === null ) {
				continue; }
			if ( $x === null || $y === null ) {
				return false; }
			if ( $equation_a ) {
				// Equal up to a non-zero constant: both sides vanish together, or the ratio is constant.
				$zero_x = abs( $x ) < 1e-9;
				$zero_y = abs( $y ) < 1e-9;
				if ( $zero_x || $zero_y ) {
					if ( $zero_x !== $zero_y ) {
						return false; }
				} else {
					$here  = $y / $x;
					$ratio = $ratio ?? $here;
					if ( abs( $here - $ratio ) > 1e-7 * max( 1.0, abs( $ratio ) ) ) {
						return false; }
				}
			} elseif ( abs( $x - $y ) > 1e-9 + 1e-9 * max( abs( $x ), abs( $y ) ) ) {
				return false; }
			++$agreed;
		}
		// Too few points where both are defined: only a variable-free value can be trusted.
		return $agreed >= ( $names ? 4 : 1 );
	}

	/** Deterministic, well-spread values that avoid 0 and +/-1 coincidences. */
	private static function sample( $seed, $i, $index ) {
		$hash  = crc32( $seed . ':' . $i . ':' . $index );
		$value = ( ( $hash % 2000 ) / 2000.0 ) * 9.0 - 4.5;
		if ( abs( $value ) < 0.2 ) {
			$value += $value < 0 ? -0.7 : 0.7; }
		return round( $value, 3 ) + 0.013 * ( $index + 1 );
	}

	/* ---------- Form checks ---------- */

	public static function has_form( array $tree, $form ) {
		if ( $tree[0] === '=' ) {
			return self::has_form( $tree[1], $form ) && self::has_form( $tree[2], $form ); }
		switch ( $form ) {
			case 'expanded':
				return self::is_expanded( $tree );
			case 'factored':
				return self::is_factored( $tree );
			case 'simplified':
				return self::is_simplified( $tree );
		}
		return true;
	}

	/** Top-level terms with their signs removed. */
	private static function terms( array $tree ) {
		if ( $tree[0] === '+' ) {
			return array_merge( self::terms( $tree[1] ), self::terms( $tree[2] ) ); }
		if ( $tree[0] === '-' ) {
			// a - (b + c) keeps its bracket as one (unexpanded) term.
			$right = in_array( $tree[2][0], array( '+', '-' ), true ) ? array( $tree[2] ) : self::terms( $tree[2] );
			return array_merge( self::terms( $tree[1] ), $right ); }
		return array( $tree[0] === 'neg' ? $tree[1] : $tree );
	}

	private static function contains_sum( array $tree ) {
		if ( in_array( $tree[0], array( '+', '-' ), true ) ) {
			return true; }
		if ( $tree[0] === 'fn' ) {
			return false; }
		foreach ( array_slice( $tree, 1 ) as $child ) {
			if ( is_array( $child ) && self::contains_sum( $child ) ) {
				return true; }
		}
		return false;
	}

	/** A number built only from literals. */
	private static function is_constant( array $tree ) {
		return $tree[0] === 'num' || ( $tree[0] !== 'var' && self::variables( $tree ) === array() && ! self::contains_function( $tree ) );
	}

	private static function contains_function( array $tree ) {
		if ( $tree[0] === 'fn' ) {
			return true; }
		foreach ( array_slice( $tree, 1 ) as $child ) {
			if ( is_array( $child ) && self::contains_function( $child ) ) {
				return true; }
		}
		return false;
	}

	/**
	 * Monomial signature (variable powers) of a term with at most one numeric coefficient,
	 * or null when the term is not a plain monomial.
	 */
	private static function monomial( array $tree, array &$powers, &$coefficients ) {
		switch ( $tree[0] ) {
			case 'num':
				++$coefficients;
				return true;
			case 'neg':
				return self::monomial( $tree[1], $powers, $coefficients );
			case 'var':
				$powers[ $tree[1] ] = ( $powers[ $tree[1] ] ?? 0 ) + 1;
				return true;
			case 'const':
				$powers[ $tree[1] ] = ( $powers[ $tree[1] ] ?? 0 ) + 1;
				return true;
			case '*':
				return self::monomial( $tree[1], $powers, $coefficients ) && self::monomial( $tree[2], $powers, $coefficients );
			case '/':
				// Division by a number only (x/2); a variable denominator is not a polynomial term.
				if ( $tree[2][0] !== 'num' ) {
					return false; }
				++$coefficients;
				return self::monomial( $tree[1], $powers, $coefficients );
			case '^':
				if ( $tree[1][0] === 'var' && $tree[2][0] === 'num' && $tree[2][1] >= 2 && floor( $tree[2][1] ) === $tree[2][1] ) {
					$powers[ $tree[1][1] ] = ( $powers[ $tree[1][1] ] ?? 0 ) + (int) $tree[2][1];
					return true; }
				return false;
		}
		return false;
	}

	private static function is_expanded( array $tree ) {
		$seen = array();
		foreach ( self::terms( $tree ) as $term ) {
			$powers       = array();
			$coefficients = 0;
			if ( self::contains_sum( $term ) && ! self::monomial( $term, $powers, $coefficients ) ) {
				return false; }
			if ( ! self::monomial( $term, $powers, $coefficients ) || $coefficients > 1 ) {
				return false; }
			ksort( $powers );
			$signature = json_encode( $powers );
			if ( isset( $seen[ $signature ] ) ) {
				return false; // like terms not combined
			}
			$seen[ $signature ] = true;
		}
		return true;
	}

	private static function is_factored( array $tree ) {
		if ( $tree[0] === 'neg' ) {
			return self::is_factored( $tree[1] ); }
		if ( in_array( $tree[0], array( '+', '-' ), true ) ) {
			return false; }
		if ( $tree[0] === '^' ) {
			return self::contains_sum( $tree[1] ) && $tree[2][0] === 'num' && $tree[2][1] >= 2; }
		if ( $tree[0] === '/' ) {
			return self::is_factored( $tree[1] ) && ( $tree[2][0] === 'num' || self::is_factored( $tree[2] ) || ! self::contains_sum( $tree[2] ) ); }
		if ( $tree[0] !== '*' ) {
			return false; }
		// A product with at least two non-numeric factors, none of which is a product of sums left unexpanded wrongly.
		$factors = self::factors( $tree );
		$real    = array_filter(
			$factors,
			static function ( $factor ) {
				return $factor[0] !== 'num';
			}
		);
		return count( $real ) >= 2 || ( count( $real ) === 1 && count( $factors ) > 1 && self::contains_sum( reset( $real ) ) );
	}

	private static function factors( array $tree ) {
		return $tree[0] === '*' ? array_merge( self::factors( $tree[1] ), self::factors( $tree[2] ) ) : array( $tree );
	}

	private static function is_simplified( array $tree ) {
		if ( ! self::free_of_foldable( $tree ) ) {
			return false; }
		$seen = array();
		foreach ( self::terms( $tree ) as $term ) {
			$powers       = array();
			$coefficients = 0;
			if ( self::monomial( $term, $powers, $coefficients ) ) {
				ksort( $powers );
				$signature = json_encode( $powers );
				if ( isset( $seen[ $signature ] ) ) {
					return false; }
				$seen[ $signature ] = true;
			}
		}
		return true;
	}

	/** No operation whose operands are both plain numbers (3+4, 2*5), no x*1, x+0, x^1; fractions must be lowest terms. */
	private static function free_of_foldable( array $tree ) {
		$op = $tree[0];
		if ( in_array( $op, array( '+', '-', '*', '/', '^' ), true ) ) {
			$left  = $tree[1];
			$right = $tree[2];
			if ( $left[0] === 'num' && $right[0] === 'num' ) {
				if ( $op === '/' && floor( $left[1] ) === $left[1] && floor( $right[1] ) === $right[1] && $right[1] != 0 ) {
					if ( self::gcd( (int) $left[1], (int) $right[1] ) === 1 && $right[1] != 1 ) {
						return true; }
				}
				return false;
			}
			if ( ( $op === '*' && ( ( $left[0] === 'num' && $left[1] == 1 ) || ( $right[0] === 'num' && $right[1] == 1 ) ) )
				|| ( in_array( $op, array( '+', '-' ), true ) && ( ( $left[0] === 'num' && $left[1] == 0 ) || ( $right[0] === 'num' && $right[1] == 0 ) ) )
				|| ( $op === '^' && $right[0] === 'num' && ( $right[1] == 1 || $right[1] == 0 ) ) ) {
				return false;
			}
			return self::free_of_foldable( $left ) && self::free_of_foldable( $right );
		}
		if ( $op === 'neg' ) {
			return self::free_of_foldable( $tree[1] ); }
		if ( $op === 'fn' ) {
			foreach ( array_slice( $tree, 2 ) as $argument ) {
				if ( ! self::free_of_foldable( $argument ) ) {
					return false; }
			}
			return true;
		}
		return true;
	}

	private static function gcd( $a, $b ) {
		$a = abs( $a );
		$b = abs( $b );
		while ( $b ) {
			list( $a, $b ) = array( $b, $a % $b ); }
		return $a ?: 1;
	}
}
