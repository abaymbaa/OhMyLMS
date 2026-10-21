<?php
defined( 'ABSPATH' ) || exit;
function ohmylms_register_layout( $id, array $definition ) {
	\OhMyLMS\Extensions\Registry::register( 'layout', $id, $definition ); }
function ohmylms_register_question_type( $id, array $definition ) {
	\OhMyLMS\Extensions\Registry::register( 'question', $id, $definition ); }
function ohmylms_register_lesson_type( $id, array $definition ) {
	\OhMyLMS\Extensions\Registry::register( 'lesson', $id, $definition ); }
function ohmylms_register_activity( $id, array $definition ) {
	\OhMyLMS\Extensions\Registry::register( 'activity', $id, $definition ); }
function ohmylms_register_extension_settings( $id, array $definition ) {
	\OhMyLMS\Extensions\Settings::register( $id, $definition ); }
function ohmylms_register_checkout_field( $id, array $definition ) {
	\OhMyLMS\Extensions\CheckoutFields::register( $id, $definition ); }
function ohmylms_render_slot( $name, array $context = array() ) {
	\OhMyLMS\Extensions\Slots::render( $name, $context ); }
function ohmylms_enqueue_interactivity_module( $id ) {
	\OhMyLMS\Extensions\Interactivity::enqueue( $id ); }
add_action( 'init', array( 'OhMyLMS\\Extensions\\Bootstrap', 'init' ), 5 );
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
\OhMyLMS\XApi\Bootstrap::init();
\OhMyLMS\Assessment\MathLive::init();
\OhMyLMS\Engagement\StreakHooks::init();
\OhMyLMS\Engagement\XpHooks::init();
\OhMyLMS\Skills\Khan\Levels::init();
\OhMyLMS\Practice\Dashboard::init();
\OhMyLMS\Learning\Bootstrap::init();
\OhMyLMS\Learning\NativeLessonEditor::init();
\OhMyLMS\Blocks\QuizPlayerBlock::init();
\OhMyLMS\Blocks\InteractiveActivityBlock::init();
\OhMyLMS\Quiz\AnswerReview::init();
\OhMyLMS\Curriculum\Bootstrap::init();
\OhMyLMS\Design\Tokens::init();
\OhMyLMS\Design\DesignSystem::init();
\OhMyLMS\Schools\Bootstrap::init();
\OhMyLMS\Family\Bootstrap::init();
add_action( 'plugins_loaded', array( 'OhMyLMS\\Extensions\\Modules', 'load' ) );
/** The Quiz Player for a quiz, as HTML: the same player the block and [ohmylms_quiz] show, for themes and templates. */
function ohmylms_get_quiz_player( $quiz_id ) {
	return \OhMyLMS\Blocks\QuizPlayerBlock::shortcode( array( 'quiz' => $quiz_id ) ); }
/** The signed-in learner's score and answer review for a quiz, as HTML; empty when there is nothing to show. */
function ohmylms_get_quiz_review( $quiz_id ) {
	return \OhMyLMS\Quiz\AnswerReview::for_quiz( $quiz_id ); }
