<?php
/**
 * Hook for Api
 *
 * @package    OhMyLMSPro
 * @subpackage OhMyLMSPro/includes
 */
namespace OhMyLMS\Hooks;

class ApiHook
{
    public function register_hooks(){
       add_filter('ohmylms_rest_v1_controllers', array( $this, 'add_pro_controllers' ), 10 );
    }

    /**
     * Add pro controller
     */
    public function add_pro_controllers( $controllers ){
        $pro_controllers = array(
			\OhMyLMS\Rest\V1\MembershipController::class,
			\OhMyLMS\Rest\V1\AssignmentController::class,
			\OhMyLMS\Rest\V1\DashboardProController::class,
			\OhMyLMS\Rest\V1\StudentProController::class,
			\OhMyLMS\Rest\V1\AIController::class,
			\OhMyLMS\Rest\V1\PluginInstallerController::class,
			\OhMyLMS\Rest\V1\SessionController::class,
			\OhMyLMS\Rest\V1\EngagementController::class,
        );
        
        if( defined('MAILMINT') ){
            array_push($pro_controllers,\OhMyLMS\Rest\V1\MailMintAutomationController::class);
        }

        $controllers = array_merge( $controllers, $pro_controllers );
        return array_values(array_unique($controllers));
    }
}
?>