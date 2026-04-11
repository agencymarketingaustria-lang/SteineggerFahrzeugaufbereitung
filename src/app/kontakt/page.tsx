import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import GoogleMap from '@/components/GoogleMap';
import Icon from '@/components/ui/Icon';
import { SITE } from '@/lib/data';
import { generateContactPointSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Kontakt – Fahrzeugaufbereitung Grafing | STEINEGGER',
  description: 'Kontaktiere Steinegger Fahrzeugaufbereitung in Nettelkofen bei Grafing: Telefon, WhatsApp oder E-Mail. Jetzt kostenlos beraten lassen und Termin anfragen!',
  alternates: {
    canonical: 'https://steinegger-aufbereitung.de/kontakt',
  },
  openGraph: {
    title: 'Kontakt – Fahrzeugaufbereitung Grafing | STEINEGGER',
    description: 'Kontaktiere uns für eine kostenlose Beratung und einen Terminvorschlag.',
  },
};

export default function KontaktPage() {
  const formattedPhone = SITE.phone
    .replace('+49', '0')
    .replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');

  const contactPointSchema = generateContactPointSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Startseite', url: SITE.url },
    { name: 'Kontakt', url: `${SITE.url}/kontakt` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ═══ PAGE HEADER ═══ */}
      <header className="section" style={{ paddingTop: 'clamp(6rem, 5rem + 4vw, 8rem)', paddingBottom: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '48rem' }}>
              <h1 className="page-header__label" style={{ fontFamily: 'var(--font-body)', fontWeight: 'inherit', margin: 0 }}>Kontakt – Fahrzeugaufbereitung Grafing</h1>
              <div className="page-header__title" style={{ fontFamily: 'var(--font-headline)' }}>Lass uns über dein Auto reden</div>
              <p className="page-header__desc">
                Ob Oldtimer, Sportwagen oder Alltagsheld — wir beraten dich gerne persönlich und finden das passende <Link href="/leistungen" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '0.2em', textDecorationColor: 'rgba(226,190,186,0.4)' }}>Paket</Link> für dein Fahrzeug.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* ═══ CONTACT CARDS ═══ */}
      <section className="section" style={{ paddingTop: 'var(--space-20)' }}>
        <div className="container">
          <div className="contact-editorial">
            {/* Email */}
            <ScrollReveal delay={0}>
              <a href={`mailto:${SITE.email}`} className="contact-editorial__item">
                <span className="contact-editorial__num">01</span>
                <div className="contact-editorial__line" />
                <div className="contact-editorial__content">
                  <div className="contact-editorial__icon-wrap">
                    <Icon name="mail" />
                  </div>
                  <h2 className="contact-editorial__title">E-Mail</h2>
                  <p className="contact-editorial__value">{SITE.email}</p>
                  <span className="contact-editorial__cta">Schreiben →</span>
                </div>
              </a>
            </ScrollReveal>

            {/* Telefon */}
            <ScrollReveal delay={0.1}>
              <a href={`tel:${SITE.phone}`} className="contact-editorial__item">
                <span className="contact-editorial__num">02</span>
                <div className="contact-editorial__line" />
                <div className="contact-editorial__content">
                  <div className="contact-editorial__icon-wrap">
                    <Icon name="call" />
                  </div>
                  <h2 className="contact-editorial__title">Telefon</h2>
                  <p className="contact-editorial__value">{formattedPhone}</p>
                  <p className="contact-editorial__meta">Erreichbar: {SITE.phoneHours}</p>
                  <span className="contact-editorial__cta">Anrufen →</span>
                </div>
              </a>
            </ScrollReveal>

            {/* WhatsApp */}
            <ScrollReveal delay={0.2}>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hallo! Ich würde gerne einen Termin für eine Fahrzeugaufbereitung vereinbaren.')}`} target="_blank" rel="noopener noreferrer" className="contact-editorial__item contact-editorial__item--wa">
                <span className="contact-editorial__num">03</span>
                <div className="contact-editorial__line" />
                <div className="contact-editorial__content">
                  <div className="contact-editorial__icon-wrap contact-editorial__icon-wrap--wa">
                    <Icon name="chat" />
                  </div>
                  <h2 className="contact-editorial__title">WhatsApp</h2>
                  <p className="contact-editorial__value">Nachricht senden</p>
                  <span className="contact-editorial__cta">Chat öffnen →</span>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ ÖFFNUNGSZEITEN ═══ */}
      <section className="section section--alt">
        <div className="container" style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-3xl)', textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              Öffnungszeiten
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div style={{ textAlign: 'center', padding: 'var(--space-8) var(--space-6)', background: 'var(--color-surface-container)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(226,190,186,0.1)' }}>
              <Icon name="schedule" />
              <p style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-2xl)', marginTop: 'var(--space-4)' }}>
                {SITE.openingHours.label}
              </p>
              <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--color-on-surface-variant)', fontStyle: 'italic' }}>
                So können wir jedem Fahrzeug die Aufmerksamkeit schenken, die es verdient.
              </p>
              <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--color-on-surface-variant)' }}>
                Telefonisch erreichbar: {SITE.phoneHours}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ ANFAHRT ═══ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-6)' }}>Anfahrt</h2>
              <p style={{ color: 'var(--color-on-surface-variant)' }}>
                Unser Atelier befindet sich in Nettelkofen bei Grafing — eingebettet in die bayerische Landschaft, weniger als 1 Minute von der B304 entfernt.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-10)', flexWrap: 'wrap', marginBottom: 'var(--space-12)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Icon name="location_on" />
                <span style={{ fontSize: 'var(--text-sm)' }}>{SITE.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Icon name="directions_car" />
                <span style={{ fontSize: 'var(--text-sm)' }}>Ausreichend Parkplätze vorhanden</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <GoogleMap />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section section--cta">
        <div className="container" style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', fontStyle: 'italic', marginBottom: 'var(--space-8)' }}>
              Wir freuen uns auf dein Fahrzeug
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', justifyContent: 'center' }}>
              <MagneticButton href="/kontakt" className="btn btn--primary">
                <Icon name="mail" /> Kontakt aufnehmen
              </MagneticButton>
              <MagneticButton href="/leistungen" className="btn btn--secondary">
                Leistungen ansehen →
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
