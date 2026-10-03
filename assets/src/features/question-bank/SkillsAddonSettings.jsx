import { createElement } from '@wordpress/element';
import { Notice } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { SkillsPage } from './SkillsPage';

/** The existing catalogue lives in the Skills add-on's Manage screen. */
export function SkillsAddonSettings({ enabled }) {
  if (!enabled) {
    return (
      <Notice status="info" isDismissible={false}>
        {__('Enable the Skills add-on to manage learning skills. Your existing skills and links are preserved while it is disabled.', 'ohmylms')}
      </Notice>
    );
  }
  return <SkillsPage />;
}
