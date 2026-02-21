import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Factory, Truck, Leaf, Flame, ArrowRight, CheckCircle2, Wheat, Trees } from 'lucide-react';
import CTA from '../components/sections/CTA';
import SEOHead from '../components/seo/SEOHead';
import SectionReveal from '../components/effects/SectionReveal';
import VideoBackground from '../components/media/VideoBackground';

// MEVCUT GÖRSELLER
import imgWood from '../assets/images/services/wood-chips-closeup.jpg';
import imgBiomass from '../assets/images/services/biomass-energy.jpg';
import imgForest from '../assets/images/services/forest-residue.jpg';
import imgLogistics from '../assets/images/services/logistics-fleet.jpg';

// ORMANSAL HİZMETLER
const forestryServices = [
  {
    id: "odun-cipsi",
    title: "Endüstriyel Odun Cipsi",
    icon: Factory,
    image: imgWood,
    desc: "Yonga levha (MDF) ve kağıt endüstrisi için yüksek standartlarda hammadde tedariği.",
    details: ["G30/G50 Standart Boyut", "Kabuksuz Temiz Yonga", "Günlük 1000+ Ton Kapasite"]
  },
  {
    id: "orman-atiklari",
    title: "Orman Endüstri Atıkları",
    icon: Trees,
    image: imgForest,
    desc: "Orman sahalarındaki üretim artıklarının ve dalların ekonomiye kazandırılması.",
    details: ["Saha Temizliği & İyileştirme", "Yerinde Mobil Kırım", "FSC Sertifikalı Kaynak"]
  }
];

// TARIMSAL HİZMETLER
const agriculturalServices = [
  {
    id: "misir-sapi",
    title: "Mısır Sapı Balyası",
    icon: Wheat,
    image: '/media/images/img08.webp',
    desc: "Biyokütle enerji santralleri ve hayvancılık için yüksek lifli, ekonomik mısır sapı balyaları.",
    details: ["Düşük Nem Oranı", "Yüksek Sıkıştırma (Büyük Balya)", "Enerji ve Yem Amaçlı Kullanım"]
  },
  {
    id: "tarimsal-biyokutle",
    title: "Tarımsal Biyokütle",
    icon: Leaf,
    image: '/media/images/img11.webp',
    desc: "Ayçiçeği sapı, kanola ve diğer tarla atıklarının enerjiye dönüşümü.",
    details: ["Sezonluk Düzenli Tedarik", "Yüksek Kalorifik Değer", "Çevre Dostu Geri Dönüşüm"]
  }
];

// ORTAK HİZMETLER
const commonServices = [
  {
    id: "biyokutle-yakiti",
    title: "Biyokütle Enerji Yakıtı",
    icon: Flame,
    image: imgBiomass,
    desc: "Hem ormansal hem tarımsal kaynaklı, sanayi kazanlarına uygun karma veya saf yakıt.",
    details: ["%20-30 Nem Garantisi", "Kazan Verimliliği Odaklı", "Düşük Emisyon"]
  },
  {
    id: "lojistik",
    title: "Lojistik Çözümleri",
    icon: Truck,
    image: imgLogistics,
    desc: "Tüm ürün gruplarında tarladan/ormandan fabrikanıza JIT (Tam Zamanında) teslimat.",
    details: ["Walking Floor Tırlar", "Geniş Araç Filosu", "7/24 Sevkiyat"]
  }
];

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Faaliyet Alanları"
        description="Ormansal atık yönetimi, odun cipsi ve tarımsal biyokütle (mısır sapı) balyalama hizmetlerimiz."
        path="/hizmetler"
      />

      <main className="pt-32 pb-0 bg-gray-50">

        {/* HERO */}
        <section className="container mx-auto px-4 mb-20 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl mx-auto"
           >
             <span className="text-sirver-accent font-bold tracking-widest text-sm uppercase mb-4 block">Entegre Atık Yönetimi</span>
             <h1 className="text-4xl md:text-6xl font-heading font-bold text-sirver-secondary mb-6">
               DOĞANIN İKİ YÜZÜ: <br/>
               <span className="text-sirver-primary">ORMAN</span> VE <span className="text-yellow-600">TARIM</span>
             </h1>
             <p className="text-xl text-gray-600">
               Türkiye'nin biyokütle potansiyelini tam kapasiteyle kullanıyoruz. Hem orman hem de tarla atıklarını enerjiye dönüştürüyoruz.
             </p>
           </motion.div>
        </section>

        {/* 1. BÖLÜM: ORMANSAL ATIKLAR */}
        <section className="relative py-20 mb-20 overflow-hidden">
          <VideoBackground
            src="/media/videos/v26.mp4"
            posterSrc="/media/thumbs/v26-thumb.jpg"
            overlay="bg-sirver-primary/85"
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-4 mb-12 border-b border-white/20 pb-4">
              <Trees className="text-white" size={40} />
              <h2 className="text-3xl font-heading font-bold text-white">Ormansal Faaliyetler</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {forestryServices.map((service, i) => (
                <SectionReveal key={service.id} delay={i * 0.15}>
                  <ServiceItem service={service} color="green" />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 2. BÖLÜM: TARIMSAL ATIKLAR */}
        <section className="container mx-auto px-4 mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-gray-200 pb-4">
            <Wheat className="text-yellow-600" size={40} />
            <h2 className="text-3xl font-heading font-bold text-sirver-secondary">Tarımsal Faaliyetler</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {agriculturalServices.map((service, i) => (
              <SectionReveal key={service.id} delay={i * 0.15}>
                <ServiceItem service={service} color="yellow" />
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* 3. BÖLÜM: ORTAK & ENERJİ */}
        <section className="relative py-20 mb-0 overflow-hidden">
          <VideoBackground
            src="/media/videos/v34.mp4"
            posterSrc="/media/thumbs/v34-thumb.jpg"
            overlay="bg-[#111827]/90"
          />
          <div className="container mx-auto px-4 relative z-10">
             <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4">
                <Flame className="text-sirver-accent" size={40} />
                <h2 className="text-3xl font-heading font-bold text-white">Enerji & Lojistik</h2>
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {commonServices.map((service, i) => (
                  <SectionReveal key={service.id} delay={i * 0.15}>
                    <ServiceItem service={service} color="dark" />
                  </SectionReveal>
                ))}
             </div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}

function ServiceItem({ service, color }: any) {
  const isDark = color === 'dark';
  const isOverVideo = color === 'green';
  const accentColor = color === 'yellow' ? 'text-yellow-600' : (color === 'green' ? 'text-sirver-primary' : 'text-sirver-accent');
  const bgColor = color === 'yellow' ? 'bg-yellow-50' : (color === 'green' ? 'bg-green-50' : 'bg-white/10');
  const textColor = isDark || isOverVideo ? 'text-white' : 'text-sirver-secondary';
  const descColor = isDark || isOverVideo ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDark ? 'bg-white/5 border-white/10' : (isOverVideo ? 'bg-white/10 backdrop-blur-sm border-white/20' : 'bg-white border-gray-100');

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`${cardBg} p-8 rounded-3xl border shadow-lg flex flex-col md:flex-row gap-8 items-center hover:shadow-xl transition-all`}
    >
      {/* Görsel */}
      <div className="w-full md:w-1/2 h-48 md:h-full min-h-[200px] rounded-2xl overflow-hidden relative group">
         {service.image ? (
            <img src={typeof service.image === 'string' ? service.image : service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
         ) : (
            <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm">Görsel</div>
         )}
      </div>

      {/* İçerik */}
      <div className="w-full md:w-1/2">
         <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${bgColor} ${accentColor}`}>
            <service.icon size={24} />
         </div>
         <h3 className={`text-2xl font-bold mb-3 ${textColor}`}>{service.title}</h3>
         <p className={`text-sm mb-6 leading-relaxed ${descColor}`}>{service.desc}</p>

         <ul className="space-y-2 mb-6">
            {service.details.map((detail: string, i: number) => (
              <li key={i} className={`flex items-center gap-2 text-xs font-bold ${isDark || isOverVideo ? 'text-gray-300' : 'text-gray-500'}`}>
                <CheckCircle2 size={14} className={accentColor} /> {detail}
              </li>
            ))}
         </ul>

         <Link
            to={`/hizmetler/${service.id}`}
            className={`inline-flex items-center gap-2 font-bold text-sm transition-all ${isDark || isOverVideo ? 'text-white hover:text-sirver-accent' : accentColor} hover:gap-3`}
         >
            İncele <ArrowRight size={16} />
         </Link>
      </div>
    </motion.div>
  )
}
