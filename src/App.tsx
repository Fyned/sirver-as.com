import { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppBtn from './components/ui/WhatsAppBtn';
import ScrollToTop from './components/utils/ScrollToTop';
import ScrollProgress from './components/effects/ScrollProgress';
import LoadingScreen from './components/effects/LoadingScreen';

// Lazy Loading
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Gallery = lazy(() => import('./pages/Gallery'));

function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Minimum 600ms loading screen göster
    const minDelay = new Promise((r) => setTimeout(r, 600));

    // Fontlar hazır olana kadar bekle
    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    // Home chunk'ı preload et (lazy import zaten cache'ler)
    const homeReady = import('./pages/Home').then(() => {});

    // Hero görselini preload et
    const heroReady = new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve(); // hata olsa da devam et
      import('./assets/images/home/stockyard-dark.jpg')
        .then((mod) => { img.src = mod.default; })
        .catch(() => resolve());
    });

    // Tüm kritik kaynaklar hazır olduğunda loading screen'i kapat
    Promise.all([minDelay, fontsReady, homeReady, heroReady]).then(() => {
      setAppReady(true);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#ECEFF1]">
      {/* İlk açılış loading screen'i */}
      <AnimatePresence mode="wait">
        {!appReady && <LoadingScreen key="initial-loader" isInitial />}
      </AnimatePresence>

      <ScrollToTop />
      <ScrollProgress />
      <Header />

      <div className="flex-grow">
        <Suspense fallback={<LoadingScreen />}>
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
