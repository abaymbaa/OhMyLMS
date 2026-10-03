import { createElement, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const sections = [
  ['quizzes', '/assessments', 'Quizzes'],
  ['question-bank', '/assessments/question-bank', 'Question Bank'],
  ['assignments', '/assessments/assignments', 'Assignments'],
];

/** Admin navigation around the existing assessment screens. */
export function assessmentScreen(Component, active) {
  return function AssessmentsScreen(props) {
    useEffect(() => {
      const menu = document.querySelector('#toplevel_page_ohmylms');
      if (!menu) return;
      menu.querySelectorAll('.wp-submenu li.current').forEach((item) => item.classList.remove('current'));
      menu.querySelector('a[href$="#/assessments"]')?.parentElement.classList.add('current');
    }, []);
    return (
      <section className="ohmylms-assessments">
        <h1 className="ohmylms-assessments-heading">{__('Assessments', 'ohmylms')}</h1>
        <nav className="ohmylms-assessments-nav" aria-label={__('Assessment sections', 'ohmylms')}>
          {sections.map(([id, path, label]) => (
            <a key={id} href={`#${path}`} aria-current={active === id ? 'page' : undefined}
              style={{ padding: '12px 0', textDecoration: 'none', fontWeight: active === id ? 600 : 400, borderBottom: active === id ? '3px solid var(--ohmylms-primary-color, #6e42d3)' : '3px solid transparent' }}>
              {__(label, 'ohmylms')}
            </a>
          ))}
        </nav>
        <Component {...props} />
      </section>
    );
  };
}

export function assessmentsRoutes(routes, QuestionBankPage) {
  const quizzes = routes.find((route) => route.path === '/quizzes');
  const assignments = routes.find((route) => route.path === '/assignments');
  return [
    ...(quizzes ? [{ path: '/assessments', element: assessmentScreen(quizzes.element, 'quizzes') }] : []),
    { path: '/assessments/question-bank', element: assessmentScreen(QuestionBankPage, 'question-bank') },
    ...(assignments ? [{ path: '/assessments/assignments', element: assessmentScreen(assignments.element, 'assignments') }] : []),
  ];
}
