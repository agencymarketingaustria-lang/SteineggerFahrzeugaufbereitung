import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GoogleMap from '@/components/GoogleMap';
import Icon from '@/components/ui/Icon';
import { trustMetrics, interiorPackages, exteriorPackages, bundles, testimonials, faqs, processSteps, SITE } from '@/lib/data';
import { generateLocalBusinessSchema, generateReviewSchema, generateFAQSchema, generatePersonSchema, generateWebSiteSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export default function Home() {
  // Consolidate all schemas into a single @graph
  const schemas = [
    generateLocalBusinessSchema(),
    generateReviewSchema(testimonials),
    generateFAQSchema(faqs),
    generatePersonSchema(),
    generateWebSiteSchema(),
    generateBreadcrumbSchema([{ name: 'Startseite', url: SITE.url }]),
  ].map(({ '@context': _, ...rest }) => rest); // strip individual @context

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };

  return (
    <>
      {/* JSON-LD — consolidated @graph */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero__bg">
          <video
            className="hero__video"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/Hero-Sektion.webp"
            preload="none"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <Image src="/images/Hero-Sektion.webp" alt="Professionelle Fahrzeugaufbereitung von Steinegger in Nettelkofen bei Grafing" fill className="hero__img hero__img--fallback" priority sizes="100vw" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <ScrollReveal>
            <h1 className="hero__label" style={{ fontFamily: 'var(--font-body)', fontWeight: 'inherit', margin: 0 }}>Fahrzeugaufbereitung in Grafing</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="hero__title" style={{ fontFamily: 'var(--font-headline)' }}>
              Dein Auto verdient <span className="hero__accent">mehr.</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="hero__desc">
              Professionelle Fahrzeugveredelung mit Liebe zum Detail und handwerklicher Präzision in Nettelkofen bei Grafing.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="hero__actions">
              <Link href="/kontakt" className="btn btn--primary">Termin anfragen</Link>
              <Link href="/ueber-uns" className="btn btn--secondary">Unsere Expertise</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ TRUST METRICS ═══ */}
      <section className="section section--alt">
        <div className="container trust-grid">
          {trustMetrics.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="trust-item">
                <div className="trust-item__value" style={{ fontFamily: 'var(--font-headline)' }}>
                  <AnimatedCounter value={m.value} />
                </div>
                <div className="trust-item__label">{m.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ BRAND STORY ═══ */}
      <section className="section section--brand-story" id="ueber-uns">
        <div className="brand-story-mobile-bg">
          <Image src="/images/brand-story-v2.png" alt="Steinegger Fahrzeugaufbereitung — Professionelle Fahrzeugpflege" fill className="brand-story-mobile-bg__img" sizes="100vw" quality={60} priority />
          <div className="brand-story-mobile-bg__overlay" />
        </div>
        <div className="container brand-story">
          <ScrollReveal direction="left" className="brand-story__img-col">
            <div className="brand-story__img-wrap">
              <div className="brand-story__img-bg" />
              <Image src="/images/brand-story-v2.png" alt="Steinegger Fahrzeugaufbereitung — Professionelle Fahrzeugpflege in Nettelkofen" width={600} height={750} className="brand-story__img" sizes="(max-width: 768px) 100vw, 50vw" quality={75} />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" className="brand-story__content-col">
            <div>
              <span className="hero__label" style={{ fontFamily: 'var(--font-body)', display: 'block', marginBottom: 'var(--space-6)' }}>Dein Fahrzeugaufbereiter des Vertrauens</span>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-8)' }}>Kein Fließband. Keine Kompromisse.</h2>
              <div className="brand-story__text">
                <p>Hinter Steinegger steckt keine große Firma — sondern ein Mensch, der für Fahrzeugpflege brennt. Jedes Auto, das meine Halle in <Link href="/kontakt" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '0.2em', textDecorationColor: 'rgba(226,190,186,0.4)' }}>Nettelkofen</Link> betritt, bekommt die volle Aufmerksamkeit. Kein Zeitdruck, keine Abfertigung, sondern ehrliche <Link href="/ueber-uns" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '0.2em', textDecorationColor: 'rgba(226,190,186,0.4)' }}>Handwerksarbeit</Link> mit Leidenschaft.</p>
                <p>Du gibst mir dein Auto — und bekommst es so zurück, wie du es dir immer gewünscht hast. Jeder Kunde wird persönlich betreut, jedes Ergebnis ist mein Aushängeschild. Qualität, die man sieht und fühlt — immer.</p>
              </div>
              <div style={{ marginTop: 'var(--space-12)' }}>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-2xl)', fontStyle: 'italic' }}>&ldquo;Dein Auto verdient jemanden, dem es genauso wichtig ist wie dir.&rdquo;</div>
                <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>— Kilian Steinegger</div>
              </div>
              <div style={{ marginTop: 'var(--space-12)' }}>
                <Link href="/ueber-uns" className="btn btn--secondary">Mehr über uns erfahren →</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section section--alt" id="leistungen">
        <div className="container">
          <ScrollReveal>
            <div style={{ marginBottom: 'var(--space-20)' }}>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-4)' }}>Exzellenz in jedem Bereich</h2>
              <p style={{ color: 'var(--color-on-surface-variant)', letterSpacing: '0.03em' }}>Wählen Sie das Niveau der Pflege, das Ihr Fahrzeug verdient.</p>
            </div>
          </ScrollReveal>
          <div className="services-paired-grid">
            {/* Column headers (desktop only) */}
            <div className="services-paired-grid__header">
              <h3 className="services-cat__title" style={{ fontFamily: 'var(--font-headline)' }}>Innenraum Veredelung</h3>
            </div>
            <div className="services-paired-grid__header">
              <h3 className="services-cat__title" style={{ fontFamily: 'var(--font-headline)' }}>Exterieur Veredelung</h3>
            </div>
            {/* Mobile category heading for interior */}
            <div className="services-paired-grid__mobile-heading services-paired-grid__interior">
              <h3 className="services-cat__title" style={{ fontFamily: 'var(--font-headline)' }}>Innenraum Veredelung</h3>
            </div>
            {/* Interior packages */}
            {interiorPackages.map((intPkg, i) => (
              <ScrollReveal key={`int-${intPkg.name}`} delay={i * 0.1} className="services-paired-grid__interior">
                <div className={`card${i === 1 ? ' card--highlighted' : ''}`}>
                  <div className="card__header">
                    <h4 className="card__title" style={{ fontFamily: 'var(--font-headline)' }}>{intPkg.name}</h4>
                    <span className="card__price">ab {intPkg.prices.klein}</span>
                  </div>
                  <p className="card__desc">{intPkg.description}</p>
                </div>
              </ScrollReveal>
            ))}
            {/* Mobile category heading for exterior */}
            <div className="services-paired-grid__mobile-heading services-paired-grid__exterior">
              <h3 className="services-cat__title" style={{ fontFamily: 'var(--font-headline)' }}>Exterieur Veredelung</h3>
            </div>
            {/* Exterior packages */}
            {exteriorPackages.map((extPkg, i) => (
              <ScrollReveal key={`ext-${extPkg.name}`} delay={i * 0.1 + 0.05} className="services-paired-grid__exterior">
                <div className={`card${i === 1 ? ' card--highlighted' : ''}`}>
                  <div className="card__header">
                    <h4 className="card__title" style={{ fontFamily: 'var(--font-headline)' }}>{extPkg.name}</h4>
                    <span className="card__price">ab {extPkg.prices.klein}</span>
                  </div>
                  <p className="card__desc">{extPkg.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
              <Link href="/leistungen" className="btn btn--secondary" style={{ whiteSpace: 'normal' }}>Alle Leistungen &amp; Preise ansehen →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="section section--vh" id="ablauf">
        <div className="container">
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-5xl)', textAlign: 'center', marginBottom: 'var(--space-20)' }}>Der Weg zur Perfektion</h2>
          </ScrollReveal>
          <div className="process-grid">
            <div className="process-line" />
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.15}>
                <div className="process-step">
                  <div className={`process-step__icon process-step__icon--${step.primary ? 'primary' : 'neutral'}`}>
                    <Icon name={step.icon as import('@/components/ui/Icon').IconName} />
                  </div>
                  <h3 className="process-step__title" style={{ fontFamily: 'var(--font-headline)' }}>{step.num}. {step.title}</h3>
                  <p className="process-step__desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
              <Link href="/ablauf" className="btn btn--secondary">Ablauf im Detail ansehen →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ BUNDLES / PRICING ═══ */}
      <section className="section--dark-pricing">
        <div className="pricing-deco" />
        <div className="pricing-deco-2" />
        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-20)', maxWidth: '40rem', margin: '0 auto var(--space-20)' }}>
              <span className="badge--ghost badge" style={{ marginBottom: 'var(--space-6)', display: 'inline-block' }}>Unsere Pakete</span>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-6)' }}>Wähle dein Paket</h2>
              <p style={{ opacity: 0.6, fontSize: 'var(--text-lg)' }}>Drei Pakete, ein Ziel: dein Auto im besten Zustand. Alle Preise gelten für Kleinwagen — bei größeren Fahrzeugen beraten wir dich gerne.</p>
            </div>
          </ScrollReveal>
          <div className="bundle-grid">
            {/* Kombi-Pflege — Entry Level */}
            <ScrollReveal delay={0.05}>
              <div className="bundle-glass" style={{ height: '100%' }}>
                <h4 className="bundle-glass__title" style={{ fontFamily: 'var(--font-headline)' }}>{bundles[0].name}</h4>
                <p className="bundle-glass__subtitle">{bundles[0].description}</p>
                <div className="bundle-glass__price">{bundles[0].price}</div>
                <div className="bundle-glass__price-note">Kleinwagen · ink. MwSt.</div>
                <div className="bundle-glass__divider" />
                <ul className="bundle-glass__list">
                  {bundles[0].features?.map((f) => (
                    <li key={f}><Icon name="check_circle" className="check-icon" /> {f}</li>
                  ))}
                </ul>
                <div className="bundle-glass__cta">
                  <Link href="/kontakt" className="btn btn--outline btn--full" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}>Anfragen</Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Rundum-Sorglos — Bestseller / Center */}
            <ScrollReveal delay={0.15}>
              <div className="bundle-featured" style={{ height: '100%' }}>
                <div className="badge" style={{ marginBottom: 'var(--space-6)' }}>Beliebteste Wahl</div>
                <h4 className="bundle-glass__title" style={{ fontFamily: 'var(--font-headline)' }}>{bundles[1].name}</h4>
                <p className="bundle-glass__subtitle">{bundles[1].description}</p>
                <div className="bundle-glass__price">{bundles[1].price}</div>
                <div className="bundle-glass__price-note">Kleinwagen · ink. MwSt.</div>
                <div className="bundle-glass__divider" />
                <ul className="bundle-glass__list">
                  {bundles[1].features?.map((f) => (
                    <li key={f}><Icon name="check_circle" className="check-icon" /> {f}</li>
                  ))}
                </ul>
                <div className="bundle-glass__cta">
                  <Link href="/kontakt" className="btn btn--primary btn--full">Jetzt buchen</Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Premium Komplett — High-End */}
            <ScrollReveal delay={0.25}>
              <div className="bundle-glass" style={{ height: '100%' }}>
                <h4 className="bundle-glass__title" style={{ fontFamily: 'var(--font-headline)' }}>{bundles[2].name}</h4>
                <p className="bundle-glass__subtitle">{bundles[2].description}</p>
                <div className="bundle-glass__price">{bundles[2].price}</div>
                <div className="bundle-glass__price-note">Kleinwagen · ink. MwSt.</div>
                <div className="bundle-glass__divider" />
                <ul className="bundle-glass__list">
                  {bundles[2].features?.map((f) => (
                    <li key={f}><Icon name="check_circle" className="check-icon" /> {f}</li>
                  ))}
                </ul>
                <div className="bundle-glass__cta">
                  <Link href="/kontakt" className="btn btn--outline btn--full" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}>Anfragen</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
              <Link href="/leistungen" className="btn btn--secondary" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>Alle Leistungen &amp; Einzelpreise ansehen →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section section--vh">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-20)' }}>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-5xl)', fontStyle: 'italic' }}>Was unsere Kunden sagen</h2>
            </div>
          </ScrollReveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="testimonial">
                  <div className="testimonial__stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Icon key={j} name="star" className="filled" />
                    ))}
                  </div>
                  <p className="testimonial__text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial__author">— {t.author}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="section section--alt" id="galerie">
        <div className="container--wide" style={{ margin: '0 auto', padding: '0 var(--section-px)' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-16)' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-5xl)', fontStyle: 'italic', marginBottom: 'var(--space-4)' }}>Impressionen unserer Arbeit</h2>
                <p style={{ color: 'var(--color-on-surface-variant)' }}>Ein Einblick in unsere Halle in Nettelkofen.</p>
              </div>
            </div>
          </ScrollReveal>
          <div className="gallery-grid">
            {[
              { src: '/images/detailing_polisher.webp', alt: 'Professionelle Exzenter-Poliermaschine für Lackaufbereitung – Steinegger Grafing', cls: '' },
              { src: '/images/detailing_products.webp', alt: 'Premium Pflegeprodukte und Keramikversiegelungen im Steinegger Atelier', cls: ' gallery-grid__img--offset' },
              { src: '/images/detailing_steam.webp', alt: 'Dampfreinigung von Ledersitzen – schonende Tiefenreinigung bei Steinegger', cls: '' },
              { src: '/images/detailing_brushes.webp', alt: 'Organisierte Detailing-Pinsel und Schwämme für die Fahrzeugaufbereitung', cls: ' gallery-grid__img--offset' },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Image src={img.src} alt={img.alt} width={400} height={i % 2 === 0 ? 400 : 533} className={`gallery-grid__img${img.cls}`} style={{ aspectRatio: i % 2 === 0 ? '1' : '3/4' }} sizes="(max-width: 768px) 50vw, 25vw" quality={75} loading="lazy" />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-20)' }}>
              <Link href="/galerie" className="btn btn--secondary">Alle Impressionen ansehen →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '48rem' }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', textAlign: 'center', fontStyle: 'italic', marginBottom: 'var(--space-16)' }}>Fragen zur Halle</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="faq__list">
              {faqs.map((faq, i) => (
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

      {/* ═══ VALUE PROPOSITION — Psychologische Kaufanreize ═══ */}
      <section className="section section--alt" style={{ borderTop: '1px solid rgba(226,190,186,0.08)' }}>
        <div className="container" style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-20)' }}>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-6)' }}>
                Mehr als nur Optik. <br /><span className="hero__accent" style={{ fontStyle: 'italic' }}>Es ist eine Investition.</span>
              </h2>
              <p style={{ color: 'var(--color-on-surface-variant)', fontSize: 'var(--text-lg)', maxWidth: '40rem', margin: '0 auto' }}>
                Professionelle Fahrzeugpflege ist kein Luxus — sie ist die klügste Entscheidung für den Werterhalt deines Autos und deinen Seelenfrieden.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="val-bento-grid">
            {/* Card 1: Leasing - Large */}
            <ScrollReveal className="val-card val-card--large">
              <Image src="/images/value_leasing.webp" alt="Leasingrückgabe — professionelle Fahrzeugaufbereitung vor der Inspektion spart Kosten" fill className="val-card__bg" sizes="(max-width: 1024px) 100vw, 72rem" quality={85} />
              <div className="val-card__overlay" />
              <div className="val-card__content">
                <div className="val-card__header">
                  <span className="val-card__tag">Der Leasing-Rückläufer</span>
                  <h3 className="val-card__title">Sichere Rückgabe ohne <br />böse Überraschungen</h3>
                </div>
                <p className="val-card__desc">
                  Eine professionelle Aufbereitung vor der Leasingrückgabe bewahrt dich nachweislich vor überzogenen Nachforderungen. Wir holen den optischen Werkszustand zurück, bevor der Prüfer überhaupt das Klemmbrett zückt.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2: Wert-Erhalt - Medium */}
            <ScrollReveal className="val-card val-card--medium" delay={0.1}>
              <Image src="/images/value_retention.webp" alt="Wasserabperleffekt nach Keramikversiegelung — Werterhalt durch Steinegger Fahrzeugaufbereitung" fill className="val-card__bg" sizes="(max-width: 1024px) 100vw, 36rem" quality={85} />
              <div className="val-card__overlay" />
              <div className="val-card__content">
                <div className="val-card__header">
                  <span className="val-card__tag">Premium Werterhalt</span>
                  <h3 className="val-card__title">Rendite in Blech</h3>
                </div>
                <p className="val-card__desc">
                  Der erste Eindruck entscheidet über tausende Euro. Ein Fahrzeug mit tiefglänzendem Lack und gepflegtem Interieur erzielt auf dem Gebrauchtwagenmarkt signifikant höhere Preise.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3: Neuwagen-Gefühl - Medium */}
            <ScrollReveal className="val-card val-card--medium" delay={0.2}>
              <Image src="/images/value_emotion.webp" alt="Makelloses mattes Lederlenkrad nach Innenraumaufbereitung — Neuwagen-Gefühl" fill className="val-card__bg" sizes="(max-width: 1024px) 100vw, 36rem" quality={85} />
              <div className="val-card__overlay" />
              <div className="val-card__content">
                <div className="val-card__header">
                  <span className="val-card__tag">Das Erlebnis</span>
                  <h3 className="val-card__title">Echtes Neuwagen-Gefühl</h3>
                </div>
                <p className="val-card__desc">
                  Genieße den unnachahmlichen Duft nach reinem, werksfrischem Interieur. Jedes Mal, wenn du hinter das griffige, makellos matte Lederlenkrad greifst, wird jede Heimfahrt wieder zum Genuss.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT CTA ═══ */}
      <section className="section section--cta section--vh" id="kontakt">
        <div className="container cta-section" style={{ maxWidth: '56rem' }}>
          <ScrollReveal>
            <h2 className="cta-section__title" style={{ fontFamily: 'var(--font-headline)' }}>Lass uns über dein Auto reden</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="cta-section__desc">Ob Oldtimer, Sportwagen oder Alltagsheld – wir beraten dich gerne persönlich in Nettelkofen.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="cta-section__actions">
              <Link href="/kontakt" className="btn btn--primary">
                <Icon name="mail" />
                Kontakt aufnehmen
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <GoogleMap />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
