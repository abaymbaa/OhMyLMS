<?php
namespace OhMyLMS\ProfileBuilder;

defined( 'ABSPATH' ) || exit;

final class Bootstrap {
	public static function init() {
		Layouts::init();
	}
}
