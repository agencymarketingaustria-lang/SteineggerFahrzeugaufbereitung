import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/data';

export default function Footer() {
  const formattedPhone = SITE.phone
    .replace('+49', '0')
    .replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');

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
          <h5 className="footer__heading">Kontakt</h5>
          <ul className="footer__list">
            <li>
              <a href={`tel:${SITE.phone}`} className="footer__link">
                Tel: {formattedPhone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="footer__link">
                {SITE.email}
              </a>
            </li>
            <li style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)', opacity: 0.6 }}>
              Telefonisch erreichbar: {SITE.phoneHours}
            </li>
            <li style={{ fontSize: 'var(--text-sm)', opacity: 0.6 }}>
              {SITE.openingHours.label}
            </li>
          </ul>
        </div>
        <div>
          <h5 className="footer__heading">Navigation</h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Link href="/" className="footer__link">Startseite</Link>
            <Link href="/ueber-uns" className="footer__link">Über uns</Link>
            <Link href="/leistungen" className="footer__link">Leistungen</Link>
            <Link href="/ablauf" className="footer__link">Ablauf</Link>
            <Link href="/galerie" className="footer__link">Galerie</Link>
            <Link href="/kontakt" className="footer__link">Kontakt</Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div>© 2026 STEINEGGER Fahrzeugaufbereitung. Alle Rechte vorbehalten.</div>
        <div className="footer__legal-links">
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/impressum">Impressum</Link>
        </div>
      </div>
    </footer>
  );
}
