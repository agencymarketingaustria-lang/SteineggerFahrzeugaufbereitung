'use client';

import { useState, useEffect, useRef } from 'react';

export default function GoogleMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="map-container">
      {shouldLoad ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.5!2d11.97!3d48.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDAzJzAwLjAiTiAxMcKwNTgnMTIuMCJF!5e0!3m2!1sde!2sde!4v1&q=Nettelkofen+4,+85567+Grafing+bei+München"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Standort Steinegger Fahrzeugaufbereitung in Nettelkofen"
        ></iframe>
      ) : (
        <div style={{ width: '100%', height: '100%', background: 'var(--color-surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-on-surface-variant)', fontSize: 'var(--text-sm)' }}>
          Karte wird geladen…
        </div>
      )}
    </div>
  );
}
