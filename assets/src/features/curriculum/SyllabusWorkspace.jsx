import {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, Dashicon, Notice, Spinner } from '@wordpress/components';
import * as api from './api.mjs';
import { ChapterPane } from './ChapterPane';
import { WorkspaceContext } from './context';
import { ImportDialog } from './ImportDialog';
import { SkillPane } from './SkillPane';
import { TopicPane } from './TopicPane';
import { outlineCsv, templateCsv } from './csv.mjs';
import { download } from './download.mjs';
import { fileName, totalsParts } from './syllabus.mjs';
import { RowMenu } from './WorkspaceParts';
import { WorkspaceSidebar } from './WorkspaceSidebar';
import { createActions } from './workspaceActions';
import {
  CURRICULUM_PATH,
  ancestorKeys,
  defaultKey,
  resolveKey,
  syllabusIdFromHash,
} from './workspace.mjs';
import { useCourseCatalog } from './useCourseCatalog';
import { useSyllabusWorkspace } from './useSyllabusWorkspace';

function countsLine(totals) {
  const { contents, groups, skills } = totalsParts(totals);
  return [
    sprintf(_n('%d topic', '%d topics', contents, 'ohmylms'), contents),
    sprintf(_n('%d chapter', '%d chapters', groups, 'ohmylms'), groups),
    sprintf(_n('%d skill', '%d skills', skills, 'ohmylms'), skills),
  ].join(' · ');
}

/**
 * The full-page syllabus editor, laid out like the course builder: the whole syllabus as an outline on the
 * left (topics, the chapters in them, the skills in each chapter) and, on the right, whatever is selected,
 * to read and edit. A syllabus is also a course, so its chapters and skills are the course's, and lessons,
 * quizzes and assignments are attached to its chapters from here.
 */
export function SyllabusWorkspace({ syllabusId }) {
  const ws = useSyllabusWorkspace(syllabusId);
  const { outline, tree } = ws;
  const course = outline?.course ?? null;
  const courseCatalog = useCourseCatalog(course?.id || 0, ws.revision);
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(() => new Set());
  const [collapsed, setCollapsed] = useState(false);
  const [importing, setImporting] = useState(false);
  const remembered = useRef('');
  const started = useRef(false);
  const main = useRef(null);

  // Start on the first chapter, as the course builder does.
  useEffect(() => {
    if (!tree.root || started.current) return;
    started.current = true;
    setSelected(defaultKey(tree));
  }, [tree]);

  const active = tree.root ? resolveKey(tree, selected, remembered.current) : '';
  useEffect(() => {
    // A node that is deleted falls back to the one it sat in.
    remembered.current = tree.index.get(active)?.parentKey || remembered.current;
    // Everything on the way to the selection is open, so it can be seen in the outline.
    setOpen((previous) => {
      const needed = [tree.root?.key, ...ancestorKeys(tree.index, active)].filter(Boolean);
      return needed.every((key) => previous.has(key))
        ? previous
        : new Set([...previous, ...needed]);
    });
  }, [tree, active]);
  useEffect(() => {
    main.current?.scrollTo?.({ top: 0 });
    // Choosing a node opens it, so what is inside it shows in the outline. Closing it afterwards sticks.
    if (active)
      setOpen((previous) => (previous.has(active) ? previous : new Set([...previous, active])));
  }, [active]);

  const select = useCallback((key) => setSelected(key), []);
  const toggle = useCallback(
    (key) =>
      setOpen((previous) => {
        const next = new Set(previous);
        if (next.has(key)) next.delete(key);
        else next.add(key);
        return next;
      }),
    [],
  );
  const actions = useMemo(
    () => createActions({ ws, syllabusId, tree, items: ws.items, select }),
    [ws, syllabusId, tree, select],
  );

  if (ws.error) {
    return (
      <div className="ohmylms-ws ohmylms-ws-fallback">
        <Notice status="error" isDismissible={false}>
          {ws.error}
        </Notice>
        <p>
          <Button variant="secondary" onClick={ws.reload}>
            {__('Try again', 'ohmylms')}
          </Button>{' '}
          <Button variant="link" href={`#${CURRICULUM_PATH}`}>
            {__('Back to the curriculum', 'ohmylms')}
          </Button>
        </p>
      </div>
    );
  }
  if (!outline || !tree.root) {
    return (
      <div className="ohmylms-ws ohmylms-ws-fallback" role="status">
        <Spinner /> {__('Opening the syllabus…', 'ohmylms')}
      </div>
    );
  }

  const node = tree.index.get(active) || tree.root;
  const name = outline.syllabus.name;
  const value = {
    syllabusId,
    outline,
    items: ws.items,
    tree,
    selected: active,
    select,
    pending: ws.pending,
    actions,
    course,
    courseCatalog,
    updateCourse: () =>
      ws.run(
        () => api.ensureCourse(syllabusId),
        __('The course now matches the syllabus.', 'ohmylms'),
      ),
  };
  return (
    <WorkspaceContext.Provider value={value}>
      <div className="ohmylms-ws">
        <header className="ohmylms-ws-header">
          <a className="ohmylms-ws-back" href={`#${CURRICULUM_PATH}`}>
            <Dashicon icon="arrow-left-alt" />
            {__('Back', 'ohmylms')}
          </a>
          <div className="ohmylms-ws-header-title">
            <h1>{name}</h1>
            <p>
              {__('Syllabus', 'ohmylms')} · {countsLine(outline.totals)}
              {course &&
                ` · ${course.status === 'publish' ? __('Course published', 'ohmylms') : __('Course draft', 'ohmylms')}`}
            </p>
          </div>
          <div className="ohmylms-ws-header-actions">
            <Button variant="secondary" disabled={ws.pending} onClick={() => setImporting(true)}>
              {__('Import CSV', 'ohmylms')}
            </Button>
            <RowMenu
              label={__('More syllabus actions', 'ohmylms')}
              controls={[
                {
                  title: __('Export CSV', 'ohmylms'),
                  isDisabled: outline.totals.groups === 0,
                  onClick: () => download(outlineCsv(outline), fileName(name, 'export')),
                },
                {
                  title: __('Download CSV template', 'ohmylms'),
                  onClick: () => download(templateCsv(), fileName(name, 'template')),
                },
                {
                  title: __('Update course from syllabus', 'ohmylms'),
                  isDisabled: ws.pending,
                  onClick: value.updateCourse,
                },
              ]}
            />
            <Button variant="primary" href={`#${CURRICULUM_PATH}`}>
              {__('Done', 'ohmylms')}
            </Button>
          </div>
        </header>
        <div className="ohmylms-ws-body">
          <WorkspaceSidebar
            tree={tree}
            selected={active}
            open={open}
            onSelect={select}
            onToggle={toggle}
            onOpenAll={() =>
              setOpen(
                new Set(
                  [...tree.index.values()]
                    .filter((entry) => entry.children.length)
                    .map((entry) => entry.key),
                ),
              )
            }
            onCloseAll={() => setOpen(new Set([tree.root.key]))}
            onAddChapter={(itemId, data) => actions.addChapter(itemId, data)}
            collapsed={collapsed}
            onCollapse={() => setCollapsed((state) => !state)}
            pending={ws.pending}
          />
          <main className="ohmylms-ws-main" ref={main}>
            <div className="ohmylms-ws-status" aria-live="polite">
              {ws.notice && (
                <Notice key={ws.notice.id} status={ws.notice.kind} onRemove={ws.dismiss}>
                  {ws.notice.text}
                </Notice>
              )}
            </div>
            {node.kind === 'content' && <TopicPane key={node.key} node={node} />}
            {node.kind === 'group' && <ChapterPane key={node.key} node={node} />}
            {node.kind === 'skill' && <SkillPane key={node.key} node={node} />}
          </main>
        </div>
        {importing && (
          <ImportDialog
            syllabus={outline.syllabus}
            onClose={() => setImporting(false)}
            onImported={(response) => {
              ws.adopt(response);
              ws.say('success', __('Syllabus imported.', 'ohmylms'));
            }}
          />
        )}
      </div>
    </WorkspaceContext.Provider>
  );
}

/** The syllabus whose workspace is open, from the hash route; it changes when the address does. */
function useSyllabusId() {
  const [id, setId] = useState(() => syllabusIdFromHash(window.location.hash));
  useEffect(() => {
    const update = () => setId(syllabusIdFromHash(window.location.hash));
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  return id;
}

/** The page behind `#/content-hub/curriculum/syllabus/ID`. */
export function SyllabusPage() {
  const id = useSyllabusId();
  if (!id) {
    return (
      <div className="ohmylms-ws ohmylms-ws-fallback">
        <Notice status="error" isDismissible={false}>
          {__('Choose a syllabus from the curriculum to edit it.', 'ohmylms')}
        </Notice>
        <Button variant="link" href={`#${CURRICULUM_PATH}`}>
          {__('Back to the curriculum', 'ohmylms')}
        </Button>
      </div>
    );
  }
  return <SyllabusWorkspace key={id} syllabusId={id} />;
}
