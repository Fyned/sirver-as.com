import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import tr from './tr.json';
import en from './en.json';

type Lang = 'tr' | 'en';
type Translations = typeof tr;

interface LanguageContextType {
  lang: Lang;
  t: (key: string) => any;
  setLang: (lang: Lang) => void;
}

const translations: Record<Lang, Translations> = { tr, en };

const LanguageContext = createContext<LanguageContextType>({
  lang: 'tr',
  t: () => '',
  setLang: () => {},
});

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const lang: Lang = location.pathname.startsWith('/en') ? 'en' : 'tr';

  const t = useMemo(() => {
    const dict = translations[lang];
    return (key: string): any => {
      const val = getNestedValue(dict, key);
      if (val === undefined) {
        // Fallback to Turkish
        const fallback = getNestedValue(translations.tr, key);
        if (fallback === undefined) {
          console.warn(`[i18n] Missing key: ${key}`);
          return key;
        }
        return fallback;
      }
      return val;
    };
  }, [lang]);

  const setLang = useMemo(() => (newLang: Lang) => {
    const currentPath = location.pathname;
    if (newLang === 'en') {
      // Add /en prefix
      const path = currentPath.startsWith('/en') ? currentPath : `/en${currentPath === '/' ? '' : currentPath}`;
      navigate(path);
    } else {
      // Remove /en prefix
      const path = currentPath.replace(/^\/en/, '') || '/';
      navigate(path);
    }
  }, [location.pathname, navigate]);

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}

export default LanguageContext;
