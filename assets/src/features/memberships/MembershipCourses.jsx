import { createElement } from '@wordpress/element';
import { Notice, Spinner } from '@wordpress/components';
import { CategoryMindmap } from './CategoryMindmap';

export function createMembershipCourses(readRuntime) {
  return function MembershipCourses() {
    const { I: Controls, Ea, T: StoreModule, b: I18n, g: Hooks, y: Data, l: apiFetch, Ge } = readRuntime();
    const plan = Data.useSelect((select) => select(StoreModule.default).selectMembershipPlanData(), []);
    const { updateMembershipPlan } = Data.useDispatch(StoreModule.default);
    const [courses, setCourses] = Hooks.useState([]);
    const [categories, setCategories] = Hooks.useState([]);
    const [tags, setTags] = Hooks.useState([]);
    const [preview, setPreview] = Hooks.useState(null);
    const [error, setError] = Hooks.useState('');
    const [previewError, setPreviewError] = Hooks.useState('');
    const [loading, setLoading] = Hooks.useState(false);
    const [categoryStatus, setCategoryStatus] = Hooks.useState('loading');
    const searchSequence = Hooks.useRef(0);
    // Resolve against WordPress's localized REST root, not the admin page URL.
    const request = ({ path, ...settings }) => {
      const root = window.ohmylms_params?.api_url;
      return apiFetch()({ ...settings, ...(root ? { url: root.replace(/\/$/, '') + '/' + path.replace(/^\//, '') } : { path }) });
    };
    const options = (items) => items.map((item) => ({ value: Number(item.term_id ?? item.id), label: Ge(item.name) }));
    const selection = {
      products: plan?.products || [],
      course_categories: plan?.course_categories || [],
      course_tags: plan?.course_tags || [],
      excluded_courses: plan?.excluded_courses || [],
    };
    const selectionKey = JSON.stringify(selection);
    Hooks.useEffect(() => {
      let active = true;
      request({ path: '/ohmylms/v1/categories' }).then((categoryData) => {
        if (active) {
          setCategories(categoryData.map((item) => ({ value: Number(item.term_id), label: Ge(item.name), parent: Number(item.parent || 0), courses: (item.courses || []).map((course) => ({ ...course, title: Ge(course.title) })) })));
          setCategoryStatus('ready');
        }
      }).catch((cause) => { if (active) { setCategoryStatus('error'); setError(cause.message || I18n.__('Could not load categories.', 'ohmylms')); } });
      request({ path: '/ohmylms/v1/tags' })
        .then((tagData) => { if (active) setTags(options(tagData)); })
        .catch((cause) => { if (active) setError(cause.message || I18n.__('Could not load tags.', 'ohmylms')); });
      return () => { active = false; };
    }, []);
    async function searchCourses(search = '') {
      const sequence = ++searchSequence.current;
      try {
        const data = await request({ path: '/ohmylms/v1/courses?post_status=publish&per_page=100&search=' + encodeURIComponent(search) });
        if (sequence === searchSequence.current) setCourses(options(data));
      } catch (cause) { setError(cause.message || I18n.__('Could not load courses.', 'ohmylms')); }
    }
    Hooks.useEffect(() => { searchCourses(); return () => { searchSequence.current++; }; }, []);
    Hooks.useEffect(() => {
      let active = true;
      if (selection.excluded_courses.length) {
        const query = selection.excluded_courses.map((id) => 'include[]=' + encodeURIComponent(id)).join('&');
        request({ path: '/ohmylms/v1/courses?post_status=publish&per_page=100&' + query })
          .then((data) => { if (active) setCourses((current) => [...new Map([...current, ...options(data)].map((item) => [item.value, item])).values()]); })
          .catch((cause) => { if (active) setError(cause.message); });
      }
      return () => { active = false; };
    }, []);
    Hooks.useEffect(() => {
      let active = true;
      setLoading(true);
      const timer = setTimeout(() => {
        request({ path: '/ohmylms/v1/membership/course-preview', method: 'POST', data: JSON.parse(selectionKey) })
          .then((data) => { if (active) { setPreview(data); setPreviewError(''); } })
          .catch((cause) => { if (active) { setPreview(null); setPreviewError(cause.message || I18n.__('Could not preview courses.', 'ohmylms')); } })
          .finally(() => { if (active) setLoading(false); });
      }, 200);
      return () => { active = false; clearTimeout(timer); };
    }, [selectionKey]);
    const selected = (ids, choices) => ids.map((id) => choices.find((item) => item.value === Number(id)) || { value: Number(id), label: '#' + id });
    const direct = selection.products.map((item) => ({ value: Number(item.id), label: Ge(item.label || item.name || '#' + item.id) }));
    const courseChoices = [...new Map([...courses, ...direct, ...(preview?.courses || []).map((item) => ({ value: item.id, label: Ge(item.name) }))].map((item) => [item.value, item])).values()];
    const field = (label, value, choices, onChange, searchable = false) => (
      <div style={{ marginBottom: 20 }}>
        <Controls.HeadingWP level={4}>{label}</Controls.HeadingWP>
        <Controls.AdvancedSelectWP isMulti closeMenuOnSelect={false} value={value} options={choices} onChange={(items) => onChange(items || [])} onSearch={searchable ? searchCourses : undefined} />
      </div>
    );
    return (
      <Controls.SpacerWP marginTop={4} className="ohmylms-membership-plan-course-section">
        <Ea isBorderless variant="secondary">
          <Controls.SpacerWP padding={6} margin={0}>
            <p>{I18n.__('Include individual courses, categories or tags. Matching courses from subcategories and future published courses are included automatically. Exclusions override every inclusion.', 'ohmylms')}</p>
            {field(I18n.__('Individual courses', 'ohmylms'), direct, courseChoices, (items) => updateMembershipPlan('products', items.map((item) => ({ ...item, id: item.value, name: item.label }))), true)}
            {field(I18n.__('Course categories', 'ohmylms'), selected(selection.course_categories, categories), categories, (items) => updateMembershipPlan('course_categories', items.map((item) => item.value)))}
            <CategoryMindmap categories={categories} selected={selection.course_categories} onChange={(ids) => updateMembershipPlan('course_categories', ids)} emptyMessage={categoryStatus === 'loading' ? I18n.__('Loading course categories…', 'ohmylms') : categoryStatus === 'error' ? I18n.__('Course categories could not be loaded. Please reload this page to try again.', 'ohmylms') : undefined} />
            {field(I18n.__('Course tags', 'ohmylms'), selected(selection.course_tags, tags), tags, (items) => updateMembershipPlan('course_tags', items.map((item) => item.value)))}
            {field(I18n.__('Excluded courses', 'ohmylms'), selected(selection.excluded_courses, courseChoices), courseChoices, (items) => updateMembershipPlan('excluded_courses', items.map((item) => item.value)), true)}
            <Notice status="info" isDismissible={false}>{I18n.__('Active members gain access to matching courses automatically. Removing a match or excluding a course removes access granted by this plan, including courses already started.', 'ohmylms')}</Notice>
            {error && <Notice status="error" isDismissible={false}>{error}</Notice>}
            {previewError && <Notice status="error" isDismissible={false}>{previewError}</Notice>}
            <Controls.HeadingWP level={4}>{I18n.__('Included courses preview', 'ohmylms')}{!loading && preview ? ` (${preview.total})` : ''}</Controls.HeadingWP>
            {loading ? <Spinner /> : preview && (
              preview.courses.length ? <table className="widefat striped"><thead><tr><th>{I18n.__('Course', 'ohmylms')}</th><th>{I18n.__('Included through', 'ohmylms')}</th></tr></thead><tbody>{preview.courses.map((course) => <tr key={course.id}><td>{Ge(course.name)}</td><td>{course.reasons.join(', ')}</td></tr>)}</tbody></table> : <p>{I18n.__('No published courses currently match this plan.', 'ohmylms')}</p>
            )}
          </Controls.SpacerWP>
        </Ea>
      </Controls.SpacerWP>
    );
  };
}
