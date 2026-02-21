import { useRef, useEffect } from 'react';
import useIsMobile from '../../hooks/useIsMobile';

interface VideoBackgroundProps {
  src: string;
  webmSrc?: string;
  posterSrc?: string;
  overlay?: string;
  className?: string;
}

export default function VideoBackground({
  src,
  webmSrc,
  posterSrc,
  overlay = 'bg-black/50',
  className = '',
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile || !videoRef.current) return;

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {isMobile && posterSrc ? (
        <img
          src={posterSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster={posterSrc}
          className="absolute inset-0 w-full h-full object-cover"
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
