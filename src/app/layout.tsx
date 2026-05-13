import type { Metadata } from 'next';
import { Newsreader, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';
import SmoothScroll from '@/components/ui/SmoothScroll';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'optional',
  style: ['normal', 'italic'],
  weight: ['300', '400', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'optional',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://steinegger-fahrzeugaufbereitung.de'),
  title: {
    default: 'Fahrzeugaufbereitung Grafing ▸ Innen & Außen ab 70 € | STEINEGGER',
    template: '%s | STEINEGGER Fahrzeugaufbereitung Grafing',
  },
  description: 'Professionelle Fahrzeugaufbereitung in Grafing & Ebersberg ✓ Handwäsche ✓ Innenreinigung ✓ Politur & Versiegelung ► Bronze, Silber & Gold Pakete ab 70 € ► Jetzt Termin anfragen!',
  keywords: [
    'Fahrzeugaufbereitung', 'Fahrzeugaufbereitung Grafing', 'Auto aufbereiten Grafing',
    'Autoaufbereitung Ebersberg', 'Car Detailing Grafing', 'Autopflege Grafing',
    'Fahrzeugpflege Nettelkofen', 'Auto Innenreinigung', 'Polsterreinigung Auto',
    'Lackpolitur', 'Fahrzeugveredelung', 'Kirchseeon', 'Poing', 'Markt Schwaben',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'STEINEGGER Fahrzeugaufbereitung',
    title: 'Fahrzeugaufbereitung Grafing ▸ Innen & Außen ab 70 € | STEINEGGER',
    description: 'Professionelle Fahrzeugveredelung mit Liebe zum Detail in Nettelkofen bei Grafing. Bronze, Silber & Gold Pakete für Innen- und Außenaufbereitung ab 70 €.',
    images: [{ url: '/images/Hero-Sektion.webp', width: 1920, height: 1080, alt: 'STEINEGGER Fahrzeugaufbereitung – Professionelle Fahrzeugveredelung in Grafing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahrzeugaufbereitung Grafing ▸ Innen & Außen ab 70 € | STEINEGGER',
    description: 'Professionelle Fahrzeugveredelung mit Liebe zum Detail. Bronze, Silber & Gold Pakete ab 70 €.',
    images: ['/images/Hero-Sektion.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://steinegger-fahrzeugaufbereitung.de',
  },
  other: {
    'geo.region': 'DE-BY',
    'geo.placename': 'Grafing bei München',
    'geo.position': '48.051087;11.942217',
    'ICBM': '48.051087, 11.942217',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${newsreader.variable} ${manrope.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
        <SmoothScroll>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
