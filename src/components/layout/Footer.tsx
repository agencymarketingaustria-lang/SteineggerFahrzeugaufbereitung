import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <Image
            src="/images/logo-transparent.png"
            alt="Steinegger Fahrzeugaufbereitung"
            width={200}
            height={80}
            className="footer__logo"
            style={{ objectFit: 'contain' }}
          />
          <p className="footer__brand-desc">
            Fahrzeugaufbereitung mit Herz &amp; Seele.<br />
            {SITE.address}
          </p>
        </div>
        <div>
          <h5 className="footer__heading">Öffnungszeiten</h5>
          <ul className="footer__list">
            <li>{SITE.openingHours.weekdays}</li>
            <li>{SITE.openingHours.saturday}</li>
          </ul>
        </div>
        <div>
          <h5 className="footer__heading">Navigation</h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Link href="/" className="footer__link">Startseite</Link>
            <Link href="/leistungen" className="footer__link">Leistungen</Link>
            <Link href="/#kontakt" className="footer__link">Kontakt</Link>
          </div>
        </div>
        <div>
          <h5 className="footer__heading">Social Media</h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <a href="#" className="footer__link" aria-label="Instagram">Instagram</a>
            <a href="#" className="footer__link" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div>© 2026 STEINEGGER Fahrzeugaufbereitung. Alle Rechte vorbehalten.</div>
        <div className="footer__legal-links">
          <Link href="#">Datenschutz</Link>
          <Link href="#">Impressum</Link>
        </div>
      </div>
    </footer>
  );
}
