import { motion } from 'framer-motion';
import { ShieldCheck, Target, TrendingUp, Users, Award } from 'lucide-react';
import CTA from '../components/sections/CTA';
import SEOHead from '../components/seo/SEOHead';
import AnimatedCounter from '../components/effects/AnimatedCounter';
import SectionReveal from '../components/effects/SectionReveal';
import ParallaxSection from '../components/effects/ParallaxSection';
import VideoBackground from '../components/media/VideoBackground';
import imgHQ from '../assets/images/about/hq-facility.jpg';

export default function About() {
  return (
    <>
      <SEOHead
        title="Hakkımızda"
        description="Sirver A.Ş., inşaat sektöründeki köklü tecrübesini biyokütle enerji sektörüne taşıyarak, sürdürülebilir ve yüksek kapasiteli hammadde tedariği sağlar."
        path="/kurumsal"
      />

      <main className="pt-32 pb-0">

        {/* 1. GİRİŞ BÖLÜMÜ */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-sirver-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Kurumsal Profil</span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-bold text-sirver-secondary mb-8"
            >
              ENERJİNİN <span className="text-transparent bg-clip-text bg-gradient-to-r from-sirver-primary to-green-400">DOĞAL GÜCÜ</span>
            </motion.h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Sirver A.Ş., inşaat sektöründe edindiği çeyrek asırlık operasyonel disiplini, modern enerji sektörünün ihtiyaçlarıyla birleştiren yeni nesil bir tedarik şirketidir.
            </p>
          </div>
        </section>

        {/* 2. SAYILARLA BİZ - Animated Counters + Video Background */}
        <section className="relative text-white py-20 mb-20 overflow-hidden">
          <VideoBackground
            src="/media/videos/v04.mp4"
            posterSrc="/media/thumbs/v04-thumb.jpg"
            overlay="bg-sirver-secondary/85"
          />
          <div className="container mx-auto px-4 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <SectionReveal delay={0}>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-sirver-accent mb-2">
                  <AnimatedCounter end={25} duration={2} suffix="+" />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Yıllık Tecrübe</div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-sirver-primary mb-2">
                  <AnimatedCounter end={1.2} duration={2} decimals={1} suffix="M" />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Yıllık Ton Kapasite</div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={50} duration={2} suffix="+" />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Araç Filosu</div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                  %<AnimatedCounter end={100} duration={2} />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Müşteri Memnuniyeti</div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* 3. HİKAYEMİZ */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left" className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-heading font-bold text-sirver-secondary">
                İnşaattan Enerjiye Dönüşüm
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Firmamız, uzun yıllar boyunca Türkiye'nin dört bir yanında büyük ölçekli altyapı, üstyapı ve taahhüt projelerini başarıyla tamamlamıştır. Bu süreçte edindiğimiz <strong>"zorlu saha koşullarında lojistik yönetim"</strong> yetkinliği, bizi rakiplerimizden ayıran en büyük güçtür.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Biyokütle enerjisi, sadece bir hammadde tedariği değil, aynı zamanda ciddi bir lojistik operasyondur. Biz, fabrikanızın ihtiyaç duyduğu binlerce ton ürünü, şantiye disipliniyle yöneterek tam zamanında (JIT) teslim ediyoruz.
              </p>

              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-glow transition-shadow">
                  <ShieldCheck className="text-sirver-primary" />
                  <span className="font-bold text-sirver-secondary">ISO 9001 Kalite</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-glow-accent transition-shadow">
                  <Award className="text-sirver-accent" />
                  <span className="font-bold text-sirver-secondary">FSC Sertifikası</span>
                </div>
              </div>
            </SectionReveal>

            <ParallaxSection speed={0.2} className="order-1 lg:order-2 relative h-[500px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-sirver-primary to-sirver-secondary rounded-3xl transform rotate-3 opacity-20 transition-transform group-hover:rotate-0"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img src={imgHQ} alt="Genel Müdürlük ve Tesis" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </ParallaxSection>
          </div>
        </section>

        {/* Sahadan Görseller Mini Galeri */}
        <section className="container mx-auto px-4 mb-20">
          <SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['/media/images/img01.webp', '/media/images/img04.webp', '/media/images/img05.webp', '/media/images/img10.webp'].map((src, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden group">
                  <img src={src} alt="Sirver operasyon" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* 4. MİSYON & VİZYON KARTLARI */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionReveal delay={0}>
              <div className="bg-white p-8 rounded-2xl shadow-soft border-t-4 border-sirver-primary hover:-translate-y-1 transition-transform hover:shadow-glow">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-sirver-primary">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-sirver-secondary mb-3">Misyonumuz</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Türkiye'nin yerli biyokütle kaynaklarını ekonomiye kazandırarak, sanayicinin enerji maliyetlerini düşürmek ve karbon ayak izini azaltmak.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="bg-white p-8 rounded-2xl shadow-soft border-t-4 border-sirver-accent hover:-translate-y-1 transition-transform hover:shadow-glow-accent">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-sirver-accent">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-sirver-secondary mb-3">Vizyonumuz</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Teknolojik altyapısı ve sürdürülebilir üretim modelleriyle, Avrupa standartlarında hizmet veren bölgenin lider enerji tedarikçisi olmak.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-soft border-t-4 border-blue-600 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-sirver-secondary mb-3">İnsan Kaynakları</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  İş güvenliğini (ISG) her şeyin üzerinde tutan, uzman ve dinamik bir kadro ile sıfır hata prensibiyle çalışmak.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}
