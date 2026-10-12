import { useEffect } from 'react';
import { useLocation } from 'react-router';

/** Scroll to top on path change, unless a `?s=` section target is present (handled by the page). */
export function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    if (!new URLSearchParams(search).get('s')) window.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return null;
}
