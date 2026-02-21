import { useRef, useEffect, useState, useCallback } from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Calculator from '../components/sections/Calculator';
import CTA from '../components/sections/CTA';
import SEOHead from '../components/seo/SEOHead';
import SectionReveal from '../components/effects/SectionReveal';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedVideos } from '../data/media';

const featuredVideos = getFeaturedVideos(8);

/** Tek bir video kartı – preload="none" + IntersectionObserver ile lazy */
function VideoCard({ video, index }: { video: (typeof featuredVideos)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px' } // 200px öncesinden yükle
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Görünür olduğunda metadata yükle
  const handleVisible = useCallback(() => {
    if (videoRef.current && visible) {
      videoRef.current.src = video.src;
      videoRef.current.load();
    }
  }, [visible, video.src]);

  useEffect(() => {
    handleVisible();
  }, [handleVisible]);

  return (
    <motion.div
      ref={ref}
      key={video.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-sirver-primary/50 transition-colors"
    >
      {visible ? (
        <video
          ref={videoRef}
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        /* Placeholder – video yüklenene kadar koyu gradient */
        <div className="w-full h-full bg-gradient-to-br from-sirver-secondary to-gray-900" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 group-hover:via-black/50 transition-colors flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-sirver-primary/60 transition-all shadow-lg">
          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-sm font-medium truncate drop-shadow-md">{video.alt}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="Endüstriyel Biyokütle ve Odun Cipsi Tedariği"
        description="1.2 Milyon ton kapasite ile enerji sektörüne odun cipsi ve biyokütle tedariği sağlıyoruz. İnşaat kökenli lojistik güç."
        path="/"
      />

      <main>
        <Hero />
        <Services />

        {/* VIDEO SHOWCASE */}
        <section className="py-24 bg-sirver-secondary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sirver-primary/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionReveal>
              <div className="text-center mb-12">
                <span className="text-sirver-primary font-bold tracking-widest text-sm uppercase mb-3 block">Sahadan Görüntüler</span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                  OPERASYONLARIMIZ
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Orman sahasından enerji tesisine kadar tüm sürecimizi yakından görün.
                </p>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {featuredVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/galeri"
                className="inline-flex items-center gap-2 px-8 py-4 bg-sirver-primary hover:bg-green-700 text-white rounded-xl font-bold transition-all hover:-translate-y-1 shadow-lg shadow-sirver-primary/20"
              >
                Tüm Galeriyi Gör
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <Calculator />
        <CTA />
      </main>
    </>
  );
}
