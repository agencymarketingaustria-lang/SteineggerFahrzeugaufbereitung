import { SITE } from './data';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: SITE.name,
    description: 'Professionelle Fahrzeugaufbereitung in Nettelkofen bei Grafing — Innen- und Außenaufbereitung, Keramikversiegelung, Lackpolitur.',
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nettelkofen 4',
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
    priceRange: '€€',
    image: `${SITE.url}/images/Hero-Sektion.webp`,
    sameAs: [],
  };
}

export function generateServiceSchema(name: string, description: string, price: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Auto Detailing',
    name,
    description,
    provider: {
      '@type': 'AutoRepair',
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

export function generateReviewSchema(reviews: { text: string; author: string; rating: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
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
