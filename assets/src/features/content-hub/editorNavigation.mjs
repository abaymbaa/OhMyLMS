import { hashQuery } from './hubRoutes.mjs';

/** Keep the syllabus selection when opening its reusable content in a standalone editor. */
export function syllabusReturnPath(id, node) {
  return `/content-hub/curriculum/syllabus/${Number(id)}?${new URLSearchParams({ node })}`;
}

export function withEditorReturn(path, returnTo) {
  return returnTo ? `${path}?${new URLSearchParams({ returnTo })}` : path;
}

export function editorBackPath(hash, fallback) {
  const target = hashQuery(hash).get('returnTo');
  // Only accept a local syllabus workspace, never an arbitrary URL from the query string.
  return /^\/content-hub\/curriculum\/syllabus\/[1-9]\d*(?:\?node=[cgs](?:%3A|:)\d+(?:(?:%3A|:)\d+)?)?$/i.test(
    target || '',
  )
    ? target
    : fallback;
}
