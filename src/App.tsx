import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
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
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#ECEFF1]">
      <ScrollToTop />
      <ScrollProgress />
      <Header />

      <div className="flex-grow">
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurumsal" element={<About />} />
            <Route path="/hizmetler" element={<ServicesPage />} />
            <Route path="/hizmetler/:slug" element={<ServiceDetail />} />
            <Route path="/urunler" element={<Products />} />
            <Route path="/surdurulebilirlik" element={<Sustainability />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/iletisim" element={<Contact />} />
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
