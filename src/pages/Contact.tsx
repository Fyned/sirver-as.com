import { Mail, Phone, MapPin, ExternalLink, Send } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import SectionReveal from '../components/effects/SectionReveal';
import VideoBackground from '../components/media/VideoBackground';
import { useTranslation } from '../i18n/LanguageContext';
// GÖRSEL IMPORT
import mapBg from '../assets/images/contact/map-bg.jpg';

export default function Contact() {
  const { lang, t } = useTranslation();
  const prefix = lang === 'en' ? '/en' : '';

  const subjects = t('contact.subjects') as string[];

  return (
    <>
      <SEOHead
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        path={`${prefix}/iletisim`}
      />

      <main className="pt-32 pb-24 bg-gray-50 min-h-screen relative">

        {/* ARKA PLAN */}
        <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden">
          <VideoBackground
            src="/media/videos/v16.mp4"
            posterSrc="/media/thumbs/v16-thumb.jpg"
            overlay="bg-sirver-secondary/85"
          />
          {/* Fallback image for mobile */}
          <img
            src={mapBg}
            alt={t('contact.mapTitle')}
            className="absolute inset-0 w-full h-full object-cover opacity-10 z-[1]"
          />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-[2]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">

          {/* BAŞLIK ALANI */}
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sirver-primary font-bold tracking-widest text-xs uppercase mb-2 block bg-white/10 backdrop-blur-sm py-1 px-3 rounded-full w-fit mx-auto border border-white/10">
                {t('contact.badge')}
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 drop-shadow-md">
                {t('contact.heroTitle')}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('contact.heroDesc')}
                <br/>{t('contact.heroDesc2')}
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

            {/* SOL: İletişim Kartı */}
            <SectionReveal direction="left">
              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border-t-4 border-sirver-primary h-full">
                <h3 className="text-2xl font-bold text-sirver-secondary mb-8 flex items-center gap-2">
                  <Phone className="text-sirver-primary" size={24} /> {t('contact.contactInfo')}
                </h3>

                <div className="space-y-8">
                  {/* Adres */}
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-sirver-primary shrink-0 group-hover:bg-sirver-primary group-hover:text-white transition-colors duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-1">{t('contact.headOffice')}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        Esmira Office Center No:1/49<br/>
                        Musalla Bağları, Gürsesler Sk.<br/>
                        42060 Selçuklu, Konya
                      </p>
                      <a href="https://maps.google.com/?q=37.8941930366937,32.50155072776283" target="_blank" rel="noreferrer" className="text-sirver-primary text-xs font-bold mt-3 inline-flex items-center gap-1 hover:underline bg-green-50 px-2 py-1 rounded">
                        {t('contact.getDirections')} <ExternalLink size={12}/>
                      </a>
                    </div>
                  </div>

                  {/* Telefon */}
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-sirver-primary shrink-0 group-hover:bg-sirver-primary group-hover:text-white transition-colors duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-1">{t('contact.phoneWhatsApp')}</h4>
                      <p className="text-gray-600">
                        <a href="tel:+905309235033" className="hover:text-sirver-primary transition-colors text-xl font-bold text-sirver-secondary block">+90 530 923 50 33</a>
                      </p>
                      <p className="text-xs text-green-600 mt-1 font-medium flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> {t('contact.openNow')}
                      </p>
                    </div>
                  </div>

                  {/* E-Posta */}
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-sirver-primary shrink-0 group-hover:bg-sirver-primary group-hover:text-white transition-colors duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-1">{t('contact.email')}</h4>
                      <a href="mailto:info@sirver-as.com" className="text-gray-600 font-medium hover:text-sirver-primary transition-colors block">
                        info@sirver-as.com
                      </a>
                      <p className="text-xs text-gray-400 mt-1">{t('contact.emailReply')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* SAĞ: İletişim Formu */}
            <SectionReveal direction="right" className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 h-full">
                <h3 className="text-2xl font-bold text-sirver-secondary mb-6 flex items-center gap-2">
                  <Send className="text-sirver-accent" /> {t('contact.writeUs')}
                </h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">{t('contact.fullName')}</label>
                    <input type="text" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-sirver-primary focus:ring-2 focus:ring-green-100 outline-none transition-all" placeholder={t('contact.fullNamePlaceholder') as string} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">{t('contact.companyName')}</label>
                    <input type="text" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-sirver-primary outline-none transition-all" placeholder={t('contact.companyPlaceholder') as string} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">{t('contact.phone')}</label>
                    <input type="tel" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-sirver-primary outline-none transition-all" placeholder={t('contact.phonePlaceholder') as string} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">{t('contact.subject')}</label>
                    <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-sirver-primary outline-none transition-all text-gray-600">
                      {Array.isArray(subjects) && subjects.map((subj, i) => (
                        <option key={i}>{subj}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">{t('contact.message')}</label>
                    <textarea rows={4} className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-sirver-primary outline-none transition-all resize-none" placeholder={t('contact.messagePlaceholder') as string}></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button type="button" className="bg-sirver-secondary hover:bg-sirver-primary text-white py-4 px-8 rounded-lg font-bold w-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                      {t('contact.sendButton')} <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </SectionReveal>

          </div>

          {/* EN ALT: Harita */}
          <SectionReveal>
            <div className="w-full h-[450px] bg-white p-2 rounded-3xl shadow-2xl overflow-hidden relative group">
               <div className="absolute inset-0 bg-sirver-secondary/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3149.4877500500006!2d32.50155072776283!3d37.8941930366937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDUzJzM5LjEiTiAzMsKwMzAnMDUuNiJF!5e0!3m2!1str!2str!4v1701440000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1.5rem' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('contact.mapTitle') as string}
                  className="grayscale hover:grayscale-0 transition-all duration-1000 scale-100 hover:scale-105"
                ></iframe>
            </div>
          </SectionReveal>

        </div>
      </main>
    </>
  );
}
