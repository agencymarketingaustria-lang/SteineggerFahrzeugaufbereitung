import Link from 'next/link';
import Icon from '@/components/ui/Icon';

export default function NotFound() {
  return (
    <section className="section section--vh" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '40rem', margin: '0 auto' }}>
        <div style={{ fontSize: 'var(--text-8xl, 8rem)', fontFamily: 'var(--font-headline)', fontWeight: 300, lineHeight: 1, opacity: 0.15, marginBottom: 'var(--space-4)' }}>
          404
        </div>
        <h1 style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-4xl)', fontStyle: 'italic', marginBottom: 'var(--space-8)' }}>
          Seite nicht gefunden
        </h1>
        <p style={{ color: 'var(--color-on-surface-variant)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-16)', lineHeight: 1.7 }}>
          Die gesuchte Seite existiert leider nicht oder wurde verschoben. Kein Problem — hier findest du schnell zurück:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center', marginBottom: 'var(--space-16)' }}>
          <Link href="/" className="btn btn--primary" style={{ minWidth: '16rem' }}>
            <Icon name="directions_car" /> Zur Startseite
          </Link>
          <Link href="/leistungen" className="btn btn--secondary" style={{ minWidth: '16rem' }}>
            Leistungen & Preise →
          </Link>
          <Link href="/kontakt" className="btn btn--secondary" style={{ minWidth: '16rem' }}>
            <Icon name="mail" /> Kontakt aufnehmen
          </Link>
        </div>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-on-surface-variant)', opacity: 0.6 }}>
          Du suchst etwas Bestimmtes? Ruf uns an oder schreib uns — wir helfen gerne weiter.
        </p>
      </div>
    </section>
  );
}
