import { motion } from 'framer-motion';
import { Leaf, RefreshCcw, Globe, Trees } from 'lucide-react';
import CTA from '../components/sections/CTA';
import SEOHead from '../components/seo/SEOHead';
import AnimatedCounter from '../components/effects/AnimatedCounter';
import SectionReveal from '../components/effects/SectionReveal';
import ParallaxSection from '../components/effects/ParallaxSection';
import VideoBackground from '../components/media/VideoBackground';
import imgNature from '../assets/images/sustainability/forest-nature.jpg';
import { useTranslation } from '../i18n/LanguageContext';

export default function Sustainability() {
  const { lang, t } = useTranslation();
  const prefix = lang === 'en' ? '/en' : '';

  return (
    <>
      <SEOHead
        title={t('seo.sustainability.title')}
        description={t('seo.sustainability.description')}
        path={`${prefix}/surdurulebilirlik`}
      />

      <main className="pt-32 pb-0">

        {/* HERO - Video Background */}
        <section className="container mx-auto px-4 mb-20">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-24 text-center text-white shadow-2xl min-h-[400px] flex items-center justify-center">
            <VideoBackground
              src="/media/videos/v23.mp4"
              posterSrc="/media/thumbs/v23-thumb.jpg"
              overlay="bg-sirver-primary/80"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/20">
                <Leaf size={16} /> {t('sustainability.badge')}
              </div>
              <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6">
                {t('sustainability.heroTitle')}
              </h1>
              <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
                {t('sustainability.heroDesc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* DÖNGÜSEL EKONOMİ */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left">
              <div>
                <h2 className="text-3xl font-heading font-bold text-sirver-secondary mb-6">
                  {t('sustainability.circularTitle')}
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shrink-0 font-bold text-xl">1</div>
                    <div>
                      <h4 className="font-bold text-lg text-sirver-secondary">{t('sustainability.step1Title')}</h4>
                      <p className="text-gray-600 text-sm">{t('sustainability.step1Text')}</p>
                    </div>
                  </div>
                  <div className="h-8 w-0.5 bg-gray-200 ml-6"></div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 shrink-0 font-bold text-xl">2</div>
                    <div>
                      <h4 className="font-bold text-lg text-sirver-secondary">{t('sustainability.step2Title')}</h4>
                      <p className="text-gray-600 text-sm">{t('sustainability.step2Text')}</p>
                    </div>
                  </div>
                  <div className="h-8 w-0.5 bg-gray-200 ml-6"></div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-sirver-primary rounded-full flex items-center justify-center text-white shrink-0 font-bold text-xl">3</div>
                    <div>
                      <h4 className="font-bold text-lg text-sirver-secondary">{t('sustainability.step3Title')}</h4>
                      <p className="text-gray-600 text-sm">{t('sustainability.step3Text')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <ParallaxSection speed={0.15}>
              <div className="h-[500px] rounded-3xl overflow-hidden relative shadow-xl">
                <img src={imgNature} alt={t('sustainability.circularTitle')} className="h-full w-full object-cover" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <RefreshCcw className="text-sirver-primary" size={32} />
                    <div>
                      <div className="font-bold text-sirver-secondary text-lg">{t('sustainability.carbonFootprint')}</div>
                      <div className="text-xs text-gray-500">{t('sustainability.carbonDesc')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </section>

        {/* Doğa Görselleri */}
        <section className="container mx-auto px-4 mb-12">
          <SectionReveal>
            <div className="grid grid-cols-3 gap-3">
              {['/media/images/img03.webp', '/media/images/img06.webp', '/media/images/img11.webp'].map((src, i) => (
                <div key={i} className="aspect-video rounded-xl overflow-hidden group">
                  <img src={src} alt={t('sustainability.badge')} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* İSTATİSTİKLER - Animated Counters */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <SectionReveal delay={0}>
                <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-glow transition-shadow">
                  <Trees size={48} className="text-sirver-primary mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-sirver-secondary mb-2">
                    <AnimatedCounter end={500} duration={2.5} suffix="+ Ha" />
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">{t('sustainability.statForest')}</div>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-glow transition-shadow">
                  <Globe size={48} className="text-blue-500 mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-sirver-secondary mb-2">
                    <AnimatedCounter end={250} duration={2.5} suffix="k Ton" />
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">{t('sustainability.statCO2')}</div>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-glow transition-shadow">
                  <Leaf size={48} className="text-sirver-accent mx-auto mb-4" />
                  <div className="text-4xl font-heading font-bold text-sirver-secondary mb-2">
                    %<AnimatedCounter end={100} duration={2.5} />
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">{t('sustainability.statRenewable')}</div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}
