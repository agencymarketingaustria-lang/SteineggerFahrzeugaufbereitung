'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function AblaufHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Staggered entering animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1] as const }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="section--dark"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginBottom: 0,
        paddingBottom: 0,
      }}
    >
      {/* Background Image with Dark Overlay */}
      <Image 
        src="/images/gallery-3.jpg" 
        alt="Fahrzeugaufbereitung Ablauf" 
        fill 
        style={{ objectFit: 'cover', opacity: 0.3, zIndex: 0 }}
        priority
      />
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom, rgba(34,34,34,0.3) 0%, rgba(34,34,34,1) 100%)',
          zIndex: 1
        }} 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ 
          y: yText, 
          opacity: opacityText,
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
          width: '100%',
          padding: '0 var(--section-px)'
        }}
      >
        <motion.div variants={itemVariants} style={{ marginBottom: 'var(--space-4)' }}>
          <span style={{ 
            fontFamily: 'var(--font-body)', 
            color: 'var(--color-primary-fixed)', 
            letterSpacing: '0.3em', 
            textTransform: 'uppercase',
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            opacity: 0.8
          }}>
            Der Ablauf
          </span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 style={{ 
             fontFamily: 'var(--font-headline)', 
             fontSize: 'clamp(3rem, 5vw + 2rem, 8rem)', // massive fluid text
             lineHeight: 1,
             margin: 0,
             fontWeight: 300,
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             gap: 'var(--space-2)'
          }}>
            <span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', transform: 'translateX(-0.9em)' }}>
              Schritt
            </span>
            <span style={{ color: '#ffffff', transform: 'translateX(0.9em)' }}>
              für Schritt
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} style={{ marginTop: 'var(--space-8)' }}>
          <p style={{
            maxWidth: '32rem',
            margin: '0 auto',
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'var(--text-lg)',
            lineHeight: 1.6
          }}>
            Vom ersten Kontakt bis zur strahlenden Übergabe — transparent, unkompliziert und mit höchster Sorgfalt.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 'var(--space-8)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-4)',
          zIndex: 10
        }}
      >
        <span style={{ 
          fontSize: '0.625rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.2em', 
          color: 'var(--color-on-primary)' 
        }}>
          Scroll
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '40px',
            background: 'var(--color-on-primary)'
          }}
        />
      </motion.div>
    </section>
  );
}
