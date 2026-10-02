import { createElement, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { ListTableFrame } from '../students/ListTableFrame';
import { AddModal, EditModal, addLabel } from './AddModal';
import { ViewAsModal, canViewAs } from './ViewAsModal';

const labels = {
  teachers: 'Teachers',
  parents: 'Parents',
  users: 'All accounts',
  classes: 'Classes',
  schools: 'Schools',
};

export function PeopleDirectory({ tab, readRuntime }) {
  const {
    I: Controls,
    JU: AvatarPlaceholder,
    aY: Filters,
    sN: { A: Table },
    fN: Pagination,
    aN: date,
    Ne: MenuIcon,
    q: { Icon },
    uf: Empty,
    df: EmptyIcon,
  } = readRuntime();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [revision, setRevision] = useState(0);
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState([]);
  const [failedAvatars, setFailedAvatars] = useState([]);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(0);
  const [viewAs, setViewAs] = useState(null);
  const accounts = ['teachers', 'parents', 'users'].includes(tab);
  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    async function load() {
      const result = [];
      // These existing endpoints return batches of 50, without a total header.
      for (let batch = 1; ; batch++) {
        const role = tab === 'teachers' ? 'teacher' : tab === 'parents' ? 'parent' : '';
        const data = await window.wp.apiFetch({
          path: `/ohmylms/v1/school/${accounts ? 'users' : tab}?page=${batch}&role=${role}`,
        });
        if (!active) return;
        result.push(...data);
        if (data.length < 50) break;
      }
      if (tab === 'classes') {
        for (let batch = 1; ; batch++) {
          const schools = await window.wp.apiFetch({
            path: `/ohmylms/v1/school/schools?page=${batch}`,
          });
          if (!active) return;
          for (const school of schools) {
            for (let classPage = 1; ; classPage++) {
              const classes = await window.wp.apiFetch({
                path: `/ohmylms/v1/school/schools/${school.id}/classes?page=${classPage}`,
              });
              if (!active) return;
              result.push(...classes.map((row) => ({ ...row, school_name: school.name })));
              if (classes.length < 50) break;
            }
          }
          if (schools.length < 50) break;
        }
      }
      if (active) setRows(result);
    }
    load()
      .catch((failure) => {
        if (active) setError(failure.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [tab, revision]);
  const badge = (value, variant = 'secondary') => (
    <Controls.BadgeWP variant={variant} isBorderLess>
      {value ?? '-'}
    </Controls.BadgeWP>
  );
  const name = (row) => (accounts ? row.display_name : row.name);
  const columns = [
    {
      title: __(accounts ? 'Name' : tab === 'classes' ? 'Class Name' : 'School Name', 'ohmylms'),
      key: 'name',
      size: '320px',
      render: (_, row) => (
        <Controls.FlexWP align="start" justify="start" gap={4}>
          {accounts &&
            (row.avatar && !failedAvatars.includes(row.id) ? (
              <img
                src={row.avatar}
                alt=""
                width={40}
                height={40}
                style={{ borderRadius: '50%', flexShrink: 0 }}
                onError={() => setFailedAvatars((previous) => [...previous, row.id])}
              />
            ) : (
              <AvatarPlaceholder />
            ))}
          <Controls.FlexWP direction="column">
            <Controls.TextWP as="span" color="#000d25" size={16}>
              {name(row)}
            </Controls.TextWP>
            {accounts &&
              badge(
                row.last_login
                  ? `${__('Last login', 'ohmylms')} ${date()(row.last_login).format('MMMM DD, YYYY')}`
                  : __('Not logged in yet', 'ohmylms'),
              )}
          </Controls.FlexWP>
        </Controls.FlexWP>
      ),
    },
    {
      title: __(accounts ? 'Reg. Date' : 'Created Date', 'ohmylms'),
      key: 'created',
      render: (_, row) =>
        badge(row.created_at ? date()(row.created_at).format('MMMM DD, YYYY') : '-'),
    },
    ...(accounts
      ? [
          {
            title: __('Email', 'ohmylms'),
            dataIndex: 'email',
            key: 'email',
            render: (value) => badge(value),
          },
          {
            title: __('Username', 'ohmylms'),
            dataIndex: 'user_login',
            key: 'user_login',
            render: (value) => badge(value),
          },
          {
            title: __('Roles', 'ohmylms'),
            dataIndex: 'roles',
            key: 'roles',
            render: (value) => badge(value),
          },
        ]
      : tab === 'classes'
        ? [
            {
              title: __('School', 'ohmylms'),
              dataIndex: 'school_name',
              key: 'school_name',
              render: (value) => badge(value || __('Independent', 'ohmylms')),
            },

            {
              title: __('Subject', 'ohmylms'),
              dataIndex: 'subject',
              key: 'subject',
              render: (value) => badge(value || '-'),
            },
            {
              title: __('Grade', 'ohmylms'),
              dataIndex: 'grade',
              key: 'grade',
              render: (value) => badge(value || '-'),
            },
          ]
        : [
            {
              title: __('Timezone', 'ohmylms'),
              dataIndex: 'timezone',
              key: 'timezone',
              render: (value) => badge(value),
            },
          ]),
    {
      title: __('Status', 'ohmylms'),
      key: 'status',
      render: (_, row) =>
        badge(
          row.status === 'archived'
            ? __('Archived', 'ohmylms')
            : row.is_banned
              ? __('Blocked', 'ohmylms')
              : __('Active', 'ohmylms'),
          row.is_banned ? 'danger' : row.status === 'archived' ? 'secondary' : 'success',
        ),
    },
    {
      title: __('Action', 'ohmylms'),
      key: 'action',
      render: (_, row) => (
        <Controls.DropdownMenuWP
          icon={<Icon icon={MenuIcon.A} />}
          controls={[
            ...(canViewAs() && ['teachers', 'parents'].includes(tab)
              ? [
                  {
                    title: __(tab === 'teachers' ? 'View as teacher' : 'View as parent', 'ohmylms'),
                    key: 'view-as',
                    onClick: () =>
                      setViewAs({
                        role: tab === 'teachers' ? 'teacher' : 'parent',
                        user: { id: row.id, name: row.display_name },
                      }),
                  },
                ]
              : []),
            ...(canViewAs() && tab === 'classes'
              ? ['student', 'instructor'].map((role) => ({
                  title: __(
                    role === 'student' ? 'View as student' : 'View as instructor',
                    'ohmylms',
                  ),
                  key: `view-as-${role}`,
                  onClick: () => setViewAs({ role, classId: Number(row.id) }),
                }))
              : []),
            ...(accounts
              ? row.edit_url
                ? [
                    {
                      title: __('Edit user', 'ohmylms'),
                      key: 'edit',
                      onClick: () => setEditing(row.id),
                    },
                  ]
                : []
              : [
                  {
                    title: __('Manage', 'ohmylms'),
                    key: 'manage',
                    onClick: () => {
                      window.location.href = `${window.location.origin}/?ohmylms_portal=1&school=${tab === 'schools' ? row.id : row.school_id || ''}`;
                    },
                  },
                  ...(tab === 'classes' && row.status === 'active'
                    ? [
                        {
                          title: __('Archive class', 'ohmylms'),
                          key: 'archive',
                          onClick: async () => {
                            if (!window.confirm(__('Archive this class?', 'ohmylms'))) return;
                            try {
                              await window.wp.apiFetch({
                                path: `/ohmylms/v1/school/classes/${row.id}/archive`,
                                method: 'POST',
                                data: {},
                              });
                              setRevision((value) => value + 1);
                            } catch (failure) {
                              setError(failure.message);
                            }
                          },
                        },
                      ]
                    : []),
                ]),
          ]}
        />
      ),
    },
  ];
  const filtered = rows.filter((row) => {
    const match = [
      name(row),
      row.email,
      row.user_login,
      row.subject,
      row.grade,
      row.timezone,
      row.school_name,
    ].some((value) =>
      String(value || '')
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
    if (!match || !dateFilter) return match;
    if (!row.created_at) return false;
    const created = date()(row.created_at);
    const now = date()();
    if (Array.isArray(dateFilter))
      return (
        created.isAfter(date()(dateFilter[0]).startOf('day').subtract(1, 'second')) &&
        created.isBefore(date()(dateFilter[1]).endOf('day'))
      );
    const starts = {
      last_30_days: now.clone().subtract(30, 'days'),
      current_month: now.clone().startOf('month'),
      previous_month: now.clone().subtract(1, 'month').startOf('month'),
      current_year: now.clone().startOf('year'),
      last_12_months: now.clone().subtract(12, 'months'),
    };
    return (
      !created.isBefore(starts[dateFilter]) &&
      (dateFilter !== 'previous_month' || created.isBefore(now.clone().startOf('month')))
    );
  });
  const options = [
    ['', 'All Times'],
    ['last_30_days', 'Last 30 days'],
    ['current_month', 'Current month'],
    ['previous_month', 'Previous month'],
    ['current_year', 'Current year'],
    ['last_12_months', 'Last 12 months'],
  ].map(([value, label]) => ({ value, label: __(label, 'ohmylms') }));
  return (
    <>
      {viewAs && <ViewAsModal {...viewAs} onClose={() => setViewAs(null)} />}
      {error && (
        <div role="alert">
          {error}{' '}
          <button onClick={() => setRevision(revision + 1)}>{__('Retry', 'ohmylms')}</button>
        </div>
      )}
      <ListTableFrame
        readRuntime={readRuntime}
        toolbar={
          <Filters
            handleSearch={(value) => {
              setSearch(value);
              setPage(1);
              setSelected([]);
            }}
            searchPlaceholder={__(`Search ${labels[tab]}`, 'ohmylms')}
            handleFilterByDays={(value) => {
              setDateFilter(value);
              setPage(1);
              setSelected([]);
            }}
            filterByDays={dateFilter}
            filterByDaysOptions={options}
            categories={[]}
            currentPage={page}
            totalItems={filtered.length}
            showFilterByPriceType={false}
            showFilterByCategory={false}
            showFilterByStatus={false}
          />
        }
      >
        <div style={{ marginBottom: 16 }}>
          <Controls.ButtonWP
            variant="secondary"
            onClick={() => setCreating(true)}
            children={__(addLabel(tab), 'ohmylms')}
          />
        </div>
        {editing > 0 && (
          <EditModal
            id={editing}
            onClose={() => setEditing(0)}
            onSaved={() => {
              setEditing(0);
              setRevision((value) => value + 1);
            }}
          />
        )}
        {creating && (
          <AddModal
            kind={tab}
            onClose={() => setCreating(false)}
            onSaved={() => {
              setCreating(false);
              setRevision((value) => value + 1);
            }}
          />
        )}
        <Table
          rowKey="id"
          columns={columns}
          dataSource={filtered.slice((page - 1) * 5, page * 5)}
          rowSelection={{ selectedRowKeys: selected, onChange: setSelected }}
          pagination={false}
          loading={loading}
          className="student-listing-table"
          locale={{
            emptyText: <Empty icon={<EmptyIcon />} title={__('No records yet.', 'ohmylms')} />,
          }}
        />
        {!loading && filtered.length > 5 && (
          <Pagination
            total={filtered.length}
            currentPage={page}
            perPage={5}
            onPageChange={(value) => {
              setPage(value);
              setSelected([]);
            }}
          />
        )}
      </ListTableFrame>
    </>
  );
}
