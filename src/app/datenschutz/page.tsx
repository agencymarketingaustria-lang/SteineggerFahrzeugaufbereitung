import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { LEGAL, SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Steinegger Fahrzeugaufbereitung gemäß DSGVO.',
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <header className="section" style={{ paddingTop: 'clamp(6rem, 5rem + 4vw, 8rem)', paddingBottom: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '48rem' }}>
              <span className="page-header__label" style={{ fontFamily: 'var(--font-body)' }}>Rechtliches</span>
              <h1 className="page-header__title" style={{ fontFamily: 'var(--font-headline)' }}>Datenschutzerklärung</h1>
            </div>
          </ScrollReveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 'var(--space-12)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="legal-content">
              <h2>1. Verantwortlicher</h2>
              <address>
                {LEGAL.ownerName}<br />
                {LEGAL.companyName}<br />
                {LEGAL.street}<br />
                {LEGAL.zip} {LEGAL.city}<br />
                <br />
                Telefon: {LEGAL.phone}<br />
                e-mail: {LEGAL.email}
              </address>

              <h2>2. Übersicht der Verarbeitungen</h2>
              <p>
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
              </p>

              <h3>Arten der verarbeiteten Daten</h3>
              <ul>
                <li>Bestandsdaten (z.B. Namen, Adressen)</li>
                <li>Kontaktdaten (z.B. e-mail, Telefonnummern)</li>
                <li>Inhaltsdaten (z.B. Eingaben in Formularen)</li>
                <li>Nutzungsdaten (z.B. besuchte Seiten, Zugriffszeiten)</li>
                <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)</li>
              </ul>

              <h2>3. Hosting</h2>
              <p>
                Diese Website wird bei <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Beim Besuch unserer Website erfasst Vercel automatisch Zugriffslogs, die Ihre IP-Adresse, den Browsertyp, das Betriebssystem, die Referrer-URL, den Zeitstempel und die aufgerufene Seite enthalten können.
              </p>
              <p>
                Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer zuverlässigen Darstellung unserer Website.
              </p>

              <h2>4. Google Maps</h2>
              <p>
                Wir nutzen den Kartendienst Google Maps der Google Ireland Limited (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4, Irland. Beim Aufruf einer Seite mit integrierter Google-Maps-Karte wird eine Verbindung zu den Servern von Google hergestellt. Dabei kann Ihre IP-Adresse an Google übermittelt werden.
              </p>
              <p>
                Weitere Informationen zum Datenschutz bei Google finden Sie unter: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
              </p>

              <h2>5. Kontaktaufnahme</h2>
              <p>
                Wenn Sie uns per Telefon, WhatsApp oder e-mail kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt, oder auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, wenn die Anfrage zur Wahrung unserer berechtigten Interessen erforderlich ist.
              </p>

              <h2>6. Cookies</h2>
              <p>
                Diese Website verwendet technisch notwendige Cookies, um die Funktionalität der Website sicherzustellen (z.B. Cookie-Consent-Einstellung). Diese Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gesetzt.
              </p>

              <h2>7. SSL-/TLS-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>

              <h2>8. Betroffenenrechte</h2>
              <p>Sie haben das Recht:</p>
              <ul>
                <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
                <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger personenbezogener Daten zu verlangen;</li>
                <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
                <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;</li>
                <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten;</li>
                <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit zu widerrufen;</li>
                <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
              </ul>

              <h2>9. Widerspruchsrecht</h2>
              <p>
                Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung einzulegen.
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
