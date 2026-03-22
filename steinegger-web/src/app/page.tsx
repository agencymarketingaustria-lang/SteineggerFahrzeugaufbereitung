import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GoogleMap from '@/components/GoogleMap';
import { trustMetrics, interiorPackages, exteriorPackages, bundles, testimonials, faqs, processSteps, SITE } from '@/lib/data';
import { generateLocalBusinessSchema, generateReviewSchema } from '@/lib/structured-data';

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const reviewSchema = generateReviewSchema(testimonials);

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero__bg">
          <Image src="/images/Hero-Sektion.webp" alt="Professionelle Fahrzeugaufbereitung von Steinegger" fill className="hero__img" priority sizes="100vw" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <ScrollReveal>
            <span className="hero__label" style={{ fontFamily: 'var(--font-body)' }}>Willkommen im Atelier</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="hero__title" style={{ fontFamily: 'var(--font-headline)' }}>
              Dein Auto verdient mehr als eine <span className="hero__accent">Waschanlage.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="hero__desc">
              Professionelle Fahrzeugveredelung mit Liebe zum Detail und handwerklicher Präzision in Nettelkofen bei Grafing.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="hero__actions">
              <Link href="#kontakt" className="btn btn--primary">Termin anfragen</Link>
              <Link href="#ueber-uns" className="btn btn--secondary">Unsere Expertise</Link>
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
        <div className="container brand-story">
          <ScrollReveal direction="left">
            <div className="brand-story__img-wrap">
              <div className="brand-story__img-bg" />
              <Image src="/images/brand-story.jpg" alt="Detailer reinigt Ledersitz" width={600} height={750} className="brand-story__img" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div>
              <span className="hero__label" style={{ fontFamily: 'var(--font-body)', display: 'block', marginBottom: 'var(--space-6)' }}>Das Atelier Steinegger</span>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-8)' }}>Wer steckt hinter Steinegger?</h2>
              <div className="brand-story__text">
                <p>In unserem Familienbetrieb in Nettelkofen betrachten wir die Fahrzeugpflege nicht als Arbeit, sondern als eine Form der Meditation. Jede Kurve, jede Naht und jeder Quadratzentimeter Lack erhält unsere ungeteilte Aufmerksamkeit.</p>
                <p>Bayerische Handwerkskunst trifft auf modernste Techniken der Oberflächenveredelung. Wir nehmen uns die Zeit, die Ihr Fahrzeug benötigt – ganz ohne Zeitdruck, dafür mit höchster Präzision.</p>
              </div>
              <div style={{ marginTop: 'var(--space-12)' }}>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-2xl)', fontStyle: 'italic' }}>&ldquo;Qualität ist kein Zufall; sie ist das Ergebnis von Hingabe.&rdquo;</div>
                <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>— Steinegger Fahrzeugaufbereitung</div>
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
          <div className="services-grid">
            <div>
              <h3 className="services-cat__title" style={{ fontFamily: 'var(--font-headline)' }}>Innenraum Veredelung</h3>
              <div className="services-cat__cards">
                {interiorPackages.map((pkg, i) => (
                  <ScrollReveal key={pkg.name} delay={i * 0.1}>
                    <div className={`card${i === 1 ? ' card--highlighted' : ''}`}>
                      <div className="card__header">
                        <h4 className="card__title" style={{ fontFamily: 'var(--font-headline)' }}>{pkg.name}</h4>
                        <span className="card__price">ab {pkg.prices.klein}</span>
                      </div>
                      <p className="card__desc">{pkg.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <div>
              <h3 className="services-cat__title" style={{ fontFamily: 'var(--font-headline)' }}>Exterieur Veredelung</h3>
              <div className="services-cat__cards">
                {exteriorPackages.map((pkg, i) => (
                  <ScrollReveal key={pkg.name} delay={i * 0.1}>
                    <div className={`card${i === 1 ? ' card--highlighted' : ''}`}>
                      <div className="card__header">
                        <h4 className="card__title" style={{ fontFamily: 'var(--font-headline)' }}>{pkg.name}</h4>
                        <span className="card__price">ab {pkg.prices.klein}</span>
                      </div>
                      <p className="card__desc">{pkg.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
              <Link href="/leistungen" className="btn btn--secondary">Alle Leistungen &amp; Preise ansehen →</Link>
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
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <h5 className="process-step__title" style={{ fontFamily: 'var(--font-headline)' }}>{step.num}. {step.title}</h5>
                  <p className="process-step__desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                    <li key={f}><span className="material-symbols-outlined check-icon">check_circle</span> {f}</li>
                  ))}
                </ul>
                <div className="bundle-glass__cta">
                  <Link href="#kontakt" className="btn btn--outline btn--full" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}>Anfragen</Link>
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
                    <li key={f}><span className="material-symbols-outlined check-icon">check_circle</span> {f}</li>
                  ))}
                </ul>
                <div className="bundle-glass__cta">
                  <Link href="#kontakt" className="btn btn--primary btn--full">Jetzt buchen</Link>
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
                    <li key={f}><span className="material-symbols-outlined check-icon">check_circle</span> {f}</li>
                  ))}
                </ul>
                <div className="bundle-glass__cta">
                  <Link href="#kontakt" className="btn btn--outline btn--full" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}>Anfragen</Link>
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
                      <span key={j} className="material-symbols-outlined filled">star</span>
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
                <p style={{ color: 'var(--color-on-surface-variant)' }}>Ein Einblick in unser Atelier in Nettelkofen.</p>
              </div>
            </div>
          </ScrollReveal>
          <div className="gallery-grid">
            {[
              { src: '/images/gallery-1.jpg', alt: 'Glänzender schwarzer Sportwagen', cls: '' },
              { src: '/images/gallery-2.jpg', alt: 'Motorhaube nach Politur', cls: ' gallery-grid__img--offset' },
              { src: '/images/gallery-3.jpg', alt: 'Armaturenbrett wird gereinigt', cls: '' },
              { src: '/images/gallery-4.jpg', alt: 'Sauberer weißer Innenraum', cls: ' gallery-grid__img--offset' },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Image src={img.src} alt={img.alt} width={400} height={i % 2 === 0 ? 400 : 533} className={`gallery-grid__img${img.cls}`} style={{ aspectRatio: i % 2 === 0 ? '1' : '3/4' }} sizes="(max-width: 768px) 50vw, 25vw" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '48rem' }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', textAlign: 'center', fontStyle: 'italic', marginBottom: 'var(--space-16)' }}>Fragen zum Atelier</h2>
          </ScrollReveal>
          <div className="faq__list">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <details className="faq__item">
                  <summary className="faq__question" style={{ fontFamily: 'var(--font-headline)' }}>
                    {faq.question}
                    <span className="material-symbols-outlined faq__icon">expand_more</span>
                  </summary>
                  <p className="faq__answer">{faq.answer}</p>
                </details>
              </ScrollReveal>
            ))}
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
              <a href={`tel:${SITE.phone}`} className="btn btn--primary">
                <span className="material-symbols-outlined">call</span>
                Anrufen
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">chat</span>
                WhatsApp
              </a>
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
