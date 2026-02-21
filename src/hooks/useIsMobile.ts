import { useState, useEffect } from 'react';

/** matchMedia ile sync initial value — ilk render'da doğru değer, CLS sıfır */
function getInitialValue(breakpoint: number): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
}

export default function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(() => getInitialValue(breakpoint));

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    // Sync value — gerekli değil ama güvenlik için
    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobile;
}
