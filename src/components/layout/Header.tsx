import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import logoFull from '../../assets/icons/logo-full.svg';
import { useTranslation } from '../../i18n/LanguageContext';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, t } = useTranslation();

  const isHome = location.pathname === '/' || location.pathname === '/en';
  const prefix = lang === 'en' ? '/en' : '';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isHome && !scrolled
    ? 'bg-transparent border-transparent py-5'
    : 'glass py-3 border-gray-200/50 shadow-glass bg-[#ECEFF1]/90';

  const textColor = isHome && !scrolled
    ? 'text-white/90 hover:text-white'
    : 'text-sirver-secondary hover:text-sirver-primary';

  const logoFilter = isHome && !scrolled
    ? 'brightness-0 invert'
    : 'filter-none';

  const navLinks = [
    { name: t('nav.corporate'), path: `${prefix}/kurumsal` },
    { name: t('nav.services'), path: `${prefix}/hizmetler` },
    { name: t('nav.products'), path: `${prefix}/urunler` },
    { name: t('nav.sustainability'), path: `${prefix}/surdurulebilirlik` },
    { name: t('nav.gallery'), path: `${prefix}/galeri` },
    { name: t('nav.contact'), path: `${prefix}/iletisim` },
  ];

  return (
    <div className="fixed w-full z-50 font-sans transition-all duration-300">

      <div className={`bg-sirver-secondary text-white transition-all duration-500 overflow-hidden ${scrolled || !isHome ? 'h-0' : 'h-10'} hidden md:flex items-center`}>
        <div className="container mx-auto px-4 flex justify-between text-xs font-medium tracking-wider text-gray-300">
          <div className="flex gap-6">
            <a href="mailto:info@sirver-as.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-sirver-accent" /> info@sirver-as.com
            </a>
            <a href="tel:+905338111594" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-sirver-accent" /> +90 533 811 15 94
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <span>Konya / TÜRKİYE</span>
            <span className="text-sirver-primary">|</span>
            <span>ISO 9001:2015</span>
            <span className="text-sirver-primary">|</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <header className={`transition-all duration-500 border-b ${headerClass}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">

          <Link to={prefix || '/'} className="relative z-50">
             <img
               src={logoFull}
               alt="Sirver A.Ş."
               className={`transition-all duration-500 h-10 md:h-12 ${logoFilter}`}
             />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 relative group ${textColor}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-sirver-primary`}></span>
              </Link>
            ))}

            {/* Language Switcher (visible when top bar is hidden) */}
            <LanguageSwitcher className={`${scrolled || !isHome ? 'flex' : 'hidden'}`} />

            <Link
              to={`${prefix}/iletisim`}
              className={`flex items-center gap-2 px-6 py-2.5 rounded shadow-lg font-bold text-sm transition-all transform hover:-translate-y-0.5 ${
                isHome && !scrolled
                  ? 'bg-sirver-accent text-white hover:bg-orange-600'
                  : 'bg-sirver-primary text-white hover:bg-green-800'
              }`}
            >
              {t('nav.getQuote')} <ChevronRight size={16} />
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative z-50 p-2 rounded ${
              isHome && !scrolled ? 'text-white' : 'text-sirver-secondary'
            }`}
          >
            {isOpen ? <X size={30} className={isHome && !scrolled ? "text-white" : "text-sirver-secondary"} /> : <Menu size={30} />}
          </button>
        </div>

        <div className={`fixed inset-0 bg-[#ECEFF1] z-40 flex flex-col justify-center items-center gap-6 transition-all duration-500 px-6 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-xl font-heading font-bold text-sirver-secondary hover:text-sirver-primary transition-colors tracking-widest py-1"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobil menü CTA butonu */}
          <Link
            to={`${prefix}/iletisim`}
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-sirver-primary text-white px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg"
          >
            {t('nav.getQuote')} <ChevronRight size={16} />
          </Link>

          {/* Mobil menü telefon */}
          <a href="tel:+905338111594" className="flex items-center gap-2 text-sirver-secondary font-bold text-sm">
            <Phone size={16} className="text-sirver-primary" /> +90 533 811 15 94
          </a>

          <LanguageSwitcher className="mt-2" />
        </div>
      </header>
    </div>
  );
}
