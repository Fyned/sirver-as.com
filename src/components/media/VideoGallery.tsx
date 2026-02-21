import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoLightbox from './VideoLightbox';
import type { MediaItem } from '../../data/media';

interface VideoGalleryProps {
  items: MediaItem[];
  categories?: string[];
  pageSize?: number;
}

export default function VideoGallery({ items, categories, pageSize = 12 }: VideoGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const allCategories = useMemo(() => {
    if (categories) return ['Tümü', ...categories];
    const cats = [...new Set(items.map((item) => item.category))];
    return ['Tümü', ...cats];
  }, [items, categories]);

  const filtered = useMemo(() => {
    if (activeCategory === 'Tümü') return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };
  const goToNext = () => {
    if (lightboxIndex !== null && lightboxIndex < visible.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const currentItem = lightboxIndex !== null ? visible[lightboxIndex] : null;

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(pageSize);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-sirver-primary text-white shadow-lg shadow-sirver-primary/30'
                : 'bg-white/80 text-gray-700 hover:bg-sirver-primary/10 hover:text-sirver-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {visible.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
            className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-sirver-secondary"
            onClick={() => openLightbox(index)}
          >
            <video
              src={item.src}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-white fill-white ml-0.5" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-sm font-medium truncate">{item.alt}</p>
              <span className="text-white/60 text-xs">{item.category}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + pageSize)}
            className="px-8 py-3 bg-sirver-primary text-white rounded-full font-medium hover:bg-sirver-primary/90 transition-colors shadow-lg shadow-sirver-primary/20"
          >
            Daha Fazla Yükle ({filtered.length - visibleCount} kalan)
          </button>
        </div>
      )}

      {/* Lightbox */}
      {currentItem && (
        <VideoLightbox
          src={currentItem.src}
          webmSrc={currentItem.webmSrc}
          isOpen={lightboxIndex !== null}
          onClose={closeLightbox}
          onPrev={lightboxIndex! > 0 ? goToPrev : undefined}
          onNext={lightboxIndex! < visible.length - 1 ? goToNext : undefined}
          title={currentItem.alt}
        />
      )}
    </div>
  );
}
