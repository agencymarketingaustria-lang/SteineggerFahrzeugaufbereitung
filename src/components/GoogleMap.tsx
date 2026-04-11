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
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d423.24068013200497!2d11.942176!3d48.0510359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dff550089fd25%3A0x3f37be32b7dea897!2sSteinegger%20Fahrzeugaufbereitung!5e1!3m2!1sde!2sde"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Standort Steinegger Fahrzeugaufbereitung — Nettelkofen 21a, 85567 Grafing bei München"
        ></iframe>
      ) : (
        <div style={{ width: '100%', height: '100%', background: 'var(--color-surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-on-surface-variant)', fontSize: 'var(--text-sm)' }}>
          Karte wird geladen…
        </div>
      )}
    </div>
  );
}
