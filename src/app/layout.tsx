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
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://steinegger-aufbereitung.de'),
  title: {
    default: 'STEINEGGER | Fahrzeugaufbereitung Nettelkofen bei Grafing',
    template: '%s | STEINEGGER Fahrzeugaufbereitung',
  },
  description: 'Professionelle Fahrzeugaufbereitung in Nettelkofen bei Grafing. Innen- und Außenaufbereitung mit Bronze, Silber & Gold Paketen. ✓ Handwäsche ✓ Politur ✓ Keramikversiegelung',
  keywords: ['Fahrzeugaufbereitung', 'Grafing', 'Nettelkofen', 'Auto aufbereiten', 'Car Detailing', 'Ebersberg', 'Lackpolitur', 'Keramikversiegelung', 'Innenreinigung'],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'STEINEGGER Fahrzeugaufbereitung',
    title: 'STEINEGGER | Fahrzeugaufbereitung Nettelkofen bei Grafing',
    description: 'Professionelle Fahrzeugveredelung mit Liebe zum Detail. Bronze, Silber & Gold Pakete für Innen- und Außenaufbereitung.',
    images: [{ url: '/images/Hero-Sektion.webp', width: 1920, height: 1080, alt: 'Steinegger Fahrzeugaufbereitung' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STEINEGGER | Fahrzeugaufbereitung Nettelkofen',
    description: 'Professionelle Fahrzeugveredelung mit Liebe zum Detail.',
    images: ['/images/Hero-Sektion.webp'],
  },
  robots: {
    index: true,
    follow: true,
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
