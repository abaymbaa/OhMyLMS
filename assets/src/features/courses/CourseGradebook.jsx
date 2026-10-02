import { createElement, Fragment, useEffect, useState } from '@wordpress/element';
import { Modal, Button, Notice } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { exportCsv } from '../schools/api.mjs';

const t = (text) => __(text, 'ohmylms');
const percent = (value) =>
  value === null || value === undefined ? '—' : `${Number(value).toFixed(1)}%`;
const cellStyle = {
  padding: '12px',
  borderBottom: '1px solid #dcdcde',
  textAlign: 'left',
  whiteSpace: 'nowrap',
};

export function CourseGradebook({ courseId, onClose }) {
  const [data, setData] = useState(null);
  const [classes, setClasses] = useState([]);
  const [revision, setRevision] = useState(0);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [selected, setSelected] = useState('');
  const [enroll, setEnroll] = useState(true);
  const [expanded, setExpanded] = useState({});
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(null);
  const [remove, setRemove] = useState(null);
  const path = `/ohmylms/v1/courses/${courseId}/gradebook`;
  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    Promise.all([window.wp.apiFetch({ path }), window.wp.apiFetch({ path: `${path}/classes` })])
      .then(
        ([book, available]) => {
          if (active) {
            setData(book);
            setClasses(available);
          }
        },
        (failure) => {
          if (active) setError(failure.message);
        },
      )
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [path, revision]);
  async function mutate(suffix, method, payload, success) {
    setBusy(true);
    setError('');
    setMessage('');
    try {
      const result = await window.wp.apiFetch({ path: path + suffix, method, data: payload });
      setMessage(typeof success === 'function' ? success(result) : success);
      setRevision((value) => value + 1);
      return true;
    } catch (failure) {
      setError(failure.message);
      return false;
    } finally {
      setBusy(false);
    }
  }
  const match = (student) =>
    `${student.name} ${student.email}`.toLowerCase().includes(search.toLowerCase());
  const studentRow = (student, nested = false) => (
    <tr key={`student-${student.id}`} style={{ background: nested ? '#fafbfc' : 'white' }}>
      <th scope="row" style={{ ...cellStyle, paddingLeft: nested ? 40 : 12, fontWeight: 500 }}>
        {student.name}
        <small style={{ display: 'block', color: '#646970' }}>{student.email}</small>
      </th>
      {data.items.map((item) => {
        const cell = student.cells[item.id];
        return (
          <td key={item.id} style={cellStyle}>
            <Button
              variant="tertiary"
              disabled={busy || loading || item.max <= 0}
              onClick={() =>
                setEditing({
                  student,
                  item,
                  score: cell.score ?? '',
                  note: cell.note || '',
                  manual: cell.status === 'manual',
                })
              }
              aria-label={`${t('Edit grade')}: ${student.name}, ${item.title}`}
            >
              {cell.score === null
                ? cell.status === 'pending'
                  ? t('Pending')
                  : '—'
                : `${Number(cell.score)} / ${Number(cell.max)}`}
              {cell.status === 'manual' ? ' *' : ''}
            </Button>
          </td>
        );
      })}
      <td style={cellStyle}>
        <strong>{percent(student.total.percent)}</strong>
        <small style={{ display: 'block' }}>
          {student.total.graded}/{data.items.length} {t('graded')}
        </small>
      </td>
    </tr>
  );
  function download() {
    const rows = [];
    const add = (student, className) =>
      rows.push({
        Class: className,
        Student: student.name,
        Email: student.email,
        ...Object.fromEntries(
          data.items.map((item) => [
            `${item.title} (#${item.id})`,
            student.cells[item.id].score === null
              ? ''
              : `${student.cells[item.id].score}/${student.cells[item.id].max}`,
          ]),
        ),
        'Grade (%)': student.total.percent ?? '',
      });
    data.classes.forEach((group) => group.students.forEach((student) => add(student, group.name)));
    data.students.forEach((student) => add(student, ''));
    const url = URL.createObjectURL(
      new Blob(['\uFEFF' + exportCsv(rows)], { type: 'text/csv;charset=utf-8' }),
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = `course-${courseId}-gradebook.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <Modal
      title={data ? `${data.course.name} — ${t('Gradebook')}` : t('Course gradebook')}
      isFullScreen
      onRequestClose={() => !busy && onClose()}
    >
      {error && (
        <Notice status="error" isDismissible={false}>
          {error} <Button onClick={() => setRevision((v) => v + 1)}>{t('Retry')}</Button>
        </Notice>
      )}
      {message && (
        <Notice status="success" isDismissible onRemove={() => setMessage('')}>
          {message}
        </Notice>
      )}
      {loading && <p role="status">{t('Loading gradebook…')}</p>}
      {data && (
        <>
          <p>
            {data.student_count} {t('students')} · {data.classes.length} {t('classes')} ·{' '}
            {t('Course average')}: <strong>{percent(data.average)}</strong>
          </p>
          <p>
            {t(
              'Expand a class to see its nested gradebook. Class grades are averages of student percentages. Student totals use the latest graded attempts; pending and missing work are excluded.',
            )}
          </p>
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              if (
                await mutate(
                  '/classes',
                  'POST',
                  { class: Number(selected), enroll },
                  (result) =>
                    `${t('Class added')}. ${result.included} ${t('students grouped')}, ${result.enrolled} ${t('new enrollments')}, ${result.skipped} ${t('skipped')}.`,
                )
              ) {
                setExpanded((value) => ({ ...value, [selected]: true }));
                setSelected('');
              }
            }}
            style={{
              display: 'flex',
              gap: 16,
              alignItems: 'center',
              flexWrap: 'wrap',
              padding: 16,
              background: '#f0f6fc',
              marginBottom: 20,
            }}
          >
            <label>
              {t('Add class to course')}{' '}
              <select
                value={selected}
                disabled={busy || loading}
                onChange={(event) => setSelected(event.target.value)}
                required
              >
                <option value="">{t('Choose a class…')}</option>
                {classes
                  .filter((c) => !Number(c.attached))
                  .map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                      {c.school_name ? ` — ${c.school_name}` : ` — ${t('Independent')}`}
                    </option>
                  ))}
              </select>
            </label>
            <label>
              <input
                type="checkbox"
                checked={enroll}
                disabled={busy}
                onChange={(event) => setEnroll(event.target.checked)}
              />{' '}
              {t('Enroll current students who do not have course access')}
            </label>
            <Button type="submit" variant="primary" disabled={!selected || busy || loading}>
              {t('Add class')}
            </Button>
          </form>
          <p>
            {t(
              'A class occupies one row. Adding it keeps individual student accounts and grades. Sync adds current class members; previously grouped students keep their grade history. Blocked or cancelled enrollments are skipped.',
            )}
          </p>
          <div
            style={{ display: 'flex', gap: 16, justifyContent: 'space-between', marginBottom: 16 }}
          >
            <label>
              {t('Search students or classes')}{' '}
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
            <Button
              variant="secondary"
              onClick={download}
              disabled={!data.student_count || loading}
            >
              {t('Export CSV')}
            </Button>
          </div>
          {!data.items.length && (
            <Notice status="info" isDismissible={false}>
              {t('Add quizzes or assignments to the course curriculum to create grade columns.')}
            </Notice>
          )}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 600 }}>
              <caption style={{ textAlign: 'left', margin: '12px 0' }}>
                {t('Course gradebook — classes and individual students')}
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={cellStyle}>
                    {t('Class / student')}
                  </th>
                  {data.items.map((item) => (
                    <th scope="col" key={item.id} style={cellStyle}>
                      {item.title}
                      <small style={{ display: 'block', fontWeight: 400 }}>
                        {t(item.type === 'quiz' ? 'Quiz' : 'Assignment')} · {item.max} {t('points')}
                      </small>
                    </th>
                  ))}
                  <th scope="col" style={cellStyle}>
                    {t('Grade')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.classes.map((group) => {
                  const groupMatch = group.name.toLowerCase().includes(search.toLowerCase());
                  const students = group.students.filter((student) => groupMatch || match(student));
                  if (!groupMatch && !students.length) return null;
                  const open = Boolean(expanded[group.id] || search);
                  return (
                    <Fragment key={`class-${group.id}`}>
                      <tr style={{ background: '#eef4ff' }}>
                        <th scope="row" style={cellStyle}>
                          <Button
                            variant="tertiary"
                            aria-expanded={open}
                            onClick={() =>
                              setExpanded((value) => ({ ...value, [group.id]: !open }))
                            }
                          >
                            {open ? '▾' : '▸'} {group.name}
                          </Button>
                          <small style={{ display: 'block', fontWeight: 400 }}>
                            {group.students.length} {t('students')} ·{' '}
                            {group.school_name || t('Independent')}
                          </small>
                          <div>
                            <Button
                              disabled={busy || loading || group.status !== 'active'}
                              onClick={() =>
                                mutate(
                                  `/classes/${group.id}`,
                                  'POST',
                                  { enroll },
                                  (result) =>
                                    `${t('Class synced')}. ${result.included} ${t('students grouped')}, ${result.enrolled} ${t('new enrollments')}, ${result.skipped} ${t('skipped')}.`,
                                )
                              }
                            >
                              {t('Sync roster')}
                            </Button>
                            <Button
                              isDestructive
                              disabled={busy || loading}
                              onClick={() => setRemove(group)}
                            >
                              {t('Remove class')}
                            </Button>
                          </div>
                        </th>
                        {data.items.map((item) => (
                          <td key={item.id} style={cellStyle}>
                            {percent(group.cells[item.id])}
                          </td>
                        ))}
                        <td style={cellStyle}>
                          <strong>{percent(group.percent)}</strong>
                          <small style={{ display: 'block' }}>{t('Class average')}</small>
                        </td>
                      </tr>
                      {open && students.map((student) => studentRow(student, true))}
                      {open && !students.length && (
                        <tr>
                          <td colSpan={data.items.length + 2} style={cellStyle}>
                            {t(
                              'No students grouped yet. Add students to the class, then sync its roster.',
                            )}
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
                {data.students.filter(match).map((student) => studentRow(student))}
                {!data.student_count && !data.classes.length && (
                  <tr>
                    <td colSpan={data.items.length + 2} style={cellStyle}>
                      {t('Add a class or enroll students to start this gradebook.')}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p>
            {t(
              '* Manual gradebook override. Overrides affect gradebook totals. Assessment grading controls pass and completion status.',
            )}
          </p>
        </>
      )}
      {editing && (
        <Modal
          title={`${t('Edit grade')} — ${editing.student.name}`}
          onRequestClose={() => !busy && setEditing(null)}
        >
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              if (
                await mutate(
                  '/grades',
                  'POST',
                  {
                    user_id: editing.student.id,
                    content_id: editing.item.id,
                    score: editing.score,
                    note: editing.note,
                  },
                  t('Grade saved.'),
                )
              )
                setEditing(null);
            }}
          >
            <p>{editing.item.title}</p>
            <label>
              {t('Score')} / {editing.item.max}
              <input
                type="number"
                min="0"
                max={editing.item.max}
                step="0.0001"
                required
                value={editing.score}
                disabled={busy}
                onChange={(event) => setEditing({ ...editing, score: event.target.value })}
              />
            </label>
            <p>
              <label>
                {t('Grade note')}
                <textarea
                  value={editing.note}
                  disabled={busy}
                  maxLength={2000}
                  onChange={(event) => setEditing({ ...editing, note: event.target.value })}
                />
              </label>
            </p>
            {error && <p role="alert">{error}</p>}
            <Button variant="primary" type="submit" disabled={busy}>
              {t('Save grade')}
            </Button>{' '}
            {editing.manual && (
              <Button
                disabled={busy}
                onClick={async () => {
                  if (
                    await mutate(
                      '/grades',
                      'DELETE',
                      { user_id: editing.student.id, content_id: editing.item.id },
                      t('Original assessment grade restored.'),
                    )
                  )
                    setEditing(null);
                }}
              >
                {t('Use assessment grade')}
              </Button>
            )}
          </form>
        </Modal>
      )}
      {remove && (
        <Modal
          title={t('Remove class from course gradebook?')}
          onRequestClose={() => !busy && setRemove(null)}
        >
          <p>{remove.name}</p>
          <p>
            {t(
              'Students keep their course access and grades, and appear as individual rows unless they belong to another attached class.',
            )}
          </p>
          {error && <p role="alert">{error}</p>}
          <Button
            variant="primary"
            isDestructive
            disabled={busy}
            onClick={async () => {
              if (
                await mutate(
                  `/classes/${remove.id}`,
                  'DELETE',
                  {},
                  t('Class removed from gradebook.'),
                )
              )
                setRemove(null);
            }}
          >
            {t('Remove class')}
          </Button>
        </Modal>
      )}
    </Modal>
  );
}
