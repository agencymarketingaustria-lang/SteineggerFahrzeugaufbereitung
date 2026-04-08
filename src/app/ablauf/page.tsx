import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';
import Icon from '@/components/ui/Icon';
import type { IconName } from '@/components/ui/Icon';
import { extendedProcessSteps, prepTips, extendedFaqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Ablauf',
  description: 'So läuft eine Fahrzeugaufbereitung bei Steinegger ab — von der Buchung bis zur Übergabe. In 4 einfachen Schritten zum perfekten Ergebnis.',
  openGraph: {
    title: 'Ablauf | STEINEGGER Fahrzeugaufbereitung',
    description: 'In 4 Schritten zum perfekten Ergebnis. Buchung, Empfang, Veredelung, Übergabe.',
  },
};

export default function AblaufPage() {
  return (
    <>
      {/* ═══ PAGE HEADER ═══ */}
      <header className="section" style={{ paddingTop: 'clamp(6rem, 5rem + 4vw, 8rem)', paddingBottom: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '48rem' }}>
              <span className="page-header__label" style={{ fontFamily: 'var(--font-body)' }}>Der Ablauf</span>
              <h1 className="page-header__title" style={{ fontFamily: 'var(--font-headline)' }}>In 4 Schritten zur Perfektion</h1>
              <p className="page-header__desc">
                Vom ersten Kontakt bis zur strahlenden Übergabe — transparent, unkompliziert und mit höchster Sorgfalt.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* ═══ TIMELINE ═══ */}
      <section className="section" style={{ paddingTop: 'var(--space-20)' }}>
        <div className="container">
          <div className="timeline">
            <div className="timeline__line" />
            {extendedProcessSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="timeline-step">
                  <div className={`timeline-step__dot${step.primary ? ' timeline-step__dot--active' : ''}`}>
                    {step.primary && <span className="timeline-step__dot-inner" />}
                  </div>
                  <div className="timeline-step__num">Schritt {step.num}</div>
                  <h3 className="timeline-step__title" style={{ fontFamily: 'var(--font-headline)' }}>
                    {step.title}
                  </h3>
                  <p className="timeline-step__desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PREPARATION TIPS ═══ */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-20)', maxWidth: '40rem', margin: '0 auto var(--space-20)' }}>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-6)' }}>
                Tipps zur Vorbereitung
              </h2>
              <p style={{ color: 'var(--color-on-surface-variant)' }}>
                So bereitest du dein Fahrzeug optimal auf die Aufbereitung vor.
              </p>
            </div>
          </ScrollReveal>
          <div className="prep-grid">
            {prepTips.map((tip, i) => (
              <ScrollReveal key={tip.title} delay={i * 0.08}>
                <GlassCard>
                  <div className="prep-card">
                    <div className="prep-card__icon">
                      <Icon name={tip.icon as IconName} />
                    </div>
                    <h3 className="prep-card__title" style={{ fontFamily: 'var(--font-headline)' }}>{tip.title}</h3>
                    <p className="prep-card__desc">{tip.desc}</p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '48rem' }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', textAlign: 'center', fontStyle: 'italic', marginBottom: 'var(--space-16)' }}>
              Häufige Fragen
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="faq__list">
              {extendedFaqs.map((faq, i) => (
                <details key={i} className="faq__item">
                  <summary className="faq__question" style={{ fontFamily: 'var(--font-headline)' }}>
                    {faq.question}
                    <Icon name="expand_more" className="faq__icon" />
                  </summary>
                  <p className="faq__answer">{faq.answer}</p>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section section--cta">
        <div className="container" style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', fontStyle: 'italic', marginBottom: 'var(--space-8)' }}>
              Bereit für den ersten Schritt?
            </h2>
            <p style={{ color: 'var(--color-on-surface-variant)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-12)' }}>
              Kontaktiere uns für eine kostenlose Beratung und einen Terminvorschlag.
            </p>
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
