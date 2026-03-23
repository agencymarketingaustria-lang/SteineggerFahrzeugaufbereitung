'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = !mobileOpen ? 'hidden' : '';
  };

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav__inner">
          <Link href="/">
            <Image
              src="/images/logo-transparent.png"
              alt="Steinegger Fahrzeugaufbereitung"
              width={180}
              height={50}
              className="nav__logo"
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <div className="nav__links">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav__link${pathname === l.href ? ' nav__link--active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/#kontakt" className="btn btn--primary btn--nav" style={{ display: 'none' }} data-desktop>
            Termin anfragen
          </Link>
          <button
            className={`hamburger${mobileOpen ? ' is-active' : ''}`}
            onClick={toggleMobile}
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
          >
            <span className="hamburger__line" />
            <span className="hamburger__line" />
            <span className="hamburger__line" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? ' is-open' : ''}`} role="dialog" aria-modal="true">
        <button
          className="mobile-menu__close"
          onClick={() => { setMobileOpen(false); document.body.style.overflow = ''; }}
          aria-label="Menü schließen"
        />
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="mobile-menu__link" onClick={() => { setMobileOpen(false); document.body.style.overflow = ''; }}>
            {l.label}
          </Link>
        ))}
        <Link href="/#kontakt" className="btn btn--primary" onClick={() => { setMobileOpen(false); document.body.style.overflow = ''; }} style={{ marginTop: '1rem' }}>
          Termin anfragen
        </Link>
      </div>
    </>
  );
}
