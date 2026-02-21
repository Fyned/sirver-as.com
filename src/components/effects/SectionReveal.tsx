import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

// transform: translate kullanarak layout shift olmadan animasyon
// translate layout'u etkilemez, sadece paint layer'da hareket eder
const directionMap: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 10 },
  down: { x: 0, y: -10 },
  left: { x: 10, y: 0 },
  right: { x: -10, y: 0 },
};

export default function SectionReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}: SectionRevealProps) {
  const d = directionMap[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x: d.x, y: d.y },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={variants}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
