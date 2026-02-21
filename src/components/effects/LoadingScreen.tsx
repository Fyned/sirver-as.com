import { motion } from 'framer-motion';
import logoIcon from '../../assets/icons/logo-icon.svg';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-sirver-secondary flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
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
      </motion.div>
    </div>
  );
}
