import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { LEGAL } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Steinegger Fahrzeugaufbereitung gemäß §5 TMG.',
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <header className="section" style={{ paddingTop: 'clamp(6rem, 5rem + 4vw, 8rem)', paddingBottom: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '48rem' }}>
              <span className="page-header__label" style={{ fontFamily: 'var(--font-body)' }}>Rechtliches</span>
              <h1 className="page-header__title" style={{ fontFamily: 'var(--font-headline)' }}>Impressum</h1>
            </div>
          </ScrollReveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 'var(--space-12)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="legal-content">
              <h2>Angaben gemäß §5 TMG</h2>
              <address>
                {LEGAL.ownerName}<br />
                {LEGAL.companyName}<br />
                {LEGAL.street}<br />
                {LEGAL.zip} {LEGAL.city}
              </address>

              <h2>Kontakt</h2>
              <p>
                Telefon: {LEGAL.phone}<br />
                E-Mail: {LEGAL.email}
              </p>

              <h2>Umsatzsteuer-Identifikationsnummer</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                {LEGAL.taxId}
              </p>

              <h2>Verantwortlich für den Inhalt nach §55 Abs. 2 RStV</h2>
              <address>
                {LEGAL.ownerName}<br />
                {LEGAL.street}<br />
                {LEGAL.zip} {LEGAL.city}
              </address>

              <h2>Haftungsausschluss</h2>

              <h3>Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              </p>

              <h3>Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3>Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>

              <p style={{ marginTop: 'var(--space-16)', fontSize: 'var(--text-xs)', color: 'var(--color-on-surface-variant)' }}>
                Stand: März 2026
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
