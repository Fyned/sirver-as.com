import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Leaf, Truck, Play, Pause } from 'lucide-react';
import AnimatedCounter from '../effects/AnimatedCounter';
import ParticleBackground from '../effects/ParticleBackground';
import useIsMobile from '../../hooks/useIsMobile';
import { getHeroVideos } from '../../data/media';

// Yüksek kaliteli fotoğraflar (arka plan slideshow)
import imgForest from '../../assets/images/sustainability/forest-nature.jpg';
import imgWood from '../../assets/images/services/wood-chips-closeup.jpg';
import imgBiomass from '../../assets/images/services/biomass-energy.jpg';
import imgLogistics from '../../assets/images/services/logistics-fleet.jpg';
import imgStockyard from '../../assets/images/home/stockyard-dark.jpg';

const heroImages = [imgStockyard, imgForest, imgBiomass, imgWood, imgLogistics];
const heroVideos = getHeroVideos();

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  // Image slideshow - change every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

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

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-sirver-secondary pt-20 md:pt-0">

      {/* 1. PHOTO SLIDESHOW BACKGROUND - High quality images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImage]}
              alt=""
              className="w-full h-full object-cover"
              loading={currentImage === 0 ? 'eager' : 'lazy'}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sirver-secondary via-sirver-secondary/60 to-black/50" />
        <div className="absolute inset-0 bg-sirver-secondary/30" />
      </div>

      {/* Image slideshow indicators */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`w-1.5 rounded-full transition-all duration-500 ${
              i === currentImage ? 'h-8 bg-sirver-primary' : 'h-3 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Particle overlay */}
      <ParticleBackground count={12} className="z-[1] opacity-40" />

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
            Yüksek Kalorili Biyokütle Yakıtı
          </motion.span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight drop-shadow-2xl tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="block text-white mb-2"
            >
              STANDARTLARI AŞAN
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-sirver-primary via-green-400 to-sirver-accent"
            >
              ODUN CİPSİ TEDARİĞİ
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md leading-relaxed"
          >
            Enerji santralleri ve sanayi tesisleri için ISO 17225-4 standartlarında,
            düşük nem ve minimum kül oranına sahip <strong>G30/G50 Odun Cipsi</strong> üretiyoruz.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full"
        >
          <a href="/urunler" className="w-full sm:w-auto group bg-sirver-primary hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/30 hover:-translate-y-1">
            Ürünlerimizi İnceleyin
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="/iletisim" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold backdrop-blur-md transition-all flex items-center justify-center hover:-translate-y-1">
            Lojistik Ağı & İletişim
          </a>
        </motion.div>
      </div>

      {/* 3. FLOATING VIDEO PiP - Picture in Picture */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8, type: 'spring', stiffness: 100 }}
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
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src={heroVideos[currentVideo]} type="video/mp4" />
            </video>

            {/* Video overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

            {/* Play/Pause indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                {videoPlaying ? <Pause size={18} className="text-white" /> : <Play size={18} className="text-white ml-0.5" />}
              </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 px-3 py-1.5 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">Canlı Operasyon</span>
            </div>

            {/* Pulse indicator */}
            <div className="absolute top-2 right-2 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[9px] text-white/70 font-bold">LIVE</span>
            </div>
          </div>

          {/* Video dots */}
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
              <div className="text-xs text-gray-400 uppercase tracking-wider">Yıllık Kapasite</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Leaf className="text-sirver-primary" size={32} />
            <div className="text-left">
              <div className="text-2xl font-heading font-bold flex items-baseline gap-1">
                %<AnimatedCounter end={100} duration={2} />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Yerli & Sürdürülebilir</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Truck className="text-blue-400" size={32} />
            <div className="text-left">
              <div className="text-2xl font-heading font-bold">7/24</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Kesintisiz Lojistik</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
