import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../../i18n/LanguageContext';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  jsonLd?: object;
}

const BASE_URL = 'https://www.sirver-as.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

export default function SEOHead({ title, description, path, image, type = 'website', jsonLd }: SEOHeadProps) {
  const { lang } = useTranslation();

  const fullTitle = `${title} | Sirver A.Ş.`;
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImage = image || DEFAULT_IMAGE;
  const ogLocale = lang === 'tr' ? 'tr_TR' : 'en_US';

  // Alternate path for hreflang
  const trPath = path.replace(/^\/en/, '') || '/';
  const enPath = path.startsWith('/en') ? path : `/en${path === '/' ? '' : path}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang alternates */}
      <link rel="alternate" hrefLang="tr" href={`${BASE_URL}${trPath}`} />
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}${enPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${trPath}`} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content="Sirver A.Ş." />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
