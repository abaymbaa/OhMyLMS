<?php
namespace OMLMS\Utility;
/** Compatibility facade only; bundled features do not require a vendor license. */
final class Licensing {
 public static function is_license_valid() { return true; }
 public static function get_license_data() { return ['status'=>'valid', 'license_status'=>'valid', 'plan'=>'bundled']; }
}
