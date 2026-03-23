import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';
import GoogleMap from '@/components/GoogleMap';
import Icon from '@/components/ui/Icon';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktiere Steinegger Fahrzeugaufbereitung in Nettelkofen bei Grafing. Telefon, WhatsApp, E-Mail — wir beraten dich gerne.',
  openGraph: {
    title: 'Kontakt | STEINEGGER Fahrzeugaufbereitung',
    description: 'Kontaktiere uns für eine kostenlose Beratung und einen Terminvorschlag.',
  },
};

export default function KontaktPage() {
  return (
    <>
      {/* ═══ PAGE HEADER ═══ */}
      <header className="section" style={{ paddingTop: 'clamp(6rem, 5rem + 4vw, 8rem)', paddingBottom: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '48rem' }}>
              <span className="page-header__label" style={{ fontFamily: 'var(--font-body)' }}>Kontakt</span>
              <h1 className="page-header__title" style={{ fontFamily: 'var(--font-headline)' }}>Lass uns über dein Auto reden</h1>
              <p className="page-header__desc">
                Ob Oldtimer, Sportwagen oder Alltagsheld — wir beraten dich gerne persönlich und finden das passende Paket für dein Fahrzeug.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* ═══ CONTACT CARDS ═══ */}
      <section className="section" style={{ paddingTop: 'var(--space-20)' }}>
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal delay={0}>
              <GlassCard>
                <a href={`tel:${SITE.phone}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }} className="contact-card">
                  <div className="contact-card__icon">
                    <Icon name="call" />
                  </div>
                  <h3 className="contact-card__title" style={{ fontFamily: 'var(--font-headline)' }}>Telefon</h3>
                  <p className="contact-card__value">
                    {SITE.phone.replace('+49', '0').replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3')}
                  </p>
                </a>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <GlassCard>
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }} className="contact-card">
                  <div className="contact-card__icon" style={{ background: '#25D366', color: '#fff' }}>
                    <Icon name="chat" />
                  </div>
                  <h3 className="contact-card__title" style={{ fontFamily: 'var(--font-headline)' }}>WhatsApp</h3>
                  <p className="contact-card__value">Nachricht senden</p>
                </a>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <GlassCard>
                <a href={`mailto:${SITE.email}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }} className="contact-card">
                  <div className="contact-card__icon">
                    <Icon name="mail" />
                  </div>
                  <h3 className="contact-card__title" style={{ fontFamily: 'var(--font-headline)' }}>E-Mail</h3>
                  <p className="contact-card__value">{SITE.email}</p>
                </a>
              </GlassCard>
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
            <table className="hours-table">
              <tbody>
                <tr>
                  <td>Montag – Freitag</td>
                  <td>{SITE.openingHours.weekdays}</td>
                </tr>
                <tr>
                  <td>Samstag</td>
                  <td>{SITE.openingHours.saturday}</td>
                </tr>
                <tr>
                  <td>Sonntag</td>
                  <td>Geschlossen</td>
                </tr>
              </tbody>
            </table>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p style={{ textAlign: 'center', marginTop: 'var(--space-8)', fontSize: 'var(--text-sm)', color: 'var(--color-on-surface-variant)', fontStyle: 'italic' }}>
              Termine nur nach Vereinbarung — so können wir jedem Fahrzeug die Aufmerksamkeit schenken, die es verdient.
            </p>
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
                Unser Atelier befindet sich in Nettelkofen bei Grafing — eingebettet in die bayerische Landschaft, nur wenige Minuten von der A99 entfernt.
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
              <MagneticButton href={`tel:${SITE.phone}`} className="btn btn--primary">
                <Icon name="call" /> Jetzt anrufen
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
