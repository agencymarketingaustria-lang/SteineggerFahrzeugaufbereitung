import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ExpandableFeatures from '@/components/ui/ExpandableFeatures';
import Icon from '@/components/ui/Icon';
import { interiorPackages, exteriorPackages, bundles, einzelleistungen, SITE, SONDERFAHRZEUGE_HINWEIS } from '@/lib/data';
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
          <div className="leistungen-hero">
            <ScrollReveal className="leistungen-hero__text">
              <div>
                <span className="page-header__label" style={{ fontFamily: 'var(--font-body)' }}>Leistungen &amp; Preise</span>
                <h1 className="page-header__title" style={{ fontFamily: 'var(--font-headline)' }}>Unsere Leistungen & Preise im Überblick</h1>
                <p className="page-header__desc">
                  Von der Basispflege bis zur Vollveredelung — wir haben das passende Paket für dich. Handwerkskunst trifft auf modernste Technik.
                </p>
              </div>
            </ScrollReveal>
            {/* ── Rabatt-Hinweis ── */}
            <ScrollReveal delay={0.1} className="leistungen-hero__discount">
              <div className="discount-banner" style={{
                padding: 'var(--space-6) var(--space-8)',
                background: 'var(--color-surface-container)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(226,190,186,0.15)',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                  <Icon name="star" />
                  <div>
                    <p style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>
                      Kombinieren &amp; sparen
                    </p>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-on-surface-variant)', lineHeight: 1.7 }}>
                      Innen + Außen frei wählbar. <strong>5 % Kombi-Rabatt</strong> auf Bronze- &amp; Silber-Pakete — mit einem Gold-Paket sogar <strong>10 %</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
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
                  <ExpandableFeatures features={pkg.features} moreFeatures={pkg.moreFeatures} />
                  <div className="service-card__pricing">
                    <div className="service-card__size-label">KLEIN / KOMBI / SUV</div>
                    <div className="service-card__prices" style={{ fontFamily: 'var(--font-headline)' }}>ab {pkg.prices.klein} / {pkg.prices.kombi} / {pkg.prices.suv}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="sonderfahrzeuge-hint">
            <Icon name="info" />
            {SONDERFAHRZEUGE_HINWEIS}
          </div>
        </div>
      </section>

      {/* ═══ EXTERIEUR ═══ */}
      <section className="section section--alt" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="category-header">
              <h2 className="category-header__title" style={{ fontFamily: 'var(--font-headline)' }}>Exterieur-Veredelung</h2>
              <span className="category-header__subtitle">Außenpflege &amp; Schutz</span>
            </div>
          </ScrollReveal>
          <div className="services-page-grid">
            {exteriorPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1}>
                <div className="service-card">
                  <span className="service-card__label">Paket 0{i + 1}</span>
                  <h3 className="service-card__title" style={{ fontFamily: 'var(--font-headline)' }}>{pkg.name}</h3>
                  <p className="service-card__desc">{pkg.description}</p>
                  <ExpandableFeatures features={pkg.features} moreFeatures={pkg.moreFeatures} />
                  <div className="service-card__pricing">
                    <div className="service-card__size-label">KLEIN / KOMBI / SUV</div>
                    <div className="service-card__prices" style={{ fontFamily: 'var(--font-headline)' }}>ab {pkg.prices.klein} / {pkg.prices.kombi} / {pkg.prices.suv}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="sonderfahrzeuge-hint">
            <Icon name="info" />
            {SONDERFAHRZEUGE_HINWEIS}
          </div>
        </div>
      </section>

      {/* ═══ EINZELLEISTUNGEN (jetzt VOR den Kombipaketen) ═══ */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid rgba(226,190,186,0.1)', borderBottom: '1px solid rgba(226,190,186,0.1)' }}>
        <div className="container einzelleistungen">
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-4)' }}>Einzelleistungen</h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-on-surface-variant)', marginBottom: 'var(--space-12)' }}>
              Preise variieren je nach Fahrzeugklasse. Die drei Spalten beziehen sich auf Kleinwagen / Kombi &amp; Limousine / SUV &amp; Pickup.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <table className="einzelleistungen__table">
              <thead>
                <tr>
                  <th>Leistung</th>
                  <th>Grundpreis</th>
                  <th>Kleinwagen</th>
                  <th>Kombi / Limo</th>
                  <th>SUV / Pickup</th>
                </tr>
              </thead>
              <tbody>
                {einzelleistungen.map((el) => (
                  <tr key={el.name}>
                    <td>
                      {el.name}
                      {el.note && <span className="einzelleistungen__note">{el.note}</span>}
                      {el.allPrice && <span className="einzelleistungen__all-price">{el.allPrice}</span>}
                    </td>
                    <td data-label="Grundpreis">{el.basePrice}</td>
                    <td data-label="Kleinwagen">{el.prices?.klein ?? '—'}</td>
                    <td data-label="Kombi/Limo">{el.prices?.kombi ?? '—'}</td>
                    <td data-label="SUV/Pickup">{el.prices?.suv ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
          <div className="sonderfahrzeuge-hint">
            <Icon name="info" />
            {SONDERFAHRZEUGE_HINWEIS}
          </div>
        </div>
      </section>

      {/* ═══ KOMBI-PAKETE (jetzt NACH den Einzelleistungen) ═══ */}
      <section className="section section--alt">
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
                <Link href="/kontakt" className="btn btn--primary">
                  <Icon name="mail" />
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
