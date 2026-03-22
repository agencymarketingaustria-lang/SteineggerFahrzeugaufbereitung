import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { interiorPackages, exteriorPackages, bundles, einzelleistungen, SITE } from '@/lib/data';
import { generateServiceSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Leistungen & Preise',
  description: 'Alle Leistungen und Preise der Steinegger Fahrzeugaufbereitung. Bronze, Silber & Gold Pakete für Innen- und Außenaufbereitung. Jetzt Preise vergleichen!',
  openGraph: {
    title: 'Leistungen & Preise | STEINEGGER Fahrzeugaufbereitung',
    description: 'Bronze, Silber & Gold Pakete für professionelle Fahrzeugaufbereitung in Nettelkofen bei Grafing.',
  },
};

export default function LeistungenPage() {
  const serviceSchemas = [
    generateServiceSchema('Innenraum Bronze', 'Grundlegende Trockenreinigung und Cockpitpflege', 'ab 70 €'),
    generateServiceSchema('Innenraum Gold', 'Ultimative Intensivreinigung mit Langzeitschutz', 'ab 220 €'),
    generateServiceSchema('Exterieur Gold', 'Komplettpaket mit Motorwäsche und Versiegelung', 'ab 160 €'),
  ];

  return (
    <>
      {serviceSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* ═══ PAGE HEADER ═══ */}
      <header className="section" style={{ paddingTop: 'clamp(6rem, 5rem + 4vw, 8rem)', paddingBottom: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '48rem' }}>
              <span className="page-header__label" style={{ fontFamily: 'var(--font-body)' }}>Leistungen &amp; Preise</span>
              <h1 className="page-header__title" style={{ fontFamily: 'var(--font-headline)' }}>Unsere Leistungen</h1>
              <p className="page-header__desc">
                Von der Basispflege bis zur Vollveredelung — wir haben das passende Paket für dich. Handwerkskunst trifft auf modernste Technik.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* ═══ INNENRAUM ═══ */}
      <section className="section" style={{ paddingTop: 'var(--space-20)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="category-header">
              <h2 className="category-header__title" style={{ fontFamily: 'var(--font-headline)' }}>Innenraum-Veredelung</h2>
              <span className="category-header__subtitle">Reinigung &amp; Pflege</span>
            </div>
          </ScrollReveal>
          <div className="services-page-grid">
            {interiorPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1}>
                <div className="service-card">
                  <span className="service-card__label">Paket 0{i + 1}</span>
                  <h3 className="service-card__title" style={{ fontFamily: 'var(--font-headline)' }}>{pkg.name}</h3>
                  <p className="service-card__desc">{pkg.description}</p>
                  <ul className="service-card__features">
                    {pkg.features.map((f) => (
                      <li key={f} className="service-card__feature">
                        <span className="material-symbols-outlined">check</span> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="service-card__pricing">
                    <div className="service-card__size-label">KLEIN / KOMBI / SUV</div>
                    <div className="service-card__prices" style={{ fontFamily: 'var(--font-headline)' }}>ab {pkg.prices.klein} / {pkg.prices.kombi} / {pkg.prices.suv}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXTERIEUR ═══ */}
      <section className="section section--alt" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
        <div className="container exterior-layout">
          <ScrollReveal direction="left">
            <div>
              <h2 className="exterior-layout__title" style={{ fontFamily: 'var(--font-headline)' }}>Exterieur-<br />Veredelung</h2>
              <p className="exterior-layout__desc">Unsere Außenpflege geht über das Waschen hinaus. Wir konservieren den Glanz und schützen den Lack dauerhaft gegen Umwelteinflüsse.</p>
              <div className="exterior-layout__tiers">
                {exteriorPackages.map((pkg, i) => (
                  <div key={pkg.name} className="exterior-card">
                    <h4 className={`exterior-card__title${i === 0 ? ' exterior-card__title--primary' : ''}`} style={{ fontFamily: 'var(--font-headline)' }}>{pkg.name} Exterieur</h4>
                    <p className="exterior-card__info">{pkg.description}<br /><span className="exterior-card__price" style={{ fontFamily: 'var(--font-headline)' }}>ab {pkg.prices.klein} / {pkg.prices.kombi} / {pkg.prices.suv}</span></p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div style={{ position: 'relative' }}>
              <Image src="/images/exterior-detail.jpg" alt="Fahrzeugpolitur Nahaufnahme" width={800} height={450} className="exterior-img" sizes="(max-width: 1024px) 100vw, 66vw" />
              <div style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', display: 'none' }} className="quote-box-desktop">
                <div className="quote-box">
                  <p className="quote-box__text" style={{ fontFamily: 'var(--font-headline)' }}>&ldquo;Wir behandeln jedes Fahrzeug wie ein Unikat.&rdquo;</p>
                  <span className="quote-box__author">— Atelier Steinegger</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ KOMBI-PAKETE ═══ */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', textAlign: 'center', marginBottom: 'var(--space-16)' }}>Unsere Empfehlungen</h2>
          </ScrollReveal>
          <div className="bento-grid">
            {/* Kombi-Pflege */}
            <ScrollReveal className="bento--2">
              <div className="bundle-card" style={{ height: '100%' }}>
                <h3 className="bundle-card__title" style={{ fontFamily: 'var(--font-headline)' }}>{bundles[0].name}</h3>
                <p className="bundle-card__desc">{bundles[0].description}</p>
                <div className="bundle-card__price" style={{ color: 'var(--color-primary)' }}>{bundles[0].price}</div>
              </div>
            </ScrollReveal>
            {/* Bestseller */}
            <ScrollReveal delay={0.1} className="bento--4">
              <div className="bundle-card--bs" style={{ padding: 'clamp(1.5rem, 1rem + 2vw, 3rem)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span className="badge" style={{ background: 'rgba(251,249,244,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(251,249,244,0.2)', marginBottom: 'var(--space-6)', display: 'inline-block' }}>Bestseller</span>
                  <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-4)' }}>{bundles[1].name}</h3>
                  <p style={{ opacity: 0.8, maxWidth: '32rem', marginBottom: 'var(--space-8)', lineHeight: 1.7 }}>{bundles[1].description}</p>
                  <div style={{ fontSize: 'var(--text-4xl)', fontFamily: 'var(--font-headline)', fontStyle: 'italic' }}>{bundles[1].price}</div>
                </div>
              </div>
            </ScrollReveal>
            {/* Premium, Familien, Business */}
            {bundles.slice(2).map((b, i) => (
              <ScrollReveal key={b.name} delay={(i + 2) * 0.1} className="bento--2">
                <div className="bundle-card" style={{ height: '100%' }}>
                  <h3 className="bundle-card__title" style={{ fontFamily: 'var(--font-headline)' }}>{b.name}</h3>
                  <p className="bundle-card__desc">{b.description}</p>
                  <div className="bundle-card__price">{b.price}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EINZELLEISTUNGEN ═══ */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid rgba(226,190,186,0.1)', borderBottom: '1px solid rgba(226,190,186,0.1)' }}>
        <div className="container einzelleistungen">
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-12)' }}>Einzelleistungen</h2>
          </ScrollReveal>
          <div className="einzelleistungen__list">
            {einzelleistungen.map((el, i) => (
              <ScrollReveal key={el.name} delay={i * 0.05}>
                <div className="service-row">
                  <span className="service-row__name">{el.name}</span>
                  <span className="service-row__price" style={{ fontFamily: 'var(--font-headline)' }}>{el.price}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p style={{ marginTop: 'var(--space-12)', fontSize: 'var(--text-xs)', color: 'rgba(90,64,62,0.6)', fontStyle: 'italic' }}>
              Alle Preise sind Richtwerte und können je nach Verschmutzungsgrad variieren. Die drei Preisstufen beziehen sich auf Kleinwagen / Kombi &amp; Limousine / SUV &amp; Pickup.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="section" id="cta">
        <div className="container bottom-cta">
          <ScrollReveal>
            <h2 className="bottom-cta__title" style={{ fontFamily: 'var(--font-headline)' }}>Nicht sicher welches Paket das richtige ist?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="bottom-cta__desc">Wir beraten dich gerne persönlich und erstellen ein individuelles Angebot für dein Fahrzeug.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', justifyContent: 'center' }}>
                <a href={`tel:${SITE.phone}`} className="btn btn--secondary">
                  <span className="material-symbols-outlined">call</span>
                  Telefonisch beraten
                </a>
                <a href={`https://wa.me/${SITE.whatsapp}`} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined filled">chat_bubble</span>
                  WhatsApp Nachricht
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
