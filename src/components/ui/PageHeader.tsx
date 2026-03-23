import ScrollReveal from '@/components/ui/ScrollReveal';

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <header className="section" style={{ paddingTop: 'clamp(6rem, 5rem + 4vw, 8rem)', paddingBottom: 0 }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ maxWidth: '48rem' }}>
            <span className="page-header__label" style={{ fontFamily: 'var(--font-body)' }}>{label}</span>
            <h1 className="page-header__title" style={{ fontFamily: 'var(--font-headline)' }}>{title}</h1>
            <p className="page-header__desc">{description}</p>
          </div>
        </ScrollReveal>
      </div>
    </header>
  );
}
