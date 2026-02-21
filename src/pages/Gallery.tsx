import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Image as ImageIcon, Film, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import SectionReveal from '../components/effects/SectionReveal';
import { allMedia as mediaItems, mediaCategories, type MediaItem } from '../data/media';
import { useTranslation } from '../i18n/LanguageContext';

export default function Gallery() {
  const { lang, t } = useTranslation();
  const prefix = lang === 'en' ? '/en' : '';

  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(16);
  const [lightbox, setLightbox] = useState<{ item: MediaItem; index: number } | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'image'>('all');

  // Filter items
  const filteredItems = mediaItems.filter((item) => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const typeMatch = activeTab === 'all' || item.type === activeTab;
    return categoryMatch && typeMatch;
  });

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  // Lightbox navigation
  const openLightbox = (item: MediaItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    setLightbox({ item, index: idx });
  };

  const navigateLightbox = (dir: 1 | -1) => {
    if (!lightbox) return;
    const newIndex = (lightbox.index + dir + filteredItems.length) % filteredItems.length;
    setLightbox({ item: filteredItems[newIndex], index: newIndex });
  };

  return (
    <>
      <SEOHead
        title={t('seo.gallery.title')}
        description={t('seo.gallery.description')}
        path={`${prefix}/galeri`}
      />

      <main className="pt-32 pb-0">
        {/* HERO */}
        <section className="container mx-auto px-4 mb-12">
          <SectionReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-sirver-accent font-bold tracking-widest text-sm uppercase mb-4 block">{t('gallery.badge')}</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-sirver-secondary mb-6">
                {t('gallery.titleStart')}<span className="text-sirver-primary">{t('gallery.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-gray-600">
                {t('gallery.subtitle')}
              </p>
            </div>
          </SectionReveal>
        </section>

        {/* FILTRE TABLARI */}
        <section className="container mx-auto px-4 mb-8">
          {/* Tip filtresi */}
          <div className="flex justify-center gap-3 mb-6">
            {[
              { key: 'all' as const, label: t('gallery.all'), icon: null },
              { key: 'video' as const, label: t('gallery.videos'), icon: Film },
              { key: 'image' as const, label: t('gallery.photos'), icon: ImageIcon },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => { setActiveTab(key); setVisibleCount(16); }}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === key
                    ? 'bg-sirver-secondary text-white shadow-lg'
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {Icon && <Icon size={16} />}
                {label}
              </button>
            ))}
          </div>

          {/* Kategori filtresi */}
          <div className="flex flex-wrap justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {mediaCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(16); }}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-sirver-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {t(`media.categories.${cat}`)}
              </button>
            ))}
          </div>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-400">
              {(t('gallery.itemsFound') as string).replace('{count}', String(filteredItems.length))}
            </span>
          </div>
        </section>

        {/* GALERİ GRID */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(item)}
                  className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-gray-200"
                >
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    {item.type === 'video' ? (
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-all group-hover:scale-110">
                        <ImageIcon className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-xs truncate">{item.alt}</p>
                    <span className="text-white/60 text-[10px] uppercase tracking-wider">{t(`media.categories.${item.category}`)}</span>
                  </div>

                  {/* Type badge */}
                  <div className={`absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    item.type === 'video' ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700'
                  }`}>
                    {item.type === 'video' ? t('gallery.video') : t('gallery.photo')}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Daha Fazla */}
          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="px-8 py-4 bg-sirver-secondary hover:bg-sirver-primary text-white rounded-xl font-bold transition-all hover:-translate-y-1 shadow-lg"
              >
                {t('gallery.loadMore')} ({(t('gallery.remaining') as string).replace('{count}', String(filteredItems.length - visibleCount))})
              </button>
            </div>
          )}
        </section>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
              onClick={() => setLightbox(null)}
            >
              {/* Close button */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <X size={22} />
              </button>

              {/* Navigation — mobilde daha büyük dokunma alanları */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-2 md:left-8 z-50 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-2 md:right-8 z-50 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight size={22} />
              </button>

              {/* Content */}
              <motion.div
                key={lightbox.item.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl max-h-[85vh] w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                {lightbox.item.type === 'video' ? (
                  <video
                    src={lightbox.item.src}
                    controls
                    autoPlay
                    className="w-full max-h-[80vh] rounded-xl"
                    poster={lightbox.item.poster}
                  />
                ) : (
                  <img
                    src={lightbox.item.src}
                    alt={lightbox.item.alt}
                    className="w-full max-h-[80vh] object-contain rounded-xl"
                  />
                )}

                {/* Caption */}
                <div className="text-center mt-4">
                  <p className="text-white text-sm font-medium">{lightbox.item.alt}</p>
                  <p className="text-gray-500 text-xs mt-1">{lightbox.index + 1} / {filteredItems.length}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
