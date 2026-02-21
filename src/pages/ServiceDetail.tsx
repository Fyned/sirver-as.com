import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, BarChart, Settings, HelpCircle } from 'lucide-react';
import CTA from '../components/sections/CTA';
import SEOHead from '../components/seo/SEOHead';
import SectionReveal from '../components/effects/SectionReveal';
import VideoBackground from '../components/media/VideoBackground';
import { useTranslation } from '../i18n/LanguageContext';

// GORSELLER IMPORT
import imgWood from '../assets/images/services/wood-chips-closeup.jpg';
import imgBiomass from '../assets/images/services/biomass-energy.jpg';
import imgForest from '../assets/images/services/forest-residue.jpg';
import imgLogistics from '../assets/images/services/logistics-fleet.jpg';

// GORSEL HARITASI
const serviceImages: any = {
  "odun-cipsi": imgWood,
  "biyokutle-yakiti": imgBiomass,
  "orman-atiklari": imgForest,
  "lojistik": imgLogistics,
  "misir-sapi": '/media/images/img08.webp',
  "tarimsal-biyokutle": '/media/images/img11.webp'
};

// VIDEO HARITASI
const serviceVideos: any = {
  "odun-cipsi": { src: '/media/videos/v04.mp4', poster: '/media/thumbs/v04-thumb.jpg' },
  "biyokutle-yakiti": { src: '/media/videos/v12.mp4', poster: '/media/thumbs/v12-thumb.jpg' },
  "orman-atiklari": { src: '/media/videos/v26.mp4', poster: '/media/thumbs/v26-thumb.jpg' },
  "lojistik": { src: '/media/videos/v27.mp4', poster: '/media/thumbs/v27-thumb.jpg' },
  "misir-sapi": { src: '/media/videos/v19.mp4', poster: '/media/thumbs/v19-thumb.jpg' },
  "tarimsal-biyokutle": { src: '/media/videos/v23.mp4', poster: '/media/thumbs/v23-thumb.jpg' }
};

// Medya galerisi eslemesi
const serviceGallery: any = {
  "odun-cipsi": ['/media/images/img02.webp', '/media/images/img07.webp', '/media/images/img12.webp'],
  "biyokutle-yakiti": ['/media/images/img07.webp', '/media/images/img08.webp', '/media/images/img12.webp'],
  "orman-atiklari": ['/media/images/img03.webp', '/media/images/img06.webp', '/media/images/img11.webp'],
  "lojistik": ['/media/images/img09.webp', '/media/images/img10.webp', '/media/images/img04.webp'],
  "misir-sapi": ['/media/images/img08.webp', '/media/images/img11.webp', '/media/images/img06.webp'],
  "tarimsal-biyokutle": ['/media/images/img11.webp', '/media/images/img03.webp', '/media/images/img06.webp']
};

export default function ServiceDetail() {
  const { lang, t } = useTranslation();
  const prefix = lang === 'en' ? '/en' : '';

  const { slug } = useParams();
  const data = t(`serviceDetail.services.${slug}`) as any;
  const image = serviceImages[slug || ""];
  const video = serviceVideos[slug || ""];
  const gallery = serviceGallery[slug || ""] || [];

  if (!data || typeof data === 'string') return <Navigate to={`${prefix}/hizmetler`} />;

  return (
    <>
      <SEOHead
        title={data?.title}
        description={data?.desc}
        path={`${prefix}/hizmetler/${slug}`}
      />

      <main className="pt-24 pb-0 bg-gray-50">

        {/* Hero with Video */}
        <section className="relative py-16 mb-8 overflow-hidden">
          {video && (
            <VideoBackground
              src={video.src}
              posterSrc={video.poster}
              overlay="bg-sirver-secondary/80"
            />
          )}
          <div className="container mx-auto px-4 relative z-10">
             <Link to={`${prefix}/hizmetler`} className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6 font-bold text-sm">
                <ArrowLeft size={18} /> {t('serviceDetail.backToAll')}
             </Link>
             <motion.h1
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
             >
               {data.title}
             </motion.h1>
             <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
               {data.desc}
             </p>
          </div>
        </section>

        {/* Mini Galeri */}
        {gallery.length > 0 && (
          <section className="container mx-auto px-4 mb-12">
            <SectionReveal>
              <div className="grid grid-cols-3 gap-3">
                {gallery.map((src: string, i: number) => (
                  <div key={i} className="aspect-video rounded-xl overflow-hidden group">
                    <img src={src} alt={`${data.title} galeri`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                ))}
              </div>
            </SectionReveal>
          </section>
        )}

        <section className="container mx-auto px-4 mb-20">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              <div className="lg:col-span-2 space-y-12">
                 {/* ANA GORSEL */}
                 <SectionReveal>
                   <div className="h-[400px] md:h-[500px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg group">
                      <img
                        src={image}
                        alt={data.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                   </div>
                 </SectionReveal>

                 {/* Neden Biz? */}
                 <div>
                    <h3 className="text-2xl font-heading font-bold text-sirver-secondary mb-6 flex items-center gap-2">
                       <CheckCircle2 className="text-sirver-primary" /> {t('serviceDetail.whyChoose')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {data.features.map((feature: string, i: number) => (
                          <SectionReveal key={i} delay={i * 0.1}>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-glow transition-shadow">
                               <p className="text-gray-700 font-medium leading-relaxed">{feature}</p>
                            </div>
                          </SectionReveal>
                       ))}
                    </div>
                 </div>

                 {/* Surec Adimlari */}
                 <div>
                    <h3 className="text-2xl font-heading font-bold text-sirver-secondary mb-6 flex items-center gap-2">
                       <Settings className="text-sirver-accent" /> {t('serviceDetail.operationProcess')}
                    </h3>
                    <div className="relative border-l-4 border-gray-200 ml-4 space-y-8">
                       {data.process.map((step: any, i: number) => (
                          <SectionReveal key={i} delay={i * 0.1}>
                            <div className="relative pl-8">
                               <div className="absolute -left-[11px] top-0 w-5 h-5 bg-sirver-primary rounded-full border-4 border-white shadow-sm"></div>
                               <h4 className="text-lg font-bold text-sirver-secondary mb-1">{step.title}</h4>
                               <p className="text-gray-600 text-sm">{step.text}</p>
                            </div>
                          </SectionReveal>
                       ))}
                    </div>
                 </div>
              </div>

              {/* SAG: Teknik Tablo ve Dosyalar */}
              <div className="space-y-8">

                 <SectionReveal direction="right">
                   <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-sirver-primary">
                      <h3 className="text-xl font-bold text-sirver-secondary mb-6 flex items-center gap-2">
                         <BarChart className="text-sirver-primary" /> {t('serviceDetail.technicalData')}
                      </h3>
                      <div className="space-y-4">
                         {data.specs.map((spec: any, i: number) => (
                            <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                               <span className="text-gray-500 text-sm font-medium">{spec.label}</span>
                               <span className="text-sirver-secondary font-bold text-right">{spec.value}</span>
                            </div>
                         ))}
                      </div>
                   </div>
                 </SectionReveal>


                 <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <div className="flex items-start gap-3">
                       <HelpCircle className="text-blue-600 shrink-0 mt-1" />
                       <div>
                          <h4 className="font-bold text-blue-900 text-sm mb-1">{t('serviceDetail.stockTitle')}</h4>
                          <p className="text-blue-700 text-xs leading-relaxed">
                             {t('serviceDetail.stockText')}
                          </p>
                       </div>
                    </div>
                 </div>

              </div>

           </div>
        </section>

        <CTA />
      </main>
    </>
  );
}
