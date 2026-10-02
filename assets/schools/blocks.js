(function (wp) {
  const names = {
    'student-registration': 'OhMyLMS Student Registration',
    'teacher-registration': 'OhMyLMS Teacher Registration',
    'parent-registration': 'OhMyLMS Parent Registration',
    'sign-in': 'OhMyLMS Sign In',
    'school-dashboard': 'OhMyLMS School Dashboard',
    'teacher-dashboard': 'OhMyLMS Teacher Dashboard',
    'parent-dashboard': 'OhMyLMS Parent Dashboard',
    'student-assignments': 'OhMyLMS Student Assignments',
  };
  Object.entries(names).forEach(([name, title]) => {
    wp.blocks.registerBlockType('ohmylms/' + name, {
      apiVersion: 2,
      title: wp.i18n.__(title, 'ohmylms'),
      category: 'ohmylms',
      icon: 'welcome-learn-more',
      description: wp.i18n.__('School and family learning with private, account-specific access.', 'ohmylms'),
      edit: function () {
        const account = name.endsWith('-registration') || name === 'sign-in';
        const fields = name === 'sign-in' ? ['Email or username', 'Password'] : ['First name', 'Last name', 'Email', 'Password'];
        return wp.element.createElement('div', wp.blockEditor.useBlockProps({ className: 'ohmylms-school-preview', style: { padding: '24px', border: '1px solid #d9e2ef', borderRadius: '12px' } }),
          wp.element.createElement('strong', null, title),
          account ? wp.element.createElement('div', null,
            ...fields.map((label) => wp.element.createElement('p', { key: label }, wp.i18n.__(label, 'ohmylms'), wp.element.createElement('span', { 'aria-hidden': true, style: { display: 'block', height: '38px', marginTop: '6px', border: '1px solid #bdcadb', borderRadius: '6px', background: '#f8faff' } }))),
            wp.element.createElement('span', { style: { display: 'inline-block', padding: '10px 16px', borderRadius: '6px', color: '#fff', background: '#573bff' } }, wp.i18n.__(name === 'sign-in' ? 'Sign in' : 'Create account', 'ohmylms')),
            wp.element.createElement('p', null, wp.i18n.__('The live form appears on your published page.', 'ohmylms')))
            : wp.element.createElement('p', null, wp.i18n.__('Visitors see the dashboard allowed by their account. Student records are never shown in the editor preview.', 'ohmylms')));
      },
      save: function () { return null; },
    });
  });
})(window.wp);
