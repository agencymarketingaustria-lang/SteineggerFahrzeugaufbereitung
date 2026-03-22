'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COOKIE_KEY = 'steinegger-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay for smoother UX
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="cookie-banner__inner">
            <p className="cookie-banner__text">
              Wir verwenden Cookies, um dir die bestmögliche Erfahrung auf unserer Website zu bieten.
              Durch die weitere Nutzung stimmst du unserer{' '}
              <a href="/datenschutz" style={{ textDecoration: 'underline' }}>Datenschutzerklärung</a> zu.
            </p>
            <div className="cookie-banner__actions">
              <button className="cookie-btn cookie-btn--decline" onClick={decline}>
                Nur notwendige
              </button>
              <button className="cookie-btn cookie-btn--accept" onClick={accept}>
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
