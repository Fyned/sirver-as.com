import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, BarChart, Settings, HelpCircle } from 'lucide-react';
import CTA from '../components/sections/CTA';
import SEOHead from '../components/seo/SEOHead';
import SectionReveal from '../components/effects/SectionReveal';
import VideoBackground from '../components/media/VideoBackground';

// GÖRSELLER IMPORT
import imgWood from '../assets/images/services/wood-chips-closeup.jpg';
import imgBiomass from '../assets/images/services/biomass-energy.jpg';
import imgForest from '../assets/images/services/forest-residue.jpg';
import imgLogistics from '../assets/images/services/logistics-fleet.jpg';

// GÖRSEL HARİTASI
const serviceImages: any = {
  "odun-cipsi": imgWood,
  "biyokutle-yakiti": imgBiomass,
  "orman-atiklari": imgForest,
  "lojistik": imgLogistics,
  "misir-sapi": '/media/images/img08.webp',
  "tarimsal-biyokutle": '/media/images/img11.webp'
};

// VIDEO HARİTASI
const serviceVideos: any = {
  "odun-cipsi": { src: '/media/videos/v04.mp4', poster: '/media/thumbs/v04-thumb.jpg' },
  "biyokutle-yakiti": { src: '/media/videos/v12.mp4', poster: '/media/thumbs/v12-thumb.jpg' },
  "orman-atiklari": { src: '/media/videos/v26.mp4', poster: '/media/thumbs/v26-thumb.jpg' },
  "lojistik": { src: '/media/videos/v27.mp4', poster: '/media/thumbs/v27-thumb.jpg' },
  "misir-sapi": { src: '/media/videos/v19.mp4', poster: '/media/thumbs/v19-thumb.jpg' },
  "tarimsal-biyokutle": { src: '/media/videos/v23.mp4', poster: '/media/thumbs/v23-thumb.jpg' }
};

// Medya galerisi eşlemesi
const serviceGallery: any = {
  "odun-cipsi": ['/media/images/img02.webp', '/media/images/img07.webp', '/media/images/img12.webp'],
  "biyokutle-yakiti": ['/media/images/img07.webp', '/media/images/img08.webp', '/media/images/img12.webp'],
  "orman-atiklari": ['/media/images/img03.webp', '/media/images/img06.webp', '/media/images/img11.webp'],
  "lojistik": ['/media/images/img09.webp', '/media/images/img10.webp', '/media/images/img04.webp'],
  "misir-sapi": ['/media/images/img08.webp', '/media/images/img11.webp', '/media/images/img06.webp'],
  "tarimsal-biyokutle": ['/media/images/img11.webp', '/media/images/img03.webp', '/media/images/img06.webp']
};

// DETAYLI İÇERİK VERİTABANI
const serviceData: any = {
  "odun-cipsi": {
    title: "Endüstriyel Odun Cipsi",
    desc: "MDF, Yonga Levha ve Kağıt endüstrisi için ISO 17225-4 standartlarında üretilmiş, lif yapısı korunmuş yüksek kaliteli hammadde.",
    specs: [
      { label: "Standart", value: "ISO 17225-4 (A1/A2)" },
      { label: "Boyut Sınıfı", value: "G30 / G50 / G100" },
      { label: "Nem Oranı", value: "%20 - %45 (İsteğe Bağlı)" },
      { label: "Kül Oranı", value: "< %1.0" },
      { label: "Yabancı Madde", value: "%0 (Metal/Taş Ayrıştırılmış)" }
    ],
    features: [
      "Tam Otomatik Kırım Hattı: Tomruklar el değmeden işlenir.",
      "Homojen Boyutlandırma: Elek sistemimiz sayesinde toz oranı minimize edilir.",
      "Lif Kalitesi: Bıçak açıları, lif yapısını bozmayacak şekilde ayarlanır.",
      "Stok Kapasitesi: 50.000 Ton anlık stok ile kesintisiz tedarik."
    ],
    process: [
      { title: "Hammadde Kabul", text: "Ormandan gelen tomrukların nem ve çap kontrolü." },
      { title: "Kabuk Soyma", text: "Lif kalitesi için ağaç kabuklarının ayrıştırılması." },
      { title: "Kırım (Chipping)", text: "Endüstriyel yonga makinelerinde istenilen boyuta getirme." },
      { title: "Eleme & Tasnif", text: "Toz ve irilerin ayrılması, standart boyutun garantisi." }
    ]
  },
  "biyokutle-yakiti": {
    title: "Biyokütle Enerji Yakıtı",
    desc: "Enerji santralleri (BES) ve sanayi kazanları için fosil yakıtlara alternatif, yüksek kalorili ve karbon nötr enerji kaynağı.",
    specs: [
      { label: "Kalorifik Değer", value: "3.5 - 4.2 kWh/kg" },
      { label: "Nem İçeriği", value: "< %25 (Kuru Bazda)" },
      { label: "Klor (Cl)", value: "< %0.02" },
      { label: "Kükürt (S)", value: "< %0.05" },
      { label: "Yoğunluk", value: "250-300 kg/m³" }
    ],
    features: [
      "Yüksek Verim: Düşük nem oranı sayesinde kazan verimini %15 artırır.",
      "Düşük Emisyon: Kükürt ve azot oksit salınımı minimumdur.",
      "Ekonomik: Doğalgaz ve ithal kömüre göre %40'a varan maliyet avantajı.",
      "Yerli Kaynak: Kur dalgalanmalarından daha az etkilenen fiyat istikrarı."
    ],
    process: [
      { title: "Kaynak Toplama", text: "Orman atıkları ve tarımsal biyokütlenin toplanması." },
      { title: "Doğal Kurutma", text: "Nem oranını düşürmek için açık hava sirkülasyonu." },
      { title: "Öğütme", text: "Yakma sistemine uygun partikül boyutuna getirme." },
      { title: "Enerji Analizi", text: "Kalori ve nem değerlerinin laboratuvar onayı." }
    ]
  },
  "orman-atiklari": {
    title: "Orman Endüstri Atıkları",
    desc: "Orman sahalarında kalan dal, kök ve üretim artıklarının toplanarak ekonomiye kazandırılması ve orman yangın riskinin azaltılması.",
    specs: [
      { label: "Kaynak Türü", value: "Dal, Tepe, Kök, Kabuk" },
      { label: "İşleme Yeri", value: "Mobil Kırıcı ile Sahada" },
      { label: "Kapasite", value: "Günlük 20 Hektar Temizlik" },
      { label: "Sertifika", value: "FSC & OGM İzinli" }
    ],
    features: [
      "Yangın Önleme: Yanıcı materyalin ormandan uzaklaştırılması.",
      "Toprak İyileştirme: Alanın yeni fidan dikimine hazır hale getirilmesi.",
      "Sıfır Atık: Doğada çürümeye terk edilen değerin enerjiye dönüşümü.",
      "Mobil Operasyon: Kendi yürür makinelerle zorlu arazide çalışma."
    ],
    process: [
      { title: "Saha Etüdü", text: "Atık yoğunluğunun ve arazi yapısının analizi." },
      { title: "Toplama", text: "Ekskavatör ve forwarder ile atıkların biriktirilmesi." },
      { title: "Mobil Kırım", text: "Sahada cips haline getirilip hacmin küçültülmesi." },
      { title: "Nakliye", text: "Tesis veya santrale doğrudan sevkiyat." }
    ]
  },
  "lojistik": {
    title: "Lojistik Çözümleri",
    desc: "Sadece ürün değil, zaman yönetimi satıyoruz. Walking Floor (Hareketli Taban) teknolojisi ile Türkiye'nin her yerine JIT teslimat.",
    specs: [
      { label: "Filo Büyüklüğü", value: "50+ Özmal Tır" },
      { label: "Dorse Tipi", value: "Walking Floor (92m³)" },
      { label: "Günlük Kapasite", value: "1000+ Ton Sevkiyat" },
      { label: "Takip Sistemi", value: "7/24 Uydu Takibi" }
    ],
    features: [
      "Hızlı Boşaltım: Damper kaldırmadan, yatay boşaltım sistemi (İSG Dostu).",
      "Maksimum Hacim: Standart tırlara göre %30 daha fazla yük taşıma.",
      "Fabrika İçi Yönetim: Hammadde sahanızın yönetimini üstleniyoruz.",
      "Esnek Rota: Orman yollarından otoyollara uyumlu araç parkuru."
    ],
    process: [
      { title: "Planlama", text: "Müşteri üretim planına göre sevkiyat takvimi." },
      { title: "Yükleme", text: "Kantarda hassas tartım ve nem kontrolü." },
      { title: "Canlı Takip", text: "Aracın konumunun anlık paylaşımı." },
      { title: "Teslimat", text: "Fabrika sahasına otomatik boşaltım." }
    ]
  },
  "misir-sapi": {
    title: "Mısır Sapı Balyası",
    desc: "Biyokütle enerji santralleri ve hayvancılık sektörü için yüksek lifli, düşük nem oranına sahip, yüksek sıkıştırmalı kare balyalar.",
    specs: [
      { label: "Balya Tipi", value: "Büyük Kare (Big Bale)" },
      { label: "Nem Oranı", value: "< %15 - %20" },
      { label: "Kalorifik Değer", value: "~3500 - 3800 kcal/kg" },
      { label: "Ağırlık", value: "350 - 450 kg / Adet" },
      { label: "Kül Oranı", value: "< %5.0" }
    ],
    features: [
      "Yüksek Sıkıştırma: Nakliye maliyetlerini düşüren yoğun balyalama.",
      "Düşük Nem: Hasat sonrası tarlada doğal kurutma (sun-drying) işlemi.",
      "Çok Amaçlı: Hem yakıt (biyokütle) hem de hayvan yemi/altlığı olarak kullanım.",
      "Büyük Stok: Sezonluk üretimle yıl boyu tedarik garantisi."
    ],
    process: [
      { title: "Hasat Sonrası", text: "Dane mısır hasadından sonra sapların tarlada namlu yapılması." },
      { title: "Doğal Kurutma", text: "Sapların güneş altında ideal nem oranına düşmesi." },
      { title: "Balyalama", text: "Yüksek kapasiteli makinelerle sıkı kare balya yapımı." },
      { title: "Stok & Sevk", text: "Yağmurdan korunaklı sahalarda stoklama ve nakliye." }
    ]
  },
  "tarimsal-biyokutle": {
    title: "Tarımsal Biyokütle",
    desc: "Ayçiçeği sapı, kanola, pamuk sapı ve çeltik kavuzu gibi tarla atıklarının toplanarak temiz enerji kaynağına dönüştürülmesi.",
    specs: [
      { label: "Kaynaklar", value: "Ayçiçeği, Pamuk, Kanola" },
      { label: "Form", value: "Dökme veya Balya" },
      { label: "Kalori", value: "3200 - 3800 kcal/kg" },
      { label: "Nem", value: "< %25" },
      { label: "Sürdürülebilirlik", value: "%100 Geri Dönüşüm" }
    ],
    features: [
      "Atık Yönetimi: Tarlada kalan ve çürümeye terk edilen atıkların değerlendirilmesi.",
      "Ekonomik Yakıt: Odun cipsine göre daha düşük maliyetli alternatif.",
      "Karbon Nötr: Bitkisel kökenli olduğu için karbon döngüsünü destekler.",
      "Esnek Kullanım: Farklı kazan tiplerine uygun hammadde karışımları."
    ],
    process: [
      { title: "Saha Analizi", text: "Bölgesel tarım ürünlerine göre atık potansiyelinin belirlenmesi." },
      { title: "Toplama", text: "Biçerdöver sonrası kalan sapların toplanması." },
      { title: "İşleme", text: "Gerekirse kırma veya balyalama işlemi." },
      { title: "Tedarik", text: "Enerji tesislerine doğrudan hammadde akışı." }
    ]
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const data = serviceData[slug || ""];
  const image = serviceImages[slug || ""];
  const video = serviceVideos[slug || ""];
  const gallery = serviceGallery[slug || ""] || [];

  if (!data) return <Navigate to="/hizmetler" />;

  return (
    <>
      <SEOHead
        title={data.title}
        description={data.desc}
        path={`/hizmetler/${slug}`}
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
             <Link to="/hizmetler" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6 font-bold text-sm">
                <ArrowLeft size={18} /> Tüm Faaliyet Alanlarına Dön
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
                 {/* ANA GÖRSEL */}
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
                       <CheckCircle2 className="text-sirver-primary" /> Neden Tercih Edilmeli?
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

                 {/* Süreç Adımları */}
                 <div>
                    <h3 className="text-2xl font-heading font-bold text-sirver-secondary mb-6 flex items-center gap-2">
                       <Settings className="text-sirver-accent" /> Operasyon Süreci
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

              {/* SAĞ: Teknik Tablo ve Dosyalar */}
              <div className="space-y-8">

                 <SectionReveal direction="right">
                   <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-sirver-primary">
                      <h3 className="text-xl font-bold text-sirver-secondary mb-6 flex items-center gap-2">
                         <BarChart className="text-sirver-primary" /> Teknik Veriler
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
                          <h4 className="font-bold text-blue-900 text-sm mb-1">Stok Durumu Nedir?</h4>
                          <p className="text-blue-700 text-xs leading-relaxed">
                             Tarımsal ürünlerde sezonluk stoklarımız, ormansal ürünlerde ise yıl boyu devam eden üretimimiz mevcuttur. Güncel tonaj için arayınız.
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
