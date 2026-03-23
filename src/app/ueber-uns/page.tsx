import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';
import GoogleMap from '@/components/GoogleMap';
import Icon from '@/components/ui/Icon';
import { aboutValues, SITE } from '@/lib/data';
import type { IconName } from '@/components/ui/Icon';

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Erfahre mehr über Kilian Steinegger und die Philosophie hinter der Fahrzeugaufbereitung in Nettelkofen bei Grafing. Handwerkskunst, Liebe zum Detail und Vertrauen.',
  openGraph: {
    title: 'Über uns | STEINEGGER Fahrzeugaufbereitung',
    description: 'Bayerische Handwerkskunst trifft auf modernste Technik. Lerne uns kennen.',
  },
};

export default function UeberUnsPage() {
  return (
    <>
      {/* ═══ PAGE HEADER ═══ */}
      <header className="section" style={{ paddingTop: 'clamp(6rem, 5rem + 4vw, 8rem)', paddingBottom: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '48rem' }}>
              <span className="page-header__label" style={{ fontFamily: 'var(--font-body)' }}>Über uns</span>
              <h1 className="page-header__title" style={{ fontFamily: 'var(--font-headline)' }}>Das Atelier Steinegger</h1>
              <p className="page-header__desc">
                Wo bayerische Handwerkskunst auf modernste Technik der Oberflächenveredelung trifft — mit Herz, Seele und einem Auge für das, was andere übersehen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* ═══ FOUNDER / STORY ═══ */}
      <section className="section" style={{ paddingTop: 'var(--space-20)' }}>
        <div className="container about-founder">
          <ScrollReveal direction="left">
            <div className="about-founder__img-wrap" style={{ boxShadow: 'var(--shadow-2xl)' }}>
              <div className="about-founder__placeholder">
                <div style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
                  <Icon name="person" />
                  <p style={{ marginTop: 'var(--space-4)', opacity: 0.6 }}>Gründer-Portrait<br />wird nachgereicht</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div>
              <span className="page-header__label" style={{ fontFamily: 'var(--font-body)', display: 'block', marginBottom: 'var(--space-6)' }}>Der Gründer</span>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-8)' }}>Kilian Steinegger</h2>
              <div className="brand-story__text">
                <p>
                  In unserem Familienbetrieb in Nettelkofen betrachten wir die Fahrzeugpflege nicht als Arbeit, sondern als eine Form der Meditation. Jede Kurve, jede Naht und jeder Quadratzentimeter Lack erhält unsere ungeteilte Aufmerksamkeit.
                </p>
                <p>
                  Bayerische Handwerkskunst trifft auf modernste Techniken der Oberflächenveredelung. Wir nehmen uns die Zeit, die Ihr Fahrzeug benötigt — ganz ohne Zeitdruck, dafür mit höchster Präzision.
                </p>
                <p>
                  Was als Leidenschaft begann, ist heute ein Atelier für Fahrzeugveredelung, das auf Qualität statt Quantität setzt. Jedes Fahrzeug wird individuell behandelt — ob Oldtimer, Sportwagen oder Alltagsheld.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', fontStyle: 'italic', lineHeight: 1.4, marginBottom: 'var(--space-6)' }}>
              &ldquo;Qualität ist kein Zufall — sie ist das Ergebnis von Hingabe, Wissen und Respekt vor dem Fahrzeug.&rdquo;
            </div>
            <div style={{ fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-on-surface-variant)' }}>
              — Kilian Steinegger
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', textAlign: 'center', marginBottom: 'var(--space-20)' }}>Unsere Werte</h2>
          </ScrollReveal>
          <div className="about-values-grid">
            {aboutValues.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <GlassCard>
                  <div className="about-value-card">
                    <div className="about-value-card__icon">
                      <Icon name={value.icon as IconName} />
                    </div>
                    <h3 className="about-value-card__title" style={{ fontFamily: 'var(--font-headline)' }}>{value.title}</h3>
                    <p className="about-value-card__desc">{value.desc}</p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STANDORT ═══ */}
      <section className="section section--alt">
        <div className="container" style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-6)' }}>Unser Standort</h2>
              <p style={{ color: 'var(--color-on-surface-variant)', fontSize: 'var(--text-lg)' }}>
                Nettelkofen bei Grafing — eingebettet in die bayerische Landschaft, nur wenige Minuten von der A99 entfernt.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-8)', flexWrap: 'wrap', marginBottom: 'var(--space-12)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Icon name="location_on" />
                <span style={{ fontSize: 'var(--text-sm)' }}>{SITE.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Icon name="schedule" />
                <span style={{ fontSize: 'var(--text-sm)' }}>Nur auf Anfrage / nach Vereinbarung</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <GoogleMap />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', fontStyle: 'italic', marginBottom: 'var(--space-8)' }}>
              Lerne uns kennen
            </h2>
            <p style={{ color: 'var(--color-on-surface-variant)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-12)' }}>
              Ob kurze Frage oder ausführliche Beratung — wir sind für dich da.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', justifyContent: 'center' }}>
              <MagneticButton href="/kontakt" className="btn btn--primary">
                <Icon name="chat" /> Kontakt aufnehmen
              </MagneticButton>
              <MagneticButton href={`tel:${SITE.phone}`} className="btn btn--secondary">
                <Icon name="call" /> Anrufen
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
