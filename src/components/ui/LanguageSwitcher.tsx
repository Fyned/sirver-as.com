import { useTranslation } from '../../i18n/LanguageContext';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useTranslation();

  return (
    <div className={`flex items-center gap-1 text-sm font-bold ${className}`}>
      <button
        onClick={() => setLang('tr')}
        className={`px-2 py-1 rounded transition-all ${
          lang === 'tr'
            ? 'bg-sirver-primary text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        TR
      </button>
      <span className="text-gray-600">|</span>
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded transition-all ${
          lang === 'en'
            ? 'bg-sirver-primary text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}
