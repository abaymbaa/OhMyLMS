import { createElement, useEffect, useState } from '@wordpress/element';
import { Modal, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const accountFields = [
  ['first_name', 'First name', 'text', true],
  ['last_name', 'Last name', 'text', false],
  ['email', 'Email', 'email', true],
  ['username', 'Username (optional)', 'text', false],
];

const kinds = {
  students: { title: 'Add student', path: 'users', role: 'student', account: true },
  teachers: { title: 'Add teacher', path: 'users', role: 'teacher', account: true },
  parents: { title: 'Add parent', path: 'users', role: 'parent', account: true },
  users: { title: 'Add user', path: 'users', account: true },
  classes: {
    title: 'Create independent class',
    path: 'classes',
    fields: [
      ['name', 'Class name', 'text', true],
      ['subject', 'Subject', 'text', false],
      ['grade', 'Grade', 'text', false],
    ],
  },
  schools: {
    title: 'Create school',
    path: 'schools',
    fields: [
      ['name', 'School name', 'text', true],
      ['timezone', 'Timezone', 'text', true, 'Asia/Ulaanbaatar'],
    ],
  },
};

export function addLabel(kind) {
  return kinds[kind]?.title || 'Add';
}

export function AddModal({ kind, onClose, onSaved }) {
  const config = kinds[kind];
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  if (!config) return null;
  const fields = config.account ? accountFields : config.fields;
  return (
    <Modal title={__(config.title, 'ohmylms')} onRequestClose={() => !saving && onClose()}>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (saving) return;
          const data = Object.fromEntries(new FormData(event.currentTarget));
          if (config.account) {
            data.role = config.role || data.role;
            data.send_email = data.send_email === 'on';
          }
          setSaving(true);
          setError('');
          try {
            const result = await window.wp.apiFetch({
              path: `/ohmylms/v1/school/${config.path}`,
              method: 'POST',
              data,
            });
            onSaved(result);
          } catch (failure) {
            setError(failure.message);
            setSaving(false);
          }
        }}
      >
        <fieldset disabled={saving} style={{ border: 0, padding: 0, margin: 0 }}>
          {config.account && !config.role && (
            <p>
              <label>
                {__('Role', 'ohmylms')} *
                <br />
                <select name="role" required defaultValue="student" style={{ width: '100%' }}>
                  <option value="student">{__('Student', 'ohmylms')}</option>
                  <option value="teacher">{__('Teacher', 'ohmylms')}</option>
                  <option value="parent">{__('Parent', 'ohmylms')}</option>
                </select>
              </label>
            </p>
          )}
          {fields.map(([name, label, type, required, value]) => (
            <p key={name}>
              <label>
                {__(label, 'ohmylms')}
                {required ? ' *' : ''}
                <br />
                <input
                  name={name}
                  type={type}
                  required={required}
                  defaultValue={value}
                  maxLength={190}
                  style={{ width: '100%' }}
                />
              </label>
            </p>
          ))}
          {config.account && (
            <p>
              <label>
                <input type="checkbox" name="send_email" defaultChecked />{' '}
                {__('Email the user a link to set their password', 'ohmylms')}
              </label>
            </p>
          )}
          {error && (
            <p role="alert" style={{ color: '#b32d2e' }}>
              {error}
            </p>
          )}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <Button variant="tertiary" onClick={onClose} disabled={saving}>
              {__('Cancel', 'ohmylms')}
            </Button>
            <Button variant="primary" type="submit" isBusy={saving} disabled={saving}>
              {__('Save', 'ohmylms')}
            </Button>
          </div>
        </fieldset>
      </form>
    </Modal>
  );
}

export function EditModal({ id, onClose, onSaved }) {
  const [user, setUser] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    window
      .wp.apiFetch({ path: `/ohmylms/v1/school/users/${id}` })
      .then(setUser, (failure) => setError(failure.message));
  }, [id]);
  const fields = [
    ['first_name', 'First name', 'text', true],
    ['last_name', 'Last name', 'text', false],
    ['email', 'Email', 'email', true],
  ];
  return (
    <Modal title={__('Edit user', 'ohmylms')} onRequestClose={() => !saving && onClose()}>
      {!user ? (
        <p role={error ? 'alert' : 'status'}>{error || __('Loading…', 'ohmylms')}</p>
      ) : (
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            if (saving) return;
            const data = Object.fromEntries(new FormData(event.currentTarget));
            data.send_reset = data.send_reset === 'on';
            setSaving(true);
            setError('');
            try {
              onSaved(
                await window.wp.apiFetch({
                  path: `/ohmylms/v1/school/users/${id}`,
                  method: 'POST',
                  data,
                }),
              );
            } catch (failure) {
              setError(failure.message);
              setSaving(false);
            }
          }}
        >
          <fieldset disabled={saving} style={{ border: 0, padding: 0, margin: 0 }}>
            <p>
              {__('Username', 'ohmylms')}: <strong>{user.username}</strong>
            </p>
            {fields.map(([name, label, type, required]) => (
              <p key={name}>
                <label>
                  {__(label, 'ohmylms')}
                  {required ? ' *' : ''}
                  <br />
                  <input
                    name={name}
                    type={type}
                    required={required}
                    defaultValue={user[name]}
                    maxLength={190}
                    style={{ width: '100%' }}
                  />
                </label>
              </p>
            ))}
            <p>
              <label>
                <input type="checkbox" name="send_reset" />{' '}
                {__('Email the user a password reset link', 'ohmylms')}
              </label>
            </p>
            {error && (
              <p role="alert" style={{ color: '#b32d2e' }}>
                {error}
              </p>
            )}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <Button variant="tertiary" onClick={onClose} disabled={saving}>
                {__('Cancel', 'ohmylms')}
              </Button>
              <Button variant="primary" type="submit" isBusy={saving} disabled={saving}>
                {__('Save', 'ohmylms')}
              </Button>
            </div>
          </fieldset>
        </form>
      )}
    </Modal>
  );
}
