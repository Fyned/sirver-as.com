import { useEffect, useRef, useCallback } from 'react';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const rafId = useRef(0);

  const handleScroll = useCallback(() => {
    // Zaten bekleyen bir frame varsa atla
    if (rafId.current) return;

    rafId.current = requestAnimationFrame(() => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0 && barRef.current) {
        const pct = (window.scrollY / scrollHeight) * 100;
        barRef.current.style.width = `${pct}%`;
      }
      rafId.current = 0;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999]">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-sirver-primary via-green-400 to-sirver-accent"
        style={{ width: '0%', willChange: 'width' }}
      />
    </div>
  );
}
