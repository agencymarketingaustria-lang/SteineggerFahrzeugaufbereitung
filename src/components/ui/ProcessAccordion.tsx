'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import type { IconName } from '@/components/ui/Icon';

/* ── Types ── */
interface ProcessStep {
  readonly num: string;
  readonly title: string;
  readonly desc: string;
  readonly icon: string;
  readonly primary?: boolean;
}

const STEP_IMAGES = [
  '/images/ablauf-01.png',
  '/images/ablauf-02.png',
  '/images/ablauf-03.png',
  '/images/ablauf-04.png',
];

/* ── Main Component ── */
export default function ProcessAccordion({
  steps,
}: {
  steps: readonly ProcessStep[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rows = Array.from(
      container.querySelectorAll<HTMLElement>('.process-accordion__row'),
    );
    let rafId = 0;
    let activeRow: HTMLElement | null = null;

    const update = () => {
      const vh = window.innerHeight;
      const center = vh / 2;
      let closest: HTMLElement | null = null;
      let minDist = Infinity;

      for (const row of rows) {
        const rect = row.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;
        const dist = Math.abs(rowCenter - center);
        if (dist < minDist) {
          minDist = dist;
          closest = row;
        }
      }

      // Only activate if section is reasonably near viewport center
      const next = minDist < vh * 0.45 ? closest : null;

      if (next !== activeRow) {
        activeRow?.classList.remove('is-active');
        next?.classList.add('is-active');
        activeRow = next;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    // Initial evaluation + listen for scroll
    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="process-accordion">
      {steps.map((step, i) => (
        <div key={step.num} className="process-accordion__row">
          {/* ── Background image (desktop) ── */}
          <div className="process-accordion__bg" aria-hidden="true">
            <Image
              src={STEP_IMAGES[i]}
              alt=""
              fill
              sizes="100vw"
              priority
              className="process-accordion__bg-img"
            />
            <div className="process-accordion__bg-overlay" />
          </div>

          {/* ── Content grid ── */}
          <div className="process-accordion__content">
            <span className="process-accordion__num">{step.num}</span>

            <div className="process-accordion__meta">
              <div className="process-accordion__icon">
                <Icon name={step.icon as IconName} />
              </div>
              <h3 className="process-accordion__title">{step.title}</h3>
            </div>

            <p className="process-accordion__desc">{step.desc}</p>

            <div className="process-accordion__arrow" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </div>
          </div>

          {/* ── Mobile image (visible on mobile only via CSS) ── */}
          <div className="process-accordion__mobile-img">
            <Image
              src={STEP_IMAGES[i]}
              alt={step.title}
              width={800}
              height={400}
              sizes="(max-width: 767px) 100vw, 0px"
              className="process-accordion__mobile-img-el"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
