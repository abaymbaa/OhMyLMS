<?php
/**
 * Hook for Quiz
 *
 * @package    OhMyLMSPro
 * @subpackage OhMyLMSPro/includes
 */
namespace OhMyLMS\Hooks;

class QuizHook
{
    public function register_hooks(){
        add_filter('ohmylms_quiz_type', array( $this, 'pro_quiz_type' ), 10 );
        add_filter('ohmylms_supported_question_types', array( $this, 'pro_question_types' ), 10 );
    }

    public function pro_quiz_type( $types ){
        $pro_types = [
            array(
                "type" => "fill-in-the-blank",
                "name" => "Long Text"
            ),
            array(
                "type" => "statement",
                "name" => "Statement"
            ),
        ];
        $types = array_merge( $types, $pro_types );
        return $types;
    }
    
    public function pro_question_types( $types ){
        array_push($types, "fill-in-the-blank", "statement");
        return $types;
    }
}
?>