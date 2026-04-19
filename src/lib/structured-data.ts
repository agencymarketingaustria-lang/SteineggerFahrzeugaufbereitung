import { SITE } from './data';

// ── LocalBusiness (AutoRepair) — with @id ──────────────────
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    description: 'Professionelle Fahrzeugaufbereitung in Nettelkofen bei Grafing — Innen- und Außenaufbereitung, Lackpolitur.',
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nettelkofen 21a',
      addressLocality: 'Grafing bei München',
      postalCode: '85567',
      addressRegion: 'Bayern',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        description: 'Termin nach Vereinbarung',
      },
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      geoRadius: '15000',
    },
    sameAs: [
      'https://maps.app.goo.gl/TPyGwn36juxcXcyJ7',
    ],
    priceRange: '€€',
    knowsAbout: ['Fahrzeugaufbereitung', 'Lackpolitur', 'Innenraumreinigung', 'Autoaufbereitung'],
    image: `${SITE.url}/images/Hero-Sektion.webp`,
  };
}

// ── WebSite Schema ─────────────────────────────────────────
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}/#business` },
  };
}

// ── BreadcrumbList Schema ──────────────────────────────────
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ── ContactPoint Schema ────────────────────────────────────
export function generateContactPointSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      email: SITE.email,
      contactType: 'customer service',
      availableLanguage: 'German',
    },
  };
}

// ── HowTo Schema ───────────────────────────────────────────
export function generateHowToSchema(steps: readonly { num: string; title: string; desc: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Ablauf der Fahrzeugaufbereitung bei Steinegger',
    description: 'So läuft eine professionelle Fahrzeugaufbereitung ab — von der Terminanfrage bis zur strahlenden Übergabe.',
    step: steps.map((s) => ({
      '@type': 'HowToStep',
      name: s.title,
      text: s.desc,
    })),
  };
}

// ── Service Schema ─────────────────────────────────────────
export function generateServiceSchema(name: string, description: string, price: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Auto Detailing',
    name,
    description,
    provider: {
      '@type': 'AutoRepair',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
    },
    areaServed: {
      '@type': 'City',
      name: 'Grafing bei München',
    },
    offers: {
      '@type': 'Offer',
      price: price.replace(/[^0-9]/g, ''),
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: price.replace(/[^0-9]/g, ''),
        priceCurrency: 'EUR',
        description: price,
      },
    },
  };
}

// ── Review / AggregateRating Schema ────────────────────────
export function generateReviewSchema(reviews: { text: string; author: string; rating: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating.toString(),
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: r.author,
      },
      reviewBody: r.text,
    })),
  };
}

// ── Person Schema ──────────────────────────────────────────
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kilian Steinegger',
    jobTitle: 'Inhaber & Aufbereiter',
    worksFor: {
      '@type': 'AutoRepair',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
    },
    url: SITE.url,
  };
}

// ── FAQ Schema ─────────────────────────────────────────────
export function generateFAQSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
