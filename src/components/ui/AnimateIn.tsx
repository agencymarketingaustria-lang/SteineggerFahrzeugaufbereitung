'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
  duration?: number;
  amount?: number;
}

const directionMap = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { y: 0, x: -30 },
  right: { y: 0, x: 30 },
  none: { y: 0, x: 0 },
};

export default function AnimateIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
  duration = 0.6,
  amount = 0.2,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount, margin: '-40px' });
  const { x, y } = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
