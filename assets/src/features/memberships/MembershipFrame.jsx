import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useMenuHighlight } from '../menuHighlight';
import { MEMBERSHIP_TABS } from './membershipRoutes.mjs';

/** Share Membership navigation across plans, commerce lists and their detail screens. */
export function membershipScreen(Screen, active) {
  function MembershipScreen(props) {
    useMenuHighlight('a[href$="#/memberships"]');
    const labels = {
      plans: __('Plans', 'ohmylms'),
      coupons: __('Coupons', 'ohmylms'),
      orders: __('Orders', 'ohmylms'),
      subscriptions: __('Subscriptions', 'ohmylms'),
    };
    return (
      <section className="ohmylms-membership">
        <header className="ohmylms-content-hub-header">
          <h1>{__('Membership', 'ohmylms')}</h1>
        </header>
        <nav className="ohmylms-content-hub-nav" aria-label={__('Membership sections', 'ohmylms')}>
          {MEMBERSHIP_TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.path}`}
              aria-current={active === tab.id ? 'page' : undefined}
              className={active === tab.id ? 'is-active' : undefined}
            >
              {labels[tab.id]}
            </a>
          ))}
        </nav>
        <Screen {...props} />
      </section>
    );
  }
  MembershipScreen.displayName = `Membership(${active})`;
  return MembershipScreen;
}
