'use client';

import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function GlassCard({ children, className = '', dark = false }: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card ${dark ? 'glass-card--dark' : ''} ${className}`}
      whileHover={{
        y: -6,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
    >
      {children}
    </motion.div>
  );
}
