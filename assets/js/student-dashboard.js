(() => {
  document.querySelectorAll('.oml-student-dashboard').forEach((dashboard) => {
    const tabs = [...dashboard.querySelectorAll('[role="tab"]')];
    const activate = (tab) => {
      tabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        dashboard.querySelector(`#${item.getAttribute('aria-controls')}`).hidden = !selected;
      });
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', (event) => {
        let target;
        if (event.key === 'ArrowRight') target = tabs[(index + 1) % tabs.length];
        if (event.key === 'ArrowLeft') target = tabs[(index + tabs.length - 1) % tabs.length];
        if (event.key === 'Home') target = tabs[0];
        if (event.key === 'End') target = tabs[tabs.length - 1];
        if (target) {
          event.preventDefault();
          activate(target);
          target.focus();
        }
      });
    });
    const buttons = [...dashboard.querySelectorAll('[data-select-theme]')];
    buttons.forEach((button) =>
      button.addEventListener('click', async () => {
        const oldTheme = dashboard.dataset.dashboardTheme;
        const theme = button.dataset.selectTheme;
        const message = dashboard.querySelector('[data-theme-message]');
        dashboard.dataset.dashboardTheme = theme;
        buttons.forEach((item) => {
          item.disabled = true;
          item.setAttribute('aria-pressed', String(item === button));
        });
        message.textContent = '';
        try {
          const response = await fetch(dashboard.dataset.themeEndpoint, {
            method: 'PUT',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': dashboard.dataset.nonce },
            body: JSON.stringify({ theme }),
          });
          if (!response.ok) throw new Error('save');
          message.textContent = dashboard.dataset.saveSuccess;
        } catch {
          dashboard.dataset.dashboardTheme = oldTheme;
          buttons.forEach((item) =>
            item.setAttribute('aria-pressed', String(item.dataset.selectTheme === oldTheme)),
          );
          message.textContent = dashboard.dataset.saveError;
        } finally {
          buttons.forEach((item) => {
            item.disabled = false;
          });
        }
      }),
    );
  });
})();
