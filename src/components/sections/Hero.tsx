import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Leaf, Truck, Play, Pause } from 'lucide-react';
import AnimatedCounter from '../effects/AnimatedCounter';
import ParticleBackground from '../effects/ParticleBackground';
import useIsMobile from '../../hooks/useIsMobile';
import { getHeroVideos } from '../../data/media';
import { useTranslation } from '../../i18n/LanguageContext';

// Sadece ilk fotoğrafı eager import et, geri kalanlar lazy
import imgStockyard from '../../assets/images/home/stockyard-dark.jpg';

// Diğer fotoğrafların yollarını lazy yüklemek için
const lazyImages = [
  () => import('../../assets/images/sustainability/forest-nature.jpg'),
  () => import('../../assets/images/services/biomass-energy.jpg'),
  () => import('../../assets/images/services/wood-chips-closeup.jpg'),
  () => import('../../assets/images/services/logistics-fleet.jpg'),
];

const heroVideos = getHeroVideos();

export default function Hero() {
  const { lang, t } = useTranslation();
  const prefix = lang === 'en' ? '/en' : '';
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([imgStockyard]);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  // Arka planda diğer fotoğrafları yükle (ilk render sonrası)
  useEffect(() => {
    const timer = setTimeout(() => {
      lazyImages.forEach((loader, i) => {
        loader().then((mod) => {
          setLoadedImages((prev) => {
            const newArr = [...prev];
            newArr[i + 1] = mod.default;
            return newArr;
          });
        });
      });
    }, 2000); // 2sn sonra yüklemeye başla (hero açılışı tamamlansın)
    return () => clearTimeout(timer);
  }, []);

  // Image slideshow - change every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const next = (prev + 1) % (1 + lazyImages.length);
        // Henüz yüklenmemiş fotoğrafa geçme
        if (!loadedImages[next]) return prev;
        return next;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, [loadedImages]);

  // Video carousel - change every 10 seconds
  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Auto-play video on change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (videoPlaying) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [currentVideo, videoPlaying]);

  const toggleVideo = useCallback(() => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setVideoPlaying((p) => !p);
    }
  }, [videoPlaying]);

  const currentSrc = loadedImages[currentImage] || imgStockyard;

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-sirver-secondary pt-20 md:pt-0">

      {/* 1. PHOTO SLIDESHOW BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={currentSrc}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sirver-secondary via-sirver-secondary/60 to-black/50" />
        <div className="absolute inset-0 bg-sirver-secondary/30" />
      </div>

      {/* Image slideshow indicators */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-2">
        {Array.from({ length: 1 + lazyImages.length }).map((_, i) => (
          <button
            key={i}
            onClick={() => loadedImages[i] && setCurrentImage(i)}
            className={`w-1.5 rounded-full transition-all duration-500 ${
              i === currentImage ? 'h-8 bg-sirver-primary' : 'h-3 bg-white/30 hover:bg-white/50'
            } ${!loadedImages[i] ? 'opacity-30' : ''}`}
          />
        ))}
      </div>

      {/* Particle overlay - azaltılmış sayı */}
      <ParticleBackground count={8} className="z-[1] opacity-30" />

      {/* 2. CONTENT */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white flex flex-col items-center justify-center h-full pb-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block py-2 px-4 rounded-full bg-sirver-primary/80 border border-sirver-primary/50 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-lg"
          >
            {t('hero.badge')}
          </motion.span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight drop-shadow-2xl tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="block text-white mb-2"
            >
              {t('hero.titleLine1')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-sirver-primary via-green-400 to-sirver-accent"
            >
              {t('hero.titleLine2')}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md leading-relaxed"
          >
            {t('hero.desc')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full"
        >
          <a href={`${prefix}/urunler`} className="w-full sm:w-auto group bg-sirver-primary hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/30 hover:-translate-y-1">
            {t('hero.ctaPrimary')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href={`${prefix}/iletisim`} className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold backdrop-blur-md transition-all flex items-center justify-center hover:-translate-y-1">
            {t('hero.ctaSecondary')}
          </a>
        </motion.div>
      </div>

      {/* 3. FLOATING VIDEO PiP */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8, type: 'spring', stiffness: 100 }}
          className="absolute bottom-28 right-8 z-20 group"
        >
          <div className="relative w-56 h-36 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border-2 border-white/20 hover:border-sirver-primary/60 transition-all duration-300 hover:scale-105 cursor-pointer"
               onClick={toggleVideo}
          >
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              className="w-full h-full object-cover"
            >
              <source src={heroVideos[currentVideo]} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                {videoPlaying ? <Pause size={18} className="text-white" /> : <Play size={18} className="text-white ml-0.5" />}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 px-3 py-1.5 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">{t('hero.pipLabel')}</span>
            </div>

            <div className="absolute top-2 right-2 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[9px] text-white/70 font-bold">LIVE</span>
            </div>
          </div>

          <div className="flex justify-center gap-1.5 mt-2">
            {heroVideos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentVideo(i); }}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === currentVideo ? 'w-5 bg-sirver-primary' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* 4. STATS BAR */}
      <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md border-t border-white/10 hidden md:block z-20">
        <div className="container mx-auto px-4 py-6 grid grid-cols-3 gap-8 text-white divide-x divide-white/10">
          <div className="flex items-center justify-center gap-4">
            <TrendingUp className="text-sirver-accent" size={32} />
            <div className="text-left">
              <div className="text-2xl font-heading font-bold flex items-baseline gap-1">
                <AnimatedCounter end={1.2} duration={2} decimals={1} /> <span>M Ton</span>
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{t('hero.statCapacity')}</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Leaf className="text-sirver-primary" size={32} />
            <div className="text-left">
              <div className="text-2xl font-heading font-bold flex items-baseline gap-1">
                %<AnimatedCounter end={100} duration={2} />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{t('hero.statSustainable')}</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Truck className="text-blue-400" size={32} />
            <div className="text-left">
              <div className="text-2xl font-heading font-bold">7/24</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{t('hero.statLogistics')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
