'use client';

import { useRef, useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: string; // e.g. "500+", "100%", "10+ Jahre"
  className?: string;
}

export default function AnimatedCounter({ value, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const match = value.match(/^(\d+)/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = value.slice(match[1].length);
    const duration = 1500;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.round(progress * target);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [visible, value]);

  return (
    <span
      ref={ref}
      className={`sr sr--up ${visible ? 'sr--visible' : ''} ${className}`}
    >
      {display}
    </span>
  );
}
