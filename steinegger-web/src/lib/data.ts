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
    weekdays: 'Mo – Fr: 08:00 – 18:00',
    saturday: 'Sa: 09:00 – 14:00',
  },
  geo: { lat: 48.05, lng: 11.97 },
} as const;

export interface ServicePackage {
  name: string;
  description: string;
  features: string[];
  prices: { klein: string; kombi: string; suv: string };
}

export const interiorPackages: ServicePackage[] = [
  {
    name: 'Bronze',
    description: 'Grundlegende Trockenreinigung, Cockpitpflege und Scheibenreinigung für den perfekten Alltag.',
    features: ['Fensterreinigung innen', 'Saugen & Ausblasen', 'Armaturenpflege', 'Display- & Lenkradpflege'],
    prices: { klein: '70 €', kombi: '85 €', suv: '120 €' },
  },
  {
    name: 'Silber',
    description: 'Tiefenreinigung inklusive Polster-Sprühextraktion und Fleckenbehandlung für ein neuwertiges Gefühl.',
    features: ['Alles aus Bronze', '2-Stufen Fußmatten (Sprühex.)', 'Flecken- & Sitzreinigung', 'Kofferraumreinigung'],
    prices: { klein: '130 €', kombi: '190 €', suv: '240 €' },
  },
  {
    name: 'Gold',
    description: 'Das ultimative Wellness-Programm: Intensivreinigung aller Oberflächen mit Langzeitschutz.',
    features: ['Alles aus Silber', 'Intensivreinigung Böden', 'Intensive Klimadesinfektion', 'Komplette Lederpflege'],
    prices: { klein: '220 €', kombi: '260 €', suv: '300 €' },
  },
];

export const exteriorPackages: ServicePackage[] = [
  {
    name: 'Bronze',
    description: 'Handwäsche, Felgen, Radkästen & Reifenpflege.',
    features: ['Handwäsche', 'Felgenreinigung', 'Radkästen', 'Reifenpflege & Insektenentfernung'],
    prices: { klein: '70 €', kombi: '80 €', suv: '95 €' },
  },
  {
    name: 'Silber',
    description: 'Bronze + Kunststoffpflege, Unterboden & Detailreinigung.',
    features: ['Alles aus Bronze', 'Kunststoffpflege', 'Unterboden', 'Einstiege & Detailreinigung'],
    prices: { klein: '110 €', kombi: '130 €', suv: '150 €' },
  },
  {
    name: 'Gold',
    description: 'Silber + Dichtungen, Motorwäsche & Versiegelung.',
    features: ['Alles aus Silber', 'Türdichtungen-Pflege', 'Motorwäsche', 'Versiegelung'],
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
  price: string;
}

export const einzelleistungen: Einzelleistung[] = [
  { name: 'Polsterwäsche (pro Sitz)', price: 'ab 24,99 € / alle: 80 €' },
  { name: 'Lederreinigung inkl. Pflege (pro Sitz)', price: 'ab 35 € / alle: 120 €' },
  { name: 'Tierhaarentfernung', price: '40 € / 50 € / 60 €' },
  { name: 'Scheibenreinigung innen', price: '15 € / 20 € / 25 €' },
  { name: 'Fußmattenreinigung (pro Stück)', price: '7,99 € / alle: 25 €' },
  { name: 'Kofferraumreinigung', price: '24,99 € / 29,99 € / 34,99 €' },
  { name: 'Motorwäsche mit Konservierung', price: '39,99 € / 44,99 € / 49,99 €' },
  { name: 'Türdichtungen / Gummis Pflege', price: '14,99 € / 19,99 € / 24,99 €' },
  { name: 'Vignetten / Aufkleber Entfernung', price: 'ab 4,99 € / Stück' },
  { name: 'Klimadesinfektion', price: 'ab 34,99 €' },
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
