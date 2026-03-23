// Preise, Leistungen, Testimonials — Single Source of Truth

export const SITE = {
  name: 'STEINEGGER Fahrzeugaufbereitung',
  tagline: 'Fahrzeugaufbereitung mit Herz & Seele',
  address: 'Nettelkofen 4, 85567 Grafing',
  phone: '+4980921234567',
  whatsapp: '4980921234567',
  email: 'info@steinegger-aufbereitung.de',
  url: 'https://steinegger-aufbereitung.de',
  openingHours: {
    weekdays: 'Nur auf Anfrage',
    saturday: 'Termin nach Vereinbarung',
  },
  geo: { lat: 48.051087, lng: 11.942217 },
} as const;

export interface ServicePackage {
  name: string;
  description: string;
  features: string[];       // First 4 shown by default
  moreFeatures: string[];   // Remaining shown on "Alle anzeigen"
  prices: { klein: string; kombi: string; suv: string };
}

export const interiorPackages: ServicePackage[] = [
  {
    name: 'Bronze',
    description: 'Grundlegende Trockenreinigung, Cockpitpflege und Scheibenreinigung für den perfekten Alltag.',
    features: [
      'Fensterreinigung innen inkl. Spiegel',
      'Saugen aller Sitze, Böden, Kofferraum & Verkleidungen',
      'Reinigung Armaturen, Mittelkonsole & Türverkleidungen',
      'Ausblasen der Ritzen mittels Tornado-Druckluft',
    ],
    moreFeatures: [
      'Absaugen der Fußmatten',
      'Luftaustrittdüsen-Reinigung',
      'Aschenbecher säubern',
      'Lenkrad säubern',
      'Reinigung aller Displays mit Displayreiniger',
    ],
    prices: { klein: '70 €', kombi: '85 €', suv: '120 €' },
  },
  {
    name: 'Silber',
    description: 'Tiefenreinigung inklusive Polster-Sprühextraktion und Fleckenbehandlung für ein neuwertiges Gefühl.',
    features: [
      'Alles aus Bronze',
      '2-Stufen Fußmattenreinigung (Sprühextraktion)',
      'Fleckenbehandlung',
      'Sitz-Reinigung mittels Sprühextraktionsgerät',
    ],
    moreFeatures: [
      'Reinigung des Kofferraums',
      'Lenkrad-Pflege (bei Leder/Alcantara mit speziellem Reiniger + Lederpflege)',
    ],
    prices: { klein: '130 €', kombi: '190 €', suv: '240 €' },
  },
  {
    name: 'Gold',
    description: 'Das ultimative Wellness-Programm: Intensivreinigung aller Oberflächen mit Langzeitschutz.',
    features: [
      'Alles aus Silber',
      'Intensivreinigung Böden & Fußmatten (Sprühextraktion)',
      'Intensive Klimaanlagenreinigung & Desinfektion',
      'Reinigung & Pflege aller Lederflächen',
    ],
    moreFeatures: [
      'Aufkleber-/Vignetten-Entfernung im Innenraum',
    ],
    prices: { klein: '220 €', kombi: '260 €', suv: '300 €' },
  },
];

export const exteriorPackages: ServicePackage[] = [
  {
    name: 'Bronze',
    description: 'Handwäsche, Felgen, Radkästen & Reifenpflege.',
    features: [
      'Schonende Handwäsche des kompletten Fahrzeuges',
      'Felgenreinigung mit speziellem Felgenreiniger & Haarbürsten',
      'Reinigung der Radkästen',
      'Fensterreinigung außen inkl. Spiegel',
    ],
    moreFeatures: [
      'Reinigung der Reifen inkl. Pflege',
      'Insektenentfernung',
      'Reinigung der Tankdeckelmulde',
    ],
    prices: { klein: '70 €', kombi: '80 €', suv: '95 €' },
  },
  {
    name: 'Silber',
    description: 'Bronze + Kunststoffpflege, Unterboden & Detailreinigung.',
    features: [
      'Alles aus Bronze',
      'Intensive Reinigung & Pflege äußerer Kunststoffteile',
      'Unterbodenwäsche',
      'Reinigung der Einstiege & Türfalze',
    ],
    moreFeatures: [
      'Intensive Detailreinigung mittels Haarpinseln in verschiedenen Härtegraden',
    ],
    prices: { klein: '120 €', kombi: '150 €', suv: '180 €' },
  },
  {
    name: 'Gold',
    description: 'Silber + Dichtungen, Motorwäsche & Versiegelung.',
    features: [
      'Alles aus Silber',
      'Reinigung & Pflege aller Türdichtungen/Gummis',
      'Motorwäsche mit Versiegelung',
    ],
    moreFeatures: [],
    prices: { klein: '160 €', kombi: '200 €', suv: '230 €' },
  },
];

export interface Bundle {
  name: string;
  description: string;
  price: string;
  bestseller?: boolean;
  features?: string[];
}

export const bundles: Bundle[] = [
  {
    name: 'Kombi-Pflege',
    description: 'Silber Innen + Bronze Außen — der perfekte Einstieg für Neukunden.',
    price: 'ab 200 €',
    features: ['Silber Innenreinigung', 'Bronze Außenwäsche'],
  },
  {
    name: 'Rundum-Sorglos',
    description: 'Gold Innen + Silber Außen — umfassende Aufbereitung für ein „Neues Auto"-Gefühl.',
    price: 'ab 330 €',
    bestseller: true,
    features: ['Gold Innenreinigung', 'Silber Außenaufbereitung', 'Felgenreinigung'],
  },
  {
    name: 'Premium Komplett',
    description: 'Gold Innen + Gold Außen — das komplette Programm für höchste Ansprüche.',
    price: 'ab 380 €',
    features: ['Gold Innen + Außen', 'Motorwäsche'],
  },
  {
    name: 'Familien-Spezial',
    description: 'Silber Innen + Tierhaarentfernung + Klimadesinfektion. Ideal für Familien.',
    price: 'ab 210 €',
    features: ['Tiefenreinigung', 'Geruchseliminierung'],
  },
  {
    name: 'Business Express',
    description: 'Gold Komplett + Motorwäsche — perfekt für Firmenwagen und Fuhrparks.',
    price: 'ab 430 €',
    features: ['Gold Komplett', 'Motorwäsche', 'Express-Service'],
  },
];

export interface Einzelleistung {
  name: string;
  basePrice: string;       // "Ab X€" base info
  prices?: {
    klein: string;
    kombi: string;
    suv: string;
  };
  note?: string;            // e.g. "pro Sitz", "pro Stück", "pro Std."
  allPrice?: string;        // e.g. "alle Sitze: 80€"
}

export const einzelleistungen: Einzelleistung[] = [
  {
    name: 'Polsterwäsche (Sprühextraktion)',
    basePrice: 'ab 24,99 €',
    note: 'pro Sitz',
    allPrice: 'alle Sitze: 80 €',
  },
  {
    name: 'Tierhaarentfernung',
    basePrice: 'ab 40 €',
    note: 'pro Std.',
    prices: { klein: '40 €', kombi: '50 €', suv: '60 €' },
  },
  {
    name: 'Lederreinigung inkl. Pflege',
    basePrice: 'ab 35 €',
    note: 'pro Sitz',
    allPrice: 'alle Sitze: 120 €',
  },
  {
    name: 'Scheibenreinigung innen',
    basePrice: 'ab 15 €',
    prices: { klein: '15 €', kombi: '20 €', suv: '25 €' },
  },
  {
    name: 'Fußmattenreinigung (Sprühextraktion)',
    basePrice: 'ab 7,99 €',
    note: 'pro Stück',
    allPrice: 'alle Matten: 25 €',
  },
  {
    name: 'Kofferraumreinigung',
    basePrice: 'ab 24,99 €',
    prices: { klein: '24,99 €', kombi: '29,99 €', suv: '34,99 €' },
  },
  {
    name: 'Vignetten-/Aufkleber-Entfernung',
    basePrice: 'ab 4,99 €',
    note: 'pro Stück',
  },
  {
    name: 'Motorwäsche mit Konservierung',
    basePrice: 'ab 39,99 €',
    prices: { klein: '39,99 €', kombi: '44,99 €', suv: '49,99 €' },
  },
  {
    name: 'Türdichtungen/Gummis Pflege',
    basePrice: 'ab 14,99 €',
    prices: { klein: '14,99 €', kombi: '19,99 €', suv: '24,99 €' },
  },
  {
    name: 'Klimadesinfektion',
    basePrice: 'ab 34,99 €',
    note: 'pro Ausführung',
  },
];

export interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    text: 'Mein Oldtimer sah noch nie so gut aus. Die Liebe zum Detail bei Steinegger ist wirklich außergewöhnlich.',
    author: 'Hans-Georg M.',
    rating: 5,
  },
  {
    text: 'Endlich keine Flecken mehr von den Kindern auf den Rücksitzen. Professionell, freundlich und absolut sauber.',
    author: 'Sarah K.',
    rating: 5,
  },
  {
    text: 'Unkomplizierte Terminvergabe und ein Ergebnis, das meine Erwartungen bei Weitem übertroffen hat.',
    author: 'Thomas W.',
    rating: 5,
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'Wie lange dauert eine Aufbereitung?',
    answer: 'Je nach Paket zwischen 4 Stunden und 2 Werktagen. Bei einer Keramikversiegelung benötigen wir das Fahrzeug meist für 48 Stunden.',
  },
  {
    question: 'Muss ich den Termin vorab buchen?',
    answer: 'Ja, um jedem Fahrzeug die nötige Aufmerksamkeit schenken zu können, arbeiten wir ausschließlich nach Terminvereinbarung.',
  },
  {
    question: 'Bieten Sie einen Hol- und Bringservice an?',
    answer: 'Innerhalb von Grafing und Ebersberg bieten wir gegen einen kleinen Aufpreis gerne einen komfortablen Hol- und Bringservice an.',
  },
];

export const trustMetrics = [
  { value: '500+', label: 'Fahrzeuge veredelt' },
  { value: '10+ Jahre', label: 'Erfahrung' },
  { value: '100%', label: 'Zufriedene Kunden' },
  { value: 'Nettelkofen', label: 'Lokal verwurzelt' },
];

export const processSteps = [
  { num: '01', title: 'Buchung', desc: 'Einfache Online-Anfrage oder ein kurzes Telefonat.', icon: 'calendar_today', primary: true },
  { num: '02', title: 'Empfang', desc: 'Gemeinsame Begutachtung im Atelier in Nettelkofen.', icon: 'car_repair', primary: false },
  { num: '03', title: 'Veredelung', desc: 'Präzise Arbeit nach höchsten Qualitätsstandards.', icon: 'auto_fix_high', primary: false },
  { num: '04', title: 'Übergabe', desc: 'Ein strahlendes Ergebnis und Tipps zur Nachpflege.', icon: 'verified', primary: false },
];

export const SONDERFAHRZEUGE_HINWEIS = 'Motorräder, Wohnmobile, Transporter sowie Busse nach Absprache.' as const;

// ── About Page ──────────────────────────────
export const aboutValues = [
  {
    title: 'Handwerkskunst',
    desc: 'Jedes Fahrzeug wird von Hand behandelt — mit Techniken, die über Jahre perfektioniert wurden.',
    icon: 'auto_fix_high',
  },
  {
    title: 'Liebe zum Detail',
    desc: 'Wir sehen, was andere übersehen. Jede Naht, jede Ritze, jeder Quadratzentimeter zählt.',
    icon: 'visibility',
  },
  {
    title: 'Vertrauen',
    desc: 'Dein Fahrzeug ist bei uns in den besten Händen. Transparenz und Ehrlichkeit sind unser Versprechen.',
    icon: 'verified',
  },
] as const;

// ── Extended Process Steps ──────────────────
export const extendedProcessSteps = [
  {
    num: '01',
    title: 'Buchung & Beratung',
    desc: 'Kontaktiere uns per Telefon, WhatsApp oder über unsere Website. Wir besprechen gemeinsam den Zustand deines Fahrzeugs und empfehlen das passende Paket. Innerhalb von 24 Stunden erhältst du einen Terminvorschlag.',
    icon: 'calendar_today',
    primary: true,
  },
  {
    num: '02',
    title: 'Empfang & Inspektion',
    desc: 'Bei der Fahrzeugübergabe in unserem Atelier in Nettelkofen begutachten wir dein Auto gemeinsam. Wir dokumentieren den Ist-Zustand und besprechen eventuelle Sonderwünsche oder besondere Stellen, die Aufmerksamkeit benötigen.',
    icon: 'car_repair',
    primary: false,
  },
  {
    num: '03',
    title: 'Veredelung',
    desc: 'Jetzt beginnt die Verwandlung. Mit professionellen Produkten, modernsten Geräten und handwerklicher Präzision arbeiten wir Schritt für Schritt dein gewähltes Paket ab. Je nach Umfang dauert dies zwischen 4 Stunden und 2 Tagen.',
    icon: 'auto_fix_high',
    primary: false,
  },
  {
    num: '04',
    title: 'Qualitätskontrolle & Übergabe',
    desc: 'Bevor du dein Fahrzeug zurückerhältst, durchläuft es unsere strenge Qualitätskontrolle unter Speziallicht. Bei der Übergabe erhältst du persönliche Pflegetipps, damit der Glanz möglichst lange erhalten bleibt.',
    icon: 'verified',
    primary: false,
  },
] as const;

// ── Preparation Tips ────────────────────────
export const prepTips = [
  { title: 'Auto ausräumen', desc: 'Entferne bitte alle persönlichen Gegenstände aus dem Fahrzeug — Taschen, Kindersitze, Ladekabel etc.', icon: 'inventory_2' },
  { title: 'Grobe Verschmutzung melden', desc: 'Sag uns vorher Bescheid, wenn besondere Verschmutzungen vorliegen (Tierhaare, Flecken, Lack-Kratzer).', icon: 'report' },
  { title: 'Termin einplanen', desc: 'Je nach Paket kann die Aufbereitung 4 Stunden bis 2 Tage dauern. Plane den Zeitraum entsprechend ein.', icon: 'schedule' },
  { title: 'Schlüssel bereithalten', desc: 'Wir benötigen alle Fahrzeugschlüssel, um Türen, Kofferraum und ggf. Tank öffnen zu können.', icon: 'key' },
  { title: 'Tankstand beachten', desc: 'Ein halb voller Tank genügt. So können wir das Fahrzeug bei Bedarf bewegen.', icon: 'local_gas_station' },
  { title: 'Waschanlagen vermeiden', desc: 'Bitte fahre vor dem Termin nicht durch eine Waschanlage. Wir reinigen dein Auto schonend von Hand.', icon: 'block' },
] as const;

// ── Extended FAQs ───────────────────────────
export const extendedFaqs = [
  ...faqs,
  {
    question: 'Wie kann ich den Glanz nach der Aufbereitung erhalten?',
    answer: 'Wir empfehlen, das Fahrzeug regelmäßig von Hand zu waschen und auf automatische Waschanlagen zu verzichten. Bei einer Keramikversiegelung erhalten Sie von uns eine detaillierte Pflegeanleitung.',
  },
  {
    question: 'Welche Zahlungsmethoden akzeptieren Sie?',
    answer: 'Wir akzeptieren Barzahlung, EC-Karte und Überweisung. Die Bezahlung erfolgt nach der Aufbereitung bei der Fahrzeugübergabe.',
  },
  {
    question: 'Kann ich während der Aufbereitung zuschauen?',
    answer: 'Selbstverständlich! Du bist jederzeit willkommen, uns bei der Arbeit über die Schulter zu schauen. Alternativ kannst du dein Fahrzeug auch einfach abgeben und wir melden uns, wenn es fertig ist.',
  },
  {
    question: 'Gibt es Rabatte für Stammkunden?',
    answer: 'Ja, wir bieten für wiederkehrende Kunden attraktive Konditionen an. Sprich uns einfach darauf an.',
  },
] as const;

// ── Gallery Items ───────────────────────────
export const galleryItems = [
  { src: '/images/gallery-1.jpg', alt: 'Glänzender schwarzer Sportwagen', caption: 'Schwarzer Sportwagen nach Vollaufbereitung', span: 'wide' as const },
  { src: '/images/gallery-2.jpg', alt: 'Motorhaube nach Politur', caption: 'Spiegelglatte Motorhaube', span: 'tall' as const },
  { src: '/images/gallery-3.jpg', alt: 'Armaturenbrett wird gereinigt', caption: 'Innenraum-Detailarbeit', span: 'normal' as const },
  { src: '/images/gallery-4.jpg', alt: 'Sauberer weißer Innenraum', caption: 'Makelloser weißer Innenraum', span: 'normal' as const },
  { src: '/images/gallery-1.jpg', alt: 'Detailansicht Felge', caption: 'Felgenreinigung mit Präzision', span: 'normal' as const },
  { src: '/images/gallery-2.jpg', alt: 'Lackversiegelung', caption: 'Keramikversiegelung auf Hochglanz', span: 'wide' as const },
  { src: '/images/gallery-3.jpg', alt: 'Lederreinigung', caption: 'Lederpflege & -aufbereitung', span: 'normal' as const },
  { src: '/images/gallery-4.jpg', alt: 'Endergebnis', caption: 'Das Endergebnis — bereit zur Übergabe', span: 'tall' as const },
] as const;

// ── Legal Placeholder ───────────────────────
export const LEGAL = {
  ownerName: 'Kilian Steinegger',
  companyName: 'Steinegger Fahrzeugaufbereitung',
  street: '[STRASSE + HAUSNUMMER]', // ⚠️ Platzhalter
  zip: '[PLZ]', // ⚠️ Platzhalter
  city: '[ORT]', // ⚠️ Platzhalter
  phone: SITE.phone,
  email: SITE.email,
  taxId: '[STEUERNUMMER / UST-ID]', // ⚠️ Platzhalter
  registryCourt: '[REGISTERGERICHT]', // ⚠️ Platzhalter — falls Gewerbeanmeldung
  registryNumber: '[HANDELSREGISTERNUMMER]', // ⚠️ Platzhalter — falls vorhanden
} as const;

