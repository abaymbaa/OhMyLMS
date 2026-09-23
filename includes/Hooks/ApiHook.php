<?php
/**
 * Hook for Api
 *
 * @package    CreatorLmsPro
 * @subpackage CreatorLmsPro/includes
 */
namespace OMLMS\Hooks;

class ApiHook
{
    public function register_hooks(){
       add_filter('creator_lms_rest_v1_controllers', array( $this, 'add_pro_controllers' ), 10 );
    }

    /**
     * Add pro controller
     */
    public function add_pro_controllers( $controllers ){
        $pro_controllers = array(
			\OMLMS\Rest\V1\MembershipController::class,
			\OMLMS\Rest\V1\AssignmentController::class,
			\OMLMS\Rest\V1\DashboardProController::class,
			\OMLMS\Rest\V1\StudentProController::class,
			\OMLMS\Rest\V1\AIController::class,
			\OMLMS\Rest\V1\PluginInstallerController::class,
			\OMLMS\Rest\V1\SessionController::class,
			\OMLMS\Rest\V1\EngagementController::class,
        );
        
        if( defined('MAILMINT') ){
            array_push($pro_controllers,\OMLMS\Rest\V1\MailMintAutomationController::class);
        }

        $controllers = array_merge( $controllers, $pro_controllers );
        return array_values(array_unique($controllers));
    }
}
?>