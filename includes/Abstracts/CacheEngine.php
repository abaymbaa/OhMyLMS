<?php // phpcs:ignore WordPress.Files.FileName -- Preserve the established Composer class/file mapping; see docs/CODING-STANDARDS.md.

namespace OhMyLMS\Abstracts;

defined( 'ABSPATH' ) || exit();

abstract class CacheEngine {

	public $cache_group = 'ohmylms';

	public $key;

	public function set() {}

	public function get() {}

	public function clear() {}
}
