import { useRef, useEffect, useState, type ReactNode } from 'react';
import useIsMobile from '../../hooks/useIsMobile';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({ children, speed = 0.3, className = '' }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight && rect.bottom > 0) {
              const center = rect.top + rect.height / 2 - windowHeight / 2;
              setOffset(center * speed * -1);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, isMobile]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={isMobile ? {} : { transform: `translateY(${offset}px)`, willChange: 'transform' }}
      >
        {children}
      </div>
    </div>
  );
}
