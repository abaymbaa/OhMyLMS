import { createElement, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { AddMenu } from './AddMenu';
import { HubContext } from './context';
import { HUB_TABS } from './hubRoutes.mjs';

const tabLabels = () => ({
  catalog: __('Catalog', 'ohmylms'),
  courses: __('Courses', 'ohmylms'),
  lessons: __('Lessons', 'ohmylms'),
  skills: __('Skills', 'ohmylms'),
});

function menuLink() {
  return document.querySelector('#toplevel_page_ohmylms a[href$="#/content-hub"]')?.parentElement;
}

/**
 * Keep the Content Hub submenu entry highlighted. The recovered application clears the highlight
 * on every render of its own screens, so a mutation observer puts it back instead of a one-off effect.
 */
export function useContentHubMenu() {
  useEffect(() => {
    const apply = () => {
      const item = menuLink();
      if (!item) return;
      item
        .closest('.wp-submenu')
        ?.querySelectorAll('li.current')
        .forEach((current) => current.classList.remove('current'));
      item.classList.add('current');
    };
    apply();
    const menu = document.querySelector('#adminmenu');
    if (!menu || !window.MutationObserver) return undefined;
    const observer = new window.MutationObserver(() => {
      if (!menuLink()?.classList.contains('current')) apply();
    });
    observer.observe(menu, { subtree: true, attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
}

/** Frame shared by every hub tab: title, the Add menu and the section tabs. */
export function ContentHubFrame({ active, children }) {
  useContentHubMenu();
  const labels = tabLabels();
  return (
    <section className="ohmylms-content-hub">
      <header className="ohmylms-content-hub-header">
        <div>
          <h1>{__('Content Hub', 'ohmylms')}</h1>
          <p>
            {__(
              'Build grades, exams and subjects from chapters and skills, then attach lessons, quizzes and assessments.',
              'ohmylms',
            )}
          </p>
        </div>
        <AddMenu />
      </header>
      <nav className="ohmylms-content-hub-nav" aria-label={__('Content Hub sections', 'ohmylms')}>
        {HUB_TABS.map((tab) => (
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
      <HubContext.Provider value={{ active }}>{children}</HubContext.Provider>
    </section>
  );
}

/** Wrap an existing screen as a hub tab. */
export function contentHubScreen(Component, active) {
  function ContentHubScreen(props) {
    return (
      <ContentHubFrame active={active}>
        <Component {...props} />
      </ContentHubFrame>
    );
  }
  ContentHubScreen.displayName = `ContentHub(${active})`;
  return ContentHubScreen;
}

/** Wrap a core screen that is opened from the hub (course editor, lesson editor, reports). */
export function withContentHubMenu(Component) {
  function WithContentHubMenu(props) {
    useContentHubMenu();
    return <Component {...props} />;
  }
  WithContentHubMenu.displayName = `WithContentHubMenu(${Component.displayName || Component.name || 'Screen'})`;
  return WithContentHubMenu;
}
