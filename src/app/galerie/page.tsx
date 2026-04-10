import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlassCard from '@/components/ui/GlassCard';
import MagneticButton from '@/components/ui/MagneticButton';
import Icon from '@/components/ui/Icon';
import HorizontalScrollTunnel from './_components/HorizontalScrollTunnel';
import AsymmetricGallery from './_components/AsymmetricGallery';
import GalleryHero from './_components/GalleryHero';
import { testimonials, SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Impressionen unserer Arbeit — Vorher-Nachher-Bilder und Einblicke in unser Atelier in Nettelkofen bei Grafing.',
  openGraph: {
    title: 'Galerie | STEINEGGER Fahrzeugaufbereitung',
    description: 'Einblicke in unser Atelier — Fahrzeugveredelung auf höchstem Niveau.',
  },
};

export default function GaleriePage() {
  return (
    <>
      {/* ═══ CINEMATIC HERO ═══ */}
      <GalleryHero />

      {/* ═══ BEFORE / AFTER TUNNEL ═══ */}
      <HorizontalScrollTunnel />

      {/* ═══ ASYMMETRIC GALLERY (ATELIER IMPRESSIONEN) ═══ */}
      <section className="section" style={{ paddingTop: 'var(--space-32)', paddingBottom: 'var(--space-32)' }}>
        <div className="container container--wide">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-20)' }}>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', fontStyle: 'italic', maxWidth: '40rem', margin: '0 auto' }}>
                Perfektion bis in die letzte Ritze
              </h2>
              <p style={{ color: 'var(--color-on-surface-variant)', marginTop: 'var(--space-4)' }}>Einblicke in unser Atelier in Nettelkofen.</p>
            </div>
          </ScrollReveal>
          <AsymmetricGallery />
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section section--alt">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-20)' }}>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', fontStyle: 'italic' }}>
                Was unsere Kunden sagen
              </h2>
            </div>
          </ScrollReveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <GlassCard>
                  <div className="testimonial" style={{ background: 'transparent', padding: 0 }}>
                    <div className="testimonial__stars">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Icon key={j} name="star" className="filled" />
                      ))}
                    </div>
                    <p className="testimonial__text">&ldquo;{t.text}&rdquo;</p>
                    <div className="testimonial__author">— {t.author}</div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', fontStyle: 'italic', marginBottom: 'var(--space-8)' }}>
              Dein Auto könnte das nächste sein
            </h2>
            <p style={{ color: 'var(--color-on-surface-variant)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-12)' }}>
              Lass uns zeigen, was in deinem Fahrzeug steckt.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', justifyContent: 'center' }}>
              <MagneticButton href="/kontakt" className="btn btn--primary">
                <Icon name="chat" /> Termin anfragen
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
