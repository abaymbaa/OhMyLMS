<?php
namespace OhMyLMS\Assessment;

defined('ABSPATH') || exit;

/** Carries a WP_Error out of a transaction closure so the transaction rolls back. */
final class ErrorException extends \RuntimeException {
    public $error;

    public function __construct(\WP_Error $error) {
        parent::__construct($error->get_error_message());
        $this->error = $error;
    }

    public static function raise($value) {
        if (is_wp_error($value)) { throw new self($value); }
        return $value;
    }
}
