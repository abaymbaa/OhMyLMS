(function (wp) {
  const names = {
    'student-registration': 'OhMyLMS Student Registration',
    'parent-registration': 'OhMyLMS Parent Registration',
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
        return wp.element.createElement('div', { className: 'ohmylms-school-preview', style: { padding: '24px', border: '1px solid #d9e2ef', borderRadius: '12px' } },
          wp.element.createElement('strong', null, title),
          wp.element.createElement('p', null, wp.i18n.__('Visitors see the form or dashboard allowed by their account. Student records are never shown in the editor preview.', 'ohmylms')));
      },
      save: function () { return null; },
    });
  });
})(window.wp);
