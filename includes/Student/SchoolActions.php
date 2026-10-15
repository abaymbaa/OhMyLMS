<?php // phpcs:ignore WordPress.Files.FileName -- Preserve the Composer PSR-4 class/file mapping.
/**
 * Native school administration forms with nonce checks and fixed return destinations.
 *
 * @package OhMyLMS
 */

namespace OhMyLMS\Student;

use OhMyLMS\Schools\Access;
use OhMyLMS\Schools\Service;

defined( 'ABSPATH' ) || exit;

/** Every operation is authorized by the school services against the signed-in user. */
final class SchoolActions {

	const ACTION = 'ohmylms_school_admin';
	const FLASH  = 'ohmylms_school_admin_flash_';

	/** Register the signed-in form handler. */
	public static function init() {
		add_action( 'admin_post_' . self::ACTION, array( __CLASS__, 'handle' ) );
	}

	/**
	 * Hidden fields for a school operation.
	 *
	 * @param string $operation Operation name.
	 * @param int    $school_id School ID.
	 * @param string $section Section to return to.
	 */
	public static function fields( $operation, $school_id, $section ) {
		echo '<input type="hidden" name="action" value="' . esc_attr( self::ACTION ) . '">';
		echo '<input type="hidden" name="operation" value="' . esc_attr( $operation ) . '">';
		echo '<input type="hidden" name="school_id" value="' . esc_attr( $school_id ) . '">';
		echo '<input type="hidden" name="return_section" value="' . esc_attr( $section ) . '">';
		wp_nonce_field( self::ACTION . '_' . $operation );
	}

	/**
	 * Apply an operation as the signed-in user; callable by integration tests.
	 *
	 * @param string $operation Operation name.
	 * @param int    $school_id School ID (ignored when creating a school).
	 * @param array  $data Scalar form fields.
	 * @return array Flash data.
	 * @throws \RuntimeException For an unknown operation or an unauthorized request.
	 */
	public static function apply( $operation, $school_id, array $data ) {
		if ( 'create_school' === $operation ) {
			// A teacher may create their own school and becomes its administrator.
			$created = Service::create_school( $data );
			return array(
				'message'   => __( 'School created. Add an academic year, then invite teachers and students.', 'ohmylms' ),
				'school_id' => (int) $created['id'],
			);
		}
		Access::require_access( SchoolWorkspace::available() );
		$school_id = absint( $school_id );
		switch ( $operation ) {
			case 'update_school':
				Service::update_school( $school_id, $data );
				return array( 'message' => __( 'School details saved.', 'ohmylms' ) );
			case 'remove_member':
				Service::need( 'yes' === ( $data['confirm'] ?? '' ), 'Confirm removing this person from the school.' );
				Service::remove_member( $school_id, absint( $data['member_id'] ?? 0 ) );
				return array( 'message' => __( 'Person removed from the school. Their account and history were kept.', 'ohmylms' ) );
			case 'create_year':
				Service::create_year( $school_id, $data );
				return array( 'message' => __( 'Academic year created.', 'ohmylms' ) );
			case 'create_class':
				Service::create_class( $school_id, $data );
				return array( 'message' => __( 'Class created.', 'ohmylms' ) );
			case 'archive_class':
				Service::need( 'yes' === ( $data['confirm'] ?? '' ), 'Confirm archiving this class.' );
				$class = Service::row( 'classes', absint( $data['class_id'] ?? 0 ) );
				Access::require_access( $class && (int) $class['school_id'] === $school_id );
				Service::archive_class( (int) $class['id'] );
				return array( 'message' => __( 'Class archived. Its roster and records were kept.', 'ohmylms' ) );
			case 'create_student':
				$created = Service::create_student( $school_id, $data );
				return array(
					'message' => sprintf(
						/* translators: %s: new student's sign-in name. */
						__( 'Student created. Their sign-in name is %s. Create an activation invitation so they can choose a password.', 'ohmylms' ),
						$created['username']
					),
				);
			case 'invite':
				$invite = Service::invite( $school_id, $data );
				return array(
					'message'    => __( 'Private invitation created. Share this link only with the recipient within 48 hours. No email was sent.', 'ohmylms' ),
					'invite_url' => $invite['url'],
				);
			case 'revoke_invite':
				Service::revoke_invite( $school_id, absint( $data['invitation_id'] ?? 0 ) );
				return array( 'message' => __( 'Invitation revoked.', 'ohmylms' ) );
			case 'revoke_guardian':
				Service::need( 'yes' === ( $data['confirm'] ?? '' ), 'Confirm removing this parent link.' );
				Service::revoke_guardian( $school_id, absint( $data['guardian_link_id'] ?? 0 ) );
				return array( 'message' => __( 'Parent link removed.', 'ohmylms' ) );
		}
		throw new \RuntimeException( 'Unknown operation.', 400 );
	}

	/**
	 * Handle a form post and return to the workspace section with a one-time result.
	 *
	 * @throws \RuntimeException Caught locally and shown as a safe message.
	 */
	public static function handle() {
		$operation = isset( $_POST['operation'] ) && is_string( $_POST['operation'] ) ? sanitize_key( wp_unslash( $_POST['operation'] ) ) : '';
		check_admin_referer( self::ACTION . '_' . $operation );
		$school_id = isset( $_POST['school_id'] ) ? absint( $_POST['school_id'] ) : 0;
		$section   = isset( $_POST['return_section'] ) && is_string( $_POST['return_section'] ) ? sanitize_key( wp_unslash( $_POST['return_section'] ) ) : 'school-overview';
		$section   = in_array( $section, array( 'school-overview', 'school-classes', 'school-people', 'school-invites', 'school-settings' ), true ) ? $section : 'school-overview';
		try {
			if ( 'POST' !== sanitize_text_field( wp_unslash( $_SERVER['REQUEST_METHOD'] ?? '' ) ) ) {
				throw new \RuntimeException( 'Invalid request.', 400 );
			}
			$data = array();
			foreach ( array( 'name', 'timezone', 'member_id', 'label', 'starts_at', 'ends_at', 'subject', 'grade', 'academic_year_id', 'class_id', 'external_student_id', 'role', 'email', 'student_user_id', 'invitation_id', 'guardian_link_id', 'confirm' ) as $key ) {
				$data[ $key ] = isset( $_POST[ $key ] ) && is_string( $_POST[ $key ] ) ? sanitize_text_field( wp_unslash( $_POST[ $key ] ) ) : '';
			}
			$flash = self::apply( $operation, $school_id, $data );
			if ( ! empty( $flash['school_id'] ) ) {
				$school_id = (int) $flash['school_id'];
			}
		} catch ( \Throwable $error ) {
			$flash = array( 'error' => in_array( $error->getCode(), array( 400, 403, 409 ), true ) ? $error->getMessage() : __( 'Unable to complete this request.', 'ohmylms' ) );
		}
		set_transient( self::FLASH . get_current_user_id(), $flash, MINUTE_IN_SECONDS );
		wp_safe_redirect( SchoolWorkspace::url( $section, '', $school_id ) );
		exit;
	}

	/**
	 * One-time result of the last action for this user.
	 *
	 * @return array|null
	 */
	public static function flash() {
		$key  = self::FLASH . get_current_user_id();
		$data = get_transient( $key );
		if ( false === $data ) {
			return null;
		}
		delete_transient( $key );
		return is_array( $data ) ? $data : null;
	}
}
