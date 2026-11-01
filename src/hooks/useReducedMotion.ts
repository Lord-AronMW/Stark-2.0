import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.matchMedia(QUERY).matches : false,
  );

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const handle = (event: MediaQueryListEvent) => setReduced(event.matches);
    mql.addEventListener('change', handle);
    return () => mql.removeEventListener('change', handle);
  }, []);

  return reduced;
}
