<?php
namespace OhMyLMS\Extensions;

final class Bootstrap {
    public static function init() {
        QuestionTypes::register_defaults();
QuestionTypes::register_math();
Activities::register_defaults();
        foreach (['text','audio','video'] as $type) Registry::register('lesson',$type,[
            'label'=>ucfirst($type),'render'=>static function(){ the_content(); },'editor'=>['format'=>'wordpress-content'],
        ]);
        do_action('ohmylms_register_extensions');
        add_filter('ohmylms_supported_question_types',static function(){return array_keys(Registry::all('question'));},100);
        add_filter('ohmylms_lesson_types',static function(){return array_keys(Registry::all('lesson'));},100);
        add_shortcode('ohmylms_activity',[__CLASS__,'activity']);
        register_block_type('ohmylms/activity',[
            'api_version'=>2,
            'attributes'=>['type'=>['type'=>'string','default'=>''],'data'=>['type'=>'string','default'=>'{}']],
            'render_callback'=>[__CLASS__,'activity'],
        ]);
        add_action('enqueue_block_editor_assets',static function(){
            wp_enqueue_script('ohmylms-activity-editor',plugins_url('assets/extensions/activity-editor.js',OHMYLMS_FILE),['wp-blocks','wp-element','wp-components','wp-block-editor'],OHMYLMS_VERSION,true);
            wp_localize_script('ohmylms-activity-editor','ohmylmsActivities',array_map(static function($d){return ['label'=>$d['label']];},Registry::all('activity')));
        });
        add_action('rest_api_init',static function(){
            register_rest_route('ohmylms/v1','/extensions',[
                'methods'=>'GET','permission_callback'=>static function(){return current_user_can('edit_posts');},
                'callback'=>static function(){return rest_ensure_response(array_merge(Registry::manifest(), ['apiVersion'=>1,'settings'=>Settings::manifest()]));},
            ]);
        });
        Editor::init();
        add_action('ohmylms_lesson_completed',static function($lesson,$course,$student){do_action('ohmylms_lesson_completed_event',['lesson_id'=>(int)$lesson,'course_id'=>(int)$course,'student_id'=>(int)$student]);},10,3);
        add_action('ohmylms_course_completed',static function($student,$course,$order){do_action('ohmylms_course_completed_event',['student_id'=>(int)$student,'course_id'=>(int)$course,'order_id'=>(int)$order]);},10,3);
    }
    public static function activity($attributes, $content='') {
        $definition=Registry::get('activity',$attributes['type'] ?? '');
        if (!$definition) return '';
        // Shortcodes may carry plain attributes (prompt="..." answer="...") instead of a JSON data blob.
        $data=isset($attributes['data']) ? json_decode($attributes['data'],true) : array_diff_key((array)$attributes,['type'=>1]);
        if (!is_array($data)) return '';
        ob_start(); call_user_func($definition['render'],$data); return ob_get_clean();
    }
    public static function lesson($lesson) {
        $definition=Registry::get('lesson',$lesson->get_type());
        if ($definition) call_user_func($definition['render'],$lesson); else the_content();
    }
}
