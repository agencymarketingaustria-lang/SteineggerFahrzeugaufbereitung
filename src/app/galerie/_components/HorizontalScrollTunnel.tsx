'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { beforeAfterGallery } from '@/lib/data';

export default function HorizontalScrollTunnel() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal translation based on scroll progress.
  // We want to support an infinite number of items. 
  // By using 85vw width and 15vw gaps, each unit effectively takes up exactly 100vw.
  // Therefore, the required translation is simply shifting by 100vw for every additional item.
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(beforeAfterGallery.length - 1) * 100}vw`]);

  return (
    <section ref={targetRef} style={{ height: `${beforeAfterGallery.length * 100 + 100}vh`, position: 'relative' }}>
      <div 
        style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          paddingTop: '4rem', // Push the content down slightly to clear the navbar
          overflow: 'hidden',
          background: 'var(--color-anthracite)',
          color: 'var(--color-on-primary)'
        }}
      >
        {/* Background decorative text / gradient */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)' }} />
        
        <motion.div 
          style={{ x, display: 'flex', gap: '15vw', paddingLeft: '7.5vw', paddingRight: '7.5vw' }}
          className="horizontal-tunnel-track"
        >
          {beforeAfterGallery.map((item, i) => (
            <div 
              key={i} 
              style={{ 
                width: '85vw', 
                flexShrink: 0, 
                display: 'grid', 
                gap: 'clamp(2rem, 5vw, 6rem)', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 25rem), 1fr))',
                alignItems: 'center',
                
                // UX Fix: Distinct visual boundaries per item
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-3xl)',
                padding: 'clamp(2rem, 5vw, 4rem)',
                position: 'relative',
              }}
            >
              {/* Massive Background Index Number to anchor the step visually */}
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '-3rem', 
                  left: '2rem', 
                  fontSize: 'clamp(6rem, 15vw, 15rem)', 
                  fontWeight: 900, 
                  color: 'transparent',
                  WebkitTextStroke: '1px var(--color-primary)',
                  opacity: 0.25,
                  pointerEvents: 'none', 
                  lineHeight: 1, 
                  fontFamily: 'var(--font-headline)',
                  zIndex: 0
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              
              <div style={{ maxWidth: '35rem', position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'var(--text-4xl)', fontFamily: 'var(--font-headline)', marginBottom: 'var(--space-4)', fontStyle: 'italic', fontWeight: 300 }}>{item.title}</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--text-lg)', lineHeight: 1.7 }}>{item.description}</p>
              </div>
              
              <div style={{ width: '100%', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-2xl)', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '100%', maxWidth: '45rem' }}>
                  <BeforeAfterSlider 
                    beforeSrc={item.beforeSrc} 
                    afterSrc={item.afterSrc} 
                    beforeAlt={`${item.title} Vorher`}
                    afterAlt={`${item.title} Nachher`}
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
