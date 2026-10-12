import { useEffect } from 'react';
import { useLocation } from 'react-router';

/** Scrolls to the element whose id matches the `?s=` query parameter, or to top on route change. */
export function useScrollToSection(deps: unknown[] = []) {
  const { search, pathname } = useLocation();
  useEffect(() => {
    const target = new URLSearchParams(search).get('s');
    if (!target) {
      window.scrollTo({ top: 0 });
      return;
    }
    const t = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, pathname, ...deps]);
}
