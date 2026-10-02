import { createElement, createRoot, useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PeopleTabs } from './PeopleTabs';
import { request, exportCsv } from './api.mjs';

const config = window.ohmylmsSchools;
const t = (text) => __(text, 'ohmylms');
const api = (path, data, method = 'POST') =>
  request(config, path, { method, body: data ? JSON.stringify(data) : undefined });

// Skill reports live outside the school API; empty when practice and skills are switched off.
const skillsConfig = config?.skillsApi ? { ...config, api: config.skillsApi } : null;

function useRemote(path, revision, source = config) {
  const [state, setState] = useState({ path, data: null, error: '', loading: true });
  useEffect(() => {
    if (!path) {
      setState({ path, data: [], error: '', loading: false });
      return;
    }
    const controller = new AbortController();
    setState((previous) => ({
      path,
      data: previous.path === path ? previous.data : null,
      error: '',
      loading: true,
    }));
    request(source, path, { signal: controller.signal }).then(
      (data) => {
        if (!controller.signal.aborted) setState({ path, data, error: '', loading: false });
      },
      (error) => {
        if (!controller.signal.aborted)
          setState({ path, data: null, error: error.message, loading: false });
      },
    );
    return () => controller.abort();
  }, [path, revision]);
  return state.path === path ? state : { data: null, error: '', loading: true };
}

function Remote({ state, children }) {
  if (state.loading && state.data === null) return <p role="status">{t('Loading…')}</p>;
  if (state.error)
    return (
      <p role="alert" className="ohmylms-error">
        {state.error}
      </p>
    );
  return children(state.data);
}

function Form({ title, fields, submit = 'Save', onSubmit, disabled = false }) {
  const form = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  return (
    <form
      ref={form}
      className="ohmylms-school-form"
      onSubmit={async (event) => {
        event.preventDefault();
        if (busy) return;
        const data = Object.fromEntries(new FormData(event.currentTarget));
        fields
          .filter((field) => field.type === 'checkbox')
          .forEach((field) => {
            data[field.name] = data[field.name] === 'on';
          });
        setBusy(true);
        setError('');
        try {
          await onSubmit(data);
          form.current?.reset();
        } catch (failure) {
          setError(failure.message);
        } finally {
          setBusy(false);
        }
      }}
    >
      <fieldset disabled={busy || disabled}>
        <legend>{t(title)}</legend>
        {fields.map((field) => (
          <label key={field.name} className={field.hidden ? 'ohmylms-honeypot' : ''}>
            <span>
              {t(field.label)}
              {field.required ? ' *' : ''}
            </span>
            {field.options ? (
              <select
                key={field.version || field.name}
                onChange={field.onChange}
                name={field.name}
                required={field.required}
                defaultValue={field.value ?? ''}
              >
                <option value="">{t('Choose…')}</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                name={field.name}
                required={field.required}
                rows="5"
                defaultValue={field.value}
                maxLength={field.maxLength || 2000}
              />
            ) : (
              <input
                name={field.name}
                type={field.type || 'text'}
                required={field.required}
                defaultValue={field.value}
                defaultChecked={field.checked}
                minLength={field.minLength}
                maxLength={field.maxLength || 190}
                autoComplete={field.autoComplete}
                tabIndex={field.hidden ? -1 : undefined}
              />
            )}
            {field.help && <small>{t(field.help)}</small>}
          </label>
        ))}
        <button type="submit">{busy ? t('Saving…') : t(submit)}</button>
        {error && (
          <p role="alert" className="ohmylms-error">
            {error}
          </p>
        )}
      </fieldset>
    </form>
  );
}

const field = (name, label, type = 'text', required = true) => ({ name, label, type, required });
const choice = (name, label, options) => ({ name, label, required: true, options });
const option = (value, label) => ({ value, label });
const roleLabel = (role) =>
  ({
    school_admin: t('School administrator'),
    teacher: t('Teacher'),
    student: t('Student'),
    guardian: t('Parent / guardian'),
    activation: t('Student password setup / recovery'),
  })[role] || role;

function Table({ rows, columns, actions }) {
  if (!rows?.length) return <p className="ohmylms-empty">{t('No records yet.')}</p>;
  return (
    <div className="ohmylms-table-scroll">
      <table>
        <thead>
          <tr>
            {columns.map(([key, title]) => (
              <th key={key} scope="col">
                {t(title)}
              </th>
            ))}
            {actions && <th scope="col">{t('Actions')}</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id ? `${row.id}-${row.student_user_id || index}` : index}>
              {columns.map(([key, , format]) => (
                <td key={key}>{format ? format(row[key], row) : (row[key] ?? '—')}</td>
              ))}
              {actions && (
                <td>
                  <div className="ohmylms-row-actions">{actions(row)}</div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Pager({ page, setPage, count }) {
  return (
    <div className="ohmylms-pager">
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        {t('Previous')}
      </button>
      <span>
        {t('Page')} {page}
      </span>
      <button disabled={count < 50} onClick={() => setPage(page + 1)}>
        {t('Next')}
      </button>
    </div>
  );
}

function Signup({ initialRole = 'student', lockedRole = false, onDone }) {
  const [role, setRole] = useState(initialRole);
  return (
    <section>
      <h2>
        {t(
          {
            student: 'Student registration',
            teacher: 'Teacher registration',
            parent: 'Parent registration',
          }[role],
        )}
      </h2>
      <p>{t('Start with an account. No course selection or purchase is required.')}</p>
      {!lockedRole && (
        <div className="ohmylms-tabs">
          {['student', 'teacher', 'parent'].map((kind) => (
            <button aria-pressed={role === kind} key={kind} onClick={() => setRole(kind)}>
              {kind === 'parent'
                ? t('Parent / guardian')
                : kind === 'teacher'
                  ? t('Teacher')
                  : t('Student')}
            </button>
          ))}
        </div>
      )}
      <Form
        key={role}
        title="Account details"
        submit="Create account"
        fields={[
          field('first_name', 'First name', 'text', false),
          field('last_name', 'Last name', 'text', false),
          { ...field('email', 'Email', 'email'), autoComplete: 'email' },
          {
            ...field('password', 'Password', 'password'),
            minLength: 12,
            maxLength: 128,
            autoComplete: 'new-password',
            help: 'Use at least 12 characters.',
          },
          { ...field('website', 'Website', 'text', false), hidden: true, autoComplete: 'off' },
        ]}
        onSubmit={async (data) => {
          const result = await api('register', { ...data, role });
          onDone(result.message);
        }}
      />
      {config.googleUrl && !lockedRole && role === 'student' && (
        <a className="ohmylms-school-button secondary" href={config.googleUrl}>
          {t('Continue with Google')}
        </a>
      )}
      <p>
        <a href={config.loginUrl}>{t('Already have an account? Sign in')}</a>
      </p>
      <p>
        {t(
          'School and class access is assigned separately. If you have an invitation, sign in with the invited email address to accept it.',
        )}
      </p>
    </section>
  );
}

function Invitation({ token, onDone }) {
  const [activation, setActivation] = useState(false);
  return (
    <section className="ohmylms-card">
      <h2>{t('You have an OhMyLMS invitation')}</h2>
      <p>
        {t(
          'Staff and parents should sign in with the email address that received this invitation. A school-created student can use password setup.',
        )}
      </p>
      <label>
        <input
          type="checkbox"
          checked={activation}
          onChange={(event) => setActivation(event.target.checked)}
        />{' '}
        {t('Set up or recover a school-created student password')}
      </label>
      {!config.loggedIn && !activation ? (
        <a href={config.loginUrl}>{t('Sign in to accept')}</a>
      ) : (
        <Form
          title="Accept invitation"
          submit="Accept invitation"
          fields={
            activation
              ? [
                  {
                    ...field('password', 'New password', 'password'),
                    minLength: 12,
                    maxLength: 128,
                    autoComplete: 'new-password',
                  },
                ]
              : []
          }
          onSubmit={async (data) => {
            const result = await api('accept', { token, ...data });
            sessionStorage.removeItem('ohmylms-school-invite');
            onDone(result);
          }}
        />
      )}
    </section>
  );
}

function Work({ revision, child = null }) {
  const [page, setPage] = useState(1);
  const state = useRemote(
    `work?page=${page}${child ? `&student=${child.student_user_id}&school_id=${child.school_id}` : ''}${new URLSearchParams(window.location.search).get('class') ? `&class_id=${encodeURIComponent(new URLSearchParams(window.location.search).get('class'))}` : ''}`,
    revision,
  );
  return (
    <Remote state={state}>
      {(rows) => (
        <>
          <Table
            rows={rows}
            columns={[
              [
                'title',
                'Assigned work',
                (value, row) => (row.url ? <a href={row.url}>{value}</a> : value),
              ],
              ['class_name', 'Class'],
              [
                'due_at',
                'Due',
                (value) =>
                  value
                    ? new Date(value.replace(' ', 'T') + 'Z').toLocaleString()
                    : t('No due date'),
              ],
              ['completed_at', 'Progress', (value) => (value ? t('Completed') : t('Assigned'))],
            ]}
          />
          <Pager page={page} setPage={setPage} count={rows.length} />
        </>
      )}
    </Remote>
  );
}

function Family({ revision }) {
  const children = useRemote('children', revision);
  const [selected, setSelected] = useState(
    () => new URLSearchParams(window.location.search).get('school') || '',
  );
  return (
    <section>
      <h2>{t('My children')}</h2>
      <p>
        {t(
          'Only school work shared through an approved guardian link appears here. Ask the school for a child-specific invitation.',
        )}
      </p>
      <Remote state={children}>
        {(rows) => {
          const child =
            rows.find((row) => `${row.school_id}-${row.student_user_id}` === selected) || rows[0];
          return rows.length ? (
            <>
              <label>
                {t('Child and school')}
                <select
                  value={child ? `${child.school_id}-${child.student_user_id}` : ''}
                  onChange={(event) => setSelected(event.target.value)}
                >
                  {rows.map((row) => (
                    <option
                      key={`${row.school_id}-${row.student_user_id}`}
                      value={`${row.school_id}-${row.student_user_id}`}
                    >
                      {row.display_name} · {row.school_name}
                    </option>
                  ))}
                </select>
              </label>
              <Work
                key={`${child.school_id}-${child.student_user_id}`}
                child={child}
                revision={revision}
              />
              {skillsConfig && (
                <ChildSkills
                  key={`skills-${child.school_id}-${child.student_user_id}`}
                  child={child}
                  revision={revision}
                />
              )}
            </>
          ) : (
            <p>{t('No linked children yet.')}</p>
          );
        }}
      </Remote>
    </section>
  );
}

function ClassView({ classroom, isAdmin, revision, run }) {
  const [course, setCourse] = useState('');
  const activities = useRemote(
    course ? `courses/${course}/activities?class_id=${classroom.id}` : null,
    revision,
  );
  const [candidateSearch, setCandidateSearch] = useState('');
  const candidates = useRemote(
    isAdmin
      ? `schools/${classroom.school_id}/roster?search=${encodeURIComponent(candidateSearch)}`
      : null,
    revision,
  );
  const [page, setPage] = useState(1);
  const members = useRemote(`classes/${classroom.id}/members?page=${page}`, revision);
  const work = useRemote(`classes/${classroom.id}/assignments?page=${page}`, revision);
  const [search, setSearch] = useState('');
  const courses = useRemote(
    classroom.status === 'active'
      ? `courses?class_id=${classroom.id}&search=${encodeURIComponent(search)}`
      : null,
    revision,
  );
  const active = classroom.status === 'active';
  return (
    <section>
      <h3>
        {classroom.name} · {classroom.grade} <small>{classroom.status}</small>
      </h3>
      <h4>{t('Class roster')}</h4>
      <Remote state={members}>
        {(rows) => (
          <>
            <Table
              rows={rows}
              columns={[
                ['display_name', 'Name'],
                ['role', 'Role', roleLabel],
              ]}
              actions={
                active
                  ? (row) =>
                      (isAdmin || row.role === 'student') && (
                        <button
                          onClick={() => {
                            if (
                              window.confirm(
                                t(
                                  'Remove this membership from the class? The account and learning history will remain.',
                                ),
                              )
                            )
                              run(`classes/${classroom.id}/members`, {
                                user_id: row.user_id,
                                role: row.role,
                                status: 'inactive',
                              });
                          }}
                        >
                          {t('Remove from class')}
                        </button>
                      )
                  : undefined
              }
            />
            <Pager page={page} setPage={setPage} count={rows.length} />
          </>
        )}
      </Remote>
      {active && isAdmin && (
        <label>
          {t('Find a school roster member')}
          <input
            value={candidateSearch}
            onChange={(event) => setCandidateSearch(event.target.value)}
          />
        </label>
      )}
      {active && isAdmin && (
        <Form
          title="Add a school roster member"
          fields={[
            choice(
              'user_id',
              'School roster member',
              (candidates.data || []).map((row) =>
                option(`${row.user_id}`, `${row.display_name} · ${roleLabel(row.role)}`),
              ),
            ),
            choice('role', 'Class role', [
              option('student', t('Student')),
              ...(isAdmin ? [option('teacher', t('Teacher'))] : []),
            ]),
          ]}
          onSubmit={(data) => run(`classes/${classroom.id}/members`, data, 'POST', true)}
        />
      )}
      {active && (
        <>
          <h4>{t('Assign learning')}</h4>
          <p>
            {t(
              'Recipients must already have course access. This does not enroll them or create a purchase. New class members do not receive earlier assignments automatically.',
            )}
          </p>
          <label>
            {t('Find a course')}
            <input value={search} onChange={(event) => setSearch(event.target.value)} />
          </label>
          <Remote state={courses}>
            {(rows) => (
              <Form
                title="New assignment"
                submit="Assign to current students"
                fields={[
                  field('title', 'Assignment title'),
                  {
                    ...choice(
                      'course_id',
                      'Course',
                      rows.map((row) => option(row.id, row.title)),
                    ),
                    onChange: (event) => setCourse(event.target.value),
                  },
                  {
                    ...choice(
                      'content_id',
                      'Activity (optional)',
                      (activities.data || []).map((row) => option(row.id, row.title)),
                    ),
                    required: false,
                    version: `activity-${course}`,
                    help: 'Leave empty to assign the whole course.',
                  },
                  {
                    ...field('due_at', 'Due date', 'datetime-local', false),
                    help: "Use the school's timezone.",
                  },
                  {
                    ...field(
                      'prior_completion',
                      'Count work completed before this assignment',
                      'checkbox',
                      false,
                    ),
                  },
                ]}
                onSubmit={(data) => run(`classes/${classroom.id}/assignments`, data, 'POST', true)}
              />
            )}
          </Remote>
        </>
      )}
      <h4>{t('Assigned work and completion')}</h4>
      <Remote state={work}>
        {(rows) => (
          <>
            <Table
              rows={rows}
              columns={[
                ['title', 'Work'],
                ['student_name', 'Student'],
                ['completed_at', 'Progress', (value) => (value ? t('Completed') : t('Assigned'))],
              ]}
            />
            <Pager page={page} setPage={setPage} count={rows.length} />
          </>
        )}
      </Remote>
      {active && <Grading classroom={classroom} revision={revision} run={run} />}
      {isAdmin && active && (
        <button
          className="secondary"
          onClick={() => {
            if (
              window.confirm(
                t('Archive this class? History is preserved and new assignments will be disabled.'),
              )
            )
              run(`classes/${classroom.id}/archive`, {});
          }}
        >
          {t('Archive class')}
        </button>
      )}
      {skillsConfig && <ClassSkills classroom={classroom} revision={revision} />}
    </section>
  );
}

const levelBadge = (level, label, reviewDue) => (
  <>
    <span className={`ohmylms-skill-level ohmylms-skill-${level}`}>{label}</span>
    {reviewDue && <span className="ohmylms-skill-review"> · {t('Review due')}</span>}
  </>
);

/** A guardian's view of one child's skill levels and suggested next steps. */
function ChildSkills({ child, revision }) {
  const state = useRemote(
    `reports/skills/students/${child.student_user_id}?school_id=${child.school_id}`,
    revision,
    skillsConfig,
  );
  return (
    <section className="ohmylms-child-skills">
      <h3>{t('Skills')}</h3>
      <p>
        {t(
          'Skill levels come from quiz answers, lesson checks and practice. They are separate from grades.',
        )}
      </p>
      <Remote state={state}>
        {(data) => (
          <>
            <Table
              rows={data.skills}
              columns={[
                ['name', 'Skill'],
                [
                  'level',
                  'Level',
                  (level, row) => levelBadge(level, row.level_label, row.review_due),
                ],
                ['independent_correct', 'Correct on their own'],
                ['families', 'Kinds of question'],
              ]}
            />
            {data.recommendations?.length > 0 && (
              <>
                <h4>{t('Suggested next steps')}</h4>
                <ul className="ohmylms-recommendations">
                  {data.recommendations
                    .filter((item) => item.skill)
                    .map((item, index) => (
                      <li key={`${item.type}-${item.skill.id}-${index}`}>
                        <strong>{item.skill.name}</strong> — {item.message}
                        {(item.lessons || []).map((lesson) => (
                          <span key={lesson.id}>
                            {' '}
                            <a href={lesson.url}>{lesson.title}</a>
                          </span>
                        ))}
                      </li>
                    ))}
                </ul>
              </>
            )}
          </>
        )}
      </Remote>
    </section>
  );
}

/** Class skill matrix for the class's teachers: one row per student, one column per skill. */
function ClassSkills({ classroom, revision }) {
  const state = useRemote(`reports/skills?class_id=${classroom.id}`, revision, skillsConfig);
  return (
    <section className="ohmylms-class-skills">
      <h4>{t('Class skills')}</h4>
      <Remote state={state}>
        {(data) =>
          data.skills.length && data.students.length ? (
            <div className="ohmylms-table-scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">{t('Student')}</th>
                    {data.skills.map((skill) => (
                      <th key={skill.id} scope="col">
                        {skill.code ? `${skill.code} ` : ''}
                        {skill.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.students.map((student) => (
                    <tr key={student.id}>
                      <th scope="row">{student.name}</th>
                      {data.skills.map((skill) => {
                        const cell = student.skills?.[skill.id];
                        return (
                          <td key={skill.id}>
                            {cell
                              ? levelBadge(cell.level, data.levels[cell.level], cell.review_due)
                              : data.levels['not-assessed']}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="ohmylms-empty">{t('No skill evidence for this class yet.')}</p>
          )
        }
      </Remote>
    </section>
  );
}

function Grading({ classroom, revision, run }) {
  const submissions = useRemote(`classes/${classroom.id}/submissions`, revision);
  const [selected, setSelected] = useState(
    () => new URLSearchParams(window.location.search).get('school') || '',
  );
  return (
    <section>
      <h4>{t('Review submissions')}</h4>
      <Remote state={submissions}>
        {(rows) => {
          const current = rows.find((row) => `${row.learning_id}-${row.id}` === selected);
          return (
            <>
              <Table
                rows={rows}
                columns={[
                  ['title', 'Work'],
                  ['student_name', 'Student'],
                  ['status', 'Status'],
                  ['score', 'Score'],
                ]}
                actions={(row) => (
                  <button onClick={() => setSelected(`${row.learning_id}-${row.id}`)}>
                    {t('Review')}
                  </button>
                )}
              />
              {current && (
                <div className="ohmylms-card">
                  <h4>
                    {current.student_name} · {current.title}
                  </h4>
                  <p style={{ whiteSpace: 'pre-wrap' }}>{current.content}</p>
                  {current.file_url && (
                    <a href={current.file_url}>{t('Download submitted file')}</a>
                  )}
                  <p>
                    {t('Total points')}: {current.total_points}
                  </p>
                  <Form
                    key={selected}
                    title="Grade submission"
                    submit="Save grade"
                    fields={[
                      { ...field('score', 'Score', 'number'), value: current.score },
                      {
                        ...field('note', 'Feedback', 'textarea', false),
                        value: current.note,
                        maxLength: 2000,
                      },
                    ]}
                    onSubmit={(data) =>
                      run(
                        `assignments/${current.learning_id}/submissions/${current.id}`,
                        data,
                        'POST',
                        true,
                      )
                    }
                  />
                </div>
              )}
            </>
          );
        }}
      </Remote>
    </section>
  );
}

function ImportRoster({ school, run }) {
  const [csv, setCsv] = useState('name,external_student_id\n');
  const [preview, setPreview] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const check = async (commit) => {
    setBusy(true);
    setError('');
    try {
      const rows = await run(`schools/${school}/import`, { csv, commit }, 'POST', true);
      setPreview(rows);
    } catch (failure) {
      setError(failure.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <section>
      <h3>{t('Import student roster')}</h3>
      <p>
        {t(
          'Paste up to 200 students using name and external_student_id columns. Existing school IDs are skipped; names never merge accounts. Password setup links can be issued after import.',
        )}
      </p>
      <label>
        {t('CSV content')}
        <textarea
          rows="7"
          value={csv}
          onChange={(event) => {
            setCsv(event.target.value);
            setPreview(null);
          }}
        />
      </label>
      <button disabled={busy} onClick={() => check(false)}>
        {t('Preview import')}
      </button>
      {preview && (
        <>
          <Table
            rows={preview}
            columns={[
              ['line', 'Line'],
              ['name', 'Name'],
              ['external_student_id', 'School student ID'],
              ['status', 'Result'],
              ['error', 'Details'],
            ]}
          />
          <button
            disabled={busy || !preview.some((row) => row.status === 'new')}
            onClick={() => check(true)}
          >
            {t('Import new valid students')}
          </button>
        </>
      )}
      {error && <p role="alert">{error}</p>}
    </section>
  );
}

function SchoolView({ school, me, revision, run, section = 'classes', management = false }) {
  const [inviteRole, setInviteRole] = useState('');
  const isAdmin =
    me.platform_admin ||
    me.memberships.some(
      (membership) =>
        Number(membership.school_id) === Number(school.id) && membership.role === 'school_admin',
    );
  const staff =
    isAdmin ||
    me.memberships.some(
      (membership) =>
        Number(membership.school_id) === Number(school.id) && membership.role === 'teacher',
    );
  const [tab, setTab] = useState(!isAdmin && section === 'roster' ? 'classes' : section);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(
    () => new URLSearchParams(window.location.search).get('class') || '',
  );
  const [search, setSearch] = useState('');
  const classes = useRemote(`schools/${school.id}/classes?page=${page}`, revision);
  const years = useRemote(staff ? `schools/${school.id}/years` : null, revision);
  const roster = useRemote(
    isAdmin && (tab === 'roster' || tab === 'invitations')
      ? `schools/${school.id}/roster?page=${page}&search=${encodeURIComponent(search)}`
      : null,
    revision,
  );
  const invitations = useRemote(
    isAdmin && tab === 'invitations' ? `schools/${school.id}/invitations` : null,
    revision,
  );
  const guardians = useRemote(
    isAdmin && tab === 'guardians' ? `schools/${school.id}/guardians` : null,
    revision,
  );
  const report = useRemote(
    isAdmin && tab === 'report' ? `schools/${school.id}/report` : null,
    revision,
  );
  const prefix = `schools/${school.id}/`;
  return (
    <section>
      <h2>{school.name}</h2>
      <p>
        {t('School timezone')}: {school.timezone}
      </p>
      <nav className="ohmylms-tabs" aria-label={t('School sections')}>
        {[
          'classes',
          ...(isAdmin ? ['roster', 'invitations', 'guardians', 'years', 'report', 'import'] : []),
        ].map((name) => (
          <button
            key={name}
            aria-pressed={tab === name}
            onClick={() => {
              setTab(name);
              setPage(1);
              setSelected('');
            }}
          >
            {t(
              management && name === 'classes'
                ? 'Class list'
                : management && name === 'roster'
                  ? 'Student roster'
                  : name.charAt(0).toUpperCase() + name.slice(1),
            )}
          </button>
        ))}
      </nav>
      {tab === 'classes' && (
        <Remote state={classes}>
          {(rows) => (
            <>
              <Table
                rows={rows}
                columns={[
                  ['name', 'Class'],
                  ['grade', 'Grade'],
                  ['subject', 'Subject'],
                  ['status', 'Status'],
                ]}
                actions={
                  staff
                    ? (row) => (
                        <button onClick={() => setSelected(String(row.id))}>
                          {t('Open class')}
                        </button>
                      )
                    : undefined
                }
              />
              <Pager page={page} setPage={setPage} count={rows.length} />
              {rows.find((row) => String(row.id) === selected) && (
                <ClassView
                  key={selected}
                  classroom={rows.find((row) => String(row.id) === selected)}
                  isAdmin={isAdmin}
                  revision={revision}
                  run={run}
                />
              )}
              {isAdmin && (
                <Remote state={years}>
                  {(items) => (
                    <Form
                      title="Create class"
                      fields={[
                        field('name', 'Class name'),
                        choice(
                          'academic_year_id',
                          'Academic year',
                          items
                            .filter((year) => year.status === 'active')
                            .map((year) => option(year.id, year.label)),
                        ),
                        field('subject', 'Subject', 'text', false),
                        field('grade', 'Grade', 'text', false),
                      ]}
                      onSubmit={(data) => run(prefix + 'classes', data, 'POST', true)}
                    />
                  )}
                </Remote>
              )}
            </>
          )}
        </Remote>
      )}
      {tab === 'roster' && (
        <>
          <label>
            {t('Search students and staff')}
            <input
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
            />
          </label>
          <Remote state={roster}>
            {(rows) => (
              <>
                <Table
                  rows={rows}
                  columns={[
                    ['display_name', 'Name'],
                    ['user_login', 'Username'],
                    ['external_student_id', 'School student ID'],
                    ['role', 'Role', roleLabel],
                  ]}
                  actions={(row) => (
                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            t(
                              'Remove this school membership and its class access? The account and learning history will remain.',
                            ),
                          )
                        )
                          run(prefix + 'members/' + row.id, null, 'DELETE');
                      }}
                    >
                      {t('Remove membership')}
                    </button>
                  )}
                />
                <Pager page={page} setPage={setPage} count={rows.length} />
              </>
            )}
          </Remote>
          <Form
            title="Create a school-managed student"
            fields={[
              field('name', 'Student name'),
              field('external_student_id', 'School student ID'),
            ]}
            onSubmit={(data) => run(prefix + 'students', data, 'POST', true)}
          />
          <p>
            {t(
              'For existing accounts, use a student invitation instead of creating a duplicate. For new school accounts, issue a password setup link from Invitations.',
            )}
          </p>
        </>
      )}
      {tab === 'invitations' && (
        <>
          <label>
            {t('Find a student for this invitation')}
            <input
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
            />
          </label>
          <Form
            title="Create invitation"
            submit="Create invitation link"
            fields={[
              {
                ...choice(
                  'role',
                  'Invitation type',
                  ['teacher', 'school_admin', 'student', 'guardian', 'activation'].map((role) =>
                    option(role, roleLabel(role)),
                  ),
                ),
                onChange: (event) => setInviteRole(event.target.value),
              },
              ...(inviteRole !== 'activation'
                ? [
                    {
                      ...field('email', 'Recipient email', 'email', true),
                      help: 'Required except for school-created student password setup.',
                    },
                  ]
                : []),
              ...(['guardian', 'activation'].includes(inviteRole)
                ? [
                    {
                      ...choice(
                        'student_user_id',
                        'Student',
                        (roster.data || [])
                          .filter((row) => row.role === 'student')
                          .map((row) => option(row.user_id, row.display_name)),
                      ),
                      help: 'Required for guardian invitations and student password setup.',
                    },
                  ]
                : []),
              ...(['teacher', 'student'].includes(inviteRole)
                ? [
                    {
                      ...choice(
                        'class_id',
                        'Class (optional)',
                        (classes.data || [])
                          .filter((row) => row.status === 'active')
                          .map((row) => option(row.id, row.name)),
                      ),
                      required: false,
                    },
                  ]
                : []),
              ...(inviteRole !== 'activation'
                ? [field('send_email', 'Send this invitation by email', 'checkbox', false)]
                : []),
            ]}
            onSubmit={async (data) => {
              const result = await run(prefix + 'invitations', data, 'POST', true);
              setInviteRole('');
              return result;
            }}
          />
          <Remote state={invitations}>
            {(rows) => (
              <Table
                rows={rows}
                columns={[
                  ['role', 'Type', roleLabel],
                  ['email', 'Recipient'],
                  ['expires_at', 'Expires (UTC)'],
                  ['consumed_at', 'Accepted'],
                  ['revoked_at', 'Revoked'],
                ]}
                actions={(row) =>
                  !row.consumed_at &&
                  !row.revoked_at && (
                    <button onClick={() => run(prefix + 'invitations/' + row.id, null, 'DELETE')}>
                      {t('Revoke')}
                    </button>
                  )
                }
              />
            )}
          </Remote>
        </>
      )}
      {tab === 'guardians' && (
        <Remote state={guardians}>
          {(rows) => (
            <Table
              rows={rows}
              columns={[
                ['parent_name', 'Parent'],
                ['student_name', 'Student'],
                ['status', 'Status'],
              ]}
              actions={(row) =>
                row.status === 'active' && (
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          t("Revoke this parent's access to this child's school work?"),
                        )
                      )
                        run(prefix + 'guardians/' + row.id, null, 'DELETE');
                    }}
                  >
                    {t('Revoke access')}
                  </button>
                )
              }
            />
          )}
        </Remote>
      )}
      {tab === 'years' && (
        <>
          <Remote state={years}>
            {(rows) => (
              <>
                <Table
                  rows={rows}
                  columns={[
                    ['label', 'Year'],
                    ['starts_at', 'Starts'],
                    ['ends_at', 'Ends'],
                    ['status', 'Status'],
                  ]}
                />
                <Form
                  title="Start a new year from existing classes"
                  submit="Archive old year and copy classes"
                  fields={[
                    choice(
                      'from_year',
                      'Old year',
                      rows
                        .filter((year) => year.status === 'active')
                        .map((year) => option(year.id, year.label)),
                    ),
                    choice(
                      'to_year',
                      'New year',
                      rows
                        .filter((year) => year.status === 'active')
                        .map((year) => option(year.id, year.label)),
                    ),
                  ]}
                  onSubmit={async (data) => {
                    if (
                      !window.confirm(
                        t(
                          'Archive the old year and create empty classes in the new year? Old rosters and work remain in history.',
                        ),
                      )
                    )
                      throw new Error(t('Rollover cancelled.'));
                    return run(prefix + 'rollover', data, 'POST', true);
                  }}
                />
              </>
            )}
          </Remote>
          <Form
            title="Create academic year"
            fields={[
              field('label', 'Year name'),
              field('starts_at', 'Start date', 'date'),
              field('ends_at', 'End date', 'date'),
            ]}
            onSubmit={(data) => run(prefix + 'years', data, 'POST', true)}
          />
        </>
      )}
      {tab === 'report' && (
        <Remote state={report}>
          {(rows) => (
            <>
              <Table
                rows={rows}
                columns={[
                  ['name', 'Class'],
                  ['status', 'Status'],
                  ['assigned', 'Assigned'],
                  ['completed', 'Completed'],
                ]}
              />
              <button
                disabled={!rows.length}
                onClick={() => {
                  const url = URL.createObjectURL(
                    new Blob([exportCsv(rows)], { type: 'text/csv;charset=utf-8' }),
                  );
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'ohmylms-school-report.csv';
                  a.click();
                  URL.revokeObjectURL(url);
                }}
              >
                {t('Download report CSV')}
              </button>
            </>
          )}
        </Remote>
      )}
      {tab === 'import' && <ImportRoster school={school.id} run={run} />}
    </section>
  );
}

function Users({ revision, role = '' }) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const users = useRemote(
    `users?page=${page}&role=${role}&search=${encodeURIComponent(search)}`,
    revision,
  );
  return (
    <section>
      <h2>{t(role === 'teacher' ? 'Teachers' : role === 'parent' ? 'Parents' : 'All accounts')}</h2>
      {config.usersUrl && (
        <p>
          <a href={config.usersUrl}>{t('Add user')}</a>
        </p>
      )}
      <label>
        {t('Search users')}
        <input
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setPage(1);
          }}
        />
      </label>
      <Remote state={users}>
        {(rows) => (
          <>
            <Table
              rows={rows}
              columns={[
                ['display_name', 'Name'],
                ['user_login', 'Username'],
                ['email', 'Email'],
                ['roles', 'Roles'],
              ]}
              actions={(row) => row.edit_url && <a href={row.edit_url}>{t('Edit user')}</a>}
            />
            <Pager page={page} setPage={setPage} count={rows.length} />
          </>
        )}
      </Remote>
    </section>
  );
}

function IndependentClasses({ revision, run }) {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(
    () => new URLSearchParams(window.location.search).get('class') || '',
  );
  const classes = useRemote(`classes?page=${page}`, revision);
  return (
    <section>
      <h2>{t('Independent classes')}</h2>
      <p>{t('Create and manage your own classes without a school or academic year.')}</p>
      <Remote state={classes}>
        {(rows) => (
          <>
            <Table
              rows={rows}
              columns={[
                ['name', 'Class'],
                ['subject', 'Subject'],
                ['grade', 'Grade'],
                ['status', 'Status'],
              ]}
              actions={(row) => (
                <>
                  <button onClick={() => setSelected(String(row.id))}>{t('Open classroom')}</button>
                  {row.status === 'active' && (
                    <button
                      onClick={() => {
                        if (window.confirm(t('Archive this class?')))
                          run(`classes/${row.id}/archive`, {});
                      }}
                    >
                      {t('Archive class')}
                    </button>
                  )}
                </>
              )}
            />
            {rows
              .filter((row) => String(row.id) === selected)
              .map((row) => (
                <ClassView
                  key={row.id}
                  classroom={row}
                  isAdmin={false}
                  revision={revision}
                  run={run}
                />
              ))}
            <Pager page={page} setPage={setPage} count={rows.length} />
          </>
        )}
      </Remote>
      <Form
        title="Create independent class"
        fields={[
          field('name', 'Class name'),
          field('subject', 'Subject', 'text', false),
          field('grade', 'Grade', 'text', false),
        ]}
        onSubmit={(data) => run('classes', data, 'POST', true)}
      />
    </section>
  );
}

function App({ view }) {
  const management = view === 'admin-management';
  const [revision, setRevision] = useState(0);
  const [message, setMessage] = useState('');
  const [failure, setFailure] = useState('');
  const [link, setLink] = useState('');
  const [tab, setTab] = useState(
    management
      ? new URLSearchParams(window.location.search).get('tab') || 'schools'
      : view === 'parent-dashboard'
        ? 'family'
        : view === 'student-assignments'
          ? 'work'
          : view === 'teacher-dashboard' &&
              new URLSearchParams(window.location.search).get('class') &&
              !Number(new URLSearchParams(window.location.search).get('school'))
            ? 'classes'
            : 'schools',
  );
  const [selected, setSelected] = useState(
    () => new URLSearchParams(window.location.search).get('school') || '',
  );
  const [page, setPage] = useState(1);
  const [token, setToken] = useState(() => {
    const url = new URL(window.location.href);
    const incoming = url.searchParams.get('ohmylms_invite');
    if (incoming) {
      sessionStorage.setItem('ohmylms-school-invite', incoming);
      url.searchParams.delete('ohmylms_invite');
      window.history.replaceState(null, '', url);
    }
    return sessionStorage.getItem('ohmylms-school-invite') || '';
  });
  const me = useRemote(config.loggedIn ? 'me' : null, revision);
  const schools = useRemote(config.loggedIn ? `schools?page=${page}` : null, revision);
  const run = async (path, data, method = 'POST', rethrow = false) => {
    setFailure('');
    setMessage('');
    setLink('');
    try {
      const result = await api(path, data, method);
      setRevision((value) => value + 1);
      setMessage(result.message || t('Saved.'));
      if (result.url) setLink(result.url);
      return result;
    } catch (error) {
      setFailure(error.message);
      if (rethrow) throw error;
    }
  };
  return (
    <div className="ohmylms-school-shell">
      <header>
        <div>
          <p className="ohmylms-eyebrow">OhMyLMS</p>
          <h1>{t(management ? 'Students' : 'School & family learning')}</h1>
        </div>
        {config.loggedIn && <a href={config.logoutUrl}>{t('Sign out')}</a>}
      </header>
      {message && (
        <p role="status" className="ohmylms-success">
          {message}
        </p>
      )}
      {failure && (
        <p role="alert" className="ohmylms-error">
          {failure}
        </p>
      )}
      {link && (
        <div className="ohmylms-success">
          <p>
            {t(
              'Copy this invitation and share it privately with the intended recipient. It expires in 48 hours.',
            )}
          </p>
          <input
            readOnly
            aria-label={t('Invitation link')}
            value={link}
            onFocus={(event) => event.target.select()}
          />
        </div>
      )}
      {token && (
        <Invitation
          token={token}
          onDone={(result) => {
            setToken('');
            setRevision((value) => value + 1);
            setMessage(
              result.message + (result.username ? ` ${t('Username')}: ${result.username}` : ''),
            );
          }}
        />
      )}
      {!config.loggedIn ? (
        <Signup
          initialRole={view === 'parent-registration' ? 'parent' : 'student'}
          onDone={setMessage}
        />
      ) : (
        <Remote state={me}>
          {(person) => (
            <>
              <p>
                {t('Welcome')}, {person.name}.
              </p>
              {management ? (
                <PeopleTabs
                  active={tab}
                  studentsUrl={config.studentsUrl}
                  canListUsers={person.can_list_users}
                />
              ) : (
                <nav className="ohmylms-tabs" aria-label={t('Learning views')}>
                  {(management
                    ? [
                        ...(person.can_list_users ? [['users', 'Users']] : []),
                        ['students', 'Students'],
                        ['classes', 'Classes'],
                        ['schools', 'Schools'],
                      ]
                    : [
                        ...(person.can_create_class ? [['classes', 'My classes']] : []),
                        ['schools', 'My schools'],
                        ['family', 'My children'],
                        ['work', 'My assignments'],
                      ]
                  ).map(([key, title]) => (
                    <button key={key} aria-pressed={tab === key} onClick={() => setTab(key)}>
                      {t(title)}
                    </button>
                  ))}
                </nav>
              )}
              {management &&
                ['users', 'teachers', 'parents'].includes(tab) &&
                person.can_list_users && (
                  <Users
                    key={tab}
                    revision={revision}
                    role={tab === 'teachers' ? 'teacher' : tab === 'parents' ? 'parent' : ''}
                  />
                )}
              {tab === 'classes' && person.can_create_class && (
                <IndependentClasses revision={revision} run={run} />
              )}
              {management && tab === 'students' && config.studentsUrl && (
                <p>
                  <a href={config.studentsUrl}>
                    {t('Open course enrollments and student progress')}
                  </a>
                </p>
              )}
              {tab === 'family' && <Family revision={revision} />}
              {tab === 'work' && <Work revision={revision} />}
              {(tab === 'schools' || (management && ['students', 'classes'].includes(tab))) && (
                <Remote state={schools}>
                  {(rows) => {
                    const school = rows.find((row) => String(row.id) === selected) || rows[0];
                    return (
                      <>
                        {rows.length ? (
                          <>
                            <label>
                              {t('School')}
                              <select
                                value={school?.id || ''}
                                onChange={(event) => setSelected(event.target.value)}
                              >
                                {rows.map((row) => (
                                  <option key={row.id} value={row.id}>
                                    {row.name}
                                  </option>
                                ))}
                              </select>
                            </label>
                            <SchoolView
                              key={`${school.id}-${tab}`}
                              school={school}
                              me={person}
                              revision={revision}
                              run={run}
                              management={management}
                              section={
                                tab === 'students'
                                  ? 'roster'
                                  : management && tab === 'schools'
                                    ? 'years'
                                    : 'classes'
                              }
                            />
                          </>
                        ) : (
                          <p>
                            {t(
                              'No school membership yet. Accept an invitation to join your school. Parents can open My children.',
                            )}
                          </p>
                        )}
                        <Pager page={page} setPage={setPage} count={rows.length} />
                        {person.platform_admin && tab === 'schools' && (
                          <Form
                            title="Create school"
                            fields={[
                              field('name', 'School name'),
                              {
                                ...field('timezone', 'Timezone'),
                                value: 'Asia/Ulaanbaatar',
                                help: 'Use an IANA timezone, for example Asia/Ulaanbaatar.',
                              },
                            ]}
                            onSubmit={(data) => run('schools', data, 'POST', true)}
                          />
                        )}
                      </>
                    );
                  }}
                </Remote>
              )}
              {config.googleUrl && (
                <p>
                  <a href={config.googleUrl}>{t('Connect Google to this account')}</a>
                </p>
              )}
            </>
          )}
        </Remote>
      )}
    </div>
  );
}

function RegistrationBlock({ role }) {
  const [message, setMessage] = useState('');
  return (
    <div className="ohmylms-school-shell ohmylms-account-block">
      {config.loggedIn ? (
        <>
          <h2>{t('You are signed in')}</h2>
          <p>
            <a href={config.portalUrl}>{t('Open your dashboard')}</a>
          </p>
          <p>
            <a href={config.logoutUrl}>{t('Sign out to create another account')}</a>
          </p>
        </>
      ) : message ? (
        <>
          <p role="status" className="ohmylms-success">
            {message}
          </p>
          <a href={config.loginUrl}>{t('Sign in')}</a>
        </>
      ) : (
        <Signup initialRole={role} lockedRole onDone={setMessage} />
      )}
    </div>
  );
}

document.querySelectorAll('[data-ohmylms-school-view]').forEach((node) => {
  const view = node.dataset.ohmylmsSchoolView;
  const role = {
    'student-registration': 'student',
    'teacher-registration': 'teacher',
    'parent-registration': 'parent',
  }[view];
  createRoot(node).render(role ? <RegistrationBlock role={role} /> : <App view={view} />);
});
