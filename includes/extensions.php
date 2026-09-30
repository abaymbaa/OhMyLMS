<?php
defined('ABSPATH') || exit;
function ohmylms_register_layout($id,array $definition) { \OMLMS\Extensions\Registry::register('layout',$id,$definition); }
function ohmylms_register_question_type($id,array $definition) { \OMLMS\Extensions\Registry::register('question',$id,$definition); }
function ohmylms_register_lesson_type($id,array $definition) { \OMLMS\Extensions\Registry::register('lesson',$id,$definition); }
function ohmylms_register_activity($id,array $definition) { \OMLMS\Extensions\Registry::register('activity',$id,$definition); }
function ohmylms_register_extension_settings($id,array $definition) { \OMLMS\Extensions\Settings::register($id,$definition); }
function ohmylms_register_checkout_field($id,array $definition) { \OMLMS\Extensions\CheckoutFields::register($id,$definition); }
function ohmylms_render_slot($name,array $context=[]) { \OMLMS\Extensions\Slots::render($name,$context); }
function ohmylms_get_quiz($id) { return omlms_get_quiz($id); }
function ohmylms_get_course($id) { return omlms_get_course($id); }
function ohmylms_get_lesson($id) { return omlms_get_lesson($id); }
function ohmylms_get_question($id) { return omlms_get_question($id); }
add_action('init',['OMLMS\\Extensions\\Bootstrap','init'],5);
\OMLMS\Extensions\SourceAssets::init();
\OMLMS\Extensions\Settings::init();
\OMLMS\Extensions\CheckoutFields::init();
\OMLMS\Extensions\Slots::init();
\OMLMS\Extensions\Authoring::init();
\OMLMS\Schools\Bootstrap::init();
add_action('plugins_loaded', ['OMLMS\\Extensions\\Modules','load']);
