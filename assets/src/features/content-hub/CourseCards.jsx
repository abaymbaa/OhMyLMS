import { createElement, useEffect, useRef, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, Notice, Spinner, TextControl } from '@wordpress/components';
import { AdminPage } from '../../extensions/AdminPage';
import { listCourses } from './api.mjs';
import { catalogPath } from './hubRoutes.mjs';

const modeLabel = (mode) =>
  ({
    'skill-based': __('Skill-based', 'ohmylms'),
    blended: __('Blended', 'ohmylms'),
    traditional: __('Traditional', 'ohmylms'),
  })[mode] || mode;

/** Every grade, exam or subject, as cards to open in the catalog. */
export function CourseCards() {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const latest = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(input);
      setPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    const id = ++latest.current;
    listCourses({ search, page, per_page: 24 })
      .then((response) => {
        if (id === latest.current) {
          setData(response);
          setError('');
        }
      })
      .catch((cause) => {
        if (id === latest.current)
          setError(cause.message || __('Could not load courses.', 'ohmylms'));
      });
  }, [search, page]);

  return (
    <AdminPage
      className="ohmylms-catalog-home"
      headingLevel={2}
      title={__('Grades, exams and subjects', 'ohmylms')}
      description={__(
        'Open one to arrange its chapters and skills and attach lessons, quizzes and assessments. Use Add → Course to create another.',
        'ohmylms',
      )}
    >
      {error && (
        <Notice status="error" onRemove={() => setError('')}>
          {error}
        </Notice>
      )}
      <div className="ohmylms-ext-toolbar">
        <TextControl
          label={__('Search courses', 'ohmylms')}
          type="search"
          value={input}
          onChange={setInput}
          __nextHasNoMarginBottom
        />
      </div>
      {!data ? (
        <Spinner />
      ) : !data.items.length ? (
        <p className="ohmylms-ext-muted">
          {search
            ? __('No courses match your search.', 'ohmylms')
            : __(
                'No courses yet. Use Add → Course to create your first grade, exam or subject.',
                'ohmylms',
              )}
        </p>
      ) : (
        <ul className="ohmylms-catalog-cards">
          {data.items.map((course) => (
            <li key={course.id} className="ohmylms-catalog-card">
              <h3>
                <a href={`#${catalogPath(course.id)}`}>{course.title || `#${course.id}`}</a>
              </h3>
              <p className="ohmylms-catalog-card-flags">
                <span
                  className={`ohmylms-catalog-flag${course.status === 'publish' ? ' is-ok' : ''}`}
                >
                  {course.status === 'publish'
                    ? __('Published', 'ohmylms')
                    : __('Draft', 'ohmylms')}
                </span>
                <span className="ohmylms-catalog-flag">{modeLabel(course.mode)}</span>
                {!course.published && (
                  <span className="ohmylms-catalog-flag is-warning">
                    {__('Catalog not published', 'ohmylms')}
                  </span>
                )}
              </p>
              <p className="ohmylms-ext-muted">
                {sprintf(
                  _n('%d chapter', '%d chapters', course.chapters, 'ohmylms'),
                  course.chapters,
                )}{' '}
                · {sprintf(_n('%d skill', '%d skills', course.skills, 'ohmylms'), course.skills)} ·{' '}
                {sprintf(
                  _n('%d attachment', '%d attachments', course.attachments, 'ohmylms'),
                  course.attachments,
                )}
              </p>
            </li>
          ))}
        </ul>
      )}
      {data && data.pages > 1 && (
        <nav className="ohmylms-hub-pager" aria-label={__('Course pages', 'ohmylms')}>
          <Button variant="secondary" disabled={page <= 1} onClick={() => setPage(page - 1)}>
            {__('Previous', 'ohmylms')}
          </Button>
          <span>{sprintf(__('Page %1$d of %2$d', 'ohmylms'), page, data.pages)}</span>
          <Button
            variant="secondary"
            disabled={page >= data.pages}
            onClick={() => setPage(page + 1)}
          >
            {__('Next', 'ohmylms')}
          </Button>
        </nav>
      )}
    </AdminPage>
  );
}
