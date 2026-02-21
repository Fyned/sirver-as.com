import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Banknote, Leaf, ArrowRight, RefreshCcw, Flame, Wheat } from 'lucide-react';
import ParticleBackground from '../effects/ParticleBackground';
import AnimatedCounter from '../effects/AnimatedCounter';
import SectionReveal from '../effects/SectionReveal';
import { useTranslation } from '../../i18n/LanguageContext';

export default function Calculator() {
  const { t, lang } = useTranslation();
  const prefix = lang === 'en' ? '/en' : '';
  const [fuelType, setFuelType] = useState('komur');
  const [targetProduct, setTargetProduct] = useState('odun-cipsi');
  const [amount, setAmount] = useState(1000);
  const [savings, setSavings] = useState(0);
  const [co2Savings, setCo2Savings] = useState(0);
  const [hasCalculated, setHasCalculated] = useState(false);

  const sirverProducts: any = {
    'odun-cipsi': {
      name: t('calculator.products.odun-cipsi'),
      priceIndex: 1.0,
      energyFactor: 1.0,
      icon: Flame,
      color: 'text-sirver-primary',
      bg: 'bg-sirver-primary'
    },
    'misir-sapi': {
      name: t('calculator.products.misir-sapi'),
      priceIndex: 0.75,
      energyFactor: 0.85,
      icon: Wheat,
      color: 'text-yellow-600',
      bg: 'bg-yellow-600'
    }
  };

  const marketData: any = {
    komur: { name: t('calculator.fuels.komur'), unit: 'Ton', priceMultiplier: 2.1, co2Factor: 2.4 },
    dogalgaz: { name: t('calculator.fuels.dogalgaz'), unit: 'm\u00B3', priceMultiplier: 2.8, co2Factor: 1.9 },
    fueloil: { name: t('calculator.fuels.fueloil'), unit: 'Litre', priceMultiplier: 3.5, co2Factor: 3.0 },
  };

  useEffect(() => {
    const selectedMarketFuel = marketData[fuelType];
    const selectedSirverProduct = sirverProducts[targetProduct];
    const currentCost = amount * 1000 * selectedMarketFuel.priceMultiplier;
    const amountCorrection = 1 / selectedSirverProduct.energyFactor;
    const sirverCost = (amount * amountCorrection) * 1000 * selectedSirverProduct.priceIndex;
    const calculatedSavings = currentCost - sirverCost;
    const calculatedCo2 = amount * selectedMarketFuel.co2Factor;

    setSavings(Math.max(0, Math.floor(calculatedSavings)));
    setCo2Savings(Math.floor(calculatedCo2));
    setHasCalculated(true);
  }, [fuelType, targetProduct, amount]);

  return (
    <section className="py-24 bg-[#111827] text-white relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground count={10} className="z-0 opacity-30" />

      {/* Arka Plan Efekti */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sirver-primary rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600 rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* SOL: Form Alanı */}
          <SectionReveal direction="left">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-xl text-white">
                  <CalcIcon size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  {t('calculator.title')}
                </h2>
              </div>
              <p className="text-gray-400 mb-10 text-lg">
                {t('calculator.subtitle')}
              </p>

              <div className="space-y-6 md:space-y-8 bg-white/5 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 backdrop-blur-sm">

                {/* 1. Adım */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">{t('calculator.step1')}</label>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.keys(sirverProducts).map((key) => {
                      const product = sirverProducts[key];
                      const Icon = product.icon;
                      return (
                        <button
                          key={key}
                          onClick={() => setTargetProduct(key)}
                          className={`py-4 px-4 rounded-xl text-sm font-bold transition-all border flex flex-col items-center gap-2 ${
                            targetProduct === key
                            ? `${product.bg} border-transparent text-white shadow-lg scale-105`
                            : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500 hover:bg-white/5'
                          }`}
                        >
                          <Icon size={24} />
                          {product.name}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 2. Adım */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">{t('calculator.step2')}</label>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.keys(marketData).map((key) => (
                      <button
                        key={key}
                        onClick={() => setFuelType(key)}
                        className={`py-3 px-4 rounded-lg text-sm font-bold transition-all border ${
                          fuelType === key
                          ? 'bg-white text-sirver-secondary border-white shadow-lg'
                          : 'bg-transparent border-gray-600 text-gray-400 hover:border-gray-400'
                        }`}
                      >
                        {marketData[key].name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Adım */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                     <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">{t('calculator.step3')}</label>
                     <div className="text-2xl font-mono font-bold text-white flex items-center gap-2">
                        {amount.toLocaleString()}
                        <span className="text-sm text-gray-500 font-sans">{marketData[fuelType].unit}</span>
                     </div>
                  </div>

                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-sirver-primary hover:accent-green-400"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>100 {marketData[fuelType].unit}</span>
                    <span>10.000+ {marketData[fuelType].unit}</span>
                  </div>
                </div>

              </div>
            </div>
          </SectionReveal>

          {/* SAĞ: Sonuç Kartı */}
          <div className="relative lg:sticky lg:top-32">
            <motion.div
              key={`${targetProduct}-${savings}`}
              initial={{ scale: 0.95, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="bg-gradient-to-br from-white to-gray-200 text-sirver-secondary rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden border-4 border-white/10"
            >
              {/* Arka Plan İkonu */}
              <div className="absolute -top-10 -right-10 opacity-5 rotate-12 text-sirver-secondary">
                <Banknote size={250} />
              </div>

              <div className="relative z-10">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <RefreshCcw size={14} className="animate-spin-slow" /> {t('calculator.resultTitle')}
                </h3>

                <div className="text-4xl md:text-7xl font-heading font-bold text-sirver-primary mb-2 tracking-tight">
                  {hasCalculated ? (
                    <>₺<AnimatedCounter end={savings} duration={1.5} /></>
                  ) : (
                    <>₺{savings.toLocaleString()}</>
                  )}
                </div>

                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold mb-8">
                  <ArrowRight size={12} /> {t('calculator.resultGain')}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-xs text-gray-400 uppercase font-bold mb-1">{t('calculator.selectedProduct')}</div>
                    <div className="font-bold text-sirver-secondary flex items-center gap-2">
                      {targetProduct === 'odun-cipsi' ? <Flame size={18} className="text-sirver-primary"/> : <Wheat size={18} className="text-yellow-600"/>}
                      {sirverProducts[targetProduct].name}
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <div className="text-xs text-green-600 uppercase font-bold mb-1">{t('calculator.envImpact')}</div>
                    <div className="font-bold text-green-800 flex items-center gap-2">
                      <Leaf size={18} /> -{co2Savings} Ton CO₂
                    </div>
                  </div>
                </div>

                <a href={`${prefix}/iletisim`} className="w-full py-5 bg-sirver-secondary hover:bg-sirver-primary text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg group hover:-translate-y-1">
                  {t('calculator.ctaButton')}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[10px] text-gray-400 text-center mt-4 opacity-70">
                  {t('calculator.disclaimer')}
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
