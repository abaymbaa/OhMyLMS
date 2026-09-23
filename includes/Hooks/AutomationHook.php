<?php
/**
 * Automation hook for CreatorLMS connector registration
 *
 * @package    CreatorLmsPro
 * @subpackage OMLMS\Hooks
 */

namespace OMLMS\Hooks;

/**
 * Class AutomationHook
 *
 * Registers CreatorLMS automation connector to MRM.
 */
class AutomationHook {

	/**
	 * Register all automation-related hooks.
	 *
	 * @return void
	 */
	public function register_hooks() {
		add_filter( 'mrm_automation_connectors', array( $this, 'omlms_automation_connectors' ), 10, 1 );
	}

	/**
	 * Add CreatorLMS connector to the list of MRM automation connectors.
	 *
	 * @param array $connectors List of existing connectors.
	 * @return array Updated list with CreatorLMS connector.
	 */
	public function omlms_automation_connectors( $connectors ) {
		$connectors['ohmylms'] = array(
			'class_name' => 'OMLMS\\Automation\\ConnectorCreatorLms',
		);

		return $connectors;
	}
}
