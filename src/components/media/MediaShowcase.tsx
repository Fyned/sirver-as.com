import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  webmSrc?: string;
  poster?: string;
  alt: string;
}

interface MediaShowcaseProps {
  items: MediaItem[];
  autoPlayInterval?: number;
  className?: string;
}

export default function MediaShowcase({
  items,
  autoPlayInterval = 5000,
  className = '',
}: MediaShowcaseProps) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % items.length) + items.length) % items.length);
      setIsPlaying(false);
    },
    [items.length]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPlaying || items.length <= 1) return;
    const timer = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPlaying, goNext, autoPlayInterval, items.length]);

  const item = items[current];

  return (
    <div className={`relative ${className}`}>
      {/* Main display */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-sirver-secondary">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {item.type === 'video' ? (
              isPlaying ? (
                <video
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                >
                  {item.webmSrc && <source src={item.webmSrc} type="video/webm" />}
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={item.poster || ''}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
              )
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors z-10"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {items.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-thin">
          {items.map((thumb, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                i === current
                  ? 'ring-2 ring-sirver-primary ring-offset-2 scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={thumb.type === 'video' ? thumb.poster || '' : thumb.src}
                alt={thumb.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {thumb.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
