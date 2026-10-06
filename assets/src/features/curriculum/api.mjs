const request = (options) => window.wp.apiFetch(options);
const base = '/ohmylms/v1';
const query = (params) => {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params || {})) {
    if (value !== undefined && value !== null && value !== '') search.set(key, String(value));
  }
  const text = search.toString();
  return text ? `?${text}` : '';
};

/** REST calls for curriculum administration. Each accepts an injected request function for tests. */
export const loadTree = (fetch = request) => fetch({ path: `${base}/curriculum/tree` });
export const loadItem = (id, fetch = request) => fetch({ path: `${base}/curriculum/items/${id}` });
export const createItem = (data, fetch = request) =>
  fetch({ path: `${base}/curriculum/items`, method: 'POST', data });
export const updateItem = (id, data, fetch = request) =>
  fetch({ path: `${base}/curriculum/items/${id}`, method: 'PUT', data });
export const moveItem = (id, parentId, position, fetch = request) =>
  fetch({
    path: `${base}/curriculum/items/${id}/move`,
    method: 'POST',
    data:
      position === undefined || position === null
        ? { parent_id: parentId }
        : { parent_id: parentId, position },
  });
/** children: '' (leaf), 'promote' or 'delete'; confirm must be true when the server asks. */
export const deleteItem = (id, { children = '', confirm = false } = {}, fetch = request) =>
  fetch({
    path: `${base}/curriculum/items/${id}`,
    method: 'DELETE',
    data: { children, confirm },
  });
export const addLink = (id, objectType, objectId, fetch = request) =>
  fetch({
    path: `${base}/curriculum/items/${id}/links`,
    method: 'POST',
    data: { object_type: objectType, object_id: objectId },
  });
export const removeLink = (id, objectType, objectId, fetch = request) =>
  fetch({
    path: `${base}/curriculum/items/${id}/links`,
    method: 'DELETE',
    data: { object_type: objectType, object_id: objectId },
  });
export const searchTargets = (type, search, fetch = request) =>
  fetch({ path: `${base}/curriculum/link-targets${query({ type, search })}` });

/** A syllabus's skill groups and skills. Every write answers with the syllabus's fresh outline and the item tree. */
const syllabus = (id) => `${base}/curriculum/items/${id}/syllabus`;
export const loadSyllabus = (id, fetch = request) => fetch({ path: syllabus(id) });
export const addGroup = (id, data, fetch = request) =>
  fetch({ path: `${syllabus(id)}/groups`, method: 'POST', data });
export const updateGroup = (id, group, data, fetch = request) =>
  fetch({ path: `${syllabus(id)}/groups/${group}`, method: 'PUT', data });
export const moveGroup = (id, group, itemId, position, fetch = request) =>
  fetch({
    path: `${syllabus(id)}/groups/${group}/move`,
    method: 'POST',
    data: { item_id: itemId, position },
  });
export const deleteGroup = (id, group, confirm = false, fetch = request) =>
  fetch({ path: `${syllabus(id)}/groups/${group}`, method: 'DELETE', data: { confirm } });
/** data is {name, code, description}, or {term_id} to place an existing library skill. */
export const addSkill = (id, group, data, fetch = request) =>
  fetch({ path: `${syllabus(id)}/groups/${group}/skills`, method: 'POST', data });
export const updateSkill = (id, term, data, fetch = request) =>
  fetch({ path: `${syllabus(id)}/skills/${term}`, method: 'PUT', data });
export const removeSkill = (id, group, term, fetch = request) =>
  fetch({ path: `${syllabus(id)}/groups/${group}/skills/${term}`, method: 'DELETE' });
export const moveSkill = (id, group, term, toGroup, position, fetch = request) =>
  fetch({
    path: `${syllabus(id)}/groups/${group}/skills/${term}/move`,
    method: 'POST',
    data: { group_id: toGroup, position },
  });
/** Check (dryRun) or apply rows read from a CSV. */
export const importRows = (id, rows, dryRun, fetch = request) =>
  fetch({ path: `${syllabus(id)}/import`, method: 'POST', data: { rows, dry_run: dryRun } });

export const saveMapping = (data, fetch = request) =>
  fetch({ path: `${base}/skill-mappings`, method: 'PUT', data });
export const removeMapping = (specificId, sharedId, fetch = request) =>
  fetch({
    path: `${base}/skill-mappings`,
    method: 'DELETE',
    data: { specific_id: specificId, shared_id: sharedId },
  });
