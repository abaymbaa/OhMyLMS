import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export function PeopleTabs({ active = 'students', studentsUrl, canListUsers = true, onChange }) {
  const studentUrl =
    studentsUrl ||
    `admin.php?page=${new URLSearchParams(window.location.search).get('page') || 'ohmylms'}#/accounthub`;
  return (
    <nav className="ohmylms-people-tabs" aria-label={__('Students and schools', 'ohmylms')}>
      {[
        ['students', __('Students', 'ohmylms')],
        ...(canListUsers
          ? [
              ['teachers', __('Teachers', 'ohmylms')],
              ['parents', __('Parents', 'ohmylms')],
              ['users', __('All accounts', 'ohmylms')],
            ]
          : []),
        ['classes', __('Classes', 'ohmylms')],
        ['schools', __('Schools', 'ohmylms')],
      ].map(([key, label]) => (
        <a
          key={key}
          aria-current={active === key ? 'page' : undefined}
          href={key === 'students' ? studentUrl : `${studentUrl}?tab=${key}`}
          onClick={
            onChange
              ? (event) => {
                  event.preventDefault();
                  onChange(key);
                }
              : undefined
          }
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
