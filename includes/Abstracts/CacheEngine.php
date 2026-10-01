<?php

namespace OhMyLMS\Abstracts;

defined( 'ABSPATH' ) || exit();

abstract class CacheEngine {

	public $cache_group = 'ohmylms';

	public $key;

	public function set() {}

	public function get() {}

	public function clear() {}
}
