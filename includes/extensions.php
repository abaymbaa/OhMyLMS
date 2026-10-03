<?php
defined('ABSPATH') || exit;
function ohmylms_register_layout($id,array $definition) { \OhMyLMS\Extensions\Registry::register('layout',$id,$definition); }
function ohmylms_register_question_type($id,array $definition) { \OhMyLMS\Extensions\Registry::register('question',$id,$definition); }
function ohmylms_register_lesson_type($id,array $definition) { \OhMyLMS\Extensions\Registry::register('lesson',$id,$definition); }
function ohmylms_register_activity($id,array $definition) { \OhMyLMS\Extensions\Registry::register('activity',$id,$definition); }
function ohmylms_register_extension_settings($id,array $definition) { \OhMyLMS\Extensions\Settings::register($id,$definition); }
function ohmylms_register_checkout_field($id,array $definition) { \OhMyLMS\Extensions\CheckoutFields::register($id,$definition); }
function ohmylms_render_slot($name,array $context=[]) { \OhMyLMS\Extensions\Slots::render($name,$context); }
function ohmylms_enqueue_interactivity_module($id) { \OhMyLMS\Extensions\Interactivity::enqueue($id); }
add_action('init',['OhMyLMS\\Extensions\\Bootstrap','init'],5);
\OhMyLMS\Extensions\SourceAssets::init();
\OhMyLMS\Extensions\Interactivity::init();
\OhMyLMS\Extensions\Settings::init();
\OhMyLMS\Extensions\CheckoutFields::init();
\OhMyLMS\Extensions\Slots::init();
\OhMyLMS\Extensions\Authoring::init();
\OhMyLMS\Schools\Bootstrap::init();
\OhMyLMS\Extensions\Addons::init();
\OhMyLMS\Extensions\Slots::init();
\OhMyLMS\Extensions\Authoring::init();
\OhMyLMS\Assessment\Bootstrap::init();
\OhMyLMS\Design\Tokens::init();
\OhMyLMS\Schools\Bootstrap::init();
add_action('plugins_loaded', ['OhMyLMS\\Extensions\\Modules','load']);
