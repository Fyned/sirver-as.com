import { Suspense, lazy, useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppBtn from './components/ui/WhatsAppBtn';
import ScrollToTop from './components/utils/ScrollToTop';
import ScrollProgress from './components/effects/ScrollProgress';

// Lazy Loading
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Gallery = lazy(() => import('./pages/Gallery'));

/** Minimal inline loading fallback — framer-motion gerektirmez, CLS sıfır */
function InlineLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-10 h-10 border-3 border-gray-200 border-t-sirver-primary rounded-full animate-spin" />
    </div>
  );
}

function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Minimum 200ms bekle (flash yok), font ve Home chunk'ı paralel bekle
    const minDelay = new Promise((r) => setTimeout(r, 200));

    // Font max 1s bekle — display:optional ile swap CLS olmaz
    const fontsReady = Promise.race([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise((r) => setTimeout(r, 1000)),
    ]);

    // Home chunk'ı preload et
    const homeReady = import('./pages/Home').then(() => {});

    Promise.all([minDelay, fontsReady, homeReady]).then(() => {
      setAppReady(true);
    });

    // Güvenlik: 2 saniyede hiçbir şey olmazsa zorla aç
    const safetyTimeout = setTimeout(() => setAppReady(true), 2000);
    return () => clearTimeout(safetyTimeout);
  }, []);

  // Native loader'ı kaldır (CSS spinner, index.html'de tanımlı)
  const removeNativeLoader = useCallback(() => {
    const loader = document.getElementById('native-loader');
    if (loader) {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.3s ease';
      setTimeout(() => loader.remove(), 300);
    }
  }, []);

  useEffect(() => {
    if (appReady) removeNativeLoader();
  }, [appReady, removeNativeLoader]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#ECEFF1]">
      <ScrollToTop />
      <ScrollProgress />
      <Header />

      <div className="flex-grow">
        <Suspense fallback={<InlineLoader />}>
          <Routes>
            {/* Türkçe route'lar */}
            <Route path="/" element={<Home />} />
            <Route path="/kurumsal" element={<About />} />
            <Route path="/hizmetler" element={<ServicesPage />} />
            <Route path="/hizmetler/:slug" element={<ServiceDetail />} />
            <Route path="/urunler" element={<Products />} />
            <Route path="/surdurulebilirlik" element={<Sustainability />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/iletisim" element={<Contact />} />

            {/* İngilizce route'lar (/en prefix) */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/kurumsal" element={<About />} />
            <Route path="/en/hizmetler" element={<ServicesPage />} />
            <Route path="/en/hizmetler/:slug" element={<ServiceDetail />} />
            <Route path="/en/urunler" element={<Products />} />
            <Route path="/en/surdurulebilirlik" element={<Sustainability />} />
            <Route path="/en/galeri" element={<Gallery />} />
            <Route path="/en/iletisim" element={<Contact />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
      <WhatsAppBtn />
    </div>
  );
}

export default App;
