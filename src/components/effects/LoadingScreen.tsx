import { motion } from 'framer-motion';
import logoIcon from '../../assets/icons/logo-icon.svg';
import { useTranslation } from '../../i18n/LanguageContext';

interface Props {
  /** true = ilk açılış (fade-out animasyonu ile kapanır), false = Suspense fallback */
  isInitial?: boolean;
  onComplete?: () => void;
}

export default function LoadingScreen({ isInitial, onComplete }: Props) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 1 }}
      {...(isInitial
        ? {
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.3, ease: 'easeInOut' },
            onAnimationComplete: (def: { opacity?: number }) => {
              if (def.opacity === 0 && onComplete) onComplete();
            },
          }
        : {})}
      className="fixed inset-0 z-[9999] bg-sirver-secondary flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo with pulsing ring */}
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full border-2 border-sirver-primary"
          />
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <img src={logoIcon} alt="Sirver" className="w-10 h-10" />
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 rounded-full bg-sirver-primary"
            />
          ))}
        </div>

        {isInitial && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-500 text-xs tracking-widest uppercase mt-2"
          >
            {t('loading.text')}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}
