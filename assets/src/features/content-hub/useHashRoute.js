import { useEffect, useState } from '@wordpress/element';

const catalogMatch = () => /#\/content-hub\/catalog\/(\d+)/.exec(window.location.hash);

/** The course whose catalog is open, read from the hash route (the hub is addressed by `#/content-hub/catalog/ID`). */
export function useCatalogCourseId() {
  const [id, setId] = useState(() => Number(catalogMatch()?.[1]) || 0);
  useEffect(() => {
    const update = () => setId(Number(catalogMatch()?.[1]) || 0);
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  return id;
}
