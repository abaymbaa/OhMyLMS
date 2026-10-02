import { createElement, Fragment, useEffect, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { Button, Modal, Notice, SelectControl, Spinner } from '@wordpress/components';
import { loadCourses, loadSkillMatrix, loadStudentSkills, rebuildStudent } from './api.mjs';
import { levelClass, levelShort } from './model.mjs';

/**
 * Skill performance by course: learners × skills, separate from grades.
 * Levels follow the transparent mastery rules; review-due is shown separately.
 */
export function PerformancePage() {
  const [courses, setCourses] = useState(null);
  const [courseId, setCourseId] = useState('');
  const [matrix, setMatrix] = useState(null);
  const [error, setError] = useState('');
  const [student, setStudent] = useState(null);
  useEffect(() => {
    loadCourses()
      .then((data) => setCourses(Array.isArray(data) ? data : data?.data || []))
      .catch((cause) => setError(cause.message));
  }, []);
  useEffect(() => {
    if (!courseId) return setMatrix(null);
    let active = true;
    setMatrix(undefined);
    loadSkillMatrix(courseId)
      .then((data) => active && setMatrix(data))
      .catch((cause) => active && setError(cause.message));
    return () => {
      active = false;
    };
  }, [courseId]);
  return (
    <section className="ohmylms-performance">
      <h1>{__('Skill performance', 'ohmylms')}</h1>
      <p>
        {__(
          'Skill levels come from question-level evidence (quizzes, practice and lesson checks). Grades and gradebook overrides are not skill evidence.',
          'ohmylms',
        )}
      </p>
      {error && (
        <Notice status="error" onRemove={() => setError('')}>
          {error}
        </Notice>
      )}
      {!courses ? (
        <Spinner />
      ) : (
        <SelectControl
          label={__('Course', 'ohmylms')}
          value={courseId}
          options={[
            { value: '', label: __('Choose a course', 'ohmylms') },
            ...courses.map((course) => ({
              value: String(course.id),
              label: course.name || course.title || `#${course.id}`,
            })),
          ]}
          onChange={setCourseId}
        />
      )}
      {matrix === undefined && <Spinner />}
      {matrix && (
        <Fragment>
          <p className="ohmylms-level-legend">
            {Object.entries(matrix.levels).map(([level, label]) => (
              <span
                key={level}
                className={`ohmylms-skill-level ${levelClass(level)}`}
                style={{ marginRight: 12 }}
              >
                {levelShort(level)} = {label}
              </span>
            ))}
          </p>
          {matrix.skills.length === 0 ? (
            <p>{__('No skill evidence for this course yet.', 'ohmylms')}</p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table className="widefat striped">
                <thead>
                  <tr>
                    <th>{__('Learner', 'ohmylms')}</th>
                    {matrix.skills.map((skill) => (
                      <th key={skill.id} title={skill.name}>
                        {skill.code || skill.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {matrix.students.map((learner) => (
                    <tr key={learner.id}>
                      <td>
                        <Button variant="link" onClick={() => setStudent(learner)}>
                          {learner.name}
                        </Button>
                      </td>
                      {matrix.skills.map((skill) => {
                        const cell = learner.skills[skill.id];
                        return (
                          <td key={skill.id} className={levelClass(cell?.level)}>
                            {cell ? (
                              <span
                                title={sprintf(
                                  __(
                                    '%1$d pieces of evidence, %2$d correct on their own',
                                    'ohmylms',
                                  ),
                                  cell.evidence,
                                  cell.independent_correct,
                                )}
                              >
                                {levelShort(cell.level)}
                                {cell.review_due ? ' ↻' : ''}
                              </span>
                            ) : (
                              '·'
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Fragment>
      )}
      {student && (
        <StudentSkills student={student} courseId={courseId} onClose={() => setStudent(null)} />
      )}
    </section>
  );
}

function StudentSkills({ student, courseId, onClose }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const load = () =>
    loadStudentSkills(student.id, courseId)
      .then(setData)
      .catch((cause) => setError(cause.message));
  useEffect(() => {
    load();
  }, [student.id]);
  return (
    <Modal title={student.name} onRequestClose={onClose} size="large">
      {error && (
        <Notice status="error" isDismissible={false}>
          {error}
        </Notice>
      )}
      {!data ? (
        <Spinner />
      ) : (
        <Fragment>
          <h3>{__('Skills', 'ohmylms')}</h3>
          <ul>
            {data.skills.map((skill) => (
              <li key={skill.id}>
                <strong>{skill.name}</strong>: {skill.level_label}
                {skill.review_due && ` · ${__('review due', 'ohmylms')}`} ·{' '}
                {sprintf(
                  __(
                    '%1$d evidence · %2$d correct independently · %3$d question families',
                    'ohmylms',
                  ),
                  skill.evidence_count,
                  skill.independent_correct,
                  skill.families,
                )}
              </li>
            ))}
          </ul>
          {data.recommendations.length > 0 && (
            <Fragment>
              <h3>{__('Suggestions', 'ohmylms')}</h3>
              <ul>
                {data.recommendations.map((item, index) => (
                  <li key={index}>
                    {item.skill?.name}: {item.message}
                  </li>
                ))}
              </ul>
            </Fragment>
          )}
          <h3>{__('Recent evidence', 'ohmylms')}</h3>
          <table className="widefat striped">
            <thead>
              <tr>
                <th>{__('When (UTC)', 'ohmylms')}</th>
                <th>{__('Question', 'ohmylms')}</th>
                <th>{__('Source', 'ohmylms')}</th>
                <th>{__('Marks', 'ohmylms')}</th>
                <th>{__('Flags', 'ohmylms')}</th>
              </tr>
            </thead>
            <tbody>
              {data.evidence
                .filter((row) => row.role === 'primary')
                .map((row, index) => (
                  <tr key={index} style={Number(row.superseded) ? { opacity: 0.5 } : null}>
                    <td>{row.evidence_at}</td>
                    <td>{row.question}</td>
                    <td>{row.source_type}</td>
                    <td>
                      {Number(row.awarded)} / {Number(row.available)}
                    </td>
                    <td>
                      {[
                        Number(row.independent) ? '' : __('assisted', 'ohmylms'),
                        Number(row.first_try) ? '' : __('repeat', 'ohmylms'),
                        Number(row.superseded) ? __('regraded', 'ohmylms') : '',
                      ]
                        .filter(Boolean)
                        .join(', ')}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {window.ohmylmsAssessment?.isAdmin && (
            <Button
              variant="secondary"
              onClick={() =>
                rebuildStudent(student.id).then(load, (cause) => setError(cause.message))
              }
            >
              {__('Rebuild from grade history', 'ohmylms')}
            </Button>
          )}
        </Fragment>
      )}
    </Modal>
  );
}
