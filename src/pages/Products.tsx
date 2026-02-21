import { motion } from 'framer-motion';
import { Check, Zap, Leaf, BarChart3 } from 'lucide-react';
import CTA from '../components/sections/CTA';
import SEOHead from '../components/seo/SEOHead';
import AnimatedCounter from '../components/effects/AnimatedCounter';
import SectionReveal from '../components/effects/SectionReveal';
import ParallaxSection from '../components/effects/ParallaxSection';
import VideoBackground from '../components/media/VideoBackground';
// GÖRSEL IMPORT
import imgWood from '../assets/images/services/wood-chips-closeup.jpg';

export default function Products() {
  return (
    <>
      <SEOHead
        title="Ürünler & Teknik Özellikler"
        description="G30 ve G50 standartlarında, yüksek kalorili, düşük nem oranlı endüstriyel odun cipsi (wood chips) teknik özellikleri."
        path="/urunler"
      />

      <main className="pt-32 pb-0">

        <section className="container mx-auto px-4 mb-24 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl mx-auto"
           >
             <span className="text-sirver-accent font-bold tracking-widest text-sm uppercase mb-4 block">Endüstriyel Biyokütle</span>
             <h1 className="text-4xl md:text-6xl font-heading font-bold text-sirver-secondary mb-6">
               ENERJİ VERİMLİLİĞİ <br/> <span className="text-sirver-primary">MAKSİMİZE EDİLDİ</span>
             </h1>
             <p className="text-xl text-gray-600">
               Sanayi kazanları ve biyokütle santralleri için özel olarak işlenmiş, nemi alınmış ve elenmiş premium yakıt.
             </p>
           </motion.div>
        </section>

        <section className="container mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* GÖRSEL ALANI */}
            <ParallaxSection speed={0.15}>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                 <img
                   src={imgWood}
                   alt="Odun Cipsi Yakın Çekim"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   loading="lazy"
                 />

                 <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-sirver-accent">
                    <div className="text-3xl font-heading font-bold text-sirver-secondary">
                      ~<AnimatedCounter end={4.2} duration={2} decimals={1} /> kWh/kg
                    </div>
                    <div className="text-sm text-gray-500 font-bold uppercase">Net Kalorifik Değer</div>
                 </div>
              </div>
            </ParallaxSection>

            <SectionReveal direction="right">
              <div className="space-y-8">
                 <div>
                   <h2 className="text-3xl font-heading font-bold text-sirver-secondary mb-4">G30 / G50 Endüstriyel Cips</h2>
                   <p className="text-gray-600 leading-relaxed">
                     Sirver A.Ş. tesislerinde üretilen odun cipsleri, basit bir orman atığı değildir. Tomruklar, endüstriyel kırıcılardan (chipper) geçirilerek homojen boyutlara getirilir ve eleme ünitelerinde tozdan arındırılır.
                   </p>
                 </div>

                 <ul className="space-y-4">
                   {[
                     "Düşük Kül Oranı (<%1.0) - Kazan ömrünü uzatır.",
                     "Optimize Nem (%20-30) - Yanma verimini artırır.",
                     "Homojen Boyut - Besleme sistemlerinde tıkanmayı önler.",
                     "Taş ve Metalden Arındırılmış - Güvenli kullanım."
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-sirver-secondary font-medium">
                       <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-sirver-primary shrink-0">
                         <Check size={14} strokeWidth={3} />
                       </div>
                       {item}
                     </li>
                   ))}
                 </ul>

                 <div className="flex gap-4">
                   <a href="/iletisim" className="bg-sirver-secondary text-white px-8 py-4 rounded-lg font-bold hover:bg-sirver-primary transition-colors flex items-center gap-2 hover:-translate-y-1 transition-transform shadow-lg">
                     <Zap size={20} /> Detaylı Bilgi Al
                   </a>
                 </div>
              </div>
            </SectionReveal>

          </div>
        </section>

        {/* Üretim Süreci Videoları */}
        <section className="container mx-auto px-4 mb-12">
          <SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['/media/images/img02.webp', '/media/images/img07.webp', '/media/images/img08.webp', '/media/images/img12.webp'].map((src, i) => (
                <div key={i} className="aspect-video rounded-xl overflow-hidden group">
                  <img src={src} alt="Üretim süreci" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* TEKNİK SPESİFİKASYONLAR */}
        <section className="text-white py-24 relative overflow-hidden">
           <VideoBackground
             src="/media/videos/v12.mp4"
             posterSrc="/media/thumbs/v12-thumb.jpg"
             overlay="bg-[#111827]/90"
           />
           <div className="container mx-auto px-4 relative z-10">
             <SectionReveal>
               <div className="text-center mb-16">
                 <h2 className="text-3xl font-heading font-bold mb-4">TEKNİK SPESİFİKASYONLAR</h2>
                 <p className="text-gray-400">ISO 17225-4 Standardına Göre Analiz Değerleri</p>
               </div>
             </SectionReveal>
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="border-b border-white/10 text-sm uppercase tracking-wider text-gray-400">
                     <th className="py-4 px-6">Parametre</th>
                     <th className="py-4 px-6">Birim</th>
                     <th className="py-4 px-6 text-sirver-accent">Sirver A1 Kalite</th>
                     <th className="py-4 px-6">Standart (A2)</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5 text-gray-300">
                   {[
                     { name: "Çap / Boyut", unit: "mm", val1: "G30 / G50", val2: "G30 / G50" },
                     { name: "Nem İçeriği (M)", unit: "%", val1: "< 20 - 25", val2: "< 35" },
                     { name: "Kül Oranı (A)", unit: "%", val1: "< 1.0", val2: "< 1.5" },
                     { name: "Kalorifik Değer (Net)", unit: "kWh/kg", val1: "4.0 - 4.2", val2: "3.5 - 3.8" },
                     { name: "Yoğunluk (Bulk)", unit: "kg/m³", val1: "250 - 300", val2: "200 - 250" },
                   ].map((row, i) => (
                     <tr key={i} className="hover:bg-white/5 transition-colors">
                       <td className="py-4 px-6 font-bold text-white">{row.name}</td>
                       <td className="py-4 px-6 font-mono text-sm opacity-70">{row.unit}</td>
                       <td className="py-4 px-6 font-bold text-sirver-accent">{row.val1}</td>
                       <td className="py-4 px-6 opacity-60">{row.val2}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
        </section>

        <section className="container mx-auto px-4 py-24">
           <SectionReveal>
             <h2 className="text-3xl font-heading font-bold text-center mb-12 text-sirver-secondary">KULLANIM ALANLARI</h2>
           </SectionReveal>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SectionReveal delay={0}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:-translate-y-2 transition-transform duration-300 hover:shadow-glow-accent">
                   <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                     <Zap size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-sirver-secondary mb-3">Biyokütle Santralleri</h3>
                   <p className="text-gray-600 text-sm">
                     Elektrik üretimi yapan BES tesisleri için yüksek tonajlı, kesintisiz ve standart yakıt tedariği.
                   </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:-translate-y-2 transition-transform duration-300 hover:shadow-glow">
                   <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                     <BarChart3 size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-sirver-secondary mb-3">Sanayi Kazanları</h3>
                   <p className="text-gray-600 text-sm">
                     Tekstil, gıda ve kağıt fabrikalarının buhar kazanlarında kömür/doğalgaz ikamesi olarak.
                   </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:-translate-y-2 transition-transform duration-300 hover:shadow-glow">
                   <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                     <Leaf size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-sirver-secondary mb-3">Peyzaj & Tarım</h3>
                   <p className="text-gray-600 text-sm">
                     Toprak nemini korumak için malçlama (mulching) ve organik gübre altlığı olarak kullanım.
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
