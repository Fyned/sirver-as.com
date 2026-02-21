import { motion } from 'framer-motion';
import { Factory, Truck, Flame, Wheat } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionReveal from '../effects/SectionReveal';
import { useTranslation } from '../../i18n/LanguageContext';

// GÖRSELLER IMPORT
import imgChipsHover from '../../assets/images/home/g50-chips-hover.jpg';
import imgCorn from '../../assets/images/home/corn-bale-tall.jpg';

const cardVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const }
  })
};

const ServiceCard = ({ title, desc, icon: Icon, link, className, children, index }: any) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className={`bg-white p-6 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col justify-between overflow-hidden relative ${className}`}
  >
    <div className="z-10 relative h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-sirver-secondary shadow-sm group-hover:scale-110 transition-transform duration-500">
          <Icon size={24} />
        </div>
        <Link to={link} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white flex items-center justify-center text-white hover:text-sirver-secondary transition-all">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
        </Link>
      </div>

      <div className="mt-auto">
        <h3 className="text-2xl font-heading font-bold text-white mb-2 drop-shadow-md">{title}</h3>
        <p className="text-gray-100 text-sm font-medium leading-relaxed opacity-90 drop-shadow-sm">{desc}</p>
      </div>
    </div>
    {children}
  </motion.div>
);

export default function Services() {
  const { t, lang } = useTranslation();
  const prefix = lang === 'en' ? '/en' : '';

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">

        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-sirver-secondary mb-4">
              {t('services.title')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('services.subtitle')}
            </p>
          </div>
        </SectionReveal>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(240px,auto)] md:auto-rows-[minmax(320px,auto)]">

          {/* 1. KUTU: ORMAN (Geniş - Sol) */}
          <ServiceCard
            title={t('services.cards.woodChip.title')}
            desc={t('services.cards.woodChip.desc')}
            icon={Factory}
            link={`${prefix}/hizmetler/odun-cipsi`}
            className="md:col-span-2 bg-sirver-primary hover:shadow-glow"
            index={0}
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
               <img src={imgChipsHover} alt="Odun Cipsi" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
          </ServiceCard>

          {/* 2. KUTU: TARIM (Dikey - Sağ) */}
          <ServiceCard
            title={t('services.cards.cornStalk.title')}
            desc={t('services.cards.cornStalk.desc')}
            icon={Wheat}
            link={`${prefix}/hizmetler/misir-sapi`}
            className="md:row-span-2 bg-yellow-600 hover:shadow-glow-accent"
            index={1}
          >
             <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-700">
                <img src={imgCorn} alt="Mısır Sapı Balyası" width={800} height={1200} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
          </ServiceCard>

          {/* 3. KUTU: BİYOKÜTLE (Kare - Sol Alt) */}
          <ServiceCard
            title={t('services.cards.biomass.title')}
            desc={t('services.cards.biomass.desc')}
            icon={Flame}
            link={`${prefix}/hizmetler/biyokutle-yakiti`}
            className="bg-orange-600 hover:shadow-glow-accent"
            index={2}
          >
             <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
               <img src="/media/images/img07.webp" alt="Biyokütle Yakıtı" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
          </ServiceCard>

          {/* 4. KUTU: LOJİSTİK (Kare - Orta Alt) */}
          <ServiceCard
            title={t('services.cards.logistics.title')}
            desc={t('services.cards.logistics.desc')}
            icon={Truck}
            link={`${prefix}/hizmetler/lojistik`}
            className="bg-blue-900 hover:shadow-glow"
            index={3}
          >
             <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
               <img src="/media/images/img09.webp" alt="Lojistik Filosu" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
          </ServiceCard>

        </div>
      </div>
    </section>
  );
}
