import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, ArrowRight, ChevronRight } from 'lucide-react';
import logoFull from '../../assets/icons/logo-full.svg';
import { useTranslation } from '../../i18n/LanguageContext';

export default function Footer() {
  const { lang, t } = useTranslation();
  const prefix = lang === 'en' ? '/en' : '';

  return (
    <footer className="bg-sirver-secondary text-white pt-12 md:pt-20 pb-8 md:pb-10 border-t border-white/5 font-sans relative z-20">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-10 md:mb-16">

          {/* KOLON 1: Logo & Adres */}
          <div className="space-y-6 col-span-2 md:col-span-1">
            <div className="w-48">
              <img
                src={logoFull}
                alt="Sirver A.Ş. Logo"
                className="h-12 brightness-0 invert opacity-90"
              />
            </div>
            <div className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
              <MapPin className="text-sirver-primary shrink-0 mt-1" size={20} />
              <span>
                <strong>{t('footer.headOffice')}</strong><br/>
                Esmira Office Center No:1/49<br/>
                Musalla Bağları, Gürsesler Sk.<br/>
                42060 Selçuklu, Konya/TÜRKİYE
              </span>
            </div>
          </div>

          {/* KOLON 2: Menü */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white border-b-2 border-sirver-primary pb-2 inline-block">{t('footer.corporate')}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to={`${prefix}/`} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><ChevronRight size={16} className="text-sirver-primary"/> {t('footer.home')}</Link></li>
              <li><Link to={`${prefix}/kurumsal`} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><ChevronRight size={16} className="text-sirver-primary"/> {t('footer.aboutUs')}</Link></li>
              <li><Link to={`${prefix}/surdurulebilirlik`} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><ChevronRight size={16} className="text-sirver-primary"/> {t('footer.sustainability')}</Link></li>
              <li><Link to={`${prefix}/galeri`} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><ChevronRight size={16} className="text-sirver-primary"/> {t('footer.gallery')}</Link></li>
              <li><Link to={`${prefix}/iletisim`} className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2"><ChevronRight size={16} className="text-sirver-primary"/> {t('footer.contact')}</Link></li>
            </ul>
          </div>

          {/* KOLON 3: Hizmetlerimiz */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white border-b-2 border-sirver-primary pb-2 inline-block">{t('footer.ourServices')}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
               <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default group">
                 <ArrowRight size={16} className="text-sirver-primary group-hover:translate-x-1 transition-transform"/>
                 {t('footer.industrialWoodChips')}
               </li>
               <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default group">
                 <ArrowRight size={16} className="text-sirver-primary group-hover:translate-x-1 transition-transform"/>
                 {t('footer.biomassFuel')}
               </li>
               <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default group">
                 <ArrowRight size={16} className="text-sirver-primary group-hover:translate-x-1 transition-transform"/>
                 {t('footer.forestIndustryWaste')}
               </li>
               <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default group">
                 <ArrowRight size={16} className="text-sirver-primary group-hover:translate-x-1 transition-transform"/>
                 {t('footer.logisticsSolutions')}
               </li>
            </ul>
          </div>

          {/* KOLON 4: İletişim */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading text-lg font-bold mb-6 text-white border-b-2 border-sirver-primary pb-2 inline-block">{t('footer.contactUs')}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-sirver-primary/50 transition-colors group">
                <Phone className="text-sirver-primary group-hover:text-white transition-colors" size={24} />
                <a href="tel:+905309235033" className="hover:text-white font-bold text-lg tracking-wide">
                  +90 530 923 50 33
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sirver-primary" size={18} />
                <a href="mailto:info@sirver-as.com" className="hover:text-white transition-colors">
                  info@sirver-as.com
                </a>
              </li>
            </ul>

            {/* Sosyal Medya */}
            <div className="mt-8">
              <a
                href="https://www.instagram.com/sirver_tarim/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-[2px] rounded-full inline-block hover:scale-110 transition-transform"
              >
                <div className="bg-sirver-secondary p-2 rounded-full">
                  <Instagram size={20} className="text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} Sirver A.Ş. {t('footer.copyright')}</p>
          <div className="mt-2 md:mt-0 flex gap-4 items-center">
            <span className="hover:text-white cursor-pointer">{t('footer.privacyPolicy')}</span>
            <span className="hover:text-white cursor-pointer">{t('footer.kvkk')}</span>
            <span className="text-gray-600">|</span>
            <a href="https://dmckreatif.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Created by <span className="font-bold text-gray-400 hover:text-sirver-primary transition-colors">DMC Kreatif</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
