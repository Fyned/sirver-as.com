import { MessageCircle } from 'lucide-react';
import { useTranslation } from '../../i18n/LanguageContext';

export default function WhatsAppBtn() {
  const { lang, t } = useTranslation();

  return (
    <a
      href={lang === 'en' ? "https://wa.me/905338111594?text=Hello,%20I%20would%20like%20to%20get%20information%20about%20wood%20chip%20supply." : "https://wa.me/905338111594?text=Merhaba,%20odun%20cipsi%20tedariği%20hakkında%20bilgi%20almak%20istiyorum."}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 md:gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 md:px-5 md:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group"
      aria-label={t('whatsapp.ariaLabel')}
    >
      <MessageCircle size={24} className="fill-white text-[#25D366] md:w-7 md:h-7" />
      <div className="hidden md:flex flex-col items-start">
        <span className="text-[10px] uppercase font-bold opacity-90 leading-tight">{t('whatsapp.quickContact')}</span>
        <span className="font-bold text-sm">WhatsApp</span>
      </div>
    </a>
  );
}
